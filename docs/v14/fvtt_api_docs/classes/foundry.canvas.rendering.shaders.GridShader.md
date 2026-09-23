---
title: "GridShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.GridShader.html"
category: "classes"
---

# Class GridShader

The grid shader used by [foundry.canvas.containers.GridMesh](foundry.canvas.containers.GridMesh.md).

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.GridShader))

* [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)
  + GridShader

##### Index

### Properties

[initialUniforms](#initialuniforms)
[ANTIALIASED\_STEP\_FUNCTION](#antialiased_step_function)
[COLOR\_UNIFORM](#color_uniform)
[DRAW\_GRID\_FUNCTION](#draw_grid_function)
[EDGE\_DISTANCE\_FUNCTION](#edge_distance_function)
[EDGE\_OFFSET\_FUNCTION](#edge_offset_function)
[HEXAGONAL\_FUNCTIONS](#hexagonal_functions)
[LINE\_COVERAGE\_FUNCTION](#line_coverage_function)
[NEAREST\_VERTEX\_FUNCTION](#nearest_vertex_function)
[RESOLUTION\_UNIFORM](#resolution_uniform)
[THICKNESS\_UNIFORM](#thickness_uniform)
[TYPE\_UNIFORM](#type_uniform)
[\_fragmentShader](#_fragmentshader)

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[\_preRender](#_prerender)
[configure](#configure)
[reset](#reset)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractBaseShader.md#initialuniforms)

### `Static`ANTIALIASED\_STEP\_FUNCTION

ANTIALIASED\_STEP\_FUNCTION: string = ...

The antialiased step function.
The edge and x values is given in grid space units.

### `Static`COLOR\_UNIFORM

COLOR\_UNIFORM: string = "uniform vec4 color;"

The grid color uniform.

### `Static`DRAW\_GRID\_FUNCTION

DRAW\_GRID\_FUNCTION: string = ...

A function that draws the grid given a grid point, style, thickness, and color.

### `Static`EDGE\_DISTANCE\_FUNCTION

EDGE\_DISTANCE\_FUNCTION: string = ...

This function returns the distance to the nearest edge of a grid space given a point.

### `Static`EDGE\_OFFSET\_FUNCTION

EDGE\_OFFSET\_FUNCTION: string = ...

This function returns an vector (x, y, z), where

* x is the x-offset along the nearest edge,
* y is the y-offset (the distance) from the nearest edge, and
* z is the length of the nearest edge.

### `Static`HEXAGONAL\_FUNCTIONS

HEXAGONAL\_FUNCTIONS: string = ...

Hexagonal functions conversion for between grid and cube space.

### `Static`LINE\_COVERAGE\_FUNCTION

LINE\_COVERAGE\_FUNCTION: string = ...

The line converage function, which returns the alpha value at a point with the given distance (in grid space units)
from an antialiased line (or point) with the given thickness (in grid space units).

### `Static`NEAREST\_VERTEX\_FUNCTION

NEAREST\_VERTEX\_FUNCTION: string = ...

Get the nearest vertex of a grid space to the given point.

### `Static`RESOLUTION\_UNIFORM

RESOLUTION\_UNIFORM: string = "uniform float resolution;"

The resolution (pixels per grid space units) uniform.

### `Static`THICKNESS\_UNIFORM

THICKNESS\_UNIFORM: string = "uniform float thickness;"

The grid thickness uniform.

### `Static`TYPE\_UNIFORM

TYPE\_UNIFORM: string = ...

The grid type uniform.

### `Protected` `Static`\_fragmentShader

\_fragmentShader: string = ...

The fragment shader source. Subclasses can override it.

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â alpha: number;  
  Â Â Â Â canvasDimensions: number[];  
  Â Â Â Â color: number[];  
  Â Â Â Â gridSize: number;  
  Â Â Â Â meshDimensions: number[];  
  Â Â Â Â resolution: number;  
  Â Â Â Â sceneDimensions: number[];  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â style: number;  
  Â Â Â Â thickness: number;  
  Â Â Â Â type: number;  
  }

  #### Returns { Â Â Â Â alpha: number; Â Â Â Â canvasDimensions: number[]; Â Â Â Â color: number[]; Â Â Â Â gridSize: number; Â Â Â Â meshDimensions: number[]; Â Â Â Â resolution: number; Â Â Â Â sceneDimensions: number[]; Â Â Â Â screenDimensions: number[]; Â Â Â Â style: number; Â Â Â Â thickness: number; Â Â Â Â type: number; }

## Methods

### \_preRender

* \_preRender(mesh: any, renderer: any): void

  #### Parameters

  + mesh: any
  + renderer: any

  #### Returns void

  Overrides [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[\_preRender](foundry.canvas.rendering.shaders.AbstractBaseShader.md#_prerender)

### configure

* configure(options: object): void

  Configure the shader.

  #### Parameters

  + options: object

  #### Returns void

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[reset](foundry.canvas.rendering.shaders.AbstractBaseShader.md#reset)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[create](foundry.canvas.rendering.shaders.AbstractBaseShader.md#create)