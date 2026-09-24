---
title: "getProseMirrorMenuDropDowns | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getProseMirrorMenuDropDowns.html"
category: "functions"
---

# Function getProseMirrorMenuDropDowns

* getProseMirrorMenuDropDowns(  
  Â Â Â Â menu: [ProseMirrorMenu](../classes/foundry.prosemirror.ProseMirrorMenu.md),  
  Â Â Â Â config: {  
  Â Â Â Â Â Â Â Â fonts: [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md);  
  Â Â Â Â Â Â Â Â format: [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md);  
  Â Â Â Â },  
  ): void

  A hook even that fires when a ProseMirrorMenu's drop-downs are initialized.
  The hook provides the ProseMirrorMenu instance and an object of drop-down configuration data.
  Hooked functions may append their own drop-downs or append entries to existing drop-downs.

  #### Parameters

  + menu: [ProseMirrorMenu](../classes/foundry.prosemirror.ProseMirrorMenu.md)

    The ProseMirrorMenu instance.
  + config: { fonts: [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md); format: [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md) }

    The drop-down config.

  #### Returns void