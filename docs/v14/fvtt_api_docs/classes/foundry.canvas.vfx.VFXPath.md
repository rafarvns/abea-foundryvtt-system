---
title: "VFXPath | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.vfx.VFXPath.html"
category: "classes"
---

# Class VFXPath

A class responsible for constructing a path of points used for animation.

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[pathPoints](#pathpoints)

### Methods

[interpolatedPoint](#interpolatedpoint)
[interpolatedPointAtDistance](#interpolatedpointatdistance)
[create](#create)
[getPathGenerator](#getpathgenerator)

## Constructors

### constructor

* new VFXPath(points: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[]): VFXPath

  Construct a VFXPath by providing an array of base point data.

  #### Parameters

  + points: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[]

  #### Returns VFXPath

## Accessors

### pathPoints

* get pathPoints(): [VFXPathPoint](../types/foundry.VFXPathPoint.md)[]

  The array of points in the path

  #### Returns [VFXPathPoint](../types/foundry.VFXPathPoint.md)[]

## Methods

### interpolatedPoint

* interpolatedPoint(x: number, index?: number): [VFXPathPoint](../types/foundry.VFXPathPoint.md)

  Get the interpolated point for a value x on [0, 1]

  #### Parameters

  + x: number

    The animation progress on [0, 1]
  + index: number = 0

    A known index of the path which was already reached

  #### Returns [VFXPathPoint](../types/foundry.VFXPathPoint.md)

### interpolatedPointAtDistance

* interpolatedPointAtDistance(distance: number): [VFXPathPoint](../types/foundry.VFXPathPoint.md)

  Compute an interpolated point along the path at a given distance.

  #### Parameters

  + distance: number

    The desired distance along the path

  #### Returns [VFXPathPoint](../types/foundry.VFXPathPoint.md)

  An interpolated point for object position at that distance

### `Static`create

* create(  
  Â Â Â Â pathName: string,  
  Â Â Â Â points: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[],  
  Â Â Â Â parameters?: object,  
  ): VFXPath

  Create a VFXPath instance of a certain named path type defined in CONFIG.Canvas.vfx.paths.

  #### Parameters

  + pathName: string

    The named path type to construct
  + points: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[]

    Path points to construct
  + parameters: object = {}

    Additional parameters used to construct the path

  #### Returns VFXPath

  The generated path

### `Static`getPathGenerator

* getPathGenerator(pathName: string): VFXPathGenerator

  Get a configured path generator from CONFIG.Canvas.vfx.paths.

  #### Parameters

  + pathName: string

    The named path type

  #### Returns VFXPathGenerator

  The path generator function