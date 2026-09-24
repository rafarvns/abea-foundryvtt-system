---
title: "LevelData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.LevelData.html"
category: "interfaces"
---

# Interface LevelData

interface LevelData {  
Â Â Â Â [\_id](#_id): string;  
Â Â Â Â [background](#background): [LevelTexture](foundry.documents.types.LevelTexture.md) & { color: number };  
Â Â Â Â [elevation](#elevation): { bottom: number; top: number };  
Â Â Â Â [flags](#flags): object;  
Â Â Â Â [fog](#fog): Omit<[LevelTexture](foundry.documents.types.LevelTexture.md), "alphaThreshold">;  
Â Â Â Â [foreground](#foreground): [LevelTexture](foundry.documents.types.LevelTexture.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [textures](#textures): Omit<[TextureData](../classes/foundry.data.TextureData.md), "src" | "tint" | "alphaThreshold">;  
Â Â Â Â [visibility](#visibility): { levels: Set<string> };  
}

##### Index

### Properties

[\_id](#_id)
[background](#background)
[elevation](#elevation)
[flags](#flags)
[fog](#fog)
[foreground](#foreground)
[name](#name)
[sort](#sort)
[textures](#textures)
[visibility](#visibility)

## Properties

### \_id

\_id: string

### background

background: [LevelTexture](foundry.documents.types.LevelTexture.md) & { color: number }

### elevation

elevation: { bottom: number; top: number }

### flags

flags: object

### fog

fog: Omit<[LevelTexture](foundry.documents.types.LevelTexture.md), "alphaThreshold">

### foreground

foreground: [LevelTexture](foundry.documents.types.LevelTexture.md)

### name

name: string

### sort

sort: number

### textures

textures: Omit<[TextureData](../classes/foundry.data.TextureData.md), "src" | "tint" | "alphaThreshold">

### visibility

visibility: { levels: Set<string> }