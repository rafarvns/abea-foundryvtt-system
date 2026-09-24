---
title: "ItemData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ItemData.html"
category: "interfaces"
---

# Interface ItemData

interface ItemData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [effects](#effects): [ActiveEffectData](foundry.documents.types.ActiveEffectData.md)[];  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [system](#system): object;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[effects](#effects)
[flags](#flags)
[folder](#folder)
[img?](#img)
[name](#name)
[ownership?](#ownership)
[sort?](#sort)
[system](#system)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Item document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### effects

effects: [ActiveEffectData](foundry.documents.types.ActiveEffectData.md)[]

A collection of ActiveEffect embedded Documents

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this Item

### `Optional`img

img?: string

An image file path which provides the artwork for this Item

### name

name: string

The name of this Item

### `Optional`ownership

ownership?: object

An object which configures ownership of this Item

### `Optional`sort

sort?: number

The numeric sort value which orders this Item relative to its siblings

### system

system: object

Data for an Item subtype, defined by a System or Module

### type

type: string

An Item subtype which configures the system data model applied