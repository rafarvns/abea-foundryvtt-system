---
title: "GridMeasurePathResult | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.GridMeasurePathResult.html"
category: "interfaces"
---

# Interface GridMeasurePathResult

A result of [foundry.grid.BaseGrid#measurePath](../classes/foundry.grid.BaseGrid.md#measurepath).

interface GridMeasurePathResult {  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [diagonals](#diagonals): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [euclidean](#euclidean): number;  
Â Â Â Â [segments](#segments): [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md)[];  
Â Â Â Â [spaces](#spaces): number;  
Â Â Â Â [waypoints](#waypoints): [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)[];  
}

##### Index

### Properties

[cost](#cost)
[diagonals](#diagonals)
[distance](#distance)
[euclidean](#euclidean)
[segments](#segments)
[spaces](#spaces)
[waypoints](#waypoints)

## Properties

### cost

cost: number

The total cost of the direct path ([foundry.grid.BaseGrid#getDirectPath](../classes/foundry.grid.BaseGrid.md#getdirectpath))
through all waypoints.

### diagonals

diagonals: number

The total number of diagonals moved along a direct path through all waypoints.

### distance

distance: number

The total distance travelled along the path through all waypoints.

### euclidean

euclidean: number

The total Euclidean length of the straight line path through all waypoints.

### segments

segments: [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md)[]

The measurements at each segment.

### spaces

spaces: number

The total number of spaces moved along a direct path through all waypoints.
Moving from a grid space to any of its neighbors counts as 1 step.
Always 0 in gridless grids.

### waypoints

waypoints: [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)[]

The measurements at each waypoint.