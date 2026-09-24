---
title: "documents | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.documents.html"
category: "modules"
---

# Namespace documents

Document definitions used throughout the Foundry Virtual Tabletop framework.
The [Document](../classes/foundry.abstract.Document.md) class represents a discrete entry in the server-side database.

## Document Subclasses

Foundry has over 30 distinct Document types, each of which is available in the global namespace. However, the typical system only needs to customize a handful of them (Actor and Item being the most typical), while the rest can be left alone.

Subclassing a document is as simple as extending the class and replacing the reference in CONFIG.

```
class MyActor extends Actor {}  
  
Hooks.once("init", () => {  
  CONFIG.Actor.documentClass = MyActor;  
});
Copy
```

The advantage of subclassing a document is you can adjust the behavior of core functions, such as `actor.getRollData()`, the function generally used to populate roll paths (e.g. `1d20 + @abilities.str.mod` in dnd5e). By default, this function only returns a reference to the system property of the actor, but by subclassing it we can add in more information.

```
class MyActor extends Actor {  
  getRollData() {  
    const rollData = { ...this.system, flags: this.flags };  
  
    return rollData;  
  }  
}
Copy
```

Now, in addition to the system information, users can access anything stored in flags with `@flags.key.value`! There are many other functions in the core software which are written with subclassing in mind, which you can find through the official API documentation.

Some important limitations of document subclassing:

* You can only register one document class per document type; the following section, document subtypes, covers how you can have varied behavior
* You cannot modify the database-backed schemas of documents; custom properties must go inside of `flags` or `system` (if available).
* You cannot define new document types beyond those defined by the core software.

## Document Subtypes

While there can only be one registered document class per document type, there can be any number of registered document subtypes. A document subtype is a way to establish categories of documents, such as "character" or "npc". Eleven document types currently support subtypes; that is to say, they have a paired "type" and "system" field (a few others, like RollTable, have a `type` field but these cannot be customized or extended by community packages and do not have a corresponding `system` field).

* [ActiveEffect](../classes/foundry.documents.ActiveEffect.md)
* [Actor](../classes/foundry.documents.Actor.md)
* [Card](../classes/foundry.documents.Card.md)
* [Cards](../classes/foundry.documents.Cards.md)
* [ChatMessage](../classes/foundry.documents.ChatMessage.md)
* [Combat](../classes/foundry.documents.Combat.md)
* [Combatant](../classes/foundry.documents.Combatant.md)
* [CombatantGroup](../classes/foundry.documents.CombatantGroup.md)
* [Item](../classes/foundry.documents.Item.md)
* [JournalEntryPage](../classes/foundry.documents.JournalEntryPage.md)
* [RegionBehavior](../classes/foundry.documents.RegionBehavior.md)

You donât need to implement your own subtypes for each of these; most systems only need to specify subtypes for Actor and Item. The rest, without registered subtypes, will default to `type: "base"`.

Registering a subtype is done in the "documentTypes" property of system.json or module.json.

```
  "documentTypes": {  
    "Actor": {  
      "character": {},  
      "npc": {}  
    },  
    "Item": {  
      "equipment": {},  
      "feature": {}  
    }  
  },
Copy
```

This informs the server to expect that Actor will have two subtypes: "character" and "npc", while Items will have "equipment" and "feature". Foundry strictly prohibits creating un-registered document subtypes, however systems are not the only ones that can define a subtype â modules are also able to register subtypes. A module-registered subtype is always of the format `module-id.subtype`.

The second part of defining a document subtype is registering a data model for each subtype. The [Data Models](foundry.data.md) page gets into the details of how to fill in these data models, but the following is a good pattern for defining data models. Systems should always subclass TypeDataModel for these purposes (The exception is ActiveEffect subtypes, which should subclass  [`foundry.data.ActiveEffectTypeDataModel`](../classes/foundry.data.ActiveEffectTypeDataModel.md)).

```
class CharacterModel extends foundry.abstract.TypeDataModel {  
  static defineSchema() {  
    return {}  
  }  
}  
  
const actorConfig = {  
  character: CharacterModel  
}  
  
Hooks.once("init", () => {  
  Object.assign(CONFIG.Actor.dataModels, actorConfig);  
});
Copy
```

The `actorConfig` object, above, is necessary to associate the names of the subtypes defined in `system.json` with their data models. That is to say, each Actor with a type of "character" will have a `CharacterModel` instance for its system property.

## Working with Documents

All package developers need to work with documents in some form. Documents are stored in collections, such as a [`WorldCollection`](../classes/foundry.documents.abstract.WorldCollection.md), [`CompendiumCollection`](../classes/foundry.documents.collections.CompendiumCollection.md), or an [`EmbeddedCollection`](../classes/foundry.abstract.EmbeddedCollection.md). Document operations often reference [`parent`](../classes/foundry.abstract.Document.md#parent) and foundry.abstract.Document.pack; a document's `parent` is the document that has the `EmbeddedCollection` containing it, and a document's `pack` is the ID of the `CompendiumCollection` holding it. A document embedded inside of another document that is inside a compendium would have both a `parent` and a `pack`.

These relationships are predefined and validated by the server â there is no world collection of active effects and items cannot be embedded inside of each other. Many documents are only valid as embedded documents, e.g. a Token is always contained within a Scene. Individual document class pages have more information about the available collections the document can be included in and what valid embedded documents it has if any.

### Accessing Documents

Documents are distinguished within a collection by their `_id`, a 16-character string that is the only property that is guaranteed unique within a given collection. Collections of all forms provide synchronous access with the `get` method, which takes the document's `_id` and returns the document. A basic example of this is [`game.actors.get`](../classes/foundry.documents.collections.Actors.md#get), which accesses the `Actors` collection to return an actor contained within the world. Collections have many other methods for working with their contents, such as being iterable for `for` loops; check out the various  [`foundry.utils.Collection`](../classes/foundry.utils.Collection.md) subclass pages for more information on them.

The [`uuid`](../classes/foundry.abstract.Document.md#uuid) property provides the full path of collections and IDs necessary to retrieve a document. For example, an active effect inside of an item on an unlinked token actor might have a UUID of `Scene.6ES7pwxLe2XpxS7u.Token.PhV3rSGgTBDwMJzi.Actor.lhsXXokRvqYijRSp.Item.jFoLCNS2BFxZQeVd.ActiveEffect.Q0A91xSgxHvzCrXM`; you can see how the UUID alternates between document names and IDs. The [`fromUuidSync`](../functions/foundry.utils.fromUuidSync.md) method can retrieve any world document, regardless of how deeply embedded, when provided a valid UUID. The  [`foundry.utils.parseUuid`](../functions/foundry.utils.parseUuid.md) method can be helpful when trying to understand pieces of a UUID programmatically.

Working with compendiums is more complicated. Documents inside of a compendium are *not* fully loaded, which has the benefit of improving performance but restricts options available to developers. The typical way of accessing a document inside of a compendium is by knowing the UUID and using [`fromUuid`](../functions/foundry.utils.fromUuid.md), which will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the document. A typical construction is `const doc = await fromUuid(uuid)`. If you need *many* documents from a given `pack`, the [`pack.getDocuments()`](../classes/foundry.documents.collections.CompendiumCollection.md#getdocuments) method can help. You can find individual compendium collections inside [`game.packs`](../classes/foundry.documents.collections.CompendiumPacks.md), which itself is a `Collection` subclass that uses a concatenation of the package `id` and pack `name`, e.g. `crucible.affixes`. All documents stored inside of a compendium have a UUID that starts with `Compendium`, e.g. `Compendium.crucible.affixes.ActiveEffect.determination000`.

If you need to access information about documents inside a compendium at synchronous speed, some data *is* cached in the [`pack.index`](../classes/foundry.documents.collections.CompendiumCollection.md#index) property. This includes each document's `name` (helpful if you want to go `pack.index.getName`), `img`, and `type`, alongside the `_id` and a constructed `uuid` property. Alongside the various methods of iterating on collections like [`filter`](../classes/foundry.utils.Collection.md#filter), this can allow you to synchronously prepare a list of documents without needing to perform a costly full-fetch. You can expand the cached information with the [`getIndex`](../classes/foundry.documents.collections.CompendiumCollection.md#getindex) method; the [`ready`](../functions/hookEvents.ready.md) hook is generally the most appropriate time to expand the indices this way.

### Creating Documents

Document creation in Foundry is performed through factory methods like [`Item.create`](../classes/foundry.documents.Item.md#create) â normal class construction like `new Item` does not communicate with the database on the server to properly persist the created document.

**Document Data:** The first argument to `create` is the document data. The valid data for each document type is determined by the document's schema, which is validated by the server. You can see a full list of document typedefs on the [types](foundry.documents.types.md) page. This document data should be JSON serializable (so no complex objects like classes or sets). Most fields for documents have initial values and are not required, but a few fields like `name` and `type` are usually required. This document data is saved to the created document's `_source`. When Foundry makes changes to core document schemas it provides migrations and shims to help and minimize immediate breakage but it is still important to stay on top of any changes that do happen.

**Document Operation Parameters:** The second argument to create methods is almost always `operations`, which informs the operation. The two most important parameters are `parent` and `pack`, which help locate *where* you want to create the document; `Item.create` defaults to creating a world item, but if you want the item to be inside an Actor you need to pass that actor as the `parent`, and if you want the item to be created inside of a compendium you need to provide the pack ID for `pack`. If you want to create an item inside an actor that is inside a compendium you do not need to pass both, just `parent` is required. There are other optional parameters as listed in the [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md) typedef, and unlike document data you can define your own parameters â any JSON serializable properties will be kept throughout the full database transaction process.

**Batched Operations:** If you want to create multiple documents at once in the same place, [`createDocuments`](../classes/foundry.abstract.Document.md#createdocuments) is your friend â instead of a single data object, you provide an array of them. Alternatively, you can use [`createEmbeddedDocuments`](../classes/foundry.abstract.Document.md#createembeddeddocuments), which is an instance method of the parent that doesn't require `parent` or `pack` but does require you to specify the document type being created. If you need to operate in multiple locations, use  [`foundry.documents.modifyBatch`](../functions/foundry.documents.modifyBatch.md).

### Updating Documents

Updating documents follows many of the same principles as document creation, but instead of a static factory method the [`update`](../classes/foundry.abstract.Document.md#update) method is called on the document instance to be updated, e.g. `item.update`. If you're updating a nested property, Foundry accepts using dot-separated strings for the keys, e.g. `actor.update({ "system.hp.value": 10 })`. Like creation, updates have their own `operation` parameter which is defined by [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), but this is much more rarely needed for individual updates â Foundry will automatically fill in the `pack` and `parent` for the document being updated.

**Special Operators:** Document updates default to partial diffing (except for arrays, which are always fully replaced). To help Foundry has made the [`_del`](../classes/foundry.data.operators.ForcedDeletion.md) and [`_replace`](../classes/foundry.data.operators.ForcedReplacement.md) operators globally available. `_del` will remove a key from an object (usually useful with `TypedObjectField`), while `_replace(data)` indicates that the properties should be fully replaced by the provided `data` object rather than performing a partial update.

**Flags:** The [`setFlag`](../classes/foundry.abstract.Document.md#setflag) and [`unsetFlag`](../classes/foundry.abstract.Document.md#unsetflag) methods are wrappers for `update` that can simplify the process of constructing the flag update while validating it's of the proper format. If you have a more complex update to perform it may be preferable to use the general `update` method.

**Batched Operations:** To update multiple documents at the same time it is necessary to use methods like [`updateDocuments`](../classes/foundry.abstract.Document.md#updatedocuments). This method takes an array of update data, which in addition to the data that is being updated *also* requires providing the matching `_id` for each document so Foundry knows *which* documents are being updated. Like `createDocuments`, you must provide `parent` or `pack` as needed to specify where these updates are taking place. Alternatively, you can use [`updateEmbeddedDocuments`](../classes/foundry.abstract.Document.md#updateembeddeddocuments), which is an instance method of the parent that doesn't require `parent` or `pack` but does require you to specify the document type being updated. If these updates are occurring across multiple locations, leverage  [`foundry.documents.modifyBatch`](../functions/foundry.documents.modifyBatch.md).

### Deleting Documents

Deleting an individual document is fairly simple; just call the [`delete`](../classes/foundry.abstract.Document.md#delete) method from the document instance. You may want to use [`deleteDialog`](../classes/foundry.ClientDocument.md#deletedialog) instead to obtain confirmation, since deletions are irreversible. Like creation, deletion has its own `operation` parameter which is defined by [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), but this is much more rarely needed for individual deletions â Foundry will automatically fill in the `pack` and `parent` for the document being deleted.

**Batched Operations:** To delete multiple documents at the same time it is necessary to use methods like [`deleteDocuments`](../classes/foundry.abstract.Document.md#deletedocuments). This method takes an array of document ids. Like `createDocuments`, you must provide `parent` or `pack` as needed to specify where these deletions are taking place. Alternatively, you can use [`deleteEmbeddedDocuments`](../classes/foundry.abstract.Document.md#deleteembeddeddocuments), which is an instance method of the parent that doesn't require `parent` or `pack` but does require you to specify the document type being deleted. If these deletions are occurring across multiple locations, leverage  [`foundry.documents.modifyBatch`](../functions/foundry.documents.modifyBatch.md).

## Namespaces

[abstract](foundry.documents.abstract.md)

[collections](foundry.documents.collections.md)

[types](foundry.documents.types.md)

## Classes - Documents

[ActiveEffect](../classes/foundry.documents.ActiveEffect.md)

[Actor](../classes/foundry.documents.Actor.md)

[ActorDelta](../classes/foundry.documents.ActorDelta.md)

[Adventure](../classes/foundry.documents.Adventure.md)

[AmbientLightDocument](../classes/foundry.documents.AmbientLightDocument.md)

[AmbientSoundDocument](../classes/foundry.documents.AmbientSoundDocument.md)

[BaseActiveEffect](../classes/foundry.documents.BaseActiveEffect.md)

[BaseActor](../classes/foundry.documents.BaseActor.md)

[BaseActorDelta](../classes/foundry.documents.BaseActorDelta.md)

[BaseAdventure](../classes/foundry.documents.BaseAdventure.md)

[BaseAmbientLight](../classes/foundry.documents.BaseAmbientLight.md)

[BaseAmbientSound](../classes/foundry.documents.BaseAmbientSound.md)

[BaseCard](../classes/foundry.documents.BaseCard.md)

[BaseCards](../classes/foundry.documents.BaseCards.md)

[BaseChatMessage](../classes/foundry.documents.BaseChatMessage.md)

[BaseCombat](../classes/foundry.documents.BaseCombat.md)

[BaseCombatant](../classes/foundry.documents.BaseCombatant.md)

[BaseCombatantGroup](../classes/foundry.documents.BaseCombatantGroup.md)

[BaseDrawing](../classes/foundry.documents.BaseDrawing.md)

[BaseFogExploration](../classes/foundry.documents.BaseFogExploration.md)

[BaseFolder](../classes/foundry.documents.BaseFolder.md)

[BaseItem](../classes/foundry.documents.BaseItem.md)

[BaseJournalEntry](../classes/foundry.documents.BaseJournalEntry.md)

[BaseJournalEntryCategory](../classes/foundry.documents.BaseJournalEntryCategory.md)

[BaseJournalEntryPage](../classes/foundry.documents.BaseJournalEntryPage.md)

[BaseLevel](../classes/foundry.documents.BaseLevel.md)

[BaseMacro](../classes/foundry.documents.BaseMacro.md)

[BaseNote](../classes/foundry.documents.BaseNote.md)

[BasePlaylist](../classes/foundry.documents.BasePlaylist.md)

[BasePlaylistSound](../classes/foundry.documents.BasePlaylistSound.md)

[BaseRegion](../classes/foundry.documents.BaseRegion.md)

[BaseRegionBehavior](../classes/foundry.documents.BaseRegionBehavior.md)

[BaseRollTable](../classes/foundry.documents.BaseRollTable.md)

[BaseScene](../classes/foundry.documents.BaseScene.md)

[BaseSetting](../classes/foundry.documents.BaseSetting.md)

[BaseTableResult](../classes/foundry.documents.BaseTableResult.md)

[BaseTile](../classes/foundry.documents.BaseTile.md)

[BaseToken](../classes/foundry.documents.BaseToken.md)

[BaseUser](../classes/foundry.documents.BaseUser.md)

[BaseWall](../classes/foundry.documents.BaseWall.md)

[Card](../classes/foundry.documents.Card.md)

[Cards](../classes/foundry.documents.Cards.md)

[ChatMessage](../classes/foundry.documents.ChatMessage.md)

[Combat](../classes/foundry.documents.Combat.md)

[Combatant](../classes/foundry.documents.Combatant.md)

[CombatantGroup](../classes/foundry.documents.CombatantGroup.md)

[DrawingDocument](../classes/foundry.documents.DrawingDocument.md)

[FogExploration](../classes/foundry.documents.FogExploration.md)

[Folder](../classes/foundry.documents.Folder.md)

[Item](../classes/foundry.documents.Item.md)

[JournalEntry](../classes/foundry.documents.JournalEntry.md)

[JournalEntryCategory](../classes/foundry.documents.JournalEntryCategory.md)

[JournalEntryPage](../classes/foundry.documents.JournalEntryPage.md)

[Level](../classes/foundry.documents.Level.md)

[Macro](../classes/foundry.documents.Macro.md)

[NoteDocument](../classes/foundry.documents.NoteDocument.md)

[Playlist](../classes/foundry.documents.Playlist.md)

[PlaylistSound](../classes/foundry.documents.PlaylistSound.md)

[RegionBehavior](../classes/foundry.documents.RegionBehavior.md)

[RegionDocument](../classes/foundry.documents.RegionDocument.md)

[RollTable](../classes/foundry.documents.RollTable.md)

[Scene](../classes/foundry.documents.Scene.md)

[Setting](../classes/foundry.documents.Setting.md)

[TableResult](../classes/foundry.documents.TableResult.md)

[TileDocument](../classes/foundry.documents.TileDocument.md)

[TokenDocument](../classes/foundry.documents.TokenDocument.md)

[User](../classes/foundry.documents.User.md)

[WallDocument](../classes/foundry.documents.WallDocument.md)

## Functions

[modifyBatch](../functions/foundry.documents.modifyBatch.md)