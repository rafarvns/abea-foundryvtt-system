---
title: "moveToken | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.moveToken.html"
category: "functions"
---

# Function moveToken

* moveToken(  
  Â Â Â Â document: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
  Â Â Â Â movement: [TokenMovementOperation](../interfaces/foundry.documents.types.TokenMovementOperation.md),  
  Â Â Â Â operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>,  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md),  
  ): void

  A hook event that fires for every Token document that was moved after conclusion of an update
  workflow. This hook fires for all connected clients after the update has been processed.

  #### Parameters

  + document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)

    The existing Token document which was updated
  + movement: [TokenMovementOperation](../interfaces/foundry.documents.types.TokenMovementOperation.md)

    The movement of the Token
  + operation: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>

    The update operation that contains the movement
  + user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md)

    The User that requested the update operation

  #### Returns void