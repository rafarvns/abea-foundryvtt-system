---
title: "DocumentCollection | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.abstract.DocumentCollection.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [abstract](../modules/foundry.documents.abstract.html)
* [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)

# Class DocumentCollection<TDocument>`Abstract`

An abstract subclass of the Collection container which defines a collection of Document instances.

#### Type Parameters

* TDocument

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.abstract.DocumentCollection))

* [Collection](foundry.utils.Collection.html)
  + DocumentCollection
    - [WorldCollection](foundry.documents.abstract.WorldCollection.html)
    - [CompendiumCollection](foundry.documents.collections.CompendiumCollection.html)
    - [CompendiumFolderCollection](foundry.documents.collections.CompendiumFolderCollection.html)

##### Index

### Constructors

[constructor](foundry.documents.abstract.DocumentCollection.html#constructor)

### Properties

[apps](foundry.documents.abstract.DocumentCollection.html#apps)
[invalidDocumentIds](foundry.documents.abstract.DocumentCollection.html#invaliddocumentids)
[documentName](foundry.documents.abstract.DocumentCollection.html#documentname)

### Accessors

[contents](foundry.documents.abstract.DocumentCollection.html#contents)
[documentClass](foundry.documents.abstract.DocumentCollection.html#documentclass)
[documentName](foundry.documents.abstract.DocumentCollection.html#documentname-1)
[name](foundry.documents.abstract.DocumentCollection.html#name)

### Methods

[\_onModifyContents](foundry.documents.abstract.DocumentCollection.html#_onmodifycontents)
[[iterator]](foundry.documents.abstract.DocumentCollection.html#iterator)
[createDocument](foundry.documents.abstract.DocumentCollection.html#createdocument)
[delete](foundry.documents.abstract.DocumentCollection.html#delete)
[filter](foundry.documents.abstract.DocumentCollection.html#filter)
[find](foundry.documents.abstract.DocumentCollection.html#find)
[forEach](foundry.documents.abstract.DocumentCollection.html#foreach)
[get](foundry.documents.abstract.DocumentCollection.html#get)
[getInvalid](foundry.documents.abstract.DocumentCollection.html#getinvalid)
[getName](foundry.documents.abstract.DocumentCollection.html#getname)
[map](foundry.documents.abstract.DocumentCollection.html#map)
[reduce](foundry.documents.abstract.DocumentCollection.html#reduce)
[render](foundry.documents.abstract.DocumentCollection.html#render)
[search](foundry.documents.abstract.DocumentCollection.html#search)
[set](foundry.documents.abstract.DocumentCollection.html#set)
[some](foundry.documents.abstract.DocumentCollection.html#some)
[toJSON](foundry.documents.abstract.DocumentCollection.html#tojson)
[updateAll](foundry.documents.abstract.DocumentCollection.html#updateall)
[\_initialize](foundry.documents.abstract.DocumentCollection.html#_initialize)
[getSearchableFields](foundry.documents.abstract.DocumentCollection.html#getsearchablefields)

## Constructors

### constructor

* new DocumentCollection<  
  Â Â Â Â [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument) extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  >(  
  Â Â Â Â data?: object[],  
  ): [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  #### Parameters

  + data: object[] = []

    An array of data objects from which to create document instances

  #### Returns [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>

  Overrides Collection.constructor

## Properties

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>[]

An Array of application references which will be automatically updated when the collection content changes

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

### `Static`documentName

documentName: string

The base Document type which is contained within this DocumentCollection

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from Collection.contents

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.html)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.html)

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
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html),  
  Â Â Â Â documents: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html),  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this DocumentCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html)

    The database action performed
  + documents: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)

    Database operation details
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User who performed the operation

  #### Returns void

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>

  Inherited from [Collection](foundry.utils.Collection.html).[[iterator]](foundry.utils.Collection.html#iterator)

### createDocument

* createDocument(data: object, context?: object): [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Overrides Collection.delete

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [Collection](foundry.utils.Collection.html).[filter](foundry.utils.Collection.html#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [Collection](foundry.utils.Collection.html).[find](foundry.utils.Collection.html#find)

### forEach

* forEach(fn: (value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)) => void

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

  Inherited from [Collection](foundry.utils.Collection.html).[forEach](foundry.utils.Collection.html#foreach)

### get

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

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

  #### Returns [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  #### Throws

  If strict is true and the Document cannot be found.

  Overrides [Collection](foundry.utils.Collection.html).[get](foundry.utils.Collection.html#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

### getName

* getName(name: string, options?: { strict?: boolean }): undefined | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [Collection](foundry.utils.Collection.html).[getName](foundry.utils.Collection.html#getname)

### map

* map(  
  Â Â Â Â transformer: (arg0: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any,  
  ): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [Collection](foundry.utils.Collection.html).[map](foundry.utils.Collection.html#map)

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

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

  Inherited from [Collection](foundry.utils.Collection.html).[reduce](foundry.utils.Collection.html#reduce)

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
  ): object[] | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]

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

  #### Returns object[] | [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]

### set

* set(id: any, document: any): void

  #### Parameters

  + id: any
  + document: any

  #### Returns void

  #### Inherit Doc

  Overrides Collection.set

### some

* some(  
  Â Â Â Â condition: (arg0: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

    The functional condition to test. Positional
    arguments are the value, the index of iteration, and the collection being tested.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [Collection](foundry.utils.Collection.html).[some](foundry.utils.Collection.html#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [Collection](foundry.utils.Collection.html).[toJSON](foundry.utils.Collection.html#tojson)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: null | Function,  
  Â Â Â Â options?: object,  
  ): Promise<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: null | Function = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[TDocument](foundry.documents.abstract.DocumentCollection.html#constructordocumentcollectiontdocument)[]>

  An array of updated data once the operation is complete

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

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