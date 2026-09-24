---
title: "GridMeasurePathWaypointData3D | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.html"
category: "interfaces"
---

# Interface GridMeasurePathWaypointData3D

interface GridMeasurePathWaypointData3D {  
Â Â Â Â [cost](#cost)?: number | [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<{}>;  
Â Â Â Â [measure](#measure)?: boolean;  
Â Â Â Â [teleport](#teleport)?: boolean;  
}

##### Index

### Properties

[cost?](#cost)
[measure?](#measure)
[teleport?](#teleport)

## Properties

### `Optional`cost

cost?: number | [GridMeasurePathCostFunction3D](../types/foundry.grid.types.GridMeasurePathCostFunction3D.md)<{}>

A predetermined cost (nonnegative) or cost function
to be used instead of `options.cost`.

### `Optional`measure

measure?: boolean

Measure of the segment from the previous to
this waypoint? The distance, cost, spaces, diagonals,
and Euclidean length of a segment that is not measured are
always 0. Default: `true`.

### `Optional`teleport

teleport?: boolean

Teleport to this waypoint? Default: `false`.