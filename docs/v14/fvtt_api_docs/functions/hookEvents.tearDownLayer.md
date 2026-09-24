---
title: "tearDownLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.tearDownLayer.html"
category: "functions"
---

# Function tearDownLayer

* tearDownLayer(layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md), options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): void

  A hook event that fires when a [foundry.canvas.layers.CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md) is deconstructed.
  The dispatched event name replaces "Layer" with the named CanvasLayer subclass, i.e. "tearDownTokensLayer".

  #### Parameters

  + layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md)

    The layer being deconstructed.
  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the layer is deconstructed.

  #### Returns void