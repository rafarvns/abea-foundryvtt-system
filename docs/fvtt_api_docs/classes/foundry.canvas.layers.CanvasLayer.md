---
title: "CanvasLayer | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasLayer.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

# Class CanvasLayer`Abstract` `Interface`

An abstract pattern for primary layers of the game canvas to implement.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.CanvasLayer))

* Container
  + CanvasLayer
    - [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)
    - [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html)
    - [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.html)
    - [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.html)
    - [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.html)
    - [GridLayer](foundry.canvas.layers.GridLayer.html)

##### Index

### Properties

[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)
[options](foundry.canvas.layers.CanvasLayer.html#options)

### Accessors

[hookName](foundry.canvas.layers.CanvasLayer.html#hookname)
[name](foundry.canvas.layers.CanvasLayer.html#name)
[instance](foundry.canvas.layers.CanvasLayer.html#instance)
[layerOptions](foundry.canvas.layers.CanvasLayer.html#layeroptions)

### Methods

[draw](foundry.canvas.layers.CanvasLayer.html#draw)
[tearDown](foundry.canvas.layers.CanvasLayer.html#teardown)
[\_draw](foundry.canvas.layers.CanvasLayer.html#_draw)
[\_tearDown](foundry.canvas.layers.CanvasLayer.html#_teardown)

## Properties

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Overrides PIXI.Container.interactiveChildren

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

  Overrides PIXI.Container.name

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

### `Static`layerOptions

* get layerOptions(): { name: string }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string }

## Methods

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

### `Protected` `Abstract`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is drawn

  #### Returns Promise<void>

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>