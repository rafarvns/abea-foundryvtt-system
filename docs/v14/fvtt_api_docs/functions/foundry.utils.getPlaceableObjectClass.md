---
title: "getPlaceableObjectClass | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.getPlaceableObjectClass.html"
category: "functions"
---

# Function getPlaceableObjectClass

* getPlaceableObjectClass(  
  Â Â Â Â documentName: string,  
  ): typeof [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) | undefined

  Return a reference to the PlaceableObject class implementation which is configured for use.

  #### Parameters

  + documentName: string

    The canonical Document name, for example "Actor"

  #### Returns typeof [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md) | undefined

  The configured PlaceableObject class implementation