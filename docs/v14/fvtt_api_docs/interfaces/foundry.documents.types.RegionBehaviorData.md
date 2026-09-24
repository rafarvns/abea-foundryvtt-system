---
title: "RegionBehaviorData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionBehaviorData.html"
category: "interfaces"
---

# Interface RegionBehaviorData

interface RegionBehaviorData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [disabled](#disabled)?: boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [system](#system): object;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[disabled?](#disabled)
[flags](#flags)
[name?](#name)
[system](#system)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this RegionBehavior document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`disabled

disabled?: boolean

Is the RegionBehavior currently disabled?

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`name

name?: string

The name used to describe the RegionBehavior

### system

system: object

Data for a RegionBehavior subtype, defined by a System or Module

### type

type: string

An RegionBehavior subtype which configures the system data model applied