---
title: "canvasTearDown | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.canvasTearDown.html"
category: "functions"
---

# Function canvasTearDown

* canvasTearDown(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md), options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): void

  A hook event that fires when the Canvas is deactivated.

  #### Parameters

  + canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md)

    The Canvas instance being deactivated.
  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the canvas is deconstructed.

  #### Returns void