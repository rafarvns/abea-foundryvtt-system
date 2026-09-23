---
title: "_CanvasAnimationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types._CanvasAnimationData.html"
category: "interfaces"
---

# Interface \_CanvasAnimationData

interface \_CanvasAnimationData {  
Â Â Â Â [attributes](#attributes): [CanvasAnimationAttribute](foundry.canvas.animation.types.CanvasAnimationAttribute.md)[];  
Â Â Â Â [fn](#fn): () => void;  
Â Â Â Â [promise](#promise): Promise<boolean>;  
Â Â Â Â [reject](#reject): (error: Error) => void;  
Â Â Â Â [resolve](#resolve): (completed: boolean) => void;  
Â Â Â Â [state](#state): number;  
}

##### Index

### Properties

[attributes](#attributes)
[fn](#fn)
[promise](#promise)
[reject](#reject)
[resolve](#resolve)
[state](#state)

## Properties

### attributes

attributes: [CanvasAnimationAttribute](foundry.canvas.animation.types.CanvasAnimationAttribute.md)[]

The attributes being animated

### fn

fn: () => void

The animation function being executed each frame

### promise

promise: Promise<boolean>

A Promise which resolves once the animation is complete

### reject

reject: (error: Error) => void

The rejection function, allowing animation to be ended early

### resolve

resolve: (completed: boolean) => void

The resolution function, allowing animation to be ended early

### state

state: number

The current state of the animation
(see [foundry.canvas.animation.CanvasAnimation.STATES](../classes/foundry.canvas.animation.CanvasAnimation.md#states))