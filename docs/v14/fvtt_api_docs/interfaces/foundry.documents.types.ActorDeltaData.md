---
title: "ActorDeltaData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ActorDeltaData.html"
category: "interfaces"
---

# Interface ActorDeltaData

interface ActorDeltaData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [effects](#effects)?: [ActiveEffectData](foundry.documents.types.ActiveEffectData.md)[];  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [items](#items)?: [ItemData](foundry.documents.types.ItemData.md)[];  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [ownership](#ownership)?: object;  
Â Â Â Â [system](#system)?: object;  
Â Â Â Â [type](#type)?: string;  
}

##### Index

### Properties

[\_id](#_id)
[effects?](#effects)
[flags](#flags)
[img?](#img)
[items?](#items)
[name?](#name)
[ownership?](#ownership)
[system?](#system)
[type?](#type)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this ActorDelta document

### `Optional`effects

effects?: [ActiveEffectData](foundry.documents.types.ActiveEffectData.md)[]

An array of embedded active effect data overrides.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`img

img?: string

The image override, if any.

### `Optional`items

items?: [ItemData](foundry.documents.types.ItemData.md)[]

An array of embedded item data overrides.

### `Optional`name

name?: string

The name override, if any.

### `Optional`ownership

ownership?: object

Ownership overrides.

### `Optional`system

system?: object

The system data model override.

### `Optional`type

type?: string

The type override, if any.