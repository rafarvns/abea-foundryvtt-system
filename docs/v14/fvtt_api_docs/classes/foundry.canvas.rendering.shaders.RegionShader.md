---
title: "RegionShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.RegionShader.html"
category: "classes"
---

# Class RegionShader

The shader used by [foundry.canvas.placeables.regions.RegionMesh](foundry.canvas.placeables.regions.RegionMesh.md).

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.RegionShader))

* [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)
  + RegionShader
    - [HighlightRegionShader](foundry.canvas.rendering.shaders.HighlightRegionShader.md)

##### Index

### Properties

[initialUniforms](#initialuniforms)

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[\_preRender](#_prerender)
[reset](#reset)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractBaseShader.md#initialuniforms)

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â canvasDimensions: number[];  
  Â Â Â Â sceneDimensions: number[];  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â tintAlpha: number[];  
  }

  #### Returns { Â Â Â Â canvasDimensions: number[]; Â Â Â Â sceneDimensions: number[]; Â Â Â Â screenDimensions: number[]; Â Â Â Â tintAlpha: number[]; }

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