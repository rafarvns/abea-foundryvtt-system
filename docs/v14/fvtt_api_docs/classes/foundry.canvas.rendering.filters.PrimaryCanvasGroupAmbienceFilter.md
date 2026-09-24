---
title: "PrimaryCanvasGroupAmbienceFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.html"
category: "classes"
---

# Class PrimaryCanvasGroupAmbienceFilter

A filter used to apply color adjustments and other modifications to the environment.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter))

* [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md)
  + PrimaryCanvasGroupAmbienceFilter

##### Index

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[apply](#apply)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â baseIntensity: number;  
  Â Â Â Â baseLuminosity: number;  
  Â Â Â Â baseSaturation: number;  
  Â Â Â Â baseShadows: number;  
  Â Â Â Â baseTint: number[];  
  Â Â Â Â cycle: boolean;  
  Â Â Â Â darkIntensity: number;  
  Â Â Â Â darkLuminosity: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â darkSaturation: number;  
  Â Â Â Â darkShadows: number;  
  Â Â Â Â darkTint: number[];  
  Â Â Â Â uSampler: null;  
  }

  #### Returns { Â Â Â Â baseIntensity: number; Â Â Â Â baseLuminosity: number; Â Â Â Â baseSaturation: number; Â Â Â Â baseShadows: number; Â Â Â Â baseTint: number[]; Â Â Â Â cycle: boolean; Â Â Â Â darkIntensity: number; Â Â Â Â darkLuminosity: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â darkSaturation: number; Â Â Â Â darkShadows: number; Â Â Â Â darkTint: number[]; Â Â Â Â uSampler: null; }

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

  Inherited from [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[apply](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#apply)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[\_createVertexShader](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Inherited from [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#create)