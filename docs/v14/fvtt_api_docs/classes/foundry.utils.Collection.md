---
title: "Collection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.Collection.html"
category: "classes"
---

# Class Collection<K, V>

A reusable storage concept which blends the functionality of an Array with the efficient key-based lookup of a Map.
This concept is reused throughout Foundry VTT where a collection of uniquely identified elements is required.

#### Template: K

#### Template: V

#### Type Parameters

* K extends string
* V

#### Hierarchy ([View Summary](../hierarchy.md#foundry.utils.Collection))

* Map
  + Collection
    - [EmbeddedCollection](foundry.abstract.EmbeddedCollection.md)
    - [ToursCollection](foundry.nue.ToursCollection.md)
    - [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)
    - [CompendiumPacks](foundry.documents.collections.CompendiumPacks.md)

##### Index

### Accessors

[contents](#contents)

### Methods

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

## Accessors

### contents

* get contents(): [V](#v)[]

  Return an Array of all the entry values in the Collection

  #### Returns [V](#v)[]

## Methods

### [iterator]

* "[iterator]"(): MapIterator<[V](#v)>

  Then iterating over a Collection, we should iterate over its values instead of over its entries

  #### Returns MapIterator<[V](#v)>

  Overrides Map.[iterator]

### every

* every(  
  Â Â Â Â condition: (element: [V](#v), index: number, set: Collection<[K](#k), [V](#v)>) => boolean,  
  ): boolean

  Test whether a condition is met by every entry in the Collection.

  #### Parameters

  + condition: (element: [V](#v), index: number, set: Collection<[K](#k), [V](#v)>) => boolean

    The functional condition to test.

  #### Returns boolean

  True if the test condition was truthy for every entry.

  #### See

### filter

* filter(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [V](#v),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: Collection<[K](#k), [V](#v)>,  
  Â Â Â Â ) => unknown,  
  ): [V](#v)[]

  Filter the Collection, returning an Array of entries which match a functional condition.

  #### Parameters

  + condition: (value: [V](#v), index: number, collection: Collection<[K](#k), [V](#v)>) => unknown

    The functional condition to
    test.

  #### Returns [V](#v)[]

  An Array of matched values

  #### See

  #### Example: Filter the Collection for specific entries

  ```
  let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);  
  let hasA = c.filters(entry => entry.slice(0) === "A");
  Copy
  ```

### find

* find(  
  Â Â Â Â condition: (  
  Â Â Â Â Â Â Â Â value: [V](#v),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: Collection<[K](#k), [V](#v)>,  
  Â Â Â Â ) => unknown,  
  ): [V](#v) | undefined

  Find an entry in the Map using a functional condition.

  #### Parameters

  + condition: (value: [V](#v), index: number, collection: Collection<[K](#k), [V](#v)>) => unknown

    The functional condition to
    test.

  #### Returns [V](#v) | undefined

  The value, if found, otherwise undefined

  #### See

  #### Example: Create a new Collection and reference its contents

  ```
  let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);  
  c.get("a") === c.find(entry => entry === "A"); // true
  Copy
  ```

### forEach

* forEach(fn: (value: [V](#v), index: number) => void): void

  Apply a function to each element of the collection

  #### Parameters

  + fn: (value: [V](#v), index: number) => void

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

  Overrides Map.forEach

### get

* get(key: string, options?: { strict?: boolean }): [V](#v) | undefined

  Get an element from the Collection by its key.

  #### Parameters

  + key: string

    The key of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested key does not exist. Default false.

  #### Returns [V](#v) | undefined

  The retrieved entry value, if the key exists, otherwise undefined

  #### Example: Get an element from the Collection by key

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.get("a"); // "Alfred"  
  c.get("d"); // undefined  
  c.get("d", {strict: true}); // throws Error
  Copy
  ```

  Overrides Map.get

### getName

* getName(name: string, options?: { strict?: boolean }): [V](#v) | undefined

  Get an entry from the Collection by name.
  Use of this method assumes that the objects stored in the collection have a "name" attribute.

  #### Parameters

  + name: string

    The name of the entry to retrieve
  + `Optional`options: { strict?: boolean } = {}

    Additional options that affect how entries are retrieved

    - ##### `Optional`strict?: boolean

      Throw an Error if the requested name does not exist. Default false.

  #### Returns [V](#v) | undefined

  The retrieved entry value, if one was found, otherwise undefined

  #### Example: Get an element from the Collection by name (if applicable)

  ```
  let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);  
  c.getName("Alfred"); // "Alfred"  
  c.getName("D"); // undefined  
  c.getName("D", {strict: true}); // throws Error
  Copy
  ```

### map

* map<[U](#mapu)>(  
  Â Â Â Â transformer: (  
  Â Â Â Â Â Â Â Â element: [V](#v),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: Collection<[K](#k), [V](#v)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#mapu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  Transform each element of the Collection into a new form, returning an Array of transformed values

  #### Type Parameters

  + U

  #### Parameters

  + transformer: (element: [V](#v), index: number, collection: Collection<[K](#k), [V](#v)>) => [U](foundry.abstract.EmbeddedCollection.md#mapu)

    A transformation function
    applied to each entry value.

  #### Returns [U](foundry.abstract.EmbeddedCollection.md#mapu)[]

  An Array of transformed values

  #### See

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â Â Â Â Â element: T,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â collection: Collection<[K](#k), [V](#v)>,  
  Â Â Â Â ) => [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  Â Â Â Â initial: [U](foundry.abstract.EmbeddedCollection.md#reduceu),  
  ): [U](foundry.abstract.EmbeddedCollection.md#reduceu)

  Reduce the Collection by applying an evaluator function and accumulating entries

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (accum: [U](foundry.abstract.EmbeddedCollection.md#reduceu), element: T, index: number, collection: Collection<[K](#k), [V](#v)>) => [U](foundry.abstract.EmbeddedCollection.md#reduceu)

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

### some

* some(  
  Â Â Â Â condition: (element: [V](#v), index: number, set: Collection<[K](#k), [V](#v)>) => boolean,  
  ): boolean

  Test whether a condition is met by some entry in the Collection.

  #### Parameters

  + condition: (element: [V](#v), index: number, set: Collection<[K](#k), [V](#v)>) => boolean

    The functional condition to test.

  #### Returns boolean

  Was the test condition passed by at least one entry?

  #### See

### toJSON

* toJSON(): object[]

  Convert the Collection to a primitive array of its contents.

  #### Returns object[]

  An array of contained values