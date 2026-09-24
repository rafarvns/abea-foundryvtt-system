---
title: "Quadtree | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.Quadtree.html"
category: "classes"
---

# Class Quadtree

A Quadtree implementation that supports collision detection for rectangles.

#### Param: bounds

The outer bounds of the region

#### Param: options

Additional options which configure the Quadtree

#### Param: options.maxObjects

The maximum number of objects per node

#### Param: options.maxDepth

The maximum number of levels within the root Quadtree

#### Param: options.\_depth

The depth level of the sub-tree. For internal use

#### Param: options.\_root

The root of the quadtree. For internal use

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.geometry.Quadtree))

* Quadtree
  + [CanvasQuadtree](foundry.canvas.geometry.CanvasQuadtree.md)

##### Index

### Properties

[depth](#depth)
[maxDepth](#maxdepth)
[maxObjects](#maxobjects)
[nodes](#nodes)
[objects](#objects)
[root](#root)
[\_bounds](#_bounds)
[INDICES](#indices)

### Accessors

[all](#all)
[bounds](#bounds)
[height](#height)
[width](#width)
[x](#x)
[y](#y)

### Methods

[clear](#clear)
[getAdjacentNodes](#getadjacentnodes)
[getChildNodes](#getchildnodes)
[getLeafNodes](#getleafnodes)
[getObjects](#getobjects)
[insert](#insert)
[remove](#remove)
[setDimensions](#setdimensions)
[setPosition](#setposition)
[split](#split)
[update](#update)
[visualize](#visualize)

## Properties

### depth

depth: number

The depth of this node within the root Quadtree

### maxDepth

maxDepth: number

The maximum number of levels that the base quadtree is allowed

### maxObjects

maxObjects: number

The maximum number of objects allowed within this node before it must split

### nodes

nodes: Quadtree[]

Children of this node

### objects

objects: QuadtreeObject[]

The objects contained at this level of the tree

### root

root: Quadtree

The root Quadtree

### `Protected`\_bounds

\_bounds: Rectangle | { height: number; width: number; x: number; y: number }

Bounding rectangle of the quadtree.

### `Static`INDICES

INDICES: { bl: number; br: number; tl: number; tr: number } = ...

A constant that enumerates the index order of the quadtree nodes from top-left to bottom-right.

## Accessors

### all

* get all(): QuadtreeObject[]

  Return an array of all the objects in the Quadtree (recursive)

  #### Returns QuadtreeObject[]

### bounds

* get bounds(): Rectangle

  The bounding rectangle of the quadtree.

  #### Returns Rectangle

### height

* get height(): number

  The height of the bounding rectangle

  #### Returns number

### width

* get width(): number

  The width of the bounding rectangle

  #### Returns number

### x

* get x(): number

  The x-coordinate of the bounding rectangle

  #### Returns number

### y

* get y(): number

  The y-coordinate of the bounding rectangle

  #### Returns number

## Methods

### clear

* clear(): Quadtree

  Clear the quadtree of all existing contents

  #### Returns Quadtree

  The cleared Quadtree

### getAdjacentNodes

* getAdjacentNodes(): Quadtree[]

  Identify all nodes which are adjacent to this one within the parent Quadtree.

  #### Returns Quadtree[]

### getChildNodes

* getChildNodes(rect: Rectangle): Quadtree[]

  Obtain the child nodes within the current node which a rectangle belongs to.
  Note that this function is not recursive, it only returns nodes at the current or child level.

  #### Parameters

  + rect: Rectangle

    The target rectangle.

  #### Returns Quadtree[]

  The Quadtree nodes to which the target rectangle belongs

### getLeafNodes

* getLeafNodes(rect: Rectangle): Quadtree[]

  Obtain the leaf nodes to which a target rectangle belongs.
  This traverses the quadtree recursively obtaining the final nodes which have no children.

  #### Parameters

  + rect: Rectangle

    The target rectangle.

  #### Returns Quadtree[]

  The Quadtree nodes to which the target rectangle belongs

### getObjects

* getObjects(  
  Â Â Â Â rect: Rectangle,  
  Â Â Â Â options?: { \_s?: Set<any>; collisionTest?: Function },  
  ): Set<any>

  Get all the objects which could collide with the provided rectangle

  #### Parameters

  + rect: Rectangle

    The normalized target rectangle
  + `Optional`options: { \_s?: Set<any>; collisionTest?: Function } = {}

    Options affecting the collision test.

    - ##### `Optional`\_s?: Set<any>

      The existing result set, for internal use.
    - ##### `Optional`collisionTest?: Function

      Function to further refine objects to return
      after a potential collision is found. Parameters are the object and rect, and the
      function should return true if the object should be added to the result set.

  #### Returns Set<any>

  The objects in the Quadtree which represent potential collisions

### insert

* insert(obj: QuadtreeObject): Quadtree[]

  Add a rectangle object to the tree

  #### Parameters

  + obj: QuadtreeObject

    The object being inserted

  #### Returns Quadtree[]

  The Quadtree nodes the object was added to.

### remove

* remove(target: any): Quadtree

  Remove an object from the quadtree

  #### Parameters

  + target: any

    The quadtree target being removed

  #### Returns Quadtree

  The Quadtree for method chaining

### setDimensions

* setDimensions(width: number, height: number): Quadtree

  Re-dimension the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
  Useful if the underlying canvas or region is resized.

  #### Parameters

  + width: number

    The new width of the bounding rectangle
  + height: number

    The new height of the bounding rectangle

  #### Returns Quadtree

  This Quadtree for method chaining

### setPosition

* setPosition(x: number, y: number): Quadtree

  Re-position the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
  Useful if the Quadtree needs to move.

  #### Parameters

  + x: number

    The new x-coordinate of the bounding rectangle
  + y: number

    The new y-coordinate of the bounding rectangle

  #### Returns Quadtree

  This Quadtree for method chaining

### split

* split(): Quadtree

  Split this node into 4 sub-nodes.

  #### Returns Quadtree

  The split Quadtree

### update

* update(obj: QuadtreeObject): Quadtree[]

  Remove an existing object from the quadtree and re-insert it with a new position

  #### Parameters

  + obj: QuadtreeObject

    The object being inserted

  #### Returns Quadtree[]

  The Quadtree nodes the object was added to

### visualize

* visualize(objects?: boolean): void

  Visualize the nodes and objects in the quadtree

  #### Parameters

  + `Optional`objects: boolean = {}

    Visualize the rectangular bounds of objects in the Quadtree. Default is false.

  #### Returns void