import { FACANHAS } from "../constants/facanhas.mjs";
import { CATEGORY_MAPPING } from "../constants/category-mapping.mjs";
import { ABEA } from "../config.mjs";

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

        console.log("ABEA | Dialog content generated, creating Promise...");
        return new Promise((resolve) => {
            console.log("ABEA | Creating Dialog instance...");
            const dialog = new Dialog({
                title: game.i18n.localize("ABEA.Facanha.Card.Title"),
                content: content,
                buttons: {
                    request: {
                        label: "Solicitar",
                        icon: '<i class="fas fa-dice"></i>',
                        callback: (html) => {
                            const formElement = html[0].querySelector("form");
                            const categoria = formElement.querySelector('[name="facanha-categoria"]').value;
                            let nome = "";

                            if (categoria === "custom") {
                                nome = formElement.querySelector('[name="facanha-nome"]').value;
                            } else {
                                nome = formElement.querySelector('[name="facanha-selecionada"]').value;
                            }

                            const selectElement = formElement.querySelector('[name="jogadores"]');
                            const playerIds = Array.from(selectElement.selectedOptions).map(opt => opt.value);
                            const cd = parseInt(formElement.querySelector('[name="dificuldade"]').value);
                            const dificuldadeLabel = formElement.querySelector('[name="dificuldade"] option:checked').text.split(' (')[0];

                            if (!nome || playerIds.length === 0) {
                                ui.notifications.warn("Preencha o nome/selecione a façanha e selecione ao menos um jogador.");
                                resolve(null);
                                return;
                            }

                            resolve({
                                nome,
                                players: playerIds.map(id => ({
                                    userId: id,
                                    nome: game.users.get(id).name,
                                    status: "aguardando",
                                    resultado: null
                                })),
                                cd,
                                dificuldadeLabel
                            });
                        }
                    },
                    cancel: {
                        label: "Cancelar",
                        icon: '<i class="fas fa-times"></i>',
                        callback: () => resolve(null)
                    }
                },
                default: "request",
                render: (html) => {
                    const categoriaSelect = html[0].querySelector("#facanha-categoria");
                    const featSelectGroup = html[0].querySelector("#facanha-select-group");
                    const featSelect = html[0].querySelector("#facanha-selecionada");
                    const customGroup = html[0].querySelector("#facanha-custom-group");
                    const selectAllBtn = html[0].querySelector(".select-all-players");
                    const playersSelect = html[0].querySelector('[name="jogadores"]');

                    if (selectAllBtn && playersSelect) {
                        selectAllBtn.addEventListener("click", () => {
                            for (let i = 0; i < playersSelect.options.length; i++) {
                                playersSelect.options[i].selected = true;
                            }
                        });
                    }

                    categoriaSelect.addEventListener("change", (event) => {
                        const selectedCategory = event.target.value;
                        if (selectedCategory === "custom") {
                            featSelectGroup.style.display = "none";
                            customGroup.style.display = "block";
                            featSelect.innerHTML = "";
                        } else {
                            featSelectGroup.style.display = "block";
                            customGroup.style.display = "none";

                            // Populate Feats
                            const feats = FACANHAS[selectedCategory] || [];
                            let featOptions = "";
                            feats.forEach(feat => {
                                featOptions += `<option value="${feat}">${feat}</option>`;
                            });
                            featSelect.innerHTML = featOptions;
                        }
                        // Resize dialog to fit new content if needed
                        dialog.setPosition({ height: "auto" });
                    });
                }
            }, {
                classes: ["abea", "dialog", "facanha-dialog", "sheet", "item"],
                width: 450
            });
            dialog.render(true);
        });
    }

    static _getSkillListOptions() {
        // Collect all unique skill names from compendium or system defaults if possible
        // For now, return empty or common ones.
        return [];
    }
}
