---
title: "EmbeddedCollection | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.abstract.EmbeddedCollection.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [abstract](../modules/foundry.abstract.html)
* [EmbeddedCollection](foundry.abstract.EmbeddedCollection.html)

# Class EmbeddedCollection<TDocument>

An extension of the Collection.
Used for the specific task of containing embedded Document instances within a parent Document.

#### Type Parameters

* TDocument

#### Hierarchy ([View Summary](../hierarchy.html#foundry.abstract.EmbeddedCollection))

* [Collection](foundry.utils.Collection.html)
  + EmbeddedCollection
    - [EmbeddedCollectionDelta](foundry.abstract.EmbeddedCollectionDelta.html)
    - [SingletonEmbeddedCollection](foundry.abstract.SingletonEmbeddedCollection.html)

##### Index

### Constructors

[constructor](foundry.abstract.EmbeddedCollection.html#constructor)

### Properties

[\_source](foundry.abstract.EmbeddedCollection.html#_source)
[documentClass](foundry.abstract.EmbeddedCollection.html#documentclass)
[invalidDocumentIds](foundry.abstract.EmbeddedCollection.html#invaliddocumentids)
[model](foundry.abstract.EmbeddedCollection.html#model)
[name](foundry.abstract.EmbeddedCollection.html#name)
[\_initialized](foundry.abstract.EmbeddedCollection.html#_initialized)

### Accessors

[contents](foundry.abstract.EmbeddedCollection.html#contents)
[documentName](foundry.abstract.EmbeddedCollection.html#documentname)
[documentsByType](foundry.abstract.EmbeddedCollection.html#documentsbytype)

### Methods

[\_onModifyContents](foundry.abstract.EmbeddedCollection.html#_onmodifycontents)
[[iterator]](foundry.abstract.EmbeddedCollection.html#iterator)
[createDocument](foundry.abstract.EmbeddedCollection.html#createdocument)
[delete](foundry.abstract.EmbeddedCollection.html#delete)
[filter](foundry.abstract.EmbeddedCollection.html#filter)
[find](foundry.abstract.EmbeddedCollection.html#find)
[forEach](foundry.abstract.EmbeddedCollection.html#foreach)
[get](foundry.abstract.EmbeddedCollection.html#get)
[getInvalid](foundry.abstract.EmbeddedCollection.html#getinvalid)
[getName](foundry.abstract.EmbeddedCollection.html#getname)
[initialize](foundry.abstract.EmbeddedCollection.html#initialize)
[map](foundry.abstract.EmbeddedCollection.html#map)
[reduce](foundry.abstract.EmbeddedCollection.html#reduce)
[set](foundry.abstract.EmbeddedCollection.html#set)
[some](foundry.abstract.EmbeddedCollection.html#some)
[toJSON](foundry.abstract.EmbeddedCollection.html#tojson)
[toObject](foundry.abstract.EmbeddedCollection.html#toobject)
[\_delete](foundry.abstract.EmbeddedCollection.html#_delete)
[\_handleInvalidDocument](foundry.abstract.EmbeddedCollection.html#_handleinvaliddocument)
[\_initializeDocument](foundry.abstract.EmbeddedCollection.html#_initializedocument)
[\_set](foundry.abstract.EmbeddedCollection.html#_set)

## Constructors

### constructor

* new EmbeddedCollection<  
  Â Â Â Â [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument) extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  >(  
  Â Â Â Â name: string,  
  Â Â Â Â parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â sourceArray: object[],  
  ): [EmbeddedCollection](foundry.abstract.EmbeddedCollection.html)<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  #### Type Parameters

  + TDocument extends [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  #### Parameters

  + name: string

    The name of this collection in the parent Document.
  + parent: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The parent Document instance to which this collection belongs.
  + sourceArray: object[]

    The source data array for the collection in the parent Document data.

  #### Returns [EmbeddedCollection](foundry.abstract.EmbeddedCollection.html)<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  Overrides Collection.constructor

## Properties

### \_source

\_source: object[]

The source data array from which the embedded collection is created

### documentClass

documentClass: typeof [Document](foundry.abstract.Document.html)

The Document implementation used to construct instances within this collection.

### invalidDocumentIds

invalidDocumentIds: Set<string> = ...

Record the set of document ids where the Document was not initialized because of invalid source data

### model

model: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

The parent Document to which this EmbeddedCollection instance belongs.

### name

name: string

The name of this collection in the parent Document.

### `Protected`\_initialized

\_initialized: boolean = false

Has this embedded collection been initialized as a one-time workflow?

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.html#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.html#v)[]

  Inherited from Collection.contents

### documentName

* get documentName(): string | void

  The Document name of Documents stored in this collection.

  #### Returns string | void

### documentsByType

* get documentsByType(): Record<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[]>

  This collection's contents grouped by subtype, lazily (re-)computed as needed.
  If the document type does not support subtypes, all will be in the "base" group.

  #### Returns Record<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[]>

## Methods

### \_onModifyContents

* \_onModifyContents(  
  Â Â Â Â action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html),  
  Â Â Â Â documents: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[],  
  Â Â Â Â result: any[],  
  Â Â Â Â operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): void

  `Internal`

  Follow-up actions to take when a database operation modifies Documents in this EmbeddedCollection.

  #### Parameters

  + action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.html)

    The database action performed
  + documents: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[]

    The array of modified Documents
  + result: any[]

    The result of the database operation
  + operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.html)

    Database operation details
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the operation

  #### Returns void

### [iterator]

* "[iterator]"(): MapIterator<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  Inherited from [Collection](foundry.utils.Collection.html).[[iterator]](foundry.utils.Collection.html#iterator)

### createDocument

* createDocument(data: object, context?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)): [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  Instantiate a Document for inclusion in the Collection.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`context: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Document creation context.

  #### Returns [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

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

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)[]

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
  Â Â Â Â Â Â Â Â value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>,  
  Â Â Â Â ) => unknown,  
  ): undefined | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.html)<string, [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns undefined | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

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

* forEach(fn: (value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)) => void

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

* get(id: string, options?: { invalid?: boolean; strict?: boolean }): [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

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

  #### Returns [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  The retrieved document instance, or undefined

  #### Throws

  If strict is true and the Embedded Document cannot be found.

  Overrides [Collection](foundry.utils.Collection.html).[get](foundry.utils.Collection.html#get)

### getInvalid

* getInvalid(id: string, options?: { strict?: boolean }): void | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  Obtain a temporary Document instance for a document id which currently has invalid source data.

  #### Parameters

  + id: string

    A document ID with invalid source data.
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure retrieval.

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested ID is not in the set of invalid IDs for
      this collection.

  #### Returns void | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  An in-memory instance for the invalid Document

  #### Throws

  If strict is true and the requested ID is not in the set of invalid IDs for this collection.

### getName

* getName(name: string, options?: { strict?: boolean }): undefined | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns undefined | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

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

### initialize

* initialize(options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)): void

  Initialize the EmbeddedCollection by synchronizing its Document instances with existing \_source data.
  Importantly, this method does not make any modifications to the \_source array.
  It is responsible for creating, updating, or removing Documents from the Collection.

  #### Parameters

  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Initialization options.

  #### Returns void

### map

* map(  
  Â Â Â Â transformer: (arg0: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any,  
  ): any[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Parameters

  + transformer: (arg0: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => any

    A transformation function applied to each entry value.
    Positional arguments are the value, the index of iteration, and the collection being mapped.

  #### Returns any[]

  An Array of transformed values

  Inherited from [Collection](foundry.utils.Collection.html).[map](foundry.utils.Collection.html#map)

### reduce

* reduce(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â arg0: any,  
  Â Â Â Â Â Â Â Â arg1: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
  Â Â Â Â Â Â Â Â arg2: number,  
  Â Â Â Â Â Â Â Â arg3: [Collection](foundry.utils.Collection.html),  
  Â Â Â Â ) => any,  
  Â Â Â Â initial: any,  
  ): any

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Parameters

  + reducer: (arg0: any, arg1: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument), arg2: number, arg3: [Collection](foundry.utils.Collection.html)) => any

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

### set

* set(  
  Â Â Â Â key: string,  
  Â Â Â Â value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument),  
  Â Â Â Â options?: { modifySource?: boolean },  
  ): [EmbeddedCollection](foundry.abstract.EmbeddedCollection.html)<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  Add a document to the collection.

  #### Parameters

  + key: string

    The embedded Document ID.
  + value: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

    The embedded Document instance.
  + `Optional`options: { modifySource?: boolean } = {}

    Additional options to the set operation.

    - ##### `Optional`modifySource?: boolean

      Whether to modify the collection's source as part of the operation.

  #### Returns [EmbeddedCollection](foundry.abstract.EmbeddedCollection.html)<[TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)>

  Overrides Collection.set

### some

* some(  
  Â Â Â Â condition: (arg0: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (arg0: [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument), arg1: number, arg2: [Collection](foundry.utils.Collection.html)) => boolean

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
  Â Â Â Â id: string,  
  Â Â Â Â err: Error,  
  Â Â Â Â options?: { strict?: boolean },  
  ): void

  `Protected`

  Log warnings or errors when a Document is found to be invalid.

  #### Parameters

  + id: string

    The invalid Document's ID.
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
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): null | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  `Protected`

  Initialize an embedded document and store it in the collection.
  The document may already exist, in which case we are reinitializing it with new \_source data.
  The document may not yet exist, in which case we create a new Document instance using the provided source.

  #### Parameters

  + data: object

    The Document data.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)

    Initialization options.

  #### Returns null | [TDocument](foundry.abstract.EmbeddedCollection.html#constructorembeddedcollectiontdocument)

  The initialized document or null if no document was initialized

### `Protected`\_set

* \_set(key: string, value: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>): void

  `Protected`

  Modify the underlying source array to include the Document.

  #### Parameters

  + key: string

    The Document ID key.
  + value: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

    The Document.

  #### Returns void