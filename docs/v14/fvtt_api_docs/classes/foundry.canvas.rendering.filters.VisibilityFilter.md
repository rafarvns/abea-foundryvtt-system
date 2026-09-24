---
title: "VisibilityFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.VisibilityFilter.html"
category: "classes"
---

# Class VisibilityFilter

Apply visibility coloration according to the baseLine color.
Uses very lightweight gaussian vertical and horizontal blur filter passes.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.VisibilityFilter))

* [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md)
  + VisibilityFilter

##### Index

### Accessors

[blur](#blur)
[defaultUniforms](#defaultuniforms)

### Methods

[apply](#apply)
[calculateMatrix](#calculatematrix)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Accessors

### blur

* set blur(value: number): void

  Set the blur strength

  #### Parameters

  + value: number

    blur strength

  #### Returns void

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â backgroundColor: number[];  
  Â Â Â Â exploredColor: number[];  
  Â Â Â Â hasOverlayTexture: boolean;  
  Â Â Â Â overlayMatrix: any;  
  Â Â Â Â overlayTexture: null;  
  Â Â Â Â primaryTexture: null;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â unexploredColor: number[];  
  Â Â Â Â visionTexture: null;  
  }

  #### Returns { Â Â Â Â backgroundColor: number[]; Â Â Â Â exploredColor: number[]; Â Â Â Â hasOverlayTexture: boolean; Â Â Â Â overlayMatrix: any; Â Â Â Â overlayTexture: null; Â Â Â Â primaryTexture: null; Â Â Â Â screenDimensions: number[]; Â Â Â Â unexploredColor: number[]; Â Â Â Â visionTexture: null; }

## Methods

### apply

* apply(filterManager: any, input: any, output: any, clear: any): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clear: any

  #### Returns void

  Overrides [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[apply](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#apply)

### calculateMatrix

* calculateMatrix(filterManager: FilterSystem): void

  Calculate the fog overlay sprite matrix.

  #### Parameters

  + filterManager: FilterSystem

  #### Returns void

### `Static`\_createFragmentShader

* \_createFragmentShader(options: any): string

  #### Parameters

  + options: any

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