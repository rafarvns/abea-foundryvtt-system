---
title: "TokenMovementOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementOperation.html"
category: "interfaces"
---

# Interface TokenMovementOperation

The (post-)movement operation data of a token movement.
NONE of the properties are writable.

interface TokenMovementOperation {  
Â Â Â Â [animation](#animation): {  
Â Â Â Â Â Â Â Â duration: number;  
Â Â Â Â Â Â Â Â ended: Promise<void>;  
Â Â Â Â Â Â Â Â started: Promise<void>;  
Â Â Â Â };  
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
Â Â Â Â [finished](#finished): Promise<boolean>;  
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

[animation](#animation)
[autoRotate](#autorotate)
[chain](#chain)
[constrained](#constrained)
[constrainOptions](#constrainoptions)
[destination](#destination)
[finished](#finished)
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

### animation

animation: { duration: number; ended: Promise<void>; started: Promise<void> }

The promise that resolves when the animation of this movement starts, the promise that resolves when
the animation of this movement ends, and the duration of the animation of this movement.

### autoRotate

autoRotate: boolean

Automatically rotate the token in the direction of movement?

### chain

chain: string[]

The chain of prior movement IDs that this movement is a continuation of

### constrained

constrained: boolean

Was the movement constrained?

### constrainOptions

constrainOptions: Omit<  
Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â "preview"  
Â Â Â Â | "history"  
Â Â Â Â | "measureOptions",  
>

The options to constrain movement

### destination

destination: [TokenPosition](foundry.documents.types.TokenPosition.md)

The destination of movement

### finished

finished: Promise<boolean>

The promise that resolves once the entire movement is finished.
It resolves to true if the movement completed, otherwise false.

### history

history: [TokenMovementHistoryData](foundry.documents.types.TokenMovementHistoryData.md)

The waypoints and measurements of the history path

### id

id: string

The ID of the movement

### measureOptions

measureOptions: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The options to measure movement

### method

method: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md)

The method of movement

### origin

origin: [TokenPosition](foundry.documents.types.TokenPosition.md)

The origin of movement

### passed

passed: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The waypoints and measurements of the passed path

### pending

pending: [TokenMovementSectionData](foundry.documents.types.TokenMovementSectionData.md)

The waypoints and measurements of the pending path

### recorded

recorded: boolean

Was the movement recorded in the movement history?

### showRuler

showRuler: boolean

Show the ruler during the movement animation of the token?

### split

split: boolean

Was a new subpath started?

### subpathId

subpathId: string

The ID of the subpath, which is equal to the movement ID of the first
waypoint in the subpath.

### terrainOptions

terrainOptions: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

The terrain movement options