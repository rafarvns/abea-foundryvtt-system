---
title: "ClientDocument | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.ClientDocument.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [ClientDocument](foundry.ClientDocument.html)

# Class ClientDocument

The ClientDocument extends the base Document class by adding client-specific behaviors to all Document types.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.ClientDocument))

* Base
  + ClientDocument
    - [CanvasDocument](foundry.CanvasDocument.html)

##### Index

### Properties

[\_source](foundry.ClientDocument.html#_source)
[parent](foundry.ClientDocument.html#parent)
[\_schema](foundry.ClientDocument.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.ClientDocument.html#localization_prefixes)
[metadata](foundry.ClientDocument.html#metadata)
[name](foundry.ClientDocument.html#name)

### Accessors

[collection](foundry.ClientDocument.html#collection)
[compendium](foundry.ClientDocument.html#compendium)
[hasPlayerOwner](foundry.ClientDocument.html#hasplayerowner)
[id](foundry.ClientDocument.html#id)
[inCompendium](foundry.ClientDocument.html#incompendium)
[invalid](foundry.ClientDocument.html#invalid)
[isEmbedded](foundry.ClientDocument.html#isembedded)
[isOwner](foundry.ClientDocument.html#isowner)
[limited](foundry.ClientDocument.html#limited)
[link](foundry.ClientDocument.html#link)
[permission](foundry.ClientDocument.html#permission)
[schema](foundry.ClientDocument.html#schema)
[sheet](foundry.ClientDocument.html#sheet)
[uuid](foundry.ClientDocument.html#uuid)
[validationFailures](foundry.ClientDocument.html#validationfailures)
[visible](foundry.ClientDocument.html#visible)
[baseDocument](foundry.ClientDocument.html#basedocument)
[collectionName](foundry.ClientDocument.html#collectionname)
[database](foundry.ClientDocument.html#database)
[documentName](foundry.ClientDocument.html#documentname)
[hasTypeData](foundry.ClientDocument.html#hastypedata)
[hierarchy](foundry.ClientDocument.html#hierarchy)
[implementation](foundry.ClientDocument.html#implementation)
[schema](foundry.ClientDocument.html#schema-2)
[TYPES](foundry.ClientDocument.html#types)

### Methods

[\_configure](foundry.ClientDocument.html#_configure)
[\_createDocumentLink](foundry.ClientDocument.html#_createdocumentlink)
[\_dispatchDescendantDocumentEvents](foundry.ClientDocument.html#_dispatchdescendantdocumentevents)
[\_getParentCollection](foundry.ClientDocument.html#_getparentcollection)
[\_getSheetClass](foundry.ClientDocument.html#_getsheetclass)
[\_initialize](foundry.ClientDocument.html#_initialize)
[\_onCreate](foundry.ClientDocument.html#_oncreate)
[\_onDelete](foundry.ClientDocument.html#_ondelete)
[\_onSheetChange](foundry.ClientDocument.html#_onsheetchange)
[\_onUpdate](foundry.ClientDocument.html#_onupdate)
[\_preCreate](foundry.ClientDocument.html#_precreate)
[\_preDelete](foundry.ClientDocument.html#_predelete)
[\_preUpdate](foundry.ClientDocument.html#_preupdate)
[\_safePrepareData](foundry.ClientDocument.html#_safepreparedata)
[canUserModify](foundry.ClientDocument.html#canusermodify)
[clone](foundry.ClientDocument.html#clone)
[createEmbeddedDocuments](foundry.ClientDocument.html#createembeddeddocuments)
[delete](foundry.ClientDocument.html#delete)
[deleteDialog](foundry.ClientDocument.html#deletedialog)
[deleteEmbeddedDocuments](foundry.ClientDocument.html#deleteembeddeddocuments)
[exportToJSON](foundry.ClientDocument.html#exporttojson)
[getEmbeddedCollection](foundry.ClientDocument.html#getembeddedcollection)
[getEmbeddedDocument](foundry.ClientDocument.html#getembeddeddocument)
[getFlag](foundry.ClientDocument.html#getflag)
[getRelativeUUID](foundry.ClientDocument.html#getrelativeuuid)
[getUserLevel](foundry.ClientDocument.html#getuserlevel)
[importFromJSON](foundry.ClientDocument.html#importfromjson)
[importFromJSONDialog](foundry.ClientDocument.html#importfromjsondialog)
[migrateSystemData](foundry.ClientDocument.html#migratesystemdata)
[onEmbed](foundry.ClientDocument.html#onembed)
[prepareBaseData](foundry.ClientDocument.html#preparebasedata)
[prepareData](foundry.ClientDocument.html#preparedata)
[prepareDerivedData](foundry.ClientDocument.html#preparederiveddata)
[prepareEmbeddedDocuments](foundry.ClientDocument.html#prepareembeddeddocuments)
[render](foundry.ClientDocument.html#render)
[reset](foundry.ClientDocument.html#reset)
[setFlag](foundry.ClientDocument.html#setflag)
[sortRelative](foundry.ClientDocument.html#sortrelative)
[testUserPermission](foundry.ClientDocument.html#testuserpermission)
[toAnchor](foundry.ClientDocument.html#toanchor)
[toCompendium](foundry.ClientDocument.html#tocompendium)
[toDragData](foundry.ClientDocument.html#todragdata)
[toEmbed](foundry.ClientDocument.html#toembed)
[toJSON](foundry.ClientDocument.html#tojson)
[toObject](foundry.ClientDocument.html#toobject)
[traverseEmbeddedDocuments](foundry.ClientDocument.html#traverseembeddeddocuments)
[unsetFlag](foundry.ClientDocument.html#unsetflag)
[update](foundry.ClientDocument.html#update)
[updateEmbeddedDocuments](foundry.ClientDocument.html#updateembeddeddocuments)
[updateSource](foundry.ClientDocument.html#updatesource)
[validate](foundry.ClientDocument.html#validate)
[\_buildEmbedHTML](foundry.ClientDocument.html#_buildembedhtml)
[\_createFigureEmbed](foundry.ClientDocument.html#_createfigureembed)
[\_createInlineEmbed](foundry.ClientDocument.html#_createinlineembed)
[\_initializeSource](foundry.ClientDocument.html#_initializesource)
[\_onClickDocumentLink](foundry.ClientDocument.html#_onclickdocumentlink)
[\_onCreateDescendantDocuments](foundry.ClientDocument.html#_oncreatedescendantdocuments)
[\_onDeleteDescendantDocuments](foundry.ClientDocument.html#_ondeletedescendantdocuments)
[\_onUpdateDescendantDocuments](foundry.ClientDocument.html#_onupdatedescendantdocuments)
[\_preCreateDescendantDocuments](foundry.ClientDocument.html#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](foundry.ClientDocument.html#_predeletedescendantdocuments)
[\_preUpdateDescendantDocuments](foundry.ClientDocument.html#_preupdatedescendantdocuments)
[\_addDataFieldMigration](foundry.ClientDocument.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.ClientDocument.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.ClientDocument.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.ClientDocument.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.ClientDocument.html#_initializationorder)
[\_logDataFieldMigration](foundry.ClientDocument.html#_logdatafieldmigration)
[canUserCreate](foundry.ClientDocument.html#canusercreate)
[cleanData](foundry.ClientDocument.html#cleandata)
[create](foundry.ClientDocument.html#create)
[createDialog](foundry.ClientDocument.html#createdialog)
[createDocuments](foundry.ClientDocument.html#createdocuments)
[defaultName](foundry.ClientDocument.html#defaultname)
[defineSchema](foundry.ClientDocument.html#defineschema)
[deleteDocuments](foundry.ClientDocument.html#deletedocuments)
[fromDropData](foundry.ClientDocument.html#fromdropdata)
[fromImport](foundry.ClientDocument.html#fromimport)
[fromJSON](foundry.ClientDocument.html#fromjson)
[fromSource](foundry.ClientDocument.html#fromsource)
[get](foundry.ClientDocument.html#get)
[getCollectionName](foundry.ClientDocument.html#getcollectionname)
[migrateData](foundry.ClientDocument.html#migratedata)
[migrateDataSafe](foundry.ClientDocument.html#migratedatasafe)
[shimData](foundry.ClientDocument.html#shimdata)
[updateDocuments](foundry.ClientDocument.html#updatedocuments)
[validateJoint](foundry.ClientDocument.html#validatejoint)
[\_onCreateOperation](foundry.ClientDocument.html#_oncreateoperation)
[\_onDeleteOperation](foundry.ClientDocument.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.ClientDocument.html#_onupdateoperation)
[\_preCreateOperation](foundry.ClientDocument.html#_precreateoperation)
[\_preDeleteOperation](foundry.ClientDocument.html#_predeleteoperation)
[\_preUpdateOperation](foundry.ClientDocument.html#_preupdateoperation)

## Properties

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from Base.\_source

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from Base.parent

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from Base.\_schema

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from Base.LOCALIZATION\_PREFIXES

### `Static`metadata

metadata: Readonly<[DocumentClassMetadata](../interfaces/foundry.abstract.types.DocumentClassMetadata.html)> = ...

Default metadata which applies to each instance of this Document type.

Inherited from Base.metadata

### `Static`name

name: string = "ClientDocumentMixin"

#### Inherit Doc

## Accessors

### collection

* get collection(...this: any): null | [Collection](foundry.utils.Collection.html)<any, any>

  Return a reference to the parent Collection instance that contains this Document.

  #### Parameters

  + ...this: any

  #### Returns null | [Collection](foundry.utils.Collection.html)<any, any>

### compendium

* get compendium(): undefined | null | [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>

  #### Returns undefined | null | [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>

  Overrides Base.compendium

### hasPlayerOwner

* get hasPlayerOwner(): boolean

  Test whether this Document is owned by any non-Gamemaster User.

  #### Returns boolean

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

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

* get permission(): number

  Return the permission level that the current game User has over this Document.
  See the CONST.DOCUMENT\_OWNERSHIP\_LEVELS object for an enumeration of these levels.

  #### Returns number

  #### Example: Get the permission level the current user has for a document

  ```
  game.user.id; // "dkasjkkj23kjf"  
  actor.data.permission; // {default: 1, "dkasjkkj23kjf": 2};  
  actor.permission; // 2
  Copy
  ```

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from Base.schema

### sheet

* get sheet(): | null  
  | [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

  Lazily obtain a Application instance used to configure this Document, or null if no sheet is available.

  #### Returns null | [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from Base.uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from Base.validationFailures

### visible

* get visible(): boolean

  A boolean indicator for whether the current game User has at least limited visibility for this Document.
  Different Document types may have more specialized rules for what determines visibility.

  #### Returns boolean

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from Base.baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from Base.collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

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

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from Base.implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

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
  Â Â Â Â options?: { label?: string; relativeTo?: [ClientDocument](foundry.ClientDocument.html) },  
  ): string

  `Internal`

  Create a content link for this document.

  #### Parameters

  + eventData: object

    The parsed object of data provided by the drop transfer event.
  + `Optional`options: { label?: string; relativeTo?: [ClientDocument](foundry.ClientDocument.html) } = {}

    Additional options to configure link generation.

    - ##### `Optional`label?: string

      A custom label to use instead of the document's name.
    - ##### `Optional`relativeTo?: [ClientDocument](foundry.ClientDocument.html)

      A document to generate a link relative to.

  #### Returns string

### \_dispatchDescendantDocumentEvents

* \_dispatchDescendantDocumentEvents(  
  Â Â Â Â event: string,  
  Â Â Â Â collection: string,  
  Â Â Â Â args: any[],  
  Â Â Â Â \_parent?: [ClientDocument](foundry.ClientDocument.html),  
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
  + `Optional`\_parent: [ClientDocument](foundry.ClientDocument.html)

    The document with directly modified embedded documents.
    Either this document or a descendant of this one.

  #### Returns void

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from Base.\_getParentCollection

### \_getSheetClass

* \_getSheetClass(): null | Function

  `Internal`

  Obtain the Application class constructor which should be used to configure this Document.

  #### Returns null | Function

### \_initialize

* \_initialize(...this: any, options?: {}): void

  #### Parameters

  + ...this: any
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

  Inherited from Base.canUserModify

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

  Inherited from Base.clone

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

  Inherited from Base.createEmbeddedDocuments

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

  Inherited from Base.delete

### deleteDialog

* deleteDialog(  
  Â Â Â Â options?: object,  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Present a Dialog form to confirm deletion of this Document.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to `DialogV2.confirm`
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html) = {}

    Document deletion options.

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  A Promise that resolves to the deleted Document

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

  Inherited from Base.deleteEmbeddedDocuments

### exportToJSON

* exportToJSON(options?: object): void

  Export document data to a JSON file which can be saved by the client and later imported into a different session.
  Only world Documents may be exported.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to the [ClientDocument#toCompendium](foundry.ClientDocument.html#tocompendium) method

  #### Returns void

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from Base.getEmbeddedCollection

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

  Inherited from Base.getEmbeddedDocument

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

### getRelativeUUID

* getRelativeUUID(relative: [ClientDocument](foundry.ClientDocument.html)): string

  Construct a UUID relative to another document.

  #### Parameters

  + relative: [ClientDocument](foundry.ClientDocument.html)

    The document to compare against.

  #### Returns string

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

  Inherited from Base.getUserLevel

### importFromJSON

* importFromJSON(...this: any, json: string): Promise<[ClientDocument](foundry.ClientDocument.html)>

  Update this Document using a provided JSON string.
  Only world Documents may be imported.

  #### Parameters

  + ...this: any
  + json: string

    Raw JSON data to import

  #### Returns Promise<[ClientDocument](foundry.ClientDocument.html)>

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
  [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.html#preparebasedata) on your data models
  instead of this method directly on the document.

  #### Returns void

### prepareData

* prepareData(): void

  Prepare data for the Document. This method provides an opportunity for Document classes to define special data
  preparation logic to compute values that don't need to be stored in the database, such as a "bloodied" hp value
  or the total carrying weight of items. The work done by this method should be idempotent per initialization.
  There are situations in which prepareData may be called more than once.

  By default, foundry calls the following methods in order whenever the document is created or updated.

  1. [reset](foundry.ClientDocument.html#reset) (Inherited from DataModel)
  2. [\_initialize](foundry.ClientDocument.html#_initialize) (Inherited from DataModel)
  3. [prepareData](foundry.ClientDocument.html#preparedata)
  4. [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.html#preparebasedata)
  5. [prepareBaseData](foundry.ClientDocument.html#preparebasedata)
  6. [prepareEmbeddedDocuments](foundry.ClientDocument.html#prepareembeddeddocuments)
  7. [TypeDataModel#prepareBaseData](foundry.abstract.TypeDataModel.html#preparederiveddata)
  8. [prepareDerivedData](foundry.ClientDocument.html#preparederiveddata)

  Do NOT invoke database operations like [update](foundry.ClientDocument.html#update) or [setFlag](foundry.ClientDocument.html#setflag) within data prep, as that can cause an
  infinite loop by re-triggering the data initialization process.

  If possible you should extend [prepareBaseData](foundry.ClientDocument.html#preparebasedata) and [prepareDerivedData](foundry.ClientDocument.html#preparederiveddata) instead of this function
  directly, but some systems with more complicated calculations may want to override this function to add extra
  steps, such as to calculate certain item values after actor data prep.

  #### Returns void

### prepareDerivedData

* prepareDerivedData(): void

  Apply transformations or derivations to the values of the source data object.
  Compute data fields whose values are not stored to the database.

  If possible when modifying the `system` object you should use
  [TypeDataModel#prepareDerivedData](foundry.abstract.TypeDataModel.html#preparederiveddata) on your data models
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

  [foundry.applications.api.ApplicationV2#render](foundry.applications.api.ApplicationV2.html#render)

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

  Inherited from Base.setFlag

### sortRelative

* sortRelative(  
  Â Â Â Â options?: { sortOptions?: object; updateData?: object },  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Determine the sort order for this Document by positioning it relative a target sibling.
  See SortingHelper.performIntegerSort for more details

  #### Parameters

  + `Optional`options: { sortOptions?: object; updateData?: object } = {}

    Sorting options provided to SortingHelper.performIntegerSort

    - ##### `Optional`sortOptions?: object

      Options passed to the foundry.utils.performIntegerSort method
    - ##### `Optional`updateData?: object

      Additional data changes applied to each sorted document

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The Document after it has been re-sorted

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
  Â Â Â Â pack?: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â clearFlags?: boolean;  
  Â Â Â Â Â Â Â Â clearFolder?: boolean;  
  Â Â Â Â Â Â Â Â clearOwnership?: boolean;  
  Â Â Â Â Â Â Â Â clearSort?: boolean;  
  Â Â Â Â Â Â Â Â clearSource?: boolean;  
  Â Â Â Â Â Â Â Â clearState?: boolean;  
  Â Â Â Â Â Â Â Â keepId?: boolean;  
  Â Â Â Â },  
  ): object

  Transform the Document data to be stored in a Compendium pack.
  Remove any features of the data which are world-specific.

  #### Parameters

  + `Optional`pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>

    A specific pack being exported to
  + `Optional`options: {  
    Â Â Â Â clearFlags?: boolean;  
    Â Â Â Â clearFolder?: boolean;  
    Â Â Â Â clearOwnership?: boolean;  
    Â Â Â Â clearSort?: boolean;  
    Â Â Â Â clearSource?: boolean;  
    Â Â Â Â clearState?: boolean;  
    Â Â Â Â keepId?: boolean;  
    } = {}

    Additional options which modify how the document is converted

    - ##### `Optional`clearFlags?: boolean

      Clear the flags object
    - ##### `Optional`clearFolder?: boolean

      Clear the currently assigned folder
    - ##### `Optional`clearOwnership?: boolean

      Clear document ownership (recursive). Default ownership is
      preserved.
    - ##### `Optional`clearSort?: boolean

      Clear the currently assigned sort order
    - ##### `Optional`clearSource?: boolean

      Clear any prior source information
    - ##### `Optional`clearState?: boolean

      Clear fields which store document state (recursive)
    - ##### `Optional`keepId?: boolean

      Retain the current Document id

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
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Remove a flag assigned to the document

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The updated document instance

  Inherited from Base.unsetFlag

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

  Inherited from Base.update

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

  Inherited from Base.updateEmbeddedDocuments

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

  Inherited from Base.updateSource

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

  Inherited from Base.validate

### `Protected`\_buildEmbedHTML

* \_buildEmbedHTML(  
  Â Â Â Â config: DocumentHTMLEmbedConfig,  
  Â Â Â Â options?: any,  
  ): Promise<null | HTMLElement | HTMLCollection>

  `Protected`

  A method that can be overridden by subclasses to customize embedded HTML generation.

  #### Parameters

  + config: DocumentHTMLEmbedConfig

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed
    content also contains text that must be enriched.

  #### Returns Promise<null | HTMLElement | HTMLCollection>

  Either a single root element to append, or a collection of
  elements that comprise the embedded content.

### `Protected`\_createFigureEmbed

* \_createFigureEmbed(  
  Â Â Â Â content: HTMLElement | HTMLCollection,  
  Â Â Â Â config: DocumentHTMLEmbedConfig,  
  Â Â Â Â options?: any,  
  ): Promise<null | HTMLElement>

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

  #### Returns Promise<null | HTMLElement>

### `Protected`\_createInlineEmbed

* \_createInlineEmbed(  
  Â Â Â Â content: HTMLElement | HTMLCollection,  
  Â Â Â Â config?: any,  
  Â Â Â Â options?: any,  
  ): Promise<null | HTMLElement>

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

  #### Returns Promise<null | HTMLElement>

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

  Inherited from Base.\_initializeSource

### `Protected`\_onClickDocumentLink

* \_onClickDocumentLink(  
  Â Â Â Â event: PointerEvent,  
  ):  
  Â Â Â Â | null  
  Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>  
  Â Â Â Â | Promise<  
  Â Â Â Â Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>,  
  Â Â Â Â >

  `Protected`

  Handle clicking on a content link for this document.

  #### Parameters

  + event: PointerEvent

    The triggering click event.

  #### Returns Â Â Â Â | null Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)> Â Â Â Â | Promise< Â Â Â Â Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>, Â Â Â Â >

### `Protected`\_onCreateDescendantDocuments

* \_onCreateDescendantDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â data: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been created and changes have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The direct parent of the created Documents, may be this Document or a child
  + collection: string

    The collection within which documents were created
  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

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
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â ids: string[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been deleted and those deletions have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The direct parent of the deleted Documents, may be this Document or a child
  + collection: string

    The collection within which documents were deleted
  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

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
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â changes: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been updated and changes have been applied to client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The direct parent of the updated Documents, may be this Document or a child
  + collection: string

    The collection within which documents were updated
  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

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
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â data: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been created, but before changes are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

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
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been deleted, but before deletions are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

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
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â collection: string,  
  Â Â Â Â changes: object[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  `Protected`

  Actions taken after descendant documents have been updated, but before changes are applied to the client data.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

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

  Inherited from Base.\_clearFieldsRecursively

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from Base.\_initializationOrder

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

  Inherited from Base.\_logDataFieldMigration

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

  Inherited from Base.canUserCreate

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

  Inherited from Base.cleanData

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

  Inherited from Base.create

### `Static`createDialog

* createDialog(  
  Â Â Â Â data?: object,  
  Â Â Â Â createOptions?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â context?: object;  
  Â Â Â Â Â Â Â Â folders?: { id: string; name: string }[];  
  Â Â Â Â Â Â Â Â template?: string;  
  Â Â Â Â Â Â Â Â types?: string[];  
  Â Â Â Â },  
  ): Promise<null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Present a Dialog form to create a new Document of this type.
  Choose a name and a type from a select menu of types.

  #### Parameters

  + data: object = {}

    Document creation data
  + `Optional`createOptions: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html) = {}

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

  #### Returns Promise<null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  A Promise which resolves to the created Document, or null if the dialog was
  closed.

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

  Inherited from Base.createDocuments

### `Static`defaultName

* defaultName(  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â pack?: null | string;  
  Â Â Â Â Â Â Â Â parent?: null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>;  
  Â Â Â Â Â Â Â Â type?: string;  
  Â Â Â Â },  
  ): string

  Gets the default new name for a Document

  #### Parameters

  + context: {  
    Â Â Â Â pack?: null | string;  
    Â Â Â Â parent?: null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>;  
    Â Â Â Â type?: string;  
    } = {}

    The context for which to create the Document name.

    - ##### `Optional`pack?: null | string

      A compendium pack within which the Document should be created
    - ##### `Optional`parent?: null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

      A parent document within which the created Document should belong
    - ##### `Optional`type?: string

      The sub-type of the document

  #### Returns string

### `Static` `Abstract`defineSchema

* defineSchema(): [DataSchema](../types/foundry.abstract.types.DataSchema.html)

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.ClientDocument.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.html)

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

  Inherited from Base.deleteDocuments

### `Static`fromDropData

* fromDropData(  
  Â Â Â Â data: object,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  A helper function to handle obtaining the relevant Document from dropped data provided via a DataTransfer event.
  The dropped data could have:

  1. A data object explicitly provided
  2. A UUID

  #### Parameters

  + data: object

    The data object extracted from a DataTransfer event

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The resolved Document

  #### Throws

  If a Document could not be retrieved from the provided data.

### `Static`fromImport

* fromImport(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Create the Document from the given source with migration applied to it.
  Only primary Documents may be imported.

  This function must be used to create a document from data that predates the current core version.
  It must be given nonpartial data matching the schema it had in the core version it is coming from.
  It applies legacy migrations to the source data before calling [foundry.abstract.Document.fromSource](foundry.abstract.DataModel.html#fromsource).
  If this function is not used to import old data, necessary migrations may not applied to the data
  resulting in an incorrectly imported document.

  The core version is recorded in the `_stats` field, which all primary documents have. If the given source data
  doesn't contain a `_stats` field, the data is assumed to be pre-V10, when the `_stats` field didn't exist yet.
  The `_stats` field must not be stripped from the data before it is exported!

  #### Parameters

  + source: object

    The document data that is imported.
  + `Optional`context: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)

    The model construction context passed to
    [foundry.abstract.Document.fromSource](foundry.abstract.DataModel.html#fromsource). Strict validation is
    enabled by default.

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from Base.fromJSON

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

  Inherited from Base.fromSource

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

  Inherited from Base.get

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

  Inherited from Base.getCollectionName

### `Static`migrateData

* migrateData(source: object): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from Base.migrateData

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

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

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.ClientDocument.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from Base.\_onCreateOperation

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.ClientDocument.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from Base.\_onDeleteOperation

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.ClientDocument.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from Base.\_onUpdateOperation

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.ClientDocument.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.ClientDocument.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from Base.\_preCreateOperation

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.ClientDocument.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.ClientDocument.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from Base.\_preDeleteOperation

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.ClientDocument.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from Base.\_preUpdateOperation