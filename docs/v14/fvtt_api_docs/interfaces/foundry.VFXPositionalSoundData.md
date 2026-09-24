---
title: "VFXPositionalSoundData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXPositionalSoundData.html"
category: "interfaces"
---

# Interface VFXPositionalSoundData

interface VFXPositionalSoundData {  
Â Â Â Â [align](#align): number;  
Â Â Â Â [easing](#easing): boolean;  
Â Â Â Â [radius](#radius): number;  
Â Â Â Â [src](#src): string;  
Â Â Â Â [volume](#volume): number;  
Â Â Â Â [walls](#walls): boolean;  
}

##### Index

### Properties

[align](#align)
[easing](#easing)
[radius](#radius)
[src](#src)
[volume](#volume)
[walls](#walls)

## Properties

### align

align: number

How sound playback aligns with animation, a value in SOUND\_ALIGNMENT (default END)

### easing

easing: boolean

Whether to apply easing to local sound (default true)

### radius

radius: number

Local sound radius in distance units (default 60)

### src

src: string

Sound source path

### volume

volume: number

Playback volume (default 1.0)

### walls

walls: boolean

Whether sound should be constrained by walls (default true)