---
title: "EffectChangeData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.EffectChangeData.html"
category: "interfaces"
---

# Interface EffectChangeData

interface EffectChangeData {  
Â Â Â Â [key](#key)?: string;  
Â Â Â Â [phase](#phase): string;  
Â Â Â Â [priority](#priority): number | null;  
Â Â Â Â [type](#type): string;  
Â Â Â Â [value](#value): string;  
}

##### Index

### Properties

[key?](#key)
[phase](#phase)
[priority](#priority)
[type](#type)
[value](#value)

## Properties

### `Optional`key

key?: string

The attribute path in the Actor or Item data which the change modifies

### phase

phase: string

The application phase under which this change is applied. Each phase is its own priority
group; that is, application of a change in an earlier phase will occur before a change in
a later phase, regardless of priority. A pair of phases are preconfigured, but a package
can add more phases to be called at different points during data preparation or on
certain events.

### priority

priority: number | null

The order in which this change is applied among other changes in a common phase: a
null value is initialized to its default priority.

### type

type: string

The modification type of this change

### value

value: string

The value of the change effect