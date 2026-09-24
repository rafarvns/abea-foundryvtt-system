---
title: "RollTableData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RollTableData.html"
category: "interfaces"
---

# Interface RollTableData

interface RollTableData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [description](#description)?: string;  
Â Â Â Â [displayRoll](#displayroll)?: boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [formula](#formula): string;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [replacement](#replacement)?: boolean;  
Â Â Â Â [results](#results)?: [TableResultData](foundry.documents.types.TableResultData.md)[];  
Â Â Â Â [sort](#sort)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[description?](#description)
[displayRoll?](#displayroll)
[flags](#flags)
[folder](#folder)
[formula](#formula)
[img?](#img)
[name](#name)
[ownership?](#ownership)
[replacement?](#replacement)
[results?](#results)
[sort?](#sort)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this RollTable document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`description

description?: string

The HTML text description for this RollTable document

### `Optional`displayRoll

displayRoll?: boolean

Is the Roll result used to draw from this RollTable displayed in chat?

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this RollTable

### formula

formula: string

The Roll formula which determines the results chosen from the table

### `Optional`img

img?: string

An image file path which provides the thumbnail artwork for this RollTable

### name

name: string

The name of this RollTable

### `Optional`ownership

ownership?: object

An object which configures ownership of this RollTable

### `Optional`replacement

replacement?: boolean

Are results from this table drawn with replacement?

### `Optional`results

results?: [TableResultData](foundry.documents.types.TableResultData.md)[]

A Collection of TableResult embedded documents which belong to
this RollTable

### `Optional`sort

sort?: number

The numeric sort value which orders this RollTable relative to its siblings