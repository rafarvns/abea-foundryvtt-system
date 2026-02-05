/**
 * Extend the base Item document for the ABEA system.
 * @extends {Item}
 */
export class AbeaItem extends Item {

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
        const rollMode = game.settings.get("core", "rollMode");
        const label = `[${item.type}] ${item.name}`;

        // Action Handling
        if (this.system.action?.type === "heal") {
            const value = this.system.action.value || 0;
            if (this.actor) {
                const currentRes = this.actor.system.attributes.condition.resistance || 0;
                const newRes = Math.max(0, currentRes - value);

                await this.actor.update({ "system.attributes.condition.resistance": newRes });

                ChatMessage.create({
                    speaker: speaker,
                    rollMode: rollMode,
                    flavor: label,
                    content: `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                                <img src="${item.img}" width="36" height="36" style="border: none; margin-bottom: 6px;" />
                                <h4 style="font-size: 1.2rem; margin: 0;">Item: <strong>${item.name}</strong></h4>
                              </div><hr>
                              <div class="card-content">
                                    <p>${game.i18n.format("ABEA.Item.Action.HealMessage", { value: value })}</p>
                                    <p><strong>${game.i18n.localize("ABEA.Actor.Condition.Resistance")}:</strong> ${currentRes} &rarr; ${newRes}</p>
                                </div>`
                });

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
            ChatMessage.create({
                speaker: speaker,
                rollMode: rollMode,
                flavor: label,
                content: `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                            <img src="${item.img}" width="36" height="36" style="border: none; margin-bottom: 6px;" />
                            <h4 style="font-size: 1.2rem; margin: 0;">Item: <strong>${item.name}</strong></h4>
                          </div><hr>
                          <div>${item.system.description || item.name}</div>`
            });
            return;
        }
    }
}
