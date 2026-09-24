---
title: "AdventurePreImportCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.documents.types.AdventurePreImportCallback.html"
category: "types"
---

# Type Alias AdventurePreImportCallback

AdventurePreImportCallback: (  
Â Â Â Â data: [AdventureImportData](../interfaces/foundry.documents.types.AdventureImportData.md),  
Â Â Â Â options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md),  
) => Promise<void>

A callback function that is invoked and awaited during import data preparation before the adventure import proceeds.
This can be used to perform custom pre-processing on the import data.

#### Type Declaration

* + (data: [AdventureImportData](../interfaces/foundry.documents.types.AdventureImportData.md), options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md)): Promise<void>
  + #### Parameters

    - data: [AdventureImportData](../interfaces/foundry.documents.types.AdventureImportData.md)
    - options: [AdventureImportOptions](../interfaces/foundry.documents.types.AdventureImportOptions.md)

    #### Returns Promise<void>