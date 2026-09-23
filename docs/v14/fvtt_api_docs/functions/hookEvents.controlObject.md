---
title: "controlObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.controlObject.html"
category: "functions"
---

# Function controlObject

* controlObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md), controlled: boolean): void

  A hook event that fires when a [foundry.canvas.placeables.PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) is selected or
  deselected. Substitute the PlaceableObject name in the hook event to
  target a specific PlaceableObject type, for example "controlToken".

  #### Parameters

  + object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

    The object instance which is selected/deselected.
  + controlled: boolean

    Whether the PlaceableObject is selected or not.

  #### Returns void