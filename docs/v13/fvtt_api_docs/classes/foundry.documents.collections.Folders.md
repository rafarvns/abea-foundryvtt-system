---
title: "Folders | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.collections.Folders.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [collections](../modules/foundry.documents.collections.html)
* [Folders](foundry.documents.collections.Folders.html)

# Class Folders

The singleton collection of Folder documents which exist within the active World.
This Collection is accessible within the Game object as game.folders.

#### See

[foundry.documents.Folder](foundry.documents.Folder.html): The Folder document

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.collections.Folders))

* [WorldCollection](foundry.documents.abstract.WorldCollection.html)
  + Folders

##### Index

### Constructors

[constructor](foundry.documents.collections.Folders.html#constructor)

### Properties

[\_expanded](foundry.documents.collections.Folders.html#_expanded)
[apps](foundry.documents.collections.Folders.html#apps)
[invalidDocumentIds](foundry.documents.collections.Folders.html#invaliddocumentids)
[documentName](foundry.documents.collections.Folders.html#documentname)

### Accessors

[contents](foundry.documents.collections.Folders.html#contents)
[directory](foundry.documents.collections.Folders.html#directory)
[documentClass](foundry.documents.collections.Folders.html#documentclass)
[documentName](foundry.documents.collections.Folders.html#documentname-1)
[folders](foundry.documents.collections.Folders.html#folders)
[name](foundry.documents.collections.Folders.html#name)
[instance](foundry.documents.collections.Folders.html#instance)
[registeredSheets](foundry.documents.collections.Folders.html#registeredsheets)

### Methods

[\_getVisibleTreeContents](foundry.documents.collections.Folders.html#_getvisibletreecontents)
[\_onModifyContents](foundry.documents.collections.Folders.html#_onmodifycontents)
[[iterator]](foundry.documents.collections.Folders.html#iterator)
[createDocument](foundry.documents.collections.Folders.html#createdocument)
[delete](foundry.documents.collections.Folders.html#delete)
[filter](foundry.documents.collections.Folders.html#filter)
[find](foundry.documents.collections.Folders.html#find)
[forEach](foundry.documents.collections.Folders.html#foreach)
[fromCompendium](foundry.documents.collections.Folders.html#fromcompendium)
[get](foundry.documents.collections.Folders.html#get)
[getInvalid](foundry.documents.collections.Folders.html#getinvalid)
[getName](foundry.documents.collections.Folders.html#getname)
[importFromCompendium](foundry.documents.collections.Folders.html#importfromcompendium)
[map](foundry.documents.collections.Folders.html#map)
[reduce](foundry.documents.collections.Folders.html#reduce)
[render](foundry.documents.collections.Folders.html#render)
[search](foundry.documents.collections.Folders.html#search)
[set](foundry.documents.collections.Folders.html#set)
[some](foundry.documents.collections.Folders.html#some)
[toJSON](foundry.documents.collections.Folders.html#tojson)
[updateAll](foundry.documents.collections.Folders.html#updateall)
[\_initialize](foundry.documents.collections.Folders.html#_initialize)
[getSearchableFields](foundry.documents.collections.Folders.html#getsearchablefields)
[registerSheet](foundry.documents.collections.Folders.html#registersheet)
[unregisterSheet](foundry.documents.collections.Folders.html#unregistersheet)

## Constructors

### constructor

* new Folders(data?: object[]): [Folders](foundry.documents.collections.Folders.html)

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns [Folders](foundry.documents.collections.Folders.html)

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[constructor](foundry.documents.abstract.WorldCollection.html#constructor)

## Properties

### `Internal`\_expanded

\_expanded: Record<string, boolean> = {}

Track which Folders are currently expanded in the UI

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>[]

An Array of application references which will be automatically updated when the collection content changes

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[apps](foundry.documents.abstract.WorldCollection.html#apps)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[invalidDocumentIds](foundry.documents.abstract.WorldCollection.html#invaliddocumentids)

### `Static`documentName

documentName: string = "Folder"

Overrides [WorldCollection](foundry.documents.abstract.WorldCollection.html).[documentName](foundry.documents.abstract.WorldCollection.html#documentname)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from WorldCollection.contents

### directory

* get directory(): [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.html)<ClientDocument>

  Return a reference to the SidebarDirectory application for this WorldCollection.

  #### Returns [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.html)<ClientDocument>

  Inherited from WorldCollection.directory

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.html)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from WorldCollection.documentClass

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

  Inherited from WorldCollection.documentName

### folders

* get folders(): [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  Reference the set of Folders which contain documents in this collection

  #### Returns [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  Inherited from WorldCollection.folders

### name

* get name(): string

  The Collection class name

  #### Returns string

  Inherited from WorldCollection.name

### `Static`instance

* get instance(): [WorldCollection](foundry.documents.abstract.WorldCollection.html)<any>

  Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.

  #### Returns [WorldCollection](foundry.documents.abstract.WorldCollection.html)<any>

  Inherited from WorldCollection.instance

### `Static`registeredSheets

* get registeredSheets(): DocumentSheet[]

  Return an array of currently registered sheet classes for this Document type.

  #### Returns DocumentSheet[]

  Inherited from WorldCollection.registeredSheets

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(entry: any): [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

  #### Parameters

  + entry: any

  #### Returns [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[\_getVisibleTreeContents](foundry.documents.abstract.WorldCollection.html#_getvisibletreecontents)

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â result: any,  
  Â Â Â Â operation: any,  
  Â Â Â Â user: any,  
  ): void

  #### Parameters

  + action: any
  + documents: any
  + result: any
  + operation: any
  + user: any

  #### Returns void

  Overrides [WorldCollection](foundry.documents.abstract.WorldCollection.html).[\_onModifyContents](foundry.documents.abstract.WorldCollection.html#_onmodifycontents)

### [iterator]

* "[iterator]"(): MapIterator<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[[iterator]](foundry.documents.abstract.WorldCollection.html#iterator)

### createDocument

* createDocument(data: object, context?: object): [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[createDocument](foundry.documents.abstract.WorldCollection.html#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[delete](foundry.documents.abstract.WorldCollection.html#delete)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>,  
  Â Â Â Â ) => unknown,  
  ): [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[filter](foundry.documents.abstract.WorldCollection.html#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[find](foundry.documents.abstract.WorldCollection.html#find)

### forEach

* forEach(fn: (value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)) => void

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[forEach](foundry.documents.abstract.WorldCollection.html#foreach)

### fromCompendium

* fromCompendium(  
  Â Â Â Â document: object | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â options?: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html),  
  ): object

  Apply data transformations when importing a Document from a Compendium pack

  #### Parameters

  + document: object | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The source Document, or a plain data object
  + `Optional`options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html) = {}

    Additional options which modify how the document is imported

  #### Returns object

  The processed data ready for world Document creation

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[fromCompendium](foundry.documents.abstract.WorldCollection.html#fromcompendium)

### get

* get(  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

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

  #### Returns [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  #### Throws

  If strict is true and the Document cannot be found.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[get](foundry.documents.abstract.WorldCollection.html#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[getInvalid](foundry.documents.abstract.WorldCollection.html#getinvalid)

### getName

* getName(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): undefined | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[getName](foundry.documents.abstract.WorldCollection.html#getname)

### importFromCompendium

* importFromCompendium(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>,  
  Â Â Â Â id: string,  
  Â Â Â Â updateData?: object,  
  Â Â Â Â options?: object,  
  ): Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

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

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)>

  The imported Document instance

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[importFromCompendium](foundry.documents.abstract.WorldCollection.html#importfromcompendium)

### map

* map(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â arg0: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â Â Â Â Â arg1: number,  
  Â Â Â Â Â Â Â Â arg2: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  ): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[map](foundry.documents.abstract.WorldCollection.html#map)

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[reduce](foundry.documents.abstract.WorldCollection.html#reduce)

### render

* render(force: any, options?: {}): void

  #### Parameters

  + force: any
  + options: {} = {}

  #### Returns void

  Overrides [WorldCollection](foundry.documents.abstract.WorldCollection.html).[render](foundry.documents.abstract.WorldCollection.html#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

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

  #### Returns object[] | [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[search](foundry.documents.abstract.WorldCollection.html#search)

### set

* set(id: any, document: any): void

  #### Parameters

  + id: any
  + document: any

  #### Returns void

  #### Inherit Doc

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[set](foundry.documents.abstract.WorldCollection.html#set)

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â arg0: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â Â Â Â Â arg1: number,  
  Â Â Â Â Â Â Â Â arg2: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

    The functional condition to test. Positional
    arguments are the value, the index of iteration, and the collection being tested.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[some](foundry.documents.abstract.WorldCollection.html#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[toJSON](foundry.documents.abstract.WorldCollection.html#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: null | Function,  
  Â Â Â Â options?: object,  
  ): Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: null | Function = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]>

  An array of updated data once the operation is complete

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[updateAll](foundry.documents.abstract.WorldCollection.html#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[\_initialize](foundry.documents.abstract.WorldCollection.html#_initialize)

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[getSearchableFields](foundry.documents.abstract.WorldCollection.html#getsearchablefields)

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[registerSheet](foundry.documents.abstract.WorldCollection.html#registersheet)

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[unregisterSheet](foundry.documents.abstract.WorldCollection.html#unregistersheet)