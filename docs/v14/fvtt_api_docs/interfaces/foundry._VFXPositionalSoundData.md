---
title: "_VFXPositionalSoundData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry._VFXPositionalSoundData.html"
category: "interfaces"
---

# Interface \_VFXPositionalSoundData

interface \_VFXPositionalSoundData {  
Â Â Â Â [angle](#angle)?: number;  
Â Â Â Â [baseEffect](#baseeffect)?: { intensity: number; type: string } | null;  
Â Â Â Â [channel](#channel): string;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [fade](#fade): number;  
Â Â Â Â [gmAlways](#gmalways): boolean;  
Â Â Â Â [muffledEffect](#muffledeffect)?: { intensity: number; type: string } | null;  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[angle?](#angle)
[baseEffect?](#baseeffect)
[channel](#channel)
[duration?](#duration)
[elevation](#elevation)
[fade](#fade)
[gmAlways](#gmalways)
[muffledEffect?](#muffledeffect)
[rotation?](#rotation)
[x](#x)
[y](#y)

## Properties

### `Optional`angle

angle?: number

The angle of the sound cone in degrees

### `Optional`baseEffect

baseEffect?: { intensity: number; type: string } | null

Audio effect applied when the sound is not muffled

### channel

channel: string

Audio channel for playback (default "environment")

### `Optional`duration

duration?: number

Component duration in milliseconds; defaults to the sound's natural duration

### elevation

elevation: number

The elevation of the sound origin

### fade

fade: number

Fade-in duration in milliseconds (default 0)

### gmAlways

gmAlways: boolean

Whether the GM always hears the sound regardless of position (default true)

### `Optional`muffledEffect

muffledEffect?: { intensity: number; type: string } | null

Audio effect applied when the sound is muffled

### `Optional`rotation

rotation?: number

The direction of sound emission in degrees

### x

x: number

The x coordinate of the sound origin

### y

y: number

The y coordinate of the sound origin