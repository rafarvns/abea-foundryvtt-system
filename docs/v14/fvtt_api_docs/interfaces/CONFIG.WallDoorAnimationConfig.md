---
title: "WallDoorAnimationConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.WallDoorAnimationConfig.html"
category: "interfaces"
---

# Interface WallDoorAnimationConfig

interface WallDoorAnimationConfig {  
Â Â Â Â [animate](#animate): [WallDoorAnimationFunction](../types/CONFIG.WallDoorAnimationFunction.md);  
Â Â Â Â [duration](#duration): number;  
Â Â Â Â [easing](#easing)?: string | Function;  
Â Â Â Â [initialize](#initialize)?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md);  
Â Â Â Â [label](#label): string;  
Â Â Â Â [midpoint](#midpoint)?: boolean;  
Â Â Â Â [postAnimate](#postanimate)?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md);  
Â Â Â Â [preAnimate](#preanimate)?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md);  
}

##### Index

### Properties

[animate](#animate)
[duration](#duration)
[easing?](#easing)
[initialize?](#initialize)
[label](#label)
[midpoint?](#midpoint)
[postAnimate?](#postanimate)
[preAnimate?](#preanimate)

## Properties

### animate

animate: [WallDoorAnimationFunction](../types/CONFIG.WallDoorAnimationFunction.md)

### duration

duration: number

### `Optional`easing

easing?: string | Function

### `Optional`initialize

initialize?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md)

### label

label: string

### `Optional`midpoint

midpoint?: boolean

### `Optional`postAnimate

postAnimate?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md)

### `Optional`preAnimate

preAnimate?: [WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md)