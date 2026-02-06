import { AbeaItemSheet } from "./item-sheet.mjs";

/**
 * Sheet for Weapon items.
 * @extends {AbeaItemSheet}
 */
export class AbeaWeaponSheet extends AbeaItemSheet {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "item", "weapon"],
        actions: {
            removeSkill: AbeaWeaponSheet._onRemoveSkill,
            openSkill: AbeaWeaponSheet._onOpenSkill
        }
    };

    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/item/item-weapon-sheet.hbs"
        }
    };

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);

        context.isGM = game.user.isGM;

        // Resolve associated skill if present
        if (context.system.skillType) {
            try {
                // Check if it's a UUID or name (for legacy support/fallback)
                // We prioritize treating it as a UUID
                const skill = await fromUuid(context.system.skillType);
                if (skill) {
                    context.associatedSkill = skill;
                }
            } catch (e) {
                console.warn("ABEA | Could not resolve linked skill:", e);
            }
        }

        return context;
    }

    /**
     * Handle removing the attached skill.
     * @this {AbeaWeaponSheet}
     * @param {Event} event 
     * @param {HTMLElement} target 
     */
    static _onRemoveSkill(event, target) {
        if (!game.user.isGM) return;
        this.document.update({ "system.skillType": "" });
    }

    /**
     * Handle opening the attached skill.
     * @this {AbeaWeaponSheet}
     * @param {Event} event 
     * @param {HTMLElement} target 
     */
    static async _onOpenSkill(event, target) {
        const skillUuid = this.document.system.skillType;
        if (!skillUuid) return;

        try {
            const skill = await fromUuid(skillUuid);
            if (skill) {
                skill.sheet.render(true);
            } else {
                ui.notifications.warn("ABEA.Warning.SkillNotFound", { localize: true });
            }
        } catch (e) {
            console.error(e);
            ui.notifications.error("ABEA.Error.CouldNotOpenSkill", { localize: true });
        }
    }

    /** @override */
    _onRender(context, options) {
        super._onRender(context, options);

        // Manually bind Drag & Drop since ApplicationV2 doesn't use DEFAULT_OPTIONS.dragDrop automatically in the same way
        // We assume the root element (this.element) is the drop target
        this.element.addEventListener("drop", this._onDrop.bind(this));
        // We also need dragover to allow dropping
        this.element.addEventListener("dragover", (event) => event.preventDefault());
    }

    /**
     * Handle Drop Event
     * @param {DragEvent} event 
     */
    async _onDrop(event) {
        event.preventDefault(); // Prevent default browser behavior
        if (!game.user.isGM) return; // Only GM can drop items
        console.log("ABEA | Drop event detected on Weapon Sheet", event);

        const data = TextEditor.getDragEventData(event);
        console.log("ABEA | Drop data:", data);

        if (data.type !== "Item") return; // We only care about Items

        const item = await Item.implementation.fromDropData(data);
        if (!item) return false;

        // Custom Logic for handling Skill Drops
        if (item.type === "skill") {
            // Validate Type and Category
            const type = item.system.type;
            const category = item.system.category;

            if (type !== "feat" || category !== "weapons") {
                ui.notifications.warn("ABEA.Warning.InvalidWeaponSkill", { localize: true });
                return false;
            }

            // Valid Skill - Link it
            return this.document.update({
                "system.skillType": item.uuid
            });
        }
    }
}
