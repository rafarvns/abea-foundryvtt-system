---
title: "CombatantGroupData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.CombatantGroupData.html"
category: "interfaces"
---

# Interface CombatantGroupData

interface CombatantGroupData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [initiative](#initiative)?: number;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [system](#system)?: object;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[flags](#flags)
[img?](#img)
[initiative?](#initiative)
[name?](#name)
[ownership?](#ownership)
[system?](#system)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this CombatantGroup embedded document.

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags.

### `Optional`img

img?: string

A customized image which replaces the inferred group image.

### `Optional`initiative

initiative?: number

The initiative value that will be used for all group members.

### `Optional`name

name?: string

A customized name which replaces the inferred group name.

### `Optional`ownership

ownership?: object

An object which configures ownership of this group.

### `Optional`system

system?: object

Game system data which is defined by system data models.

### type

type: string

The type of this CombatantGroup.