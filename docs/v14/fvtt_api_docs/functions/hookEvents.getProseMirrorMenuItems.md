---
title: "getProseMirrorMenuItems | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getProseMirrorMenuItems.html"
category: "functions"
---

# Function getProseMirrorMenuItems

* getProseMirrorMenuItems(  
  Â Â Â Â menu: [ProseMirrorMenu](../classes/foundry.prosemirror.ProseMirrorMenu.md),  
  Â Â Â Â config: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[],  
  ): void

  A hook even that fires when a ProseMirrorMenu's buttons are initialized.
  The hook provides the ProseMirrorMenu instance and an array of button configuration data.
  Hooked functions may append their own buttons to the list.

  #### Parameters

  + menu: [ProseMirrorMenu](../classes/foundry.prosemirror.ProseMirrorMenu.md)

    The ProseMirrorMenu instance.
  + config: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[]

    The button configuration objects.

  #### Returns void