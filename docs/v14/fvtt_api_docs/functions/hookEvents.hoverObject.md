---
title: "hoverObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.hoverObject.html"
category: "functions"
---

# Function hoverObject

* hoverObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md), hovered: boolean): void

  A hook event that fires when a [foundry.canvas.placeables.PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) is hovered over or out.
  Substitute the PlaceableObject name in the hook event to target a specific
  PlaceableObject type, for example "hoverToken".

  #### Parameters

  + object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

    The object instance.
  + hovered: boolean

    Whether the PlaceableObject is hovered over or not.

  #### Returns void