---
title: "pastePlaceableObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.pastePlaceableObject.html"
category: "functions"
---

# Function pastePlaceableObject

* pastePlaceableObject(  
  Â Â Â Â objects: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)[],  
  Â Â Â Â data: object[],  
  Â Â Â Â options: { cut: boolean },  
  ): void

  A hook event that fires when any PlaceableObject is pasted onto the Scene.
  Substitute the "PlaceableObject" in the hook event to target a
  specific PlaceableObject type, for example "pasteToken".

  #### Parameters

  + objects: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)[]

    The objects that were copied or cut
  + data: object[]

    The create data if copied, or the update data if cut
  + options: { cut: boolean }

    Additional options

    - ##### cut: boolean

      Were the objects cut instead of copied?

  #### Returns void