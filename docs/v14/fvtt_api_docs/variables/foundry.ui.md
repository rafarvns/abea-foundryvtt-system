---
title: "ui | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/foundry.ui.html"
category: "variables"
---

# Variable ui`Const`

ui: {  
Â Â Â Â activeWindow:  
Â Â Â Â Â Â Â Â | [Application](../classes/foundry.appv1.api.Application.md)  
Â Â Â Â Â Â Â Â | [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â chat: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md);  
Â Â Â Â combat: [CombatTracker](../classes/foundry.applications.sidebar.tabs.CombatTracker.md);  
Â Â Â Â controls: [SceneControls](../classes/foundry.applications.ui.SceneControls.md);  
Â Â Â Â hotbar: [Hotbar](../classes/foundry.applications.ui.Hotbar.md);  
Â Â Â Â menu: [MainMenu](../classes/foundry.applications.ui.MainMenu.md);  
Â Â Â Â nav: [SceneNavigation](../classes/foundry.applications.ui.SceneNavigation.md);  
Â Â Â Â notifications: [Notifications](../classes/foundry.applications.ui.Notifications.md);  
Â Â Â Â pause: [GamePause](../classes/foundry.applications.ui.GamePause.md);  
Â Â Â Â players: [Players](../classes/foundry.applications.ui.Players.md);  
Â Â Â Â sidebar: [Sidebar](../classes/foundry.applications.sidebar.Sidebar.md);  
Â Â Â Â windows: Record<string, [Application](../classes/foundry.appv1.api.Application.md)>;  
} = ...

A collection of application instances

#### Type Declaration

* ##### activeWindow: Â Â Â Â | [Application](../classes/foundry.appv1.api.Application.md) Â Â Â Â | [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)> Â Â Â Â | null
* ##### chat: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md)
* ##### combat: [CombatTracker](../classes/foundry.applications.sidebar.tabs.CombatTracker.md)
* ##### controls: [SceneControls](../classes/foundry.applications.ui.SceneControls.md)
* ##### hotbar: [Hotbar](../classes/foundry.applications.ui.Hotbar.md)
* ##### menu: [MainMenu](../classes/foundry.applications.ui.MainMenu.md)
* ##### nav: [SceneNavigation](../classes/foundry.applications.ui.SceneNavigation.md)
* ##### notifications: [Notifications](../classes/foundry.applications.ui.Notifications.md)
* ##### pause: [GamePause](../classes/foundry.applications.ui.GamePause.md)
* ##### players: [Players](../classes/foundry.applications.ui.Players.md)
* ##### sidebar: [Sidebar](../classes/foundry.applications.sidebar.Sidebar.md)
* ##### windows: Record<string, [Application](../classes/foundry.appv1.api.Application.md)>