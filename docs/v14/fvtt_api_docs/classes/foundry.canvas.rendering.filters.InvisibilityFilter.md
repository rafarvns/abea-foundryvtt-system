---
title: "InvisibilityFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.InvisibilityFilter.html"
category: "classes"
---

# Class InvisibilityFilter

Invisibility effect filter for placeables.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.InvisibilityFilter))

* [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)
  + InvisibilityFilter

##### Index

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[\_createFragmentShader](#_createfragmentshader)
[create](#create)

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): { color: number[]; uSampler: null }

  #### Returns { color: number[]; uSampler: null }

## Methods

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Inherited from [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseFilter.md#create)