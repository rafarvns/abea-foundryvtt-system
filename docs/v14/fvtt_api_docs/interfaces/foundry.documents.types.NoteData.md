---
title: "NoteData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.NoteData.html"
category: "interfaces"
---

# Interface NoteData

interface NoteData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [entryId](#entryid)?: string | null;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [fontFamily](#fontfamily)?: string;  
Â Â Â Â [fontSize](#fontsize)?: number;  
Â Â Â Â [global](#global)?: boolean;  
Â Â Â Â [iconSize](#iconsize)?: number;  
Â Â Â Â [pageId](#pageid)?: string | null;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [text](#text)?: string;  
Â Â Â Â [textAnchor](#textanchor)?: number;  
Â Â Â Â [textColor](#textcolor)?: string;  
Â Â Â Â [texture](#texture)?: [TextureData](../classes/foundry.data.TextureData.md);  
Â Â Â Â [x](#x)?: number;  
Â Â Â Â [y](#y)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[elevation?](#elevation)
[entryId?](#entryid)
[flags](#flags)
[fontFamily?](#fontfamily)
[fontSize?](#fontsize)
[global?](#global)
[iconSize?](#iconsize)
[pageId?](#pageid)
[sort?](#sort)
[text?](#text)
[textAnchor?](#textanchor)
[textColor?](#textcolor)
[texture?](#texture)
[x?](#x)
[y?](#y)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this BaseNote embedded document

### `Optional`elevation

elevation?: number

The elevation

### `Optional`entryId

entryId?: string | null

The \_id of a JournalEntry document which this Note represents

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`fontFamily

fontFamily?: string

The font family used to display the text label on this note, defaults to
CONFIG.defaultFontFamily

### `Optional`fontSize

fontSize?: number

The font size used to display the text label on this note

### `Optional`global

global?: boolean

Whether this map pin is globally visible or requires LoS to see.

### `Optional`iconSize

iconSize?: number

The pixel size of the map note icon

### `Optional`pageId

pageId?: string | null

The \_id of a specific JournalEntryPage document which this Note represents

### `Optional`sort

sort?: number

The sort order

### `Optional`text

text?: string

Optional text which overrides the title of the linked Journal Entry

### `Optional`textAnchor

textAnchor?: number

A value in CONST.TEXT\_ANCHOR\_POINTS which defines where the text label anchors
to the note icon.

### `Optional`textColor

textColor?: string

The string that defines the color with which the note text is rendered

### `Optional`texture

texture?: [TextureData](../classes/foundry.data.TextureData.md)

An image icon used to represent this note

### `Optional`x

x?: number

The x-coordinate position of the center of the note icon

### `Optional`y

y?: number

The y-coordinate position of the center of the note icon