# Local Documentation Navigation Guide

This guide teaches AI agents how to effectively search and navigate the local FoundryVTT V13 API documentation.

## Documentation File Overview

```
../foundryvtt_v13_docs/
├── foundry_v13_api_reference.md  ⭐ START HERE - 19MB consolidated file
├── classes/                       # 599 class definitions
├── interfaces/                    # 393 interface definitions
├── functions/                     # 260 standalone functions
├── modules/                       # 100 module namespaces
├── hierarchy.html                 # Inheritance tree
└── index.html                     # Human-readable overview
```

## Search Strategies

### Strategy 1: Grep the Consolidated File (FASTEST)

The `foundry_v13_api_reference.md` file contains ALL documentation in searchable markdown format.

**Find ActorSheetV2 documentation:**
```bash
grep -A 50 "ActorSheetV2" ../foundryvtt_v13_docs/foundry_v13_api_reference.md
```

**Find all DataModel field types:**
```bash
grep "Field.*:" ../foundryvtt_v13_docs/foundry_v13_api_reference.md | grep "foundry.data.fields"
```

**Find prepareDerivedData usage:**
```bash
grep -B 5 -A 10 "prepareDerivedData" ../foundryvtt_v13_docs/foundry_v13_api_reference.md
```

### Strategy 2: View Specific HTML Class Files

For detailed method documentation, open the HTML file directly:

```
ActorSheetV2:    ../foundryvtt_v13_docs/classes/foundry.applications.sheets.ActorSheetV2.html
ItemSheetV2:     ../foundryvtt_v13_docs/classes/foundry.applications.sheets.ItemSheetV2.html
TypeDataModel:   ../foundryvtt_v13_docs/classes/foundry.abstract.TypeDataModel.html
Actor:           ../foundryvtt_v13_docs/classes/foundry.documents.Actor.html
Item:            ../foundryvtt_v13_docs/classes/foundry.documents.Item.html
```

### Strategy 3: Use Hierarchy for Inheritance

Open `../foundryvtt_v13_docs/hierarchy.html` to see class inheritance relationships visually.

## Common Queries and Where to Look

| What You Need | Where to Find It | Search Term |
|---------------|------------------|-------------|
| ApplicationV2 methods | `foundry_v13_api_reference.md` | "ApplicationV2" |
| Field types for schemas | `foundry_v13_api_reference.md` | "foundry.data.fields" |
| Actor document methods | `classes/foundry.documents.Actor.html` | N/A (open file) |
| Sheet lifecycle methods | `foundry_v13_api_reference.md` | "_prepareContext" or "_renderHTML" |
| Hooks documentation | `foundry_v13_api_reference.md` | "Hooks.on" or "Hooks.once" |
| CONFIG options | `foundry_v13_api_reference.md` | "CONFIG.Actor" |

## File Naming Convention

**Classes**: `foundry.{namespace}.{ClassName}.html`
- Example: `foundry.applications.sheets.ActorSheetV2.html`
- Namespace structure mirrors API: `foundry.applications.sheets.ActorSheetV2`

## Reading HTML Documentation

When viewing HTML class files:
1. **Constructor** - initialization parameters
2. **Static Properties** - class-level configuration (e.g., DEFAULT_OPTIONS)
3. **Instance Properties** - object state
4. **Methods** - functions you can call
   - `@public` - safe to use
   - `@protected` - override in subclasses
   - `@private` - don't touch
5. **Hierarchy** - parent classes (inheritance chain)

## Quick Reference Cheat Sheet

**Most Important Classes** (memorize these paths):

### Document Base
- `foundry.abstract.Document`
- `foundry.abstract.DataModel`
- `foundry.abstract.TypeDataModel`

### Actor/Item
- `foundry.documents.BaseActor`
- `foundry.documents.Actor`
- `foundry.documents.BaseItem`
- `foundry.documents.Item`

### Sheets (V13)
- `foundry.applications.api.ApplicationV2`
- `foundry.applications.sheets.ActorSheetV2`
- `foundry.applications.sheets.ItemSheetV2`
- `foundry.applications.api.HandlebarsApplicationMixin`

### Data Fields
- `foundry.data.fields.DataField` (base)
- `foundry.data.fields.StringField`
- `foundry.data.fields.NumberField`
- `foundry.data.fields.SchemaField`
- `foundry.data.fields.HTMLField`
- `foundry.data.fields.ArrayField`
- `foundry.data.fields.BooleanField`

## When You Don't Find Something

1. **Search consolidated file first**:
   ```bash
   grep -i "keyword" ../foundryvtt_v13_docs/foundry_v13_api_reference.md
   ```

2. **Check hierarchy** for inheritance relationships

3. **Look for similar classes** - V13 often has patterns

4. **Search by method name** if you know what you're looking for:
   ```bash
   grep "methodName" ../foundryvtt_v13_docs/foundry_v13_api_reference.md
   ```

## Example Workflow: "How do I create an ActorSheet?"

1. **Search**: `grep "ActorSheetV2" ../foundryvtt_v13_docs/foundry_v13_api_reference.md`
2. **Find** the class definition with methods
3. **Read** `DEFAULT_OPTIONS`, `PARTS`, `_prepareContext` documentation
4. **Check** `HandlebarsApplicationMixin` for Handlebars integration
5. **Review** examples in `foundry_v13_api_reference.md`

## Supplementary Online Resources

These online guides provide conceptual understanding (use local docs for API reference):
- [System Development Guide](https://foundryvtt.com/article/system-development/)
- [System Data Models Guide](https://foundryvtt.com/article/system-data-models/)
- [Migration Guides](https://foundryvtt.com/article/migration/)
- [Knowledge Base](https://foundryvtt.com/kb/)
