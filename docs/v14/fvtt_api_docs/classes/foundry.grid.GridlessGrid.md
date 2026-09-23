---
title: "GridlessGrid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.grid.GridlessGrid.html"
category: "classes"
---

# Class GridlessGrid

The gridless grid class.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.grid.GridlessGrid))

* [BaseGrid](foundry.grid.BaseGrid.md)
  + GridlessGrid

##### Index

### Constructors

[constructor](#constructor)

### Properties

[alpha](#alpha)
[color](#color)
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

* new GridlessGrid(config: [GridConfiguration](../interfaces/foundry.grid.types.GridConfiguration.md)): GridlessGrid

  The base grid constructor.

  #### Parameters

  + config: [GridConfiguration](../interfaces/foundry.grid.types.GridConfiguration.md)

    The grid configuration

  #### Returns GridlessGrid

  Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[constructor](foundry.grid.BaseGrid.md#constructor)

## Properties

### `Readonly`alpha

alpha: number

The opacity of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[alpha](foundry.grid.BaseGrid.md#alpha)

### `Readonly`color

color: [Color](foundry.utils.Color.md)

The color of the grid.

Inherited from [BaseGrid](foundry.grid.BaseGrid.md).[color](foundry.grid.BaseGrid.md#color)

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

type: 0 = GRID\_TYPES.GRIDLESS

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

* getAdjacentOffsets(coords: any): never[]

  #### Parameters

  + coords: any

  #### Returns never[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getAdjacentOffsets](foundry.grid.BaseGrid.md#getadjacentoffsets)

### getCenterPoint

* getCenterPoint(  
  Â Â Â Â coords: any,  
  ):  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }  
  Â Â Â Â | { elevation: any; x: any; y: any }

  #### Parameters

  + coords: any

  #### Returns { elevation?: undefined; x: any; y: any } | { elevation: any; x: any; y: any }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCenterPoint](foundry.grid.BaseGrid.md#getcenterpoint)

### getCircle

* getCircle(\_\_namedParameters: { x: any; y: any }, radius: any): any[]

  #### Parameters

  + \_\_namedParameters: { x: any; y: any }
  + radius: any

  #### Returns any[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCircle](foundry.grid.BaseGrid.md#getcircle)

### getCone

* getCone(origin: any, radius: any, direction: any, angle: any): any[]

  #### Parameters

  + origin: any
  + radius: any
  + direction: any
  + angle: any

  #### Returns any[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getCone](foundry.grid.BaseGrid.md#getcone)

### getDirectPath

* getDirectPath(  
  Â Â Â Â waypoints: any,  
  ): ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  #### Parameters

  + waypoints: any

  #### Returns ({ i: any; j: any; k: any } | { i: any; j: any; k?: undefined })[]

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getDirectPath](foundry.grid.BaseGrid.md#getdirectpath)

### getEllipse

* getEllipse(  
  Â Â Â Â \_\_namedParameters: { x: any; y: any },  
  Â Â Â Â radiusX: any,  
  Â Â Â Â radiusY: any,  
  Â Â Â Â rotation: any,  
  ): any[]

  #### Parameters

  + \_\_namedParameters: { x: any; y: any }
  + radiusX: any
  + radiusY: any
  + rotation: any

  #### Returns any[]

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

* getShape(): never[]

  #### Returns never[]

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
  Â Â Â Â | { elevation: any; x: any; y: any }  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }

  #### Parameters

  + point: any
  + direction: any

  #### Returns { elevation: any; x: any; y: any } | { elevation?: undefined; x: any; y: any }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getShiftedPoint](foundry.grid.BaseGrid.md#getshiftedpoint)

### getSnappedPoint

* getSnappedPoint(  
  Â Â Â Â \_\_namedParameters: { elevation: any; x: any; y: any },  
  Â Â Â Â behavior: any,  
  ):  
  Â Â Â Â | { elevation: any; x: any; y: any }  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }

  #### Parameters

  + \_\_namedParameters: { elevation: any; x: any; y: any }
  + behavior: any

  #### Returns { elevation: any; x: any; y: any } | { elevation?: undefined; x: any; y: any }

  Overrides [BaseGrid](foundry.grid.BaseGrid.md).[getSnappedPoint](foundry.grid.BaseGrid.md#getsnappedpoint)

### getTopLeftPoint

* getTopLeftPoint(  
  Â Â Â Â coords: any,  
  ):  
  Â Â Â Â | { elevation?: undefined; x: any; y: any }  
  Â Â Â Â | { elevation: any; x: any; y: any }

  #### Parameters

  + coords: any

  #### Returns { elevation?: undefined; x: any; y: any } | { elevation: any; x: any; y: any }

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

* getVertices(coords: any): never[]

  #### Parameters

  + coords: any

  #### Returns never[]

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