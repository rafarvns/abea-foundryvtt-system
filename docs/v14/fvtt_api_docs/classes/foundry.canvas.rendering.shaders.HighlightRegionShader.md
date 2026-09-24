---
title: "HighlightRegionShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.HighlightRegionShader.html"
category: "classes"
---

# Class HighlightRegionShader

Shader for the Region highlight.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.HighlightRegionShader))

* [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md)
  + HighlightRegionShader

##### Index

### Properties

[initialUniforms](#initialuniforms)
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

Inherited from [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[initialUniforms](foundry.canvas.rendering.shaders.RegionShader.md#initialuniforms)

### `Static`defaultUniforms

defaultUniforms: {  
Â Â Â Â canvasDimensions: number[];  
Â Â Â Â hatchEnabled: boolean;  
Â Â Â Â hatchThickness: number;  
Â Â Â Â resolution: number;  
Â Â Â Â sceneDimensions: number[];  
Â Â Â Â screenDimensions: number[];  
Â Â Â Â tintAlpha: number[];  
} = ...

#### Inherit Doc

Overrides [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[defaultUniforms](foundry.canvas.rendering.shaders.RegionShader.md#defaultuniforms)

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Overrides [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[\_preRender](foundry.canvas.rendering.shaders.RegionShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[reset](foundry.canvas.rendering.shaders.RegionShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Overrides [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.RegionShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Overrides [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.RegionShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md).[create](foundry.canvas.rendering.shaders.RegionShader.md#create)