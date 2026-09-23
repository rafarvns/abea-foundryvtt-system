---
title: "Combat | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Combat.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Combat](foundry.documents.Combat.html)

# Class Combat

The client-side Combat document which extends the common BaseCombat model.

### Hook Events

* [hookEvents.combatRound](../functions/hookEvents.combatRound.html)
* [hookEvents.combatStart](../functions/hookEvents.combatStart.html)
* [hookEvents.combatTurn](../functions/hookEvents.combatTurn.html)
* [hookEvents.combatTurnChange](../functions/hookEvents.combatTurnChange.html)

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.CombatEncounters](foundry.documents.collections.CombatEncounters.html): The world-level collection of Combat
  documents
* [Combatant](foundry.documents.Combatant.html): The Combatant embedded document which exists within a Combat
  document
* [foundry.applications.sidebar.tabs.CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html): The CombatTracker application
* [foundry.applications.apps.CombatTrackerConfig](foundry.applications.apps.CombatTrackerConfig.html): The CombatTracker configuration
  application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Combat))

* [BaseCombat](foundry.documents.BaseCombat.html)<this>
  + Combat

##### Index

### Constructors

[constructor](foundry.documents.Combat.html#constructor)

### Properties

[\_source](foundry.documents.Combat.html#_source)
[current](foundry.documents.Combat.html#current)
[debounceSetup](foundry.documents.Combat.html#debouncesetup)
[parent](foundry.documents.Combat.html#parent)
[previous](foundry.documents.Combat.html#previous)
[turns](foundry.documents.Combat.html#turns)
[\_schema](foundry.documents.Combat.html#_schema)
[CONFIG\_SETTING](foundry.documents.Combat.html#config_setting)
[LOCALIZATION\_PREFIXES](foundry.documents.Combat.html#localization_prefixes)
[metadata](foundry.documents.Combat.html#metadata)

### Accessors

[combatant](foundry.documents.Combat.html#combatant)
[compendium](foundry.documents.Combat.html#compendium)
[id](foundry.documents.Combat.html#id)
[inCompendium](foundry.documents.Combat.html#incompendium)
[invalid](foundry.documents.Combat.html#invalid)
[isActive](foundry.documents.Combat.html#isactive)
[isEmbedded](foundry.documents.Combat.html#isembedded)
[isView](foundry.documents.Combat.html#isview)
[nextCombatant](foundry.documents.Combat.html#nextcombatant)
[schema](foundry.documents.Combat.html#schema)
[settings](foundry.documents.Combat.html#settings)
[started](foundry.documents.Combat.html#started)
[uuid](foundry.documents.Combat.html#uuid)
[validationFailures](foundry.documents.Combat.html#validationfailures)
[visible](foundry.documents.Combat.html#visible)
[baseDocument](foundry.documents.Combat.html#basedocument)
[collectionName](foundry.documents.Combat.html#collectionname)
[database](foundry.documents.Combat.html#database)
[documentName](foundry.documents.Combat.html#documentname)
[hasTypeData](foundry.documents.Combat.html#hastypedata)
[hierarchy](foundry.documents.Combat.html#hierarchy)
[implementation](foundry.documents.Combat.html#implementation)
[schema](foundry.documents.Combat.html#schema-2)
[TYPES](foundry.documents.Combat.html#types)

### Methods

[\_configure](foundry.documents.Combat.html#_configure)
[\_getParentCollection](foundry.documents.Combat.html#_getparentcollection)
[\_onCreate](foundry.documents.Combat.html#_oncreate)
[\_onCreateDescendantDocuments](foundry.documents.Combat.html#_oncreatedescendantdocuments)
[\_onDelete](foundry.documents.Combat.html#_ondelete)
[\_onDeleteDescendantDocuments](foundry.documents.Combat.html#_ondeletedescendantdocuments)
[\_onUpdate](foundry.documents.Combat.html#_onupdate)
[\_onUpdateDescendantDocuments](foundry.documents.Combat.html#_onupdatedescendantdocuments)
[\_preUpdate](foundry.documents.Combat.html#_preupdate)
[activate](foundry.documents.Combat.html#activate)
[canUserModify](foundry.documents.Combat.html#canusermodify)
[clearMovementHistories](foundry.documents.Combat.html#clearmovementhistories)
[clone](foundry.documents.Combat.html#clone)
[createEmbeddedDocuments](foundry.documents.Combat.html#createembeddeddocuments)
[delete](foundry.documents.Combat.html#delete)
[deleteEmbeddedDocuments](foundry.documents.Combat.html#deleteembeddeddocuments)
[endCombat](foundry.documents.Combat.html#endcombat)
[getCombatantsByActor](foundry.documents.Combat.html#getcombatantsbyactor)
[getCombatantsByToken](foundry.documents.Combat.html#getcombatantsbytoken)
[getEmbeddedCollection](foundry.documents.Combat.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Combat.html#getembeddeddocument)
[getFlag](foundry.documents.Combat.html#getflag)
[getTimeDelta](foundry.documents.Combat.html#gettimedelta)
[getUserLevel](foundry.documents.Combat.html#getuserlevel)
[migrateSystemData](foundry.documents.Combat.html#migratesystemdata)
[nextRound](foundry.documents.Combat.html#nextround)
[nextTurn](foundry.documents.Combat.html#nextturn)
[prepareDerivedData](foundry.documents.Combat.html#preparederiveddata)
[previousRound](foundry.documents.Combat.html#previousround)
[previousTurn](foundry.documents.Combat.html#previousturn)
[reset](foundry.documents.Combat.html#reset)
[resetAll](foundry.documents.Combat.html#resetall)
[rollAll](foundry.documents.Combat.html#rollall)
[rollInitiative](foundry.documents.Combat.html#rollinitiative)
[rollNPC](foundry.documents.Combat.html#rollnpc)
[setFlag](foundry.documents.Combat.html#setflag)
[setInitiative](foundry.documents.Combat.html#setinitiative)
[setupTurns](foundry.documents.Combat.html#setupturns)
[startCombat](foundry.documents.Combat.html#startcombat)
[testUserPermission](foundry.documents.Combat.html#testuserpermission)
[toggleSceneLink](foundry.documents.Combat.html#togglescenelink)
[toJSON](foundry.documents.Combat.html#tojson)
[toObject](foundry.documents.Combat.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Combat.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Combat.html#unsetflag)
[update](foundry.documents.Combat.html#update)
[updateCombatantActors](foundry.documents.Combat.html#updatecombatantactors)
[updateEmbeddedDocuments](foundry.documents.Combat.html#updateembeddeddocuments)
[updateSource](foundry.documents.Combat.html#updatesource)
[validate](foundry.documents.Combat.html#validate)
[\_canChangeRound](foundry.documents.Combat.html#_canchangeround)
[\_canChangeTurn](foundry.documents.Combat.html#_canchangeturn)
[\_clearMovementHistoryOnExit](foundry.documents.Combat.html#_clearmovementhistoryonexit)
[\_clearMovementHistoryOnStartTurn](foundry.documents.Combat.html#_clearmovementhistoryonstartturn)
[\_getCurrentState](foundry.documents.Combat.html#_getcurrentstate)
[\_initialize](foundry.documents.Combat.html#_initialize)
[\_initializeSource](foundry.documents.Combat.html#_initializesource)
[\_manageTurnEvents](foundry.documents.Combat.html#_manageturnevents)
[\_onEndRound](foundry.documents.Combat.html#_onendround)
[\_onEndTurn](foundry.documents.Combat.html#_onendturn)
[\_onEnter](foundry.documents.Combat.html#_onenter)
[\_onExit](foundry.documents.Combat.html#_onexit)
[\_onStartRound](foundry.documents.Combat.html#_onstartround)
[\_onStartTurn](foundry.documents.Combat.html#_onstartturn)
[\_playCombatSound](foundry.documents.Combat.html#_playcombatsound)
[\_preCreate](foundry.documents.Combat.html#_precreate)
[\_preDelete](foundry.documents.Combat.html#_predelete)
[\_refreshTokenHUD](foundry.documents.Combat.html#_refreshtokenhud)
[\_sortCombatants](foundry.documents.Combat.html#_sortcombatants)
[\_updateTurnMarkers](foundry.documents.Combat.html#_updateturnmarkers)
[\_addDataFieldMigration](foundry.documents.Combat.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Combat.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Combat.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Combat.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Combat.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Combat.html#_logdatafieldmigration)
[\_onDeleteTokens](foundry.documents.Combat.html#_ondeletetokens)
[canUserCreate](foundry.documents.Combat.html#canusercreate)
[cleanData](foundry.documents.Combat.html#cleandata)
[create](foundry.documents.Combat.html#create)
[createDocuments](foundry.documents.Combat.html#createdocuments)
[defineSchema](foundry.documents.Combat.html#defineschema)
[deleteDocuments](foundry.documents.Combat.html#deletedocuments)
[fromJSON](foundry.documents.Combat.html#fromjson)
[fromSource](foundry.documents.Combat.html#fromsource)
[get](foundry.documents.Combat.html#get)
[getCollectionName](foundry.documents.Combat.html#getcollectionname)
[migrateData](foundry.documents.Combat.html#migratedata)
[migrateDataSafe](foundry.documents.Combat.html#migratedatasafe)
[shimData](foundry.documents.Combat.html#shimdata)
[updateDocuments](foundry.documents.Combat.html#updatedocuments)
[validateJoint](foundry.documents.Combat.html#validatejoint)
[\_onCreateOperation](foundry.documents.Combat.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Combat.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.Combat.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Combat.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.Combat.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Combat.html#_preupdateoperation)

## Constructors

### constructor

* new Combat(  
  Â Â Â Â data?: Partial<[CombatData](../interfaces/foundry.documents.types.CombatData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

  #### Parameters

  + `Optional`data: Partial<[CombatData](../interfaces/foundry.documents.types.CombatData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[constructor](foundry.documents.BaseCombat.html#constructor)

## Properties

### \_source

\_source: [CombatData](../interfaces/foundry.documents.types.CombatData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_source](foundry.documents.BaseCombat.html#_source)

### current

current: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.html) = ...

Record the current round, turn, and tokenId to understand changes in the encounter state

### debounceSetup

debounceSetup: Function = ...

Debounce changes to the composition of the Combat encounter to de-duplicate multiple concurrent Combatant changes.
If this is the currently viewed encounter, re-render the CombatTracker application.

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[parent](foundry.documents.BaseCombat.html#parent)

### previous

previous: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.html) = undefined

Track the previous round, turn, and tokenId to understand changes in the encounter state

### turns

turns: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[] = ...

Track the sorted turn order of this combat encounter

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_schema](foundry.documents.BaseCombat.html#_schema)

### `Static`CONFIG\_SETTING

CONFIG\_SETTING: string = "combatTrackerConfig"

The configuration setting used to record Combat preferences

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseCombat.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[metadata](foundry.documents.BaseCombat.html#metadata)

## Accessors

### combatant

* get combatant(): null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

  Get the Combatant who has the current turn.

  #### Returns null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseCombat).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BaseCombat).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCombat).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCombat).invalid

### isActive

* get isActive(): boolean

  Is this combat active in the current scene?

  #### Returns boolean

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCombat).isEmbedded

### isView

* get isView(): boolean

  Is this Combat currently being viewed?

  #### Returns boolean

### nextCombatant

* get nextCombatant(): [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

  Get the Combatant who has the next turn.

  #### Returns [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseCombat).schema

### settings

* get settings(): object

  Return the object of settings which modify the Combat Tracker behavior

  #### Returns object

### started

* get started(): boolean

  Has this combat encounter been started?

  #### Returns boolean

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCombat).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseCombat).validationFailures

### visible

* get visible(): boolean

  #### Returns boolean

  #### Inherit Doc

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseCombat).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCombat).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BaseCombat).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCombat).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCombat).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseCombat).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseCombat).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseCombat).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseCombat).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_configure](foundry.documents.BaseCombat.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_getParentCollection](foundry.documents.BaseCombat.html#_getparentcollection)

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

  Overrides [BaseCombat](foundry.documents.BaseCombat.html).[\_onCreate](foundry.documents.BaseCombat.html#_oncreate)

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

  Overrides [BaseCombat](foundry.documents.BaseCombat.html).[\_onDelete](foundry.documents.BaseCombat.html#_ondelete)

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

  Overrides [BaseCombat](foundry.documents.BaseCombat.html).[\_onUpdate](foundry.documents.BaseCombat.html#_onupdate)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preUpdate](foundry.documents.BaseCombat.html#_preupdate)

### activate

* activate(options?: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  A convenience alias for updating this document to become active.

  #### Parameters

  + `Optional`options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)>

    Additional context to customize the update workflow

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[canUserModify](foundry.documents.BaseCombat.html#canusermodify)

### clearMovementHistories

* clearMovementHistories(): Promise<void>

  Clear the movement history of all Tokens within this Combat.

  #### Returns Promise<void>
* clearMovementHistories(combatants: Iterable<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)>): Promise<void>

  Clear the movement history of the Combatants' Tokens.

  #### Parameters

  + combatants: Iterable<[documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)>

    The combatants whose movement history is cleared

  #### Returns Promise<void>

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [DataModelConstructionOptions](../interfaces/foundry.abstract.types.DataModelConstructionOptions.html) & Pick<  
  Â Â Â Â Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html),  
  Â Â Â Â Â Â Â Â "strict"  
  Â Â Â Â Â Â Â Â | "fallback"  
  Â Â Â Â Â Â Â Â | "dropInvalidEmbedded",  
  Â Â Â Â > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.html) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.html),  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [DataModelConstructionOptions](../interfaces/foundry.abstract.types.DataModelConstructionOptions.html) & Pick<  
    Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html),  
    Â Â Â Â "strict"  
    Â Â Â Â | "fallback"  
    Â Â Â Â | "dropInvalidEmbedded",  
    > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.html) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.html) = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The cloned Document instance

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[clone](foundry.documents.BaseCombat.html#clone)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[createEmbeddedDocuments](foundry.documents.BaseCombat.html#createembeddeddocuments)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[delete](foundry.documents.BaseCombat.html#delete)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[deleteEmbeddedDocuments](foundry.documents.BaseCombat.html#deleteembeddeddocuments)

### endCombat

* endCombat(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### getCombatantsByActor

* getCombatantsByActor(actor: string | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)): [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

  Get a Combatant that represents the given Actor or Actor ID.

  #### Parameters

  + actor: string | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    An Actor ID or an Actor instance

  #### Returns [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

### getCombatantsByToken

* getCombatantsByToken(token: string | [TokenDocument](foundry.documents.TokenDocument.html)): [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

  Get a Combatant using its Token id

  #### Parameters

  + token: string | [TokenDocument](foundry.documents.TokenDocument.html)

    A Token ID or a TokenDocument instance

  #### Returns [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

  An array of Combatants which represent the Token

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[getEmbeddedCollection](foundry.documents.BaseCombat.html#getembeddedcollection)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[getEmbeddedDocument](foundry.documents.BaseCombat.html#getembeddeddocument)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[getFlag](foundry.documents.BaseCombat.html#getflag)

### getTimeDelta

* getTimeDelta(  
  Â Â Â Â fromRound: number,  
  Â Â Â Â fromTurn: null | number,  
  Â Â Â Â toRound: number,  
  Â Â Â Â toTurn: null | number,  
  ): number

  Calculate the time delta between two turns.

  #### Parameters

  + fromRound: number

    The from-round
  + fromTurn: null | number

    The from-turn
  + toRound: number

    The to-round
  + toTurn: null | number

    The to-turn

  #### Returns number

  The time delta

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[getUserLevel](foundry.documents.BaseCombat.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[migrateSystemData](foundry.documents.BaseCombat.html#migratesystemdata)

### nextRound

* nextRound(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Advance the combat to the next round

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### nextTurn

* nextTurn(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Advance the combat to the next turn

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### prepareDerivedData

* prepareDerivedData(): void

  #### Returns void

### previousRound

* previousRound(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Rewind the combat to the previous round

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### previousTurn

* previousTurn(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Rewind the combat to the previous turn

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[reset](foundry.documents.BaseCombat.html#reset)

### resetAll

* resetAll(options?: { updateTurn?: boolean }): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Reset all combatant initiative scores.

  #### Parameters

  + `Optional`options: { updateTurn?: boolean } = {}

    Additional options

    - ##### `Optional`updateTurn?: boolean

      Update the Combat turn after resetting initiative scores to
      keep the turn on the same Combatant.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### rollAll

* rollAll(options?: object): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Roll initiative for all combatants which have not already rolled

  #### Parameters

  + `Optional`options: object

    Additional options forwarded to the Combat.rollInitiative method

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### rollInitiative

* rollInitiative(  
  Â Â Â Â ids: string | string[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â formula?: null | string;  
  Â Â Â Â Â Â Â Â messageOptions?: object;  
  Â Â Â Â Â Â Â Â updateTurn?: boolean;  
  Â Â Â Â },  
  ): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Roll initiative for one or multiple Combatants within the Combat document

  #### Parameters

  + ids: string | string[]

    A Combatant id or Array of ids for which to roll
  + `Optional`options: { formula?: null | string; messageOptions?: object; updateTurn?: boolean } = {}

    Additional options which modify how initiative rolls are created or presented.

    - ##### `Optional`formula?: null | string

      A non-default initiative formula to roll. Otherwise, the system
      default is used.
    - ##### `Optional`messageOptions?: object

      Additional options with which to customize created Chat Messages
    - ##### `Optional`updateTurn?: boolean

      Update the Combat turn after adding new initiative scores to
      keep the turn on the same Combatant.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  A promise which resolves to the updated Combat document once updates are complete.

### rollNPC

* rollNPC(options?: object): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Roll initiative for all non-player actors who have not already rolled

  #### Parameters

  + `Optional`options: object = {}

    Additional options forwarded to the Combat.rollInitiative method

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[setFlag](foundry.documents.BaseCombat.html#setflag)

### setInitiative

* setInitiative(id: string, value: number): Promise<void>

  Assign initiative for a single Combatant within the Combat encounter.
  Update the Combat turn order to maintain the same combatant as the current turn.

  #### Parameters

  + id: string

    The combatant ID for which to set initiative
  + value: number

    A specific initiative value to set

  #### Returns Promise<void>

### setupTurns

* setupTurns(): [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

  Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.

  #### Returns [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

### startCombat

* startCombat(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Begin the combat encounter, advancing to round 1 and turn 1

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[testUserPermission](foundry.documents.BaseCombat.html#testuserpermission)

### toggleSceneLink

* toggleSceneLink(): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  Toggle whether this combat is linked to the scene or globally available.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[toJSON](foundry.documents.BaseCombat.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[toObject](foundry.documents.BaseCombat.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[traverseEmbeddedDocuments](foundry.documents.BaseCombat.html#traverseembeddeddocuments)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[unsetFlag](foundry.documents.BaseCombat.html#unsetflag)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[update](foundry.documents.BaseCombat.html#update)

### updateCombatantActors

* updateCombatantActors(): void

  Update active effect durations for all actors present in this Combat encounter.

  #### Returns void

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[updateEmbeddedDocuments](foundry.documents.BaseCombat.html#updateembeddeddocuments)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[updateSource](foundry.documents.BaseCombat.html#updatesource)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[validate](foundry.documents.BaseCombat.html#validate)

### `Protected`\_canChangeRound

* \_canChangeRound(user: User): boolean

  `Protected`

  Can a certain User change the Combat round?

  #### Parameters

  + user: User

    The user attempting to change the round

  #### Returns boolean

  Is the user allowed to change the round?

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_canChangeRound](foundry.documents.BaseCombat.html#_canchangeround)

### `Protected`\_canChangeTurn

* \_canChangeTurn(user: User): boolean

  `Protected`

  Can a certain User change the Combat turn?

  #### Parameters

  + user: User

    The user attempting to change the turn

  #### Returns boolean

  Is the user allowed to change the turn?

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_canChangeTurn](foundry.documents.BaseCombat.html#_canchangeturn)

### `Protected`\_clearMovementHistoryOnExit

* \_clearMovementHistoryOnExit(combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)): Promise<void>

  `Protected`

  Called after [Combat#\_onExit](foundry.documents.Combat.html#_onexit) and takes care of clearing the movement history of the
  Combatant's Token.
  This function is not called for Combatants that don't have a Token.
  The default implementation clears the movement history always.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant that exited the Combat

  #### Returns Promise<void>

### `Protected`\_clearMovementHistoryOnStartTurn

* \_clearMovementHistoryOnStartTurn(  
  Â Â Â Â combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html),  
  Â Â Â Â context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html),  
  ): Promise<void>

  `Protected`

  Called after [Combat#\_onStartTurn](foundry.documents.Combat.html#_onstartturn) and takes care of clearing the movement history of the
  Combatant's Token.
  This function is not called for Combatants that don't have a Token.
  The default implementation clears the movement history always.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant whose turn just started
  + context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html)

    The context of the turn that just started

  #### Returns Promise<void>

### `Protected`\_getCurrentState

* \_getCurrentState(combatant?: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)): [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.html)

  `Protected`

  Get the current history state of the Combat encounter.

  #### Parameters

  + `Optional`combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The new active combatant

  #### Returns [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.html)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_initialize](foundry.documents.BaseCombat.html#_initialize)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_initializeSource](foundry.documents.BaseCombat.html#_initializesource)

### `Protected`\_manageTurnEvents

* \_manageTurnEvents(): Promise<void>

  `Protected`

  Manage the execution of Combat lifecycle events.
  This method orchestrates the execution of four events in the following order, as applicable:

  1. End Turn
  2. End Round
  3. Begin Round
  4. Begin Turn
     Each lifecycle event is an async method, and each is awaited before proceeding.

  #### Returns Promise<void>

### `Protected`\_onEndRound

* \_onEndRound(context: [CombatRoundEventContext](../types/foundry.documents.types.CombatRoundEventContext.html)): Promise<void>

  `Protected`

  A workflow that occurs at the end of each Combat Round.
  This workflow occurs after the Combat document update.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + context: [CombatRoundEventContext](../types/foundry.documents.types.CombatRoundEventContext.html)

    The context of the round that just ended

  #### Returns Promise<void>

### `Protected`\_onEndTurn

* \_onEndTurn(  
  Â Â Â Â combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html),  
  Â Â Â Â context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html),  
  ): Promise<void>

  `Protected`

  A workflow that occurs at the end of each Combat Turn.
  This workflow occurs after the Combat document update.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant whose turn just ended
  + context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html)

    The context of the turn that just ended

  #### Returns Promise<void>

### `Protected`\_onEnter

* \_onEnter(combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)): Promise<void>

  `Protected`

  This workflow occurs after a Combatant is added to the Combat.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant that entered the Combat

  #### Returns Promise<void>

### `Protected`\_onExit

* \_onExit(combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)): Promise<void>

  `Protected`

  This workflow occurs after a Combatant is removed from the Combat.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant that exited the Combat

  #### Returns Promise<void>

### `Protected`\_onStartRound

* \_onStartRound(context: [CombatRoundEventContext](../types/foundry.documents.types.CombatRoundEventContext.html)): Promise<void>

  `Protected`

  A workflow that occurs at the start of each Combat Round.
  This workflow occurs after the Combat document update.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + context: [CombatRoundEventContext](../types/foundry.documents.types.CombatRoundEventContext.html)

    The context of the round that just started

  #### Returns Promise<void>

### `Protected`\_onStartTurn

* \_onStartTurn(  
  Â Â Â Â combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html),  
  Â Â Â Â context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html),  
  ): Promise<void>

  `Protected`

  A workflow that occurs at the start of each Combat Turn.
  This workflow occurs after the Combat document update.
  This can be overridden to implement system-specific combat tracking behaviors.
  The default implementation of this function does nothing.
  This method only executes for one designated GM user. If no GM users are present this method will not be called.

  #### Parameters

  + combatant: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    The Combatant whose turn just started
  + context: [CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.html)

    The context of the turn that just started

  #### Returns Promise<void>

### `Protected`\_playCombatSound

* \_playCombatSound(announcement: string): void

  `Protected`

  Loads the registered Combat Theme (if any) and plays the requested type of sound.
  If multiple exist for that type, one is chosen at random.

  #### Parameters

  + announcement: string

    The announcement that should be played: "startEncounter", "nextUp", or "yourTurn".

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

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Combat.html#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preCreate](foundry.documents.BaseCombat.html#_precreate)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preDelete](foundry.documents.BaseCombat.html#_predelete)

### `Protected`\_refreshTokenHUD

* \_refreshTokenHUD(documents: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]): void

  `Protected`

  Refresh the Token HUD under certain circumstances.

  #### Parameters

  + documents: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)[]

    A list of Combatant documents that were added or removed.

  #### Returns void

### `Protected`\_sortCombatants

* \_sortCombatants(a: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html), b: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)): number

  `Protected`

  Define how the array of Combatants is sorted in the displayed list of the tracker.
  This method can be overridden by a system or module which needs to display combatants in an alternative order.
  The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.

  #### Parameters

  + a: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    Some combatant
  + b: [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

    Some other combatant

  #### Returns number

### `Protected`\_updateTurnMarkers

* \_updateTurnMarkers(): void

  `Protected`

  Update display of Token combat turn markers.

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_addDataFieldMigration](foundry.documents.BaseCombat.html#_adddatafieldmigration)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_addDataFieldShim](foundry.documents.BaseCombat.html#_adddatafieldshim)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_addDataFieldShims](foundry.documents.BaseCombat.html#_adddatafieldshims)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_clearFieldsRecursively](foundry.documents.BaseCombat.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_initializationOrder](foundry.documents.BaseCombat.html#_initializationorder)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_logDataFieldMigration](foundry.documents.BaseCombat.html#_logdatafieldmigration)

### `Static`\_onDeleteTokens

* \_onDeleteTokens(  
  Â Â Â Â tokens: [TokenDocument](foundry.documents.TokenDocument.html)[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  ): void

  `Internal`

  When Tokens are deleted, handle actions to update/delete Combatants of these Tokens.

  #### Parameters

  + tokens: [TokenDocument](foundry.documents.TokenDocument.html)[]

    An array of Tokens which have been deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    The operation that deleted the Tokens
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User that deleted the Tokens

  #### Returns void

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[canUserCreate](foundry.documents.BaseCombat.html#canusercreate)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[cleanData](foundry.documents.BaseCombat.html#cleandata)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[create](foundry.documents.BaseCombat.html#create)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[createDocuments](foundry.documents.BaseCombat.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â combatants: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â groups: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â round: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â scene: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html);  
  Â Â Â Â turn: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Combat.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â combatants: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â groups: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â round: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â scene: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html); Â Â Â Â turn: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html); }

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[defineSchema](foundry.documents.BaseCombat.html#defineschema)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[deleteDocuments](foundry.documents.BaseCombat.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[fromJSON](foundry.documents.BaseCombat.html#fromjson)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[fromSource](foundry.documents.BaseCombat.html#fromsource)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[get](foundry.documents.BaseCombat.html#get)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[getCollectionName](foundry.documents.BaseCombat.html#getcollectionname)

### `Static`migrateData

* migrateData(source: object): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[migrateData](foundry.documents.BaseCombat.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[migrateDataSafe](foundry.documents.BaseCombat.html#migratedatasafe)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[shimData](foundry.documents.BaseCombat.html#shimdata)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[updateDocuments](foundry.documents.BaseCombat.html#updatedocuments)

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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[validateJoint](foundry.documents.BaseCombat.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Combat.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_onCreateOperation](foundry.documents.BaseCombat.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Combat.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_onDeleteOperation](foundry.documents.BaseCombat.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.Combat.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_onUpdateOperation](foundry.documents.BaseCombat.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Combat.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Combat.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preCreateOperation](foundry.documents.BaseCombat.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Combat.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Combat.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preDeleteOperation](foundry.documents.BaseCombat.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Combat.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BaseCombat](foundry.documents.BaseCombat.html).[\_preUpdateOperation](foundry.documents.BaseCombat.html#_preupdateoperation)