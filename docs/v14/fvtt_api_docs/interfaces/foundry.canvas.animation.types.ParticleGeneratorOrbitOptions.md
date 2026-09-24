---
title: "ParticleGeneratorOrbitOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorOrbitOptions

interface ParticleGeneratorOrbitOptions {  
Â Â Â Â [angularSpeed](#angularspeed)?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md);  
Â Â Â Â [direction](#direction)?: 1 | -1 | "random";  
Â Â Â Â [phase](#phase)?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md);  
Â Â Â Â [radialSpeed](#radialspeed)?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md);  
Â Â Â Â [radius](#radius)?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md) | null;  
Â Â Â Â [rotation](#rotation)?: "none" | "tangent" | "radial";  
}

##### Index

### Properties

[angularSpeed?](#angularspeed)
[direction?](#direction)
[phase?](#phase)
[radialSpeed?](#radialspeed)
[radius?](#radius)
[rotation?](#rotation)

## Properties

### `Optional`angularSpeed

angularSpeed?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md)

Angular speed in degrees per second.

### `Optional`direction

direction?: 1 | -1 | "random"

Orbit direction.

### `Optional`phase

phase?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md)

Initial angle in degrees.
Only used when [ParticleGeneratorOrbitOptions#radius](#radius) is provided.

### `Optional`radialSpeed

radialSpeed?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md)

Radial speed in pixels per second.

### `Optional`radius

radius?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md) | null

Orbit radius in pixels.
If null, use the particle's initial distance from the anchor.

### `Optional`rotation

rotation?: "none" | "tangent" | "radial"

If set, override sprite rotation each frame.