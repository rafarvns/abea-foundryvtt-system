---
title: "RulerWaypoint | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.RulerWaypoint.html"
category: "interfaces"
---

# Interface RulerWaypoint

interface RulerWaypoint {  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [index](#index): number;  
Â Â Â Â [measurement](#measurement): [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md);  
Â Â Â Â [next](#next): RulerWaypoint | null;  
Â Â Â Â [previous](#previous): RulerWaypoint | null;  
Â Â Â Â [ray](#ray): [Ray](../classes/foundry.canvas.geometry.Ray.md) | null;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[elevation](#elevation)
[index](#index)
[measurement](#measurement)
[next](#next)
[previous](#previous)
[ray](#ray)
[x](#x)
[y](#y)

## Properties

### elevation

elevation: number

The elevation in grid units.

### index

index: number

The index of the waypoint.

### measurement

measurement: [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)

The measurements at this waypoint.

### next

next: RulerWaypoint | null

The next waypoint, if any.

### previous

previous: RulerWaypoint | null

The previous waypoint, if any.

### ray

ray: [Ray](../classes/foundry.canvas.geometry.Ray.md) | null

The ray from the center point of previous to the
center point of this waypoint, or null if there is
no previous waypoint.

### x

x: number

The x-coordinate in pixels.

### y

y: number

The y-coordinate in pixels.