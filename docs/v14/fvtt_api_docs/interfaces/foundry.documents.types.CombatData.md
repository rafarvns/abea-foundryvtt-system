---
title: "CombatData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.CombatData.html"
category: "interfaces"
---

# Interface CombatData

interface CombatData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [combatants](#combatants): [CombatantData](foundry.documents.types.CombatantData.md)[];  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [groups](#groups): [CombatantGroupData](foundry.documents.types.CombatantGroupData.md)[];  
Â Â Â Â [round](#round)?: number;  
Â Â Â Â [scene](#scene): string;  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [system](#system)?: object;  
Â Â Â Â [turn](#turn)?: number | null;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[active?](#active)
[combatants](#combatants)
[flags](#flags)
[groups](#groups)
[round?](#round)
[scene](#scene)
[sort?](#sort)
[system?](#system)
[turn?](#turn)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Combat document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`active

active?: boolean

Is the Combat encounter currently active?

### combatants

combatants: [CombatantData](foundry.documents.types.CombatantData.md)[]

A Collection of Combatant embedded Documents

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### groups

groups: [CombatantGroupData](foundry.documents.types.CombatantGroupData.md)[]

A Collection of Documents that represent a grouping of individual
Combatants.

### `Optional`round

round?: number

The current round of the Combat encounter

### scene

scene: string

The \_id of a Scene within which this Combat occurs

### `Optional`sort

sort?: number

The current sort order of this Combat relative to others in the same Scene

### `Optional`system

system?: object

Game system data which is defined by system data models.

### `Optional`turn

turn?: number | null

The current turn in the Combat round

### type

type: string

The type of this Combat.