---
title: "tearDownGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.tearDownGroup.html"
category: "functions"
---

# Function tearDownGroup

* tearDownGroup(group: CanvasGroup, options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): void

  A hook event that fires when a CanvasGroup is deconstructed.
  The dispatched event name replaces "Group" with the named CanvasGroup subclass, i.e. "tearDownPrimaryCanvasGroup".

  #### Parameters

  + group: CanvasGroup

    The group being deconstructed.
  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the group is deconstructed.

  #### Returns void