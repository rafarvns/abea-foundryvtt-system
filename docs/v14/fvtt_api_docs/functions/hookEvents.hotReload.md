---
title: "hotReload | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.hotReload.html"
category: "functions"
---

# Function hotReload

* hotReload(data: [HotReloadData](../interfaces/foundry.types.HotReloadData.md)): void

  A hook event that fires when a package that is being watched by the hot reload system has a file changed.
  The hook provides the hot reload data related to the file change.
  Hooked functions may intercept the hot reload and prevent the core software from handling it by returning false.

  #### Parameters

  + data: [HotReloadData](../interfaces/foundry.types.HotReloadData.md)

    The hot reload data

  #### Returns void