---
title: "ParticleGeneratorFollowOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorFollowOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorFollowOptions

interface ParticleGeneratorFollowOptions {  
Â Â Â Â [offset](#offset)?: IPointData | null;  
Â Â Â Â [stiffness](#stiffness)?: number;  
}

##### Index

### Properties

[offset?](#offset)
[stiffness?](#stiffness)

## Properties

### `Optional`offset

offset?: IPointData | null

Fixed local offset from the anchor in pixels.
If null, use the particle's initial offset from the anchor.

### `Optional`stiffness

stiffness?: number

A 0..1 smoothing factor. 1 snaps to the target every frame.