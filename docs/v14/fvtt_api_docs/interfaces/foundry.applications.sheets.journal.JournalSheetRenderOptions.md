---
title: "JournalSheetRenderOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.html"
category: "interfaces"
---

# Interface JournalSheetRenderOptions

interface JournalSheetRenderOptions {  
Â Â Â Â [anchor](#anchor)?: string;  
Â Â Â Â [mode](#mode)?: { MULTIPLE: number; SINGLE: number };  
Â Â Â Â [pageId](#pageid)?: string;  
Â Â Â Â [pageIndex](#pageindex)?: number;  
Â Â Â Â [renderContext](#rendercontext): string;  
Â Â Â Â [renderData](#renderdata): object;  
}

##### Index

### Properties

[anchor?](#anchor)
[mode?](#mode)
[pageId?](#pageid)
[pageIndex?](#pageindex)
[renderContext](#rendercontext)
[renderData](#renderdata)

## Properties

### `Optional`anchor

anchor?: string

Scroll to the specified heading in the given page.

### `Optional`mode

mode?: { MULTIPLE: number; SINGLE: number }

Render the journal sheet with the given page mode.

### `Optional`pageId

pageId?: string

Render the journal sheet at the page with this ID.

### `Optional`pageIndex

pageIndex?: number

Render the journal sheet at this page index.

### renderContext

renderContext: string

A string with the format "{operation}{documentName}" providing context

### renderData

renderData: object

Data describing the document modification that occurred