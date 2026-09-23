---
title: "JournalEntryPageData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.JournalEntryPageData.html"
category: "interfaces"
---

# Interface JournalEntryPageData

interface JournalEntryPageData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [category](#category)?: string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [image](#image): [JournalEntryPageImageData](foundry.documents.types.JournalEntryPageImageData.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [src](#src)?: string;  
Â Â Â Â [system](#system): object;  
Â Â Â Â [text](#text): [JournalEntryPageTextData](foundry.documents.types.JournalEntryPageTextData.md);  
Â Â Â Â [title](#title): [JournalEntryPageTitleData](foundry.documents.types.JournalEntryPageTitleData.md);  
Â Â Â Â [type](#type): string;  
Â Â Â Â [video](#video): [JournalEntryPageVideoData](foundry.documents.types.JournalEntryPageVideoData.md);  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[category?](#category)
[flags](#flags)
[image](#image)
[name](#name)
[ownership?](#ownership)
[sort](#sort)
[src?](#src)
[system](#system)
[text](#text)
[title](#title)
[type](#type)
[video](#video)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this JournalEntryPage embedded document.

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`category

category?: string

An optional category that this page belongs to.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### image

image: [JournalEntryPageImageData](foundry.documents.types.JournalEntryPageImageData.md)

Data particular to image journal entry pages.

### name

name: string

The text name of this page.

### `Optional`ownership

ownership?: object

An object which configures the ownership of this page.

### sort

sort: number

The numeric sort value which orders this page relative to its siblings.

### `Optional`src

src?: string

The URI of the image or other external media to be used for this page.

### system

system: object

System-specific data.

### text

text: [JournalEntryPageTextData](foundry.documents.types.JournalEntryPageTextData.md)

Data particular to text journal entry pages.

### title

title: [JournalEntryPageTitleData](foundry.documents.types.JournalEntryPageTitleData.md)

Data that control's the display of this page's title.

### type

type: string

The type of this page.

### video

video: [JournalEntryPageVideoData](foundry.documents.types.JournalEntryPageVideoData.md)

Data particular to video journal entry pages.