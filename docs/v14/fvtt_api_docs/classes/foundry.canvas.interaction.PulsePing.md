---
title: "PulsePing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.PulsePing.html"
category: "classes"
---

# Class PulsePing

A type of ping that produces a pulsing animation.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.PulsePing))

* [Ping](foundry.canvas.interaction.Ping.md)
  + PulsePing
    - [AlertPing](foundry.canvas.interaction.AlertPing.md)
    - [ArrowPing](foundry.canvas.interaction.ArrowPing.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_color](#_color)

### Methods

[\_animateFrame](#_animateframe)
[animate](#animate)
[destroy](#destroy)
[\_drawShape](#_drawshape)

## Constructors

### constructor

* new PulsePing(origin: [Point](../interfaces/foundry.types.Point.md), options?: [PulsePingOptions](../types/foundry.canvas.interaction.types.PulsePingOptions.md)): PulsePing

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates of the origin of the ping.
  + `Optional`options: [PulsePingOptions](../types/foundry.canvas.interaction.types.PulsePingOptions.md) = {}

    Additional options to configure the ping animation.

  #### Returns PulsePing

  Overrides [Ping](foundry.canvas.interaction.Ping.md).[constructor](foundry.canvas.interaction.Ping.md#constructor)

## Properties

### `Protected`\_color

\_color: [Color](foundry.utils.Color.md)

The color of the ping.

Inherited from [Ping](foundry.canvas.interaction.Ping.md).[\_color](foundry.canvas.interaction.Ping.md#_color)

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

  Overrides [Ping](foundry.canvas.interaction.Ping.md).[\_animateFrame](foundry.canvas.interaction.Ping.md#_animateframe)

### animate

* animate(): Promise<boolean>

  Start the ping animation.

  #### Returns Promise<boolean>

  Returns true if the animation ran to completion, false otherwise.

  Overrides [Ping](foundry.canvas.interaction.Ping.md).[animate](foundry.canvas.interaction.Ping.md#animate)

### destroy

* destroy(options?: {}): void

  #### Parameters

  + options: {} = {}

  #### Returns void

  #### Inherit Doc

  Inherited from [Ping](foundry.canvas.interaction.Ping.md).[destroy](foundry.canvas.interaction.Ping.md#destroy)

### `Protected`\_drawShape

* \_drawShape(g: Graphics, color: number, alpha: number, size: number): void

  `Protected`

  Draw the shape for this ping.

  #### Parameters

  + g: Graphics

    The graphics object to draw to.
  + color: number

    The color of the shape.
  + alpha: number

    The alpha of the shape.
  + size: number

    The size of the shape to draw.

  #### Returns void