---
title: "AbstractBaseMaskFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.AbstractBaseMaskFilter.html"
category: "classes"
---

# Class AbstractBaseMaskFilter

This class defines an interface for masked custom filters

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.AbstractBaseMaskFilter))

* [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)
  + AbstractBaseMaskFilter
    - [VisualEffectsMaskingFilter](foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.md)
    - [PrimaryCanvasGroupAmbienceFilter](foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.md)
    - [VisibilityFilter](foundry.canvas.rendering.filters.VisibilityFilter.md)
    - [WeatherOcclusionMaskFilter](foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.md)

##### Index

### Methods

[apply](#apply)
[\_createVertexShader](#_createvertexshader)
[create](#create)

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

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Inherited from [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseFilter.md#create)