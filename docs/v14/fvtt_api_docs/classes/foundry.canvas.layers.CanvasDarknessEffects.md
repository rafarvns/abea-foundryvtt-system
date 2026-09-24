---
title: "CanvasDarknessEffects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasDarknessEffects.html"
category: "classes"
---

# Class CanvasDarknessEffects

A layer of background alteration effects which change the appearance of the primary group render texture.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasDarknessEffects))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)
  + CanvasDarknessEffects

##### Index

### Properties

[options](#options)

### Accessors

[hookName](#hookname)
[name](#name)
[instance](#instance)
[layerOptions](#layeroptions)

### Methods

[\_draw](#_draw)
[clear](#clear)
[draw](#draw)
[getZIndex](#getzindex)
[tearDown](#teardown)
[\_tearDown](#_teardown)

## Properties

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[options](foundry.canvas.layers.CanvasLayer.md#options)

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasLayer.hookName

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

  Inherited from CanvasLayer.name

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): { name: string; zIndex: number }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string; zIndex: number }

  Inherited from CanvasLayer.layerOptions

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_draw](foundry.canvas.layers.CanvasLayer.md#_draw)

### clear

* clear(): void

  Clear coloration effects container

  #### Returns void

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[draw](foundry.canvas.layers.CanvasLayer.md#draw)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[getZIndex](foundry.canvas.layers.CanvasLayer.md#getzindex)

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_tearDown](foundry.canvas.layers.CanvasLayer.md#_teardown)