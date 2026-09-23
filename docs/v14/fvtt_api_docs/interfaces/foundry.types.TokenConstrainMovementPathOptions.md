---
title: "TokenConstrainMovementPathOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenConstrainMovementPathOptions.html"
category: "interfaces"
---

# Interface TokenConstrainMovementPathOptions

interface TokenConstrainMovementPathOptions {  
Â Â Â Â [history](#history)?:  
Â Â Â Â Â Â Â Â | boolean  
Â Â Â Â Â Â Â Â | readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)>[];  
Â Â Â Â [ignoreCost](#ignorecost)?: boolean;  
Â Â Â Â [ignoreWalls](#ignorewalls)?: boolean;  
Â Â Â Â [maxCost](#maxcost)?: number;  
Â Â Â Â [maxDistance](#maxdistance)?: number;  
Â Â Â Â [measureOptions](#measureoptions)?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
Â Â Â Â [preview](#preview)?: boolean;  
}

##### Index

### Properties

[history?](#history)
[ignoreCost?](#ignorecost)
[ignoreWalls?](#ignorewalls)
[maxCost?](#maxcost)
[maxDistance?](#maxdistance)
[measureOptions?](#measureoptions)
[preview?](#preview)

## Properties

### `Optional`history

history?: boolean | readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenMeasuredMovementWaypoint](foundry.documents.types.TokenMeasuredMovementWaypoint.md)>[]

Consider movement history? If true, uses the current movement history.
If waypoints are passed, use those as the history. Default: `false`.

### `Optional`ignoreCost

ignoreCost?: boolean

Ignore cost? Default: `false`.

### `Optional`ignoreWalls

ignoreWalls?: boolean

Ignore walls and surfaces? Default: `false`.

### `Optional`maxCost

maxCost?: number

The maximum cumulative cost.

### `Optional`maxDistance

maxDistance?: number

The maximum cumulative distance.

### `Optional`measureOptions

measureOptions?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The measurement options.

### `Optional`preview

preview?: boolean

Constrain a preview path? Default: `false`.