---
title: "ParticleGeneratorVelocityFunction | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.canvas.animation.types.ParticleGeneratorVelocityFunction.html"
category: "types"
---

# Type Alias ParticleGeneratorVelocityFunction

ParticleGeneratorVelocityFunction: (  
Â Â Â Â particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md),  
Â Â Â Â dt: number,  
Â Â Â Â out: PIXI.Point,  
) => PIXI.IPointData | void | null

#### Type Declaration

* + (  
    Â Â Â Â particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md),  
    Â Â Â Â dt: number,  
    Â Â Â Â out: PIXI.Point,  
    ): PIXI.IPointData | void | null
  + #### Parameters

    - particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md)

      The particle being evaluated.
    - dt: number

      Frame delta in milliseconds.
    - out: PIXI.Point

      Reusable point which may receive the velocity.

    #### Returns PIXI.IPointData | void | null