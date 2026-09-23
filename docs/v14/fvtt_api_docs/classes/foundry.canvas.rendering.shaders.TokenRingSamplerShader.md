---
title: "TokenRingSamplerShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.TokenRingSamplerShader.html"
category: "classes"
---

# Class TokenRingSamplerShader

The shader definition which powers the TokenRing.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.TokenRingSamplerShader))

* [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md)
  + TokenRingSamplerShader

##### Index

### Properties

[initialUniforms](#initialuniforms)
[\_batchFragmentShader](#_batchfragmentshader)
[\_batchVertexShader](#_batchvertexshader)
[batchGeometry](#batchgeometry)
[batchRendererClass](#batchrendererclass)
[batchShaderGeneratorClass](#batchshadergeneratorclass)
[batchVertexSize](#batchvertexsize)
[classPluginName](#classpluginname)
[CONTRAST](#contrast)
[depthShaderClass](#depthshaderclass)
[EXPOSURE](#exposure)
[nullUvs](#nulluvs)
[pausable](#pausable)
[reservedTextureUnits](#reservedtextureunits)
[SATURATION](#saturation)
[\_fragmentShader](#_fragmentshader)
[\_vertexShader](#_vertexshader)

### Accessors

[depthShader](#depthshader)
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
[\_configureDepthShader](#_configuredepthshader)
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

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[initialUniforms](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#initialuniforms)

### `Static`\_batchFragmentShader

\_batchFragmentShader: string = ...

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_batchFragmentShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_batchfragmentshader)

### `Static`\_batchVertexShader

\_batchVertexShader: string = ...

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_batchVertexShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_batchvertexshader)

### `Static`batchGeometry

batchGeometry: { id: string; normalized: boolean; size: number; type: any }[] = ...

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[batchGeometry](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#batchgeometry)

### `Static`batchRendererClass

batchRendererClass: typeof [BatchRenderer](foundry.canvas.rendering.batching.BatchRenderer.md) = BatchRenderer

The batch renderer to use.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[batchRendererClass](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#batchrendererclass)

### `Static`batchShaderGeneratorClass

batchShaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch generator to use.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[batchShaderGeneratorClass](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#batchshadergeneratorclass)

### `Static`batchVertexSize

batchVertexSize: number = ...

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[batchVertexSize](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#batchvertexsize)

### `Static`classPluginName

classPluginName: string = "tokenRingBatch"

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[classPluginName](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#classpluginname)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[CONTRAST](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#contrast)

### `Static`depthShaderClass

depthShaderClass: typeof [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md) = DepthSamplerShader

The depth shader class associated with this shader.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[depthShaderClass](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#depthshaderclass)

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#exposure)

### `Static`nullUvs

nullUvs: Float32Array = ...

A null UVs array used for nulled texture position.

### `Static`pausable

pausable: boolean = false

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[pausable](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#pausable)

### `Static`reservedTextureUnits

reservedTextureUnits: number = ...

Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[reservedTextureUnits](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#reservedtextureunits)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[SATURATION](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#saturation)

### `Protected` `Static`\_fragmentShader

\_fragmentShader: string = ...

The fragment shader source. Subclasses can override it.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_fragmentShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_fragmentshader)

### `Protected` `Static`\_vertexShader

\_vertexShader: string = ...

The vertex shader source. Subclasses can override it.

Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_vertexShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_vertexshader)

## Accessors

### depthShader

* get depthShader(): [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md)

  The depth shader associated with this shader.
  The depth shader is lazily constructed.

  #### Returns [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md)

  Inherited from PrimaryBaseSamplerShader.depthShader

### enabled

* get enabled(): boolean

  Activate or deactivate this sampler. If set to false, the batch rendering is redirected to "batch".
  Otherwise, the batch rendering is directed toward the instance pluginName (might be null)

  #### Returns boolean

  Inherited from PrimaryBaseSamplerShader.enabled

### paused

* get paused(): boolean

  Pause or Unpause this sampler. If set to true, the shader is disabled. Otherwise, it is enabled.
  Contrary to enabled, a shader might decide to refuse a pause, to continue to render animations per example.

  #### Returns boolean

  #### See

  Inherited from PrimaryBaseSamplerShader.paused

### pluginName

* get pluginName(): string | null

  The plugin name associated for this instance, if any.
  Returns "batch" if the shader is disabled.

  #### Returns string | null

  Inherited from PrimaryBaseSamplerShader.pluginName

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders.

  #### Returns string

  Inherited from PrimaryBaseSamplerShader.ADJUSTMENTS

### `Static`batchFragmentShader

* get batchFragmentShader(): string

  #### Returns string

  Inherited from PrimaryBaseSamplerShader.batchFragmentShader

### `Static`batchVertexShader

* get batchVertexShader(): string

  #### Returns string

  Inherited from PrimaryBaseSamplerShader.batchVertexShader

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

  Inherited from PrimaryBaseSamplerShader.defaultUniforms

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_preRender](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[reset](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#reset)

### `Protected`\_configureDepthShader

* \_configureDepthShader(depthShader: [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md)): void

  `Protected`

  One-time configuration that is called when the depth shader is created.

  #### Parameters

  + depthShader: [DepthSamplerShader](foundry.canvas.rendering.shaders.DepthSamplerShader.md)

    The depth shader

  #### Returns void

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_configureDepthShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_configuredepthshader)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_createvertexshader)

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

  Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_packInterleavedGeometry](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_packinterleavedgeometry)

### `Static`\_preRenderBatch

* \_preRenderBatch(batchRenderer: any): void

  #### Parameters

  + batchRenderer: any

  #### Returns void

  Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[\_preRenderBatch](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#_prerenderbatch)

### `Static`batchDefaultUniforms

* batchDefaultUniforms(  
  Â Â Â Â maxTex: any,  
  ): {  
  Â Â Â Â occlusionTexture: any;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â time: number;  
  Â Â Â Â tokenRingTexture: any;  
  }

  #### Parameters

  + maxTex: any

  #### Returns { Â Â Â Â occlusionTexture: any; Â Â Â Â screenDimensions: number[]; Â Â Â Â time: number; Â Â Â Â tokenRingTexture: any; }

  Overrides [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[batchDefaultUniforms](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#batchdefaultuniforms)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[create](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#create)

### `Static`createPlugin

* createPlugin(): any

  Create a batch plugin for this sampler class.

  #### Returns any

  The batch plugin class linked to this sampler class.

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[createPlugin](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#createplugin)

### `Static`initializeBatchGeometry

* initializeBatchGeometry(): void

  Initialize the batch geometry with custom properties.

  #### Returns void

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[initializeBatchGeometry](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#initializebatchgeometry)

### `Static`registerPlugin

* registerPlugin(options?: { force?: object }): void

  Register the plugin for this sampler.

  #### Parameters

  + `Optional`options: { force?: object } = {}

    The options

    - ##### `Optional`force?: object

      Override the plugin of the same name that is already registered?

  #### Returns void

  Inherited from [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md).[registerPlugin](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md#registerplugin)