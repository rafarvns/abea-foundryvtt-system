---
title: "PolygonTree | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.PolygonTree.html"
category: "classes"
---

# Class PolygonTree

A polygon tree.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.PolygonTree))

* [PolygonTreeNode](foundry.data.PolygonTreeNode.md)
  + PolygonTree

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[area](#area)
[bounds](#bounds)
[children](#children)
[clipperPath](#clipperpath)
[clipperPaths](#clipperpaths)
[depth](#depth)
[isEmpty](#isempty)
[isHole](#ishole)
[parent](#parent)
[path](#path)
[points](#points)
[polygon](#polygon)
[polygons](#polygons)
[triangulation](#triangulation)

### Methods

[[iterator]](#iterator)
[drawShape](#drawshape)
[findClosestPoint](#findclosestpoint)
[findContainingNode](#findcontainingnode)
[intersectClipper](#intersectclipper)
[intersectPolygon](#intersectpolygon)
[sampleBoundary](#sampleboundary)
[sampleInterior](#sampleinterior)
[testCircle](#testcircle)
[testPoint](#testpoint)
[\_fromClipperPath](#_fromclipperpath)
[fromClipperPolyTree](#fromclipperpolytree)

## Constructors

### constructor

* new PolygonTree(): PolygonTree

  Create a PolygonTree.

  #### Returns PolygonTree

  Overrides [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[constructor](foundry.data.PolygonTreeNode.md#constructor)

## Accessors

### area

* get area(): number

  The area of this node.

  #### Returns number

  Inherited from PolygonTreeNode.area

### bounds

* get bounds(): Rectangle

  The bounds of the polygon, or the combined bounds of all children in case of the root node.

  The value of this property must not be mutated.

  #### Returns Rectangle

  Inherited from PolygonTreeNode.bounds

### children

* get children(): readonly [PolygonTreeNode](foundry.data.PolygonTreeNode.md)[]

  The children of this node.

  The value of this property must not be mutated.

  #### Returns readonly [PolygonTreeNode](foundry.data.PolygonTreeNode.md)[]

  Inherited from PolygonTreeNode.children

### clipperPath

* get clipperPath(): readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[] | null

  The Clipper path of this node.
  It is empty in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[] | null

  Inherited from PolygonTreeNode.clipperPath

### clipperPaths

* get clipperPaths(): readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

  The Clipper paths of this polygon tree.

  The value of this property must not be mutated.

  #### Returns readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

### depth

* get depth(): number

  The depth of this node.
  The depth of the root node is 0.

  #### Returns number

  Inherited from PolygonTreeNode.depth

### isEmpty

* get isEmpty(): boolean

  Is the (sub)tree empty?

  #### Returns boolean

  Inherited from PolygonTreeNode.isEmpty

### isHole

* get isHole(): boolean

  Is this a hole?
  The root node is a hole.

  #### Returns boolean

  Inherited from PolygonTreeNode.isHole

### parent

* get parent(): [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null

  The parent of this node or `null` if this is the root node.

  #### Returns [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null

  Inherited from PolygonTreeNode.parent

### path

* get path(): readonly [Point](../interfaces/foundry.types.Point.md)[] | null

  The path of the polygon ([{x: x0, y: y0}, {x: x1, y: y1}, ...]).
  They are `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly [Point](../interfaces/foundry.types.Point.md)[] | null

  Inherited from PolygonTreeNode.path

### points

* get points(): readonly number[] | null

  The points of the polygon ([x0, y0, x1, y1, ...]).
  They are `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly number[] | null

  Inherited from PolygonTreeNode.points

### polygon

* get polygon(): Polygon | null

  The polygon of this node.
  It is `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns Polygon | null

  Inherited from PolygonTreeNode.polygon

### polygons

* get polygons(): readonly Polygon[]

  The polygons of this polygon tree.

  The value of this property must not be mutated.

  #### Returns readonly Polygon[]

### triangulation

* get triangulation(): Readonly<  
  Â Â Â Â { indices: Uint16Array  
  Â Â Â Â | Uint32Array; vertices: Float32Array },  
  >

  The triangulation of this polygon tree.

  The value of this property must not be mutated.

  #### Returns Readonly<{ indices: Uint16Array | Uint32Array; vertices: Float32Array }>

## Methods

### [iterator]

* "[iterator]"(): Generator<[PolygonTreeNode](foundry.data.PolygonTreeNode.md), any, any>

  Iterate over recursively over the children in depth-first order.

  #### Returns Generator<[PolygonTreeNode](foundry.data.PolygonTreeNode.md), any, any>

  #### Yields

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[[iterator]](foundry.data.PolygonTreeNode.md#iterator)

### drawShape

* drawShape(graphics: Graphics): void

  Draw the polygon tree into the Graphics element.

  #### Parameters

  + graphics: Graphics

    The Graphics element.

  #### Returns void

### findClosestPoint

* findClosestPoint(point: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Find a point inside this polygon tree that is closest to the given reference point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The reference point.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The closest point to the reference point in the polygon tree.

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[findClosestPoint](foundry.data.PolygonTreeNode.md#findclosestpoint)

### findContainingNode

* findContainingNode(point: [Point](../interfaces/foundry.types.Point.md)): [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null

  Find the node in this (sub)tree that contains the given point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point.

  #### Returns [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null

  The (sub)node that contains the point, if any.
  Cannot return null for [PolygonTree](#); instead
  the root node (the tree itself) is returned.

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[findContainingNode](foundry.data.PolygonTreeNode.md#findcontainingnode)

### intersectClipper

* intersectClipper(  
  Â Â Â Â path: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[],  
  Â Â Â Â options?: { clipType?: number; fillType?: number },  
  ): PolygonTree

  Compute the intersection of the polygon tree with the given Clipper path.

  #### Parameters

  + path: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

    The Clipper path to intersect the polygon tree with
    (the scaling factor must be [CONST.CLIPPER\_SCALING\_FACTOR](../variables/CONST.CLIPPER_SCALING_FACTOR.md)).
  + `Optional`options: { clipType?: number; fillType?: number } = {}

    Additional options.

    - ##### `Optional`clipType?: number

      The Clipper clip type. Default: `ClipperLib.ClipType.ctIntersection`.
    - ##### `Optional`fillType?: number

      The Clipper fill type used for the Clipper path.
      Default: `ClipperLib.PolyFillType.pftEvenOdd`.

  #### Returns PolygonTree

  The result of the intersection.

### intersectPolygon

* intersectPolygon(  
  Â Â Â Â polygon: Polygon,  
  Â Â Â Â options?: { clipType?: number; fillType?: number },  
  ): PolygonTree

  Compute the intersection of the polygon tree with the given polygon.

  #### Parameters

  + polygon: Polygon

    The polygon to intersect the polygon tree with.
  + `Optional`options: { clipType?: number; fillType?: number }

    Additional options.

    - ##### `Optional`clipType?: number

      The Clipper clip type. Default: `ClipperLib.ClipType.ctIntersection`.
    - ##### `Optional`fillType?: number

      The Clipper fill type used for the polygon.
      Default: `ClipperLib.PolyFillType.pftEvenOdd`.

  #### Returns PolygonTree

  The result of the intersection.

### sampleBoundary

* sampleBoundary(out?: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Sample a point from the polygon tree boundary.

  #### Parameters

  + `Optional`out: [Point](../interfaces/foundry.types.Point.md)

    A point to write to.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The sampled point.

  #### Throws

  If the polygon tree boundary is empty.

### sampleInterior

* sampleInterior(out?: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Sample a point from the polygon tree interior.

  #### Parameters

  + `Optional`out: [Point](../interfaces/foundry.types.Point.md)

    A point to write to.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The sampled point.

  #### Throws

  If the polygon tree interior is empty.

### testCircle

* testCircle(center: [Point](../interfaces/foundry.types.Point.md), radius: number): -1 | 0 | 1

  Test circle containment/intersection with this (sub)tree.

  #### Parameters

  + center: [Point](../interfaces/foundry.types.Point.md)

    The center point of the circle.
  + radius: number

    The radius of the circle.

  #### Returns -1 | 0 | 1

  + -1: the circle is in the exterior and does not intersect the boundary.
    - 0: the circle is intersects the boundary.
    - 1: the circle is in the interior and does not intersect the boundary.

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[testCircle](foundry.data.PolygonTreeNode.md#testcircle)

### testPoint

* testPoint(point: [Point](../interfaces/foundry.types.Point.md), distance?: number): boolean

  Test whether given point is contained within this (sub)tree.
  If `distance` is is nonzero, true is returned if and only if the signed distance from the point to the boundary of
  the (sub)tree is less than or equal to `distance`. The signed distance is positive for points in the exterior of
  the (sub)tree and negative for points within the interior of the (sub)tree.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point.
  + `Optional`distance: number = 0

    The tolerance of the containment test.

  #### Returns boolean

  #### Example: Test whether the point (x, y) is contained within the polygon tree

  ```
  polygonTree.testPoint({x, y});
  Copy
  ```

  #### Example: Test whether the circle at (x, y) with radius r (positive) intersects the polygon tree

  ```
  polygonTree.testPoint({x, y}, r);
  Copy
  ```

  #### Example: Test whether the circle at (x, y) with radius r (positive) is contained within the polygon tree

  ```
  polygonTree.testPoint({x, y}, -r);
  Copy
  ```

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[testPoint](foundry.data.PolygonTreeNode.md#testpoint)

### `Static`\_fromClipperPath

* \_fromClipperPath(  
  Â Â Â Â clipperPath: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[],  
  Â Â Â Â parent: [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null,  
  ): [PolygonTreeNode](foundry.data.PolygonTreeNode.md)

  `Internal`

  Create a node from the Clipper path and add it to the children of the parent.

  #### Parameters

  + clipperPath: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

    The clipper path of this node.
  + parent: [PolygonTreeNode](foundry.data.PolygonTreeNode.md) | null

    The parent node or `null` if root.

  #### Returns [PolygonTreeNode](foundry.data.PolygonTreeNode.md)

  Inherited from [PolygonTreeNode](foundry.data.PolygonTreeNode.md).[\_fromClipperPath](foundry.data.PolygonTreeNode.md#_fromclipperpath)

### `Static`fromClipperPolyTree

* fromClipperPolyTree(clipperPolyTree: PolyTree): PolygonTree

  Create the tree from a Clipper polygon tree.

  #### Parameters

  + clipperPolyTree: PolyTree

  #### Returns PolygonTree