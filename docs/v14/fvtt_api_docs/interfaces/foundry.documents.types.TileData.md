---
title: "TileData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TileData.html"
category: "interfaces"
---

# Interface TileData

interface TileData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [alpha](#alpha)?: number;  
Â Â Â Â [anchorX](#anchorx)?: number;  
Â Â Â Â [anchorY](#anchory)?: number;  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [height](#height)?: number;  
Â Â Â Â [hidden](#hidden)?: boolean;  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [occlusion](#occlusion)?: [TileOcclusionData](foundry.documents.types.TileOcclusionData.md);  
Â Â Â Â [restrictions](#restrictions)?: [TileRestrictionsData](foundry.documents.types.TileRestrictionsData.md);  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [texture](#texture)?: [TextureData](../classes/foundry.data.TextureData.md);  
Â Â Â Â [video](#video)?: [TileVideoData](foundry.documents.types.TileVideoData.md);  
Â Â Â Â [width](#width)?: number;  
Â Â Â Â [x](#x)?: number;  
Â Â Â Â [y](#y)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[alpha?](#alpha)
[anchorX?](#anchorx)
[anchorY?](#anchory)
[elevation?](#elevation)
[flags](#flags)
[height?](#height)
[hidden?](#hidden)
[locked?](#locked)
[name?](#name)
[occlusion?](#occlusion)
[restrictions?](#restrictions)
[rotation?](#rotation)
[sort?](#sort)
[texture?](#texture)
[video?](#video)
[width?](#width)
[x?](#x)
[y?](#y)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Tile embedded document

### `Optional`alpha

alpha?: number

The tile opacity

### `Optional`anchorX

anchorX?: number

The x-coordinate of the anchor of the tile

### `Optional`anchorY

anchorY?: number

The y-coordinate of the anchor of the tile

### `Optional`elevation

elevation?: number

The elevation of the tile

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`height

height?: number

The pixel height of the tile

### `Optional`hidden

hidden?: boolean

Is the tile currently hidden?

### `Optional`locked

locked?: boolean

Is the tile currently locked?

### `Optional`name

name?: string

An optional name.

### `Optional`occlusion

occlusion?: [TileOcclusionData](foundry.documents.types.TileOcclusionData.md)

The tile's occlusion settings

### `Optional`restrictions

restrictions?: [TileRestrictionsData](foundry.documents.types.TileRestrictionsData.md)

The tile's restrictions settings

### `Optional`rotation

rotation?: number

The angle of rotation for the tile between 0 and 360

### `Optional`sort

sort?: number

The z-index ordering of this tile relative to its siblings

### `Optional`texture

texture?: [TextureData](../classes/foundry.data.TextureData.md)

An image or video texture which this tile displays.

### `Optional`video

video?: [TileVideoData](foundry.documents.types.TileVideoData.md)

The tile's video settings

### `Optional`width

width?: number

The pixel width of the tile

### `Optional`x

x?: number

The x-coordinate of the origin of the tile

### `Optional`y

y?: number

The y-coordinate of the origin of the tile