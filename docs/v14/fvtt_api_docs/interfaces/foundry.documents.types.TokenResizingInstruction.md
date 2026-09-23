---
title: "TokenResizingInstruction | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenResizingInstruction.html"
category: "interfaces"
---

# Interface TokenResizingInstruction

Resize the Token such that its center point remains (almost) unchanged. The center point might change
slightly because the new (x, y) position is rounded.

interface TokenResizingInstruction {  
Â Â Â Â [autoRotate](#autorotate)?: false;  
Â Â Â Â [constrainOptions](#constrainoptions)?: { ignoreCost: true; ignoreWalls: true };  
Â Â Â Â [dimensions](#dimensions): Partial<  
Â Â Â Â Â Â Â Â Omit<[TokenData](foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md), "x" | "y" | "elevation">,  
Â Â Â Â >;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [measureOptions](#measureoptions)?: {};  
Â Â Â Â [method](#method)?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md);  
Â Â Â Â [planned](#planned)?: boolean;  
Â Â Â Â [showRuler](#showruler)?: false;  
Â Â Â Â [split](#split)?: boolean;  
Â Â Â Â [terrainOptions](#terrainoptions)?: {};  
}

##### Index

### Properties

[autoRotate?](#autorotate)
[constrainOptions?](#constrainoptions)
[dimensions](#dimensions)
[id?](#id)
[measureOptions?](#measureoptions)
[method?](#method)
[planned?](#planned)
[showRuler?](#showruler)
[split?](#split)
[terrainOptions?](#terrainoptions)

## Properties

### `Optional`autoRotate

autoRotate?: false

Resizing never auto rotates.

### `Optional`constrainOptions

constrainOptions?: { ignoreCost: true; ignoreWalls: true }

Resizing always ignores walls, surfaces and
impassable terrain.

### dimensions

dimensions: Partial<  
Â Â Â Â Omit<[TokenData](foundry.documents.types.TokenData.md) & [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md), "x" | "y" | "elevation">,  
>

The new dimensions and additional data.

### `Optional`id

id?: string

The movement ID, which must be unique. Default: auto-generated.

### `Optional`measureOptions

measureOptions?: {}

Resizing doesn't cost anything.

### `Optional`method

method?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md)

The method of movement. Default: [TokenMovementOptions#method](foundry.documents.types.TokenMovementOptions.md#method).

### `Optional`planned

planned?: boolean

Don't start the movement yet? Default: [TokenMovementOptions#planned](foundry.documents.types.TokenMovementOptions.md#planned).

### `Optional`showRuler

showRuler?: false

Resizing never shows the ruler.

### `Optional`split

split?: boolean

Start a new subpath? Default: [TokenMovementOptions#split](foundry.documents.types.TokenMovementOptions.md#split).

### `Optional`terrainOptions

terrainOptions?: {}

Resizing doesn't move through terrain.