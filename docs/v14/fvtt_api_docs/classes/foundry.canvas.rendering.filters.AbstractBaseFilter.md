---
title: "AbstractBaseFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.AbstractBaseFilter.html"
category: "classes"
---

# Class AbstractBaseFilter`Abstract`

An abstract filter which provides a framework for reusable definition

#### Mixes

BaseShaderMixin

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.AbstractBaseFilter))

* any
  + AbstractBaseFilter
    - [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md)
    - [InvisibilityFilter](foundry.canvas.rendering.filters.InvisibilityFilter.md)
    - [TextureTransitionFilter](foundry.canvas.rendering.filters.TextureTransitionFilter.md)
    - [VoidFilter](foundry.canvas.rendering.filters.VoidFilter.md)

##### Index

### Methods

[create](#create)

## Methods

### `Static`create

* create(uniforms: any, options: any): AbstractBaseFilter

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns AbstractBaseFilter

  Overrides BaseShaderMixin(PIXI.Filter).create