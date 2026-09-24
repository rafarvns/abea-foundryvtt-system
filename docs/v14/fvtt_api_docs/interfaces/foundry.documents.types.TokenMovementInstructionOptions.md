---
title: "TokenMovementInstructionOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementInstructionOptions.html"
category: "interfaces"
---

# Interface TokenMovementInstructionOptions

interface TokenMovementInstructionOptions {  
Â Â Â Â [autoRotate](#autorotate)?: boolean;  
Â Â Â Â [constrainOptions](#constrainoptions)?: Omit<  
Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â | "history"  
Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â >;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [measureOptions](#measureoptions)?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
Â Â Â Â [method](#method)?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md);  
Â Â Â Â [planned](#planned)?: boolean;  
Â Â Â Â [showRuler](#showruler)?: boolean;  
Â Â Â Â [split](#split)?: boolean;  
Â Â Â Â [terrainOptions](#terrainoptions)?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
}

##### Index

### Properties

[autoRotate?](#autorotate)
[constrainOptions?](#constrainoptions)
[id?](#id)
[measureOptions?](#measureoptions)
[method?](#method)
[planned?](#planned)
[showRuler?](#showruler)
[split?](#split)
[terrainOptions?](#terrainoptions)

## Properties

### `Optional`autoRotate

autoRotate?: boolean

Automatically rotate the token in the direction of movement?
Default: [TokenMovementOptions#autoRotate](foundry.documents.types.TokenMovementOptions.md#autorotate).

### `Optional`constrainOptions

constrainOptions?: Omit<  
Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â "preview"  
Â Â Â Â | "history"  
Â Â Â Â | "measureOptions",  
>

The options to constrain movement. Default: [TokenMovementOptions#constrainOptions](foundry.documents.types.TokenMovementOptions.md#constrainoptions).

### `Optional`id

id?: string

The movement ID, which must be unique. Default: auto-generated.

### `Optional`measureOptions

measureOptions?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The options to measure movement.
Default: [TokenMovementOptions#measureOptions](foundry.documents.types.TokenMovementOptions.md#measureoptions).

### `Optional`method

method?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md)

The method of movement. Default: [TokenMovementOptions#method](foundry.documents.types.TokenMovementOptions.md#method).

### `Optional`planned

planned?: boolean

Don't start the movement yet? Default: [TokenMovementOptions#planned](foundry.documents.types.TokenMovementOptions.md#planned).

### `Optional`showRuler

showRuler?: boolean

Show the ruler during the movement animation of the token?
Default: [TokenMovementOptions#showRuler](foundry.documents.types.TokenMovementOptions.md#showruler).

### `Optional`split

split?: boolean

Start a new subpath? Default: [TokenMovementOptions#split](foundry.documents.types.TokenMovementOptions.md#split).

### `Optional`terrainOptions

terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

The terrain movement options. Default: [TokenMovementOptions#terrainOptions](foundry.documents.types.TokenMovementOptions.md#terrainoptions).