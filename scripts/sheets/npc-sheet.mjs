import { AbeaActorSheet } from "./actor-sheet.mjs";

/**
 * Simplified NPC Sheet for ABEA.
 * Single-page layout, optimized for GM workflow.
 * @extends {AbeaActorSheet}
 */
export class AbeaNPCSheet extends AbeaActorSheet {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "npc"],
        tag: "form",
        window: {
            resizable: true,
            minWidth: 800,
            minHeight: 600,
            title: "ABEA.Sheet.NPC"
        },
        position: {
            width: 800,
            height: 600
        },
        actions: {
            deleteSkill: AbeaActorSheet.DEFAULT_OPTIONS.actions.deleteSkill,
            toggleCondition: AbeaActorSheet.DEFAULT_OPTIONS.actions.toggleCondition,
            editImage: AbeaActorSheet.DEFAULT_OPTIONS.actions.editImage,
            editItem: AbeaActorSheet.DEFAULT_OPTIONS.actions.editItem,
            deleteItem: AbeaActorSheet.DEFAULT_OPTIONS.actions.deleteItem,
            updateItemQuantity: AbeaActorSheet.DEFAULT_OPTIONS.actions.updateItemQuantity,
            rollSkill: AbeaActorSheet.DEFAULT_OPTIONS.actions.rollSkill,
            rollWeapon: AbeaActorSheet.DEFAULT_OPTIONS.actions.rollWeapon
        },
        form: {
            submitOnChange: true,
            closeOnSubmit: false
        },
        dragDrop: [{ dragSelector: ".item-list .item, .skill-row-grid", dropSelector: null }]
    };

    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/actor/npc-sheet.hbs"
        }
    };

    /** @override */
    static TABS = {};

    /** 
     * Override _onDrop to remove tab dependency.
     * Auto-detects where to put the item based on its type.
     * @override 
     */
    async _onDrop(event) {
        const data = TextEditor.getDragEventData(event);

        if (data.type !== "Item") return super._onDrop(event);

        const item = await Item.implementation.fromDropData(data);
        if (!item) return super._onDrop(event);

        // Routing logic based on Item Type
        if (item.type === "skill") {
            // Need to access the private method #onDropSkill from parent? 
            // Private methods aren't accessible. I might need to duplicate the logic or make it protected in parent.
            // Since I can't easily modify the parent's access modifiers without a separate step, 
            // I will duplicate the simple skill drop logic here for now.
            return this._onDropSkill(item);
        }

        if (item.type === "weapon") {
            const data = await item.toObject();
            return this.document.createEmbeddedDocuments("Item", [data]);
        }

        // Default: Create item (Inventory)
        const itemData = await item.toObject();
        return this.document.createEmbeddedDocuments("Item", [itemData]);
    }

    /**
     * Logic for dropping a skill (duplicated/adapted from AbeaActorSheet due to private access).
     * @param {Item} item
     */
    async _onDropSkill(item) {
        const actor = this.document;
        const skills = [...actor.system.skills];

        const source = item.toObject();
        let uuidImg = null;
        if (item.uuid) {
            try {
                const realItem = await fromUuid(item.uuid);
                uuidImg = realItem?.img;
            } catch (e) {
                console.warn("ABEA | UUID Fetch Failed", e);
            }
        }

        const img = item.img
            || source.img
            || uuidImg
            || item.system?.img
            || source.system?.img
            || "icons/svg/item-bag.svg";

        skills.push({
            name: item.name,
            rank: 1,
            img: img
        });

        await actor.update({ "system.skills": skills });
    }
}
