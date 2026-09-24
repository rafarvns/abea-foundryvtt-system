---
title: "CanvasEdges | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.edges.CanvasEdges.html"
category: "classes"
---

# Class CanvasEdges

A specialized Map class that manages all edges used to restrict perception in a Scene.
Integrates with a Quadtree for efficient spatial queries.

#### Hierarchy

* Map
  + CanvasEdges

##### Index

### Accessors

[level](#level)

### Methods

[clear](#clear)
[delete](#delete)
[getEdges](#getedges)
[set](#set)

## Accessors

### level

* get level(): Level

  The Level these edges belong to.

  #### Returns Level

## Methods

### clear

* clear(): CanvasEdges

  #### Returns CanvasEdges

  #### Inherit Doc

  Overrides Map.clear

### delete

* delete(id: any): boolean

  #### Parameters

  + id: any

  #### Returns boolean

  #### Inherit Doc

  Overrides Map.delete

### getEdges

* getEdges(  
  Â Â Â Â rect: Rectangle,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â collisionTest?: (edge: [Edge](foundry.canvas.geometry.edges.Edge.md)) => boolean;  
  Â Â Â Â Â Â Â Â collisionTestBounds?: boolean;  
  Â Â Â Â Â Â Â Â includeInnerBounds?: boolean;  
  Â Â Â Â Â Â Â Â includeOuterBounds?: boolean;  
  Â Â Â Â },  
  ): Set<[Edge](foundry.canvas.geometry.edges.Edge.md)>

  Retrieves edges that overlap with a given rectangle.
  Utilizes the Quadtree for efficient spatial querying.
  This function computes edge intersections if necessary.

  #### Parameters

  + rect: Rectangle

    The rectangle to query against.
  + options: {  
    Â Â Â Â collisionTest?: (edge: [Edge](foundry.canvas.geometry.edges.Edge.md)) => boolean;  
    Â Â Â Â collisionTestBounds?: boolean;  
    Â Â Â Â includeInnerBounds?: boolean;  
    Â Â Â Â includeOuterBounds?: boolean;  
    } = {}
    - ##### `Optional`collisionTest?: (edge: [Edge](foundry.canvas.geometry.edges.Edge.md)) => boolean

      Collision function to test edge inclusion.
    - ##### `Optional`collisionTestBounds?: boolean

      Apply collision test to bounds?
    - ##### `Optional`includeInnerBounds?: boolean

      Should inner bounds be added?
    - ##### `Optional`includeOuterBounds?: boolean

      Should outer bounds be added?

  #### Returns Set<[Edge](foundry.canvas.geometry.edges.Edge.md)>

  A set of Edge instances that intersect with the provided rectangle.

### set

* set(id: any, edge: any): CanvasEdges

  #### Parameters

  + id: any
  + edge: any

  #### Returns CanvasEdges

  #### Inherit Doc

  Overrides Map.set