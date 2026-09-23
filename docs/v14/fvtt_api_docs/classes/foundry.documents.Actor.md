---
title: "Actor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.Actor.html"
category: "classes"
---

# Class Actor

The client-side Actor document which extends the common BaseActor model.

### Hook Events

* [hookEvents.applyCompendiumArt](../functions/hookEvents.applyCompendiumArt.md)
* [hookEvents.modifyTokenAttribute](../functions/hookEvents.modifyTokenAttribute.md)

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Actors](foundry.documents.collections.Actors.md): The world-level collection of Actor documents
* [foundry.applications.sheets.ActorSheet](foundry.applications.sheets.ActorSheetV2.md): The Actor configuration application

#### Example: Create a new Actor

```
let actor = await Actor.implementation.create({  
  name: "New Test Actor",  
  type: "character",  
  img: "artwork/character-profile.jpg"  
});
Copy
```

#### Example: Retrieve an existing Actor

```
let actor = game.actors.get(actorId);
Copy
```

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.Actor))

* [BaseActor](foundry.documents.BaseActor.md)<this>
  + Actor

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[overrides](#overrides)
[parent](#parent)
[statuses](#statuses)
[tokenActiveEffectChanges](#tokenactiveeffectchanges)
[\_schema](#_schema)
[DEFAULT\_ICON](#default_icon)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)

### Accessors

[appliedEffects](#appliedeffects)
[compendium](#compendium)
[id](#id)
[inCombat](#incombat)
[inCompendium](#incompendium)
[invalid](#invalid)
[isEmbedded](#isembedded)
[isToken](#istoken)
[itemTypes](#itemtypes)
[schema](#schema)
[temporaryEffects](#temporaryeffects)
[thumbnail](#thumbnail)
[token](#token)
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
[\_getParentCollection](#_getparentcollection)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_onCreate](#_oncreate)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDelete](#_ondelete)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_onUpdate](#_onupdate)
[\_onUpdateDescendantDocuments](#_onupdatedescendantdocuments)
[\_preCreate](#_precreate)
[\_preUpdate](#_preupdate)
[\_registerDependentToken](#_registerdependenttoken)
[\_unregisterDependentScene](#_unregisterdependentscene)
[\_unregisterDependentToken](#_unregisterdependenttoken)
[\_updateDiff](#_updatediff)
[allApplicableEffects](#allapplicableeffects)
[applyActiveEffects](#applyactiveeffects)
[canUserModify](#canusermodify)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[delete](#delete)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[getActiveTokens](#getactivetokens)
[getDependentTokens](#getdependenttokens)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getRollData](#getrolldata)
[getTokenDocument](#gettokendocument)
[getTokenImages](#gettokenimages)
[getUserLevel](#getuserlevel)
[migrateSystemData](#migratesystemdata)
[modifyTokenAttribute](#modifytokenattribute)
[onUpdateEffectDurations](#onupdateeffectdurations)
[prepareBaseData](#preparebasedata)
[prepareData](#preparedata)
[prepareEmbeddedDocuments](#prepareembeddeddocuments)
[reset](#reset)
[rollInitiative](#rollinitiative)
[setFlag](#setflag)
[testUserPermission](#testuserpermission)
[toggleStatusEffect](#togglestatuseffect)
[toJSON](#tojson)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateSource](#updatesource)
[validate](#validate)
[\_clearData](#_cleardata)
[\_getInnerModel](#_getinnermodel)
[\_onEmbeddedDocumentChange](#_onembeddeddocumentchange)
[\_preDelete](#_predelete)
[\_preUpdateSource](#_preupdatesource)
[\_updateCommit](#_updatecommit)
[\_updateDependentTokens](#_updatedependenttokens)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_preCleanData](#_precleandata)
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
[getDefaultArtwork](#getdefaultartwork)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[updateDocuments](#updatedocuments)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_onCreateOperation](#_oncreateoperation)
[\_onDeleteOperation](#_ondeleteoperation)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCreateOperation](#_precreateoperation)
[\_preDeleteOperation](#_predeleteoperation)
[\_preUpdateOperation](#_preupdateoperation)

## Constructors

### constructor

* new Actor(  
  Â Â Â Â data?: Partial<[ActorData](../interfaces/foundry.documents.types.ActorData.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): [documents](../modules/foundry.documents.md).Actor

  #### Parameters

  + `Optional`data: Partial<[ActorData](../interfaces/foundry.documents.types.ActorData.md)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.md).Actor

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[constructor](foundry.documents.BaseActor.md#constructor)

## Properties

### \_source

\_source: [ActorData](../interfaces/foundry.documents.types.ActorData.md)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_source](foundry.documents.BaseActor.md#_source)

### overrides

overrides: object = ...

An object that tracks which tracks the changes to the data model which were applied by active effects

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseActor](foundry.documents.BaseActor.md).[parent](foundry.documents.BaseActor.md#parent)

### statuses

statuses: Set<string> = ...

The statuses that are applied to this actor by active effects

### tokenActiveEffectChanges

tokenActiveEffectChanges: Record<string, [ActiveEffectChangeData](../interfaces/foundry.documents.types.ActiveEffectChangeData.md)[]> = ...

ActiveEffect changes to be applied to Tokens instead of Actors, with each key being a phase

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_schema](foundry.documents.BaseActor.md#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = CONST.DEFAULT\_TOKEN

The default icon used for newly created Actor documents.

Inherited from [BaseActor](foundry.documents.BaseActor.md).[DEFAULT\_ICON](foundry.documents.BaseActor.md#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseActor](foundry.documents.BaseActor.md).[LOCALIZATION\_PREFIXES](foundry.documents.BaseActor.md#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseActor](foundry.documents.BaseActor.md).[metadata](foundry.documents.BaseActor.md#metadata)

## Accessors

### appliedEffects

* get appliedEffects(): [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[]

  Retrieve the list of ActiveEffects that are currently applied to this Actor.

  #### Returns [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[]

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseActor).compendium

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseActor).id

### inCombat

* get inCombat(): boolean

  Whether the Actor has at least one Combatant in the active Combat that represents it.

  #### Returns boolean

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActor).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActor).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActor).isEmbedded

### isToken

* get isToken(): boolean

  Test whether an Actor document is a synthetic representation of a Token (if true) or a full Document (if false)

  #### Returns boolean

### itemTypes

* get itemTypes(): Record<string, [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)[]>

  A convenience getter to an object that organizes all embedded Item instances by subtype. The object is cached and
  lazily re-computed as needed.

  #### Returns Record<string, [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)[]>

  #### See

  [foundry.abstract.EmbeddedCollection#documentsByType](foundry.abstract.EmbeddedCollection.md#documentsbytype)

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseActor).schema

### temporaryEffects

* get temporaryEffects(): [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[]

  An array of ActiveEffect instances which are present on the Actor which have a limited duration.

  #### Returns [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[]

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### token

* get token(): [TokenDocument](foundry.documents.TokenDocument.md) | null

  Return a reference to the TokenDocument which owns this Actor as a synthetic override

  #### Returns [TokenDocument](foundry.documents.TokenDocument.md) | null

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseActor).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from ClientDocumentMixin(BaseActor).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseActor).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActor).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from ClientDocumentMixin(BaseActor).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActor).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActor).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseActor).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseActor).implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseActor).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseActor).TYPES

## Methods

### \_configure

* \_configure(options?: {}): void

  #### Parameters

  + options: {} = {}

  #### Returns void

  Overrides [BaseActor](foundry.documents.BaseActor.md).[\_configure](foundry.documents.BaseActor.md#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_getParentCollection](foundry.documents.BaseActor.md#_getparentcollection)

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_initializationOrder](foundry.documents.BaseActor.md#_initializationorder)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_initialize](foundry.documents.BaseActor.md#_initialize)

### \_initializeSource

* \_initializeSource(source: any, options?: {}): object

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed
  + options: {} = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Overrides [BaseActor](foundry.documents.BaseActor.md).[\_initializeSource](foundry.documents.BaseActor.md#_initializesource)

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

  Overrides [BaseActor](foundry.documents.BaseActor.md).[\_onCreate](foundry.documents.BaseActor.md#_oncreate)

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

  Overrides [BaseActor](foundry.documents.BaseActor.md).[\_onDelete](foundry.documents.BaseActor.md#_ondelete)

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

  Overrides [BaseActor](foundry.documents.BaseActor.md).[\_onUpdate](foundry.documents.BaseActor.md#_onupdate)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preCreate](foundry.documents.BaseActor.md#_precreate)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preUpdate](foundry.documents.BaseActor.md#_preupdate)

### \_registerDependentToken

* \_registerDependentToken(token: [TokenDocument](foundry.documents.TokenDocument.md)): void

  `Internal`

  Register a token as a dependent of this actor.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md)

    The token.

  #### Returns void

### \_unregisterDependentScene

* \_unregisterDependentScene(scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)): void

  `Internal`

  Prune a whole scene from this actor's dependent tokens.

  #### Parameters

  + scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

    The scene.

  #### Returns void

### \_unregisterDependentToken

* \_unregisterDependentToken(token: [TokenDocument](foundry.documents.TokenDocument.md)): void

  `Internal`

  Remove a token from this actor's dependents.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md)

    The token.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_updateDiff](foundry.documents.BaseActor.md#_updatediff)

### allApplicableEffects

* allApplicableEffects(): Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, void>

  Get all ActiveEffects that may apply to this Actor. This will also return all the transferred ActiveEffects on any
  of the Actor's owned Items.

  #### Returns Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, void>

  #### Yields

### applyActiveEffects

* applyActiveEffects(phase: string): void

  Apply any transformations to the Actor data which are caused by ActiveEffects.

  #### Parameters

  + phase: string

    The application phase under which changes are to be applied.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[canUserModify](foundry.documents.BaseActor.md#canusermodify)

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

  Overrides [BaseActor](foundry.documents.BaseActor.md).[clone](foundry.documents.BaseActor.md#clone)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[createEmbeddedDocuments](foundry.documents.BaseActor.md#createembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[delete](foundry.documents.BaseActor.md#delete)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[deleteEmbeddedDocuments](foundry.documents.BaseActor.md#deleteembeddeddocuments)

### getActiveTokens

* getActiveTokens(  
  Â Â Â Â linked?: boolean,  
  Â Â Â Â document?: boolean,  
  ): ([TokenDocument](foundry.documents.TokenDocument.md) | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md))[]

  Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
  If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
  If the Actor is a synthetic token actor, only the exact Token which it represents will be returned.

  #### Parameters

  + `Optional`linked: boolean = false

    Limit results to Tokens which are linked to the Actor. Otherwise, return all
    Tokens even those which are not linked.
  + `Optional`document: boolean = false

    Return the Document instance rather than the PlaceableObject

  #### Returns ([TokenDocument](foundry.documents.TokenDocument.md) | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md))[]

  An array of Token instances in the current Scene which reference this Actor.

### getDependentTokens

* getDependentTokens(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â concreteOnly?: boolean;  
  Â Â Â Â Â Â Â Â linked?: boolean;  
  Â Â Â Â Â Â Â Â scenes?: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)[];  
  Â Â Â Â },  
  ): [TokenDocument](foundry.documents.TokenDocument.md)[]

  Get this actor's dependent tokens.
  If the actor is a synthetic token actor, only the exact Token which it represents will be returned.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â concreteOnly?: boolean;  
    Â Â Â Â linked?: boolean;  
    Â Â Â Â scenes?: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)[];  
    } = {}
    - ##### `Optional`concreteOnly?: boolean

      Limit the results to tokens that exist in their parent scene, excluding
      ephemeral/unpersisted tokens. This will become the default in v15.
    - ##### `Optional`linked?: boolean

      Limit the results to tokens that are linked to the actor.
    - ##### `Optional`scenes?: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)[]

      A single Scene, or list of Scenes to filter by.

  #### Returns [TokenDocument](foundry.documents.TokenDocument.md)[]

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getEmbeddedCollection](foundry.documents.BaseActor.md#getembeddedcollection)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getEmbeddedDocument](foundry.documents.BaseActor.md#getembeddeddocument)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getFieldForProperty](foundry.documents.BaseActor.md#getfieldforproperty)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getFlag](foundry.documents.BaseActor.md#getflag)

### getRollData

* getRollData(): object

  Return a data object which defines the data schema against which dice rolls can be evaluated.
  By default, this is directly the Actor's system data, but systems may extend this to include additional properties.
  If overriding or extending this method to add additional properties, care must be taken not to mutate the original
  object.

  #### Returns object

### getTokenDocument

* getTokenDocument(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: Partial<[DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  ): Promise<[TokenDocument](foundry.documents.TokenDocument.md)>

  Create a new Token document, not yet saved to the database, that represents the Actor.

  #### Parameters

  + `Optional`data: object = {}

    Additional data, such as x, y, rotation, etc. for the created token data
  + `Optional`options: Partial<[DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> = {}

    The options passed to the TokenDocument constructor

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.md)>

  The created TokenDocument instance

### getTokenImages

* getTokenImages(): Promise<string[]>

  Get an Array of Token images which could represent this Actor

  #### Returns Promise<string[]>

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getUserLevel](foundry.documents.BaseActor.md#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[migrateSystemData](foundry.documents.BaseActor.md#migratesystemdata)

### modifyTokenAttribute

* modifyTokenAttribute(  
  Â Â Â Â attribute: string,  
  Â Â Â Â value: number,  
  Â Â Â Â isDelta?: boolean,  
  Â Â Â Â isBar?: boolean,  
  ): Promise<[documents](../modules/foundry.documents.md).Actor>

  Handle how changes to a Token attribute bar are applied to the Actor.
  This allows for game systems to override this behavior and deploy special logic.

  #### Parameters

  + attribute: string

    The attribute path
  + value: number

    The target attribute value
  + isDelta: boolean = false

    Whether the number represents a relative change (true) or an absolute change (false)
  + isBar: boolean = true

    Whether the new value is part of an attribute bar, or just a direct value

  #### Returns Promise<[documents](../modules/foundry.documents.md).Actor>

  The updated Actor document

### onUpdateEffectDurations

* onUpdateEffectDurations(  
  Â Â Â Â effects: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[],  
  Â Â Â Â event: string,  
  Â Â Â Â context?: object,  
  ): Promise<void>

  Workflows to perform following the update of ActiveEffect durations. This method is called for all users.

  #### Parameters

  + effects: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)[]

    Effects whose durations were updated
  + event: string

    The identifier of the event that triggered the duration refresh
  + `Optional`context: object

    Additional contextual information associated with the duration refresh

  #### Returns Promise<void>

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

  #### Inherit Doc

### prepareData

* prepareData(): void

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[reset](foundry.documents.BaseActor.md#reset)

### rollInitiative

* rollInitiative(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â createCombatants?: boolean;  
  Â Â Â Â Â Â Â Â initiativeOptions?: object;  
  Â Â Â Â Â Â Â Â rerollInitiative?: boolean;  
  Â Â Â Â },  
  ): Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null>

  Roll initiative for all Combatants in the currently active Combat encounter which are associated with this Actor.
  If viewing a full Actor document, all Tokens which map to that actor will be targeted for initiative rolls.
  If viewing a synthetic Token actor, only that particular Token will be targeted for an initiative roll.

  #### Parameters

  + options: {  
    Â Â Â Â createCombatants?: boolean;  
    Â Â Â Â initiativeOptions?: object;  
    Â Â Â Â rerollInitiative?: boolean;  
    } = {}

    Configuration for how initiative for this Actor is rolled.

    - ##### `Optional`createCombatants?: boolean

      Create new Combatant entries for Tokens associated with
      this actor.
    - ##### `Optional`initiativeOptions?: object

      Additional options passed to the Combat#rollInitiative method.
    - ##### `Optional`rerollInitiative?: boolean

      Re-roll the initiative for this Actor if it has already
      been rolled.

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null>

  A promise which resolves to the Combat document once rolls
  are complete.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[setFlag](foundry.documents.BaseActor.md#setflag)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[testUserPermission](foundry.documents.BaseActor.md#testuserpermission)

### toggleStatusEffect

* toggleStatusEffect(  
  Â Â Â Â statusId: string,  
  Â Â Â Â options?: { active?: boolean; overlay?: boolean },  
  ): Promise<boolean | [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md) | undefined>

  Toggle a configured status effect for the Actor.

  #### Parameters

  + statusId: string

    A status effect ID defined in CONFIG.statusEffects
  + `Optional`options: { active?: boolean; overlay?: boolean } = {}

    Additional options which modify how the effect is created

    - ##### `Optional`active?: boolean

      Force the effect to be active or inactive regardless of its current state
    - ##### `Optional`overlay?: boolean

      Display the toggled effect as an overlay

  #### Returns Promise<boolean | [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md) | undefined>

  A promise which resolves to one of the following values:
  - ActiveEffect if a new effect need to be created
  - true if was already an existing effect
  - false if an existing effect needed to be removed
  - undefined if no changes need to be made

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[toJSON](foundry.documents.BaseActor.md#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[toObject](foundry.documents.BaseActor.md#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[traverseEmbeddedDocuments](foundry.documents.BaseActor.md#traverseembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[unsetFlag](foundry.documents.BaseActor.md#unsetflag)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[update](foundry.documents.BaseActor.md#update)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[updateEmbeddedDocuments](foundry.documents.BaseActor.md#updateembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[updateSource](foundry.documents.BaseActor.md#updatesource)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[validate](foundry.documents.BaseActor.md#validate)

### `Protected`\_clearData

* \_clearData(): void

  `Protected`

  Clear or replace properties not automatically reset by upstream initialization.

  #### Returns void

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_getInnerModel](foundry.documents.BaseActor.md#_getinnermodel)

### `Protected`\_onEmbeddedDocumentChange

* \_onEmbeddedDocumentChange(): void

  `Protected`

  Additional workflows to perform when any descendant document within this Actor changes.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preDelete](foundry.documents.BaseActor.md#_predelete)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preUpdateSource](foundry.documents.BaseActor.md#_preupdatesource)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_updateCommit](foundry.documents.BaseActor.md#_updatecommit)

### `Protected`\_updateDependentTokens

* \_updateDependentTokens(update?: object, options?: any): void

  `Protected`

  Update the active TokenDocument instances which represent this Actor.

  #### Parameters

  + `Optional`update: object = {}

    The update delta
  + `Optional`options: any = {}

    The database operation that was performed

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_addDataFieldMigration](foundry.documents.BaseActor.md#_adddatafieldmigration)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_addDataFieldShim](foundry.documents.BaseActor.md#_adddatafieldshim)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_addDataFieldShims](foundry.documents.BaseActor.md#_adddatafieldshims)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_clearFieldsRecursively](foundry.documents.BaseActor.md#_clearfieldsrecursively)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_logDataFieldMigration](foundry.documents.BaseActor.md#_logdatafieldmigration)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preCleanData](foundry.documents.BaseActor.md#_precleandata)

### `Static`canUserCreate

* canUserCreate(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[canUserCreate](foundry.documents.BaseActor.md#canusercreate)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[cleanData](foundry.documents.BaseActor.md#cleandata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[create](foundry.documents.BaseActor.md#create)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[createDocuments](foundry.documents.BaseActor.md#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md);  
  Â Â Â Â effects: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.md);  
  Â Â Â Â items: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md);  
  Â Â Â Â prototypeToken: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.md);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md);  
  Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.md);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.md);  
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

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md); Â Â Â Â effects: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.md); Â Â Â Â items: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â name: [StringField](foundry.data.fields.StringField.md); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md); Â Â Â Â prototypeToken: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.md); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md); Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.md); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.md); }

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[defineSchema](foundry.documents.BaseActor.md#defineschema)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[deleteDocuments](foundry.documents.BaseActor.md#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[fromJSON](foundry.documents.BaseActor.md#fromjson)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[fromSource](foundry.documents.BaseActor.md#fromsource)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[get](foundry.documents.BaseActor.md#get)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getCollectionName](foundry.documents.BaseActor.md#getcollectionname)

### `Static`getDefaultArtwork

* getDefaultArtwork(  
  Â Â Â Â actorData: [ActorData](../interfaces/foundry.documents.types.ActorData.md),  
  ): { img: string; texture: { src: string } }

  Determine default artwork based on the provided actor data.

  #### Parameters

  + actorData: [ActorData](../interfaces/foundry.documents.types.ActorData.md)

    The source actor data.

  #### Returns { img: string; texture: { src: string } }

  Candidate actor image and prototype token artwork.

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[getDefaultArtwork](foundry.documents.BaseActor.md#getdefaultartwork)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[migrateData](foundry.documents.BaseActor.md#migratedata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[migrateDataSafe](foundry.documents.BaseActor.md#migratedatasafe)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[shimData](foundry.documents.BaseActor.md#shimdata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[updateDocuments](foundry.documents.BaseActor.md#updatedocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[validateJoint](foundry.documents.BaseActor.md#validatejoint)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_cleanData](foundry.documents.BaseActor.md#_cleandata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_onCreateOperation](foundry.documents.BaseActor.md#_oncreateoperation)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_onDeleteOperation](foundry.documents.BaseActor.md#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_onUpdateOperation](foundry.documents.BaseActor.md#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preCreateOperation](foundry.documents.BaseActor.md#_precreateoperation)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preDeleteOperation](foundry.documents.BaseActor.md#_predeleteoperation)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.md).[\_preUpdateOperation](foundry.documents.BaseActor.md#_preupdateoperation)