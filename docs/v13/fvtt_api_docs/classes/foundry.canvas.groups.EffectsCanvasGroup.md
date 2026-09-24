---
title: "EffectsCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.EffectsCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)

# Class EffectsCanvasGroup

A container group which contains visual effects rendered above the primary group.

TODO:
The effects canvas group is now only performing shape initialization, logic that needs to happen at
the placeable or object level is now their burden.

* [DONE] Adding or removing a source from the EffectsCanvasGroup collection.
* [TODO] A change in a darkness source should re-initialize all overlaping light and vision source.

### Hook Events

* [hookEvents.lightingRefresh](../functions/hookEvents.lightingRefresh.html)

#### Hierarchy

* CanvasGroup<this>
  + EffectsCanvasGroup

##### Index

### Properties

[animateLightSources](foundry.canvas.groups.EffectsCanvasGroup.html#animatelightsources)
[animateVisionSources](foundry.canvas.groups.EffectsCanvasGroup.html#animatevisionsources)
[background](foundry.canvas.groups.EffectsCanvasGroup.html#background)
[coloration](foundry.canvas.groups.EffectsCanvasGroup.html#coloration)
[darkness](foundry.canvas.groups.EffectsCanvasGroup.html#darkness)
[darknessSources](foundry.canvas.groups.EffectsCanvasGroup.html#darknesssources)
[illumination](foundry.canvas.groups.EffectsCanvasGroup.html#illumination)
[layers](foundry.canvas.groups.EffectsCanvasGroup.html#layers)
[lightSources](foundry.canvas.groups.EffectsCanvasGroup.html#lightsources)
[visionSources](foundry.canvas.groups.EffectsCanvasGroup.html#visionsources)
[visualEffectsMaskingFilters](foundry.canvas.groups.EffectsCanvasGroup.html#visualeffectsmaskingfilters)
[groupName](foundry.canvas.groups.EffectsCanvasGroup.html#groupname)
[tearDownChildren](foundry.canvas.groups.EffectsCanvasGroup.html#teardownchildren)

### Accessors

[hookName](foundry.canvas.groups.EffectsCanvasGroup.html#hookname)
[name](foundry.canvas.groups.EffectsCanvasGroup.html#name)

### Methods

[\_createLayers](foundry.canvas.groups.EffectsCanvasGroup.html#_createlayers)
[\_draw](foundry.canvas.groups.EffectsCanvasGroup.html#_draw)
[\_tearDown](foundry.canvas.groups.EffectsCanvasGroup.html#_teardown)
[activateAnimation](foundry.canvas.groups.EffectsCanvasGroup.html#activateanimation)
[activatePostProcessingFilters](foundry.canvas.groups.EffectsCanvasGroup.html#activatepostprocessingfilters)
[allSources](foundry.canvas.groups.EffectsCanvasGroup.html#allsources)
[animateDarkness](foundry.canvas.groups.EffectsCanvasGroup.html#animatedarkness)
[clearEffects](foundry.canvas.groups.EffectsCanvasGroup.html#cleareffects)
[deactivateAnimation](foundry.canvas.groups.EffectsCanvasGroup.html#deactivateanimation)
[draw](foundry.canvas.groups.EffectsCanvasGroup.html#draw)
[getDarknessLevel](foundry.canvas.groups.EffectsCanvasGroup.html#getdarknesslevel)
[initializeLightSources](foundry.canvas.groups.EffectsCanvasGroup.html#initializelightsources)
[initializePriorityLightSources](foundry.canvas.groups.EffectsCanvasGroup.html#initializeprioritylightsources)
[refreshLighting](foundry.canvas.groups.EffectsCanvasGroup.html#refreshlighting)
[refreshLightSources](foundry.canvas.groups.EffectsCanvasGroup.html#refreshlightsources)
[refreshVisionSources](foundry.canvas.groups.EffectsCanvasGroup.html#refreshvisionsources)
[resetPostProcessingFilters](foundry.canvas.groups.EffectsCanvasGroup.html#resetpostprocessingfilters)
[tearDown](foundry.canvas.groups.EffectsCanvasGroup.html#teardown)
[testInsideDarkness](foundry.canvas.groups.EffectsCanvasGroup.html#testinsidedarkness)
[testInsideLight](foundry.canvas.groups.EffectsCanvasGroup.html#testinsidelight)
[toggleMaskingFilters](foundry.canvas.groups.EffectsCanvasGroup.html#togglemaskingfilters)

## Properties

### animateLightSources

animateLightSources: boolean = true

Whether to currently animate light sources.

### animateVisionSources

animateVisionSources: boolean = true

Whether to currently animate vision sources.

### background

background: undefined | [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html)

A layer of background alteration effects which change the appearance of the primary group render texture.

### coloration

coloration: undefined | [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.html)

A layer which adds color-based effects to the scene.

### darkness

darkness: undefined | [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.html)

A layer which adds darkness effects to the scene.

### darknessSources

darknessSources: any = ...

A mapping of darkness sources which are active within the rendered Scene.

### illumination

illumination: undefined | [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.html)

A layer which adds illumination-based effects to the scene.

### layers

layers: Record<string, CanvasLayer>

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers

### lightSources

lightSources: any = ...

A mapping of light sources which are active within the rendered Scene.

### visionSources

visionSources: any = ...

A Collection of vision sources which are currently active within the rendered Scene.

### visualEffectsMaskingFilters

visualEffectsMaskingFilters: Set<VisualEffectsMaskingFilter> = ...

A set of vision mask filters used in visual effects group

### `Static` `Abstract`groupName

groupName: undefined | string

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
  Â Â Â Â background: undefined  
  Â Â Â Â | [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html);  
  Â Â Â Â coloration: undefined | [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.html);  
  Â Â Â Â darkness: undefined | [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.html);  
  Â Â Â Â illumination: undefined | [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.html);  
  }

  #### Returns { Â Â Â Â background: undefined | [CanvasBackgroundAlterationEffects](foundry.canvas.layers.CanvasBackgroundAlterationEffects.html); Â Â Â Â coloration: undefined | [CanvasColorationEffects](foundry.canvas.layers.CanvasColorationEffects.html); Â Â Â Â darkness: undefined | [CanvasDarknessEffects](foundry.canvas.layers.CanvasDarknessEffects.html); Â Â Â Â illumination: undefined | [CanvasIlluminationEffects](foundry.canvas.layers.CanvasIlluminationEffects.html); }

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

* allSources(): Generator<any, void, void>

  Iterator for all light and darkness sources.

  #### Returns Generator<any, void, void>

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

* draw(options?: object): Promise<[EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)>

  A Promise which resolves once the group is fully drawn

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### getDarknessLevel

* getDarknessLevel(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html), \_elevation: any): number

  Get the darkness level at the given point.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

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

* tearDown(options?: object): Promise<[EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### testInsideDarkness

* testInsideDarkness(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: { condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.html)) => boolean },  
  ): boolean

  Test whether the point is inside darkness.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The point to test.
  + `Optional`options: { condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.html)) => boolean } = {}
    - ##### `Optional`condition?: (source: [PointDarknessSource](foundry.canvas.sources.PointDarknessSource.html)) => boolean

      Optional condition a source must satisfy in
      order to be tested.

  #### Returns boolean

  Is inside darkness?

### testInsideLight

* testInsideLight(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: { condition?: (source: PointLightSource) => boolean },  
  ): boolean

  Test whether the point is inside light.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The point to test.
  + `Optional`options: { condition?: (source: PointLightSource) => boolean } = {}
    - ##### `Optional`condition?: (source: PointLightSource) => boolean

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