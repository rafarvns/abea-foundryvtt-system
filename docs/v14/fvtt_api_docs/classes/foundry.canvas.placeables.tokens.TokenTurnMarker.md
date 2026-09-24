---
title: "TokenTurnMarker | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.TokenTurnMarker.html"
category: "classes"
---

# Class TokenTurnMarker

The Turn Marker of a [foundry.canvas.placeables.Token](foundry.canvas.placeables.Token.md).

#### Hierarchy

* Container
  + TokenTurnMarker

##### Index

### Constructors

[constructor](#constructor)

### Properties

[animation](#animation)
[mesh](#mesh)

### Accessors

[token](#token)

### Methods

[animate](#animate)
[draw](#draw)

## Constructors

### constructor

* new TokenTurnMarker(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): TokenTurnMarker

  Construct a TokenTurnMarker by providing a Token object instance.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The Token that this Turn Marker belongs to

  #### Returns TokenTurnMarker

  Overrides PIXI.Container.constructor

## Properties

### animation

animation: TurnMarkerAnimationConfigData = ...

The animation configuration of the Turn Marker.

### mesh

mesh: SpriteMesh

The sprite of the Turn Marker.

## Accessors

### token

* get token(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  The Token who this Turn Marker belongs to.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

## Methods

### animate

* animate(deltaTime: number): void

  Animate the Turn Marker.

  #### Parameters

  + deltaTime: number

    The delta time

  #### Returns void

### draw

* draw(): Promise<void>

  Draw the Turn Marker.

  #### Returns Promise<void>