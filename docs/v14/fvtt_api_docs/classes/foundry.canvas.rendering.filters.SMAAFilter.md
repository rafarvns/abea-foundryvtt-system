---
title: "SMAAFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.SMAAFilter.html"
category: "classes"
---

# Class SMAAFilter

The SMAA filter.

#### See

* [foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter](foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter.md)
* [foundry.canvas.rendering.filters.SMAABlendingWeightCalculationFilter](foundry.canvas.rendering.filters.SMAABlendingWeightCalculationFilter.md)
* [foundry.canvas.rendering.filters.SMAANeighborhoodBlendingFilter](foundry.canvas.rendering.filters.SMAANeighborhoodBlendingFilter.md)

#### Hierarchy

* Filter
  + SMAAFilter

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[PRESETS](#presets)

### Methods

[apply](#apply)

## Constructors

### constructor

* new SMAAFilter(config?: Partial<[SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md)>): SMAAFilter

  #### Parameters

  + `Optional`config: Partial<[SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md)> = {}

  #### Returns SMAAFilter

  Overrides PIXI.Filter.constructor

## Accessors

### `Static`PRESETS

* get PRESETS(): [DeepReadonly](../types/foundry.types.DeepReadonly.md)<  
  Â Â Â Â Record<"LOW" | "MEDIUM" | "HIGH" | "ULTRA", [SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md)>,  
  >

  The presets.

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Record<"LOW" | "MEDIUM" | "HIGH" | "ULTRA", [SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md)>>

## Methods

### apply

* apply(  
  Â Â Â Â filterManager: any,  
  Â Â Â Â input: any,  
  Â Â Â Â output: any,  
  Â Â Â Â clearMode: any,  
  Â Â Â Â currentState: any,  
  ): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clearMode: any
  + currentState: any

  #### Returns void