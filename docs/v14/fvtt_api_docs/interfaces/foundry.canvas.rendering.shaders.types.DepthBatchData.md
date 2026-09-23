---
title: "DepthBatchData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.rendering.shaders.types.DepthBatchData.html"
category: "interfaces"
---

# Interface DepthBatchData

The batch data that is needed by [foundry.canvas.rendering.shaders.DepthSamplerShader](../classes/foundry.canvas.rendering.shaders.DepthSamplerShader.md) to
render an element with batching.

interface DepthBatchData {  
Â Â Â Â [\_texture](#_texture): Texture<Resource>;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [fadeOcclusion](#fadeocclusion): number;  
Â Â Â Â [indices](#indices): number[] | Uint16Array | Uint32Array;  
Â Â Â Â [radialOcclusion](#radialocclusion): number;  
Â Â Â Â [textureAlphaThreshold](#texturealphathreshold): number;  
Â Â Â Â [uvs](#uvs): Float32Array;  
Â Â Â Â [vertexData](#vertexdata): Float32Array;  
Â Â Â Â [visionOcclusion](#visionocclusion): number;  
}

##### Index

### Properties

[\_texture](#_texture)
[elevation](#elevation)
[fadeOcclusion](#fadeocclusion)
[indices](#indices)
[radialOcclusion](#radialocclusion)
[textureAlphaThreshold](#texturealphathreshold)
[uvs](#uvs)
[vertexData](#vertexdata)
[visionOcclusion](#visionocclusion)

## Properties

### \_texture

\_texture: Texture<Resource>

The texture

### elevation

elevation: number

The elevation

### fadeOcclusion

fadeOcclusion: number

The amount of FADE occlusion

### indices

indices: number[] | Uint16Array | Uint32Array

The indices

### radialOcclusion

radialOcclusion: number

The amount of RADIAL occlusion

### textureAlphaThreshold

textureAlphaThreshold: number

The texture alpha threshold

### uvs

uvs: Float32Array

The texture UVs

### vertexData

vertexData: Float32Array

The vertices

### visionOcclusion

visionOcclusion: number

The amount of VISION occlusion