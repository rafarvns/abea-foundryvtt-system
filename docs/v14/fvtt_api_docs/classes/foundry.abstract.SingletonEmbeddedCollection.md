---
title: "SingletonEmbeddedCollection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.abstract.SingletonEmbeddedCollection.html"
category: "classes"
---

# Class SingletonEmbeddedCollection

This class provides a [foundry.utils.Collection](foundry.utils.Collection.md) wrapper around a singleton embedded Document
so that it can be interacted with via a common interface.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.abstract.SingletonEmbeddedCollection))

* [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md)
  + SingletonEmbeddedCollection

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[documentClass](#documentclass)
[invalidDocumentIds](#invaliddocumentids)
[model](#model)
[name](#name)
[\_initialized](#_initialized)

### Accessors

[contents](#contents)
[documentName](#documentname)
[documentsByType](#documentsbytype)

### Methods

[\_delete](#_delete)
[\_onModifyContents](#_onmodifycontents)
[\_set](#_set)
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
[initialize](#initialize)
[manages](#manages)
[map](#map)
[reduce](#reduce)
[set](#set)
[some](#some)
[toJSON](#tojson)
[toObject](#toobject)
[\_handleInvalidDocument](#_handleinvaliddocument)
[\_initializeDocument](#_initializedocument)

## Constructors

### constructor

* new SingletonEmbeddedCollection(  
  Â Â Â Â name: string,  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â sourceArray: object[],  
  ): SingletonEmbeddedCollection

  #### Parameters

  + name: string

    The name of this collection in the parent Document.
  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The parent Document instance to which this collection belongs.
  + sourceArray: object[]

    The source data array for the collection in the parent Document data.

  #### Returns SingletonEmbeddedCollection

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[constructor](foundry.abstract.EmbeddedCollection.md#constructor)

## Properties

### \_source

\_source: object[]

The source data array from which the embedded collection is created

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_source](foundry.abstract.EmbeddedCollection.md#_source)

### documentClass

documentClass: typeof [Document](foundry.abstract.Document.md)

The Document implementation used to construct instances within this collection.

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[documentClass](foundry.abstract.EmbeddedCollection.md#documentclass)

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[invalidDocumentIds](foundry.abstract.EmbeddedCollection.md#invaliddocumentids)

### model

model: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

The parent Document to which this EmbeddedCollection instance belongs.

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[model](foundry.abstract.EmbeddedCollection.md#model)

### name

name: string

The name of this collection in the parent Document.

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[name](foundry.abstract.EmbeddedCollection.md#name)

### `Protected`\_initialized

\_initialized: boolean = false

Has this embedded collection been initialized as a one-time workflow?

Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_initialized](foundry.abstract.EmbeddedCollection.md#_initialized)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from EmbeddedCollection.contents

### documentName

* get documentName(): string | void

  The Document name of Documents stored in this collection.

  #### Returns string | void

  Inherited from EmbeddedCollection.documentName

### documentsByType

* get documentsByType(): Record<string, [TDocument](foundry.abstract.EmbeddedCollection.md#tdocument)[]>

  This collection's contents grouped by subtype, lazily (re-)computed as needed.
  If the document type does not support subtypes, all will be in the "base" group.

  #### Returns Record<string, [TDocument](foundry.abstract.EmbeddedCollection.md#tdocument)[]>

  Inherited from EmbeddedCollection.documentsByType

## Methods

### \_delete

* \_delete(key: any): void

  #### Parameters

  + key: any

  #### Returns void

  Overrides [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_delete](foundry.abstract.EmbeddedCollection.md#_delete)

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md),  
  Â Â Â Â documents: any[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this EmbeddedCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

    The database action performed
  + documents: any[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

    Database operation details
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the operation

  #### Returns void

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_onModifyContents](foundry.abstract.EmbeddedCollection.md#_onmodifycontents)

### \_set

* \_set(key: any, value: any): void

  #### Parameters

  + key: any
  + value: any

  #### Returns void

  Overrides [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_set](foundry.abstract.EmbeddedCollection.md#_set)

### [iterator]

* "[iterator]"(): MapIterator<any>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<any>

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[[iterator]](foundry.abstract.EmbeddedCollection.md#iterator)

### createDocument

* createDocument(data: object, context?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): any

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Document creation context.

  #### Returns any

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[createDocument](foundry.abstract.EmbeddedCollection.md#createdocument)

### delete

* delete(key: string, options?: { modifySource?: boolean }): boolean

  Remove a document from the collection.

  #### Parameters

  + key: string

    The embedded Document ID.
  + `Optional`options: { modifySource?: boolean } = {}

    Additional options to the delete operation.

    - ##### `Optional`modifySource?: boolean

      Whether to modify the collection's source as part of the operation.

  #### Returns boolean

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[delete](foundry.abstract.EmbeddedCollection.md#delete)

### every

* every(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: any,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (element: any, index: number, set: [Collection](foundry.utils.Collection.md)<string, any>) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[every](foundry.abstract.EmbeddedCollection.md#every)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: any,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => unknown,  
  ): any[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (value: any, index: number, collection: [Collection](foundry.utils.Collection.md)<string, any>) => unknown

    The functional condition to
    test.

  #### Returns any[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[filter](foundry.abstract.EmbeddedCollection.md#filter)

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: any,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => unknown,  
  ): any

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (value: any, index: number, collection: [Collection](foundry.utils.Collection.md)<string, any>) => unknown

    The functional condition to
    test.

  #### Returns any

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[find](foundry.abstract.EmbeddedCollection.md#find)

### forEach

* forEach(fn: (value: any, index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: any, index: number) => void

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

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[forEach](foundry.abstract.EmbeddedCollection.md#foreach)

### get

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): any

  Get a document from the EmbeddedCollection by its ID.

  #### Parameters

  + id: string

    The ID of the Embedded Document to retrieve.
  + `Optional`options: { invalid?: boolean; strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Embedded Document.
    - ##### `Optional`strict?: boolean

      Throw an Error if the requested Embedded Document does not exist.

  #### Returns any

  The retrieved document instance, or undefined

  #### Throws

  If strict is true and the Embedded Document cannot be found.

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[get](foundry.abstract.EmbeddedCollection.md#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): any

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns any

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs for this collection.

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[getInvalid](foundry.abstract.EmbeddedCollection.md#getinvalid)

### getName

* getName(name: string, options?: { strict?: boolean }): any

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns any

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[getName](foundry.abstract.EmbeddedCollection.md#getname)

### initialize

* initialize(options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): void

  Initialize the EmbeddedCollection by synchronizing its Document instances with existing \_source data.
  Importantly, this method does not make any modifications to the \_source array.
  It is responsible for creating, updating, or removing Documents from the Collection.

  #### Parameters

  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Initialization options.

  #### Returns void

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[initialize](foundry.abstract.EmbeddedCollection.md#initialize)

### manages

* manages(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  Overrides [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[manages](foundry.abstract.EmbeddedCollection.md#manages)

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: any,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (element: any, index: number, collection: [Collection](foundry.utils.Collection.md)<string, any>) => [U](foundry.abstract.EmbeddedCollection.md#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  An Array of transformed values

  #### See

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[map](foundry.abstract.EmbeddedCollection.md#map)

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â initial: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#reduceu)

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu), element: T, index: number, collection: [Collection](foundry.utils.Collection.md)<string, any>) => [U](foundry.abstract.EmbeddedCollection.md#reduceu)

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

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[reduce](foundry.abstract.EmbeddedCollection.md#reduce)

### set

* set(key: any, value: any, options?: {}): SingletonEmbeddedCollection

  Add a document to the collection.

  #### Parameters

  + key: any

    The embedded Document ID.
  + value: any

    The embedded Document instance.
  + options: {} = {}

    Additional options to the set operation.

  #### Returns SingletonEmbeddedCollection

  Overrides [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[set](foundry.abstract.EmbeddedCollection.md#set)

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: any,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, any>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (element: any, index: number, set: [Collection](foundry.utils.Collection.md)<string, any>) => boolean

    The functional condition to test.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[some](foundry.abstract.EmbeddedCollection.md#some)

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[toJSON](foundry.abstract.EmbeddedCollection.md#tojson)

### toObject

* toObject(source?: boolean): object[]

  Convert the EmbeddedCollection to an array of simple objects.

  #### Parameters

  + `Optional`source: boolean = true

    Draw data for contained Documents from the underlying data source?

  #### Returns object[]

  The extracted array of primitive objects

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[toObject](foundry.abstract.EmbeddedCollection.md#toobject)

### `Protected`\_handleInvalidDocument

* \_handleInvalidDocument(  
  Â Â Â Â data: object,  
  Â Â Â Â err: Error,  
  Â Â Â Â options?: { strict?: boolean },  
  ): void

  `Protected`

  Log warnings or errors when a Document is found to be invalid.

  #### Parameters

  + data: object

    The invalid Document's data.
  + err: Error

    The validation error.
  + `Optional`options: { strict?: boolean } = {}

    Options to configure invalid Document handling.

    - ##### `Optional`strict?: boolean

      Whether to throw an error or only log a warning.

  #### Returns void

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_handleInvalidDocument](foundry.abstract.EmbeddedCollection.md#_handleinvaliddocument)

### `Protected`\_initializeDocument

* \_initializeDocument(data: object, options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): any

  `Protected`

  Initialize an embedded document and store it in the collection.
  The document may already exist, in which case we are reinitializing it with new \_source data.
  The document may not yet exist, in which case we create a new Document instance using the provided source.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)

    Initialization options.

  #### Returns any

  The initialized document or null if no document was initialized

  Inherited from [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md).[\_initializeDocument](foundry.abstract.EmbeddedCollection.md#_initializedocument)