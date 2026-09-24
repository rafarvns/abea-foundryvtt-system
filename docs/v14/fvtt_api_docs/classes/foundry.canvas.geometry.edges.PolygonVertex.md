---
title: "PolygonVertex | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.edges.PolygonVertex.html"
category: "classes"
---

# Class PolygonVertex

A specialized point data structure used to represent vertices in the context of the ClockwiseSweepPolygon.
This class is not designed or intended for use outside of that context.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_angle](#_angle)
[\_d2](#_d2)
[\_distance](#_distance)
[\_index](#_index)
[\_intersectionCoordinates](#_intersectioncoordinates)
[\_visited](#_visited)
[ccwEdges](#ccwedges)
[collinearVertices](#collinearvertices)
[cwEdges](#cwedges)
[edges](#edges)
[isBlockingCCW](#isblockingccw)
[isBlockingCW](#isblockingcw)
[isEndpoint](#isendpoint)
[isInternal](#isinternal)
[isLimitingCCW](#islimitingccw)
[isLimitingCW](#islimitingcw)
[restriction](#restriction)

### Accessors

[isLimited](#islimited)

### Methods

[attachEdge](#attachedge)
[equals](#equals)
[fromPoint](#frompoint)
[getKey](#getkey)

## Constructors

### constructor

* new PolygonVertex(  
  Â Â Â Â x: number,  
  Â Â Â Â y: number,  
  Â Â Â Â options?: [PolygonVertexOptions](../interfaces/foundry.PolygonVertexOptions.md),  
  ): PolygonVertex

  Construct a PolygonVertex by providing {x, y} coordinates and vertex options.

  #### Parameters

  + x: number

    The x-coordinate of the vertex
  + y: number

    The y-coordinate of the vertex
  + `Optional`options: [PolygonVertexOptions](../interfaces/foundry.PolygonVertexOptions.md) = {}

    Options which modify vertex context or behavior

  #### Returns PolygonVertex

## Properties

### `Internal`\_angle

\_angle: number | undefined

The angle of the ray from the origin to this vertex.

### `Internal`\_d2

\_d2: number | undefined

The squared distance from a polygon origin to this vertex.

### `Internal`\_distance

\_distance: number | undefined

The distance from a polygon origin to this vertex.

### `Internal`\_index

\_index: number | undefined

The integer index of this vertex in an ordered sweep.

### `Internal`\_intersectionCoordinates

\_intersectionCoordinates: [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | undefined

The line intersection coordinates of the two edges that create this vertex.

### `Internal`\_visited

\_visited: boolean = false

Record whether this PolygonVertex has been visited in the sweep

### ccwEdges

ccwEdges: EdgeSet = ...

The subset of edges which continue counter-clockwise from this vertex.

### collinearVertices

collinearVertices: Set<PolygonVertex> = ...

The set of vertices collinear to this vertex

### cwEdges

cwEdges: EdgeSet = ...

The subset of edges which continue clockwise from this vertex.

### edges

edges: EdgeSet = ...

The set of edges which connect to this vertex.
This set is initially empty and populated later after vertices are de-duplicated.

### isBlockingCCW

isBlockingCCW: boolean

Does this vertex have non-limited edges or 2+ limited edges counterclockwise?

### isBlockingCW

isBlockingCW: boolean

Does this vertex have non-limited edges or 2+ limited edges clockwise?

### isEndpoint

isEndpoint: boolean

Is this vertex an endpoint of one or more edges?

### isInternal

isInternal: boolean = false

Does this vertex result from an internal collision?

### isLimitingCCW

isLimitingCCW: boolean

Does this vertex have a single counterclockwise limiting edge?

### isLimitingCW

isLimitingCW: boolean

Does this vertex have a single clockwise limiting edge?

### restriction

restriction: [EdgeSenseType](../types/CONST.EdgeSenseType.md) = CONST.EDGE\_SENSE\_TYPES.NONE

The maximum restriction imposed by this vertex.

## Accessors

### isLimited

* get isLimited(): boolean

  Is this vertex limited in type?

  #### Returns boolean

## Methods

### attachEdge

* attachEdge(edge: Edge, orientation: number, type: string): void

  Associate an edge with this vertex.

  #### Parameters

  + edge: Edge

    The edge being attached
  + orientation: number

    The orientation of the edge with respect to the origin
  + type: string

    The restriction type of polygon being created

  #### Returns void

### equals

* equals(other: PolygonVertex): boolean

  Is this vertex the same point as some other vertex?

  #### Parameters

  + other: PolygonVertex

    Some other vertex

  #### Returns boolean

  Are they the same point?

### `Static`fromPoint

* fromPoint(point: Point, options?: [PolygonVertexOptions](../interfaces/foundry.PolygonVertexOptions.md)): PolygonVertex

  Construct a PolygonVertex instance from some other Point structure.

  #### Parameters

  + point: Point

    The point
  + `Optional`options: [PolygonVertexOptions](../interfaces/foundry.PolygonVertexOptions.md)

    Additional options that apply to this vertex

  #### Returns PolygonVertex

  The constructed vertex

### `Static`getKey

* getKey(x: number, y: number): number

  Determine the sort key to use for this vertex, arranging points from north-west to south-east.

  #### Parameters

  + x: number

    The x-coordinate
  + y: number

    The y-coordinate

  #### Returns number

  The key used to identify the vertex