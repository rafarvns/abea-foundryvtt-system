---
title: "Edge | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.edges.Edge.html"
category: "classes"
---

# Class Edge

A data structure used to represent potential edges used by the ClockwiseSweepPolygon.
Edges are not polygon-specific, meaning they can be reused across many polygon instances.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[a](#a)
[b](#b)
[bounds](#bounds)
[darkness](#darkness)
[direction](#direction)
[id](#id)
[intersections](#intersections)
[light](#light)
[move](#move)
[nw](#nw)
[object](#object)
[se](#se)
[sight](#sight)
[sound](#sound)
[threshold](#threshold)
[vertexA](#vertexa)
[vertexB](#vertexb)

### Methods

[applyThreshold](#applythreshold)
[clone](#clone)
[getIntersection](#getintersection)
[isLimited](#islimited)
[orientPoint](#orientpoint)
[recordIntersections](#recordintersections)
[removeIntersections](#removeintersections)
[identifyEdgeIntersections](#identifyedgeintersections)

## Constructors

### constructor

* new Edge(a: [Point](../interfaces/foundry.types.Point.md), b: [Point](../interfaces/foundry.types.Point.md), options?: [EdgeCreationOptions](../interfaces/foundry.canvas.geometry.types.EdgeCreationOptions.md)): Edge

  Construct an Edge by providing the following information.

  #### Parameters

  + a: [Point](../interfaces/foundry.types.Point.md)

    The first endpoint of the edge
  + b: [Point](../interfaces/foundry.types.Point.md)

    The second endpoint of the edge
  + `Optional`options: [EdgeCreationOptions](../interfaces/foundry.canvas.geometry.types.EdgeCreationOptions.md) = {}

    Additional options which describe the edge

  #### Returns Edge

## Properties

### a

a: Point

The first endpoint of the edge.

### b

b: Point

The second endpoint of the edge.

### bounds

bounds: Rectangle

The rectangular bounds of the edge. Used by the quadtree.

### darkness

darkness: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts darkness.

### direction

direction: [EdgeDirection](../types/CONST.EdgeDirection.md)

The direction of effect for the edge.

### id

id: string | undefined

A string used to uniquely identify this edge, if any.

### intersections

intersections: {  
Â Â Â Â [level: string]: { edge: Edge; intersection: [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) }[];  
} = {}

Record other edges which this one intersects with by level.

### light

light: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts light.

### move

move: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts movement.

### nw

nw: [Point](../interfaces/foundry.types.Point.md)

The endpoint of the edge which is oriented towards the top-left.

### object

object:  
Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
Â Â Â Â | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)  
Â Â Â Â | undefined

The Document/PlaceableObject the edge belongs to, if any.

### se

se: [Point](../interfaces/foundry.types.Point.md)

The endpoint of the edge which is oriented towards the bottom-right.

### sight

sight: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts sight.

### sound

sound: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts sound.

### threshold

threshold: [EdgeThresholdData](../interfaces/foundry.canvas.geometry.types.EdgeThresholdData.md) | null

Specialized threshold data for this edge.

### vertexA

vertexA: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md) | undefined

A PolygonVertex instance.
Used as part of ClockwiseSweepPolygon computation.

### vertexB

vertexB: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md) | undefined

A PolygonVertex instance.
Used as part of ClockwiseSweepPolygon computation.

## Methods

### applyThreshold

* applyThreshold(  
  Â Â Â Â sourceType: string,  
  Â Â Â Â sourceOrigin: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â externalRadius?: number,  
  ): boolean

  Test whether to apply a proximity threshold to this edge.
  If the proximity threshold is met, this edge excluded from perception calculations.

  #### Parameters

  + sourceType: string

    Sense type for the source
  + sourceOrigin: [Point](../interfaces/foundry.types.Point.md)

    The origin or position of the source on the canvas
  + `Optional`externalRadius: number = 0

    The external radius of the source

  #### Returns boolean

  True if the edge has a threshold greater than 0 for the source type,
  and the source type is within that distance.

### clone

* clone(): Edge

  Create a copy of the Edge which can be safely mutated.

  #### Returns Edge

### getIntersection

* getIntersection(other: Edge): void | [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md)

  Get an intersection point between this Edge and another.

  #### Parameters

  + other: Edge

  #### Returns void | [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md)

### isLimited

* isLimited(type: "darkness" | "light" | "sight" | "sound" | "move"): boolean

  Is this edge limited for a particular type?

  #### Parameters

  + type: "darkness" | "light" | "sight" | "sound" | "move"

  #### Returns boolean

### orientPoint

* orientPoint(point: [Point](../interfaces/foundry.types.Point.md)): number

  Determine the orientation of this Edge with respect to a reference point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    Some reference point, relative to which orientation is determined

  #### Returns number

  An orientation in CONST.EDGE\_DIRECTIONS which indicates whether the Point is left,
  right, or collinear (both) with the Edge

### recordIntersections

* recordIntersections(other: Edge, level: string): void

  Record the intersections between two edges.

  #### Parameters

  + other: Edge

    Another edge to test and record
  + level: string

    The ID of the Level the edges are in

  #### Returns void

### removeIntersections

* removeIntersections(level: string): void

  Remove intersections of this edge with all other edges.

  #### Parameters

  + level: string

    The ID of the Level the edges are in

  #### Returns void

### `Static`identifyEdgeIntersections

* identifyEdgeIntersections(edges: Iterable<Edge, any, any>, level: string): void

  Identify intersections between a provided iterable of edges.

  #### Parameters

  + edges: Iterable<Edge, any, any>

    An iterable of edges
  + level: string

    The ID of the Level the edges are in

  #### Returns void