---
title: "TokenMovementHistoryData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementHistoryData.html"
category: "interfaces"
---

# Interface TokenMovementHistoryData

interface TokenMovementHistoryData {  
Â Â Â Â [cost](#cost): number;  
Â Â Â Â [diagonals](#diagonals): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [recorded](#recorded): [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md);  
Â Â Â Â [spaces](#spaces): number;  
Â Â Â Â [unrecorded](#unrecorded): [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md);  
}

##### Index

### Properties

[cost](#cost)
[diagonals](#diagonals)
[distance](#distance)
[recorded](#recorded)
[spaces](#spaces)
[unrecorded](#unrecorded)

## Properties

### cost

cost: number

The cost of the combined movement path

### diagonals

diagonals: number

The number of diagonals moved along the combined path

### distance

distance: number

The distance of the combined movement path

### recorded

recorded: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The recorded waypoints of the movement path

### spaces

spaces: number

The number of spaces moved along the combined path

### unrecorded

unrecorded: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The unrecored waypoints of the movement path