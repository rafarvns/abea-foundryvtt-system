---
title: "SMAAEdgeDetectionFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter.html"
category: "classes"
---

# Class SMAAEdgeDetectionFilter

The edge detection filter for [foundry.canvas.rendering.filters.SMAAFilter](foundry.canvas.rendering.filters.SMAAFilter.md).

#### Hierarchy

* Filter
  + SMAAEdgeDetectionFilter

##### Index

### Constructors

[constructor](#constructor)

## Constructors

### constructor

* new SMAAEdgeDetectionFilter(  
  Â Â Â Â config: Pick<  
  Â Â Â Â Â Â Â Â [SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md),  
  Â Â Â Â Â Â Â Â "threshold"  
  Â Â Â Â Â Â Â Â | "localContrastAdaptionFactor",  
  Â Â Â Â >,  
  ): SMAAEdgeDetectionFilter

  #### Parameters

  + config: Pick<[SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md), "threshold" | "localContrastAdaptionFactor">

  #### Returns SMAAEdgeDetectionFilter

  Overrides PIXI.Filter.constructor