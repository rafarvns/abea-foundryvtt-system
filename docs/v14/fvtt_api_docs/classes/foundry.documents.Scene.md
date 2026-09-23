---
title: "Scene | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.Scene.html"
category: "classes"
---

# Class Scene

The client-side Scene document which extends the common BaseScene model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Scenes](foundry.documents.collections.Scenes.md): The world-level collection of Scene documents
* [foundry.applications.sheets.SceneConfig](foundry.applications.sheets.SceneConfig.md): The Scene configuration application

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.Scene))

* [BaseScene](foundry.documents.BaseScene.md)<this>
  + Scene

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[\_view](#_view)
[\_viewPosition](#_viewposition)
[dimensions](#dimensions)
[grid](#grid)
[gridlessGrid](#gridlessgrid)
[parent](#parent)
[\_availableLevels](#_availablelevels)
[\_LEVELS\_PROPERTY\_MAP](#_levels_property_map)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)

### Accessors

[availableLevels](#availablelevels)
[compendium](#compendium)
[firstLevel](#firstlevel)
[id](#id)
[inCompendium](#incompendium)
[initializedEdges](#initializededges)
[initialLevel](#initiallevel)
[invalid](#invalid)
[isEmbedded](#isembedded)
[isView](#isview)
[schema](#schema)
[thumbnail](#thumbnail)
[uuid](#uuid)
[validationFailures](#validationfailures)
[baseDocument](#basedocument)
[collectionName](#collectionname)
[database](#database)
[defaultGrid](#defaultgrid)
[defaultGridlessGrid](#defaultgridlessgrid)
[documentName](#documentname)
[hasTypeData](#hastypedata)
[hierarchy](#hierarchy)
[implementation](#implementation)
[schema](#schema-1)
[TYPES](#types)

### Methods

[\_configure](#_configure)
[\_configureLevelTextures](#_configureleveltextures)
[\_getParentCollection](#_getparentcollection)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_invalidateSurfaces](#_invalidatesurfaces)
[\_onClickDocumentLink](#_onclickdocumentlink)
[\_onCreate](#_oncreate)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDelete](#_ondelete)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_onUpdate](#_onupdate)
[\_onUpdateDescendantDocuments](#_onupdatedescendantdocuments)
[\_preCreate](#_precreate)
[\_preCreateDescendantDocuments](#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](#_predeletedescendantdocuments)
[\_preUpdate](#_preupdate)
[\_preUpdateDescendantDocuments](#_preupdatedescendantdocuments)
[\_resetEdges](#_resetedges)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_updateRegionShapeConstraints](#_updateregionshapeconstraints)
[activate](#activate)
[canUserModify](#canusermodify)
[clearMovementHistories](#clearmovementhistories)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[createThumbnail](#createthumbnail)
[cycleLevel](#cyclelevel)
[delete](#delete)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[getDimensions](#getdimensions)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getSurfaces](#getsurfaces)
[getUserLevel](#getuserlevel)
[initializeEdges](#initializeedges)
[migrateSystemData](#migratesystemdata)
[moveTokens](#movetokens)
[prepareBaseData](#preparebasedata)
[prepareDerivedData](#preparederiveddata)
[prepareEmbeddedDocuments](#prepareembeddeddocuments)
[pullUsers](#pullusers)
[reset](#reset)
[setFlag](#setflag)
[testSurfaceCollision](#testsurfacecollision)
[testUserPermission](#testuserpermission)
[toCompendium](#tocompendium)
[toJSON](#tojson)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[unview](#unview)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateRegionShapeConstraints](#updateregionshapeconstraints)
[updateSource](#updatesource)
[updateTokenRegions](#updatetokenregions)
[validate](#validate)
[view](#view)
[\_getAvailableLevels](#_getavailablelevels)
[\_getInnerModel](#_getinnermodel)
[\_initializeSource](#_initializesource)
[\_onActivate](#_onactivate)
[\_preDelete](#_predelete)
[\_preUpdateSource](#_preupdatesource)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCleanData](#_precleandata)
[\_preCreateOperation](#_precreateoperation)
[canUserCreate](#canusercreate)
[cleanData](#cleandata)
[create](#create)
[createDocuments](#createdocuments)
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
[\_onCreateOperation](#_oncreateoperation)
[\_onDeleteOperation](#_ondeleteoperation)
[\_preDeleteOperation](#_predeleteoperation)
[\_preUpdateOperation](#_preupdateoperation)

## Constructors

### constructor

* new Scene(data?: any, options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): [documents](../modules/foundry.documents.md).Scene

  #### Parameters

  + `Optional`data: any = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.md).Scene

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[constructor](foundry.documents.BaseScene.md#constructor)

## Properties

### \_source

\_source: SceneData

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_source](foundry.documents.BaseScene.md#_source)

### `Internal`\_view

\_view: string | null = null

Track whether the scene is the active view and which level is viewed

### `Internal`\_viewPosition

\_viewPosition: [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md) = {}

Track the viewed position of each scene (while in memory only, not persisted)
When switching back to a previously viewed scene, we can automatically pan to the previous position.

### dimensions

dimensions: [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.md) = ...

Determine the canvas dimensions this Scene would occupy, if rendered

### grid

grid: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)> = ...

The grid instance.

### gridlessGrid

gridlessGrid: [GridlessGrid](foundry.grid.GridlessGrid.md) = ...

The gridless version of the grid instance.

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseScene](foundry.documents.BaseScene.md).[parent](foundry.documents.BaseScene.md#parent)

### `Protected`\_availableLevels

\_availableLevels: Set<[documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)> | null = null

### `Static` `Internal`\_LEVELS\_PROPERTY\_MAP

\_LEVELS\_PROPERTY\_MAP: readonly string[][] = ...

A mapping of top-level scene properties to their corresponding properties on the child level.

Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_LEVELS\_PROPERTY\_MAP](foundry.documents.BaseScene.md#_levels_property_map)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_schema](foundry.documents.BaseScene.md#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseScene](foundry.documents.BaseScene.md).[LOCALIZATION\_PREFIXES](foundry.documents.BaseScene.md#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseScene](foundry.documents.BaseScene.md).[metadata](foundry.documents.BaseScene.md#metadata)

## Accessors

### availableLevels

* get availableLevels(): Set<[documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)>

  The levels that are available to this User. By default GMs and scenes without token vision can access all levels;
  players can only access levels where they have OBSERVER of a Token.
  A SceneManager may override this via [SceneManager#\_getAvailableLevels](foundry.canvas.SceneManager.md#_getavailablelevels).

  #### Returns Set<[documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)>

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseScene).compendium

### firstLevel

* get firstLevel(): [BaseLevel](foundry.documents.BaseLevel.md)

  A convenience getter for the Scene's first created Level. This should not be relied on in multi-level scenes to
  mean the first level by sort order.

  #### Returns [BaseLevel](foundry.documents.BaseLevel.md)

  Inherited from ClientDocumentMixin(BaseScene).firstLevel

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseScene).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).inCompendium

### initializedEdges

* get initializedEdges(): boolean

  Have the edges of this Scene been initialized already?

  The property becomes true we moment [Scene#initializeEdges](#initializeedges) is called.

  #### Returns boolean

### initialLevel

* get initialLevel(): [BaseLevel](foundry.documents.BaseLevel.md)

  The initial Level of the Scene. By default the first Level.

  #### Returns [BaseLevel](foundry.documents.BaseLevel.md)

  Inherited from ClientDocumentMixin(BaseScene).initialLevel

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).isEmbedded

### isView

* get isView(): boolean

  A convenience accessor for whether the Scene is currently viewed

  #### Returns boolean

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseScene).schema

### thumbnail

* get thumbnail(): string | null

  Provide a thumbnail image path used to represent this document.

  #### Returns string | null

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseScene).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from ClientDocumentMixin(BaseScene).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseScene).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseScene).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from ClientDocumentMixin(BaseScene).database

### `Static`defaultGrid

* get defaultGrid(): BaseGrid

  The default grid defined by the system.

  #### Returns BaseGrid

### `Static`defaultGridlessGrid

* get defaultGridlessGrid(): [GridlessGrid](foundry.grid.GridlessGrid.md)

  The gridless version of the default grid defined by the system.

  #### Returns [GridlessGrid](foundry.grid.GridlessGrid.md)

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseScene).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseScene).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseScene).implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseScene).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseScene).TYPES

## Methods

### \_configure

* \_configure(options?: {}): void

  #### Parameters

  + options: {} = {}

  #### Returns void

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_configure](foundry.documents.BaseScene.md#_configure)

### \_configureLevelTextures

* \_configureLevelTextures(): (  
  Â Â Â Â [LevelTexture](../interfaces/foundry.documents.types.LevelTexture.md) & {  
  Â Â Â Â Â Â Â Â elevation: number;  
  Â Â Â Â Â Â Â Â isBackground: boolean;  
  Â Â Â Â Â Â Â Â isUpper: boolean;  
  Â Â Â Â Â Â Â Â level: [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
  Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â sort: number;  
  Â Â Â Â Â Â Â Â zIndex: number;  
  Â Â Â Â }  
  )[]

  `Internal`

  Get textures that should be used for the currently active level.

  #### Returns ( Â Â Â Â [LevelTexture](../interfaces/foundry.documents.types.LevelTexture.md) & { Â Â Â Â Â Â Â Â elevation: number; Â Â Â Â Â Â Â Â isBackground: boolean; Â Â Â Â Â Â Â Â isUpper: boolean; Â Â Â Â Â Â Â Â level: [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md); Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â sort: number; Â Â Â Â Â Â Â Â zIndex: number; Â Â Â Â } )[]

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_getParentCollection](foundry.documents.BaseScene.md#_getparentcollection)

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_initializationOrder](foundry.documents.BaseScene.md#_initializationorder)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_initialize](foundry.documents.BaseScene.md#_initialize)

### \_invalidateSurfaces

* \_invalidateSurfaces(): void

  `Internal`

  Invalidate cached surface data.

  #### Returns void

### \_onClickDocumentLink

* \_onClickDocumentLink(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

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

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_onCreate](foundry.documents.BaseScene.md#_oncreate)

### \_onCreateDescendantDocuments

* \_onCreateDescendantDocuments(  
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

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_onDelete](foundry.documents.BaseScene.md#_ondelete)

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

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): Promise<any> | undefined

  Post-process an update operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + changed: any

    The differential data that was changed relative to the documents prior values
  + options: any

    Additional options which modify the update request
  + userId: any

    The id of the User requesting the document update

  #### Returns Promise<any> | undefined

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_onUpdate](foundry.documents.BaseScene.md#_onupdate)

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

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<false | undefined>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<false | undefined>

  Return false to exclude this Document from the creation operation

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_preCreate](foundry.documents.BaseScene.md#_precreate)

### \_preCreateDescendantDocuments

* \_preCreateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â data: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preDeleteDescendantDocuments

* \_preDeleteDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â ids: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + ids: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preUpdate

* \_preUpdate(  
  Â Â Â Â changed: any,  
  Â Â Â Â options: any,  
  Â Â Â Â user: any,  
  ): Promise<false | Readonly<[Notification](../interfaces/foundry.Notification.md)> | undefined>

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changed: any

    The candidate changes to the Document
  + options: any

    Additional options which modify the update request
  + user: any

    The User requesting the document update

  #### Returns Promise<false | Readonly<[Notification](../interfaces/foundry.Notification.md)> | undefined>

  A return value of false indicates the update operation should be cancelled.

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_preUpdate](foundry.documents.BaseScene.md#_preupdate)

### \_preUpdateDescendantDocuments

* \_preUpdateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â changes: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + changes: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_resetEdges

* \_resetEdges(): void

  `Internal`

  Reset the edges of this Scene.

  #### Returns void

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

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_updateCommit](foundry.documents.BaseScene.md#_updatecommit)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_updateDiff](foundry.documents.BaseScene.md#_updatediff)

### \_updateRegionShapeConstraints

* \_updateRegionShapeConstraints(region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)): void

  `Internal`

  Update the shape constraints of the given Regions if the current User is designated for it.

  #### Parameters

  + region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

  #### Returns void

### activate

* activate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â pullUsers?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: Partial<Omit<[SceneData](../interfaces/foundry.documents.types.SceneData.md), "active">>;  
  Â Â Â Â Â Â Â Â updateOptions?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>;  
  Â Â Â Â Â Â Â Â viewOptions?: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md);  
  Â Â Â Â },  
  ): Promise<[documents](../modules/foundry.documents.md).Scene>

  Set this Scene as currently active.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â pullUsers?: boolean;  
    Â Â Â Â updateData?: Partial<Omit<[SceneData](../interfaces/foundry.documents.types.SceneData.md), "active">>;  
    Â Â Â Â updateOptions?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>;  
    Â Â Â Â viewOptions?: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md);  
    } = {}

    Additional options

    - ##### `Optional`pullUsers?: boolean

      Pull all Users to this Scene if it is already active?
    - ##### `Optional`updateData?: Partial<Omit<[SceneData](../interfaces/foundry.documents.types.SceneData.md), "active">>

      Additional update data
    - ##### `Optional`updateOptions?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>

      The update operation options
    - ##### `Optional`viewOptions?: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md)

      The view options

  #### Returns Promise<[documents](../modules/foundry.documents.md).Scene>

  A Promise which resolves to this Scene once it has been successfully activated

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[canUserModify](foundry.documents.BaseScene.md#canusermodify)

### clearMovementHistories

* clearMovementHistories(): Promise<void>

  Clear the movement history of all Tokens within this Scene.

  #### Returns Promise<void>

### clone

* clone(  
  Â Â Â Â createData?: {},  
  Â Â Â Â options?: {},  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  #### Parameters

  + createData: {} = {}
  + options: {} = {}

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Overrides [BaseScene](foundry.documents.BaseScene.md).[clone](foundry.documents.BaseScene.md#clone)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[createEmbeddedDocuments](foundry.documents.BaseScene.md#createembeddeddocuments)

### createThumbnail

* createThumbnail(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â format?: string;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
  Â Â Â Â Â Â Â Â quality?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â format: string;  
  Â Â Â Â Â Â Â Â height: number;  
  Â Â Â Â Â Â Â Â quality: number;  
  Â Â Â Â Â Â Â Â thumb: string;  
  Â Â Â Â Â Â Â Â width: number;  
  Â Â Â Â },  
  >

  Create a 300px by 100px thumbnail image for this scene background

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â format?: string;  
    Â Â Â Â height?: number;  
    Â Â Â Â level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
    Â Â Â Â quality?: number;  
    Â Â Â Â width?: number;  
    } = {}

    Options which modify thumbnail creation

    - ##### `Optional`format?: string

      Which image format should be used? image/png, image/jpeg,
      or image/webp. Default is image/webp.
    - ##### `Optional`height?: number

      The desired thumbnail height. Default is 100px;
    - ##### `Optional`level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

      The Level to generated the thumbnail for. Defaults to the initial level.
    - ##### `Optional`quality?: number

      What compression quality should be used for jpeg or webp, between 0 and 1.
      Default is 0.8.
    - ##### `Optional`width?: number

      The desired thumbnail width. Default is 300px

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â format: string; Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â quality: number; Â Â Â Â Â Â Â Â thumb: string; Â Â Â Â Â Â Â Â width: number; Â Â Â Â }, >

  The created thumbnail data.

### cycleLevel

* cycleLevel(direction: -1 | 1): Promise<void>

  Cycle the currently viewed Level for this Scene.

  #### Parameters

  + direction: -1 | 1

  #### Returns Promise<void>

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[delete](foundry.documents.BaseScene.md#delete)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[deleteEmbeddedDocuments](foundry.documents.BaseScene.md#deleteembeddeddocuments)

### getDimensions

* getDimensions(): [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.md)

  Get the Canvas dimensions which would be used to display this Scene.
  Apply padding to enlarge the playable space and round to the nearest 2x grid size to ensure symmetry.
  The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.

  #### Returns [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.md)

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: any): any

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: any

    The name of the embedded Document type

  #### Returns any

  The Collection instance of embedded Documents of the requested type

  Overrides [BaseScene](foundry.documents.BaseScene.md).[getEmbeddedCollection](foundry.documents.BaseScene.md#getembeddedcollection)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[getEmbeddedDocument](foundry.documents.BaseScene.md#getembeddeddocument)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[getFieldForProperty](foundry.documents.BaseScene.md#getfieldforproperty)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[getFlag](foundry.documents.BaseScene.md#getflag)

### getSurfaces

* getSurfaces(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â culling?: boolean;  
  Â Â Â Â Â Â Â Â exposure?: boolean;  
  Â Â Â Â Â Â Â Â level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
  Â Â Â Â Â Â Â Â occlusion?: boolean;  
  Â Â Â Â Â Â Â Â type?: "darkness" | "light" | "sight" | "sound" | "move";  
  Â Â Â Â },  
  ): readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[RegionSurface](../interfaces/foundry.documents.types.RegionSurface.md)>[]

  Get all surfaces or surfaces matching the filter, ordered by elevation in ascending order.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â culling?: boolean;  
    Â Â Â Â exposure?: boolean;  
    Â Â Â Â level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
    Â Â Â Â occlusion?: boolean;  
    Â Â Â Â type?: "darkness" | "light" | "sight" | "sound" | "move";  
    } = {}

    Additional options

    - ##### `Optional`culling?: boolean

      Only return surfaces that have this value as RegionSurface#culling
    - ##### `Optional`exposure?: boolean

      Only return surfaces that have this value as RegionSurface#exposure
    - ##### `Optional`level?: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

      Only return surfaces that are included in this Level
    - ##### `Optional`occlusion?: boolean

      Only return surfaces that have this value as RegionSurface#occlusion
    - ##### `Optional`type?: "darkness" | "light" | "sight" | "sound" | "move"

      Only return surfaces that restrict this type

  #### Returns readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[RegionSurface](../interfaces/foundry.documents.types.RegionSurface.md)>[]

### getUserLevel

* getUserLevel(user?: [BaseUser](foundry.documents.BaseUser.md)): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md)

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[getUserLevel](foundry.documents.BaseScene.md#getuserlevel)

### initializeEdges

* initializeEdges(): void

  Initialize the edges of this Scene unless they already have been inititalized.

  #### Returns void

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[migrateSystemData](foundry.documents.BaseScene.md#migratesystemdata)

### moveTokens

* moveTokens(  
  Â Â Â Â instructions: {  
  Â Â Â Â Â Â Â Â [id: string]: [TokenMovementInstruction](../types/foundry.documents.types.TokenMovementInstruction.md) | [TokenResizingInstruction](../interfaces/foundry.documents.types.TokenResizingInstruction.md);  
  Â Â Â Â },  
  Â Â Â Â options?: Partial<  
  Â Â Â Â Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â "id",  
  Â Â Â Â Â Â Â Â >,  
  Â Â Â Â >,  
  ): Promise<{ [id: string]: boolean }>

  Move/resize multiple Tokens.

  #### Parameters

  + instructions: { [id: string]: [TokenMovementInstruction](../types/foundry.documents.types.TokenMovementInstruction.md) | [TokenResizingInstruction](../interfaces/foundry.documents.types.TokenResizingInstruction.md) }

    The movement/resizing instructions.
  + `Optional`options: Partial<  
    Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit<  
    Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
    Â Â Â Â Â Â Â Â "id",  
    Â Â Â Â >,  
    >

    Parameters of the update and movement operation.

  #### Returns Promise<{ [id: string]: boolean }>

  A Promise that resolves once all movement instructions are finished.
  The resolved value is an object with token IDs as keys and booleans as values that indicate whether the movement
  the token with the corresponding ID was completed (`true`) or stopped/prevented (`false`).

  #### See

  + [foundry.documents.TokenDocument#move](foundry.documents.TokenDocument.md#move)
  + [foundry.documents.TokenDocument#resize](foundry.documents.TokenDocument.md#resize)

  #### Example

  ```
  const results = await scene.moveTokens({  
     // Moving the token to new position including additional token data  
    "cGYT0rR0YbtFkhzT": {  
      destination: {x: 100, y: 200, rotation: 45, texture: {tint: "#ff0000"}},  
      showRuler: false, // This overrides `options.showRuler`  
    },  
    // Moving the token to along a path with multiple waypoints  
    "wBFpJuZuleEtVNw1": {  
      waypoints: [  
        {x: 100, y: 200}, // Move to the position (100, 200)  
        {elevation: 5, explicit: true}, // Move to elevation 5 indicating that the user placed this waypoint  
        {x: 500, y: 500, checkpoint: true}, // Move to (500, 500): the movement can be stopped/paused here  
        {width: 2, height: 2, depth: 2}, // Change size  
        {x: 1000, action: "swim"}, // Swim to (1000, 500)  
        {x: 0, y: 0, snapped: true}, // Move to (0, 0) indicating that (0, 0) is a snapped position for the token  
        {elevation: 10} // Move to elevation 10 (the last waypoint is always a checkpoint automatically)  
      ],  
      autoRotate: true,  
      constrainOptions: {ignoreWalls: true, ignoreCost: true} // Allow the token to move through walls, surfaces, and  
                                                              // impassable terrain  
    },  
    // Resizing the token including additional token data  
    "VupAIbzpX6SHqtaH": {  
      dimensions: {width: 3, height: 3, depth: 3, rotation: 45, texture: {tint: "#ff0000"}}  
    }  
  }, {  
    showRuler: true // This applies to all instructions that do not define `showRuler`  
  })  
  if ( results["cGYT0rR0YbtFkhzT"] ) {  
    // The movement of Token [cGYT0rR0YbtFkhzT] was completed: it arrived at the destination  
  } else {  
    // The movement of Token [cGYT0rR0YbtFkhzT] was stopped or prevented  
  }  
  if ( results["wBFpJuZuleEtVNw1"] ) {  
    // The movement of Token [wBFpJuZuleEtVNw1] was completed: it arrived at the destination  
  } else {  
    // The movement of Token [wBFpJuZuleEtVNw1] was stopped or prevented  
  }  
  if ( results["VupAIbzpX6SHqtaH"] ) {  
    // The resizing of Token [VupAIbzpX6SHqtaH] was completed  
  } else {  
    // The resizing of Token [VupAIbzpX6SHqtaH] was prevented  
  }
  Copy
  ```

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

  #### Inherit Doc

### prepareDerivedData

* prepareDerivedData(): void

  #### Returns void

  #### Inherit Doc

### prepareEmbeddedDocuments

* prepareEmbeddedDocuments(): void

  #### Returns void

  #### Inherit Doc

### pullUsers

* pullUsers(  
  Â Â Â Â users: Iterable<string | [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md), any, any>,  
  Â Â Â Â viewOptions?: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md),  
  ): void

  Pull the specified users to this Scene.

  #### Parameters

  + users: Iterable<string | [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md), any, any>

    The User documents or IDs.
  + `Optional`viewOptions: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md) = {}

    The view options.

  #### Returns void

  #### Example: Pull all users to the viewed scene.

  ```
  canvas.scene.pullUsers(game.users);
  Copy
  ```

### reset

* reset(): void

  #### Returns void

  Overrides [BaseScene](foundry.documents.BaseScene.md).[reset](foundry.documents.BaseScene.md#reset)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[setFlag](foundry.documents.BaseScene.md#setflag)

### testSurfaceCollision

* testSurfaceCollision(  
  Â Â Â Â origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â destination: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config: {  
  Â Â Â Â Â Â Â Â level: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
  Â Â Â Â Â Â Â Â mode?: "any" | "closest" | "all";  
  Â Â Â Â Â Â Â Â side?: "below" | "above";  
  Â Â Â Â Â Â Â Â tMax?: number;  
  Â Â Â Â Â Â Â Â tMin?: number;  
  Â Â Â Â Â Â Â Â type?: "darkness" | "light" | "sight" | "sound" | "move";  
  Â Â Â Â },  
  ): boolean  
  | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)  
  | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[]  
  | null

  Test for surface collision for a movement between two points.

  #### Parameters

  + origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The origin.
  + destination: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The destination.
  + config: {  
    Â Â Â Â level: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md);  
    Â Â Â Â mode?: "any" | "closest" | "all";  
    Â Â Â Â side?: "below" | "above";  
    Â Â Â Â tMax?: number;  
    Â Â Â Â tMin?: number;  
    Â Â Â Â type?: "darkness" | "light" | "sight" | "sound" | "move";  
    }

    Configuration.

    - ##### level: string | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

      The Level or Level ID to test collision in.
    - ##### `Optional`mode?: "any" | "closest" | "all"

      The collision mode. Default: `"any"`.
    - ##### `Optional`side?: "below" | "above"

      The side of the surface that counts as colliding
      when the ray originates on the surface. Default: `"below"`.
      - `"below"`: Treats the surface as solid in the negative z-direction.
      Rays originating on the surface will collide if they point downward
      (z < 0) and will not collide if they point upward.
      - `"above"`: Treats the surface as solid in the positive z-direction.
      Rays originating on the surface will collide if they point upward
      (z > 0) and will not collide if they point downward.
    - ##### `Optional`tMax?: number

      Intersections of the ray and a surface with t-value greater than
      `tMax` are not considered collisions. Default: `1`.
    - ##### `Optional`tMin?: number

      Intersections of the ray and a surface with t-value less than
      `tMin` are not considered collisions. Default: `0`.
    - ##### `Optional`type?: "darkness" | "light" | "sight" | "sound" | "move"

      The restriction type. Default: `"move"`.

  #### Returns boolean | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[] | null

  The collision result depends on the mode of the test:
  - `"any"`: Returns a boolean for whether any collision occurred.
  - `"all"`: Returns a sorted array of `ElevatedPoint` instances.
  - `"closest"`: Returns an `ElevatedPoint` instance or null.

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[testUserPermission](foundry.documents.BaseScene.md#testuserpermission)

### toCompendium

* toCompendium(pack: any, options?: {}): any

  #### Parameters

  + pack: any
  + options: {} = {}

  #### Returns any

  #### Inherit Doc

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[toJSON](foundry.documents.BaseScene.md#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Overrides [BaseScene](foundry.documents.BaseScene.md).[toObject](foundry.documents.BaseScene.md#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[traverseEmbeddedDocuments](foundry.documents.BaseScene.md#traverseembeddeddocuments)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[unsetFlag](foundry.documents.BaseScene.md#unsetflag)

### unview

* unview(): Promise<[documents](../modules/foundry.documents.md).Scene | undefined>

  Unview this Scene, if it is the viewed Scene, clearing the game canvas.

  #### Returns Promise<[documents](../modules/foundry.documents.md).Scene | undefined>

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[update](foundry.documents.BaseScene.md#update)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[updateEmbeddedDocuments](foundry.documents.BaseScene.md#updateembeddeddocuments)

### updateRegionShapeConstraints

* updateRegionShapeConstraints(  
  Â Â Â Â types?: Iterable<  
  Â Â Â Â Â Â Â Â "darkness"  
  Â Â Â Â Â Â Â Â | "light"  
  Â Â Â Â Â Â Â Â | "sight"  
  Â Â Â Â Â Â Â Â | "sound"  
  Â Â Â Â Â Â Â Â | "move",  
  Â Â Â Â Â Â Â Â any,  
  Â Â Â Â Â Â Â Â any,  
  Â Â Â Â >,  
  ): void

  Update the shape constraints of all Regions the current User is designated for
  (for the given restriction types).

  #### Parameters

  + `Optional`types: Iterable<"darkness" | "light" | "sight" | "sound" | "move", any, any> = CONST.EDGE\_RESTRICTION\_TYPES

    The types to update. Default: all.

  #### Returns void

### updateSource

* updateSource(changes?: {}, options?: {}): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: {} = {}

    New values which should be applied to the data model
  + options: {} = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[updateSource](foundry.documents.BaseScene.md#updatesource)

### updateTokenRegions

* updateTokenRegions(  
  Â Â Â Â tokens?: Iterable<[TokenDocument](foundry.documents.TokenDocument.md), any, any>,  
  ): Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  For the given Tokens in this Scene identify the Regions that each Token is contained in and update the regions of
  each Token accordingly.

  This function doesn't need to be called by the systems/modules unless
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.md#testinsideregion) is overridden and non-Token properties other than
  `Scene#grid.type` and `Scene#grid.size` change that are used in the override of
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.md#testinsideregion).

  #### Parameters

  + `Optional`tokens: Iterable<[TokenDocument](foundry.documents.TokenDocument.md), any, any> = ...

    The Tokens whoses regions should be updates: if not provided, all Tokens
    will be updated.

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  The array of Tokens whose regions changed

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[validate](foundry.documents.BaseScene.md#validate)

### view

* view(options?: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md)): Promise<[documents](../modules/foundry.documents.md).Scene>

  Set this scene as the current view

  #### Parameters

  + `Optional`options: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md) = {}

    The view options

  #### Returns Promise<[documents](../modules/foundry.documents.md).Scene>

### `Protected`\_getAvailableLevels

* \_getAvailableLevels(  
  Â Â Â Â options?: { manager?: [SceneManager](foundry.canvas.SceneManager.md) | null },  
  ): Set<[documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)>

  `Protected`

  The levels that are available to this User in ascending order. By default GMs and scenes without token vision
  can access all levels; players can only access levels where they have OBSERVER of a Token.

  #### Parameters

  + `Optional`options: { manager?: [SceneManager](foundry.canvas.SceneManager.md) | null } = {}
    - ##### `Optional`manager?: [SceneManager](foundry.canvas.SceneManager.md) | null

      A SceneManager whose SceneManager#\_getAvailableLevels
      override should be applied to the base set.

  #### Returns Set<[documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)>

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_getInnerModel](foundry.documents.BaseScene.md#_getinnermodel)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_initializeSource](foundry.documents.BaseScene.md#_initializesource)

### `Protected`\_onActivate

* \_onActivate(  
  Â Â Â Â active: boolean,  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md) | [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  ): void

  `Protected`

  Handle Scene activation workflow if the active state is changed to true.

  #### Parameters

  + active: boolean

    Is the scene now active?
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md) | [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    The database operation

  #### Returns void

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_preDelete](foundry.documents.BaseScene.md#_predelete)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_preUpdateSource](foundry.documents.BaseScene.md#_preupdatesource)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_addDataFieldMigration](foundry.documents.BaseScene.md#_adddatafieldmigration)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_addDataFieldShim](foundry.documents.BaseScene.md#_adddatafieldshim)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_addDataFieldShims](foundry.documents.BaseScene.md#_adddatafieldshims)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_clearFieldsRecursively](foundry.documents.BaseScene.md#_clearfieldsrecursively)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_logDataFieldMigration](foundry.documents.BaseScene.md#_logdatafieldmigration)

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

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_onUpdateOperation](foundry.documents.BaseScene.md#_onupdateoperation)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_preCleanData](foundry.documents.BaseScene.md#_precleandata)

### `Static`\_preCreateOperation

* \_preCreateOperation(documents: any, operation: any, user: any): Promise<void>

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

  #### Returns Promise<void>

  Return false to cancel the creation operation entirely

  Overrides [BaseScene](foundry.documents.BaseScene.md).[\_preCreateOperation](foundry.documents.BaseScene.md#_precreateoperation)

### `Static`canUserCreate

* canUserCreate(user: [BaseUser](foundry.documents.BaseUser.md)): boolean

  Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
  guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
  may also be present.

  Generally speaking, this method is used to verify whether a User should be presented with the option to create
  Documents of this type in the UI.

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested

  #### Returns boolean

  Does the User have a sufficient role to create?

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[canUserCreate](foundry.documents.BaseScene.md#canusercreate)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[cleanData](foundry.documents.BaseScene.md#cleandata)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[create](foundry.documents.BaseScene.md#create)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[createDocuments](foundry.documents.BaseScene.md#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md);  
  Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â drawings: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â environment: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md);  
  Â Â Â Â fog: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â initial: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â initialLevel: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â journal: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â journalEntryPage: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â levels: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â lights: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â navigation: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â navName: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â navOrder: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â notes: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md);  
  Â Â Â Â padding: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â playlist: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â playlistSound: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â regions: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â shiftX: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â shiftY: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md);  
  Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â thumb: [FilePathField](foundry.data.fields.FilePathField.md);  
  Â Â Â Â tiles: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â tokens: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â tokenVision: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â transition: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â walls: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â weather: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.md);  
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

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md); Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â drawings: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â environment: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md); Â Â Â Â fog: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â initial: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â initialLevel: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â journal: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â journalEntryPage: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â levels: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â lights: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â name: [StringField](foundry.data.fields.StringField.md); Â Â Â Â navigation: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â navName: [StringField](foundry.data.fields.StringField.md); Â Â Â Â navOrder: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â notes: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md); Â Â Â Â padding: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â playlist: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â playlistSound: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â regions: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â shiftX: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â shiftY: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md); Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â thumb: [FilePathField](foundry.data.fields.FilePathField.md); Â Â Â Â tiles: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â tokens: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â tokenVision: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â transition: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â walls: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â weather: [StringField](foundry.data.fields.StringField.md); Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.md); }

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[defineSchema](foundry.documents.BaseScene.md#defineschema)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[deleteDocuments](foundry.documents.BaseScene.md#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[fromJSON](foundry.documents.BaseScene.md#fromjson)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[fromSource](foundry.documents.BaseScene.md#fromsource)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[get](foundry.documents.BaseScene.md#get)

### `Static`getCollectionName

* getCollectionName(name: any): string | null

  A compatibility method that returns the appropriate name of an embedded collection within this Document.

  #### Parameters

  + name: any

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

  Overrides [BaseScene](foundry.documents.BaseScene.md).[getCollectionName](foundry.documents.BaseScene.md#getcollectionname)

### `Static`migrateData

* migrateData(source: any, options: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    Candidate source data for the module, before further cleaning
  + options: any

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[migrateData](foundry.documents.BaseScene.md#migratedata)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[migrateDataSafe](foundry.documents.BaseScene.md#migratedatasafe)

### `Static`shimData

* shimData(source: any, options: any): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + source: any

    Data which matches the current schema
  + options: any

    Additional shimming options

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[shimData](foundry.documents.BaseScene.md#shimdata)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[updateDocuments](foundry.documents.BaseScene.md#updatedocuments)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[validateJoint](foundry.documents.BaseScene.md#validatejoint)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_cleanData](foundry.documents.BaseScene.md#_cleandata)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_onCreateOperation](foundry.documents.BaseScene.md#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_onDeleteOperation](foundry.documents.BaseScene.md#_ondeleteoperation)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_preDeleteOperation](foundry.documents.BaseScene.md#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Document instances to be updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the update operation

  #### Returns Promise<boolean | void>

  Return false to cancel the update operation entirely

  Inherited from [BaseScene](foundry.documents.BaseScene.md).[\_preUpdateOperation](foundry.documents.BaseScene.md#_preupdateoperation)