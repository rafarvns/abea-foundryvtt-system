---
title: "AdventureImportResult | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AdventureImportResult.html"
category: "interfaces"
---

# Interface AdventureImportResult

A report of the world Document instances that were created or updated during the import process.

interface AdventureImportResult {  
Â Â Â Â [created](#created): Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>;  
Â Â Â Â [importedTime](#importedtime): number;  
Â Â Â Â [updated](#updated): Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>;  
}

##### Index

### Properties

[created](#created)
[importedTime](#importedtime)
[updated](#updated)

## Properties

### created

created: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

Documents created as a result of the import, grouped by document name

### importedTime

importedTime: number

The server-side timestamp when the content was imported.

### updated

updated: Record<string, [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

Documents updated as a result of the import, grouped by document name