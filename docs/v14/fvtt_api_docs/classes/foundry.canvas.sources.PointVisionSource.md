---
title: "PointVisionSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.PointVisionSource.html"
category: "classes"
---

# Class PointVisionSource

A specialized subclass of RenderedEffectSource which represents a source of point-based vision.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.PointVisionSource))

* [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md)<  
  Â Â Â Â [VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md),  
  Â Â Â Â [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>,  
  Â Â Â Â this,  
  >
  + PointVisionSource

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_visionModeActivated](#_visionmodeactivated)
[animation](#animation)
[blinded](#blinded)
[colorRGB](#colorrgb)
[data](#data)
[layers](#layers)
[light](#light)
[los](#los)
[object](#object)
[shape](#shape)
[sourceId](#sourceid)
[suppression](#suppression)
[visionMode](#visionmode)
[visionModeOverrides](#visionmodeoverrides)
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
[fov](#fov)
[hasActiveLayer](#hasactivelayer)
[illumination](#illumination)
[isAnimated](#isanimated)
[isBlinded](#isblinded)
[isPreview](#ispreview)
[level](#level)
[lightRadius](#lightradius)
[preferred](#preferred)
[radius](#radius)
[suppressed](#suppressed)
[updateId](#updateid)
[x](#x)
[y](#y)
[\_layers](#_layers)

### Methods

[\_configure](#_configure)
[\_configureLayer](#_configurelayer)
[\_configureShaders](#_configureshaders)
[\_createShapes](#_createshapes)
[\_destroy](#_destroy)
[\_getPolygonConfiguration](#_getpolygonconfiguration)
[\_initialize](#_initialize)
[\_refresh](#_refresh)
[\_updateBackgroundUniforms](#_updatebackgrounduniforms)
[\_updateColorationUniforms](#_updatecolorationuniforms)
[\_updateCommonUniforms](#_updatecommonuniforms)
[\_updateIlluminationUniforms](#_updateilluminationuniforms)
[add](#add)
[animate](#animate)
[animateTime](#animatetime)
[destroy](#destroy)
[drawMeshes](#drawmeshes)
[initialize](#initialize)
[refresh](#refresh)
[remove](#remove)
[testPoint](#testpoint)
[\_couldShapesChange](#_couldshapeschange)
[\_createLightPolygon](#_createlightpolygon)
[\_createRestrictedPolygon](#_createrestrictedpolygon)
[\_drawMesh](#_drawmesh)
[\_initializeSoftEdges](#_initializesoftedges)
[\_updateGeometry](#_updategeometry)
[\_updateVisionMode](#_updatevisionmode)
[\_updateVisionModeUniforms](#_updatevisionmodeuniforms)
[getCorrectedColor](#getcorrectedcolor)
[getCorrectedLevel](#getcorrectedlevel)

## Constructors

### constructor

* new PointVisionSource(options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md)): PointVisionSource

  An effect source is constructed by providing configuration options.

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns PointVisionSource

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[constructor](foundry.canvas.sources.RenderedEffectSource.md#constructor)

## Properties

### `Internal`\_visionModeActivated

\_visionModeActivated: boolean = false

The vision mode activation flag for handlers

### animation

animation: [RenderedEffectSourceAnimationConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md) = {}

The animation configuration applied to this source

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[animation](foundry.canvas.sources.RenderedEffectSource.md#animation)

### blinded

blinded: Record<string, boolean> = {}

Records of blinding strings with a boolean value.
By default, if any of this record is true, the source is blinded.

### colorRGB

colorRGB: [r: number, g: number, b: number] | null = null

The color of the source as an RGB vector.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[colorRGB](foundry.canvas.sources.RenderedEffectSource.md#colorrgb)

### data

data: [VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md) = ...

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

### light

light: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

The polygon of light perception.

### los

los: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

The unconstrained LOS polygon.

### object

object: object | null

Some other object which is responsible for this source.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[object](foundry.canvas.sources.RenderedEffectSource.md#object)

### shape

shape: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

The geometric shape of the effect source which is generated later.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[shape](foundry.canvas.sources.RenderedEffectSource.md#shape)

### `Readonly`sourceId

sourceId: string

The source id linked to this effect source.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[sourceId](foundry.canvas.sources.RenderedEffectSource.md#sourceid)

### suppression

suppression: Record<string, boolean> = {}

Records of suppression strings with a boolean value.
If any of this record is true, the source is suppressed.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[suppression](foundry.canvas.sources.RenderedEffectSource.md#suppression)

### visionMode

visionMode: [VisionMode](foundry.canvas.perception.VisionMode.md) | null = null

The vision mode linked to this VisionSource

### visionModeOverrides

visionModeOverrides: object = {}

Data overrides that could happen with blindness vision mode.

### `Protected`\_flags

\_flags: Record<string, number | boolean> = {}

A collection of boolean flags which control rendering and refresh behavior for the source.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_flags](foundry.canvas.sources.RenderedEffectSource.md#_flags)

### `Protected`\_geometry

\_geometry: Geometry | null = null

PIXI Geometry generated to draw meshes.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_geometry](foundry.canvas.sources.RenderedEffectSource.md#_geometry)

### `Static`\_initializeShaderKeys

\_initializeShaderKeys: string[] = ...

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_initializeShaderKeys](foundry.canvas.sources.RenderedEffectSource.md#_initializeshaderkeys)

### `Static`\_refreshUniformsKeys

\_refreshUniformsKeys: string[] = ...

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_refreshUniformsKeys](foundry.canvas.sources.RenderedEffectSource.md#_refreshuniformskeys)

### `Static`defaultData

defaultData: {  
Â Â Â Â animation: {};  
Â Â Â Â attenuation: number;  
Â Â Â Â brightness: number;  
Â Â Â Â color: null;  
Â Â Â Â contrast: number;  
Â Â Â Â disabled: boolean;  
Â Â Â Â elevation: number;  
Â Â Â Â level: string;  
Â Â Â Â lightRadius: null;  
Â Â Â Â preview: boolean;  
Â Â Â Â saturation: number;  
Â Â Â Â seed: null;  
Â Â Â Â visionMode: string;  
Â Â Â Â x: number;  
Â Â Â Â y: number;  
} = ...

Effect source default data.

#### Type Declaration

* ##### animation: {}
* ##### attenuation: number
* ##### brightness: number
* ##### color: null
* ##### contrast: number
* ##### disabled: boolean

  Whether or not the source is disabled
* ##### elevation: number

  The elevation of the point source
* ##### level: string

  The ID of the Level the point source is in
* ##### lightRadius: null
* ##### preview: boolean
* ##### saturation: number
* ##### seed: null
* ##### visionMode: string
* ##### x: number

  The x-coordinate of the source location
* ##### y: number

  The y-coordinate of the source location

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[defaultData](foundry.canvas.sources.RenderedEffectSource.md#defaultdata)

### `Static`EDGE\_OFFSET

EDGE\_OFFSET: number = -2

The offset in pixels applied to create soft edges.

Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[EDGE\_OFFSET](foundry.canvas.sources.RenderedEffectSource.md#edge_offset)

### `Static`effectsCollection

effectsCollection: string = "visionSources"

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[effectsCollection](foundry.canvas.sources.RenderedEffectSource.md#effectscollection)

### `Static`sourceType

sourceType: string = "sight"

The type of source represented by this data structure.
Each subclass must implement this attribute.

Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[sourceType](foundry.canvas.sources.RenderedEffectSource.md#sourcetype)

### `Protected` `Static`\_brightLightingLevel

\_brightLightingLevel: [LightingLevel](../types/CONST.LightingLevel.md) = LIGHTING\_LEVELS.BRIGHT

The corresponding lighting levels for bright light.

### `Protected` `Static`\_dimLightingLevel

\_dimLightingLevel: [LightingLevel](../types/CONST.LightingLevel.md) = LIGHTING\_LEVELS.DIM

The corresponding lighting levels for dim light.

## Accessors

### active

* get active(): boolean

  Is this source currently active?
  A source is active if it is attached to an effect collection and is not disabled or suppressed.

  #### Returns boolean

  Inherited from PointEffectSourceMixin(RenderedEffectSource).active

### attached

* get attached(): boolean

  Is this source attached to an effect collection?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(RenderedEffectSource).attached

### background

* get background(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the background layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from PointEffectSourceMixin(RenderedEffectSource).background

### coloration

* get coloration(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the coloration layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from PointEffectSourceMixin(RenderedEffectSource).coloration

### effectsCollection

* get effectsCollection(): [Collection](foundry.utils.Collection.md)<  
  Â Â Â Â string,  
  Â Â Â Â [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>,  
  >

  The EffectsCanvasGroup collection linked to this effect source.

  #### Returns [Collection](foundry.utils.Collection.md)<string, [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>>

  Inherited from PointEffectSourceMixin(RenderedEffectSource).effectsCollection

### elevation

* get elevation(): number

  The elevation bound to this source.

  #### Returns number

  Inherited from PointEffectSourceMixin(RenderedEffectSource).elevation

### fov

* get fov(): Polygon

  An alias for the shape of the vision source.

  #### Returns Polygon

### hasActiveLayer

* get hasActiveLayer(): boolean

  Has the rendered source at least one active layer?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(RenderedEffectSource).hasActiveLayer

### illumination

* get illumination(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the illumination layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  Inherited from PointEffectSourceMixin(RenderedEffectSource).illumination

### isAnimated

* get isAnimated(): boolean

  Is the rendered source animated?

  #### Returns boolean

  Overrides PointEffectSourceMixin(RenderedEffectSource).isAnimated

### isBlinded

* get isBlinded(): boolean

  Is this source temporarily blinded?

  #### Returns boolean

### isPreview

* get isPreview(): boolean

  Is this RenderedEffectSource a temporary preview?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(RenderedEffectSource).isPreview

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level this source is in.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  Inherited from PointEffectSourceMixin(RenderedEffectSource).level

### lightRadius

* get lightRadius(): number

  Light perception radius of this vision source, taking into account if the source is blinded.

  #### Returns number

### preferred

* get preferred(): boolean

  If this vision source background is rendered into the lighting container.

  #### Returns boolean

### radius

* get radius(): any

  #### Returns any

### suppressed

* get suppressed(): boolean

  Is this source temporarily suppressed?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(RenderedEffectSource).suppressed

### updateId

* get updateId(): number

  Returns the update ID associated with this source.
  The update ID is increased whenever the shape of the source changes.

  #### Returns number

  Inherited from PointEffectSourceMixin(RenderedEffectSource).updateId

### x

* get x(): number

  The x-coordinate of the point source origin.

  #### Returns number

  Inherited from PointEffectSourceMixin(RenderedEffectSource).x

### y

* get y(): number

  The y-coordinate of the point source origin.

  #### Returns number

  Inherited from PointEffectSourceMixin(RenderedEffectSource).y

### `Static`\_layers

* get \_layers(): {  
  Â Â Â Â background: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [BackgroundVisionShader](foundry.canvas.rendering.shaders.BackgroundVisionShader.md);  
  Â Â Â Â };  
  Â Â Â Â coloration: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [ColorationVisionShader](foundry.canvas.rendering.shaders.ColorationVisionShader.md);  
  Â Â Â Â };  
  Â Â Â Â illumination: {  
  Â Â Â Â Â Â Â Â blendMode: string;  
  Â Â Â Â Â Â Â Â defaultShader: typeof [IlluminationVisionShader](foundry.canvas.rendering.shaders.IlluminationVisionShader.md);  
  Â Â Â Â };  
  }

  #### Returns { Â Â Â Â background: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [BackgroundVisionShader](foundry.canvas.rendering.shaders.BackgroundVisionShader.md); Â Â Â Â }; Â Â Â Â coloration: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [ColorationVisionShader](foundry.canvas.rendering.shaders.ColorationVisionShader.md); Â Â Â Â }; Â Â Â Â illumination: { Â Â Â Â Â Â Â Â blendMode: string; Â Â Â Â Â Â Â Â defaultShader: typeof [IlluminationVisionShader](foundry.canvas.rendering.shaders.IlluminationVisionShader.md); Â Â Â Â }; }

## Methods

### \_configure

* \_configure(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configure](foundry.canvas.sources.RenderedEffectSource.md#_configure)

### \_configureLayer

* \_configureLayer(layer: any, layerId: any): void

  #### Parameters

  + layer: any
  + layerId: any

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configureLayer](foundry.canvas.sources.RenderedEffectSource.md#_configurelayer)

### \_configureShaders

* \_configureShaders(): {}

  #### Returns {}

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_configureShaders](foundry.canvas.sources.RenderedEffectSource.md#_configureshaders)

### \_createShapes

* \_createShapes(): void

  Create the polygon shape (or shapes) for this source using configured data.

  #### Returns void

  Overrides [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_createShapes](foundry.canvas.sources.RenderedEffectSource.md#_createshapes)

### \_destroy

* \_destroy(): void

  #### Returns void

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_destroy](foundry.canvas.sources.RenderedEffectSource.md#_destroy)

### \_getPolygonConfiguration

* \_getPolygonConfiguration(): any

  #### Returns any

  #### Inherit Doc

### \_initialize

* \_initialize(data: any): void

  Subclass specific data initialization steps.

  #### Parameters

  + data: any

    Provided data for configuration

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

  Update shader uniforms used by every rendered layer.

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

* initialize(  
  Â Â Â Â data?: Partial<[VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md)>,  
  Â Â Â Â options?: { reset?: boolean },  
  ): PointVisionSource

  Initialize and configure the source using provided data.

  #### Parameters

  + data: Partial<[VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md)> = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns PointVisionSource

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

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: Partial<[VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md)>): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes) is called in [BaseEffectSource#initialize](foundry.canvas.sources.BaseEffectSource.md#initialize).

  #### Parameters

  + changes: Partial<[VisionSourceData](../interfaces/foundry.canvas.sources.types.VisionSourceData.md)>

    Changes to the source data which were applied

  #### Returns boolean

  Inherited from [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md).[\_couldShapesChange](foundry.canvas.sources.RenderedEffectSource.md#_couldshapeschange)

### `Protected`\_createLightPolygon

* \_createLightPolygon(): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  `Protected`

  Creates the polygon that represents light perception.
  If the light perception radius is unconstrained, no new polygon instance is created;
  instead the LOS polygon of this vision source is returned.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The new polygon or `this.los`.

### `Protected`\_createRestrictedPolygon

* \_createRestrictedPolygon(): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  `Protected`

  Create a restricted FOV polygon by limiting the radius of the unrestricted LOS polygon.
  If the vision radius is unconstrained, no new polygon instance is created;
  instead the LOS polygon of this vision source is returned.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The new polygon or `this.los`.

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

### `Protected`\_updateVisionMode

* \_updateVisionMode(): void

  `Protected`

  Responsible for assigning the Vision Mode and calling the activation and deactivation handlers.

  #### Returns void

### `Protected`\_updateVisionModeUniforms

* \_updateVisionModeUniforms(  
  Â Â Â Â shader: [AdaptiveVisionShader](foundry.canvas.rendering.shaders.AdaptiveVisionShader.md),  
  Â Â Â Â vmUniforms: Record<string, any>,  
  ): void

  `Protected`

  Update layer uniforms according to vision mode uniforms, if any.

  #### Parameters

  + shader: [AdaptiveVisionShader](foundry.canvas.rendering.shaders.AdaptiveVisionShader.md)

    The shader being updated.
  + vmUniforms: Record<string, any>

    The targeted layer.

  #### Returns void

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