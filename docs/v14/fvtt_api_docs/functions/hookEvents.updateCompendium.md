---
title: "updateCompendium | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.updateCompendium.html"
category: "functions"
---

# Function updateCompendium

* updateCompendium(  
  Â Â Â Â pack: [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<any>,  
  Â Â Â Â documents: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  A hook event that fires whenever the contents of a Compendium pack were modified.
  This hook fires for all connected clients after the update has been processed.

  #### Parameters

  + pack: [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<any>

    The Compendium pack being modified
  + documents: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The locally-cached Documents which were modified in the operation
  + options: object

    Additional options which modified the modification request
  + userId: string

    The ID of the User who triggered the modification workflow

  #### Returns void