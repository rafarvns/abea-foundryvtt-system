---
title: "deleteDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.deleteDocument.html"
category: "functions"
---

# Function deleteDocument

* deleteDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options: Partial<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)>,  
  Â Â Â Â userId: string,  
  ): void

  A hook event that fires for every Document type after conclusion of an deletion workflow.
  Substitute the Document name in the hook event to target a specific Document type, for example "deleteActor".
  This hook fires for all connected clients after the deletion has been processed.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The existing Document which was deleted
  + options: Partial<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)>

    Additional options which modified the deletion request
  + userId: string

    The ID of the User who triggered the deletion workflow

  #### Returns void