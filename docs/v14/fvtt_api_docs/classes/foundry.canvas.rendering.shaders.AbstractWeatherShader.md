---
title: "AbstractWeatherShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.AbstractWeatherShader.html"
category: "classes"
---

# Class AbstractWeatherShader

The base shader class for weather shaders.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.AbstractWeatherShader))

* [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)
  + AbstractWeatherShader
    - [FogShader](foundry.canvas.rendering.shaders.FogShader.md)
    - [RainShader](foundry.canvas.rendering.shaders.RainShader.md)
    - [SnowShader](foundry.canvas.rendering.shaders.SnowShader.md)

##### Index

### Properties

[initialUniforms](#initialuniforms)
[speed](#speed)
[COMPUTE\_MASK](#compute_mask)

### Accessors

[scale](#scale)
[commonUniforms](#commonuniforms)
[defaultUniforms](#defaultuniforms)
[FRAGMENT\_HEADER](#fragment_header)

### Methods

[\_preRender](#_prerender)
[reset](#reset)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractBaseShader.md#initialuniforms)

### speed

speed: number = 1

The speed multiplier applied to animation.
0 stops animation.

### `Static`COMPUTE\_MASK

COMPUTE\_MASK: string = ...

Compute the weather masking value.

## Accessors

### scale

* set scale(scale: number | { x: number; y: number }): void

  Update the scale of this effect with new values

  #### Parameters

  + scale: number | { x: number; y: number }

    The desired scale

  #### Returns void

### `Static` `Abstract`commonUniforms

* get commonUniforms(): {  
  Â Â Â Â alpha: number;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â effectDimensions: [number, number];  
  Â Â Â Â occlusionTexture: Texture<Resource> | null;  
  Â Â Â Â occlusionWeights: number[];  
  Â Â Â Â reverseOcclusion: boolean;  
  Â Â Â Â reverseTerrain: boolean;  
  Â Â Â Â screenDimensions: [number, number];  
  Â Â Â Â terrainTexture: Texture<Resource> | null;  
  Â Â Â Â terrainWeights: number[];  
  Â Â Â Â time: number;  
  Â Â Â Â tint: number[];  
  Â Â Â Â useOcclusion: boolean;  
  Â Â Â Â useTerrain: boolean;  
  }

  Default uniforms for a specific class

  #### Returns { Â Â Â Â alpha: number; Â Â Â Â depthElevation: number; Â Â Â Â effectDimensions: [number, number]; Â Â Â Â occlusionTexture: Texture<Resource> | null; Â Â Â Â occlusionWeights: number[]; Â Â Â Â reverseOcclusion: boolean; Â Â Â Â reverseTerrain: boolean; Â Â Â Â screenDimensions: [number, number]; Â Â Â Â terrainTexture: Texture<Resource> | null; Â Â Â Â terrainWeights: number[]; Â Â Â Â time: number; Â Â Â Â tint: number[]; Â Â Â Â useOcclusion: boolean; Â Â Â Â useTerrain: boolean; }

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â alpha: number;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â effectDimensions: [number, number];  
  Â Â Â Â occlusionTexture: Texture<Resource> | null;  
  Â Â Â Â occlusionWeights: number[];  
  Â Â Â Â reverseOcclusion: boolean;  
  Â Â Â Â reverseTerrain: boolean;  
  Â Â Â Â screenDimensions: [number, number];  
  Â Â Â Â terrainTexture: Texture<Resource> | null;  
  Â Â Â Â terrainWeights: number[];  
  Â Â Â Â time: number;  
  Â Â Â Â tint: number[];  
  Â Â Â Â useOcclusion: boolean;  
  Â Â Â Â useTerrain: boolean;  
  }

  Common uniforms for all weather shaders.

  #### Returns { Â Â Â Â alpha: number; Â Â Â Â depthElevation: number; Â Â Â Â effectDimensions: [number, number]; Â Â Â Â occlusionTexture: Texture<Resource> | null; Â Â Â Â occlusionWeights: number[]; Â Â Â Â reverseOcclusion: boolean; Â Â Â Â reverseTerrain: boolean; Â Â Â Â screenDimensions: [number, number]; Â Â Â Â terrainTexture: Texture<Resource> | null; Â Â Â Â terrainWeights: number[]; Â Â Â Â time: number; Â Â Â Â tint: number[]; Â Â Â Â useOcclusion: boolean; Â Â Â Â useTerrain: boolean; }

### `Static`FRAGMENT\_HEADER

* get FRAGMENT\_HEADER(): string

  Compute the weather masking value.

  #### Returns string

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

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  #### Inherit Doc

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[create](foundry.canvas.rendering.shaders.AbstractBaseShader.md#create)