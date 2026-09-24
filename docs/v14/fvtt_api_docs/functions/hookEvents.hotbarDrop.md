---
title: "hotbarDrop | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.hotbarDrop.html"
category: "functions"
---

# Function hotbarDrop

* hotbarDrop(hotbar: [Hotbar](../classes/foundry.applications.ui.Hotbar.md), data: object, slot: number): void

  A hook event that fires whenever data is dropped into a Hotbar slot.
  The hook provides a reference to the Hotbar application, the dropped data, and the target slot.
  Default handling of the drop event can be prevented by returning false within the hooked function.

  #### Parameters

  + hotbar: [Hotbar](../classes/foundry.applications.ui.Hotbar.md)

    The Hotbar application instance
  + data: object

    The dropped data object
  + slot: number

    The target hotbar slot

  #### Returns void