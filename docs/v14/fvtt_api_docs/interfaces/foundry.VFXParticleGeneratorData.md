---
title: "VFXParticleGeneratorData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXParticleGeneratorData.html"
category: "interfaces"
---

# Interface VFXParticleGeneratorData

interface VFXParticleGeneratorData {  
Â Â Â Â [alpha](#alpha): { max: number; min: number };  
Â Â Â Â [area](#area): object | null;  
Â Â Â Â [blend](#blend): number;  
Â Â Â Â [config](#config): [ParticleGeneratorConfiguration](foundry.canvas.animation.types.ParticleGeneratorConfiguration.md);  
Â Â Â Â [count](#count): number;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [fade](#fade): { in: number; out: number } | null;  
Â Â Â Â [initial](#initial): number;  
Â Â Â Â [lifetime](#lifetime): { max: number | null; min: number };  
Â Â Â Â [mode](#mode): string;  
Â Â Â Â [perFrame](#perframe)?: number;  
Â Â Â Â [pointSourceMask](#pointsourcemask): any;  
Â Â Â Â [rotation](#rotation)?: [ParticleGeneratorRotationOptions](foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md);  
Â Â Â Â [scale](#scale): { max: number; min: number };  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [spawnRate](#spawnrate): number;  
Â Â Â Â [textures](#textures): string[];  
Â Â Â Â [velocity](#velocity): { angle: number; speed: number; x: number; y: number } | null;  
}

##### Index

### Properties

[alpha](#alpha)
[area](#area)
[blend](#blend)
[config](#config)
[count](#count)
[duration?](#duration)
[elevation](#elevation)
[fade](#fade)
[initial](#initial)
[lifetime](#lifetime)
[mode](#mode)
[perFrame?](#perframe)
[pointSourceMask](#pointsourcemask)
[rotation?](#rotation)
[scale](#scale)
[sort](#sort)
[spawnRate](#spawnrate)
[textures](#textures)
[velocity](#velocity)

## Properties

### alpha

alpha: { max: number; min: number }

Alpha range [min, max] (default 1)

### area

area: object | null

Spawn area; a point, rect, circle, ring, or line object.
Supports reference resolution (e.g. {reference: "target"}).

### blend

blend: number

PIXI blend mode (default NORMAL = 0)

### config

config: [ParticleGeneratorConfiguration](foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

Additional ParticleGenerator configuration passed directly to the constructor. Can include orbit, follow,
constraints, drift, blur, clip, anchor, callbacks, and any other ParticleGeneratorConfiguration fields.
When effects are built directly in code, this can also include a custom batchable `shaderClass` that is
compatible with SpriteMesh and whose plugin was already registered.
Values here override any explicitly-set schema fields of the same name.

### count

count: number

Target particle count (default 50)

### `Optional`duration

duration?: number

How long the generator runs in ms before soft-stopping
to let existing particles expire. If absent, runs until
the component is explicitly stopped.

### elevation

elevation: number

Layer elevation for the particle container (default 0)

### fade

fade: { in: number; out: number } | null

Fade-in and fade-out durations in ms (default null)

### initial

initial: number

Proportion of count to spawn immediately on start [0, 1]
(default 0.25)

### lifetime

lifetime: { max: number | null; min: number }

Particle lifetime in ms. If max is null, min is used as a
fixed value. Otherwise, spawns with a random lifetime in
[min, max] (default min 1000).

### mode

mode: string

Generator mode: "ambient" or "effect" (default "effect")

### `Optional`perFrame

perFrame?: number

Deprecated since v14. Migrated to `spawnRate`.

### pointSourceMask

pointSourceMask: any

An optional mask for clipping particles to wall boundaries. Accepts either a pre-computed PointSourcePolygon
(shared via VFXReferenceField resolution) or a serializable config object {x, y, type, radius} from which a polygon
is computed at draw time. Supports reference resolution for efficient reuse across multiple components within the
same effect.

### `Optional`rotation

rotation?: [ParticleGeneratorRotationOptions](foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md)

Rotation configuration for particles.

### scale

scale: { max: number; min: number }

Scale range [min, max] (default 1)

### sort

sort: number

Sort order within the elevation layer (default 0)

### spawnRate

spawnRate: number

Maximum particles spawned per second during auto-spawn
(default 300)

### textures

textures: string[]

Texture paths for particles

### velocity

velocity: { angle: number; speed: number; x: number; y: number } | null

Initial particle velocity. Specify either x/y components
or speed (px/s) and angle (degrees). (default null)