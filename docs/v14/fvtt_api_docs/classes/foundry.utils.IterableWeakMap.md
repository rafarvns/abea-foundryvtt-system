---
title: "IterableWeakMap | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.IterableWeakMap.html"
category: "classes"
---

# Class IterableWeakMap<K, V>

Stores a map of objects with weak references to the keys, allowing them to be garbage collected. Both keys and values
can be iterated over, unlike a WeakMap.

#### Template: K

#### Template: V

#### Type Parameters

* K extends WeakKey
* V

#### Hierarchy

* WeakMap
  + IterableWeakMap

##### Index

### Constructors

[constructor](#constructor)

### Methods

[[iterator]](#iterator)
[clear](#clear)
[delete](#delete)
[entries](#entries)
[get](#get)
[keys](#keys)
[set](#set)
[values](#values)

## Constructors

### constructor

* new IterableWeakMap<[K](#constructoriterableweakmapk) extends WeakKey, [V](#constructoriterableweakmapv)>(  
  Â Â Â Â entries?: Iterable<[[K](#k), [V](#v)], undefined, unknown>,  
  ): IterableWeakMap<[K](#k), [V](#v)>

  #### Type Parameters

  + K extends WeakKey
  + V

  #### Parameters

  + `Optional`entries: Iterable<[[K](#k), [V](#v)], undefined, unknown> = []

    The initial entries.

  #### Returns IterableWeakMap<[K](#k), [V](#v)>

  Overrides WeakMap.constructor

## Methods

### [iterator]

* "[iterator]"(): Generator<[[K](#k), [V](#v)], void, unknown>

  Enumerate the entries.

  #### Returns Generator<[[K](#k), [V](#v)], void, unknown>

### clear

* clear(): void

  Clear all values from the map.

  #### Returns void

### delete

* delete(key: [K](#k)): boolean

  Remove a key from the map.

  #### Parameters

  + key: [K](#k)

    The key to remove.

  #### Returns boolean

  Overrides WeakMap.delete

### entries

* entries(): Generator<[[K](#k), [V](#v)], void, unknown>

  Enumerate the entries.

  #### Returns Generator<[[K](#k), [V](#v)], void, unknown>

### get

* get(key: [K](#k)): [V](#v) | undefined

  Retrieve a value from the map.

  #### Parameters

  + key: [K](#k)

    The value's key.

  #### Returns [V](#v) | undefined

  Overrides WeakMap.get

### keys

* keys(): Generator<[K](#k), void, unknown>

  Enumerate the keys.

  #### Returns Generator<[K](#k), void, unknown>

### set

* set(key: [K](#k), value: [V](#v)): IterableWeakMap<[K](#k), [V](#v)>

  Place a value in the map.

  #### Parameters

  + key: [K](#k)

    The key.
  + value: [V](#v)

    The value.

  #### Returns IterableWeakMap<[K](#k), [V](#v)>

  Overrides WeakMap.set

### values

* values(): Generator<[V](#v), void, unknown>

  Enumerate the values.

  #### Returns Generator<[V](#v), void, unknown>