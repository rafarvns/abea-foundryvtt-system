---
title: "refreshObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.refreshObject.html"
category: "functions"
---

# Function refreshObject

* refreshObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void

  A hook event that fires when a [foundry.canvas.placeables.PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) is incrementally refreshed.
  The dispatched event name replaces "Object" with the named PlaceableObject subclass, i.e. "refreshToken".

  #### Parameters

  + object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

    The object instance being refreshed

  #### Returns void