---
title: "BatchRenderer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.batching.BatchRenderer.html"
category: "classes"
---

# Class BatchRenderer

A batch renderer with a customizable data transfer function to packed geometries.

#### Hierarchy

* BatchRenderer
  + BatchRenderer

##### Index

### Properties

[\_packInterleavedGeometry](#_packinterleavedgeometry)
[\_preRenderBatch](#_prerenderbatch)
[defaultUniforms](#defaultuniforms)
[shaderGeneratorClass](#shadergeneratorclass)

### Accessors

[uniforms](#uniforms)
[reservedTextureUnits](#reservedtextureunits)

### Methods

[contextChange](#contextchange)
[onPrerender](#onprerender)
[packInterleavedGeometry](#packinterleavedgeometry)
[setShaderGenerator](#setshadergenerator)
[start](#start)
[hasPlugin](#hasplugin)

## Properties

### `Protected`\_packInterleavedGeometry

\_packInterleavedGeometry: Function | undefined

The PackInterleavedGeometry function provided by the sampler.

### `Protected`\_preRenderBatch

\_preRenderBatch: (batchRenderer: BatchRenderer) => void | undefined

The update function provided by the sampler and that is called just before a flush.

### `Static`defaultUniforms

defaultUniforms: object | ((maxTextures: number) => object) = {}

The default uniform values for the batch shader.

### `Static`shaderGeneratorClass

shaderGeneratorClass: typeof [BatchShaderGenerator](foundry.canvas.rendering.batching.BatchShaderGenerator.md) = BatchShaderGenerator

The batch shader generator class.

## Accessors

### uniforms

* get uniforms(): object | undefined

  Get the uniforms bound to this abstract batch renderer.

  #### Returns object | undefined

### `Protected`reservedTextureUnits

* get reservedTextureUnits(): number

  Number of reserved texture units reserved by the batch shader that cannot be used by the batch renderer.

  #### Returns number
* set reservedTextureUnits(val: number): void

  `Protected`

  The number of reserved texture units that the shader generator should not use (maximum 4).

  #### Parameters

  + val: number

  #### Returns void

## Methods

### contextChange

* contextChange(): void

  This override allows to allocate a given number of texture units reserved for a custom batched shader.
  These reserved texture units won't be used to batch textures for PIXI.Sprite or SpriteMesh.

  #### Returns void

### onPrerender

* onPrerender(): void

  #### Returns void

  #### Inherit Doc

### packInterleavedGeometry

* packInterleavedGeometry(  
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

### setShaderGenerator

* setShaderGenerator(  
  Â Â Â Â \_\_namedParameters?: { fragment?: any; uniforms?: any; vertex?: any },  
  ): void

  #### Parameters

  + \_\_namedParameters: { fragment?: any; uniforms?: any; vertex?: any } = {}

  #### Returns void

### start

* start(): void

  #### Returns void

### `Static`hasPlugin

* hasPlugin(name: string): boolean

  Verify if a PIXI plugin exists. Check by name.

  #### Parameters

  + name: string

    The name of the pixi plugin to check.

  #### Returns boolean

  True if the plugin exists, false otherwise.