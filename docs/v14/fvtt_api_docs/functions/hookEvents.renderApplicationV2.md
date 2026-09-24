---
title: "renderApplicationV2 | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.renderApplicationV2.html"
category: "functions"
---

# Function renderApplicationV2

* renderApplicationV2(  
  Â Â Â Â application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): void

  A hook event that fires whenever an ApplicationV2 is rendered. Substitute the "ApplicationV2" in the hook event to
  target a specific ApplicationV2 type, for example "renderMyApplication". Each ApplicationV2 class in the inheritance
  chain will also fire this hook, i.e. "renderApplicationV2" will also fire.
  The hook provides the pending application HTML which will be added to the DOM.
  Hooked functions may modify that HTML or attach interactive listeners to it.

  #### Parameters

  + application: [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application instance being rendered
  + element: HTMLElement

    The inner HTML of the document that will be displayed and may be modified
  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    The application rendering context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    The application rendering options

  #### Returns void