---
title: "BaseLightSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.BaseLightSource.html"
category: "classes"
---

# Class BaseLightSource`Abstract`

A specialized subclass of BaseEffectSource which deals with the rendering of light or darkness.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.BaseLightSource))

* [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md)
  + BaseLightSource
    - [GlobalLightSource](foundry.canvas.sources.GlobalLightSource.md)
    - [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md)
    - [PointLightSource](foundry.canvas.sources.PointLightSource.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[animation](#animation)
[colorRGB](#colorrgb)
[data](#data)
[layers](#layers)
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
[\_destroy](#_destroy)
[\_initialize](#_initialize)
[\_refresh](#_refresh)
[\_updateBackgroundUniforms](#_updatebackgrounduniforms)
[\_updateColorationUniforms](#_updatecolorationuniforms)
[\_updateCommonUniforms](#_updatecommonuniforms)
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
[\_createShapes](#_createshapes)
[\_drawMesh](#_drawmesh)
[\_initializeSoftEdges](#_initializesoftedges)
[\_updateGeometry](#_updategeometry)
[getCorrectedColor](#getcorrectedcolor)
[getCorrectedLevel](#getcorrectedlevel)

## Constructors

### constructor

* new BaseLightSource(options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md)): BaseLightSource

  An effect source is constructed by providing configuration options.

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns BaseLightSource

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[constructor](foundry.canvas.sources.RenderedEffectSource.md#constructor)

## Properties

### animation

animation: [RenderedEffectSourceAnimationConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md) = {}

The animation configuration applied to this source

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[animation](foundry.canvas.sources.RenderedEffectSource.md#animation)

### colorRGB

colorRGB: [r: number, g: number, b: number] | null = null

The color of the source as an RGB vector.

Inherited from [GlobalLightSource](foundry.canvas.sources.GlobalLightSource.md).[colorRGB](foundry.canvas.sources.GlobalLightSource.md#colorrgb)

### data

data: any = ...

The data of this source.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[data](foundry.canvas.sources.RenderedEffectSource.md#data)

### layers

layers: {  
Â Â Â Â background: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â coloration: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â illumination: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
} = ...

Track the status of rendering layers

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[layers](foundry.canvas.sources.RenderedEffectSource.md#layers)

### object

object: object | null

Some other object which is responsible for this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[object](foundry.canvas.sources.BaseEffectSource.md#object)

### ratio

ratio: number = 1

A ratio of dim:bright as part of the source radius

### shape

shape: Polygon

The geometric shape of the effect source which is generated later.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[shape](foundry.canvas.sources.RenderedEffectSource.md#shape)

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

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_initializeShaderKeys](foundry.canvas.sources.RenderedEffectSource.md#_initializeshaderkeys)

### `Static`\_refreshUniformsKeys

\_refreshUniformsKeys: string[] = ...

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_refreshUniformsKeys](foundry.canvas.sources.RenderedEffectSource.md#_refreshuniformskeys)

### `Static`defaultData

defaultData: {  
Â Â Â Â alpha: number;  
Â Â Â Â animation: {};  
Â Â Â Â attenuation: number;  
Â Â Â Â bright: number;  
Â Â Â Â color: null;  
Â Â Â Â coloration: number;  
Â Â Â Â contrast: number;  
Â Â Â Â dim: number;  
Â Â Â Â disabled: boolean;  
Â Â Â Â elevation: number;  
Â Â Â Â level: string;  
Â Â Â Â luminosity: number;  
Â Â Â Â preview: boolean;  
Â Â Â Â saturation: number;  
Â Â Â Â seed: null;  
Â Â Â Â shadows: number;  
Â Â Â Â vision: boolean;  
Â Â Â Â x: number;  
Â Â Â Â y: number;  
} = ...

Effect source default data.

#### Type Declaration

* ##### alpha: number
* ##### animation: {}
* ##### attenuation: number
* ##### bright: number
* ##### color: null
* ##### coloration: number
* ##### contrast: number
* ##### dim: number
* ##### disabled: boolean

  Whether or not the source is disabled
* ##### elevation: number

  The elevation of the point source
* ##### level: string

  The ID of the Level the point source is in
* ##### luminosity: number
* ##### preview: boolean
* ##### saturation: number
* ##### seed: null
* ##### shadows: number
* ##### vision: boolean
* ##### x: number

  The x-coordinate of the source location
* ##### y: number

  The y-coordinate of the source location

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[defaultData](foundry.canvas.sources.RenderedEffectSource.md#defaultdata)

### `Static`EDGE\_OFFSET

EDGE\_OFFSET: number = -8

The offset in pixels applied to create soft edges.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[EDGE\_OFFSET](foundry.canvas.sources.RenderedEffectSource.md#edge_offset)

### `Static` `Abstract`effectsCollection

effectsCollection: string

The target collection into the effects canvas group.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[effectsCollection](foundry.canvas.sources.RenderedEffectSource.md#effectscollection)

### `Static`sourceType

sourceType: string = "light"

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[sourceType](foundry.canvas.sources.RenderedEffectSource.md#sourcetype)

### `Protected` `Static`\_brightLightingLevel

\_brightLightingLevel: string = LIGHTING\_LEVELS.BRIGHT

The corresponding lighting levels for bright light.

### `Protected` `Static`\_dimLightingLevel

\_dimLightingLevel: number = LIGHTING\_LEVELS.DIM

The corresponding lighting levels for dim light.

## Accessors

### active

* get active(): boolean

  Is this source currently active?
  A source is active if it is attached to an effect collection and is not disabled or suppressed.

  #### Returns boolean

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[active](foundry.canvas.sources.BaseEffectSource.md#active)

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

  Inherited from RenderedEffectSource.effectsCollection

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

  Overrides RenderedEffectSource.\_layers

### `Protected` `Static`ANIMATIONS

* get ANIMATIONS(): LightSourceAnimationConfig

  `Protected`

  The corresponding animation config.

  #### Returns LightSourceAnimationConfig

## Methods

### \_configure

* \_configure(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configure](foundry.canvas.sources.RenderedEffectSource.md#_configure)

### \_destroy

* \_destroy(): void

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_destroy](foundry.canvas.sources.RenderedEffectSource.md#_destroy)

### \_initialize

* \_initialize(data: any): void

  #### Parameters

  + data: any

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_initialize](foundry.canvas.sources.RenderedEffectSource.md#_initialize)

### \_refresh

* \_refresh(): void

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_refresh](foundry.canvas.sources.RenderedEffectSource.md#_refresh)

### \_updateBackgroundUniforms

* \_updateBackgroundUniforms(): void

  Update shader uniforms used for the background layer.

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_updateBackgroundUniforms](foundry.canvas.sources.RenderedEffectSource.md#_updatebackgrounduniforms)

### \_updateColorationUniforms

* \_updateColorationUniforms(): void

  Update shader uniforms used for the coloration layer.

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_updateColorationUniforms](foundry.canvas.sources.RenderedEffectSource.md#_updatecolorationuniforms)

### \_updateCommonUniforms

* \_updateCommonUniforms(shader: any): void

  #### Parameters

  + shader: any

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_updateCommonUniforms](foundry.canvas.sources.RenderedEffectSource.md#_updatecommonuniforms)

### \_updateIlluminationUniforms

* \_updateIlluminationUniforms(): void

  Update shader uniforms used for the illumination layer.

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_updateIlluminationUniforms](foundry.canvas.sources.RenderedEffectSource.md#_updateilluminationuniforms)

### add

* add(): void

  Add this BaseEffectSource instance to the active collection.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[add](foundry.canvas.sources.RenderedEffectSource.md#add)

### animate

* animate(dt: number): any

  Animate the PointSource, if an animation is enabled and if it currently has rendered containers.

  #### Parameters

  + dt: number

    Delta time.

  #### Returns any

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[animate](foundry.canvas.sources.RenderedEffectSource.md#animate)

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

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[animateTime](foundry.canvas.sources.RenderedEffectSource.md#animatetime)

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

### destroy

* destroy(): void

  Steps that must be performed when the source is destroyed.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[destroy](foundry.canvas.sources.RenderedEffectSource.md#destroy)

### drawMeshes

* drawMeshes(): Record<string, Mesh<MeshMaterial> | null>

  Render the containers used to represent this light source within the LightingLayer

  #### Returns Record<string, Mesh<MeshMaterial> | null>

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[drawMeshes](foundry.canvas.sources.RenderedEffectSource.md#drawmeshes)

### initialize

* initialize(data?: any, options?: { reset?: boolean }): BaseLightSource

  Initialize and configure the source using provided data.

  #### Parameters

  + data: any = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns BaseLightSource

  The initialized source

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[initialize](foundry.canvas.sources.RenderedEffectSource.md#initialize)

### refresh

* refresh(): void

  Refresh the state and uniforms of the source.
  Only active sources are refreshed.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[refresh](foundry.canvas.sources.RenderedEffectSource.md#refresh)

### remove

* remove(): void

  Remove this BaseEffectSource instance from the active collection.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[remove](foundry.canvas.sources.RenderedEffectSource.md#remove)

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the point is contained within the shape of the source.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is inside the source?

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[testPoint](foundry.canvas.sources.RenderedEffectSource.md#testpoint)

### `Protected`\_configureLayer

* \_configureLayer(layer: object, layerId: string): void

  `Protected`

  Specific configuration for a layer.

  #### Parameters

  + layer: object
  + layerId: string

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configureLayer](foundry.canvas.sources.RenderedEffectSource.md#_configurelayer)

### `Protected`\_configureShaders

* \_configureShaders(): Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  `Protected`

  Configure which shaders are used for each rendered layer.

  #### Returns Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  An object whose keys are layer identifiers and whose values are shader classes.

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configureShaders](foundry.canvas.sources.RenderedEffectSource.md#_configureshaders)

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: any): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes) is called in [BaseEffectSource#initialize](foundry.canvas.sources.BaseEffectSource.md#initialize).

  #### Parameters

  + changes: any

    Changes to the source data which were applied

  #### Returns boolean

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_couldShapesChange](foundry.canvas.sources.RenderedEffectSource.md#_couldshapeschange)

### `Protected` `Abstract`\_createShapes

* \_createShapes(): void

  `Protected`

  Create the polygon shape (or shapes) for this source using configured data.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_createShapes](foundry.canvas.sources.RenderedEffectSource.md#_createshapes)

### `Protected`\_drawMesh

* \_drawMesh(layerId: string): Mesh<MeshMaterial> | null

  `Protected`

  Create a Mesh for a certain rendered layer of this source.

  #### Parameters

  + layerId: string

    The layer key in layers to draw

  #### Returns Mesh<MeshMaterial> | null

  The drawn mesh for this layer, or null if no mesh is required

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_drawMesh](foundry.canvas.sources.RenderedEffectSource.md#_drawmesh)

### `Protected`\_initializeSoftEdges

* \_initializeSoftEdges(): void

  `Protected`

  Decide whether to render soft edges with a blur.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_initializeSoftEdges](foundry.canvas.sources.RenderedEffectSource.md#_initializesoftedges)

### `Protected` `Abstract`\_updateGeometry

* \_updateGeometry(): void

  `Protected`

  Create the geometry for the source shape that is used in shaders and compute its bounds for culling purpose.
  Triangulate the form and create buffers.

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_updateGeometry](foundry.canvas.sources.RenderedEffectSource.md#_updategeometry)

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

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[getCorrectedColor](foundry.canvas.sources.RenderedEffectSource.md#getcorrectedcolor)

### `Static`getCorrectedLevel

* getCorrectedLevel(level: [LightingLevel](../types/CONST.LightingLevel.md)): number

  Get corrected level according to level and active vision mode data.

  #### Parameters

  + level: [LightingLevel](../types/CONST.LightingLevel.md)

    The lighting level (one of [CONST.LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md))

  #### Returns number

  The corrected level.

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[getCorrectedLevel](foundry.canvas.sources.RenderedEffectSource.md#getcorrectedlevel)