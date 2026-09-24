---
title: "AmbientSoundPlaybackConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types.AmbientSoundPlaybackConfig.html"
category: "interfaces"
---

# Interface AmbientSoundPlaybackConfig

interface AmbientSoundPlaybackConfig {  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [listener](#listener): [ElevatedPoint](foundry.types.ElevatedPoint.md);  
Â Â Â Â [muffled](#muffled): boolean;  
Â Â Â Â [object](#object): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[AmbientSound](../classes/foundry.canvas.placeables.AmbientSound.md);  
Â Â Â Â [sound](#sound): [Sound](../classes/foundry.audio.Sound.md);  
Â Â Â Â [source](#source): [PointSoundSource](../classes/foundry.canvas.sources.PointSoundSource.md);  
Â Â Â Â [volume](#volume): number;  
Â Â Â Â [walls](#walls): boolean;  
}

##### Index

### Properties

[distance](#distance)
[listener](#listener)
[muffled](#muffled)
[object](#object)
[sound](#sound)
[source](#source)
[volume](#volume)
[walls](#walls)

## Properties

### distance

distance: number

The minimum distance between a listener and the AmbientSound origin

### listener

listener: [ElevatedPoint](foundry.types.ElevatedPoint.md)

The coordinates of the closest listener or undefined if there is none

### muffled

muffled: boolean

Is the closest listener muffled

### object

object: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[AmbientSound](../classes/foundry.canvas.placeables.AmbientSound.md)

An AmbientSound object responsible for the sound, or undefined

### sound

sound: [Sound](../classes/foundry.audio.Sound.md)

The Sound node which should be controlled for playback

### source

source: [PointSoundSource](../classes/foundry.canvas.sources.PointSoundSource.md)

The SoundSource which defines the area of effect for the sound

### volume

volume: number

The final volume at which the Sound should be played

### walls

walls: boolean

Is playback constrained or muffled by walls and surfaces?