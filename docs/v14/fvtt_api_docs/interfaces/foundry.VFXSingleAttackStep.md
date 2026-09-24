---
title: "VFXSingleAttackStep | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXSingleAttackStep.html"
category: "interfaces"
---

# Interface VFXSingleAttackStep

interface VFXSingleAttackStep {  
Â Â Â Â [animations](#animations)?: { function: string; params: object }[];  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [scale](#scale)?: { x: number; y: number };  
Â Â Â Â [size](#size)?: number;  
Â Â Â Â [sound](#sound): [VFXPositionalSoundData](foundry.VFXPositionalSoundData.md) | null;  
Â Â Â Â [texture](#texture): string | null;  
}

##### Index

### Properties

[animations?](#animations)
[duration?](#duration)
[scale?](#scale)
[size?](#size)
[sound](#sound)
[texture](#texture)

## Properties

### `Optional`animations

animations?: { function: string; params: object }[]

### `Optional`duration

duration?: number

### `Optional`scale

scale?: { x: number; y: number }

### `Optional`size

size?: number

### sound

sound: [VFXPositionalSoundData](foundry.VFXPositionalSoundData.md) | null

### texture

texture: string | null