---
title: "CompendiumPacks | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.collections.CompendiumPacks.html"
category: "classes"
---

# Class CompendiumPacks

A mapping of CompendiumCollection instances, one per Compendium pack

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.collections.CompendiumPacks))

* [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>, this>
  + CompendiumPacks

##### Index

### Accessors

[contents](#contents)
[folders](#folders)
[name](#name)

### Methods

[\_getVisibleTreeContents](#_getvisibletreecontents)
[[iterator]](#iterator)
[every](#every)
[filter](#filter)
[find](#find)
[forEach](#foreach)
[get](#get)
[getName](#getname)
[map](#map)
[reduce](#reduce)
[some](#some)
[toJSON](#tojson)
[\_sortAlphabetical](#_sortalphabetical)

## Accessors

### contents

* get contents(): [V](foundry.utils.Collection.md#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](foundry.utils.Collection.md#v)[]

  Inherited from DirectoryCollectionMixin(Collection).contents

### folders

* get folders(): [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

  Get a Collection of Folders which contain Compendium Packs

  #### Returns [Collection](foundry.utils.Collection.md)<string, [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)>

### name

* get name(): string

  The Collection class name

  #### Returns string

## Methods

### \_getVisibleTreeContents

* \_getVisibleTreeContents(): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>[]

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>[]

### [iterator]

* "[iterator]"(): MapIterator<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

  Inherited from [Collection](foundry.utils.Collection.md).[[iterator]](foundry.utils.Collection.md#iterator)

### every

* every(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
    ) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

  Inherited from [Collection](foundry.utils.Collection.md).[every](foundry.utils.Collection.md#every)

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
  Â Â Â Â ) => unknown,  
  ): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>[]

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
  Â Â Â Â Â Â Â Â value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
  Â Â Â Â ) => unknown,  
  ): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (  
    Â Â Â Â value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
    ) => unknown

    The functional condition to
    test.

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

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

* forEach(fn: (value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md), index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md), index: number) => void

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

* get(  
  Â Â Â Â key: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

  Get an element from the Collection by its key.

  #### Parameters

  + key: string

    The key of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested key does not exist. Default false.

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

  The retrieved entry value, if the key exists, otherwise undefined

  #### Example: Get an element from the Collection by key

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.get("a"); // "Alfred"  
  c.get("d"); // undefined  
  c.get("d", {strict: true}); // throws Error
  Copy
  ```

  Inherited from [Collection](foundry.utils.Collection.md).[get](foundry.utils.Collection.md#get)

### getName

* getName(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any> | undefined

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

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (  
    Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
    Â Â Â Â index: number,  
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
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
  Â Â Â Â Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
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
    Â Â Â Â collection: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
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

### some

* some(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
  Â Â Â Â ) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (  
    Â Â Â Â element: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: [Collection](foundry.utils.Collection.md)<string, [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>,  
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

### `Static`\_sortAlphabetical

* \_sortAlphabetical(a: any, b: any): any

  #### Parameters

  + a: any
  + b: any

  #### Returns any

  Overrides DirectoryCollectionMixin(Collection).\_sortAlphabetical