---
title: "ParticleGeneratorRotationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorRotationOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorRotationOptions

interface ParticleGeneratorRotationOptions {  
Â Â Â Â [alignVelocity](#alignvelocity)?: boolean;  
Â Â Â Â [initial](#initial)?: number;  
Â Â Â Â [speed](#speed)?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md);  
Â Â Â Â [spread](#spread)?: number;  
}

##### Index

### Properties

[alignVelocity?](#alignvelocity)
[initial?](#initial)
[speed?](#speed)
[spread?](#spread)

## Properties

### `Optional`alignVelocity

alignVelocity?: boolean

Align initial rotation to the particle's velocity direction.

### `Optional`initial

initial?: number

Fixed rotation offset in radians, additive to the base.

### `Optional`speed

speed?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md)

Rotation speed over the particle lifetime. Initially specified
in degrees-per-second, internally managed in radians-per-second.

### `Optional`spread

spread?: number

Symmetric random spread in radians around the base+initial.
0 means no randomization; Math.PI gives full-circle random.