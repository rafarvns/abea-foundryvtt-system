---
title: "Actor | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Actor.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Actor](foundry.documents.Actor.html)

# Class Actor

The client-side Actor document which extends the common BaseActor model.

### Hook Events

* [hookEvents.applyCompendiumArt](../functions/hookEvents.applyCompendiumArt.html)
* [hookEvents.modifyTokenAttribute](../functions/hookEvents.modifyTokenAttribute.html)

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Actors](foundry.documents.collections.Actors.html): The world-level collection of Actor documents
* [foundry.applications.sheets.ActorSheet](foundry.applications.sheets.ActorSheetV2.html): The Actor configuration application

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

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Actor))

* [BaseActor](foundry.documents.BaseActor.html)<this>
  + Actor

##### Index

### Constructors

[constructor](foundry.documents.Actor.html#constructor)

### Properties

[\_source](foundry.documents.Actor.html#_source)
[overrides](foundry.documents.Actor.html#overrides)
[parent](foundry.documents.Actor.html#parent)
[statuses](foundry.documents.Actor.html#statuses)
[\_schema](foundry.documents.Actor.html#_schema)
[DEFAULT\_ICON](foundry.documents.Actor.html#default_icon)
[LOCALIZATION\_PREFIXES](foundry.documents.Actor.html#localization_prefixes)
[metadata](foundry.documents.Actor.html#metadata)

### Accessors

[appliedEffects](foundry.documents.Actor.html#appliedeffects)
[compendium](foundry.documents.Actor.html#compendium)
[id](foundry.documents.Actor.html#id)
[inCombat](foundry.documents.Actor.html#incombat)
[inCompendium](foundry.documents.Actor.html#incompendium)
[invalid](foundry.documents.Actor.html#invalid)
[isEmbedded](foundry.documents.Actor.html#isembedded)
[isToken](foundry.documents.Actor.html#istoken)
[itemTypes](foundry.documents.Actor.html#itemtypes)
[schema](foundry.documents.Actor.html#schema)
[temporaryEffects](foundry.documents.Actor.html#temporaryeffects)
[thumbnail](foundry.documents.Actor.html#thumbnail)
[token](foundry.documents.Actor.html#token)
[uuid](foundry.documents.Actor.html#uuid)
[validationFailures](foundry.documents.Actor.html#validationfailures)
[baseDocument](foundry.documents.Actor.html#basedocument)
[collectionName](foundry.documents.Actor.html#collectionname)
[database](foundry.documents.Actor.html#database)
[documentName](foundry.documents.Actor.html#documentname)
[hasTypeData](foundry.documents.Actor.html#hastypedata)
[hierarchy](foundry.documents.Actor.html#hierarchy)
[implementation](foundry.documents.Actor.html#implementation)
[schema](foundry.documents.Actor.html#schema-2)
[TYPES](foundry.documents.Actor.html#types)

### Methods

[\_configure](foundry.documents.Actor.html#_configure)
[\_getParentCollection](foundry.documents.Actor.html#_getparentcollection)
[\_initialize](foundry.documents.Actor.html#_initialize)
[\_initializeSource](foundry.documents.Actor.html#_initializesource)
[\_onCreateDescendantDocuments](foundry.documents.Actor.html#_oncreatedescendantdocuments)
[\_onDeleteDescendantDocuments](foundry.documents.Actor.html#_ondeletedescendantdocuments)
[\_onUpdate](foundry.documents.Actor.html#_onupdate)
[\_onUpdateDescendantDocuments](foundry.documents.Actor.html#_onupdatedescendantdocuments)
[\_preCreate](foundry.documents.Actor.html#_precreate)
[\_preUpdate](foundry.documents.Actor.html#_preupdate)
[\_registerDependentToken](foundry.documents.Actor.html#_registerdependenttoken)
[\_unregisterDependentScene](foundry.documents.Actor.html#_unregisterdependentscene)
[\_unregisterDependentToken](foundry.documents.Actor.html#_unregisterdependenttoken)
[allApplicableEffects](foundry.documents.Actor.html#allapplicableeffects)
[applyActiveEffects](foundry.documents.Actor.html#applyactiveeffects)
[canUserModify](foundry.documents.Actor.html#canusermodify)
[clone](foundry.documents.Actor.html#clone)
[createEmbeddedDocuments](foundry.documents.Actor.html#createembeddeddocuments)
[delete](foundry.documents.Actor.html#delete)
[deleteEmbeddedDocuments](foundry.documents.Actor.html#deleteembeddeddocuments)
[getActiveTokens](foundry.documents.Actor.html#getactivetokens)
[getDependentTokens](foundry.documents.Actor.html#getdependenttokens)
[getEmbeddedCollection](foundry.documents.Actor.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Actor.html#getembeddeddocument)
[getFlag](foundry.documents.Actor.html#getflag)
[getRollData](foundry.documents.Actor.html#getrolldata)
[getTokenDocument](foundry.documents.Actor.html#gettokendocument)
[getTokenImages](foundry.documents.Actor.html#gettokenimages)
[getUserLevel](foundry.documents.Actor.html#getuserlevel)
[migrateSystemData](foundry.documents.Actor.html#migratesystemdata)
[modifyTokenAttribute](foundry.documents.Actor.html#modifytokenattribute)
[prepareData](foundry.documents.Actor.html#preparedata)
[prepareEmbeddedDocuments](foundry.documents.Actor.html#prepareembeddeddocuments)
[reset](foundry.documents.Actor.html#reset)
[rollInitiative](foundry.documents.Actor.html#rollinitiative)
[setFlag](foundry.documents.Actor.html#setflag)
[testUserPermission](foundry.documents.Actor.html#testuserpermission)
[toggleStatusEffect](foundry.documents.Actor.html#togglestatuseffect)
[toJSON](foundry.documents.Actor.html#tojson)
[toObject](foundry.documents.Actor.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Actor.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Actor.html#unsetflag)
[update](foundry.documents.Actor.html#update)
[updateEmbeddedDocuments](foundry.documents.Actor.html#updateembeddeddocuments)
[updateSource](foundry.documents.Actor.html#updatesource)
[validate](foundry.documents.Actor.html#validate)
[\_onCreate](foundry.documents.Actor.html#_oncreate)
[\_onDelete](foundry.documents.Actor.html#_ondelete)
[\_onEmbeddedDocumentChange](foundry.documents.Actor.html#_onembeddeddocumentchange)
[\_preDelete](foundry.documents.Actor.html#_predelete)
[\_updateDependentTokens](foundry.documents.Actor.html#_updatedependenttokens)
[\_addDataFieldMigration](foundry.documents.Actor.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Actor.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Actor.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Actor.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Actor.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Actor.html#_logdatafieldmigration)
[canUserCreate](foundry.documents.Actor.html#canusercreate)
[cleanData](foundry.documents.Actor.html#cleandata)
[create](foundry.documents.Actor.html#create)
[createDocuments](foundry.documents.Actor.html#createdocuments)
[defineSchema](foundry.documents.Actor.html#defineschema)
[deleteDocuments](foundry.documents.Actor.html#deletedocuments)
[fromJSON](foundry.documents.Actor.html#fromjson)
[fromSource](foundry.documents.Actor.html#fromsource)
[get](foundry.documents.Actor.html#get)
[getCollectionName](foundry.documents.Actor.html#getcollectionname)
[getDefaultArtwork](foundry.documents.Actor.html#getdefaultartwork)
[migrateData](foundry.documents.Actor.html#migratedata)
[migrateDataSafe](foundry.documents.Actor.html#migratedatasafe)
[shimData](foundry.documents.Actor.html#shimdata)
[updateDocuments](foundry.documents.Actor.html#updatedocuments)
[validateJoint](foundry.documents.Actor.html#validatejoint)
[\_onCreateOperation](foundry.documents.Actor.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Actor.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.Actor.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Actor.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.Actor.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Actor.html#_preupdateoperation)

## Constructors

### constructor

* new Actor(  
  Â Â Â Â data?: Partial<[ActorData](../interfaces/foundry.documents.types.ActorData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

  #### Parameters

  + `Optional`data: Partial<[ActorData](../interfaces/foundry.documents.types.ActorData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[constructor](foundry.documents.BaseActor.html#constructor)

## Properties

### \_source

\_source: [ActorData](../interfaces/foundry.documents.types.ActorData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_source](foundry.documents.BaseActor.html#_source)

### overrides

overrides: object = ...

An object that tracks which tracks the changes to the data model which were applied by active effects

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseActor](foundry.documents.BaseActor.html).[parent](foundry.documents.BaseActor.html#parent)

### statuses

statuses: Set<string> = ...

The statuses that are applied to this actor by active effects

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_schema](foundry.documents.BaseActor.html#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = CONST.DEFAULT\_TOKEN

The default icon used for newly created Actor documents.

Inherited from [BaseActor](foundry.documents.BaseActor.html).[DEFAULT\_ICON](foundry.documents.BaseActor.html#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseActor](foundry.documents.BaseActor.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseActor.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseActor](foundry.documents.BaseActor.html).[metadata](foundry.documents.BaseActor.html#metadata)

## Accessors

### appliedEffects

* get appliedEffects(): [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)[]

  Retrieve the list of ActiveEffects that are currently applied to this Actor.

  #### Returns [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)[]

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseActor).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

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

* get itemTypes(): Record<string, [documents](../modules/foundry.documents.html).[Item](foundry.documents.Item.html)[]>

  A convenience getter to an object that organizes all embedded Item instances by subtype. The object is cached and
  lazily re-computed as needed.

  #### Returns Record<string, [documents](../modules/foundry.documents.html).[Item](foundry.documents.Item.html)[]>

  #### See

  [foundry.abstract.EmbeddedCollection#documentsByType](foundry.abstract.EmbeddedCollection.html#documentsbytype)

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseActor).schema

### temporaryEffects

* get temporaryEffects(): [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)[]

  An array of ActiveEffect instances which are present on the Actor which have a limited duration.

  #### Returns [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)[]

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### token

* get token(): null | [TokenDocument](foundry.documents.TokenDocument.html)

  Return a reference to the TokenDocument which owns this Actor as a synthetic override

  #### Returns null | [TokenDocument](foundry.documents.TokenDocument.html)

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActor).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseActor).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseActor).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActor).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

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

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseActor).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

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

  Overrides [BaseActor](foundry.documents.BaseActor.html).[\_configure](foundry.documents.BaseActor.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_getParentCollection](foundry.documents.BaseActor.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_initialize](foundry.documents.BaseActor.html#_initialize)

### \_initializeSource

* \_initializeSource(source: any, options?: {}): any

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed
  + options: {} = {}

    Options provided to the model constructor

  #### Returns any

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Overrides [BaseActor](foundry.documents.BaseActor.html).[\_initializeSource](foundry.documents.BaseActor.html#_initializesource)

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

  Overrides [BaseActor](foundry.documents.BaseActor.html).[\_onUpdate](foundry.documents.BaseActor.html#_onupdate)

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

* \_preCreate(data: any, options: any, user: any): Promise<undefined | false>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Actor.html#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<undefined | false>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preCreate](foundry.documents.BaseActor.html#_precreate)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preUpdate](foundry.documents.BaseActor.html#_preupdate)

### \_registerDependentToken

* \_registerDependentToken(token: [TokenDocument](foundry.documents.TokenDocument.html)): void

  `Internal`

  Register a token as a dependent of this actor.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.html)

    The token.

  #### Returns void

### \_unregisterDependentScene

* \_unregisterDependentScene(scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)): void

  `Internal`

  Prune a whole scene from this actor's dependent tokens.

  #### Parameters

  + scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

    The scene.

  #### Returns void

### \_unregisterDependentToken

* \_unregisterDependentToken(token: [TokenDocument](foundry.documents.TokenDocument.html)): void

  `Internal`

  Remove a token from this actor's dependents.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.html)

    The token.

  #### Returns void

### allApplicableEffects

* allApplicableEffects(): Generator<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html), void, void>

  Get all ActiveEffects that may apply to this Actor.
  If CONFIG.ActiveEffect.legacyTransferral is true, this is equivalent to actor.effects.contents.
  If CONFIG.ActiveEffect.legacyTransferral is false, this will also return all the transferred ActiveEffects on any
  of the Actor's owned Items.

  #### Returns Generator<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html), void, void>

  #### Yields

### applyActiveEffects

* applyActiveEffects(): void

  Apply any transformations to the Actor data which are caused by ActiveEffects.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[canUserModify](foundry.documents.BaseActor.html#canusermodify)

### clone

* clone(  
  Â Â Â Â data: any,  
  Â Â Â Â context: any,  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + data: any

    Additional data which overrides current document data at the time of creation
  + context: any

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The cloned Document instance

  Overrides [BaseActor](foundry.documents.BaseActor.html).[clone](foundry.documents.BaseActor.html#clone)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[createEmbeddedDocuments](foundry.documents.BaseActor.html#createembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[delete](foundry.documents.BaseActor.html#delete)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[deleteEmbeddedDocuments](foundry.documents.BaseActor.html#deleteembeddeddocuments)

### getActiveTokens

* getActiveTokens(  
  Â Â Â Â linked?: boolean,  
  Â Â Â Â document?: boolean,  
  ): ([TokenDocument](foundry.documents.TokenDocument.html) | [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html))[]

  Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
  If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
  If the Actor is a synthetic token actor, only the exact Token which it represents will be returned.

  #### Parameters

  + `Optional`linked: boolean = false

    Limit results to Tokens which are linked to the Actor. Otherwise, return all
    Tokens even those which are not linked.
  + `Optional`document: boolean = false

    Return the Document instance rather than the PlaceableObject

  #### Returns ([TokenDocument](foundry.documents.TokenDocument.html) | [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html))[]

  An array of Token instances in the current Scene which reference this Actor.

### getDependentTokens

* getDependentTokens(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â linked?: boolean;  
  Â Â Â Â Â Â Â Â scenes?: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html) | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)[];  
  Â Â Â Â },  
  ): [TokenDocument](foundry.documents.TokenDocument.html)[]

  Get this actor's dependent tokens.
  If the actor is a synthetic token actor, only the exact Token which it represents will be returned.

  #### Parameters

  + `Optional`options: { linked?: boolean; scenes?: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html) | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)[] } = {}
    - ##### `Optional`linked?: boolean

      Limit the results to tokens that are linked to the actor.
    - ##### `Optional`scenes?: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html) | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)[]

      A single Scene, or list of Scenes to filter by.

  #### Returns [TokenDocument](foundry.documents.TokenDocument.html)[]

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getEmbeddedCollection](foundry.documents.BaseActor.html#getembeddedcollection)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getEmbeddedDocument](foundry.documents.BaseActor.html#getembeddeddocument)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getFlag](foundry.documents.BaseActor.html#getflag)

### getRollData

* getRollData(): object

  Return a data object which defines the data schema against which dice rolls can be evaluated.
  By default, this is directly the Actor's system data, but systems may extend this to include additional properties.
  If overriding or extending this method to add additional properties, care must be taken not to mutate the original
  object.

  #### Returns object

### getTokenDocument

* getTokenDocument(data?: object, options?: object): Promise<[TokenDocument](foundry.documents.TokenDocument.html)>

  Create a new Token document, not yet saved to the database, which represents the Actor.

  #### Parameters

  + `Optional`data: object = {}

    Additional data, such as x, y, rotation, etc. for the created token data
  + `Optional`options: object = {}

    The options passed to the TokenDocument constructor

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.html)>

  The created TokenDocument instance

### getTokenImages

* getTokenImages(): Promise<string[]>

  Get an Array of Token images which could represent this Actor

  #### Returns Promise<string[]>

### getUserLevel

* getUserLevel(user?: [BaseUser](foundry.documents.BaseUser.html)): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.html)

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getUserLevel](foundry.documents.BaseActor.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[migrateSystemData](foundry.documents.BaseActor.html#migratesystemdata)

### modifyTokenAttribute

* modifyTokenAttribute(  
  Â Â Â Â attribute: string,  
  Â Â Â Â value: number,  
  Â Â Â Â isDelta?: boolean,  
  Â Â Â Â isBar?: boolean,  
  ): Promise<[documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)>

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

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)>

  The updated Actor document

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[reset](foundry.documents.BaseActor.html#reset)

### rollInitiative

* rollInitiative(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â createCombatants?: boolean;  
  Â Â Â Â Â Â Â Â initiativeOptions?: object;  
  Â Â Â Â Â Â Â Â rerollInitiative?: boolean;  
  Â Â Â Â },  
  ): Promise<null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

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

  #### Returns Promise<null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  A promise which resolves to the Combat document once rolls
  are complete.

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[setFlag](foundry.documents.BaseActor.html#setflag)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[testUserPermission](foundry.documents.BaseActor.html#testuserpermission)

### toggleStatusEffect

* toggleStatusEffect(  
  Â Â Â Â statusId: string,  
  Â Â Â Â options?: { active?: boolean; overlay?: boolean },  
  ): Promise<undefined | boolean | [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

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

  #### Returns Promise<undefined | boolean | [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[toJSON](foundry.documents.BaseActor.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[toObject](foundry.documents.BaseActor.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[traverseEmbeddedDocuments](foundry.documents.BaseActor.html#traverseembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[unsetFlag](foundry.documents.BaseActor.html#unsetflag)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[update](foundry.documents.BaseActor.html#update)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[updateEmbeddedDocuments](foundry.documents.BaseActor.html#updateembeddeddocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[updateSource](foundry.documents.BaseActor.html#updatesource)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[validate](foundry.documents.BaseActor.html#validate)

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_onCreate](foundry.documents.BaseActor.html#_oncreate)

### `Protected`\_onDelete

* \_onDelete(options: object, userId: string): void

  `Protected`

  Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_onDelete](foundry.documents.BaseActor.html#_ondelete)

### `Protected`\_onEmbeddedDocumentChange

* \_onEmbeddedDocumentChange(): void

  `Protected`

  Additional workflows to perform when any descendant document within this Actor changes.

  #### Returns void

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preDelete](foundry.documents.BaseActor.html#_predelete)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_addDataFieldMigration](foundry.documents.BaseActor.html#_adddatafieldmigration)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_addDataFieldShim](foundry.documents.BaseActor.html#_adddatafieldshim)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_addDataFieldShims](foundry.documents.BaseActor.html#_adddatafieldshims)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_clearFieldsRecursively](foundry.documents.BaseActor.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_initializationOrder](foundry.documents.BaseActor.html#_initializationorder)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_logDataFieldMigration](foundry.documents.BaseActor.html#_logdatafieldmigration)

### `Static`canUserCreate

* canUserCreate(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[canUserCreate](foundry.documents.BaseActor.html#canusercreate)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[cleanData](foundry.documents.BaseActor.html#cleandata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[create](foundry.documents.BaseActor.html#create)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[createDocuments](foundry.documents.BaseActor.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â effects: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â items: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â prototypeToken: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Actor.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â effects: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â items: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â prototypeToken: [EmbeddedDataField](foundry.data.fields.EmbeddedDataField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html); }

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[defineSchema](foundry.documents.BaseActor.html#defineschema)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[deleteDocuments](foundry.documents.BaseActor.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[fromJSON](foundry.documents.BaseActor.html#fromjson)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[fromSource](foundry.documents.BaseActor.html#fromsource)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[get](foundry.documents.BaseActor.html#get)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getCollectionName](foundry.documents.BaseActor.html#getcollectionname)

### `Static`getDefaultArtwork

* getDefaultArtwork(  
  Â Â Â Â actorData: [ActorData](../interfaces/foundry.documents.types.ActorData.html),  
  ): { img: string; texture: { src: string } }

  Determine default artwork based on the provided actor data.

  #### Parameters

  + actorData: [ActorData](../interfaces/foundry.documents.types.ActorData.html)

    The source actor data.

  #### Returns { img: string; texture: { src: string } }

  Candidate actor image and prototype token artwork.

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[getDefaultArtwork](foundry.documents.BaseActor.html#getdefaultartwork)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[migrateData](foundry.documents.BaseActor.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[migrateDataSafe](foundry.documents.BaseActor.html#migratedatasafe)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[shimData](foundry.documents.BaseActor.html#shimdata)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[updateDocuments](foundry.documents.BaseActor.html#updatedocuments)

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

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[validateJoint](foundry.documents.BaseActor.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Actor.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_onCreateOperation](foundry.documents.BaseActor.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Actor.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_onDeleteOperation](foundry.documents.BaseActor.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.Actor.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_onUpdateOperation](foundry.documents.BaseActor.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Actor.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Actor.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preCreateOperation](foundry.documents.BaseActor.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Actor.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Actor.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preDeleteOperation](foundry.documents.BaseActor.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Actor.html#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the update operation

  #### Returns Promise<boolean | void>

  Return false to cancel the update operation entirely

  Inherited from [BaseActor](foundry.documents.BaseActor.html).[\_preUpdateOperation](foundry.documents.BaseActor.html#_preupdateoperation)