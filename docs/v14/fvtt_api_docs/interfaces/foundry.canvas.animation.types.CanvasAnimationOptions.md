---
title: "CanvasAnimationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.CanvasAnimationOptions.html"
category: "interfaces"
---

# Interface CanvasAnimationOptions

interface CanvasAnimationOptions {  
Â Â Â Â [context](#context)?: DisplayObject;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [easing](#easing)?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
Â Â Â Â [name](#name)?: string | symbol;  
Â Â Â Â [ontick](#ontick)?: (elapsedMS: number, animation: [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md)) => void;  
Â Â Â Â [priority](#priority)?: number;  
Â Â Â Â [time](#time)?: number;  
Â Â Â Â [wait](#wait)?: Promise<any>;  
}

##### Index

### Properties

[context?](#context)
[duration?](#duration)
[easing?](#easing)
[name?](#name)
[ontick?](#ontick)
[priority?](#priority)
[time?](#time)
[wait?](#wait)

## Properties

### `Optional`context

context?: DisplayObject

A DisplayObject which defines context to the PIXI.Ticker function

### `Optional`duration

duration?: number

A duration in milliseconds over which the animation should occur

### `Optional`easing

easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md)

An easing function used to translate animation time or
the string name of a static member of CanvasAnimation

### `Optional`name

name?: string | symbol

A unique name which can be used to reference the in-progress animation

### `Optional`ontick

ontick?: (elapsedMS: number, animation: [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md)) => void

A callback function which fires after every frame

### `Optional`priority

priority?: number

A priority in PIXI.UPDATE\_PRIORITY which defines when the animation
should be evaluated related to others

### `Optional`time

time?: number

The current time of the animation, in milliseconds

### `Optional`wait

wait?: Promise<any>

The animation isn't started until this promise resolves