---
title: "JournalEntryData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.JournalEntryData.html"
category: "interfaces"
---

# Interface JournalEntryData

interface JournalEntryData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [categories](#categories): [JournalEntryCategoryData](foundry.documents.types.JournalEntryCategoryData.md)[];  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [pages](#pages): [JournalEntryPageData](foundry.documents.types.JournalEntryPageData.md)[];  
Â Â Â Â [sort](#sort)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[categories](#categories)
[flags](#flags)
[folder](#folder)
[name](#name)
[ownership?](#ownership)
[pages](#pages)
[sort?](#sort)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this JournalEntry document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### categories

categories: [JournalEntryCategoryData](foundry.documents.types.JournalEntryCategoryData.md)[]

The categories contained within this JournalEntry.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this JournalEntry

### name

name: string

The name of this JournalEntry

### `Optional`ownership

ownership?: object

An object which configures ownership of this JournalEntry

### pages

pages: [JournalEntryPageData](foundry.documents.types.JournalEntryPageData.md)[]

The pages contained within this JournalEntry document

### `Optional`sort

sort?: number

The numeric sort value which orders this JournalEntry
relative to its siblings