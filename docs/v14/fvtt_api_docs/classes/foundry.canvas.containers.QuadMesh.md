---
title: "QuadMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.QuadMesh.html"
category: "classes"
---

# Class QuadMesh

A basic rectangular mesh with a shader only. Does not natively handle textures (but a bound shader can).
Bounds calculations are simplified and the geometry does not need to handle texture coords.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.containers.QuadMesh))

* Container
  + QuadMesh
    - [GridMesh](foundry.canvas.containers.GridMesh.md)
    - [WeatherShaderEffect](foundry.canvas.rendering.shaders.WeatherShaderEffect.md)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[blendMode](#blendmode)
[shader](#shader)

### Methods

[\_calculateBounds](#_calculatebounds)
[\_render](#_render)
[containsPoint](#containspoint)
[destroy](#destroy)
[setShaderClass](#setshaderclass)

## Constructors

### constructor

* new QuadMesh(shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): QuadMesh

  #### Parameters

  + shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

    The shader class to use.

  #### Returns QuadMesh

  Overrides PIXI.Container.constructor

## Accessors

### blendMode

* get blendMode(): BLEND\_MODES

  Assigned blend mode to this mesh.

  #### Returns BLEND\_MODES

### shader

* get shader(): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  The shader bound to this mesh.

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

## Methods

### \_calculateBounds

* \_calculateBounds(): void

  #### Returns void

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

### containsPoint

* containsPoint(point: IPointData): boolean

  Tests if a point is inside this QuadMesh.

  #### Parameters

  + point: IPointData

  #### Returns boolean

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

### setShaderClass

* setShaderClass(shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

    Shader class used. Must inherit from AbstractBaseShader.

  #### Returns void