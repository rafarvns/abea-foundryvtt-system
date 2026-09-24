---
title: "ClockwiseSweepPolygon | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.ClockwiseSweepPolygon.html"
category: "classes"
---

# Class ClockwiseSweepPolygon

A PointSourcePolygon implementation that uses CCW (counter-clockwise) geometry orientation.
Sweep around the origin, accumulating collision points based on the set of active walls.
This algorithm was created with valuable contributions from <https://github.com/caewok>

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.geometry.ClockwiseSweepPolygon))

* [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)
  + ClockwiseSweepPolygon

##### Index

### Properties

[bounds](#bounds)
[config](#config)
[edges](#edges)
[origin](#origin)
[rays](#rays)
[surfaceExposure](#surfaceexposure)
[vertices](#vertices)
[\_edgeTypes](#_edgetypes)
[\_rayDistance2](#_raydistance2)

### Accessors

[isConstrained](#isconstrained)
[level](#level)
[scene](#scene)
[useInnerBounds](#useinnerbounds)

### Methods

[\_compute](#_compute)
[\_testCollision](#_testcollision)
[addPoint](#addpoint)
[applyConstraint](#applyconstraint)
[clone](#clone)
[compute](#compute)
[contains](#contains)
[initialize](#initialize)
[isCompleteCircle](#iscompletecircle)
[visualize](#visualize)
[\_addInternalEdgeCollisions](#_addinternaledgecollisions)
[\_constrainBoundaryShapes](#_constrainboundaryshapes)
[\_defineBoundingBox](#_defineboundingbox)
[\_determineEdgeTypes](#_determineedgetypes)
[\_determineSweepResult](#_determinesweepresult)
[\_executeSweep](#_executesweep)
[\_identifyEdges](#_identifyedges)
[\_identifyIntersections](#_identifyintersections)
[\_identifyVertices](#_identifyvertices)
[\_initializeActiveEdges](#_initializeactiveedges)
[\_isVertexBehindActiveEdges](#_isvertexbehindactiveedges)
[\_sortVertices](#_sortvertices)
[\_switchEdge](#_switchedge)
[\_testEdgeInclusion](#_testedgeinclusion)
[\_visualizeCollision](#_visualizecollision)
[applyThresholdAttenuation](#applythresholdattenuation)
[benchmark](#benchmark)
[create](#create)
[testCollision](#testcollision)

## Properties

### bounds

bounds: Rectangle = ...

The rectangular bounds of this polygon

Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[bounds](foundry.canvas.geometry.PointSourcePolygon.md#bounds)

### config

config: [ClockwiseSweepPolygonConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepPolygonConfig.md) = {}

The configuration of this polygon.

Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[config](foundry.canvas.geometry.PointSourcePolygon.md#config)

### edges

edges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md) = ...

The set of edges which define potential boundaries of the polygon

### origin

origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

The origin point of the source polygon.

Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[origin](foundry.canvas.geometry.PointSourcePolygon.md#origin)

### rays

rays: Ray[] = []

A collection of rays which are fired at vertices

### surfaceExposure

surfaceExposure: any

The area of surfaces that is visible to this polygon, if any.

Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[surfaceExposure](foundry.canvas.geometry.PointSourcePolygon.md#surfaceexposure)

### vertices

vertices: [VertexMap](../types/foundry.canvas.geometry.types.VertexMap.md) = ...

A mapping of vertices which define potential collision points

### `Protected`\_edgeTypes

\_edgeTypes: Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), [ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>

The edge types.

### `Protected`\_rayDistance2

\_rayDistance2: number

The squared maximum distance of a ray that is needed for this Scene.

## Accessors

### isConstrained

* get isConstrained(): boolean

  An indicator for whether this polygon is constrained by some boundary shape?

  #### Returns boolean

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[isConstrained](foundry.canvas.geometry.PointSourcePolygon.md#isconstrained)

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level the polygon is computed it.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[level](foundry.canvas.geometry.PointSourcePolygon.md#level)

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

  The level the polygon is computed it.

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[scene](foundry.canvas.geometry.PointSourcePolygon.md#scene)

### useInnerBounds

* get useInnerBounds(): boolean

  Is this polygon using inner bounds?

  #### Returns boolean

## Methods

### \_compute

* \_compute(): void

  Perform the implementation-specific computation

  #### Returns void

  Overrides [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[\_compute](foundry.canvas.geometry.PointSourcePolygon.md#_compute)

### \_testCollision

* \_testCollision(ray: any, mode: any, destination: any, tMin: any, tMax: any): any

  #### Parameters

  + ray: any
  + mode: any
  + destination: any
  + tMin: any
  + tMax: any

  #### Returns any

  Overrides [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[\_testCollision](foundry.canvas.geometry.PointSourcePolygon.md#_testcollision)

### addPoint

* addPoint(\_\_namedParameters: { x: any; y: any }): ClockwiseSweepPolygon

  This function has been adapted from Clipper's CleanPolygon function.
  When adding a new point to the polygon, check for collinearity with prior points to cull unnecessary points.
  This also removes spikes where we traverse points (a, b, a).
  We also enforce a minimum distance between two points, or a minimum perpendicular distance between three almost
  collinear points.

  #### Parameters

  + \_\_namedParameters: { x: any; y: any }

  #### Returns ClockwiseSweepPolygon

### applyConstraint

* applyConstraint(  
  Â Â Â Â constraint: Rectangle | Polygon | Circle,  
  Â Â Â Â intersectionOptions?: object,  
  ): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Apply a constraining boundary shape to an existing PointSourcePolygon.
  Return a new instance of the polygon with the constraint applied.
  The new instance is only a "shallow clone", as it shares references to component properties with the original.

  #### Parameters

  + constraint: Rectangle | Polygon | Circle

    The constraining boundary shape
  + `Optional`intersectionOptions: object = {}

    Options passed to the shape intersection method

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  A new constrained polygon

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[applyConstraint](foundry.canvas.geometry.PointSourcePolygon.md#applyconstraint)

### clone

* clone(): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Create a clone of this polygon.
  This overrides the default PIXI.Polygon#clone behavior.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  A cloned instance

  Overrides [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[clone](foundry.canvas.geometry.PointSourcePolygon.md#clone)

### compute

* compute(): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Compute the polygon using the origin and configuration options.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The computed polygon

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[compute](foundry.canvas.geometry.PointSourcePolygon.md#compute)

### contains

* contains(x: any, y: any): any

  #### Parameters

  + x: any
  + y: any

  #### Returns any

  #### Inherit Doc

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[contains](foundry.canvas.geometry.PointSourcePolygon.md#contains)

### initialize

* initialize(origin: any, config: any): void

  Customize the provided configuration object for this polygon type.

  #### Parameters

  + origin: any

    The provided polygon origin. The elevation defaults to
    the elevation of config.source if passed and otherwise 0.
  + config: any

    The provided configuration object

  #### Returns void

  Overrides [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[initialize](foundry.canvas.geometry.PointSourcePolygon.md#initialize)

### isCompleteCircle

* isCompleteCircle(): boolean

  Determine if the shape is a complete circle.
  The config object must have an angle and a radius properties.

  #### Returns boolean

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[isCompleteCircle](foundry.canvas.geometry.PointSourcePolygon.md#iscompletecircle)

### visualize

* visualize(): any

  #### Returns any

  Overrides [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[visualize](foundry.canvas.geometry.PointSourcePolygon.md#visualize)

### `Protected`\_addInternalEdgeCollisions

* \_addInternalEdgeCollisions(  
  Â Â Â Â vertices: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[],  
  Â Â Â Â keys: Set<number>,  
  Â Â Â Â ray: Ray,  
  Â Â Â Â activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md),  
  ): void

  `Protected`

  Identify the collision points between an emitted Ray and a set of active edges.

  #### Parameters

  + vertices: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]

    Active vertices
  + keys: Set<number>

    Active vertex keys
  + ray: Ray

    The candidate ray to test
  + activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

    The set of edges to check for collisions against the ray

  #### Returns void

### `Protected`\_constrainBoundaryShapes

* \_constrainBoundaryShapes(): void

  `Protected`

  Constrain polygon points by applying boundary shapes.

  #### Returns void

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[\_constrainBoundaryShapes](foundry.canvas.geometry.PointSourcePolygon.md#_constrainboundaryshapes)

### `Protected`\_defineBoundingBox

* \_defineBoundingBox(): Rectangle

  `Protected`

  Compute the aggregate bounding box which is the intersection of all boundary shapes.
  Round and pad the resulting rectangle by 1 pixel to ensure it always contains the origin.

  #### Returns Rectangle

### `Protected`\_determineEdgeTypes

* \_determineEdgeTypes(  
  Â Â Â Â type: string,  
  Â Â Â Â priority: number,  
  Â Â Â Â config?: object,  
  ): Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), [ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>

  `Protected`

  Determine the edge types and their manner of inclusion for this polygon instance.

  #### Parameters

  + type: string
  + priority: number
  + `Optional`config: object = {}

    Optional polygon config which may include deprecated properties

  #### Returns Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), [ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>

### `Protected`\_determineSweepResult

* \_determineSweepResult(  
  Â Â Â Â vertex: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md),  
  Â Â Â Â activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md),  
  Â Â Â Â hasCollinear?: boolean,  
  ): void

  `Protected`

  Determine the result for the sweep at a given vertex

  #### Parameters

  + vertex: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)

    The target vertex
  + activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

    The set of active edges
  + hasCollinear: boolean = false

    Are there collinear vertices behind the target vertex?

  #### Returns void

### `Protected`\_executeSweep

* \_executeSweep(): void

  `Protected`

  Execute the sweep over wall vertices

  #### Returns void

### `Protected`\_identifyEdges

* \_identifyEdges(): void

  `Protected`

  Retrieves the super-set of walls that could potentially apply to this polygon.
  Utilizes a custom collision test and the Quadtree to obtain candidate edges efficiently.

  #### Returns void

### `Protected`\_identifyIntersections

* \_identifyIntersections(edgeMap: Map<string, [Edge](foundry.canvas.geometry.edges.Edge.md)>): void

  `Protected`

  Add additional vertices for intersections between edges.

  #### Parameters

  + edgeMap: Map<string, [Edge](foundry.canvas.geometry.edges.Edge.md)>

  #### Returns void

### `Protected`\_identifyVertices

* \_identifyVertices(): void

  `Protected`

  Consolidate all vertices from identified edges and register them as part of the vertex mapping.

  #### Returns void

### `Protected`\_initializeActiveEdges

* \_initializeActiveEdges(): [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

  `Protected`

  Determine the initial set of active edges as those which intersect with the initial ray

  #### Returns [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

  A set of initially active edges

### `Protected`\_isVertexBehindActiveEdges

* \_isVertexBehindActiveEdges(  
  Â Â Â Â vertex: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md),  
  Â Â Â Â activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md),  
  ): { isBehind: boolean; wasLimited: boolean }

  `Protected`

  Test whether a target vertex is behind some closer active edge.
  If the vertex is to the left of the edge, is must be behind the edge relative to origin.
  If the vertex is collinear with the edge, it should be considered "behind" and ignored.
  We know edge.vertexA is ccw to edge.vertexB because of the logic in \_identifyVertices.

  #### Parameters

  + vertex: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)

    The target vertex
  + activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

    The set of active edges

  #### Returns { isBehind: boolean; wasLimited: boolean }

  Is the target vertex behind some closer edge?

### `Protected`\_sortVertices

* \_sortVertices(): [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]

  `Protected`

  Sort vertices clockwise from the initial ray (due west).

  #### Returns [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]

  The array of sorted vertices

### `Protected`\_switchEdge

* \_switchEdge(result: [CollisionResult](foundry.canvas.geometry.edges.CollisionResult.md), activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)): void

  `Protected`

  Switch to a new active edge.
  Moving from the origin, a collision that first blocks a side must be stored as a polygon point.
  Subsequent collisions blocking that side are ignored. Once both sides are blocked, we are done.

  Collisions that limit a side will block if that side was previously limited.

  If neither side is blocked and the ray internally collides with a non-limited edge, n skip without adding polygon
  endpoints. Sight is unaffected before this edge, and the internal collision can be ignored.

  #### Parameters

  + result: [CollisionResult](foundry.canvas.geometry.edges.CollisionResult.md)

    The pending collision result
  + activeEdges: [EdgeSet](../types/foundry.canvas.geometry.types.EdgeSet.md)

    The set of currently active edges

  #### Returns void

### `Protected`\_testEdgeInclusion

* \_testEdgeInclusion(  
  Â Â Â Â edge: [Edge](foundry.canvas.geometry.edges.Edge.md),  
  Â Â Â Â edgeTypes: Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), [ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>,  
  ): boolean

  `Protected`

  Test whether a wall should be included in the computed polygon for a given origin and type

  #### Parameters

  + edge: [Edge](foundry.canvas.geometry.edges.Edge.md)

    The Edge being considered
  + edgeTypes: Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), [ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>

    Which types of edges are being used?

  #### Returns boolean

  Should the edge be included?

### `Protected`\_visualizeCollision

* \_visualizeCollision(ray: [Ray](foundry.canvas.geometry.Ray.md), collisions: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]): void

  `Protected`

  Visualize the polygon, displaying its computed area, rays, and collision points

  #### Parameters

  + ray: [Ray](foundry.canvas.geometry.Ray.md)
  + collisions: [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]

  #### Returns void

### `Static`applyThresholdAttenuation

* applyThresholdAttenuation(  
  Â Â Â Â polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>,  
  ): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Augment a PointSourcePolygon by adding additional coverage for shapes permitted by threshold walls.

  #### Parameters

  + polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

    The computed polygon

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The augmented polygon

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[applyThresholdAttenuation](foundry.canvas.geometry.PointSourcePolygon.md#applythresholdattenuation)

### `Static`benchmark

* benchmark(  
  Â Â Â Â iterations: number,  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config: PolygonConfig,  
  ): Promise<void>

  Benchmark the performance of polygon computation for this source

  #### Parameters

  + iterations: number

    The number of test iterations to perform
  + origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The origin point to benchmark
  + config: PolygonConfig

    The polygon configuration to benchmark

  #### Returns Promise<void>

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[benchmark](foundry.canvas.geometry.PointSourcePolygon.md#benchmark)

### `Static`create

* create(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config?: any,  
  ): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Compute the polygon given a point origin and radius

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The origin source point. The elevation defaults to
    the elevation of config.source if passed and otherwise 0.
  + `Optional`config: any = {}

    Configuration options which customize the polygon computation

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The computed polygon instance

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[create](foundry.canvas.geometry.PointSourcePolygon.md#create)

### `Static`testCollision

* testCollision(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â destination: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config?: PolygonConfig,  
  ): any

  Test whether a Ray between the origin and destination points would collide with a boundary of this Polygon.
  A valid wall restriction type is compulsory and must be passed into the config options.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    An origin point. The elevation defaults to
    the elevation of config.source if passed and otherwise 0.
  + destination: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    A destination point. The elevation defaults to the elevation
    of the origin.
  + config: PolygonConfig = {}

    The configuration that defines a certain Polygon type

    - ##### mode

      The collision mode to test: "any", "all", or "closest"
    - ##### tMin

      Intersections of the ray and an edge with t-value at most
      `tMin` are not considered collisions. Default: `0`.
    - ##### tMax

      Intersections of the ray and an edge with t-value greater than
      `tMax` are not considered collisions. Default: `1`.

  #### Returns any

  The collision result depends on the mode of the test:
  \* any: returns a boolean for whether any collision occurred
  \* all: returns a sorted array of PolygonVertex instances
  \* closest: returns a PolygonVertex instance or null

  Inherited from [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md).[testCollision](foundry.canvas.geometry.PointSourcePolygon.md#testcollision)