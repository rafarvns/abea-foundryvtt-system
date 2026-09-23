---
title: "UserTargets | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.UserTargets.html"
category: "classes"
---

# Class UserTargets

A subclass of Set which manages the Token ids which the User has targeted.

#### See

[foundry.documents.User#targets](foundry.documents.User.md#targets)

#### Hierarchy

* Set
  + UserTargets

##### Index

### Accessors

[ids](#ids)

### Methods

[add](#add)
[clear](#clear)
[delete](#delete)
[map](#map)
[reduce](#reduce)

## Accessors

### ids

* get ids(): string[]

  Return the Token IDs which are user targets

  #### Returns string[]

## Methods

### add

* add(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): UserTargets

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  #### Returns UserTargets

  Overrides Set.add

### clear

* clear(): void

  #### Returns void

  Overrides Set.clear

### delete

* delete(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): boolean

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  #### Returns boolean

  Overrides Set.delete

### map

* map<[U](#mapu)>(  
  Â Â Â Â transform: (  
  Â Â Â Â Â Â Â Â element: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: Set<[canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)>,  
  Â Â Â Â ) => [U](foundry.canvas.interaction.RenderFlags.md#mapu),  
  ): Set<[U](foundry.canvas.interaction.RenderFlags.md#mapu)>

  Create a new Set where every element is modified by a provided transformation function.

  #### Type Parameters

  + U

  #### Parameters

  + transform: (  
    Â Â Â Â element: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: Set<[canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)>,  
    ) => [U](foundry.canvas.interaction.RenderFlags.md#mapu)

    The transformation function to apply. Positional arguments are the value, the index of
    iteration, and the set being transformed.

  #### Returns Set<[U](foundry.canvas.interaction.RenderFlags.md#mapu)>

  A new Set of equal size containing transformed elements.

  #### See

  Array#map

  Inherited from Set.map

### reduce

* reduce<[U](#reduceu)>(  
  Â Â Â Â reducer: (  
  Â Â Â Â Â Â Â Â accum: [U](foundry.canvas.interaction.RenderFlags.md#reduceu),  
  Â Â Â Â Â Â Â Â element: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
  Â Â Â Â Â Â Â Â index: number,  
  Â Â Â Â Â Â Â Â set: Set<[canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)>,  
  Â Â Â Â ) => [U](foundry.canvas.interaction.RenderFlags.md#reduceu),  
  Â Â Â Â initial?: [U](foundry.canvas.interaction.RenderFlags.md#reduceu),  
  ): [U](foundry.canvas.interaction.RenderFlags.md#reduceu)

  Create a new Set with elements that are filtered and transformed by a provided reducer function.

  #### Type Parameters

  + U

  #### Parameters

  + reducer: (  
    Â Â Â Â accum: [U](foundry.canvas.interaction.RenderFlags.md#reduceu),  
    Â Â Â Â element: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
    Â Â Â Â index: number,  
    Â Â Â Â set: Set<[canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)>,  
    ) => [U](foundry.canvas.interaction.RenderFlags.md#reduceu)

    A reducer function applied to each value. Positional arguments are the accumulator, the value,
    the index of iteration, and the set being reduced.
  + `Optional`initial: [U](foundry.canvas.interaction.RenderFlags.md#reduceu)

    The initial value of the returned accumulator.

  #### Returns [U](foundry.canvas.interaction.RenderFlags.md#reduceu)

  The final value of the accumulator.

  #### See

  Array#reduce

  Inherited from Set.reduce