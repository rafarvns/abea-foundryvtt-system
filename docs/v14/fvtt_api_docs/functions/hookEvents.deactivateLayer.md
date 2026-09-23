---
title: "deactivateLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.deactivateLayer.html"
category: "functions"
---

# Function deactivateLayer

* deactivateLayer(layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)): void

  A hook event that fires with a [foundry.canvas.layers.InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md) becomes inactive.
  The dispatched event name replaces "Layer" with the named InteractionLayer subclass, i.e. "deactivateTokensLayer".

  #### Parameters

  + layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)

    The layer becoming inactive

  #### Returns void