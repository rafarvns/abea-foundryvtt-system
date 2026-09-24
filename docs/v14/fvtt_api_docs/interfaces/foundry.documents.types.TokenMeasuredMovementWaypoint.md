---
title: "TokenMeasuredMovementWaypoint | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.html"
category: "interfaces"
---

# Interface TokenMeasuredMovementWaypoint

interface TokenMeasuredMovementWaypoint {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [checkpoint](#checkpoint): boolean;  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [explicit](#explicit): boolean;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [intermediate](#intermediate): boolean;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [movementId](#movementid): string | null;  
Â Â Â Â [shape](#shape): [TokenShapeType](../types/CONST.TokenShapeType.md);  
Â Â Â Â [snapped](#snapped): boolean;  
Â Â Â Â [subpathId](#subpathid): string;  
Â Â Â Â [terrain](#terrain): [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null;  
Â Â Â Â [userId](#userid): string;  
Â Â Â Â [width](#width): number;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[action](#action)
[checkpoint](#checkpoint)
[cost](#cost)
[depth](#depth)
[elevation](#elevation)
[explicit](#explicit)
[height](#height)
[intermediate](#intermediate)
[level](#level)
[movementId](#movementid)
[shape](#shape)
[snapped](#snapped)
[subpathId](#subpathid)
[terrain](#terrain)
[userId](#userid)
[width](#width)
[x](#x)
[y](#y)

## Properties

### action

action: string

The movement action from the previous to this waypoint.
Default: the prepared movement action.

### checkpoint

checkpoint: boolean

Is this waypoint a checkpoint? There's an update/movement operation
for each checkpoint in a movement path. At a checkpoint the movement
can be stopped or paused. Default: `false`.

### cost

cost: number

The movement cost from the previous to this waypoint (nonnegative).

### depth

depth: number

The depth in grid spaces (nonnegative).
Default: the previous or source depth.

### elevation

elevation: number

The elevation in grid units.
Default: the previous or source elevation.

### explicit

explicit: boolean

Was this waypoint explicitly placed by the user? Default: `false`.

### height

height: number

The height in grid spaces (positive).
Default: the previous or source height.

### intermediate

intermediate: boolean

Is this waypoint intermediate? Default: `false`.

### level

level: string

The level ID. Default: the previous or source level ID.

### movementId

movementId: string | null

The ID of the movement from the previous to this waypoint, or null if pending
but not planned.

### shape

shape: [TokenShapeType](../types/CONST.TokenShapeType.md)

The shape type (see [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md)).
Default: the previous or source shape.

### snapped

snapped: boolean

Was this waypoint snapped to the grid? Default: `false`.

### subpathId

subpathId: string

The ID of the subpath, which is equal to the movement ID of the first waypoint
in the subpath.

### terrain

terrain: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

The terrain data of this segment. Default: `null`.

### userId

userId: string

The ID of the user that moved the token to from the previous to this waypoint.

### width

width: number

The width in grid spaces (positive).
Default: the previous or source width.

### x

x: number

The top-left x-coordinate in pixels (integer).
Default: the previous or source x-coordinate.

### y

y: number

The top-left y-coordinate in pixels (integer).
Default: the previous or source y-coordinate.