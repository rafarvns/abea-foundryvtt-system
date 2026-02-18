---
title: "CanvasBackgroundAlterationEffects | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasBackgroundAlterationEffects.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html)

# Class CanvasBackgroundAlterationEffects

A layer of background alteration effects which change the appearance of the primary group render texture.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.CanvasBackgroundAlterationEffects))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)
  + CanvasBackgroundAlterationEffects

##### Index

### Properties

[interactiveChildren](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#interactivechildren)
[lighting](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#lighting)
[options](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#options)
[vision](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#vision)
[visionPreferred](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#visionpreferred)

### Accessors

[hookName](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#hookname)
[name](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#name)
[instance](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#instance)
[layerOptions](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#_draw)
[\_tearDown](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#_teardown)
[clear](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#clear)
[draw](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#draw)
[tearDown](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html#teardown)

## Properties

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)

### lighting

lighting: Container<DisplayObject>

A collection of effects which provide other background alterations.

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[options](foundry.canvas.layers.CanvasLayer.html#options)

### vision

vision: Container<DisplayObject>

A collection of effects which provide background vision alterations.

### visionPreferred

visionPreferred: Container<DisplayObject>

A collection of effects which provide background preferred vision alterations.

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

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_tearDown](foundry.canvas.layers.CanvasLayer.html#_teardown)

### clear

* clear(): void

  Clear background alteration effects vision and lighting containers

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