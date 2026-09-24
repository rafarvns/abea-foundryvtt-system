---
title: "updateDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.updateDocument.html"
category: "functions"
---

# Function updateDocument

* updateDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â changed: object,  
  Â Â Â Â options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>,  
  Â Â Â Â userId: string,  
  ): void

  A hook event that fires for every Document type after conclusion of an update workflow.
  Substitute the Document name in the hook event to target a specific Document type, for example "updateActor".
  This hook fires for all connected clients after the update has been processed.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The existing Document which was updated
  + changed: object

    Differential data that was used to update the document
  + options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)>

    Additional options which modified the update request
  + userId: string

    The ID of the User who triggered the update workflow

  #### Returns void