---
title: "preCreateDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preCreateDocument.html"
category: "functions"
---

# Function preCreateDocument

* preCreateDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â data: object,  
  Â Â Â Â options: Partial<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)>,  
  Â Â Â Â userId: string,  
  ): boolean | void

  A hook event that fires for every Document type before execution of a creation workflow. Substitute the
  Document name in the hook event to target a specific Document type, for example "preCreateActor". This hook
  only fires for the client who is initiating the creation request.

  The hook provides the pending document instance which will be used for the Document creation. Hooked functions
  may modify the pending document with updateSource, or prevent the workflow entirely by returning false.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The pending document which is requested for creation
  + data: object

    The initial data object provided to the document creation request
  + options: Partial<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)>

    Additional options which modify the creation request
  + userId: string

    The ID of the requesting user, always [game.user.id](http://game.user.id)

  #### Returns boolean | void

  Explicitly return false to prevent creation of this Document