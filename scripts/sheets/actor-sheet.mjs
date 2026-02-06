const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Extend the base ActorSheetV2 for the ABEA system.
 * @extends {ActorSheetV2}
 */
export class AbeaActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {

    /** @override */
    static DEFAULT_OPTIONS = {
        classes: ["abea", "sheet", "actor"],
        tag: "form",
        window: {
            resizable: false,
            minWidth: 1000,
            minHeight: 760,
            title: "ABEA.Sheet.Actor"
        },
        position: {
            width: 1000,
            height: 760
        },
        actions: {
            deleteSkill: AbeaActorSheet.#onDeleteSkill,
            toggleCondition: AbeaActorSheet.#onToggleCondition,
            tab: AbeaActorSheet.#onChangeTab,
            editImage: AbeaActorSheet.#onEditImage,
            deleteSkill: AbeaActorSheet.#onDeleteSkill,
            toggleCondition: AbeaActorSheet.#onToggleCondition,
            tab: AbeaActorSheet.#onChangeTab,
            editImage: AbeaActorSheet.#onEditImage,
            editItem: AbeaActorSheet.#onEditItem,
            deleteItem: AbeaActorSheet.#onDeleteItem,
            updateItemQuantity: AbeaActorSheet.#onUpdateItemQuantity,
            rollSkill: AbeaActorSheet.#onRollSkill,
            rollWeapon: AbeaActorSheet.#onRollWeapon,
            deleteFavorite: AbeaActorSheet.#onDeleteFavorite,
            rollFavorite: AbeaActorSheet.#onRollFavorite,
            rollItem: AbeaActorSheet.#onRollItem
        },
        form: {
            submitOnChange: true,
            closeOnSubmit: false
        },
        dragDrop: [{ dragSelector: ".item-list .item, .skill-row-grid, .weapon-row-grid, .inventory-row-grid, .favorite-item", dropSelector: null }]
    };

    /** @override */
    static PARTS = {
        shell: {
            template: "systems/abea/templates/actor/actor-sheet.hbs"
        }
    };

    /** @override */
    static TABS = {
        skills: { id: "skills", group: "primary", label: "ABEA.Tabs.Skills" },
        weapons: { id: "weapons", group: "primary", label: "ABEA.Tabs.Weapons" },
        equipment: { id: "equipment", group: "primary", label: "ABEA.Tabs.Equipment" },
        biography: { id: "biography", group: "primary", label: "ABEA.Tabs.Biography" }
    };

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        const actor = this.document;
        const system = actor.system;

        context.system = system;
        context.document = actor;
        context.flags = actor.flags;
        context.config = CONFIG.ABEA;
        context.tabs = this._getTabs(options);

        // Prepare Skills
        context.skills = (system.skills || []).map(s => ({
            ...s,
            img: s.img || "icons/svg/item-bag.svg"
        }));

        // Dynamic Resistance Calculation
        const minRes = 10;
        const resBonus = system.attributes.condition.resistanceMaxBonus || 0;
        const currentMaxRes = minRes + resBonus;
        context.resistanceRange = Array.from({ length: currentMaxRes }, (_, i) => i + 1);

        // Prepare Items
        const items = actor.items;
        context.weapons = items.filter(i => i.type === "weapon");
        context.inventory = items.filter(i => i.type !== "weapon");

        // Biography enrichment
        context.enrichedCharacteristics = await TextEditor.enrichHTML(system.biography.characteristics, { async: true });
        context.enrichedHistory = await TextEditor.enrichHTML(system.biography.history, { async: true });

        // Document for ProseMirror
        context.document = actor;

        // Prepare Favorites (Fixed 10 Slots)
        const savedFavorites = actor.flags.abea?.favorites || {};
        const favorites = [];
        for (let i = 0; i < 10; i++) {
            const fav = savedFavorites[i]; // Access by index key
            if (fav) {
                // Determine display image and name
                let img = fav.img;
                let name = fav.name;

                favorites.push({
                    ...fav,
                    index: i,
                    isEmpty: false
                });
            } else {
                favorites.push({
                    index: i,
                    empty: true,
                    isEmpty: true
                });
            }
        }

        // Async resolution for images/names (Enrichment)
        context.favorites = await Promise.all(favorites.map(async (fav) => {
            if (fav.isEmpty) return fav;

            if (fav.type === "Item" && fav.uuid) {
                try {
                    const item = await fromUuid(fav.uuid);
                    if (item) {
                        fav.img = item.img;
                        fav.name = item.name;
                    }
                } catch (e) { console.warn("ABEA | Favorites enrich error", e); }
            } else if (fav.type === "Skill") {
                const skill = system.skills.find(s => s.name === fav.name);
                if (skill) {
                    fav.img = skill.img;
                }
            }
            return fav;
        }));

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
                active: this.tabGroups.primary || "skills",
                tabs: Object.values(AbeaActorSheet.TABS)
            }
        };
        return tabs;
    }

    async _onRender(context, options) {
        super._onRender(context, options);

        // Manually bind DragDrop for ActorSheetV2 (REQUIRED as it doesn't auto-bind from options)
        new DragDrop({
            dragSelector: ".item-list .item, .skill-row-grid, .weapon-row-grid, .inventory-row-grid, .favorite-item",
            dropSelector: null,
            callbacks: {
                dragstart: this._onDragStart.bind(this),
                drop: this._onDrop.bind(this)
            }
        }).bind(this.element);
        const slots = this.element.querySelectorAll(".favorite-item");
        slots.forEach(slot => {
            slot.addEventListener("dragover", this._onDragOverSlot.bind(this));
            slot.addEventListener("dragleave", this._onDragLeaveSlot.bind(this));
        });
    }

    _onDragOverSlot(event) {
        event.preventDefault(); // Necessary to allow dropping
        event.currentTarget.classList.add("drag-over");
    }

    _onDragLeaveSlot(event) {
        event.preventDefault();
        event.currentTarget.classList.remove("drag-over");
    }

    /* -------------------------------------------- */
    /*  Drag and Drop                               */
    /* -------------------------------------------- */

    /** @override */
    _onDragStart(event) {
        console.log("ABEA | _onDragStart triggered");
        const li = event.currentTarget;
        if (event.target.classList.contains("content-link")) return;

        // Handle Skills
        if (li.dataset.index) {
            const index = parseInt(li.dataset.index);
            const skill = this.document.system.skills[index];
            const dragData = {
                type: "Skill",
                actorId: this.document.id,
                skillName: skill.name,
                img: skill.img
            };
            event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
            return;
        }

        if (li.classList.contains("favorite-item")) {
            return this._onDragStartFavorite(event);
        }

        // Handle Items
        const item = this.document.items.get(li.dataset.itemId);
        if (!item) return;

        const dragData = {
            type: "Item",
            uuid: item.uuid,
            data: item.toObject()
        };
        event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
    }

    /**
     * Handle drag start for Favorites (reordering)
     * @param {Event} event 
     */
    _onDragStartFavorite(event) {
        const li = event.currentTarget;
        const index = parseInt(li.dataset.index);
        const dragData = {
            type: "Favorite",
            index: index,
            actorId: this.document.id
        };
        event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
    }

    /** @override */
    async _onDrop(event) {
        const data = TextEditor.getDragEventData(event);
        const actor = this.document;

        // 1. Check Favorites Panel Drop (Priority)
        const dropTarget = event.target.closest(".favorite-item");
        if (dropTarget) {
            this.element.querySelectorAll(".favorite-item").forEach(s => s.classList.remove("drag-over"));

            const index = parseInt(dropTarget.dataset.index);
            let item = null;
            if (data.type === "Item") {
                item = await Item.implementation.fromDropData(data);
            }
            return this.#onDropFavorite(item, data, index);
        }

        // 2. Standard Handler for non-item drops
        if (data.type !== "Item") return super._onDrop(event);

        // 3. Resolve Item for standard drops
        const item = await Item.implementation.fromDropData(data);
        if (!item) return super._onDrop(event);

        // 4. Tab-specific Logic
        let activeTab = this.tabGroups.primary;
        if (!activeTab) {
            const activeTabEl = this.element.querySelector(".sheet-tabs .item.active");
            if (activeTabEl) activeTab = activeTabEl.dataset.tab;
        }

        if (activeTab === "skills") {
            if (item.type !== "skill") {
                return ui.notifications.warn("ABEA.Warning.OnlySkillsAccepted", { localize: true });
            }
            return this.#onDropSkill(item);
        }

        if (activeTab === "weapons") {
            if (item.type !== "weapon") {
                return ui.notifications.warn("ABEA.Warning.OnlyWeaponsAccepted", { localize: true });
            }
            return super._onDrop(event);
        }

        if (activeTab === "equipment") {
            if (item.type === "weapon" || item.type === "skill") {
                return ui.notifications.warn("ABEA.Warning.OnlyEquipmentAccepted", { localize: true });
            }
            return super._onDrop(event);
        }

        // If no logic matched
        return ui.notifications.warn("ABEA.Warning.DropOnValidTab", { localize: true });
    }

    /**
     * Handle dropping a Favorite.
     * @param {Item|Object} itemResolved 
     * @param {Object} data 
     * @param {number} targetIndex
     */
    async #onDropFavorite(itemResolved, data, targetIndex) {
        if (targetIndex === undefined || isNaN(targetIndex)) return;
        const actor = this.document;
        // Ensure we work with an Object for specific index keys
        const favorites = { ...(actor.flags.abea?.favorites || {}) };

        // 1. Handle Reordering (Move/Swap)
        if (data.type === "Favorite") {
            if (data.actorId !== actor.id) return;
            const sourceIndex = data.index;
            if (sourceIndex === targetIndex) return;

            const sourceItem = favorites[sourceIndex];
            const targetItem = favorites[targetIndex];

            // Perform Swap
            favorites[targetIndex] = sourceItem;
            if (targetItem) {
                favorites[sourceIndex] = targetItem;
            } else {
                delete favorites[sourceIndex];
                favorites[`-= ${sourceIndex}`] = null; // Explicit deletion
            }

            // If moved to empty, ensure source is cleared
            if (!targetItem) {
                delete favorites[sourceIndex];
                favorites[`-= ${sourceIndex}`] = null;
            }

            // Update flags - replacing the whole object is safest here to avoid merge weirdness with sparse keys
            // But we can just use the expanded object with -= keys where needed, actually simplest is:
            // Unset whole flag then Set whole flag to be 100% sure of structure, 
            // OR just update.
            // Let's try direct update first.
            await actor.update({ "flags.abea.favorites": favorites });
            return;
        }

        // 2. Prepare Data Object (New Drop)
        let favData = null;

        if (data.type === "Skill") {
            favData = {
                type: "Skill",
                name: data.skillName,
                img: data.img,
                id: foundry.utils.randomID()
            };
        } else if (data.type === "Item") {
            favData = {
                type: "Item",
                name: itemResolved.name,
                img: itemResolved.img,
                uuid: itemResolved.uuid,
                id: itemResolved.id
            };
        }

        if (!favData) return;

        // 3. Save to specific index
        // We use the object key notation for updates
        await actor.update({ [`flags.abea.favorites.${targetIndex}`]: favData });
    }

    /**
     * Handle dropping a skill item.
     * @param {Item} item
     */
    async #onDropSkill(item) {
        const actor = this.document;
        const skills = [...actor.system.skills];

        // 1. Get raw object
        const source = item.toObject();

        // 2. Try to fetch UUID image as ultimate backup
        let uuidImg = null;
        if (item.uuid) {
            try {
                const realItem = await fromUuid(item.uuid);
                uuidImg = realItem?.img;
            } catch (e) {
                console.warn("ABEA | UUID Fetch Failed", e);
            }
        }



        // 3. Determine final image with priority
        const img = item.img
            || source.img
            || uuidImg
            || item.system?.img
            || source.system?.img
            || "icons/svg/item-bag.svg";

        console.log("ABEA | Drop Skill Logic:", {
            name: item.name,
            uuid: item.uuid,
            candidates: {
                itemImg: item.img,
                sourceImg: source.img,
                uuidImg: uuidImg,
                sysImg: item.system?.img
            },
            result: img
        });

        // Check for duplicates if desired, or just add
        skills.push({
            name: item.name,
            rank: 1,
            img: img
        });

        await actor.update({ "system.skills": skills });
    }

    /* -------------------------------------------- */
    /*  Action Handlers                             */
    /* -------------------------------------------- */



    /**
     * Handle deleting a skill.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onDeleteSkill(event, target) {
        const index = parseInt(target.dataset.index);
        const actor = this.document;
        const skills = [...actor.system.skills];
        skills.splice(index, 1);
        await actor.update({ "system.skills": skills });
    }

    /**
     * Handle clicking a condition pip.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onToggleCondition(event, target) {
        const field = target.dataset.field; // "resistance" or "critical"
        const value = parseInt(target.dataset.value);
        const actor = this.document;
        const current = actor.system.attributes.condition[field];

        // If clicking the current value, reset it one step back
        const newValue = (current === value) ? value - 1 : value;
        await actor.update({ [`system.attributes.condition.${field}`]: Math.max(0, newValue) });
    }

    /**
     * Handle changing a tab.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onChangeTab(event, target) {
        this.changeTab(target.dataset.tab, target.dataset.group, { event });
    }

    /**
     * Handle clicking the actor image to edit it.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onEditImage(event, target) {
        const actor = this.document;
        const current = actor.img;
        const fp = new FilePicker({
            type: "image",
            current: current,
            callback: path => {
                actor.update({ img: path });
            },
            top: this.position.top + 40,
            left: this.position.left + 10
        });
        return fp.browse();
    }



    /**
     * Handle editing an item.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onEditItem(event, target) {
        const itemId = target.closest(".item").dataset.itemId;
        const item = this.document.items.get(itemId);
        if (item) item.sheet.render(true);
    }

    /**
     * Handle deleting an item.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onDeleteItem(event, target) {
        const itemId = target.closest(".item").dataset.itemId;
        const item = this.document.items.get(itemId);
        if (item) await item.delete();
    }

    /**
     * Handle updating item quantity.
     * @param {Event} event
     * @param {HTMLElement} target
     */
    static async #onUpdateItemQuantity(event, target) {
        const itemId = target.dataset.itemId;
        const value = parseInt(target.value);
        const item = this.document.items.get(itemId);
        if (item) await item.update({ "system.quantity": value });
    }

    /**
     * Handle rolling a skill.
     * @param {Event} event 
     * @param {HTMLElement} target 
     */
    static async #onRollSkill(event, target) {
        const skillName = target.dataset.skillName;
        if (!skillName) return;
        return this.document.rollSkill(skillName);
    }

    /**
     * Handle rolling a weapon attack.
     * @param {Event} event 
     * @param {HTMLElement} target 
     */
    static async #onRollWeapon(event, target) {
        const itemId = target.closest(".item").dataset.itemId;
        const item = this.document.items.get(itemId);
        if (item) return this.document.rollWeaponAttack(item.id);
    }

    /**
     * Delete a favorite item
     */
    static async #onDeleteFavorite(event, target) {
        const index = parseInt(target.closest(".favorite-item").dataset.index);
        const actor = this.document;
        // Construct deletion key
        await actor.unsetFlag("abea", `favorites.${index}`);
    }

    /**
     * Roll a favorite item
     */
    static async #onRollFavorite(event, target) {
        const index = parseInt(target.closest(".favorite-item").dataset.index);
        const actor = this.document;
        const fav = actor.flags.abea?.favorites?.[index];
        if (!fav) return;

        if (fav.type === "Skill") {
            return actor.rollSkill(fav.name);
        } else if (fav.type === "Item") {
            const item = await fromUuid(fav.uuid);
            if (!item) return;

            if (item.type === "weapon") {
                return actor.rollWeaponAttack(item.id);
            } else {
                item.sheet.render(true);
            }
        }
    }
    /**
     * Handle rolling an item.
     * @param {Event} event 
     * @param {HTMLElement} target 
     */
    static async #onRollItem(event, target) {
        const itemId = target.closest(".item").dataset.itemId;
        const item = this.document.items.get(itemId);
        if (item) return item.roll();
    }
}
