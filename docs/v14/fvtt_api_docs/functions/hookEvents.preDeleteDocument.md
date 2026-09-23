---
title: "preDeleteDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preDeleteDocument.html"
category: "functions"
---

# Function preDeleteDocument

* preDeleteDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options: Partial<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)>,  
  Â Â Â Â userId: string,  
  ): boolean | void

  A hook event that fires for every Document type before execution of a deletion workflow. Substitute the
  Document name in the hook event to target a specific Document type, for example "preDeleteActor". This hook
  only fires for the client who is initiating the update request.

  The hook provides the Document instance which is requested for deletion. Hooked functions may prevent the
  workflow entirely by explicitly returning false.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The Document instance being deleted
  + options: Partial<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)>

    Additional options which modify the deletion request
  + userId: string

    The ID of the requesting user, always [game.user.id](http://game.user.id)

  #### Returns boolean | void

  Explicitly return false to prevent deletion of this Document