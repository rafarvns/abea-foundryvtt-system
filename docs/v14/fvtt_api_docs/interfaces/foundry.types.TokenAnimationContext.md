---
title: "TokenAnimationContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenAnimationContext.html"
category: "interfaces"
---

# Interface TokenAnimationContext

interface TokenAnimationContext {  
Â Â Â Â [chain](#chain): {  
Â Â Â Â Â Â Â Â options: Omit<[TokenAnimationOptions](foundry.types.TokenAnimationOptions.md), "duration"> & { duration: number };  
Â Â Â Â Â Â Â Â promise: Promise<void>;  
Â Â Â Â Â Â Â Â reject: (error: Error) => void;  
Â Â Â Â Â Â Â Â resolve: () => void;  
Â Â Â Â Â Â Â Â to: Partial<[TokenAnimationData](foundry.types.TokenAnimationData.md)>;  
Â Â Â Â }[];  
Â Â Â Â [duration](#duration): number;  
Â Â Â Â [name](#name): string  
Â Â Â Â | symbol;  
Â Â Â Â [onAnimate](#onanimate): ((context: TokenAnimationContext) => void)[];  
Â Â Â Â [postAnimate](#postanimate): ((context: TokenAnimationContext) => void)[];  
Â Â Â Â [preAnimate](#preanimate): ((context: TokenAnimationContext) => Promise<void>)[];  
Â Â Â Â [promise](#promise): Promise<void>;  
Â Â Â Â [time](#time): number;  
Â Â Â Â [to](#to): Partial<[TokenAnimationData](foundry.types.TokenAnimationData.md)>;  
}

##### Index

### Properties

[chain](#chain)
[duration](#duration)
[name](#name)
[onAnimate](#onanimate)
[postAnimate](#postanimate)
[preAnimate](#preanimate)
[promise](#promise)
[time](#time)
[to](#to)

## Properties

### chain

chain: {  
Â Â Â Â options: Omit<[TokenAnimationOptions](foundry.types.TokenAnimationOptions.md), "duration"> & { duration: number };  
Â Â Â Â promise: Promise<void>;  
Â Â Â Â reject: (error: Error) => void;  
Â Â Â Â resolve: () => void;  
Â Â Â Â to: Partial<[TokenAnimationData](foundry.types.TokenAnimationData.md)>;  
}[]

The animation chain.

### duration

duration: number

The duration of the animation.

### name

name: string | symbol

The name of the animation.

### onAnimate

onAnimate: ((context: TokenAnimationContext) => void)[]

Synchronous functions that are executed each frame after `ontick` and before
[foundry.canvas.placeables.Token#\_onAnimationUpdate](../classes/foundry.canvas.placeables.Token.md#_onanimationupdate).

### postAnimate

postAnimate: ((context: TokenAnimationContext) => void)[]

Synchronous functions that are executed after the animation ended. They may be
executed before the `preAnimate` functions have finished if the animation is
terminated.

### preAnimate

preAnimate: ((context: TokenAnimationContext) => Promise<void>)[]

Asynchronous functions that are executed before the animation starts

### promise

promise: Promise<void>

The promise of the animation that resolves once it completes or is terminated.

### time

time: number

The current time of the animation.

### to

to: Partial<[TokenAnimationData](foundry.types.TokenAnimationData.md)>

The final animation state.