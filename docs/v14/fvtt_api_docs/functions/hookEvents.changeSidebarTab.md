---
title: "changeSidebarTab | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.changeSidebarTab.html"
category: "functions"
---

# Function changeSidebarTab

* changeSidebarTab(  
  Â Â Â Â app: [AbstractSidebarTab](../classes/foundry.applications.sidebar.AbstractSidebarTab.md)<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  Â Â Â Â >,  
  ): void

  A hook event that fires when the Sidebar tab is changed.

  #### Parameters

  + app: [AbstractSidebarTab](../classes/foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The SidebarTab application which is now active

  #### Returns void