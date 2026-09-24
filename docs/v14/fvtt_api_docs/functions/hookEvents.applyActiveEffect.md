---
title: "applyActiveEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.applyActiveEffect.html"
category: "functions"
---

# Function applyActiveEffect

* applyActiveEffect(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md),  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  Â Â Â Â current: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â changes: object,  
  ): void

  A hook event that fires when a custom active effect is applied.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md)

    The actor the active effect is being applied to
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md)

    The change data being applied
  + current: any

    The current value being modified
  + delta: any

    The parsed value of the change object
  + changes: object

    An object which accumulates changes to be applied

  #### Returns void