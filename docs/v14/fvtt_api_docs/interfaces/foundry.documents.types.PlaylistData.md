---
title: "PlaylistData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.PlaylistData.html"
category: "interfaces"
---

# Interface PlaylistData

interface PlaylistData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [channel](#channel): string;  
Â Â Â Â [description](#description): string;  
Â Â Â Â [fade](#fade)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [mode](#mode)?: number;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [playing](#playing)?: boolean;  
Â Â Â Â [seed](#seed)?: number;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [sorting](#sorting): string;  
Â Â Â Â [sounds](#sounds): [PlaylistSoundData](foundry.documents.types.PlaylistSoundData.md)[];  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[channel](#channel)
[description](#description)
[fade?](#fade)
[flags](#flags)
[folder](#folder)
[mode?](#mode)
[name](#name)
[ownership?](#ownership)
[playing?](#playing)
[seed?](#seed)
[sort?](#sort)
[sorting](#sorting)
[sounds](#sounds)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Playlist document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### channel

channel: string

A channel in CONST.AUDIO\_CHANNELS where all sounds in this playlist are played

### description

description: string

The description of this playlist

### `Optional`fade

fade?: number

A duration in milliseconds to fade volume transition

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this playlist

### `Optional`mode

mode?: number

The playback mode for sounds in this playlist

### name

name: string

The name of this playlist

### `Optional`ownership

ownership?: object

An object which configures ownership of this Playlist

### `Optional`playing

playing?: boolean

Is this playlist currently playing?

### `Optional`seed

seed?: number

A seed used for playlist randomization to guarantee that all clients generate
the same random order.

### `Optional`sort

sort?: number

The numeric sort value which orders this playlist relative to its siblings

### sorting

sorting: string

The sorting mode used for this playlist.

### sounds

sounds: [PlaylistSoundData](foundry.documents.types.PlaylistSoundData.md)[]

A Collection of PlaylistSounds embedded documents which belong to
this playlist