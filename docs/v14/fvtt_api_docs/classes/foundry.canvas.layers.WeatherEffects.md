---
title: "WeatherEffects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.WeatherEffects.html"
category: "classes"
---

# Class WeatherEffects

A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more.

##### Index

### Properties

[effects](#effects)
[occlusionFilter](#occlusionfilter)
[occlusionMaskConfig](#occlusionmaskconfig)
[suppression](#suppression)
[terrainMaskConfig](#terrainmaskconfig)
[weatherEffects](#weathereffects)

### Accessors

[elevation](#elevation)
[hookName](#hookname)
[sort](#sort)
[sortLayer](#sortlayer)
[zIndex](#zindex)
[layerOptions](#layeroptions)

### Methods

[\_draw](#_draw)
[\_tearDown](#_teardown)
[calculateBounds](#calculatebounds)
[clearEffects](#cleareffects)
[initializeEffects](#initializeeffects)
[configureOcclusionMask](#configureocclusionmask)
[configureTerrainMask](#configureterrainmask)

## Properties

### effects

effects: Map<string, any> = ...

Array of weather effects linked to this weather container.

### occlusionFilter

occlusionFilter: [WeatherOcclusionMaskFilter](foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.md)

The inverse occlusion mask filter bound to this container.

### occlusionMaskConfig

occlusionMaskConfig: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.md)

A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.

### suppression

suppression: Container<DisplayObject>

The container in which suppression meshed are added.

### terrainMaskConfig

terrainMaskConfig: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.md)

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
  Â Â Â Â config?: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.md),  
  ): void

  `Protected`

  Set the occlusion uniforms for this weather shader.

  #### Parameters

  + context: Shader

    The shader context
  + config: [WeatherOcclusionMaskConfiguration](../interfaces/foundry.WeatherOcclusionMaskConfiguration.md) = {}

    Occlusion masking options

  #### Returns void

### `Protected` `Static`configureTerrainMask

* configureTerrainMask(  
  Â Â Â Â context: Shader,  
  Â Â Â Â config?: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.md),  
  ): void

  `Protected`

  Set the terrain uniforms for this weather shader.

  #### Parameters

  + context: Shader

    The shader context
  + config: [WeatherTerrainMaskConfiguration](../interfaces/foundry.WeatherTerrainMaskConfiguration.md) = {}

    Terrain masking options

  #### Returns void