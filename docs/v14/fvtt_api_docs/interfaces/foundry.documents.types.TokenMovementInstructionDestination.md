---
title: "TokenMovementInstructionDestination | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementInstructionDestination.html"
category: "interfaces"
---

# Interface TokenMovementInstructionDestination

interface TokenMovementInstructionDestination {  
Â Â Â Â [destination](#destination): Partial<[TokenData](foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)>;  
}

##### Index

### Properties

[destination](#destination)

## Properties

### destination

destination: Partial<[TokenData](foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)>

The destination which may include additional
token data.