---
title: "TokenData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenData.html"
category: "interfaces"
---

# Interface TokenData

interface TokenData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_movementHistory](#_movementhistory): object[];  
Â Â Â Â [\_regions](#_regions): string[];  
Â Â Â Â [actorId](#actorid): string | null;  
Â Â Â Â [actorLink](#actorlink)?: boolean;  
Â Â Â Â [alpha](#alpha)?: number;  
Â Â Â Â [bar1](#bar1)?: [TokenBarData](foundry.documents.types.TokenBarData.md);  
Â Â Â Â [bar2](#bar2)?: [TokenBarData](foundry.documents.types.TokenBarData.md);  
Â Â Â Â [delta](#delta)?: [ActorDeltaData](foundry.documents.types.ActorDeltaData.md);  
Â Â Â Â [depth](#depth)?: number;  
Â Â Â Â [detectionModes](#detectionmodes): { [id: string]: [TokenDetectionMode](foundry.documents.types.TokenDetectionMode.md)<true> };  
Â Â Â Â [displayBars](#displaybars)?: number;  
Â Â Â Â [displayName](#displayname)?: number;  
Â Â Â Â [disposition](#disposition)?: number;  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [height](#height)?: number;  
Â Â Â Â [hidden](#hidden)?: boolean;  
Â Â Â Â [level](#level)?: string;  
Â Â Â Â [light](#light)?: [LightData](../classes/foundry.data.LightData.md);  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [lockRotation](#lockrotation)?: boolean;  
Â Â Â Â [movementAction](#movementaction): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [occludable](#occludable): [TokenOcclusionData](foundry.documents.types.TokenOcclusionData.md);  
Â Â Â Â [ring](#ring): [TokenRingData](foundry.documents.types.TokenRingData.md);  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [shape](#shape)?: [TokenShapeType](../types/CONST.TokenShapeType.md);  
Â Â Â Â [sight](#sight): [TokenSightData](foundry.documents.types.TokenSightData.md);  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [texture](#texture): [TextureData](../classes/foundry.data.TextureData.md);  
Â Â Â Â [width](#width)?: number;  
Â Â Â Â [x](#x)?: number;  
Â Â Â Â [y](#y)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_movementHistory](#_movementhistory)
[\_regions](#_regions)
[actorId](#actorid)
[actorLink?](#actorlink)
[alpha?](#alpha)
[bar1?](#bar1)
[bar2?](#bar2)
[delta?](#delta)
[depth?](#depth)
[detectionModes](#detectionmodes)
[displayBars?](#displaybars)
[displayName?](#displayname)
[disposition?](#disposition)
[elevation?](#elevation)
[flags](#flags)
[height?](#height)
[hidden?](#hidden)
[level?](#level)
[light?](#light)
[locked?](#locked)
[lockRotation?](#lockrotation)
[movementAction](#movementaction)
[name](#name)
[occludable](#occludable)
[ring](#ring)
[rotation?](#rotation)
[shape?](#shape)
[sight](#sight)
[sort?](#sort)
[texture](#texture)
[width?](#width)
[x?](#x)
[y?](#y)

## Properties

### \_id

\_id: string | null

The Token \_id which uniquely identifies it within its parent Scene

### \_movementHistory

\_movementHistory: object[]

### \_regions

\_regions: string[]

### actorId

actorId: string | null

The \_id of an Actor document which this Token represents

### `Optional`actorLink

actorLink?: boolean

Does this Token uniquely represent a singular Actor, or is it one of many?

### `Optional`alpha

alpha?: number

The opacity of the token image

### `Optional`bar1

bar1?: [TokenBarData](foundry.documents.types.TokenBarData.md)

The configuration of the Token's primary resource bar

### `Optional`bar2

bar2?: [TokenBarData](foundry.documents.types.TokenBarData.md)

The configuration of the Token's secondary resource bar

### `Optional`delta

delta?: [ActorDeltaData](foundry.documents.types.ActorDeltaData.md)

The ActorDelta embedded document which stores the differences between this
token and the base actor it represents.

### `Optional`depth

depth?: number

The depth of the Token in grid units

### detectionModes

detectionModes: { [id: string]: [TokenDetectionMode](foundry.documents.types.TokenDetectionMode.md)<true> }

A record of detection modes which are available to this Token

### `Optional`displayBars

displayBars?: number

The display mode of Token resource bars, from CONST.TOKEN\_DISPLAY\_MODES

### `Optional`displayName

displayName?: number

The display mode of the Token nameplate, from CONST.TOKEN\_DISPLAY\_MODES

### `Optional`disposition

disposition?: number

A displayed Token disposition from CONST.TOKEN\_DISPOSITIONS

### `Optional`elevation

elevation?: number

The vertical elevation of the Token, in distance units

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`height

height?: number

The height of the Token in grid units

### `Optional`hidden

hidden?: boolean

Is the Token currently hidden from player view?

### `Optional`level

level?: string

The level ID

### `Optional`light

light?: [LightData](../classes/foundry.data.LightData.md)

Configuration of the light source that this Token emits

### `Optional`locked

locked?: boolean

Is the Token currently locked? A locked token cannot be moved or rotated via
standard keyboard or mouse interaction.

### `Optional`lockRotation

lockRotation?: boolean

Prevent the Token image from visually rotating?

### movementAction

movementAction: string

The token's current movement from the keys of CONFIG.Token.movement.actions.
A value of null means the movement mode is inferred.

### name

name: string

The name used to describe the Token

### occludable

occludable: [TokenOcclusionData](foundry.documents.types.TokenOcclusionData.md)

Configuration of occlusion options

### ring

ring: [TokenRingData](foundry.documents.types.TokenRingData.md)

Configuration of the Dynamic Token Ring

### `Optional`rotation

rotation?: number

The rotation of the Token in degrees, from 0 to 360. A value of 0 represents
a southward-facing Token.

### `Optional`shape

shape?: [TokenShapeType](../types/CONST.TokenShapeType.md)

The shape of the Token

### sight

sight: [TokenSightData](foundry.documents.types.TokenSightData.md)

Configuration of sight and vision properties for the Token

### `Optional`sort

sort?: number

The sort order

### texture

texture: [TextureData](../classes/foundry.data.TextureData.md)

The token's texture on the canvas.

### `Optional`width

width?: number

The width of the Token in grid units

### `Optional`x

x?: number

The x-coordinate of the top-left corner of the Token

### `Optional`y

y?: number

The y-coordinate of the top-left corner of the Token