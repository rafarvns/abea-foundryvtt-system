---
title: "TokenAnimationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenAnimationData.html"
category: "interfaces"
---

# Interface TokenAnimationData

interface TokenAnimationData {  
Â Â Â Â [alpha](#alpha): number;  
Â Â Â Â [bar1](#bar1): object;  
Â Â Â Â [bar2](#bar2): object;  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [ring](#ring): { subject: { scale: number; texture: string } };  
Â Â Â Â [rotation](#rotation): number;  
Â Â Â Â [texture](#texture): {  
Â Â Â Â Â Â Â Â anchorX: number;  
Â Â Â Â Â Â Â Â anchorY: number;  
Â Â Â Â Â Â Â Â scaleX: number;  
Â Â Â Â Â Â Â Â scaleY: number;  
Â Â Â Â Â Â Â Â src: string;  
Â Â Â Â Â Â Â Â tint: [Color](../classes/foundry.utils.Color.md);  
Â Â Â Â };  
Â Â Â Â [width](#width): number;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[alpha](#alpha)
[bar1](#bar1)
[bar2](#bar2)
[depth](#depth)
[elevation](#elevation)
[height](#height)
[level](#level)
[ring](#ring)
[rotation](#rotation)
[texture](#texture)
[width](#width)
[x](#x)
[y](#y)

## Properties

### alpha

alpha: number

The alpha value

### bar1

bar1: object

Attribute bar 1

### bar2

bar2: object

Attribute bar 2

### depth

depth: number

The depth in grid spaces

### elevation

elevation: number

The elevation in grid units

### height

height: number

The height in grid spaces

### level

level: string

The level ID

### ring

ring: { subject: { scale: number; texture: string } }

The ring data

#### Type Declaration

* ##### subject: { scale: number; texture: string }

  The ring subject data

  + ##### scale: number

    The ring subject scale
  + ##### texture: string

    The ring subject texture

### rotation

rotation: number

The rotation in degrees

### texture

texture: {  
Â Â Â Â anchorX: number;  
Â Â Â Â anchorY: number;  
Â Â Â Â scaleX: number;  
Â Â Â Â scaleY: number;  
Â Â Â Â src: string;  
Â Â Â Â tint: [Color](../classes/foundry.utils.Color.md);  
}

The texture data

#### Type Declaration

* ##### anchorX: number

  The texture anchor X
* ##### anchorY: number

  The texture anchor Y
* ##### scaleX: number

  The texture scale X
* ##### scaleY: number

  The texture scale Y
* ##### src: string

  The texture file path
* ##### tint: [Color](../classes/foundry.utils.Color.md)

  The texture tint

### width

width: number

The width in grid spaces

### x

x: number

The x position in pixels

### y

y: number

The y position in pixels