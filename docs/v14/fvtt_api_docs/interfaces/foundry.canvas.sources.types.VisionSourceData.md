---
title: "VisionSourceData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.sources.types.VisionSourceData.html"
category: "interfaces"
---

# Interface VisionSourceData

interface VisionSourceData {  
Â Â Â Â [animation](#animation): object;  
Â Â Â Â [attenuation](#attenuation): number;  
Â Â Â Â [blinded](#blinded): boolean;  
Â Â Â Â [brightness](#brightness): number;  
Â Â Â Â [color](#color): number | null;  
Â Â Â Â [contrast](#contrast): number;  
Â Â Â Â [disabled](#disabled): boolean;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [lightRadius](#lightradius): number;  
Â Â Â Â [preview](#preview): boolean;  
Â Â Â Â [saturation](#saturation): number;  
Â Â Â Â [seed](#seed): number | null;  
Â Â Â Â [visionMode](#visionmode): string;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[animation](#animation)
[attenuation](#attenuation)
[blinded](#blinded)
[brightness](#brightness)
[color](#color)
[contrast](#contrast)
[disabled](#disabled)
[elevation](#elevation)
[level](#level)
[lightRadius](#lightradius)
[preview](#preview)
[saturation](#saturation)
[seed](#seed)
[visionMode](#visionmode)
[x](#x)
[y](#y)

## Properties

### animation

animation: object

An animation configuration for the source

### attenuation

attenuation: number

Strength of the attenuation between bright, dim, and dark

### blinded

blinded: boolean

Is this vision source blinded?

### brightness

brightness: number

The vision brightness.

### color

color: number | null

A color applied to the rendered effect

### contrast

contrast: number

The amount of contrast

### disabled

disabled: boolean

Whether or not the source is disabled

### elevation

elevation: number

The elevation of the point source

### level

level: string

The ID of the Level the point source is in

### lightRadius

lightRadius: number

The range of light perception.

### preview

preview: boolean

Is this source a temporary preview?

### saturation

saturation: number

The amount of color saturation

### seed

seed: number | null

An integer seed to synchronize (or de-synchronize) animations

### visionMode

visionMode: string

The vision mode.

### x

x: number

The x-coordinate of the source location

### y

y: number

The y-coordinate of the source location