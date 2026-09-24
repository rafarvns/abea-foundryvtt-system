import { FACANHAS } from "../constants/facanhas.mjs";
import { CATEGORY_MAPPING } from "../constants/category-mapping.mjs";
import { ABEA } from "../config.mjs";
import { normalizeName } from "../helpers/rules.mjs";

const { DialogV2 } = foundry.applications.api;
const { renderTemplate } = foundry.applications.handlebars;

export class FacanhaSolicitorDialog {
    static async show() {
        console.log("ABEA | FacanhaSolicitorDialog.show() called");
        let players = game.users.filter(u => !u.isGM && u.active);
        console.log("ABEA | Active players found:", players.length);

        // Fallback for testing (GM Only)
        if (players.length === 0) {
            console.warn("ABEA | Nenhum jogador encontrado. Ativando modo de teste (GM).");
            players = [game.user];
            ui.notifications.info("Nenhum jogador conectado. Façanha será solicitada para você (GM) para teste.");
        }

        // Prepare Categories
        const categories = { "custom": game.i18n.localize("ABEA.Facanha.Dialog.Custom") };
        for (const category of Object.keys(FACANHAS)) {
            const configKey = CATEGORY_MAPPING[category];
            let label = category;

            if (configKey && ABEA.skillCategories.feat[configKey]) {
                label = game.i18n.localize(ABEA.skillCategories.feat[configKey]);
            }
            categories[category] = label;
        }

        // Prepare Difficulties
        const difficulties = {
            12: "Fácil (CD 12)",
            15: "Intermediária (CD 15)",
            18: "Difícil (CD 18)",
            21: "Lendária (CD 21)"
        };

        // Prepare Skill List (Mock for now, should return array)
        const skillList = this._getSkillListOptions() || [];

        const context = {
            categories,
            players,
            difficulties,
            skillList
        };

        const content = await renderTemplate("systems/abea/templates/chat/facanha-dialog.hbs", context);
        const featImages = await this._getFeatImages();

        console.log("ABEA | Dialog content generated, opening DialogV2...");
        const result = await DialogV2.wait({
            window: { title: game.i18n.localize("ABEA.Facanha.Card.Title"), resizable: true },
            classes: ["abea", "abea-dialog", "facanha-dialog", "sheet", "item"],
            position: { width: 1000 },
            content: content,
            buttons: [{
                action: "request",
                label: "Solicitar",
                icon: "fas fa-dice",
                default: true,
                callback: (event, button) => {
                    const formElement = button.form;
                    const categoriaInput = formElement.querySelector('[name="facanha-categoria"]');
                    const categoria = categoriaInput.value;
                    let nome = "";

                    if (categoria === "custom") {
                        nome = formElement.querySelector('[name="facanha-nome"]').value;
                    } else {
                        const featInput = formElement.querySelector('[name="facanha-selecionada"]');
                        nome = featInput.value;
                    }

                    const selectElement = formElement.querySelector('[name="jogadores"]');
                    const playerIds = Array.from(selectElement.selectedOptions).map(opt => opt.value);
                    const cd = parseInt(formElement.querySelector('[name="dificuldade"]').value);

                    // Find difficulty label from the active button
                    const activeDiffBtn = formElement.querySelector(".difficulty-btn.active");
                    const dificuldadeLabel = activeDiffBtn ? activeDiffBtn.innerText.trim() : "Intermediária";

                    if (!nome || playerIds.length === 0) {
                        ui.notifications.warn("Preencha o nome/selecione a façanha e selecione ao menos um jogador.");
                        return null;
                    }

                    return {
                        nome,
                        players: playerIds.map(id => ({
                            userId: id,
                            nome: game.users.get(id).name,
                            status: "aguardando",
                            resultado: null
                        })),
                        cd,
                        dificuldadeLabel
                    };
                }
            }, {
                action: "cancel",
                label: "Cancelar",
                icon: "fas fa-times"
            }],
            render: (event, dialog) => {
                const form = dialog.element.querySelector("form");
                const categoryBtns = form.querySelectorAll(".category-btn");
                const categoryInput = form.querySelector('[name="facanha-categoria"]');
                const featGroup = form.querySelector("#facanha-select-group");
                const customGroup = form.querySelector("#facanha-custom-group");
                const featListContainer = form.querySelector("#feat-list-container");
                const featInput = form.querySelector('[name="facanha-selecionada"]');
                const selectAllBtn = form.querySelector(".select-all-players");
                const playersSelect = form.querySelector('[name="jogadores"]');
                const difficultyBtns = form.querySelectorAll(".difficulty-btn");
                const difficultyInput = form.querySelector('[name="dificuldade"]');

                // --- Player Selection Logic ---
                if (selectAllBtn && playersSelect) {
                    selectAllBtn.addEventListener("click", () => {
                        for (let i = 0; i < playersSelect.options.length; i++) {
                            playersSelect.options[i].selected = true;
                        }
                    });
                }

                // --- Difficulty Selection Logic ---
                difficultyBtns.forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        difficultyBtns.forEach(b => b.classList.remove("active"));
                        const clickedBtn = e.currentTarget;
                        clickedBtn.classList.add("active");
                        difficultyInput.value = clickedBtn.dataset.difficulty;
                    });
                });

                // --- Category Selection Logic ---
                categoryBtns.forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        // 1. Update UI Active State
                        categoryBtns.forEach(b => b.classList.remove("active"));
                        const clickedBtn = e.currentTarget;
                        clickedBtn.classList.add("active");

                        // 2. Update Input Value
                        const selectedCategory = clickedBtn.dataset.category;
                        categoryInput.value = selectedCategory;

                        // 3. Handle Content Switching
                        if (selectedCategory === "custom") {
                            featGroup.style.display = "none";
                            customGroup.style.display = "block";
                            featListContainer.innerHTML = "";
                            featInput.value = "";
                        } else {
                            featGroup.style.display = "block";
                            customGroup.style.display = "none";

                            // Reset feat selection
                            featInput.value = "";

                            // Populate Feat Buttons
                            const feats = FACANHAS[selectedCategory] || [];
                            featListContainer.innerHTML = "";

                            feats.forEach(feat => {
                                const featBtn = document.createElement("button");
                                featBtn.type = "button";
                                featBtn.className = "feat-btn";
                                featBtn.dataset.feat = feat;
                                // Skill art from the compendium, or a placeholder icon
                                const img = featImages.get(normalizeName(feat));
                                const icon = img
                                    ? `<img class="feat-img" src="${img}" alt="">`
                                    : `<div class="feat-img-placeholder"><i class="fas fa-bolt"></i></div>`;
                                featBtn.innerHTML = `
                                    <div class="feat-content">
                                        ${icon}
                                        <span class="feat-name">${feat}</span>
                                    </div>
                                    <i class="fas fa-check check-icon" style="opacity: 0;"></i>
                                `;

                                featBtn.addEventListener("click", (ev) => {
                                    // Feat Selection Logic
                                    const allFeatBtns = featListContainer.querySelectorAll(".feat-btn");
                                    allFeatBtns.forEach(fb => {
                                        fb.classList.remove("checked");
                                        fb.querySelector(".check-icon").style.opacity = "0";
                                    });

                                    const targetFeatBtn = ev.currentTarget;
                                    targetFeatBtn.classList.add("checked");
                                    targetFeatBtn.querySelector(".check-icon").style.opacity = "1";

                                    featInput.value = targetFeatBtn.dataset.feat;
                                });

                                featListContainer.appendChild(featBtn);
                            });
                        }
                    });
                });
            }
        });

        // DialogV2 resolves with the button action name when a callback returns nothing,
        // so only a data object counts as a valid request
        return (result && typeof result === "object") ? result : null;
    }

    /**
     * Skill images from the Habilidades compendium, keyed by normalized name.
     * @returns {Promise<Map<string, string>>}
     */
    static async _getFeatImages() {
        const pack = game.packs.get("abea.abea-skills");
        if (!pack) return new Map();
        const index = await pack.getIndex({ fields: ["img"] });
        return new Map(index.map(entry => [normalizeName(entry.name), entry.img]));
    }

    static _getSkillListOptions() {
        // Collect all unique skill names from compendium or system defaults if possible
        // For now, return empty or common ones.
        return [];
    }
}
