---
title: "WeilerAthertonClipper | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.WeilerAthertonClipper.html"
category: "classes"
---

# Class WeilerAthertonClipper

An implementation of the Weiler Atherton algorithm for clipping polygons.
This currently only handles combinations that will not result in any holes.
Support may be added for holes in the future.

This algorithm is faster than the Clipper library for this task because it relies on the unique properties of the
circle, ellipse, or convex simple clip object.
It is also more precise in that it uses the actual intersection points between the circle/ellipse and polygon,
instead of relying on the polygon approximation of the circle/ellipse to find the intersection points.

For more explanation of the underlying algorithm, see:
[https://en.wikipedia.org/wiki/WeilerâAtherton\_clipping\_algorithm](https://en.wikipedia.org/wiki/Weiler%E2%80%93Atherton_clipping_algorithm)
<https://www.geeksforgeeks.org/weiler-atherton-polygon-clipping-algorithm>
<https://h-educate.in/weiler-atherton-polygon-clipping-algorithm/>

##### Index

### Constructors

[constructor](#constructor)

### Properties

[clipObject](#clipobject)
[config](#config)
[polygon](#polygon)
[CLIP\_TYPES](#clip_types)
[INTERSECTION\_TYPES](#intersection_types)

### Methods

[combine](#combine)
[intersect](#intersect)
[testForEnvelopment](#testforenvelopment)
[union](#union)

## Constructors

### constructor

* new WeilerAthertonClipper(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â clipObject: Rectangle | Circle,  
  Â Â Â Â clipType: number,  
  Â Â Â Â clipOpts: object,  
  ): WeilerAthertonClipper

  Construct a WeilerAthertonClipper instance used to perform the calculation.

  #### Parameters

  + polygon: Polygon

    Polygon to clip
  + clipObject: Rectangle | Circle

    Object used to clip the polygon
  + clipType: number

    Type of clip to use
  + clipOpts: object

    Object passed to the clippingObject methods toPolygon and pointsBetween

  #### Returns WeilerAthertonClipper

## Properties

### clipObject

clipObject: Rectangle | Circle

### config

config: object

Configuration settings

#### Param: config.clipType

One of CLIP\_TYPES

#### Param: config.clipOpts

Object passed to the clippingObject methods
toPolygon and pointsBetween

### polygon

polygon: Polygon

### `Static`CLIP\_TYPES

CLIP\_TYPES: Readonly<{ INTERSECT: 0; UNION: 1 }> = ...

The supported clip types.
Values are equivalent to those in ClipperLib.ClipType.

### `Static`INTERSECTION\_TYPES

INTERSECTION\_TYPES: Readonly<{ IN\_OUT: 1; OUT\_IN: -1; TANGENT: 0 }> = ...

The supported intersection types.

## Methods

### `Static`combine

* combine(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â clipObject: Rectangle | Circle,  
  Â Â Â Â options?: { canMutate?: boolean; clipType: number },  
  ): Polygon[]

  Clip a given clipObject using the Weiler-Atherton algorithm.

  At the moment, this will return a single PIXI.Polygon in the array unless clipType is a union and the polygon
  and clipObject do not overlap, in which case the [polygon, clipObject.toPolygon()] array will be returned.
  If this algorithm is expanded in the future to handle holes, an array of polygons may be returned.

  #### Parameters

  + polygon: Polygon

    Polygon to clip
  + clipObject: Rectangle | Circle

    Object to clip against the polygon
  + options: { canMutate?: boolean; clipType: number } = {}

    Options which configure how the union or intersection is computed

    - ##### `Optional`canMutate?: boolean

      If the WeilerAtherton constructor could mutate or not the subject polygon points

      * Any additional properties in `options` (besides clipType and canMutate)
        are captured by the rest operator (`...clipOpts`) and passed to the WeilerAthertonClipper constructor.
    - ##### clipType: number

      One of [foundry.canvas.geometry.WeilerAthertonClipper.CLIP\_TYPES](#clip_types)

  #### Returns Polygon[]

  Array of polygons and clipObjects

### `Static`intersect

* intersect(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â clipObject: Rectangle | Circle,  
  Â Â Â Â clipOpts?: object,  
  ): Polygon[]

  Intersect a polygon and clipObject using the Weiler Atherton algorithm.

  #### Parameters

  + polygon: Polygon

    Polygon to clip
  + clipObject: Rectangle | Circle

    Object to clip against the polygon
  + clipOpts: object = {}

    Options passed to the clipping object
    methods toPolygon and pointsBetween

  #### Returns Polygon[]

### `Static`testForEnvelopment

* testForEnvelopment(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â clipObject: Rectangle | Circle,  
  Â Â Â Â clipType: Readonly<{ INTERSECT: 0; UNION: 1 }>,  
  Â Â Â Â clipOpts: object,  
  ): Polygon[]

  Test if one shape envelops the other. Assumes the shapes do not intersect.

  1. Polygon is contained within the clip object. Union: clip object; Intersect: polygon
  2. Clip object is contained with polygon. Union: polygon; Intersect: clip object
  3. Polygon and clip object are outside one another. Union: both; Intersect: null

  #### Parameters

  + polygon: Polygon

    Polygon to clip
  + clipObject: Rectangle | Circle

    Object to clip against the polygon
  + clipType: Readonly<{ INTERSECT: 0; UNION: 1 }>

    One of CLIP\_TYPES
  + clipOpts: object

    Clip options which are forwarded to toPolygon methods

  #### Returns Polygon[]

  Returns the polygon, the clipObject.toPolygon(), both, or neither.

### `Static`union

* union(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â clipObject: Rectangle | Circle,  
  Â Â Â Â clipOpts?: object,  
  ): Polygon[]

  Union a polygon and clipObject using the Weiler Atherton algorithm.

  #### Parameters

  + polygon: Polygon

    Polygon to clip
  + clipObject: Rectangle | Circle

    Object to clip against the polygon
  + clipOpts: object = {}

    Options passed to the clipping object
    methods toPolygon and pointsBetween

  #### Returns Polygon[]