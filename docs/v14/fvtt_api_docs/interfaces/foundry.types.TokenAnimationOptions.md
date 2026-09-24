---
title: "TokenAnimationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenAnimationOptions.html"
category: "interfaces"
---

# Interface TokenAnimationOptions

interface TokenAnimationOptions {  
Â Â Â Â [action](#action)?: string;  
Â Â Â Â [chain](#chain)?: boolean;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [easing](#easing)?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
Â Â Â Â [movementSpeed](#movementspeed)?: number;  
Â Â Â Â [name](#name)?: string | symbol | null;  
Â Â Â Â [ontick](#ontick)?: (  
Â Â Â Â Â Â Â Â elapsedMS: number,  
Â Â Â Â Â Â Â Â animation: [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md),  
Â Â Â Â Â Â Â Â data: [TokenAnimationData](foundry.types.TokenAnimationData.md),  
Â Â Â Â ) => void;  
Â Â Â Â [speedMultiplier](#speedmultiplier)?: number;  
Â Â Â Â [terrain](#terrain)?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null;  
Â Â Â Â [transition](#transition)?: [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.md);  
}

##### Index

### Properties

[action?](#action)
[chain?](#chain)
[duration?](#duration)
[easing?](#easing)
[movementSpeed?](#movementspeed)
[name?](#name)
[ontick?](#ontick)
[speedMultiplier?](#speedmultiplier)
[terrain?](#terrain)
[transition?](#transition)

## Properties

### `Optional`action

action?: string

The movement action. Default: `this.document.movementAction`.

### `Optional`chain

chain?: boolean

Chain the animation to the existing one of the same name? Default: `false`.

### `Optional`duration

duration?: number

The duration of the animation in milliseconds (nonnegative).
Default: automatic (determined by
[foundry.canvas.placeables.Token#\_getAnimationDuration](../classes/foundry.canvas.placeables.Token.md#_getanimationduration),
which returns 1000 by default unless it's a movement animation).

### `Optional`easing

easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md)

The easing function of the animation.
Default: `undefined` (linear).

### `Optional`movementSpeed

movementSpeed?: number

A desired base movement speed in grid size per second (positive),
which determines the `duration` if the given `duration` is undefined and
either `x`, `y`, `width`, `height`, or `rotation` is animated.
Default: automatic (determined by
[foundry.canvas.placeables.Token#\_getAnimationMovementSpeed](../classes/foundry.canvas.placeables.Token.md#_getanimationmovementspeed)).

### `Optional`name

name?: string | symbol | null

The name of the animation, or null if nameless.
Default: [foundry.canvas.placeables.Token#animationName](../classes/foundry.canvas.placeables.Token.md#animationname).

### `Optional`ontick

ontick?: (  
Â Â Â Â elapsedMS: number,  
Â Â Â Â animation: [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md),  
Â Â Â Â data: [TokenAnimationData](foundry.types.TokenAnimationData.md),  
) => void

An on-tick callback.

### `Optional`speedMultiplier

speedMultiplier?: number

The movement speed multiplier to apply to the base movement speed.
Default: `1`.

### `Optional`terrain

terrain?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

The terrain data. Default: `null`.

### `Optional`transition

transition?: [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.md)

The desired texture transition type.
Default: automatic (determined by
[foundry.canvas.placeables.Token#\_getAnimationTransition](../classes/foundry.canvas.placeables.Token.md#_getanimationtransition),
which returns `"fade"` by default).