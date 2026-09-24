---
title: "CanvasIlluminationEffects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasIlluminationEffects.html"
category: "classes"
---

# Class CanvasIlluminationEffects

A CanvasLayer for displaying illumination visual effects

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasIlluminationEffects))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)
  + CanvasIlluminationEffects

##### Index

### Properties

[baselineMesh](#baselinemesh)
[darknessLevelMeshes](#darknesslevelmeshes)
[filter](#filter)
[lights](#lights)
[options](#options)

### Accessors

[hasDynamicDarknessLevel](#hasdynamicdarknesslevel)
[hookName](#hookname)
[name](#name)
[renderTexture](#rendertexture)
[instance](#instance)
[layerOptions](#layeroptions)

### Methods

[\_draw](#_draw)
[\_tearDown](#_teardown)
[clear](#clear)
[draw](#draw)
[getZIndex](#getzindex)
[invalidateDarknessLevelContainer](#invalidatedarknesslevelcontainer)
[tearDown](#teardown)

## Properties

### baselineMesh

baselineMesh: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) = ...

The base line mesh.

### darknessLevelMeshes

darknessLevelMeshes: [CachedContainer](foundry.canvas.containers.CachedContainer.md) = ...

The cached container holding the illumination meshes.

### filter

filter: VisualEffectsMaskingFilter

The filter used to mask visual effects on this layer

### lights

lights: Container<DisplayObject> = ...

The container holding the lights.

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[options](foundry.canvas.layers.CanvasLayer.md#options)

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

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_tearDown](foundry.canvas.layers.CanvasLayer.md#_teardown)

### clear

* clear(): void

  Clear illumination effects container

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

### invalidateDarknessLevelContainer

* invalidateDarknessLevelContainer(force?: boolean): void

  Invalidate the cached container state to trigger a render pass.

  #### Parameters

  + `Optional`force: boolean = false

    Force cached container invalidation?

  #### Returns void

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)