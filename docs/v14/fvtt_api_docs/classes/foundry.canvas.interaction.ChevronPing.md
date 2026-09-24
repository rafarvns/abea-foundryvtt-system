---
title: "ChevronPing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.ChevronPing.html"
category: "classes"
---

# Class ChevronPing

A type of ping that points to a specific location.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.ChevronPing))

* [Ping](foundry.canvas.interaction.Ping.md)
  + ChevronPing

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_color](#_color)
[CHEVRON\_PATH](#chevron_path)

### Methods

[\_animateFrame](#_animateframe)
[animate](#animate)
[destroy](#destroy)

## Constructors

### constructor

* new ChevronPing(origin: [Point](../interfaces/foundry.types.Point.md), options?: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md)): ChevronPing

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates of the origin of the ping.
  + `Optional`options: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md) = {}

    Additional options to configure the ping animation.

  #### Returns ChevronPing

  Overrides [Ping](foundry.canvas.interaction.Ping.md).[constructor](foundry.canvas.interaction.Ping.md#constructor)

## Properties

### `Protected`\_color

\_color: [Color](foundry.utils.Color.md)

The color of the ping.

Inherited from [Ping](foundry.canvas.interaction.Ping.md).[\_color](foundry.canvas.interaction.Ping.md#_color)

### `Static`CHEVRON\_PATH

CHEVRON\_PATH: string = "icons/pings/chevron.webp"

The path to the chevron texture.

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