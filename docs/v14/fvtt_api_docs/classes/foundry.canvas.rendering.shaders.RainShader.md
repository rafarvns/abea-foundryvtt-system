---
title: "RainShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.RainShader.html"
category: "classes"
---

# Class RainShader

Rain shader effect.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.RainShader))

* [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md)
  + RainShader

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
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#initialuniforms)

### speed

speed: number = 1

The speed multiplier applied to animation.
0 stops animation.

Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[speed](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#speed)

### `Static`COMPUTE\_MASK

COMPUTE\_MASK: string = ...

Compute the weather masking value.

Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[COMPUTE\_MASK](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#compute_mask)

## Accessors

### scale

* set scale(scale: number | { x: number; y: number }): void

  Update the scale of this effect with new values

  #### Parameters

  + scale: number | { x: number; y: number }

    The desired scale

  #### Returns void

  Inherited from AbstractWeatherShader.scale

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

  Inherited from AbstractWeatherShader.commonUniforms

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â alpha: number;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â effectDimensions: [number, number];  
  Â Â Â Â intensity: number;  
  Â Â Â Â occlusionTexture: Texture<Resource> | null;  
  Â Â Â Â occlusionWeights: number[];  
  Â Â Â Â opacity: number;  
  Â Â Â Â resolution: number[];  
  Â Â Â Â reverseOcclusion: boolean;  
  Â Â Â Â reverseTerrain: boolean;  
  Â Â Â Â rotation: number;  
  Â Â Â Â screenDimensions: [number, number];  
  Â Â Â Â strength: number;  
  Â Â Â Â terrainTexture: Texture<Resource> | null;  
  Â Â Â Â terrainWeights: number[];  
  Â Â Â Â time: number;  
  Â Â Â Â tint: number[];  
  Â Â Â Â useOcclusion: boolean;  
  Â Â Â Â useTerrain: boolean;  
  }

  #### Returns { Â Â Â Â alpha: number; Â Â Â Â depthElevation: number; Â Â Â Â effectDimensions: [number, number]; Â Â Â Â intensity: number; Â Â Â Â occlusionTexture: Texture<Resource> | null; Â Â Â Â occlusionWeights: number[]; Â Â Â Â opacity: number; Â Â Â Â resolution: number[]; Â Â Â Â reverseOcclusion: boolean; Â Â Â Â reverseTerrain: boolean; Â Â Â Â rotation: number; Â Â Â Â screenDimensions: [number, number]; Â Â Â Â strength: number; Â Â Â Â terrainTexture: Texture<Resource> | null; Â Â Â Â terrainWeights: number[]; Â Â Â Â time: number; Â Â Â Â tint: number[]; Â Â Â Â useOcclusion: boolean; Â Â Â Â useTerrain: boolean; }

  Overrides AbstractWeatherShader.defaultUniforms

### `Static`FRAGMENT\_HEADER

* get FRAGMENT\_HEADER(): string

  Compute the weather masking value.

  #### Returns string

  Inherited from AbstractWeatherShader.FRAGMENT\_HEADER

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[\_preRender](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#_prerender)

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[reset](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  #### Inherit Doc

  Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md).[create](foundry.canvas.rendering.shaders.AbstractWeatherShader.md#create)