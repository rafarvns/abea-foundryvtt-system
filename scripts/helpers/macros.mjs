/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
export async function createItemMacro(data, slot) {
    if (data.type !== "Item" && data.type !== "Skill") return;

    // Strict validation: must come from an Actor context
    if (data.type === "Item" && (!data.uuid || !data.uuid.startsWith("Actor."))) {
        // Allow ONLY actor items for now to ensure context
        return ui.notifications.warn("ABEA: Arraste itens apenas de uma ficha de personagem.");
    }
    if (data.type === "Skill" && !data.actorId) {
        return ui.notifications.warn("ABEA: Arraste habilidades apenas de uma ficha de personagem.");
    }

    let command;
    let name;
    let img;
    let folderType;

    if (data.type === "Item") {
        const item = await fromUuid(data.uuid); // Use fromUuid for reliability
        if (!item) return ui.notifications.warn("Item não encontrado.");
        name = item.name;
        img = item.img;
        command = `game.abea.rollItemMacro("${data.uuid}");`;
        folderType = item.type;
    } else {
        // Skill
        name = data.skillName;
        img = data.img || "icons/svg/d20.svg";
        command = `game.abea.rollSkillMacro("${data.actorId}", "${data.skillName}");`;
        folderType = "skill";
    }

    // Folder Organization
    const folder = await getOrCreateMacroFolder(folderType);

    // Reuse existing macro
    let macro = game.macros.find(m => (m.name === name) && (m.command === command) && (m.folder?.id === folder?.id));

    if (!macro) {
        macro = await Macro.create({
            name: name,
            type: "script",
            img: img,
            command: command,
            folder: folder?.id,
            flags: { "abea.itemMacro": true }
        });
    }

    await game.user.assignHotbarMacro(macro, slot);
    return false;
}

/**
 * Helper to get or create organization folders
 */
async function getOrCreateMacroFolder(type) {
    const rootName = "Item"; // Root folder name
    // 1. Get/Create Root
    let root = game.folders.find(f => f.name === rootName && f.type === "Macro" && !f.folder);
    if (!root) {
        root = await Folder.create({ name: rootName, type: "Macro", sorting: "a", color: "#2c3e50" });
    }

    // 2. Determine Subfolder Name
    let subName = "Geral";
    switch (type) {
        case "skill": subName = "Habilidades"; break; // Skill
        case "weapon": subName = "Armas"; break; // Weapon
        case "armor": subName = "Armaduras"; break;
        case "shield": subName = "Escudos"; break;
        case "equipment": subName = "Equipamento"; break;
        case "consumable": subName = "Consumíveis"; break;
        default: subName = "Outros"; break;
    }

    // 3. Get/Create Subfolder
    let sub = game.folders.find(f => f.name === subName && f.type === "Macro" && f.folder?.id === root.id);
    if (!sub) {
        sub = await Folder.create({ name: subName, type: "Macro", folder: root.id, sorting: "a" });
    }

    return sub;
}

/**
 * Roll a Macro from an Item UUID
 * @param {string} itemUuid
 * @return {Promise}
 */
export async function rollItemMacro(itemUuid) {
    const item = await fromUuid(itemUuid);
    if (!item) return ui.notifications.warn("ABEA.Warning.ItemNotFound", { localize: true });

    // Handle Weapon Attacks specifically
    if (item.type === "weapon" && item.actor) {
        if (item.actor.rollWeaponAttack) {
            return item.actor.rollWeaponAttack(item.id);
        }
    }

    // Trigger standard item roll
    return item.roll();
}

/**
 * Roll a Macro from a Skill
 * @param {string} actorId
 * @param {string} skillName
 * @return {Promise}
 */
export async function rollSkillMacro(actorId, skillName) {
    const actor = game.actors.get(actorId);

    if (!actor) return ui.notifications.warn("ABEA.Warning.ActorNotFound", { localize: true });

    // Execute the skill roll via the Actor method we just implemented
    if (actor.rollSkill) {
        return actor.rollSkill(skillName);
    } else {
        // Fallback for safety
        console.warn("ABEA | rollSkill method missing on Actor", actor);
        ui.notifications.warn("ABEA: Erro interno - Método rollSkill não encontrado.");
    }
}
