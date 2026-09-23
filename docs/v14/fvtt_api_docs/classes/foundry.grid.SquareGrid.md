---
title: "SquareGrid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.grid.SquareGrid.html"
category: "classes"
---

# Class SquareGrid

The square grid class.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.grid.SquareGrid))

* [BaseGrid](foundry.grid.BaseGrid.md)
  + SquareGrid

##### Index

### Constructors

[constructor](#constructor)

### Properties

[alpha](#alpha)
[color](#color)
[diagonals](#diagonals)
[distance](#distance)
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
[getAdjacentOffsets](#getadjacentoffsets)
[getCenterPoint](#getcenterpoint)
[getCircle](#getcircle)
[getCone](#getcone)
[getDirectPath](#getdirectpath)
[getEllipse](#getellipse)
[getLine](#getline)
[getOffset](#getoffset)
[getOffsetRange](#getoffsetrange)
[getRectangle](#getrectangle)
[getRing](#getring)
[getShape](#getshape)
[getShiftedOffset](#getshiftedoffset)
[getShiftedPoint](#getshiftedpoint)
[getSnappedPoint](#getsnappedpoint)
[getTopLeftPoint](#gettopleftpoint)
[getTranslatedPoint](#gettranslatedpoint)
[getVertices](#getvertices)
[measurePath](#measurepath)
[testAdjacency](#testadjacency)

## Constructors

### constructor

* new SquareGrid(config: [SquareGridConfiguration](../interfaces/foundry.grid.types.SquareGridConfiguration.md)): SquareGrid

  The square grid constructor.

  #### Parameters

  + config: [SquareGridConfiguration](../interfaces/foundry.grid.types.SquareGridConfiguration.md)

    The grid configuration

  #### Returns SquareGrid

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

### `Readonly`diagonals

diagonals: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md)

The rule for diagonal measurement (see [CONST.GRID\_DIAGONALS](../variables/CONST.GRID_DIAGONALS.md)).

### `Readonly`distance

distance: number

The distance of a grid space in units.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[distance](foundry.grid.BaseGrid.md#distance)

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

type: 1 = GRID\_TYPES.SQUARE

Overrides [BaseGrid](foundry.grid.BaseGrid.md).[type](foundry.grid.BaseGrid.md#type)

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

  #### Parameters

  + sceneWidth: any
  + sceneHeight: any
  + padding: any

  #### Returns { columns: number; height: any; rows: number; width: any; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[calculateDimensions](foundry.grid.BaseGrid.md#calculatedimensions)

### getAdjacentOffsets

* getAdjacentOffsets(  
  Â Â Â Â coords: any,  
  ): { i: any; j: any }[] | { i: any; j: any; k: any }[]

  #### Parameters

  + coords: any

  #### Returns { i: any; j: any }[] | { i: any; j: any; k: any }[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getAdjacentOffsets](foundry.grid.BaseGrid.md#getadjacentoffsets)

### getCenterPoint

* getCenterPoint(  
  Â Â Â Â coords: any,  
  ):  
  Â Â Â Â | { elevation?: undefined; x: number; y: number }  
  Â Â Â Â | { elevation: number; x: number; y: number }

  #### Parameters

  + coords: any

  #### Returns Â Â Â Â | { elevation?: undefined; x: number; y: number } Â Â Â Â | { elevation: number; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCenterPoint](foundry.grid.BaseGrid.md#getcenterpoint)

### getCircle

* getCircle(center: any, radius: any): [Point](../interfaces/foundry.types.Point.md)[]

  #### Parameters

  + center: any
  + radius: any

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

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

### getDirectPath

* getDirectPath(waypoints: any): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  #### Parameters

  + waypoints: any

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getDirectPath](foundry.grid.BaseGrid.md#getdirectpath)

### getEllipse

* getEllipse(center: any, radiusX: any, radiusY: any, rotation: any): [Point](../interfaces/foundry.types.Point.md)[]

  Get the ellipse polygon given the radius in grid units for this grid.
  The points of the polygon are returned ordered in positive orientation.
  In gridless grids an approximation of the true ellipse with a deviation of less than 0.25 pixels is returned.

  #### Parameters

  + center: any

    The center point of the ellipse.
  + radiusX: any

    The x-radius in grid units.
  + radiusY: any

    The y-radius in grid units.
  + rotation: any

    The rotation in degrees.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the ellipse polygon.

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getEllipse](foundry.grid.BaseGrid.md#getellipse)

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
  ): number[]

  #### Parameters

  + \_\_namedParameters: { height: any; width: any; x: any; y: any }

  #### Returns number[]

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

* getRing(center: any, radius: any, innerWidth: any, outerWidth: any): [Point](../interfaces/foundry.types.Point.md)[][]

  Get the ring polygon given the radius and width in grid units for this grid.
  The points of the polygons are returned ordered in positive orientation.
  In gridless grids an approximation of the true ring with a deviation of less than 0.25 pixels is returned.

  #### Parameters

  + center: any

    The center point of the ring.
  + radius: any

    The radius in grid units.
  + innerWidth: any

    The inner width in grid units.
  + outerWidth: any

    The outer width in grid units.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[][]

  The inner and outer circles of the ring polygon.

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getRing](foundry.grid.BaseGrid.md#getring)

### getShape

* getShape(): { x: number; y: number }[]

  #### Returns { x: number; y: number }[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShape](foundry.grid.BaseGrid.md#getshape)

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
  ):  
  Â Â Â Â | { elevation?: undefined; x: number; y: number }  
  Â Â Â Â | { elevation: number; x: number; y: number }

  #### Parameters

  + point: any
  + direction: any

  #### Returns Â Â Â Â | { elevation?: undefined; x: number; y: number } Â Â Â Â | { elevation: number; x: number; y: number }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShiftedPoint](foundry.grid.BaseGrid.md#getshiftedpoint)

### getSnappedPoint

* getSnappedPoint(  
  Â Â Â Â point: any,  
  Â Â Â Â \_\_namedParameters: { mode: any; resolution?: number },  
  ):  
  Â Â Â Â | { elevation: any; x: any; y: any }  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }  
  Â Â Â Â | undefined

  #### Parameters

  + point: any
  + \_\_namedParameters: { mode: any; resolution?: number }

  #### Returns Â Â Â Â | { elevation: any; x: any; y: any } Â Â Â Â | { elevation?: undefined; x: any; y: any } Â Â Â Â | undefined

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getSnappedPoint](foundry.grid.BaseGrid.md#getsnappedpoint)

### getTopLeftPoint

* getTopLeftPoint(  
  Â Â Â Â coords: any,  
  ):  
  Â Â Â Â | { elevation?: undefined; x: number; y: number }  
  Â Â Â Â | { elevation: number; x: number; y: number }

  #### Parameters

  + coords: any

  #### Returns Â Â Â Â | { elevation?: undefined; x: number; y: number } Â Â Â Â | { elevation: number; x: number; y: number }

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
  Â Â Â Â Â Â Â Â [GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
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

  + waypoints: ([GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata))[]

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
  Â Â Â Â Â Â Â Â [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  #### Parameters

  + waypoints: ([GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata))[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](foundry.grid.BaseGrid.md#measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  The measurements a shortest, direct path through the given waypoints

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[measurePath](foundry.grid.BaseGrid.md#measurepath)

### testAdjacency

* testAdjacency(coords1: any, coords2: any): boolean

  #### Parameters

  + coords1: any
  + coords2: any

  #### Returns boolean

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[testAdjacency](foundry.grid.BaseGrid.md#testadjacency)