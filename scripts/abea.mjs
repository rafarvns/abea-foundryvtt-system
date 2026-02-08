/**
 * A Bandeira do Elefante e da Arara (ABEA) System
 * Version: 1.0.0
 * Foundry VTT: 13.351
 */

// Import Modules
import { ABEA } from "./config.mjs";
import { registerSettings } from "./settings.mjs";
import { AbeaActor } from "./documents/actor.mjs";
import { AbeaItem } from "./documents/item.mjs";
import { AbeaActorSheet } from "./sheets/actor-sheet.mjs";
import { AbeaNPCSheet } from "./sheets/npc-sheet.mjs";
import { AbeaItemSheet } from "./sheets/item-sheet.mjs";
import { AbeaWeaponSheet } from "./sheets/item-weapon-sheet.mjs";
import { AbeaSkillSheet } from "./sheets/item-skill-sheet.mjs";
import { CharacterData } from "./models/character-data.mjs";
import { AbeaItemData, AbeaWeaponData, AbeaSkillData } from "./models/item-data.mjs";
import { createItemMacro, rollItemMacro, rollSkillMacro } from "./helpers/macros.mjs";
import { checkFacanha } from "./helpers/utils.mjs";
import { FacanhaSolicitorDialog } from "./facanha/facanha-dialog.mjs";
import { FacanhaLogic } from "./facanha/facanha-logic.mjs";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("i18nInit", async function () {
    const systemLang = game.settings.get("abea", "systemLanguage");
    if (systemLang && systemLang !== game.i18n.lang) {
        console.log(`ABEA | Enforcing System Language in i18nInit: ${systemLang} (Current: ${game.i18n.lang})`);
        await game.i18n.setLanguage(systemLang);
    }
});

Hooks.once("init", async function () {
    console.log("ABEA | Initializing A Bandeira do Elefante e da Arara System");

    registerSettings();

    game.abea = {
        AbeaActor,
        AbeaItem,
        rollItemMacro,
        rollSkillMacro,
        checkFacanha
    };

    // Assign custom config
    CONFIG.ABEA = ABEA;

    // Define custom Document classes
    CONFIG.Actor.documentClass = AbeaActor;
    CONFIG.Actor.dataModels = {
        character: CharacterData,
        npc: CharacterData
    };
    CONFIG.Item.documentClass = AbeaItem;
    CONFIG.Item.dataModels = {
        item: AbeaItemData,
        weapon: AbeaWeaponData,
        skill: AbeaSkillData
    };
    console.log("ABEA | Registered Item Types:", Object.keys(CONFIG.Item.dataModels));

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("abea", AbeaActorSheet, {
        types: ["character"],
        makeDefault: true,
        label: "ABEA.Sheet.Actor"
    });
    Actors.registerSheet("abea", AbeaNPCSheet, {
        types: ["npc"],
        makeDefault: true,
        label: "ABEA.Sheet.NPC"
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("abea", AbeaItemSheet, {
        types: ["item"],
        makeDefault: true,
        label: "ABEA.Sheet.Item"
    });
    Items.registerSheet("abea", AbeaWeaponSheet, {
        types: ["weapon"],
        makeDefault: true,
        label: "ABEA.Sheet.Weapon"
    });
    Items.registerSheet("abea", AbeaSkillSheet, {
        types: ["skill"],
        makeDefault: true,
        label: "ABEA.Sheet.Skill"
    });

    // Register Handlebars helpers
    Handlebars.registerHelper("range", function (from, to) {
        const results = [];
        for (let i = from; i <= to; i++) {
            results.push(i);
        }
        return results;
    });

    Handlebars.registerHelper("eq", function (a, b) {
        return a === b;
    });

    Handlebars.registerHelper("formatNumber", function (value) {
        return Number(value || 0).toLocaleString("pt-BR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    });

    // Preload Handlebars templates
    return loadTemplates([
        "systems/abea/templates/actor/actor-sheet.hbs",
        "systems/abea/templates/actor/npc-sheet.hbs",
        "systems/abea/templates/actor/parts/actor-header.hbs",
        "systems/abea/templates/actor/parts/actor-sidebar.hbs",
        "systems/abea/templates/actor/parts/actor-condition.hbs",
        "systems/abea/templates/actor/parts/actor-skills.hbs",
        "systems/abea/templates/actor/parts/actor-weapons.hbs",
        "systems/abea/templates/actor/parts/actor-equipment.hbs",
        "systems/abea/templates/actor/parts/actor-biography.hbs",
        "systems/abea/templates/item/item-generic-sheet.hbs",
        "systems/abea/templates/item/item-weapon-sheet.hbs",
        "systems/abea/templates/item/item-skill-sheet.hbs",
        "systems/abea/templates/chat/facanha-card.hbs"
    ]);
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", async function () {
    console.log("ABEA | System Ready");

    // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
    Hooks.on("hotbarDrop", (bar, data, slot) => createItemMacro(data, slot));

    // Initialize Facanha Logic (Sockets)
    FacanhaLogic.init();
});

/* -------------------------------------------- */
/*  Facanha Hooks                               */
/* -------------------------------------------- */

Hooks.on("getSceneControlButtons", (controls) => {
    if (!game.user.isGM) return;

    const abeaControl = {
        name: "abea",
        title: "ABEA",
        icon: "fas fa-shield-alt",
        layer: "notes",
        visible: true,
        tools: {
            facanhas: {
                name: "facanhas",
                title: "Solicitar Façanha",
                icon: "fas fa-dice",
                button: true,
                onClick: () => {
                    console.log("ABEA | Botão Solicitar Façanha clicado!");
                    if (FacanhaSolicitorDialog?.show) {
                        FacanhaSolicitorDialog.show()
                            .then(data => data && FacanhaLogic.createFacanhaMessage(data));
                    }
                }
            }
        }
    };

    // Add to controls list (supports Array or Object/Map)
    if (Array.isArray(controls)) {
        controls.push(abeaControl);
    } else if (typeof controls === "object" && controls !== null) {
        controls.abea = abeaControl;
    }
});

Hooks.on("renderChatMessage", (message, html, data) => {
    FacanhaLogic.activateChatListeners(html, message);
});
