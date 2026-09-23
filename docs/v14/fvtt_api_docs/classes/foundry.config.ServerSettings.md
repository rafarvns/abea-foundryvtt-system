---
title: "ServerSettings | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.config.ServerSettings.html"
category: "classes"
---

# Class ServerSettings

A data model definition which describes the application configuration options.
These options are persisted in the user data Config folder in the options.json file.
The server-side software extends this class and provides additional validations.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.config.ServerSettings))

* [DataModel](foundry.abstract.DataModel.md)
  + ServerSettings

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[parent](#parent)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)

### Accessors

[invalid](#invalid)
[schema](#schema)
[validationFailures](#validationfailures)
[schema](#schema-1)

### Methods

[clone](#clone)
[getFieldForProperty](#getfieldforproperty)
[reset](#reset)
[toJSON](#tojson)
[toObject](#toobject)
[updateSource](#updatesource)
[validate](#validate)
[\_configure](#_configure)
[\_getInnerModel](#_getinnermodel)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_preUpdateSource](#_preupdatesource)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[cleanData](#cleandata)
[defineSchema](#defineschema)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_preCleanData](#_precleandata)

## Constructors

### constructor

* new ServerSettings(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ): ServerSettings

  #### Parameters

  + `Optional`data: object = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns ServerSettings

  Inherited from [DataModel](foundry.abstract.DataModel.md).[constructor](foundry.abstract.DataModel.md#constructor)

## Properties

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [DataModel](foundry.abstract.DataModel.md).[\_source](foundry.abstract.DataModel.md#_source)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [DataModel](foundry.abstract.DataModel.md).[parent](foundry.abstract.DataModel.md#parent)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [DataModel](foundry.abstract.DataModel.md).[\_schema](foundry.abstract.DataModel.md#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

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

Overrides [DataModel](foundry.abstract.DataModel.md).[LOCALIZATION\_PREFIXES](foundry.abstract.DataModel.md#localization_prefixes)

## Accessors

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from DataModel.invalid

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from DataModel.schema

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from DataModel.validationFailures

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  The Data Schema for all instances of this DataModel.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from DataModel.schema

## Methods

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ):  
  Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>  
  Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  Clone a model, creating a new data model by combining current data with provided overrides.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Context options passed to the data model constructor

  #### Returns Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  The cloned instance

  Inherited from [DataModel](foundry.abstract.DataModel.md).[clone](foundry.abstract.DataModel.md#clone)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [DataModel](foundry.abstract.DataModel.md).[getFieldForProperty](foundry.abstract.DataModel.md#getfieldforproperty)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[reset](foundry.abstract.DataModel.md#reset)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [DataModel](foundry.abstract.DataModel.md).[toJSON](foundry.abstract.DataModel.md#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [DataModel](foundry.abstract.DataModel.md).[toObject](foundry.abstract.DataModel.md#toobject)

### updateSource

* updateSource(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: object = {}

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md) = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [DataModel](foundry.abstract.DataModel.md).[updateSource](foundry.abstract.DataModel.md#updatesource)

### validate

* validate(options?: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md)): boolean

  Validate the data contained in the document to check for type and content.
  This method is intended to validate complete model records, verifying both individual field validation as well
  as joint model validity.

  For validating sets of partial model changes, it is preferred to call DataModel#updateSource as a `dryRun`. This
  method provides a convenience alias for such a workflow if `changes` are provided.

  Warning: if fallback handling is allowed, this process will mutate provided changes or model source data.

  #### Parameters

  + options: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md) = {}

    Options which modify how the model is validated

  #### Returns boolean

  Whether the data source or proposed change is reported as valid.
  A boolean is always returned if validation is non-strict.

  #### Throws

  An error thrown if validation is strict and a failure occurs.

  Inherited from [DataModel](foundry.abstract.DataModel.md).[validate](foundry.abstract.DataModel.md#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_configure](foundry.abstract.DataModel.md#_configure)

### `Protected`\_getInnerModel

* \_getInnerModel(  
  Â Â Â Â field: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â element?: { index?: number; value: object },  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  `Protected`

  Resolve a previously-initialized embedded DataModel that corresponds to an element being cleaned. Called during
  recursive data cleaning when a parent field contains EmbeddedDataField elements, or a single nested DataModel
  field (such as a TypeDataField), in order to propagate the inner DataModel into \_state.model for the recursive
  clean operation. A single (non-collection) inner model resolves to itself; collection elements are matched by
  stable \_id when one is present, otherwise by positional index.

  Subclasses may override when data preparation reshapes the field property in a way that the default cannot
  interpret, for example wrapping the container in a non-iterable type or replacing it with a derived view.

  #### Parameters

  + field: [DataField](foundry.data.fields.DataField.md)

    The schema field being recursed into.
  + element: { index?: number; value: object } = {}
    - ##### `Optional`index?: number

      The positional index of the element within a container, if applicable.
    - ##### value: object

      The cleaned candidate value for the element being processed.
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    The cleaning options in effect for the operation.

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  The corresponding previously-initialized inner DataModel, or null.

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_getInnerModel](foundry.abstract.DataModel.md#_getinnermodel)

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_initializationOrder](foundry.abstract.DataModel.md#_initializationorder)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_initialize](foundry.abstract.DataModel.md#_initialize)

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>,  
  Â Â Â Â options?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

    The candidate source data from which the model will be constructed
  + `Optional`options: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_initializeSource](foundry.abstract.DataModel.md#_initializesource)

### `Protected`\_preUpdateSource

* \_preUpdateSource(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Prepare the state object that is transacted through an updateSource operation.

  #### Parameters

  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data model update state

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_preUpdateSource](foundry.abstract.DataModel.md#_preupdatesource)

### `Protected`\_updateCommit

* \_updateCommit(  
  Â Â Â Â copy: object,  
  Â Â Â Â diff: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Perform the second step of the DataModel#\_updateSource workflow which applies the prepared diff to the model.

  #### Parameters

  + copy: object

    The prepared copy of source data with changes applied
  + diff: object

    The differential changes that were applied to source
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data cleaning state which might include instructions for final commit

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_updateCommit](foundry.abstract.DataModel.md#_updatecommit)

### `Protected`\_updateDiff

* \_updateDiff(  
  Â Â Â Â copy: object,  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Perform the first step of the DataModel#\_updateSource workflow which applies changes to a copy of model source
  data and records the resulting diff.

  #### Parameters

  + copy: object

    A mutable copy of model source data
  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data cleaning state

  #### Returns object

  The resulting difference applied to source data

  #### Throws

  A failure if the proposed change is invalid

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_updateDiff](foundry.abstract.DataModel.md#_updatediff)

### `Static`cleanData

* cleanData(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state?: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)>,  
  ): object

  Clean a data source object to conform to a specific provided schema.

  #### Parameters

  + `Optional`data: object = {}

    Provided model data that requires cleaning
  + `Optional`options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md) = {}

    Options that configure how data cleaning is performed
  + `Optional`\_state: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)> = {}

    Internal options used during cleaning recursion

  #### Returns object

  Cleaned data which is suitable for validation and usage

  Inherited from [DataModel](foundry.abstract.DataModel.md).[cleanData](foundry.abstract.DataModel.md#cleandata)

### `Static` `Abstract`defineSchema

* defineSchema(): {  
  Â Â Â Â adminPassword: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â awsConfig: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â compressSocket: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â compressStatic: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â cssTheme: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â dataPath: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â deleteNEDB: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â fullscreen: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â hostname: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â hotReload: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â language: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â localHostname: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â noBackups: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â passwordSalt: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â port: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â protocol: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â proxyPort: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â proxySSL: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â routePrefix: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â sslCert: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â sslKey: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â telemetry: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â tempDir: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â unixSocket: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â updateChannel: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â upnp: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â upnpLeaseDuration: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â world: [StringField](foundry.data.fields.StringField.md);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.md) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.md) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.md)

  #### Returns { Â Â Â Â adminPassword: [StringField](foundry.data.fields.StringField.md); Â Â Â Â awsConfig: [StringField](foundry.data.fields.StringField.md); Â Â Â Â compressSocket: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â compressStatic: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â cssTheme: [StringField](foundry.data.fields.StringField.md); Â Â Â Â dataPath: [StringField](foundry.data.fields.StringField.md); Â Â Â Â deleteNEDB: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â fullscreen: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â hostname: [StringField](foundry.data.fields.StringField.md); Â Â Â Â hotReload: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â language: [StringField](foundry.data.fields.StringField.md); Â Â Â Â localHostname: [StringField](foundry.data.fields.StringField.md); Â Â Â Â noBackups: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â passwordSalt: [StringField](foundry.data.fields.StringField.md); Â Â Â Â port: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â protocol: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â proxyPort: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â proxySSL: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â routePrefix: [StringField](foundry.data.fields.StringField.md); Â Â Â Â sslCert: [StringField](foundry.data.fields.StringField.md); Â Â Â Â sslKey: [StringField](foundry.data.fields.StringField.md); Â Â Â Â telemetry: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â tempDir: [StringField](foundry.data.fields.StringField.md); Â Â Â Â unixSocket: [StringField](foundry.data.fields.StringField.md); Â Â Â Â updateChannel: [StringField](foundry.data.fields.StringField.md); Â Â Â Â upnp: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â upnpLeaseDuration: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â world: [StringField](foundry.data.fields.StringField.md); }

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

  Overrides [DataModel](foundry.abstract.DataModel.md).[defineSchema](foundry.abstract.DataModel.md#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [DataModel](foundry.abstract.DataModel.md).[fromJSON](foundry.abstract.DataModel.md#fromjson)

### `Static`fromSource

* fromSource(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md),  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a new instance of this DataModel from a source record.
  The source data is presumed trustworthy and is not strictly validated unless explicitly requested.

  #### Parameters

  + source: object

    Initial document data which comes from a trusted source.
  + `Optional`context: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md) = {}

    Model construction context

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Inherited from [DataModel](foundry.abstract.DataModel.md).[fromSource](foundry.abstract.DataModel.md#fromsource)

### `Static`migrateData

* migrateData(data: any, \_options: any): any

  #### Parameters

  + data: any
  + \_options: any

  #### Returns any

  Overrides [DataModel](foundry.abstract.DataModel.md).[migrateData](foundry.abstract.DataModel.md#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): object

  Wrap data migration in a try/catch which attempts it safely.

  #### Parameters

  + source: object

    Candidate source data for the module, before further cleaning
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [DataModel](foundry.abstract.DataModel.md).[migrateDataSafe](foundry.abstract.DataModel.md#migratedatasafe)

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

  Inherited from [DataModel](foundry.abstract.DataModel.md).[shimData](foundry.abstract.DataModel.md#shimdata)

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

  Inherited from [DataModel](foundry.abstract.DataModel.md).[validateJoint](foundry.abstract.DataModel.md#validatejoint)

### `Protected` `Static`\_cleanData

* \_cleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Apply final custom model-specific cleaning rules after data schema fields are cleaned.
  Subclass models can implement this function as an ideal place to apply custom imputation or cleaning.
  Cleaning must be done in-place rather than returning a different object.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Options which define how cleaning was performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns object

  The original data object, with cleaning performed inplace

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_cleanData](foundry.abstract.DataModel.md#_cleandata)

### `Protected` `Static`\_preCleanData

* \_preCleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Apply preliminary model-specific cleaning rules or alter cleaning options or initial state.
  Subclass models may implement this function to configure the cleaning workflow.
  Any mutations to data, options, or \_state parameters are performed inplace.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)

    Options which define how cleaning should be performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns void

  Inherited from [DataModel](foundry.abstract.DataModel.md).[\_preCleanData](foundry.abstract.DataModel.md#_precleandata)