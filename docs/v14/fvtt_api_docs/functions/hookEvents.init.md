---
title: "init | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.init.html"
category: "functions"
---

# Function init

* init(): void

  A hook event that fires once as Foundry is initializing, right before any
  initialization tasks have begun. Most package registration calls should go in here,
  such as [`DocumentSheetConfig.registerSheet`](../classes/foundry.applications.apps.DocumentSheetConfig.md#registersheet), adjusting [`CONFIG`](../modules/CONFIG.md),
  and registering settings with [`game.settings.register`](../classes/foundry.helpers.ClientSettings.md#register).

  #### Returns void