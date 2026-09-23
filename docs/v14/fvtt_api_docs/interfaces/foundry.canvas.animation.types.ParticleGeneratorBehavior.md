---
title: "ParticleGeneratorBehavior | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.html"
category: "interfaces"
---

# Interface ParticleGeneratorBehavior

interface ParticleGeneratorBehavior {  
Â Â Â Â [initialize](#initialize)?: (generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md)) => void;  
Â Â Â Â [spawn](#spawn)?: (particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md), ctx: object) => void;  
Â Â Â Â [update](#update)?: (  
Â Â Â Â Â Â Â Â particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md),  
Â Â Â Â Â Â Â Â dt: number,  
Â Â Â Â Â Â Â Â ctx: object,  
Â Â Â Â ) => boolean | void;  
}

##### Index

### Properties

[initialize?](#initialize)
[spawn?](#spawn)
[update?](#update)

## Properties

### `Optional`initialize

initialize?: (generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md)) => void

Called once during construction.

### `Optional`spawn

spawn?: (particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md), ctx: object) => void

Called for each spawned particle.

### `Optional`update

update?: (particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md), dt: number, ctx: object) => boolean | void

Called for each particle during update.
Return true to indicate the behavior handled positional integration for this particle.