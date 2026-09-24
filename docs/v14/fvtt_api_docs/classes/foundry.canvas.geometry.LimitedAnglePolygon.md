---
title: "LimitedAnglePolygon | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.LimitedAnglePolygon.html"
category: "classes"
---

# Class LimitedAnglePolygon

A special class of Polygon which implements a limited angle of emission for a Point Source.
The shape is defined by a point origin, radius, angle, and rotation.
The shape is further customized by a configurable density which informs the approximation.
An optional secondary externalRadius can be provided which adds supplementary visibility outside the primary angle.

#### Hierarchy

* Polygon
  + LimitedAnglePolygon

##### Index

### Properties

[aMax](#amax)
[aMin](#amin)
[angle](#angle)
[density](#density)
[externalBounds](#externalbounds)
[externalRadius](#externalradius)
[origin](#origin)
[radius](#radius)
[rotation](#rotation)

### Methods

[\_includeEdge](#_includeedge)
[pointBetweenRays](#pointbetweenrays)

## Properties

### aMax

aMax: number

The angle of the right (clockwise) edge of the emitted cone in radians.

### aMin

aMin: number

The angle of the left (counter-clockwise) edge of the emitted cone in radians.

### angle

angle: number

The angle of the Polygon in degrees.

### density

density: number

The density of rays which approximate the cone, defined as rays per PI.

### externalBounds

externalBounds: Rectangle

The bounding box of the circle defined by the externalRadius, if any

### externalRadius

externalRadius: number

An optional "external radius" which is included in the polygon for the supplementary area outside the cone.

### origin

origin: Point

The origin point of the Polygon

### radius

radius: number

The radius of the emitted cone.

### rotation

rotation: number

The direction of rotation at the center of the emitted angle in degrees.

## Methods

### \_includeEdge

* \_includeEdge(a: Point, b: Point): boolean

  `Internal`

  Restrict the edges which should be included in a PointSourcePolygon based on this specialized shape.
  We use two tests to jointly keep or reject edges.

  1. If this shape uses an externalRadius, keep edges which collide with the bounding box of that circle.
  2. Keep edges which are contained within or collide with one of the primary angle boundary rays.

  #### Parameters

  + a: Point

    The first edge vertex
  + b: Point

    The second edge vertex

  #### Returns boolean

  Should the edge be included in the PointSourcePolygon computation?

### `Static`pointBetweenRays

* pointBetweenRays(  
  Â Â Â Â point: Point,  
  Â Â Â Â rMin: PolygonRay,  
  Â Â Â Â rMax: PolygonRay,  
  Â Â Â Â angle: number,  
  ): boolean

  Test whether a vertex lies between two boundary rays.
  If the angle is greater than 180, test for points between rMax and rMin (inverse).
  Otherwise, keep vertices that are between the rays directly.

  #### Parameters

  + point: Point

    The candidate point
  + rMin: PolygonRay

    The counter-clockwise bounding ray
  + rMax: PolygonRay

    The clockwise bounding ray
  + angle: number

    The angle being tested, in degrees

  #### Returns boolean

  Is the vertex between the two rays?