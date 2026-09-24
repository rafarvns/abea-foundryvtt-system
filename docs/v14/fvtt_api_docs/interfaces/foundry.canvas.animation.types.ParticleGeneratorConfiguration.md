---
title: "ParticleGeneratorConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.html"
category: "interfaces"
---

# Interface ParticleGeneratorConfiguration

interface ParticleGeneratorConfiguration {  
Â Â Â Â [alpha](#alpha)?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md);  
Â Â Â Â [anchor](#anchor)?: [ParticleGeneratorAnchor](../types/foundry.canvas.animation.types.ParticleGeneratorAnchor.md);  
Â Â Â Â [anchorOffset](#anchoroffset)?: IPointData | null;  
Â Â Â Â [anchorPoint](#anchorpoint)?: [ParticleGeneratorAnchorPoint](../types/foundry.canvas.animation.types.ParticleGeneratorAnchorPoint.md);  
Â Â Â Â [area](#area)?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null;  
Â Â Â Â [behavior](#behavior)?: [ParticleGeneratorBehavior](foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | [ParticleGeneratorBehaviorId](../types/foundry.canvas.animation.types.ParticleGeneratorBehaviorId.md) | null;  
Â Â Â Â [blend](#blend)?: BLEND\_MODES;  
Â Â Â Â [blur](#blur)?:  
Â Â Â Â Â Â Â Â | number  
Â Â Â Â Â Â Â Â | { intensity: number; quality?: number }  
Â Â Â Â Â Â Â Â | { enabled: boolean; intensity: number; quality?: number }  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â [bounds](#bounds)?: [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | null;  
Â Â Â Â [clip](#clip)?: boolean | [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | [ParticleGeneratorClipOptions](foundry.canvas.animation.types.ParticleGeneratorClipOptions.md);  
Â Â Â Â [constraintArea](#constraintarea)?:  
Â Â Â Â Â Â Â Â | "world"  
Â Â Â Â Â Â Â Â | "view"  
Â Â Â Â Â Â Â Â | [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md)  
Â Â Â Â Â Â Â Â | "budget"  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â [constraintMode](#constraintmode)?: [ParticleGeneratorConstraintMode](../types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md)  
Â Â Â Â | null;  
Â Â Â Â [container](#container)?: Container<DisplayObject>;  
Â Â Â Â [count](#count)?: number;  
Â Â Â Â [debug](#debug)?: boolean | [ParticleGeneratorDebugOptions](foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | null;  
Â Â Â Â [drift](#drift)?: { enabled: boolean; intensity: number };  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [fade](#fade)?: [ParticleGeneratorFadeOptions](foundry.canvas.animation.types.ParticleGeneratorFadeOptions.md);  
Â Â Â Â [follow](#follow)?: [ParticleGeneratorFollowOptions](foundry.canvas.animation.types.ParticleGeneratorFollowOptions.md);  
Â Â Â Â [initial](#initial)?: number;  
Â Â Â Â [lifetime](#lifetime)?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md);  
Â Â Â Â [manual](#manual)?: boolean | null;  
Â Â Â Â [mask](#mask)?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md) | DisplayObject | IShape | null;  
Â Â Â Â [mode](#mode)?: [ParticleGeneratorMode](../types/foundry.canvas.animation.types.ParticleGeneratorMode.md);  
Â Â Â Â [newlyVisible](#newlyvisible)?: boolean;  
Â Â Â Â [onDeath](#ondeath)?: [ParticleGeneratorDeathCallback](../types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.md) | null;  
Â Â Â Â [onSpawn](#onspawn)?: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null;  
Â Â Â Â [onTick](#ontick)?: [ParticleGeneratorTickCallback](../types/foundry.canvas.animation.types.ParticleGeneratorTickCallback.md) | null;  
Â Â Â Â [onUpdate](#onupdate)?: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null;  
Â Â Â Â [orbit](#orbit)?: [ParticleGeneratorOrbitOptions](foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.md);  
Â Â Â Â [particleAnchor](#particleanchor)?: IPointData | null;  
Â Â Â Â [perFrame](#perframe)?: number;  
Â Â Â Â [positionTest](#positiontest)?: [ParticleGeneratorPositionTest](../types/foundry.canvas.animation.types.ParticleGeneratorPositionTest.md) | null;  
Â Â Â Â [probability](#probability)?: number;  
Â Â Â Â [randomizeAgeInPadding](#randomizeageinpadding)?: boolean;  
Â Â Â Â [restitution](#restitution)?: number;  
Â Â Â Â [rotation](#rotation)?: [ParticleGeneratorRotationOptions](foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md);  
Â Â Â Â [sampleMode](#samplemode)?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
Â Â Â Â [scale](#scale)?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md);  
Â Â Â Â [shaderClass](#shaderclass)?: typeof [BaseSamplerShader](../classes/foundry.canvas.rendering.shaders.BaseSamplerShader.md) | null;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [spawnRate](#spawnrate)?: number;  
Â Â Â Â [textures](#textures)?: (string | Texture<Resource>)[];  
Â Â Â Â [ticker](#ticker)?: Ticker;  
Â Â Â Â [tint](#tint)?: [ParticleGeneratorColorValue](../types/foundry.canvas.animation.types.ParticleGeneratorColorValue.md);  
Â Â Â Â [velocity](#velocity)?: [ParticleGeneratorVelocityOptions](../types/foundry.canvas.animation.types.ParticleGeneratorVelocityOptions.md) | null;  
Â Â Â Â [viewPadding](#viewpadding)?: number;  
}

##### Index

### Properties

[alpha?](#alpha)
[anchor?](#anchor)
[anchorOffset?](#anchoroffset)
[anchorPoint?](#anchorpoint)
[area?](#area)
[behavior?](#behavior)
[blend?](#blend)
[blur?](#blur)
[bounds?](#bounds)
[clip?](#clip)
[constraintArea?](#constraintarea)
[constraintMode?](#constraintmode)
[container?](#container)
[count?](#count)
[debug?](#debug)
[drift?](#drift)
[elevation?](#elevation)
[fade?](#fade)
[follow?](#follow)
[initial?](#initial)
[lifetime?](#lifetime)
[manual?](#manual)
[mask?](#mask)
[mode?](#mode)
[newlyVisible?](#newlyvisible)
[onDeath?](#ondeath)
[onSpawn?](#onspawn)
[onTick?](#ontick)
[onUpdate?](#onupdate)
[orbit?](#orbit)
[particleAnchor?](#particleanchor)
[perFrame?](#perframe)
[positionTest?](#positiontest)
[probability?](#probability)
[randomizeAgeInPadding?](#randomizeageinpadding)
[restitution?](#restitution)
[rotation?](#rotation)
[sampleMode?](#samplemode)
[scale?](#scale)
[shaderClass?](#shaderclass)
[sort?](#sort)
[spawnRate?](#spawnrate)
[textures?](#textures)
[ticker?](#ticker)
[tint?](#tint)
[velocity?](#velocity)
[viewPadding?](#viewpadding)

## Properties

### `Optional`alpha

alpha?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md)

The alpha value for particles.

### `Optional`anchor

anchor?: [ParticleGeneratorAnchor](../types/foundry.canvas.animation.types.ParticleGeneratorAnchor.md)

An optional anchor used to attach areas and behaviors.

### `Optional`anchorOffset

anchorOffset?: IPointData | null

A fixed offset (scene pixels) applied to the anchor.

### `Optional`anchorPoint

anchorPoint?: [ParticleGeneratorAnchorPoint](../types/foundry.canvas.animation.types.ParticleGeneratorAnchorPoint.md)

Which point to use when anchoring.

### `Optional`area

area?: [ParticleGeneratorArea](../types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | null

The default spawn area in "effect" mode (scene coordinates).

### `Optional`behavior

behavior?: [ParticleGeneratorBehavior](foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | [ParticleGeneratorBehaviorId](../types/foundry.canvas.animation.types.ParticleGeneratorBehaviorId.md) | null

Optional behavior.

### `Optional`blend

blend?: BLEND\_MODES

The blend mode used to render particles.

### `Optional`blur

blur?:  
Â Â Â Â | number  
Â Â Â Â | { intensity: number; quality?: number }  
Â Â Â Â | { enabled: boolean; intensity: number; quality?: number }  
Â Â Â Â | null

An optional blur filter applied to the internal container.

### `Optional`bounds

bounds?: [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | null

Optional generator bounds in scene coordinates.
This is used for coordinate conversion, viewport clamping, and optional clipping.
Defaults to the current Scene dimensions.

### `Optional`clip

clip?: boolean | [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | [ParticleGeneratorClipOptions](foundry.canvas.animation.types.ParticleGeneratorClipOptions.md)

Clip (=> mask) configuration. Use true for default clipping. If no clip rectangle is provided and
[ParticleGeneratorConfiguration#area](#area) is a [foundry.data.BaseShapeData](../classes/foundry.data.BaseShapeData.md), that shape is used.

### `Optional`constraintArea

constraintArea?: "world" | "view" | [ParticleGeneratorRectangle](../types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | "budget" | null

The constraint area.

* "budget": the padded viewport rectangle.
* "view": the unpadded viewport rectangle.
* "world": the generator bounds.
* Rectangle: a custom rectangle in scene coordinates.
  If null, defaults to "budget" in ambient mode when constraintMode is not "none".

### `Optional`constraintMode

constraintMode?: [ParticleGeneratorConstraintMode](../types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md) | null

How to handle particles leaving the constraint
area.
If null, defaults to "kill" in ambient mode and "none" in effect mode.

### `Optional`container

container?: Container<DisplayObject>

The parent container which receives the internal particle container. Defaults
to canvas.primary.

### `Optional`count

count?: number

The target particle count.

* In "ambient" mode, this is the maximum for the full bounds and is scaled by visible area.
* In "effect" mode, this is the absolute target.

### `Optional`debug

debug?: boolean | [ParticleGeneratorDebugOptions](foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | null

Optional debugging helpers.

### `Optional`drift

drift?: { enabled: boolean; intensity: number }

Optional random drift configuration.

### `Optional`elevation

elevation?: number

The elevation for the particle container.

### `Optional`fade

fade?: [ParticleGeneratorFadeOptions](foundry.canvas.animation.types.ParticleGeneratorFadeOptions.md)

Fade envelope configuration.

### `Optional`follow

follow?: [ParticleGeneratorFollowOptions](foundry.canvas.animation.types.ParticleGeneratorFollowOptions.md)

Follow behavior options.

### `Optional`initial

initial?: number

The initial proportion (0..1) of the computed target particle count to spawn on
start.

### `Optional`lifetime

lifetime?: [ParticleGeneratorRange](../types/foundry.canvas.animation.types.ParticleGeneratorRange.md)

The particle lifetime in milliseconds.

### `Optional`manual

manual?: boolean | null

If true, particles are never spawned automatically.
If null, defaults to true in "effect" mode unless `spawnRate` is explicitly configured and false in "ambient"
mode. Legacy `perFrame` does not change the default.

### `Optional`mask

mask?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md) | DisplayObject | IShape | null

An explicit mask for the
particle container. Accepts either a pre-built PIXI.DisplayObject, a PIXI shape, or a
[foundry.data.BaseShapeData](../classes/foundry.data.BaseShapeData.md) which is drawn into a PIXI.Graphics.
Presence implies masking is desired, and this mask takes precedence over `clip`.

### `Optional`mode

mode?: [ParticleGeneratorMode](../types/foundry.canvas.animation.types.ParticleGeneratorMode.md)

The runtime mode.

* "ambient": maintains a stable density in the visible region (viewport-based budget).
* "effect": spawns in a defined area; particles are lifetime-driven unless constrained.

### `Optional`newlyVisible

newlyVisible?: boolean

If true, prioritize spawning particles in newly-visible areas when the view
changes (pan/zoom).

### `Optional`onDeath

onDeath?: [ParticleGeneratorDeathCallback](../types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.md) | null

An optional callback called when a particle is recycled.

### `Optional`onSpawn

onSpawn?: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null

An optional callback called after the particle has been placed and configured.
This is a handy place to attach custom per-particle data for batch shaders.

### `Optional`onTick

onTick?: [ParticleGeneratorTickCallback](../types/foundry.canvas.animation.types.ParticleGeneratorTickCallback.md) | null

An optional callback called per frame (not per particle!).

### `Optional`onUpdate

onUpdate?: [ParticleGeneratorParticleCallback](../types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | null

An optional callback called each frame for each live particle, after position, rotation, tint, and alpha have been
computed.

### `Optional`orbit

orbit?: [ParticleGeneratorOrbitOptions](foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.md)

Orbit behavior options.

### `Optional`particleAnchor

particleAnchor?: IPointData | null

Optional sprite anchor override for particle textures.
If null, each texture's `defaultAnchor` is used.

### `Optional`perFrame

perFrame?: number

Deprecated since v14. Use `spawnRate` instead. If `spawnRate` is omitted or null,
this legacy per-frame value is converted using the Pixi ticker target frame rate.

### `Optional`positionTest

positionTest?: [ParticleGeneratorPositionTest](../types/foundry.canvas.animation.types.ParticleGeneratorPositionTest.md) | null

An optional spawn validator.
The function is invoked as (x, y, {generator, particle}) and must return true if the location is valid.
Coordinates are scene coordinates in pixels. The generator evaluates a single candidate position per spawn attempt.

### `Optional`probability

probability?: number

The chance (0..1) that a spawn attempt actually creates a particle.

### `Optional`randomizeAgeInPadding

randomizeAgeInPadding?: boolean

If true, particles spawned in padded regions can start partially
through their lifetime.

### `Optional`restitution

restitution?: number

Bounce restitution factor (0..1) used when constraintMode is "bounce".

### `Optional`rotation

rotation?: [ParticleGeneratorRotationOptions](foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md)

Rotation configuration for particles.

### `Optional`sampleMode

sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md)

Which part of the spawn area to sample.

### `Optional`scale

scale?: [ParticleGeneratorValue](../types/foundry.canvas.animation.types.ParticleGeneratorValue.md)

The scale value for particles.

### `Optional`shaderClass

shaderClass?: typeof [BaseSamplerShader](../classes/foundry.canvas.rendering.shaders.BaseSamplerShader.md) | null

Optional shader class used to render particles.
Defaults to BaseSamplerShader. Batchable shaders are the fast path for sustained effects.
ParticleGenerator creates plain SpriteMesh instances, so shaders which require
[foundry.canvas.primary.PrimarySpriteMesh](../classes/foundry.canvas.primary.PrimarySpriteMesh.md) occlusion or depth data are not supported.

### `Optional`sort

sort?: number

The sorting key for the particle container.

### `Optional`spawnRate

spawnRate?: number

The maximum number of particles that may be spawned per second
(auto-spawn mode).

### `Optional`textures

textures?: (string | Texture<Resource>)[]

The particle texture sources.
Each entry may be a PIXI.Texture or a string path usable by foundry.canvas.getTexture/PIXI.Texture.from.

### `Optional`ticker

ticker?: Ticker

The ticker used to drive the update loop. Defaults to
[CanvasAnimation.ticker](../classes/foundry.canvas.animation.CanvasAnimation.md#ticker).

### `Optional`tint

tint?: [ParticleGeneratorColorValue](../types/foundry.canvas.animation.types.ParticleGeneratorColorValue.md)

The tint color for particles.

### `Optional`velocity

velocity?: [ParticleGeneratorVelocityOptions](../types/foundry.canvas.animation.types.ParticleGeneratorVelocityOptions.md) | null

The particle velocity in pixels per second.

### `Optional`viewPadding

viewPadding?: number

A proportion (0..1+) of extra area around the visible region used for spawning.
For example, 0.2 extends the spawn region by 20% in each dimension.