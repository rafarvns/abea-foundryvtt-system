---
title: "EnrichmentOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.EnrichmentOptions.html"
category: "interfaces"
---

# Interface EnrichmentOptions

interface EnrichmentOptions {  
Â Â Â Â [custom](#custom)?: boolean;  
Â Â Â Â [documents](#documents)?: boolean;  
Â Â Â Â [embeds](#embeds)?: boolean;  
Â Â Â Â [links](#links)?: boolean;  
Â Â Â Â [relativeTo](#relativeto)?: any;  
Â Â Â Â [rollData](#rolldata)?: object | Function;  
Â Â Â Â [rolls](#rolls)?: boolean;  
Â Â Â Â [secrets](#secrets)?: boolean;  
}

##### Index

### Properties

[custom?](#custom)
[documents?](#documents)
[embeds?](#embeds)
[links?](#links)
[relativeTo?](#relativeto)
[rollData?](#rolldata)
[rolls?](#rolls)
[secrets?](#secrets)

## Properties

### `Optional`custom

custom?: boolean

Apply custom enrichers?

### `Optional`documents

documents?: boolean

Replace dynamic document links?

### `Optional`embeds

embeds?: boolean

Replace embedded content?

### `Optional`links

links?: boolean

Replace hyperlink content?

### `Optional`relativeTo

relativeTo?: any

A document to resolve relative UUIDs against.

### `Optional`rollData

rollData?: object | Function

The data object providing context for inline rolls, or a function that
produces it.

### `Optional`rolls

rolls?: boolean

Replace inline dice rolls?

### `Optional`secrets

secrets?: boolean

Include unrevealed secret tags in the final HTML? If false, unrevealed
secret blocks will be removed.