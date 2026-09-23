---
title: "drawLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.drawLayer.html"
category: "functions"
---

# Function drawLayer

* drawLayer(layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md), options: object): void

  A hook event that fires when a [foundry.canvas.layers.CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md) is drawn.
  The dispatched event name replaces "Layer" with the named CanvasLayer subclass, i.e. "drawTokensLayer".

  #### Parameters

  + layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md)

    The layer being drawn.
  + options: object

    Options which configure how the layer is drawn.

  #### Returns void