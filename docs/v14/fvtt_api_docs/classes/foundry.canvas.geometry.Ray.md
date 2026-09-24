---
title: "Ray | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.Ray.html"
category: "classes"
---

# Class Ray

A ray for the purposes of computing sight and collision
Given points A[x,y] and B[x,y]

Slope-Intercept form:
y = a + bx
y = A.y + ((B.y - A.Y) / (B.x - A.x))x

Parametric form:
R(t) = (1-t)A + tB

#### Param: A

The origin of the Ray

#### Param: B

The destination of the Ray

##### Index

### Properties

[A](#a)
[B](#b)
[dx](#dx)
[dy](#dy)
[slope](#slope)
[x0](#x0)
[y0](#y0)

### Accessors

[angle](#angle)
[bounds](#bounds)
[distance](#distance)

### Methods

[intersectSegment](#intersectsegment)
[project](#project)
[reverse](#reverse)
[shiftAngle](#shiftangle)
[fromAngle](#fromangle)
[fromArrays](#fromarrays)
[towardsPoint](#towardspoint)
[towardsPointSquared](#towardspointsquared)

## Properties

### A

A: Point

The origin point, {x, y}

### B

B: Point

The destination point, {x, y}

### dx

dx: number

The horizontal distance of the ray, x1 - x0

### dy

dy: number

The vertical distance of the ray, y1 - y0

### slope

slope: number

The slope of the ray, dy over dx

### x0

x0: number

The origin x-coordinate

### y0

y0: number

The origin y-coordinate

## Accessors

### angle

* get angle(): number

  The normalized angle of the ray in radians on the range (-PI, PI).
  The angle is computed lazily (only if required) and cached.

  #### Returns number

### bounds

* get bounds(): Rectangle

  A normalized bounding rectangle that encompasses the Ray

  #### Returns Rectangle

### distance

* get distance(): number

  The distance (length) of the Ray in pixels.
  The distance is computed lazily (only if required) and cached.

  #### Returns number

## Methods

### intersectSegment

* intersectSegment(  
  Â Â Â Â coords: [number, number, number, number],  
  ): [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  Find the point I[x,y] and distance t\* on ray R(t) which intersects another ray.

  #### Parameters

  + coords: [number, number, number, number]

    An array of four coordinates `[x1, y1, x2, y2]`.

  #### Returns [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  The intersection result from foundry.utils.lineSegmentIntersection
  or `null` if no intersection was found.

  #### See

  [foundry.utils.lineSegmentIntersection](../functions/foundry.utils.lineSegmentIntersection.md)

### project

* project(t: number): Object

  Project the Array by some proportion of it's initial distance.
  Return the coordinates of that point along the path.

  #### Parameters

  + t: number

    The distance along the Ray

  #### Returns Object

  The coordinates of the projected point

### reverse

* reverse(): Ray

  Reverse the direction of the Ray, returning a second Ray

  #### Returns Ray

### shiftAngle

* shiftAngle(offset: number, distance?: number): Ray

  Create a new ray which uses the same origin point, but a slightly offset angle and distance

  #### Parameters

  + offset: number

    An offset in radians which modifies the angle of the original Ray
  + `Optional`distance: number

    A distance the new ray should project, otherwise uses the same distance.

  #### Returns Ray

  A new Ray with an offset angle

### `Static`fromAngle

* fromAngle(x: number, y: number, radians: number, distance: number): Ray

  A factory method to construct a Ray from an origin point, an angle, and a distance

  #### Parameters

  + x: number

    The origin x-coordinate
  + y: number

    The origin y-coordinate
  + radians: number

    The ray angle in radians
  + distance: number

    The distance of the ray in pixels

  #### Returns Ray

  The constructed Ray instance

### `Static`fromArrays

* fromArrays(A: number[], B: number[]): Ray

  A factory method to construct a Ray from points in array format.

  #### Parameters

  + A: number[]

    The origin point [x,y]
  + B: number[]

    The destination point [x,y]

  #### Returns Ray

  The constructed Ray instance

### `Static`towardsPoint

* towardsPoint(origin: Point, point: Point, distance: number): Ray

  Create a Ray by projecting a certain distance towards a known point.

  #### Parameters

  + origin: Point

    The origin of the Ray
  + point: Point

    The point towards which to project
  + distance: number

    The distance of projection

  #### Returns Ray

### `Static`towardsPointSquared

* towardsPointSquared(origin: Point, point: Point, distance2: number): Ray

  Create a Ray by projecting a certain squared-distance towards a known point.

  #### Parameters

  + origin: Point

    The origin of the Ray
  + point: Point

    The point towards which to project
  + distance2: number

    The squared distance of projection

  #### Returns Ray