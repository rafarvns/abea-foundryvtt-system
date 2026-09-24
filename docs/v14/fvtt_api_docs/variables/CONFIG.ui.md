---
title: "ui | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.ui.html"
category: "variables"
---

# Variable ui`Const`

ui: {  
Â Â Â Â actors: typeof [ActorDirectory](../classes/foundry.applications.sidebar.tabs.ActorDirectory.md);  
Â Â Â Â cards: typeof [CardsDirectory](../classes/foundry.applications.sidebar.tabs.CardsDirectory.md);  
Â Â Â Â chat: typeof [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md);  
Â Â Â Â combat: typeof [CombatTracker](../classes/foundry.applications.sidebar.tabs.CombatTracker.md);  
Â Â Â Â compendium: typeof [CompendiumDirectory](../classes/foundry.applications.sidebar.tabs.CompendiumDirectory.md);  
Â Â Â Â controls: typeof [SceneControls](../classes/foundry.applications.ui.SceneControls.md);  
Â Â Â Â hotbar: typeof [Hotbar](../classes/foundry.applications.ui.Hotbar.md);  
Â Â Â Â items: typeof [ItemDirectory](../classes/foundry.applications.sidebar.tabs.ItemDirectory.md);  
Â Â Â Â journal: typeof [JournalDirectory](../classes/foundry.applications.sidebar.tabs.JournalDirectory.md);  
Â Â Â Â macros: typeof [MacroDirectory](../classes/foundry.applications.sidebar.tabs.MacroDirectory.md);  
Â Â Â Â menu: typeof [MainMenu](../classes/foundry.applications.ui.MainMenu.md);  
Â Â Â Â nav: typeof [SceneNavigation](../classes/foundry.applications.ui.SceneNavigation.md);  
Â Â Â Â notifications: typeof [Notifications](../classes/foundry.applications.ui.Notifications.md);  
Â Â Â Â pause: typeof [GamePause](../classes/foundry.applications.ui.GamePause.md);  
Â Â Â Â placeables: typeof [PlaceableDirectory](../classes/foundry.applications.sidebar.tabs.PlaceableDirectory.md);  
Â Â Â Â players: typeof [Players](../classes/foundry.applications.ui.Players.md);  
Â Â Â Â playlists: typeof [PlaylistDirectory](../classes/foundry.applications.sidebar.tabs.PlaylistDirectory.md);  
Â Â Â Â scenes: typeof [SceneDirectory](../classes/foundry.applications.sidebar.tabs.SceneDirectory.md);  
Â Â Â Â settings: typeof [Settings](../classes/foundry.applications.sidebar.tabs.Settings.md);  
Â Â Â Â sidebar: typeof [Sidebar](../classes/foundry.applications.sidebar.Sidebar.md);  
Â Â Â Â tables: typeof [RollTableDirectory](../classes/foundry.applications.sidebar.tabs.RollTableDirectory.md);  
Â Â Â Â webrtc: typeof [CameraViews](../classes/foundry.applications.apps.av.CameraViews.md);  
} = ...

Configure the Application classes used to render various core UI elements in the application.
The order of this object is relevant, as certain classes need to be constructed and referenced before others.

#### Type Declaration

* ##### actors: typeof [ActorDirectory](../classes/foundry.applications.sidebar.tabs.ActorDirectory.md)
* ##### cards: typeof [CardsDirectory](../classes/foundry.applications.sidebar.tabs.CardsDirectory.md)
* ##### chat: typeof [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md)
* ##### combat: typeof [CombatTracker](../classes/foundry.applications.sidebar.tabs.CombatTracker.md)
* ##### compendium: typeof [CompendiumDirectory](../classes/foundry.applications.sidebar.tabs.CompendiumDirectory.md)
* ##### controls: typeof [SceneControls](../classes/foundry.applications.ui.SceneControls.md)
* ##### hotbar: typeof [Hotbar](../classes/foundry.applications.ui.Hotbar.md)
* ##### items: typeof [ItemDirectory](../classes/foundry.applications.sidebar.tabs.ItemDirectory.md)
* ##### journal: typeof [JournalDirectory](../classes/foundry.applications.sidebar.tabs.JournalDirectory.md)
* ##### macros: typeof [MacroDirectory](../classes/foundry.applications.sidebar.tabs.MacroDirectory.md)
* ##### menu: typeof [MainMenu](../classes/foundry.applications.ui.MainMenu.md)
* ##### nav: typeof [SceneNavigation](../classes/foundry.applications.ui.SceneNavigation.md)
* ##### notifications: typeof [Notifications](../classes/foundry.applications.ui.Notifications.md)
* ##### pause: typeof [GamePause](../classes/foundry.applications.ui.GamePause.md)
* ##### placeables: typeof [PlaceableDirectory](../classes/foundry.applications.sidebar.tabs.PlaceableDirectory.md)
* ##### players: typeof [Players](../classes/foundry.applications.ui.Players.md)
* ##### playlists: typeof [PlaylistDirectory](../classes/foundry.applications.sidebar.tabs.PlaylistDirectory.md)
* ##### scenes: typeof [SceneDirectory](../classes/foundry.applications.sidebar.tabs.SceneDirectory.md)
* ##### settings: typeof [Settings](../classes/foundry.applications.sidebar.tabs.Settings.md)
* ##### sidebar: typeof [Sidebar](../classes/foundry.applications.sidebar.Sidebar.md)
* ##### tables: typeof [RollTableDirectory](../classes/foundry.applications.sidebar.tabs.RollTableDirectory.md)
* ##### webrtc: typeof [CameraViews](../classes/foundry.applications.apps.av.CameraViews.md)