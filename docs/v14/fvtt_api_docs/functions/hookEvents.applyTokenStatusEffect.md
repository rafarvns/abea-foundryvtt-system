---
title: "applyTokenStatusEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.applyTokenStatusEffect.html"
category: "functions"
---

# Function applyTokenStatusEffect

* applyTokenStatusEffect(  
  Â Â Â Â token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md),  
  Â Â Â Â statusId: string,  
  Â Â Â Â active: boolean,  
  ): void

  A hook event that fires when a token [foundry.canvas.placeables.Token](../classes/foundry.canvas.placeables.Token.md) should apply a specific status effect.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)

    The token affected.
  + statusId: string

    The status effect ID being applied, from CONFIG.specialStatusEffects.
  + active: boolean

    Is the special status effect now active?

  #### Returns void