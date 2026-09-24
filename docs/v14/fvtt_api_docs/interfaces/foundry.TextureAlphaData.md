---
title: "TextureAlphaData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TextureAlphaData.html"
category: "interfaces"
---

# Interface TextureAlphaData

interface TextureAlphaData {  
Â Â Â Â [data](#data): Uint8Array;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [maxX](#maxx): number;  
Â Â Â Â [maxY](#maxy): number;  
Â Â Â Â [minX](#minx): number;  
Â Â Â Â [minY](#miny): number;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[data](#data)
[height](#height)
[maxX](#maxx)
[maxY](#maxy)
[minX](#minx)
[minY](#miny)
[width](#width)

## Properties

### data

data: Uint8Array

The array containing the texture alpha values (0-255)
with the dimensions (maxX-minX)Ã(maxY-minY).

### height

height: number

The height of the (downscaled) texture.

### maxX

maxX: number

The maximum x-coordinate with alpha > 0 plus 1.

### maxY

maxY: number

The maximum y-coordinate with alpha > 0 plus 1.

### minX

minX: number

The minimum x-coordinate with alpha > 0.

### minY

minY: number

The minimum y-coordinate with alpha > 0.

### width

width: number

The width of the (downscaled) texture.