---
title: "EmbeddedCollectionUpdateContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.EmbeddedCollectionUpdateContext.html"
category: "interfaces"
---

# Interface EmbeddedCollectionUpdateContext

interface EmbeddedCollectionUpdateContext {  
Â Â Â Â [collection](#collection): DocumentCollection;  
Â Â Â Â [diff](#diff): object[];  
Â Â Â Â [failure](#failure): DataModelValidationFailure;  
Â Â Â Â [isReplacement](#isreplacement): boolean;  
Â Â Â Â [newSource](#newsource): object[];  
Â Â Â Â [source](#source): object[];  
Â Â Â Â [state](#state): object;  
}

##### Index

### Properties

[collection](#collection)
[diff](#diff)
[failure](#failure)
[isReplacement](#isreplacement)
[newSource](#newsource)
[source](#source)
[state](#state)

## Properties

### collection

collection: DocumentCollection

The embedded collection on the parent Document.

### diff

diff: object[]

The accumulating diff array of changes.

### failure

failure: DataModelValidationFailure

The collection-level validation failure under construction.

### isReplacement

isReplacement: boolean

Whether the requested update is a ForcedReplacement.

### newSource

newSource: object[]

The replacement source array, same as source unless replacement.

### source

source: object[]

The current source array of the parent collection.

### state

state: object

The DataModel update state shared with the rest of \_updateDiff.