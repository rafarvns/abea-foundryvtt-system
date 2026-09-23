---
title: "closeApplicationV2 | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.closeApplicationV2.html"
category: "functions"
---

# Function closeApplicationV2

* closeApplicationV2(  
  Â Â Â Â application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  ): void

  A hook event that fires whenever this ApplicationV2 is closed. Substitute the "ApplicationV2" in the hook event to
  target a specific ApplicationV2 type, for example "closeMyApplication". Each ApplicationV2 class in the inheritance
  chain will also fire this hook, i.e. "closeApplicationV2" will also fire.

  #### Parameters

  + application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application instance being closed

  #### Returns void