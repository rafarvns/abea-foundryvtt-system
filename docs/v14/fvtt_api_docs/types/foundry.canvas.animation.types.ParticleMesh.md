---
title: "ParticleMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.canvas.animation.types.ParticleMesh.html"
category: "types"
---

# Type Alias ParticleMesh

ParticleMesh: [SpriteMesh](../classes/foundry.canvas.containers.SpriteMesh.md) & {  
Â Â Â Â \_baseRotationSpeed: number;  
Â Â Â Â \_baseScale: number;  
Â Â Â Â \_baseSpeed?: number;  
Â Â Â Â \_baseTint: number;  
Â Â Â Â \_movementDirectionX?: number;  
Â Â Â Â \_movementDirectionY?: number;  
Â Â Â Â \_movementDriftX?: number;  
Â Â Â Â \_movementDriftY?: number;  
Â Â Â Â \_velocityFunctionBounceX?: number;  
Â Â Â Â \_velocityFunctionBounceY?: number;  
Â Â Â Â elapsedTime: number;  
Â Â Â Â fadeInDuration: number;  
Â Â Â Â fadeOutDuration: number;  
Â Â Â Â generator: [ParticleGenerator](../classes/foundry.canvas.animation.ParticleGenerator.md);  
Â Â Â Â lifetime: number;  
Â Â Â Â maxAlpha: number;  
Â Â Â Â movementSpeed: PIXI.Point;  
Â Â Â Â rotationSpeed: number;  
Â Â Â Â time: number;  
}