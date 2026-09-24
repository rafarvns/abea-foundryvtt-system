---
title: "CanvasAnimation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.animation.CanvasAnimation.html"
category: "classes"
---

# Class CanvasAnimation

A helper class providing utility methods for PIXI Canvas animation

##### Index

### Properties

[animations](#animations)

### Accessors

[STATES](#states)
[ticker](#ticker)

### Methods

[animate](#animate)
[easeInCircle](#easeincircle)
[easeInOutCosine](#easeinoutcosine)
[easeOutCircle](#easeoutcircle)
[getAnimation](#getanimation)
[terminateAll](#terminateall)
[terminateAnimation](#terminateanimation)

## Properties

### `Static`animations

animations: Record<string | symbol, [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md)> = {}

Track an object of active animations by name, context, and function
This allows a currently playing animation to be referenced and terminated

## Accessors

### `Static`STATES

* get STATES(): Readonly<  
  Â Â Â Â { COMPLETED: 2; FAILED: -2; RUNNING: 1; TERMINATED: -1; WAITING: 0 },  
  >

  The possible states of an animation.

  #### Returns Readonly<{ COMPLETED: 2; FAILED: -2; RUNNING: 1; TERMINATED: -1; WAITING: 0 }>

### `Static`ticker

* get ticker(): Ticker

  The ticker used for animations.

  #### Returns Ticker

## Methods

### `Static`animate

* animate(  
  Â Â Â Â attributes: [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md)[],  
  Â Â Â Â options?: [CanvasAnimationOptions](../interfaces/foundry.canvas.animation.types.CanvasAnimationOptions.md),  
  ): Promise<boolean>

  Apply an animation from the current value of some attribute to a new value
  Resolve a Promise once the animation has concluded and the attributes have reached their new target

  #### Parameters

  + attributes: [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md)[]

    An array of attributes to animate
  + options: [CanvasAnimationOptions](../interfaces/foundry.canvas.animation.types.CanvasAnimationOptions.md) = {}

    Additional options which customize the animation

  #### Returns Promise<boolean>

  A Promise which resolves to true once the animation has concluded
  or false if the animation was prematurely terminated

  #### Example: Animate Token Position

  ```
  let animation = [  
    {  
      parent: token,  
      attribute: "x",  
      to: 1000  
    },  
    {  
      parent: token,  
      attribute: "y",  
      to: 2000  
    }  
  ];  
  foundry.canvas.animation.CanvasAnimation.animate(attributes, {duration:500});
  Copy
  ```

### `Static`easeInCircle

* easeInCircle(pt: number): number

  Shallow ease in.

  #### Parameters

  + pt: number

    The proportional animation timing on [0,1]

  #### Returns number

  The eased animation progress on [0,1]

### `Static`easeInOutCosine

* easeInOutCosine(pt: number): number

  Cosine based easing with smooth in-out.

  #### Parameters

  + pt: number

    The proportional animation timing on [0,1]

  #### Returns number

  The eased animation progress on [0,1]

### `Static`easeOutCircle

* easeOutCircle(pt: number): number

  Shallow ease out.

  #### Parameters

  + pt: number

    The proportional animation timing on [0,1]

  #### Returns number

  The eased animation progress on [0,1]

### `Static`getAnimation

* getAnimation(name: string | symbol): [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md)

  Retrieve an animation currently in progress by its name

  #### Parameters

  + name: string | symbol

    The animation name to retrieve

  #### Returns [CanvasAnimationData](../types/foundry.canvas.animation.types.CanvasAnimationData.md)

  The animation data, or undefined

### `Static`terminateAll

* terminateAll(): Promise<void>

  Terminate all active animations in progress, forcibly resolving each one with `false`.
  This method returns a Promise that resolves once all animations have been terminated and removed.

  #### Returns Promise<void>

  A promise that resolves when all animations have been forcibly terminated.

### `Static`terminateAnimation

* terminateAnimation(name: string | symbol): void

  If an animation using a certain name already exists, terminate it

  #### Parameters

  + name: string | symbol

    The animation name to terminate

  #### Returns void