---
title: "AmbientSoundData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AmbientSoundData.html"
category: "interfaces"
---

# Interface AmbientSoundData

interface AmbientSoundData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [darkness](#darkness): { max: number; min: number };  
Â Â Â Â [easing](#easing): boolean;  
Â Â Â Â [effects](#effects): { base: [AmbientSoundEffect](foundry.documents.types.AmbientSoundEffect.md); muffled: [AmbientSoundEffect](foundry.documents.types.AmbientSoundEffect.md) };  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [path](#path): string;  
Â Â Â Â [radius](#radius): number;  
Â Â Â Â [repeat](#repeat)?: boolean;  
Â Â Â Â [volume](#volume)?: number;  
Â Â Â Â [walls](#walls): boolean;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[\_id](#_id)
[darkness](#darkness)
[easing](#easing)
[effects](#effects)
[elevation?](#elevation)
[flags](#flags)
[hidden](#hidden)
[name?](#name)
[path](#path)
[radius](#radius)
[repeat?](#repeat)
[volume?](#volume)
[walls](#walls)
[x](#x)
[y](#y)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this AmbientSound document

### darkness

darkness: { max: number; min: number }

A darkness range (min and max) for which the source should be active

### easing

easing: boolean

Whether to adjust the volume of the sound heard by the listener based on how
close the listener is to the center of the sound source. True by default.

### effects

effects: { base: [AmbientSoundEffect](foundry.documents.types.AmbientSoundEffect.md); muffled: [AmbientSoundEffect](foundry.documents.types.AmbientSoundEffect.md) }

Special effects to apply to the sound

### `Optional`elevation

elevation?: number

The elevation

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### hidden

hidden: boolean

Is the sound source currently hidden? False by default.

### `Optional`name

name?: string

An optional name.

### path

path: string

The audio file path that is played by this sound

### radius

radius: number

The radius of the emitted sound.

### `Optional`repeat

repeat?: boolean

Does this sound loop?

### `Optional`volume

volume?: number

The audio volume of the sound, from 0 to 1

### walls

walls: boolean

Whether or not this sound source is constrained by Walls and surfaces.
True by default.

### x

x: number

The x-coordinate position of the origin of the sound.

### y

y: number

The y-coordinate position of the origin of the sound.