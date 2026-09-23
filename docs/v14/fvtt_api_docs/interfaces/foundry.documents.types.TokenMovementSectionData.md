---
title: "TokenMovementSectionData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementSectionData.html"
category: "interfaces"
---

# Interface TokenMovementSectionData

interface TokenMovementSectionData {  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [diagonals](#diagonals): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [spaces](#spaces): number;  
Â Â Â Â [waypoints](#waypoints): [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[];  
}

##### Index

### Properties

[cost](#cost)
[diagonals](#diagonals)
[distance](#distance)
[spaces](#spaces)
[waypoints](#waypoints)

## Properties

### cost

cost: number

The cost of the movement path

### diagonals

diagonals: number

The number of diagonals moved along the path

### distance

distance: number

The distance of the movement path

### spaces

spaces: number

The number of spaces moved along the path

### waypoints

waypoints: [TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)[]

The waypoints of the movement path