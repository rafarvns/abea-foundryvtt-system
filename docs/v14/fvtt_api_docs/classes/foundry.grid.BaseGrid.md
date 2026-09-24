---
title: "BaseGrid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.grid.BaseGrid.html"
category: "classes"
---

# Class BaseGrid<Coordinates2D, Coordinates3D>`Abstract`

The base grid class.

#### Template: Coordinates2D

#### Template: Coordinates3D

#### Type Parameters

* Coordinates2D = [GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md)
* Coordinates3D = [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.grid.BaseGrid))

* BaseGrid
  + [GridlessGrid](foundry.grid.GridlessGrid.md)
  + [HexagonalGrid](foundry.grid.HexagonalGrid.md)
  + [SquareGrid](foundry.grid.SquareGrid.md)

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
[\_measurePath](#_measurepath)

## Constructors

### constructor

* new BaseGrid<  
  Â Â Â Â [Coordinates2D](#constructorbasegridcoordinates2d) = [GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md),  
  Â Â Â Â [Coordinates3D](#constructorbasegridcoordinates3d) = [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md),  
  >(  
  Â Â Â Â config: [GridConfiguration](../interfaces/foundry.grid.types.GridConfiguration.md),  
  ): BaseGrid<[Coordinates2D](#coordinates2d), [Coordinates3D](#coordinates3d)>

  The base grid constructor.

  #### Type Parameters

  + Coordinates2D = [GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md)
  + Coordinates3D = [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)

  #### Parameters

  + config: [GridConfiguration](../interfaces/foundry.grid.types.GridConfiguration.md)

    The grid configuration

  #### Returns BaseGrid<[Coordinates2D](#coordinates2d), [Coordinates3D](#coordinates3d)>

## Properties

### `Readonly`alpha

alpha: number

The opacity of the grid.

### `Readonly`color

color: [Color](foundry.utils.Color.md)

The color of the grid.

### `Readonly`distance

distance: number

The distance of a grid space in units.

### `Readonly`size

size: number

The size of a grid space in pixels.

### `Readonly`sizeX

sizeX: number

The width of a grid space in pixels.

### `Readonly`sizeY

sizeY: number

The height of a grid space in pixels.

### `Readonly`style

style: string

The style of the grid.

### `Readonly`thickness

thickness: number

The thickness of the grid.

### `Readonly`type

type: [GridType](../types/CONST.GridType.md)

The grid type (see [CONST.GRID\_TYPES](../variables/CONST.GRID_TYPES.md)).

### `Readonly`units

units: string

The distance units used in this grid.

## Accessors

### isGridless

* get isGridless(): boolean

  Is this a gridless grid?

  #### Returns boolean

### isHexagonal

* get isHexagonal(): boolean

  Is this a hexagonal grid?

  #### Returns boolean

### isSquare

* get isSquare(): boolean

  Is this a square grid?

  #### Returns boolean

## Methods

### `Abstract`calculateDimensions

* calculateDimensions(  
  Â Â Â Â sceneWidth: number,  
  Â Â Â Â sceneHeight: number,  
  Â Â Â Â padding: number,  
  ): {  
  Â Â Â Â columns: number;  
  Â Â Â Â height: number;  
  Â Â Â Â rows: number;  
  Â Â Â Â width: number;  
  Â Â Â Â x: number;  
  Â Â Â Â y: number;  
  }

  Calculate the total size of the canvas with padding applied, as well as the top-left coordinates of the inner
  rectangle that houses the scene.

  #### Parameters

  + sceneWidth: number

    The width of the scene.
  + sceneHeight: number

    The height of the scene.
  + padding: number

    The percentage of padding.

  #### Returns { Â Â Â Â columns: number; Â Â Â Â height: number; Â Â Â Â rows: number; Â Â Â Â width: number; Â Â Â Â x: number; Â Â Â Â y: number; }

### `Abstract`getAdjacentOffsets

* getAdjacentOffsets(coords: [Coordinates2D](#coordinates2d)): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  Returns the offsets of the grid spaces adjacent to the one corresponding to the given coordinates.
  Returns always an empty array in gridless grids.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  The adjacent offsets
* getAdjacentOffsets(coords: [Coordinates3D](#coordinates3d)): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  #### Parameters

  + coords: [Coordinates3D](#coordinates3d)

    The coordinates

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  The adjacent offsets

### `Abstract`getCenterPoint

* getCenterPoint(coords: [Coordinates2D](#coordinates2d)): [Point](../interfaces/foundry.types.Point.md)

  Returns the center point of the grid space corresponding to the given coordinates.
  If given a point, the center point of the grid space that contains it is returned.
  The center point lies in the plane of the bottom face of the 3D grid space.
  In gridless grids a point with the same coordinates as the given point is returned.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The center point
* getCenterPoint(coords: [Coordinates3D](#coordinates3d)): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + coords: [Coordinates3D](#coordinates3d)

    The coordinates

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The center point

### `Abstract`getCircle

* getCircle(center: [Point](../interfaces/foundry.types.Point.md), radius: number): [Point](../interfaces/foundry.types.Point.md)[]

  Get the circle polygon given the radius in grid units for this grid.
  The points of the polygon are returned ordered in positive orientation.
  In gridless grids an approximation of the true circle with a deviation of less than 0.25 pixels is returned.

  #### Parameters

  + center: [Point](../interfaces/foundry.types.Point.md)

    The center point of the circle.
  + radius: number

    The radius in grid units.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the circle polygon.

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

### `Abstract`getDirectPath

* getDirectPath(waypoints: [Coordinates2D](#coordinates2d)[]): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  Returns the sequence of grid offsets of a shortest, direct path passing through the given waypoints.

  #### Parameters

  + waypoints: [Coordinates2D](#coordinates2d)[]

    The waypoints the path must pass through

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)[]

  The sequence of grid offsets of a shortest, direct path
* getDirectPath(waypoints: [Coordinates3D](#coordinates3d)[]): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  #### Parameters

  + waypoints: [Coordinates3D](#coordinates3d)[]

    The waypoints the path must pass through

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)[]

  The sequence of grid offsets of a shortest, direct path

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

### `Abstract`getOffset

* getOffset(coords: [Coordinates2D](#coordinates2d)): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  Returns the offset of the grid space corresponding to the given coordinates.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  The offset
* getOffset(coords: [Coordinates3D](#coordinates3d)): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  #### Parameters

  + coords: [Coordinates3D](#coordinates3d)

    The coordinates

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  The offset

### `Abstract`getOffsetRange

* getOffsetRange(  
  Â Â Â Â bounds: [Rectangle](../interfaces/foundry.types.Rectangle.md),  
  ): [i0: number, j0: number, i1: number, j1: number]

  Returns the smallest possible range containing the offsets of all grid spaces that intersect the given bounds.
  If the bounds are empty (nonpositive width or height), then the offset range is empty.

  #### Parameters

  + bounds: [Rectangle](../interfaces/foundry.types.Rectangle.md)

    The bounds

  #### Returns [i0: number, j0: number, i1: number, j1: number]

  The offset range

  #### Example

  ```
  const [i0, j0, i1, j1] = grid.getOffsetRange(bounds);  
  for ( let i = i0; i < i1; i++ ) {  
    for ( let j = j0; j < j1; j++ ) {  
      const offset = {i, j};  
      // ...  
    }  
  }
  Copy
  ```

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

### `Abstract`getShape

* getShape(): [Point](../interfaces/foundry.types.Point.md)[]

  Returns the points of the grid space shape relative to the center point.
  The points are returned in the same order as in [BaseGrid#getVertices](#getvertices).
  In gridless grids an empty array is returned.

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The points of the polygon

### `Abstract`getShiftedOffset

* getShiftedOffset(  
  Â Â Â Â coords: [Coordinates2D](#coordinates2d),  
  Â Â Â Â direction: MOVEMENT\_DIRECTIONS,  
  ): [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  Returns the offset of the grid space corresponding to the given coordinates
  shifted by one grid space in the given direction. The k-coordinate is not changed.
  In square and hexagonal grids with illegal diagonals the offset of the given coordinates is returned
  if the direction is diagonal.
  In gridless grids the point is by the grid size.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates
  + direction: MOVEMENT\_DIRECTIONS

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

  The offset
* getShiftedOffset(  
  Â Â Â Â coords: [Coordinates3D](#coordinates3d),  
  Â Â Â Â direction: MOVEMENT\_DIRECTIONS,  
  ): [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  #### Parameters

  + coords: [Coordinates3D](#coordinates3d)

    The coordinates
  + direction: MOVEMENT\_DIRECTIONS

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)

  The offset

### `Abstract`getShiftedPoint

* getShiftedPoint(point: [Point](../interfaces/foundry.types.Point.md), direction: MOVEMENT\_DIRECTIONS): [Point](../interfaces/foundry.types.Point.md)

  Returns the point shifted by the difference between the grid space corresponding to the given coordinates
  and the shifted grid space in the given direction. The z-coordinate is not changed.
  In square and hexagonal grids with illegal diagonals the point is not shifted if the direction is diagonal.
  In gridless grids the point coordinates are shifted by the grid size.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be shifted
  + direction: MOVEMENT\_DIRECTIONS

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The shifted point
* getShiftedPoint(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â direction: MOVEMENT\_DIRECTIONS,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point that is to be shifted
  + direction: MOVEMENT\_DIRECTIONS

    The direction (see [CONST.MOVEMENT\_DIRECTIONS](../variables/CONST.MOVEMENT_DIRECTIONS.md))

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The shifted point

### `Abstract`getSnappedPoint

* getSnappedPoint(point: [Point](../interfaces/foundry.types.Point.md), behavior: [GridSnappingBehavior](../interfaces/foundry.grid.types.GridSnappingBehavior.md)): [Point](../interfaces/foundry.types.Point.md)

  Snaps the given point to the grid.
  In square and hexagonal grids the z-coordinate of the point is rounded to the nearest multiple of the grid size.
  In gridless grids a point with the same coordinates as the given point is returned regardless of the
  snapping behavior.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be snapped
  + behavior: [GridSnappingBehavior](../interfaces/foundry.grid.types.GridSnappingBehavior.md)

    The snapping behavior

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The snapped point
* getSnappedPoint(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â behavior: [GridSnappingBehavior](../interfaces/foundry.grid.types.GridSnappingBehavior.md),  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point that is to be snapped
  + behavior: [GridSnappingBehavior](../interfaces/foundry.grid.types.GridSnappingBehavior.md)

    The snapping behavior

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The snapped point

### `Abstract`getTopLeftPoint

* getTopLeftPoint(coords: [Coordinates2D](#coordinates2d)): [Point](../interfaces/foundry.types.Point.md)

  Returns the top-left point of the grid space bounds corresponding to the given coordinates.
  If given a point, the top-left point of the grid space bounds that contains it is returned.
  The top-left point lies in the plane of the bottom face of the 3D grid space.
  In gridless grids a point with the same coordinates as the given point is returned.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The top-left point
* getTopLeftPoint(coords: [Coordinates3D](#coordinates3d)): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + coords: [Coordinates3D](#coordinates3d)

    The coordinates

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The top-left point

### `Abstract`getTranslatedPoint

* getTranslatedPoint(point: [Point](../interfaces/foundry.types.Point.md), direction: number, distance: number): [Point](../interfaces/foundry.types.Point.md)

  Get the point translated in a direction by a distance.
  The z-coordinate is not changed.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be translated
  + direction: number

    The angle of direction in degrees
  + distance: number

    The distance in grid units

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The translated point
* getTranslatedPoint(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â direction: number,  
  Â Â Â Â distance: number,  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point that is to be translated
  + direction: number

    The angle of direction in degrees
  + distance: number

    The distance in grid units

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

  The translated point

### `Abstract`getVertices

* getVertices(coords: [Coordinates2D](#coordinates2d)): [Point](../interfaces/foundry.types.Point.md)[]

  Returns the vertices of the grid space corresponding to the given coordinates.
  The vertices are returned ordered in positive orientation with the first vertex
  being the top-left vertex in square grids, the top vertex in row-oriented
  hexagonal grids, and the left vertex in column-oriented hexagonal grids.
  In gridless grids an empty array is returned.

  #### Parameters

  + coords: [Coordinates2D](#coordinates2d)

    The coordinates

  #### Returns [Point](../interfaces/foundry.types.Point.md)[]

  The vertices

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
  Â Â Â Â Â Â Â Â [Coordinates2D](#coordinates2d) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](#measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#measurepathsegmentdata)> },  
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

  + waypoints: ([Coordinates2D](#coordinates2d) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](#measurepathsegmentdata))[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  The measurements a shortest, direct path through the given waypoints
* measurePath(  
  Â Â Â Â waypoints: (  
  Â Â Â Â Â Â Â Â [Coordinates3D](#coordinates3d) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](#measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#measurepathsegmentdata)> },  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  #### Parameters

  + waypoints: ([Coordinates3D](#coordinates3d) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](#measurepathsegmentdata))[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled along the direct path)

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  The measurements a shortest, direct path through the given waypoints

### `Abstract`testAdjacency

* testAdjacency(coords1: [Coordinates2D](#coordinates2d), coords2: [Coordinates2D](#coordinates2d)): boolean

  Returns true if the grid spaces corresponding to the given coordinates are adjacent to each other.
  In square and hexagonal grids with illegal diagonals the diagonally neighboring grid spaces are not adjacent.
  Returns always false in gridless grids.

  #### Parameters

  + coords1: [Coordinates2D](#coordinates2d)

    The first coordinates
  + coords2: [Coordinates2D](#coordinates2d)

    The second coordinates

  #### Returns boolean
* testAdjacency(coords1: [Coordinates3D](#coordinates3d), coords2: [Coordinates3D](#coordinates3d)): boolean

  #### Parameters

  + coords1: [Coordinates3D](#coordinates3d)

    The first coordinates
  + coords2: [Coordinates3D](#coordinates3d)

    The second coordinates

  #### Returns boolean

### `Protected` `Abstract`\_measurePath

* \_measurePath<  
  Â Â Â Â [SegmentData](#_measurepathsegmentdata) extends  
  Â Â Â Â Â Â Â Â {  
  Â Â Â Â Â Â Â Â Â Â Â Â cost: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â elevation: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â i: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â j: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â k: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â measure: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â q: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â r: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â s: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â x: never;  
  Â Â Â Â Â Â Â Â Â Â Â Â y: never;  
  Â Â Â Â Â Â Â Â },  
  >(  
  Â Â Â Â waypoints: (  
  Â Â Â Â Â Â Â Â [Coordinates2D](#coordinates2d) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](#_measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#_measurepathsegmentdata)> },  
  Â Â Â Â result: [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md),  
  ): any

  Measures the path and writes the segments measurements into the result.
  The waypoint measurements are filled in by [BaseGrid#measurePath](#measurepath).
  Called by [BaseGrid#measurePath](#measurepath).

  #### Type Parameters

  + SegmentData extends {  
    Â Â Â Â cost: never;  
    Â Â Â Â elevation: never;  
    Â Â Â Â i: never;  
    Â Â Â Â j: never;  
    Â Â Â Â k: never;  
    Â Â Â Â measure: never;  
    Â Â Â Â q: never;  
    Â Â Â Â r: never;  
    Â Â Â Â s: never;  
    Â Â Â Â x: never;  
    Â Â Â Â y: never;  
    }

  #### Parameters

  + waypoints: ([Coordinates2D](#coordinates2d) & Partial<[GridMeasurePathWaypointData2D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md)> & [SegmentData](#_measurepathsegmentdata))[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#_measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction2D](../types/foundry.grid.types.GridMeasurePathCostFunction2D.md)<[SegmentData](#_measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled)
  + result: [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

    The measurement result that the measurements need to be written to

  #### Returns any
* \_measurePath(  
  Â Â Â Â waypoints: (  
  Â Â Â Â Â Â Â Â [Coordinates3D](#coordinates3d) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](#_measurepathsegmentdata)  
  Â Â Â Â )[],  
  Â Â Â Â options?: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#_measurepathsegmentdata)> },  
  Â Â Â Â result: [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md),  
  ): any

  `Protected`

  #### Parameters

  + waypoints: ([Coordinates3D](#coordinates3d) & Partial<[GridMeasurePathWaypointData3D](../interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md)> & [SegmentData](#_measurepathsegmentdata))[]

    The waypoints the path must pass through
  + `Optional`options: { cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#_measurepathsegmentdata)> }

    Additional measurement options

    - ##### `Optional`cost?: [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<[SegmentData](#_measurepathsegmentdata)>

      The function that returns the cost
      for a given move between grid spaces (default is the distance travelled)
  + result: [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

    The measurement result that the measurements need to be written to

  #### Returns any