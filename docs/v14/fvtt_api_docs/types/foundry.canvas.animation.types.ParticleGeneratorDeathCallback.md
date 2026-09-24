---
title: "ParticleGeneratorDeathCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.html"
category: "types"
---

# Type Alias ParticleGeneratorDeathCallback

ParticleGeneratorDeathCallback: (  
Â Â Â Â particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md),  
Â Â Â Â context: { generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md); reason: string },  
) => void

#### Type Declaration

* + (  
    Â Â Â Â particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md),  
    Â Â Â Â context: { generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md); reason: string },  
    ): void
  + #### Parameters

    - particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md)
    - context: { generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md); reason: string }

    #### Returns void