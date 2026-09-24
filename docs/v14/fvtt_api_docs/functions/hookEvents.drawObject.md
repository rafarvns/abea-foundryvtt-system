---
title: "drawObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.drawObject.html"
category: "functions"
---

# Function drawObject

* drawObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void

  A hook event that fires when a [foundry.canvas.placeables.PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) is initially drawn.
  The dispatched event name replaces "Object" with the named PlaceableObject subclass, i.e. "drawToken".

  #### Parameters

  + object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

    The object instance being drawn

  #### Returns void