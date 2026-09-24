---
title: "dropCanvasData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.dropCanvasData.html"
category: "functions"
---

# Function dropCanvasData

* dropCanvasData(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md), data: any, event: DragEvent): void

  A hook event that fires when some useful data is dropped onto the Canvas.

  #### Parameters

  + canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md)

    The Canvas instance
  + data: any

    The data that has been dropped onto the Canvas, which includes the canvas
    coordinates (x, y) and the data return by
    [foundry.applications.ux.TextEditor.implementation.getDragEventData](../classes/foundry.applications.ux.TextEditor.md#getdrageventdata)
  + event: DragEvent

    The drag event

  #### Returns void