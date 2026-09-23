---
title: "CollisionResult | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.edges.CollisionResult.html"
category: "classes"
---

# Class CollisionResult

A specialized object that contains the result of a collision in the context of the ClockwiseSweepPolygon.
This class is not designed or intended for use outside of that context.

##### Index

### Properties

[blockedCCW](#blockedccw)
[blockedCCWPrev](#blockedccwprev)
[blockedCW](#blockedcw)
[blockedCWPrev](#blockedcwprev)
[ccwEdges](#ccwedges)
[collisions](#collisions)
[cwEdges](#cwedges)
[isBehind](#isbehind)
[isLimited](#islimited)
[limitedCCW](#limitedccw)
[limitedCW](#limitedcw)
[target](#target)
[wasLimited](#waslimited)

## Properties

### blockedCCW

blockedCCW: boolean = false

Is this result blocking in the counter-clockwise direction?

### blockedCCWPrev

blockedCCWPrev: boolean = false

Previously blocking in the counter-clockwise direction?

### blockedCW

blockedCW: boolean = false

Is this result blocking in the clockwise direction?

### blockedCWPrev

blockedCWPrev: boolean = false

Previously blocking in the clockwise direction?

### ccwEdges

ccwEdges: EdgeSet

The set of edges connected to the target vertex that continue counter-clockwise

### collisions

collisions: PolygonVertex[]

The array of collision points which apply to this result

### cwEdges

cwEdges: EdgeSet

The set of edges connected to the target vertex that continue clockwise

### isBehind

isBehind: boolean

Is the target vertex for this result behind some closer active edge?

### isLimited

isLimited: boolean

Does the target vertex for this result impose a limited collision?

### limitedCCW

limitedCCW: boolean = false

Is this result limited in the counter-clockwise direction?

### limitedCW

limitedCW: boolean = false

Is this result limited in the clockwise direction?

### target

target: PolygonVertex

The vertex that was the target of this result

### wasLimited

wasLimited: boolean

Has the set of collisions for this result encountered a limited edge?