---
title: "AmbientLightData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AmbientLightData.html"
category: "interfaces"
---

# Interface AmbientLightData

interface AmbientLightData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [config](#config): [LightData](../classes/foundry.data.LightData.md);  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [hidden](#hidden)?: boolean;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [vision](#vision)?: boolean;  
Â Â Â Â [walls](#walls)?: boolean;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[\_id](#_id)
[config](#config)
[elevation?](#elevation)
[flags](#flags)
[hidden?](#hidden)
[name?](#name)
[rotation?](#rotation)
[vision?](#vision)
[walls?](#walls)
[x](#x)
[y](#y)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this AmbientLight document

### config

config: [LightData](../classes/foundry.data.LightData.md)

Light configuration data

### `Optional`elevation

elevation?: number

The elevation

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`hidden

hidden?: boolean

Is the light source currently hidden?

### `Optional`name

name?: string

An optional name.

### `Optional`rotation

rotation?: number

The angle of rotation for the tile between 0 and 360

### `Optional`vision

vision?: boolean

Whether or not this light source provides a source of vision

### `Optional`walls

walls?: boolean

Whether or not this light source is constrained by Walls and surfaces

### x

x: number

The x-coordinate position of the origin of the light

### y

y: number

The y-coordinate position of the origin of the light