---
title: "PlaylistSoundData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.PlaylistSoundData.html"
category: "interfaces"
---

# Interface PlaylistSoundData

interface PlaylistSoundData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [channel](#channel): string;  
Â Â Â Â [description](#description): string;  
Â Â Â Â [fade](#fade)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [path](#path): string;  
Â Â Â Â [pausedTime](#pausedtime)?: number;  
Â Â Â Â [playing](#playing)?: boolean;  
Â Â Â Â [repeat](#repeat)?: boolean;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [volume](#volume)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[channel](#channel)
[description](#description)
[fade?](#fade)
[flags](#flags)
[name](#name)
[path](#path)
[pausedTime?](#pausedtime)
[playing?](#playing)
[repeat?](#repeat)
[sort?](#sort)
[volume?](#volume)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this PlaylistSound document

### channel

channel: string

A channel in CONST.AUDIO\_CHANNELS where this sound is played

### description

description: string

The description of this sound

### `Optional`fade

fade?: number

A duration in milliseconds to fade volume transition

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### name

name: string

The name of this sound

### path

path: string

The audio file path that is played by this sound

### `Optional`pausedTime

pausedTime?: number

The time in seconds at which playback was paused

### `Optional`playing

playing?: boolean

Is this sound currently playing?

### `Optional`repeat

repeat?: boolean

Does this sound loop?

### `Optional`sort

sort?: number

The sort order of the PlaylistSound relative to others in the same collection

### `Optional`volume

volume?: number

The audio volume of the sound, from 0 to 1