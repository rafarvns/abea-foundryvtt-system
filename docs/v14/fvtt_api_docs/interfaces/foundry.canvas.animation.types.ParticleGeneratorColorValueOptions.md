---
title: "ParticleGeneratorColorValueOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorColorValueOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorColorValueOptions

interface ParticleGeneratorColorValueOptions {  
Â Â Â Â [curve](#curve)?: [ParticleGeneratorColorCurvePoint](foundry.canvas.animation.types.ParticleGeneratorColorCurvePoint.md)[];  
Â Â Â Â [fn](#fn)?: [ParticleGeneratorColorFunction](../types/foundry.canvas.animation.types.ParticleGeneratorColorFunction.md);  
}

##### Index

### Properties

[curve?](#curve)
[fn?](#fn)

## Properties

### `Optional`curve

curve?: [ParticleGeneratorColorCurvePoint](foundry.canvas.animation.types.ParticleGeneratorColorCurvePoint.md)[]

Optional color curve over normalized lifetime. Points must
start at time 0, end at time 1, and use strictly increasing times.

### `Optional`fn

fn?: [ParticleGeneratorColorFunction](../types/foundry.canvas.animation.types.ParticleGeneratorColorFunction.md)

Complete custom color function.