---
title: "ParticleGeneratorDebugOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.html"
category: "interfaces"
---

# Interface ParticleGeneratorDebugOptions

interface ParticleGeneratorDebugOptions {  
Â Â Â Â [profile](#profile)?: boolean;  
Â Â Â Â [stats](#stats)?: boolean;  
Â Â Â Â [tint](#tint)?: boolean | [ParticleGeneratorDebugTintOptions](foundry.canvas.animation.types.ParticleGeneratorDebugTintOptions.md) | null;  
Â Â Â Â [useWhiteTexture](#usewhitetexture)?: boolean;  
}

##### Index

### Properties

[profile?](#profile)
[stats?](#stats)
[tint?](#tint)
[useWhiteTexture?](#usewhitetexture)

## Properties

### `Optional`profile

profile?: boolean

Whether to capture per-tick timings (requires stats).

### `Optional`stats

stats?: boolean

Whether to collect debug statistics.

### `Optional`tint

tint?: boolean | [ParticleGeneratorDebugTintOptions](foundry.canvas.animation.types.ParticleGeneratorDebugTintOptions.md) | null

Optional automatic tinting for spawned
particles.

### `Optional`useWhiteTexture

useWhiteTexture?: boolean

If true, fall back to PIXI.Texture.WHITE when no textures are
configured.