const { ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Extend the base ItemSheetV2 for the ABEA system.
 * @extends {ItemSheetV2}
 */
export class AbeaItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "item"],
        tag: "form",
        window: {
            resizable: false,
            minWidth: 400,
            minHeight: 340
        },
        actions: {
            editImage: AbeaItemSheet.#onEditImage,
            tab: AbeaItemSheet.#onChangeTab
        },
        form: {
            submitOnChange: true,
            closeOnSubmit: false
        }
    };

    /**
     * Handle changing a tab.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onChangeTab(event, target) {
        this.changeTab(target.dataset.tab, target.dataset.group, { event });
    }

    /** @override */
    static TABS = {
        description: { id: "description", group: "primary", label: "ABEA.Tabs.Description" },
        details: { id: "details", group: "primary", label: "ABEA.Tabs.Details" }
    };

    /** @override */
    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/item/item-generic-sheet.hbs"
        }
    };



    /**
     * Handle clicking the item image to edit it.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onEditImage(event, target) {
        const item = this.document;
        const current = item.img;
        const fp = new FilePicker({
            type: "image",
            current: current,
            callback: path => {
                item.update({ img: path });
            },
            top: this.position.top + 40,
            left: this.position.left + 10
        });
        return fp.browse();
    }

    /** @override */
    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        const itemData = this.document;

        context.document = itemData; // Ensure document is explicitly available
        context.system = itemData.system;
        context.flags = itemData.flags;
        context.config = CONFIG.ABEA;
        context.tabs = this._getTabs(options);

        // Action Context
        context.isHeal = context.system.action?.type === "heal";

        return context;
    }

    /**
     * Helper to get tabs context.
     * @param {object} options
     * @returns {object}
     */
    _getTabs(options) {
        const tabs = {
            primary: {
                active: this.tabGroups.primary || "description",
                tabs: Object.values(AbeaItemSheet.TABS)
            }
        };
        return tabs;
    }
}
