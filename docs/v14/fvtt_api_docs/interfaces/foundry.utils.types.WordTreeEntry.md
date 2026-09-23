---
title: "WordTreeEntry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.utils.types.WordTreeEntry.html"
category: "interfaces"
---

# Interface WordTreeEntry

A leaf entry in the tree.

interface WordTreeEntry {  
Â Â Â Â [documentName](#documentname): string;  
Â Â Â Â [entry](#entry): object;  
Â Â Â Â [pack](#pack)?: string;  
Â Â Â Â [uuid](#uuid): string;  
}

##### Index

### Properties

[documentName](#documentname)
[entry](#entry)
[pack?](#pack)
[uuid](#uuid)

## Properties

### documentName

documentName: string

The document type.

### entry

entry: object

An object that this entry represents.

### `Optional`pack

pack?: string

The pack ID.

### uuid

uuid: string

The document's UUID.