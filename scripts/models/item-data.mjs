/**
 * Data models for ABEA items.
 */

export class AbeaItemData extends foundry.abstract.TypeDataModel {
    /** @override */
    /** @override */
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            description: new fields.HTMLField({ required: false, blank: true }),
            quantity: new fields.NumberField({ required: true, nullable: false, initial: 1, integer: true, min: 0 }),
            type: new fields.StringField({ required: false, blank: true, initial: "" }),
            // Proteção para a defesa: "" | "head" | "torso" | "shield" (vazio = inferido pelo tipo)
            armor: new fields.StringField({ required: false, blank: true, initial: "" }),
            // Preço de referência em réis (p. 92-96)
            price: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true, min: 0 }),
            action: new fields.SchemaField({
                type: new fields.StringField({ required: true, initial: "none" }),
                value: new fields.NumberField({ required: true, initial: 0, min: 0 }),
                isConsumable: new fields.BooleanField({ required: true, initial: false })
            })
        };
    }
}

export class AbeaWeaponData extends AbeaItemData {
    /** @override */
    static defineSchema() {
        const fields = foundry.data.fields;
        const schema = super.defineSchema();
        schema.damage = new fields.StringField({ required: true, blank: true, initial: "" });
        schema.skillType = new fields.StringField({ required: false, blank: true, initial: "" });
        schema.hands = new fields.StringField({ required: false, blank: true, initial: "" });
        schema.range = new fields.StringField({ required: false, blank: true, initial: "" });
        // "" (from the skill) | "melee" | "ranged" | "both"
        schema.usage = new fields.StringField({ required: false, blank: true, initial: "" });
        // Upper bound of each range band, in varas (0 = no ranged use)
        const band = () => new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true, min: 0 });
        schema.ranges = new fields.SchemaField({ normal: band(), extended: band(), distant: band(), max: band() });
        // Weapon quality: -3 (damaged) to +3 (legendary), added to attack tests
        schema.condition = new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true, min: -3, max: 3 });
        return schema;
    }
}

export class AbeaSkillData extends AbeaItemData {
    /** @override */
    static defineSchema() {
        const fields = foundry.data.fields;
        const schema = super.defineSchema();
        schema.type = new fields.StringField({ required: true, initial: "feat" });
        schema.category = new fields.StringField({ required: true, initial: "general" });
        return schema;
    }
}

/**
 * Personality trait (Característica, p. 32-34). No mechanical effect.
 */
export class AbeaTraitData extends foundry.abstract.TypeDataModel {
    /** @override */
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            description: new fields.HTMLField({ required: false, blank: true }),
            flaw: new fields.BooleanField({ required: true, initial: false })
        };
    }
}
