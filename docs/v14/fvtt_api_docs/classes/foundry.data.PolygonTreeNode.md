---
title: "PolygonTreeNode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.PolygonTreeNode.html"
category: "classes"
---

# Class PolygonTreeNode

The node of a [foundry.data.PolygonTree](foundry.data.PolygonTree.md).

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.PolygonTreeNode))

* PolygonTreeNode
  + [PolygonTree](foundry.data.PolygonTree.md)

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[area](#area)
[bounds](#bounds)
[children](#children)
[clipperPath](#clipperpath)
[depth](#depth)
[isEmpty](#isempty)
[isHole](#ishole)
[parent](#parent)
[path](#path)
[points](#points)
[polygon](#polygon)

### Methods

[[iterator]](#iterator)
[findClosestPoint](#findclosestpoint)
[findContainingNode](#findcontainingnode)
[testCircle](#testcircle)
[testPoint](#testpoint)
[\_fromClipperPath](#_fromclipperpath)

## Constructors

### constructor

* new PolygonTreeNode(parent: PolygonTreeNode | null): PolygonTreeNode

  `Internal`

  Create a PolygonTreeNode.

  #### Parameters

  + parent: PolygonTreeNode | null

    The parent node.

  #### Returns PolygonTreeNode

## Accessors

### area

* get area(): number

  The area of this node.

  #### Returns number

### bounds

* get bounds(): Rectangle

  The bounds of the polygon, or the combined bounds of all children in case of the root node.

  The value of this property must not be mutated.

  #### Returns Rectangle

### children

* get children(): readonly PolygonTreeNode[]

  The children of this node.

  The value of this property must not be mutated.

  #### Returns readonly PolygonTreeNode[]

### clipperPath

* get clipperPath(): readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[] | null

  The Clipper path of this node.
  It is empty in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[] | null

### depth

* get depth(): number

  The depth of this node.
  The depth of the root node is 0.

  #### Returns number

### isEmpty

* get isEmpty(): boolean

  Is the (sub)tree empty?

  #### Returns boolean

### isHole

* get isHole(): boolean

  Is this a hole?
  The root node is a hole.

  #### Returns boolean

### parent

* get parent(): PolygonTreeNode | null

  The parent of this node or `null` if this is the root node.

  #### Returns PolygonTreeNode | null

### path

* get path(): readonly [Point](../interfaces/foundry.types.Point.md)[] | null

  The path of the polygon ([{x: x0, y: y0}, {x: x1, y: y1}, ...]).
  They are `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly [Point](../interfaces/foundry.types.Point.md)[] | null

### points

* get points(): readonly number[] | null

  The points of the polygon ([x0, y0, x1, y1, ...]).
  They are `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns readonly number[] | null

### polygon

* get polygon(): Polygon | null

  The polygon of this node.
  It is `null` in case of the root node.

  The value of this property must not be mutated.

  #### Returns Polygon | null

## Methods

### [iterator]

* "[iterator]"(): Generator<PolygonTreeNode, any, any>

  Iterate over recursively over the children in depth-first order.

  #### Returns Generator<PolygonTreeNode, any, any>

  #### Yields

### findClosestPoint

* findClosestPoint(point: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Find a point inside this polygon tree that is closest to the given reference point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The reference point.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The closest point to the reference point in the polygon tree.

### findContainingNode

* findContainingNode(point: [Point](../interfaces/foundry.types.Point.md)): PolygonTreeNode | null

  Find the node in this (sub)tree that contains the given point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point.

  #### Returns PolygonTreeNode | null

  The (sub)node that contains the point, if any.
  Cannot return null for [PolygonTree](foundry.data.PolygonTree.md); instead
  the root node (the tree itself) is returned.

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

### `Static`\_fromClipperPath

* \_fromClipperPath(  
  Â Â Â Â clipperPath: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[],  
  Â Â Â Â parent: PolygonTreeNode | null,  
  ): PolygonTreeNode

  `Internal`

  Create a node from the Clipper path and add it to the children of the parent.

  #### Parameters

  + clipperPath: [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

    The clipper path of this node.
  + parent: PolygonTreeNode | null

    The parent node or `null` if root.

  #### Returns PolygonTreeNode