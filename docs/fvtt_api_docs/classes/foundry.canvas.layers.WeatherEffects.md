---
title: "WeatherEffects | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.WeatherEffects.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [WeatherEffects](foundry.canvas.layers.WeatherEffects.html)

# Class WeatherEffects

A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more.

#### Hierarchy

* FullCanvasObject<this>
  + WeatherEffects

##### Index

### Properties

[effects](foundry.canvas.layers.WeatherEffects.html#effects)
[occlusionFilter](foundry.canvas.layers.WeatherEffects.html#occlusionfilter)
[occlusionMaskConfig](foundry.canvas.layers.WeatherEffects.html#occlusionmaskconfig)
[suppression](foundry.canvas.layers.WeatherEffects.html#suppression)
[terrainMaskConfig](foundry.canvas.layers.WeatherEffects.html#terrainmaskconfig)
[weatherEffects](foundry.canvas.layers.WeatherEffects.html#weathereffects)

### Accessors

[elevation](foundry.canvas.layers.WeatherEffects.html#elevation)
[hookName](foundry.canvas.layers.WeatherEffects.html#hookname)
[sort](foundry.canvas.layers.WeatherEffects.html#sort)
[sortLayer](foundry.canvas.layers.WeatherEffects.html#sortlayer)
[zIndex](foundry.canvas.layers.WeatherEffects.html#zindex)
[layerOptions](foundry.canvas.layers.WeatherEffects.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.WeatherEffects.html#_draw)
[\_tearDown](foundry.canvas.layers.WeatherEffects.html#_teardown)
[calculateBounds](foundry.canvas.layers.WeatherEffects.html#calculatebounds)
[clearEffects](foundry.canvas.layers.WeatherEffects.html#cleareffects)
[initializeEffects](foundry.canvas.layers.WeatherEffects.html#initializeeffects)
[configureOcclusionMask](foundry.canvas.layers.WeatherEffects.html#configureocclusionmask)
[configureTerrainMask](foundry.canvas.layers.WeatherEffects.html#configureterrainmask)

## Properties

### effects

effects: Map<string, any[]> = ...

Array of weather effects linked to this weather container.

### occlusionFilter

occlusionFilter: [WeatherOcclusionMaskFilter](foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.html)

The inverse occlusion mask filter bound to this container.

### occlusionMaskConfig

occlusionMaskConfig: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.html)

A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.

### suppression

suppression: Container<DisplayObject>

The container in which suppression meshed are added.

### terrainMaskConfig

terrainMaskConfig: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.html)

A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.

### weatherEffects

weatherEffects: Container<DisplayObject>

The container in which effects are added.

## Accessors

### elevation

* get elevation(): number

  The elevation of this object.

  #### Returns number

  #### Default

  ```
  Infinity
  Copy
  ```

### hookName

* get hookName(): string

  #### Returns string

### sort

* get sort(): number

  A key which resolves ties amongst objects at the same elevation within the same layer.

  #### Returns number

  #### Default

  ```
  0
  Copy
  ```

### sortLayer

* get sortLayer(): number

  A key which resolves ties amongst objects at the same elevation of different layers.

  #### Returns number

  #### Default

  ```
  PrimaryCanvasGroup.SORT_LAYERS.WEATHER
  Copy
  ```

### zIndex

* get zIndex(): number

  A key which resolves ties amongst objects at the same elevation within the same layer and same sort.

  #### Returns number

  #### Default

  ```
  0
  Copy
  ```

  Overrides FullCanvasObjectMixin(CanvasLayer).zIndex
* set zIndex(value: number): void

  The zIndex of the displayObject.

  If a container has the sortableChildren property set to true, children will be automatically
  sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
  and thus rendered on top of other display objects within the same container.

  #### Parameters

  + value: number

  #### Returns void

  #### See

  PIXI.Container#sortableChildren

  Overrides FullCanvasObjectMixin(CanvasLayer).zIndex

### `Static`layerOptions

* get layerOptions(): object

  #### Returns object

  #### Inherit Doc

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

### \_tearDown

* \_tearDown(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### calculateBounds

* calculateBounds(): void

  #### Returns void

  Inherited from FullCanvasObjectMixin(CanvasLayer).calculateBounds

### clearEffects

* clearEffects(): void

  Clear the weather container.

  #### Returns void

### initializeEffects

* initializeEffects(weatherEffectsConfig?: object): void

  Initialize the weather container from a weather config object.

  #### Parameters

  + `Optional`weatherEffectsConfig: object

    Weather config object (or null/undefined to clear the container).

  #### Returns void

### `Protected` `Static`configureOcclusionMask

* configureOcclusionMask(  
  Â Â Â Â context: Shader,  
  Â Â Â Â config?: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.html),  
  ): void

  `Protected`

  Set the occlusion uniforms for this weather shader.

  #### Parameters

  + context: Shader

    The shader context
  + config: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.html) = {}

    Occlusion masking options

  #### Returns void

### `Protected` `Static`configureTerrainMask

* configureTerrainMask(  
  Â Â Â Â context: Shader,  
  Â Â Â Â config?: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.html),  
  ): void

  `Protected`

  Set the terrain uniforms for this weather shader.

  #### Parameters

  + context: Shader

    The shader context
  + config: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.html) = {}

    Terrain masking options

  #### Returns void