---
title: "preImportAdventure | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.preImportAdventure.html"
category: "functions"
---

# Function preImportAdventure

* preImportAdventure(  
  Â Â Â Â adventure: [documents](../modules/foundry.documents.md).[Adventure](../classes/foundry.documents.Adventure.md),  
  Â Â Â Â formData: object,  
  Â Â Â Â toCreate: Record<string, object[]>,  
  Â Â Â Â toUpdate: Record<string, object[]>,  
  ): boolean | void

  A hook event that fires when Adventure data is being prepared for import.
  Modules may return false from this hook to take over handling of the import workflow.

  #### Parameters

  + adventure: [documents](../modules/foundry.documents.md).[Adventure](../classes/foundry.documents.Adventure.md)

    The Adventure document from which content is being imported
  + formData: object

    Processed data from the importer form
  + toCreate: Record<string, object[]>

    Adventure data which needs to be created in the World
  + toUpdate: Record<string, object[]>

    Adventure data which needs to be updated in the World

  #### Returns boolean | void

  False to prevent the core software from handling the import