---
title: "ActiveEffect | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.ActiveEffect.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [ActiveEffect](foundry.documents.ActiveEffect.html)

# Class ActiveEffect

The client-side ActiveEffect document which extends the common BaseActiveEffect model.
Each ActiveEffect belongs to the effects collection of its parent Document.
Each ActiveEffect contains a ActiveEffectData object which provides its source data.

### Hook Events

* [hookEvents.applyActiveEffect](../functions/hookEvents.applyActiveEffect.html)

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.Actor](foundry.documents.Actor.html): The Actor document which contains ActiveEffect embedded documents
* [foundry.documents.Item](foundry.documents.Item.html): The Item document which contains ActiveEffect embedded documents

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.ActiveEffect))

* [BaseActiveEffect](foundry.documents.BaseActiveEffect.html)<this>
  + ActiveEffect

##### Index

### Constructors

[constructor](foundry.documents.ActiveEffect.html#constructor)

### Properties

[\_source](foundry.documents.ActiveEffect.html#_source)
[parent](foundry.documents.ActiveEffect.html#parent)
[\_schema](foundry.documents.ActiveEffect.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.documents.ActiveEffect.html#localization_prefixes)
[metadata](foundry.documents.ActiveEffect.html#metadata)

### Accessors

[active](foundry.documents.ActiveEffect.html#active)
[compendium](foundry.documents.ActiveEffect.html#compendium)
[id](foundry.documents.ActiveEffect.html#id)
[inCompendium](foundry.documents.ActiveEffect.html#incompendium)
[invalid](foundry.documents.ActiveEffect.html#invalid)
[isEmbedded](foundry.documents.ActiveEffect.html#isembedded)
[isSuppressed](foundry.documents.ActiveEffect.html#issuppressed)
[isTemporary](foundry.documents.ActiveEffect.html#istemporary)
[modifiesActor](foundry.documents.ActiveEffect.html#modifiesactor)
[schema](foundry.documents.ActiveEffect.html#schema)
[sourceName](foundry.documents.ActiveEffect.html#sourcename)
[target](foundry.documents.ActiveEffect.html#target)
[uuid](foundry.documents.ActiveEffect.html#uuid)
[validationFailures](foundry.documents.ActiveEffect.html#validationfailures)
[baseDocument](foundry.documents.ActiveEffect.html#basedocument)
[collectionName](foundry.documents.ActiveEffect.html#collectionname)
[database](foundry.documents.ActiveEffect.html#database)
[documentName](foundry.documents.ActiveEffect.html#documentname)
[hasTypeData](foundry.documents.ActiveEffect.html#hastypedata)
[hierarchy](foundry.documents.ActiveEffect.html#hierarchy)
[implementation](foundry.documents.ActiveEffect.html#implementation)
[schema](foundry.documents.ActiveEffect.html#schema-2)
[TYPES](foundry.documents.ActiveEffect.html#types)

### Methods

[\_configure](foundry.documents.ActiveEffect.html#_configure)
[\_getCombatTime](foundry.documents.ActiveEffect.html#_getcombattime)
[\_getDurationLabel](foundry.documents.ActiveEffect.html#_getdurationlabel)
[\_getParentCollection](foundry.documents.ActiveEffect.html#_getparentcollection)
[\_onCreate](foundry.documents.ActiveEffect.html#_oncreate)
[\_onDelete](foundry.documents.ActiveEffect.html#_ondelete)
[\_onUpdate](foundry.documents.ActiveEffect.html#_onupdate)
[\_preCreate](foundry.documents.ActiveEffect.html#_precreate)
[\_prepareDuration](foundry.documents.ActiveEffect.html#_prepareduration)
[apply](foundry.documents.ActiveEffect.html#apply)
[canUserModify](foundry.documents.ActiveEffect.html#canusermodify)
[clone](foundry.documents.ActiveEffect.html#clone)
[createEmbeddedDocuments](foundry.documents.ActiveEffect.html#createembeddeddocuments)
[delete](foundry.documents.ActiveEffect.html#delete)
[deleteEmbeddedDocuments](foundry.documents.ActiveEffect.html#deleteembeddeddocuments)
[getEmbeddedCollection](foundry.documents.ActiveEffect.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.ActiveEffect.html#getembeddeddocument)
[getFlag](foundry.documents.ActiveEffect.html#getflag)
[getUserLevel](foundry.documents.ActiveEffect.html#getuserlevel)
[migrateSystemData](foundry.documents.ActiveEffect.html#migratesystemdata)
[prepareDerivedData](foundry.documents.ActiveEffect.html#preparederiveddata)
[reset](foundry.documents.ActiveEffect.html#reset)
[setFlag](foundry.documents.ActiveEffect.html#setflag)
[testUserPermission](foundry.documents.ActiveEffect.html#testuserpermission)
[toJSON](foundry.documents.ActiveEffect.html#tojson)
[toObject](foundry.documents.ActiveEffect.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.ActiveEffect.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.ActiveEffect.html#unsetflag)
[update](foundry.documents.ActiveEffect.html#update)
[updateDuration](foundry.documents.ActiveEffect.html#updateduration)
[updateEmbeddedDocuments](foundry.documents.ActiveEffect.html#updateembeddeddocuments)
[updateSource](foundry.documents.ActiveEffect.html#updatesource)
[validate](foundry.documents.ActiveEffect.html#validate)
[\_applyAdd](foundry.documents.ActiveEffect.html#_applyadd)
[\_applyCustom](foundry.documents.ActiveEffect.html#_applycustom)
[\_applyLegacy](foundry.documents.ActiveEffect.html#_applylegacy)
[\_applyMultiply](foundry.documents.ActiveEffect.html#_applymultiply)
[\_applyOverride](foundry.documents.ActiveEffect.html#_applyoverride)
[\_applyUpgrade](foundry.documents.ActiveEffect.html#_applyupgrade)
[\_displayScrollingStatus](foundry.documents.ActiveEffect.html#_displayscrollingstatus)
[\_initialize](foundry.documents.ActiveEffect.html#_initialize)
[\_initializeSource](foundry.documents.ActiveEffect.html#_initializesource)
[\_preDelete](foundry.documents.ActiveEffect.html#_predelete)
[\_preUpdate](foundry.documents.ActiveEffect.html#_preupdate)
[\_requiresDurationUpdate](foundry.documents.ActiveEffect.html#_requiresdurationupdate)
[\_addDataFieldMigration](foundry.documents.ActiveEffect.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.ActiveEffect.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.ActiveEffect.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.ActiveEffect.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.ActiveEffect.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.ActiveEffect.html#_logdatafieldmigration)
[applyField](foundry.documents.ActiveEffect.html#applyfield)
[canUserCreate](foundry.documents.ActiveEffect.html#canusercreate)
[cleanData](foundry.documents.ActiveEffect.html#cleandata)
[create](foundry.documents.ActiveEffect.html#create)
[createDocuments](foundry.documents.ActiveEffect.html#createdocuments)
[defineSchema](foundry.documents.ActiveEffect.html#defineschema)
[deleteDocuments](foundry.documents.ActiveEffect.html#deletedocuments)
[fromJSON](foundry.documents.ActiveEffect.html#fromjson)
[fromSource](foundry.documents.ActiveEffect.html#fromsource)
[fromStatusEffect](foundry.documents.ActiveEffect.html#fromstatuseffect)
[get](foundry.documents.ActiveEffect.html#get)
[getCollectionName](foundry.documents.ActiveEffect.html#getcollectionname)
[getInitialDuration](foundry.documents.ActiveEffect.html#getinitialduration)
[migrateData](foundry.documents.ActiveEffect.html#migratedata)
[migrateDataSafe](foundry.documents.ActiveEffect.html#migratedatasafe)
[shimData](foundry.documents.ActiveEffect.html#shimdata)
[updateDocuments](foundry.documents.ActiveEffect.html#updatedocuments)
[validateJoint](foundry.documents.ActiveEffect.html#validatejoint)
[\_fromStatusEffect](foundry.documents.ActiveEffect.html#_fromstatuseffect)
[\_onCreateOperation](foundry.documents.ActiveEffect.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.ActiveEffect.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.ActiveEffect.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.ActiveEffect.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.ActiveEffect.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.ActiveEffect.html#_preupdateoperation)

## Constructors

### constructor

* new ActiveEffect(  
  Â Â Â Â data?: Partial<[ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)

  #### Parameters

  + `Optional`data: Partial<[ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[constructor](foundry.documents.BaseActiveEffect.html#constructor)

## Properties

### \_source

\_source: [ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_source](foundry.documents.BaseActiveEffect.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[parent](foundry.documents.BaseActiveEffect.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_schema](foundry.documents.BaseActiveEffect.html#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseActiveEffect.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[metadata](foundry.documents.BaseActiveEffect.html#metadata)

## Accessors

### active

* get active(): boolean

  Whether the Active Effect is currently applying its changes to the target.

  #### Returns boolean

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseActiveEffect).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BaseActiveEffect).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActiveEffect).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActiveEffect).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActiveEffect).isEmbedded

### isSuppressed

* get isSuppressed(): boolean

  Is there some system logic that makes this active effect ineligible for application?

  #### Returns boolean

### isTemporary

* get isTemporary(): boolean

  Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.

  #### Returns boolean

### modifiesActor

* get modifiesActor(): boolean

  Does this Active Effect currently modify an Actor?

  #### Returns boolean

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseActiveEffect).schema

### sourceName

* get sourceName(): string

  The source name of the Active Effect. The source is retrieved synchronously.
  Therefore "Unknown" (localized) is returned if the origin points to a document inside a compendium.
  Returns "None" (localized) if it has no origin, and "Unknown" (localized) if the origin cannot be resolved.

  #### Returns string

### target

* get target(): null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  Retrieve the Document that this ActiveEffect targets for modification.

  #### Returns null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActiveEffect).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseActiveEffect).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseActiveEffect).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActiveEffect).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BaseActiveEffect).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseActiveEffect).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseActiveEffect).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseActiveEffect).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseActiveEffect).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseActiveEffect).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseActiveEffect).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_configure](foundry.documents.BaseActiveEffect.html#_configure)

### \_getCombatTime

* \_getCombatTime(round: number, turn: number, nTurns?: number): number

  `Internal`

  Format a round+turn combination as a decimal

  #### Parameters

  + round: number

    The round number
  + turn: number

    The turn number
  + `Optional`nTurns: number

    The maximum number of turns in the encounter

  #### Returns number

  The decimal representation

### \_getDurationLabel

* \_getDurationLabel(rounds: number, turns: number): string

  `Internal`

  Format a number of rounds and turns into a human-readable duration label

  #### Parameters

  + rounds: number

    The number of rounds
  + turns: number

    The number of turns

  #### Returns string

  The formatted label

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_getParentCollection](foundry.documents.BaseActiveEffect.html#_getparentcollection)

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

  Overrides [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onCreate](foundry.documents.BaseActiveEffect.html#_oncreate)

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

  Overrides [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onDelete](foundry.documents.BaseActiveEffect.html#_ondelete)

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

  Overrides [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onUpdate](foundry.documents.BaseActiveEffect.html#_onupdate)

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<undefined | false>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.ActiveEffect.html#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<undefined | false>

  Return false to exclude this Document from the creation operation

  Overrides [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preCreate](foundry.documents.BaseActiveEffect.html#_precreate)

### \_prepareDuration

* \_prepareDuration(): {  
  Â Â Â Â duration: null  
  Â Â Â Â | number;  
  Â Â Â Â label: string;  
  Â Â Â Â remaining: null | number;  
  Â Â Â Â type: string;  
  }

  `Internal`

  Compute derived data related to active effect duration.

  #### Returns { Â Â Â Â duration: null | number; Â Â Â Â label: string; Â Â Â Â remaining: null | number; Â Â Â Â type: string; }

### apply

* apply(actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html), change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)): Record<string, any>

  Apply this ActiveEffect to a provided Actor.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied

  #### Returns Record<string, any>

  An object of property paths and their updated values.

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[canUserModify](foundry.documents.BaseActiveEffect.html#canusermodify)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[clone](foundry.documents.BaseActiveEffect.html#clone)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[createEmbeddedDocuments](foundry.documents.BaseActiveEffect.html#createembeddeddocuments)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[delete](foundry.documents.BaseActiveEffect.html#delete)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[deleteEmbeddedDocuments](foundry.documents.BaseActiveEffect.html#deleteembeddeddocuments)

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[getEmbeddedCollection](foundry.documents.BaseActiveEffect.html#getembeddedcollection)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[getEmbeddedDocument](foundry.documents.BaseActiveEffect.html#getembeddeddocument)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[getFlag](foundry.documents.BaseActiveEffect.html#getflag)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[getUserLevel](foundry.documents.BaseActiveEffect.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[migrateSystemData](foundry.documents.BaseActiveEffect.html#migratesystemdata)

### prepareDerivedData

* prepareDerivedData(): void

  #### Returns void

  #### Inherit Doc

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[reset](foundry.documents.BaseActiveEffect.html#reset)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[setFlag](foundry.documents.BaseActiveEffect.html#setflag)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[testUserPermission](foundry.documents.BaseActiveEffect.html#testuserpermission)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[toJSON](foundry.documents.BaseActiveEffect.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[toObject](foundry.documents.BaseActiveEffect.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[traverseEmbeddedDocuments](foundry.documents.BaseActiveEffect.html#traverseembeddeddocuments)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[unsetFlag](foundry.documents.BaseActiveEffect.html#unsetflag)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[update](foundry.documents.BaseActiveEffect.html#update)

### updateDuration

* updateDuration(): [ActiveEffectDuration](../types/foundry.documents.types.ActiveEffectDuration.html)

  Update derived Active Effect duration data.
  Configure the remaining and label properties to be getters which lazily recompute only when necessary.

  #### Returns [ActiveEffectDuration](../types/foundry.documents.types.ActiveEffectDuration.html)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[updateEmbeddedDocuments](foundry.documents.BaseActiveEffect.html#updateembeddeddocuments)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[updateSource](foundry.documents.BaseActiveEffect.html#updatesource)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[validate](foundry.documents.BaseActiveEffect.html#validate)

### `Protected`\_applyAdd

* \_applyAdd(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  `Protected`

  Apply an ActiveEffect that uses an ADD application mode.
  The way that effects are added depends on the data type of the current value.

  If the current value is null, the change value is assigned directly.
  If the current type is a string, the change value is concatenated.
  If the current type is a number, the change value is cast to numeric and added.
  If the current type is an array, the change value is appended to the existing array if it matches in type.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void

### `Protected`\_applyCustom

* \_applyCustom(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  `Protected`

  Apply an ActiveEffect that uses a CUSTOM application mode.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void

### `Protected`\_applyLegacy

* \_applyLegacy(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â changes: Record<string, any>,  
  ): void

  `Protected`

  Apply this ActiveEffect to a provided Actor using a heuristic to infer the value types based on the current value
  and/or the default value in the template.json.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied.
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied.
  + changes: Record<string, any>

    The aggregate update paths and their updated values.

  #### Returns void

### `Protected`\_applyMultiply

* \_applyMultiply(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  `Protected`

  Apply an ActiveEffect that uses a MULTIPLY application mode.
  Changes which MULTIPLY must be numeric to allow for multiplication.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void

### `Protected`\_applyOverride

* \_applyOverride(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  `Protected`

  Apply an ActiveEffect that uses an OVERRIDE application mode.
  Numeric data is overridden by numbers, while other data types are overridden by any value

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void

### `Protected`\_applyUpgrade

* \_applyUpgrade(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  `Protected`

  Apply an ActiveEffect that uses an UPGRADE, or DOWNGRADE application mode.
  Changes which UPGRADE or DOWNGRADE must be numeric to allow for comparison.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

    The Actor to whom this effect should be applied
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void

### `Protected`\_displayScrollingStatus

* \_displayScrollingStatus(enabled: boolean): void

  `Protected`

  Display changes to active effects as scrolling Token status text.

  #### Parameters

  + enabled: boolean

    Is the active effect currently enabled?

  #### Returns void

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_initialize](foundry.documents.BaseActiveEffect.html#_initialize)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_initializeSource](foundry.documents.BaseActiveEffect.html#_initializesource)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preDelete](foundry.documents.BaseActiveEffect.html#_predelete)

### `Protected`\_preUpdate

* \_preUpdate(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changes: object

    The candidate changes to the Document
  + options: object

    Additional options which modify the update request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document update

  #### Returns Promise<boolean | void>

  A return value of false indicates the update operation should be cancelled.

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preUpdate](foundry.documents.BaseActiveEffect.html#_preupdate)

### `Protected`\_requiresDurationUpdate

* \_requiresDurationUpdate(): boolean

  `Protected`

  Determine whether the ActiveEffect requires a duration update.
  True if the worldTime has changed for an effect whose duration is tracked in seconds.
  True if the combat turn has changed for an effect tracked in turns where the effect target is a combatant.

  #### Returns boolean

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_addDataFieldMigration](foundry.documents.BaseActiveEffect.html#_adddatafieldmigration)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_addDataFieldShim](foundry.documents.BaseActiveEffect.html#_adddatafieldshim)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_addDataFieldShims](foundry.documents.BaseActiveEffect.html#_adddatafieldshims)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_clearFieldsRecursively](foundry.documents.BaseActiveEffect.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_initializationOrder](foundry.documents.BaseActiveEffect.html#_initializationorder)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_logDataFieldMigration](foundry.documents.BaseActiveEffect.html#_logdatafieldmigration)

### `Static`applyField

* applyField(model: DataModel, change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html), field?: any): any

  Apply EffectChangeData to a field within a DataModel.

  #### Parameters

  + model: DataModel

    The model instance.
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.html)

    The change to apply.
  + `Optional`field: any

    The field. If not supplied, it will be retrieved from the supplied model.

  #### Returns any

  The updated value.

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[canUserCreate](foundry.documents.BaseActiveEffect.html#canusercreate)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[cleanData](foundry.documents.BaseActiveEffect.html#cleandata)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[create](foundry.documents.BaseActiveEffect.html#create)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[createDocuments](foundry.documents.BaseActiveEffect.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â changes: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>;  
  Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html);  
  Â Â Â Â disabled: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â duration: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â origin: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â statuses: [SetField](foundry.data.fields.SetField.html);  
  Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html);  
  Â Â Â Â tint: [ColorField](foundry.data.fields.ColorField.html);  
  Â Â Â Â transfer: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.ActiveEffect.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â changes: [ArrayField](foundry.data.fields.ArrayField.html)<[SchemaField](foundry.data.fields.SchemaField.html)>; Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html); Â Â Â Â disabled: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â duration: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â origin: [StringField](foundry.data.fields.StringField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â statuses: [SetField](foundry.data.fields.SetField.html); Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html); Â Â Â Â tint: [ColorField](foundry.data.fields.ColorField.html); Â Â Â Â transfer: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html); }

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[defineSchema](foundry.documents.BaseActiveEffect.html#defineschema)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[deleteDocuments](foundry.documents.BaseActiveEffect.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[fromJSON](foundry.documents.BaseActiveEffect.html#fromjson)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[fromSource](foundry.documents.BaseActiveEffect.html#fromsource)

### `Static`fromStatusEffect

* fromStatusEffect(  
  Â Â Â Â statusId: string,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): Promise<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

  Create an ActiveEffect instance from some status effect ID.
  Delegates to [ActiveEffect.\_fromStatusEffect](foundry.documents.ActiveEffect.html#_fromstatuseffect) to create the ActiveEffect instance
  after creating the ActiveEffect data from the status effect data if `CONFIG.statusEffects`.

  #### Parameters

  + statusId: string

    The status effect ID.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Additional options to pass to the ActiveEffect constructor.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

  The created ActiveEffect instance.

  #### Throws

  An error if there is no status effect in `CONFIG.statusEffects` with the given status ID and if
  the status has implicit statuses but doesn't have a static \_id.

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[get](foundry.documents.BaseActiveEffect.html#get)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[getCollectionName](foundry.documents.BaseActiveEffect.html#getcollectionname)

### `Static`getInitialDuration

* getInitialDuration(): { duration: { startTime: number } }

  Retrieve the initial duration configuration.

  #### Returns { duration: { startTime: number } }

### `Static`migrateData

* migrateData(data: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + data: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[migrateData](foundry.documents.BaseActiveEffect.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[migrateDataSafe](foundry.documents.BaseActiveEffect.html#migratedatasafe)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[shimData](foundry.documents.BaseActiveEffect.html#shimdata)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[updateDocuments](foundry.documents.BaseActiveEffect.html#updatedocuments)

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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[validateJoint](foundry.documents.BaseActiveEffect.html#validatejoint)

### `Protected` `Static`\_fromStatusEffect

* \_fromStatusEffect(  
  Â Â Â Â statusId: string,  
  Â Â Â Â effectData: [ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.html),  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): Promise<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

  `Protected`

  Create an ActiveEffect instance from status effect data.
  Called by [ActiveEffect.fromStatusEffect](foundry.documents.ActiveEffect.html#fromstatuseffect).

  #### Parameters

  + statusId: string

    The status effect ID.
  + effectData: [ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.html)

    The status effect data.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)

    Additional options to pass to the ActiveEffect constructor.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[ActiveEffect](foundry.documents.ActiveEffect.html)>

  The created ActiveEffect instance.

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.ActiveEffect.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onCreateOperation](foundry.documents.BaseActiveEffect.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.ActiveEffect.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onDeleteOperation](foundry.documents.BaseActiveEffect.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.ActiveEffect.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_onUpdateOperation](foundry.documents.BaseActiveEffect.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.ActiveEffect.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.ActiveEffect.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preCreateOperation](foundry.documents.BaseActiveEffect.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.ActiveEffect.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.ActiveEffect.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preDeleteOperation](foundry.documents.BaseActiveEffect.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.ActiveEffect.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BaseActiveEffect](foundry.documents.BaseActiveEffect.html).[\_preUpdateOperation](foundry.documents.BaseActiveEffect.html#_preupdateoperation)