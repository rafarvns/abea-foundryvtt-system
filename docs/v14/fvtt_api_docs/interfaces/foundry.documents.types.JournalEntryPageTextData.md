---
title: "JournalEntryPageTextData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.JournalEntryPageTextData.html"
category: "interfaces"
---

# Interface JournalEntryPageTextData

interface JournalEntryPageTextData {  
Â Â Â Â [content](#content)?: string;  
Â Â Â Â [format](#format): number;  
Â Â Â Â [markdown](#markdown)?: string;  
}

##### Index

### Properties

[content?](#content)
[format](#format)
[markdown?](#markdown)

## Properties

### `Optional`content

content?: string

The content of the JournalEntryPage in a format appropriate for its type.

### format

format: number

The format of the page's content, in CONST.JOURNAL\_ENTRY\_PAGE\_FORMATS.

### `Optional`markdown

markdown?: string

The original markdown source, if applicable.