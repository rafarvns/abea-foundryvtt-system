---
title: "DocumentCloneOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DocumentCloneOptions.html"
category: "interfaces"
---

# Interface DocumentCloneOptions

interface DocumentCloneOptions {  
Â Â Â Â [addSource](#addsource)?: boolean;  
Â Â Â Â [discardInvalidEmbedded](#discardinvalidembedded)?: boolean;  
Â Â Â Â [keepId](#keepid)?: boolean;  
Â Â Â Â [save](#save)?: boolean;  
}

##### Index

### Properties

[addSource?](#addsource)
[discardInvalidEmbedded?](#discardinvalidembedded)
[keepId?](#keepid)
[save?](#save)

## Properties

### `Optional`addSource

addSource?: boolean

Track the clone source. Default: `false`.

### `Optional`discardInvalidEmbedded

discardInvalidEmbedded?: boolean

Discard invalid embedded documents from the source.
Not to be confused with `dropInvalidEmbedded`, which
does not discard the invalid embedded documents but
just prevents the document from being considered invalid
and drops invalid embedded documents during preparation.
Default: `false`.

### `Optional`keepId

keepId?: boolean

Keep the same ID of the original document. Default: `false`.

### `Optional`save

save?: boolean

Save the clone to the World database? Default: `false`.