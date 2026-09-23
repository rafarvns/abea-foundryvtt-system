---
title: "PolygonMesher | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.PolygonMesher.html"
category: "classes"
---

# Class PolygonMesher

A helper class used to construct triangulated polygon meshes
Allow to add padding and a specific depth value.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[indices](#indices)
[options](#options)
[vertices](#vertices)
[\_defaultOptions](#_defaultoptions)

### Methods

[triangulate](#triangulate)
[getClipperPathFromPoints](#getclipperpathfrompoints)

## Constructors

### constructor

* new PolygonMesher(poly: number[] | Polygon, options?: object): PolygonMesher

  #### Parameters

  + poly: number[] | Polygon

    Closed polygon to be processed and converted to a mesh
    (array of points or PIXI Polygon)
  + `Optional`options: object = {}

    Various options : normalizing, offsetting, add depth, ...

  #### Returns PolygonMesher

## Properties

### indices

indices: number[] = []

Polygon mesh indices

### options

options: Record<string, number | boolean>

Contains options to apply during the meshing process

### vertices

vertices: number[] = []

Polygon mesh vertices

### `Static`\_defaultOptions

\_defaultOptions: Record<string, number | boolean> = ...

Default options values

## Methods

### triangulate

* triangulate(geometry: Geometry): Geometry

  Execute the triangulation to create indices

  #### Parameters

  + geometry: Geometry

    A geometry to update

  #### Returns Geometry

  The resulting geometry

### `Static`getClipperPathFromPoints

* getClipperPathFromPoints(poly: number[] | Polygon, dimension?: number): any

  Convert a flat points array into a 2 dimensional ClipperLib path

  #### Parameters

  + poly: number[] | Polygon

    PIXI.Polygon or points flat array.
  + `Optional`dimension: number = 2

    The number of dimensions.

  #### Returns any

  The clipper lib path.