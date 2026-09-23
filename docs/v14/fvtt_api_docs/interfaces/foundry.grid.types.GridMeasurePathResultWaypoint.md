---
title: "GridMeasurePathResultWaypoint | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.GridMeasurePathResultWaypoint.html"
category: "interfaces"
---

# Interface GridMeasurePathResultWaypoint

A waypoint of [foundry.grid.types.GridMeasurePathResult](foundry.grid.types.GridMeasurePathResult.md).

interface GridMeasurePathResultWaypoint {  
Â Â Â Â [backward](#backward): [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md) | null;  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [diagonals](#diagonals): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [euclidean](#euclidean): number;  
Â Â Â Â [forward](#forward): [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md) | null;  
Â Â Â Â [spaces](#spaces): number;  
}

##### Index

### Properties

[backward](#backward)
[cost](#cost)
[diagonals](#diagonals)
[distance](#distance)
[euclidean](#euclidean)
[forward](#forward)
[spaces](#spaces)

## Properties

### backward

backward: [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md) | null

The segment from the previous waypoint to this waypoint.

### cost

cost: number

The total cost of the direct path ([foundry.grid.BaseGrid#getDirectPath](../classes/foundry.grid.BaseGrid.md#getdirectpath)) up to
this waypoint.

### diagonals

diagonals: number

The total number of diagonals moved along a direct path up to this waypoint.

### distance

distance: number

The total distance travelled along the path up to this waypoint.

### euclidean

euclidean: number

The total Euclidean length of the straight line path up to this waypoint.

### forward

forward: [GridMeasurePathResultSegment](foundry.grid.types.GridMeasurePathResultSegment.md) | null

The segment from this waypoint to the next waypoint.

### spaces

spaces: number

The total number of spaces moved along a direct path up to this waypoint.