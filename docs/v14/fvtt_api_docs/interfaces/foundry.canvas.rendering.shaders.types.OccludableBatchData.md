---
title: "OccludableBatchData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.rendering.shaders.types.OccludableBatchData.html"
category: "interfaces"
---

# Interface OccludableBatchData

The batch data that is needed by [foundry.canvas.rendering.shaders.OccludableSamplerShader](../classes/foundry.canvas.rendering.shaders.OccludableSamplerShader.md)
to render an element with batching.

interface OccludableBatchData {  
Â Â Â Â [\_texture](#_texture): Texture<Resource>;  
Â Â Â Â [\_tintRGB](#_tintrgb): number;  
Â Â Â Â [blendMode](#blendmode): number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [fadeOcclusion](#fadeocclusion): number;  
Â Â Â Â [indices](#indices): number[] | Uint16Array | Uint32Array;  
Â Â Â Â [occludedAlpha](#occludedalpha): number;  
Â Â Â Â [radialOcclusion](#radialocclusion): number;  
Â Â Â Â [unoccludedAlpha](#unoccludedalpha): number;  
Â Â Â Â [uvs](#uvs): Float32Array;  
Â Â Â Â [vertexData](#vertexdata): Float32Array;  
Â Â Â Â [visionOcclusion](#visionocclusion): number;  
Â Â Â Â [worldAlpha](#worldalpha): number;  
}

##### Index

### Properties

[\_texture](#_texture)
[\_tintRGB](#_tintrgb)
[blendMode](#blendmode)
[elevation](#elevation)
[fadeOcclusion](#fadeocclusion)
[indices](#indices)
[occludedAlpha](#occludedalpha)
[radialOcclusion](#radialocclusion)
[unoccludedAlpha](#unoccludedalpha)
[uvs](#uvs)
[vertexData](#vertexdata)
[visionOcclusion](#visionocclusion)
[worldAlpha](#worldalpha)

## Properties

### \_texture

\_texture: Texture<Resource>

The texture

### \_tintRGB

\_tintRGB: number

The tint

### blendMode

blendMode: number

The blend mode

### elevation

elevation: number

The elevation

### fadeOcclusion

fadeOcclusion: number

The amount of FADE occlusion

### indices

indices: number[] | Uint16Array | Uint32Array

The indices

### occludedAlpha

occludedAlpha: number

The unoccluded alpha

### radialOcclusion

radialOcclusion: number

The amount of RADIAL occlusion

### unoccludedAlpha

unoccludedAlpha: number

The unoccluded alpha

### uvs

uvs: Float32Array

The texture UVs

### vertexData

vertexData: Float32Array

The vertices

### visionOcclusion

visionOcclusion: number

The amount of VISION occlusion

### worldAlpha

worldAlpha: number

The world alpha