---
title: "FolderData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.FolderData.html"
category: "interfaces"
---

# Interface FolderData

interface FolderData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [color](#color)?: string | null;  
Â Â Â Â [description](#description): string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder)?: string | null;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [sorting](#sorting)?: string;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[color?](#color)
[description](#description)
[flags](#flags)
[folder?](#folder)
[name](#name)
[sort?](#sort)
[sorting?](#sorting)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Folder document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`color

color?: string | null

A color string used for the background color of this Folder

### description

description: string

An HTML description of the contents of this folder

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`folder

folder?: string | null

The \_id of a parent Folder which contains this Folder

### name

name: string

The name of this Folder

### `Optional`sort

sort?: number

The numeric sort value which orders this Folder relative to its siblings

### `Optional`sorting

sorting?: string

The sorting mode used to organize documents within this Folder, in ["a", "m"]

### type

type: string

The document type which this Folder contains, from CONST.FOLDER\_DOCUMENT\_TYPES