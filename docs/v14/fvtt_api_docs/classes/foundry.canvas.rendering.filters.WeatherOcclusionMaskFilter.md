---
title: "WeatherOcclusionMaskFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.html"
category: "classes"
---

# Class WeatherOcclusionMaskFilter

The filter used by the weather layer to mask weather above occluded roofs.

#### See

[foundry.canvas.layers.WeatherEffects](foundry.canvas.layers.WeatherEffects.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter))

* [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md)
  + WeatherOcclusionMaskFilter

##### Index

### Properties

[elevation](#elevation)

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[apply](#apply)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Properties

### elevation

elevation: number = Infinity

Elevation of this weather occlusion mask filter.

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â occlusionTexture: null;  
  Â Â Â Â occlusionWeights: number[];  
  Â Â Â Â reverseOcclusion: boolean;  
  Â Â Â Â reverseTerrain: boolean;  
  Â Â Â Â sceneAnchor: number[];  
  Â Â Â Â sceneDimensions: number[];  
  Â Â Â Â terrainTexture: null;  
  Â Â Â Â terrainUvMatrix: any;  
  Â Â Â Â terrainWeights: number[];  
  Â Â Â Â useOcclusion: boolean;  
  Â Â Â Â useTerrain: boolean;  
  }

  #### Returns { Â Â Â Â depthElevation: number; Â Â Â Â occlusionTexture: null; Â Â Â Â occlusionWeights: number[]; Â Â Â Â reverseOcclusion: boolean; Â Â Â Â reverseTerrain: boolean; Â Â Â Â sceneAnchor: number[]; Â Â Â Â sceneDimensions: number[]; Â Â Â Â terrainTexture: null; Â Â Â Â terrainUvMatrix: any; Â Â Â Â terrainWeights: number[]; Â Â Â Â useOcclusion: boolean; Â Â Â Â useTerrain: boolean; }

## Methods

### apply

* apply(  
  Â Â Â Â filterManager: any,  
  Â Â Â Â input: any,  
  Â Â Â Â output: any,  
  Â Â Â Â clear: any,  
  Â Â Â Â currentState: any,  
  ): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clear: any
  + currentState: any

  #### Returns void

  Overrides [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[apply](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#apply)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Overrides [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[\_createVertexShader](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Inherited from [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#create)