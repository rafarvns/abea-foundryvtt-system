---
title: "_TokenRulerWaypoint | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types._TokenRulerWaypoint.html"
category: "interfaces"
---

# Interface \_TokenRulerWaypoint

interface \_TokenRulerWaypoint {  
Â Â Â Â [actionConfig](#actionconfig): [TokenMovementActionConfig](foundry.types.TokenMovementActionConfig.md);  
Â Â Â Â [center](#center): [Point](foundry.types.Point.md);  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [index](#index): number;  
Â Â Â Â [measurement](#measurement): [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md);  
Â Â Â Â [movementId](#movementid): string | null;  
Â Â Â Â [next](#next): [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md) | null;  
Â Â Â Â [previous](#previous): [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md) | null;  
Â Â Â Â [ray](#ray): [Ray](../classes/foundry.canvas.geometry.Ray.md) | null;  
Â Â Â Â [size](#size): { height: number; width: number };  
Â Â Â Â [stage](#stage): "planned" | "pending" | "passed";  
Â Â Â Â [subpathId](#subpathid): string | null;  
Â Â Â Â [unreachable](#unreachable): boolean;  
}

##### Index

### Properties

[actionConfig](#actionconfig)
[center](#center)
[hidden](#hidden)
[index](#index)
[measurement](#measurement)
[movementId](#movementid)
[next](#next)
[previous](#previous)
[ray](#ray)
[size](#size)
[stage](#stage)
[subpathId](#subpathid)
[unreachable](#unreachable)

## Properties

### actionConfig

actionConfig: [TokenMovementActionConfig](foundry.types.TokenMovementActionConfig.md)

The config of the movement action.

### center

center: [Point](foundry.types.Point.md)

The center point of the Token at this waypoint.

### hidden

hidden: boolean

Is this waypoint hidden?

### index

index: number

The index of the waypoint, which is equal to the number of
explicit waypoints from the first to this waypoint.

### measurement

measurement: [GridMeasurePathResultWaypoint](foundry.grid.types.GridMeasurePathResultWaypoint.md)

The measurements at this waypoint.

### movementId

movementId: string | null

The ID of movement, or null if planned movement.

### next

next: [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md) | null

The next waypoint, if any.

### previous

previous: [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md) | null

The previous waypoint, if any.

### ray

ray: [Ray](../classes/foundry.canvas.geometry.Ray.md) | null

The ray from the center point of previous to the center
point of this waypoint, or null if there is no previous
waypoint.

### size

size: { height: number; width: number }

The size of the Token in pixels at this waypoint.

### stage

stage: "planned" | "pending" | "passed"

The stage this waypoint belongs to.

### subpathId

subpathId: string | null

The ID of subpath, which is equal to the movement ID of the
first waypoint in the subpath, or null if planned movement.

### unreachable

unreachable: boolean

Is this waypoint unreachable?