/**
 * Cálculos de regras do livro básico (resistência, defesa, energia, ferimento, poderes).
 */

import { ABEA } from "../config.mjs";

/**
 * Normaliza nomes para comparação (sem acento, caixa ou espaços extras).
 * @param {string} name
 * @returns {string}
 */
export function normalizeName(name) {
    return String(name ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

/**
 * Nível de uma habilidade do ator (0 se não possuir).
 * @param {object} system  Dados de sistema do ator
 * @param {string} name
 * @returns {number}
 */
export function getSkillRank(system, name) {
    const key = normalizeName(name);
    const skill = (system.skills ?? []).find(s => normalizeName(s.name) === key);
    return Number(skill?.rank) || 0;
}

/**
 * Bônus de resistência máxima vindo das habilidades (p. 36).
 * @param {object} system
 * @returns {number}
 */
export function resistanceSkillBonus(system) {
    let bonus = 0;
    for (const [name, levels] of Object.entries(ABEA.resistance.skillBonus)) {
        const rank = getSkillRank(system, name);
        bonus += levels.filter(level => rank >= level).length;
    }
    return bonus;
}

/**
 * O personagem está ferido o suficiente para perder um nível nas façanhas (p. 37)?
 * @param {object} system
 * @returns {boolean}
 */
export function isWounded(system) {
    const { resistance = 0, resistanceMax = 0 } = system.attributes.condition;
    return (resistance > 0) && ((resistanceMax - resistance) <= ABEA.resistance.woundThreshold);
}

/**
 * Nível efetivo de uma habilidade para uma façanha, aplicando a penalidade por ferimento.
 * @param {object} system
 * @param {number} rank
 * @returns {number}
 */
export function effectiveRank(system, rank) {
    return isWounded(system) ? Math.max(0, rank - 1) : rank;
}

/**
 * Tipo de proteção de um item: campo explícito ou inferido do texto "tipo".
 * @param {Item} item
 * @returns {""|"head"|"torso"|"shield"}
 */
export function armorSlot(item) {
    if (item.system.armor) return item.system.armor;
    const type = normalizeName(item.system.type);
    if (type.startsWith("escudo")) return "shield";
    if (type.startsWith("armadura (cabeca")) return "head";
    if (type.startsWith("armadura")) return "torso";
    return "";
}

/**
 * Nome da habilidade usada por uma arma (o campo guarda o UUID da habilidade no compêndio).
 * @param {Item} weapon
 * @returns {string}
 */
export function weaponSkillName(weapon) {
    const ref = weapon.system.skillType;
    if (!ref) return "";
    if (!ref.includes(".")) return ref;
    return fromUuidSync(ref, { strict: false })?.name ?? "";
}

/**
 * Defesa passiva e ativa calculadas pelo equipamento e habilidades (p. 38).
 * @param {Actor} actor
 * @returns {{passive: number, active: number, breakdown: object}}
 */
export function computeDefense(actor) {
    const system = actor.system;
    const slots = new Set(actor.items.map(armorSlot));
    const head = slots.has("head") ? 1 : 0;
    const torso = slots.has("torso") ? 1 : 0;
    const shield = slots.has("shield") ? 1 : 0;

    // Melhor nível entre as armas corpo a corpo que carrega e as artes marciais (desarmado)
    const ranged = new Set(ABEA.defense.rangedWeaponSkills.map(normalizeName));
    let weapon = 0;
    for (const item of actor.items) {
        if (item.type !== "weapon") continue;
        const skill = weaponSkillName(item);
        if (!skill || ranged.has(normalizeName(skill))) continue;
        weapon = Math.max(weapon, getSkillRank(system, skill));
    }
    for (const name of ABEA.defense.martialArts) weapon = Math.max(weapon, getSkillRank(system, name));

    const limit = ABEA.defense.limit;
    const passive = Math.min(limit, head + torso);
    const active = Math.min(limit, passive + weapon + shield);
    return { passive, active, breakdown: { head, torso, shield, weapon } };
}

/**
 * Linhas sobrenaturais possíveis para um poder, com o nível do ator na habilidade base.
 * @param {object} system
 * @param {string} name
 * @returns {{key: string, base: string, baseRank: number}[]}
 */
export function powerLinesFor(system, name) {
    const key = normalizeName(name);
    return Object.entries(ABEA.powers.lines)
        .filter(([, line]) => line.powers.some(power => normalizeName(power) === key))
        .map(([lineKey, line]) => ({ key: lineKey, base: line.base, baseRank: getSkillRank(system, line.base) }));
}

/**
 * Energia diária máxima pelo maior nível de Fé, Fôlego ou Ifá (p. 47).
 * @param {object} system
 * @returns {number}
 */
export function energyMax(system) {
    const table = ABEA.powers.energyByLevel;
    const rank = Math.max(...Object.values(ABEA.powers.lines).map(line => getSkillRank(system, line.base)));
    return table[Math.min(rank, table.length - 1)] ?? 0;
}

/* -------------------------------------------- */
/*  Pontos de aprendizagem                      */
/* -------------------------------------------- */

/**
 * Total de pontos de aprendizagem investidos numa lista de habilidades (p. 16).
 * @param {object[]} skills
 * @returns {number}
 */
export function learningCost(skills) {
    const table = ABEA.learning.costByLevel;
    return (skills ?? []).reduce((total, skill) => {
        const rank = Math.clamp(Number(skill?.rank) || 0, 0, table.length - 1);
        return total + table[rank];
    }, 0);
}

/* -------------------------------------------- */
/*  Armas: uso, alcance e distância             */
/* -------------------------------------------- */

// Habilidades de combate com armas ou artes marciais (usadas para a dificuldade de Agarrar)
const COMBAT_SKILLS = ["Armas de Corte", "Armas de Golpe", "Armas de Haste", "Armas de Arremesso", "Armas de Fogo",
    "Armas Mecânicas", "Armas de Sopro", "Arqueria", "Esgrima", "Boxe", "Capoeira", "Luta Livre"];

/**
 * Como a arma pode ser usada: campo explícito ou deduzido pela habilidade.
 * @param {Item} weapon
 * @returns {"melee"|"ranged"|"both"}
 */
export function weaponUsage(weapon) {
    if (weapon.system.usage) return weapon.system.usage;
    const ranged = ABEA.defense.rangedWeaponSkills.map(normalizeName);
    return ranged.includes(normalizeName(weaponSkillName(weapon))) ? "ranged" : "melee";
}

/**
 * Faixa de alcance para uma distância, ou null se estiver além do alcance máximo (p. 87).
 * Armas sem faixas cadastradas usam sempre a faixa normal.
 * @param {Item} weapon
 * @param {number|null} distance   Em varas; null = combate próximo (faixa normal)
 * @returns {{key: string, difficulty: string, label: string}|null}
 */
export function rangeBand(weapon, distance) {
    const ranges = weapon.system.ranges ?? {};
    if (!ranges.max || (distance === null) || (distance === undefined)) return ABEA.rangeBands[0];
    return ABEA.rangeBands.find(band => distance <= (ranges[band.key] || 0)) ?? null;
}

/**
 * Distância em varas entre dois tokens, ou null se a unidade da cena for desconhecida.
 * @param {Token} from
 * @param {Token} to
 * @returns {number|null}
 */
export function distanceInVaras(from, to) {
    if (!canvas?.ready || !from || !to) return null;
    const factor = ABEA.varasPerUnit[normalizeName(canvas.scene.grid.units)];
    if (!factor) return null;
    const { distance } = canvas.grid.measurePath([from.center, to.center]);
    return Math.round(distance * factor);
}

/**
 * Maior nível do ator em armas ou artes marciais (p. 42, Agarrar).
 * @param {object} system
 * @returns {number}
 */
export function bestCombatRank(system) {
    return Math.max(0, ...COMBAT_SKILLS.map(name => getSkillRank(system, name)));
}

/* -------------------------------------------- */
/*  Bônus temporários de combate                */
/* -------------------------------------------- */

/**
 * Chave da rodada atual do combate ativo, ou null fora de combate.
 * @returns {string|null}
 */
export function combatRoundKey() {
    const combat = game.combat;
    return combat?.started ? `${combat.id}.${combat.round}` : null;
}

/**
 * Soma os bônus de Defender-se e Esquivar-se da rodada atual (podem passar do limite de 5).
 * @param {Actor} actor
 */
export function applyCombatBonuses(actor) {
    const key = combatRoundKey();
    const state = actor.flags.abea?.combat ?? {};
    const defense = actor.system.attributes.defense;
    defense.defending = !!key && (state.defend === key);
    defense.dodging = !!key && (state.dodge === key);
    if (defense.dodging) {
        defense.passive += ABEA.combatBonus.dodge;
        defense.active += ABEA.combatBonus.dodge;
    }
    if (defense.defending) defense.active += ABEA.combatBonus.defend;
}
