---
title: "CombatantData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.CombatantData.html"
category: "interfaces"
---

# Interface CombatantData

interface CombatantData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [actorId](#actorid)?: string;  
Â Â Â Â [defeated](#defeated)?: boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [group](#group)?: string;  
Â Â Â Â [hidden](#hidden)?: boolean;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [initiative](#initiative)?: number;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [roundJoined](#roundjoined): number;  
Â Â Â Â [system](#system)?: object;  
Â Â Â Â [tokenId](#tokenid)?: string;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[actorId?](#actorid)
[defeated?](#defeated)
[flags](#flags)
[group?](#group)
[hidden?](#hidden)
[img?](#img)
[initiative?](#initiative)
[name?](#name)
[roundJoined](#roundjoined)
[system?](#system)
[tokenId?](#tokenid)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Combatant embedded document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information.

### `Optional`actorId

actorId?: string

The \_id of an Actor associated with this Combatant

### `Optional`defeated

defeated?: boolean

Has this Combatant been defeated?

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`group

group?: string

An optional group this Combatant belongs to.

### `Optional`hidden

hidden?: boolean

Is this Combatant currently hidden?

### `Optional`img

img?: string

A customized image which replaces the Token image in the tracker

### `Optional`initiative

initiative?: number

The initiative score for the Combatant which determines its turn order

### `Optional`name

name?: string

A customized name which replaces the name of the Token in the tracker

### roundJoined

roundJoined: number

The round this Combatant joined Combat (i.e., was created). A Combatant
created before the Combat starts is considered to have joined in round 1.

### `Optional`system

system?: object

Game system data which is defined by system data models.

### `Optional`tokenId

tokenId?: string

The \_id of a Token associated with this Combatant

### type

type: string

The type of this Combatant.