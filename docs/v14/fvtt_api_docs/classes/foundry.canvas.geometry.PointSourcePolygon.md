---
title: "PointSourcePolygon | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.PointSourcePolygon.html"
category: "classes"
---

# Class PointSourcePolygon<PolygonConfig>

An extension of Polygon which is used to represent the line of sight for a point source.

#### Template: PolygonConfig

#### Type Parameters

* PolygonConfig extends [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md) = [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.geometry.PointSourcePolygon))

* Polygon
  + PointSourcePolygon
    - [ClockwiseSweepPolygon](foundry.canvas.geometry.ClockwiseSweepPolygon.md)

##### Index

### Properties

[bounds](#bounds)
[config](#config)
[origin](#origin)
[surfaceExposure](#surfaceexposure)

### Accessors

[isConstrained](#isconstrained)
[level](#level)
[scene](#scene)

### Methods

[applyConstraint](#applyconstraint)
[clone](#clone)
[compute](#compute)
[contains](#contains)
[initialize](#initialize)
[isCompleteCircle](#iscompletecircle)
[visualize](#visualize)
[\_compute](#_compute)
[\_constrainBoundaryShapes](#_constrainboundaryshapes)
[\_testCollision](#_testcollision)
[applyThresholdAttenuation](#applythresholdattenuation)
[benchmark](#benchmark)
[create](#create)
[testCollision](#testcollision)

## Properties

### bounds

bounds: Rectangle = ...

The rectangular bounds of this polygon

### config

config: [PolygonConfig](#polygonconfig) = {}

The configuration of this polygon.

### origin

origin: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

The origin point of the source polygon.

### surfaceExposure

surfaceExposure: any

The area of surfaces that is visible to this polygon, if any.

## Accessors

### isConstrained

* get isConstrained(): boolean

  An indicator for whether this polygon is constrained by some boundary shape?

  #### Returns boolean

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level the polygon is computed it.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

  The level the polygon is computed it.

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

## Methods

### applyConstraint

* applyConstraint(  
  Â Â Â Â constraint: Rectangle | Polygon | Circle,  
  Â Â Â Â intersectionOptions?: object,  
  ): PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Apply a constraining boundary shape to an existing PointSourcePolygon.
  Return a new instance of the polygon with the constraint applied.
  The new instance is only a "shallow clone", as it shares references to component properties with the original.

  #### Parameters

  + constraint: Rectangle | Polygon | Circle

    The constraining boundary shape
  + `Optional`intersectionOptions: object = {}

    Options passed to the shape intersection method

  #### Returns PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  A new constrained polygon

### clone

* clone(): PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Create a clone of this polygon.
  This overrides the default PIXI.Polygon#clone behavior.

  #### Returns PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  A cloned instance

### compute

* compute(): PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Compute the polygon using the origin and configuration options.

  #### Returns PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The computed polygon

### contains

* contains(x: any, y: any): any

  #### Parameters

  + x: any
  + y: any

  #### Returns any

  #### Inherit Doc

### initialize

* initialize(origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md), config: [PolygonConfig](#polygonconfig)): void

  Customize the provided configuration object for this polygon type.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The provided polygon origin. The elevation defaults to
    the elevation of config.source if passed and otherwise 0.
  + config: [PolygonConfig](#polygonconfig)

    The provided configuration object

  #### Returns void

### isCompleteCircle

* isCompleteCircle(): boolean

  Determine if the shape is a complete circle.
  The config object must have an angle and a radius properties.

  #### Returns boolean

### visualize

* visualize(): Graphics | undefined

  Visualize the polygon, displaying its computed area and applied boundary shapes.

  #### Returns Graphics | undefined

  The rendered debugging shape

### `Protected`\_compute

* \_compute(): void

  `Protected`

  Perform the implementation-specific computation

  #### Returns void

### `Protected`\_constrainBoundaryShapes

* \_constrainBoundaryShapes(): void

  `Protected`

  Constrain polygon points by applying boundary shapes.

  #### Returns void

### `Protected` `Abstract`\_testCollision

* \_testCollision(  
  Â Â Â Â ray: [Ray](foundry.canvas.geometry.Ray.md),  
  Â Â Â Â mode: "any" | "closest" | "all",  
  Â Â Â Â destination: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â tMin: number,  
  Â Â Â Â tMax: number,  
  ): any

  `Protected`

  Determine the set of collisions which occurs for a Ray.

  #### Parameters

  + ray: [Ray](foundry.canvas.geometry.Ray.md)

    The Ray to test
  + mode: "any" | "closest" | "all"

    The collision mode being tested
  + destination: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The destination
  + tMin: number

    Intersections of the ray and an edge with t-value at most
    `tMin` are not considered collisions. Default: `0`.
  + tMax: number

    Intersections of the ray and an edge with t-value greater than
    `tMax` are not considered collisions. Default: `1`.

  #### Returns any

  The collision test result

### `Static`applyThresholdAttenuation

* applyThresholdAttenuation(  
  Â Â Â Â polygon: PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>,  
  ): PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Augment a PointSourcePolygon by adding additional coverage for shapes permitted by threshold walls.

  #### Parameters

  + polygon: PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

    The computed polygon

  #### Returns PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The augmented polygon

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

### `Static`create

* create(  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â config?: any,  
  ): PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  Compute the polygon given a point origin and radius

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The origin source point. The elevation defaults to
    the elevation of config.source if passed and otherwise 0.
  + `Optional`config: any = {}

    Configuration options which customize the polygon computation

  #### Returns PointSourcePolygon<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The computed polygon instance

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