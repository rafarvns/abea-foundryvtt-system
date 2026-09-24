---
title: "TokenFindMovementPathOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenFindMovementPathOptions.html"
category: "interfaces"
---

# Interface TokenFindMovementPathOptions

interface TokenFindMovementPathOptions {  
Â Â Â Â [constrainOptions](#constrainoptions)?: Omit<  
Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â >;  
Â Â Â Â [delay](#delay)?: number;  
Â Â Â Â [measureOptions](#measureoptions)?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
Â Â Â Â [preview](#preview)?: boolean;  
Â Â Â Â [terrainOptions](#terrainoptions)?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
}

##### Index

### Properties

[constrainOptions?](#constrainoptions)
[delay?](#delay)
[measureOptions?](#measureoptions)
[preview?](#preview)
[terrainOptions?](#terrainoptions)

## Properties

### `Optional`constrainOptions

constrainOptions?: Omit<  
Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â "preview"  
Â Â Â Â | "measureOptions",  
>

The constrain options.

### `Optional`delay

delay?: number

Unless the path can be found instantly, delay the start of the pathfinding
computation by this number of milliseconds. Default: `0`.

### `Optional`measureOptions

measureOptions?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The measure options.

### `Optional`preview

preview?: boolean

Find a preview path? Default: `false`.

### `Optional`terrainOptions

terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

The terrain options.