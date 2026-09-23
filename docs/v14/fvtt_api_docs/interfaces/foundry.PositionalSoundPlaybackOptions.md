---
title: "PositionalSoundPlaybackOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PositionalSoundPlaybackOptions.html"
category: "interfaces"
---

# Interface PositionalSoundPlaybackOptions

interface PositionalSoundPlaybackOptions {  
Â Â Â Â [baseEffect](#baseeffect)?: any;  
Â Â Â Â [easing](#easing)?: boolean;  
Â Â Â Â [gmAlways](#gmalways)?: boolean;  
Â Â Â Â [muffledEffect](#muffledeffect)?: any;  
Â Â Â Â [playbackOptions](#playbackoptions)?: [SoundPlaybackOptions](foundry.audio.SoundPlaybackOptions.md);  
Â Â Â Â [sourceData](#sourcedata)?: any;  
Â Â Â Â [volume](#volume)?: number;  
Â Â Â Â [walls](#walls)?: boolean;  
}

##### Index

### Properties

[baseEffect?](#baseeffect)
[easing?](#easing)
[gmAlways?](#gmalways)
[muffledEffect?](#muffledeffect)
[playbackOptions?](#playbackoptions)
[sourceData?](#sourcedata)
[volume?](#volume)
[walls?](#walls)

## Properties

### `Optional`baseEffect

baseEffect?: any

A base sound effect to apply to playback

### `Optional`easing

easing?: boolean

Should volume be attenuated by distance?

### `Optional`gmAlways

gmAlways?: boolean

Should the sound always be played for GM users regardless
of actively controlled tokens?

### `Optional`muffledEffect

muffledEffect?: any

A muffled sound effect to apply to playback, a sound may
only be muffled if it is not constrained by walls and surfaces

### `Optional`playbackOptions

playbackOptions?: [SoundPlaybackOptions](foundry.audio.SoundPlaybackOptions.md)

Additional options passed to Sound#play

### `Optional`sourceData

sourceData?: any

Additional data passed to the SoundSource constructor

### `Optional`volume

volume?: number

The maximum volume at which the effect should be played

### `Optional`walls

walls?: boolean

Should the sound be constrained by walls and surfaces?