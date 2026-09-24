---
title: "GridMeasurePathResultSegment | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.GridMeasurePathResultSegment.html"
category: "interfaces"
---

# Interface GridMeasurePathResultSegment

A segment of [foundry.grid.types.GridMeasurePathResult](foundry.grid.types.GridMeasurePathResult.md).

interface GridMeasurePathResultSegment {  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [diagonals](#diagonals): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [euclidean](#euclidean): number;  
Â Â Â Â [from](#from): [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md);  
Â Â Â Â [spaces](#spaces): number;  
Â Â Â Â [to](#to): [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md);  
}

##### Index

### Properties

[cost](#cost)
[diagonals](#diagonals)
[distance](#distance)
[euclidean](#euclidean)
[from](#from)
[spaces](#spaces)
[to](#to)

## Properties

### cost

cost: number

The cost of the direct path ([foundry.grid.BaseGrid#getDirectPath](../classes/foundry.grid.BaseGrid.md#getdirectpath)) between the
two waypoints.

### diagonals

diagonals: number

The number of diagonals moved along this segment.

### distance

distance: number

The distance travelled in grid units along this segment.

### euclidean

euclidean: number

The Euclidean length of the straight line segment between the two waypoints.

### from

from: [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)

The waypoint that this segment starts from.

### spaces

spaces: number

The number of spaces moved along this segment.

### to

to: [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)

The waypoint that this segment goes to.