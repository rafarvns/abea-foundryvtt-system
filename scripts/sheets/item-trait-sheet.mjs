import { AbeaItemSheet } from "./item-sheet.mjs";

/**
 * Sheet for Trait items (Características).
 * @extends {AbeaItemSheet}
 */
export class AbeaTraitSheet extends AbeaItemSheet {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "item", "trait"]
    };

    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/item/item-trait-sheet.hbs"
        }
    };
}
