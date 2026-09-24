---
title: "ModifyMovementCostRegionBehaviorType | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType.html"
category: "classes"
---

# Class ModifyMovementCostRegionBehaviorType

The data model for a behavior that allows to modify the movement cost within the Region.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType))

* [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md)
  + ModifyMovementCostRegionBehaviorType

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[events](#events)
[parent](#parent)
[\_schema](#_schema)
[events](#events-1)
[LOCALIZATION\_PREFIXES](#localization_prefixes)

### Accessors

[behavior](#behavior)
[invalid](#invalid)
[region](#region)
[scene](#scene)
[schema](#schema)
[validationFailures](#validationfailures)
[schema](#schema-1)

### Methods

[\_getTerrainEffects](#_getterraineffects)
[\_onUpdate](#_onupdate)
[clone](#clone)
[getFieldForProperty](#getfieldforproperty)
[onEmbed](#onembed)
[prepareBaseData](#preparebasedata)
[prepareDerivedData](#preparederiveddata)
[reset](#reset)
[toEmbed](#toembed)
[toJSON](#tojson)
[toObject](#toobject)
[updateSource](#updatesource)
[validate](#validate)
[\_configure](#_configure)
[\_getInnerModel](#_getinnermodel)
[\_handleRegionEvent](#_handleregionevent)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_preCreate](#_precreate)
[\_preDelete](#_predelete)
[\_preUpdate](#_preupdate)
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
[\_createEventsField](#_createeventsfield)
[\_preCleanData](#_precleandata)

## Constructors

### constructor

* new ModifyMovementCostRegionBehaviorType(  
  Â Â Â Â data?: {},  
  Â Â Â Â options?: {},  
  ): ModifyMovementCostRegionBehaviorType

  #### Parameters

  + data: {} = {}
  + options: {} = {}

  #### Returns ModifyMovementCostRegionBehaviorType

  #### Inherit Doc

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[constructor](foundry.data.regionBehaviors.RegionBehaviorType.md#constructor)

## Properties

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_source](foundry.data.regionBehaviors.RegionBehaviorType.md#_source)

### events

events: Set<string> = ...

The events that are handled by the behavior.

Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[events](foundry.data.regionBehaviors.RegionBehaviorType.md#events)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[parent](foundry.data.regionBehaviors.RegionBehaviorType.md#parent)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_schema](foundry.data.regionBehaviors.RegionBehaviorType.md#_schema)

### `Static`events

events: {  
Â Â Â Â behaviorUnviewed: (  
Â Â Â Â Â Â Â Â this: ModifyMovementCostRegionBehaviorType,  
Â Â Â Â Â Â Â Â event: [RegionBehaviorUnviewedEvent](../types/foundry.documents.types.RegionBehaviorUnviewedEvent.md),  
Â Â Â Â ) => Promise<void>;  
Â Â Â Â behaviorViewed: (  
Â Â Â Â Â Â Â Â this: ModifyMovementCostRegionBehaviorType,  
Â Â Â Â Â Â Â Â event: [RegionBehaviorViewedEvent](../types/foundry.documents.types.RegionBehaviorViewedEvent.md),  
Â Â Â Â ) => Promise<void>;  
Â Â Â Â regionBoundary: (  
Â Â Â Â Â Â Â Â this: ModifyMovementCostRegionBehaviorType,  
Â Â Â Â Â Â Â Â event: RegionRegionBoundryEvent,  
Â Â Â Â ) => Promise<void>;  
} = ...

#### Type Declaration

* ##### behaviorUnviewed: ( Â Â Â Â this: ModifyMovementCostRegionBehaviorType, Â Â Â Â event: [RegionBehaviorUnviewedEvent](../types/foundry.documents.types.RegionBehaviorUnviewedEvent.md), ) => Promise<void>
* ##### behaviorViewed: ( Â Â Â Â this: ModifyMovementCostRegionBehaviorType, Â Â Â Â event: [RegionBehaviorViewedEvent](../types/foundry.documents.types.RegionBehaviorViewedEvent.md), ) => Promise<void>
* ##### regionBoundary: ( Â Â Â Â this: ModifyMovementCostRegionBehaviorType, Â Â Â Â event: RegionRegionBoundryEvent, ) => Promise<void>

Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[events](foundry.data.regionBehaviors.RegionBehaviorType.md#events-1)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[LOCALIZATION\_PREFIXES](foundry.data.regionBehaviors.RegionBehaviorType.md#localization_prefixes)

## Accessors

### behavior

* get behavior(): [documents](../modules/foundry.documents.md).[RegionBehavior](foundry.documents.RegionBehavior.md) | null

  A convenience reference to the RegionBehavior which contains this behavior sub-type.

  #### Returns [documents](../modules/foundry.documents.md).[RegionBehavior](foundry.documents.RegionBehavior.md) | null

  Inherited from RegionBehaviorType.behavior

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from RegionBehaviorType.invalid

### region

* get region(): [RegionDocument](foundry.documents.RegionDocument.md) | null

  A convenience reference to the RegionDocument which contains this behavior sub-type.

  #### Returns [RegionDocument](foundry.documents.RegionDocument.md) | null

  Inherited from RegionBehaviorType.region

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  A convenience reference to the Scene which contains this behavior sub-type.

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  Inherited from RegionBehaviorType.scene

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from RegionBehaviorType.schema

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from RegionBehaviorType.validationFailures

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from RegionBehaviorType.schema

## Methods

### \_getTerrainEffects

* \_getTerrainEffects(  
  Â Â Â Â token: any,  
  Â Â Â Â segment: any,  
  Â Â Â Â options: any,  
  ): { difficulty: any; name: string }[]

  #### Parameters

  + token: any
  + segment: any
  + options: any

  #### Returns { difficulty: any; name: string }[]

  Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_getTerrainEffects](foundry.data.regionBehaviors.RegionBehaviorType.md#_getterraineffects)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Called by ClientDocumentMixin#\_onUpdate.

  #### Parameters

  + changed: any

    The differential data that was changed relative to the documents prior values
  + options: any

    Additional options which modify the update request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_onUpdate](foundry.data.regionBehaviors.RegionBehaviorType.md#_onupdate)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[clone](foundry.data.regionBehaviors.RegionBehaviorType.md#clone)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[getFieldForProperty](foundry.data.regionBehaviors.RegionBehaviorType.md#getfieldforproperty)

### onEmbed

* onEmbed(element: HTMLDocumentEmbedElement): void

  Specific callback actions to take when the embedded HTML for this Document has been added to the DOM.

  #### Parameters

  + element: HTMLDocumentEmbedElement

    The embedded document HTML

  #### Returns void

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[onEmbed](foundry.data.regionBehaviors.RegionBehaviorType.md#onembed)

### prepareBaseData

* prepareBaseData(): void

  Prepare data related to this DataModel itself, before any derived data (including Active Effects)
  is computed. This is especially useful for initializing numbers, arrays, and sets you expect to be
  modified by active effects.

  Called before [ClientDocument#prepareBaseData](foundry.ClientDocument.md#preparebasedata) in
  [ClientDocument#prepareData](foundry.ClientDocument.md#preparedata).

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

  Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[prepareBaseData](foundry.data.regionBehaviors.RegionBehaviorType.md#preparebasedata)

### prepareDerivedData

* prepareDerivedData(): void

  Apply transformations or derivations to the values of the source data object.
  Compute data fields whose values are not stored to the database.

  Called before [ClientDocument#prepareDerivedData](foundry.ClientDocument.md#preparederiveddata) in
  [ClientDocument#prepareData](foundry.ClientDocument.md#preparedata).

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[prepareDerivedData](foundry.data.regionBehaviors.RegionBehaviorType.md#preparederiveddata)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[reset](foundry.data.regionBehaviors.RegionBehaviorType.md#reset)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[toEmbed](foundry.data.regionBehaviors.RegionBehaviorType.md#toembed)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[toJSON](foundry.data.regionBehaviors.RegionBehaviorType.md#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[toObject](foundry.data.regionBehaviors.RegionBehaviorType.md#toobject)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[updateSource](foundry.data.regionBehaviors.RegionBehaviorType.md#updatesource)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[validate](foundry.data.regionBehaviors.RegionBehaviorType.md#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_configure](foundry.data.regionBehaviors.RegionBehaviorType.md#_configure)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_getInnerModel](foundry.data.regionBehaviors.RegionBehaviorType.md#_getinnermodel)

### `Protected`\_handleRegionEvent

* \_handleRegionEvent(event: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)): Promise<void>

  `Protected`

  Handle the Region event.

  #### Parameters

  + event: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)

    The Region event

  #### Returns Promise<void>

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_handleRegionEvent](foundry.data.regionBehaviors.RegionBehaviorType.md#_handleregionevent)

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_initializationOrder](foundry.data.regionBehaviors.RegionBehaviorType.md#_initializationorder)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_initialize](foundry.data.regionBehaviors.RegionBehaviorType.md#_initialize)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_initializeSource](foundry.data.regionBehaviors.RegionBehaviorType.md#_initializesource)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_onCreate](foundry.data.regionBehaviors.RegionBehaviorType.md#_oncreate)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_onDelete](foundry.data.regionBehaviors.RegionBehaviorType.md#_ondelete)

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: BaseUser,  
  ): Promise<boolean | void>

  `Protected`

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_preCreate](foundry.data.regionBehaviors.RegionBehaviorType.md#_precreate)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_preDelete](foundry.data.regionBehaviors.RegionBehaviorType.md#_predelete)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_preUpdate](foundry.data.regionBehaviors.RegionBehaviorType.md#_preupdate)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_preUpdateSource](foundry.data.regionBehaviors.RegionBehaviorType.md#_preupdatesource)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_updateCommit](foundry.data.regionBehaviors.RegionBehaviorType.md#_updatecommit)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_updateDiff](foundry.data.regionBehaviors.RegionBehaviorType.md#_updatediff)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[cleanData](foundry.data.regionBehaviors.RegionBehaviorType.md#cleandata)

### `Static`defineSchema

* defineSchema(): { difficulties: [SchemaField](foundry.data.fields.SchemaField.md) }

  #### Returns { difficulties: [SchemaField](foundry.data.fields.SchemaField.md) }

  Overrides [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[defineSchema](foundry.data.regionBehaviors.RegionBehaviorType.md#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[fromJSON](foundry.data.regionBehaviors.RegionBehaviorType.md#fromjson)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[fromSource](foundry.data.regionBehaviors.RegionBehaviorType.md#fromsource)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[migrateData](foundry.data.regionBehaviors.RegionBehaviorType.md#migratedata)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[migrateDataSafe](foundry.data.regionBehaviors.RegionBehaviorType.md#migratedatasafe)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[shimData](foundry.data.regionBehaviors.RegionBehaviorType.md#shimdata)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[validateJoint](foundry.data.regionBehaviors.RegionBehaviorType.md#validatejoint)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_cleanData](foundry.data.regionBehaviors.RegionBehaviorType.md#_cleandata)

### `Protected` `Static`\_createEventsField

* \_createEventsField(  
  Â Â Â Â options?: { events?: string[]; initial?: string[] },  
  ): [SetField](foundry.data.fields.SetField.md)

  `Protected`

  Create the events field.

  #### Parameters

  + options: { events?: string[]; initial?: string[] } = {}

    Options which configure how the events field is declared

    - ##### `Optional`events?: string[]

      The event names to restrict to.
    - ##### `Optional`initial?: string[]

      The initial set of events that should be default for the field

  #### Returns [SetField](foundry.data.fields.SetField.md)

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_createEventsField](foundry.data.regionBehaviors.RegionBehaviorType.md#_createeventsfield)

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

  Inherited from [RegionBehaviorType](foundry.data.regionBehaviors.RegionBehaviorType.md).[\_preCleanData](foundry.data.regionBehaviors.RegionBehaviorType.md#_precleandata)