---
title: "ParticleGeneratorValueOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorValueOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorValueOptions

interface ParticleGeneratorValueOptions {  
Â Â Â Â [curve](#curve)?: [ParticleGeneratorCurvePoint](foundry.canvas.animation.types.ParticleGeneratorCurvePoint.md)[];  
Â Â Â Â [fn](#fn)?: [ParticleGeneratorValueFunction](../types/foundry.canvas.animation.types.ParticleGeneratorValueFunction.md);  
Â Â Â Â [max](#max)?: number;  
Â Â Â Â [min](#min)?: number;  
Â Â Â Â [step](#step)?: boolean;  
}

##### Index

### Properties

[curve?](#curve)
[fn?](#fn)
[max?](#max)
[min?](#min)
[step?](#step)

## Properties

### `Optional`curve

curve?: [ParticleGeneratorCurvePoint](foundry.canvas.animation.types.ParticleGeneratorCurvePoint.md)[]

Optional curve over normalized lifetime. Points must start at
time 0, end at time 1, and use strictly increasing times.

### `Optional`fn

fn?: [ParticleGeneratorValueFunction](../types/foundry.canvas.animation.types.ParticleGeneratorValueFunction.md)

Complete custom value function.

### `Optional`max

max?: number

Maximum base value sampled once per particle.

### `Optional`min

min?: number

Minimum base value sampled once per particle.

### `Optional`step

step?: boolean

Evaluate curve values in discrete steps instead of interpolation.