---
title: "CanvasShakeEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.animation.CanvasShakeEffect.html"
category: "classes"
---

# Class CanvasShakeEffect

A lightweight screen/object shake utility.

CanvasShakeEffect applies a smooth, time-based positional jitter to a target PIXI.DisplayObject
by offsetting its `x` and `y` coordinates relative to a captured reference point. The shake motion is produced using
two independent [foundry.canvas.animation.SmoothNoise](foundry.canvas.animation.SmoothNoise.md) generators (one per axis) to avoid harsh,
frame-to-frame randomness and provide a more natural camera-like shake.

The effect runs for [CanvasShakeEffect#duration](#duration) milliseconds, with a linearly decaying amplitude from
[CanvasShakeEffect#maxDisplacement](#maxdisplacement) down to zero. After the active shake window ends, the target smoothly returns
to its reference point using [CanvasShakeEffect#returnSpeed](#returnspeed) as a per-tick interpolation factor.

If multiple shake instances target the same object, the newest shake replaces the currently active one using a
smooth transition, and the target returns to its original pre-shake position once shaking completes.
Important: Changes of `x` and `y` from external sources outside of CanvasShakeEffect are taken into account.

Safety/termination conditions:

* If the target object is destroyed, the effect stops immediately.
* If [Canvas#photosensitiveMode](foundry.canvas.Canvas.md#photosensitivemode) is enabled, the effect stops immediately.
* If [CanvasShakeEffect#maxDisplacement](#maxdisplacement) or [CanvasShakeEffect#duration](#duration) are zero,
  the effect stops immediately.

#### Example

```
// Shake a target for 6 seconds with a 20px peak amplitude  
const shake = new foundry.canvas.animation.CanvasShakeEffect({  
  target: canvas.stage,  
  duration: 6000,  
  maxDisplacement: 20,  
  smoothness: 0.6,  
  returnSpeed: 0.15,  
  invalidateMasks: true  
});  
await shake.play();
Copy
```

#### Example

```
// Use a custom ticker and a deterministic time offset  
const shake = new foundry.canvas.animation.CanvasShakeEffect({  
  target: someContainer,  
  seed: 12345,  
  ticker: myTicker  
});  
shake.play();
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Properties

[duration](#duration)
[maxDisplacement](#maxdisplacement)
[randomOffset](#randomoffset)
[returnSpeed](#returnspeed)
[smoothness](#smoothness)
[TAKEOVER\_DURATION\_MS](#takeover_duration_ms)

### Accessors

[playing](#playing)

### Methods

[play](#play)
[stop](#stop)

## Constructors

### constructor

* new CanvasShakeEffect(  
  Â Â Â Â options: {  
  Â Â Â Â Â Â Â Â duration?: number;  
  Â Â Â Â Â Â Â Â invalidateMasks?: boolean;  
  Â Â Â Â Â Â Â Â maxDisplacement?: number;  
  Â Â Â Â Â Â Â Â returnSpeed?: number;  
  Â Â Â Â Â Â Â Â seed?: number | null;  
  Â Â Â Â Â Â Â Â smoothness?: number;  
  Â Â Â Â Â Â Â Â target?: DisplayObject;  
  Â Â Â Â Â Â Â Â ticker?: Ticker | null;  
  Â Â Â Â },  
  ): CanvasShakeEffect

  Create a new CanvasShakeEffect

  #### Parameters

  + options: {  
    Â Â Â Â duration?: number;  
    Â Â Â Â invalidateMasks?: boolean;  
    Â Â Â Â maxDisplacement?: number;  
    Â Â Â Â returnSpeed?: number;  
    Â Â Â Â seed?: number | null;  
    Â Â Â Â smoothness?: number;  
    Â Â Â Â target?: DisplayObject;  
    Â Â Â Â ticker?: Ticker | null;  
    }
    - ##### `Optional`duration?: number

      Total shake duration in MS.
    - ##### `Optional`invalidateMasks?: boolean

      Should hidden canvas group masks be invalidated each frame?
    - ##### `Optional`maxDisplacement?: number

      Maximum displacement in pixels.
    - ##### `Optional`returnSpeed?: number

      "Return to origin" lerp factor per tick in the range [0, 1].
    - ##### `Optional`seed?: number | null

      Optional seed used to derive a deterministic time offset.
    - ##### `Optional`smoothness?: number

      Smoothness in the range [0, 1]. Higher is smoother.
    - ##### `Optional`target?: DisplayObject

      The target PIXI display object to shake. Defaults to canvas.stage
    - ##### `Optional`ticker?: Ticker | null

      Optional PIXI ticker. Defaults to [foundry.canvas.animation.CanvasAnimation.ticker](foundry.canvas.animation.CanvasAnimation.md#ticker).

  #### Returns CanvasShakeEffect

## Properties

### duration

duration: number

Total shake duration in MS. After this duration elapses, the effect transitions into a return-to-origin phase.

### maxDisplacement

maxDisplacement: number

Maximum displacement in pixels during the shake. This value is used as the target maximum offset along each axis.

### randomOffset

randomOffset: number

The deterministic time offset derived from CanvasShakeEffect#seed.
Applied to the elapsed time before generating noise.

### returnSpeed

returnSpeed: number

Return-to-origin interpolation factor per tick, in the range [0, 1].
Higher values restore the target to its reference point more quickly.

### smoothness

smoothness: number

Smoothness parameter in the range [0, 1]. Higher values produce smoother, lower-frequency motion.

### `Static`TAKEOVER\_DURATION\_MS

TAKEOVER\_DURATION\_MS: number = 150

Duration in ms of the smooth takeover transition when a new shake replaces an active shake.

## Accessors

### playing

* get playing(): boolean

  Whether the shake effect is currently active.

  #### Returns boolean

## Methods

### play

* play(): Promise<void>

  Start the shake effect.
  Registers a ticker callback and returns a promise that resolves once the effect ends.
  If the effect is already playing, returns the existing promise (or a resolved one as a fallback).

  #### Returns Promise<void>

  A promise that resolves when the effect completes or is stopped.

### stop

* stop(options?: { release?: boolean; snap?: boolean }): void

  Stop the shake effect immediately. Removes the ticker callback, optionally snaps the target back to its base
  position, and resolves the active promise.

  #### Parameters

  + `Optional`options: { release?: boolean; snap?: boolean } = {}
    - ##### `Optional`release?: boolean

      Release the target shake state if no other shake is active.
    - ##### `Optional`snap?: boolean

      Snap the target back to its base position.

  #### Returns void