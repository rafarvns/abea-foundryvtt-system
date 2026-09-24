---
title: "GridMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.GridMesh.html"
category: "classes"
---

# Class GridMesh

The grid mesh, which uses the [foundry.canvas.rendering.shaders.GridShader](foundry.canvas.rendering.shaders.GridShader.md) to render the grid.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.containers.GridMesh))

* [QuadMesh](foundry.canvas.containers.QuadMesh.md)
  + GridMesh

##### Index

### Constructors

[constructor](#constructor)

### Properties

[data](#data)

### Accessors

[blendMode](#blendmode)
[shader](#shader)

### Methods

[\_calculateBounds](#_calculatebounds)
[\_render](#_render)
[containsPoint](#containspoint)
[destroy](#destroy)
[initialize](#initialize)
[setShaderClass](#setshaderclass)
[\_initialize](#_initialize)

## Constructors

### constructor

* new GridMesh(shaderClass?: typeof [GridShader](foundry.canvas.rendering.shaders.GridShader.md)): GridMesh

  The grid mesh constructor.

  #### Parameters

  + `Optional`shaderClass: typeof [GridShader](foundry.canvas.rendering.shaders.GridShader.md) = GridShader

    The shader class

  #### Returns GridMesh

  Overrides [QuadMesh](foundry.canvas.containers.QuadMesh.md).[constructor](foundry.canvas.containers.QuadMesh.md#constructor)

## Properties

### data

data: [GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md) = ...

The data of this mesh.

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

### initialize

* initialize(data: Partial<[GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md)>): GridMesh

  Initialize and update the mesh given the (partial) data.

  #### Parameters

  + data: Partial<[GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md)>

    The (partial) data.

  #### Returns GridMesh

### setShaderClass

* setShaderClass(shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

    Shader class used. Must inherit from AbstractBaseShader.

  #### Returns void

  Inherited from [QuadMesh](foundry.canvas.containers.QuadMesh.md).[setShaderClass](foundry.canvas.containers.QuadMesh.md#setshaderclass)

### `Protected`\_initialize

* \_initialize(data: Partial<[GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md)>): void

  `Protected`

  Initialize the data of this mesh given the (partial) data.

  #### Parameters

  + data: Partial<[GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md)>

    The (partial) data.

  #### Returns void