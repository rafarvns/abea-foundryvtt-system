---
title: "CanvasIlluminationEffects | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.CanvasIlluminationEffects.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.html)

# Class CanvasIlluminationEffects

A CanvasLayer for displaying illumination visual effects

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.CanvasIlluminationEffects))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)
  + CanvasIlluminationEffects

##### Index

### Properties

[baselineMesh](foundry.canvas.layers.CanvasIlluminationEffects.html#baselinemesh)
[darknessLevelMeshes](foundry.canvas.layers.CanvasIlluminationEffects.html#darknesslevelmeshes)
[filter](foundry.canvas.layers.CanvasIlluminationEffects.html#filter)
[interactiveChildren](foundry.canvas.layers.CanvasIlluminationEffects.html#interactivechildren)
[lights](foundry.canvas.layers.CanvasIlluminationEffects.html#lights)
[options](foundry.canvas.layers.CanvasIlluminationEffects.html#options)

### Accessors

[hasDynamicDarknessLevel](foundry.canvas.layers.CanvasIlluminationEffects.html#hasdynamicdarknesslevel)
[hookName](foundry.canvas.layers.CanvasIlluminationEffects.html#hookname)
[name](foundry.canvas.layers.CanvasIlluminationEffects.html#name)
[renderTexture](foundry.canvas.layers.CanvasIlluminationEffects.html#rendertexture)
[instance](foundry.canvas.layers.CanvasIlluminationEffects.html#instance)
[layerOptions](foundry.canvas.layers.CanvasIlluminationEffects.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.CanvasIlluminationEffects.html#_draw)
[\_tearDown](foundry.canvas.layers.CanvasIlluminationEffects.html#_teardown)
[clear](foundry.canvas.layers.CanvasIlluminationEffects.html#clear)
[draw](foundry.canvas.layers.CanvasIlluminationEffects.html#draw)
[invalidateDarknessLevelContainer](foundry.canvas.layers.CanvasIlluminationEffects.html#invalidatedarknesslevelcontainer)
[tearDown](foundry.canvas.layers.CanvasIlluminationEffects.html#teardown)

## Properties

### baselineMesh

baselineMesh: [SpriteMesh](foundry.canvas.containers.SpriteMesh.html) = ...

The base line mesh.

### darknessLevelMeshes

darknessLevelMeshes: [CachedContainer](foundry.canvas.containers.CachedContainer.html) = ...

The cached container holding the illumination meshes.

### filter

filter: VisualEffectsMaskingFilter

The filter used to mask visual effects on this layer

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)

### lights

lights: Container<DisplayObject> = ...

The container holding the lights.

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[options](foundry.canvas.layers.CanvasLayer.html#options)

## Accessors

### hasDynamicDarknessLevel

* get hasDynamicDarknessLevel(): boolean

  To know if dynamic darkness level is active on this scene.

  #### Returns boolean

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

### renderTexture

* get renderTexture(): RenderTexture

  The illumination render texture.

  #### Returns RenderTexture

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

  Clear illumination effects container

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

### invalidateDarknessLevelContainer

* invalidateDarknessLevelContainer(force?: boolean): void

  Invalidate the cached container state to trigger a render pass.

  #### Parameters

  + `Optional`force: boolean = false

    Force cached container invalidation?

  #### Returns void

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[tearDown](foundry.canvas.layers.CanvasLayer.html#teardown)