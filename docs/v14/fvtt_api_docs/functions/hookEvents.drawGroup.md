---
title: "drawGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.drawGroup.html"
category: "functions"
---

# Function drawGroup

* drawGroup(group: CanvasGroup, options: object): void

  A hook event that fires when a CanvasGroup is drawn.
  The dispatched event name replaces "Group" with the named CanvasGroup subclass, i.e. "drawPrimaryCanvasGroup".

  #### Parameters

  + group: CanvasGroup

    The group being drawn.
  + options: object

    Options which configure how the group is drawn.

  #### Returns void