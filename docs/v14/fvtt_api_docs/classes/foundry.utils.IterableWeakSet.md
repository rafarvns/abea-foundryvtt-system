---
title: "IterableWeakSet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.IterableWeakSet.html"
category: "classes"
---

# Class IterableWeakSet<T>

Stores a set of objects with weak references to them, allowing them to be garbage collected. Can be iterated over,
unlike a WeakSet.

#### Template: T

#### Implements

#### Type Parameters

* T extends WeakKey = WeakKey

#### Hierarchy ([View Summary](../hierarchy.md#foundry.utils.IterableWeakSet))

* IterableWeakSet
  + [ActiveEffectRegistry](foundry.helpers.ActiveEffectRegistry.md)

##### Index

### Constructors

[constructor](#constructor)

### Methods

[[iterator]](#iterator)
[add](#add)
[clear](#clear)
[delete](#delete)
[has](#has)
[values](#values)

## Constructors

### constructor

* new IterableWeakSet<[T](#constructoriterableweaksett) extends WeakKey = WeakKey>(  
  Â Â Â Â entries?: Iterable<[T](#t), void, unknown>,  
  ): IterableWeakSet<[T](#t)>

  #### Type Parameters

  + T extends WeakKey = WeakKey

  #### Parameters

  + `Optional`entries: Iterable<[T](#t), void, unknown> = []

    The initial entries.

  #### Returns IterableWeakSet<[T](#t)>

## Methods

### [iterator]

* "[iterator]"(): Generator<[T](#t), void, unknown>

  Enumerate the values.

  #### Returns Generator<[T](#t), void, unknown>

### add

* add(value: [T](#t)): IterableWeakSet<[T](#t)>

  Add a value to the set.

  #### Parameters

  + value: [T](#t)

    The value to add.

  #### Returns IterableWeakSet<[T](#t)>

### clear

* clear(): void

  Clear all values from the set.

  #### Returns void

### delete

* delete(value: [T](#t)): boolean

  Delete a value from the set.

  #### Parameters

  + value: [T](#t)

    The value to delete.

  #### Returns boolean

### has

* has(value: [T](#t)): boolean

  Whether this set contains the given value.

  #### Parameters

  + value: [T](#t)

    The value to test.

  #### Returns boolean

### values

* values(): Generator<[T](#t), void, unknown>

  Enumerate the collection.

  #### Returns Generator<[T](#t), void, unknown>