---
title: "_StatusEffectConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG._StatusEffectConfig.html"
category: "interfaces"
---

# Interface \_StatusEffectConfig

interface \_StatusEffectConfig {  
Â Â Â Â [hud](#hud)?: boolean | { actorTypes?: string[] };  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [label](#label)?: string;  
Â Â Â Â [order](#order)?: number;  
}

##### Index

### Properties

[hud?](#hud)
[icon?](#icon)
[id](#id)
[label?](#label)
[order?](#order)

## Properties

### `Optional`hud

hud?: boolean | { actorTypes?: string[] }

Should this effect appear in the Token HUD?
This effect is only selectable in the Token HUD if the Token's
Actor sub-type is one of the configured ones.

### `Optional`icon

icon?: string

DEPRECATED alias for "img".

### id

id: string

A string identifier for the effect.

### `Optional`label

label?: string

DEPRECATED alias for "name".

### `Optional`order

order?: number

An integer indicating the order