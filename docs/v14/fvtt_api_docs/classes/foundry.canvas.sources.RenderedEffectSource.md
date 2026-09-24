---
title: "RenderedEffectSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.RenderedEffectSource.html"
category: "classes"
---

# Class RenderedEffectSource<TSourceData, TSourceShape>`Abstract`

An abstract class which extends the base PointSource to provide common functionality for rendering.
This class is extended by both the LightSource and VisionSource subclasses.

#### Template: TSourceData

#### Template: TSourceShape

#### Type Parameters

* TSourceData extends [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md) = [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md)
* TSourceShape extends PIXI.Polygon = PIXI.Polygon

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.RenderedEffectSource))

* [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)
  + RenderedEffectSource
    - [BaseLightSource](foundry.canvas.sources.BaseLightSource.md)
    - [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[animation](#animation)
[colorRGB](#colorrgb)
[data](#data)
[layers](#layers)
[object](#object)
[shape](#shape)
[sourceId](#sourceid)
[suppression](#suppression)
[\_flags](#_flags)
[\_geometry](#_geometry)
[defaultData](#defaultdata)
[EDGE\_OFFSET](#edge_offset)
[effectsCollection](#effectscollection)
[sourceType](#sourcetype)
[\_initializeShaderKeys](#_initializeshaderkeys)
[\_refreshUniformsKeys](#_refreshuniformskeys)

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

### Methods

[\_configure](#_configure)
[\_destroy](#_destroy)
[\_initialize](#_initialize)
[\_refresh](#_refresh)
[add](#add)
[animate](#animate)
[animateTime](#animatetime)
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
[\_updateBackgroundUniforms](#_updatebackgrounduniforms)
[\_updateColorationUniforms](#_updatecolorationuniforms)
[\_updateCommonUniforms](#_updatecommonuniforms)
[\_updateGeometry](#_updategeometry)
[\_updateIlluminationUniforms](#_updateilluminationuniforms)
[getCorrectedColor](#getcorrectedcolor)
[getCorrectedLevel](#getcorrectedlevel)

## Constructors

### constructor

* new RenderedEffectSource<  
  Â Â Â Â [TSourceData](#constructorrenderedeffectsourcetsourcedata) extends [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md) = [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md),  
  Â Â Â Â [TSourceShape](#constructorrenderedeffectsourcetsourceshape) extends Polygon = Polygon,  
  >(  
  Â Â Â Â options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md),  
  ): RenderedEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  An effect source is constructed by providing configuration options.

  #### Type Parameters

  + TSourceData extends [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md) = [RenderedEffectSourceData](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md)
  + TSourceShape extends Polygon = Polygon

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns RenderedEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[constructor](foundry.canvas.sources.BaseEffectSource.md#constructor)

## Properties

### animation

animation: [RenderedEffectSourceAnimationConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md) = {}

The animation configuration applied to this source

### colorRGB

colorRGB: [r: number, g: number, b: number] | null = null

The color of the source as an RGB vector.

### data

data: [TSourceData](#tsourcedata) = ...

The data of this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[data](foundry.canvas.sources.BaseEffectSource.md#data)

### layers

layers: {  
Â Â Â Â background: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â coloration: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
Â Â Â Â illumination: [RenderedEffectSourceLayer](../interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md);  
} = ...

Track the status of rendering layers

### object

object: object | null

Some other object which is responsible for this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[object](foundry.canvas.sources.BaseEffectSource.md#object)

### shape

shape: [TSourceShape](#tsourceshape)

The geometric shape of the effect source which is generated later.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[shape](foundry.canvas.sources.BaseEffectSource.md#shape)

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

### `Static`defaultData

defaultData: {  
Â Â Â Â animation: {};  
Â Â Â Â color: null;  
Â Â Â Â disabled: boolean;  
Â Â Â Â elevation: number;  
Â Â Â Â level: string;  
Â Â Â Â preview: boolean;  
Â Â Â Â seed: null;  
Â Â Â Â x: number;  
Â Â Â Â y: number;  
} = ...

Effect source default data.

#### Type Declaration

* ##### animation: {}
* ##### color: null
* ##### disabled: boolean

  Whether or not the source is disabled
* ##### elevation: number

  The elevation of the point source
* ##### level: string

  The ID of the Level the point source is in
* ##### preview: boolean
* ##### seed: null
* ##### x: number

  The x-coordinate of the source location
* ##### y: number

  The y-coordinate of the source location

Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[defaultData](foundry.canvas.sources.BaseEffectSource.md#defaultdata)

### `Static`EDGE\_OFFSET

EDGE\_OFFSET: number = -8

The offset in pixels applied to create soft edges.

### `Static` `Abstract`effectsCollection

effectsCollection: string

The target collection into the effects canvas group.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[effectsCollection](foundry.canvas.sources.BaseEffectSource.md#effectscollection)

### `Static`sourceType

sourceType: string

The type of source represented by this data structure.
Each subclass must implement this attribute.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[sourceType](foundry.canvas.sources.BaseEffectSource.md#sourcetype)

### `Protected` `Static`\_initializeShaderKeys

\_initializeShaderKeys: string[] = ...

Keys of the data object which require shaders to be re-initialized.

### `Protected` `Static`\_refreshUniformsKeys

\_refreshUniformsKeys: string[] = []

Keys of the data object which require uniforms to be refreshed.

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

### coloration

* get coloration(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the coloration layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

### effectsCollection

* get effectsCollection(): [Collection](foundry.utils.Collection.md)<  
  Â Â Â Â string,  
  Â Â Â Â [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>,  
  >

  The EffectsCanvasGroup collection linked to this effect source.

  #### Returns [Collection](foundry.utils.Collection.md)<string, [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>>

  Inherited from BaseEffectSource.effectsCollection

### elevation

* get elevation(): number

  The elevation bound to this source.

  #### Returns number

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[elevation](foundry.canvas.sources.BaseEffectSource.md#elevation)

### hasActiveLayer

* get hasActiveLayer(): boolean

  Has the rendered source at least one active layer?

  #### Returns boolean

### illumination

* get illumination(): [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

  A convenience accessor to the illumination layer mesh.

  #### Returns [PointSourceMesh](foundry.canvas.containers.PointSourceMesh.md)

### isAnimated

* get isAnimated(): boolean

  Is the rendered source animated?

  #### Returns boolean

### isPreview

* get isPreview(): boolean

  Is this RenderedEffectSource a temporary preview?

  #### Returns boolean

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

### `Protected` `Static`\_layers

* get \_layers(): Record<string, [RenderedEffectLayerConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectLayerConfig.md)>

  `Protected`

  Layers handled by this rendered source.

  #### Returns Record<string, [RenderedEffectLayerConfig](../interfaces/foundry.canvas.sources.types.RenderedEffectLayerConfig.md)>

## Methods

### \_configure

* \_configure(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_configure](foundry.canvas.sources.BaseEffectSource.md#_configure)

### \_destroy

* \_destroy(): void

  #### Returns void

  Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_destroy](foundry.canvas.sources.BaseEffectSource.md#_destroy)

### \_initialize

* \_initialize(data: any): void

  Subclass specific data initialization steps.

  #### Parameters

  + data: any

    Provided data for configuration

  #### Returns void

  Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_initialize](foundry.canvas.sources.BaseEffectSource.md#_initialize)

### \_refresh

* \_refresh(): void

  #### Returns void

  Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_refresh](foundry.canvas.sources.BaseEffectSource.md#_refresh)

### add

* add(): void

  Add this BaseEffectSource instance to the active collection.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[add](foundry.canvas.sources.BaseEffectSource.md#add)

### animate

* animate(dt: number): any

  Animate the PointSource, if an animation is enabled and if it currently has rendered containers.

  #### Parameters

  + dt: number

    Delta time.

  #### Returns any

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

### destroy

* destroy(): void

  Steps that must be performed when the source is destroyed.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[destroy](foundry.canvas.sources.BaseEffectSource.md#destroy)

### drawMeshes

* drawMeshes(): Record<string, Mesh<MeshMaterial> | null>

  Render the containers used to represent this light source within the LightingLayer

  #### Returns Record<string, Mesh<MeshMaterial> | null>

### initialize

* initialize(  
  Â Â Â Â data?: Partial<[TSourceData](#tsourcedata)>,  
  Â Â Â Â options?: { reset?: boolean },  
  ): RenderedEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  Initialize and configure the source using provided data.

  #### Parameters

  + data: Partial<[TSourceData](#tsourcedata)> = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns RenderedEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  The initialized source

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[initialize](foundry.canvas.sources.BaseEffectSource.md#initialize)

### refresh

* refresh(): void

  Refresh the state and uniforms of the source.
  Only active sources are refreshed.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[refresh](foundry.canvas.sources.BaseEffectSource.md#refresh)

### remove

* remove(): void

  Remove this BaseEffectSource instance from the active collection.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[remove](foundry.canvas.sources.BaseEffectSource.md#remove)

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the point is contained within the shape of the source.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is inside the source?

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[testPoint](foundry.canvas.sources.BaseEffectSource.md#testpoint)

### `Protected`\_configureLayer

* \_configureLayer(layer: object, layerId: string): void

  `Protected`

  Specific configuration for a layer.

  #### Parameters

  + layer: object
  + layerId: string

  #### Returns void

### `Protected`\_configureShaders

* \_configureShaders(): Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  `Protected`

  Configure which shaders are used for each rendered layer.

  #### Returns Record<string, typeof [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)>

  An object whose keys are layer identifiers and whose values are shader classes.

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: Partial<[TSourceData](#tsourcedata)>): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes) is called in [BaseEffectSource#initialize](foundry.canvas.sources.BaseEffectSource.md#initialize).

  #### Parameters

  + changes: Partial<[TSourceData](#tsourcedata)>

    Changes to the source data which were applied

  #### Returns boolean

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_couldShapesChange](foundry.canvas.sources.BaseEffectSource.md#_couldshapeschange)

### `Protected` `Abstract`\_createShapes

* \_createShapes(): void

  `Protected`

  Create the polygon shape (or shapes) for this source using configured data.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes)

### `Protected`\_drawMesh

* \_drawMesh(layerId: string): Mesh<MeshMaterial> | null

  `Protected`

  Create a Mesh for a certain rendered layer of this source.

  #### Parameters

  + layerId: string

    The layer key in layers to draw

  #### Returns Mesh<MeshMaterial> | null

  The drawn mesh for this layer, or null if no mesh is required

### `Protected`\_initializeSoftEdges

* \_initializeSoftEdges(): void

  `Protected`

  Decide whether to render soft edges with a blur.

  #### Returns void

### `Protected`\_updateBackgroundUniforms

* \_updateBackgroundUniforms(): void

  `Protected`

  Update shader uniforms used for the background layer.

  #### Returns void

### `Protected`\_updateColorationUniforms

* \_updateColorationUniforms(): void

  `Protected`

  Update shader uniforms used for the coloration layer.

  #### Returns void

### `Protected`\_updateCommonUniforms

* \_updateCommonUniforms(shader: [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): void

  `Protected`

  Update shader uniforms used by every rendered layer.

  #### Parameters

  + shader: [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Returns void

### `Protected` `Abstract`\_updateGeometry

* \_updateGeometry(): void

  `Protected`

  Create the geometry for the source shape that is used in shaders and compute its bounds for culling purpose.
  Triangulate the form and create buffers.

  #### Returns void

### `Protected`\_updateIlluminationUniforms

* \_updateIlluminationUniforms(): void

  `Protected`

  Update shader uniforms used for the illumination layer.

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

### `Static`getCorrectedLevel

* getCorrectedLevel(level: [LightingLevel](../types/CONST.LightingLevel.md)): number

  Get corrected level according to level and active vision mode data.

  #### Parameters

  + level: [LightingLevel](../types/CONST.LightingLevel.md)

    The lighting level (one of [CONST.LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md))

  #### Returns number

  The corrected level.