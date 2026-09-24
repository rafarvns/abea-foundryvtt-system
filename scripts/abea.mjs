/**
 * A Bandeira do Elefante e da Arara (ABEA) System
 * Version: 1.1.0
 * Foundry VTT: 14.360
 */

// Import Modules
import { ABEA } from "./config.mjs";
import { registerSettings } from "./settings.mjs";
import { AbeaActor } from "./documents/actor.mjs";
import { AbeaItem } from "./documents/item.mjs";
import { AbeaCombat } from "./documents/combat.mjs";
import { AbeaActorSheet } from "./sheets/actor-sheet.mjs";
import { AbeaNPCSheet } from "./sheets/npc-sheet.mjs";
import { AbeaItemSheet } from "./sheets/item-sheet.mjs";
import { AbeaWeaponSheet } from "./sheets/item-weapon-sheet.mjs";
import { AbeaSkillSheet } from "./sheets/item-skill-sheet.mjs";
import { AbeaTraitSheet } from "./sheets/item-trait-sheet.mjs";
import { CharacterData } from "./models/character-data.mjs";
import { AbeaItemData, AbeaWeaponData, AbeaSkillData, AbeaTraitData } from "./models/item-data.mjs";
import { createItemMacro, rollItemMacro, rollSkillMacro } from "./helpers/macros.mjs";
import { checkFacanha } from "./helpers/utils.mjs";
import { FacanhaSolicitorDialog } from "./facanha/facanha-dialog.mjs";
import { FacanhaLogic } from "./facanha/facanha-logic.mjs";

const { Actors, Items } = foundry.documents.collections;
const { loadTemplates } = foundry.applications.handlebars;

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

    // Register Status Effects
    CONFIG.statusEffects = Object.fromEntries(ABEA.statusEffects.map(effect => [effect.id, effect]));

    // Define custom Document classes
    CONFIG.Actor.documentClass = AbeaActor;
    CONFIG.Actor.dataModels = {
        character: CharacterData,
        npc: CharacterData
    };
    CONFIG.Item.documentClass = AbeaItem;

    // Combat: 3d6 initiative, players win ties (p. 40)
    CONFIG.Combat.documentClass = AbeaCombat;
    CONFIG.Combat.initiative = ABEA.initiative;
    CONFIG.Item.dataModels = {
        item: AbeaItemData,
        weapon: AbeaWeaponData,
        skill: AbeaSkillData,
        trait: AbeaTraitData
    };
    console.log("ABEA | Registered Item Types:", Object.keys(CONFIG.Item.dataModels));

    // Register sheet application classes (V14 registers no core Actor/Item sheet to unregister)
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
    Items.registerSheet("abea", AbeaTraitSheet, {
        types: ["trait"],
        makeDefault: true,
        label: "ABEA.Sheet.Trait"
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

    // Row tooltip: description plus the reference price (p. 92-96)
    Handlebars.registerHelper("abeaItemTooltip", function (item) {
        const parts = [];
        if (item.system.description) parts.push(item.system.description);
        if (item.system.price) {
            parts.push(`<strong>${game.i18n.localize("ABEA.Item.Price")}:</strong> ${Number(item.system.price).toLocaleString("pt-BR")} réis`);
        }
        return parts.join("<hr>");
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
        "systems/abea/templates/chat/facanha-card.hbs",
        "systems/abea/templates/chat/roll-card.hbs",
        "systems/abea/templates/chat/attack-card.hbs",
        "systems/abea/templates/chat/item-card.hbs",
        "systems/abea/templates/chat/action-card.hbs",
        "systems/abea/templates/item/item-trait-sheet.hbs"
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

    // Damage Application Socket (for non-owned tokens)
    game.socket.on("system.abea", async (packet) => {
        if (packet.type === "applyDamage" && game.user.isGM) {
            const { uuid, damage } = packet.data;
            const actor = await fromUuid(uuid);
            if (actor) {
                await actor.applyDamage(damage);
                console.log(`ABEA | Dano de ${damage} aplicado via socket em ${actor.name} seguindo as regras avançadas.`);
            }
        }

        // Combat flags on actors the requesting user doesn't own (Auxiliar ataque)
        if (packet.type === "setFlag" && game.users.activeGM?.isSelf) {
            const { uuid, key, value } = packet.data;
            const actor = await fromUuid(uuid);
            if (!actor) return;
            if (value === null) await actor.unsetFlag("abea", key);
            else await actor.setFlag("abea", key, value);
        }
    });
});

/* -------------------------------------------- */
/*  Combat Hooks                                */
/* -------------------------------------------- */

/**
 * Round-based bonuses (Defender-se, Esquivar-se) are derived from the current round,
 * so refresh the combatants when the round changes or the combat ends.
 * @param {Combat} combat
 */
function refreshCombatants(combat) {
    for (const combatant of combat.combatants) {
        const actor = combatant.actor;
        if (!actor) continue;
        actor.reset();
        if (actor.sheet?.rendered) actor.sheet.render();
    }
}

Hooks.on("updateCombat", (combat, changed) => {
    if ("round" in changed) refreshCombatants(combat);
});
Hooks.on("deleteCombat", combat => refreshCombatants(combat));

/* -------------------------------------------- */
/*  Facanha Hooks                               */
/* -------------------------------------------- */

Hooks.on("getSceneControlButtons", (controls) => {
    if (!game.user.isGM) return;

    controls.abea = {
        name: "abea",
        title: "ABEA",
        icon: "fas fa-shield-alt",
        layer: "notes",
        order: Object.keys(controls).length,
        visible: true,
        tools: {
            facanhas: {
                name: "facanhas",
                title: "Solicitar Façanha",
                icon: "fas fa-dice",
                order: 0,
                button: true,
                onChange: () => {
                    console.log("ABEA | Botão Solicitar Façanha clicado!");
                    if (FacanhaSolicitorDialog?.show) {
                        FacanhaSolicitorDialog.show()
                            .then(data => data && FacanhaLogic.createFacanhaMessage(data));
                    }
                }
            }
        }
    };
});

Hooks.on("renderChatMessageHTML", (message, html) => {
    FacanhaLogic.activateChatListeners(html, message);
});
