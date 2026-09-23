---
title: "RenderedEffectSourceLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.html"
category: "interfaces"
---

# Interface RenderedEffectSourceLayer

interface RenderedEffectSourceLayer {  
Â Â Â Â [active](#active): boolean;  
Â Â Â Â [mesh](#mesh): PointSourceMesh;  
Â Â Â Â [reset](#reset): boolean;  
Â Â Â Â [shader](#shader): AdaptiveLightingShader;  
Â Â Â Â [suppressed](#suppressed): boolean;  
}

##### Index

### Properties

[active](#active)
[mesh](#mesh)
[reset](#reset)
[shader](#shader)
[suppressed](#suppressed)

## Properties

### active

active: boolean

Is this layer actively rendered?

### mesh

mesh: PointSourceMesh

The rendered mesh for this layer

### reset

reset: boolean

Do uniforms need to be reset?

### shader

shader: AdaptiveLightingShader

The shader instance used for the layer

### suppressed

suppressed: boolean

Is this layer temporarily suppressed?