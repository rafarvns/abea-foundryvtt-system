---
title: "DetectionModeInvisibility | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.perception.DetectionModeInvisibility.html"
category: "classes"
---

# Class DetectionModeInvisibility

Detection mode that see invisible creatures.
This detection mode allows the source to:

* See/Detect the invisible target as if visible.
* The "See" version needs sight and is affected by blindness

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.perception.DetectionModeInvisibility))

* [DetectionMode](foundry.canvas.perception.DetectionMode.md)
  + DetectionModeInvisibility

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[parent](#parent)
[\_detectionFilter](#_detectionfilter)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)

### Accessors

[invalid](#invalid)
[schema](#schema)
[validationFailures](#validationfailures)
[BASIC\_MODE\_ID](#basic_mode_id)
[DETECTION\_TYPES](#detection_types)
[schema](#schema-1)

### Methods

[\_canDetect](#_candetect)
[clone](#clone)
[getFieldForProperty](#getfieldforproperty)
[reset](#reset)
[testVisibility](#testvisibility)
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
[\_testAngle](#_testangle)
[\_testLOS](#_testlos)
[\_testPoint](#_testpoint)
[\_testRange](#_testrange)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[cleanData](#cleandata)
[defineSchema](#defineschema)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[getDetectionFilter](#getdetectionfilter)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_preCleanData](#_precleandata)
[\_testCollision](#_testcollision)

## Constructors

### constructor

* new DetectionModeInvisibility(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ): DetectionModeInvisibility

  #### Parameters

  + `Optional`data: object = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns DetectionModeInvisibility

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[constructor](foundry.canvas.perception.DetectionMode.md#constructor)

## Properties

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_source](foundry.canvas.perception.DetectionMode.md#_source)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[parent](foundry.canvas.perception.DetectionMode.md#parent)

### `Static`\_detectionFilter

\_detectionFilter: Filter | undefined

An optional filter to apply on the target when it is detected with this mode.

Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_detectionFilter](foundry.canvas.perception.DetectionMode.md#_detectionfilter)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_schema](foundry.canvas.perception.DetectionMode.md#_schema)

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

Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[LOCALIZATION\_PREFIXES](foundry.canvas.perception.DetectionMode.md#localization_prefixes)

## Accessors

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from DetectionMode.invalid

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from DetectionMode.schema

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from DetectionMode.validationFailures

### `Static`BASIC\_MODE\_ID

* get BASIC\_MODE\_ID(): "basicSight"

  The identifier of the basic sight detection mode.

  #### Returns "basicSight"

  Inherited from DetectionMode.BASIC\_MODE\_ID

### `Static`DETECTION\_TYPES

* get DETECTION\_TYPES(): Readonly<  
  Â Â Â Â { MOVE: number; OTHER: number; SIGHT: number; SOUND: number },  
  >

  The types of the detection mode.

  #### Returns Readonly<{ MOVE: number; OTHER: number; SIGHT: number; SOUND: number }>

  Inherited from DetectionMode.DETECTION\_TYPES

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  The Data Schema for all instances of this DataModel.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from DetectionMode.schema

## Methods

### \_canDetect

* \_canDetect(visionSource: any, target: any): boolean

  #### Parameters

  + visionSource: any
  + target: any

  #### Returns boolean

  Overrides [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_canDetect](foundry.canvas.perception.DetectionMode.md#_candetect)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[clone](foundry.canvas.perception.DetectionMode.md#clone)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[getFieldForProperty](foundry.canvas.perception.DetectionMode.md#getfieldforproperty)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[reset](foundry.canvas.perception.DetectionMode.md#reset)

### testVisibility

* testVisibility(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md),  
  Â Â Â Â config: [CanvasVisibilityTestConfiguration](../interfaces/foundry.types.CanvasVisibilityTestConfiguration.md),  
  ): boolean

  Test visibility of a target object or array of points for a specific vision source.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source being tested
  + mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md)

    The detection mode configuration
  + config: [CanvasVisibilityTestConfiguration](../interfaces/foundry.types.CanvasVisibilityTestConfiguration.md)

    The visibility test configuration

  #### Returns boolean

  Is the test target visible?

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[testVisibility](foundry.canvas.perception.DetectionMode.md#testvisibility)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[toJSON](foundry.canvas.perception.DetectionMode.md#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[toObject](foundry.canvas.perception.DetectionMode.md#toobject)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[updateSource](foundry.canvas.perception.DetectionMode.md#updatesource)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[validate](foundry.canvas.perception.DetectionMode.md#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_configure](foundry.canvas.perception.DetectionMode.md#_configure)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_getInnerModel](foundry.canvas.perception.DetectionMode.md#_getinnermodel)

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_initializationOrder](foundry.canvas.perception.DetectionMode.md#_initializationorder)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_initialize](foundry.canvas.perception.DetectionMode.md#_initialize)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_initializeSource](foundry.canvas.perception.DetectionMode.md#_initializesource)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_preUpdateSource](foundry.canvas.perception.DetectionMode.md#_preupdatesource)

### `Protected`\_testAngle

* \_testAngle(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md),  
  Â Â Â Â target: object | null,  
  Â Â Â Â test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md),  
  ): boolean

  `Protected`

  Test whether the target is within the vision angle.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source being tested
  + mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md)

    The detection mode configuration
  + target: object | null

    The target object being tested
  + test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md)

    The test case being evaluated

  #### Returns boolean

  Is the point within the vision angle?

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testAngle](foundry.canvas.perception.DetectionMode.md#_testangle)

### `Protected`\_testLOS

* \_testLOS(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md),  
  Â Â Â Â target: object | null,  
  Â Â Â Â test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md),  
  ): boolean

  `Protected`

  Test whether the line-of-sight requirement for detection is satisfied.
  Always true if the detection mode bypasses walls, otherwise the test point must be contained by the LOS polygon.
  The result of is cached for the vision source so that later checks for other detection modes do not repeat it.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source being tested
  + mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md)

    The detection mode configuration
  + target: object | null

    The target object being tested
  + test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md)

    The test case being evaluated

  #### Returns boolean

  Is the LOS requirement satisfied for this test?

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testLOS](foundry.canvas.perception.DetectionMode.md#_testlos)

### `Protected`\_testPoint

* \_testPoint(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md),  
  Â Â Â Â target: object | null,  
  Â Â Â Â test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md),  
  ): boolean

  `Protected`

  Evaluate a single test point to confirm whether it is visible.
  Standard detection rules require that the test point be both within LOS and within range.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source being tested
  + mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md)

    The detection mode configuration
  + target: object | null

    The target object being tested
  + test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md)

    The test case being evaluated

  #### Returns boolean

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testPoint](foundry.canvas.perception.DetectionMode.md#_testpoint)

### `Protected`\_testRange

* \_testRange(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md),  
  Â Â Â Â target: object | null,  
  Â Â Â Â test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md),  
  ): boolean

  `Protected`

  Verify that a target is in range of a source.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source being tested
  + mode: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md)

    The detection mode configuration
  + target: object | null

    The target object being tested
  + test: [CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md)

    The test case being evaluated

  #### Returns boolean

  Is the target within range?

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testRange](foundry.canvas.perception.DetectionMode.md#_testrange)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_updateCommit](foundry.canvas.perception.DetectionMode.md#_updatecommit)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_updateDiff](foundry.canvas.perception.DetectionMode.md#_updatediff)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[cleanData](foundry.canvas.perception.DetectionMode.md#cleandata)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â angle: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â id: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â label: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â tokenConfig: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â type: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â walls: [BooleanField](foundry.data.fields.BooleanField.md);  
  }

  #### Returns { Â Â Â Â angle: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â id: [StringField](foundry.data.fields.StringField.md); Â Â Â Â label: [StringField](foundry.data.fields.StringField.md); Â Â Â Â tokenConfig: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â type: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â walls: [BooleanField](foundry.data.fields.BooleanField.md); }

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[defineSchema](foundry.canvas.perception.DetectionMode.md#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[fromJSON](foundry.canvas.perception.DetectionMode.md#fromjson)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[fromSource](foundry.canvas.perception.DetectionMode.md#fromsource)

### `Static`getDetectionFilter

* getDetectionFilter(): Filter | GlowOverlayFilter

  #### Returns Filter | GlowOverlayFilter

  Overrides [DetectionMode](foundry.canvas.perception.DetectionMode.md).[getDetectionFilter](foundry.canvas.perception.DetectionMode.md#getdetectionfilter)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[migrateData](foundry.canvas.perception.DetectionMode.md#migratedata)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[migrateDataSafe](foundry.canvas.perception.DetectionMode.md#migratedatasafe)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[shimData](foundry.canvas.perception.DetectionMode.md#shimdata)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[validateJoint](foundry.canvas.perception.DetectionMode.md#validatejoint)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_cleanData](foundry.canvas.perception.DetectionMode.md#_cleandata)

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

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_preCleanData](foundry.canvas.perception.DetectionMode.md#_precleandata)

### `Protected` `Static`\_testCollision

* \_testCollision(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â test: Omit<[CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md), "los">,  
  Â Â Â Â config?: Partial<Omit<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md), "source" | "level">>,  
  ): boolean

  `Protected`

  Test for LOS collision.
  For both the segment in the viewed level and in the target level, a ray is cast with the given configuration.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source
  + test: Omit<[CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md), "los">

    The test
  + `Optional`config: Partial<Omit<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md), "source" | "level">>

    The configuration

  #### Returns boolean

  True if there's a collision or the point is not in the vision angle, otherwise false

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testCollision](foundry.canvas.perception.DetectionMode.md#_testcollision)
* \_testCollision(  
  Â Â Â Â visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md),  
  Â Â Â Â test: Pick<[CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md), "point" | "los">,  
  Â Â Â Â los: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md),  
  ): boolean

  `Protected`

  Test for LOS collision.
  For the segment of the ray in the viewed level, `los` is tested.
  For the segment of the ray in the target level, a ray is cast with the configuration of `los`.

  #### Parameters

  + visionSource: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

    The vision source
  + test: Pick<[CanvasVisibilityTest](../interfaces/foundry.types.CanvasVisibilityTest.md), "point" | "los">

    The test
  + los: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)

    The LOS polygon

  #### Returns boolean

  True if there's a collision or the point is not in the vision angle, otherwise false

  Inherited from [DetectionMode](foundry.canvas.perception.DetectionMode.md).[\_testCollision](foundry.canvas.perception.DetectionMode.md#_testcollision)