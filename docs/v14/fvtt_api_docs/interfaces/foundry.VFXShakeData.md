---
title: "VFXShakeData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXShakeData.html"
category: "interfaces"
---

# Interface VFXShakeData

interface VFXShakeData {  
Â Â Â Â [duration](#duration): number;  
Â Â Â Â [maxDisplacement](#maxdisplacement): number;  
Â Â Â Â [returnSpeed](#returnspeed): number;  
Â Â Â Â [seed](#seed): number | null;  
Â Â Â Â [smoothness](#smoothness): number;  
Â Â Â Â [target](#target): string;  
}

##### Index

### Properties

[duration](#duration)
[maxDisplacement](#maxdisplacement)
[returnSpeed](#returnspeed)
[seed](#seed)
[smoothness](#smoothness)
[target](#target)

## Properties

### duration

duration: number

The active shake duration in milliseconds (default 5000)

### maxDisplacement

maxDisplacement: number

The maximum displacement in pixels at the start of the shake (default 35)

### returnSpeed

returnSpeed: number

The return-to-origin interpolation factor per tick in [0, 1] (default 0.1)

### seed

seed: number | null

An optional seed for a deterministic, reproducible shake pattern (default null)

### smoothness

smoothness: number

Shake smoothness in [0, 1]; higher values produce lower-frequency motion (default 0.5)

### target

target: string

The canvas property key of the display object to shake (default "stage")