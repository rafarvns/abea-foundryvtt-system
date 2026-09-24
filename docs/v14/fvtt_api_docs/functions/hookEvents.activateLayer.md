---
title: "activateLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.activateLayer.html"
category: "functions"
---

# Function activateLayer

* activateLayer(layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)): void

  A hook event that fires when a [foundry.canvas.layers.InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md) becomes active.
  The dispatched event name replaces "Layer" with the named InteractionLayer subclass, i.e. "activateTokensLayer".

  #### Parameters

  + layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)

    The layer becoming active

  #### Returns void