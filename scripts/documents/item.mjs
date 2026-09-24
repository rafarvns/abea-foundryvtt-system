const { renderTemplate } = foundry.applications.handlebars;
const { TextEditor } = foundry.applications.ux;

/**
 * Extend the base Item document for the ABEA system.
 * @extends {Item}
 */
export class AbeaItem extends Item {

    /**
     * Default icon for new items: traits use an eye instead of the item bag.
     * @override
     */
    static getDefaultArtwork(itemData) {
        if (itemData?.type === "trait") return { img: "icons/svg/eye.svg" };
        return super.getDefaultArtwork(itemData);
    }

    /** @override */
    prepareData() {
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
        super.prepareBaseData();
    }

    /** @override */
    prepareDerivedData() {
        super.prepareDerivedData();
        const itemData = this;
        const system = itemData.system;
        const flags = itemData.flags.abea || {};

        // Preparation logic for derived data
    }

    /**
     * Prepare a data object which is passed to any Roll formula which is used by this Item.
     * @returns {object}
     */
    getRollData() {
        // If present, return the actor's roll data.
        if (!this.actor) return null;
        const rollData = this.actor.getRollData();
        return rollData;
    }

    /**
     * Handle clickable rolls.
     * @param {object} [options]
     */
    async roll(options = {}) {
        const item = this;
        // Initialize chat data.
        const speaker = ChatMessage.getSpeaker({ actor: this.actor });
        const messageMode = game.settings.get("core", "messageMode");
        const template = "systems/abea/templates/chat/item-card.hbs";
        const cardItem = { name: item.name, img: item.img };

        // Action Handling
        if (this.system.action?.type === "heal") {
            const value = this.system.action.value || 0;
            if (this.actor) {
                const currentRes = this.actor.system.attributes.condition.resistance || 0;
                const newRes = Math.max(0, currentRes - value);

                await this.actor.update({ "system.attributes.condition.resistance": newRes });

                const content = await renderTemplate(template, {
                    item: cardItem,
                    heal: { value, before: currentRes, after: newRes }
                });
                await ChatMessage.create({ speaker, content }, { messageMode });

                // Consumption Logic
                if (this.system.action.isConsumable) {
                    const qty = this.system.quantity - 1;
                    if (qty <= 0) {
                        // Delete item and remove from hotbar if needed
                        await this.delete();
                    } else {
                        await this.update({ "system.quantity": qty });
                    }
                }
                return;
            }
        }

        // If there's no roll data, send a chat message.
        if (!this.system.formula) {
            // Check if it's a valid item type
            console.log(`ABEA | Rolling Item: ${item.name}`);
            // Basic chat message for items without actions
            const content = await renderTemplate(template, {
                item: cardItem,
                description: await TextEditor.implementation.enrichHTML(item.system.description, { relativeTo: item })
            });
            await ChatMessage.create({ speaker, content }, { messageMode });
            return;
        }
    }
}
