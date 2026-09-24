---
title: "CanvasDarknessEffects | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasDarknessEffects.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.html)

# Class CanvasDarknessEffects

A layer of background alteration effects which change the appearance of the primary group render texture.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.CanvasDarknessEffects))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)
  + CanvasDarknessEffects

##### Index

### Properties

[interactiveChildren](foundry.canvas.layers.CanvasDarknessEffects.html#interactivechildren)
[options](foundry.canvas.layers.CanvasDarknessEffects.html#options)

### Accessors

[hookName](foundry.canvas.layers.CanvasDarknessEffects.html#hookname)
[name](foundry.canvas.layers.CanvasDarknessEffects.html#name)
[instance](foundry.canvas.layers.CanvasDarknessEffects.html#instance)
[layerOptions](foundry.canvas.layers.CanvasDarknessEffects.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.CanvasDarknessEffects.html#_draw)
[clear](foundry.canvas.layers.CanvasDarknessEffects.html#clear)
[draw](foundry.canvas.layers.CanvasDarknessEffects.html#draw)
[tearDown](foundry.canvas.layers.CanvasDarknessEffects.html#teardown)
[\_tearDown](foundry.canvas.layers.CanvasDarknessEffects.html#_teardown)

## Properties

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[options](foundry.canvas.layers.CanvasLayer.html#options)

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

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Inherited from CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): { name: string }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string }

  Inherited from CanvasLayer.layerOptions

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_draw](foundry.canvas.layers.CanvasLayer.html#_draw)

### clear

* clear(): void

  Clear coloration effects container

  #### Returns void

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[draw](foundry.canvas.layers.CanvasLayer.html#draw)

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[tearDown](foundry.canvas.layers.CanvasLayer.html#teardown)

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_tearDown](foundry.canvas.layers.CanvasLayer.html#_teardown)