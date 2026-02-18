---
title: "TokenDocument | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.TokenDocument.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [TokenDocument](foundry.documents.TokenDocument.html)

# Class TokenDocument

The client-side Token document which extends the common BaseToken document model.

The following fields must no be altered from source during data preparation:
`x`, `y`, `elevation`, `width`, `height`, `shape`.

### Hook Events

* [hookEvents.moveToken](../functions/hookEvents.moveToken.html)
* [hookEvents.pauseToken](../functions/hookEvents.pauseToken.html)
* [hookEvents.preMoveToken](../functions/hookEvents.preMoveToken.html)
* [hookEvents.stopToken](../functions/hookEvents.stopToken.html)

#### Mixes

CanvasDocumentMixin

#### See

* [foundry.documents.Scene](foundry.documents.Scene.html): The Scene document type which contains Token documents
* [foundry.applications.sheets.TokenConfig](foundry.applications.sheets.TokenConfig.html): The Token configuration application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.TokenDocument))

* [BaseToken](foundry.documents.BaseToken.html)<this>
  + TokenDocument

##### Index

### Constructors

[constructor](foundry.documents.TokenDocument.html#constructor)

### Properties

[\_movementContinuation](foundry.documents.TokenDocument.html#_movementcontinuation)
[\_source](foundry.documents.TokenDocument.html#_source)
[actors](foundry.documents.TokenDocument.html#actors)
[parent](foundry.documents.TokenDocument.html#parent)
[regions](foundry.documents.TokenDocument.html#regions)
[\_schema](foundry.documents.TokenDocument.html#_schema)
[DEFAULT\_ICON](foundry.documents.TokenDocument.html#default_icon)
[LOCALIZATION\_PREFIXES](foundry.documents.TokenDocument.html#localization_prefixes)
[metadata](foundry.documents.TokenDocument.html#metadata)
[MOVEMENT\_FIELDS](foundry.documents.TokenDocument.html#movement_fields)

### Accessors

[actor](foundry.documents.TokenDocument.html#actor)
[baseActor](foundry.documents.TokenDocument.html#baseactor)
[combatant](foundry.documents.TokenDocument.html#combatant)
[compendium](foundry.documents.TokenDocument.html#compendium)
[hasDistinctSubjectTexture](foundry.documents.TokenDocument.html#hasdistinctsubjecttexture)
[id](foundry.documents.TokenDocument.html#id)
[inCombat](foundry.documents.TokenDocument.html#incombat)
[inCompendium](foundry.documents.TokenDocument.html#incompendium)
[invalid](foundry.documents.TokenDocument.html#invalid)
[isEmbedded](foundry.documents.TokenDocument.html#isembedded)
[isLinked](foundry.documents.TokenDocument.html#islinked)
[isOwner](foundry.documents.TokenDocument.html#isowner)
[isSecret](foundry.documents.TokenDocument.html#issecret)
[movement](foundry.documents.TokenDocument.html#movement)
[movementHistory](foundry.documents.TokenDocument.html#movementhistory)
[schema](foundry.documents.TokenDocument.html#schema)
[uuid](foundry.documents.TokenDocument.html#uuid)
[validationFailures](foundry.documents.TokenDocument.html#validationfailures)
[baseDocument](foundry.documents.TokenDocument.html#basedocument)
[collectionName](foundry.documents.TokenDocument.html#collectionname)
[database](foundry.documents.TokenDocument.html#database)
[documentName](foundry.documents.TokenDocument.html#documentname)
[hasTypeData](foundry.documents.TokenDocument.html#hastypedata)
[hierarchy](foundry.documents.TokenDocument.html#hierarchy)
[implementation](foundry.documents.TokenDocument.html#implementation)
[schema](foundry.documents.TokenDocument.html#schema-2)
[TYPES](foundry.documents.TokenDocument.html#types)

### Methods

[\_configure](foundry.documents.TokenDocument.html#_configure)
[\_getParentCollection](foundry.documents.TokenDocument.html#_getparentcollection)
[\_gridOffsetToPosition](foundry.documents.TokenDocument.html#_gridoffsettoposition)
[\_identifyRegions](foundry.documents.TokenDocument.html#_identifyregions)
[\_initialize](foundry.documents.TokenDocument.html#_initialize)
[\_initializeSource](foundry.documents.TokenDocument.html#_initializesource)
[\_onCreate](foundry.documents.TokenDocument.html#_oncreate)
[\_onCreateDescendantDocuments](foundry.documents.TokenDocument.html#_oncreatedescendantdocuments)
[\_onDelete](foundry.documents.TokenDocument.html#_ondelete)
[\_onDeleteDescendantDocuments](foundry.documents.TokenDocument.html#_ondeletedescendantdocuments)
[\_onUpdate](foundry.documents.TokenDocument.html#_onupdate)
[\_onUpdateBaseActor](foundry.documents.TokenDocument.html#_onupdatebaseactor)
[\_onUpdateDescendantDocuments](foundry.documents.TokenDocument.html#_onupdatedescendantdocuments)
[\_positionToGridOffset](foundry.documents.TokenDocument.html#_positiontogridoffset)
[\_preCreateDescendantDocuments](foundry.documents.TokenDocument.html#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](foundry.documents.TokenDocument.html#_predeletedescendantdocuments)
[\_prepareDeltaUpdate](foundry.documents.TokenDocument.html#_preparedeltaupdate)
[\_preUpdate](foundry.documents.TokenDocument.html#_preupdate)
[\_preUpdateDescendantDocuments](foundry.documents.TokenDocument.html#_preupdatedescendantdocuments)
[\_stopMovementOnDisconnect](foundry.documents.TokenDocument.html#_stopmovementondisconnect)
[canUserModify](foundry.documents.TokenDocument.html#canusermodify)
[clearMovementHistory](foundry.documents.TokenDocument.html#clearmovementhistory)
[clone](foundry.documents.TokenDocument.html#clone)
[createEmbeddedDocuments](foundry.documents.TokenDocument.html#createembeddeddocuments)
[delete](foundry.documents.TokenDocument.html#delete)
[deleteEmbeddedDocuments](foundry.documents.TokenDocument.html#deleteembeddeddocuments)
[getBarAttribute](foundry.documents.TokenDocument.html#getbarattribute)
[getCenterPoint](foundry.documents.TokenDocument.html#getcenterpoint)
[getCompleteMovementPath](foundry.documents.TokenDocument.html#getcompletemovementpath)
[getEmbeddedCollection](foundry.documents.TokenDocument.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.TokenDocument.html#getembeddeddocument)
[getFlag](foundry.documents.TokenDocument.html#getflag)
[getGridSpacePolygon](foundry.documents.TokenDocument.html#getgridspacepolygon)
[getOccupiedGridSpaceOffsets](foundry.documents.TokenDocument.html#getoccupiedgridspaceoffsets)
[getSize](foundry.documents.TokenDocument.html#getsize)
[getSnappedPosition](foundry.documents.TokenDocument.html#getsnappedposition)
[getUserLevel](foundry.documents.TokenDocument.html#getuserlevel)
[hasStatusEffect](foundry.documents.TokenDocument.html#hasstatuseffect)
[measureMovementPath](foundry.documents.TokenDocument.html#measuremovementpath)
[migrateSystemData](foundry.documents.TokenDocument.html#migratesystemdata)
[move](foundry.documents.TokenDocument.html#move)
[pauseMovement](foundry.documents.TokenDocument.html#pausemovement)
[prepareBaseData](foundry.documents.TokenDocument.html#preparebasedata)
[prepareDerivedData](foundry.documents.TokenDocument.html#preparederiveddata)
[prepareEmbeddedDocuments](foundry.documents.TokenDocument.html#prepareembeddeddocuments)
[reset](foundry.documents.TokenDocument.html#reset)
[resize](foundry.documents.TokenDocument.html#resize)
[resumeMovement](foundry.documents.TokenDocument.html#resumemovement)
[revertRecordedMovement](foundry.documents.TokenDocument.html#revertrecordedmovement)
[segmentizeRegionMovementPath](foundry.documents.TokenDocument.html#segmentizeregionmovementpath)
[setFlag](foundry.documents.TokenDocument.html#setflag)
[stopMovement](foundry.documents.TokenDocument.html#stopmovement)
[testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)
[testUserPermission](foundry.documents.TokenDocument.html#testuserpermission)
[toggleCombatant](foundry.documents.TokenDocument.html#togglecombatant)
[toJSON](foundry.documents.TokenDocument.html#tojson)
[toObject](foundry.documents.TokenDocument.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.TokenDocument.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.TokenDocument.html#unsetflag)
[update](foundry.documents.TokenDocument.html#update)
[updateEmbeddedDocuments](foundry.documents.TokenDocument.html#updateembeddeddocuments)
[updateSource](foundry.documents.TokenDocument.html#updatesource)
[updateVisionMode](foundry.documents.TokenDocument.html#updatevisionmode)
[validate](foundry.documents.TokenDocument.html#validate)
[\_couldRegionsChange](foundry.documents.TokenDocument.html#_couldregionschange)
[\_inferMovementAction](foundry.documents.TokenDocument.html#_infermovementaction)
[\_inferRingSubjectTexture](foundry.documents.TokenDocument.html#_inferringsubjecttexture)
[\_onMovementPaused](foundry.documents.TokenDocument.html#_onmovementpaused)
[\_onMovementRecorded](foundry.documents.TokenDocument.html#_onmovementrecorded)
[\_onMovementStopped](foundry.documents.TokenDocument.html#_onmovementstopped)
[\_onRelatedUpdate](foundry.documents.TokenDocument.html#_onrelatedupdate)
[\_onUpdateMovement](foundry.documents.TokenDocument.html#_onupdatemovement)
[\_preCreate](foundry.documents.TokenDocument.html#_precreate)
[\_preDelete](foundry.documents.TokenDocument.html#_predelete)
[\_prepareDetectionModes](foundry.documents.TokenDocument.html#_preparedetectionmodes)
[\_preUpdateMovement](foundry.documents.TokenDocument.html#_preupdatemovement)
[\_shouldRecordMovementHistory](foundry.documents.TokenDocument.html#_shouldrecordmovementhistory)
[\_addDataFieldMigration](foundry.documents.TokenDocument.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.TokenDocument.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.TokenDocument.html#_adddatafieldshims)
[\_addTeleportAndForcedShims](foundry.documents.TokenDocument.html#_addteleportandforcedshims)
[\_clearFieldsRecursively](foundry.documents.TokenDocument.html#_clearfieldsrecursively)
[\_getHexagonalOffsets](foundry.documents.TokenDocument.html#_gethexagonaloffsets)
[\_initializationOrder](foundry.documents.TokenDocument.html#_initializationorder)
[\_isMovementUpdate](foundry.documents.TokenDocument.html#_ismovementupdate)
[\_logDataFieldMigration](foundry.documents.TokenDocument.html#_logdatafieldmigration)
[\_onCreateOperation](foundry.documents.TokenDocument.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.TokenDocument.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.TokenDocument.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.TokenDocument.html#_precreateoperation)
[\_preUpdateOperation](foundry.documents.TokenDocument.html#_preupdateoperation)
[arePositionsEqual](foundry.documents.TokenDocument.html#arepositionsequal)
[canUserCreate](foundry.documents.TokenDocument.html#canusercreate)
[cleanData](foundry.documents.TokenDocument.html#cleandata)
[create](foundry.documents.TokenDocument.html#create)
[createCombatants](foundry.documents.TokenDocument.html#createcombatants)
[createDocuments](foundry.documents.TokenDocument.html#createdocuments)
[defineSchema](foundry.documents.TokenDocument.html#defineschema)
[deleteCombatants](foundry.documents.TokenDocument.html#deletecombatants)
[deleteDocuments](foundry.documents.TokenDocument.html#deletedocuments)
[fromJSON](foundry.documents.TokenDocument.html#fromjson)
[fromSource](foundry.documents.TokenDocument.html#fromsource)
[get](foundry.documents.TokenDocument.html#get)
[getCollectionName](foundry.documents.TokenDocument.html#getcollectionname)
[getTrackedAttributeChoices](foundry.documents.TokenDocument.html#gettrackedattributechoices)
[getTrackedAttributes](foundry.documents.TokenDocument.html#gettrackedattributes)
[migrateData](foundry.documents.TokenDocument.html#migratedata)
[migrateDataSafe](foundry.documents.TokenDocument.html#migratedatasafe)
[shimData](foundry.documents.TokenDocument.html#shimdata)
[updateDocuments](foundry.documents.TokenDocument.html#updatedocuments)
[validateJoint](foundry.documents.TokenDocument.html#validatejoint)
[\_getConfiguredTrackedAttributes](foundry.documents.TokenDocument.html#_getconfiguredtrackedattributes)
[\_getTrackedAttributesFromObject](foundry.documents.TokenDocument.html#_gettrackedattributesfromobject)
[\_getTrackedAttributesFromSchema](foundry.documents.TokenDocument.html#_gettrackedattributesfromschema)
[\_preDeleteOperation](foundry.documents.TokenDocument.html#_predeleteoperation)

## Constructors

### constructor

* new TokenDocument(  
  Â Â Â Â data?: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [TokenDocument](foundry.documents.TokenDocument.html)

  #### Parameters

  + `Optional`data: Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [TokenDocument](foundry.documents.TokenDocument.html)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[constructor](foundry.documents.BaseToken.html#constructor)

## Properties

### `Internal`\_movementContinuation

\_movementContinuation: [TokenMovementContinuationData](../interfaces/foundry.documents.types.TokenMovementContinuationData.html) = ...

The movement continuation state of this Token document.

### \_source

\_source: [TokenData](../interfaces/foundry.documents.types.TokenData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_source](foundry.documents.BaseToken.html#_source)

### actors

actors: [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)> = ...

A singleton collection which holds a reference to the synthetic token actor by its base actor's ID.

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseToken](foundry.documents.BaseToken.html).[parent](foundry.documents.BaseToken.html#parent)

### regions

regions: Set<[RegionDocument](foundry.documents.RegionDocument.html)> = ...

The Regions this Token is currently in.

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_schema](foundry.documents.BaseToken.html#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = CONST.DEFAULT\_TOKEN

The default icon used for newly created Token documents

Inherited from [BaseToken](foundry.documents.BaseToken.html).[DEFAULT\_ICON](foundry.documents.BaseToken.html#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseToken](foundry.documents.BaseToken.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseToken.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseToken](foundry.documents.BaseToken.html).[metadata](foundry.documents.BaseToken.html#metadata)

### `Static` `Readonly`MOVEMENT\_FIELDS

MOVEMENT\_FIELDS: readonly ["x", "y", "elevation", "width", "height", "shape"] = ...

The fields of the data model for which changes count as a movement action.

Inherited from [BaseToken](foundry.documents.BaseToken.html).[MOVEMENT\_FIELDS](foundry.documents.BaseToken.html#movement_fields)

## Accessors

### actor

* get actor(): null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

  A reference to the Actor this Token modifies.
  If actorLink is true, then the document is the primary Actor document.
  Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.

  #### Returns null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

### baseActor

* get baseActor(): null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

  A reference to the base, World-level Actor this token represents.

  #### Returns null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

### combatant

* get combatant(): null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

  Return a reference to a Combatant that represents this Token, if one is present in the current encounter.

  #### Returns null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

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

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

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

* get movement(): [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenMovementData](../interfaces/foundry.documents.types.TokenMovementData.html)>

  The current movement data of this Token document.

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenMovementData](../interfaces/foundry.documents.types.TokenMovementData.html)>

### movementHistory

* get movementHistory(): [TokenMeasuredMovementWaypoint](../interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.html)[]

  The movement history.

  #### Returns [TokenMeasuredMovementWaypoint](../interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.html)[]

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from CanvasDocumentMixin(BaseToken).schema

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseToken).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from CanvasDocumentMixin(BaseToken).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from CanvasDocumentMixin(BaseToken).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from CanvasDocumentMixin(BaseToken).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

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

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from CanvasDocumentMixin(BaseToken).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_configure](foundry.documents.BaseToken.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_getParentCollection](foundry.documents.BaseToken.html#_getparentcollection)

### \_gridOffsetToPosition

* \_gridOffsetToPosition(  
  Â Â Â Â offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.html),  
  Â Â Â Â data?: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  `Internal`

  Get the position of the Token from the top-left grid offset.

  #### Parameters

  + offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.html)

    The top-left grid offset
  + `Optional`data: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The dimensions that override the current dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  The snapped position

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_gridOffsetToPosition](foundry.documents.BaseToken.html#_gridoffsettoposition)

### \_identifyRegions

* \_identifyRegions(changes?: object): string[]

  `Internal`

  Identify the Regions the Token currently is or is going to be in after the changes are applied.

  #### Parameters

  + `Optional`changes: object = {}

    The changes that will be applied to this Token

  #### Returns string[]

  The Region IDs this Token is in after the changes are applied (sorted)

### \_initialize

* \_initialize(options?: {}): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: {} = {}

    Options provided to the model constructor

  #### Returns void

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_initialize](foundry.documents.BaseToken.html#_initialize)

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

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_initializeSource](foundry.documents.BaseToken.html#_initializesource)

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

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onCreate](foundry.documents.BaseToken.html#_oncreate)

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

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onDelete](foundry.documents.BaseToken.html#_ondelete)

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

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onUpdate](foundry.documents.BaseToken.html#_onupdate)

### \_onUpdateBaseActor

* \_onUpdateBaseActor(  
  Â Â Â Â update?: object,  
  Â Â Â Â options?: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>,  
  ): void

  `Internal`

  When the base Actor for a TokenDocument changes, we may need to update its Actor instance

  #### Parameters

  + `Optional`update: object = {}

    The update delta
  + `Optional`options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)> = {}

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
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  ): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.html)

  `Internal`

  Get the top-left grid offset of the Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The position and dimensions

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.html)

  The top-left grid offset

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_positionToGridOffset](foundry.documents.BaseToken.html#_positiontogridoffset)

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

* \_prepareDeltaUpdate(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html)): void

  `Internal`

  Prepare changes to a descendent delta collection.

  #### Parameters

  + changes: object = {}

    Candidate source changes.
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html) = {}

    Options which determine how the new data is merged.

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_prepareDeltaUpdate](foundry.documents.BaseToken.html#_preparedeltaupdate)

### \_preUpdate

* \_preUpdate(changed: any, options: any, user: any): Promise<undefined | false>

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changed: any

    The candidate changes to the Document
  + options: any

    Additional options which modify the update request
  + user: any

    The User requesting the document update

  #### Returns Promise<undefined | false>

  A return value of false indicates the update operation should be cancelled.

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_preUpdate](foundry.documents.BaseToken.html#_preupdate)

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

### canUserModify

* canUserModify(user: [BaseUser](foundry.documents.BaseUser.html), action: string, data?: object): boolean

  Test whether a given User has permission to perform some action on this Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User attempting modification
  + action: string

    The attempted action
  + `Optional`data: object = {}

    Data involved in the attempted action

  #### Returns boolean

  Does the User have permission?

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[canUserModify](foundry.documents.BaseToken.html#canusermodify)

### clearMovementHistory

* clearMovementHistory(): Promise<void>

  Clear the movement history of this Token.

  #### Returns Promise<void>

### clone

* clone(  
  Â Â Â Â data?: {},  
  Â Â Â Â context?: {},  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + data: {} = {}

    Additional data which overrides current document data at the time of creation
  + context: {} = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The cloned Document instance

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[clone](foundry.documents.BaseToken.html#clone)

### createEmbeddedDocuments

* createEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â data?: object[],  
  Â Â Â Â operation?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create multiple embedded Document instances within this parent Document using provided input data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + data: object[] = []

    An array of data objects used to create multiple documents
  + `Optional`operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html) = {}

    Parameters of the database creation workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of created Document instances

  #### See

  [Document.createDocuments](foundry.abstract.Document.html#createdocuments)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[createEmbeddedDocuments](foundry.documents.BaseToken.html#createembeddeddocuments)

### delete

* delete(  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">>,  
  ): Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Delete this Document, removing it from the database.

  #### Parameters

  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">> = {}

    Parameters of the deletion operation

  #### Returns Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The deleted Document instance, or undefined if not deleted

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.html#deletedocuments)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[delete](foundry.documents.BaseToken.html#delete)

### deleteEmbeddedDocuments

* deleteEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Delete multiple embedded Document instances within a parent Document using provided string ids.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + ids: string[]

    An array of string ids for each Document to be deleted
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html) = {}

    Parameters of the database deletion workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of deleted Document instances

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.html#deletedocuments)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[deleteEmbeddedDocuments](foundry.documents.BaseToken.html#deleteembeddeddocuments)

### getBarAttribute

* getBarAttribute(  
  Â Â Â Â barName: string,  
  Â Â Â Â options?: { alternative?: string },  
  ): null | object

  A helper method to retrieve the underlying data behind one of the Token's attribute bars

  #### Parameters

  + barName: string

    The named bar to retrieve the attribute for
  + `Optional`options: { alternative?: string } = {}
    - ##### `Optional`alternative?: string

      An alternative attribute path to get instead of the default one

  #### Returns null | object

  The attribute displayed on the Token bar, if any

### getCenterPoint

* getCenterPoint(data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  Get the center point of the Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  The center point

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getCenterPoint](foundry.documents.BaseToken.html#getcenterpoint)

### getCompleteMovementPath

* getCompleteMovementPath(  
  Â Â Â Â waypoints: [TokenGetCompleteMovementPathWaypoint](../interfaces/foundry.documents.types.TokenGetCompleteMovementPathWaypoint.html)[],  
  ): [TokenCompleteMovementWaypoint](../types/foundry.documents.types.TokenCompleteMovementWaypoint.html)[]

  Get the path of movement with the intermediate steps of the direct path between waypoints.

  #### Parameters

  + waypoints: [TokenGetCompleteMovementPathWaypoint](../interfaces/foundry.documents.types.TokenGetCompleteMovementPathWaypoint.html)[]

    The waypoints of movement

  #### Returns [TokenCompleteMovementWaypoint](../types/foundry.documents.types.TokenCompleteMovementWaypoint.html)[]

  The path of movement with all intermediate steps

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: any): any

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: any

    The name of the embedded Document type

  #### Returns any

  The Collection instance of embedded Documents of the requested type

  Overrides [BaseToken](foundry.documents.BaseToken.html).[getEmbeddedCollection](foundry.documents.BaseToken.html#getembeddedcollection)

### getEmbeddedDocument

* getEmbeddedDocument(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

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

  #### Returns [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  The retrieved embedded Document instance, or undefined

  #### Throws

  If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
  found.

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getEmbeddedDocument](foundry.documents.BaseToken.html#getembeddeddocument)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getFlag](foundry.documents.BaseToken.html#getflag)

### getGridSpacePolygon

* getGridSpacePolygon(data?: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>): void | [Point](../interfaces/foundry.types.Point.html)[]

  Get the grid space polygon of the Token.
  Returns undefined in gridless grids because there are no grid spaces.

  #### Parameters

  + `Optional`data: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The dimensions

  #### Returns void | [Point](../interfaces/foundry.types.Point.html)[]

  The grid space polygon or undefined if gridless

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getGridSpacePolygon](foundry.documents.BaseToken.html#getgridspacepolygon)

### getOccupiedGridSpaceOffsets

* getOccupiedGridSpaceOffsets(  
  Â Â Â Â data?: Partial<[Point](../interfaces/foundry.types.Point.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  ): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.html)[]

  Get the offsets of grid spaces that are occupied by this Token at the current or given position.
  The grid spaces the Token occupies are those that are covered by the Token's shape in the snapped position.
  Returns an empty array in gridless grids.

  #### Parameters

  + `Optional`data: Partial<[Point](../interfaces/foundry.types.Point.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The position and dimensions

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.html)[]

  The offsets of occupied grid spaces

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getOccupiedGridSpaceOffsets](foundry.documents.BaseToken.html#getoccupiedgridspaceoffsets)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getSize](foundry.documents.BaseToken.html#getsize)

### getSnappedPosition

* getSnappedPosition(  
  Â Â Â Â data?: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  Get the snapped position of the Token.

  #### Parameters

  + `Optional`data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)> = {}

    The position and dimensions

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  The snapped position

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getSnappedPosition](foundry.documents.BaseToken.html#getsnappedposition)

### getUserLevel

* getUserLevel(user: any): any

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + user: any

    The User being tested

  #### Returns any

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.html)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getUserLevel](foundry.documents.BaseToken.html#getuserlevel)

### hasStatusEffect

* hasStatusEffect(statusId: string): boolean

  Test whether a Token has a specific status effect.

  #### Parameters

  + statusId: string

    The status effect ID as defined in CONFIG.statusEffects

  #### Returns boolean

  Does the Actor of the Token have this status effect?

### measureMovementPath

* measureMovementPath(  
  Â Â Â Â waypoints: [TokenMeasureMovementPathWaypoint](../interfaces/foundry.documents.types.TokenMeasureMovementPathWaypoint.html)[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.html);  
  Â Â Â Â Â Â Â Â cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.html);  
  Â Â Â Â },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.html)

  Measure the movement path for this Token.

  #### Parameters

  + waypoints: [TokenMeasureMovementPathWaypoint](../interfaces/foundry.documents.types.TokenMeasureMovementPathWaypoint.html)[]

    The waypoints of movement
  + `Optional`options: { aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.html); cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.html) } = {}

    Additional measurement options

    - ##### `Optional`aggregator?: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.html)

      The cost aggregator.
      Default: `CONFIG.Token.movement.costAggregator`.
    - ##### `Optional`cost?: [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.html)

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.html)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[migrateSystemData](foundry.documents.BaseToken.html#migratesystemdata)

### move

* move(  
  Â Â Â Â waypoints:  
  Â Â Â Â Â Â Â Â | Partial<[TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)>  
  Â Â Â Â Â Â Â Â | Partial<[TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)>[],  
  Â Â Â Â options?: Partial<  
  Â Â Â Â Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates"> & {  
  Â Â Â Â Â Â Â Â Â Â Â Â autoRotate: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â constrainOptions: Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html),  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â | "history",  
  Â Â Â Â Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â Â Â Â Â method: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.html);  
  Â Â Â Â Â Â Â Â Â Â Â Â showRuler: boolean;  
  Â Â Â Â Â Â Â Â },  
  Â Â Â Â >,  
  ): Promise<boolean>

  Move the Token through the given waypoint(s).

  #### Parameters

  + waypoints: Partial<[TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)> | Partial<[TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)>[]

    The waypoint(s) to move the Token through
  + `Optional`options: Partial<  
    Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates"> & {  
    Â Â Â Â Â Â Â Â autoRotate: boolean;  
    Â Â Â Â Â Â Â Â constrainOptions: Omit<  
    Â Â Â Â Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html),  
    Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
    Â Â Â Â Â Â Â Â Â Â Â Â | "history",  
    Â Â Â Â Â Â Â Â >;  
    Â Â Â Â Â Â Â Â method: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.html);  
    Â Â Â Â Â Â Â Â showRuler: boolean;  
    Â Â Â Â },  
    > = {}

    Parameters of the update operation

  #### Returns Promise<boolean>

  A Promise that resolves to true if the Token was moved, otherwise resolves to false

### pauseMovement

* pauseMovement(): null | [TokenResumeMovementCallback](../types/foundry.documents.types.TokenResumeMovementCallback.html)

  Pause the movement of this Token document. The movement can be resumed after being paused.
  Only the User that initiated the movement can pause it.
  Returns a callback that can be used to resume the movement later.
  Only after all callbacks and keys have been called the movement of the Token is resumed.
  If the callback is called within the update operation workflow, the movement is resumed after the workflow.

  #### Returns null | [TokenResumeMovementCallback](../types/foundry.documents.types.TokenResumeMovementCallback.html)

  The callback to resume movement if the movement was or is paused,
  otherwise null

  #### Example

  ```
  // This is an Execute Script Region Behavior that makes the token invisible  
  // On TOKEN_MOVE_IN...  
  if ( !event.user.isSelf ) return;  
  const resumeMovement = event.data.token.pauseMovement();  
  if ( event.data.token.rendered ) await event.data.token.object.movementAnimationPromise;  
  await event.data.token.actor.toggleStatusEffect("invisible", {active: true});  
  const resumed = await resumeMovement();
  Copy
  ```
* pauseMovement(key: string): null | Promise<boolean>

  Pause the movement of this Token document. The movement can be resumed after being paused.
  Only the User that initiated the movement can pause it.
  Returns a promise that resolves to true if the movement was resumed by
  [TokenDocument#resumeMovement](foundry.documents.TokenDocument.html#resumemovement) with the same key that was passed to this function.
  Only after all callbacks and keys have been called the movement of the Token is resumed.
  If the callback is called within the update operation workflow, the movement is resumed after the workflow.

  #### Parameters

  + key: string

    The key to resume movement with [TokenDocument#resumeMovement](foundry.documents.TokenDocument.html#resumemovement)

  #### Returns null | Promise<boolean>

  The continuation promise if the movement was paused, otherwise null

  #### Example

  ```
  // This is an Execute Script Region Behavior of a pressure plate that activates a trap  
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

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[reset](foundry.documents.BaseToken.html#reset)

### resize

* resize(  
  Â Â Â Â dimensions: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  Â Â Â Â options?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>,  
  ): Promise<boolean>

  Resize the token Token such that its center point remains (almost) unchanged. The center point might change
  slightly because the new (x, y) position is rounded.

  #### Parameters

  + dimensions: Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>

    The new dimensions
  + `Optional`options: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>

    Parameters of the update operation

  #### Returns Promise<boolean>

  A Promise that resolves to true if the Token was resized, otherwise resolves to false

### resumeMovement

* resumeMovement(movementId: string, key: string): void

  Resume the movement given its ID and the key that was passed to [TokenDocument#pauseMovement](foundry.documents.TokenDocument.html#pausemovement).

  #### Parameters

  + movementId: string

    The movement ID
  + key: string

    The key that was passed to [TokenDocument#pauseMovement](foundry.documents.TokenDocument.html#pausemovement)

  #### Returns void

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
  Â Â Â Â region: [RegionDocument](foundry.documents.RegionDocument.html),  
  Â Â Â Â waypoints: [TokenSegmentizeMovementWaypoint](../interfaces/foundry.documents.types.TokenSegmentizeMovementWaypoint.html)[],  
  ): [TokenRegionMovementSegment](../interfaces/foundry.documents.types.TokenRegionMovementSegment.html)[]

  Split the Token movement path through the Region into its segments.
  The Token and the Region must be in the same Scene.

  Implementations of this function are restricted in the following ways:

  + The segments must go through the waypoints.
  + The *from* position matches the *to* position of the succeeding segment.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)) within the Region
    at the *from* and *to* of MOVE segments.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)) within the Region
    at the *to* position of ENTER segments.
  + The Token must be contained (w.r.t. [TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)) within the Region
    at the *from* position of EXIT segments.
  + The Token must not be contained (w.r.t. [TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)) within the
    Region at the *from* position of ENTER segments.
  + The Token must not be contained (w.r.t. [TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion)) within the
    Region at the *to* position of EXIT segments.
  + This function must not use prepared field values that are animated. In particular, it must use the source
    instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.

  #### Parameters

  + region: [RegionDocument](foundry.documents.RegionDocument.html)

    The region
  + waypoints: [TokenSegmentizeMovementWaypoint](../interfaces/foundry.documents.types.TokenSegmentizeMovementWaypoint.html)[]

    The waypoints of movement

  #### Returns [TokenRegionMovementSegment](../interfaces/foundry.documents.types.TokenRegionMovementSegment.html)[]

  The movement split into its segments

### setFlag

* setFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  Â Â Â Â value: any,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

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

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  A Promise resolving to the updated document

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[setFlag](foundry.documents.BaseToken.html#setflag)

### stopMovement

* stopMovement(): boolean

  Stop the movement of this Token document. The movement cannot be continued after being stopped.
  Only the User that initiated the movement can stop it.

  #### Returns boolean

  True if the movement was or is stopped, otherwise false

### testInsideRegion

* testInsideRegion(region: [RegionDocument](foundry.documents.RegionDocument.html)): boolean

  Test whether the Token is inside the Region.
  This function determines the state of [TokenDocument#regions](foundry.documents.TokenDocument.html#regions) and
  [foundry.documents.RegionDocument#tokens](foundry.documents.RegionDocument.html#tokens).
  The Token and the Region must be in the same Scene.

  Implementations of this function are restricted in the following ways:

  + If the bounds (given by [TokenDocument#getSize](foundry.documents.TokenDocument.html#getsize)) of the Token do not intersect the
    Region, then the Token is not contained within the Region.
  + If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
    within the elevation range of the Region.
  + This function must not use prepared field values that are animated. In particular, it must use the source
    instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.

  If this function is overridden, then [TokenDocument#segmentizeRegionMovementPath](foundry.documents.TokenDocument.html#segmentizeregionmovementpath) must be
  overridden too.

  If an override of this function uses Token document fields other than `x`, `y`, `elevation`, `width`, `height`, and
  `shape`, [TokenDocument#\_couldRegionsChange](foundry.documents.TokenDocument.html#_couldregionschange) must be overridden to return true for changes
  of these fields. If an override of this function uses non-Token properties other than `Scene#grid.type` and
  `Scene#grid.size`,
  [foundry.documents.Scene#updateTokenRegions](foundry.documents.Scene.html#updatetokenregions) must be called when any of those properties change.

  #### Parameters

  + region: [RegionDocument](foundry.documents.RegionDocument.html)

    The region.

  #### Returns boolean

  Is inside the Region?
* testInsideRegion(  
  Â Â Â Â region: [RegionDocument](foundry.documents.RegionDocument.html),  
  Â Â Â Â data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>,  
  ): boolean

  #### Parameters

  + region: [RegionDocument](foundry.documents.RegionDocument.html)

    The region.
  + data: Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html) & [TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>

    The position and dimensions. Defaults to the values of
    the document source.

  #### Returns boolean

  Is inside the Region?

### testUserPermission

* testUserPermission(  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  Â Â Â Â permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.html),  
  Â Â Â Â options?: { exact?: boolean },  
  ): boolean

  Test whether a certain User has a requested permission level (or greater) over the Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested
  + permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.html)

    The permission level from DOCUMENT\_OWNERSHIP\_LEVELS to test
  + options: { exact?: boolean } = {}

    Additional options involved in the permission test

    - ##### `Optional`exact?: boolean

      Require the exact permission level requested?

  #### Returns boolean

  Does the user have this permission level over the Document?

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[testUserPermission](foundry.documents.BaseToken.html#testuserpermission)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[toJSON](foundry.documents.BaseToken.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[toObject](foundry.documents.BaseToken.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[traverseEmbeddedDocuments](foundry.documents.BaseToken.html#traverseembeddeddocuments)

### unsetFlag

* unsetFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Remove a flag assigned to the document

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The updated document instance

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[unsetFlag](foundry.documents.BaseToken.html#unsetflag)

### update

* update(  
  Â Â Â Â data?: object,  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>,  
  ): Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Update this Document using incremental data, saving it to the database.

  #### Parameters

  + `Optional`data: object = {}

    Differential update data which modifies the existing values of this document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">> = {}

    Parameters of the update operation

  #### Returns Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The updated Document instance, or undefined not updated

  #### See

  [Document.updateDocuments](foundry.abstract.Document.html#updatedocuments)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[update](foundry.documents.BaseToken.html#update)

### updateEmbeddedDocuments

* updateEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Update multiple embedded Document instances within a parent Document using provided differential data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + updates: object[] = []

    An array of differential data objects, each used to update a
    single Document
  + `Optional`operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html) = {}

    Parameters of the database update workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of updated Document instances

  #### See

  [Document.updateDocuments](foundry.abstract.Document.html#updatedocuments)

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[updateEmbeddedDocuments](foundry.documents.BaseToken.html#updateembeddeddocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[updateSource](foundry.documents.BaseToken.html#updatesource)

### updateVisionMode

* updateVisionMode(  
  Â Â Â Â visionMode: string,  
  Â Â Â Â defaults?: boolean,  
  ): Promise<undefined | [TokenDocument](foundry.documents.TokenDocument.html)>

  Convenience method to change a token vision mode.

  #### Parameters

  + visionMode: string

    The vision mode to apply to this token.
  + `Optional`defaults: boolean = true

    If the vision mode should be updated with its defaults.

  #### Returns Promise<undefined | [TokenDocument](foundry.documents.TokenDocument.html)>

  The updated Document instance, or undefined not updated.

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[validate](foundry.documents.BaseToken.html#validate)

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

### `Protected`\_onMovementPaused

* \_onMovementPaused(): void

  `Protected`

  Called when the current movement is paused.

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

### `Protected`\_onRelatedUpdate

* \_onRelatedUpdate(  
  Â Â Â Â update?: object | object[],  
  Â Â Â Â operation?: Partial<[DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)>,  
  ): void

  `Protected`

  Whenever the token's actor delta changes, or the base actor changes, perform associated refreshes.

  #### Parameters

  + `Optional`update: object | object[] = {}

    The update delta
  + `Optional`operation: Partial<[DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)> = {}

    The database operation that was performed

  #### Returns void

### `Protected`\_onUpdateMovement

* \_onUpdateMovement(  
  Â Â Â Â movement: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html)>,  
  Â Â Â Â operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>,  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  ): void

  `Protected`

  Post-process an update operation of a movement.

  #### Parameters

  + movement: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html)>

    The movement of this Token
  + operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>

    The update operation
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User that requested the update operation

  #### Returns void

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.TokenDocument.html#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_preCreate](foundry.documents.BaseToken.html#_precreate)

### `Protected`\_preDelete

* \_preDelete(options: object, user: [BaseUser](foundry.documents.BaseUser.html)): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_preDelete](foundry.documents.BaseToken.html#_predelete)

### `Protected`\_prepareDetectionModes

* \_prepareDetectionModes(): void

  `Protected`

  Prepare detection modes which are available to the Token.
  Ensure that every Token has the basic sight detection mode configured.

  #### Returns void

### `Protected`\_preUpdateMovement

* \_preUpdateMovement(  
  Â Â Â Â movement: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<  
  Â Â Â Â Â Â Â Â Omit<[TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html), "autoRotate" | "showRuler">,  
  Â Â Â Â > & Pick<[TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html), "autoRotate" | "showRuler">,  
  Â Â Â Â operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>,  
  ): Promise<boolean | void>

  `Protected`

  Reject the movement or modify the update operation as needed based on the movement.
  Called after the movement for this document update has been determined.
  The waypoints of movement are final and cannot be changed. The movement can only be rejected entirely.

  #### Parameters

  + movement: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Omit<[TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html), "autoRotate" | "showRuler">> & Pick<  
    Â Â Â Â [TokenMovementOperation](../types/foundry.documents.types.TokenMovementOperation.html),  
    Â Â Â Â "autoRotate"  
    Â Â Â Â | "showRuler",  
    >

    The pending movement of this Token
  + operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>

    The update operation

  #### Returns Promise<boolean | void>

  If false, the movement is prevented

### `Protected`\_shouldRecordMovementHistory

* \_shouldRecordMovementHistory(): boolean

  `Protected`

  Should the movement of this Token update be recorded in the movement history?
  Called as part of the preUpdate workflow if the Token is moved.

  #### Returns boolean

  Should the movement of this Token update be recorded in the movement history?

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_addDataFieldMigration](foundry.documents.BaseToken.html#_adddatafieldmigration)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_addDataFieldShim](foundry.documents.BaseToken.html#_adddatafieldshim)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_addDataFieldShims](foundry.documents.BaseToken.html#_adddatafieldshims)

### `Static`\_addTeleportAndForcedShims

* \_addTeleportAndForcedShims(operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)): void

  `Internal`

  Add deprecated getters for the teleport and forced option.

  #### Parameters

  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

  #### Returns void

  #### Deprecated

  since v13

### `Static`\_clearFieldsRecursively

* \_clearFieldsRecursively(  
  Â Â Â Â data: object,  
  Â Â Â Â fieldNames: string[],  
  Â Â Â Â options?: { callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html) },  
  ): void

  `Internal`

  Clear the fields from the given Document data recursively.

  #### Parameters

  + data: object

    The (partial) Document data
  + fieldNames: string[]

    The fields that are cleared
  + `Optional`options: { callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html) } = {}
    - ##### `Optional`callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html)

      A callback that is invoked on each field in order to clear
      it.

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_clearFieldsRecursively](foundry.documents.BaseToken.html#_clearfieldsrecursively)

### `Static`\_getHexagonalOffsets

* \_getHexagonalOffsets(  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â shape: [TokenShapeType](../types/CONST.TokenShapeType.html),  
  Â Â Â Â columns: boolean,  
  ): [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenHexagonalOffsetsData](../interfaces/foundry.documents.types.TokenHexagonalOffsetsData.html)>

  `Internal`

  Get the hexagonal offsets given the type, width, and height.

  #### Parameters

  + width: number

    The width of the Token (positive)
  + height: number

    The height of the Token (positive)
  + shape: [TokenShapeType](../types/CONST.TokenShapeType.html)

    The shape (one of [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.html))
  + columns: boolean

    Column-based instead of row-based hexagonal grid?

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenHexagonalOffsetsData](../interfaces/foundry.documents.types.TokenHexagonalOffsetsData.html)>

  The hexagonal offsets

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_getHexagonalOffsets](foundry.documents.BaseToken.html#_gethexagonaloffsets)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_initializationOrder](foundry.documents.BaseToken.html#_initializationorder)

### `Static`\_isMovementUpdate

* \_isMovementUpdate(changes: object): boolean

  `Internal`

  Are these changes moving the Token?

  #### Parameters

  + changes: object

    The (candidate) changes

  #### Returns boolean

  Is movement?
* \_isMovementUpdate(changes: object, origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)): boolean

  `Internal`

  Are these changes moving the Token from the given origin?

  #### Parameters

  + changes: object

    The (candidate) changes
  + origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

  #### Returns void

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_logDataFieldMigration](foundry.documents.BaseToken.html#_logdatafieldmigration)

### `Static`\_onCreateOperation

* \_onCreateOperation(documents: any, operation: any, user: any): Promise<void>

  #### Parameters

  + documents: any
  + operation: any
  + user: any

  #### Returns Promise<void>

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onCreateOperation](foundry.documents.BaseToken.html#_oncreateoperation)

### `Static`\_onDeleteOperation

* \_onDeleteOperation(documents: any, operation: any, user: any): Promise<void>

  #### Parameters

  + documents: any
  + operation: any
  + user: any

  #### Returns Promise<void>

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onDeleteOperation](foundry.documents.BaseToken.html#_ondeleteoperation)

### `Static`\_onUpdateOperation

* \_onUpdateOperation(documents: any, operation: any, user: any): Promise<void>

  #### Parameters

  + documents: any
  + operation: any
  + user: any

  #### Returns Promise<void>

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_onUpdateOperation](foundry.documents.BaseToken.html#_onupdateoperation)

### `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): Promise<undefined | false>

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.TokenDocument.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.TokenDocument.html#updatesource).

  #### Parameters

  + documents: any

    Pending document instances to be created
  + operation: any

    Parameters of the database creation operation
  + user: any

    The User requesting the creation operation

  #### Returns Promise<undefined | false>

  Return false to cancel the creation operation entirely

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_preCreateOperation](foundry.documents.BaseToken.html#_precreateoperation)

### `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): Promise<undefined | false>

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.TokenDocument.html#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: any

    Document instances to be updated
  + operation: any

    Parameters of the database update operation
  + user: any

    The User requesting the update operation

  #### Returns Promise<undefined | false>

  Return false to cancel the update operation entirely

  Overrides [BaseToken](foundry.documents.BaseToken.html).[\_preUpdateOperation](foundry.documents.BaseToken.html#_preupdateoperation)

### `Static`arePositionsEqual

* arePositionsEqual(position1: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html), position2: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)): boolean

  Are the given positions equal?

  #### Parameters

  + position1: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)
  + position2: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)

  #### Returns boolean

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[arePositionsEqual](foundry.documents.BaseToken.html#arepositionsequal)

### `Static`canUserCreate

* canUserCreate(user: [BaseUser](foundry.documents.BaseUser.html)): boolean

  Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
  guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
  may also be present.

  Generally speaking, this method is used to verify whether a User should be presented with the option to create
  Documents of this type in the UI.

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested

  #### Returns boolean

  Does the User have a sufficient role to create?

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[canUserCreate](foundry.documents.BaseToken.html#canusercreate)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[cleanData](foundry.documents.BaseToken.html#cleandata)

### `Static`create

* create(  
  Â Â Â Â data?:  
  Â Â Â Â Â Â Â Â | object  
  Â Â Â Â Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â Â Â Â Â | (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">>,  
  ): Promise<  
  Â Â Â Â | undefined  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  >

  Create a new Document using provided input data, saving it to the database.

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | object  
    Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
    Â Â Â Â | (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[] = {}

    Initial data used to create this Document, or a Document
    instance to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">> = {}

    Parameters of the creation operation

  #### Returns Promise< Â Â Â Â | undefined Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[], >

  The created Document instance(s)

  #### See

  [Document.createDocuments](foundry.abstract.Document.html#createdocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[create](foundry.documents.BaseToken.html#create)

### `Static`createCombatants

* createCombatants(  
  Â Â Â Â tokens: [TokenDocument](foundry.documents.TokenDocument.html)[],  
  Â Â Â Â options?: { combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html) },  
  ): Promise<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]>

  Create or remove Combatants for an array of provided Token objects.

  #### Parameters

  + tokens: [TokenDocument](foundry.documents.TokenDocument.html)[]

    The tokens which should be added to the Combat
  + `Optional`options: { combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html) } = {}

    Options which modify the toggle operation

    - ##### `Optional`combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

      A specific Combat instance which should be modified. If undefined, the
      current active combat will be modified if one exists. Otherwise, a new
      Combat encounter will be created if the requesting user is a Gamemaster.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]>

  An array of created Combatant documents

### `Static`createDocuments

* createDocuments(  
  Â Â Â Â data?: (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create multiple Documents using provided input data.
  Data is provided as an array of objects where each individual object becomes one new Document.

  #### Parameters

  + data: (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[] = []

    An array of data objects or existing Documents to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">> = {}

    Parameters of the requested creation
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[createDocuments](foundry.documents.BaseToken.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_movementHistory: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>;  
  Â Â Â Â \_regions: [ArrayField](foundry.data.fields.ArrayField.html)<[ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html)>;  
  Â Â Â Â actorId: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â actorLink: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â alpha: [AlphaField](foundry.data.fields.AlphaField.html);  
  Â Â Â Â bar1: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â bar2: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â delta: [ActorDeltaField](foundry.data.ActorDeltaField.html);  
  Â Â Â Â detectionModes: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>;  
  Â Â Â Â displayBars: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â displayName: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â disposition: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â elevation: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â light: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.html);  
  Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â lockRotation: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â movementAction: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â occludable: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â ring: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.html);  
  Â Â Â Â shape: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â sight: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â sort: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â texture: [TextureData](foundry.data.TextureData.html);  
  Â Â Â Â turnMarker: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â x: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â y: [NumberField](foundry.data.fields.NumberField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.TokenDocument.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_movementHistory: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>; Â Â Â Â \_regions: [ArrayField](foundry.data.fields.ArrayField.html)<[ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html)>; Â Â Â Â actorId: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â actorLink: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â alpha: [AlphaField](foundry.data.fields.AlphaField.html); Â Â Â Â bar1: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â bar2: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â delta: [ActorDeltaField](foundry.data.ActorDeltaField.html); Â Â Â Â detectionModes: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>; Â Â Â Â displayBars: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â displayName: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â disposition: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â elevation: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â hidden: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â light: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.html); Â Â Â Â locked: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â lockRotation: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â movementAction: [StringField](foundry.data.fields.StringField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â occludable: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â ring: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.html); Â Â Â Â shape: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â sight: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â sort: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â texture: [TextureData](foundry.data.TextureData.html); Â Â Â Â turnMarker: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â x: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â y: [NumberField](foundry.data.fields.NumberField.html); }

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[defineSchema](foundry.documents.BaseToken.html#defineschema)

### `Static`deleteCombatants

* deleteCombatants(  
  Â Â Â Â tokens: [TokenDocument](foundry.documents.TokenDocument.html)[],  
  Â Â Â Â options?: { combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html) },  
  ): Promise<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]>

  Remove Combatants for the array of provided Tokens.

  #### Parameters

  + tokens: [TokenDocument](foundry.documents.TokenDocument.html)[]

    The tokens which should removed from the Combat
  + `Optional`options: { combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html) } = {}

    Options which modify the operation

    - ##### `Optional`combat?: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

      A specific Combat instance from which Combatants should be deleted

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]>

  An array of deleted Combatant documents

### `Static`deleteDocuments

* deleteDocuments(  
  Â Â Â Â ids?: string[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Delete one or multiple existing Documents using an array of provided ids.
  Data is provided as an array of string ids for the documents to delete.

  #### Parameters

  + ids: string[] = []

    An array of string ids for the documents to be deleted
  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">> = {}

    Parameters of the database deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of deleted Document instances

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[deleteDocuments](foundry.documents.BaseToken.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[fromJSON](foundry.documents.BaseToken.html#fromjson)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[fromSource](foundry.documents.BaseToken.html#fromsource)

### `Static`get

* get(  
  Â Â Â Â documentId: string,  
  Â Â Â Â operation?: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html),  
  ): null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  Get a World-level Document of this type by its id.

  #### Parameters

  + documentId: string

    The Document ID
  + `Optional`operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html) = {}

    Parameters of the get operation

  #### Returns null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  The retrieved Document, or null

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[get](foundry.documents.BaseToken.html#get)

### `Static`getCollectionName

* getCollectionName(name: string): null | string

  A compatibility method that returns the appropriate name of an embedded collection within this Document.

  #### Parameters

  + name: string

    An existing collection name or a document name.

  #### Returns null | string

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[getCollectionName](foundry.documents.BaseToken.html#getcollectionname)

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
  Â Â Â Â Â Â Â Â | typeof [DataModel](foundry.abstract.DataModel.html)  
  Â Â Â Â Â Â Â Â | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>  
  Â Â Â Â Â Â Â Â | [SchemaField](foundry.data.fields.SchemaField.html),  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

  Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | string  
    Â Â Â Â | object  
    Â Â Â Â | typeof [DataModel](foundry.abstract.DataModel.html)  
    Â Â Â Â | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>  
    Â Â Â Â | [SchemaField](foundry.data.fields.SchemaField.html)

    The object to explore for attributes, or an
    Actor type.
  + `Optional`\_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

### `Static`migrateData

* migrateData(data: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + data: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[migrateData](foundry.documents.BaseToken.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[migrateDataSafe](foundry.documents.BaseToken.html#migratedatasafe)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[shimData](foundry.documents.BaseToken.html#shimdata)

### `Static`updateDocuments

* updateDocuments(  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Update multiple Document instances using provided differential data.
  Data is provided as an array of objects where each individual object updates one existing Document.

  #### Parameters

  + updates: object[] = []

    An array of differential data objects, each used to update a single Document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">> = {}

    Parameters of the database update
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[updateDocuments](foundry.documents.BaseToken.html#updatedocuments)

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

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[validateJoint](foundry.documents.BaseToken.html#validatejoint)

### `Protected` `Static`\_getConfiguredTrackedAttributes

* \_getConfiguredTrackedAttributes(  
  Â Â Â Â type?: string,  
  ): void | [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

  `Protected`

  Retrieve any configured attributes for a given Actor type.

  #### Parameters

  + `Optional`type: string

    The Actor type.

  #### Returns void | [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

### `Protected` `Static`\_getTrackedAttributesFromObject

* \_getTrackedAttributesFromObject(  
  Â Â Â Â data: object,  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

  `Protected`

  Retrieve an Array of attribute choices from a plain object.

  #### Parameters

  + data: object

    The object to explore for attributes.
  + \_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

### `Protected` `Static`\_getTrackedAttributesFromSchema

* \_getTrackedAttributesFromSchema(  
  Â Â Â Â schema: [SchemaField](foundry.data.fields.SchemaField.html),  
  Â Â Â Â \_path?: string[],  
  ): [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

  `Protected`

  Retrieve an Array of attribute choices from a SchemaField.

  #### Parameters

  + schema: [SchemaField](foundry.data.fields.SchemaField.html)

    The schema to explore for attributes.
  + \_path: string[] = []

  #### Returns [TrackedAttributesDescription](../interfaces/foundry.documents.types.TrackedAttributesDescription.html)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.TokenDocument.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.TokenDocument.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseToken](foundry.documents.BaseToken.html).[\_preDeleteOperation](foundry.documents.BaseToken.html#_predeleteoperation)