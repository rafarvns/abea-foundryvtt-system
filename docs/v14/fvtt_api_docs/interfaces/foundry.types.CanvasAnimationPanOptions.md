---
title: "CanvasAnimationPanOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasAnimationPanOptions.html"
category: "interfaces"
---

# Interface CanvasAnimationPanOptions

interface CanvasAnimationPanOptions {  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [easing](#easing)?: string | Function;  
Â Â Â Â [speed](#speed)?: number;  
}

##### Index

### Properties

[duration?](#duration)
[easing?](#easing)
[speed?](#speed)

## Properties

### `Optional`duration

duration?: number

The total duration of the animation in milliseconds; used if `speed` is not set.
Default: `250`.

### `Optional`easing

easing?: string | Function

An easing function passed to [foundry.canvas.animation.CanvasAnimation.animate](../classes/foundry.canvas.animation.CanvasAnimation.md#animate).
Default: `"easeInOutCosine"`.

### `Optional`speed

speed?: number

The speed of animation in pixels per second; overrides `duration` if set.