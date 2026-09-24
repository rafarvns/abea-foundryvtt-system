---
title: "TokenPlannedMovement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenPlannedMovement.html"
category: "interfaces"
---

# Interface TokenPlannedMovement

interface TokenPlannedMovement {  
Â Â Â Â [foundPath](#foundpath): [TokenPlannedMovementWaypoint](../types/foundry.types.TokenPlannedMovementWaypoint.md)[];  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [history](#history): [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[];  
Â Â Â Â [searching](#searching): boolean;  
Â Â Â Â [unreachableWaypoints](#unreachablewaypoints): [TokenPlannedMovementWaypoint](../types/foundry.types.TokenPlannedMovementWaypoint.md)[];  
}

##### Index

### Properties

[foundPath](#foundpath)
[hidden](#hidden)
[history](#history)
[searching](#searching)
[unreachableWaypoints](#unreachablewaypoints)

## Properties

### foundPath

foundPath: [TokenPlannedMovementWaypoint](../types/foundry.types.TokenPlannedMovementWaypoint.md)[]

The found path, which goes through all but the
unreachable waypoints

### hidden

hidden: boolean

Is the path hidden?

### history

history: [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

The movement history

### searching

searching: boolean

Is the pathfinding still in progress?

### unreachableWaypoints

unreachableWaypoints: [TokenPlannedMovementWaypoint](../types/foundry.types.TokenPlannedMovementWaypoint.md)[]

The unreachable waypoints, which are those that are
not reached by the found path