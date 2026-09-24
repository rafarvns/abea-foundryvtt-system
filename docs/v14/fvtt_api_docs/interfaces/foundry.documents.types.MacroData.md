---
title: "MacroData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.MacroData.html"
category: "interfaces"
---

# Interface MacroData

interface MacroData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [author](#author): string | null;  
Â Â Â Â [command](#command): string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [scope](#scope)?: string;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[author](#author)
[command](#command)
[flags](#flags)
[folder](#folder)
[img?](#img)
[name](#name)
[ownership?](#ownership)
[scope?](#scope)
[sort?](#sort)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Macro document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### author

author: string | null

The \_id of a User document which created this Macro

### command

command: string

The string content of the macro command

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this Macro

### `Optional`img

img?: string

An image file path which provides the thumbnail artwork for this Macro

### name

name: string

The name of this Macro

### `Optional`ownership

ownership?: object

An object which configures ownership of this Macro

### `Optional`scope

scope?: string

The scope of this Macro application from CONST.MACRO\_SCOPES

### `Optional`sort

sort?: number

The numeric sort value which orders this Macro relative to its siblings

### type

type: string

A Macro subtype from CONST.MACRO\_TYPES