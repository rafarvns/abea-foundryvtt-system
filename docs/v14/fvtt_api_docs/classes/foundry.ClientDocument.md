---
title: "ClientDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.ClientDocument.html"
category: "classes"
---

# Class ClientDocument

The ClientDocument extends the base Document class by adding client-specific behaviors to all Document types.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.ClientDocument))

* Base
  + ClientDocument
    - [CanvasDocument](foundry.CanvasDocument.md)

##### Index

### Properties

[\_source](#_source)
[parent](#parent)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)
[name](#name)

### Accessors

[collection](#collection)
[compendium](#compendium)
[hasPlayerOwner](#hasplayerowner)
[id](#id)
[inCompendium](#incompendium)
[invalid](#invalid)
[isEmbedded](#isembedded)
[isOwner](#isowner)
[limited](#limited)
[link](#link)
[permission](#permission)
[persisted](#persisted)
[schema](#schema)
[sheet](#sheet)
[uuid](#uuid)
[validationFailures](#validationfailures)
[visible](#visible)
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
[\_createDocumentLink](#_createdocumentlink)
[\_dispatchDescendantDocumentEvents](#_dispatchdescendantdocumentevents)
[\_getParentCollection](#_getparentcollection)
[\_getSheetClass](#_getsheetclass)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_onSheetChange](#_onsheetchange)
[\_onUpdate](#_onupdate)
[\_preCreate](#_precreate)
[\_preDelete](#_predelete)
[\_preUpdate](#_preupdate)
[\_safePrepareData](#_safepreparedata)
[\_updateDiff](#_updatediff)
[canUserModify](#canusermodify)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[delete](#delete)
[deleteDialog](#deletedialog)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[exportToJSON](#exporttojson)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getUserLevel](#getuserlevel)
[importFromJSON](#importfromjson)
[importFromJSONDialog](#importfromjsondialog)
[migrateSystemData](#migratesystemdata)
[onEmbed](#onembed)
[prepareBaseData](#preparebasedata)
[prepareData](#preparedata)
[prepareDerivedData](#preparederiveddata)
[prepareEmbeddedDocuments](#prepareembeddeddocuments)
[render](#render)
[reset](#reset)
[setFlag](#setflag)
[sortRelative](#sortrelative)
[testUserPermission](#testuserpermission)
[toAnchor](#toanchor)
[toCompendium](#tocompendium)
[toDragData](#todragdata)
[toEmbed](#toembed)
[toJSON](#tojson)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateSource](#updatesource)
[validate](#validate)
[\_buildEmbedHTML](#_buildembedhtml)
[\_createFigureEmbed](#_createfigureembed)
[\_createInlineEmbed](#_createinlineembed)
[\_getInnerModel](#_getinnermodel)
[\_initializeSource](#_initializesource)
[\_onClickDocumentLink](#_onclickdocumentlink)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_onUpdateDescendantDocuments](#_onupdatedescendantdocuments)
[\_preCreateDescendantDocuments](#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](#_predeletedescendantdocuments)
[\_preUpdateDescendantDocuments](#_preupdatedescendantdocuments)
[\_preUpdateSource](#_preupdatesource)
[\_updateCommit](#_updatecommit)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_onCreateOperation](#_oncreateoperation)
[\_preCleanData](#_precleandata)
[canUserCreate](#canusercreate)
[cleanData](#cleandata)
[create](#create)
[createDialog](#createdialog)
[createDocuments](#createdocuments)
[defaultName](#defaultname)
[defineSchema](#defineschema)
[deleteDocuments](#deletedocuments)
[fromDropData](#fromdropdata)
[fromImport](#fromimport)
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
[\_onDeleteOperation](#_ondeleteoperation)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCreateOperation](#_precreateoperation)
[\_preDeleteOperation](#_predeleteoperation)
[\_preUpdateOperation](#_preupdateoperation)

## Properties

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from Base.\_source

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from Base.parent

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from Base.\_schema

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from Base.LOCALIZATION\_PREFIXES

### `Static`metadata

metadata: Readonly<[DocumentClassMetadata](../interfaces/foundry.abstract.types.DocumentClassMetadata.md)> = ...

Default metadata which applies to each instance of this Document type.

Inherited from Base.metadata

### `Static`name

name: string = "ClientDocumentMixin"

#### Inherit Doc

## Accessors

### collection

* get collection(this: ClientDocument): any

  Return a reference to the parent Collection/Document instance that contains/is this Document.

  #### Parameters

  + this: ClientDocument

  #### Returns any

### compendium

* get compendium(): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | null | undefined

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | null | undefined

  Overrides Base.compendium

### hasPlayerOwner

* get hasPlayerOwner(): boolean

  Test whether this Document is owned by any non-Gamemaster User.

  #### Returns boolean

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from Base.id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium? A stricter check than Document#inCompendium.

  #### Returns boolean

  Overrides Base.inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from Base.invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from Base.isEmbedded

### isOwner

* get isOwner(): boolean

  A boolean indicator for whether the current game User has ownership rights for this Document.
  Different Document types may have more specialized rules for what constitutes ownership.

  #### Returns boolean

### limited

* get limited(): boolean

  A boolean indicator for whether the current game User has exactly LIMITED visibility (and no greater).

  #### Returns boolean

### link

* get link(): string

  Return a string which creates a dynamic link to this Document instance.

  #### Returns string

### permission

* get permission(): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  Return the permission level that the current game User has over this Document.
  See the [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md) object for an enumeration of these levels.

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  #### Example: Get the permission level the current user has for a document

  ```
  game.user.id; // "dkasjkkj23kjf"  
  actor.ownership; // {default: 1, dkasjkkj23kjf: 2}  
  actor.permission; // 2
  Copy
  ```

### persisted

* get persisted(): boolean

  Is this Document persisted?

  A document is persisted if it has a nonnull UUID that resolves to a document with `fromUuid`.
  In particular, clones of persisted Documents are also persisted Documents if they have the same ID as the
  original.

  This property is false until this document and all its ancestors up to the root document have been initialized
  and added to their collections.

  #### Returns boolean

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from Base.schema

### sheet

* get sheet(): | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>  
  | null

  Lazily obtain a Application instance used to configure this Document, or null if no sheet is available.

  #### Returns [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)> | null

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from Base.uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from [foundry](../modules/foundry.md).[validationFailures](../modules/foundry.md#validationfailures)

### visible

* get visible(): boolean

  A boolean indicator for whether the current game User has at least limited visibility for this Document.
  Different Document types may have more specialized rules for what determines visibility.

  #### Returns boolean

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from Base.baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from Base.collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from Base.database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from Base.documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from Base.hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from Base.hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from Base.implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from Base.schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from Base.TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from Base.\_configure

### \_createDocumentLink

* \_createDocumentLink(  
  Â Â Â Â eventData: object,  
  Â Â Â Â options?: { label?: string; relativeTo?: ClientDocument },  
  ): string

  `Internal`

  Create a content link for this document.

  #### Parameters

  + eventData: object

    The parsed object of data provided by the drop transfer event.
  + `Optional`options: { label?: string; relativeTo?: ClientDocument } = {}

    Additional options to configure link generation.

    - ##### `Optional`label?: string

      A custom label to use instead of the document's name.
    - ##### `Optional`relativeTo?: ClientDocument

      A document to generate a link relative to.

  #### Returns string

### \_dispatchDescendantDocumentEvents

* \_dispatchDescendantDocumentEvents(  
  Â Â Â Â event: string,  
  Â Â Â Â collection: string,  
  Â Â Â Â args: any[],  
  Â Â Â Â \_parent?: ClientDocument,  
  ): void

  `Internal`

  Orchestrate dispatching descendant document events to parent documents when embedded children are modified.

  #### Parameters

  + event: string

    The event name, preCreate, onCreate, etc...
  + collection: string

    The collection name being modified within this parent document
  + args: any[]

    Arguments passed to each dispatched function
  + `Optional`\_parent: ClientDocument

    The document with directly modified embedded documents.
    Either this document or a descendant of this one.

  #### Returns void

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from Base.\_getParentCollection

### \_getSheetClass

* \_getSheetClass(): Function | null

  `Internal`

  Obtain the Application class constructor which should be used to configure this Document.

  #### Returns Function | null

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from Base.\_initializationOrder

### \_initialize

* \_initialize(this: ClientDocument, options?: {}): void

  #### Parameters

  + this: ClientDocument
  + options: {} = {}

  #### Returns void

  #### Inherit Doc

  Overrides Base.\_initialize

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  #### Parameters

  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides Base.\_onCreate

### \_onDelete

* \_onDelete(options: any, userId: any): void

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides Base.\_onDelete

### \_onSheetChange

* \_onSheetChange(options?: { sheetOpen?: boolean }): Promise<void>

  `Internal`

  Whenever the Document's sheet changes, close any existing applications for this Document, and re-render the new
  sheet if one was already open.

  #### Parameters

  + `Optional`options: { sheetOpen?: boolean } = {}
    - ##### `Optional`sheetOpen?: boolean

      Whether the sheet was originally open and needs to be re-opened.

  #### Returns Promise<void>

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides Base.\_onUpdate

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<any>

  #### Parameters

  + data: any
  + options: any
  + user: any

  #### Returns Promise<any>

  #### Inherit Doc

  Overrides Base.\_preCreate

### \_preDelete

* \_preDelete(options: any, user: any): Promise<any>

  #### Parameters

  + options: any
  + user: any

  #### Returns Promise<any>

  #### Inherit Doc

  Overrides Base.\_preDelete

### \_preUpdate

* \_preUpdate(changes: any, options: any, user: any): Promise<any>

  #### Parameters

  + changes: any
  + options: any
  + user: any

  #### Returns Promise<any>

  #### Inherit Doc

  Overrides Base.\_preUpdate

### \_safePrepareData

* \_safePrepareData(): void

  `Internal`

  Safely prepare data for a Document, catching any errors.

  #### Returns void

### \_updateDiff

* \_updateDiff(copy: any, changes: any, options: any, \_state: any): object

  #### Parameters

  + copy: any
  + changes: any
  + options: any
  + \_state: any

  #### Returns object

  #### Inherit Doc

  Inherited from Base.\_updateDiff

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

  Inherited from Base.canUserModify

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md) & Pick<  
  Â Â Â Â Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md),  
  Â Â Â Â Â Â Â Â "dropInvalidEmbedded"  
  Â Â Â Â Â Â Â Â | "fallback"  
  Â Â Â Â Â Â Â Â | "strict",  
  Â Â Â Â > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.md) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.md),  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md) & Pick<  
    Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md),  
    Â Â Â Â "dropInvalidEmbedded"  
    Â Â Â Â | "fallback"  
    Â Â Â Â | "strict",  
    > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.md) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.md) = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The cloned Document instance

  Inherited from Base.clone

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

  Inherited from Base.createEmbeddedDocuments

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

  Inherited from Base.delete

### deleteDialog

* deleteDialog(  
  Â Â Â Â options?: object,  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Present a Dialog form to confirm deletion of this Document.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to `DialogV2.confirm`
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md) = {}

    Document deletion options.

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  A Promise that resolves to the deleted Document

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

  Inherited from Base.deleteEmbeddedDocuments

### exportToJSON

* exportToJSON(options?: object): void

  Export document data to a JSON file which can be saved by the client and later imported into a different session.
  Only world Documents may be exported.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to the [ClientDocument#toCompendium](#tocompendium) method

  #### Returns void

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

  Inherited from Base.getEmbeddedCollection

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

  Inherited from Base.getEmbeddedDocument

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from Base.getFieldForProperty

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

  Inherited from Base.getFlag

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

  Inherited from Base.getUserLevel

### importFromJSON

* importFromJSON(this: ClientDocument, json: string): Promise<ClientDocument>

  Update this Document using a provided JSON string.
  Only world Documents may be imported.

  #### Parameters

  + this: ClientDocument
  + json: string

    Raw JSON data to import

  #### Returns Promise<ClientDocument>

  The updated Document instance

### importFromJSONDialog

* importFromJSONDialog(): Promise<void>

  Render an import dialog for updating the data related to this Document through an exported JSON file

  #### Returns Promise<void>

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from Base.migrateSystemData

### onEmbed

* onEmbed(element: HTMLDocumentEmbedElement): void

  Specific callback actions to take when the embedded HTML for this Document has been added to the DOM.

  #### Parameters

  + element: HTMLDocumentEmbedElement

    The embedded document HTML

  #### Returns void

### prepareBaseData

* prepareBaseData(): void

  Prepare data related to this Document itself, before any embedded Documents or derived data is computed.

  If possible when modifying the `system` object you should use
  [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.md#preparebasedata) on your data models
  instead of this method directly on the document.

  #### Returns void

### prepareData

* prepareData(): void

  Prepare data for the Document. This method provides an opportunity for Document classes to define special data
  preparation logic to compute values that don't need to be stored in the database, such as a "bloodied" hp value
  or the total carrying weight of items. The work done by this method should be idempotent per initialization.
  There are situations in which prepareData may be called more than once.

  By default, foundry calls the following methods in order whenever the document is created or updated.

  1. [reset](#reset) (Inherited from DataModel)
  2. [\_initialize](#_initialize) (Inherited from DataModel)
  3. [prepareData](#preparedata)
  4. [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.md#preparebasedata)
  5. [prepareBaseData](#preparebasedata)
  6. [prepareEmbeddedDocuments](#prepareembeddeddocuments)
  7. [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.md#preparederiveddata)
  8. [prepareDerivedData](#preparederiveddata)

  Do NOT invoke database operations like [update](#update) or [setFlag](#setflag) within data prep, as that can cause an
  infinite loop by re-triggering the data initialization process.

  If possible you should extend [prepareBaseData](#preparebasedata) and [prepareDerivedData](#preparederiveddata) instead of this function
  directly, but some systems with more complicated calculations may want to override this function to add extra
  steps, such as to calculate certain item values after actor data prep.

  #### Returns void

### prepareDerivedData

* prepareDerivedData(): void

  Apply transformations or derivations to the values of the source data object.
  Compute data fields whose values are not stored to the database.

  If possible when modifying the `system` object you should use
  [TypeDataModel#prepareDerivedData](foundry.abstract.TypeDataModel.md#preparederiveddata) on your data models
  instead of this method directly on the document.

  #### Returns void

### prepareEmbeddedDocuments

* prepareEmbeddedDocuments(): void

  Prepare all embedded Document instances which exist within this primary Document.

  #### Returns void

### render

* render(force?: boolean, context?: object): void

  Render all Application instances which are connected to this document by calling their respective

  #### Parameters

  + `Optional`force: boolean = false

    Force rendering
  + `Optional`context: object = {}

    Optional context

  #### Returns void

  #### See

  [foundry.applications.api.ApplicationV2#render](foundry.applications.api.ApplicationV2.md#render)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from Base.reset

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

  Inherited from Base.setFlag

### sortRelative

* sortRelative(  
  Â Â Â Â options?: { sortOptions?: object; updateData?: object },  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Determine the sort order for this Document by positioning it relative a target sibling.
  See SortingHelper.performIntegerSort for more details

  #### Parameters

  + `Optional`options: { sortOptions?: object; updateData?: object } = {}

    Sorting options provided to SortingHelper.performIntegerSort

    - ##### `Optional`sortOptions?: object

      Options passed to the foundry.utils.performIntegerSort method
    - ##### `Optional`updateData?: object

      Additional data changes applied to each sorted document

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The Document after it has been re-sorted

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

  Inherited from Base.testUserPermission

### toAnchor

* toAnchor(options?: any): HTMLAnchorElement

  Create a content link for this Document.

  #### Parameters

  + `Optional`options: any = {}

    Additional options to configure how the link is constructed.

  #### Returns HTMLAnchorElement

### toCompendium

* toCompendium(  
  Â Â Â Â pack?: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>,  
  Â Â Â Â options?: [ToCompendiumOptions](../interfaces/foundry.types.ToCompendiumOptions.md),  
  ): object

  Transform the Document data to be stored in a Compendium pack.
  Remove any features of the data which are world-specific.

  #### Parameters

  + `Optional`pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    A specific pack being exported to
  + `Optional`options: [ToCompendiumOptions](../interfaces/foundry.types.ToCompendiumOptions.md) = {}

    Additional options which modify how the document is converted

  #### Returns object

  A data object of cleaned data suitable for compendium import

### toDragData

* toDragData(): object

  Serialize salient information about this Document when dragging it.

  #### Returns object

  An object of drag data.

### toEmbed

* toEmbed(config: DocumentHTMLEmbedConfig, options?: any): Promise<any>

  Convert a Document to some HTML display for embedding purposes.

  #### Parameters

  + config: DocumentHTMLEmbedConfig

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed
    content also contains text that must be enriched.

  #### Returns Promise<any>

  A representation of the Document as HTML content,
  or null if such a representation could not be generated.

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from Base.toJSON

### toObject

* toObject(source?: boolean): any

  #### Parameters

  + source: boolean = true

  #### Returns any

  #### Inherit Doc

  Inherited from Base.toObject

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from Base.traverseEmbeddedDocuments

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

  Inherited from Base.unsetFlag

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

  Inherited from Base.update

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

  Inherited from Base.updateEmbeddedDocuments

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

  Inherited from Base.updateSource

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

  Inherited from Base.validate

### `Protected`\_buildEmbedHTML

* \_buildEmbedHTML(  
  Â Â Â Â config: DocumentHTMLEmbedConfig,  
  Â Â Â Â options?: any,  
  ): Promise<HTMLElement | HTMLCollection | null>

  `Protected`

  A method that can be overridden by subclasses to customize embedded HTML generation.

  #### Parameters

  + config: DocumentHTMLEmbedConfig

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed
    content also contains text that must be enriched.

  #### Returns Promise<HTMLElement | HTMLCollection | null>

  Either a single root element to append, or a collection of
  elements that comprise the embedded content.

### `Protected`\_createFigureEmbed

* \_createFigureEmbed(  
  Â Â Â Â content: HTMLElement | HTMLCollection,  
  Â Â Â Â config: DocumentHTMLEmbedConfig,  
  Â Â Â Â options?: any,  
  ): Promise<HTMLElement | null>

  `Protected`

  A method that can be overridden by subclasses to customize the generation of the embed figure.

  #### Parameters

  + content: HTMLElement | HTMLCollection

    The embedded content.
  + config: DocumentHTMLEmbedConfig

    Configuration for embedding behavior.
  + `Optional`options: any

    The original enrichment options for cases where the Document embed
    content also contains text that must be enriched.

  #### Returns Promise<HTMLElement | null>

### `Protected`\_createInlineEmbed

* \_createInlineEmbed(  
  Â Â Â Â content: HTMLElement | HTMLCollection,  
  Â Â Â Â config?: any,  
  Â Â Â Â options?: any,  
  ): Promise<HTMLElement | null>

  `Protected`

  A method that can be overridden by subclasses to customize inline embedded HTML generation.

  #### Parameters

  + content: HTMLElement | HTMLCollection

    The embedded content.
  + `Optional`config: any

    Configuration for embedding behavior.
  + `Optional`options: any

    The original enrichment options for cases where the Document embed
    content also contains text that must be enriched.

  #### Returns Promise<HTMLElement | null>

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

  Inherited from Base.\_getInnerModel

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

  Inherited from Base.\_initializeSource

### `Protected`\_onClickDocumentLink

* \_onClickDocumentLink(  
  Â Â Â Â event: PointerEvent,  
  ):  
  Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>  
  Â Â Â Â | Promise<  
  Â Â Â Â Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â >  
  Â Â Â Â | null

  `Protected`

  Handle clicking on a content link for this document.

  #### Parameters

  + event: PointerEvent

    The triggering click event.

  #### Returns Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)> Â Â Â Â | Promise< Â Â Â Â Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>, Â Â Â Â > Â Â Â Â | null

### `Protected`\_onCreateDescendantDocuments

* \_onCreateDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â data: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been created and changes have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the created Documents, may be this Document or a child
  + collection: string

    The collection within which documents were created
  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The array of created Documents
  + data: object[]

    The source data for new documents that were created
  + options: object

    Options which modified the creation operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

### `Protected`\_onDeleteDescendantDocuments

* \_onDeleteDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â ids: string[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been deleted and those deletions have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the deleted Documents, may be this Document or a child
  + collection: string

    The collection within which documents were deleted
  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The array of Documents which were deleted
  + ids: string[]

    The array of document IDs which were deleted
  + options: object

    Options which modified the deletion operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

### `Protected`\_onUpdateDescendantDocuments

* \_onUpdateDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â changes: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been updated and changes have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the updated Documents, may be this Document or a child
  + collection: string

    The collection within which documents were updated
  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The array of updated Documents
  + changes: object[]

    The array of differential Document updates which were applied
  + options: object

    Options which modified the update operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

### `Protected`\_preCreateDescendantDocuments

* \_preCreateDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â data: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been created, but before changes are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the created Documents, may be this Document or a child
  + collection: string

    The collection within which documents are being created
  + data: object[]

    The source data for new documents that are being created
  + options: object

    Options which modified the creation operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

### `Protected`\_preDeleteDescendantDocuments

* \_preDeleteDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been deleted, but before deletions are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the deleted Documents, may be this Document or a child
  + collection: string

    The collection within which documents were deleted
  + ids: string[]

    The array of document IDs which were deleted
  + options: object

    Options which modified the deletion operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

### `Protected`\_preUpdateDescendantDocuments

* \_preUpdateDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â changes: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been updated, but before changes are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The direct parent of the updated Documents, may be this Document or a child
  + collection: string

    The collection within which documents are being updated
  + changes: object[]

    The array of differential Document updates to be applied
  + options: object

    Options which modified the update operation
  + userId: string

    The ID of the User who triggered the operation

  #### Returns void

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

  Inherited from Base.\_preUpdateSource

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

  Inherited from Base.\_updateCommit

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

  Inherited from Base.\_addDataFieldMigration

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

  Inherited from Base.\_addDataFieldShim

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

  Inherited from Base.\_addDataFieldShims

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

  Inherited from Base.\_clearFieldsRecursively

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

  Inherited from Base.\_logDataFieldMigration

### `Static`\_onCreateOperation

* \_onCreateOperation(documents: any, operation: any, user: any): Promise<void>

  #### Parameters

  + documents: any
  + operation: any
  + user: any

  #### Returns Promise<void>

  Overrides Base.\_onCreateOperation

### `Static`\_preCleanData

* \_preCleanData(data: any, options: any, \_state: any): void

  #### Parameters

  + data: any
  + options: any
  + \_state: any

  #### Returns void

  #### Inherit Doc

  Inherited from Base.\_preCleanData

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

  Inherited from Base.canUserCreate

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

  Inherited from Base.cleanData

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

  Inherited from Base.create

### `Static`createDialog

* createDialog(  
  Â Â Â Â data?: object,  
  Â Â Â Â createOptions?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â context?: object;  
  Â Â Â Â Â Â Â Â folders?: { id: string; name: string }[];  
  Â Â Â Â Â Â Â Â template?: string;  
  Â Â Â Â Â Â Â Â types?: string[];  
  Â Â Â Â },  
  Â Â Â Â renderOptions?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null>

  Present a Dialog form to create a new Document of this type.
  Choose a name and a type from a select menu of types.

  #### Parameters

  + data: object = {}

    Document creation data
  + `Optional`createOptions: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md) = {}

    Document creation options.
  + `Optional`options: {  
    Â Â Â Â context?: object;  
    Â Â Â Â folders?: { id: string; name: string }[];  
    Â Â Â Â template?: string;  
    Â Â Â Â types?: string[];  
    } = {}

    Options forwarded to DialogV2.prompt

    - ##### `Optional`context?: object

      Additional render context to provide to the template.
    - ##### `Optional`folders?: { id: string; name: string }[]

      Available folders in which the new Document can be place
    - ##### `Optional`template?: string

      A template to use for the dialog contents instead of the default.
    - ##### `Optional`types?: string[]

      A restriction of the selectable sub-types of the Dialog.
  + `Optional`renderOptions: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Options to forward to the document sheet's render call.

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null>

  A Promise which resolves to the created Document, or null if the dialog was
  closed.

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

  Inherited from Base.createDocuments

### `Static`defaultName

* defaultName(  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â pack?: string | null;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
  Â Â Â Â Â Â Â Â type?: string;  
  Â Â Â Â },  
  ): string

  Gets the default new name for a Document

  #### Parameters

  + context: {  
    Â Â Â Â pack?: string | null;  
    Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
    Â Â Â Â type?: string;  
    } = {}

    The context for which to create the Document name.

    - ##### `Optional`pack?: string | null

      A compendium pack within which the Document should be created
    - ##### `Optional`parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

      A parent document within which the created Document should belong
    - ##### `Optional`type?: string

      The sub-type of the document

  #### Returns string

### `Static` `Abstract`defineSchema

* defineSchema(): [DataSchema](../types/foundry.abstract.types.DataSchema.md)

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

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.md)

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

  Inherited from Base.defineSchema

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

  Inherited from Base.deleteDocuments

### `Static`fromDropData

* fromDropData(  
  Â Â Â Â data: object,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  A helper function to handle obtaining the relevant Document from dropped data provided via a DataTransfer event.
  The dropped data could have:

  1. A data object explicitly provided
  2. A UUID

  #### Parameters

  + data: object

    The data object extracted from a DataTransfer event

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The resolved Document

  #### Throws

  If a Document could not be retrieved from the provided data.

### `Static`fromImport

* fromImport(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Create the Document from the given source with migration applied to it.
  Only primary Documents may be imported.

  This function must be used to create a document from data that predates the current core version.
  It must be given nonpartial data matching the schema it had in the core version it is coming from.
  It applies legacy migrations to the source data before calling [foundry.abstract.Document.fromSource](foundry.abstract.DataModel.md#fromsource).
  If this function is not used to import old data, necessary migrations may not applied to the data
  resulting in an incorrectly imported document.

  The core version is recorded in the `_stats` field, which all primary documents have. If the given source data
  doesn't contain a `_stats` field, the data is assumed to be pre-V10, when the `_stats` field didn't exist yet.
  The `_stats` field must not be stripped from the data before it is exported!

  #### Parameters

  + source: object

    The document data that is imported.
  + `Optional`context: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)

    The model construction context passed to
    [foundry.abstract.Document.fromSource](foundry.abstract.DataModel.md#fromsource). Strict validation is
    enabled by default.

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from Base.fromJSON

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

  Inherited from Base.fromSource

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

  Inherited from Base.get

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

  Inherited from Base.getCollectionName

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

  Inherited from Base.migrateData

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

  Inherited from Base.migrateDataSafe

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

  Inherited from Base.shimData

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

  Inherited from Base.updateDocuments

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

  Inherited from Base.validateJoint

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

  Inherited from Base.\_cleanData

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

  Inherited from Base.\_onDeleteOperation

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

  Inherited from Base.\_onUpdateOperation

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

  Inherited from Base.\_preCreateOperation

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

  Inherited from Base.\_preDeleteOperation

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

  Inherited from Base.\_preUpdateOperation