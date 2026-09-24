---
title: "JournalEntryCategoryData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.JournalEntryCategoryData.html"
category: "interfaces"
---

# Interface JournalEntryCategoryData

interface JournalEntryCategoryData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [sort](#sort)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[flags](#flags)
[name](#name)
[sort?](#sort)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this JournalEntryCategory document.

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### name

name: string

The name of this JournalEntryCategory.

### `Optional`sort

sort?: number

The numeric sort value which orders this category relative to other categories.