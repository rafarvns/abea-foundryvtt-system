---
title: "RegionGeometry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.regions.RegionGeometry.html"
category: "classes"
---

# Class RegionGeometry

The geometry of a [foundry.canvas.placeables.Region](foundry.canvas.placeables.Region.md).

* Vertex Attribute: `aVertexPosition` (`vec2`)
* Draw Mode: `PIXI.DRAW_MODES.TRIANGLES`

#### Hierarchy

* Geometry
  + RegionGeometry

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[region](#region)

### Methods

[\_clearBuffers](#_clearbuffers)
[\_updateBuffers](#_updatebuffers)

## Constructors

### constructor

* new RegionGeometry(region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)): RegionGeometry

  `Internal`

  Create a RegionGeometry.

  #### Parameters

  + region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

    The Region to create the RegionGeometry from.

  #### Returns RegionGeometry

  Overrides PIXI.Geometry.constructor

## Accessors

### region

* get region(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

  The Region this geometry belongs to.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

## Methods

### \_clearBuffers

* \_clearBuffers(): void

  `Internal`

  Update the buffers.

  #### Returns void

### \_updateBuffers

* \_updateBuffers(): void

  `Internal`

  Update the buffers.

  #### Returns void