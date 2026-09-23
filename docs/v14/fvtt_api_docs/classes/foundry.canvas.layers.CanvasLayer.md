---
title: "CanvasLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasLayer.html"
category: "classes"
---

# Class CanvasLayer`Abstract` `Interface`

An abstract pattern for primary layers of the game canvas to implement.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasLayer))

* Container
  + CanvasLayer
    - [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)
    - [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.md)
    - [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.md)
    - [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.md)
    - [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.md)
    - [ControlsLayer](foundry.canvas.layers.ControlsLayer.md)
    - [GridLayer](foundry.canvas.layers.GridLayer.md)

##### Index

### Properties

[options](#options)

### Accessors

[hookName](#hookname)
[name](#name)
[instance](#instance)
[layerOptions](#layeroptions)

### Methods

[draw](#draw)
[getZIndex](#getzindex)
[tearDown](#teardown)
[\_draw](#_draw)
[\_tearDown](#_teardown)

## Properties

### options

options: { name: string } = ...

Options for this layer instance.

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

### name

* get name(): string

  The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
  defined baseClass for the layer type.

  #### Returns string

  #### Example

  ```
  canvas.lighting.name -> "LightingLayer"
  Copy
  ```

### `Static`instance

* get instance(): CanvasLayer

  Return a reference to the active instance of this canvas layer

  #### Returns CanvasLayer

### `Static`layerOptions

* get layerOptions(): { name: string; zIndex: number }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string; zIndex: number }

## Methods

### draw

* draw(options?: object): Promise<CanvasLayer>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<CanvasLayer>

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<CanvasLayer>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<CanvasLayer>

### `Protected`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is drawn

  #### Returns Promise<void>

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>