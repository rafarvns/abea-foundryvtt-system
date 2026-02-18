---
title: "WorldSettings | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.collections.WorldSettings.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [collections](../modules/foundry.documents.collections.html)
* [WorldSettings](foundry.documents.collections.WorldSettings.html)

# Class WorldSettings

The Collection of Setting documents which exist within the active World.
This collection is accessible as game.settings.storage.get("world")

#### See

[foundry.documents.Setting](foundry.documents.Setting.html): The Setting document

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.collections.WorldSettings))

* [WorldCollection](foundry.documents.abstract.WorldCollection.html)
  + WorldSettings

##### Index

### Constructors

[constructor](foundry.documents.collections.WorldSettings.html#constructor)

### Properties

[apps](foundry.documents.collections.WorldSettings.html#apps)
[invalidDocumentIds](foundry.documents.collections.WorldSettings.html#invaliddocumentids)
[documentName](foundry.documents.collections.WorldSettings.html#documentname)

### Accessors

[contents](foundry.documents.collections.WorldSettings.html#contents)
[directory](foundry.documents.collections.WorldSettings.html#directory)
[documentClass](foundry.documents.collections.WorldSettings.html#documentclass)
[documentName](foundry.documents.collections.WorldSettings.html#documentname-1)
[folders](foundry.documents.collections.WorldSettings.html#folders)
[name](foundry.documents.collections.WorldSettings.html#name)
[instance](foundry.documents.collections.WorldSettings.html#instance)
[registeredSheets](foundry.documents.collections.WorldSettings.html#registeredsheets)

### Methods

[\_getVisibleTreeContents](foundry.documents.collections.WorldSettings.html#_getvisibletreecontents)
[\_onModifyContents](foundry.documents.collections.WorldSettings.html#_onmodifycontents)
[[iterator]](foundry.documents.collections.WorldSettings.html#iterator)
[createDocument](foundry.documents.collections.WorldSettings.html#createdocument)
[delete](foundry.documents.collections.WorldSettings.html#delete)
[filter](foundry.documents.collections.WorldSettings.html#filter)
[find](foundry.documents.collections.WorldSettings.html#find)
[forEach](foundry.documents.collections.WorldSettings.html#foreach)
[fromCompendium](foundry.documents.collections.WorldSettings.html#fromcompendium)
[get](foundry.documents.collections.WorldSettings.html#get)
[getInvalid](foundry.documents.collections.WorldSettings.html#getinvalid)
[getItem](foundry.documents.collections.WorldSettings.html#getitem)
[getName](foundry.documents.collections.WorldSettings.html#getname)
[getSetting](foundry.documents.collections.WorldSettings.html#getsetting)
[importFromCompendium](foundry.documents.collections.WorldSettings.html#importfromcompendium)
[map](foundry.documents.collections.WorldSettings.html#map)
[reduce](foundry.documents.collections.WorldSettings.html#reduce)
[render](foundry.documents.collections.WorldSettings.html#render)
[search](foundry.documents.collections.WorldSettings.html#search)
[set](foundry.documents.collections.WorldSettings.html#set)
[some](foundry.documents.collections.WorldSettings.html#some)
[toJSON](foundry.documents.collections.WorldSettings.html#tojson)
[updateAll](foundry.documents.collections.WorldSettings.html#updateall)
[\_initialize](foundry.documents.collections.WorldSettings.html#_initialize)
[getSearchableFields](foundry.documents.collections.WorldSettings.html#getsearchablefields)
[registerSheet](foundry.documents.collections.WorldSettings.html#registersheet)
[unregisterSheet](foundry.documents.collections.WorldSettings.html#unregistersheet)

## Constructors

### constructor

* new WorldSettings(data?: object[]): [WorldSettings](foundry.documents.collections.WorldSettings.html)

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns [WorldSettings](foundry.documents.collections.WorldSettings.html)

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[constructor](foundry.documents.abstract.WorldCollection.html#constructor)

## Properties

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>[]

An Array of application references which will be automatically updated when the collection content changes

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[apps](foundry.documents.abstract.WorldCollection.html#apps)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[invalidDocumentIds](foundry.documents.abstract.WorldCollection.html#invaliddocumentids)

### `Static`documentName

documentName: string = "Setting"

Overrides [WorldCollection](foundry.documents.abstract.WorldCollection.html).[documentName](foundry.documents.abstract.WorldCollection.html#documentname)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from WorldCollection.contents

### directory

* get directory(): null

  #### Returns null

  Overrides WorldCollection.directory

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

* \_getVisibleTreeContents(entry: any): [Setting](foundry.documents.Setting.html)[]

  #### Parameters

  + entry: any

  #### Returns [Setting](foundry.documents.Setting.html)[]

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[\_getVisibleTreeContents](foundry.documents.abstract.WorldCollection.html#_getvisibletreecontents)

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html),  
  Â Â Â Â documents: [Setting](foundry.documents.Setting.html)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html),  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html)

    The database action performed
  + documents: [Setting](foundry.documents.Setting.html)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)

    Database operation details
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User who performed the operation

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[\_onModifyContents](foundry.documents.abstract.WorldCollection.html#_onmodifycontents)

### [iterator]

* "[iterator]"(): MapIterator<[Setting](foundry.documents.Setting.html)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[Setting](foundry.documents.Setting.html)>

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[[iterator]](foundry.documents.abstract.WorldCollection.html#iterator)

### createDocument

* createDocument(data: object, context?: object): [Setting](foundry.documents.Setting.html)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [Setting](foundry.documents.Setting.html)

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
  Â Â Â Â Â Â Â Â value: [Setting](foundry.documents.Setting.html),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [Setting](foundry.documents.Setting.html)>,  
  Â Â Â Â ) => unknown,  
  ): [Setting](foundry.documents.Setting.html)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [Setting](foundry.documents.Setting.html),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [Setting](foundry.documents.Setting.html)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [Setting](foundry.documents.Setting.html)[]

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
  Â Â Â Â Â Â Â Â value: [Setting](foundry.documents.Setting.html),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [Setting](foundry.documents.Setting.html)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [Setting](foundry.documents.Setting.html)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [Setting](foundry.documents.Setting.html),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [Setting](foundry.documents.Setting.html)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [Setting](foundry.documents.Setting.html)

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

* forEach(fn: (value: [Setting](foundry.documents.Setting.html)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [Setting](foundry.documents.Setting.html)) => void

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
  Â Â Â Â document: object | [Setting](foundry.documents.Setting.html),  
  Â Â Â Â options?: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html),  
  ): object

  Apply data transformations when importing a Document from a Compendium pack

  #### Parameters

  + document: object | [Setting](foundry.documents.Setting.html)

    The source Document, or a plain data object
  + `Optional`options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.html) = {}

    Additional options which modify how the document is imported

  #### Returns object

  The processed data ready for world Document creation

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[fromCompendium](foundry.documents.abstract.WorldCollection.html#fromcompendium)

### get

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): [Setting](foundry.documents.Setting.html)

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

  #### Returns [Setting](foundry.documents.Setting.html)

  #### Throws

  If strict is true and the Document cannot be found.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[get](foundry.documents.abstract.WorldCollection.html#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [Setting](foundry.documents.Setting.html)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [Setting](foundry.documents.Setting.html)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[getInvalid](foundry.documents.abstract.WorldCollection.html#getinvalid)

### getItem

* getItem(key: string, user?: string): null | string

  Return the serialized value of the world setting as a string

  #### Parameters

  + key: string

    The setting key
  + `Optional`user: string

    For user-scoped settings, the user ID.

  #### Returns null | string

  The serialized setting string

### getName

* getName(name: string, options?: { strict?: boolean }): undefined | [Setting](foundry.documents.Setting.html)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [Setting](foundry.documents.Setting.html)

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

### getSetting

* getSetting(key: string, user?: string): [Setting](foundry.documents.Setting.html)

  Return the Setting document with the given key.

  #### Parameters

  + key: string

    The setting key
  + `Optional`user: string = null

    For user-scoped settings, the user ID.

  #### Returns [Setting](foundry.documents.Setting.html)

  The Setting

### importFromCompendium

* importFromCompendium(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)<any>,  
  Â Â Â Â id: string,  
  Â Â Â Â updateData?: object,  
  Â Â Â Â options?: object,  
  ): Promise<[Setting](foundry.documents.Setting.html)>

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

  #### Returns Promise<[Setting](foundry.documents.Setting.html)>

  The imported Document instance

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[importFromCompendium](foundry.documents.abstract.WorldCollection.html#importfromcompendium)

### map

* map(transformer: (arg0: [Setting](foundry.documents.Setting.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [Setting](foundry.documents.Setting.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[map](foundry.documents.abstract.WorldCollection.html#map)

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [Setting](foundry.documents.Setting.html),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [Setting](foundry.documents.Setting.html), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

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

* render(force?: boolean, options?: object): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + `Optional`force: boolean = false

    Force rendering
  + `Optional`options: object = {}

    Optional options

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.html).[render](foundry.documents.abstract.WorldCollection.html#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [Setting](foundry.documents.Setting.html)[]

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

  #### Returns object[] | [Setting](foundry.documents.Setting.html)[]

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
  Â Â Â Â condition: (arg0: [Setting](foundry.documents.Setting.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [Setting](foundry.documents.Setting.html), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

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
  ): Promise<[Setting](foundry.documents.Setting.html)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: null | Function = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[Setting](foundry.documents.Setting.html)[]>

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