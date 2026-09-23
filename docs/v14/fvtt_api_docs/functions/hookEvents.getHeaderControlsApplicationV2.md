---
title: "getHeaderControlsApplicationV2 | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getHeaderControlsApplicationV2.html"
category: "functions"
---

# Function getHeaderControlsApplicationV2

* getHeaderControlsApplicationV2(  
  Â Â Â Â application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  Â Â Â Â controls: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[],  
  ): void

  A hook event that fires whenever this ApplicationV2 is rendered to add controls to its header. Substitute the
  "ApplicationV2" in the hook event to target a specific ApplicationV2 type, for example "renderMyApplication".
  Each Application class in the inheritance chain will also fire this hook, i.e. "getHeaderControlsApplicationV2"
  will also fire.

  #### Parameters

  + application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application instance being rendered
  + controls: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

    The array of header control menu options

  #### Returns void