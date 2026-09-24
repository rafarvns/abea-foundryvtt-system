---
title: "AmplificationSamplerShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.AmplificationSamplerShader.html"
category: "classes"
---

# Class AmplificationSamplerShader

A light amplification shader.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.AmplificationSamplerShader))

* [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md)
  + AmplificationSamplerShader

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

[brightness](#brightness)
[colorTint](#colortint)
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
[fragmentShader](#fragmentshader)
[initializeBatchGeometry](#initializebatchgeometry)
[registerPlugin](#registerplugin)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[initialUniforms](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#initialuniforms)

### `Static`batchDefaultUniforms

batchDefaultUniforms: object | ((maxTextures: number) => object) = {}

Returns default uniforms associated with the batched version of this sampler.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[batchDefaultUniforms](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#batchdefaultuniforms)

### `Static`batchGeometry

batchGeometry: any = PIXI.BatchGeometry

Batch geometry associated with this sampler.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[batchGeometry](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#batchgeometry)

### `Static`batchRendererClass

batchRendererClass: typeof [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md) = BatchRenderer

The batch renderer to use.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[batchRendererClass](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#batchrendererclass)

### `Static`batchShaderGeneratorClass

batchShaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch generator to use.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[batchShaderGeneratorClass](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#batchshadergeneratorclass)

### `Static`batchVertexSize

batchVertexSize: number = 6

The size of a vertex with all its packed attributes.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[batchVertexSize](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#batchvertexsize)

### `Static`classPluginName

classPluginName: null

Overrides [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[classPluginName](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#classpluginname)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[CONTRAST](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#exposure)

### `Static`pausable

pausable: boolean = true

Is this shader pausable or not?

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[pausable](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#pausable)

### `Static`reservedTextureUnits

reservedTextureUnits: number = 0

The number of reserved texture units for this shader that cannot be used by the batch renderer.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[reservedTextureUnits](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#reservedtextureunits)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[SATURATION](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#saturation)

### `Protected` `Static`\_packInterleavedGeometry

\_packInterleavedGeometry: Function | undefined

Pack interleaved geometry custom function.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[\_packInterleavedGeometry](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#_packinterleavedgeometry)

### `Protected` `Static`\_preRenderBatch

\_preRenderBatch: (batchRenderer: [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md)) => void | undefined

A prerender function happening just before the batch renderer is flushed.

Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[\_preRenderBatch](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#_prerenderbatch)

## Accessors

### brightness

* get brightness(): number

  Brightness controls the luminosity.

  #### Returns number

### colorTint

* get colorTint(): number[]

  Tint color applied to Light Amplification.

  #### Returns number[]

### enabled

* get enabled(): boolean

  Activate or deactivate this sampler. If set to false, the batch rendering is redirected to "batch".
  Otherwise, the batch rendering is directed toward the instance pluginName (might be null)

  #### Returns boolean

  Inherited from ColorAdjustmentsSamplerShader.enabled

### paused

* get paused(): boolean

  Pause or Unpause this sampler. If set to true, the shader is disabled. Otherwise, it is enabled.
  Contrary to enabled, a shader might decide to refuse a pause, to continue to render animations per example.

  #### Returns boolean

  #### See

  Inherited from ColorAdjustmentsSamplerShader.paused

### pluginName

* get pluginName(): string | null

  The plugin name associated for this instance, if any.
  Returns "batch" if the shader is disabled.

  #### Returns string | null

  Inherited from ColorAdjustmentsSamplerShader.pluginName

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders.

  #### Returns string

  Inherited from ColorAdjustmentsSamplerShader.ADJUSTMENTS

### `Static`batchFragmentShader

* get batchFragmentShader(): string

  The batch fragment shader source.

  #### Returns string

  Inherited from ColorAdjustmentsSamplerShader.batchFragmentShader

### `Static`batchVertexShader

* get batchVertexShader(): string

  The batch vertex shader source.

  #### Returns string

  Inherited from ColorAdjustmentsSamplerShader.batchVertexShader

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â brightness: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â enable: boolean;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â tint: number[];  
  Â Â Â Â tintAlpha: number[];  
  }

  #### Returns { Â Â Â Â brightness: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â enable: boolean; Â Â Â Â screenDimensions: number[]; Â Â Â Â tint: number[]; Â Â Â Â tintAlpha: number[]; }

  Overrides ColorAdjustmentsSamplerShader.defaultUniforms

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[\_preRender](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[reset](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Overrides [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[create](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#create)

### `Static`createPlugin

* createPlugin(): any

  Create a batch plugin for this sampler class.

  #### Returns any

  The batch plugin class linked to this sampler class.

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[createPlugin](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#createplugin)

### `Static`fragmentShader

* fragmentShader(): string

  #### Returns string

### `Static`initializeBatchGeometry

* initializeBatchGeometry(): void

  Initialize the batch geometry with custom properties.

  #### Returns void

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[initializeBatchGeometry](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#initializebatchgeometry)

### `Static`registerPlugin

* registerPlugin(options?: { force?: object }): void

  Register the plugin for this sampler.

  #### Parameters

  + `Optional`options: { force?: object } = {}

    The options

    - ##### `Optional`force?: object

      Override the plugin of the same name that is already registered?

  #### Returns void

  Inherited from [ColorAdjustmentsSamplerShader](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md).[registerPlugin](foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md#registerplugin)