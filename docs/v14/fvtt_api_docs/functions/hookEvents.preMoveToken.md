---
title: "preMoveToken | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preMoveToken.html"
category: "functions"
---

# Function preMoveToken

* preMoveToken(  
  Â Â Â Â document: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
  Â Â Â Â movement: [TokenPreMovementOperation](../interfaces/foundry.documents.types.TokenPreMovementOperation.md),  
  Â Â Â Â operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): boolean | void

  A hook event that fires for every Token document that is about to me moved before the conclusion of
  an update workflow. This hook only fires for the client who is initiating the update request.
  The waypoints of the movement are final and cannot be changed. The movement can only be rejected
  entirely by explicitly returning false. The ONLY writable properties of `movement` are `autoRotate`
  and `showRuler`.

  #### Parameters

  + document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)

    The existing Token document which is updated
  + movement: [TokenPreMovementOperation](../interfaces/foundry.documents.types.TokenPreMovementOperation.md)

    The pending movement of the Token
  + operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>

    The update operation that contains the movement

  #### Returns boolean | void

  If false, the movement is prevented