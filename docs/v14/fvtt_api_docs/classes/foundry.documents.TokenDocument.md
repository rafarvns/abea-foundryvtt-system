---
title: "TokenDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.TokenDocument.html"
category: "classes"
---

# Class TokenDocument

The client-side Token document which extends the common BaseToken document model.

The following fields must no be altered from source during data preparation:
`x`, `y`, `elevation`, `width`, `height`, `depth`, `shape`, `level`.

### Hook Events

* [hookEvents.moveToken](../functions/hookEvents.moveToken.md)
* [hookEvents.pauseToken](../functions/hookEvents.pauseToken.md)
* [hookEvents.preMoveToken](../functions/hookEvents.preMoveToken.md)
* [hookEvents.stopToken](../functions/hookEvents.stopToken.md)
* [hookEvents.recordToken](../functions/hookEvents.recordToken.md)

#### Mixes

CanvasDocumentMixin

#### See

* [foundry.documents.Scene](foundry.documents.Scene.md): The Scene document type which contains Token documents
* [foundry.applications.sheets.TokenConfig](foundry.applications.sheets.TokenConfig.md): The Token configuration application

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.TokenDocument))

* [BaseToken](foundry.documents.BaseToken.md)<this>
  + TokenDocument

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_movement](#_movement)
[\_movementContinuation](#_movementcontinuation)
[\_returnedMovementPromises](#_returnedmovementpromises)
[\_source](#_source)
[actors](#actors)
[attachments](#attachments)
[parent](#parent)
[regions](#regions)
[overrides](#overrides)
[\_priorOverrides](#_prioroverrides)
[\_preventActorDeltaAccess](#_preventactordeltaaccess)
[\_schema](#_schema)
[DEFAULT\_ICON](#default_icon)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)
[MOVEMENT\_FIELDS](#movement_fields)

### Accessors

[actor](#actor)
[baseActor](#baseactor)
[combatant](#combatant)
[compendium](#compendium)
[hasDistinctSubjectTexture](#hasdistinctsubjecttexture)
[id](#id)
[inCombat](#incombat)
[inCompendium](#incompendium)
[invalid](#invalid)
[isEmbedded](#isembedded)
[isLazyDelta](#islazydelta)
[isLinked](#islinked)
[isOwner](#isowner)
[isSecret](#issecret)
[movement](#movement)
[movementHistory](#movementhistory)
[scene](#scene)
[schema](#schema)
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

[\_configure](#_configure)
[\_forceDeltaActor](#_forcedeltaactor)
[\_getParentCollection](#_getparentcollection)
[\_gridOffsetToPosition](#_gridoffsettoposition)
[\_identifyRegions](#_identifyregions)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_onCreate](#_oncreate)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDelete](#_ondelete)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_onUpdate](#_onupdate)
[\_onUpdateBaseActor](#_onupdatebaseactor)
[\_onUpdateDescendantDocuments](#_onupdatedescendantdocuments)
[\_positionToGridOffset](#_positiontogridoffset)
[\_preCreate](#_precreate)
[\_preCreateDescendantDocuments](#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](#_predeletedescendantdocuments)
[\_prepareDeltaUpdate](#_preparedeltaupdate)
[\_preUpdate](#_preupdate)
[\_preUpdateDescendantDocuments](#_preupdatedescendantdocuments)
[\_stopMovementOnDisconnect](#_stopmovementondisconnect)
[\_updateDiff](#_updatediff)
[applyActiveEffects](#applyactiveeffects)
[canUserModify](#canusermodify)
[clearMovementHistory](#clearmovementhistory)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[delete](#delete)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[getBarAttribute](#getbarattribute)
[getCenterPoint](#getcenterpoint)
[getCompleteMovementPath](#getcompletemovementpath)
[getContainmentTestPoints](#getcontainmenttestpoints)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getGridSpacePolygon](#getgridspacepolygon)
[getLightOrigin](#getlightorigin)
[getListenerPosition](#getlistenerposition)
[getMaxOccupiedGridSpaceCount](#getmaxoccupiedgridspacecount)
[getMovementOrigin](#getmovementorigin)
[getOcclusionTestPoints](#getocclusiontestpoints)
[getOccupiedGridSpaceOffsets](#getoccupiedgridspaceoffsets)
[getSize](#getsize)
[getSnappedPosition](#getsnappedposition)
[getSoundOrigin](#getsoundorigin)
[getUserLevel](#getuserlevel)
[getVisibilityTestPoints](#getvisibilitytestpoints)
[getVisionOrigin](#getvisionorigin)
[hasStatusEffect](#hasstatuseffect)
[includedInLevel](#includedinlevel)
[locatedInLevel](#locatedinlevel)
[measureMovementPath](#measuremovementpath)
[migrateSystemData](#migratesystemdata)
[move](#move)
[pauseMovement](#pausemovement)
[prepareBaseData](#preparebasedata)
[prepareData](#preparedata)
[prepareDerivedData](#preparederiveddata)
[prepareEmbeddedDocuments](#prepareembeddeddocuments)
[reset](#reset)
[resize](#resize)
[resumeMovement](#resumemovement)
[revertRecordedMovement](#revertrecordedmovement)
[segmentizeRegionMovementPath](#segmentizeregionmovementpath)
[setFlag](#setflag)
[startMovement](#startmovement)
[stopMovement](#stopmovement)
[testInsideRegion](#testinsideregion)
[testUserPermission](#testuserpermission)
[toggleCombatant](#togglecombatant)
[toJSON](#tojson)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateSource](#updatesource)
[updateVisionMode](#updatevisionmode)
[validate](#validate)
[\_constrainTestPoints](#_constraintestpoints)
[\_couldRegionsChange](#_couldregionschange)
[\_getInnerModel](#_getinnermodel)
[\_getReplacementData](#_getreplacementdata)
[\_inferMovementAction](#_infermovementaction)
[\_inferRingSubjectTexture](#_inferringsubjecttexture)
[\_onDeltaMaterialized](#_ondeltamaterialized)
[\_onMovementPaused](#_onmovementpaused)
[\_onMovementPlanned](#_onmovementplanned)
[\_onMovementRecorded](#_onmovementrecorded)
[\_onMovementStopped](#_onmovementstopped)
[\_onOverrideSize](#_onoverridesize)
[\_onRelatedUpdate](#_onrelatedupdate)
[\_onUpdateMovement](#_onupdatemovement)
[\_preDelete](#_predelete)
[\_prepareBars](#_preparebars)
[\_prepareDetectionModes](#_preparedetectionmodes)
[\_preUpdateMovement](#_preupdatemovement)
[\_preUpdateSource](#_preupdatesource)
[\_renderActiveEffectChanges](#_renderactiveeffectchanges)
[\_shouldRecordMovementHistory](#_shouldrecordmovementhistory)
[\_updateCommit](#_updatecommit)
[\_inflateVisionModeChange](#_inflatevisionmodechange)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_addTeleportAndForcedShims](#_addteleportandforcedshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_getHexagonalOffsets](#_gethexagonaloffsets)
[\_getHexagonalShape](#_gethexagonalshape)
[\_isMovementUpdate](#_ismovementupdate)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_onCreateOperation](#_oncreateoperation)
[\_onDeleteOperation](#_ondeleteoperation)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCleanData](#_precleandata)
[\_preCreateOperation](#_precreateoperation)
[\_preUpdateOperation](#_preupdateoperation)
[arePositionsEqual](#arepositionsequal)
[canUserCreate](#canusercreate)
[cleanData](#cleandata)
[create](#create)
[createCombatants](#createcombatants)
[createDocuments](#createdocuments)
[defineSchema](#defineschema)
[deleteCombatants](#deletecombatants)
[deleteDocuments](#deletedocuments)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[get](#get)
[getCollectionName](#getcollectionname)
[getTrackedAttributeChoices](#gettrackedattributechoices)
[getTrackedAttributes](#gettrackedattributes)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[updateDocuments](#updatedocuments)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_getConfiguredTrackedAttributes](#_getconfiguredtrackedattributes)
[\_getTrackedAttributesFromObject](#_gettrackedattributesfromobject)
[\_getTrackedAttributesFromSchema](#_gettrackedattributesfromschema)
[\_preDeleteOperation](#_predeleteoperation)

## Constructors

### constructor

* new TokenDocument(  
  Â Â Â Â data?: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): TokenDocument

  #### Parameters

  + `Optional`data: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns TokenDocument

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[constructor](foundry.documents.BaseToken.md#constructor)

## Properties

### `Internal`\_movement

\_movement: [TokenMovementData](../interfaces/foundry.documents.types.TokenMovementData.md)

### `Internal`\_movementContinuation

\_movementContinuation: [TokenMovementContinuationData](../interfaces/foundry.documents.types.TokenMovementContinuationData.md) = ...

The movement continuation state of this Token document.

### `Internal`\_returnedMovementPromises

\_returnedMovementPromises: Map<string, Promise<boolean>> = ...

The movement promises with their resolvers.

### \_source

\_source: [TokenData](../interfaces/foundry.documents.types.TokenData.md)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_source](foundry.documents.BaseToken.md#_source)

### actors

actors: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md)> = ...

A singleton collection which holds a reference to the synthetic token actor by its base actor's ID.

### `Readonly`attachments

attachments: Readonly<{ regions: ReadonlySet<[RegionDocument](foundry.documents.RegionDocument.md)> }> = ...

The attachments of this Token.

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseToken](foundry.documents.BaseToken.md).[parent](foundry.documents.BaseToken.md#parent)

### regions

regions: Set<[RegionDocument](foundry.documents.RegionDocument.md)> = ...

The Regions this Token is currently in.

### `Protected`overrides

overrides: Record<string, unknown> = ...

Property overrides copied from this TokenDocument's associated Actor

### `Private`\_priorOverrides

\_priorOverrides: Record<string, unknown> | null = ...

Old overrides for synthetic actors, kept separately due to particularities of ActorDelta data re-initialization

### `Static` `Internal`\_preventActorDeltaAccess

\_preventActorDeltaAccess: boolean = true

A global guard which prevents ActorDelta documents from materializing until after all world documents are first
initialized. While true, the `TokenDocument#actor` getter will return null instead of the synthetic Actor instance.
This guard is released upon completion of `Game#initializeDocuments`.

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_schema](foundry.documents.BaseToken.md#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = CONST.DEFAULT\_TOKEN

The default icon used for newly created Token documents

Inherited from [BaseToken](foundry.documents.BaseToken.md).[DEFAULT\_ICON](foundry.documents.BaseToken.md#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseToken](foundry.documents.BaseToken.md).[LOCALIZATION\_PREFIXES](foundry.documents.BaseToken.md#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseToken](foundry.documents.BaseToken.md).[metadata](foundry.documents.BaseToken.md#metadata)

### `Static` `Readonly`MOVEMENT\_FIELDS

MOVEMENT\_FIELDS: readonly [  
Â Â Â Â "x",  
Â Â Â Â "y",  
Â Â Â Â "elevation",  
Â Â Â Â "width",  
Â Â Â Â "height",  
Â Â Â Â "depth",  
Â Â Â Â "shape",  
Â Â Â Â "level",  
] = ...

The fields of the data model for which changes count as a movement action.

Inherited from [BaseToken](foundry.documents.BaseToken.md).[MOVEMENT\_FIELDS](foundry.documents.BaseToken.md#movement_fields)

## Accessors

### actor

* get actor(): [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

  A reference to the Actor this Token modifies.
  If actorLink is true, then the document is the primary Actor document.
  Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.
  This synthetic Actor instance is only available after `Game#initializeDocuments` is complete.

  #### Returns [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

### baseActor

* get baseActor(): [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

  A reference to the base, World-level Actor this token represents.

  #### Returns [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

### combatant

* get combatant(): [documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md) | null

  Return a reference to a Combatant that represents this Token, if one is present in the current encounter.

  #### Returns [documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md) | null

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from CanvasDocumentMixin(BaseToken).compendium

### hasDistinctSubjectTexture

* get hasDistinctSubjectTexture(): boolean

  Check if the document has a distinct subject texture (inferred or explicit).

  #### Returns boolean

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from CanvasDocumentMixin(BaseToken).id

### inCombat

* get inCombat(): boolean

  An indicator for whether this Token is currently involved in the active combat encounter.

  #### Returns boolean

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseToken).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseToken).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseToken).isEmbedded

### isLazyDelta

* get isLazyDelta(): boolean

  Test whether this TokenDocument would produce an ActorDelta if materialized.

  #### Returns boolean

### isLinked

* get isLinked(): boolean

  A convenient reference for whether this TokenDocument is linked to the Actor it represents, or is a synthetic copy

  #### Returns boolean

### isOwner

* get isOwner(): boolean

  An indicator for whether the current User has full control over this Token document.

  #### Returns boolean

### isSecret

* get isSecret(): boolean

  Does this TokenDocument have the SECRET disposition and is the current user lacking the necessary permissions
  that would reveal this secret?

  #### Returns boolean

### movement

* get movement(): [TokenMovementData](../interfaces/foundry.documents.types.TokenMovementData.md)

  The current movement data of this Token document.

  #### Returns [TokenMovementData](../interfaces/foundry.documents.types.TokenMovementData.md)

  #### See

  [TokenDocument#move](#move)

### movementHistory

* get movementHistory(): [TokenMeasuredMovementWaypoint](../interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

  The movement history.

  #### Returns [TokenMeasuredMovementWaypoint](../interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  A semantically-intuitive alias of [TokenDocument#parent](#parent)

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from CanvasDocumentMixin(BaseToken).schema

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from CanvasDocumentMixin(BaseToken).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from CanvasDocumentMixin(BaseToken).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from CanvasDocumentMixin(BaseToken).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseToken).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from CanvasDocumentMixin(BaseToken).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseToken).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from CanvasDocumentMixin(BaseToken).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from CanvasDocumentMixin(BaseToken).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from CanvasDocumentMixin(BaseToken).implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from CanvasDocumentMixin(BaseToken).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from CanvasDocumentMixin(BaseToken).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_configure](foundry.documents.BaseToken.md#_configure)

### \_forceDeltaActor

* \_forceDeltaActor(): [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

  `Internal`

  Force construction of the ActorDelta for this unlinked TokenDocument, bypassing the initialization guard.

  #### Returns [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_getParentCollection](foundry.documents.BaseToken.md#_getparentcollection)

### \_gridOffsetToPosition

* \_gridOffsetToPosition(  
  Â Â Â Â offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md),  
  Â Â Â Â data?: Partial<Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  `Internal`

  Get the position of the Token from the top-left grid offset.

  #### Parameters

  + offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

    The top-left grid offset
  + `Optional`data: Partial<Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">> = {}

    The dimensions that override the current dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The snapped position

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_gridOffsetToPosition](foundry.documents.BaseToken.md#_gridoffsettoposition)

### \_identifyRegions

* \_identifyRegions(changes?: object): string[]

  `Internal`

  Identify the Regions the Token currently is or is going to be in after the changes are applied.

  #### Parameters

  + `Optional`changes: object = {}

    The changes that will be applied to this Token

  #### Returns string[]

  The Region IDs this Token is in after the changes are applied (sorted)

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_initializationOrder](foundry.documents.BaseToken.md#_initializationorder)

### \_initialize

* \_initialize(options?: {}): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: {} = {}

    Options provided to the model constructor

  #### Returns void

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_initialize](foundry.documents.BaseToken.md#_initialize)

### \_initializeSource

* \_initializeSource(data: any, options: any): object

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: any

    The candidate source data from which the model will be constructed
  + options: any

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_initializeSource](foundry.documents.BaseToken.md#_initializesource)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onCreate](foundry.documents.BaseToken.md#_oncreate)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onDelete](foundry.documents.BaseToken.md#_ondelete)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onUpdate](foundry.documents.BaseToken.md#_onupdate)

### \_onUpdateBaseActor

* \_onUpdateBaseActor(  
  Â Â Â Â update?: object,  
  Â Â Â Â options?: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>,  
  ): void

  `Internal`

  When the base Actor for a TokenDocument changes, we may need to update its Actor instance

  #### Parameters

  + `Optional`update: object = {}

    The update delta
  + `Optional`options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)> = {}

    The database operation that was performed

  #### Returns void

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

### \_positionToGridOffset

* \_positionToGridOffset(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">>,  
  ): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  `Internal`

  Get the top-left grid offset of the Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">> = {}

    The position and dimensions

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  The top-left grid offset

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_positionToGridOffset](foundry.documents.BaseToken.md#_positiontogridoffset)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_preCreate](foundry.documents.BaseToken.md#_precreate)

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

### \_prepareDeltaUpdate

* \_prepareDeltaUpdate(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)): void

  `Internal`

  Prepare changes to a descendent delta collection.

  #### Parameters

  + changes: object = {}

    Candidate source changes.
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md) = {}

    Options which determine how the new data is merged.

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_prepareDeltaUpdate](foundry.documents.BaseToken.md#_preparedeltaupdate)

### \_preUpdate

* \_preUpdate(changed: any, options: any, user: any): Promise<false | undefined>

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changed: any

    The candidate changes to the Document
  + options: any

    Additional options which modify the update request
  + user: any

    The User requesting the document update

  #### Returns Promise<false | undefined>

  A return value of false indicates the update operation should be cancelled.

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_preUpdate](foundry.documents.BaseToken.md#_preupdate)

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

### \_stopMovementOnDisconnect

* \_stopMovementOnDisconnect(): void

  `Internal`

  This function is called on Token documents that are still being moved by a User that just disconnected.

  #### Returns void

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_updateDiff](foundry.documents.BaseToken.md#_updatediff)

### applyActiveEffects

* applyActiveEffects(phase: string): void

  Refresh this TokenDocument's overrides and transmit changes, if any, to its PlaceableObject for rendering.

  #### Parameters

  + phase: string

    The application phase under which changes are to be applied

  #### Returns void

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[canUserModify](foundry.documents.BaseToken.md#canusermodify)

### clearMovementHistory

* clearMovementHistory(): Promise<void>

  Clear the movement history of this Token.

  #### Returns Promise<void>

### clone

* clone(  
  Â Â Â Â data?: {},  
  Â Â Â Â context?: {},  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + data: {} = {}

    Additional data which overrides current document data at the time of creation
  + context: {} = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The cloned Document instance

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[clone](foundry.documents.BaseToken.md#clone)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[createEmbeddedDocuments](foundry.documents.BaseToken.md#createembeddeddocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[delete](foundry.documents.BaseToken.md#delete)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[deleteEmbeddedDocuments](foundry.documents.BaseToken.md#deleteembeddeddocuments)

### getBarAttribute

* getBarAttribute(  
  Â Â Â Â barName: string,  
  Â Â Â Â options?: { alternative?: string },  
  ): object | null

  A helper method to retrieve the underlying data behind one of the Token's attribute bars

  #### Parameters

  + barName: string

    The named bar to retrieve the attribute for
  + `Optional`options: { alternative?: string } = {}
    - ##### `Optional`alternative?: string

      An alternative attribute path to get instead of the default one

  #### Returns object | null

  The attribute displayed on the Token bar, if any

### getCenterPoint

* getCenterPoint(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the center point of the Token's base.

  This elevation of the center point is always equal to the elevation of the Token. The center point
  is independent of the Token's depth.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The center point

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getCenterPoint](foundry.documents.BaseToken.md#getcenterpoint)

### getCompleteMovementPath

* getCompleteMovementPath(  
  Â Â Â Â waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[],  
  ): [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[]

  Get the path of movement with the intermediate steps of the direct path between waypoints.

  #### Parameters

  + waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[]

    The waypoints of movement

  #### Returns [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[]

  The path of movement with all intermediate steps

### getContainmentTestPoints

* getContainmentTestPoints(data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>): [Point](../interfaces/foundry.types.Point.md)[]

  Get the points that are used to test region containment/segmentation (unless overridden)
  for this Token. The test points are within the shape of the Token.

  Implementations of this function must use the prepared position and dimensions of this Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)> = {}

    The position and dimensions. Defaults to the values of
    the prepared document, not the document source.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The test points.

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: any): any

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: any

    The name of the embedded Document type

  #### Returns any

  The Collection instance of embedded Documents of the requested type

  Overrides [BaseToken](foundry.documents.BaseToken.md).[getEmbeddedCollection](foundry.documents.BaseToken.md#getembeddedcollection)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getEmbeddedDocument](foundry.documents.BaseToken.md#getembeddeddocument)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getFieldForProperty](foundry.documents.BaseToken.md#getfieldforproperty)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getFlag](foundry.documents.BaseToken.md#getflag)

### getGridSpacePolygon

* getGridSpacePolygon(  
  Â Â Â Â data?: Partial<Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">>,  
  ): void | [Point](../interfaces/foundry.types.Point.md)[]

  Get the grid space polygon of the Token.
  Returns undefined in gridless grids because there are no grid spaces.

  #### Parameters

  + `Optional`data: Partial<Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">> = {}

    The dimensions

  #### Returns void | [Point](../interfaces/foundry.types.Point.md)[]

  The grid space polygon or undefined if gridless

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getGridSpacePolygon](foundry.documents.BaseToken.md#getgridspacepolygon)

### getLightOrigin

* getLightOrigin(data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the origin of the light source of this Token.

  The default implementation returns the movement origin.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The vision origin

### getListenerPosition

* getListenerPosition(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the listener position of this Token.

  The default implementation returns the movement origin.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The listener position

### getMaxOccupiedGridSpaceCount

* getMaxOccupiedGridSpaceCount(data?: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>): number

  Get the number the grid spaces that this Token can occupy at most with the current or given dimensions.
  Returns 0 in gridless grids.

  #### Parameters

  + `Optional`data: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The dimensions

  #### Returns number

  The number the grid spaces that this Token can occupy at most

### getMovementOrigin

* getMovementOrigin(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the movement origin of this Token.
  This point is used to test collision with walls and surfaces.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The movement origin

### getOcclusionTestPoints

* getOcclusionTestPoints(  
  Â Â Â Â data?: Partial<[Point](../interfaces/foundry.types.Point.md) & Omit<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "elevation" | "depth">>,  
  ): [Point](../interfaces/foundry.types.Point.md)[]

  Get the points that are used to test occlusion for this Token. The test points are within the shape of the Token.

  Implementations of this function must use the prepared position and dimensions of this Token.

  #### Parameters

  + `Optional`data: Partial<[Point](../interfaces/foundry.types.Point.md) & Omit<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "elevation" | "depth">> = {}

    The position and dimensions. Defaults
    to the values of the prepared
    document, not the document source.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The test points.

### getOccupiedGridSpaceOffsets

* getOccupiedGridSpaceOffsets(  
  Â Â Â Â data?: Partial<[Point](../interfaces/foundry.types.Point.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>,  
  ): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  Get the offsets of grid spaces that are occupied by this Token at the current or given position.
  The grid spaces the Token occupies are those that are covered by the Token's shape in the snapped position.
  Walls and surfaces are considered.
  Returns an empty array in gridless grids.

  #### Parameters

  + `Optional`data: Partial<[Point](../interfaces/foundry.types.Point.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  The offsets of occupied grid spaces

### getSize

* getSize(  
  Â Â Â Â data?: Partial<{ height: number; width: number }>,  
  ): { height: number; width: number }

  Get the width and height of the Token in pixels.

  #### Parameters

  + `Optional`data: Partial<{ height: number; width: number }> = {}

    The width and/or height in grid units (must be positive)

  #### Returns { height: number; width: number }

  The width and height in pixels

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getSize](foundry.documents.BaseToken.md#getsize)

### getSnappedPosition

* getSnappedPosition(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the snapped position of the Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md), "depth">> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The snapped position

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getSnappedPosition](foundry.documents.BaseToken.md#getsnappedposition)

### getSoundOrigin

* getSoundOrigin(data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the origin of the sound source of this Token.

  The default implementation returns the movement origin.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The light origin

### getUserLevel

* getUserLevel(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getUserLevel](foundry.documents.BaseToken.md#getuserlevel)

### getVisibilityTestPoints

* getVisibilityTestPoints(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[]

  Get the points that are used to test visibility for this Token. The test points are within the shape of the Token.

  Implementations of this function must use the prepared position and dimensions of this Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)> = {}

    The position and dimensions. Defaults to the values of
    the prepared document, not the document source.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[]

  The test points.

### getVisionOrigin

* getVisionOrigin(data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  Get the origin of the vision source of this Token.

  The default implementation returns the movement origin.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The light origin

### hasStatusEffect

* hasStatusEffect(statusId: string): boolean

  Test whether a Token has a specific status effect.

  #### Parameters

  + statusId: string

    The status effect ID as defined in CONFIG.statusEffects

  #### Returns boolean

  Does the Actor of the Token have this status effect?

### includedInLevel

* includedInLevel(level: any): any

  #### Parameters

  + level: any

  #### Returns any

### locatedInLevel

* locatedInLevel(level: any): boolean

  #### Parameters

  + level: any

  #### Returns boolean

### measureMovementPath

* measureMovementPath(  
  Â Â Â Â waypoints: [TokenMeasurableMovementWaypoint](../types/foundry.documents.types.TokenMeasurableMovementWaypoint.md)[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md);  
  Â Â Â Â Â Â Â Â cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md);  
  Â Â Â Â },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  Measure the movement path for this Token.

  #### Parameters

  + waypoints: [TokenMeasurableMovementWaypoint](../types/foundry.documents.types.TokenMeasurableMovementWaypoint.md)[]

    The waypoints of movement
  + `Optional`options: { aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md); cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md) } = {}

    Additional measurement options

    - ##### `Optional`aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md)

      The cost aggregator.
      Default: `CONFIG.Token.movement.costAggregator`.
    - ##### `Optional`cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md)

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[migrateSystemData](foundry.documents.BaseToken.md#migratesystemdata)

### move

* move(  
  Â Â Â Â waypoints:  
  Â Â Â Â Â Â Â Â | Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)>  
  Â Â Â Â Â Â Â Â | Partial<[TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)>[],  
  Â Â Â Â options?: Partial<  
  Â Â Â Â Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
  Â Â Â Â >,  
  ): Promise<boolean>

  Move the Token through the given waypoint(s).

  ## Movement API

  ### Movement Control

  + [TokenDocument#movement](#movement)
  + [TokenDocument#movementHistory](#movementhistory)
  + [TokenDocument#move](#move)
  + [TokenDocument#resize](#resize)
  + [TokenDocument#startMovement](#startmovement)
  + [TokenDocument#pauseMovement](#pausemovement)
  + [TokenDocument#resumeMovement](#resumemovement)
  + [TokenDocument#stopMovement](#stopmovement)
  + [TokenDocument#clearMovementHistory](#clearmovementhistory)
  + [TokenDocument#revertRecordedMovement](#revertrecordedmovement)
  + [TokenDocument#\_shouldRecordMovementHistory](#_shouldrecordmovementhistory)
  + [foundry.documents.Scene#moveTokens](foundry.documents.Scene.md#movetokens)

  ### Hook Events / Document Event Handlers

  + [hookEvents.preMoveToken](../functions/hookEvents.preMoveToken.md) / [TokenDocument#\_preUpdateMovement](#_preupdatemovement)
  + [hookEvents.moveToken](../functions/hookEvents.moveToken.md) / [TokenDocument#\_onUpdateMovement](#_onupdatemovement)
  + [hookEvents.pauseToken](../functions/hookEvents.pauseToken.md) / [TokenDocument#\_onMovementPaused](#_onmovementpaused)
  + [hookEvents.stopToken](../functions/hookEvents.stopToken.md) / [TokenDocument#\_onMovementStopped](#_onmovementstopped)
  + [hookEvents.recordToken](../functions/hookEvents.recordToken.md) / [TokenDocument#\_onMovementRecorded](#_onmovementrecorded)
  + [hookEvents.planToken](../functions/hookEvents.planToken.md) / [TokenDocument#\_onMovementPlanned](#_onmovementplanned)

  ### Movement Action

  + [CONFIG.Token.movement.actions](../variables/CONFIG.Token.md#movement)
  + [CONFIG.Token.movement.defaultAction](../variables/CONFIG.Token.md#movement)
  + [TokenData#movementAction](../interfaces/foundry.documents.types.TokenData.md#movementaction)
  + [TokenDocument#\_inferMovementAction](#_infermovementaction)
  + [foundry.canvas.placeables.Token#\_getDragMovementAction](foundry.canvas.placeables.Token.md#_getdragmovementaction)
  + [foundry.canvas.placeables.Token#\_getHUDMovementAction](foundry.canvas.placeables.Token.md#_gethudmovementaction)
  + [foundry.canvas.placeables.Token#\_getKeyboardMovementAction](foundry.canvas.placeables.Token.md#_getkeyboardmovementaction)

  ### Movement Cost

  + [CONFIG.Token.movement.costAggregator](../variables/CONFIG.Token.md#movement)
  + [TokenDocument#measureMovementPath](#measuremovementpath)
  + [foundry.canvas.placeables.Token#measureMovementPath](foundry.canvas.placeables.Token.md#measuremovementpath)
  + [foundry.canvas.placeables.Token#\_getMovementCostFunction](foundry.canvas.placeables.Token.md#_getmovementcostfunction)

  ### Movement Constraints, Terrain, and Pathfinding

  + [CONFIG.Token.movement.TerrainData](../variables/CONFIG.Token.md#movement)
  + [TokenDocument#getCompleteMovementPath](#getcompletemovementpath)
  + [TokenDocument#segmentizeRegionMovementPath](#segmentizeregionmovementpath)
  + [foundry.canvas.placeables.Token#findMovementPath](foundry.canvas.placeables.Token.md#findmovementpath)
  + [foundry.canvas.placeables.Token#constrainMovementPath](foundry.canvas.placeables.Token.md#constrainmovementpath)
  + [foundry.canvas.placeables.Token#recalculatePlannedMovementPath](foundry.canvas.placeables.Token.md#recalculateplannedmovementpath)
  + [foundry.canvas.placeables.Token#createTerrainMovementPath](foundry.canvas.placeables.Token.md#createterrainmovementpath)
  + [foundry.data.TerrainData](foundry.data.TerrainData.md)
  + [foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType](foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType.md)

  ### Movement Animation

  + [CONFIG.Token.movement.defaultSpeed](../variables/CONFIG.Token.md#movement)
  + [foundry.documents.types.TokenMovementData#animation](../interfaces/foundry.documents.types.TokenMovementData.md#animation)
  + [foundry.canvas.placeables.Token#movementAnimationName](foundry.canvas.placeables.Token.md#movementanimationname)
  + [foundry.canvas.placeables.Token#movementAnimationPromise](foundry.canvas.placeables.Token.md#movementanimationpromise)
  + [foundry.canvas.placeables.Token#\_getAnimationMovementSpeed](foundry.canvas.placeables.Token.md#_getanimationmovementspeed)
  + [foundry.canvas.placeables.Token#\_modifyAnimationMovementSpeed](foundry.canvas.placeables.Token.md#_modifyanimationmovementspeed)

  #### Parameters

  + waypoints: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)> | Partial<[TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)>[]

    The waypoint(s) to move the Token through. If a single waypoint is provided, it may include addition token data.
  + `Optional`options: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md)> = {}

    Parameters of the update and movement operation.

  #### Returns Promise<boolean>

  A Promise that resolves to true if the entire movement was completed, and otherwise
  resolves to false if the movement was stopped or prevented. While the movement is paused, this promise does not
  resolve.

  #### Example: Moving the token to new position including additional token data

  ```
  const completed = await token.move({x: 100, y: 200, rotation: 45, texture: {tint: "#ff0000"}}, {showRuler: true});  
  if ( completed ) {  
    // Movement was completed: the token arrived at the destination  
  } else {  
    // Movement was stopped or prevented  
  }  
    
  // The following is equivalent except for the return value  
  await token.update({x: 100, y: 200, rotation: 45,  texture: {tint: "#ff0000"}, {showRuler: true});
  Copy
  ```

  #### Example: Moving the token to along a path with multiple waypoints

  ```
  const completed = await token.move(  
    [  
      {x: 100, y: 200}, // Move to the position (100, 200)  
      {elevation: 5, explicit: true}, // Move to elevation 5 indicating that the user placed this waypoint  
      {x: 500, y: 500, checkpoint: true}, // Move to (500, 500): the movement can be stopped/paused here  
      {width: 2, height: 2, depth: 2}, // Change size  
      {x: 1000, action: "swim"}, // Swim to (1000, 500)  
      {x: 0, y: 0, snapped: true}, // Move to (0, 0) indicating that (0, 0) is a snapped position for the token  
      {elevation: 10} // Move to elevation 10 (the last waypoint is always a checkpoint automatically)  
    ],  
    {  
      autoRotate: true, // Enable auto rotation  
      constrainOptions: {ignoreWalls: true, ignoreCost: true} // Allow the token to move through walls, surfaces, and  
                                                              // impassable terrain  
    }  
  );  
  if ( completed ) {  
    // Movement was completed: the token arrived at the destination  
  } else {  
    // Movement was stopped or prevented  
  }
  Copy
  ```

### pauseMovement

* pauseMovement(): [TokenResumeMovementCallback](../types/foundry.documents.types.TokenResumeMovementCallback.md) | null

  Pause the movement of this Token document. The movement can be resumed after being paused.
  Only the User that initiated the movement can pause it.
  Returns a callback that can be used to resume the movement later.
  Only after all callbacks and keys have been called the movement of the Token is resumed.
  If the callback is called within the update operation workflow, the movement is resumed after the workflow.

  #### Returns [TokenResumeMovementCallback](../types/foundry.documents.types.TokenResumeMovementCallback.md) | null

  The callback to resume movement if the movement was or is paused,
  otherwise null

  #### Example: This is an Execute Script Region Behavior that makes the token invisible

  ```
  // On TOKEN_MOVE_IN...  
  if ( !event.user.isSelf ) return;  
  const resumeMovement = event.data.token.pauseMovement();  
  if ( event.data.token.rendered ) await event.data.token.object.movementAnimationPromise;  
  await event.data.token.actor.toggleStatusEffect("invisible", {active: true});  
  const resumed = await resumeMovement();
  Copy
  ```
* pauseMovement(key: string): Promise<boolean> | null

  Pause the movement of this Token document. The movement can be resumed after being paused.
  Only the User that initiated the movement can pause it.
  Returns a promise that resolves to true if the movement was resumed by
  [TokenDocument#resumeMovement](#resumemovement) with the same key that was passed to this function.
  Only after all callbacks and keys have been called the movement of the Token is resumed.
  If the callback is called within the update operation workflow, the movement is resumed after the workflow.

  #### Parameters

  + key: string

    The key to resume movement with [TokenDocument#resumeMovement](#resumemovement)

  #### Returns Promise<boolean> | null

  The continuation promise if the movement was paused, otherwise null

  #### Example: This is an Execute Script Region Behavior of a pressure plate that activates a trap

  ```
  // On TOKEN_MOVE_IN...  
  if ( event.user.isSelf ) {  
    event.data.token.pauseMovement(this.parent.uuid);  
  }  
  if ( game.user.isActiveGM ) {  
    if ( event.data.token.rendered ) await event.data.token.object.movementAnimationPromise;  
    const trapUuid; // The Region Behavior UUID of the trap  
    const trapBehavior = await fromUuid(trapUuid);  
    await trapBehavior.update({disabled: false});  
    event.data.token.resumeMovement(event.data.movement.id, this.parent.uuid);  
  }
  Copy
  ```

  #### See

  [TokenDocument#resumeMovement](#resumemovement)

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

### prepareData

* prepareData(): void

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

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[reset](foundry.documents.BaseToken.md#reset)

### resize

* resize(  
  Â Â Â Â dimensions: Partial<  
  Â Â Â Â Â Â Â Â Omit<[TokenData](../interfaces/foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md), "x" | "y" | "elevation">,  
  Â Â Â Â >,  
  Â Â Â Â options?: Partial<  
  Â Â Â Â Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "terrainOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "constrainOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "autoRotate"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "showRuler",  
  Â Â Â Â Â Â Â Â >,  
  Â Â Â Â >,  
  ): Promise<boolean>

  Resize the Token such that its center point remains (almost) unchanged. The center point might change
  slightly because the new (x, y) position is rounded.

  #### Parameters

  + dimensions: Partial<Omit<[TokenData](../interfaces/foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md), "x" | "y" | "elevation">>

    The new dimensions and additional data.
  + `Optional`options: Partial<  
    Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit<  
    Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
    Â Â Â Â Â Â Â Â | "measureOptions"  
    Â Â Â Â Â Â Â Â | "terrainOptions"  
    Â Â Â Â Â Â Â Â | "constrainOptions"  
    Â Â Â Â Â Â Â Â | "autoRotate"  
    Â Â Â Â Â Â Â Â | "showRuler",  
    Â Â Â Â >,  
    > = {}

    Parameters of the update operation.

  #### Returns Promise<boolean>

  A Promise that resolves to true if the Token was resized, otherwise resolves to false.

  #### See

  [TokenDocument#move](#move)

### resumeMovement

* resumeMovement(movementId: string, key: string): void

  Resume the movement given its ID and the key that was passed to [TokenDocument#pauseMovement](#pausemovement).
  Only owners of this Token can resume the movement.

  #### Parameters

  + movementId: string

    The movement ID
  + key: string

    The key that was passed to [TokenDocument#pauseMovement](#pausemovement)

  #### Returns void

  #### See

  [TokenDocument#pauseMovement](#pausemovement)

### revertRecordedMovement

* revertRecordedMovement(movementId?: string): Promise<boolean>

  Undo all recorded movement or the recorded movement corresponding to given movement ID up to the last movement.
  The token is displaced to the prior recorded position and the movement history it rolled back accordingly.

  #### Parameters

  + `Optional`movementId: string

    The ID of the recorded movement to undo

  #### Returns Promise<boolean>

  True if the movement was undone, otherwise false

### segmentizeRegionMovementPath

* segmentizeRegionMovementPath(  
  Â Â Â Â region: [RegionDocument](foundry.documents.RegionDocument.md),  
  Â Â Â Â waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[],  
  ): [TokenRegionMovementSegment](../interfaces/foundry.documents.types.TokenRegionMovementSegment.md)[]

  Split the Token movement path through the Region into its segments.
  The Token and the Region must be in the same Scene.

  Implementations of this function are restricted in the following ways:

  + The segments must go through the waypoints.
  + The *from* position matches the *to* position of the succeeding segment.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](#testinsideregion)) within the Region
    at the *from* and *to* of MOVE segments.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](#testinsideregion)) within the Region
    at the *to* position of ENTER segments.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](#testinsideregion)) within the Region
    at the *from* position of EXIT segments.
  + The Token must not be contained (w.r.t. [TokenDocument#testInsideRegion](#testinsideregion)) within the
    Region at the *from* position of ENTER segments.
  + The Token must not be contained (w.r.t. [TokenDocument#testInsideRegion](#testinsideregion)) within the
    Region at the *to* position of EXIT segments.
  + This function must not use prepared field values that are animated. In particular, it must use the source
    instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.

  #### Parameters

  + region: [RegionDocument](foundry.documents.RegionDocument.md)

    The region
  + waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[]

    The waypoints of movement

  #### Returns [TokenRegionMovementSegment](../interfaces/foundry.documents.types.TokenRegionMovementSegment.md)[]

  The movement split into its segments

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[setFlag](foundry.documents.BaseToken.md#setflag)

### startMovement

* startMovement(movementId?: string): Promise<boolean>

  Start the currently planned movement or the planned movement corresponding to given movement ID.
  Only owners of the Token can start the movement.

  #### Parameters

  + `Optional`movementId: string

    The movement ID

  #### Returns Promise<boolean>

  True if the movement was started, false otherwise

### stopMovement

* stopMovement(): boolean

  Stop the movement of this Token document. The movement cannot be continued after being stopped.
  Only the User that initiated the movement can stop it.

  #### Returns boolean

  True if the movement was or is stopped, otherwise false

### testInsideRegion

* testInsideRegion(  
  Â Â Â Â region: [RegionDocument](foundry.documents.RegionDocument.md),  
  Â Â Â Â data?: Partial<  
  Â Â Â Â Â Â Â Â [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "x" | "y" | "elevation">,  
  Â Â Â Â >,  
  ): boolean

  Test whether the Token is inside the Region.
  This function determines the state of [TokenDocument#regions](#regions) and
  [foundry.documents.RegionDocument#tokens](foundry.documents.RegionDocument.md#tokens).
  The Token and the Region must be in the same Scene.

  Implementations of this function are restricted in the following ways:

  + If the bounds (given by [TokenDocument#getSize](#getsize)) of the Token do not intersect the
    Region, then the Token is not contained within the Region.
  + If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
    within the elevation range of the Region.
  + This function must not use prepared field values that are animated. In particular, it must use the source
    instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.

  If this function is overridden, then [TokenDocument#segmentizeRegionMovementPath](#segmentizeregionmovementpath) must be
  overridden too.

  If an override of this function uses Token document fields other than `x`, `y`, `elevation`, `width`, `height`, and
  `shape`, [TokenDocument#\_couldRegionsChange](#_couldregionschange) must be overridden to return true for changes
  of these fields. If an override of this function uses non-Token properties other than `Scene#grid.type` and
  `Scene#grid.size`,
  [foundry.documents.Scene#updateTokenRegions](foundry.documents.Scene.md#updatetokenregions) must be called when any of those properties change.

  #### Parameters

  + region: [RegionDocument](foundry.documents.RegionDocument.md)

    The region.
  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & Omit<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "x" | "y" | "elevation">> = {}

    The position and dimensions. Defaults to the values of the document source.

  #### Returns boolean

  Is inside the Region?

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[testUserPermission](foundry.documents.BaseToken.md#testuserpermission)

### toggleCombatant

* toggleCombatant(options?: { active?: boolean }): Promise<boolean>

  Add or remove this Token from a Combat encounter.

  #### Parameters

  + `Optional`options: { active?: boolean } = {}

    Additional options passed to TokenDocument.createCombatants or
    TokenDocument.deleteCombatants

    - ##### `Optional`active?: boolean

      Require this token to be an active Combatant or to be removed.
      Otherwise, the current combat state of the Token is toggled.

  #### Returns Promise<boolean>

  Is this Token now an active Combatant?

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[toJSON](foundry.documents.BaseToken.md#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[toObject](foundry.documents.BaseToken.md#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[traverseEmbeddedDocuments](foundry.documents.BaseToken.md#traverseembeddeddocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[unsetFlag](foundry.documents.BaseToken.md#unsetflag)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[update](foundry.documents.BaseToken.md#update)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[updateEmbeddedDocuments](foundry.documents.BaseToken.md#updateembeddeddocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[updateSource](foundry.documents.BaseToken.md#updatesource)

### updateVisionMode

* updateVisionMode(  
  Â Â Â Â visionMode: string,  
  Â Â Â Â defaults?: boolean,  
  ): Promise<TokenDocument | undefined>

  Convenience method to change a token vision mode.

  #### Parameters

  + visionMode: string

    The vision mode to apply to this token.
  + `Optional`defaults: boolean = true

    If the vision mode should be updated with its defaults.

  #### Returns Promise<TokenDocument | undefined>

  The updated Document instance, or undefined not updated.

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[validate](foundry.documents.BaseToken.md#validate)

### `Protected`\_constrainTestPoints

* \_constrainTestPoints(  
  Â Â Â Â points: ([Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md))[],  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>,  
  ): void

  `Protected`

  Constrain the test points by walls and surfaces. The passed array of test points are modified in place.
  If all points are discarded, the movement origin is added to the array of test points.

  #### Parameters

  + points: ([Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md))[]

    The test points, which are modified in place.
  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) & [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

    The position and dimensions. Defaults to the values of
    the prepared document, not the document source.

  #### Returns void

### `Protected`\_couldRegionsChange

* \_couldRegionsChange(changes: object): boolean

  `Protected`

  Is the Token document updated such that the Regions the Token is contained in may change?
  Called as part of the preUpdate workflow.

  #### Parameters

  + changes: object

    The changes.

  #### Returns boolean

  Could this Token update change Region containment?

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_getInnerModel](foundry.documents.BaseToken.md#_getinnermodel)

### `Protected`\_getReplacementData

* \_getReplacementData(): object

  `Protected`

  Get replacement data for ActiveEffect change application to this Token.

  #### Returns object

### `Protected`\_inferMovementAction

* \_inferMovementAction(): string

  `Protected`

  Infer the movement action.
  The default implementation returns `CONFIG.Token.movement.defaultAction`.

  #### Returns string

### `Protected`\_inferRingSubjectTexture

* \_inferRingSubjectTexture(): string

  `Protected`

  Infer the subject texture path to use for a token ring.

  #### Returns string

### `Protected`\_onDeltaMaterialized

* \_onDeltaMaterialized(): void

  `Protected`

  A workflow which occurs when the ActorDelta for an unlinked TokenDocument is materialized for the first time.
  At the point this method is called, the delta property has transitioned from a lazy getter to a concrete value.

  #### Returns void

### `Protected`\_onMovementPaused

* \_onMovementPaused(): void

  `Protected`

  Called when the current movement is paused.

  #### Returns void

### `Protected`\_onMovementPlanned

* \_onMovementPlanned(): void

  `Protected`

  Called when the current movement is planned.

  #### Returns void

### `Protected`\_onMovementRecorded

* \_onMovementRecorded(): void

  `Protected`

  Called when the movement is recorded or cleared.

  #### Returns void

### `Protected`\_onMovementStopped

* \_onMovementStopped(): void

  `Protected`

  Called when the current movement is stopped.

  #### Returns void

### `Protected`\_onOverrideSize

* \_onOverrideSize(changes: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>): Promise<void>

  `Protected`

  Callback invoked when [\_onRelatedUpdate](#_onrelatedupdate) detects overrides of at least one Token dimension. Enacting such
  changes requires a server update and may involve nuances particular to a given system. While this method is async,
  it is not awaited by the caller.

  #### Parameters

  + changes: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>

  #### Returns Promise<void>

### `Protected`\_onRelatedUpdate

* \_onRelatedUpdate(  
  Â Â Â Â update?: object | object[],  
  Â Â Â Â operation?: Partial<[DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)>,  
  ): void

  `Protected`

  Whenever the token's actor delta changes, or the base actor changes, perform associated refreshes.

  #### Parameters

  + `Optional`update: object | object[] = {}

    The update delta
  + `Optional`operation: Partial<[DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)> = {}

    The database operation that was performed

  #### Returns void

### `Protected`\_onUpdateMovement

* \_onUpdateMovement(  
  Â Â Â Â movement: [TokenMovementOperation](../interfaces/foundry.documents.types.TokenMovementOperation.md),  
  Â Â Â Â operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>,  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  ): void

  `Protected`

  Post-process an update operation of a movement.

  #### Parameters

  + movement: [TokenMovementOperation](../interfaces/foundry.documents.types.TokenMovementOperation.md)

    The movement of this Token
  + operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>

    The update operation
  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User that requested the update operation

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_preDelete](foundry.documents.BaseToken.md#_predelete)

### `Protected`\_prepareBars

* \_prepareBars(): void

  `Protected`

  Extend data in attribute-bar properties.

  #### Returns void

### `Protected`\_prepareDetectionModes

* \_prepareDetectionModes(): void

  `Protected`

  Prepare detection modes which are available to the Token.
  Ensure that every Token has the basic sight detection mode configured.

  #### Returns void

### `Protected`\_preUpdateMovement

* \_preUpdateMovement(  
  Â Â Â Â movement: [TokenPreMovementOperation](../interfaces/foundry.documents.types.TokenPreMovementOperation.md),  
  Â Â Â Â operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): Promise<boolean | void>

  `Protected`

  Reject the movement or modify the update operation as needed based on the movement.
  Called after the movement for this document update has been determined.
  The waypoints of movement are final and cannot be changed. The movement can only be rejected entirely.

  #### Parameters

  + movement: [TokenPreMovementOperation](../interfaces/foundry.documents.types.TokenPreMovementOperation.md)

    The pending movement of this Token
  + operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>

    The update operation

  #### Returns Promise<boolean | void>

  If false, the movement is prevented

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_preUpdateSource](foundry.documents.BaseToken.md#_preupdatesource)

### `Protected`\_renderActiveEffectChanges

* \_renderActiveEffectChanges(priorOverrides: object): void

  `Protected`

  Send emulated update data to the Token PlaceableObject

  #### Parameters

  + priorOverrides: object

    Overrides prior to data reinitialization

  #### Returns void

### `Protected`\_shouldRecordMovementHistory

* \_shouldRecordMovementHistory(): boolean

  `Protected`

  Should the movement of this Token update be recorded in the movement history?
  Called as part of the preUpdate workflow if the Token is moved.

  #### Returns boolean

  Should the movement of this Token update be recorded in the movement history?

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_updateCommit](foundry.documents.BaseToken.md#_updatecommit)

### `Private`\_inflateVisionModeChange

* \_inflateVisionModeChange(  
  Â Â Â Â modeId: string,  
  ):  
  Â Â Â Â | Pick<  
  Â Â Â Â Â Â Â Â [TokenSightData](../interfaces/foundry.documents.types.TokenSightData.md),  
  Â Â Â Â Â Â Â Â "color"  
  Â Â Â Â Â Â Â Â | "saturation"  
  Â Â Â Â Â Â Â Â | "contrast"  
  Â Â Â Â Â Â Â Â | "attenuation"  
  Â Â Â Â Â Â Â Â | "brightness",  
  Â Â Â Â >  
  Â Â Â Â | Record<string, never>

  `Private`

  Acquire the defaults of a vision mode set by an Active Effect change and create additional overrides from them.

  #### Parameters

  + modeId: string

  #### Returns Â Â Â Â | Pick< Â Â Â Â Â Â Â Â [TokenSightData](../interfaces/foundry.documents.types.TokenSightData.md), Â Â Â Â Â Â Â Â "color" Â Â Â Â Â Â Â Â | "saturation" Â Â Â Â Â Â Â Â | "contrast" Â Â Â Â Â Â Â Â | "attenuation" Â Â Â Â Â Â Â Â | "brightness", Â Â Â Â > Â Â Â Â | Record<string, never>

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_addDataFieldMigration](foundry.documents.BaseToken.md#_adddatafieldmigration)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_addDataFieldShim](foundry.documents.BaseToken.md#_adddatafieldshim)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_addDataFieldShims](foundry.documents.BaseToken.md#_adddatafieldshims)

### `Static`\_addTeleportAndForcedShims

* \_addTeleportAndForcedShims(operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)): void

  `Internal`

  Add deprecated getters for the teleport and forced option.

  #### Parameters

  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

  #### Returns void

  #### Deprecated

  since v13

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_clearFieldsRecursively](foundry.documents.BaseToken.md#_clearfieldsrecursively)

### `Static`\_getHexagonalOffsets

* \_getHexagonalOffsets(  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â shape: [TokenShapeType](../types/CONST.TokenShapeType.md),  
  Â Â Â Â columns: boolean,  
  ): [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenHexagonalOffsetsData](../interfaces/foundry.documents.types.TokenHexagonalOffsetsData.md)>

  `Internal`

  Get the hexagonal offsets given the type, width, and height.

  #### Parameters

  + width: number

    The width of the Token (positive multiple of 0.5)
  + height: number

    The height of the Token (positive multiple of 0.5)
  + shape: [TokenShapeType](../types/CONST.TokenShapeType.md)

    The shape (one of [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md))
  + columns: boolean

    Column-based instead of row-based hexagonal grid?

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenHexagonalOffsetsData](../interfaces/foundry.documents.types.TokenHexagonalOffsetsData.md)>

  The hexagonal offsets

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_getHexagonalOffsets](foundry.documents.BaseToken.md#_gethexagonaloffsets)

### `Static`\_getHexagonalShape

* \_getHexagonalShape(  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â shape: [TokenShapeType](../types/CONST.TokenShapeType.md),  
  Â Â Â Â columns: boolean,  
  ): [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenHexagonalShapeData](../interfaces/foundry.documents.types.TokenHexagonalShapeData.md)> | null

  `Internal`

  Get the hexagonal shape given the type, width, and height.

  #### Parameters

  + width: number

    The width of the Token (positive)
  + height: number

    The height of the Token (positive)
  + shape: [TokenShapeType](../types/CONST.TokenShapeType.md)

    The shape (one of [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md))
  + columns: boolean

    Column-based instead of row-based hexagonal grid?

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenHexagonalShapeData](../interfaces/foundry.documents.types.TokenHexagonalShapeData.md)> | null

  The hexagonal shape or null if there is no shape
  for the given combination of arguments

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_getHexagonalShape](foundry.documents.BaseToken.md#_gethexagonalshape)

### `Static`\_isMovementUpdate

* \_isMovementUpdate(changes: object, origin?: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)): boolean

  `Internal`

  Are these changes moving the Token (from the given origin if provided)?

  #### Parameters

  + changes: object

    The (candidate) changes
  + `Optional`origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)

    The origin

  #### Returns boolean

  Is movement?

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_logDataFieldMigration](foundry.documents.BaseToken.md#_logdatafieldmigration)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onCreateOperation](foundry.documents.BaseToken.md#_oncreateoperation)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onDeleteOperation](foundry.documents.BaseToken.md#_ondeleteoperation)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_onUpdateOperation](foundry.documents.BaseToken.md#_onupdateoperation)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_preCleanData](foundry.documents.BaseToken.md#_precleandata)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_preCreateOperation](foundry.documents.BaseToken.md#_precreateoperation)

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

  Overrides [BaseToken](foundry.documents.BaseToken.md).[\_preUpdateOperation](foundry.documents.BaseToken.md#_preupdateoperation)

### `Static`arePositionsEqual

* arePositionsEqual(position1: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), position2: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)): boolean

  Are the given positions equal?

  #### Parameters

  + position1: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)
  + position2: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)

  #### Returns boolean

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[arePositionsEqual](foundry.documents.BaseToken.md#arepositionsequal)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[canUserCreate](foundry.documents.BaseToken.md#canusercreate)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[cleanData](foundry.documents.BaseToken.md#cleandata)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[create](foundry.documents.BaseToken.md#create)

### `Static`createCombatants

* createCombatants(  
  Â Â Â Â tokens: TokenDocument[],  
  Â Â Â Â options?: { combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) },  
  ): Promise<[documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md)[]>

  Create or remove Combatants for an array of provided Token objects.

  #### Parameters

  + tokens: TokenDocument[]

    The tokens which should be added to the Combat
  + `Optional`options: { combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) } = {}

    Options which modify the toggle operation

    - ##### `Optional`combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)

      A specific Combat instance which should be modified. If undefined, the
      current active combat will be modified if one exists. Otherwise, a new
      Combat encounter will be created if the requesting user is a Gamemaster.

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md)[]>

  An array of created Combatant documents

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[createDocuments](foundry.documents.BaseToken.md#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â \_movementHistory: [ArrayField](foundry.data.fields.ArrayField.md)<[SchemaField](foundry.data.fields.SchemaField.md)>;  
  Â Â Â Â \_regions: [ArrayField](foundry.data.fields.ArrayField.md)<[ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md)>;  
  Â Â Â Â actorId: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â actorLink: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â alpha: [AlphaField](foundry.data.fields.AlphaField.md);  
  Â Â Â Â bar1: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â bar2: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â delta: [ActorDeltaField](foundry.data.ActorDeltaField.md);  
  Â Â Â Â detectionModes: [TypedObjectField](foundry.data.fields.TypedObjectField.md);  
  Â Â Â Â displayBars: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â displayName: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â disposition: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md);  
  Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â light: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.md);  
  Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â lockRotation: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â movementAction: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â occludable: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â ring: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.md);  
  Â Â Â Â sight: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â sort: [NumberField](foundry.data.fields.NumberField.md);  
  Â Â Â Â texture: [TextureData](foundry.data.TextureData.md);  
  Â Â Â Â turnMarker: [SchemaField](foundry.data.fields.SchemaField.md);  
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

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â \_movementHistory: [ArrayField](foundry.data.fields.ArrayField.md)<[SchemaField](foundry.data.fields.SchemaField.md)>; Â Â Â Â \_regions: [ArrayField](foundry.data.fields.ArrayField.md)<[ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md)>; Â Â Â Â actorId: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â actorLink: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â alpha: [AlphaField](foundry.data.fields.AlphaField.md); Â Â Â Â bar1: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â bar2: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â delta: [ActorDeltaField](foundry.data.ActorDeltaField.md); Â Â Â Â detectionModes: [TypedObjectField](foundry.data.fields.TypedObjectField.md); Â Â Â Â displayBars: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â displayName: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â disposition: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md); Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â light: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.md); Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â lockRotation: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â movementAction: [StringField](foundry.data.fields.StringField.md); Â Â Â Â name: [StringField](foundry.data.fields.StringField.md); Â Â Â Â occludable: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â ring: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.md); Â Â Â Â sight: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â sort: [NumberField](foundry.data.fields.NumberField.md); Â Â Â Â texture: [TextureData](foundry.data.TextureData.md); Â Â Â Â turnMarker: [SchemaField](foundry.data.fields.SchemaField.md); }

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[defineSchema](foundry.documents.BaseToken.md#defineschema)

### `Static`deleteCombatants

* deleteCombatants(  
  Â Â Â Â tokens: TokenDocument[],  
  Â Â Â Â options?: { combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) },  
  ): Promise<[documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md)[]>

  Remove Combatants for the array of provided Tokens.

  #### Parameters

  + tokens: TokenDocument[]

    The tokens which should removed from the Combat
  + `Optional`options: { combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) } = {}

    Options which modify the operation

    - ##### `Optional`combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)

      A specific Combat instance from which Combatants should be deleted

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md)[]>

  An array of deleted Combatant documents

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[deleteDocuments](foundry.documents.BaseToken.md#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[fromJSON](foundry.documents.BaseToken.md#fromjson)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[fromSource](foundry.documents.BaseToken.md#fromsource)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[get](foundry.documents.BaseToken.md#get)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[getCollectionName](foundry.documents.BaseToken.md#getcollectionname)

### `Static`getTrackedAttributeChoices

* getTrackedAttributeChoices(attributes: object): object

  Inspect the Actor data model and identify the set of attributes which could be used for a Token Bar.

  #### Parameters

  + attributes: object

    The tracked attributes which can be chosen from

  #### Returns object

  A nested object of attribute choices to display

### `Static`getTrackedAttributes

* getTrackedAttributes(  
  Â Â Â Â data?:  
  Â Â Â Â Â Â Â Â | string  
  Â Â Â Â Â Â Â Â | object  
  Â Â Â Â Â Â Â Â | typeof [DataModel](foundry.abstract.DataModel.md)  
  Â Â Â Â Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>  
  Â Â Â Â Â Â Â Â | [SchemaField](foundry.data.fields.SchemaField.md),  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

  Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | string  
    Â Â Â Â | object  
    Â Â Â Â | typeof [DataModel](foundry.abstract.DataModel.md)  
    Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>  
    Â Â Â Â | [SchemaField](foundry.data.fields.SchemaField.md)

    The object to explore for attributes, or an
    Actor type.
  + `Optional`\_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

### `Static`migrateData

* migrateData(data: any, options: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + data: any

    Candidate source data for the module, before further cleaning
  + options: any

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[migrateData](foundry.documents.BaseToken.md#migratedata)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[migrateDataSafe](foundry.documents.BaseToken.md#migratedatasafe)

### `Static`shimData

* shimData(data: any, options: any): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + data: any

    Data which matches the current schema
  + options: any

    Additional shimming options

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[shimData](foundry.documents.BaseToken.md#shimdata)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[updateDocuments](foundry.documents.BaseToken.md#updatedocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[validateJoint](foundry.documents.BaseToken.md#validatejoint)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_cleanData](foundry.documents.BaseToken.md#_cleandata)

### `Protected` `Static`\_getConfiguredTrackedAttributes

* \_getConfiguredTrackedAttributes(  
  Â Â Â Â type?: string,  
  ): void | [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

  `Protected`

  Retrieve any configured attributes for a given Actor type.

  #### Parameters

  + `Optional`type: string

    The Actor type.

  #### Returns void | [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

### `Protected` `Static`\_getTrackedAttributesFromObject

* \_getTrackedAttributesFromObject(  
  Â Â Â Â data: object,  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

  `Protected`

  Retrieve an Array of attribute choices from a plain object.

  #### Parameters

  + data: object

    The object to explore for attributes.
  + \_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

### `Protected` `Static`\_getTrackedAttributesFromSchema

* \_getTrackedAttributesFromSchema(  
  Â Â Â Â schema: [SchemaField](foundry.data.fields.SchemaField.md),  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

  `Protected`

  Retrieve an Array of attribute choices from a SchemaField.

  #### Parameters

  + schema: [SchemaField](foundry.data.fields.SchemaField.md)

    The schema to explore for attributes.
  + \_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.md)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.md).[\_preDeleteOperation](foundry.documents.BaseToken.md#_predeleteoperation)