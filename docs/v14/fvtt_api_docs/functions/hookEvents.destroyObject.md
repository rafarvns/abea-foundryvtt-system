---
title: "destroyObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.destroyObject.html"
category: "functions"
---

# Function destroyObject

* destroyObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void

  A hook event that fires when a [foundry.canvas.placeables.PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) is destroyed.
  The dispatched event name replaces "Object" with the named PlaceableObject subclass, i.e. "destroyToken".

  #### Parameters

  + object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

    The object instance being destroyed

  #### Returns void