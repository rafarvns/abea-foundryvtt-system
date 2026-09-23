---
title: "getPlaceableContextOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getPlaceableContextOptions.html"
category: "functions"
---

# Function getPlaceableContextOptions

* getPlaceableContextOptions(  
  Â Â Â Â application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  Â Â Â Â menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  ): void

  A hook event that fires when a context menu related to a certain placeable type is being prepared.
  The placeable's Document name is included in the hook name. For example, for Tokens, the hook would be
  "getTokenPlaceableContextOptions".

  #### Parameters

  + application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application instance that the context menu is constructed within.
  + menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

    An array of prepared menu items which should be mutated by the hook.

  #### Returns void