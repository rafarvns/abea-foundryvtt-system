---
title: "WeatherShaderEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.WeatherShaderEffect.html"
category: "classes"
---

# Class WeatherShaderEffect

An interface for defining shader-based weather effects

#### Param: config

The config object to create the shader effect

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.WeatherShaderEffect))

* [QuadMesh](foundry.canvas.containers.QuadMesh.md)
  + WeatherShaderEffect

##### Index

### Accessors

[blendMode](#blendmode)
[shader](#shader)

### Methods

[\_calculateBounds](#_calculatebounds)
[\_render](#_render)
[configure](#configure)
[containsPoint](#containspoint)
[destroy](#destroy)
[play](#play)
[setShaderClass](#setshaderclass)
[stop](#stop)
[\_initialize](#_initialize)

## Accessors

### blendMode

* get blendMode(): BLEND\_MODES

  Assigned blend mode to this mesh.

  #### Returns BLEND\_MODES

  Inherited from QuadMesh.blendMode

### shader

* get shader(): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  The shader bound to this mesh.

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from QuadMesh.shader

## Methods

### \_calculateBounds

* \_calculateBounds(): void

  #### Returns void

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[\_calculateBounds](foundry.canvas.containers.QuadMesh.md#_calculatebounds)

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[\_render](foundry.canvas.containers.QuadMesh.md#_render)

### configure

* configure(config?: object): void

  Set shader parameters.

  #### Parameters

  + `Optional`config: object = {}

  #### Returns void

### containsPoint

* containsPoint(point: IPointData): boolean

  Tests if a point is inside this QuadMesh.

  #### Parameters

  + point: IPointData

  #### Returns boolean

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[containsPoint](foundry.canvas.containers.QuadMesh.md#containspoint)

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[destroy](foundry.canvas.containers.QuadMesh.md#destroy)

### play

* play(): void

  Begin animation

  #### Returns void

### setShaderClass

* setShaderClass(shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

    Shader class used. Must inherit from AbstractBaseShader.

  #### Returns void

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[setShaderClass](foundry.canvas.containers.QuadMesh.md#setshaderclass)

### stop

* stop(): void

  Stop animation

  #### Returns void

### `Protected`\_initialize

* \_initialize(config: object): void

  `Protected`

  Initialize the weather effect.

  #### Parameters

  + config: object

    Config object.

  #### Returns void