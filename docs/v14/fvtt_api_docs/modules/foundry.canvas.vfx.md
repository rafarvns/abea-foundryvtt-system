---
title: "vfx | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.canvas.vfx.html"
category: "modules"
---

# Namespace vfx

Custom documentation about the VFX Framework.

# Canvas Visual Effects (VFX) Framework

Foundry Virtual Tabletop Version 14 introduces a new Visual Effects (VFX) framework exposed under  [`foundry.canvas.vfx`](#). The framework is experimental in V14 and must be explicitly opted-in (details below). It provides abstraction layers for systems and modules to create timeline-driven and composable animations for anything from projectile attacks, spell effects, and more. This framework is extensible by registering options to  [`CONFIG.Canvas.vfx`](../variables/CONFIG.Canvas.md#vfx).

The underlying engine uses the `animejs` library <https://animejs.com/> which is now bundled as a core dependency. It's fairly lightweight, only adding +118KB to our `vendor.mjs` bundle size. The bundled animejs v4 library is exposed as `globalThis.animejs`. Timelines are driven by the `PIXI.Ticker` rather `animejs` managing a separate loop.

## Opt-in

The framework is inactive by default. Enable it during init if your module or system plans to use it.

```
Hooks.once("init", () => {  
  CONFIG.Canvas.vfx.enabled = true;  
});
Copy
```

## Core Concepts

### VFXEffect

[`foundry.canvas.vfx.VFXEffect`](../classes/foundry.canvas.vfx.VFXEffect.md) is a  [`foundry.abstract.DataModel`](../classes/foundry.abstract.DataModel.md) that groups one or more named components and sequences them on a shared animejs timeline. It is single-use after construction, call  [`foundry.canvas.vfx.VFXEffect#play`](../classes/foundry.canvas.vfx.VFXEffect.md#play) once or  [`foundry.canvas.vfx.VFXEffect#clone`](../classes/foundry.canvas.vfx.VFXEffect.md#clone) to repeat it.

Key API methods:

1. `play(references={})` - resolves references, then loads, draws, attaches, and plays all components
2. `stop()` - gracefully stops all components; the returned promise resolves true
3. `cancel()` - immediately cancels all components; the returned promise resolves false
4. `clone(data={})` - builds a fresh instance from the original unresolved source, optionally merging overrides

### VFXComponent

[`foundry.canvas.vfx.VFXComponent`](../classes/foundry.canvas.vfx.VFXComponent.md) is an abstract base class for a single visual or audio unit that can be composed into effects. The framework initially ships with a number of built-in components. Available components are registered (and can be extended by modules) at  [`CONFIG.Canvas.vfx.components`](../variables/CONFIG.Canvas.md#vfx).

`singleAttack`
Full charge-fly-impact projectile animation. Moves a sprite from an origin to a destination along a path, with optional charge, projectile, and impact phases each supporting their own texture, sound, duration, scale, and animation presets.

`singleImpact`
Simpler alternative for a single sprite + sound at a fixed position. No path traversal.

`positionalSound`
Plays a sound at a world position via  [`foundry.audio.Sound#playAtPosition`](../classes/foundry.audio.Sound.md#playatposition). Supports all positional audio parameters.

`scrollingText`
Fires  [`foundry.canvas.groups.InterfaceCanvasGroup#createScrollingText`](../classes/foundry.canvas.groups.InterfaceCanvasGroup.md#createscrollingtext) at the component's scheduled position in the effect timeline.

`shake`
Uses  [`foundry.canvas.animation.CanvasShakeEffect`](../classes/foundry.canvas.animation.CanvasShakeEffect.md) for timeline-synchronized canvas shake.

`particleGenerator`
Uses  [`foundry.canvas.animation.ParticleGenerator`](../classes/foundry.canvas.animation.ParticleGenerator.md) for managing a particle emitter as part of animation lifecycle.

### VFXPath

[`foundry.canvas.vfx.VFXPath`](../classes/foundry.canvas.vfx.VFXPath.md) constructs a multi-segment path for animation of projectiles or particles that allows continuous interpolation of points, elevation, rotation, and sorting at every point along the path. Predefined path types are available under  [`CONFIG.Canvas.vfx.paths`](../variables/CONFIG.Canvas.md#vfx) with built-in options for `linear`, `arc` (using hermite spline), and `weave` (using hermite spline).

### VFXComponentAnimation

Effects can be augmented with an arbitrary number of pre-registered animations. Each  [`foundry.VFXComponentAnimation`](../interfaces/foundry.VFXComponentAnimation.md) is a plain object specifying some callback methods:

```
const customAnimation = {  
  setup(state, params) {},       // Optional, called once before animation starts  
  animate(t, state, params) {},  // Required, called each tick with progress t in [0,1]  
  tearDown(state, params) {}     // Optional, called after animation completes  
};
Copy
```

These animations are referenced in the  [`CONFIG.Canvas.vfx.animations`](../variables/CONFIG.Canvas.md#vfx) registry which can be extended by packages to make more animations available.

## Storage and Reference Fields

A crucial design cornerstone of this framework is that  [`foundry.canvas.vfx.VFXEffect`](../classes/foundry.canvas.vfx.VFXEffect.md) is serializable which allows it to be stored in the database or transmitted over websocket. This mechanism allows delivery of visually consistent effect playback across multiple clients.

Effects can be predefined using dynamic references that resolve at runtime. For example a projectile attack **will have** an `origin`, a `target`, or projectile `speed`, but all of these variables can be resolved at runtime through the references passed to the `VFXEffect#play` method.

This is accomplished through a set of special  [`foundry.data.fields.DataField`](../classes/foundry.data.fields.DataField.md) subclasses:

* [`foundry.canvas.vfx.fields.VFXReferenceField`](../classes/foundry.canvas.vfx.fields.VFXReferenceField.md) - wraps any DataField; resolves a scalar value or object property with an optional numeric delta
* [`foundry.canvas.vfx.fields.VFXReferenceObjectField`](../classes/foundry.canvas.vfx.fields.VFXReferenceObjectField.md) - for object types; supports per-key deltas
* [`foundry.canvas.vfx.fields.VFXReferencePointField`](../classes/foundry.canvas.vfx.fields.VFXReferencePointField.md) - convenience for objects specifically having `{x, y, elevation?}` structure

Components accept either concrete values or reference descriptors for positional and numeric inputs. A reference descriptor looks like:

```
{ reference: "target", property: "center", delta: { x: 0, y: -50 } }
Copy
```

At play time, `VFXEffect#play(references)` resolves these references. This allows a single effect definition to animate between different tokens on each use.

## Usage Examples

### Example 1 - Ranged attack from one token to another

```
const effect = new foundry.canvas.vfx.VFXEffect({  
  name: "Arrow Shot",  
  components: {  
    flight: {  
      type: "singleAttack",  
      path: [  
        {reference: "origin", property: "center"},  
        {reference: "target", property: "center"}  
      ],  
      pathType: "arc",  
      charge: {  
        texture: "systems/my-system/art/vfx/bow-draw.webp",  
        duration: 300,  
        animations: [{function: "drawBack", params: {}}]  
      },  
      projectile: {  
        texture: "systems/my-system/art/vfx/arrow.webp",  
        speed: 150,        // feet per second; duration computed from path length  
        size: { w: 48, h: 24 },  
        animations: [{function: "followPath", params: {}}],  
        sound: {  
          src: "systems/my-system/audio/arrow-fly.ogg",  
          align: foundry.canvas.vfx.SOUND_ALIGNMENT.START  
        }  
      },  
      impact: {  
        texture: "systems/my-system/art/vfx/arrow-impact.webp",  
        duration: 400,  
        sound: {  
          src: "systems/my-system/audio/arrow-hit.ogg",  
          align: foundry.canvas.vfx.SOUND_ALIGNMENT.START  
        }  
      }  
    }  
  },  
  timeline: [{component: "flight", position: 0}]  
});  
  
await effect.play({  
  origin: attackerToken.document,  
  target: targetToken.document  
});
Copy
```

### Example 2 - Explosion with screen shake and scrolling damage text

```
const effect = new foundry.canvas.vfx.VFXEffect({  
  name: "Fireball Impact",  
  components: {  
    burst: {  
      type: "singleImpact",  
      position: {reference: "target", property: "center"},  
      texture: "systems/my-system/art/vfx/fireball.webp",  
      duration: 1200,  
      size: { w: 256, h: 256 },  
      animations: [{function: "scale", params: {}}],  
      sound: {  
        src: "systems/my-system/audio/explosion.ogg"  
      }  
    },  
    shake: {  
      type: "shake",  
      duration: 800,  
      maxDisplacement: 20,  
      smoothness: 0.6  
    },  
    damage: {  
      type: "scrollingText",  
      origin: {reference: "target", property: "center"},  
      content: {reference: "damageText"},  
      duration: 1500,  
      scrollDirection: CONST.TEXT_ANCHOR_POINTS.TOP,  
      textStyle: { fill: "#ff4400", fontSize: 36, fontWeight: "bold" }  
    }  
  },  
  timeline: [  
    {component: "burst",  position: 0},  
    {component: "shake",  position: 100},  
    {component: "damage", position: 200}  
  ]  
});  
  
await effect.play({  
  target: targetToken.document,  
  damageText: `${totalDamage} fire`  
});
Copy
```

## Extending the Framework

Register custom components, animations, and path generators during init:

```
// Define and register a custom VFXComponent  
class MyBeamComponent extends foundry.canvas.vfx.VFXComponent {  
  static TYPE = "myBeam";  
  
  // ...  
}  
CONFIG.Canvas.vfx.components["myBeam"] = MyBeamComponent;  
  
// Register a custom animation preset  
CONFIG.Canvas.vfx.animations["spin"] = {  
  animate(t, state, params) {  
    state.container.rotation = t * Math.PI * 2 * (params.turns ?? 1);  
  }  
};  
  
// Register a custom path generator  
CONFIG.Canvas.vfx.paths["spiral"] = (points, params) => {  
  const generated = generateSpiralPoints(points, params);  
  return new foundry.canvas.vfx.VFXPath(generated);  
};
Copy
```

## Namespaces

[components](foundry.canvas.vfx.components.md)

[constants](foundry.canvas.vfx.constants.md)

[fields](foundry.canvas.vfx.fields.md)

[utils](foundry.canvas.vfx.utils.md)

## Classes

[VFXCanvasContainer](../classes/foundry.canvas.vfx.VFXCanvasContainer.md)

[VFXComponent](../classes/foundry.canvas.vfx.VFXComponent.md)

[VFXEffect](../classes/foundry.canvas.vfx.VFXEffect.md)

[VFXPath](../classes/foundry.canvas.vfx.VFXPath.md)

## Functions

[activate](../functions/foundry.canvas.vfx.activate.md)

[configure](../functions/foundry.canvas.vfx.configure.md)

[deactivate](../functions/foundry.canvas.vfx.deactivate.md)