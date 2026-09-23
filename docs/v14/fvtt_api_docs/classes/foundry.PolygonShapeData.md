---
title: "PolygonShapeData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.PolygonShapeData.html"
category: "classes"
---

# Class PolygonShapeData

The data model for a polygon shape.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.PolygonShapeData))

* [BaseShapeData](foundry.data.BaseShapeData.md)
  + PolygonShapeData

##### Index

### Properties

[\_index](#_index)
[\_source](#_source)
[parent](#parent)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[TYPE](#type)

### Accessors

[invalid](#invalid)
[schema](#schema)
[validationFailures](#validationfailures)
[schema](#schema-1)
[TYPES](#types)

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

## Properties

### `Internal`\_index

\_index: number | undefined

The index of this shape within the array of shapes in its parent.
See [foundry.data.fields.ShapesField](foundry.data.fields.ShapesField.md).

Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_index](foundry.data.BaseShapeData.md#_index)

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_source](foundry.data.BaseShapeData.md#_source)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[parent](foundry.data.BaseShapeData.md#parent)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_schema](foundry.data.BaseShapeData.md#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Overrides [BaseShapeData](foundry.data.BaseShapeData.md).[LOCALIZATION\_PREFIXES](foundry.data.BaseShapeData.md#localization_prefixes)

### `Static`TYPE

TYPE: string = ""

The type of this shape.

Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[TYPE](foundry.data.BaseShapeData.md#type)

## Accessors

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from BaseShapeData.invalid

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from BaseShapeData.schema

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from BaseShapeData.validationFailures

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  The Data Schema for all instances of this DataModel.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from BaseShapeData.schema

### `Static`TYPES

* get TYPES(): Readonly<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â circle: [data](../modules/foundry.data.md).[CircleShapeData](foundry.data.CircleShapeData.md);  
  Â Â Â Â Â Â Â Â cone: [data](../modules/foundry.data.md).[ConeShapeData](foundry.data.ConeShapeData.md);  
  Â Â Â Â Â Â Â Â ellipse: [data](../modules/foundry.data.md).[EllipseShapeData](foundry.data.EllipseShapeData.md);  
  Â Â Â Â Â Â Â Â emanation: [EmanationShapeData](foundry.data.EmanationShapeData.md);  
  Â Â Â Â Â Â Â Â grid: [GridShapeData](foundry.data.GridShapeData.md);  
  Â Â Â Â Â Â Â Â line: [LineShapeData](foundry.data.LineShapeData.md);  
  Â Â Â Â Â Â Â Â polygon: [data](../modules/foundry.data.md).[PolygonShapeData](foundry.data.PolygonShapeData.md);  
  Â Â Â Â Â Â Â Â rectangle: [data](../modules/foundry.data.md).[RectangleShapeData](foundry.data.RectangleShapeData.md);  
  Â Â Â Â Â Â Â Â ring: [RingShapeData](foundry.data.RingShapeData.md);  
  Â Â Â Â Â Â Â Â token: [TokenShapeData](foundry.data.TokenShapeData.md);  
  Â Â Â Â },  
  >

  The possible shape types.

  #### Returns Readonly< Â Â Â Â { Â Â Â Â Â Â Â Â circle: [data](../modules/foundry.data.md).[CircleShapeData](foundry.data.CircleShapeData.md); Â Â Â Â Â Â Â Â cone: [data](../modules/foundry.data.md).[ConeShapeData](foundry.data.ConeShapeData.md); Â Â Â Â Â Â Â Â ellipse: [data](../modules/foundry.data.md).[EllipseShapeData](foundry.data.EllipseShapeData.md); Â Â Â Â Â Â Â Â emanation: [EmanationShapeData](foundry.data.EmanationShapeData.md); Â Â Â Â Â Â Â Â grid: [GridShapeData](foundry.data.GridShapeData.md); Â Â Â Â Â Â Â Â line: [LineShapeData](foundry.data.LineShapeData.md); Â Â Â Â Â Â Â Â polygon: [data](../modules/foundry.data.md).[PolygonShapeData](foundry.data.PolygonShapeData.md); Â Â Â Â Â Â Â Â rectangle: [data](../modules/foundry.data.md).[RectangleShapeData](foundry.data.RectangleShapeData.md); Â Â Â Â Â Â Â Â ring: [RingShapeData](foundry.data.RingShapeData.md); Â Â Â Â Â Â Â Â token: [TokenShapeData](foundry.data.TokenShapeData.md); Â Â Â Â }, >

  Inherited from BaseShapeData.TYPES

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[clone](foundry.data.BaseShapeData.md#clone)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[getFieldForProperty](foundry.data.BaseShapeData.md#getfieldforproperty)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[reset](foundry.data.BaseShapeData.md#reset)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[toJSON](foundry.data.BaseShapeData.md#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[toObject](foundry.data.BaseShapeData.md#toobject)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[updateSource](foundry.data.BaseShapeData.md#updatesource)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[validate](foundry.data.BaseShapeData.md#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_configure](foundry.data.BaseShapeData.md#_configure)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_getInnerModel](foundry.data.BaseShapeData.md#_getinnermodel)

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_initializationOrder](foundry.data.BaseShapeData.md#_initializationorder)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_initialize](foundry.data.BaseShapeData.md#_initialize)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_initializeSource](foundry.data.BaseShapeData.md#_initializesource)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_preUpdateSource](foundry.data.BaseShapeData.md#_preupdatesource)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_updateCommit](foundry.data.BaseShapeData.md#_updatecommit)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_updateDiff](foundry.data.BaseShapeData.md#_updatediff)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[cleanData](foundry.data.BaseShapeData.md#cleandata)

### `Static`defineSchema

* defineSchema(): { hole: [BooleanField](foundry.data.fields.BooleanField.md); type: [StringField](foundry.data.fields.StringField.md) } & {  
  Â Â Â Â origin: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â points: [ArrayField](foundry.data.fields.ArrayField.md)<[NumberField](foundry.data.fields.NumberField.md)>;  
  }

  #### Returns { hole: [BooleanField](foundry.data.fields.BooleanField.md); type: [StringField](foundry.data.fields.StringField.md) } & { Â Â Â Â origin: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â points: [ArrayField](foundry.data.fields.ArrayField.md)<[NumberField](foundry.data.fields.NumberField.md)>; }

  Overrides [BaseShapeData](foundry.data.BaseShapeData.md).[defineSchema](foundry.data.BaseShapeData.md#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[fromJSON](foundry.data.BaseShapeData.md#fromjson)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[fromSource](foundry.data.BaseShapeData.md#fromsource)

### `Static`migrateData

* migrateData(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    Candidate source data for the module, before further cleaning
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[migrateData](foundry.data.BaseShapeData.md#migratedata)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[migrateDataSafe](foundry.data.BaseShapeData.md#migratedatasafe)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[shimData](foundry.data.BaseShapeData.md#shimdata)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[validateJoint](foundry.data.BaseShapeData.md#validatejoint)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_cleanData](foundry.data.BaseShapeData.md#_cleandata)

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

  Inherited from [BaseShapeData](foundry.data.BaseShapeData.md).[\_preCleanData](foundry.data.BaseShapeData.md#_precleandata)