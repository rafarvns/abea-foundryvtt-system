---
title: "setup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.setup.html"
category: "functions"
---

# Function setup

* setup(): void

  A hook event that fires once when Foundry has finished initializing but before the game state has been set up.
  Fires after all Documents are initialized, including Settings (you cannot read settings prior to this hook),
  but before the UI applications or Canvas have been initialized.
  Runs after [`i18nInit`](hookEvents.i18nInit.md) but before [`ready`](hookEvents.ready.md).

  #### Returns void