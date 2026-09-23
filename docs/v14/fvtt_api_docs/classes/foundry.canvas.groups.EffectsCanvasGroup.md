---
title: "EffectsCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.EffectsCanvasGroup.html"
category: "classes"
---

# Class EffectsCanvasGroup

A container group which contains visual effects rendered above the primary group.

TODO:
The effects canvas group is now only performing shape initialization, logic that needs to happen at
the placeable or object level is now their burden.

* [DONE] Adding or removing a source from the EffectsCanvasGroup collection.
* [TODO] A change in a darkness source should re-initialize all overlaping light and vision source.

### Hook Events

* [hookEvents.lightingRefresh](../functions/hookEvents.lightingRefresh.md)

##### Index

### Properties

[animateLightSources](#animatelightsources)
[animateVisionSources](#animatevisionsources)
[background](#background)
[coloration](#coloration)
[darkness](#darkness)
[darknessSources](#darknesssources)
[illumination](#illumination)
[layers](#layers)
[lightSources](#lightsources)
[visionSources](#visionsources)
[visualEffectsMaskingFilters](#visualeffectsmaskingfilters)
[groupName](#groupname)
[tearDownChildren](#teardownchildren)

### Accessors

[hookName](#hookname)
[name](#name)

### Methods

[\_createLayers](#_createlayers)
[\_draw](#_draw)
[\_tearDown](#_teardown)
[activateAnimation](#activateanimation)
[activatePostProcessingFilters](#activatepostprocessingfilters)
[allSources](#allsources)
[animateDarkness](#animatedarkness)
[clearEffects](#cleareffects)
[deactivateAnimation](#deactivateanimation)
[draw](#draw)
[getDarknessLevel](#getdarknesslevel)
[initializeLightSources](#initializelightsources)
[initializePriorityLightSources](#initializeprioritylightsources)
[refreshLighting](#refreshlighting)
[refreshLightSources](#refreshlightsources)
[refreshVisionSources](#refreshvisionsources)
[resetPostProcessingFilters](#resetpostprocessingfilters)
[tearDown](#teardown)
[testInsideDarkness](#testinsidedarkness)
[testInsideLight](#testinsidelight)
[toggleMaskingFilters](#togglemaskingfilters)

## Properties

### animateLightSources

animateLightSources: boolean = true

Whether to currently animate light sources.

### animateVisionSources

animateVisionSources: boolean = true

Whether to currently animate vision sources.

### background

background: [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.md) | undefined

A layer of background alteration effects which change the appearance of the primary group render texture.

### coloration

coloration: [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.md) | undefined

A layer which adds color-based effects to the scene.

### darkness

darkness: [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.md) | undefined

A layer which adds darkness effects to the scene.

### darknessSources

darknessSources: [Collection](foundry.utils.Collection.md)<string, [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md)> = ...

A mapping of darkness sources which are active within the rendered Scene.

### illumination

illumination: [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.md) | undefined

A layer which adds illumination-based effects to the scene.

### layers

layers: Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers

### lightSources

lightSources: [Collection](foundry.utils.Collection.md)<string, [PointLightSource](foundry.canvas.sources.PointLightSource.md)> = ...

A mapping of light sources which are active within the rendered Scene.

### visionSources

visionSources: [Collection](foundry.utils.Collection.md)<string, [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)> = ...

A Collection of vision sources which are currently active within the rendered Scene.

### visualEffectsMaskingFilters

visualEffectsMaskingFilters: Set<VisualEffectsMaskingFilter> = ...

A set of vision mask filters used in visual effects group

### `Static` `Abstract`groupName

groupName: string | undefined

The name of this canvas group.

Inherited from CanvasGroupMixin(PIXI.Container).groupName

### `Static`tearDownChildren

tearDownChildren: boolean = true

If this canvas group should teardown non-layers children.

Inherited from CanvasGroupMixin(PIXI.Container).tearDownChildren

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).hookName

### name

* get name(): string

  The canonical name of the canvas group is the name of the constructor that is the immediate child of the
  defined base class.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).name

## Methods

### \_createLayers

* \_createLayers(): {  
  Â Â Â Â background: [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.md)  
  Â Â Â Â | undefined;  
  Â Â Â Â coloration: [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.md) | undefined;  
  Â Â Â Â darkness: [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.md) | undefined;  
  Â Â Â Â illumination: [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.md) | undefined;  
  }

  #### Returns { Â Â Â Â background: [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.md) | undefined; Â Â Â Â coloration: [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.md) | undefined; Â Â Â Â darkness: [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.md) | undefined; Â Â Â Â illumination: [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.md) | undefined; }

  Overrides CanvasGroupMixin(PIXI.Container).\_createLayers

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides CanvasGroupMixin(PIXI.Container).\_draw

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides CanvasGroupMixin(PIXI.Container).\_tearDown

### activateAnimation

* activateAnimation(): void

  Activate light source animation for AmbientLight objects within this layer

  #### Returns void

### activatePostProcessingFilters

* activatePostProcessingFilters(  
  Â Â Â Â filterMode: string,  
  Â Â Â Â postProcessingModes?: string[],  
  Â Â Â Â uniforms?: Object,  
  ): void

  Activate post-processing effects for a certain effects channel.

  #### Parameters

  + filterMode: string

    The filter mode to target.
  + `Optional`postProcessingModes: string[] = []

    The post-processing modes to apply to this filter.
  + `Optional`uniforms: Object = {}

    The uniforms to update.

  #### Returns void

### allSources

* allSources(): Generator<[PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md) | [PointLightSource](foundry.canvas.sources.PointLightSource.md), void, void>

  Iterator for all light and darkness sources.

  #### Returns Generator<[PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md) | [PointLightSource](foundry.canvas.sources.PointLightSource.md), void, void>

  #### Yields

  PointDarknessSource|PointLightSource

### animateDarkness

* animateDarkness(target?: number, duration?: number): Promise<any>

  Animate a smooth transition of the darkness overlay to a target value.
  Only begin animating if another animation is not already in progress.

  #### Parameters

  + target: number = 1.0

    The target darkness level between 0 and 1
  + duration: number = {}

    The desired animation time in milliseconds. Default is 10 seconds

  #### Returns Promise<any>

  A Promise which resolves once the animation is complete

### clearEffects

* clearEffects(): void

  Clear all effects containers and animated sources.

  #### Returns void

### deactivateAnimation

* deactivateAnimation(): void

  Deactivate light source animation for AmbientLight objects within this layer

  #### Returns void

### draw

* draw(options?: object): Promise<EffectsCanvasGroup>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<EffectsCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### getDarknessLevel

* getDarknessLevel(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md), \_elevation: any): number

  Get the darkness level at the given point.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.
  + \_elevation: any

  #### Returns number

  The darkness level.

### initializeLightSources

* initializeLightSources(): void

  Initialize positive light sources which exist within the active Scene.
  Packages can use the "initializeLightSources" hook to programmatically add light sources.

  #### Returns void

### initializePriorityLightSources

* initializePriorityLightSources(): void

  Initialize all sources that generate edges (Darkness and certain Light sources).
  Darkness sources always generate edges. Light sources only do so if their priority is strictly greater than 0.
  The `edgesSources` array will be rebuilt and sorted by descending priority, in the case of a tie,
  DarknessSources take precedence. Otherwise, the existing array is used as-is.
  Regardless of whether the array is rebuilt, each source is re-initialized to ensure their geometry is refreshed.

  #### Returns void

### refreshLighting

* refreshLighting(): void

  Refresh the active display of lighting.

  #### Returns void

### refreshLightSources

* refreshLightSources(): void

  Refresh the state and uniforms of all light sources and darkness sources objects.

  #### Returns void

### refreshVisionSources

* refreshVisionSources(): void

  Refresh the state and uniforms of all VisionSource objects.

  #### Returns void

### resetPostProcessingFilters

* resetPostProcessingFilters(): void

  Reset post-processing modes on all Visual Effects masking filters.

  #### Returns void

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<EffectsCanvasGroup>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<EffectsCanvasGroup>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### testInsideDarkness

* testInsideDarkness(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â options?: { condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md)) => boolean },  
  ): boolean

  Test whether the point is inside darkness.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point to test.
  + `Optional`options: { condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md)) => boolean } = {}
    - ##### `Optional`condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.md)) => boolean

      Optional condition a source must satisfy in
      order to be tested.

  #### Returns boolean

  Is inside darkness?

### testInsideLight

* testInsideLight(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â options?: { condition?: (source: [PointLightSource](foundry.canvas.sources.PointLightSource.md)) => boolean },  
  ): boolean

  Test whether the point is inside light.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point to test.
  + `Optional`options: { condition?: (source: [PointLightSource](foundry.canvas.sources.PointLightSource.md)) => boolean } = {}
    - ##### `Optional`condition?: (source: [PointLightSource](foundry.canvas.sources.PointLightSource.md)) => boolean

      Optional condition a source must satisfy in
      order to be tested.

  #### Returns boolean

  Is inside light?

### toggleMaskingFilters

* toggleMaskingFilters(enabled?: boolean): void

  Activate vision masking for visual effects

  #### Parameters

  + `Optional`enabled: boolean = true

    Whether to enable or disable vision masking

  #### Returns void