---
title: "targetToken | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.targetToken.html"
category: "functions"
---

# Function targetToken

* targetToken(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md),  
  Â Â Â Â token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md),  
  Â Â Â Â targeted: boolean,  
  ): void

  A hook event that fires when a token is targeted or un-targeted.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md)

    The User doing the targeting
  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)

    The targeted Token
  + targeted: boolean

    Whether the Token has been targeted or untargeted

  #### Returns void