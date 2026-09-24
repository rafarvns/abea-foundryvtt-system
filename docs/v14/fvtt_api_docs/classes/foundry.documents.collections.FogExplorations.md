---
title: "FogExplorations | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.collections.FogExplorations.html"
category: "classes"
---

# Class FogExplorations

The singleton collection of FogExploration documents which exist within the active World.

#### See

[foundry.documents.FogExploration](foundry.documents.FogExploration.md): The FogExploration document

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.collections.FogExplorations))

* [WorldCollection](foundry.documents.abstract.WorldCollection.md)
  + FogExplorations

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[apps](#apps)
[invalidDocumentIds](#invaliddocumentids)
[documentName](#documentname)

### Accessors

[contents](#contents)
[directory](#directory)
[documentClass](#documentclass)
[documentName](#documentname-1)
[folders](#folders)
[name](#name)
[instance](#instance)
[registeredSheets](#registeredsheets)

### Methods

[\_getVisibleTreeContents](#_getvisibletreecontents)
[\_onModifyContents](#_onmodifycontents)
[\_prepareImportDocument](#_prepareimportdocument)
[[iterator]](#iterator)
[createDocument](#createdocument)
[delete](#delete)
[every](#every)
[filter](#filter)
[find](#find)
[forEach](#foreach)
[fromCompendium](#fromcompendium)
[get](#get)
[getInvalid](#getinvalid)
[getName](#getname)
[importDocument](#importdocument)
[importFromCompendium](#importfromcompendium)
[map](#map)
[reduce](#reduce)
[render](#render)
[search](#search)
[set](#set)
[some](#some)
[toJSON](#tojson)
[updateAll](#updateall)
[\_initialize](#_initialize)
[\_activateSocketListeners](#_activatesocketlisteners)
[getSearchableFields](#getsearchablefields)
[registerSheet](#registersheet)
[unregisterSheet](#unregistersheet)

## Constructors

### constructor

* new FogExplorations(data?: object[]): FogExplorations

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns FogExplorations

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[constructor](foundry.documents.abstract.WorldCollection.md#constructor)

## Properties

### `Internal`\_source

\_source: object[]

The source data array from which the Documents in the WorldCollection are created

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[\_source](foundry.documents.abstract.WorldCollection.md#_source)

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>[] = []

An Array of application references which will be automatically updated when the collection content changes

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[apps](foundry.documents.abstract.WorldCollection.md#apps)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[invalidDocumentIds](foundry.documents.abstract.WorldCollection.md#invaliddocumentids)

### `Static`documentName

documentName: string = "FogExploration"

The base Document type which is contained within this DocumentCollection

Overrides [WorldCollection](foundry.documents.abstract.WorldCollection.md).[documentName](foundry.documents.abstract.WorldCollection.md#documentname)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from WorldCollection.contents

### directory

* get directory(): [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.md)<ClientDocument>

  Return a reference to the SidebarDirectory application for this WorldCollection.

  #### Returns [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.md)<ClientDocument>

  Inherited from WorldCollection.directory

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.md)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from WorldCollection.documentClass

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

  Inherited from WorldCollection.documentName

### folders

* get folders(): [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

  Reference the set of Folders which contain documents in this collection

  #### Returns [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

  Inherited from WorldCollection.folders

### name

* get name(): string

  The Collection class name

  #### Returns string

  Inherited from WorldCollection.name

### `Static`instance

* get instance(): [WorldCollection](foundry.documents.abstract.WorldCollection.md)<any>

  Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.

  #### Returns [WorldCollection](foundry.documents.abstract.WorldCollection.md)<any>

  Inherited from WorldCollection.instance

### `Static`registeredSheets

* get registeredSheets(): DocumentSheet[]

  Return an array of currently registered sheet classes for this Document type.

  #### Returns DocumentSheet[]

  Inherited from WorldCollection.registeredSheets

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(entry: any): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  #### Parameters

  + entry: any

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[\_getVisibleTreeContents](foundry.documents.abstract.WorldCollection.md#_getvisibletreecontents)

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md),  
  Â Â Â Â documents: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md),  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

    The database action performed
  + documents: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

    Database operation details
  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User who performed the operation

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[\_onModifyContents](foundry.documents.abstract.WorldCollection.md#_onmodifycontents)

### \_prepareImportDocument

* \_prepareImportDocument(document: any, options: any): object

  #### Parameters

  + document: any
  + options: any

  #### Returns object

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[\_prepareImportDocument](foundry.documents.abstract.WorldCollection.md#_prepareimportdocument)

### [iterator]

* "[iterator]"(): MapIterator<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[[iterator]](foundry.documents.abstract.WorldCollection.md#iterator)

### createDocument

* createDocument(data: object, context?: object): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[createDocument](foundry.documents.abstract.WorldCollection.md#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[delete](foundry.documents.abstract.WorldCollection.md#delete)

### every

* every(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[every](foundry.documents.abstract.WorldCollection.md#every)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
  Â Â Â Â ) => unknown,  
  ): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[filter](foundry.documents.abstract.WorldCollection.md#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
  Â Â Â Â ) => unknown,  
  ): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md) | undefined

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md) | undefined

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[find](foundry.documents.abstract.WorldCollection.md#find)

### forEach

* forEach(fn: (value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md), index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md), index: number) => void

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[forEach](foundry.documents.abstract.WorldCollection.md#foreach)

### fromCompendium

* fromCompendium(  
  Â Â Â Â document: object | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â options?: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.md),  
  ): object

  Apply data transformations when importing a Document from a Compendium pack

  #### Parameters

  + document: object | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

    The source Document, or a plain data object
  + `Optional`options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.md) = {}

    Additional options which modify how the document is imported

  #### Returns object

  The processed data ready for world Document creation

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[fromCompendium](foundry.documents.abstract.WorldCollection.md#fromcompendium)

### get

* get(  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

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

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  #### Throws

  If strict is true and the Document cannot be found.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[get](foundry.documents.abstract.WorldCollection.md#get)

### getInvalid

* getInvalid(  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): void | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[getInvalid](foundry.documents.abstract.WorldCollection.md#getinvalid)

### getName

* getName(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md) | undefined

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md) | undefined

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[getName](foundry.documents.abstract.WorldCollection.md#getname)

### importDocument

* importDocument(  
  Â Â Â Â document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.md) | [ToCompendiumOptions](../interfaces/foundry.types.ToCompendiumOptions.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Import a Document into this collection, persisting the result.
  If the document ID already exists in the collection, it should be replaced with an optional confirmation dialog.
  If the document ID is undefined or does not already exist, a new Document will be created in the collection.

  #### Parameters

  + document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    A source Document to be imported. The document will be safely copied.
  + options: [FromCompendiumOptions](../interfaces/foundry.types.FromCompendiumOptions.md) | [ToCompendiumOptions](../interfaces/foundry.types.ToCompendiumOptions.md)

    Options which modify import behavior

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The imported Document instance

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[importDocument](foundry.documents.abstract.WorldCollection.md#importdocument)

### importFromCompendium

* importFromCompendium(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>,  
  Â Â Â Â id: string,  
  Â Â Â Â updateData?: object,  
  Â Â Â Â options?: any,  
  ): Promise<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>

  Import a Document from a Compendium collection, adding it to the current World.
  This method is a convenience wrapper around the underlying WorldCollection#importDocument workflow.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    The CompendiumCollection instance from which to import
  + id: string

    The ID of the compendium entry to import
  + `Optional`updateData: object = {}

    Optional additional data used to modify the imported Document before it is created
  + `Optional`options: any = {}

    Options passed to
    WorldCollection#importDocument

  #### Returns Promise<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>

  The imported Document instance

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[importFromCompendium](foundry.documents.abstract.WorldCollection.md#importfromcompendium)

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
    ) => [U](foundry.abstract.EmbeddedCollection.md#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  An Array of transformed values

  #### See

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[map](foundry.documents.abstract.WorldCollection.md#map)

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
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
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[reduce](foundry.documents.abstract.WorldCollection.md#reduce)

### render

* render(force?: boolean, options?: object): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + `Optional`force: boolean = false

    Force rendering
  + `Optional`options: object = {}

    Optional options

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[render](foundry.documents.abstract.WorldCollection.md#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

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

  #### Returns object[] | [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[search](foundry.documents.abstract.WorldCollection.md#search)

### set

* set(id: string, document: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)): FogExplorations

  #### Parameters

  + id: string
  + document: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  #### Returns FogExplorations

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[set](foundry.documents.abstract.WorldCollection.md#set)

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[some](foundry.documents.abstract.WorldCollection.md#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[toJSON](foundry.documents.abstract.WorldCollection.md#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: Function | null,  
  Â Â Â Â options?: object,  
  ): Promise<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: Function | null = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]>

  An array of updated data once the operation is complete

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[updateAll](foundry.documents.abstract.WorldCollection.md#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[\_initialize](foundry.documents.abstract.WorldCollection.md#_initialize)

### `Static`\_activateSocketListeners

* \_activateSocketListeners(socket: Socket): void

  `Internal`

  Activate Socket event listeners to handle for fog resets

  #### Parameters

  + socket: Socket

    The active web socket connection

  #### Returns void

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[getSearchableFields](foundry.documents.abstract.WorldCollection.md#getsearchablefields)

### `Static`registerSheet

* registerSheet(...args: any[]): void

  Register a Document sheet class as a candidate which can be used to display Documents of a given type.
  See [foundry.applications.apps.DocumentSheetConfig.registerSheet](foundry.applications.apps.DocumentSheetConfig.md#registersheet) for details.

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

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[registerSheet](foundry.documents.abstract.WorldCollection.md#registersheet)

### `Static`unregisterSheet

* unregisterSheet(...args: any[]): void

  Unregister a Document sheet class, removing it from the list of available sheet Applications to use.
  See [foundry.applications.apps.DocumentSheetConfig.unregisterSheet](foundry.applications.apps.DocumentSheetConfig.md#unregistersheet) for detauls.

  #### Parameters

  + ...args: any[]

    Arguments forwarded to the DocumentSheetConfig.unregisterSheet method

  #### Returns void

  #### Example: Deregister the default ActorSheet subclass to replace it with others.

  ```
  foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);
  Copy
  ```

  Inherited from [WorldCollection](foundry.documents.abstract.WorldCollection.md).[unregisterSheet](foundry.documents.abstract.WorldCollection.md#unregistersheet)