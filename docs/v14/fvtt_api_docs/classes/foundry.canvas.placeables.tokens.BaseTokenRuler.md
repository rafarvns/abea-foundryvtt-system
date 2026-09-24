---
title: "BaseTokenRuler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.BaseTokenRuler.html"
category: "classes"
---

# Class BaseTokenRuler`Abstract`

The ruler of a Token visualizes

* the movement history of the Token,
* the movment path the Token currently animating along, and
* the planned movement path while the Token is being dragged.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.placeables.tokens.BaseTokenRuler))

* BaseTokenRuler
  + [TokenRuler](foundry.canvas.placeables.tokens.TokenRuler.md)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[isVisible](#isvisible)
[token](#token)
[visible](#visible)

### Methods

[clear](#clear)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[\_onVisibleChange](#_onvisiblechange)

## Constructors

### constructor

* new BaseTokenRuler(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): BaseTokenRuler

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The Token that this ruler belongs to

  #### Returns BaseTokenRuler

## Accessors

### isVisible

* get isVisible(): boolean

  Is the ruler supposed to be visible?
  [BaseTokenRuler#visible](#visible) is set to [BaseTokenRuler#isVisible](#isvisible) in
  [foundry.canvas.placeables.Token#\_refreshState](foundry.canvas.placeables.Token.md#_refreshstate).

  #### Returns boolean

### token

* get token(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  The reference to the Token this ruler belongs to.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

### visible

* get visible(): boolean

  Is the ruler visible?

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```
* set visible(value: boolean): void

  Set to [BaseTokenRuler#isVisible](#isvisible) in [foundry.canvas.placeables.Token#\_refreshState](foundry.canvas.placeables.Token.md#_refreshstate).

  #### Parameters

  + value: boolean

  #### Returns void

## Methods

### `Abstract`clear

* clear(): void

  Clear the ruler.
  Called in [foundry.canvas.placeables.Token#\_clear](foundry.canvas.placeables.Token.md#_clear).

  #### Returns void

### `Abstract`destroy

* destroy(): void

  Destroy the ruler.
  Called in [foundry.canvas.placeables.Token#\_destroy](foundry.canvas.placeables.Token.md#_destroy).

  #### Returns void

### `Abstract`draw

* draw(): Promise<void>

  Draw the ruler.
  Called in [foundry.canvas.placeables.Token#\_draw](foundry.canvas.placeables.Token.md#_draw).

  #### Returns Promise<void>

### `Abstract`refresh

* refresh(rulerData: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerData](../interfaces/foundry.types.TokenRulerData.md)>): void

  Refresh the ruler.
  Called in [foundry.canvas.placeables.Token#\_refreshRuler](foundry.canvas.placeables.Token.md#_refreshruler).

  #### Parameters

  + rulerData: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerData](../interfaces/foundry.types.TokenRulerData.md)>

  #### Returns void

### `Protected` `Abstract`\_onVisibleChange

* \_onVisibleChange(): void

  `Protected`

  Called when the ruler becomes visible or invisible.

  #### Returns void