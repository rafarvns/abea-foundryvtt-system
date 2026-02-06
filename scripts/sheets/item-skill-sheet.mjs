import { AbeaItemSheet } from "./item-sheet.mjs";

/**
 * Sheet for Skill items.
 * @extends {AbeaItemSheet}
 */
export class AbeaSkillSheet extends AbeaItemSheet {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "item", "skill"]
    };

    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/item/item-skill-sheet.hbs"
        }
    };

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        const type = context.system.type || "feat"; // Default to feat if undefined
        context.isGM = game.user.isGM;

        // Retrieve categories based on the selected skill type
        // Uses the skillCategories config defined in config.mjs (which should be in CONFIG.ABEA)
        const categories = CONFIG.ABEA.skillCategories[type] || {};

        context.categories = categories;
        return context;
    }
}
