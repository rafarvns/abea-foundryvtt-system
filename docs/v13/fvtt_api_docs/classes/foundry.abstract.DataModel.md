---
title: "DataModel | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.abstract.DataModel.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [abstract](../modules/foundry.abstract.html)
* [DataModel](foundry.abstract.DataModel.html)

# Class DataModel<ModelData, ModelContext>`Abstract`

An abstract class which is a fundamental building block of numerous structures and concepts in Foundry Virtual
Tabletop. Data models perform several essential roles:

* A static schema definition that all instances of that model adhere to.
* A workflow for data migration, cleaning, validation, and initialization such that provided input data is structured
  according to the rules of the model's declared schema.
* A workflow for transacting differential updates to the instance data and serializing its data into format suitable
  for storage or transport.

DataModel subclasses can be used for a wide variety of purposes ranging from simple game settings to high complexity
objects like `Scene` documents. Data models are often nested; see the [DataModel.parent](foundry.abstract.DataModel.html#parent) property for more.

#### Type Parameters

* ModelData = object
* ModelContext = [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.abstract.DataModel))

* DataModel
  + [CalendarData](foundry.data.CalendarData.html)
  + [LightData](foundry.data.LightData.html)
  + [PrototypeToken](foundry.data.PrototypeToken.html)
  + [PrototypeTokenOverrides](foundry.data.PrototypeTokenOverrides.html)
  + [ShapeData](foundry.data.ShapeData.html)
  + [BaseShapeData](foundry.data.BaseShapeData.html)
  + [TombstoneData](foundry.data.TombstoneData.html)
  + [BaseTerrainData](foundry.data.BaseTerrainData.html)
  + [BasePackage](foundry.packages.BasePackage.html)
  + [TypeDataModel](foundry.abstract.TypeDataModel.html)
  + [Document](foundry.abstract.Document.html)
  + [ReleaseData](foundry.config.ReleaseData.html)
  + [ServerSettings](foundry.config.ServerSettings.html)
  + [DynamicRingData](foundry.canvas.placeables.tokens.DynamicRingData.html)
  + [TurnMarkerData](foundry.canvas.placeables.tokens.TurnMarkerData.html)
  + [VisionMode](foundry.canvas.perception.VisionMode.html)
  + [DetectionMode](foundry.canvas.perception.DetectionMode.html)

##### Index

### Constructors

[constructor](foundry.abstract.DataModel.html#constructor)

### Properties

[\_source](foundry.abstract.DataModel.html#_source)
[parent](foundry.abstract.DataModel.html#parent)
[\_schema](foundry.abstract.DataModel.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.abstract.DataModel.html#localization_prefixes)

### Accessors

[invalid](foundry.abstract.DataModel.html#invalid)
[schema](foundry.abstract.DataModel.html#schema)
[validationFailures](foundry.abstract.DataModel.html#validationfailures)
[schema](foundry.abstract.DataModel.html#schema-2)

### Methods

[clone](foundry.abstract.DataModel.html#clone)
[reset](foundry.abstract.DataModel.html#reset)
[toJSON](foundry.abstract.DataModel.html#tojson)
[toObject](foundry.abstract.DataModel.html#toobject)
[updateSource](foundry.abstract.DataModel.html#updatesource)
[validate](foundry.abstract.DataModel.html#validate)
[\_configure](foundry.abstract.DataModel.html#_configure)
[\_initialize](foundry.abstract.DataModel.html#_initialize)
[\_initializeSource](foundry.abstract.DataModel.html#_initializesource)
[cleanData](foundry.abstract.DataModel.html#cleandata)
[defineSchema](foundry.abstract.DataModel.html#defineschema)
[fromJSON](foundry.abstract.DataModel.html#fromjson)
[fromSource](foundry.abstract.DataModel.html#fromsource)
[migrateData](foundry.abstract.DataModel.html#migratedata)
[migrateDataSafe](foundry.abstract.DataModel.html#migratedatasafe)
[shimData](foundry.abstract.DataModel.html#shimdata)
[validateJoint](foundry.abstract.DataModel.html#validatejoint)
[\_initializationOrder](foundry.abstract.DataModel.html#_initializationorder)

## Constructors

### constructor

* new DataModel<  
  Â Â Â Â [ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata) extends object = object,  
  Â Â Â Â [ModelContext](foundry.abstract.DataModel.html#constructordatamodelmodelcontext) extends  
  Â Â Â Â Â Â Â Â [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html) = [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html),  
  >(  
  Â Â Â Â data?: Partial<[ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata)>,  
  Â Â Â Â options?: [ModelContext](foundry.abstract.DataModel.html#constructordatamodelmodelcontext),  
  ): [DataModel](foundry.abstract.DataModel.html)<[ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata), [ModelContext](foundry.abstract.DataModel.html#constructordatamodelmodelcontext)>

  #### Type Parameters

  + ModelData extends object = object
  + ModelContext extends [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html) = [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)

  #### Parameters

  + `Optional`data: Partial<[ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [ModelContext](foundry.abstract.DataModel.html#constructordatamodelmodelcontext) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [DataModel](foundry.abstract.DataModel.html)<[ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata), [ModelContext](foundry.abstract.DataModel.html#constructordatamodelmodelcontext)>

## Properties

### \_source

\_source: [ModelData](foundry.abstract.DataModel.html#constructordatamodelmodeldata)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = []

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

## Accessors

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  The Data Schema for all instances of this DataModel.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

## Methods

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

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

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

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

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

### `Static` `Abstract`defineSchema

* defineSchema(): [DataSchema](../types/foundry.abstract.types.DataSchema.html)

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.abstract.DataModel.html#_source) values into direct properties of the data model. The schema is a static property of the model and
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

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

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

### `Static`migrateData

* migrateData(source: object): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

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

### `Protected` `Static`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.html)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.html)], any, any>

  #### Yields