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
