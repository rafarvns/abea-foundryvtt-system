/**
 * Data model for ABEA characters.
 * @extends {foundry.abstract.TypeDataModel}
 */
export class CharacterData extends foundry.abstract.TypeDataModel {
    /** @override */
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            biography: new fields.SchemaField({
                characteristics: new fields.HTMLField({ initial: "" }),
                history: new fields.HTMLField({ initial: "" })
            }),
            details: new fields.SchemaField({
                age: new fields.StringField({ initial: "" })
            }),
            attributes: new fields.SchemaField({
                defense: new fields.SchemaField({
                    passive: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
                    active: new fields.NumberField({ initial: 0, integer: true, min: 0 })
                }),
                energy: new fields.SchemaField({
                    value: new fields.NumberField({ initial: 10, integer: true, min: 0 }),
                    max: new fields.NumberField({ initial: 10, integer: true, min: 0 })
                }),
                condition: new fields.SchemaField({
                    resistance: new fields.NumberField({ initial: 0, integer: true, min: 0, max: 15 }),
                    resistanceMaxBonus: new fields.NumberField({ initial: 0, integer: true, min: 0, max: 5 }), // 10 base + up to 5
                    critical: new fields.NumberField({ initial: 0, integer: true, min: 0, max: 5 }),
                    notes: new fields.StringField({ initial: "" })
                }),
                skillPoints: new fields.NumberField({ initial: 0, integer: true, min: 0 })
            }),
            skills: new fields.ArrayField(new fields.SchemaField({
                name: new fields.StringField({ initial: "New Skill" }),
                rank: new fields.NumberField({ initial: 0, choices: [0, 1, 2, 3, 4] }), // 0: None, 1-4: Levels
                img: new fields.StringField({ required: false, blank: true, initial: "icons/svg/item-bag.svg" })
            })),
            currency: new fields.SchemaField({
                gold: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
                silver: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
                bronze: new fields.NumberField({ initial: 0, integer: true, min: 0 }),
                value: new fields.NumberField({ initial: 0, integer: true, min: 0 })
            })
        };
    }
}
