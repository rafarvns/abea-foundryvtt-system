---
title: "ActiveEffectData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ActiveEffectData.html"
category: "interfaces"
---

# Interface ActiveEffectData

interface ActiveEffectData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [changes](#changes): [EffectChangeData](foundry.documents.types.EffectChangeData.md)[];  
Â Â Â Â [description](#description): string;  
Â Â Â Â [disabled](#disabled): boolean;  
Â Â Â Â [duration](#duration): [EffectDurationData](foundry.documents.types.EffectDurationData.md);  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [img](#img): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [origin](#origin): string;  
Â Â Â Â [showIcon](#showicon): 0 | 1 | 2;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [start](#start): [EffectStartData](foundry.documents.types.EffectStartData.md);  
Â Â Â Â [statuses](#statuses): string[];  
Â Â Â Â [system](#system): object;  
Â Â Â Â [tint](#tint): string;  
Â Â Â Â [transfer](#transfer): boolean;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[\_id](#_id)
[changes](#changes)
[description](#description)
[disabled](#disabled)
[duration](#duration)
[flags](#flags)
[img](#img)
[name](#name)
[origin](#origin)
[showIcon](#showicon)
[sort](#sort)
[start](#start)
[statuses](#statuses)
[system](#system)
[tint](#tint)
[transfer](#transfer)
[type](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies the ActiveEffect within a parent Actor or
Item

### changes

changes: [EffectChangeData](foundry.documents.types.EffectChangeData.md)[]

The array of EffectChangeData objects which the ActiveEffect applies

### description

description: string

The HTML text description for this ActiveEffect document.

### disabled

disabled: boolean

Is this ActiveEffect currently disabled? Defaults to false.

### duration

duration: [EffectDurationData](foundry.documents.types.EffectDurationData.md)

An EffectDurationData object which describes the duration of the
ActiveEffect

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### img

img: string

An icon image path used to depict the ActiveEffect

### name

name: string

The name which describes the ActiveEffect

### origin

origin: string

A UUID reference to the document from which this ActiveEffect originated

### showIcon

showIcon: 0 | 1 | 2

Should this ActiveEffect's image be prominently displayed as an icon
alongside Tokens, Combatants, etc.? Defaults to a CONDITIONAL (1).

### sort

sort: number

The sort value. Defaults to 0.

### start

start: [EffectStartData](foundry.documents.types.EffectStartData.md)

Data pertaining to when the ActiveEffect was created.

### statuses

statuses: string[]

Special status IDs that pertain to this effect

### system

system: object

The system type data field

### tint

tint: string

A color string which applies a tint to the ActiveEffect icon. Defaults to
"#FFFFFF".

### transfer

transfer: boolean

Does this ActiveEffect automatically transfer from an Item to an Actor?

### type

type: string

The document type