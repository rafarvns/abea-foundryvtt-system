---
title: "RegionDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.RegionDocument.html"
category: "classes"
---

# Class RegionDocument

The client-side Region document which extends the common BaseRegion model.

#### Mixes

CanvasDocumentMixin

#### See

* [foundry.documents.Scene](foundry.documents.Scene.md): The Scene document type which contains Region documents
* [foundry.applications.sheets.RegionConfig](foundry.applications.sheets.RegionConfig.md): The Region configuration application

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.RegionDocument))

* [BaseRegion](foundry.documents.BaseRegion.md)<this>
  + RegionDocument

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[parent](#parent)
[tokens](#tokens)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)

### Accessors

[area](#area)
[bounds](#bounds)
[clipperPaths](#clipperpaths)
[clipperPolyTree](#clipperpolytree)
[compendium](#compendium)
[id](#id)
[inCompendium](#incompendium)
[invalid](#invalid)
[isEmbedded](#isembedded)
[isSingleShape](#issingleshape)
[polygons](#polygons)
[polygonTree](#polygontree)
[schema](#schema)
[triangulation](#triangulation)
[uuid](#uuid)
[validationFailures](#validationfailures)
[baseDocument](#basedocument)
[collectionName](#collectionname)
[database](#database)
[documentName](#documentname)
[hasTypeData](#hastypedata)
[hierarchy](#hierarchy)
[implementation](#implementation)
[schema](#schema-1)
[TYPES](#types)

### Methods

[\_clearPolygonTree](#_clearpolygontree)
[\_computeShapeConstraints](#_computeshapeconstraints)
[\_configure](#_configure)
[\_createClipperPolyTree](#_createclipperpolytree)
[\_getParentCollection](#_getparentcollection)
[\_handleEvent](#_handleevent)
[\_initializationOrder](#_initializationorder)
[\_onCreate](#_oncreate)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDelete](#_ondelete)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_onGridChange](#_ongridchange)
[\_onUpdate](#_onupdate)
[\_onUpdateDescendantDocuments](#_onupdatedescendantdocuments)
[\_preUpdate](#_preupdate)
[\_refreshViewedState](#_refreshviewedstate)
[\_triggerEvent](#_triggerevent)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[canUserModify](#canusermodify)
[clampElevation](#clampelevation)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[delete](#delete)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getUserLevel](#getuserlevel)
[migrateSystemData](#migratesystemdata)
[prepareBaseData](#preparebasedata)
[removeShapeDialog](#removeshapedialog)
[reset](#reset)
[segmentizeMovementPath](#segmentizemovementpath)
[setFlag](#setflag)
[spawnTokens](#spawntokens)
[teleportToken](#teleporttoken)
[teleportTokens](#teleporttokens)
[testPoint](#testpoint)
[testUserPermission](#testuserpermission)
[toJSON](#tojson)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateShapeConstraints](#updateshapeconstraints)
[updateSource](#updatesource)
[validate](#validate)
[\_computeShapeConstraint](#_computeshapeconstraint)
[\_getInnerModel](#_getinnermodel)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_onPolygonTreeChange](#_onpolygontreechange)
[\_preCreate](#_precreate)
[\_preDelete](#_predelete)
[\_preUpdateSource](#_preupdatesource)
[\_activateSocketListeners](#_activatesocketlisteners)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_migrateMeasuredTemplateData](#_migratemeasuredtemplatedata)
[\_onCreateOperation](#_oncreateoperation)
[\_onDeleteOperation](#_ondeleteoperation)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCleanData](#_precleandata)
[\_preCreateOperation](#_precreateoperation)
[\_preUpdateOperation](#_preupdateoperation)
[\_testElevation](#_testelevation)
[canUserCreate](#canusercreate)
[cleanData](#cleandata)
[create](#create)
[createDocuments](#createdocuments)
[createTokenEmanation](#createtokenemanation)
[defineSchema](#defineschema)
[deleteDocuments](#deletedocuments)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[get](#get)
[getCollectionName](#getcollectionname)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[updateDocuments](#updatedocuments)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_preDeleteOperation](#_predeleteoperation)

## Constructors

### constructor

* new RegionDocument(  
  Â Â Â Â data?: Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): RegionDocument

  #### Parameters

  + `Optional`data: Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns RegionDocument

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[constructor](foundry.documents.BaseRegion.md#constructor)

## Properties

### \_source

\_source: [RegionData](../interfaces/foundry.documents.types.RegionData.md)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_source](foundry.documents.BaseRegion.md#_source)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[parent](foundry.documents.BaseRegion.md#parent)

### `Readonly`tokens

tokens: ReadonlySet<[TokenDocument](foundry.documents.TokenDocument.md)> = ...

The tokens inside this region.

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_schema](foundry.documents.BaseRegion.md#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[LOCALIZATION\_PREFIXES](foundry.documents.BaseRegion.md#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[metadata](foundry.documents.BaseRegion.md#metadata)

## Accessors

### area

* get area(): number

  The area of this Region.

  Alias for `this.polygonTree.area`.

  #### Returns number

### bounds

* get bounds(): Rectangle

  The bounds of this Region.

  The value of this property must not be mutated.

  Alias for `this.polygonTree.bounds`.

  #### Returns Rectangle

### clipperPaths

* get clipperPaths(): readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

  The Clipper paths of this Region.

  The value of this property must not be mutated.

  Alias for `this.polygonTree.clipperPaths`.

  #### Returns readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

### clipperPolyTree

* get clipperPolyTree(): PolyTree

  The Clipper polygon tree of this Region.

  The value of this property must not be mutated.

  #### Returns PolyTree

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from CanvasDocumentMixin(BaseRegion).compendium

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from CanvasDocumentMixin(BaseRegion).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseRegion).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseRegion).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseRegion).isEmbedded

### isSingleShape

* get isSingleShape(): boolean

  Does this Region have a single shape that is not a hole?

  #### Returns boolean

### polygons

* get polygons(): readonly Polygon[]

  The polygons of this Region.

  The value of this property must not be mutated.

  Alias for `this.polygonTree.polygons`.

  #### Returns readonly Polygon[]

### polygonTree

* get polygonTree(): [PolygonTree](foundry.data.PolygonTree.md)

  The polygon tree of this Region.

  The value of this property must not be mutated.

  #### Returns [PolygonTree](foundry.data.PolygonTree.md)

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from CanvasDocumentMixin(BaseRegion).schema

### triangulation

* get triangulation(): Readonly<  
  Â Â Â Â { indices: Uint16Array  
  Â Â Â Â | Uint32Array; vertices: Float32Array },  
  >

  The triangulation of this Region.

  The value of this property must not be mutated.

  Alias for `this.polygonTree.triangulation`.

  #### Returns Readonly<{ indices: Uint16Array | Uint32Array; vertices: Float32Array }>

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from CanvasDocumentMixin(BaseRegion).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from CanvasDocumentMixin(BaseRegion).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from CanvasDocumentMixin(BaseRegion).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseRegion).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from CanvasDocumentMixin(BaseRegion).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseRegion).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseRegion).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from CanvasDocumentMixin(BaseRegion).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from CanvasDocumentMixin(BaseRegion).implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from CanvasDocumentMixin(BaseRegion).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from CanvasDocumentMixin(BaseRegion).TYPES

## Methods

### \_clearPolygonTree

* \_clearPolygonTree(): void

  `Internal`

  Clear the polygon tree.

  #### Returns void

### \_computeShapeConstraints

* \_computeShapeConstraints(changes?: object): number[][] | null

  `Internal`

  Update the point sources of this Region document.

  #### Parameters

  + `Optional`changes: object = {}

    The changes that will be applied to this Region.

  #### Returns number[][] | null

  The computed shape constraint for each shape, if restricted/possible.

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_configure](foundry.documents.BaseRegion.md#_configure)

### \_createClipperPolyTree

* \_createClipperPolyTree(  
  Â Â Â Â shapes: [BaseShapeData](foundry.data.BaseShapeData.md)[],  
  Â Â Â Â shapeConstraints: object[] | null,  
  ): PolyTree

  `Internal`

  Create the Clipper polygon tree for this Region.

  #### Parameters

  + shapes: [BaseShapeData](foundry.data.BaseShapeData.md)[]
  + shapeConstraints: object[] | null

  #### Returns PolyTree

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_getParentCollection](foundry.documents.BaseRegion.md#_getparentcollection)

### \_handleEvent

* \_handleEvent(event: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)): Promise<void>

  `Internal`

  Handle the Region event.

  #### Parameters

  + event: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)

    The Region event

  #### Returns Promise<void>

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_initializationOrder](foundry.documents.BaseRegion.md#_initializationorder)

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onCreate](foundry.documents.BaseRegion.md#_oncreate)

### \_onCreateDescendantDocuments

* \_onCreateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â data: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + options: any

    Additional options which modify the deletion request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onDelete](foundry.documents.BaseRegion.md#_ondelete)

### \_onDeleteDescendantDocuments

* \_onDeleteDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â ids: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + ids: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_onGridChange

* \_onGridChange(changed: object): void

  `Internal`

  Called when the scene's grid is changed.

  #### Parameters

  + changed: object

    The changes to the grid.

  #### Returns void

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Post-process an update operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + changed: any

    The differential data that was changed relative to the documents prior values
  + options: any

    Additional options which modify the update request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onUpdate](foundry.documents.BaseRegion.md#_onupdate)

### \_onUpdateDescendantDocuments

* \_onUpdateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â changes: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + changes: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preUpdate

* \_preUpdate(changes: any, options: any, user: any): Promise<void>

  #### Parameters

  + changes: any
  + options: any
  + user: any

  #### Returns Promise<void>

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preUpdate](foundry.documents.BaseRegion.md#_preupdate)

### \_refreshViewedState

* \_refreshViewedState(): Promise<void>

  #### Returns Promise<void>

  #### Inherit Doc

### \_triggerEvent

* \_triggerEvent(eventName: string, eventData: object): Promise<void>

  `Internal`

  Trigger the Region event.

  #### Parameters

  + eventName: string

    The event name
  + eventData: object

    The event data

  #### Returns Promise<void>

### \_updateCommit

* \_updateCommit(copy: any, diff: any, options: any, state: any): void

  Perform the second step of the DataModel#\_updateSource workflow which applies the prepared diff to the model.

  #### Parameters

  + copy: any

    The prepared copy of source data with changes applied
  + diff: any

    The differential changes that were applied to source
  + options: any

    Options which determine how the new data is merged
  + state: any

    Data cleaning state which might include instructions for final commit

  #### Returns void

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_updateCommit](foundry.documents.BaseRegion.md#_updatecommit)

### \_updateDiff

* \_updateDiff(copy: any, changes: any, options: any, \_state: any): object

  Perform the first step of the DataModel#\_updateSource workflow which applies changes to a copy of model source
  data and records the resulting diff.

  #### Parameters

  + copy: any

    A mutable copy of model source data
  + changes: any

    New values which should be applied to the data model
  + options: any

    Options which determine how the new data is merged
  + \_state: any

    Data cleaning state

  #### Returns object

  The resulting difference applied to source data

  #### Throws

  A failure if the proposed change is invalid

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_updateDiff](foundry.documents.BaseRegion.md#_updatediff)

### canUserModify

* canUserModify(user: [BaseUser](foundry.documents.BaseUser.md), action: string, data?: object): boolean

  Test whether a given User has permission to perform some action on this Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User attempting modification
  + action: string

    The attempted action
  + `Optional`data: object = {}

    Data involved in the attempted action

  #### Returns boolean

  Does the User have permission?

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[canUserModify](foundry.documents.BaseRegion.md#canusermodify)

### clampElevation

* clampElevation(elevation: number, depth?: number): number

  Clamp the given elevation (of a token with a depth) to the elevation range of this Region.

  The elevation is clamped such that the head of the token is in the range if possible, but
  the feet are never outside of the range.

  #### Parameters

  + elevation: number

    The elevation (of the token)
  + `Optional`depth: number = 0

    The depth of the token

  #### Returns number

  The clamped elevation

### clone

* clone(  
  Â Â Â Â data: any,  
  Â Â Â Â context: any,  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + data: any

    Additional data which overrides current document data at the time of creation
  + context: any

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The cloned Document instance

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[clone](foundry.documents.BaseRegion.md#clone)

### createEmbeddedDocuments

* createEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â data?: object[],  
  Â Â Â Â operation?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Create multiple embedded Document instances within this parent Document using provided input data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + data: object[] = []

    An array of data objects used to create multiple documents
  + `Optional`operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md) = {}

    Parameters of the database creation workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of created Document instances

  #### See

  [Document.createDocuments](foundry.abstract.Document.md#createdocuments)

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[createEmbeddedDocuments](foundry.documents.BaseRegion.md#createembeddeddocuments)

### delete

* delete(  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids" | "deleteAll">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Delete this Document, removing it from the database.

  #### Parameters

  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids" | "deleteAll">> = {}

    Parameters of the deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The deleted Document instance, or undefined if not deleted

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.md#deletedocuments)

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[delete](foundry.documents.BaseRegion.md#delete)

### deleteEmbeddedDocuments

* deleteEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Delete multiple embedded Document instances within a parent Document using provided string ids.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + ids: string[]

    An array of string ids for each Document to be deleted
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md) = {}

    Parameters of the database deletion workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of deleted Document instances

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.md#deletedocuments)

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[deleteEmbeddedDocuments](foundry.documents.BaseRegion.md#deleteembeddeddocuments)

### getEmbeddedCollection

* getEmbeddedCollection(  
  Â Â Â Â embeddedName: string,  
  ): [Collection](foundry.utils.Collection.md)<string, [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns [Collection](foundry.utils.Collection.md)<string, [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getEmbeddedCollection](foundry.documents.BaseRegion.md#getembeddedcollection)

### getEmbeddedDocument

* getEmbeddedDocument(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  Get an embedded document by its id from a named collection in the parent document.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + id: string

    The id of the child document to retrieve
  + `Optional`options: { invalid?: boolean; strict?: boolean } = {}

    Additional options which modify how embedded documents are retrieved

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Embedded Document.
    - ##### `Optional`strict?: boolean

      Throw an Error if the requested id does not exist. See Collection#get

  #### Returns [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  The retrieved embedded Document instance, or undefined

  #### Throws

  If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
  found.

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getEmbeddedDocument](foundry.documents.BaseRegion.md#getembeddeddocument)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getFieldForProperty](foundry.documents.BaseRegion.md#getfieldforproperty)

### getFlag

* getFlag(scope: string, key: string): any

  Get the value of a "flag" for this document
  See the setFlag method for more details on flags

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns any

  The flag value

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getFlag](foundry.documents.BaseRegion.md#getflag)

### getUserLevel

* getUserLevel(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getUserLevel](foundry.documents.BaseRegion.md#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[migrateSystemData](foundry.documents.BaseRegion.md#migratesystemdata)

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

  #### Inherit Doc

### removeShapeDialog

* removeShapeDialog(  
  Â Â Â Â shapeOrIndex: number | [BaseShapeData](foundry.data.BaseShapeData.md),  
  Â Â Â Â options?: object,  
  ): Promise<boolean>

  Present a Dialog form to confirm the removal of a shape.

  #### Parameters

  + shapeOrIndex: number | [BaseShapeData](foundry.data.BaseShapeData.md)

    The shape or shape index.
  + `Optional`options: object = {}

    Additional options passed to `DialogV2.confirm`

  #### Returns Promise<boolean>

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[reset](foundry.documents.BaseRegion.md#reset)

### segmentizeMovementPath

* segmentizeMovementPath(  
  Â Â Â Â waypoints: [RegionSegmentizeMovementPathWaypoint](../interfaces/foundry.documents.types.RegionSegmentizeMovementPathWaypoint.md)[],  
  Â Â Â Â samples: [Point](../interfaces/foundry.types.Point.md)[],  
  ): [RegionMovementSegment](../interfaces/foundry.documents.types.RegionMovementSegment.md)[]

  Split the movement path into its segments.

  #### Parameters

  + waypoints: [RegionSegmentizeMovementPathWaypoint](../interfaces/foundry.documents.types.RegionSegmentizeMovementPathWaypoint.md)[]

    The waypoints of movement.
  + samples: [Point](../interfaces/foundry.types.Point.md)[]

    The points relative to the waypoints that are tested.
    Whenever one of them is inside the region, the moved object
    is considered to be inside the region.

  #### Returns [RegionMovementSegment](../interfaces/foundry.documents.types.RegionMovementSegment.md)[]

  The movement split into its segments.

### setFlag

* setFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  Â Â Â Â value: any,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Assign a "flag" to this document.
  Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
  the core software, game systems, or user-created modules.

  Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.

  Flags set by the core software use the "core" scope.
  Flags set by game systems or modules should use the canonical name attribute for the module
  Flags set by an individual world should "world" as the scope.

  Flag values can assume almost any data type. Setting a flag value to null will delete that flag.

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key
  + value: any

    The flag value

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  A Promise resolving to the updated document

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[setFlag](foundry.documents.BaseRegion.md#setflag)

### spawnTokens

* spawnTokens(  
  Â Â Â Â tokenData: Iterable<[TokenDocument](foundry.documents.TokenDocument.md) | Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>, any, any>,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â avoidOccupied?: boolean;  
  Â Â Â Â Â Â Â Â create?: boolean;  
  Â Â Â Â Â Â Â Â createOptions?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "parent">>;  
  Â Â Â Â Â Â Â Â level?: string;  
  Â Â Â Â Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
  Â Â Â Â Â Â Â Â placement?: "center" | "relative" | "random";  
  Â Â Â Â Â Â Â Â snap?: boolean;  
  Â Â Â Â },  
  ): Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  Spawn Tokens into this Region.

  The current User must be an owner of the Token Documents and have the `TOKEN_CREATE` permission
  in order to spawn them.

  This function can work ephemeral (non-persisted) Region documents.

  #### Parameters

  + tokenData: Iterable<[TokenDocument](foundry.documents.TokenDocument.md) | Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>, any, any>

    The data of tokens or Token documents to spawn.
  + `Optional`options: {  
    Â Â Â Â avoidOccupied?: boolean;  
    Â Â Â Â create?: boolean;  
    Â Â Â Â createOptions?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "parent">>;  
    Â Â Â Â level?: string;  
    Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
    Â Â Â Â placement?: "center" | "relative" | "random";  
    Â Â Â Â snap?: boolean;  
    } = {}

    Additional options.

    - ##### `Optional`avoidOccupied?: boolean

      Avoid occupied grid spaces when placing randomly with snapping.
      Default: `true`.
    - ##### `Optional`create?: boolean

      Persist the spawned tokens to the database (default true) or
      otherwise return an array of ephemeral TokenDocument instances.
    - ##### `Optional`createOptions?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "parent">>

      Additional create options.
    - ##### `Optional`level?: string

      The destination Level ID, which must be a Level this Region is in.
      Default: the Level of the Region if it is in only one Level.
    - ##### `Optional`offset?: [Point](../interfaces/foundry.types.Point.md)

      The relative offset position. Default: `true`.
    - ##### `Optional`placement?: "center" | "relative" | "random"

      The placement. Default: `"random"`.
    - ##### `Optional`snap?: boolean

      Attempt to spawn the tokens to a snapped position. Default: `true`.

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  The array of Token Documents that where created, which might be
  less than request the creation was disallowed by a preCreate handler

  #### Throws

  If the current User doesn't have the necessary permissions, the Token
  Document could not be created or there's no valid placement.

  #### Example: Spawn 10 tokens with random actor and random rotation in a placed circle with 30 grid units radius.

  ```
  ui.notifications.info("Choose the placement for the spawn area.");  
  const spawnArea = await canvas.regions.placeRegion({  
    name: "Spawn Area",  
    shapes: [{  
      type: "circle",  
      x: 0,  
      y: 0,  
      radius: canvas.dimensions.distancePixels * 30  
    }],  
    restriction: {enabled: true},  
    levels: [canvas.level.id]  
  }, {create: false});  
  if ( spawnArea ) {  
    const {count: numTokensToSpawn=0} = await foundry.applications.api.DialogV2.input({  
     window: {  
        title: "How many tokens to you want to spawn?"  
     },  
     content: `<input type="number" name="count" min="0" step="1" value="10">`  
    }) ?? {};  
    const actors = game.actors.contents;  
    const tokensToSpawn = [];  
    for ( let i = 0; i < numTokensToSpawn; i++ ) {  
      const actor = actors[Math.floor(Math.random() * actors.length)];  
      const token = await actor.getTokenDocument({  
        rotation: Math.random() * 360  
      }, {parent: spawnArea.parent});  
      tokensToSpawn.push(token);  
    }  
    const spawnedTokens = await spawnArea.spawnTokens(tokensToSpawn);  
  }
  Copy
  ```

### teleportToken

* teleportToken(  
  Â Â Â Â token: [TokenDocument](foundry.documents.TokenDocument.md),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â avoidOccupied?: boolean;  
  Â Â Â Â Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â placement?: "center" | "relative" | "random";  
  Â Â Â Â Â Â Â Â snap?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>;  
  Â Â Â Â },  
  ): Promise<[TokenDocument](foundry.documents.TokenDocument.md)>

  Teleport a Token into this Region.

  The Token may be in the same Scene as this Region, or in a different Scene.
  The current User must be an owner of the Token Document in order to teleport it.
  For teleportation to a different Scene the current User requires `TOKEN_CREATE` and
  `TOKEN_DELETE` permissions. If the Token is teleported to different Scene, it is deleted
  and a new Token Document in the other Scene is created.

  This function can work with ephemeral (non-persisted) Region documents.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md)

    An existing Token Document to teleport.
  + `Optional`options: {  
    Â Â Â Â avoidOccupied?: boolean;  
    Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
    Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
    Â Â Â Â placement?: "center" | "relative" | "random";  
    Â Â Â Â snap?: boolean;  
    Â Â Â Â updateData?: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>;  
    }

    Additional options.

    - ##### `Optional`avoidOccupied?: boolean

      Avoid occupied grid spaces when placing randomly with snapping.
      Default: `true`.
    - ##### `Optional`offset?: [Point](../interfaces/foundry.types.Point.md)

      The relative offset position.
    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan the canvas (with transition animation) to the destination if the token is controlled? Default: `true`.
    - ##### `Optional`placement?: "center" | "relative" | "random"

      The placement. Default: `"random"`.
    - ##### `Optional`snap?: boolean

      Attempt to teleport the tokens to a snapped position. Default: `true`.
    - ##### `Optional`updateData?: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>

      Additonal Token update data.

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.md)>

  The same Token Document if teleported within the same Scene,
  or a new Token Document if teleported to a different Scene

  #### Throws

  If failed to teleport the Token document.

  #### Example: Teleport a single token with random rotation

  ```
  await region.teleportToken(token, {  
    updateData: {  
      rotation: Math.random() * 360  
    }  
  });
  Copy
  ```

### teleportTokens

* teleportTokens(  
  Â Â Â Â tokens: Iterable<[TokenDocument](foundry.documents.TokenDocument.md), any, any>,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â avoidOccupied?: boolean;  
  Â Â Â Â Â Â Â Â level?: string;  
  Â Â Â Â Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â placement?: "center" | "relative" | "random";  
  Â Â Â Â Â Â Â Â snap?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: Map<[TokenDocument](foundry.documents.TokenDocument.md), Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>>;  
  Â Â Â Â },  
  ): Promise<Map<[TokenDocument](foundry.documents.TokenDocument.md), [TokenDocument](foundry.documents.TokenDocument.md)>>

  Teleport Tokens into this Region.

  The Tokens may be in the same Scene as this Region, or in a different Scene.
  The current User must be an owner of the Token Documents in order to teleport them.
  For teleportation to a different Scene the current User requires `TOKEN_CREATE` and
  `TOKEN_DELETE` permissions. If a Token is teleported to different Scene, it is deleted
  and a new Token Document in the other Scene is created.

  This function can work ephemeral (non-persisted) Region documents.

  #### Parameters

  + tokens: Iterable<[TokenDocument](foundry.documents.TokenDocument.md), any, any>

    Existing Token Documents to teleport.
  + `Optional`options: {  
    Â Â Â Â avoidOccupied?: boolean;  
    Â Â Â Â level?: string;  
    Â Â Â Â offset?: [Point](../interfaces/foundry.types.Point.md);  
    Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
    Â Â Â Â placement?: "center" | "relative" | "random";  
    Â Â Â Â snap?: boolean;  
    Â Â Â Â updateData?: Map<[TokenDocument](foundry.documents.TokenDocument.md), Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>>;  
    } = {}

    Additional options.

    - ##### `Optional`avoidOccupied?: boolean

      Avoid occupied grid spaces when placing randomly with snapping.
      Default: `true`.
    - ##### `Optional`level?: string

      The destination Level ID, which must be a Level this Region is in.
      Default: the Level of the Region if it is in only one Level.
    - ##### `Optional`offset?: [Point](../interfaces/foundry.types.Point.md)

      The relative offset position.
    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan the canvas (with transition animation) to the destination if the token is controlled? Default: `true`.
    - ##### `Optional`placement?: "center" | "relative" | "random"

      The placement. Default: `"random"`.
    - ##### `Optional`snap?: boolean

      Attempt to teleport the tokens to a snapped position. Default: `true`.
    - ##### `Optional`updateData?: Map<[TokenDocument](foundry.documents.TokenDocument.md), Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>>

      Additonal update data.

  #### Returns Promise<Map<[TokenDocument](foundry.documents.TokenDocument.md), [TokenDocument](foundry.documents.TokenDocument.md)>>

  The mapping of deleted to created Token Documents.

  #### Throws

  If the current User doesn't have the necessary permissions, Token
  Documents could not be created/updated/deleted or there's no valid
  placement.

  #### Example: Teleport multiple tokens with random rotation

  ```
  const updateData = new Map();  
  for ( const token of tokens ) {  
    updateData.set(token, {  
      rotation: Math.random() * 360  
    });  
  }  
  await region.teleportTokens(tokens, {updateData});
  Copy
  ```

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the given point is inside this Region.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is the point inside this Region?

### testUserPermission

* testUserPermission(  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  Â Â Â Â permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md),  
  Â Â Â Â options?: { exact?: boolean },  
  ): boolean

  Test whether a certain User has a requested permission level (or greater) over the Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested
  + permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md)

    The permission level from DOCUMENT\_OWNERSHIP\_LEVELS to test
  + options: { exact?: boolean } = {}

    Additional options involved in the permission test

    - ##### `Optional`exact?: boolean

      Require the exact permission level requested?

  #### Returns boolean

  Does the user have this permission level over the Document?

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[testUserPermission](foundry.documents.BaseRegion.md#testuserpermission)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[toJSON](foundry.documents.BaseRegion.md#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[toObject](foundry.documents.BaseRegion.md#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[traverseEmbeddedDocuments](foundry.documents.BaseRegion.md#traverseembeddeddocuments)

### unsetFlag

* unsetFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Remove a flag assigned to the document.

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The updated document instance

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[unsetFlag](foundry.documents.BaseRegion.md#unsetflag)

### update

* update(  
  Â Â Â Â data?: object,  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Update this Document using incremental data, saving it to the database.

  #### Parameters

  + `Optional`data: object = {}

    Differential update data which modifies the existing values of this document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">> = {}

    Parameters of the update operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The updated Document instance, or undefined not updated

  #### See

  [Document.updateDocuments](foundry.abstract.Document.md#updatedocuments)

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[update](foundry.documents.BaseRegion.md#update)

### updateEmbeddedDocuments

* updateEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Update multiple embedded Document instances within a parent Document using provided differential data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + updates: object[] = []

    An array of differential data objects, each used to update a
    single Document
  + `Optional`operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md) = {}

    Parameters of the database update workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of updated Document instances

  #### See

  [Document.updateDocuments](foundry.abstract.Document.md#updatedocuments)

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[updateEmbeddedDocuments](foundry.documents.BaseRegion.md#updateembeddeddocuments)

### updateShapeConstraints

* updateShapeConstraints(options?: { save?: boolean }): void

  Update the shape constraints of this Region. If `save` is true, the shape constraints are updated
  only if the current User is designated for it.

  #### Parameters

  + `Optional`options: { save?: boolean } = {}

    Additional options

    - ##### `Optional`save?: boolean

      Persist the shape constraints changes? Default: `false`.

  #### Returns void

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[updateSource](foundry.documents.BaseRegion.md#updatesource)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[validate](foundry.documents.BaseRegion.md#validate)

### `Protected`\_computeShapeConstraint

* \_computeShapeConstraint(  
  Â Â Â Â origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config: [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md),  
  ): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  `Protected`

  Compute the shape constraint for the given origin and config.

  #### Parameters

  + origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The origin of the constraint.
  + config: [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)

    The config of the constraint.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The shape constraint.

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_getInnerModel](foundry.documents.BaseRegion.md#_getinnermodel)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_initialize](foundry.documents.BaseRegion.md#_initialize)

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

    The candidate source data from which the model will be constructed
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_initializeSource](foundry.documents.BaseRegion.md#_initializesource)

### `Protected`\_onPolygonTreeChange

* \_onPolygonTreeChange(): void

  `Protected`

  Called when the polygon tree of the Region has changed.

  #### Returns void

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preCreate](foundry.documents.BaseRegion.md#_precreate)

### `Protected`\_preDelete

* \_preDelete(options: object, user: [BaseUser](foundry.documents.BaseUser.md)): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preDelete](foundry.documents.BaseRegion.md#_predelete)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preUpdateSource](foundry.documents.BaseRegion.md#_preupdatesource)

### `Static`\_activateSocketListeners

* \_activateSocketListeners(  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): void

  `Internal`

  Activate the Socket event listeners.

  #### Parameters

  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The active game socket

  #### Returns void

### `Static`\_addDataFieldMigration

* \_addDataFieldMigration(  
  Â Â Â Â data: object,  
  Â Â Â Â oldKey: string,  
  Â Â Â Â newKey: string,  
  Â Â Â Â apply?: (data: object) => any,  
  ): boolean

  `Internal`

  Define a simple migration from one field name to another.
  The value of the data can be transformed during the migration by an optional application function.

  #### Parameters

  + data: object

    The data object being migrated
  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`apply: (data: object) => any

    An application function, otherwise the old value is applied

  #### Returns boolean

  Whether a migration was applied.

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_addDataFieldMigration](foundry.documents.BaseRegion.md#_adddatafieldmigration)

### `Static`\_addDataFieldShim

* \_addDataFieldShim(  
  Â Â Â Â data: object,  
  Â Â Â Â oldKey: string,  
  Â Â Â Â newKey: string,  
  Â Â Â Â options?: { value?: any; warning?: string },  
  ): void

  `Internal`

  A reusable helper for adding a migration shim
  The value of the data can be transformed during the migration by an optional application function.

  #### Parameters

  + data: object

    The data object being shimmed
  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`options: { value?: any; warning?: string } = {}

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_addDataFieldShim](foundry.documents.BaseRegion.md#_adddatafieldshim)

### `Static`\_addDataFieldShims

* \_addDataFieldShims(  
  Â Â Â Â data: object,  
  Â Â Â Â shims: { [oldKey: string]: string },  
  Â Â Â Â options?: { value?: any; warning?: string },  
  ): void

  `Internal`

  A reusable helper for adding migration shims.

  #### Parameters

  + data: object

    The data object being shimmed
  + shims: { [oldKey: string]: string }

    The mapping of old keys to new keys
  + `Optional`options: { value?: any; warning?: string }

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_addDataFieldShims](foundry.documents.BaseRegion.md#_adddatafieldshims)

### `Static`\_clearFieldsRecursively

* \_clearFieldsRecursively(  
  Â Â Â Â data: object,  
  Â Â Â Â fieldNames: string[],  
  Â Â Â Â options?: { callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md) },  
  ): void

  `Internal`

  Clear the fields from the given Document data recursively.

  #### Parameters

  + data: object

    The (partial) Document data
  + fieldNames: string[]

    The fields that are cleared
  + `Optional`options: { callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md) } = {}
    - ##### `Optional`callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md)

      A callback that is invoked on each field in order to clear
      it.

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_clearFieldsRecursively](foundry.documents.BaseRegion.md#_clearfieldsrecursively)

### `Static`\_logDataFieldMigration

* \_logDataFieldMigration(oldKey: string, newKey: string, options?: object): void

  `Internal`

  Log a compatbility warning for the data field migration.

  #### Parameters

  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`options: object = {}

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_logDataFieldMigration](foundry.documents.BaseRegion.md#_logdatafieldmigration)

### `Static`\_migrateMeasuredTemplateData

* \_migrateMeasuredTemplateData(  
  Â Â Â Â template: object,  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â coneTemplateType?: "flat" | "round";  
  Â Â Â Â Â Â Â Â grid?: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>;  
  Â Â Â Â Â Â Â Â gridTemplates?: boolean;  
  Â Â Â Â Â Â Â Â users?: [UserData](../interfaces/foundry.documents.types.UserData.md)[];  
  Â Â Â Â },  
  ): [RegionData](../interfaces/foundry.documents.types.RegionData.md)

  `Internal`

  Migrate MeasuredTemplate data to Region data.

  #### Parameters

  + template: object

    The MeasuredTemplate data
  + `Optional`context: {  
    Â Â Â Â coneTemplateType?: "flat" | "round";  
    Â Â Â Â grid?: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>;  
    Â Â Â Â gridTemplates?: boolean;  
    Â Â Â Â users?: [UserData](../interfaces/foundry.documents.types.UserData.md)[];  
    } = {}

    The migration context

    - ##### `Optional`coneTemplateType?: "flat" | "round"

      The cone curvature
    - ##### `Optional`grid?: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>

      The grid
    - ##### `Optional`gridTemplates?: boolean

      Grid-shaped?
    - ##### `Optional`users?: [UserData](../interfaces/foundry.documents.types.UserData.md)[]

      The users

  #### Returns [RegionData](../interfaces/foundry.documents.types.RegionData.md)

  The Region data

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_migrateMeasuredTemplateData](foundry.documents.BaseRegion.md#_migratemeasuredtemplatedata)

### `Static`\_onCreateOperation

* \_onCreateOperation(documents: any, operation: any, user: any): Promise<void>

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](#_oncreate) workflows.

  #### Parameters

  + documents: any

    The Document instances which were created
  + operation: any

    Parameters of the database creation operation
  + user: any

    The User who performed the creation operation

  #### Returns Promise<void>

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onCreateOperation](foundry.documents.BaseRegion.md#_oncreateoperation)

### `Static`\_onDeleteOperation

* \_onDeleteOperation(documents: any, operation: any, user: any): Promise<void>

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](#_ondelete) workflows.

  #### Parameters

  + documents: any

    The Document instances which were deleted
  + operation: any

    Parameters of the database deletion operation
  + user: any

    The User who performed the deletion operation

  #### Returns Promise<void>

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onDeleteOperation](foundry.documents.BaseRegion.md#_ondeleteoperation)

### `Static`\_onUpdateOperation

* \_onUpdateOperation(documents: any, operation: any, user: any): Promise<void>

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](#_onupdate) workflows.

  #### Parameters

  + documents: any

    The Document instances which were updated
  + operation: any

    Parameters of the database update operation
  + user: any

    The User who performed the update operation

  #### Returns Promise<void>

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_onUpdateOperation](foundry.documents.BaseRegion.md#_onupdateoperation)

### `Static`\_preCleanData

* \_preCleanData(data: any, options: any, \_state: any): void

  Apply preliminary model-specific cleaning rules or alter cleaning options or initial state.
  Subclass models may implement this function to configure the cleaning workflow.
  Any mutations to data, options, or \_state parameters are performed inplace.

  #### Parameters

  + data: any

    The provided input data for cleaning
  + options: any

    Options which define how cleaning should be performed
  + \_state: any

    The data cleaning state

  #### Returns void

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preCleanData](foundry.documents.BaseRegion.md#_precleandata)

### `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): Promise<false | undefined>

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](#updatesource).

  #### Parameters

  + documents: any

    Pending document instances to be created
  + operation: any

    Parameters of the database creation operation
  + user: any

    The User requesting the creation operation

  #### Returns Promise<false | undefined>

  Return false to cancel the creation operation entirely

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_preCreateOperation](foundry.documents.BaseRegion.md#_precreateoperation)

### `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): Promise<false | undefined>

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: any

    Document instances to be updated
  + operation: any

    Parameters of the database update operation
  + user: any

    The User requesting the update operation

  #### Returns Promise<false | undefined>

  Return false to cancel the update operation entirely

  Overrides [BaseRegion](foundry.documents.BaseRegion.md).[\_preUpdateOperation](foundry.documents.BaseRegion.md#_preupdateoperation)

### `Static`\_testElevation

* \_testElevation(  
  Â Â Â Â elevationRange: { bottom: number; top: number; topInclusive: boolean },  
  Â Â Â Â elevation: number,  
  ): boolean

  `Internal`

  Test whether the given elevation is within the elevation range of this Region.

  #### Parameters

  + elevationRange: { bottom: number; top: number; topInclusive: boolean }

    The elevation range.
  + elevation: number

    The elevation.

  #### Returns boolean

  Is the elevation within the elevation range of this Region?

### `Static`canUserCreate

* canUserCreate(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[canUserCreate](foundry.documents.BaseRegion.md#canusercreate)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[cleanData](foundry.documents.BaseRegion.md#cleandata)

### `Static`create

* create(  
  Â Â Â Â data?:  
  Â Â Â Â Â Â Â Â | object  
  Â Â Â Â Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â Â Â Â Â | (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">>,  
  ): Promise<  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]  
  Â Â Â Â | undefined,  
  >

  Create a new Document using provided input data, saving it to the database.

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | object  
    Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
    Â Â Â Â | (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[] = {}

    Initial data used to create this Document, or a Document
    instance to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">> = {}

    Parameters of the creation operation

  #### Returns Promise< Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[] Â Â Â Â | undefined, >

  The created Document instance(s)

  #### See

  [Document.createDocuments](foundry.abstract.Document.md#createdocuments)

  #### Example: Create a World-level Item

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const created = await Item.implementation.create(data);
  Copy
  ```

  #### Example: Create an Actor-owned Item

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const actor = game.actors.getName("My Hero");  
  const created = await Item.implementation.create(data, {parent: actor});
  Copy
  ```

  #### Example: Create an Item in a Compendium pack

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[create](foundry.documents.BaseRegion.md#create)

### `Static`createDocuments

* createDocuments(  
  Â Â Â Â data?: (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Create multiple Documents using provided input data.
  Data is provided as an array of objects where each individual object becomes one new Document.

  #### Parameters

  + data: (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[] = []

    An array of data objects or existing Documents to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">> = {}

    Parameters of the requested creation
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of created Document instances

  #### Example: Create a single Document

  ```
  const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];  
  const created = await Actor.implementation.createDocuments(data);
  Copy
  ```

  #### Example: Create multiple Documents

  ```
  const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];  
  const created = await Actor.implementation.createDocuments(data);
  Copy
  ```

  #### Example: Create multiple embedded Documents within a parent

  ```
  const actor = game.actors.getName("Tim");  
  const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];  
  const created = await Item.implementation.createDocuments(data, {parent: actor});
  Copy
  ```

  #### Example: Create a Document within a Compendium pack

  ```
  const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];  
  const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[createDocuments](foundry.documents.BaseRegion.md#createdocuments)

### `Static`createTokenEmanation

* createTokenEmanation(  
  Â Â Â Â token: [TokenDocument](foundry.documents.TokenDocument.md),  
  Â Â Â Â range: number,  
  Â Â Â Â regionData: Omit<[RegionData](../interfaces/foundry.documents.types.RegionData.md), "elevation" | "shapes">,  
  Â Â Â Â options?: any,  
  ): Promise<void | RegionDocument>

  Create an emanation Region for the Token and attach it to the Token.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md)

    The Token to attach the emanation Region to
  + range: number

    The range of the emanation in grid units
  + regionData: Omit<[RegionData](../interfaces/foundry.documents.types.RegionData.md), "elevation" | "shapes">

    The Region data of the emanation
  + `Optional`options: any = {}

    Additional options

  #### Returns Promise<void | RegionDocument>

  The created Region document unless the creation was prevented

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â \_shapeConstraints: [ArrayField](foundry.data.fields.ArrayField.md)<[ArrayField](foundry.data.fields.ArrayField.md)<[NumberField](foundry.data.fields.NumberField.md)>>;  
  Â Â Â Â attachment: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â behaviors: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â color: [ColorField](foundry.data.fields.ColorField.md);  
  Â Â Â Â displayMeasurements: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â elevation: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md);  
  Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â highlightMode: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â levels: [SceneLevelsSetField](foundry.data.fields.SceneLevelsSetField.md);  
  Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md);  
  Â Â Â Â restriction: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â shapes: [ShapesField](foundry.data.fields.ShapesField.md);  
  Â Â Â Â visibility: [NumberField](foundry.data.fields.NumberField.md);  
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

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â \_shapeConstraints: [ArrayField](foundry.data.fields.ArrayField.md)<[ArrayField](foundry.data.fields.ArrayField.md)<[NumberField](foundry.data.fields.NumberField.md)>>; Â Â Â Â attachment: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â behaviors: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â color: [ColorField](foundry.data.fields.ColorField.md); Â Â Â Â displayMeasurements: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â elevation: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md); Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â highlightMode: [StringField](foundry.data.fields.StringField.md); Â Â Â Â levels: [SceneLevelsSetField](foundry.data.fields.SceneLevelsSetField.md); Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â name: [StringField](foundry.data.fields.StringField.md); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md); Â Â Â Â restriction: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â shapes: [ShapesField](foundry.data.fields.ShapesField.md); Â Â Â Â visibility: [NumberField](foundry.data.fields.NumberField.md); }

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[defineSchema](foundry.documents.BaseRegion.md#defineschema)

### `Static`deleteDocuments

* deleteDocuments(  
  Â Â Â Â ids?: string[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Delete one or multiple existing Documents using an array of provided ids.
  Data is provided as an array of string ids for the documents to delete.

  #### Parameters

  + ids: string[] = []

    An array of string ids for the documents to be deleted
  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids">> = {}

    Parameters of the database deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of deleted Document instances

  #### Throws

  If an invalid operation is attempted.

  #### Example: Delete a single Document

  ```
  const tim = game.actors.getName("Tim");  
  const deleted = await Actor.implementation.deleteDocuments([tim.id]);
  Copy
  ```

  #### Example: Delete multiple Documents

  ```
  const tim = game.actors.getName("Tim");  
  const tom = game.actors.getName("Tom");  
  const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);
  Copy
  ```

  #### Example: Delete multiple embedded Documents within a parent

  ```
  const tim = game.actors.getName("Tim");  
  const sword = tim.items.getName("Sword");  
  const shield = tim.items.getName("Shield");  
  const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});
  Copy
  ```

  #### Example: Delete Documents within a Compendium pack

  ```
  const actor = await pack.getDocument(documentId);  
  const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[deleteDocuments](foundry.documents.BaseRegion.md#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[fromJSON](foundry.documents.BaseRegion.md#fromjson)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[fromSource](foundry.documents.BaseRegion.md#fromsource)

### `Static`get

* get(  
  Â Â Â Â documentId: string,  
  Â Â Â Â operation?: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md),  
  ): [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

  Get a World-level Document of this type by its id.

  #### Parameters

  + documentId: string

    The Document ID
  + `Optional`operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md) = {}

    Parameters of the get operation

  #### Returns [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

  The retrieved Document, or null

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[get](foundry.documents.BaseRegion.md#get)

### `Static`getCollectionName

* getCollectionName(name: string): string | null

  A compatibility method that returns the appropriate name of an embedded collection within this Document.

  #### Parameters

  + name: string

    An existing collection name or a document name.

  #### Returns string | null

  The provided collection name if it exists, the first available collection for the
  document name provided, or null if no appropriate embedded collection could be found.

  #### Example: Passing an existing collection name.

  ```
  Actor.implementation.getCollectionName("items");  
  // returns "items"
  Copy
  ```

  #### Example: Passing a document name.

  ```
  Actor.implementation.getCollectionName("Item");  
  // returns "items"
  Copy
  ```

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[getCollectionName](foundry.documents.BaseRegion.md#getcollectionname)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[migrateData](foundry.documents.BaseRegion.md#migratedata)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[migrateDataSafe](foundry.documents.BaseRegion.md#migratedatasafe)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[shimData](foundry.documents.BaseRegion.md#shimdata)

### `Static`updateDocuments

* updateDocuments(  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Update multiple Document instances using provided differential data.
  Data is provided as an array of objects where each individual object updates one existing Document.

  #### Parameters

  + updates: object[] = []

    An array of differential data objects, each used to update a single Document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">> = {}

    Parameters of the database update
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of updated Document instances

  #### Example: Update a single Document

  ```
  const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];  
  const updated = await Actor.implementation.updateDocuments(updates);
  Copy
  ```

  #### Example: Update multiple Documents

  ```
  const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};  
  const updated = await Actor.implementation.updateDocuments(updates);
  Copy
  ```

  #### Example: Update multiple embedded Documents within a parent

  ```
  const actor = game.actors.getName("Timothy");  
  const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];  
  const updated = await Item.implementation.updateDocuments(updates, {parent: actor});
  Copy
  ```

  #### Example: Update Documents within a Compendium pack

  ```
  const actor = await pack.getDocument(documentId);  
  const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  
    {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[updateDocuments](foundry.documents.BaseRegion.md#updatedocuments)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[validateJoint](foundry.documents.BaseRegion.md#validatejoint)

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

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_cleanData](foundry.documents.BaseRegion.md#_cleandata)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseRegion](foundry.documents.BaseRegion.md).[\_preDeleteOperation](foundry.documents.BaseRegion.md#_predeleteoperation)