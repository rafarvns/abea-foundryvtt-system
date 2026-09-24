---
title: "EmbeddedCollection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.abstract.EmbeddedCollection.html"
category: "classes"
---

# Class EmbeddedCollection<TDocument>

An extension of the Collection.
Used for the specific task of containing embedded Document instances within a parent Document.

#### Template: TDocument

#### Type Parameters

* TDocument extends [Document](foundry.abstract.Document.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.abstract.EmbeddedCollection))

* [Collection](foundry.utils.Collection.md)
  + EmbeddedCollection
    - [EmbeddedCollectionDelta](foundry.abstract.EmbeddedCollectionDelta.md)
    - [SingletonEmbeddedCollection](foundry.abstract.SingletonEmbeddedCollection.md)

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
[initialize](#initialize)
[manages](#manages)
[map](#map)
[reduce](#reduce)
[set](#set)
[some](#some)
[toJSON](#tojson)
[toObject](#toobject)
[\_delete](#_delete)
[\_handleInvalidDocument](#_handleinvaliddocument)
[\_initializeDocument](#_initializedocument)
[\_set](#_set)

## Constructors

### constructor

* new EmbeddedCollection<  
  Â Â Â Â [TDocument](#constructorembeddedcollectiontdocument) extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  >(  
  Â Â Â Â name: string,  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â sourceArray: object[],  
  ): EmbeddedCollection<[TDocument](#tdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  #### Parameters

  + name: string

    The name of this collection in the parent Document.
  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The parent Document instance to which this collection belongs.
  + sourceArray: object[]

    The source data array for the collection in the parent Document data.

  #### Returns EmbeddedCollection<[TDocument](#tdocument)>

  Overrides Collection.constructor

## Properties

### \_source

\_source: object[]

The source data array from which the embedded collection is created

### documentClass

documentClass: typeof [Document](foundry.abstract.Document.md)

The Document implementation used to construct instances within this collection.

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

### model

model: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

The parent Document to which this EmbeddedCollection instance belongs.

### name

name: string

The name of this collection in the parent Document.

### `Protected`\_initialized

\_initialized: boolean = false

Has this embedded collection been initialized as a one-time workflow?

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from Collection.contents

### documentName

* get documentName(): string | void

  The Document name of Documents stored in this collection.

  #### Returns string | void

### documentsByType

* get documentsByType(): Record<string, [TDocument](#tdocument)[]>

  This collection's contents grouped by subtype, lazily (re-)computed as needed.
  If the document type does not support subtypes, all will be in the "base" group.

  #### Returns Record<string, [TDocument](#tdocument)[]>

## Methods

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md),  
  Â Â Â Â documents: [TDocument](#tdocument)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this EmbeddedCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

    The database action performed
  + documents: [TDocument](#tdocument)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

    Database operation details
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the operation

  #### Returns void

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](#tdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](#tdocument)>

  Inherited from [Collection](foundry.utils.Collection.md).[[iterator]](foundry.utils.Collection.md#iterator)

### createDocument

* createDocument(data: object, context?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): [TDocument](#tdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Document creation context.

  #### Returns [TDocument](#tdocument)

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

  #### Returns [TDocument](#tdocument)

  The retrieved document instance, or undefined

  #### Throws

  If strict is true and the Embedded Document cannot be found.

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

  If strict is true and the requested ID is not in the set of invalid IDs for this collection.

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

### initialize

* initialize(options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)): void

  Initialize the EmbeddedCollection by synchronizing its Document instances with existing \_source data.
  Importantly, this method does not make any modifications to the \_source array.
  It is responsible for creating, updating, or removing Documents from the Collection.

  #### Parameters

  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Initialization options.

  #### Returns void

### manages

* manages(id: string): boolean

  Does this SingletonEmbeddedCollection actively manage the Document with a specific ID.

  #### Parameters

  + id: string

    The Document ID to check

  #### Returns boolean

  Is the specified document managed by this collection?

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [TDocument](#tdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => [U](#mapu),  
  ): [U](#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (  
    Â Â Â Â element: [TDocument](#tdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => [U](#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](#mapu)[]

  An Array of transformed values

  #### See

  Inherited from [Collection](foundry.utils.Collection.md).[map](foundry.utils.Collection.md#map)

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
  Â Â Â Â ) => [U](#reduceu),  
  Â Â Â Â initial: [U](#reduceu),  
  ): [U](#reduceu)

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (  
    Â Â Â Â accum: [U](#reduceu),  
    Â Â Â Â element: T,  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [TDocument](#tdocument)>,  
    ) => [U](#reduceu)

    A reducer function
    applied to each entry
    value.
  + initial: [U](#reduceu)

    An initial value which accumulates with each iteration

  #### Returns [U](#reduceu)

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

### set

* set(  
  Â Â Â Â key: string,  
  Â Â Â Â value: [TDocument](#tdocument),  
  Â Â Â Â options?: { modifySource?: boolean },  
  ): EmbeddedCollection<[TDocument](#tdocument)>

  Add a document to the collection.

  #### Parameters

  + key: string

    The embedded Document ID.
  + value: [TDocument](#tdocument)

    The embedded Document instance.
  + `Optional`options: { modifySource?: boolean } = {}

    Additional options to the set operation.

    - ##### `Optional`modifySource?: boolean

      Whether to modify the collection's source as part of the operation.

  #### Returns EmbeddedCollection<[TDocument](#tdocument)>

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

### toObject

* toObject(source?: boolean): object[]

  Convert the EmbeddedCollection to an array of simple objects.

  #### Parameters

  + `Optional`source: boolean = true

    Draw data for contained Documents from the underlying data source?

  #### Returns object[]

  The extracted array of primitive objects

### `Protected`\_delete

* \_delete(key: string, options?: object): void

  `Protected`

  Remove the value from the underlying source array.

  #### Parameters

  + key: string

    The Document ID key.
  + `Optional`options: object = {}

    Additional options to configure deletion behavior.

  #### Returns void

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

### `Protected`\_initializeDocument

* \_initializeDocument(  
  Â Â Â Â data: object,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): [TDocument](#tdocument) | null

  `Protected`

  Initialize an embedded document and store it in the collection.
  The document may already exist, in which case we are reinitializing it with new \_source data.
  The document may not yet exist, in which case we create a new Document instance using the provided source.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)

    Initialization options.

  #### Returns [TDocument](#tdocument) | null

  The initialized document or null if no document was initialized

### `Protected`\_set

* \_set(key: string, value: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>): void

  `Protected`

  Modify the underlying source array to include the Document.

  #### Parameters

  + key: string

    The Document ID key.
  + value: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The Document.

  #### Returns void