---
title: "AdventureData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AdventureData.html"
category: "interfaces"
---

# Interface AdventureData

interface AdventureData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [actors](#actors): [ActorData](foundry.documents.types.ActorData.md)[];  
Â Â Â Â [caption](#caption): string;  
Â Â Â Â [cards](#cards): [CardsData](foundry.documents.types.CardsData.md)[];  
Â Â Â Â [combats](#combats): [CombatData](foundry.documents.types.CombatData.md)[];  
Â Â Â Â [description](#description): string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folders](#folders): [FolderData](foundry.documents.types.FolderData.md)[];  
Â Â Â Â [img](#img): string;  
Â Â Â Â [items](#items): [ItemData](foundry.documents.types.ItemData.md)[];  
Â Â Â Â [journal](#journal): [JournalEntryData](foundry.documents.types.JournalEntryData.md)[];  
Â Â Â Â [macros](#macros): [MacroData](foundry.documents.types.MacroData.md)[];  
Â Â Â Â [name](#name): string;  
Â Â Â Â [playlists](#playlists): [PlaylistData](foundry.documents.types.PlaylistData.md)[];  
Â Â Â Â [scenes](#scenes): [SceneData](foundry.documents.types.SceneData.md)[];  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [tables](#tables): [RollTableData](foundry.documents.types.RollTableData.md)[];  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[actors](#actors)
[caption](#caption)
[cards](#cards)
[combats](#combats)
[description](#description)
[flags](#flags)
[folders](#folders)
[img](#img)
[items](#items)
[journal](#journal)
[macros](#macros)
[name](#name)
[playlists](#playlists)
[scenes](#scenes)
[sort](#sort)
[tables](#tables)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Adventure document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### actors

actors: [ActorData](foundry.documents.types.ActorData.md)[]

An array of included Actor documents

### caption

caption: string

A string caption displayed under the primary image banner

### cards

cards: [CardsData](foundry.documents.types.CardsData.md)[]

An array of included Cards documents

### combats

combats: [CombatData](foundry.documents.types.CombatData.md)[]

An array of included Combat documents

### description

description: string

An HTML text description for the adventure

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folders

folders: [FolderData](foundry.documents.types.FolderData.md)[]

An array of included Folder documents

### img

img: string

The file path for the primary image of the adventure

### items

items: [ItemData](foundry.documents.types.ItemData.md)[]

An array of included Item documents

### journal

journal: [JournalEntryData](foundry.documents.types.JournalEntryData.md)[]

An array of included JournalEntry documents

### macros

macros: [MacroData](foundry.documents.types.MacroData.md)[]

An array of included Macro documents

### name

name: string

The human-readable name of the Adventure

### playlists

playlists: [PlaylistData](foundry.documents.types.PlaylistData.md)[]

An array of included Playlist documents

### scenes

scenes: [SceneData](foundry.documents.types.SceneData.md)[]

An array of included Scene documents

### sort

sort: number

The sort order of this adventure relative to its siblings

### tables

tables: [RollTableData](foundry.documents.types.RollTableData.md)[]

An array of included RollTable documents