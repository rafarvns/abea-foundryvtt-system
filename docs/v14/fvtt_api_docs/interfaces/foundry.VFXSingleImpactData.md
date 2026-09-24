---
title: "VFXSingleImpactData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXSingleImpactData.html"
category: "interfaces"
---

# Interface VFXSingleImpactData

interface VFXSingleImpactData {  
Â Â Â Â [animations](#animations)?: { function: string; params: object }[];  
Â Â Â Â [duration](#duration): number;  
Â Â Â Â [position](#position): [VFXBasePathPoint](foundry.VFXBasePathPoint.md);  
Â Â Â Â [scale](#scale)?: { x: number; y: number };  
Â Â Â Â [size](#size)?: number;  
Â Â Â Â [sound](#sound): [VFXPositionalSoundData](foundry.VFXPositionalSoundData.md) | null;  
Â Â Â Â [texture](#texture): string;  
}

##### Index

### Properties

[animations?](#animations)
[duration](#duration)
[position](#position)
[scale?](#scale)
[size?](#size)
[sound](#sound)
[texture](#texture)

## Properties

### `Optional`animations

animations?: { function: string; params: object }[]

### duration

duration: number

### position

position: [VFXBasePathPoint](foundry.VFXBasePathPoint.md)

### `Optional`scale

scale?: { x: number; y: number }

### `Optional`size

size?: number

### sound

sound: [VFXPositionalSoundData](foundry.VFXPositionalSoundData.md) | null

### texture

texture: string