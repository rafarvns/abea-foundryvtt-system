---
title: "importAdventure | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.importAdventure.html"
category: "functions"
---

# Function importAdventure

* importAdventure(  
  Â Â Â Â adventure: [documents](../modules/foundry.documents.md).[Adventure](../classes/foundry.documents.Adventure.md),  
  Â Â Â Â formData: object,  
  Â Â Â Â created: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>,  
  Â Â Â Â updated: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>,  
  ): void

  A hook event that fires after an Adventure has been imported into the World.

  #### Parameters

  + adventure: [documents](../modules/foundry.documents.md).[Adventure](../classes/foundry.documents.Adventure.md)

    The Adventure document from which content is being imported
  + formData: object

    Processed data from the importer form
  + created: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

    Documents which were created in the World
  + updated: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

    Documents which were updated in the World

  #### Returns void