---
title: "createDocument | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.createDocument.html"
category: "functions"
---

# Function createDocument

* createDocument(  
  Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options: Partial<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)>,  
  Â Â Â Â userId: string,  
  ): void

  A hook event that fires for every embedded Document type after conclusion of a creation workflow.
  Substitute the Document name in the hook event to target a specific type, for example "createToken".
  This hook fires for all connected clients after the creation has been processed.

  #### Parameters

  + document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The new Document instance which has been created
  + options: Partial<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)>

    Additional options which modified the creation request
  + userId: string

    The ID of the User who triggered the creation workflow

  #### Returns void