---
title: "CanvasPerformanceSettings | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasPerformanceSettings.html"
category: "interfaces"
---

# Interface CanvasPerformanceSettings

interface CanvasPerformanceSettings {  
Â Â Â Â [fps](#fps): number;  
Â Â Â Â [lightSoftEdges](#lightsoftedges): boolean;  
Â Â Â Â [mipmap](#mipmap): string;  
Â Â Â Â [mode](#mode): CanvasPerformanceMode;  
Â Â Â Â [msaa](#msaa): boolean;  
Â Â Â Â [smaa](#smaa): boolean;  
}

##### Index

### Properties

[fps](#fps)
[lightSoftEdges](#lightsoftedges)
[mipmap](#mipmap)
[mode](#mode)
[msaa](#msaa)
[smaa](#smaa)

## Properties

### fps

fps: number

Maximum framerate which should be the render target

### lightSoftEdges

lightSoftEdges: boolean

Whether to render soft edges for light sources

### mipmap

mipmap: string

Whether to use mipmaps, "ON" or "OFF"

### mode

mode: CanvasPerformanceMode

A performance mode in [CONST.CANVAS\_PERFORMANCE\_MODES](../variables/CONST.CANVAS_PERFORMANCE_MODES.md)

### msaa

msaa: boolean

Whether to apply MSAA at the overall canvas level

### smaa

smaa: boolean

Whether to apply SMAA at the overall canvas level