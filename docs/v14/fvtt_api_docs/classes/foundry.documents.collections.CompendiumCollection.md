---
title: "CompendiumCollection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.collections.CompendiumCollection.html"
category: "classes"
---

# Class CompendiumCollection<TDocument>

A collection of Document objects contained within a specific compendium pack.
Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.

### Hook Events

* [hookEvents.updateCompendium](../functions/hookEvents.updateCompendium.md)

#### Template: TDocument

#### See

[foundry.Game#packs](foundry.Game.md#packs)

#### Type Parameters

* TDocument extends [Document](foundry.abstract.Document.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.collections.CompendiumCollection))

* [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<[TDocument](#tdocument), this>
  + CompendiumCollection

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[applicationClass](#applicationclass)
[apps](#apps)
[index](#index)
[invalidDocumentIds](#invaliddocumentids)
[CACHE\_LIFETIME\_SECONDS](#cache_lifetime_seconds)
[CONFIG\_SETTING](#config_setting)
[documentName](#documentname)

### Accessors

[banner](#banner)
[collection](#collection)
[config](#config)
[contents](#contents)
[documentClass](#documentclass)
[documentName](#documentname-1)
[folder](#folder)
[indexed](#indexed)
[indexFields](#indexfields)
[locked](#locked)
[maxFolderDepth](#maxfolderdepth)
[name](#name)
[ownership](#ownership)
[sort](#sort)
[title](#title)
[visible](#visible)
[CONFIG\_FIELD](#config_field)

### Methods

[\_getVisibleTreeContents](#_getvisibletreecontents)
[\_onModifyContents](#_onmodifycontents)
[\_prepareImportDocument](#_prepareimportdocument)
[[iterator]](#iterator)
[clear](#clear)
[configure](#configure)
[configureOwnershipDialog](#configureownershipdialog)
[createDocument](#createdocument)
[delete](#delete)
[deleteCompendium](#deletecompendium)
[duplicateCompendium](#duplicatecompendium)
[every](#every)
[filter](#filter)
[find](#find)
[forEach](#foreach)
[get](#get)
[getDocument](#getdocument)
[getDocuments](#getdocuments)
[getIndex](#getindex)
[getInvalid](#getinvalid)
[getName](#getname)
[getUserLevel](#getuserlevel)
[getUuid](#getuuid)
[importAll](#importall)
[importDialog](#importdialog)
[importDocument](#importdocument)
[importFolder](#importfolder)
[importFolders](#importfolders)
[indexDocument](#indexdocument)
[map](#map)
[migrate](#migrate)
[reduce](#reduce)
[render](#render)
[search](#search)
[set](#set)
[setFolder](#setfolder)
[some](#some)
[testUserPermission](#testuserpermission)
[toJSON](#tojson)
[updateAll](#updateall)
[\_initialize](#_initialize)
[\_activateSocketListeners](#_activatesocketlisteners)
[\_onConfigure](#_onconfigure)
[createCompendium](#createcompendium)
[getSearchableFields](#getsearchablefields)

## Constructors

### constructor

* new CompendiumCollection<  
  Â Â Â Â [TDocument](#constructorcompendiumcollectiontdocument) extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  >(  
  Â Â Â Â metadata: object,  
  ): CompendiumCollection<[TDocument](#tdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  #### Parameters

  + metadata: object

    The compendium metadata, an object provided by game.data

  #### Returns CompendiumCollection<[TDocument](#tdocument)>

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[constructor](foundry.documents.abstract.DocumentCollection.md#constructor)

## Properties

### `Internal`\_source

\_source: object[]

The source data array from which the Documents in the WorldCollection are created

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_source](foundry.documents.abstract.DocumentCollection.md#_source)

### applicationClass

applicationClass: typeof [Application](foundry.appv1.api.Application.md) | typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = foundry.applications.sidebar.apps.Compendium

A reference to the Application class which provides an interface to interact with this compendium content.

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>[] = []

An Array of application references which will be automatically updated when the collection content changes

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[apps](foundry.documents.abstract.DocumentCollection.md#apps)

### index

index: [Collection](foundry.utils.Collection.md)<string, object>

A subsidiary collection which contains the more minimal index of the pack

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[invalidDocumentIds](foundry.documents.abstract.DocumentCollection.md#invaliddocumentids)

### `Static`CACHE\_LIFETIME\_SECONDS

CACHE\_LIFETIME\_SECONDS: number = 300

The amount of time that Document instances within this CompendiumCollection are held in memory.
Accessing the contents of the Compendium pack extends the duration of this lifetime.

### `Static`CONFIG\_SETTING

CONFIG\_SETTING: string = "compendiumConfiguration"

The named game setting which contains Compendium configurations.

### `Static`documentName

documentName: string

The base Document type which is contained within this DocumentCollection

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[documentName](foundry.documents.abstract.DocumentCollection.md#documentname)

## Accessors

### banner

* get banner(): string | void | null

  The banner image for this Compendium pack, or the default image for the pack type if no image is set.

  #### Returns string | void | null

### collection

* get collection(): string

  The canonical Compendium name - comprised of the originating package and the pack name

  #### Returns string

### config

* get config(): object

  Access the compendium configuration data for this pack

  #### Returns object

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from DirectoryCollectionMixin(DocumentCollection).contents

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.md)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from DirectoryCollectionMixin(DocumentCollection).documentClass

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[documentName](foundry.documents.abstract.DocumentCollection.md#documentname-1)

### folder

* get folder(): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | null

  Get the Folder that this Compendium is displayed within

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | null

### indexed

* get indexed(): boolean

  Has this compendium pack been fully indexed?

  #### Returns boolean

### indexFields

* get indexFields(): Set<string>

  The index fields which should be loaded for this compendium pack

  #### Returns Set<string>

### locked

* get locked(): boolean

  Track whether the Compendium Collection is locked for editing

  #### Returns boolean

### maxFolderDepth

* get maxFolderDepth(): number

  #### Returns number

### name

* get name(): string

  The Collection class name

  #### Returns string

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[name](foundry.documents.abstract.DocumentCollection.md#name)

### ownership

* get ownership(): Record<  
  Â Â Â Â "PLAYER"  
  Â Â Â Â | "TRUSTED"  
  Â Â Â Â | "ASSISTANT"  
  Â Â Â Â | "GAMEMASTER",  
  Â Â Â Â "INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER",  
  >

  The visibility configuration of this compendium pack.

  #### Returns Record< Â Â Â Â "PLAYER" Â Â Â Â | "TRUSTED" Â Â Â Â | "ASSISTANT" Â Â Â Â | "GAMEMASTER", Â Â Â Â "INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER", >

### sort

* get sort(): number

  Get the sort order for this Compendium

  #### Returns number

### title

* get title(): string

  A convenience reference to the label which should be used as the title for the Compendium pack.

  #### Returns string

### visible

* get visible(): boolean

  Is this Compendium pack visible to the current game User?

  #### Returns boolean

### `Static`CONFIG\_FIELD

* get CONFIG\_FIELD(): [TypedObjectField](foundry.data.fields.TypedObjectField.md)

  The DataField definition for the configuration Setting

  #### Returns [TypedObjectField](foundry.data.fields.TypedObjectField.md)

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(): object[]

  #### Returns object[]

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â result: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: any

    The database action performed
  + documents: any

    The array of modified Documents
  + result: any

    The result of the database operation
  + operation: any

    Database operation details
  + user: any

    The User who performed the operation

  #### Returns void

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_onModifyContents](foundry.documents.abstract.DocumentCollection.md#_onmodifycontents)

### \_prepareImportDocument

* \_prepareImportDocument(document: any, options: any): any

  #### Parameters

  + document: any
  + options: any

  #### Returns any

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_prepareImportDocument](foundry.documents.abstract.DocumentCollection.md#_prepareimportdocument)

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](#tdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](#tdocument)>

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[[iterator]](foundry.documents.abstract.DocumentCollection.md#iterator)

### clear

* clear(): void

  #### Returns void

  #### Inherit Doc

  Overrides DirectoryCollectionMixin(DocumentCollection).clear

### configure

* configure(configuration?: object): Promise<void>

  Assign configuration metadata settings to the compendium pack

  #### Parameters

  + configuration: object = {}

    The object of compendium settings to define

  #### Returns Promise<void>

  A Promise which resolves once the setting is updated

### configureOwnershipDialog

* configureOwnershipDialog(): Promise<Record<string, string>>

  Prompt the gamemaster with a dialog to configure ownership of this Compendium pack.

  #### Returns Promise<Record<string, string>>

  The configured ownership for the pack

### createDocument

* createDocument(data: object, context?: object): [TDocument](#tdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [TDocument](#tdocument)

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[createDocument](foundry.documents.abstract.DocumentCollection.md#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[delete](foundry.documents.abstract.DocumentCollection.md#delete)

### deleteCompendium

* deleteCompendium(): Promise<CompendiumCollection<any>>

  Delete an existing world-level Compendium Collection.
  This action may only be performed for world-level packs by a Gamemaster User.

  #### Returns Promise<CompendiumCollection<any>>

### duplicateCompendium

* duplicateCompendium(label?: string): Promise<CompendiumCollection<any>>

  Duplicate a compendium pack to the current World.

  #### Parameters

  + label: string = {}

    A new Compendium label

  #### Returns Promise<CompendiumCollection<any>>

### every

* every(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[every](foundry.documents.abstract.DocumentCollection.md#every)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](#tdocument)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](#tdocument)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[filter](foundry.documents.abstract.DocumentCollection.md#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](#tdocument) | undefined

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](#tdocument) | undefined

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[find](foundry.documents.abstract.DocumentCollection.md#find)

### forEach

* forEach(fn: (value: [TDocument](#tdocument), index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [TDocument](#tdocument), index: number) => void

    A function to apply to each element

  #### Returns void

  #### See

  Array#forEach

  #### Example: Apply a function to each value in the collection

  ```
  let c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);  
  c.forEach(e => e.active = true);
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[forEach](foundry.documents.abstract.DocumentCollection.md#foreach)

### get

* get(key: any, options: any): [TDocument](#tdocument)

  Get an element from the DocumentCollection by its ID.

  #### Parameters

  + key: any

    The ID of the Document to retrieve.
  + options: any

    Additional options to configure retrieval.

  #### Returns [TDocument](#tdocument)

  #### Throws

  If strict is true and the Document cannot be found.

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[get](foundry.documents.abstract.DocumentCollection.md#get)

### getDocument

* getDocument(id: string): Promise<[TDocument](#tdocument)> | undefined

  Get a single Document from this Compendium by ID.
  The document may already be locally cached, otherwise it is retrieved from the server.

  #### Parameters

  + id: string

    The requested Document id

  #### Returns Promise<[TDocument](#tdocument)> | undefined

  The retrieved Document instance

### getDocuments

* getDocuments(query?: object): Promise<[TDocument](#tdocument)[]>

  Load multiple documents from the Compendium pack using a provided query object. The available query options are
  shown below.

  #### Parameters

  + query: object = {}

    A database query used to retrieve documents from the underlying database

  #### Returns Promise<[TDocument](#tdocument)[]>

  The retrieved Document instances

  #### Example: Get Documents that match the given value only.

  ```
  await pack.getDocuments({ type: "weapon" });
  Copy
  ```

  #### Example: Get all Documents that do not have the given value.

  ```
  await pack.getDocuments({ type__ne: "weapon" });
  Copy
  ```

  #### Example: Get several Documents by their IDs.

  ```
  await pack.getDocuments({ _id__in: arrayOfIds });
  Copy
  ```

  #### Example: Get Documents by their sub-types.

  ```
  await pack.getDocuments({ type__in: ["weapon", "armor"] });
  Copy
  ```

### getIndex

* getIndex(options?: { fields?: string[] }): Promise<[Collection](foundry.utils.Collection.md)<any, any>>

  Load the Compendium index and cache it as the keys and values of the Collection.

  #### Parameters

  + `Optional`options: { fields?: string[] } = {}

    Options which customize how the index is created

    - ##### `Optional`fields?: string[]

      An array of fields to return as part of the index

  #### Returns Promise<[Collection](foundry.utils.Collection.md)<any, any>>

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [TDocument](#tdocument)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [TDocument](#tdocument)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[getInvalid](foundry.documents.abstract.DocumentCollection.md#getinvalid)

### getName

* getName(name: string, options?: { strict?: boolean }): [TDocument](#tdocument) | undefined

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns [TDocument](#tdocument) | undefined

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[getName](foundry.documents.abstract.DocumentCollection.md#getname)

### getUserLevel

* getUserLevel(user?: User): number

  Get the ownership level that a User has for this Compendium pack.

  #### Parameters

  + user: User = game.user

    The user being tested

  #### Returns number

  The ownership level in CONST.DOCUMENT\_OWNERSHIP\_LEVELS

### getUuid

* getUuid(id: string): string

  Generate a UUID for a given primary document ID within this Compendium pack

  #### Parameters

  + id: string

    The document ID to generate a UUID for

  #### Returns string

  The generated UUID, in the form of "Compendium..."

### importAll

* importAll(  
  Â Â Â Â options?: { folderId?: string | null; folderName?: string },  
  ): Promise<[TDocument](#tdocument)[]>

  Fully import the contents of a Compendium pack into a World folder.

  #### Parameters

  + `Optional`options: { folderId?: string | null; folderName?: string } = {}

    Options which modify the import operation. Additional options are forwarded to
    [foundry.documents.abstract.WorldCollection#fromCompendium](foundry.documents.abstract.WorldCollection.md#fromcompendium) and
    [foundry.abstract.Document.createDocuments](foundry.abstract.Document.md#createdocuments)

    - ##### `Optional`folderId?: string | null

      An existing Folder \_id to use.
    - ##### `Optional`folderName?: string

      A new Folder name to create.

  #### Returns Promise<[TDocument](#tdocument)[]>

  The imported Documents, now existing within the World

### importDialog

* importDialog(options?: object): Promise<boolean | [TDocument](#tdocument)[] | null>

  Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to the DialogV2.confirm method

  #### Returns Promise<boolean | [TDocument](#tdocument)[] | null>

  A promise which resolves in the following ways: an array of imported
  Documents if the "yes" button was pressed, false if the "no" button was pressed, or
  null if the dialog was closed without making a choice.

### importDocument

* importDocument(  
  Â Â Â Â document: any,  
  Â Â Â Â options?: {},  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Import a Document into this collection, persisting the result.
  If the document ID already exists in the collection, it should be replaced with an optional confirmation dialog.
  If the document ID is undefined or does not already exist, a new Document will be created in the collection.

  #### Parameters

  + document: any

    A source Document to be imported. The document will be safely copied.
  + options: {} = {}

    Options which modify import behavior

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The imported Document instance

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[importDocument](foundry.documents.abstract.DocumentCollection.md#importdocument)

### importFolder

* importFolder(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â options?: { importParents?: boolean },  
  ): Promise<void>

  Import a Folder into this Compendium Collection.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    The existing Folder you wish to import
  + `Optional`options: { importParents?: boolean } = {}

    Additional options which modify how the data is imported.

    - ##### `Optional`importParents?: boolean

      Import any parent folders which are not already present in the
      Compendium.

  #### Returns Promise<void>

### importFolders

* importFolders(  
  Â Â Â Â folders: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[],  
  Â Â Â Â options?: { importParents?: boolean },  
  ): Promise<void>

  Import an array of Folders into this Compendium Collection.

  #### Parameters

  + folders: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

    The existing Folders you wish to import
  + `Optional`options: { importParents?: boolean } = {}

    Additional options which modify how the data is imported.

    - ##### `Optional`importParents?: boolean

      Import any parent folders which are not already present in the
      Compendium.

  #### Returns Promise<void>

### indexDocument

* indexDocument(document: [TDocument](#tdocument)): void

  Add a Document to the index, capturing its relevant index attributes

  #### Parameters

  + document: [TDocument](#tdocument)

    The document to index

  #### Returns void

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (  
    Â Â Â Â element: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => [U](foundry.abstract.EmbeddedCollection.md#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  An Array of transformed values

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[map](foundry.documents.abstract.DocumentCollection.md#map)

### migrate

* migrate(options?: { notify?: boolean }): Promise<CompendiumCollection<any>>

  Migrate a compendium pack.
  This operation re-saves all documents within the compendium pack to disk, applying the current data model.
  If the document type has system data, the latest system data template will also be applied to all documents.

  #### Parameters

  + `Optional`options: { notify?: boolean } = {}
    - ##### `Optional`notify?: boolean

      Display notifications

  #### Returns Promise<CompendiumCollection<any>>

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â initial: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#reduceu)

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (  
    Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
    Â Â Â Â element: T,  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => [U](foundry.abstract.EmbeddedCollection.md#reduceu)

    A reducer function
    applied to each entry
    value.
  + initial: [U](foundry.abstract.EmbeddedCollection.md#reduceu)

    An initial value which accumulates with each iteration

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#reduceu)

  The accumulated result

  #### See

  #### Example: Reduce a collection to an array of transformed values

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  let letters = c.reduce((s, l) => {  
    return s + l;  
  }, ""); // "ABC"
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[reduce](foundry.documents.abstract.DocumentCollection.md#reduce)

### render

* render(force: any, options: any): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + force: any

    Force rendering
  + options: any

    Optional options

  #### Returns void

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[render](foundry.documents.abstract.DocumentCollection.md#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [TDocument](#tdocument)[]

  Find all Documents which match a given search term using a full-text search against their indexed HTML fields
  and their name. If filters are provided, results are filtered to only those that match the provided values.

  #### Parameters

  + search: { exclude?: string[]; filters?: FieldFilter[]; query?: string }

    An object configuring the search

    - ##### `Optional`exclude?: string[]

      An array of document IDs to exclude from search results
    - ##### `Optional`filters?: FieldFilter[]

      An array of filters to apply
    - ##### `Optional`query?: string

      A case-insensitive search string

  #### Returns object[] | [TDocument](#tdocument)[]

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[search](foundry.documents.abstract.DocumentCollection.md#search)

### set

* set(  
  Â Â Â Â id: any,  
  Â Â Â Â document: any,  
  ): CompendiumCollection<[TDocument](#tdocument)> | [CompendiumFolderCollection](foundry.documents.collections.CompendiumFolderCollection.md)

  #### Parameters

  + id: any
  + document: any

  #### Returns CompendiumCollection<[TDocument](#tdocument)> | [CompendiumFolderCollection](foundry.documents.collections.CompendiumFolderCollection.md)

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[set](foundry.documents.abstract.DocumentCollection.md#set)

### setFolder

* setFolder(folder: string | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | null): Promise<void>

  Assign this CompendiumCollection to be organized within a specific Folder.

  #### Parameters

  + folder: string | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | null

    The desired Folder within the World or null to clear the folder

  #### Returns Promise<void>

  A promise which resolves once the transaction is complete

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[some](foundry.documents.abstract.DocumentCollection.md#some)

### testUserPermission

* testUserPermission(  
  Â Â Â Â user: BaseUser,  
  Â Â Â Â permission: string | number,  
  Â Â Â Â options?: { exact?: boolean },  
  ): boolean

  Test whether a certain User has a requested permission level (or greater) over the Compendium pack

  #### Parameters

  + user: BaseUser

    The User being tested
  + permission: string | number

    The permission level from DOCUMENT\_OWNERSHIP\_LEVELS to test
  + options: { exact?: boolean } = {}

    Additional options involved in the permission test

    - ##### `Optional`exact?: boolean

      Require the exact permission level requested?

  #### Returns boolean

  Does the user have this permission level over the Compendium pack?

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[toJSON](foundry.documents.abstract.DocumentCollection.md#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: any,  
  Â Â Â Â condition?: null,  
  Â Â Â Â options?: {},  
  ): Promise<[TDocument](#tdocument)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: any

    An object of data or function to apply to all matched objects
  + condition: null = null

    A function which tests whether to target each object
  + options: {} = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[TDocument](#tdocument)[]>

  An array of updated data once the operation is complete

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[updateAll](foundry.documents.abstract.DocumentCollection.md#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_initialize](foundry.documents.abstract.DocumentCollection.md#_initialize)

### `Static`\_activateSocketListeners

* \_activateSocketListeners(socket: Socket): void

  `Internal`

  Activate the Socket event listeners used to receive responses to compendium management events.

  #### Parameters

  + socket: Socket

    The active game socket.

  #### Returns void

### `Static`\_onConfigure

* \_onConfigure(config: [WorldCompendiumConfiguration](../types/foundry.types.WorldCompendiumConfiguration.md)): void

  Handle changes to the world compendium configuration setting.

  #### Parameters

  + config: [WorldCompendiumConfiguration](../types/foundry.types.WorldCompendiumConfiguration.md)

  #### Returns void

### `Static`createCompendium

* createCompendium(  
  Â Â Â Â metadata: object,  
  Â Â Â Â options?: object,  
  ): Promise<CompendiumCollection<any>>

  Create a new Compendium Collection using provided metadata.

  #### Parameters

  + metadata: object

    The compendium metadata used to create the new pack
  + options: object = {}

    Additional options which modify the Compendium creation request

  #### Returns Promise<CompendiumCollection<any>>

### `Static`getSearchableFields

* getSearchableFields(  
  Â Â Â Â documentName: string,  
  Â Â Â Â type?: string,  
  ): Record<string, [SearchableField](../types/foundry.types.SearchableField.md)>

  Get the searchable fields for a given document or index, based on its data model

  #### Parameters

  + documentName: string

    The document name
  + `Optional`type: string

    A document subtype

  #### Returns Record<string, [SearchableField](../types/foundry.types.SearchableField.md)>

  A record of searchable DataField definitions

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[getSearchableFields](foundry.documents.abstract.DocumentCollection.md#getsearchablefields)