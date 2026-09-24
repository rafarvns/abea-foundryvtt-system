---
title: "ActiveEffectRegistry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.ActiveEffectRegistry.html"
category: "classes"
---

# Class ActiveEffectRegistry

A singleton helper class that tracks the duration and expiry of [ActiveEffect](foundry.documents.ActiveEffect.md)s

#### Hierarchy ([View Summary](../hierarchy.md#foundry.helpers.ActiveEffectRegistry))

* [IterableWeakSet](foundry.utils.IterableWeakSet.md)
  + ActiveEffectRegistry

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[initialized](#initialized)

### Methods

[\_initialize](#_initialize)
[[iterator]](#iterator)
[add](#add)
[addFromParent](#addfromparent)
[clear](#clear)
[delete](#delete)
[deleteFromParent](#deletefromparent)
[has](#has)
[refresh](#refresh)
[values](#values)

## Constructors

### constructor

* new ActiveEffectRegistry(  
  Â Â Â Â entries?: Iterable<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown>,  
  ): ActiveEffectRegistry

  #### Parameters

  + `Optional`entries: Iterable<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown> = []

    The initial entries.

  #### Returns ActiveEffectRegistry

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[constructor](foundry.utils.IterableWeakSet.md#constructor)

## Accessors

### initialized

* get initialized(): boolean

  Has the registry been populated for the first time?

  #### Returns boolean

## Methods

### \_initialize

* \_initialize(): void

  `Internal`

  Populate the registry for the first time.

  #### Returns void

### [iterator]

* "[iterator]"(): Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown>

  Enumerate the values.

  #### Returns Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown>

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[[iterator]](foundry.utils.IterableWeakSet.md#iterator)

### add

* add(effect: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)): ActiveEffectRegistry

  Register a single ActiveEffect document. If the document is already registered but no longer eligible for
  registration, it will be deleted.

  #### Parameters

  + effect: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)

  #### Returns ActiveEffectRegistry

  Overrides [IterableWeakSet](foundry.utils.IterableWeakSet.md).[add](foundry.utils.IterableWeakSet.md#add)

### addFromParent

* addFromParent(document: [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)): ActiveEffectRegistry

  Register the ActiveEffects embedded on an Actor or Item.

  #### Parameters

  + document: [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)

  #### Returns ActiveEffectRegistry

### clear

* clear(): void

  Clear all values from the set.

  #### Returns void

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[clear](foundry.utils.IterableWeakSet.md#clear)

### delete

* delete(value: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)): boolean

  Delete a value from the set.

  #### Parameters

  + value: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)

    The value to delete.

  #### Returns boolean

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[delete](foundry.utils.IterableWeakSet.md#delete)

### deleteFromParent

* deleteFromParent(document: [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)): boolean

  Unregister the ActiveEffects embedded on an Actor or Item.

  #### Parameters

  + document: [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](foundry.documents.Item.md)

  #### Returns boolean

  Did any deletions occur?

### has

* has(value: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)): boolean

  Whether this set contains the given value.

  #### Parameters

  + value: [documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md)

    The value to test.

  #### Returns boolean

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[has](foundry.utils.IterableWeakSet.md#has)

### refresh

* refresh(  
  Â Â Â Â event: string,  
  Â Â Â Â context?: { actors?: Set<[documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md)>; combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) },  
  ): Promise<void>

  Refresh the durations of registered ActiveEffects and perform the configured action for expired effects.

  #### Parameters

  + event: string

    The expiry or other event that triggered this call
  + `Optional`context: { actors?: Set<[documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md)>; combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) }

    Additional contextual data relevant to the event

    - ##### `Optional`actors?: Set<[documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md)>

      Limit the refresh to effects belonging to the provided list of actors.
    - ##### `Optional`combat?: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)

      The Combat associated with this event

  #### Returns Promise<void>

  #### See

  [CONFIG.ActiveEffect.expiryAction](../variables/CONFIG.ActiveEffect.md#expiryaction)

### values

* values(): Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown>

  Enumerate the collection.

  #### Returns Generator<[documents](../modules/foundry.documents.md).[ActiveEffect](foundry.documents.ActiveEffect.md), void, unknown>

  Inherited from [IterableWeakSet](foundry.utils.IterableWeakSet.md).[values](foundry.utils.IterableWeakSet.md#values)