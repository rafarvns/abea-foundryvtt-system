---
title: "preRenderApplication | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preRenderApplication.html"
category: "functions"
---

# Function preRenderApplication

* preRenderApplication(  
  Â Â Â Â application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): void

  A hook event that fires prior to an ApplicationV2 being rendered. Substitute the "Application" in the hook event to
  target a specific ApplicationV2 type, for example "preRenderMyApplication". Each ApplicationV2 class in the
  inheritance chain will also fire this hook, i.e. "preRenderApplicationV2" will also fire.

  #### Parameters

  + application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application instance being rendered.
  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    The application rendering context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    The application rendering options.

  #### Returns void