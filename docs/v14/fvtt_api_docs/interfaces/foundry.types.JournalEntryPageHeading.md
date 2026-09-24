---
title: "JournalEntryPageHeading | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.JournalEntryPageHeading.html"
category: "interfaces"
---

# Interface JournalEntryPageHeading

interface JournalEntryPageHeading {  
Â Â Â Â [children](#children): string[];  
Â Â Â Â [element](#element)?: HTMLHeadingElement;  
Â Â Â Â [level](#level): number;  
Â Â Â Â [order](#order): number;  
Â Â Â Â [slug](#slug): string;  
Â Â Â Â [text](#text): string;  
}

##### Index

### Properties

[children](#children)
[element?](#element)
[level](#level)
[order](#order)
[slug](#slug)
[text](#text)

## Properties

### children

children: string[]

Any child headings of this one.

### `Optional`element

element?: HTMLHeadingElement

The currently rendered element for this heading, if it exists.

### level

level: number

The heading level, 1-6.

### order

order: number

The linear ordering of the heading in the table of contents.

### slug

slug: string

The generated slug for this heading.

### text

text: string

The raw heading text with any internal tags omitted.