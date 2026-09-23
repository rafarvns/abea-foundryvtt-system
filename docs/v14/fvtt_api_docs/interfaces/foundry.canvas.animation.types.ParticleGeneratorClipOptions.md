---
title: "ParticleGeneratorClipOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorClipOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorClipOptions

interface ParticleGeneratorClipOptions {  
Â Â Â Â [enabled](#enabled)?: boolean | null;  
Â Â Â Â [rect](#rect)?: [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | null;  
}

##### Index

### Properties

[enabled?](#enabled)
[rect?](#rect)

## Properties

### `Optional`enabled

enabled?: boolean | null

Whether to apply a managed clip mask.
If null, defaults to true in ambient mode and false in effect mode.

### `Optional`rect

rect?: [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | null

Optional clip rectangle in scene coordinates.
If omitted, a shape-based spawn area is used when available. Otherwise the generator bounds are used.