---
title: "DocumentCollection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.abstract.DocumentCollection.html"
category: "classes"
---

# Class DocumentCollection<TDocument>`Abstract`

An abstract subclass of the Collection container which defines a collection of Document instances.

#### Template: TDocument

#### Type Parameters

* TDocument extends [Document](foundry.abstract.Document.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.abstract.DocumentCollection))

* [Collection](foundry.utils.Collection.md)
  + DocumentCollection
    - [WorldCollection](foundry.documents.abstract.WorldCollection.md)
    - [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)
    - [CompendiumFolderCollection](foundry.documents.collections.CompendiumFolderCollection.md)

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
[documentClass](#documentclass)
[documentName](#documentname-1)
[name](#name)

### Methods

[\_onModifyContents](#_onmodifycontents)
[[iterator]](#iterator)
[createDocument](#createdocument)
[delete](#delete)
[every](#every)
[filter](#filter)
[find](#find)
[forEach](#foreach)
[get](#get)
[getInvalid](#getinvalid)
[getName](#getname)
[importDocument](#importdocument)
[map](#map)
[reduce](#reduce)
[render](#render)
[search](#search)
[set](#set)
[some](#some)
[toJSON](#tojson)
[updateAll](#updateall)
[\_initialize](#_initialize)
[\_prepareImportDocument](#_prepareimportdocument)
[getSearchableFields](#getsearchablefields)

## Constructors

### constructor

* new DocumentCollection<  
  Â Â Â Â [TDocument](#constructordocumentcollectiontdocument) extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  >(  
  Â Â Â Â data?: object[],  
  ): DocumentCollection<[TDocument](#tdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns DocumentCollection<[TDocument](#tdocument)>

  Overrides Collection.constructor

## Properties

### `Internal`\_source

\_source: object[]

The source data array from which the Documents in the WorldCollection are created

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>[] = []

An Array of application references which will be automatically updated when the collection content changes

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

### `Static`documentName

documentName: string

The base Document type which is contained within this DocumentCollection

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from Collection.contents

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.md)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.md)

### documentName

* get documentName(): any

  #### Returns any

  #### Inherit Doc

### name

* get name(): string

  The Collection class name

  #### Returns string

## Methods

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md),  
  Â Â Â Â documents: [TDocument](#tdocument)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md),  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

    The database action performed
  + documents: [TDocument](#tdocument)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

    Database operation details
  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User who performed the operation

  #### Returns void

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](#tdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](#tdocument)>

  Inherited from [Collection](foundry.utils.Collection.md).[[iterator]](foundry.utils.Collection.md#iterator)

### createDocument

* createDocument(data: object, context?: object): [TDocument](#tdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [TDocument](#tdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Overrides Collection.delete

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

  Inherited from [Collection](foundry.utils.Collection.md).[every](foundry.utils.Collection.md#every)

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

  Inherited from [Collection](foundry.utils.Collection.md).[filter](foundry.utils.Collection.md#filter)

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

  Inherited from [Collection](foundry.utils.Collection.md).[find](foundry.utils.Collection.md#find)

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

  Inherited from [Collection](foundry.utils.Collection.md).[forEach](foundry.utils.Collection.md#foreach)

### get

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): [TDocument](#tdocument)

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

  #### Returns [TDocument](#tdocument)

  #### Throws

  If strict is true and the Document cannot be found.

  Overrides [Collection](foundry.utils.Collection.md).[get](foundry.utils.Collection.md#get)

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

  Inherited from [Collection](foundry.utils.Collection.md).[getName](foundry.utils.Collection.md#getname)

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

  Inherited from [Collection](foundry.utils.Collection.md).[map](foundry.utils.Collection.md#map)

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

  Inherited from [Collection](foundry.utils.Collection.md).[reduce](foundry.utils.Collection.md#reduce)

### render

* render(force?: boolean, options?: object): void

  Render any Applications associated with this DocumentCollection.

  #### Parameters

  + `Optional`force: boolean = false

    Force rendering
  + `Optional`options: object = {}

    Optional options

  #### Returns void

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

### set

* set(id: string, document: [TDocument](#tdocument)): DocumentCollection<[TDocument](#tdocument)>

  #### Parameters

  + id: string
  + document: [TDocument](#tdocument)

  #### Returns DocumentCollection<[TDocument](#tdocument)>

  Overrides Collection.set

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

  Inherited from [Collection](foundry.utils.Collection.md).[some](foundry.utils.Collection.md#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [Collection](foundry.utils.Collection.md).[toJSON](foundry.utils.Collection.md#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: Function | null,  
  Â Â Â Â options?: object,  
  ): Promise<[TDocument](#tdocument)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: Function | null = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[TDocument](#tdocument)[]>

  An array of updated data once the operation is complete

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

### `Protected`\_prepareImportDocument

* \_prepareImportDocument(  
  Â Â Â Â document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options: object,  
  ): object

  `Protected`

  Translate a provided Document into data ready for import into this collection.

  #### Parameters

  + document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    A source Document to be imported. The document should be safely copied.
  + options: object

    Options which modify import behavior

  #### Returns object

  Data ready for import

  #### Throws

  An error if the import should be disallowed

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