---
title: "AbstractBaseShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.AbstractBaseShader.html"
category: "classes"
---

# Class AbstractBaseShader`Abstract`

This class defines an interface which all shaders utilize.

#### Mixes

BaseShaderMixin

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.AbstractBaseShader))

* any
  + AbstractBaseShader
    - [GridShader](foundry.canvas.rendering.shaders.GridShader.md)
    - [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)
    - [AbstractWeatherShader](foundry.canvas.rendering.shaders.AbstractWeatherShader.md)
    - [RegionShader](foundry.canvas.rendering.shaders.RegionShader.md)
    - [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

##### Index

### Properties

[initialUniforms](#initialuniforms)

### Methods

[reset](#reset)
[\_preRender](#_prerender)
[create](#create)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

### `Static`create

* create(uniforms: any, options: any): AbstractBaseShader

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns AbstractBaseShader

  Overrides BaseShaderMixin(PIXI.Shader).create