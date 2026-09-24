---
title: "TokenDragContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenDragContext.html"
category: "interfaces"
---

# Interface TokenDragContext

interface TokenDragContext {  
Â Â Â Â [clonedToken](#clonedtoken): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md);  
Â Â Â Â [destination](#destination): [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md);  
Â Â Â Â [foundPath](#foundpath): [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[];  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [origin](#origin): [TokenPosition](foundry.documents.types.TokenPosition.md);  
Â Â Â Â [search](#search): [TokenFindMovementPathJob](foundry.types.TokenFindMovementPathJob.md);  
Â Â Â Â [searchId](#searchid): number;  
Â Â Â Â [searching](#searching): boolean;  
Â Â Â Â [token](#token): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md);  
Â Â Â Â [unreachableWaypoints](#unreachablewaypoints): [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[];  
Â Â Â Â [updating](#updating): boolean;  
Â Â Â Â [waypoints](#waypoints): Partial<[TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)>[];  
}

##### Index

### Properties

[clonedToken](#clonedtoken)
[destination](#destination)
[foundPath](#foundpath)
[hidden](#hidden)
[origin](#origin)
[search](#search)
[searchId](#searchid)
[searching](#searching)
[token](#token)
[unreachableWaypoints](#unreachablewaypoints)
[updating](#updating)
[waypoints](#waypoints)

## Properties

### clonedToken

clonedToken: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)

### destination

destination: [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)

### foundPath

foundPath: [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[]

### hidden

hidden: boolean

### origin

origin: [TokenPosition](foundry.documents.types.TokenPosition.md)

### search

search: [TokenFindMovementPathJob](foundry.types.TokenFindMovementPathJob.md)

### searchId

searchId: number

### searching

searching: boolean

### token

token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)

### unreachableWaypoints

unreachableWaypoints: [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[]

### updating

updating: boolean

### waypoints

waypoints: Partial<[TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)>[]