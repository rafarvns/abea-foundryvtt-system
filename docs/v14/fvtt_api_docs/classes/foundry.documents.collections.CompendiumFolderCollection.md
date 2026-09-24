---
title: "CompendiumFolderCollection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.collections.CompendiumFolderCollection.html"
category: "classes"
---

# Class CompendiumFolderCollection

A Collection of Folder documents within a Compendium pack.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.collections.CompendiumFolderCollection))

* [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)
  + CompendiumFolderCollection

##### Index

### Properties

[\_source](#_source)
[apps](#apps)
[invalidDocumentIds](#invaliddocumentids)
[pack](#pack)
[documentName](#documentname)

### Accessors

[contents](#contents)
[documentClass](#documentclass)
[documentName](#documentname-1)
[name](#name)

### Methods

[\_onModifyContents](#_onmodifycontents)
[\_prepareImportDocument](#_prepareimportdocument)
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
[getSearchableFields](#getsearchablefields)

## Properties

### `Internal`\_source

\_source: object[]

The source data array from which the Documents in the WorldCollection are created

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_source](foundry.documents.abstract.DocumentCollection.md#_source)

### apps

apps: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>[] = []

An Array of application references which will be automatically updated when the collection content changes

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[apps](foundry.documents.abstract.DocumentCollection.md#apps)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[invalidDocumentIds](foundry.documents.abstract.DocumentCollection.md#invaliddocumentids)

### pack

pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

The CompendiumCollection instance that contains this CompendiumFolderCollection

### `Static`documentName

documentName: string

The base Document type which is contained within this DocumentCollection

Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[documentName](foundry.documents.abstract.DocumentCollection.md#documentname)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from DocumentCollection.contents

### documentClass

* get documentClass(): typeof [Document](foundry.abstract.Document.md)

  A reference to the Document class definition which is contained within this DocumentCollection.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from DocumentCollection.documentClass

### documentName

* get documentName(): string

  #### Returns string

  #### Inherit Doc

  Overrides DocumentCollection.documentName

### name

* get name(): string

  The Collection class name

  #### Returns string

  Inherited from DocumentCollection.name

## Methods

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

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_onModifyContents](foundry.documents.abstract.DocumentCollection.md#_onmodifycontents)

### \_prepareImportDocument

* \_prepareImportDocument(document: any, options: any): any

  #### Parameters

  + document: any
  + options: any

  #### Returns any

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_prepareImportDocument](foundry.documents.abstract.DocumentCollection.md#_prepareimportdocument)

### [iterator]

* "[iterator]"(): MapIterator<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[[iterator]](foundry.documents.abstract.DocumentCollection.md#iterator)

### createDocument

* createDocument(data: object, context?: object): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: object = {}

    Document creation context.

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[createDocument](foundry.documents.abstract.DocumentCollection.md#createdocument)

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[delete](foundry.documents.abstract.DocumentCollection.md#delete)

### every

* every(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[every](foundry.documents.abstract.DocumentCollection.md#every)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
  Â Â Â Â ) => unknown,  
  ): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

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
  Â Â Â Â Â Â Â Â value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
  Â Â Â Â ) => unknown,  
  ): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | undefined

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | undefined

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

* forEach(fn: (value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md), index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md), index: number) => void

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

* get(  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

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

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  #### Throws

  If strict is true and the Document cannot be found.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[get](foundry.documents.abstract.DocumentCollection.md#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs
  for this collection.

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[getInvalid](foundry.documents.abstract.DocumentCollection.md#getinvalid)

### getName

* getName(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | undefined

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md) | undefined

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

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[importDocument](foundry.documents.abstract.DocumentCollection.md#importdocument)

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
    ) => [U](foundry.abstract.EmbeddedCollection.md#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  An Array of transformed values

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[map](foundry.documents.abstract.DocumentCollection.md#map)

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
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
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
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

  #### Parameters

  + force: any
  + options: any

  #### Returns void

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[render](foundry.documents.abstract.DocumentCollection.md#render)

### search

* search(  
  Â Â Â Â search: { exclude?: string[]; filters?: FieldFilter[]; query?: string },  
  ): object[] | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

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

  #### Returns object[] | [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[search](foundry.documents.abstract.DocumentCollection.md#search)

### set

* set(id: string, document: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)): CompendiumFolderCollection

  #### Parameters

  + id: string
  + document: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

  #### Returns CompendiumFolderCollection

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[set](foundry.documents.abstract.DocumentCollection.md#set)

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[some](foundry.documents.abstract.DocumentCollection.md#some)

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
  ): Promise<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]>

  Update all objects in this DocumentCollection with a provided transformation.
  Conditionally filter to only apply to Entities which match a certain condition.

  #### Parameters

  + transformation: any

    An object of data or function to apply to all matched objects
  + condition: null = null

    A function which tests whether to target each object
  + options: {} = {}

    Additional options passed to Document.updateDocuments

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]>

  An array of updated data once the operation is complete

  Overrides [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[updateAll](foundry.documents.abstract.DocumentCollection.md#updateall)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Initialize the DocumentCollection by constructing any initially provided Document instances

  #### Returns void

  Inherited from [DocumentCollection](foundry.documents.abstract.DocumentCollection.md).[\_initialize](foundry.documents.abstract.DocumentCollection.md#_initialize)

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