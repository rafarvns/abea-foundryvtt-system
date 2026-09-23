---
title: "RenderedEffectSourceData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.html"
category: "interfaces"
---

# Interface RenderedEffectSourceData

interface RenderedEffectSourceData {  
Â Â Â Â [animation](#animation): object;  
Â Â Â Â [color](#color): number | null;  
Â Â Â Â [disabled](#disabled): boolean;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [level](#level): string;  
Â Â Â Â [preview](#preview): boolean;  
Â Â Â Â [seed](#seed): number | null;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[animation](#animation)
[color](#color)
[disabled](#disabled)
[elevation](#elevation)
[level](#level)
[preview](#preview)
[seed](#seed)
[x](#x)
[y](#y)

## Properties

### animation

animation: object

An animation configuration for the source

### color

color: number | null

A color applied to the rendered effect

### disabled

disabled: boolean

Whether or not the source is disabled

### elevation

elevation: number

The elevation of the point source

### level

level: string

The ID of the Level the point source is in

### preview

preview: boolean

Is this source a temporary preview?

### seed

seed: number | null

An integer seed to synchronize (or de-synchronize) animations

### x

x: number

The x-coordinate of the source location

### y

y: number

The y-coordinate of the source location