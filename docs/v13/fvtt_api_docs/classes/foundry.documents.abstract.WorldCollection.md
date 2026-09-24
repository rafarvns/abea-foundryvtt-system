---
title: "WorldCollection | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.abstract.WorldCollection.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [abstract](../modules/foundry.documents.abstract.html)
* [WorldCollection](foundry.documents.abstract.WorldCollection.html)

# Class WorldCollection<TDocument>`Abstract`

A collection of world-level Document objects with a singleton instance per primary Document type.
Each primary Document type has an associated subclass of WorldCollection which contains them.

#### See

[foundry.Game#collections](foundry.Game.html#collections)

#### Type Parameters

* TDocument

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.abstract.WorldCollection))

* [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), this>
  + WorldCollection
    - [Actors](foundry.documents.collections.Actors.html)
    - [CardStacks](foundry.documents.collections.CardStacks.html)
    - [ChatMessages](foundry.documents.collections.ChatMessages.html)
    - [CombatEncounters](foundry.documents.collections.CombatEncounters.html)
    - [FogExplorations](foundry.documents.collections.FogExplorations.html)
    - [Folders](foundry.documents.collections.Folders.html)
    - [Items](foundry.documents.collections.Items.html)
    - [Journal](foundry.documents.collections.Journal.html)
    - [Macros](foundry.documents.collections.Macros.html)
    - [Playlists](foundry.documents.collections.Playlists.html)
    - [RollTables](foundry.documents.collections.RollTables.html)
    - [Scenes](foundry.documents.collections.Scenes.html)
    - [WorldSettings](foundry.documents.collections.WorldSettings.html)
    - [Users](foundry.documents.collections.Users.html)

##### Index

### Constructors

[constructor](foundry.documents.abstract.WorldCollection.html#constructor)

### Properties

[apps](foundry.documents.abstract.WorldCollection.html#apps)
[invalidDocumentIds](foundry.documents.abstract.WorldCollection.html#invaliddocumentids)
[documentName](foundry.documents.abstract.WorldCollection.html#documentname)

### Accessors

[contents](foundry.documents.abstract.WorldCollection.html#contents)
[directory](foundry.documents.abstract.WorldCollection.html#directory)
[documentClass](foundry.documents.abstract.WorldCollection.html#documentclass)
[documentName](foundry.documents.abstract.WorldCollection.html#documentname-1)
[folders](foundry.documents.abstract.WorldCollection.html#folders)
[name](foundry.documents.abstract.WorldCollection.html#name)
[instance](foundry.documents.abstract.WorldCollection.html#instance)
[registeredSheets](foundry.documents.abstract.WorldCollection.html#registeredsheets)

### Methods

[\_getVisibleTreeContents](foundry.documents.abstract.WorldCollection.html#_getvisibletreecontents)
[\_onModifyContents](foundry.documents.abstract.WorldCollection.html#_onmodifycontents)
[[iterator]](foundry.documents.abstract.WorldCollection.html#iterator)
[createDocument](foundry.documents.abstract.WorldCollection.html#createdocument)
[delete](foundry.documents.abstract.WorldCollection.html#delete)
[filter](foundry.documents.abstract.WorldCollection.html#filter)
[find](foundry.documents.abstract.WorldCollection.html#find)
[forEach](foundry.documents.abstract.WorldCollection.html#foreach)
[fromCompendium](foundry.documents.abstract.WorldCollection.html#fromcompendium)
[get](foundry.documents.abstract.WorldCollection.html#get)
[getInvalid](foundry.documents.abstract.WorldCollection.html#getinvalid)
[getName](foundry.documents.abstract.WorldCollection.html#getname)
[importFromCompendium](foundry.documents.abstract.WorldCollection.html#importfromcompendium)
[map](foundry.documents.abstract.WorldCollection.html#map)
[reduce](foundry.documents.abstract.WorldCollection.html#reduce)
[render](foundry.documents.abstract.WorldCollection.html#render)
[search](foundry.documents.abstract.WorldCollection.html#search)
[set](foundry.documents.abstract.WorldCollection.html#set)
[some](foundry.documents.abstract.WorldCollection.html#some)
[toJSON](foundry.documents.abstract.WorldCollection.html#tojson)
[updateAll](foundry.documents.abstract.WorldCollection.html#updateall)
[\_initialize](foundry.documents.abstract.WorldCollection.html#_initialize)
[getSearchableFields](foundry.documents.abstract.WorldCollection.html#getsearchablefields)
[registerSheet](foundry.documents.abstract.WorldCollection.html#registersheet)
[unregisterSheet](foundry.documents.abstract.WorldCollection.html#unregistersheet)

## Constructors

### constructor

* new WorldCollection<  
  Â Â Â Â [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument) extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  >(  
  Â Â Â Â data?: object[],  
  ): [WorldCollection](foundry.documents.abstract.WorldCollection.html)<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns [WorldCollection](foundry.documents.abstract.WorldCollection.html)<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[constructor](foundry.documents.abstract.DocumentCollection.html#constructor)

## Properties

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>[]

An Array of application references which will be automatically updated when the collection content changes

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[apps](foundry.documents.abstract.DocumentCollection.html#apps)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[invalidDocumentIds](foundry.documents.abstract.DocumentCollection.html#invaliddocumentids)

### `Static`documentName

documentName: string

The base Document type which is contained within this DocumentCollection

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[documentName](foundry.documents.abstract.DocumentCollection.html#documentname)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from DirectoryCollectionMixin(DocumentCollection).contents

### directory

* get directory(): [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.html)<ClientDocument>

  Return a reference to the SidebarDirectory application for this WorldCollection.

  #### Returns [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.html)<ClientDocument>

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.html)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from DirectoryCollectionMixin(DocumentCollection).documentClass

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

  Inherited from DirectoryCollectionMixin(DocumentCollection).documentName

### folders

* get folders(): [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  Reference the set of Folders which contain documents in this collection

  #### Returns [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

### name

* get name(): string

  The Collection class name

  #### Returns string

  Inherited from DirectoryCollectionMixin(DocumentCollection).name

### `Static`instance

* get instance(): [WorldCollection](foundry.documents.abstract.WorldCollection.html)<any>

  Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.

  #### Returns [WorldCollection](foundry.documents.abstract.WorldCollection.html)<any>

### `Static`registeredSheets

* get registeredSheets(): DocumentSheet[]

  Return an array of currently registered sheet classes for this Document type.

  #### Returns DocumentSheet[]

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(entry: any): [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

  #### Parameters

  + entry: any

  #### Returns [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html),  
  Â Â Â Â documents: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html),  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html)

    The database action performed
  + documents: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)

    Database operation details
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User who performed the operation

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[\_onModifyContents](foundry.documents.abstract.DocumentCollection.html#_onmodifycontents)

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[[iterator]](foundry.documents.abstract.DocumentCollection.html#iterator)

### createDocument

* createDocument(data: object, context?: object): [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[createDocument](foundry.documents.abstract.DocumentCollection.html#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[delete](foundry.documents.abstract.DocumentCollection.html#delete)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

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
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

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

* forEach(fn: (value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)) => void

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

### fromCompendium

* fromCompendium(  
  Â Â Â Â document: object | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
  Â Â Â Â options?: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html),  
  ): object

  Apply data transformations when importing a Document from a Compendium pack

  #### Parameters

  + document: object | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

    The source Document, or a plain data object
  + `Optional`options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html) = {}

    Additional options which modify how the document is imported

  #### Returns object

  The processed data ready for world Document creation

### get

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Get an element from the DocumentCollection by its ID.

  #### Parameters

  + id: string

    The ID of the Document to retrieve.
  + `Optional`options: { invalid?: boolean; strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Document.
    - ##### `Optional`strict?: boolean

      Throw an Error if the requested Document does not exist.

  #### Returns [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  #### Throws

  If strict is true and the Document cannot be found.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[get](foundry.documents.abstract.DocumentCollection.html#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[getInvalid](foundry.documents.abstract.DocumentCollection.html#getinvalid)

### getName

* getName(name: string, options?: { strict?: boolean }): undefined | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)

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

### importFromCompendium

* importFromCompendium(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>,  
  Â Â Â Â id: string,  
  Â Â Â Â updateData?: object,  
  Â Â Â Â options?: object,  
  ): Promise<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  Import a Document from a Compendium collection, adding it to the current World.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>

    The CompendiumCollection instance from which to import
  + id: string

    The ID of the compendium entry to import
  + `Optional`updateData: object = {}

    Optional additional data used to modify the imported Document before it is created
  + `Optional`options: object = {}

    Optional arguments passed to the
    [foundry.documents.abstract.WorldCollection#fromCompendium](foundry.documents.abstract.WorldCollection.html#fromcompendium) and
    [foundry.abstract.Document.create](foundry.abstract.Document.html#create) methods

  #### Returns Promise<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)>

  The imported Document instance

### map

* map(  
  Â Â Â Â transformer: (arg0: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any,  
  ): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[map](foundry.documents.abstract.DocumentCollection.html#map)

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

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

* render(force?: boolean, options?: object): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + `Optional`force: boolean = false

    Force rendering
  + `Optional`options: object = {}

    Optional options

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[render](foundry.documents.abstract.DocumentCollection.html#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

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

  #### Returns object[] | [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[search](foundry.documents.abstract.DocumentCollection.html#search)

### set

* set(id: any, document: any): void

  #### Parameters

  + id: any
  + document: any

  #### Returns void

  #### Inherit Doc

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[set](foundry.documents.abstract.DocumentCollection.html#set)

### some

* some(  
  Â Â Â Â condition: (arg0: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

    The functional condition to test. Positional
    arguments are the value, the index of iteration, and the collection being tested.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[some](foundry.documents.abstract.DocumentCollection.html#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[toJSON](foundry.documents.abstract.DocumentCollection.html#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: null | Function,  
  Â Â Â Â options?: object,  
  ): Promise<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: null | Function = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[TDocument](foundry.documents.abstract.WorldCollection.html#constructorworldcollectiontdocument)[]>

  An array of updated data once the operation is complete

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[updateAll](foundry.documents.abstract.DocumentCollection.html#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.html).[\_initialize](foundry.documents.abstract.DocumentCollection.html#_initialize)

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

### `Static`registerSheet

* registerSheet(...args: any[]): void

  Register a Document sheet class as a candidate which can be used to display Documents of a given type.
  See [foundry.applications.apps.DocumentSheetConfig.registerSheet](foundry.applications.apps.DocumentSheetConfig.html#registersheet) for details.

  #### Parameters

  + ...args: any[]

    Arguments forwarded to the DocumentSheetConfig.registerSheet method

  #### Returns void

  #### Example: Register a new ActorSheet subclass for use with certain Actor types.

  ```
  foundry.documents.collections.Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {  
    types: ["character],  
    makeDefault: true  
  });
  Copy
  ```

### `Static`unregisterSheet

* unregisterSheet(...args: any[]): void

  Unregister a Document sheet class, removing it from the list of available sheet Applications to use.
  See [foundry.applications.apps.DocumentSheetConfig.unregisterSheet](foundry.applications.apps.DocumentSheetConfig.html#unregistersheet) for detauls.

  #### Parameters

  + ...args: any[]

    Arguments forwarded to the DocumentSheetConfig.unregisterSheet method

  #### Returns void

  #### Example: Deregister the default ActorSheet subclass to replace it with others.

  ```
  foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);
  Copy
  ```