---
title: "RenderFlags | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.RenderFlags.html"
category: "classes"
---

# Class RenderFlags

A data structure for tracking a set of boolean status flags.
This is a restricted set which can only accept flag values which are pre-defined.

#### Hierarchy

* Set
  + RenderFlags

##### Index

### Constructors

[constructor](#constructor)

### Properties

[flags](#flags)
[object](#object)
[priority](#priority)

### Methods

[clear](#clear)
[handle](#handle)
[map](#map)
[reduce](#reduce)
[set](#set)

## Constructors

### constructor

* new RenderFlags(  
  Â Â Â Â flags?: Record<string, RenderFlag>,  
  Â Â Â Â config?: { object?: any; priority?: "OBJECTS" | "PERCEPTION" },  
  ): RenderFlags

  #### Parameters

  + `Optional`flags: Record<string, RenderFlag> = {}

    An object which defines the flags which are supported for tracking
  + `Optional`config: { object?: any; priority?: "OBJECTS" | "PERCEPTION" } = {}

    Optional configuration

    - ##### `Optional`object?: any

      The object which owns this RenderFlags instance
    - ##### `Optional`priority?: "OBJECTS" | "PERCEPTION"

      The ticker priority at which these render flags are handled

  #### Returns RenderFlags

  Overrides Set.constructor

## Properties

### `Readonly`flags

flags: Readonly<Record<string, RenderFlag>>

The flags tracked by this data structure.

### `Readonly`object

object: any

The RenderFlagObject instance which owns this set of RenderFlags

### `Readonly`priority

priority: "OBJECTS" | "PERCEPTION"

The update priority when these render flags are applied.

## Methods

### clear

* clear(): Record<string, boolean>

  #### Returns Record<string, boolean>

  The flags which were previously set that have been cleared.

  #### Inherit Doc

  Overrides Set.clear

### handle

* handle(flag: string): boolean

  Allow for handling one single flag at a time.
  This function returns whether the flag needs to be handled and removes it from the pending set.

  #### Parameters

  + flag: string

  #### Returns boolean

### map

* map<[U](#mapu)>(  
  Â Â Â Â transform: (element: string, index: number, set: Set<string>) => [U](#mapu),  
  ): Set<[U](#mapu)>

  Create a new Set where every element is modified by a provided transformation function.

  #### Type Parameters

  + U

  #### Parameters

  + transform: (element: string, index: number, set: Set<string>) => [U](#mapu)

    The transformation function to apply. Positional arguments are the value, the index of
    iteration, and the set being transformed.

  #### Returns Set<[U](#mapu)>

  A new Set of equal size containing transformed elements.

  #### See

  Array#map

  Inherited from Set.map

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](#reduceu),  
  Â Â Â Â Â Â Â Â element: string,  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: Set<string>,  
  Â Â Â Â ) => [U](#reduceu),  
  Â Â Â Â initial?: [U](#reduceu),  
  ): [U](#reduceu)

  Create a new Set with elements that are filtered and transformed by a provided reducer function.

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (accum: [U](#reduceu), element: string, index: number, set: Set<string>) => [U](#reduceu)

    A reducer function applied to each value. Positional arguments are the accumulator, the value,
    the index of iteration, and the set being reduced.
  + `Optional`initial: [U](#reduceu)

    The initial value of the returned accumulator.

  #### Returns [U](#reduceu)

  The final value of the accumulator.

  #### See

  Array#reduce

  Inherited from Set.reduce

### set

* set(changes: Record<string, boolean>): void

  Activate certain flags, also toggling propagation and reset behaviors

  #### Parameters

  + changes: Record<string, boolean>

  #### Returns void