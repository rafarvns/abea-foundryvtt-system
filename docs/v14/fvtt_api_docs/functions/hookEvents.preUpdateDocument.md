---
title: "preUpdateDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preUpdateDocument.html"
category: "functions"
---

# Function preUpdateDocument

* preUpdateDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â changed: object,  
  Â Â Â Â options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>,  
  Â Â Â Â userId: string,  
  ): boolean | void

  A hook event that fires for every Document type before execution of an update workflow. Substitute the Document
  name in the hook event to target a specific Document type, for example "preUpdateActor". This hook only fires
  for the client who is initiating the update request.

  The hook provides the differential data which will be used to update the Document. Hooked functions may modify
  that data or prevent the workflow entirely by explicitly returning false.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The Document instance being updated
  + changed: object

    Differential data that will be used to update the document
  + options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>

    Additional options which modify the update request
  + userId: string

    The ID of the requesting user, always [game.user.id](http://game.user.id)

  #### Returns boolean | void

  Explicitly return false to prevent update of this Document