---
title: "TokenPreMovementOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenPreMovementOperation.html"
category: "interfaces"
---

# Interface TokenPreMovementOperation

The pre-movement operation data of a token movement.
ONLY `autoRotate` and `showRuler` are writable.

interface TokenPreMovementOperation {  
Â Â Â Â [autoRotate](#autorotate): boolean;  
Â Â Â Â [chain](#chain): string[];  
Â Â Â Â [constrained](#constrained): boolean;  
Â Â Â Â [constrainOptions](#constrainoptions): Omit<  
Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â | "history"  
Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â >;  
Â Â Â Â [destination](#destination): [TokenPosition](foundry.documents.types.TokenPosition.md);  
Â Â Â Â [history](#history): [TokenMovementHistoryData](foundry.documents.types.TokenMovementHistoryData.md);  
Â Â Â Â [id](#id): string;  
Â Â Â Â [measureOptions](#measureoptions): Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
Â Â Â Â [method](#method): [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md);  
Â Â Â Â [origin](#origin): [TokenPosition](foundry.documents.types.TokenPosition.md);  
Â Â Â Â [passed](#passed): [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md);  
Â Â Â Â [pending](#pending): [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md);  
Â Â Â Â [recorded](#recorded): boolean;  
Â Â Â Â [showRuler](#showruler): boolean;  
Â Â Â Â [split](#split): boolean;  
Â Â Â Â [subpathId](#subpathid): string;  
Â Â Â Â [terrainOptions](#terrainoptions): Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
}

##### Index

### Properties

[autoRotate](#autorotate)
[chain](#chain)
[constrained](#constrained)
[constrainOptions](#constrainoptions)
[destination](#destination)
[history](#history)
[id](#id)
[measureOptions](#measureoptions)
[method](#method)
[origin](#origin)
[passed](#passed)
[pending](#pending)
[recorded](#recorded)
[showRuler](#showruler)
[split](#split)
[subpathId](#subpathid)
[terrainOptions](#terrainoptions)

## Properties

### autoRotate

autoRotate: boolean

Automatically rotate the token in the direction of movement?
This property IS writable.

### chain

chain: string[]

The chain of prior movement IDs that this movement is a continuation of.
This property is NOT writable.

### constrained

constrained: boolean

Was the movement constrained?
This property is NOT writable.

### constrainOptions

constrainOptions: Omit<  
Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â "preview"  
Â Â Â Â | "history"  
Â Â Â Â | "measureOptions",  
>

The options to constrain movement.
This property is NOT writable.

### destination

destination: [TokenPosition](foundry.documents.types.TokenPosition.md)

The destination of movement.
This property is NOT writable.

### history

history: [TokenMovementHistoryData](foundry.documents.types.TokenMovementHistoryData.md)

The waypoints and measurements of the history path.
This property is NOT writable.

### id

id: string

The ID of the movement.
This property is NOT writable.

### measureOptions

measureOptions: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The options to measure movement.
This property is NOT writable.

### method

method: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md)

The method of movement.
This property is NOT writable.

### origin

origin: [TokenPosition](foundry.documents.types.TokenPosition.md)

The origin of movement.
This property is NOT writable.

### passed

passed: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The waypoints and measurements of the passed path.
This property is NOT writable.

### pending

pending: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The waypoints and measurements of the pending path.
This property is NOT writable.

### recorded

recorded: boolean

Was the movement recorded in the movement history?
This property is NOT writable.

### showRuler

showRuler: boolean

Show the ruler during the movement animation of the token?
This property IS writable.

### split

split: boolean

Was a new subpath started?
This property is NOT writable.

### subpathId

subpathId: string

The ID of the subpath, which is equal to the movement ID of the first
waypoint in the subpath.
This property is NOT writable.

### terrainOptions

terrainOptions: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

The terrain movement options.
This property is NOT writable.