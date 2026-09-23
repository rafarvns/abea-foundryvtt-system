---
title: "BaseSamplerShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.BaseSamplerShader.html"
category: "classes"
---

# Class BaseSamplerShader

The base sampler shader exposes a simple sprite shader and all the framework to handle:

* Batched shaders and plugin subscription
* Configure method (for special processing done once or punctually)
* Update method (pre-binding, normally done each frame)
  All other sampler shaders (batched or not) should extend BaseSamplerShader

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.BaseSamplerShader))

* [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)
  + BaseSamplerShader
    - [BaselineIlluminationSamplerShader](foundry.canvas.rendering.shaders.BaselineIlluminationSamplerShader.md)
    - [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md)
    - [FogSamplerShader](foundry.canvas.rendering.shaders.FogSamplerShader.md)
    - [ColorizeBrightnessShader](foundry.canvas.rendering.shaders.ColorizeBrightnessShader.md)
    - [OccludableSamplerShader](foundry.canvas.rendering.shaders.OccludableSamplerShader.md)
    - [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md)

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

Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractBaseShader.md#initialuniforms)

### `Static`batchDefaultUniforms

batchDefaultUniforms: object | ((maxTextures: number) => object) = {}

Returns default uniforms associated with the batched version of this sampler.

### `Static`batchGeometry

batchGeometry: any = PIXI.BatchGeometry

Batch geometry associated with this sampler.

### `Static`batchRendererClass

batchRendererClass: typeof [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md) = BatchRenderer

The batch renderer to use.

### `Static`batchShaderGeneratorClass

batchShaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch generator to use.

### `Static`batchVertexSize

batchVertexSize: number = 6

The size of a vertex with all its packed attributes.

### `Static`classPluginName

classPluginName: string | null = "batch"

The named batch sampler plugin that is used by this shader, or null if no batching is used.

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment.

### `Static`pausable

pausable: boolean = true

Is this shader pausable or not?

### `Static`reservedTextureUnits

reservedTextureUnits: number = 0

The number of reserved texture units for this shader that cannot be used by the batch renderer.

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

### `Protected` `Static`\_packInterleavedGeometry

\_packInterleavedGeometry: Function | undefined

Pack interleaved geometry custom function.

### `Protected` `Static`\_preRenderBatch

\_preRenderBatch: (batchRenderer: [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md)) => void | undefined

A prerender function happening just before the batch renderer is flushed.

## Accessors

### enabled

* get enabled(): boolean

  Activate or deactivate this sampler. If set to false, the batch rendering is redirected to "batch".
  Otherwise, the batch rendering is directed toward the instance pluginName (might be null)

  #### Returns boolean

### paused

* get paused(): boolean

  Pause or Unpause this sampler. If set to true, the shader is disabled. Otherwise, it is enabled.
  Contrary to enabled, a shader might decide to refuse a pause, to continue to render animations per example.

  #### Returns boolean

  #### See

### pluginName

* get pluginName(): string | null

  The plugin name associated for this instance, if any.
  Returns "batch" if the shader is disabled.

  #### Returns string | null

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders.

  #### Returns string

### `Static`batchFragmentShader

* get batchFragmentShader(): string

  The batch fragment shader source.

  #### Returns string

### `Static`batchVertexShader

* get batchVertexShader(): string

  The batch vertex shader source.

  #### Returns string

### `Static`defaultUniforms

* get defaultUniforms(): { sampler: number; tintAlpha: number[] }

  #### Returns { sampler: number; tintAlpha: number[] }

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Overrides [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[\_preRender](foundry.canvas.rendering.shaders.AbstractBaseShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[reset](foundry.canvas.rendering.shaders.AbstractBaseShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[create](foundry.canvas.rendering.shaders.AbstractBaseShader.md#create)

### `Static`createPlugin

* createPlugin(): any

  Create a batch plugin for this sampler class.

  #### Returns any

  The batch plugin class linked to this sampler class.

### `Static`initializeBatchGeometry

* initializeBatchGeometry(): void

  Initialize the batch geometry with custom properties.

  #### Returns void

### `Static`registerPlugin

* registerPlugin(options?: { force?: object }): void

  Register the plugin for this sampler.

  #### Parameters

  + `Optional`options: { force?: object } = {}

    The options

    - ##### `Optional`force?: object

      Override the plugin of the same name that is already registered?

  #### Returns void