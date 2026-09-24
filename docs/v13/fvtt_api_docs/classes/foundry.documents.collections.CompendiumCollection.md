---
title: "CompendiumCollection | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.collections.CompendiumCollection.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [collections](../modules/foundry.documents.collections.html)
* [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)

# Class CompendiumCollection<TDocument>

A collection of Document objects contained within a specific compendium pack.
Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.

### Hook Events

* [hookEvents.updateCompendium](../functions/hookEvents.updateCompendium.html)

#### See

[foundry.Game#packs](foundry.Game.html#packs)

#### Type Parameters

* TDocument

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.collections.CompendiumCollection))

* [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), this>
  + CompendiumCollection

##### Index

### Constructors

[constructor](foundry.documents.collections.CompendiumCollection.html#constructor)

### Properties

[applicationClass](foundry.documents.collections.CompendiumCollection.html#applicationclass)
[apps](foundry.documents.collections.CompendiumCollection.html#apps)
[index](foundry.documents.collections.CompendiumCollection.html#index)
[invalidDocumentIds](foundry.documents.collections.CompendiumCollection.html#invaliddocumentids)
[metadata](foundry.documents.collections.CompendiumCollection.html#metadata)
[CACHE\_LIFETIME\_SECONDS](foundry.documents.collections.CompendiumCollection.html#cache_lifetime_seconds)
[CONFIG\_SETTING](foundry.documents.collections.CompendiumCollection.html#config_setting)
[documentName](foundry.documents.collections.CompendiumCollection.html#documentname)

### Accessors

[banner](foundry.documents.collections.CompendiumCollection.html#banner)
[collection](foundry.documents.collections.CompendiumCollection.html#collection)
[config](foundry.documents.collections.CompendiumCollection.html#config)
[contents](foundry.documents.collections.CompendiumCollection.html#contents)
[documentClass](foundry.documents.collections.CompendiumCollection.html#documentclass)
[documentName](foundry.documents.collections.CompendiumCollection.html#documentname-1)
[folder](foundry.documents.collections.CompendiumCollection.html#folder)
[indexed](foundry.documents.collections.CompendiumCollection.html#indexed)
[indexFields](foundry.documents.collections.CompendiumCollection.html#indexfields)
[locked](foundry.documents.collections.CompendiumCollection.html#locked)
[maxFolderDepth](foundry.documents.collections.CompendiumCollection.html#maxfolderdepth)
[name](foundry.documents.collections.CompendiumCollection.html#name)
[ownership](foundry.documents.collections.CompendiumCollection.html#ownership)
[sort](foundry.documents.collections.CompendiumCollection.html#sort)
[title](foundry.documents.collections.CompendiumCollection.html#title)
[visible](foundry.documents.collections.CompendiumCollection.html#visible)
[CONFIG\_FIELD](foundry.documents.collections.CompendiumCollection.html#config_field)

### Methods

[\_getVisibleTreeContents](foundry.documents.collections.CompendiumCollection.html#_getvisibletreecontents)
[\_onModifyContents](foundry.documents.collections.CompendiumCollection.html#_onmodifycontents)
[[iterator]](foundry.documents.collections.CompendiumCollection.html#iterator)
[clear](foundry.documents.collections.CompendiumCollection.html#clear)
[configure](foundry.documents.collections.CompendiumCollection.html#configure)
[configureOwnershipDialog](foundry.documents.collections.CompendiumCollection.html#configureownershipdialog)
[createDocument](foundry.documents.collections.CompendiumCollection.html#createdocument)
[delete](foundry.documents.collections.CompendiumCollection.html#delete)
[deleteCompendium](foundry.documents.collections.CompendiumCollection.html#deletecompendium)
[duplicateCompendium](foundry.documents.collections.CompendiumCollection.html#duplicatecompendium)
[filter](foundry.documents.collections.CompendiumCollection.html#filter)
[find](foundry.documents.collections.CompendiumCollection.html#find)
[forEach](foundry.documents.collections.CompendiumCollection.html#foreach)
[get](foundry.documents.collections.CompendiumCollection.html#get)
[getDocument](foundry.documents.collections.CompendiumCollection.html#getdocument)
[getDocuments](foundry.documents.collections.CompendiumCollection.html#getdocuments)
[getIndex](foundry.documents.collections.CompendiumCollection.html#getindex)
[getInvalid](foundry.documents.collections.CompendiumCollection.html#getinvalid)
[getName](foundry.documents.collections.CompendiumCollection.html#getname)
[getUserLevel](foundry.documents.collections.CompendiumCollection.html#getuserlevel)
[getUuid](foundry.documents.collections.CompendiumCollection.html#getuuid)
[importAll](foundry.documents.collections.CompendiumCollection.html#importall)
[importDialog](foundry.documents.collections.CompendiumCollection.html#importdialog)
[importDocument](foundry.documents.collections.CompendiumCollection.html#importdocument)
[importFolder](foundry.documents.collections.CompendiumCollection.html#importfolder)
[importFolders](foundry.documents.collections.CompendiumCollection.html#importfolders)
[indexDocument](foundry.documents.collections.CompendiumCollection.html#indexdocument)
[map](foundry.documents.collections.CompendiumCollection.html#map)
[migrate](foundry.documents.collections.CompendiumCollection.html#migrate)
[reduce](foundry.documents.collections.CompendiumCollection.html#reduce)
[render](foundry.documents.collections.CompendiumCollection.html#render)
[search](foundry.documents.collections.CompendiumCollection.html#search)
[set](foundry.documents.collections.CompendiumCollection.html#set)
[setFolder](foundry.documents.collections.CompendiumCollection.html#setfolder)
[some](foundry.documents.collections.CompendiumCollection.html#some)
[testUserPermission](foundry.documents.collections.CompendiumCollection.html#testuserpermission)
[toJSON](foundry.documents.collections.CompendiumCollection.html#tojson)
[updateAll](foundry.documents.collections.CompendiumCollection.html#updateall)
[\_initialize](foundry.documents.collections.CompendiumCollection.html#_initialize)
[\_activateSocketListeners](foundry.documents.collections.CompendiumCollection.html#_activatesocketlisteners)
[\_onConfigure](foundry.documents.collections.CompendiumCollection.html#_onconfigure)
[createCompendium](foundry.documents.collections.CompendiumCollection.html#createcompendium)
[getSearchableFields](foundry.documents.collections.CompendiumCollection.html#getsearchablefields)

## Constructors

### constructor

* new CompendiumCollection<  
  Â Â Â Â [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument) extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  >(  
  Â Â Â Â metadata: object,  
  ): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  #### Parameters

  + metadata: object

    The compendium metadata, an object provided by game.data

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[constructor](foundry.documents.abstract.DocumentCollection.html#constructor)

## Properties

### applicationClass

applicationClass: typeof [Application](foundry.appv1.api.Application.html) | typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = foundry.applications.sidebar.apps.Compendium

A reference to the Application class which provides an interface to interact with this compendium content.

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>[]

An Array of application references which will be automatically updated when the collection content changes

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[apps](foundry.documents.abstract.DocumentCollection.html#apps)

### index

index: Collection<string, object>

A subsidiary collection which contains the more minimal index of the pack

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[invalidDocumentIds](foundry.documents.abstract.DocumentCollection.html#invaliddocumentids)

### metadata

metadata: object

The compendium metadata which defines the compendium content and location

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

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[documentName](foundry.documents.abstract.DocumentCollection.html#documentname)

## Accessors

### banner

* get banner(): null | string | void

  The banner image for this Compendium pack, or the default image for the pack type if no image is set.

  #### Returns null | string | void

### collection

* get collection(): string

  The canonical Compendium name - comprised of the originating package and the pack name

  #### Returns string

### config

* get config(): object

  Access the compendium configuration data for this pack

  #### Returns object

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from DirectoryCollectionMixin(DocumentCollection).contents

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.html)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from DirectoryCollectionMixin(DocumentCollection).documentClass

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

  Overrides DirectoryCollectionMixin(DocumentCollection).documentName

### folder

* get folder(): null | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Get the Folder that this Compendium is displayed within

  #### Returns null | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

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

  Inherited from DirectoryCollectionMixin(DocumentCollection).name

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

* get CONFIG\_FIELD(): [TypedObjectField](foundry.data.fields.TypedObjectField.html)

  The DataField definition for the configuration Setting

  #### Returns [TypedObjectField](foundry.data.fields.TypedObjectField.html)

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(): any

  #### Returns any

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

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[\_onModifyContents](foundry.documents.abstract.DocumentCollection.html#_onmodifycontents)

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[[iterator]](foundry.documents.abstract.DocumentCollection.html#iterator)

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

* createDocument(data: object, context?: object): [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[createDocument](foundry.documents.abstract.DocumentCollection.html#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[delete](foundry.documents.abstract.DocumentCollection.html#delete)

### deleteCompendium

* deleteCompendium(): Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

  Delete an existing world-level Compendium Collection.
  This action may only be performed for world-level packs by a Gamemaster User.

  #### Returns Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

### duplicateCompendium

* duplicateCompendium(label?: string): Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

  Duplicate a compendium pack to the current World.

  #### Parameters

  + label: string = {}

    A new Compendium label

  #### Returns Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[filter](foundry.documents.abstract.DocumentCollection.html#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[find](foundry.documents.abstract.DocumentCollection.html#find)

### forEach

* forEach(fn: (value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)) => void

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

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[forEach](foundry.documents.abstract.DocumentCollection.html#foreach)

### get

* get(key: any, options: any): [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Get an element from the DocumentCollection by its ID.

  #### Parameters

  + key: any

    The ID of the Document to retrieve.
  + options: any

    Additional options to configure retrieval.

  #### Returns [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  #### Throws

  If strict is true and the Document cannot be found.

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[get](foundry.documents.abstract.DocumentCollection.html#get)

### getDocument

* getDocument(id: string): undefined | Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  Get a single Document from this Compendium by ID.
  The document may already be locally cached, otherwise it is retrieved from the server.

  #### Parameters

  + id: string

    The requested Document id

  #### Returns undefined | Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  The retrieved Document instance

### getDocuments

* getDocuments(query?: object): Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  Load multiple documents from the Compendium pack using a provided query object. The available query options are
  shown below.

  #### Parameters

  + query: object = {}

    A database query used to retrieve documents from the underlying database

  #### Returns Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

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

* getIndex(options?: { fields?: string[] }): Promise<Collection>

  Load the Compendium index and cache it as the keys and values of the Collection.

  #### Parameters

  + `Optional`options: { fields?: string[] } = {}

    Options which customize how the index is created

    - ##### `Optional`fields?: string[]

      An array of fields to return as part of the index

  #### Returns Promise<Collection>

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[getInvalid](foundry.documents.abstract.DocumentCollection.html#getinvalid)

### getName

* getName(name: string, options?: { strict?: boolean }): undefined | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[getName](foundry.documents.abstract.DocumentCollection.html#getname)

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
  Â Â Â Â options?: { folderId?: null | string; folderName?: string },  
  ): Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  Fully import the contents of a Compendium pack into a World folder.

  #### Parameters

  + `Optional`options: { folderId?: null | string; folderName?: string } = {}

    Options which modify the import operation. Additional options are forwarded to
    [foundry.documents.abstract.WorldCollection#fromCompendium](foundry.documents.abstract.WorldCollection.html#fromcompendium) and
    [foundry.abstract.Document.createDocuments](foundry.abstract.Document.html#createdocuments)

    - ##### `Optional`folderId?: null | string

      An existing Folder \_id to use.
    - ##### `Optional`folderName?: string

      A new Folder name to create.

  #### Returns Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  The imported Documents, now existing within the World

### importDialog

* importDialog(options?: object): Promise<null | boolean | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to the DialogV2.confirm method

  #### Returns Promise<null | boolean | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  A promise which resolves in the following ways: an array of imported
  Documents if the "yes" button was pressed, false if the "no" button was pressed, or
  null if the dialog was closed without making a choice.

### importDocument

* importDocument(  
  Â Â Â Â document: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â options?: object,  
  ): Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  Import a Document into this Compendium Collection.

  #### Parameters

  + document: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The existing Document you wish to import
  + `Optional`options: object = {}

    Additional options which modify how the data is imported.
    See ClientDocumentMixin#toCompendium.

  #### Returns Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)>

  The imported Document instance

### importFolder

* importFolder(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â options?: { importParents?: boolean },  
  ): Promise<void>

  Import a Folder into this Compendium Collection.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The existing Folder you wish to import
  + `Optional`options: { importParents?: boolean } = {}

    Additional options which modify how the data is imported.

    - ##### `Optional`importParents?: boolean

      Import any parent folders which are not already present in the
      Compendium.

  #### Returns Promise<void>

### importFolders

* importFolders(  
  Â Â Â Â folders: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[],  
  Â Â Â Â options?: { importParents?: boolean },  
  ): Promise<void>

  Import an array of Folders into this Compendium Collection.

  #### Parameters

  + folders: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

    The existing Folders you wish to import
  + `Optional`options: { importParents?: boolean } = {}

    Additional options which modify how the data is imported.

    - ##### `Optional`importParents?: boolean

      Import any parent folders which are not already present in the
      Compendium.

  #### Returns Promise<void>

### indexDocument

* indexDocument(document: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)): void

  Add a Document to the index, capturing its relevant index attributes

  #### Parameters

  + document: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)

    The document to index

  #### Returns void

### map

* map(  
  Â Â Â Â transformer: (arg0: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any,  
  ): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[map](foundry.documents.abstract.DocumentCollection.html#map)

### migrate

* migrate(options?: { notify?: boolean }): Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

  Migrate a compendium pack.
  This operation re-saves all documents within the compendium pack to disk, applying the current data model.
  If the document type has system data, the latest system data template will also be applied to all documents.

  #### Parameters

  + `Optional`options: { notify?: boolean } = {}
    - ##### `Optional`notify?: boolean

      Display notifications

  #### Returns Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

    A reducer function applied to each entry value. Positional
    arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
  + initial: any

    An initial value which accumulates with each iteration

  #### Returns any

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

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[reduce](foundry.documents.abstract.DocumentCollection.html#reduce)

### render

* render(force: any, options: any): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + force: any

    Force rendering
  + options: any

    Optional options

  #### Returns void

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[render](foundry.documents.abstract.DocumentCollection.html#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]

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

  #### Returns object[] | [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[search](foundry.documents.abstract.DocumentCollection.html#search)

### set

* set(id: any, document: any): void

  #### Parameters

  + id: any
  + document: any

  #### Returns void

  #### Inherit Doc

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[set](foundry.documents.abstract.DocumentCollection.html#set)

### setFolder

* setFolder(folder: null | string | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)): Promise<void>

  Assign this CompendiumCollection to be organized within a specific Folder.

  #### Parameters

  + folder: null | string | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The desired Folder within the World or null to clear the folder

  #### Returns Promise<void>

  A promise which resolves once the transaction is complete

### some

* some(  
  Â Â Â Â condition: (arg0: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

    The functional condition to test. Positional
    arguments are the value, the index of iteration, and the collection being tested.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[some](foundry.documents.abstract.DocumentCollection.html#some)

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

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[toJSON](foundry.documents.abstract.DocumentCollection.html#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: any,  
  Â Â Â Â condition?: null,  
  Â Â Â Â options?: {},  
  ): Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: any

    An object of data or function to apply to all matched objects
  + condition: null = null

    A function which tests whether to target each object
  + options: {} = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[TDocument](foundry.documents.collections.CompendiumCollection.html#constructorcompendiumcollectiontdocument)[]>

  An array of updated data once the operation is complete

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[updateAll](foundry.documents.abstract.DocumentCollection.html#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[\_initialize](foundry.documents.abstract.DocumentCollection.html#_initialize)

### `Static`\_activateSocketListeners

* \_activateSocketListeners(socket: Socket): void

  `Internal`

  Activate the Socket event listeners used to receive responses to compendium management events.

  #### Parameters

  + socket: Socket

    The active game socket.

  #### Returns void

### `Static`\_onConfigure

* \_onConfigure(config: [WorldCompendiumConfiguration](../types/foundry.types.WorldCompendiumConfiguration.html)): void

  Handle changes to the world compendium configuration setting.

  #### Parameters

  + config: [WorldCompendiumConfiguration](../types/foundry.types.WorldCompendiumConfiguration.html)

  #### Returns void

### `Static`createCompendium

* createCompendium(  
  Â Â Â Â metadata: object,  
  Â Â Â Â options?: object,  
  ): Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

  Create a new Compendium Collection using provided metadata.

  #### Parameters

  + metadata: object

    The compendium metadata used to create the new pack
  + options: object = {}

    Additional options which modify the Compendium creation request

  #### Returns Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>>

### `Static`getSearchableFields

* getSearchableFields(  
  Â Â Â Â documentName: string,  
  Â Â Â Â type?: string,  
  ): Record<string, [SearchableField](../types/foundry.types.SearchableField.html)>

  Get the searchable fields for a given document or index, based on its data model

  #### Parameters

  + documentName: string

    The document name
  + `Optional`type: string

    A document subtype

  #### Returns Record<string, [SearchableField](../types/foundry.types.SearchableField.html)>

  A record of searchable DataField definitions

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[getSearchableFields](foundry.documents.abstract.DocumentCollection.html#getsearchablefields)