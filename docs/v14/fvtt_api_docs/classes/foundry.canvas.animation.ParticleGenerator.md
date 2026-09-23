---
title: "ParticleGenerator | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.animation.ParticleGenerator.html"
category: "classes"
---

# Class ParticleGenerator

A lightweight, native particle generator designed for VFX.

ParticleGenerator manages:

* An internal container on the chosen canvas layer (usually `canvas.primary`)
* Particle pooling (reusing sprites instead of constantly allocating new ones)
* Lifetime, fade-in/out, basic motion, and optional constraints
* Two usage styles:
  + **ambient**: keep a steady density in the visible area (viewport-driven budget)
  + **effect**: spawn particles in a specific area (manual spawns or a fixed target count)

The API is intentionally compact:

* Put most settings at the top level (`textures`, `blend`, `alpha`, `scale`, `count`, `lifetime`, etc.)
* Use `area` to define where particles spawn
* Use `spawnParticle()` or `spawnParticles()` to spawn particles (optionally overriding texture/area/position)
* Use `start({spawn: n})` when you want to immediately seed a certain number of particles on start
* Use `shaderClass` when you want a custom sampler shader for particles
* Use `onSpawn` to customize each particle after it has been positioned and configured
* Use `onUpdate` to apply per-particle per-frame logic after position, rotation, tint, and alpha are computed
* Use `onDeath` to react when particles are recycled (optional)

## Core concepts

### Mode

* `mode: "ambient"` maintains a stable density in the visible region.
  `count` is scaled by the visible area ratio, and spawning uses the padded viewport (`viewPadding`).
* `mode: "effect"` spawns in a defined `area`. `count` is treated as an absolute target.
  You can use `manual: true` and spawn at your own rate via `spawnParticle()` / `spawnParticles()`.

### Fade

`fade.in` / `fade.out` accept:

* milliseconds when value >= 1
* a fraction of the particle lifetime when 0 < value < 1

### Velocity

`velocity` can be:

* fixed: `{x, y}` or `new PIXI.Point(x, y)`
* ranged: `{x: [min, max], y: [min, max]}`
* polar: `{speed: value, angle: [min, max]}` (angle in degrees)
* function: `{fn: (particle, dt, out) => {out.x = vx; out.y = vy;}}`
  evaluated at spawn and during each update as the full velocity vector for that frame

### Attribute Values

`alpha`, `scale`, polar `velocity.speed`, and `rotation.speed` accept fixed values, random ranges,
`{min, max, curve}` objects, or `{fn}` objects.
`tint` accepts fixed color sources or `{curve}` / `{fn}` color objects. Curve points use color sources; `fn` returns
a 0xRRGGBB number. Curve time is normalized over each particle lifetime.

* `alpha` is multiplied by the fade envelope
* `scale` is applied directly to the particle
* `velocity.speed` updates magnitude while preserving the spawn direction
* `rotation.speed` updates angular velocity in degrees per second
* `tint` interpolates RGB channels between curve points

### Shader

Pass `shaderClass` to render particles with a custom sampler shader.

* Batchable shaders are recommended for anything more than modest particle counts.
* ParticleGenerator uses plain `SpriteMesh` instances, so the shader must be compatible with `SpriteMesh`.
* If your batch shader needs custom per-particle data, attach it in `onSpawn` or `onUpdate` and read it from
  `element.object` in the shader `_packInterleavedGeometry` override.

### Area

`area` supports:

* Point: `{x, y}`
* Rect: `{x, y, width, height}` or `new PIXI.Rectangle(x, y, w, h)`
* Circle: `{x, y, radius}`
* Ring: `{x, y, innerRadius, outerRadius}` or `{x, y, radius: [inner, outer]}`
* Line: `{from: {x, y}, to: {x, y}}`
* Points: `{points: [{x, y}, ...]}` or `{shape: "points", points: [{x, y}, ...]}`
* Polyline: `{path: [{x, y}, ...]}`, `{shape: "path", path: [...]}`, or
  `{shape: "polyline", points: [{x, y}, ...]}`
* Ellipse: `{x, y, radiusX, radiusY}`, `{shape: "ellipse", x, y, radiusX, radiusY}`, with optional
  `holeScale`, `minAngle`, `maxAngle`, `shapeRotation`, and `affectRotation`.
* Shape instance: [foundry.data.BaseShapeData](foundry.data.BaseShapeData.md)
* Shape source data: `{type: "circle", x, y, radius}` using the [foundry.data.BaseShapeData](foundry.data.BaseShapeData.md) schema.
  Plain object areas without a `type` are inferred from their properties.

Set `sampleMode` to `"boundary"` to spawn along the edge of area types that support boundary sampling.

If you provide an `anchor`, object-based areas can be treated as offsets relative to that anchor.
To force an absolute rectangle while anchored, pass a `PIXI.Rectangle`.
Plain objects with a valid [foundry.data.BaseShapeData](foundry.data.BaseShapeData.md) `type` are shape source data, not object areas,
and are always interpreted in absolute scene coordinates.

### Debug

Use `debug` while tuning a generator or diagnosing why particles are not spawning as expected. It is optional and
should usually be disabled in final effects.

* `debug: true` enables spawn and recycle counters.
* `debug.stats: true` enables `generator.debugStats`.
* `debug.profile: true` also records the most recent update, spawn, and tick timings.
* `debug.tint: true` gives each spawned particle a random tint.
* `debug.tint: {mode: "palette", palette: [0xFFAA00, 0x66CCFF]}` tints particles from a palette.
* `debug.tint: {mode: "byTexture"}` gives each texture a stable debug color.
* `debug.useWhiteTexture: true` falls back to `PIXI.Texture.WHITE` when no textures are configured.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 100,  
  spawnRate: 300,  
  area: {x: 1200, y: 900, radius: 180},  
  debug: {  
    stats: true,  
    profile: true,  
    tint: {mode: "byTexture"},  
    useWhiteTexture: true  
  }  
});  
gen.start({spawn: 100});  
  
console.table(gen.debugStats);
Copy
```

## Performance tips

* Preload textures before creating the generator.
* Prefer calling `spawnParticle()` or `spawnParticles()` with no options when you can. It avoids per-spawn object
  allocations.
* Keep `positionTest` cheap. It runs in a hot path.
* Prefer batchable shaders for sustained effects. Direct-render shaders are best kept to smaller particle counts.
* Avoid blur unless you really need it (pre-blurred textures are better).

## Practical limits

ParticleGenerator is meant for local, short-lived effects (bursts, embers, motes, small auras),
not for filling the entire scene with massive particle counts. If you push it into many thousands of active
particles, performance could degrade quickly. In practice, you'll get better results by using moderate counts,
short lifetimes, and small spawn areas, and by stopping the effect when it's no longer needed.

Texture size also matters. Large particle textures (or heavy blur) increase pixel work,
especially with additive/screen blends and overdraw, which can become fill-rate bound on some GPUs.
Prefer small textures (and sprite sheets!), keep particle sizes reasonable on screen, and avoid expensive full-screen
coverage when you only need a local effect.

## Examples

#### Example

### 1) Ambient leaves (steady density in view)

Use this for soft, always-on atmospheric particles.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "ambient",  
  textures: [  
    "ui/particles/leaf1.png",  
    "ui/particles/leaf2.png",  
    "ui/particles/leaf3.png",  
    "ui/particles/leaf4.png",  
    "ui/particles/leaf5.png",  
    "ui/particles/leaf6.png"  
  ],  
  blend: PIXI.BLEND_MODES.NORMAL,  
  count: 300,  
  viewPadding: 0.25,  
  lifetime: [1200, 2200],  
  fade: {in: 0.15, out: 0.25},  
  velocity: {x: [-5, 5], y: [-10, -30]},  
  alpha: [0.2, 0.4],  
  scale: [0.35, 0.85]  
});  
gen.start();
Copy
```

### 2) Ambient snow (padding + random age)

Great for snowfall that looks continuous when you pan the camera.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "ambient",  
  textures: ["ui/particles/snow.png"],  
  count: 400,  
  viewPadding: 0.3,  
  randomizeAgeInPadding: true,  
  lifetime: [2500, 4500],  
  fade: {in: 0.2, out: 0.2},  
  velocity: {x: [-8, 8], y: [25, 55]},  
  alpha: [0.12, 0.25],  
  scale: [0.3, 0.9],  
  blend: PIXI.BLEND_MODES.SCREEN  
});  
gen.start();
Copy
```

### 3) Manual burst at a point (effect mode)

Use this for clicks, impacts, or quick one-shot effects.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  textures: ["ui/particles/snow.png"],  
  lifetime: [450, 900],  
  fade: {in: 0.05, out: 0.4},  
  velocity: {speed: [80, 200], angle: [0, 360]},  
  alpha: [0.4, 0.8],  
  scale: [0.3, 0.8]  
});  
gen.start();  
  
// Spawn a burst at {x,y}  
const p = {x: 1000, y: 800};  
gen.spawnParticles(120, {position: p});
Copy
```

### 4) Anchored emitter (leaves around a token)

Use this for a continuous local effect attached to a moving object.

```
const token = canvas.tokens.controlled[0];  
const area = {radius: 70}; // relative to anchor, no x/y needed  
  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  anchor: token,  
  anchorPoint: "center",  
  area,  
  count: 120,  
  spawnRate: 90,  
  elevation: token.document.elevation ?? 0,  
  textures: [  
    "ui/particles/leaf1.png",  
    "ui/particles/leaf2.png",  
    "ui/particles/leaf3.png",  
    "ui/particles/leaf4.png",  
    "ui/particles/leaf5.png",  
    "ui/particles/leaf6.png"  
  ],  
  lifetime: [450, 900],  
  fade: {in: 0.05, out: 0.4},  
  velocity: {x: [-160, 160], y: [-160, 160]},  
  rotation: {speed: 180},  
  alpha: [0.5, 0.75],  
  scale: [0.25, 0.75],  
  blend: PIXI.BLEND_MODES.NORMAL  
});  
gen.start();
Copy
```

### 5) Custom onTick spawning (leaves around a token)

Use this when custom logic decides whether the generator should spawn during a tick.

```
const token = canvas.tokens.controlled[0];  
let spawnBudget = 0;  
  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  anchor: token,  
  anchorPoint: "center",  
  area: {radius: 80},  
  count: 120,  
  textures: [  
    "ui/particles/leaf1.png",  
    "ui/particles/leaf2.png",  
    "ui/particles/leaf3.png"  
  ],  
  lifetime: [700, 1300],  
  fade: {in: 0.1, out: 0.35},  
  velocity: {x: [-90, 90], y: [-120, -20]},  
  alpha: [0.35, 0.7],  
  scale: [0.25, 0.65],  
  onTick: (dt, generator) => {  
    if ( !token?.visible ) return;  
    const available = generator.adjustedMaxParticles - generator.particles.length;  
    if ( available <= 0 ) return;  
    spawnBudget += 45 * dt * 0.001;  
    const n = Math.min(Math.floor(spawnBudget), available);  
    if ( n <= 0 ) return;  
    spawnBudget -= n;  
    generator.spawnParticles(n);  
  }  
});  
gen.start();
Copy
```

### 6) Spawn-position direction toward a focal point

Use `velocity.fn` when each particle direction depends on where it spawned.

```
const dims = canvas.scene.dimensions;  
const bounds = new PIXI.Rectangle(dims.sceneX, dims.sceneY, dims.sceneWidth, dims.sceneHeight);  
const focal = {x: 1200, y: 900};  
const focalLocal = {x: focal.x - bounds.x, y: focal.y - bounds.y};  
  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  bounds,  
  textures: ["ui/particles/snow.png"],  
  area: {x: focal.x, y: focal.y, innerRadius: 180, outerRadius: 260},  
  lifetime: [700, 1100],  
  fade: {in: 0.1, out: 0.3},  
  alpha: [0.4, 0.9],  
  scale: [0.3, 0.7],  
  velocity: {  
    fn: (p, dt, out) => {  
      if ( p.time === 0 ) {  
        let dx = focalLocal.x - p.x;  
        let dy = focalLocal.y - p.y;  
  
        const distance = Math.hypot(dx, dy) || 1;  
        dx /= distance;  
        dy /= distance;  
  
        const speed = 260;  
        p.focalVelocityX = dx * speed;  
        p.focalVelocityY = dy * speed;  
      }  
  
      out.x = p.focalVelocityX;  
      out.y = p.focalVelocityY;  
    }  
  }  
});  
gen.start({spawn: 120});
Copy
```

### 7) Direction evolving over lifetime (spiral)

Use `velocity.fn` when `particle.time` should bend the path during update.

```
const dims = canvas.scene.dimensions;  
const bounds = new PIXI.Rectangle(dims.sceneX, dims.sceneY, dims.sceneWidth, dims.sceneHeight);  
const origin = {x: 1200, y: 900};  
const originLocal = {x: origin.x - bounds.x, y: origin.y - bounds.y};  
  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  bounds,  
  textures: ["ui/particles/snow.png"],  
  area: {x: origin.x, y: origin.y, radius: 40},  
  lifetime: [900, 1300],  
  fade: {in: 0.1, out: 0.35},  
  alpha: [0.35, 0.8],  
  scale: {min: 0.35, max: 0.7, curve: [{time: 0, value: 1}, {time: 1, value: 0.35}]},  
  velocity: {  
    fn: (p, dt, out) => {  
      let dx = p.x - originLocal.x;  
      let dy = p.y - originLocal.y;  
  
      const distance = Math.hypot(dx, dy) || 1;  
      dx /= distance;  
      dy /= distance;  
  
      const radial = 90 + (180 * p.time);  
      const tangent = 240 * (1 - (0.35 * p.time));  
      out.x = (dx * radial) + (-dy * tangent);  
      out.y = (dy * radial) + (dx * tangent);  
    }  
  }  
});  
gen.start({spawn: 90});
Copy
```

### 8) Keep particles inside a rectangle (wrap)

Use this for localized ambient effects in a region.

```
const zone = new PIXI.Rectangle(900, 700, 600, 400);  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 250,  
  spawnRate: 180,  
  area: zone,  
  constraintMode: "wrap",  
  constraintArea: zone,  
  textures: ["ui/particles/snow.png"],  
  lifetime: [1200, 2200],  
  fade: {in: 0.2, out: 0.2},  
  velocity: {x: [-20, 20], y: [-10, 10]},  
  alpha: [0.1, 0.25],  
  scale: [0.4, 0.9]  
});  
gen.start({spawn: 250});
Copy
```

### 9) Bounce inside bounds (arcade-style)

Great for âenergy ballsâ in a box or magic motes in a bounded area.

```
const zone = new PIXI.Rectangle(900, 700, 600, 400);  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 80,  
  spawnRate: 60,  
  area: zone,  
  constraintMode: "bounce",  
  constraintArea: zone,  
  restitution: 0.9,  
  textures: ["ui/particles/snow.png"],  
  lifetime: [2000, 4000],  
  fade: {in: 0.15, out: 0.25},  
  velocity: {x: [-120, 120], y: [-120, 120]},  
  alpha: [0.25, 0.6],  
  scale: [0.5, 1.0],  
  blend: PIXI.BLEND_MODES.SCREEN  
});  
gen.start({spawn: 80});
Copy
```

### 10) Use a clip mask (hard visual boundary)

Use this when you need a strict rectangle cutout.

```
const clipRect = new PIXI.Rectangle(900, 700, 600, 400);  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 300,  
  spawnRate: 120,  
  area: clipRect,  
  clip: clipRect,  
  textures: ["ui/particles/snow.png"],  
  lifetime: [2000, 4000],  
  fade: {in: 0.2, out: 0.2},  
  velocity: {x: [-10, 10], y: [-10, 10]},  
  alpha: [0.08, 0.18],  
  scale: [0.8, 1.6],  
  blend: PIXI.BLEND_MODES.SCREEN  
});  
gen.start({spawn: 300});
Copy
```

### 11) Multiple textures + additive blend (magic leaves)

Use this for âsparklyâ looks with layered variation.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 150,  
  spawnRate: 90,  
  area: {x: 1200, y: 900, radius: 250},  
  textures: [  
    "ui/particles/leaf1.png",  
    "ui/particles/leaf2.png",  
    "ui/particles/leaf3.png",  
    "ui/particles/leaf4.png",  
    "ui/particles/leaf5.png",  
    "ui/particles/leaf6.png"  
  ],  
  blend: PIXI.BLEND_MODES.SCREEN,  
  lifetime: [1500, 2600],  
  fade: {in: 0.2, out: 0.35},  
  velocity: {speed: [5, 20], angle: [0, 360]},  
  rotation: {speed: 45},  
  alpha: [0.15, 0.45],  
  scale: [0.3, 0.8]  
});  
gen.start({spawn: 150});
Copy
```

### 12) Force a specific texture per spawn

Useful when you want a rare âspecialâ particle occasionally.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  textures: [  
    "ui/particles/leaf1.png",  
    "ui/particles/leaf2.png",  
    "ui/particles/leaf3.png",  
    "ui/particles/leaf4.png",  
    "ui/particles/leaf5.png",  
    "ui/particles/leaf6.png"  
  ]  
});  
gen.start();  
gen.spawnParticle({texture: "ui/particles/snow.png", position: {x: 1200, y: 900}});
Copy
```

### 13) Spawn into a temporary override area

Use this to reuse one generator for multiple nearby spawns without rebuilding it.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  manual: true,  
  textures: ["ui/particles/snow.png"],  
  lifetime: [500, 900]  
});  
  
// Start the generator  
gen.start();  
  
const r1 = new PIXI.Rectangle(900, 700, 200, 200);  
const r2 = new PIXI.Rectangle(1500, 700, 200, 200);  
gen.spawnParticles(50, {area: r1});  
gen.spawnParticles(50, {area: r2});  
  
// Stop the generator (soft stop by default)  
gen.stop()
Copy
```

### 14) Use a custom batch shader

Assume `MySparkleSamplerShader` is a `BaseSamplerShader` subclass whose batch plugin was already registered.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 120,  
  spawnRate: 120,  
  area: {x: 1200, y: 900, radius: 180},  
  textures: ["ui/particles/snow.png"],  
  shaderClass: MySparkleSamplerShader,  
  lifetime: [900, 1600],  
  fade: {in: 0.15, out: 0.3},  
  velocity: {speed: [10, 45], angle: [0, 360]},  
  alpha: [0.2, 0.5],  
  scale: [0.25, 0.7],  
  onSpawn: p => {  
    p.sparklePhase = Math.random() * (Math.PI * 2);  
    p.sparkleStrength = Math.mix(0.5, 1.0, Math.random());  
  }  
});  
gen.start({spawn: 120});
Copy
```

### 15) Use a simple BaseShapeData source area (interior)

BaseShapeData source objects can be passed directly as areas. A simple shape, such as a circle, uses the shape's
optimized point sampler after construction.

```
const area = {type: "circle", x: 1200, y: 900, radius: 160};  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 100,  
  spawnRate: 120,  
  area,  
  sampleMode: "interior",  
  textures: ["ui/particles/snow.png"],  
  lifetime: [800, 1400],  
  fade: {in: 0.15, out: 0.3},  
  velocity: {speed: [5, 25], angle: [0, 360]},  
  alpha: [0.15, 0.4],  
  scale: [0.3, 0.8],  
  blend: PIXI.BLEND_MODES.SCREEN  
});  
gen.start({spawn: 100});
Copy
```

### 16) Use a complex BaseShapeData area (boundary)

On a gridded scene, GridShapeData can represent a union of multiple grid spaces. The resulting geometry is sampled
through its PolygonTree, which is useful for complex boundaries.

```
const origin = canvas.grid.getOffset({x: 1200, y: 900});  
const area = new foundry.data.GridShapeData({  
  offsets: [  
    origin,  
    {i: origin.i + 1, j: origin.j},  
    {i: origin.i + 1, j: origin.j + 1},  
    {i: origin.i + 2, j: origin.j + 1}  
  ]  
}, {parent: canvas.scene});  
  
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 120,  
  spawnRate: 120,  
  area,  
  sampleMode: "boundary",  
  textures: ["ui/particles/snow.png"],  
  lifetime: [900, 1600],  
  fade: {in: 0.1, out: 0.35},  
  velocity: {speed: [15, 45], angle: [0, 360]},  
  alpha: [0.2, 0.55],  
  scale: [0.25, 0.7],  
  blend: PIXI.BLEND_MODES.SCREEN  
});  
gen.start({spawn: 120});
Copy
```

### 17) Continuous spray with over-life curves

Use `spawnRate` and over-life curves for effects that accelerate, shrink, or fade without custom callbacks.

```
const gen = new foundry.canvas.animation.ParticleGenerator({  
  mode: "effect",  
  count: 220,  
  spawnRate: 180,  
  area: {from: {x: 900, y: 700}, to: {x: 1300, y: 760}},  
  textures: ["ui/particles/spray.png"],  
  lifetime: [900, 1300],  
  velocity: {  
    angle: [70, 110],  
    speed: {min: 525, max: 700, curve: [{time: 0, value: 1}, {time: 1, value: 0.2}]}  
  },  
  rotation: {  
    speed: {min: -120, max: 120, curve: [{time: 0, value: 1}, {time: 1, value: 0.25}]}  
  },  
  alpha: {  
    min: 0.45,  
    max: 0.8,  
    curve: [{time: 0, value: 0}, {time: 0.15, value: 1}, {time: 1, value: 0}]  
  },  
  scale: {min: 0.48, max: 0.8, curve: [{time: 0, value: 1.4}, {time: 1, value: 0.25}]},  
  tint: {  
    curve: [{time: 0, value: 0x66CCFF}, {time: 0.65, value: 0xFFFFFF}, {time: 1, value: 0x4F6DFF}]  
  }  
});  
gen.start();
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Properties

[adjustedMaxParticles](#adjustedmaxparticles)
[anchor](#anchor)
[anchorOffset](#anchoroffset)
[anchorPoint](#anchorpoint)
[blendMode](#blendmode)
[blurOptions](#bluroptions)
[clip](#clip)
[constraints](#constraints)
[container](#container)
[drift](#drift)
[elevation](#elevation)
[fadeInDuration](#fadeinduration)
[fadeOutDuration](#fadeoutduration)
[follow](#follow)
[initialBatch](#initialbatch)
[manualSpawning](#manualspawning)
[maxParticles](#maxparticles)
[mode](#mode)
[onDeath](#ondeath)
[onSpawn](#onspawn)
[onTick](#ontick)
[onUpdate](#onupdate)
[orbit](#orbit)
[particleAnchor](#particleanchor)
[particleLifetime](#particlelifetime)
[particlePool](#particlepool)
[particles](#particles)
[positionTest](#positiontest)
[rotation](#rotation)
[sampleMode](#samplemode)
[shaderClass](#shaderclass)
[sort](#sort)
[spawnArea](#spawnarea)
[spawnProbability](#spawnprobability)
[textures](#textures)
[velocity](#velocity)
[viewport](#viewport)
[\_anchorLocal](#_anchorlocal)
[\_anchorScene](#_anchorscene)
[\_behavior](#_behavior)
[\_behaviorContext](#_behaviorcontext)
[\_blurFilter](#_blurfilter)
[\_bounds](#_bounds)
[\_brLocal](#_brlocal)
[\_brScreen](#_brscreen)
[\_budgetRectLocal](#_budgetrectlocal)
[\_constraintRect](#_constraintrect)
[\_debug](#_debug)
[\_debugProfile](#_debugprofile)
[\_debugStats](#_debugstats)
[\_debugTint](#_debugtint)
[\_debugTintByTexture](#_debugtintbytexture)
[\_generateMovementSpeed](#_generatemovementspeed)
[\_hasOldBudgetRectLocal](#_hasoldbudgetrectlocal)
[\_initialized](#_initialized)
[\_mask](#_mask)
[\_newlyVisibleAreaPool](#_newlyvisibleareapool)
[\_newlyVisibleAreas](#_newlyvisibleareas)
[\_oldBudgetRectLocal](#_oldbudgetrectlocal)
[\_particlesContainer](#_particlescontainer)
[\_spawnPoint](#_spawnpoint)
[\_stopped](#_stopped)
[\_tickerAttached](#_tickerattached)
[\_tlLocal](#_tllocal)
[\_tlScreen](#_tlscreen)
[\_viewRectLocal](#_viewrectlocal)
[\_worldRectLocal](#_worldrectlocal)
[DEFAULT\_OPTIONS](#default_options)

### Accessors

[bounds](#bounds)
[budgetRectLocal](#budgetrectlocal)
[debugStats](#debugstats)
[mask](#mask)
[particlesContainer](#particlescontainer)
[spawnRate](#spawnrate)
[viewRectLocal](#viewrectlocal)

### Methods

[\_initializeParticles](#_initializeparticles)
[\_setupParticleBase](#_setupparticlebase)
[spawnParticle](#spawnparticle)
[spawnParticles](#spawnparticles)
[start](#start)
[stop](#stop)
[\_applyRandomDrift](#_applyrandomdrift)
[\_autoSpawnParticles](#_autospawnparticles)
[\_calculateGeneratorProperties](#_calculategeneratorproperties)
[\_computeNewlyVisibleAreas](#_computenewlyvisibleareas)
[\_configureDebug](#_configuredebug)
[\_configureOptions](#_configureoptions)
[\_createNewParticle](#_createnewparticle)
[\_getDefaultBounds](#_getdefaultbounds)
[\_getRandomTexture](#_getrandomtexture)
[\_initializeBehaviors](#_initializebehaviors)
[\_initializeCachedGenerators](#_initializecachedgenerators)
[\_migrateConfig](#_migrateconfig)
[\_onTick](#_ontick)
[\_recycleParticle](#_recycleparticle)
[\_updateExistingParticles](#_updateexistingparticles)
[\_updateParticlesConstrained](#_updateparticlesconstrained)
[\_updateParticlesUnconstrained](#_updateparticlesunconstrained)

## Constructors

### constructor

* new ParticleGenerator(  
  Â Â Â Â config?: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md),  
  ): ParticleGenerator

  #### Parameters

  + `Optional`config: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md) = {}

  #### Returns ParticleGenerator

## Properties

### adjustedMaxParticles

adjustedMaxParticles: number = 0

The computed target particle count based on visible area (ambient mode) or the configured budget (effect mode).

### anchor

anchor: [ParticleGeneratorAnchor](../types/foundry.canvas.animation.types.ParticleGeneratorAnchor.md)

An optional anchor used to attach areas and behaviors.

### anchorOffset

anchorOffset: { x: number; y: number } | null

A fixed offset (scene pixels) applied to the anchor.

### anchorPoint

anchorPoint: ParticleGeneratorAnchorPoint

Which point to use when anchoring.

### blendMode

blendMode: BLEND\_MODES

The blend mode used to render particles.

### blurOptions

blurOptions:  
Â Â Â Â | { enabled: boolean; intensity: number; quality: number  
Â Â Â Â | undefined }  
Â Â Â Â | null

Optional blur filter options applied to the internal container.

### clip

clip: { enabled: boolean | null; rect: Rectangle | null }

Clip (mask) options for the default clip behavior.

### constraints

constraints: {  
Â Â Â Â area: "world" | Rectangle | "view" | "budget" | null;  
Â Â Â Â mode: [ParticleGeneratorConstraintMode](../types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md);  
Â Â Â Â restitution: number;  
}

Out-of-bounds constraint configuration.

### container

container: Container<DisplayObject>

The parent container which receives the internal particle container.

### drift

drift: { enabled: boolean; intensity: number }

Optional random drift configuration.

### elevation

elevation: number

The elevation for the particle container.

### fadeInDuration

fadeInDuration: number

The fade-in duration in milliseconds, or a fraction of lifetime if 0 < value < 1.

### fadeOutDuration

fadeOutDuration: number

The fade-out duration in milliseconds, or a fraction of lifetime if 0 < value < 1.

### follow

follow: [ParticleGeneratorFollowOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorFollowOptions.md)

Follow behavior options.

### initialBatch

initialBatch: number

The initial proportion (0..1) of the computed target particle count to spawn on start.

### manualSpawning

manualSpawning: boolean

If true, particles are never spawned automatically.

### maxParticles

maxParticles: number

The target particle count.

### mode

mode: [ParticleGeneratorMode](../types/foundry.canvas.animation.types.ParticleGeneratorMode.md)

The runtime mode.

### onDeath

onDeath: [ParticleGeneratorDeathCallback](../types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.md) | null

An optional callback called when a particle is recycled.

### onSpawn

onSpawn: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null

An optional callback called after the particle has been placed and configured.

### onTick

onTick: [ParticleGeneratorTickCallback](../types/foundry.canvas.animation.types.ParticleGeneratorTickCallback.md) | null

An optional callback called one time per frame (not per particle!).

### onUpdate

onUpdate: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null

An optional callback called each frame for each live particle.

### orbit

orbit: [ParticleGeneratorOrbitOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.md)

Orbit behavior options.

### particleAnchor

particleAnchor: { x: number; y: number } | null

An optional sprite anchor override for all particles.

### particleLifetime

particleLifetime: number | number[] | { max: number; min: number }

The particle lifetime configuration in milliseconds.

### particlePool

particlePool: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)[] = []

A pool of recycled particles ready to be reused.

### particles

particles: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)[] = []

The currently active particle instances.

### positionTest

positionTest: [ParticleGeneratorPositionTest](../types/foundry.canvas.animation.types.ParticleGeneratorPositionTest.md) | null

An optional spawn validator.

### rotation

rotation: {  
Â Â Â Â alignVelocity: boolean;  
Â Â Â Â initial: number;  
Â Â Â Â speed: { max: number; min: number };  
Â Â Â Â spread: number;  
}

Resolved rotation configuration for particles.

### sampleMode

sampleMode: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md)

Which part of the spawn area to sample.

### shaderClass

shaderClass: typeof [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

The shader class used to render particles.

### sort

sort: number

The sorting key for the particle container.

### spawnArea

spawnArea: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null = null

The configured default spawn area (effect mode).
This area is defined in scene coordinates and may be interpreted relative to an anchor.
[foundry.data.BaseShapeData](foundry.data.BaseShapeData.md) instances and source data are always interpreted in absolute scene coordinates.
Shape source data is converted to a [foundry.data.BaseShapeData](foundry.data.BaseShapeData.md) instance.
Re-read each frame, so it can be replaced or its values mutated at runtime to animate the spawn region.

### spawnProbability

spawnProbability: number

The chance (0..1) that a spawn attempt actually creates a particle.

### textures

textures: Texture<Resource>[]

The configured particle textures.

### velocity

velocity: [ParticleGeneratorVelocityOptions](../types/foundry.canvas.animation.types.ParticleGeneratorVelocityOptions.md) | null

The velocity configuration used to generate per-particle movement.

### viewport

viewport: {  
Â Â Â Â newlyVisible: boolean;  
Â Â Â Â padding: number;  
Â Â Â Â randomizeAgeInPadding: boolean;  
}

Viewport-related behavior (used primarily in ambient mode).

### `Protected`\_anchorLocal

\_anchorLocal: Point = ...

The current anchor position in local coordinates.

### `Protected`\_anchorScene

\_anchorScene: Point = ...

The current anchor position in scene coordinates.

### `Protected`\_behavior

\_behavior: [ParticleGeneratorBehavior](../interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | null = null

The active behavior implementation.

### `Protected`\_behaviorContext

\_behaviorContext: object

A cached context object passed to behavior hooks.

### `Protected`\_blurFilter

\_blurFilter: Filter | null = null

The blur filter applied to the internal container, if any.

### `Protected`\_bounds

\_bounds: Rectangle

Generator bounds in scene coordinates.

### `Protected`\_brLocal

\_brLocal: Point = ...

Temp point used to avoid per-frame allocations.

### `Protected`\_brScreen

\_brScreen: Point = ...

Temp point used to avoid per-frame allocations.

### `Protected`\_budgetRectLocal

\_budgetRectLocal: Rectangle = ...

The local-space viewport rectangle with padding.

### `Protected`\_constraintRect

\_constraintRect: Rectangle | null = null

Optional custom constraint rectangle in local coordinates.

### `Protected`\_debug

\_debug: [ParticleGeneratorDebugOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | null = null

Normalized debug options.

### `Protected`\_debugProfile

\_debugProfile: boolean = false

Whether profiling is enabled.

### `Protected`\_debugStats

\_debugStats: [ParticleGeneratorDebugStats](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.md) | null = null

Debug statistics and profiling output.
Null when debug stats are disabled.

### `Protected`\_debugTint

\_debugTint: { mode: [ParticleGeneratorDebugTintMode](../types/foundry.canvas.animation.types.ParticleGeneratorDebugTintMode.md); palette: number[] } | null = null

Cached debug tint options.

### `Protected`\_debugTintByTexture

\_debugTintByTexture: WeakMap<Texture<Resource>, number> | null = null

A mapping from textures to deterministic tint values.

### `Protected`\_generateMovementSpeed

\_generateMovementSpeed: (out: Point, particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)) => void

A function which generates per-particle movement speed vectors.

### `Protected`\_hasOldBudgetRectLocal

\_hasOldBudgetRectLocal: boolean = false

Whether the previous-frame budget rectangle is initialized.

### `Protected`\_initialized

\_initialized: boolean = false

Whether the generator has spawned its initial batch.

### `Protected`\_mask

\_mask: DisplayObject | null = null

The display object used to mask particle rendering.

### `Protected`\_newlyVisibleAreaPool

\_newlyVisibleAreaPool: Rectangle[] = ...

A fixed pool of rectangles used to describe newly visible areas.

### `Protected`\_newlyVisibleAreas

\_newlyVisibleAreas: Rectangle[] = []

The list of newly visible areas for the current frame in local coordinates.

### `Protected`\_oldBudgetRectLocal

\_oldBudgetRectLocal: Rectangle = ...

The previous-frame budget rectangle.

### `Protected`\_particlesContainer

\_particlesContainer: [PrimaryCanvasParticleContainer](foundry.canvas.primary.PrimaryCanvasParticleContainer.md) | null = null

The internal container which holds all particles.

### `Protected`\_spawnPoint

\_spawnPoint: Point = ...

Temp point used to sample shape-based spawn areas.

### `Protected`\_stopped

\_stopped: boolean = true

Whether the generator is soft-stopped.

### `Protected`\_tickerAttached

\_tickerAttached: boolean = false

Whether the update callback is attached to the ticker.

### `Protected`\_tlLocal

\_tlLocal: Point = ...

Temp point used to avoid per-frame allocations.

### `Protected`\_tlScreen

\_tlScreen: Point = ...

Temp point used to avoid per-frame allocations.

### `Protected`\_viewRectLocal

\_viewRectLocal: Rectangle = ...

The local-space viewport rectangle without padding.

### `Protected`\_worldRectLocal

\_worldRectLocal: Rectangle = ...

The local-space generator bounds.

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md) = ...

Default generator config.

## Accessors

### bounds

* get bounds(): Rectangle

  The bounding rectangle of the generator in scene coordinates.
  Used to convert between local particle coordinates and scene coordinates.

  #### Returns Rectangle

### budgetRectLocal

* get budgetRectLocal(): Rectangle

  The current padded viewport rectangle used for budget/spawning in ambient mode.

  #### Returns Rectangle

### debugStats

* get debugStats(): [ParticleGeneratorDebugStats](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.md) | null

  Debug statistics and profiling output.
  Returns null if [ParticleGeneratorDebugOptions#stats](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md#stats) is not enabled.

  Note: This getter returns a stable object reference and updates the live values (active/pool/target)
  on access.

  #### Returns [ParticleGeneratorDebugStats](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.md) | null

### mask

* get mask(): DisplayObject | null

  The mask applied to the particle container. Set to null to remove the mask.
  The generator does not manage the lifecycle of externally assigned masks.

  #### Returns DisplayObject | null

### particlesContainer

* get particlesContainer(): Container<DisplayObject> | null

  The PIXI container that holds all particle display objects.

  #### Returns Container<DisplayObject> | null

### spawnRate

* get spawnRate(): number

  The maximum number of particles that may be spawned per second (auto-spawn mode).

  #### Returns number

### viewRectLocal

* get viewRectLocal(): Rectangle

  The current unpadded viewport rectangle in the generator's local space.

  #### Returns Rectangle

## Methods

### \_initializeParticles

* \_initializeParticles(): void

  Spawn the initial particle batch.
  In ambient mode, particle ages are randomized so the scene appears pre-settled.

  #### Returns void

### \_setupParticleBase

* \_setupParticleBase(particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)): void

  Initialize/refresh base particle properties.

  #### Parameters

  + particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)

  #### Returns void

### spawnParticle

* spawnParticle(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null;  
  Â Â Â Â Â Â Â Â position?: Point | { x: number; y: number } | null;  
  Â Â Â Â Â Â Â Â sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
  Â Â Â Â Â Â Â Â texture?: string | Texture<Resource>;  
  Â Â Â Â },  
  ): [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)  
  | null

  Spawn a single particle.
  In "ambient" mode, the default spawn area is the current padded viewport rectangle.
  In "effect" mode, the default spawn area is the configured [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md).

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null;  
    Â Â Â Â position?: Point | { x: number; y: number } | null;  
    Â Â Â Â sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
    Â Â Â Â texture?: string | Texture<Resource>;  
    } = {}
    - ##### `Optional`area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null

      An optional spawn area override.
      Interpreted the same as the configured area (scene coordinates, or relative-to-anchor when anchored).
    - ##### `Optional`position?: Point | { x: number; y: number } | null

      An optional explicit spawn position.
      Coordinates are in scene space.
    - ##### `Optional`sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md)

      Which part of the spawn area to sample.
      Defaults to the configured generator sample mode.
    - ##### `Optional`texture?: string | Texture<Resource>

      A texture (or texture source string) to force for this particle.

  #### Returns [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md) | null

### spawnParticles

* spawnParticles(  
  Â Â Â Â count: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null;  
  Â Â Â Â Â Â Â Â position?: IPointData | null;  
  Â Â Â Â Â Â Â Â sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
  Â Â Â Â Â Â Â Â texture?: string | Texture<Resource>;  
  Â Â Â Â },  
  ): number

  Spawn multiple particles.

  #### Parameters

  + count: number

    The number of particles to spawn.
  + `Optional`options: {  
    Â Â Â Â area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null;  
    Â Â Â Â position?: IPointData | null;  
    Â Â Â Â sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
    Â Â Â Â texture?: string | Texture<Resource>;  
    } = {}
    - ##### `Optional`area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null

      An optional spawn area override.
      Interpreted the same as the configured area (scene coordinates, or relative-to-anchor when anchored).
    - ##### `Optional`position?: IPointData | null

      An optional explicit spawn position (scene coordinates).
    - ##### `Optional`sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md)

      Which part of the spawn area to sample.
      Defaults to the configured generator sample mode.
    - ##### `Optional`texture?: string | Texture<Resource>

      A texture (or texture source string) to force for this burst.

  #### Returns number

  The number of successfully spawned particles.

### start

* start(options?: { spawn?: number }): void

  Start the generator, create the update loop and optionally spawn an initial batch.

  #### Parameters

  + `Optional`options: { spawn?: number }
    - ##### `Optional`spawn?: number

      Spawn this many particles immediately after starting.
      If [ParticleGenerator#manualSpawning](#manualspawning) is false, this is capped
      to the remaining budget (target - active).

  #### Returns void

### stop

* stop(options?: { hard?: boolean }): void

  Stop the generator.

  #### Parameters

  + `Optional`options: { hard?: boolean } = {}
    - ##### `Optional`hard?: boolean

      If true, detach the update loop and destroy internal resources.
      If false, stop spawning and let existing particles expire naturally.

  #### Returns void

### `Protected`\_applyRandomDrift

* \_applyRandomDrift(particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)): void

  `Protected`

  Apply a random drift vector to a particle.

  #### Parameters

  + particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)

  #### Returns void

### `Protected`\_autoSpawnParticles

* \_autoSpawnParticles(): void

  `Protected`

  Spawn particles to move toward the current target count.

  #### Returns void

### `Protected`\_calculateGeneratorProperties

* \_calculateGeneratorProperties(): void

  `Protected`

  Compute the current viewport rectangles and target particle count.
  All rectangles are in the local coordinate space of the internal container.

  #### Returns void

### `Protected`\_computeNewlyVisibleAreas

* \_computeNewlyVisibleAreas(oldRect: Rectangle, newRect: Rectangle): void

  `Protected`

  Compute the portions of newRect that were not visible in oldRect.
  This method reuses a fixed pool of rectangles to avoid per-frame allocations.

  #### Parameters

  + oldRect: Rectangle
  + newRect: Rectangle

  #### Returns void

### `Protected`\_configureDebug

* \_configureDebug(  
  Â Â Â Â debug: boolean | [ParticleGeneratorDebugOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | null | undefined,  
  ): void

  `Protected`

  Configure optional debug helpers.
  This feature set is fully opt-in and is designed to have near-zero overhead when disabled.

  #### Parameters

  + debug: boolean | [ParticleGeneratorDebugOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | null | undefined

  #### Returns void

### `Protected`\_configureOptions

* \_configureOptions(cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)): void

  `Protected`

  Apply the configuration to the ParticleGenerator instance.

  #### Parameters

  + cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

    The configuration object.

  #### Returns void

### `Protected`\_createNewParticle

* \_createNewParticle(texture: Texture<Resource>): [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)

  `Protected`

  Create a new particle instance.

  #### Parameters

  + texture: Texture<Resource>

  #### Returns [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)

### `Protected`\_getDefaultBounds

* \_getDefaultBounds(): Rectangle

  `Protected`

  Get default bounds from the current scene dimensions.

  #### Returns Rectangle

### `Protected`\_getRandomTexture

* \_getRandomTexture(): Texture<Resource> | null

  `Protected`

  Get a random texture from the configured set.

  #### Returns Texture<Resource> | null

### `Protected`\_initializeBehaviors

* \_initializeBehaviors(cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)): void

  `Protected`

  Initialize behaviors from the configuration object.

  #### Parameters

  + cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

  #### Returns void

### `Protected`\_initializeCachedGenerators

* \_initializeCachedGenerators(\_cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)): void

  `Protected`

  Initialize cached generators from the configuration object.

  #### Parameters

  + \_cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

  #### Returns void

### `Protected`\_migrateConfig

* \_migrateConfig(  
  Â Â Â Â config: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md),  
  Â Â Â Â cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md),  
  ): void

  `Protected`

  Migrate deprecated configuration options.

  #### Parameters

  + config: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

    The user-provided configuration object.
  + cfg: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)

    The prepared configuration object.

  #### Returns void

### `Protected`\_onTick

* \_onTick(): void

  `Protected`

  Ticker callback.

  #### Returns void

### `Protected`\_recycleParticle

* \_recycleParticle(particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md), reason: string): void

  `Protected`

  Recycle a particle to the pool.

  #### Parameters

  + particle: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)
  + reason: string

  #### Returns void

### `Protected`\_updateExistingParticles

* \_updateExistingParticles(dt: number): void

  `Protected`

  Update all active particles.

  #### Parameters

  + dt: number

    Delta time in milliseconds.

  #### Returns void

### `Protected`\_updateParticlesConstrained

* \_updateParticlesConstrained(  
  Â Â Â Â dt: number,  
  Â Â Â Â ds: number,  
  Â Â Â Â bounds: Rectangle,  
  Â Â Â Â particles: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)[],  
  Â Â Â Â behavior: [ParticleGeneratorBehavior](../interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | null,  
  Â Â Â Â bctx: object | null,  
  Â Â Â Â mode: [ParticleGeneratorConstraintMode](../types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md),  
  ): void

  `Protected`

  Update particles with constraints applied.

  #### Parameters

  + dt: number
  + ds: number
  + bounds: Rectangle
  + particles: [ParticleMesh](../types/foundry.canvas.animation.types.ParticleMesh.md)[]
  + behavior: [ParticleGeneratorBehavior](../interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | null
  + bctx: object | null
  + mode: [ParticleGeneratorConstraintMode](../types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md)

  #### Returns void

### `Protected`\_updateParticlesUnconstrained

* \_updateParticlesUnconstrained(  
  Â Â Â Â dt: number,  
  Â Â Â Â ds: number,  
  Â Â Â Â particles: object[],  
  Â Â Â Â behavior: [ParticleGeneratorBehavior](../interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | null,  
  Â Â Â Â bctx: object | null,  
  ): void

  `Protected`

  Update particles without constraints.

  #### Parameters

  + dt: number

    Delta time in milliseconds.
  + ds: number

    Delta time in seconds.
  + particles: object[]
  + behavior: [ParticleGeneratorBehavior](../interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | null
  + bctx: object | null

  #### Returns void