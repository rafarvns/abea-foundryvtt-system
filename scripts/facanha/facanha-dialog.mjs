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

        const playerOptions = players.map(u => `<option value="${u.id}">${u.name}</option>`).join("");

        // Build Category Options
        let categoryOptions = `<option value="custom" selected>${game.i18n.localize("ABEA.Facanha.Dialog.Custom")}</option>`;
        for (const category of Object.keys(FACANHAS)) {
            const configKey = CATEGORY_MAPPING[category];
            let label = category;

            if (configKey && ABEA.skillCategories.feat[configKey]) {
                label = game.i18n.localize(ABEA.skillCategories.feat[configKey]);
            }

            categoryOptions += `<option value="${category}">${label}</option>`;
        }

        const content = `
        <form class="facanha-dialog">
            <div class="form-group">
                <label>${game.i18n.localize("ABEA.Facanha.Dialog.Category")}:</label>
                <div class="form-fields">
                    <select name="facanha-categoria" id="facanha-categoria">
                        ${categoryOptions}
                    </select>
                </div>
            </div>

            <div class="form-group" id="facanha-select-group" style="display: none;">
                <label>${game.i18n.localize("ABEA.Facanha.Dialog.SelectFeat")}:</label>
                <div class="form-fields">
                    <select name="facanha-selecionada" id="facanha-selecionada">
                        <!-- Populated by JS -->
                    </select>
                </div>
            </div>

            <div class="form-group" id="facanha-custom-group">
                <label>${game.i18n.localize("ABEA.Item.Name")}:</label>
                <div class="form-fields">
                    <input type="text" name="facanha-nome" placeholder="Ex: Saltar, Carpintaria..." list="skill-list">
                    <datalist id="skill-list">
                        ${this._getSkillListOptions()}
                    </datalist>
                </div>
                <p class="notes">O nome deve corresponder a uma pericia na ficha do personagem para aplicar bônus.</p>
            </div>

            <div class="form-group">
                <label>Selecione os Jogadores:</label>
                <select name="jogadores" multiple style="height: 100px;">
                    ${playerOptions}
                </select>
                <p class="notes">Segure Ctrl para selecionar vários.</p>
            </div>
            <div class="form-group">
                <label>${game.i18n.localize("ABEA.Facanha.Card.Difficulty")}:</label>
                <select name="dificuldade">
                    <option value="12">Fácil (CD 12)</option>
                    <option value="15" selected>Intermediária (CD 15)</option>
                    <option value="18">Difícil (CD 18)</option>
                    <option value="21">Lendária (CD 21)</option>
                </select>
            </div>
        </form>`;

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
                classes: ["abea", "dialog", "facanha-dialog"],
                width: 400
            });
            dialog.render(true);
        });
    }

    static _getSkillListOptions() {
        // Collect all unique skill names from compendium or system defaults if possible
        // For now, return empty or common ones.
        return "";
    }
}
