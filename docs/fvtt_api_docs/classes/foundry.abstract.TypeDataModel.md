---
title: "TypeDataModel | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.abstract.TypeDataModel.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [abstract](../modules/foundry.abstract.html)
* [TypeDataModel](foundry.abstract.TypeDataModel.html)

# Class TypeDataModel<ModelData>`Abstract`

A specialized subclass of DataModel, intended to represent a Document's type-specific data.
Systems or Modules that provide DataModel implementations for sub-types of Documents (such as Actors or Items)
should subclass this class instead of the base DataModel class.

#### See

[foundry.abstract.Document](foundry.abstract.Document.html)

#### Example: Registering a custom sub-type for a Module.

**module.json**

```
{  
  "id": "my-module",  
  "esmodules": ["main.mjs"],  
  "documentTypes": {  
    "Actor": {  
      "sidekick": {},  
      "villain": {}  
    },  
    "JournalEntryPage": {  
      "dossier": {},  
      "quest": {  
        "htmlFields": ["description"]  
      }  
    }  
  }  
}
Copy
```

**main.mjs**

```
Hooks.on("init", () => {  
  Object.assign(CONFIG.Actor.dataModels, {  
    "my-module.sidekick": SidekickModel,  
    "my-module.villain": VillainModel  
  });  
  Object.assign(CONFIG.JournalEntryPage.dataModels, {  
    "my-module.dossier": DossierModel,  
    "my-module.quest": QuestModel  
  });  
});  
  
class QuestModel extends foundry.abstract.TypeDataModel {  
  static defineSchema() {  
    const fields = foundry.data.fields;  
    return {  
      description: new fields.HTMLField({required: false, blank: true, initial: ""}),  
      steps: new fields.ArrayField(new fields.StringField())  
    };  
  }  
  
  prepareDerivedData() {  
    this.totalSteps = this.steps.length;  
  }  
}
Copy
```

**en.json** To provide the localization for methods like [ClientDocument.createDialog](foundry.ClientDocument.html#createdialog)

```
{  
  "TYPES": {  
    "Actor": {  
      "sidekick": "Sidekick",  
      "villain": "Villain"  
    },  
    "JournalEntryPage": {  
      "dossier": "Dossier",  
      "quest": "Quest"  
    }  
  }  
}
Copy
```

#### Type Parameters

* ModelData = object

#### Hierarchy ([View Summary](../hierarchy.html#foundry.abstract.TypeDataModel))

* [DataModel](foundry.abstract.DataModel.html)
  + TypeDataModel
    - [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.html)

##### Index

### Constructors

[constructor](foundry.abstract.TypeDataModel.html#constructor)

### Properties

[\_source](foundry.abstract.TypeDataModel.html#_source)
[parent](foundry.abstract.TypeDataModel.html#parent)
[\_schema](foundry.abstract.TypeDataModel.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.abstract.TypeDataModel.html#localization_prefixes)

### Accessors

[invalid](foundry.abstract.TypeDataModel.html#invalid)
[schema](foundry.abstract.TypeDataModel.html#schema)
[validationFailures](foundry.abstract.TypeDataModel.html#validationfailures)
[schema](foundry.abstract.TypeDataModel.html#schema-2)

### Methods

[\_preCreate](foundry.abstract.TypeDataModel.html#_precreate)
[clone](foundry.abstract.TypeDataModel.html#clone)
[prepareBaseData](foundry.abstract.TypeDataModel.html#preparebasedata)
[prepareDerivedData](foundry.abstract.TypeDataModel.html#preparederiveddata)
[reset](foundry.abstract.TypeDataModel.html#reset)
[toEmbed](foundry.abstract.TypeDataModel.html#toembed)
[toJSON](foundry.abstract.TypeDataModel.html#tojson)
[toObject](foundry.abstract.TypeDataModel.html#toobject)
[updateSource](foundry.abstract.TypeDataModel.html#updatesource)
[validate](foundry.abstract.TypeDataModel.html#validate)
[\_configure](foundry.abstract.TypeDataModel.html#_configure)
[\_initialize](foundry.abstract.TypeDataModel.html#_initialize)
[\_initializeSource](foundry.abstract.TypeDataModel.html#_initializesource)
[\_onCreate](foundry.abstract.TypeDataModel.html#_oncreate)
[\_onDelete](foundry.abstract.TypeDataModel.html#_ondelete)
[\_onUpdate](foundry.abstract.TypeDataModel.html#_onupdate)
[\_preDelete](foundry.abstract.TypeDataModel.html#_predelete)
[\_preUpdate](foundry.abstract.TypeDataModel.html#_preupdate)
[cleanData](foundry.abstract.TypeDataModel.html#cleandata)
[defineSchema](foundry.abstract.TypeDataModel.html#defineschema)
[fromJSON](foundry.abstract.TypeDataModel.html#fromjson)
[fromSource](foundry.abstract.TypeDataModel.html#fromsource)
[migrateData](foundry.abstract.TypeDataModel.html#migratedata)
[migrateDataSafe](foundry.abstract.TypeDataModel.html#migratedatasafe)
[shimData](foundry.abstract.TypeDataModel.html#shimdata)
[validateJoint](foundry.abstract.TypeDataModel.html#validatejoint)
[\_initializationOrder](foundry.abstract.TypeDataModel.html#_initializationorder)

## Constructors

### constructor

* new TypeDataModel<[ModelData](foundry.abstract.TypeDataModel.html#constructortypedatamodelmodeldata) extends object = object>(  
  Â Â Â Â data?: {},  
  Â Â Â Â options?: {},  
  ): [TypeDataModel](foundry.abstract.TypeDataModel.html)<[ModelData](foundry.abstract.TypeDataModel.html#constructortypedatamodelmodeldata)>

  #### Type Parameters

  + ModelData extends object = object

  #### Parameters

  + data: {} = {}
  + options: {} = {}

  #### Returns [TypeDataModel](foundry.abstract.TypeDataModel.html)<[ModelData](foundry.abstract.TypeDataModel.html#constructortypedatamodelmodeldata)>

  #### Inherit Doc

  Overrides [DataModel](foundry.abstract.DataModel.html).[constructor](foundry.abstract.DataModel.html#constructor)

## Properties

### \_source

\_source: [ModelData](foundry.abstract.TypeDataModel.html#constructortypedatamodelmodeldata)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [DataModel](foundry.abstract.DataModel.html).[\_source](foundry.abstract.DataModel.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [DataModel](foundry.abstract.DataModel.html).[parent](foundry.abstract.DataModel.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [DataModel](foundry.abstract.DataModel.html).[\_schema](foundry.abstract.DataModel.html#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: any[] = []

A set of localization prefix paths which are used by this DataModel. This provides an alternative to defining the
`label` and `hint` property of each field by having foundry map the labels to a structure inside the path
provided by the prefix.

#### Example

JavaScript class definition and localization call.

```
class MyDataModel extends foundry.abstract.DataModel {  
  static defineSchema() {  
    return {  
      foo: new foundry.data.fields.StringField(),  
      bar: new foundry.data.fields.NumberField()  
    };  
  }  
  static LOCALIZATION_PREFIXES = ["MYMODULE.MYDATAMODEL"];  
}  
  
Hooks.on("i18nInit", () => {  
  // Foundry will attempt to automatically localize models registered for a document subtype, so this step is only  
  // needed for other data model usage, e.g. for a Setting.  
  Localization.localizeDataModel(MyDataModel);  
});
Copy
```

JSON localization file

```
{  
  "MYMODULE": {  
    "MYDATAMODEL": {  
      "FIELDS" : {  
        "foo": {  
          "label": "Foo",  
          "hint": "Instructions for foo"  
        },  
        "bar": {  
          "label": "Bar",  
          "hint": "Instructions for bar"  
        }  
      }  
    }  
  }  
}
Copy
```

Overrides [DataModel](foundry.abstract.DataModel.html).[LOCALIZATION\_PREFIXES](foundry.abstract.DataModel.html#localization_prefixes)

## Accessors

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from DataModel.invalid

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from DataModel.schema

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from DataModel.validationFailures

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Overrides DataModel.schema

## Methods

### \_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: BaseUser,  
  ): Promise<boolean | void>

  `Internal`

  Called by ClientDocument#\_preCreate.

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: BaseUser

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html),  
  ):  
  Â Â Â Â | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>  
  Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>>

  Clone a model, creating a new data model by combining current data with provided overrides.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html) = {}

    Context options passed to the data model constructor

  #### Returns Â Â Â Â | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)> Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>>

  The cloned instance

  Inherited from [DataModel](foundry.abstract.DataModel.html).[clone](foundry.abstract.DataModel.html#clone)

### prepareBaseData

* prepareBaseData(): void

  Prepare data related to this DataModel itself, before any derived data (including Active Effects)
  is computed. This is especially useful for initializing numbers, arrays, and sets you expect to be
  modified by active effects.

  Called before [ClientDocument#prepareBaseData](foundry.ClientDocument.html#preparebasedata) in
  [ClientDocument#prepareData](foundry.ClientDocument.html#preparedata).

  #### Returns void

  #### Example

  ```
  prepareBaseData() {  
    // Ensures an active effect of `system.encumbrance.max | ADD | 10` doesn't produce `NaN`  
    this.encumbrance = {  
      max: 0  
    }  
    // If you need to access the owning Document, `this.parent` provides a reference for properties like the name  
    // or embedded collections, e.g. `this.parent.name` or `this.parent.items`  
  }
  Copy
  ```

### prepareDerivedData

* prepareDerivedData(): void

  Apply transformations or derivations to the values of the source data object.
  Compute data fields whose values are not stored to the database.

  Called before [ClientDocument#prepareDerivedData](foundry.ClientDocument.html#preparederiveddata) in
  [ClientDocument#prepareData](foundry.ClientDocument.html#preparedata).

  #### Returns void

  #### Example

  ```
  prepareDerivedData() {  
    this.hp.bloodied = Math.floor(this.hp.max / 2);  
    
    // this.parent accesses the Document, allowing access to embedded collections  
    this.encumbrance.value = this.parent.items.reduce((total, item) => {  
      total += item.system.weight;  
      return total;  
    }, 0)  
  }
  Copy
  ```

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.html).[reset](foundry.abstract.DataModel.html#reset)

### toEmbed

* toEmbed(config: DocumentHTMLEmbedConfig, options?: any): Promise<any>

  Convert this Document to some HTML display for embedding purposes.

  #### Parameters

  + config: DocumentHTMLEmbedConfig

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed content
    also contains text that must be enriched.

  #### Returns Promise<any>

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [DataModel](foundry.abstract.DataModel.html).[toJSON](foundry.abstract.DataModel.html#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [DataModel](foundry.abstract.DataModel.html).[toObject](foundry.abstract.DataModel.html#toobject)

### updateSource

* updateSource(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html)): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: object = {}

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html) = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [DataModel](foundry.abstract.DataModel.html).[updateSource](foundry.abstract.DataModel.html#updatesource)

### validate

* validate(options?: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html)): boolean

  Validate the data contained in the document to check for type and content.
  If changes are provided, missing types are added to it before cleaning and validation.
  This mutates the provided changes. This function throws an error if data within the document is not valid.

  #### Parameters

  + options: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html) = {}

    Options which modify how the model is validated

  #### Returns boolean

  Whether the data source or proposed change is reported as valid.
  A boolean is always returned if validation is non-strict.

  #### Throws

  An error thrown if validation is strict and a failure occurs.

  Inherited from [DataModel](foundry.abstract.DataModel.html).[validate](foundry.abstract.DataModel.html#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.html).[\_configure](foundry.abstract.DataModel.html#_configure)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.html).[\_initialize](foundry.abstract.DataModel.html#_initialize)

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>,  
  Â Â Â Â options?: object,  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

    The candidate source data from which the model will be constructed
  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from [DataModel](foundry.abstract.DataModel.html).[\_initializeSource](foundry.abstract.DataModel.html#_initializesource)

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Called by ClientDocument#\_onCreate.

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

### `Protected`\_onDelete

* \_onDelete(options: object, userId: string): void

  `Protected`

  Called by ClientDocumentMixin#\_onDelete.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

### `Protected`\_onUpdate

* \_onUpdate(changed: object, options: object, userId: string): void

  `Protected`

  Called by ClientDocumentMixin#\_onUpdate.

  #### Parameters

  + changed: object

    The differential data that was changed relative to the documents prior values
  + options: object

    Additional options which modify the update request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

### `Protected`\_preDelete

* \_preDelete(options: object, user: BaseUser): Promise<boolean | void>

  `Protected`

  Called by ClientDocumentMixin#\_preDelete.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + user: BaseUser

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

### `Protected`\_preUpdate

* \_preUpdate(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: BaseUser,  
  ): Promise<boolean | void>

  `Protected`

  Called by ClientDocumentMixin#\_preUpdate.

  #### Parameters

  + changes: object

    The candidate changes to the Document
  + options: object

    Additional options which modify the update request
  + user: BaseUser

    The User requesting the document update

  #### Returns Promise<boolean | void>

  A return value of false indicates the update operation should be cancelled.

### `Static`cleanData

* cleanData(source?: object, options?: object): object

  Clean a data source object to conform to a specific provided schema.

  #### Parameters

  + `Optional`source: object = {}

    The source data object
  + `Optional`options: object = {}

    Additional options which are passed to field cleaning methods

  #### Returns object

  The cleaned source data, which is the same object as the `source` argument

  Inherited from [DataModel](foundry.abstract.DataModel.html).[cleanData](foundry.abstract.DataModel.html#cleandata)

### `Static` `Abstract`defineSchema

* defineSchema(): [DataSchema](../types/foundry.abstract.types.DataSchema.html)

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.abstract.TypeDataModel.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.html)

  #### Example

  ```
  class SomeModel extends foundry.abstract.DataModel {  
    static defineSchema() {  
      return {  
        foo: new foundry.data.fields.StringField()  
      }  
    }  
  }  
    
  class AnotherModel extends SomeModel {  
    static defineSchema() {  
      // Inheritance and object oriented principles apply to schema definition  
      const schema = super.defineSchema()  
    
      schema.bar = new foundry.data.fields.NumberField()  
    
      return schema;  
    }  
  }
  Copy
  ```

  Inherited from [DataModel](foundry.abstract.DataModel.html).[defineSchema](foundry.abstract.DataModel.html#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [DataModel](foundry.abstract.DataModel.html).[fromJSON](foundry.abstract.DataModel.html#fromjson)

### `Static`fromSource

* fromSource(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.html),  
  ): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a new instance of this DataModel from a source record.
  The source is presumed to be trustworthy and is not strictly validated.

  #### Parameters

  + source: object

    Initial document data which comes from a trusted source.
  + `Optional`context: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.html) = {}

    Model construction context

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Inherited from [DataModel](foundry.abstract.DataModel.html).[fromSource](foundry.abstract.DataModel.html#fromsource)

### `Static`migrateData

* migrateData(source: object): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [DataModel](foundry.abstract.DataModel.html).[migrateData](foundry.abstract.DataModel.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [DataModel](foundry.abstract.DataModel.html).[migrateDataSafe](foundry.abstract.DataModel.html#migratedatasafe)

### `Static`shimData

* shimData(data: object, options?: { embedded?: boolean }): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + data: object

    Data which matches the current schema
  + `Optional`options: { embedded?: boolean } = {}

    Additional shimming options

    - ##### `Optional`embedded?: boolean

      Apply shims to embedded models?

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from [DataModel](foundry.abstract.DataModel.html).[shimData](foundry.abstract.DataModel.html#shimdata)

### `Static`validateJoint

* validateJoint(data: object): void

  Evaluate joint validation rules which apply validation conditions across multiple fields of the model.
  Field-specific validation rules should be defined as part of the DataSchema for the model.
  This method allows for testing aggregate rules which impose requirements on the overall model.

  #### Parameters

  + data: object

    Candidate data for the model

  #### Returns void

  #### Throws

  An error if a validation failure is detected

  Inherited from [DataModel](foundry.abstract.DataModel.html).[validateJoint](foundry.abstract.DataModel.html#validatejoint)

### `Protected` `Static`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.html)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.html)], any, any>

  #### Yields

  Inherited from [DataModel](foundry.abstract.DataModel.html).[\_initializationOrder](foundry.abstract.DataModel.html#_initializationorder)