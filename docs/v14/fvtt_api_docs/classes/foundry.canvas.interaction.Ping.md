---
title: "Ping | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.Ping.html"
category: "classes"
---

# Class Ping

A class to manage a user ping on the canvas.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.Ping))

* Container
  + Ping
    - [PulsePing](foundry.canvas.interaction.PulsePing.md)
    - [ChevronPing](foundry.canvas.interaction.ChevronPing.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_color](#_color)

### Methods

[animate](#animate)
[destroy](#destroy)
[\_animateFrame](#_animateframe)

## Constructors

### constructor

* new Ping(origin: [Point](../interfaces/foundry.types.Point.md), options?: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md)): Ping

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates of the origin of the ping.
  + `Optional`options: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md) = {}

    Additional options to configure the ping animation.

  #### Returns Ping

  Overrides PIXI.Container.constructor

## Properties

### `Protected`\_color

\_color: [Color](foundry.utils.Color.md)

The color of the ping.

## Methods

### animate

* animate(): Promise<boolean>

  Start the ping animation.

  #### Returns Promise<boolean>

  Returns true if the animation ran to completion, false otherwise.

### destroy

* destroy(options?: {}): void

  #### Parameters

  + options: {} = {}

  #### Returns void

  #### Inherit Doc

### `Protected`\_animateFrame

* \_animateFrame(dt: number, animation: CanvasAnimationData): void

  `Protected`

  On each tick, advance the animation.

  #### Parameters

  + dt: number

    The number of ms that elapsed since the previous frame.
  + animation: CanvasAnimationData

    The animation state.

  #### Returns void