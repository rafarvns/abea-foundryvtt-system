---
title: "data | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.data.html"
category: "modules"
---

# Namespace data

A module which defines data architecture components.
Data models strongly define data structures in Foundry VTT to ensure objects have properties in the expected forms and values. They go above and beyond a "strongly typed" programming language by initializing, validating, cleaning, and migrating data during every operation. While all [Documents](../classes/foundry.abstract.Document.md) are data models, the actual data model class is *only* concerned with ensuring the data structure of transacted objects, and does not have anything to do with the client-server communication that makes sure data is synched across all foundry instances. As a result, data models can be used in many situations, not just the "Base" document classes like [`BaseActor`](../classes/foundry.documents.BaseActor.md). An easy example of this is the relationship between documents and document subtypes; all Actors use the same Actor data model, but the `system` property can be any one of your registered data models.

## Schemas and Fields

The most important function in any DataModel subclass is static defineSchema. This function returns an object of DataField instances which are saved to the modelâs  [`foundry.abstract.DataModel.schema`](../classes/foundry.abstract.DataModel.md#schema-1) property. The schema is separate from the actual data stored in a data model instance, and because itâs a static property thereâs only one copy of it for all instances. All fields are accessible from within  [`foundry.data.fields`](foundry.data.fields.md).

**Options.** Every DataField constructor takes an options object, which specifies details about the field. Every field takes required, nullable, and initial, which determine how the field handles missing and/or nullish values. The required property, which defaults to false for most fields, prevents undefined values. The nullable property, which defaults to false for most fields, allows null values. The initial property, which can be a value or function, defines the starting value. If a field is required, not nullable, and does not have an initial value, attempting to construct the data model will throw an error if that field is not included in the construction data.

**Simple Fields.** The most basic fields are [BooleanField](../classes/foundry.data.fields.BooleanField.md), [StringField](../classes/foundry.data.fields.StringField.md), and [NumberField](../classes/foundry.data.fields.NumberField.md). They are also the most commonly used, as every other field either exists to bundle them or extend them. StringField and NumberField have some unique options like `blank`, `choices`, and `min`/`max` that can be helpful when constraining the possible values. One important note with `choices`: If itâs a field you expect modules to add new options (e.g. gear categories), do not use the data field `choices`; instead, handle the options inside of your sheet class. Data Model validation errors are difficult for end users to resolve, and introducing validation errors when a user disables a module adding an invalid choice is not the most graceful way to handle the error.

**Advanced Fields.** The [SchemaField](../classes/foundry.data.fields.SchemaField.md), [TypedObjectField](../classes/foundry.data.fields.TypedObjectField.md), [ArrayField](../classes/foundry.data.fields.ArrayField.md), and [SetField](../classes/foundry.data.fields.SetField.md) classes are all different ways to contain other fields. Each of these have options as the second argument, with the first argument defining the inner contents.

* SchemaField is for nested objects where you know the keys and their values; the return of defineSchema itself feeds into a SchemaField, which is what you get when you access the schema property.
* TypedObjectField is for nested objects where you donât know the keys but do know the shape of their values.
* ArrayField initializes an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array); keep in mind that arrays do not allow partial updates, unlike objects, and so are much more difficult to work with if the contents are going to be objects.
* SetField initializes a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set); their uniqueness guarantees are irrelevant if the inner contents are an object, but can be very helpful when the inner field is a StringField.

**Document References.** [ForeignDocumentField](../classes/foundry.data.fields.ForeignDocumentField.md) and [DocumentUUIDField](../classes/foundry.data.fields.DocumentUUIDField.md) are special subclasses of StringField meant to hold a reference to a document. ForeignDocumentField is useful when the collection of the other document is known ahead of time (such as game.actors or the parent document). If the document is not a world collection like `game.actors`, be sure to pass `idOnly: true` in the field options. Conversely, DocumentUUIDField is helpful when you donât know the collection and so need the full document path; itâs especially useful when assembling "advancement" systems that need to reference content in compendiums.

**Other Classes.** There are a number of other DataField subclasses available within Foundry, but they are typically less relevant to system development; few systems need to specify a HueField. Others, such as EmbeddedDataField and TypedSchemaField, have nuances that go beyond the scope of this article. Itâs also worth noting that EmbeddedCollectionField and EmbeddedDocumentField are not for community use â package developers cannot define new embedded document structures, e.g. "Items within Items".

### Server-Side Sanitation

One important field left off above was [HTMLField](../classes/foundry.data.fields.HTMLField.md); this is the field used for rich text editors for descriptions and biographies. The reason it is in this separate section is because it requires a separate declaration in system.json for server-side sanitation; user-input HTML poses a potential security risk, so the server needs to know how to sanitize it.

```
  "documentTypes": {  
    "Actor": {  
      "character": {  
        "htmlFields": ["biography.value", "biography.gm"],  
        "gmOnlyFields": ["biography.gm"]  
      },  
      "npc": {  
        "htmlFields": ["biography.value", "biography.gm"],  
        "gmOnlyFields": ["biography.gm"]  
      }  
    },  
  },
Copy
```

The examples above showcase how this works; the path is relative to your data model, with . path separation. You can use an \* as a wildcard if the HTML field is inside of an ArrayField or TypedObjectField.

The other feature the above sample showcases is gmOnlyFields. Normally, owners of a document have full ability to perform updates, even if a given field is not exposed in the UI. The gmOnlyFields array allows you to specify properties that cannot be updated by owners even through the console. *Note:* There are no ways to prevent a user from reading properties via the console. Consider this part of the social contract that users engage in when they play a tabletop roleplaying game; programmatically preventing all possible cheating is impossible, and game masters are still responsible for only inviting players who agree to play fair.

## Localization

The default document create dialog has specific expectations for how to localize the names of your document subtypes. By default, registering "character" and "npc" in system.json will result in a create dialog only listing those exact keys. To get a localized version (e.g capitalizing), you need to add the following structure to your en.json file. The top level key is "TYPES", the next level is the document type, and the third level is the specific subtype.

```
  "TYPES": {  
    "Actor": {  
      "character": "Character",  
      "npc": "NPC"  
    },  
    "Item": {  
      "equipment": "Equipment",  
      "feature": "Feature"  
    }  
  }
Copy
```

Another important feature for localizing documents and data models is  [`foundry.abstract.DataModel.LOCALIZATION_PREFIXES`](../classes/foundry.abstract.DataModel.md#localization_prefixes), which is the currently recommended way for tying together your localization file, the contents of your data models, and the labels in your sheets.

## System Data Preparation

Not all data available in your system should be defined in your schema and stored in the server-side database. For example, in dnd5e the ability modifiers are derived from ability scores, and the total carrying weight should be derived from the items. This process is known as "Data preparation" and is automatically performed whenever a document is created or updated. The primary function handling data preparation is clientDocument.prepareData, but as a developer you should prefer extending the prepareBaseData and prepareDerivedData methods on your TypeDataModel subclasses.

* The document instance is accessible via `this.parent`, e.g. `this.parent.items` will access the parent documentâs items collection.
* The prepareBaseData functions are for initializing values and performing operations before active effects are applied. This can be useful if you want to set dynamic defaults that the `initial` option canât capture.
* The prepareDerivedData functions occur after active effects are applied. This is generally more useful and where the rest of your math should occur.
* Do not use the `update` or `setFlag` methods within data prep; instead, perform in-memory variable assignment with the = operation, like `this.hp.bloodied = Math.floor(this.hp.max / 2)`.

**Non-persisted data fields.** The `persisted` option for data fields, introduced in Version 14, always defaults to true. When false, the field is not a valid field for input purposes but can be targeted by active effects. This replaces most historic use cases for prepareBaseData, allowing you to initialize properties to values like 0, 1, or an empty set or array.

## Using Data Models for Polymorphism

The most broad power of data models is their ability to allow type-specific behavior and take full advantage of object-oriented programming principles. What that exactly looks like will depend on your needs, but some examples:

**Class Inheritance.** You can define a "shared" parent data model class that defines certain properties, then extend it to add more properties. This is helpful when you have multiple separate types that are mostly the same but with some differences.

```
class MyDataModelSubclass extends MyDataModelSuperclass {  
  static defineSchema() {  
    const schema = super.defineSchema();  
  
    schema.foo = new StringField();  
  
    return schema;  
  }  
}
Copy
```

**Varied Implementation.** It may be necessary for two types to be able to perform a function, but the logic may be different between the two. You can implement methods on both typeâs data models with the same name, but the internals are different between the two. For example, you could adjust [`Actor#getRollData`](../classes/foundry.documents.Actor.md#getrolldata) to look like the following â each of your data models would implement the `modifyRollData()` method, but each can implement it differently according to their needs.

```
  getRollData() {  
    // Shallow copy  
    const rollData = { ...this.system, flags: this.flags };  
    // Allow system-specific modifications, e.g. adding getters  
    if (this.system.modifyRollData instanceof Function) {  
      this.system.modifyRollData(rollData);  
    }  
  
    return rollData;  
  }
Copy
```

## Namespaces

[fields](foundry.data.fields.md)

[operators](foundry.data.operators.md)

[regionBehaviors](foundry.data.regionBehaviors.md)

[types](foundry.data.types.md)

[validation](foundry.data.validation.md)

[validators](foundry.data.validators.md)

## Classes

[ActiveEffectTypeDataModel](../classes/foundry.data.ActiveEffectTypeDataModel.md)

[ActorDeltaField](../classes/foundry.data.ActorDeltaField.md)

[BaseShapeData](../classes/foundry.data.BaseShapeData.md)

[BaseTerrainData](../classes/foundry.data.BaseTerrainData.md)

[CalendarData](../classes/foundry.data.CalendarData.md)

[CircleShapeData](../classes/foundry.data.CircleShapeData.md)

[ClientDatabaseBackend](../classes/foundry.data.ClientDatabaseBackend.md)

[CombatConfiguration](../classes/foundry.data.CombatConfiguration.md)

[ConeShapeData](../classes/foundry.data.ConeShapeData.md)

[EllipseShapeData](../classes/foundry.data.EllipseShapeData.md)

[EmanationShapeData](../classes/foundry.data.EmanationShapeData.md)

[GridShapeData](../classes/foundry.data.GridShapeData.md)

[LightData](../classes/foundry.data.LightData.md)

[LineShapeData](../classes/foundry.data.LineShapeData.md)

[PolygonShapeData](../classes/foundry.data.PolygonShapeData.md)

[PolygonTree](../classes/foundry.data.PolygonTree.md)

[PolygonTreeNode](../classes/foundry.data.PolygonTreeNode.md)

[PrototypeToken](../classes/foundry.data.PrototypeToken.md)

[PrototypeTokenOverrides](../classes/foundry.data.PrototypeTokenOverrides.md)

[RectangleShapeData](../classes/foundry.data.RectangleShapeData.md)

[RingShapeData](../classes/foundry.data.RingShapeData.md)

[ShapeData](../classes/foundry.data.ShapeData.md)

[TerrainData](../classes/foundry.data.TerrainData.md)

[TextureData](../classes/foundry.data.TextureData.md)

[TokenShapeData](../classes/foundry.data.TokenShapeData.md)

[TombstoneData](../classes/foundry.data.TombstoneData.md)

## Variables

[SIMPLIFIED\_GREGORIAN\_CALENDAR\_CONFIG](../variables/foundry.data.SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG.md)