---
title: "Playlist | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Playlist.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Playlist](foundry.documents.Playlist.html)

# Class Playlist

The client-side Playlist document which extends the common BasePlaylist model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Playlists](foundry.documents.collections.Playlists.html): The world-level collection of Playlist documents
* [foundry.documents.PlaylistSound](foundry.documents.PlaylistSound.html): The PlaylistSound embedded document within a parent
  Playlist
* [foundry.applications.sheets.PlaylistConfig](foundry.applications.sheets.PlaylistConfig.html): The Playlist configuration application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Playlist))

* [BasePlaylist](foundry.documents.BasePlaylist.html)<this>
  + Playlist

##### Index

### Constructors

[constructor](foundry.documents.Playlist.html#constructor)

### Properties

[\_source](foundry.documents.Playlist.html#_source)
[parent](foundry.documents.Playlist.html#parent)
[\_schema](foundry.documents.Playlist.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.documents.Playlist.html#localization_prefixes)
[metadata](foundry.documents.Playlist.html#metadata)

### Accessors

[compendium](foundry.documents.Playlist.html#compendium)
[id](foundry.documents.Playlist.html#id)
[inCompendium](foundry.documents.Playlist.html#incompendium)
[invalid](foundry.documents.Playlist.html#invalid)
[isEmbedded](foundry.documents.Playlist.html#isembedded)
[playbackOrder](foundry.documents.Playlist.html#playbackorder)
[schema](foundry.documents.Playlist.html#schema)
[uuid](foundry.documents.Playlist.html#uuid)
[validationFailures](foundry.documents.Playlist.html#validationfailures)
[visible](foundry.documents.Playlist.html#visible)
[baseDocument](foundry.documents.Playlist.html#basedocument)
[collectionName](foundry.documents.Playlist.html#collectionname)
[database](foundry.documents.Playlist.html#database)
[documentName](foundry.documents.Playlist.html#documentname)
[hasTypeData](foundry.documents.Playlist.html#hastypedata)
[hierarchy](foundry.documents.Playlist.html#hierarchy)
[implementation](foundry.documents.Playlist.html#implementation)
[schema](foundry.documents.Playlist.html#schema-2)
[TYPES](foundry.documents.Playlist.html#types)

### Methods

[\_configure](foundry.documents.Playlist.html#_configure)
[\_getParentCollection](foundry.documents.Playlist.html#_getparentcollection)
[\_initialize](foundry.documents.Playlist.html#_initialize)
[\_onClickDocumentLink](foundry.documents.Playlist.html#_onclickdocumentlink)
[\_onCreateDescendantDocuments](foundry.documents.Playlist.html#_oncreatedescendantdocuments)
[\_onDelete](foundry.documents.Playlist.html#_ondelete)
[\_onDeleteDescendantDocuments](foundry.documents.Playlist.html#_ondeletedescendantdocuments)
[\_onSoundEnd](foundry.documents.Playlist.html#_onsoundend)
[\_onSoundStart](foundry.documents.Playlist.html#_onsoundstart)
[\_onUpdate](foundry.documents.Playlist.html#_onupdate)
[\_onUpdateDescendantDocuments](foundry.documents.Playlist.html#_onupdatedescendantdocuments)
[\_preUpdate](foundry.documents.Playlist.html#_preupdate)
[bulkImportDialog](foundry.documents.Playlist.html#bulkimportdialog)
[bulkImportSounds](foundry.documents.Playlist.html#bulkimportsounds)
[canUserModify](foundry.documents.Playlist.html#canusermodify)
[clone](foundry.documents.Playlist.html#clone)
[createEmbeddedDocuments](foundry.documents.Playlist.html#createembeddeddocuments)
[cycleMode](foundry.documents.Playlist.html#cyclemode)
[delete](foundry.documents.Playlist.html#delete)
[deleteEmbeddedDocuments](foundry.documents.Playlist.html#deleteembeddeddocuments)
[getEmbeddedCollection](foundry.documents.Playlist.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Playlist.html#getembeddeddocument)
[getFlag](foundry.documents.Playlist.html#getflag)
[getUserLevel](foundry.documents.Playlist.html#getuserlevel)
[migrateSystemData](foundry.documents.Playlist.html#migratesystemdata)
[playAll](foundry.documents.Playlist.html#playall)
[playNext](foundry.documents.Playlist.html#playnext)
[playSound](foundry.documents.Playlist.html#playsound)
[prepareDerivedData](foundry.documents.Playlist.html#preparederiveddata)
[reset](foundry.documents.Playlist.html#reset)
[setFlag](foundry.documents.Playlist.html#setflag)
[stopAll](foundry.documents.Playlist.html#stopall)
[stopSound](foundry.documents.Playlist.html#stopsound)
[testUserPermission](foundry.documents.Playlist.html#testuserpermission)
[toAnchor](foundry.documents.Playlist.html#toanchor)
[toCompendium](foundry.documents.Playlist.html#tocompendium)
[toJSON](foundry.documents.Playlist.html#tojson)
[toObject](foundry.documents.Playlist.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Playlist.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Playlist.html#unsetflag)
[update](foundry.documents.Playlist.html#update)
[updateEmbeddedDocuments](foundry.documents.Playlist.html#updateembeddeddocuments)
[updateSource](foundry.documents.Playlist.html#updatesource)
[validate](foundry.documents.Playlist.html#validate)
[\_getNextSound](foundry.documents.Playlist.html#_getnextsound)
[\_getPreviousSound](foundry.documents.Playlist.html#_getprevioussound)
[\_initializeSource](foundry.documents.Playlist.html#_initializesource)
[\_onCreate](foundry.documents.Playlist.html#_oncreate)
[\_preCreate](foundry.documents.Playlist.html#_precreate)
[\_preDelete](foundry.documents.Playlist.html#_predelete)
[\_sortSounds](foundry.documents.Playlist.html#_sortsounds)
[\_addDataFieldMigration](foundry.documents.Playlist.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Playlist.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Playlist.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Playlist.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Playlist.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Playlist.html#_logdatafieldmigration)
[canUserCreate](foundry.documents.Playlist.html#canusercreate)
[cleanData](foundry.documents.Playlist.html#cleandata)
[create](foundry.documents.Playlist.html#create)
[createDocuments](foundry.documents.Playlist.html#createdocuments)
[defineSchema](foundry.documents.Playlist.html#defineschema)
[deleteDocuments](foundry.documents.Playlist.html#deletedocuments)
[fromJSON](foundry.documents.Playlist.html#fromjson)
[fromSource](foundry.documents.Playlist.html#fromsource)
[get](foundry.documents.Playlist.html#get)
[getCollectionName](foundry.documents.Playlist.html#getcollectionname)
[migrateData](foundry.documents.Playlist.html#migratedata)
[migrateDataSafe](foundry.documents.Playlist.html#migratedatasafe)
[shimData](foundry.documents.Playlist.html#shimdata)
[updateDocuments](foundry.documents.Playlist.html#updatedocuments)
[validateJoint](foundry.documents.Playlist.html#validatejoint)
[\_getSoundContentLinks](foundry.documents.Playlist.html#_getsoundcontentlinks)
[\_onCreateOperation](foundry.documents.Playlist.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Playlist.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.Playlist.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Playlist.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.Playlist.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Playlist.html#_preupdateoperation)

## Constructors

### constructor

* new Playlist(  
  Â Â Â Â data?: Partial<[PlaylistData](../interfaces/foundry.documents.types.PlaylistData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)

  #### Parameters

  + `Optional`data: Partial<[PlaylistData](../interfaces/foundry.documents.types.PlaylistData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[constructor](foundry.documents.BasePlaylist.html#constructor)

## Properties

### \_source

\_source: [PlaylistData](../interfaces/foundry.documents.types.PlaylistData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_source](foundry.documents.BasePlaylist.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[parent](foundry.documents.BasePlaylist.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_schema](foundry.documents.BasePlaylist.html#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[LOCALIZATION\_PREFIXES](foundry.documents.BasePlaylist.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[metadata](foundry.documents.BasePlaylist.html#metadata)

## Accessors

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BasePlaylist).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BasePlaylist).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BasePlaylist).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BasePlaylist).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BasePlaylist).isEmbedded

### playbackOrder

* get playbackOrder(): string[]

  The order in which sounds within this playlist will be played (if sequential or shuffled)
  Uses a stored seed for randomization to guarantee that all clients generate the same random order.

  #### Returns string[]

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BasePlaylist).schema

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BasePlaylist).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BasePlaylist).validationFailures

### visible

* get visible(): any

  #### Returns any

  #### Inherit Doc

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BasePlaylist).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BasePlaylist).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BasePlaylist).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BasePlaylist).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BasePlaylist).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BasePlaylist).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BasePlaylist).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BasePlaylist).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BasePlaylist).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_configure](foundry.documents.BasePlaylist.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_getParentCollection](foundry.documents.BasePlaylist.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_initialize](foundry.documents.BasePlaylist.html#_initialize)

### \_onClickDocumentLink

* \_onClickDocumentLink(event: any): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  #### Parameters

  + event: any

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  #### Inherit Doc

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

  Overrides [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onDelete](foundry.documents.BasePlaylist.html#_ondelete)

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

### \_onSoundEnd

* \_onSoundEnd(  
  Â Â Â Â sound: PlaylistSound,  
  ): Promise<undefined | null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  `Internal`

  Handle callback logic when an individual sound within the Playlist concludes playback naturally

  #### Parameters

  + sound: PlaylistSound

  #### Returns Promise<undefined | null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

### \_onSoundStart

* \_onSoundStart(sound: PlaylistSound): Promise<void>

  `Internal`

  Handle callback logic when playback for an individual sound within the Playlist is started.
  Schedule auto-preload of next track

  #### Parameters

  + sound: PlaylistSound

  #### Returns Promise<void>

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

  Overrides [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onUpdate](foundry.documents.BasePlaylist.html#_onupdate)

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

* \_preUpdate(changed: any, options: any, user: any): Promise<boolean | void>

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changed: any

    The candidate changes to the Document
  + options: any

    Additional options which modify the update request
  + user: any

    The User requesting the document update

  #### Returns Promise<boolean | void>

  A return value of false indicates the update operation should be cancelled.

  Overrides [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preUpdate](foundry.documents.BasePlaylist.html#_preupdate)

### bulkImportDialog

* bulkImportDialog(): Promise<boolean>

  Spawn a dialog for bulk importing sound files into a playlist.

  #### Returns Promise<boolean>

  Returns true if any sound files were successfully imported.

### bulkImportSounds

* bulkImportSounds(paths: string[]): Promise<PlaylistSound[]>

  Create PlaylistSounds in this Playlist from the given file paths.

  #### Parameters

  + paths: string[]

    File paths to import.

  #### Returns Promise<PlaylistSound[]>

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[canUserModify](foundry.documents.BasePlaylist.html#canusermodify)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[clone](foundry.documents.BasePlaylist.html#clone)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[createEmbeddedDocuments](foundry.documents.BasePlaylist.html#createembeddeddocuments)

### cycleMode

* cycleMode(): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  Cycle the playlist mode

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  A promise which resolves to the updated Playlist instance

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[delete](foundry.documents.BasePlaylist.html#delete)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[deleteEmbeddedDocuments](foundry.documents.BasePlaylist.html#deleteembeddeddocuments)

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[getEmbeddedCollection](foundry.documents.BasePlaylist.html#getembeddedcollection)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[getEmbeddedDocument](foundry.documents.BasePlaylist.html#getembeddeddocument)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[getFlag](foundry.documents.BasePlaylist.html#getflag)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[getUserLevel](foundry.documents.BasePlaylist.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[migrateSystemData](foundry.documents.BasePlaylist.html#migratesystemdata)

### playAll

* playAll(): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  Begin simultaneous playback for all sounds in the Playlist.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  The updated Playlist document

### playNext

* playNext(  
  Â Â Â Â soundId?: string,  
  Â Â Â Â options?: { direction?: number },  
  ): Promise<undefined | null | [documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  Play the next Sound within the sequential or shuffled Playlist.

  #### Parameters

  + `Optional`soundId: string

    The currently playing sound ID, if known
  + `Optional`options: { direction?: number } = {}

    Additional options which configure the next track

    - ##### `Optional`direction?: number

      Whether to advance forward (if 1) or backwards (if -1)

  #### Returns Promise<undefined | null | [documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  If successfully updated, this Playlist document

### playSound

* playSound(sound: PlaylistSound): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  Begin playback of a specific Sound within this Playlist.
  Determine which other sounds should remain playing, if any.

  #### Parameters

  + sound: PlaylistSound

    The desired sound that should play

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  The updated Playlist

### prepareDerivedData

* prepareDerivedData(): void

  #### Returns void

  #### Inherit Doc

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[reset](foundry.documents.BasePlaylist.html#reset)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[setFlag](foundry.documents.BasePlaylist.html#setflag)

### stopAll

* stopAll(): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  End playback for any/all currently playing sounds within the Playlist.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  The updated Playlist document

### stopSound

* stopSound(sound: PlaylistSound): Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  Stop playback of a specific Sound within this Playlist.
  Determine which other sounds should remain playing, if any.

  #### Parameters

  + sound: PlaylistSound

    The desired sound that should play

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Playlist](foundry.documents.Playlist.html)>

  The updated Playlist

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[testUserPermission](foundry.documents.BasePlaylist.html#testuserpermission)

### toAnchor

* toAnchor(\_\_namedParameters?: { classes?: never[] }): any

  #### Parameters

  + \_\_namedParameters: { classes?: never[] } = {}

  #### Returns any

  #### Inherit Doc

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[toJSON](foundry.documents.BasePlaylist.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[toObject](foundry.documents.BasePlaylist.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[traverseEmbeddedDocuments](foundry.documents.BasePlaylist.html#traverseembeddeddocuments)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[unsetFlag](foundry.documents.BasePlaylist.html#unsetflag)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[update](foundry.documents.BasePlaylist.html#update)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[updateEmbeddedDocuments](foundry.documents.BasePlaylist.html#updateembeddeddocuments)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[updateSource](foundry.documents.BasePlaylist.html#updatesource)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[validate](foundry.documents.BasePlaylist.html#validate)

### `Protected`\_getNextSound

* \_getNextSound(soundId: number): any

  `Protected`

  Get the next sound in the cached playback order. For internal use.

  #### Parameters

  + soundId: number

  #### Returns any

### `Protected`\_getPreviousSound

* \_getPreviousSound(soundId: number): any

  `Protected`

  Get the previous sound in the cached playback order. For internal use.

  #### Parameters

  + soundId: number

  #### Returns any

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_initializeSource](foundry.documents.BasePlaylist.html#_initializesource)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onCreate](foundry.documents.BasePlaylist.html#_oncreate)

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Playlist.html#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preCreate](foundry.documents.BasePlaylist.html#_precreate)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preDelete](foundry.documents.BasePlaylist.html#_predelete)

### `Protected`\_sortSounds

* \_sortSounds(a: Sound, b: Sound): any

  `Protected`

  Define the sorting order for the Sounds within this Playlist. For internal use.
  If sorting alphabetically, the sounds are sorted with a locale-independent comparator
  to ensure the same order on all clients.

  #### Parameters

  + a: Sound
  + b: Sound

  #### Returns any

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_addDataFieldMigration](foundry.documents.BasePlaylist.html#_adddatafieldmigration)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_addDataFieldShim](foundry.documents.BasePlaylist.html#_adddatafieldshim)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_addDataFieldShims](foundry.documents.BasePlaylist.html#_adddatafieldshims)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_clearFieldsRecursively](foundry.documents.BasePlaylist.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_initializationOrder](foundry.documents.BasePlaylist.html#_initializationorder)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_logDataFieldMigration](foundry.documents.BasePlaylist.html#_logdatafieldmigration)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[canUserCreate](foundry.documents.BasePlaylist.html#canusercreate)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[cleanData](foundry.documents.BasePlaylist.html#cleandata)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[create](foundry.documents.BasePlaylist.html#create)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[createDocuments](foundry.documents.BasePlaylist.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â channel: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â description: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â fade: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â mode: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â playing: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â seed: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â sorting: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Playlist.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â channel: [StringField](foundry.data.fields.StringField.html); Â Â Â Â description: [StringField](foundry.data.fields.StringField.html); Â Â Â Â fade: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â mode: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â playing: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â seed: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â sorting: [StringField](foundry.data.fields.StringField.html); Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); }

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[defineSchema](foundry.documents.BasePlaylist.html#defineschema)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[deleteDocuments](foundry.documents.BasePlaylist.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[fromJSON](foundry.documents.BasePlaylist.html#fromjson)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[fromSource](foundry.documents.BasePlaylist.html#fromsource)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[get](foundry.documents.BasePlaylist.html#get)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[getCollectionName](foundry.documents.BasePlaylist.html#getcollectionname)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[migrateData](foundry.documents.BasePlaylist.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[migrateDataSafe](foundry.documents.BasePlaylist.html#migratedatasafe)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[shimData](foundry.documents.BasePlaylist.html#shimdata)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[updateDocuments](foundry.documents.BasePlaylist.html#updatedocuments)

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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[validateJoint](foundry.documents.BasePlaylist.html#validatejoint)

### `Protected` `Static`\_getSoundContentLinks

* \_getSoundContentLinks(doc: any): NodeListOf<Element>

  `Protected`

  Find all content links belonging to a given [Playlist](foundry.documents.Playlist.html) or [foundry.documents.PlaylistSound](foundry.documents.PlaylistSound.html).

  #### Parameters

  + doc: any

    The Playlist or PlaylistSound.

  #### Returns NodeListOf<Element>

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Playlist.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onCreateOperation](foundry.documents.BasePlaylist.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Playlist.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onDeleteOperation](foundry.documents.BasePlaylist.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.Playlist.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_onUpdateOperation](foundry.documents.BasePlaylist.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Playlist.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Playlist.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preCreateOperation](foundry.documents.BasePlaylist.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Playlist.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Playlist.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preDeleteOperation](foundry.documents.BasePlaylist.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Playlist.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BasePlaylist](foundry.documents.BasePlaylist.html).[\_preUpdateOperation](foundry.documents.BasePlaylist.html#_preupdateoperation)