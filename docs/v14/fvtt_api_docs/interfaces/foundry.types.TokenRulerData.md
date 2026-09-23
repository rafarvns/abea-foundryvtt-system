---
title: "TokenRulerData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenRulerData.html"
category: "interfaces"
---

# Interface TokenRulerData

interface TokenRulerData {  
Â Â Â Â [passedWaypoints](#passedwaypoints): [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[];  
Â Â Â Â [pendingWaypoints](#pendingwaypoints): [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[];  
Â Â Â Â [plannedMovement](#plannedmovement): { [userId: string]: [TokenPlannedMovement](foundry.types.TokenPlannedMovement.md) };  
}

##### Index

### Properties

[passedWaypoints](#passedwaypoints)
[pendingWaypoints](#pendingwaypoints)
[plannedMovement](#plannedmovement)

## Properties

### passedWaypoints

passedWaypoints: [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

The waypoints that were already passed by the Token

### pendingWaypoints

pendingWaypoints: [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

The waypoints that the Token will try move to next

### plannedMovement

plannedMovement: { [userId: string]: [TokenPlannedMovement](foundry.types.TokenPlannedMovement.md) }

Movement planned by Users