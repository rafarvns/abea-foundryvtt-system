---
title: "SceneData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.SceneData.html"
category: "interfaces"
---

# Interface SceneData

interface SceneData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [backgroundColor](#backgroundcolor)?: string | null;  
Â Â Â Â [drawings](#drawings)?: [DrawingData](foundry.documents.types.DrawingData.md)[];  
Â Â Â Â [environment](#environment): [SceneEnvironmentData](foundry.documents.types.SceneEnvironmentData.md);  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [fog](#fog): {  
Â Â Â Â Â Â Â Â colors: { explored: string | null; unexplored: string | null };  
Â Â Â Â Â Â Â Â mode: number;  
Â Â Â Â Â Â Â Â reset: number | null | undefined;  
Â Â Â Â };  
Â Â Â Â [folder](#folder): string  
Â Â Â Â | null;  
Â Â Â Â [grid](#grid): [GridData](foundry.documents.types.GridData.md);  
Â Â Â Â [height](#height)?: number;  
Â Â Â Â [initial](#initial): { scale: number | null; x: number | null; y: number | null };  
Â Â Â Â [journal](#journal): string | null;  
Â Â Â Â [journalEntryPage](#journalentrypage): string | null;  
Â Â Â Â [lights](#lights)?: [AmbientLightData](foundry.documents.types.AmbientLightData.md)[];  
Â Â Â Â [name](#name): string;  
Â Â Â Â [navigation](#navigation)?: boolean;  
Â Â Â Â [navName](#navname)?: string;  
Â Â Â Â [navOrder](#navorder)?: number;  
Â Â Â Â [notes](#notes)?: [NoteData](foundry.documents.types.NoteData.md)[];  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [padding](#padding)?: number;  
Â Â Â Â [playlist](#playlist): string | null;  
Â Â Â Â [playlistSound](#playlistsound): string | null;  
Â Â Â Â [regions](#regions)?: [RegionData](foundry.documents.types.RegionData.md)[];  
Â Â Â Â [shiftX](#shiftx)?: number;  
Â Â Â Â [shiftY](#shifty)?: number;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [sounds](#sounds)?: [AmbientSoundData](foundry.documents.types.AmbientSoundData.md)[];  
Â Â Â Â [thumb](#thumb): string | null;  
Â Â Â Â [tiles](#tiles)?: [TileData](foundry.documents.types.TileData.md)[];  
Â Â Â Â [tokens](#tokens)?: [TokenData](foundry.documents.types.TokenData.md)[];  
Â Â Â Â [tokenVision](#tokenvision)?: boolean;  
Â Â Â Â [transition](#transition)?: {  
Â Â Â Â Â Â Â Â activeOnly?: boolean;  
Â Â Â Â Â Â Â Â duration?: number;  
Â Â Â Â Â Â Â Â type?: string | null;  
Â Â Â Â };  
Â Â Â Â [walls](#walls)?: [WallData](foundry.documents.types.WallData.md)[];  
Â Â Â Â [weather](#weather)?: string;  
Â Â Â Â [width](#width)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[active?](#active)
[backgroundColor?](#backgroundcolor)
[drawings?](#drawings)
[environment](#environment)
[flags](#flags)
[fog](#fog)
[folder](#folder)
[grid](#grid)
[height?](#height)
[initial](#initial)
[journal](#journal)
[journalEntryPage](#journalentrypage)
[lights?](#lights)
[name](#name)
[navigation?](#navigation)
[navName?](#navname)
[navOrder?](#navorder)
[notes?](#notes)
[ownership?](#ownership)
[padding?](#padding)
[playlist](#playlist)
[playlistSound](#playlistsound)
[regions?](#regions)
[shiftX?](#shiftx)
[shiftY?](#shifty)
[sort?](#sort)
[sounds?](#sounds)
[thumb](#thumb)
[tiles?](#tiles)
[tokens?](#tokens)
[tokenVision?](#tokenvision)
[transition?](#transition)
[walls?](#walls)
[weather?](#weather)
[width?](#width)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Scene document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`active

active?: boolean

Is this scene currently active? Only one scene may be active at a given time

### `Optional`backgroundColor

backgroundColor?: string | null

The color of the canvas displayed behind the scene background

### `Optional`drawings

drawings?: [DrawingData](foundry.documents.types.DrawingData.md)[]

A collection of embedded Drawing objects.

### environment

environment: [SceneEnvironmentData](foundry.documents.types.SceneEnvironmentData.md)

The environment data applied to the Scene.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### fog

fog: {  
Â Â Â Â colors: { explored: string | null; unexplored: string | null };  
Â Â Â Â mode: number;  
Â Â Â Â reset: number | null | undefined;  
}

Fog-exploration settings and other data

#### Type Declaration

* ##### colors: { explored: string | null; unexplored: string | null }

  Fog-exploration coloration data

  + ##### explored: string | null

    A color tint applied to explored regions of fog of war
  + ##### unexplored: string | null

    A color tint applied to unexplored regions of fog of war
* ##### mode: number

  Fog exploration mode configured for this Scene.
* ##### reset: number | null | undefined

  The timestamp at which fog of war was last reset for this Scene.

### folder

folder: string | null

The \_id of a Folder which contains this Actor

### grid

grid: [GridData](foundry.documents.types.GridData.md)

Grid configuration for the scene

### `Optional`height

height?: number

The height of the scene canvas, normally the height of the background media

### initial

initial: { scale: number | null; x: number | null; y: number | null }

The initial view coordinates for the scene

### journal

journal: string | null

A JournalEntry document which provides narrative details about this Scene

### journalEntryPage

journalEntryPage: string | null

A JournalEntry document which provides narrative details about this Scene

### `Optional`lights

lights?: [AmbientLightData](foundry.documents.types.AmbientLightData.md)[]

A collection of embedded AmbientLight objects.

### name

name: string

The name of this scene

### `Optional`navigation

navigation?: boolean

Is this scene displayed in the top navigation bar?

### `Optional`navName

navName?: string

A string which overrides Scene name for display in the navigation bar

### `Optional`navOrder

navOrder?: number

The sorting order of this Scene in the navigation bar relative to siblings

### `Optional`notes

notes?: [NoteData](foundry.documents.types.NoteData.md)[]

A collection of embedded Note objects.

### `Optional`ownership

ownership?: object

An object which configures ownership of this Scene

### `Optional`padding

padding?: number

The proportion of canvas padding applied around the outside of the scene
dimensions to provide additional buffer space

### playlist

playlist: string | null

A linked Playlist document which should begin automatically playing when this Scene
becomes active.

### playlistSound

playlistSound: string | null

A linked PlaylistSound document from the selected playlist that will begin
automatically playing when this Scene becomes active

### `Optional`regions

regions?: [RegionData](foundry.documents.types.RegionData.md)[]

A collection of embedded Region objects.

### `Optional`shiftX

shiftX?: number

The shift of the scene rect in x-direction (pixels)

### `Optional`shiftY

shiftY?: number

The shift of the scene rect in y-direction (pixels)

### `Optional`sort

sort?: number

The numeric sort value which orders this Actor relative to its siblings

### `Optional`sounds

sounds?: [AmbientSoundData](foundry.documents.types.AmbientSoundData.md)[]

A collection of embedded AmbientSound objects.

### thumb

thumb: string | null

A thumbnail image which depicts the scene at lower resolution

### `Optional`tiles

tiles?: [TileData](foundry.documents.types.TileData.md)[]

A collection of embedded Tile objects.

### `Optional`tokens

tokens?: [TokenData](foundry.documents.types.TokenData.md)[]

A collection of embedded Token objects.

### `Optional`tokenVision

tokenVision?: boolean

Do Tokens require vision in order to see the Scene environment?

### `Optional`transition

transition?: { activeOnly?: boolean; duration?: number; type?: string | null }

The transition animation

### `Optional`walls

walls?: [WallData](foundry.documents.types.WallData.md)[]

A collection of embedded Wall objects

### `Optional`weather

weather?: string

A named weather effect which should be rendered in this Scene.

### `Optional`width

width?: number

The width of the scene canvas, normally the width of the background media