---
title: "TokenMovementSegmentData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementSegmentData.html"
category: "interfaces"
---

# Interface TokenMovementSegmentData

interface TokenMovementSegmentData {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [actionConfig](#actionconfig): [TokenMovementActionConfig](foundry.types.TokenMovementActionConfig.md);  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [shape](#shape): [TokenShapeType](../types/CONST.TokenShapeType.md);  
Â Â Â Â [teleport](#teleport): boolean;  
Â Â Â Â [terrain](#terrain): [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[action](#action)
[actionConfig](#actionconfig)
[depth](#depth)
[height](#height)
[level](#level)
[shape](#shape)
[teleport](#teleport)
[terrain](#terrain)
[width](#width)

## Properties

### action

action: string

The movement action of this segment.

### actionConfig

actionConfig: [TokenMovementActionConfig](foundry.types.TokenMovementActionConfig.md)

The config of the movement action.

### depth

depth: number

The depth in grid spaces (nonnegative).

### height

height: number

The height in grid spaces (positive).

### level

level: string

The level ID.

### shape

shape: [TokenShapeType](../types/CONST.TokenShapeType.md)

The shape type (see [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md)).

### teleport

teleport: boolean

Teleported?

### terrain

terrain: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

The terrain data of this segment.

### width

width: number

The width in grid spaces (positive).