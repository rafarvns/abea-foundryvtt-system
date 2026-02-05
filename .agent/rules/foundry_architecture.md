# FoundryVTT V13 Architecture Guide

This guide provides deep technical knowledge of FoundryVTT V13 architecture patterns for system development.

## Where to Find Information

**Local Documentation Paths:**
```
ActorSheetV2:    ../foundryvtt_v13_docs/classes/foundry.applications.sheets.ActorSheetV2.html
ItemSheetV2:     ../foundryvtt_v13_docs/classes/foundry.applications.sheets.ItemSheetV2.html
TypeDataModel:   ../foundryvtt_v13_docs/classes/foundry.abstract.TypeDataModel.html
Actor:           ../foundryvtt_v13_docs/classes/foundry.documents.Actor.html
Item:            ../foundryvtt_v13_docs/classes/foundry.documents.Item.html
DataField types: ../foundryvtt_v13_docs/modules/foundry.data.fields.html
```

**Quick Search**: `grep -i "ClassName" ../foundryvtt_v13_docs/foundry_v13_api_reference.md`

---

## 1. Document System

### Base Document Classes

FoundryVTT uses a hierarchy of Document classes:

```
foundry.abstract.Document (base for all documents)
├── foundry.abstract.DataModel (data structure)
│   └── foundry.abstract.TypeDataModel (for document subtypes)
├── foundry.documents.BaseActor (server + client shared)
│   └── foundry.documents.Actor (client-side)
└── foundry.documents.BaseItem (server + client shared)
    └── foundry.documents.Item (client-side)
```

### Custom Document Implementations

Extend Actor/Item classes to add game-specific logic:

```javascript
export class AbeaActor extends Actor {
  async applyDamage(damage) {
    damage = Math.max(1, Math.round(damage));
    const { value } = this.system.resources.health;
    await this.update({ "system.resources.health.value": value - damage });
    
    await ChatMessage.implementation.create({
      content: `${this.name} took ${damage} damage!`
    });
  }
}
```

### Registration

Register custom classes in your system's init hook:

```javascript
CONFIG.Actor.documentClass = AbeaActor;
CONFIG.Item.documentClass = AbeaItem;
```

**Local Reference**: Search `foundry_v13_api_reference.md` for "CONFIG.Actor.documentClass"

---

## 2. DataModel Architecture

### TypeDataModel Base Class

Use `foundry.abstract.TypeDataModel` for document subtypes:

```javascript
export class HeroDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const { NumberField, SchemaField, StringField } = foundry.data.fields;
    return {
      level: new NumberField({ initial: 1, min: 1, max: 30, integer: true }),
      experience: new NumberField({ initial: 0, min: 0, integer: true }),
      background: new SchemaField({
        biography: new HTMLField({ required: true, blank: true }),
        notes: new StringField({ required: true, blank: true })
      })
    };
  }
}
```

### Available Field Types

From `foundry.data.fields`:

| Field Type | Use Case | Example Options |
|------------|----------|-----------------|
| `StringField` | Text values | `{ blank: false, choices: ["a", "b"] }` |
| `NumberField` | Numeric values | `{ min: 0, max: 100, integer: true }` |
| `BooleanField` | True/false | `{ initial: false }` |
| `SchemaField` | Nested objects | `{ required: true }` |
| `HTMLField` | Rich text | `{ blank: true }` |
| `ArrayField` | Lists | `{ initial: [] }` |
| `SetField` | Unique lists | `{ initial: new Set() }` |
| `DocumentIdField` | Document references | `{ type: "Actor" }` |
| `ForeignDocumentField` | Foreign doc refs | `{ type: "Item", idOnly: false }` |

**Local Reference**: `../foundryvtt_v13_docs/modules/foundry.data.fields.html`

### Schema Inheritance

Use spread operator to inherit parent schemas:

```javascript
class BaseActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const { NumberField, SchemaField } = foundry.data.fields;
    return {
      resources: new SchemaField({
        health: new SchemaField({
          value: new NumberField({ initial: 10, min: 0 }),
          max: new NumberField({ initial: 10, min: 0 })
        })
      })
    };
  }
}

export class HeroDataModel extends BaseActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),  // Inherit parent schema
      heroicPoints: new NumberField({ initial: 3, min: 0 })
    };
  }
}
```

---

## 3. Data Preparation Lifecycle

### Preparation Methods

Two key methods for derived data:

1. **`prepareBaseData()`** - Called BEFORE:
   - Embedded documents are prepared
   - ActiveEffects are applied
   
2. **`prepareDerivedData()`** - Called AFTER:
   - Embedded documents are prepared
   - ActiveEffects are applied

### Where to Implement

**In Document Class** (for all subtypes):
```javascript
export class AbeaActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();
    
    // Clamp health within min/max
    const { health } = this.system.resources;
    health.value = Math.clamp(health.value, health.min, health.max);
  }
}
```

**In DataModel Class** (for specific subtype):
```javascript
export class HeroDataModel extends foundry.abstract.TypeDataModel {
  prepareDerivedData() {
    super.prepareDerivedData();
    
    // Calculate level from experience
    this.level = Math.floor(this.experience / 1000) + 1;
  }
}
```

### Performance Considerations

- ❌ **DON'T**: Perform heavy calculations or database queries
- ❌ **DON'T**: Make async calls (preparation is synchronous)
- ✅ **DO**: Simple calculations and data clamping
- ✅ **DO**: Set derived properties based on source data

**Local Reference**: Search `foundry_v13_api_reference.md` for "prepareDerivedData"

---

## 4. Sheet Applications (V13 ApplicationV2)

### CRITICAL: V13 Sheet Pattern

**You MUST use ApplicationV2 and HandlebarsApplicationMixin:**

```javascript
const { ActorSheetV2, HandlebarsApplicationMixin } = foundry.applications.sheets;

export class AbeaActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["abea", "sheet", "actor"],
    tag: "form",
    window: {
      resizable: true,
      minWidth: 500,
      minHeight: 600
    },
    actions: {
      rollSkill: this._onRollSkill
    }
  };

  static PARTS = {
    shell: {
      template: "systems/abea/templates/actor/actor-sheet.hbs"
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const actorData = this.document;

    context.system = actorData.system;
    context.flags = actorData.flags;
    context.config = CONFIG.ABEA;

    return context;
  }

  static async _onRollSkill(event, target) {
    const skillId = target.dataset.skillId;
    // Roll logic here
  }
}
```

### Key ApplicationV2 Concepts

1. **DEFAULT_OPTIONS**: Static configuration object
   - `classes`: CSS classes for the application
   - `window`: Window configuration (size, resizable, etc.)
   - `actions`: Event handlers mapped to data-action attributes

2. **PARTS**: Template parts for rendering
   - `shell`: Main template
   - Can have multiple parts for complex sheets

3. **_prepareContext()**: Prepare data for template
   - Replaces old `getData()` method
   - Must return object with template data
   - Called before rendering

4. **Actions**: Event handlers
   - Define in `DEFAULT_OPTIONS.actions`
   - Reference in template: `<button data-action="rollSkill">`
   - Static methods with signature: `(event, target) => {}`

### Registration

```javascript
Actors.unregisterSheet("core", ActorSheet);
Actors.registerSheet("abea", AbeaActorSheet, {
  types: ["character"],
  makeDefault: true,
  label: "ABEA.Sheet.Actor"
});
```

**Local Reference**: `../foundryvtt_v13_docs/classes/foundry.applications.sheets.ActorSheetV2.html`

---

## 5. System Manifest (system.json)

### Required V13 Fields

```json
{
  "id": "abea",
  "title": "ABEA System",
  "version": "1.0.0",
  "compatibility": {
    "minimum": "13",
    "verified": "13.351"
  },
  "esmodules": ["scripts/abea.mjs"],
  "styles": ["styles/abea.css"],
  "languages": [
    {
      "lang": "en",
      "name": "English",
      "path": "lang/en.json"
    }
  ],
  "documentTypes": {
    "Actor": {
      "character": {
        "html": "templates/actor/character-sheet.hbs",
        "label": "ABEA.Actor.Character"
      }
    },
    "Item": {
      "weapon": {
        "html": "templates/item/weapon-sheet.hbs",
        "label": "ABEA.Item.Weapon"
      }
    }
  }
}
```

### DataModel Registration

In your system's init hook:

```javascript
CONFIG.Actor.dataModels = {
  character: HeroDataModel,
  npc: NpcDataModel
};

CONFIG.Item.dataModels = {
  weapon: WeaponDataModel,
  spell: SpellDataModel
};
```

---

## 6. Common Patterns

### CONFIG Namespace

Store system configuration in `CONFIG.ABEA`:

```javascript
CONFIG.ABEA = {
  skillList: ["athletics", "stealth", "perception"],
  damageTypes: ["physical", "magical", "elemental"]
};
```

### Hooks

Use Foundry's hook system for events:

```javascript
Hooks.once("init", function() {
  console.log("ABEA | Initializing system");
  // Register DataModels, configure settings
});

Hooks.on("ready", function() {
  console.log("ABEA | System ready");
  // System is fully loaded
});

Hooks.on("updateActor", function(actor, changes, options, userId) {
  // React to actor updates
});
```

**Local Reference**: Search `foundry_v13_api_reference.md` for "Hooks"

---

## 7. Anti-Patterns (V13)

### ❌ DON'T Use Deprecated V1 Patterns

```javascript
// ❌ WRONG - V1 Pattern (deprecated)
export class MyActorSheet extends ActorSheet {
  getData() { /* ... */ }
}

// ✅ CORRECT - V13 Pattern
const { ActorSheetV2, HandlebarsApplicationMixin } = foundry.applications.sheets;
export class MyActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  async _prepareContext(options) { /* ... */ }
}
```

### ❌ DON'T Forget HandlebarsApplicationMixin

```javascript
// ❌ WRONG - Missing mixin
export class MyActorSheet extends ActorSheetV2 {
  // Won't work with Handlebars templates!
}

// ✅ CORRECT - With mixin
export class MyActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  // Handlebars support included
}
```

### ❌ DON'T Use getData()

```javascript
// ❌ WRONG - V1 method
getData() {
  return { actor: this.actor };
}

// ✅ CORRECT - V13 method
async _prepareContext(options) {
  const context = await super._prepareContext(options);
  context.actor = this.document;
  return context;
}
```

---

## Quick Reference

**Essential Classes to Know:**
- `foundry.abstract.TypeDataModel` - Base for DataModels
- `foundry.applications.sheets.ActorSheetV2` - V13 Actor sheets
- `foundry.applications.sheets.ItemSheetV2` - V13 Item sheets
- `foundry.applications.api.HandlebarsApplicationMixin` - Handlebars support
- `foundry.data.fields.*` - Schema field types

**Essential Methods:**
- `defineSchema()` - Define DataModel schema (static)
- `prepareBaseData()` - Prepare data before effects
- `prepareDerivedData()` - Prepare data after effects
- `_prepareContext()` - Prepare template data (async)

**For More Details**: See [Local Docs Guide](./local_docs_guide.md) for search strategies.
