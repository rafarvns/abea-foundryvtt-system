---
title: "AdventureImportOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AdventureImportOptions.html"
category: "interfaces"
---

# Interface AdventureImportOptions

Options which customize how the adventure import process is orchestrated.
Modules can use the preImportAdventure hook to extend these options by adding preImport or postImport callbacks.

interface AdventureImportOptions {  
Â Â Â Â [dialog](#dialog)?: boolean;  
Â Â Â Â [importFields](#importfields)?: string[];  
Â Â Â Â [postImport](#postimport)?: [AdventurePostImportCallback](../types/foundry.documents.types.AdventurePostImportCallback.md)[];  
Â Â Â Â [preImport](#preimport)?: [AdventurePreImportCallback](../types/foundry.documents.types.AdventurePreImportCallback.md)[];  
}

##### Index

### Properties

[dialog?](#dialog)
[importFields?](#importfields)
[postImport?](#postimport)
[preImport?](#preimport)

## Properties

### `Optional`dialog

dialog?: boolean

Display a warning dialog if existing documents would be overwritten

### `Optional`importFields

importFields?: string[]

A subset of adventure fields to import

### `Optional`postImport

postImport?: [AdventurePostImportCallback](../types/foundry.documents.types.AdventurePostImportCallback.md)[]

An array of awaited post-import callbacks

### `Optional`preImport

preImport?: [AdventurePreImportCallback](../types/foundry.documents.types.AdventurePreImportCallback.md)[]

An array of awaited pre-import callbacks