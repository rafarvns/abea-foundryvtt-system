---
title: "HexagonalGrid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.grid.HexagonalGrid.html"
category: "classes"
---

# Class HexagonalGrid

The hexagonal grid class.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.grid.HexagonalGrid))

* [BaseGrid](foundry.grid.BaseGrid.md)
  + HexagonalGrid

##### Index

### Constructors

[constructor](#constructor)

### Properties

[alpha](#alpha)
[color](#color)
[columns](#columns)
[diagonals](#diagonals)
[distance](#distance)
[even](#even)
[size](#size)
[sizeX](#sizex)
[sizeY](#sizey)
[style](#style)
[thickness](#thickness)
[type](#type)
[units](#units)

### Accessors

[isGridless](#isgridless)
[isHexagonal](#ishexagonal)
[isSquare](#issquare)

### Methods

[\_measurePath](#_measurepath)
[calculateDimensions](#calculatedimensions)
[cubeToOffset](#cubetooffset)
[cubeToPoint](#cubetopoint)
[getAdjacentCubes](#getadjacentcubes)
[getAdjacentOffsets](#getadjacentoffsets)
[getCenterPoint](#getcenterpoint)
[getCircle](#getcircle)
[getCone](#getcone)
[getCube](#getcube)
[getDirectPath](#getdirectpath)
[getEllipse](#getellipse)
[getLine](#getline)
[getOffset](#getoffset)
[getOffsetRange](#getoffsetrange)
[getRectangle](#getrectangle)
[getRing](#getring)
[getShape](#getshape)
[getShiftedCube](#getshiftedcube)
[getShiftedOffset](#getshiftedoffset)
[getShiftedPoint](#getshiftedpoint)
[getSnappedPoint](#getsnappedpoint)
[getTopLeftPoint](#gettopleftpoint)
[getTranslatedPoint](#gettranslatedpoint)
[getVertices](#getvertices)
[measurePath](#measurepath)
[offsetToCube](#offsettocube)
[pointToCube](#pointtocube)
[testAdjacency](#testadjacency)
[cubeDistance](#cubedistance)
[cubeRound](#cuberound)

## Constructors

### constructor

* new HexagonalGrid(config: [HexagonalGridConfiguration](../interfaces/foundry.grid.types.HexagonalGridConfiguration.md)): HexagonalGrid

  The hexagonal grid constructor.

  #### Parameters

  + config: [HexagonalGridConfiguration](../interfaces/foundry.grid.types.HexagonalGridConfiguration.md)

    The grid configuration

  #### Returns HexagonalGrid

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[constructor](foundry.grid.BaseGrid.md#constructor)

## Properties

### `Readonly`alpha

alpha: number

The opacity of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[alpha](foundry.grid.BaseGrid.md#alpha)

### `Readonly`color

color: [Color](foundry.utils.Color.md)

The color of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[color](foundry.grid.BaseGrid.md#color)

### `Readonly`columns

columns: boolean

Is this grid column-based (flat-topped) or row-based (pointy-topped)?

### `Readonly`diagonals

diagonals: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md)

The rule for diagonal measurement (see [CONST.GRID\_DIAGONALS](../variables/CONST.GRID_DIAGONALS.md)).

### `Readonly`distance

distance: number

The distance of a grid space in units.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[distance](foundry.grid.BaseGrid.md#distance)

### `Readonly`even

even: boolean

Is this grid even or odd?

### `Readonly`size

size: number

The size of a grid space in pixels.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[size](foundry.grid.BaseGrid.md#size)

### `Readonly`sizeX

sizeX: number

The width of a grid space in pixels.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[sizeX](foundry.grid.BaseGrid.md#sizex)

### `Readonly`sizeY

sizeY: number

The height of a grid space in pixels.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[sizeY](foundry.grid.BaseGrid.md#sizey)

### `Readonly`style

style: string

The style of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[style](foundry.grid.BaseGrid.md#style)

### `Readonly`thickness

thickness: number

The thickness of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[thickness](foundry.grid.BaseGrid.md#thickness)

### `Readonly`type

type: 2 | 3 | 4 | 5

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[type](foundry.grid.BaseGrid.md#type)

### `Readonly`units

units: string

The distance units used in this grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[units](foundry.grid.BaseGrid.md#units)

## Accessors

### isGridless

* get isGridless(): boolean

  Is this a gridless grid?

  #### Returns boolean

  Inherited from BaseGrid.isGridless

### isHexagonal

* get isHexagonal(): boolean

  Is this a hexagonal grid?

  #### Returns boolean

  Inherited from BaseGrid.isHexagonal

### isSquare

* get isSquare(): boolean

  Is this a square grid?

  #### Returns boolean

  Inherited from BaseGrid.isSquare

## Methods

### \_measurePath

* \_measurePath(  
  Â Â Â Â waypoints: any,  
  Â Â Â Â \_\_namedParameters: { cost: any },  
  Â Â Â Â result: any,  
  ): void

  #### Parameters

  + waypoints: any
  + \_\_namedParameters: { cost: any }
  + result: any

  #### Returns void

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[\_measurePath](foundry.grid.BaseGrid.md#_measurepath)

### calculateDimensions

* calculateDimensions(  
  Â Â Â Â sceneWidth: any,  
  Â Â Â Â sceneHeight: any,  
  Â Â Â Â padding: any,  
  ): {  
  Â Â Â Â columns: number;  
  Â Â Â Â height: any;  
  Â Â Â Â rows: number;  
  Â Â Â Â width: any;  
  Â Â Â Â x: number;  
  Â Â Â Â y: number;  
  }

  Calculate the total size of the canvas with padding applied, as well as the top-left coordinates of the inner
  rectangle that houses the scene.

  #### Parameters

  + sceneWidth: any

    The width of the scene.
  + sceneHeight: any

    The height of the scene.
  + padding: any

    The percentage of padding.

  #### Returns { columns: number; height: any; rows: number; width: any; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[calculateDimensions](foundry.grid.BaseGrid.md#calculatedimensions)

### cubeToOffset

* cubeToOffset(cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  Convert integer cube coordinates (q, r, s) / (q, r, s, k) into offset coordinates (i, j) / (i, j, k).
  Inverse of [HexagonalGrid#offsetToCube](#offsettocube).

  #### Parameters

  + cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

    The cube coordinates

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  The offset coordinates

  #### See

  <https://www.redblobgames.com/grids/hexagons/>
* cubeToOffset(cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  #### Parameters

  + cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

    The cube coordinates

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  The offset coordinates

### cubeToPoint

* cubeToPoint(cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)): [Point](../interfaces/foundry.types.Point.md)

  Convert cube coordinates (q, r, s) / (q, r, s, k) into point coordinates (x, y) / (x, y, elevation).
  Inverse of [HexagonalGrid#pointToCube](#pointtocube).

  #### Parameters

  + cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

    The cube coordinates

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The point coordinates

  #### See

  <https://www.redblobgames.com/grids/hexagons/>
* cubeToPoint(cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

    The cube coordinates

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The point coordinates

### getAdjacentCubes

* getAdjacentCubes(coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)[]

  Returns the cube coordinates of grid spaces adjacent to the one corresponding to the given coordinates.

  #### Parameters

  + coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)

    The coordinates

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)[]

  The adjacent cube coordinates
* getAdjacentCubes(coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md)): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)[]

  #### Parameters

  + coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md)

    The coordinates

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)[]

  The adjacent cube coordinates

### getAdjacentOffsets

* getAdjacentOffsets(  
  Â Â Â Â coords: any,  
  ): ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  #### Parameters

  + coords: any

  #### Returns ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getAdjacentOffsets](foundry.grid.BaseGrid.md#getadjacentoffsets)

### getCenterPoint

* getCenterPoint(coords: any): [Point](../interfaces/foundry.types.Point.md) | { elevation: number; x: number; y: number }

  #### Parameters

  + coords: any

  #### Returns [Point](../interfaces/foundry.types.Point.md) | { elevation: number; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCenterPoint](foundry.grid.BaseGrid.md#getcenterpoint)

### getCircle

* getCircle(  
  Â Â Â Â \_\_namedParameters: { x: any; y: any },  
  Â Â Â Â radius: any,  
  ): { x: any; y: any }[]

  #### Parameters

  + \_\_namedParameters: { x: any; y: any }
  + radius: any

  #### Returns { x: any; y: any }[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCircle](foundry.grid.BaseGrid.md#getcircle)

### getCone

* getCone(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â radius: number,  
  Â Â Â Â direction: number,  
  Â Â Â Â angle: number,  
  ): [Point](../interfaces/foundry.types.Point.md)[]

  Get the cone polygon given the radius in grid units and the angle in degrees for this grid.
  The points of the polygon are returned ordered in positive orientation.
  In gridless grids an approximation of the true cone with a deviation of less than 0.25 pixels is returned.
  If the angle less than 360 and the cone not empty, the first point of the polygon is the origin.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The origin point of the cone
  + radius: number

    The radius in grid units
  + direction: number

    The direction in degrees
  + angle: number

    The angle in degrees

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the cone polygon

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[getCone](foundry.grid.BaseGrid.md#getcone)

### getCube

* getCube(coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  Returns the cube coordinates of the grid space corresponding to the given coordinates.

  #### Parameters

  + coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)

    The coordinates

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  The cube coordinates
* getCube(coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md)): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  #### Parameters

  + coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md)

    The coordinates

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  The cube coordinates

### getDirectPath

* getDirectPath(  
  Â Â Â Â waypoints: any,  
  ): ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  #### Parameters

  + waypoints: any

  #### Returns ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  #### See

  <https://www.redblobgames.com/grids/hexagons/#line-drawing>

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getDirectPath](foundry.grid.BaseGrid.md#getdirectpath)

### `Abstract`getEllipse

* getEllipse(  
  Â Â Â Â center: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â radiusX: number,  
  Â Â Â Â radiusY: number,  
  Â Â Â Â rotation: number,  
  ): [Point](../interfaces/foundry.types.Point.md)[]

  Get the ellipse polygon given the radius in grid units for this grid.
  The points of the polygon are returned ordered in positive orientation.
  In gridless grids an approximation of the true ellipse with a deviation of less than 0.25 pixels is returned.

  #### Parameters

  + center: [Point](../interfaces/foundry.types.Point.md)

    The center point of the ellipse.
  + radiusX: number

    The x-radius in grid units.
  + radiusY: number

    The y-radius in grid units.
  + rotation: number

    The rotation in degrees.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the ellipse polygon.

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[getEllipse](foundry.grid.BaseGrid.md#getellipse)

### getLine

* getLine(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â length: number,  
  Â Â Â Â width: number,  
  Â Â Â Â direction: number,  
  ): [Point](../interfaces/foundry.types.Point.md)[]

  Get the line polygon given the length and width in grid units for this grid.
  The points of the polygon are returned ordered in positive orientation.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The origin point of the line.
  + length: number

    The length in grid units.
  + width: number

    The width in grid units.
  + direction: number

    The direction in degrees.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the line polygon.

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[getLine](foundry.grid.BaseGrid.md#getline)

### getOffset

* getOffset(  
  Â Â Â Â coords: any,  
  ): { i: any; j: any; k: any } | { i: any; j: any; k?: undefined }

  #### Parameters

  + coords: any

  #### Returns { i: any; j: any; k: any } | { i: any; j: any; k?: undefined }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getOffset](foundry.grid.BaseGrid.md#getoffset)

### getOffsetRange

* getOffsetRange(  
  Â Â Â Â \_\_namedParameters: { height: any; width: any; x: any; y: any },  
  ): any[]

  #### Parameters

  + \_\_namedParameters: { height: any; width: any; x: any; y: any }

  #### Returns any[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getOffsetRange](foundry.grid.BaseGrid.md#getoffsetrange)

### getRectangle

* getRectangle(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â anchor: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â rotation: number,  
  ): [Point](../interfaces/foundry.types.Point.md)[]

  Get the rectangle polygon given the width and height in grid units for this grid.
  The points of the polygon are returned ordered in positive orientation.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The origin point of the rectangle.
  + width: number

    The width in grid units.
  + height: number

    The height in grid units.
  + anchor: [Point](../interfaces/foundry.types.Point.md)

    The anchor.
  + rotation: number

    The rotation in degrees.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the rectangle polygon.

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[getRectangle](foundry.grid.BaseGrid.md#getrectangle)

### getRing

* getRing(  
  Â Â Â Â center: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â radius: number,  
  Â Â Â Â innerWidth: number,  
  Â Â Â Â outerWidth: number,  
  ): [innerCircle: [Point](../interfaces/foundry.types.Point.md)[], outerCircle: [Point](../interfaces/foundry.types.Point.md)[]]

  Get the ring polygon given the radius and width in grid units for this grid.
  The points of the polygons are returned ordered in positive orientation.
  In gridless grids an approximation of the true ring with a deviation of less than 0.25 pixels is returned.

  #### Parameters

  + center: [Point](../interfaces/foundry.types.Point.md)

    The center point of the ring.
  + radius: number

    The radius in grid units.
  + innerWidth: number

    The inner width in grid units.
  + outerWidth: number

    The outer width in grid units.

  #### Returns [innerCircle: [Point](../interfaces/foundry.types.Point.md)[], outerCircle: [Point](../interfaces/foundry.types.Point.md)[]]

  The inner and outer circles of the ring polygon.

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[getRing](foundry.grid.BaseGrid.md#getring)

### getShape

* getShape(): { x: number; y: number }[]

  #### Returns { x: number; y: number }[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShape](foundry.grid.BaseGrid.md#getshape)

### getShiftedCube

* getShiftedCube(  
  Â Â Â Â coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md),  
  Â Â Â Â direction: number,  
  ): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  Returns the cube coordinates of the grid space corresponding to the given coordinates
  shifted by one grid space in the given direction.

  #### Parameters

  + coords: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)

    The coordinates
  + direction: number

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  The cube coordinates
* getShiftedCube(  
  Â Â Â Â coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md),  
  Â Â Â Â direction: number,  
  ): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  #### Parameters

  + coords: [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md)

    The coordinates
  + direction: number

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  The cube coordinates

### getShiftedOffset

* getShiftedOffset(  
  Â Â Â Â coords: any,  
  Â Â Â Â direction: any,  
  ): { i: any; j: any; k: any } | { i: any; j: any; k?: undefined }

  #### Parameters

  + coords: any
  + direction: any

  #### Returns { i: any; j: any; k: any } | { i: any; j: any; k?: undefined }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShiftedOffset](foundry.grid.BaseGrid.md#getshiftedoffset)

### getShiftedPoint

* getShiftedPoint(  
  Â Â Â Â point: any,  
  Â Â Â Â direction: any,  
  ): [Point](../interfaces/foundry.types.Point.md) | { elevation: number; x: number; y: number }

  #### Parameters

  + point: any
  + direction: any

  #### Returns [Point](../interfaces/foundry.types.Point.md) | { elevation: number; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShiftedPoint](foundry.grid.BaseGrid.md#getshiftedpoint)

### getSnappedPoint

* getSnappedPoint(  
  Â Â Â Â point: any,  
  Â Â Â Â \_\_namedParameters: { mode: any; resolution?: number },  
  ): any

  #### Parameters

  + point: any
  + \_\_namedParameters: { mode: any; resolution?: number }

  #### Returns any

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getSnappedPoint](foundry.grid.BaseGrid.md#getsnappedpoint)

### getTopLeftPoint

* getTopLeftPoint(  
  Â Â Â Â coords: any,  
  ):  
  Â Â Â Â | { elevation: number; x: number; y: number }  
  Â Â Â Â | { elevation?: undefined; x: number; y: number }

  #### Parameters

  + coords: any

  #### Returns Â Â Â Â | { elevation: number; x: number; y: number } Â Â Â Â | { elevation?: undefined; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getTopLeftPoint](foundry.grid.BaseGrid.md#gettopleftpoint)

### getTranslatedPoint

* getTranslatedPoint(  
  Â Â Â Â point: any,  
  Â Â Â Â direction: any,  
  Â Â Â Â distance: any,  
  ):  
  Â Â Â Â | { elevation: any; x: any; y: any }  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }

  #### Parameters

  + point: any
  + direction: any
  + distance: any

  #### Returns { elevation: any; x: any; y: any } | { elevation?: undefined; x: any; y: any }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getTranslatedPoint](foundry.grid.BaseGrid.md#gettranslatedpoint)

### getVertices

* getVertices(coords: any): { x: number; y: number }[]

  #### Parameters

  + coords: any

  #### Returns { x: number; y: number }[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getVertices](foundry.grid.BaseGrid.md#getvertices)

### measurePath

* measurePath<  
  Â Â Â Â [SegmentData](#measurepathsegmentdata) extends  
  Â Â Â Â Â Â Â Â {  
  Â Â Â Â Â Â Â Â Â Â Â Â cost: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â elevation: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â i: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â j: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â k: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â q: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â r: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â s: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â x: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â y: never;  
  Â Â Â Â Â Â Â Â } = {},  
  >(  
  Â Â Â Â waypoints: (  
  Â Â Â Â Â Â Â Â [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  Measure a shortest, direct path through the given waypoints.

  #### Type Parameters

  + SegmentData extends {  
    Â Â Â Â cost: never;  
    Â Â Â Â elevation: never;  
    Â Â Â Â i: never;  
    Â Â Â Â j: never;  
    Â Â Â Â k: never;  
    Â Â Â Â q: never;  
    Â Â Â Â r: never;  
    Â Â Â Â s: never;  
    Â Â Â Â x: never;  
    Â Â Â Â y: never;  
    } = {}

  #### Parameters

  + waypoints: (  
    Â Â Â Â [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
    )[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  The measurements a shortest, direct path through the given waypoints

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[measurePath](foundry.grid.BaseGrid.md#measurepath)
* measurePath(  
  Â Â Â Â waypoints: (  
  Â Â Â Â Â Â Â Â [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  #### Parameters

  + waypoints: (  
    Â Â Â Â [HexagonalGridCoordinates3D](../types/foundry.grid.types.HexagonalGridCoordinates3D.md) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
    )[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  The measurements a shortest, direct path through the given waypoints

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[measurePath](foundry.grid.BaseGrid.md#measurepath)

### offsetToCube

* offsetToCube(offset: [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  Convert offset coordinates (i, j) / (i, j, k) into integer cube coordinates (q, r, s) / (q, r, s, k).
  Inverse of [HexagonalGrid#cubeToOffset](#cubetooffset).

  #### Parameters

  + offset: [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

    The offset coordinates

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  The integer cube coordinates

  #### See

  <https://www.redblobgames.com/grids/hexagons/>
* offsetToCube(offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  #### Parameters

  + offset: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

    The offset coordinates

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  The integer cube coordinates

### pointToCube

* pointToCube(point: [Point](../interfaces/foundry.types.Point.md)): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  Convert point coordinates (x, y) / (x, y, elevation) into cube coordinates (q, r, s) / (q, r, s, k).
  Inverse of [HexagonalGrid#cubeToPoint](#cubetopoint).

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  The (fractional) cube coordinates

  #### See

  <https://www.redblobgames.com/grids/hexagons/>
* pointToCube(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  The (fractional) cube coordinates

### testAdjacency

* testAdjacency(coords1: any, coords2: any): boolean

  #### Parameters

  + coords1: any
  + coords2: any

  #### Returns boolean

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[testAdjacency](foundry.grid.BaseGrid.md#testadjacency)

### `Static`cubeDistance

* cubeDistance(a: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md), b: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)): number

  Measure the distance in hexagons between two cube coordinates.

  #### Parameters

  + a: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

    The first cube coordinates
  + b: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

    The second cube coordinates

  #### Returns number

  The distance between the two cube coordinates in hexagons

  #### See

  <https://www.redblobgames.com/grids/hexagons/>

### `Static`cubeRound

* cubeRound(cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)): [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  Round the fractional cube coordinates (q, r, s) / (q, r, s, k).
  The k-coordinate is floored.

  #### Parameters

  + cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

    The fractional cube coordinates

  #### Returns [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

  The rounded integer cube coordinates

  #### See

  <https://www.redblobgames.com/grids/hexagons/>
* cubeRound(cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)): [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  #### Parameters

  + cube: [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

    The fractional cube coordinates

  #### Returns [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)

  The rounded integer cube coordinates