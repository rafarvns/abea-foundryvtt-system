---
title: "AdventurePostImportCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.documents.types.AdventurePostImportCallback.html"
category: "types"
---

# Type Alias AdventurePostImportCallback

AdventurePostImportCallback: (  
Â Â Â Â result: [AdventureImportResult](../interfaces/foundry.documents.types.AdventureImportResult.md),  
Â Â Â Â options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md),  
) => Promise<void>

A callback function that is invoked and awaited after import but before the overall import workflow concludes.
This can be used to perform additional custom adventure setup steps.

#### Type Declaration

* + (result: [AdventureImportResult](../interfaces/foundry.documents.types.AdventureImportResult.md), options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md)): Promise<void>
  + #### Parameters

    - result: [AdventureImportResult](../interfaces/foundry.documents.types.AdventureImportResult.md)
    - options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md)

    #### Returns Promise<void>