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
