---
title: "OccludableSamplerShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.OccludableSamplerShader.html"
category: "classes"
---

# Class OccludableSamplerShader

The occlusion sampler shader.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.OccludableSamplerShader))

* [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)
  + OccludableSamplerShader
    - [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md)

##### Index

### Properties

[initialUniforms](#initialuniforms)
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
[\_batchFragmentShader](#_batchfragmentshader)
[\_batchVertexShader](#_batchvertexshader)
[\_fragmentShader](#_fragmentshader)
[\_vertexShader](#_vertexshader)

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
[\_packInterleavedGeometry](#_packinterleavedgeometry)
[\_preRenderBatch](#_prerenderbatch)
[batchDefaultUniforms](#batchdefaultuniforms)
[create](#create)
[createPlugin](#createplugin)
[initializeBatchGeometry](#initializebatchgeometry)
[registerPlugin](#registerplugin)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[initialUniforms](foundry.canvas.rendering.shaders.BaseSamplerShader.md#initialuniforms)

### `Static`batchGeometry

batchGeometry: { id: string; normalized: boolean; size: number; type: any }[] = ...

Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchGeometry](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchgeometry)

### `Static`batchRendererClass

batchRendererClass: typeof [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md) = BatchRenderer

The batch renderer to use.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchRendererClass](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchrendererclass)

### `Static`batchShaderGeneratorClass

batchShaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch generator to use.

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchShaderGeneratorClass](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchshadergeneratorclass)

### `Static`batchVertexSize

batchVertexSize: number = 7

Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[batchVertexSize](foundry.canvas.rendering.shaders.BaseSamplerShader.md#batchvertexsize)

### `Static`classPluginName

classPluginName: string = "batchOcclusion"

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

reservedTextureUnits: number = 1

Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[reservedTextureUnits](foundry.canvas.rendering.shaders.BaseSamplerShader.md#reservedtextureunits)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[SATURATION](foundry.canvas.rendering.shaders.BaseSamplerShader.md#saturation)

### `Protected` `Static`\_batchFragmentShader

\_batchFragmentShader: string = ...

The batch fragment shader source. Subclasses can override it.

### `Protected` `Static`\_batchVertexShader

\_batchVertexShader: string = ...

The batch vertex shader source. Subclasses can override it.

### `Protected` `Static`\_fragmentShader

\_fragmentShader: string = ...

The fragment shader source. Subclasses can override it.

### `Protected` `Static`\_vertexShader

\_vertexShader: string = ...

The vertex shader source. Subclasses can override it.

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

  #### Returns string

  Overrides BaseSamplerShader.batchFragmentShader

### `Static`batchVertexShader

* get batchVertexShader(): string

  #### Returns string

  Overrides BaseSamplerShader.batchVertexShader

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â fadeOcclusion: number;  
  Â Â Â Â occludedAlpha: number;  
  Â Â Â Â occlusionElevation: number;  
  Â Â Â Â occlusionTexture: null;  
  Â Â Â Â radialOcclusion: number;  
  Â Â Â Â sampler: null;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â surfaceOcclusion: number;  
  Â Â Â Â tintAlpha: number[];  
  Â Â Â Â unoccludedAlpha: number;  
  Â Â Â Â visionOcclusion: number;  
  }

  #### Returns { Â Â Â Â fadeOcclusion: number; Â Â Â Â occludedAlpha: number; Â Â Â Â occlusionElevation: number; Â Â Â Â occlusionTexture: null; Â Â Â Â radialOcclusion: number; Â Â Â Â sampler: null; Â Â Â Â screenDimensions: number[]; Â Â Â Â surfaceOcclusion: number; Â Â Â Â tintAlpha: number[]; Â Â Â Â unoccludedAlpha: number; Â Â Â Â visionOcclusion: number; }

  Overrides BaseSamplerShader.defaultUniforms

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_preRender](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_prerender)

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

  Overrides [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md#_createvertexshader)

### `Static`\_packInterleavedGeometry

* \_packInterleavedGeometry(  
  Â Â Â Â element: any,  
  Â Â Â Â attributeBuffer: any,  
  Â Â Â Â indexBuffer: any,  
  Â Â Â Â aIndex: any,  
  Â Â Â Â iIndex: any,  
  ): void

  #### Parameters

  + element: any
  + attributeBuffer: any
  + indexBuffer: any
  + aIndex: any
  + iIndex: any

  #### Returns void

  Overrides BaseSamplerShader.\_packInterleavedGeometry

### `Static`\_preRenderBatch

* \_preRenderBatch(batchRenderer: any): void

  #### Parameters

  + batchRenderer: any

  #### Returns void

  Overrides BaseSamplerShader.\_preRenderBatch

### `Static`batchDefaultUniforms

* batchDefaultUniforms(  
  Â Â Â Â maxTex: any,  
  ): { occlusionTexture: any; screenDimensions: number[] }

  #### Parameters

  + maxTex: any

  #### Returns { occlusionTexture: any; screenDimensions: number[] }

  Overrides BaseSamplerShader.batchDefaultUniforms

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