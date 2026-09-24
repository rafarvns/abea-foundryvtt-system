---
title: "FogSamplerShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.FogSamplerShader.html"
category: "classes"
---

# Class FogSamplerShader

A simple shader that makes the original texture's red channel the alpha channel while still keeping channel
information. Used in conjunction with the AlphaBlurFilterPass and Fog of War.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.FogSamplerShader))

* [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)
  + FogSamplerShader

##### Index

### Properties

[initialUniforms](#initialuniforms)
[batchDefaultUniforms](#batchdefaultuniforms)
[batchGeometry](#batchgeometry)
[batchRendererClass](#batchrendererclass)
[batchShaderGeneratorClass](#batchshadergeneratorclass)
[batchVertexSize](#batchvertexsize)
[classPluginName](#classpluginname)
[CONTRAST](#contrast)
[EXPOSURE](#exposure)
[pausable](#pausable)
[reservedTextureUnits](#reservedtextureunits)
[SATURATION](#saturation)
[\_packInterleavedGeometry](#_packinterleavedgeometry)
[\_preRenderBatch](#_prerenderbatch)

### Accessors

[enabled](#enabled)
[paused](#paused)
[pluginName](#pluginname)
[ADJUSTMENTS](#adjustments)
[batchFragmentShader](#batchfragmentshader)
[batchVertexShader](#batchvertexshader)
[defaultUniforms](#defaultuniforms)

### Methods

[\_preRender](#_prerender)
[reset](#reset)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)
[createPlugin](#createplugin)
[initializeBatchGeometry](#initializebatchgeometry)
[registerPlugin](#registerplugin)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[initialUniforms](foundry.canvas.rendering.shaders.BaseSamplerShader.md#initialuniforms)

### `Static`batchDefaultUniforms

batchDefaultUniforms: object | ((maxTextures: number) => object) = {}

Returns default uniforms associated with the batched version of this sampler.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchDefaultUniforms](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchdefaultuniforms)

### `Static`batchGeometry

batchGeometry: any = PIXI.BatchGeometry

Batch geometry associated with this sampler.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchGeometry](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchgeometry)

### `Static`batchRendererClass

batchRendererClass: typeof [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md) = BatchRenderer

The batch renderer to use.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchRendererClass](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchrendererclass)

### `Static`batchShaderGeneratorClass

batchShaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch generator to use.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchShaderGeneratorClass](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchshadergeneratorclass)

### `Static`batchVertexSize

batchVertexSize: number = 6

The size of a vertex with all its packed attributes.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchVertexSize](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchvertexsize)

### `Static`classPluginName

classPluginName: null

Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[classPluginName](foundry.canvas.rendering.shaders.BaseSamplerShader.md#classpluginname)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[CONTRAST](foundry.canvas.rendering.shaders.BaseSamplerShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.BaseSamplerShader.md#exposure)

### `Static`pausable

pausable: boolean = true

Is this shader pausable or not?

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[pausable](foundry.canvas.rendering.shaders.BaseSamplerShader.md#pausable)

### `Static`reservedTextureUnits

reservedTextureUnits: number = 0

The number of reserved texture units for this shader that cannot be used by the batch renderer.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[reservedTextureUnits](foundry.canvas.rendering.shaders.BaseSamplerShader.md#reservedtextureunits)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[SATURATION](foundry.canvas.rendering.shaders.BaseSamplerShader.md#saturation)

### `Protected` `Static`\_packInterleavedGeometry

\_packInterleavedGeometry: Function | undefined

Pack interleaved geometry custom function.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_packInterleavedGeometry](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_packinterleavedgeometry)

### `Protected` `Static`\_preRenderBatch

\_preRenderBatch: (batchRenderer: [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md)) => void | undefined

A prerender function happening just before the batch renderer is flushed.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_preRenderBatch](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_prerenderbatch)

## Accessors

### enabled

* get enabled(): boolean

  Activate or deactivate this sampler. If set to false, the batch rendering is redirected to "batch".
  Otherwise, the batch rendering is directed toward the instance pluginName (might be null)

  #### Returns boolean

  Inherited from BaseSamplerShader.enabled

### paused

* get paused(): boolean

  Pause or Unpause this sampler. If set to true, the shader is disabled. Otherwise, it is enabled.
  Contrary to enabled, a shader might decide to refuse a pause, to continue to render animations per example.

  #### Returns boolean

  #### See

  Inherited from BaseSamplerShader.paused

### pluginName

* get pluginName(): string | null

  The plugin name associated for this instance, if any.
  Returns "batch" if the shader is disabled.

  #### Returns string | null

  Inherited from BaseSamplerShader.pluginName

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders.

  #### Returns string

  Inherited from BaseSamplerShader.ADJUSTMENTS

### `Static`batchFragmentShader

* get batchFragmentShader(): string

  The batch fragment shader source.

  #### Returns string

  Inherited from BaseSamplerShader.batchFragmentShader

### `Static`batchVertexShader

* get batchVertexShader(): string

  The batch vertex shader source.

  #### Returns string

  Inherited from BaseSamplerShader.batchVertexShader

### `Static`defaultUniforms

* get defaultUniforms(): { sampler: number; tintAlpha: number[] }

  #### Returns { sampler: number; tintAlpha: number[] }

  Inherited from BaseSamplerShader.defaultUniforms

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_preRender](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[reset](foundry.canvas.rendering.shaders.BaseSamplerShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[create](foundry.canvas.rendering.shaders.BaseSamplerShader.md#create)

### `Static`createPlugin

* createPlugin(): any

  Create a batch plugin for this sampler class.

  #### Returns any

  The batch plugin class linked to this sampler class.

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[createPlugin](foundry.canvas.rendering.shaders.BaseSamplerShader.md#createplugin)

### `Static`initializeBatchGeometry

* initializeBatchGeometry(): void

  Initialize the batch geometry with custom properties.

  #### Returns void

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[initializeBatchGeometry](foundry.canvas.rendering.shaders.BaseSamplerShader.md#initializebatchgeometry)

### `Static`registerPlugin

* registerPlugin(options?: { force?: object }): void

  Register the plugin for this sampler.

  #### Parameters

  + `Optional`options: { force?: object } = {}

    The options

    - ##### `Optional`force?: object

      Override the plugin of the same name that is already registered?

  #### Returns void

  Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[registerPlugin](foundry.canvas.rendering.shaders.BaseSamplerShader.md#registerplugin)