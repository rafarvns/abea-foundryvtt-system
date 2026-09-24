export const ABEA = {};

ABEA.skillTypes = {
    feat: "ABEA.Skill.Type.Feat",
    supernatural: "ABEA.Skill.Type.Supernatural"
};

ABEA.itemActionTypes = {
    "none": "ABEA.Item.Action.None",
    "heal": "ABEA.Item.Action.Heal"
};

ABEA.skillCategories = {
    feat: {
        general: "ABEA.Skill.Category.General",
        wilderness: "ABEA.Skill.Category.Wilderness",
        weapons: "ABEA.Skill.Category.Weapons",
        martialArts: "ABEA.Skill.Category.MartialArts",
        social: "ABEA.Skill.Category.Social",
        militaryNaval: "ABEA.Skill.Category.MilitaryNaval",
        crafts: "ABEA.Skill.Category.Crafts",
        arts: "ABEA.Skill.Category.Arts",
        musicalInstruments: "ABEA.Skill.Category.MusicalInstruments",
        otherTrades: "ABEA.Skill.Category.OtherTrades",
        academicStudies: "ABEA.Skill.Category.AcademicStudies",
        languages: "ABEA.Skill.Category.Languages"
    },
    supernatural: {
        divineGraces: "ABEA.Skill.Category.DivineGraces",
        breathPowers: "ABEA.Skill.Category.BreathPowers",
        ifaPowers: "ABEA.Skill.Category.IfaPowers"
    }
};

ABEA.difficulties = {
    easy: { label: "ABEA.Difficulty.Easy", value: 12 },
    normal: { label: "ABEA.Difficulty.Normal", value: 15 },
    hard: { label: "ABEA.Difficulty.Hard", value: 18 },
    legendary: { label: "ABEA.Difficulty.Legendary", value: 21 }
};

ABEA.statusEffects = [
    {
        id: "unconscious",
        name: "ABEA.Status.Unconscious",
        img: "icons/svg/unconscious.svg"
    },
    {
        id: "dead",
        name: "ABEA.Status.Dead",
        img: "icons/svg/skull.svg"
    }
];

/* -------------------------------------------- */
/*  Regras do livro básico                      */
/* -------------------------------------------- */

// Iniciativa: 3d6, rolada no início do combate (p. 40)
ABEA.initiative = { formula: "3d6", decimals: 0 };

// Resistência máxima: 10 base, +1 por habilidade listada no nível indicado, até 15 (p. 36)
ABEA.resistance = {
    base: 10,
    limit: 15,
    // nome da habilidade -> níveis que concedem +1
    skillBonus: {
        "Acrobacia": [3],
        "Corrida": [3],
        "Força Física": [3],
        "Natação": [3],
        "Escalada": [3],
        "Capoeira": [3],
        "Luta Livre": [3],
        "Boxe": [2, 3]
    },
    // Com esta resistência sobrando (ou menos), perde um nível em todas as façanhas (p. 37)
    woundThreshold: 3
};

// Defesa passiva e ativa (p. 38)
ABEA.defense = {
    limit: 5,
    martialArts: ["Boxe", "Capoeira", "Luta Livre"],
    rangedWeaponSkills: ["Armas de Arremesso", "Armas de Fogo", "Armas Mecânicas", "Armas de Sopro", "Arqueria"]
};

// Proteção dos itens (campo system.armor)
ABEA.armorSlots = {
    "": "ABEA.Item.Armor.None",
    head: "ABEA.Item.Armor.Head",
    torso: "ABEA.Item.Armor.Torso",
    shield: "ABEA.Item.Armor.Shield"
};

// Poderes sobrenaturais (p. 46-58)
ABEA.powers = {
    // Energia diária pelo nível da habilidade base (níveis 1-3 do livro; 4 segue o dobro)
    energyByLevel: [0, 5, 10, 20, 40],
    // Nível do poder -> dificuldade da façanha e custo de energia
    levels: {
        1: { difficulty: "easy", cost: 1 },
        2: { difficulty: "normal", cost: 2 },
        3: { difficulty: "hard", cost: 4 }
    },
    lines: {
        faith: {
            base: "Fé",
            powers: ["Proteção Contra o Mal", "Defesa Contra Magia", "Profecia", "Recuperação",
                "Acontecimentos Milagrosos", "Pão de Cada Dia", "Bênção"]
        },
        breath: {
            base: "Fôlego",
            powers: ["Cura", "Defesa", "Vida", "Dano", "Fraqueza", "Morte", "Mundo Espiritual",
                "Contra Magia", "Controle da Natureza", "Tempo", "Imbuir Poderes"]
        },
        ifa: {
            base: "Ifá",
            powers: ["Saúde", "Detecção", "Proteção", "Sorte", "Influência", "Energia Negativa",
                "Manuseio Espiritual", "Imbuir Poderes"]
        }
    }
};

// Pontos de aprendizagem: custo acumulado por nível (1, +2, +4, +8) (p. 16)
ABEA.learning = {
    costByLevel: [0, 1, 3, 7, 15],
    sessionAward: 2
};

// Uso das armas (vazio = deduzido pela habilidade)
ABEA.weaponUsage = {
    "": "ABEA.Weapon.Usage.Auto",
    melee: "ABEA.Weapon.Usage.Melee",
    ranged: "ABEA.Weapon.Usage.Ranged",
    both: "ABEA.Weapon.Usage.Both"
};

// Condição da arma: bônus ou penalidade nos testes de ataque (p. 87)
ABEA.weaponConditions = {
    "-3": "ABEA.Weapon.Condition.Damaged",
    "-2": "ABEA.Weapon.Condition.Rusty",
    "-1": "ABEA.Weapon.Condition.Poor",
    "0": "ABEA.Weapon.Condition.Normal",
    "1": "ABEA.Weapon.Condition.Fine",
    "2": "ABEA.Weapon.Condition.Enchanted",
    "3": "ABEA.Weapon.Condition.Legendary"
};

// Faixas de alcance -> dificuldade do Ataque à distância (p. 87)
ABEA.rangeBands = [
    { key: "normal", difficulty: "easy", label: "ABEA.Weapon.Range.Normal" },
    { key: "extended", difficulty: "normal", label: "ABEA.Weapon.Range.Extended" },
    { key: "distant", difficulty: "hard", label: "ABEA.Weapon.Range.Distant" },
    { key: "max", difficulty: "legendary", label: "ABEA.Weapon.Range.Max" }
];

// Varas por unidade de distância da cena (1 vara = 1,1 m)
ABEA.varasPerUnit = { m: 1 / 1.1, ft: 0.3048 / 1.1, vara: 1, varas: 1 };

// Ações de combate com arma (p. 41-43)
ABEA.combatActions = {
    melee: { label: "ABEA.Combat.Action.Melee", difficulty: "easy", defense: "active", damage: 0, usage: "melee" },
    strong: { label: "ABEA.Combat.Action.Strong", difficulty: "hard", defense: "active", damage: 2, usage: "melee" },
    precise: { label: "ABEA.Combat.Action.Precise", difficulty: "hard", defense: null, damage: 2, usage: "any" },
    ranged: { label: "ABEA.Combat.Action.Ranged", difficulty: null, defense: "passive", damage: 0, usage: "ranged" },
    rangedMelee: { label: "ABEA.Combat.Action.RangedMelee", difficulty: "easy", defense: "active", damage: 0, usage: "rangedOnly", penalty: -3 },
    disarm: { label: "ABEA.Combat.Action.Disarm", difficulty: "legendary", defense: null, damage: null, usage: "melee" },
    grapple: { label: "ABEA.Combat.Action.Grapple", difficulty: null, defense: null, damage: null, usage: "grapple" }
};

// Bônus das ações sem arma (p. 43)
ABEA.combatBonus = { defend: 2, dodge: 2, aid: 2 };
