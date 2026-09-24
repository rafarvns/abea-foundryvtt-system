---
title: "CanvasQuadtree | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.CanvasQuadtree.html"
category: "classes"
---

# Class CanvasQuadtree

A subclass of Quadtree specifically intended for classifying the location of objects on the game canvas.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.geometry.CanvasQuadtree))

* [Quadtree](foundry.canvas.geometry.Quadtree.md)
  + CanvasQuadtree

##### Index

### Constructors

[constructor](#constructor)

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

## Constructors

### constructor

* new CanvasQuadtree(options?: object): CanvasQuadtree

  Create a CanvasQuadtree which references canvas.dimensions.rect.
  We pass an empty object to the parent, then override \_bounds.

  #### Parameters

  + `Optional`options: object = {}

    Additional options passed to the parent Quadtree.

  #### Returns CanvasQuadtree

  Overrides Quadtree.constructor

## Properties

### depth

depth: number

The depth of this node within the root Quadtree

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[depth](foundry.canvas.geometry.Quadtree.md#depth)

### maxDepth

maxDepth: number

The maximum number of levels that the base quadtree is allowed

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[maxDepth](foundry.canvas.geometry.Quadtree.md#maxdepth)

### maxObjects

maxObjects: number

The maximum number of objects allowed within this node before it must split

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[maxObjects](foundry.canvas.geometry.Quadtree.md#maxobjects)

### nodes

nodes: [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

Children of this node

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[nodes](foundry.canvas.geometry.Quadtree.md#nodes)

### objects

objects: QuadtreeObject[]

The objects contained at this level of the tree

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[objects](foundry.canvas.geometry.Quadtree.md#objects)

### root

root: [Quadtree](foundry.canvas.geometry.Quadtree.md)

The root Quadtree

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[root](foundry.canvas.geometry.Quadtree.md#root)

### `Protected`\_bounds

\_bounds: Rectangle | { height: number; width: number; x: number; y: number }

Bounding rectangle of the quadtree.

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[\_bounds](foundry.canvas.geometry.Quadtree.md#_bounds)

### `Static`INDICES

INDICES: { bl: number; br: number; tl: number; tr: number } = ...

A constant that enumerates the index order of the quadtree nodes from top-left to bottom-right.

Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[INDICES](foundry.canvas.geometry.Quadtree.md#indices)

## Accessors

### all

* get all(): QuadtreeObject[]

  Return an array of all the objects in the Quadtree (recursive)

  #### Returns QuadtreeObject[]

  Inherited from Quadtree.all

### bounds

* get bounds(): Rectangle

  The bounding rectangle of the quadtree.

  #### Returns Rectangle

  Inherited from Quadtree.bounds

### height

* get height(): number

  The height of the bounding rectangle

  #### Returns number

  Inherited from Quadtree.height

### width

* get width(): number

  The width of the bounding rectangle

  #### Returns number

  Inherited from Quadtree.width

### x

* get x(): number

  The x-coordinate of the bounding rectangle

  #### Returns number

  Inherited from Quadtree.x

### y

* get y(): number

  The y-coordinate of the bounding rectangle

  #### Returns number

  Inherited from Quadtree.y

## Methods

### clear

* clear(): [Quadtree](foundry.canvas.geometry.Quadtree.md)

  Clear the quadtree of all existing contents

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)

  The cleared Quadtree

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[clear](foundry.canvas.geometry.Quadtree.md#clear)

### getAdjacentNodes

* getAdjacentNodes(): [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Identify all nodes which are adjacent to this one within the parent Quadtree.

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[getAdjacentNodes](foundry.canvas.geometry.Quadtree.md#getadjacentnodes)

### getChildNodes

* getChildNodes(rect: Rectangle): [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Obtain the child nodes within the current node which a rectangle belongs to.
  Note that this function is not recursive, it only returns nodes at the current or child level.

  #### Parameters

  + rect: Rectangle

    The target rectangle.

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  The Quadtree nodes to which the target rectangle belongs

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[getChildNodes](foundry.canvas.geometry.Quadtree.md#getchildnodes)

### getLeafNodes

* getLeafNodes(rect: Rectangle): [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Obtain the leaf nodes to which a target rectangle belongs.
  This traverses the quadtree recursively obtaining the final nodes which have no children.

  #### Parameters

  + rect: Rectangle

    The target rectangle.

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  The Quadtree nodes to which the target rectangle belongs

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[getLeafNodes](foundry.canvas.geometry.Quadtree.md#getleafnodes)

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

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[getObjects](foundry.canvas.geometry.Quadtree.md#getobjects)

### insert

* insert(obj: QuadtreeObject): [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Add a rectangle object to the tree

  #### Parameters

  + obj: QuadtreeObject

    The object being inserted

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  The Quadtree nodes the object was added to.

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[insert](foundry.canvas.geometry.Quadtree.md#insert)

### remove

* remove(target: any): [Quadtree](foundry.canvas.geometry.Quadtree.md)

  Remove an object from the quadtree

  #### Parameters

  + target: any

    The quadtree target being removed

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)

  The Quadtree for method chaining

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[remove](foundry.canvas.geometry.Quadtree.md#remove)

### setDimensions

* setDimensions(width: number, height: number): [Quadtree](foundry.canvas.geometry.Quadtree.md)

  Re-dimension the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
  Useful if the underlying canvas or region is resized.

  #### Parameters

  + width: number

    The new width of the bounding rectangle
  + height: number

    The new height of the bounding rectangle

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)

  This Quadtree for method chaining

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[setDimensions](foundry.canvas.geometry.Quadtree.md#setdimensions)

### setPosition

* setPosition(x: number, y: number): [Quadtree](foundry.canvas.geometry.Quadtree.md)

  Re-position the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
  Useful if the Quadtree needs to move.

  #### Parameters

  + x: number

    The new x-coordinate of the bounding rectangle
  + y: number

    The new y-coordinate of the bounding rectangle

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)

  This Quadtree for method chaining

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[setPosition](foundry.canvas.geometry.Quadtree.md#setposition)

### split

* split(): [Quadtree](foundry.canvas.geometry.Quadtree.md)

  Split this node into 4 sub-nodes.

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)

  The split Quadtree

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[split](foundry.canvas.geometry.Quadtree.md#split)

### update

* update(obj: QuadtreeObject): [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  Remove an existing object from the quadtree and re-insert it with a new position

  #### Parameters

  + obj: QuadtreeObject

    The object being inserted

  #### Returns [Quadtree](foundry.canvas.geometry.Quadtree.md)[]

  The Quadtree nodes the object was added to

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[update](foundry.canvas.geometry.Quadtree.md#update)

### visualize

* visualize(objects?: boolean): void

  Visualize the nodes and objects in the quadtree

  #### Parameters

  + `Optional`objects: boolean = {}

    Visualize the rectangular bounds of objects in the Quadtree. Default is false.

  #### Returns void

  Inherited from [Quadtree](foundry.canvas.geometry.Quadtree.md).[visualize](foundry.canvas.geometry.Quadtree.md#visualize)