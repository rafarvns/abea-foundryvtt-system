---
title: "sheets | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.applications.sheets.html"
category: "modules"
---

# Namespace sheets

Additional information on Document Sheets inside of Foundry.

# Document Sheets

The root class for all document sheets in Foundry is  [`foundry.applications.api.DocumentSheetV2`](../classes/foundry.applications.api.DocumentSheetV2.md), which extends `ApplicationV2` to add document specific methods and form handling. System developers will want to extend  [`foundry.applications.sheets.ActorSheetV2`](../classes/foundry.applications.sheets.ActorSheetV2.md) and  [`foundry.applications.sheets.ItemSheetV2`](../classes/foundry.applications.sheets.ItemSheetV2.md) for their Actor and Item sheets respectively. All three of these classes must be wrapped by `HandlebarsApplicationMixin` for proper use.

## Registration

Sheet registration should be done in the `init` hook using  [`foundry.applications.apps.DocumentSheetConfig.registerSheet`](../classes/foundry.applications.apps.DocumentSheetConfig.md#registersheet). You can register any number of sheets and specify any range of document subtypes they are eligible for; depending on your goals, you may want to have one sheet for all subtypes, one sheet per subtype, or somewhere in the middle.

```
const { api, sheets } = foundry.applications;  
  
class SystemActorSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {}  
  
class SystemItemSheet extends api.HandlebarsApplicationMixin(sheets.ItemSheetV2) {}  
  
Hooks.once("init", () => {  
  const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;  
  
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, game.system.id, SystemActorSheet, {  
    makeDefault: true,  
  });  
  DocumentSheetConfig.registerSheet(foundry.documents.Item, game.system.id, SystemItemSheet, {  
    makeDefault: true,  
    // an example of registering for specific subtypes  
    types: ["weapon", "armor"]  
  });  
})
Copy
```

**Non-Registered Sheets**: Not all subclasses of DocumentSheet need to be registered. For example, you can define an intermediate class that multiple of your sheets inherit from but is not itself registered as a sheet. Furthermore, you can use document sheets as helper forms when some data doesn't naturally fit into your sheet. When you do so, you *must* pass the linked document into the constructor of your sheet class, e.g. `new MyHelperSheet({ document: someDocument })`.

## Drag and Drop

The `ActorSheetV2` and `ItemSheetV2` classes both offer baseline drag and drop support. They have a variety of helper functions that can be overridden to customize the expected drop behavior; the default assumption is a naive creation of the item or effect inside the sheet's associated document if possible.

To make items draggable, give the outer element representing the item the `data-item-id` attribute. As a side note, to make sure that item sorting works properly, you need to sort during context preparation; given an array of `items`, `items.sort((a, b) => a.sort - b.sort)` will use the sort value to properly sort items.

```
{{#each items}}  
<li data-item-id={{id}}>{{name}}</li>  
{{/each}}
Copy
```

For Active Effects, give the `data-effect-id` attribute, and if the effect is from an item, include the item's ID via the `data-item-id` attribute (you can fetch grandchild effects via the  [foundry.documents.Actor.allApplicableEffects](../classes/foundry.documents.Actor.md#allapplicableeffects) generator during context prep). The default implementation of Active Effect drag and drop does not support sorting; consider instead sorting by name, like the following:

```
// Actor Sheet  
const actorEffects = [...this.actor.allApplicableEffects()].sort((a, b) => a.name.localeCompare(b.name, game.i18n.lang));  
  
// Item Sheet  
const itemEffects = this.item.effects.contents.sort((a, b) => a.name.localeCompare(b.name, game.i18n.lang));
Copy
```

## Rendering

Registered document sheets are available in the [`sheet`](../classes/foundry.ClientDocument.md#sheet) property; given a `doc`, you can call `doc.sheet.render({ force: true })` to open that sheet. You can also generate the HTML for a clickable link from the [`link`](../classes/foundry.ClientDocument.md#link) property.

Document sheets are automatically re-rendered whenever the associated document is updated, regardless of if the sheet is registered as the primary sheet or simply an unregistered helper sheet. If you are not seeing this behavior with a subclass of `DocumentSheetV2`, then you probably extended `_onFirstRender` without calling `await super._onFirstRender(context, options)`.

## Namespaces

[journal](foundry.applications.sheets.journal.md)

[palette](foundry.applications.sheets.palette.md)

## Classes

[ActiveEffectConfig](../classes/foundry.applications.sheets.ActiveEffectConfig.md)

[ActorSheetV2](../classes/foundry.applications.sheets.ActorSheetV2.md)

[AdventureExporter](../classes/foundry.applications.sheets.AdventureExporter.md)

[AdventureImporterV2](../classes/foundry.applications.sheets.AdventureImporterV2.md)

[AmbientLightConfig](../classes/foundry.applications.sheets.AmbientLightConfig.md)

[AmbientSoundConfig](../classes/foundry.applications.sheets.AmbientSoundConfig.md)

[BaseSheet](../classes/foundry.applications.sheets.BaseSheet.md)

[CardConfig](../classes/foundry.applications.sheets.CardConfig.md)

[CardDeckConfig](../classes/foundry.applications.sheets.CardDeckConfig.md)

[CardHandConfig](../classes/foundry.applications.sheets.CardHandConfig.md)

[CardPileConfig](../classes/foundry.applications.sheets.CardPileConfig.md)

[CardsConfig](../classes/foundry.applications.sheets.CardsConfig.md)

[CombatantConfig](../classes/foundry.applications.sheets.CombatantConfig.md)

[DrawingConfig](../classes/foundry.applications.sheets.DrawingConfig.md)

[FolderConfig](../classes/foundry.applications.sheets.FolderConfig.md)

[ItemSheetV2](../classes/foundry.applications.sheets.ItemSheetV2.md)

[LevelConfig](../classes/foundry.applications.sheets.LevelConfig.md)

[MacroConfig](../classes/foundry.applications.sheets.MacroConfig.md)

[NoteConfig](../classes/foundry.applications.sheets.NoteConfig.md)

[PlaceableConfig](../classes/foundry.applications.sheets.PlaceableConfig.md)

[PlaylistConfig](../classes/foundry.applications.sheets.PlaylistConfig.md)

[PlaylistSoundConfig](../classes/foundry.applications.sheets.PlaylistSoundConfig.md)

[PrototypeTokenConfig](../classes/foundry.applications.sheets.PrototypeTokenConfig.md)

[RegionBehaviorConfig](../classes/foundry.applications.sheets.RegionBehaviorConfig.md)

[RegionConfig](../classes/foundry.applications.sheets.RegionConfig.md)

[RollTableSheet](../classes/foundry.applications.sheets.RollTableSheet.md)

[SceneConfig](../classes/foundry.applications.sheets.SceneConfig.md)

[TableResultConfig](../classes/foundry.applications.sheets.TableResultConfig.md)

[TileConfig](../classes/foundry.applications.sheets.TileConfig.md)

[TokenConfig](../classes/foundry.applications.sheets.TokenConfig.md)

[UserConfig](../classes/foundry.applications.sheets.UserConfig.md)

[WallConfig](../classes/foundry.applications.sheets.WallConfig.md)

## Functions

[\_registerDefaultSheets](../functions/foundry.applications.sheets._registerDefaultSheets.md)