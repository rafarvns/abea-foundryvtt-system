---
title: "GlobalLightSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.GlobalLightSource.html"
category: "classes"
---

# Class GlobalLightSource

A specialized subclass of the BaseLightSource which is used to render global light source linked to the scene.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.GlobalLightSource))

* [BaseLightSource](foundry.canvas.sources.BaseLightSource.md)
  + GlobalLightSource

##### Index

### Constructors

[constructor](#constructor)

### Properties

[animation](#animation)
[colorRGB](#colorrgb)
[customPolygon](#custompolygon)
[data](#data)
[layers](#layers)
[name](#name)
[object](#object)
[ratio](#ratio)
[shape](#shape)
[sourceId](#sourceid)
[suppression](#suppression)
[\_flags](#_flags)
[\_geometry](#_geometry)
[\_initializeShaderKeys](#_initializeshaderkeys)
[\_refreshUniformsKeys](#_refreshuniformskeys)
[defaultData](#defaultdata)
[EDGE\_OFFSET](#edge_offset)
[effectsCollection](#effectscollection)
[sourceType](#sourcetype)
[\_brightLightingLevel](#_brightlightinglevel)
[\_dimLightingLevel](#_dimlightinglevel)

### Accessors

[active](#active)
[attached](#attached)
[background](#background)
[coloration](#coloration)
[effectsCollection](#effectscollection-1)
[elevation](#elevation)
[hasActiveLayer](#hasactivelayer)
[illumination](#illumination)
[isAnimated](#isanimated)
[isPreview](#ispreview)
[level](#level)
[suppressed](#suppressed)
[updateId](#updateid)
[x](#x)
[y](#y)
[\_layers](#_layers)
[ANIMATIONS](#animations)

### Methods

[\_configure](#_configure)
[\_createShapes](#_createshapes)
[\_destroy](#_destroy)
[\_initialize](#_initialize)
[\_initializeSoftEdges](#_initializesoftedges)
[\_refresh](#_refresh)
[\_updateBackgroundUniforms](#_updatebackgrounduniforms)
[\_updateColorationUniforms](#_updatecolorationuniforms)
[\_updateCommonUniforms](#_updatecommonuniforms)
[\_updateGeometry](#_updategeometry)
[\_updateIlluminationUniforms](#_updateilluminationuniforms)
[add](#add)
[animate](#animate)
[animateFlickering](#animateflickering)
[animatePulse](#animatepulse)
[animateSoundPulse](#animatesoundpulse)
[animateTime](#animatetime)
[animateTorch](#animatetorch)
[destroy](#destroy)
[drawMeshes](#drawmeshes)
[initialize](#initialize)
[refresh](#refresh)
[remove](#remove)
[testPoint](#testpoint)
[\_configureLayer](#_configurelayer)
[\_configureShaders](#_configureshaders)
[\_couldShapesChange](#_couldshapeschange)
[\_drawMesh](#_drawmesh)
[getCorrectedColor](#getcorrectedcolor)
[getCorrectedLevel](#getcorrectedlevel)

## Constructors

### constructor

* new GlobalLightSource(options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md)): GlobalLightSource

  An effect source is constructed by providing configuration options.

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns GlobalLightSource

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[constructor](foundry.canvas.sources.BaseLightSource.md#constructor)

## Properties

### animation

animation: [RenderedEffectSourceAnimationConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md) = {}

The animation configuration applied to this source

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animation](foundry.canvas.sources.BaseLightSource.md#animation)

### colorRGB

colorRGB: [r: number, g: number, b: number] | null = null

The color of the source as an RGB vector.

Inherited from GlobalLightSource.[colorRGB](#colorrgb)

### customPolygon

customPolygon: number[] | Polygon | null = null

A custom polygon placeholder.

### data

data: any = ...

The data of this source.

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[data](foundry.canvas.sources.BaseLightSource.md#data)

### layers

layers: {  
Â Â Â Â background: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â coloration: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â illumination: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
} = ...

Track the status of rendering layers

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[layers](foundry.canvas.sources.BaseLightSource.md#layers)

### name

name: string = ...

Name of this global light source.

#### Default Value

```
GlobalLightSource.sourceType
Copy
```

### object

object: object | null

Some other object which is responsible for this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[object](foundry.canvas.sources.BaseEffectSource.md#object)

### ratio

ratio: number = 1

A ratio of dim:bright as part of the source radius

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[ratio](foundry.canvas.sources.BaseLightSource.md#ratio)

### shape

shape: Polygon

The geometric shape of the effect source which is generated later.

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[shape](foundry.canvas.sources.BaseLightSource.md#shape)

### `Readonly`sourceId

sourceId: string

The source id linked to this effect source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[sourceId](foundry.canvas.sources.BaseEffectSource.md#sourceid)

### suppression

suppression: Record<string, boolean> = {}

Records of suppression strings with a boolean value.
If any of this record is true, the source is suppressed.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[suppression](foundry.canvas.sources.BaseEffectSource.md#suppression)

### `Protected`\_flags

\_flags: Record<string, number | boolean> = {}

A collection of boolean flags which control rendering and refresh behavior for the source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_flags](foundry.canvas.sources.BaseEffectSource.md#_flags)

### `Protected`\_geometry

\_geometry: Geometry | null = null

PIXI Geometry generated to draw meshes.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_geometry](foundry.canvas.sources.RenderedEffectSource.md#_geometry)

### `Static`\_initializeShaderKeys

\_initializeShaderKeys: string[] = ...

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_initializeShaderKeys](foundry.canvas.sources.BaseLightSource.md#_initializeshaderkeys)

### `Static`\_refreshUniformsKeys

\_refreshUniformsKeys: string[] = ...

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_refreshUniformsKeys](foundry.canvas.sources.BaseLightSource.md#_refreshuniformskeys)

### `Static`defaultData

defaultData: {  
Â Â Â Â alpha: number;  
Â Â Â Â angle: number;  
Â Â Â Â animation: {};  
Â Â Â Â attenuation: number;  
Â Â Â Â bright: number;  
Â Â Â Â color: null;  
Â Â Â Â coloration: number;  
Â Â Â Â contrast: number;  
Â Â Â Â darkness: { max: number; min: number };  
Â Â Â Â dim: number;  
Â Â Â Â disabled: boolean;  
Â Â Â Â elevation: number;  
Â Â Â Â level: string;  
Â Â Â Â luminosity: number;  
Â Â Â Â preview: boolean;  
Â Â Â Â priority: number;  
Â Â Â Â rotation: number;  
Â Â Â Â saturation: number;  
Â Â Â Â seed: null;  
Â Â Â Â shadows: number;  
Â Â Â Â vision: boolean;  
Â Â Â Â walls: boolean;  
Â Â Â Â x: number;  
Â Â Â Â y: number;  
} = ...

Effect source default data.

#### Type Declaration

* ##### alpha: number
* ##### angle: number
* ##### animation: {}
* ##### attenuation: number
* ##### bright: number
* ##### color: null
* ##### coloration: number
* ##### contrast: number
* ##### darkness: { max: number; min: number }
* ##### dim: number
* ##### disabled: boolean

  Whether or not the source is disabled
* ##### elevation: number
* ##### level: string

  The ID of the Level the point source is in
* ##### luminosity: number
* ##### preview: boolean
* ##### priority: number
* ##### rotation: number
* ##### saturation: number
* ##### seed: null
* ##### shadows: number
* ##### vision: boolean
* ##### walls: boolean
* ##### x: number

  The x-coordinate of the source location
* ##### y: number

  The y-coordinate of the source location

Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[defaultData](foundry.canvas.sources.BaseLightSource.md#defaultdata)

### `Static`EDGE\_OFFSET

EDGE\_OFFSET: number = -8

The offset in pixels applied to create soft edges.

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[EDGE\_OFFSET](foundry.canvas.sources.BaseLightSource.md#edge_offset)

### `Static`effectsCollection

effectsCollection: string = "lightSources"

Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[effectsCollection](foundry.canvas.sources.BaseLightSource.md#effectscollection)

### `Static`sourceType

sourceType: string = "GlobalLight"

Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[sourceType](foundry.canvas.sources.BaseLightSource.md#sourcetype)

### `Protected` `Static`\_brightLightingLevel

\_brightLightingLevel: string = LIGHTING\_LEVELS.BRIGHT

The corresponding lighting levels for bright light.

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_brightLightingLevel](foundry.canvas.sources.BaseLightSource.md#_brightlightinglevel)

### `Protected` `Static`\_dimLightingLevel

\_dimLightingLevel: number = LIGHTING\_LEVELS.DIM

The corresponding lighting levels for dim light.

Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_dimLightingLevel](foundry.canvas.sources.BaseLightSource.md#_dimlightinglevel)

## Accessors

### active

* get active(): boolean

  Is this source currently active?
  A source is active if it is attached to an effect collection and is not disabled or suppressed.

  #### Returns boolean

  Inherited from BaseLightSource.active

### attached

* get attached(): boolean

  Is this source attached to an effect collection?

  #### Returns boolean

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[attached](foundry.canvas.sources.BaseEffectSource.md#attached)

### background

* get background(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the background layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[background](foundry.canvas.sources.RenderedEffectSource.md#background)

### coloration

* get coloration(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the coloration layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[coloration](foundry.canvas.sources.RenderedEffectSource.md#coloration)

### effectsCollection

* get effectsCollection(): [Collection](foundry.utils.Collection.md)<  
  Â Â Â Â string,  
  Â Â Â Â [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>,  
  >

  The EffectsCanvasGroup collection linked to this effect source.

  #### Returns [Collection](foundry.utils.Collection.md)<string, [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>>

  Inherited from BaseLightSource.effectsCollection

### elevation

* get elevation(): number

  The elevation bound to this source.

  #### Returns number

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[elevation](foundry.canvas.sources.BaseEffectSource.md#elevation)

### hasActiveLayer

* get hasActiveLayer(): boolean

  Has the rendered source at least one active layer?

  #### Returns boolean

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[hasActiveLayer](foundry.canvas.sources.RenderedEffectSource.md#hasactivelayer)

### illumination

* get illumination(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the illumination layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[illumination](foundry.canvas.sources.RenderedEffectSource.md#illumination)

### isAnimated

* get isAnimated(): boolean

  Is the rendered source animated?

  #### Returns boolean

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[isAnimated](foundry.canvas.sources.RenderedEffectSource.md#isanimated)

### isPreview

* get isPreview(): boolean

  Is this RenderedEffectSource a temporary preview?

  #### Returns boolean

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[isPreview](foundry.canvas.sources.RenderedEffectSource.md#ispreview)

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level this source is in.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[level](foundry.canvas.sources.BaseEffectSource.md#level)

### suppressed

* get suppressed(): boolean

  Is this source temporarily suppressed?

  #### Returns boolean

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[suppressed](foundry.canvas.sources.BaseEffectSource.md#suppressed)

### updateId

* get updateId(): number

  Returns the update ID associated with this source.
  The update ID is increased whenever the shape of the source changes.

  #### Returns number

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[updateId](foundry.canvas.sources.BaseEffectSource.md#updateid)

### x

* get x(): number

  The x-coordinate of the point source origin.

  #### Returns number

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[x](foundry.canvas.sources.BaseEffectSource.md#x)

### y

* get y(): number

  The y-coordinate of the point source origin.

  #### Returns number

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[y](foundry.canvas.sources.BaseEffectSource.md#y)

### `Static`\_layers

* get \_layers(): {  
  Â Â Â Â background: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveBackgroundShader](foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md);  
  Â Â Â Â };  
  Â Â Â Â coloration: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md);  
  Â Â Â Â };  
  Â Â Â Â illumination: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md);  
  Â Â Â Â };  
  }

  #### Returns { Â Â Â Â background: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveBackgroundShader](foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md); Â Â Â Â }; Â Â Â Â coloration: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md); Â Â Â Â }; Â Â Â Â illumination: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md); Â Â Â Â }; }

  Inherited from BaseLightSource.\_layers

### `Protected` `Static`ANIMATIONS

* get ANIMATIONS(): LightSourceAnimationConfig

  `Protected`

  The corresponding animation config.

  #### Returns LightSourceAnimationConfig

  Inherited from BaseLightSource.ANIMATIONS

## Methods

### \_configure

* \_configure(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_configure](foundry.canvas.sources.BaseLightSource.md#_configure)

### \_createShapes

* \_createShapes(): void

  #### Returns void

  Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_createShapes](foundry.canvas.sources.BaseLightSource.md#_createshapes)

### \_destroy

* \_destroy(): void

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_destroy](foundry.canvas.sources.BaseLightSource.md#_destroy)

### \_initialize

* \_initialize(data: any): void

  #### Parameters

  + data: any

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_initialize](foundry.canvas.sources.BaseLightSource.md#_initialize)

### \_initializeSoftEdges

* \_initializeSoftEdges(): void

  #### Returns void

  Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_initializeSoftEdges](foundry.canvas.sources.BaseLightSource.md#_initializesoftedges)

### \_refresh

* \_refresh(): void

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_refresh](foundry.canvas.sources.BaseLightSource.md#_refresh)

### \_updateBackgroundUniforms

* \_updateBackgroundUniforms(): void

  Update shader uniforms used for the background layer.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_updateBackgroundUniforms](foundry.canvas.sources.BaseLightSource.md#_updatebackgrounduniforms)

### \_updateColorationUniforms

* \_updateColorationUniforms(): void

  Update shader uniforms used for the coloration layer.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_updateColorationUniforms](foundry.canvas.sources.BaseLightSource.md#_updatecolorationuniforms)

### \_updateCommonUniforms

* \_updateCommonUniforms(shader: any): void

  #### Parameters

  + shader: any

  #### Returns void

  Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_updateCommonUniforms](foundry.canvas.sources.BaseLightSource.md#_updatecommonuniforms)

### \_updateGeometry

* \_updateGeometry(): void

  #### Returns void

  Overrides [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_updateGeometry](foundry.canvas.sources.BaseLightSource.md#_updategeometry)

### \_updateIlluminationUniforms

* \_updateIlluminationUniforms(): void

  Update shader uniforms used for the illumination layer.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_updateIlluminationUniforms](foundry.canvas.sources.BaseLightSource.md#_updateilluminationuniforms)

### add

* add(): void

  Add this BaseEffectSource instance to the active collection.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[add](foundry.canvas.sources.BaseLightSource.md#add)

### animate

* animate(dt: number): any

  Animate the PointSource, if an animation is enabled and if it currently has rendered containers.

  #### Parameters

  + dt: number

    Delta time.

  #### Returns any

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animate](foundry.canvas.sources.BaseLightSource.md#animate)

### animateFlickering

* animateFlickering(  
  Â Â Â Â dt: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â amplification?: number;  
  Â Â Â Â Â Â Â Â intensity?: number;  
  Â Â Â Â Â Â Â Â reverse?: boolean;  
  Â Â Â Â Â Â Â Â speed?: number;  
  Â Â Â Â },  
  ): void

  An animation with flickering ratio and light intensity

  #### Parameters

  + dt: number

    Delta time
  + `Optional`options: {  
    Â Â Â Â amplification?: number;  
    Â Â Â Â intensity?: number;  
    Â Â Â Â reverse?: boolean;  
    Â Â Â Â speed?: number;  
    } = {}

    Additional options which modify the flame animation

    - ##### `Optional`amplification?: number

      Noise amplification (>1) or dampening (<1)
    - ##### `Optional`intensity?: number

      The animation intensity, from 1 to 10
    - ##### `Optional`reverse?: boolean

      Reverse the animation direction
    - ##### `Optional`speed?: number

      The animation speed, from 0 to 10

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animateFlickering](foundry.canvas.sources.BaseLightSource.md#animateflickering)

### animatePulse

* animatePulse(  
  Â Â Â Â dt: number,  
  Â Â Â Â options?: { intensity?: number; reverse?: boolean; speed?: number },  
  ): void

  A basic "pulse" animation which expands and contracts.

  #### Parameters

  + dt: number

    Delta time
  + `Optional`options: { intensity?: number; reverse?: boolean; speed?: number } = {}

    Additional options which modify the pulse animation

    - ##### `Optional`intensity?: number

      The animation intensity, from 1 to 10
    - ##### `Optional`reverse?: boolean

      Reverse the animation direction
    - ##### `Optional`speed?: number

      The animation speed, from 0 to 10

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animatePulse](foundry.canvas.sources.BaseLightSource.md#animatepulse)

### animateSoundPulse

* animateSoundPulse(  
  Â Â Â Â dt: number,  
  Â Â Â Â options?: { intensity?: number; reverse?: boolean; speed?: number },  
  ): void

  A sound-reactive animation that uses bass/mid/treble blending to control certain shader uniforms.
  "speed" is interpreted as how quickly we adapt to changes in audio. No time-based pulsing is used by default,
  but we incorporate dt into smoothing so that behavior is consistent across varying frame rates.

  #### Parameters

  + dt: number

    The delta time since the last frame, in milliseconds.
  + `Optional`options: { intensity?: number; reverse?: boolean; speed?: number } = {}

    Additional options for customizing the audio reaction.

    - ##### `Optional`intensity?: number

      A blend factor in [0..10] that transitions from bass (near 0) to treble (near 10)
      Mid frequencies dominate around intensity=5.
    - ##### `Optional`reverse?: boolean

      Whether to invert the final amplitude as 1 - amplitude.
    - ##### `Optional`speed?: number

      A smoothing factor in [0..10], effectively updates/second.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animateSoundPulse](foundry.canvas.sources.BaseLightSource.md#animatesoundpulse)

### animateTime

* animateTime(  
  Â Â Â Â dt: number,  
  Â Â Â Â options?: { intensity?: number; reverse?: boolean; speed?: number },  
  ): void

  Generic time-based animation used for Rendered Point Sources.

  #### Parameters

  + dt: number

    Delta time.
  + `Optional`options: { intensity?: number; reverse?: boolean; speed?: number } = {}

    Options which affect the time animation

    - ##### `Optional`intensity?: number

      The animation intensity, from 1 to 10
    - ##### `Optional`reverse?: boolean

      Reverse the animation direction
    - ##### `Optional`speed?: number

      The animation speed, from 0 to 10

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animateTime](foundry.canvas.sources.BaseLightSource.md#animatetime)

### animateTorch

* animateTorch(  
  Â Â Â Â dt: number,  
  Â Â Â Â options?: { intensity?: number; reverse?: boolean; speed?: number },  
  ): void

  An animation with flickering ratio and light intensity.

  #### Parameters

  + dt: number

    Delta time
  + `Optional`options: { intensity?: number; reverse?: boolean; speed?: number } = {}

    Additional options which modify the flame animation

    - ##### `Optional`intensity?: number

      The animation intensity, from 1 to 10
    - ##### `Optional`reverse?: boolean

      Reverse the animation direction
    - ##### `Optional`speed?: number

      The animation speed, from 0 to 10

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[animateTorch](foundry.canvas.sources.BaseLightSource.md#animatetorch)

### destroy

* destroy(): void

  Steps that must be performed when the source is destroyed.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[destroy](foundry.canvas.sources.BaseLightSource.md#destroy)

### drawMeshes

* drawMeshes(): Record<string, Mesh<MeshMaterial> | null>

  Render the containers used to represent this light source within the LightingLayer

  #### Returns Record<string, Mesh<MeshMaterial> | null>

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[drawMeshes](foundry.canvas.sources.BaseLightSource.md#drawmeshes)

### initialize

* initialize(data?: any, options?: { reset?: boolean }): GlobalLightSource

  Initialize and configure the source using provided data.

  #### Parameters

  + data: any = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns GlobalLightSource

  The initialized source

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[initialize](foundry.canvas.sources.BaseLightSource.md#initialize)

### refresh

* refresh(): void

  Refresh the state and uniforms of the source.
  Only active sources are refreshed.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[refresh](foundry.canvas.sources.BaseLightSource.md#refresh)

### remove

* remove(): void

  Remove this BaseEffectSource instance from the active collection.

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[remove](foundry.canvas.sources.BaseLightSource.md#remove)

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the point is contained within the shape of the source.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is inside the source?

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[testPoint](foundry.canvas.sources.BaseLightSource.md#testpoint)

### `Protected`\_configureLayer

* \_configureLayer(layer: object, layerId: string): void

  `Protected`

  Specific configuration for a layer.

  #### Parameters

  + layer: object
  + layerId: string

  #### Returns void

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_configureLayer](foundry.canvas.sources.BaseLightSource.md#_configurelayer)

### `Protected`\_configureShaders

* \_configureShaders(): Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  `Protected`

  Configure which shaders are used for each rendered layer.

  #### Returns Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  An object whose keys are layer identifiers and whose values are shader classes.

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_configureShaders](foundry.canvas.sources.BaseLightSource.md#_configureshaders)

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: any): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes) is called in [BaseEffectSource#initialize](foundry.canvas.sources.BaseEffectSource.md#initialize).

  #### Parameters

  + changes: any

    Changes to the source data which were applied

  #### Returns boolean

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_couldShapesChange](foundry.canvas.sources.BaseLightSource.md#_couldshapeschange)

### `Protected`\_drawMesh

* \_drawMesh(layerId: string): Mesh<MeshMaterial> | null

  `Protected`

  Create a Mesh for a certain rendered layer of this source.

  #### Parameters

  + layerId: string

    The layer key in layers to draw

  #### Returns Mesh<MeshMaterial> | null

  The drawn mesh for this layer, or null if no mesh is required

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[\_drawMesh](foundry.canvas.sources.BaseLightSource.md#_drawmesh)

### `Static`getCorrectedColor

* getCorrectedColor(  
  Â Â Â Â level: [LightingLevel](../types/CONST.LightingLevel.md),  
  Â Â Â Â colorDim: [Color](foundry.utils.Color.md),  
  Â Â Â Â colorBright: [Color](foundry.utils.Color.md),  
  Â Â Â Â colorBackground?: [Color](foundry.utils.Color.md),  
  ): [Color](foundry.utils.Color.md)

  Get corrected color according to level, dim color, bright color and background color.

  #### Parameters

  + level: [LightingLevel](../types/CONST.LightingLevel.md)

    The lighting level (one of [CONST.LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md))
  + colorDim: [Color](foundry.utils.Color.md)
  + colorBright: [Color](foundry.utils.Color.md)
  + `Optional`colorBackground: [Color](foundry.utils.Color.md)

  #### Returns [Color](foundry.utils.Color.md)

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[getCorrectedColor](foundry.canvas.sources.BaseLightSource.md#getcorrectedcolor)

### `Static`getCorrectedLevel

* getCorrectedLevel(level: [LightingLevel](../types/CONST.LightingLevel.md)): number

  Get corrected level according to level and active vision mode data.

  #### Parameters

  + level: [LightingLevel](../types/CONST.LightingLevel.md)

    The lighting level (one of [CONST.LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md))

  #### Returns number

  The corrected level.

  Inherited from [BaseLightSource](foundry.canvas.sources.BaseLightSource.md).[getCorrectedLevel](foundry.canvas.sources.BaseLightSource.md#getcorrectedlevel)