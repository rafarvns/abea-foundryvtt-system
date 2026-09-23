---
title: "TokenPosition | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenPosition.html"
category: "interfaces"
---

# Interface TokenPosition

interface TokenPosition {  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [shape](#shape): [TokenShapeType](../types/CONST.TokenShapeType.md);  
Â Â Â Â [width](#width): number;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[depth](#depth)
[elevation](#elevation)
[height](#height)
[level](#level)
[shape](#shape)
[width](#width)
[x](#x)
[y](#y)

## Properties

### depth

depth: number

The depth in grid spaces (nonnegative).

### elevation

elevation: number

The elevation in grid units.

### height

height: number

The height in grid spaces (positive).

### level

level: string

The level ID.

### shape

shape: [TokenShapeType](../types/CONST.TokenShapeType.md)

The shape type (see [CONST.TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md)).

### width

width: number

The width in grid spaces (positive).

### x

x: number

The top-left x-coordinate in pixels (integer).

### y

y: number

The top-left y-coordinate in pixels (integer).