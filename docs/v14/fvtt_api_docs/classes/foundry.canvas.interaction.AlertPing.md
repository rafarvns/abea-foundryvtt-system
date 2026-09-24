---
title: "AlertPing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.AlertPing.html"
category: "classes"
---

# Class AlertPing

A type of ping that produces a pulse warning sign animation.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.AlertPing))

* [PulsePing](foundry.canvas.interaction.PulsePing.md)
  + AlertPing

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_color](#_color)

### Methods

[\_animateFrame](#_animateframe)
[\_drawShape](#_drawshape)
[animate](#animate)
[destroy](#destroy)

## Constructors

### constructor

* new AlertPing(origin: [Point](../interfaces/foundry.types.Point.md), options?: [PulsePingOptions](../types/foundry.canvas.interaction.types.PulsePingOptions.md)): AlertPing

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates of the origin of the ping.
  + `Optional`options: [PulsePingOptions](../types/foundry.canvas.interaction.types.PulsePingOptions.md) = {}

    Additional options to configure the ping animation.

  #### Returns AlertPing

  Overrides [PulsePing](foundry.canvas.interaction.PulsePing.md).[constructor](foundry.canvas.interaction.PulsePing.md#constructor)

## Properties

### `Protected`\_color

\_color: [Color](foundry.utils.Color.md)

The color of the ping.

Inherited from [PulsePing](foundry.canvas.interaction.PulsePing.md).[\_color](foundry.canvas.interaction.PulsePing.md#_color)

## Methods

### \_animateFrame

* \_animateFrame(dt: any, animation: any): void

  On each tick, advance the animation.

  #### Parameters

  + dt: any

    The number of ms that elapsed since the previous frame.
  + animation: any

    The animation state.

  #### Returns void

  Inherited from [PulsePing](foundry.canvas.interaction.PulsePing.md).[\_animateFrame](foundry.canvas.interaction.PulsePing.md#_animateframe)

### \_drawShape

* \_drawShape(g: any, color: any, alpha: any, size: any): void

  #### Parameters

  + g: any
  + color: any
  + alpha: any
  + size: any

  #### Returns void

  Overrides [PulsePing](foundry.canvas.interaction.PulsePing.md).[\_drawShape](foundry.canvas.interaction.PulsePing.md#_drawshape)

### animate

* animate(): Promise<boolean>

  Start the ping animation.

  #### Returns Promise<boolean>

  Returns true if the animation ran to completion, false otherwise.

  Inherited from [PulsePing](foundry.canvas.interaction.PulsePing.md).[animate](foundry.canvas.interaction.PulsePing.md#animate)

### destroy

* destroy(options?: {}): void

  #### Parameters

  + options: {} = {}

  #### Returns void

  #### Inherit Doc

  Inherited from [PulsePing](foundry.canvas.interaction.PulsePing.md).[destroy](foundry.canvas.interaction.PulsePing.md#destroy)