---
title: "TransitionContainer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.TransitionContainer.html"
category: "classes"
---

# Class TransitionContainer

Persistent overlay dedicated to scene transitions.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.TransitionContainer))

* [UnboundContainer](foundry.canvas.containers.UnboundContainer.md)
  + TransitionContainer

##### Index

### Properties

[defaultDuration](#defaultduration)
[defaultTransitionType](#defaulttransitiontype)
[isLocked](#islocked)

### Accessors

[isRunning](#isrunning)
[promise](#promise)

### Methods

[\_captureCurrentScene](#_capturecurrentscene)
[\_captureNextScene](#_capturenextscene)
[\_play](#_play)
[\_reset](#_reset)
[cancel](#cancel)
[run](#run)

## Properties

### defaultDuration

defaultDuration: number = 1000

Default transition duration used by [TransitionContainer#\_play](#_play)
when no explicit duration is provided (milliseconds).

### defaultTransitionType

defaultTransitionType: string = CONFIG.Canvas.sceneTransitions.fade.id

Desired transition type to use for transitions when no explicit type is provided.

### isLocked

isLocked: boolean = false

Flag indicating whether this container is reserved for an external workflow.
When true, core scene transitions should not use this container.

## Accessors

### isRunning

* get isRunning(): boolean

  Flag indicating whether a transition animation is currently running.
  Prevents overlapping calls to [TransitionContainer#\_play](#_play).

  #### Returns boolean

### promise

* get promise(): Promise<void> | null

  Promise that resolves when the current transition finishes or is cancelled.
  Reused to return the same promise on repeated [TransitionContainer#\_play](#_play) calls.

  #### Returns Promise<void> | null

## Methods

### \_captureCurrentScene

* \_captureCurrentScene(  
  Â Â Â Â options?: { black?: boolean; clearColor?: number[] },  
  ): RenderTexture | null

  `Internal`

  Capture the currently displayed scene into a render texture and show it.
  If `black` is true, uses a solid black frame instead of capturing the scene.

  #### Parameters

  + `Optional`options: { black?: boolean; clearColor?: number[] } = {}

    Capture options.

    - ##### `Optional`black?: boolean

      When true, uses a black frame instead of capturing.
    - ##### `Optional`clearColor?: number[]

      RGBA clear color in the 0-1 range.

  #### Returns RenderTexture | null

  The render texture of the current scene, or null if black.

### \_captureNextScene

* \_captureNextScene(  
  Â Â Â Â options?: { clearColor?: number[]; transitionType?: string },  
  ): Promise<RenderTexture>

  `Internal`

  Capture the next rendered frame of the new scene into a render texture.
  Internally waits for the next `postrender` so all canvas groups and caches are fully updated before capturing.
  The filter class and filter type are resolved from [CONFIG.Canvas.sceneTransitions](../variables/CONFIG.Canvas.md#scenetransitions).

  #### Parameters

  + `Optional`options: { clearColor?: number[]; transitionType?: string } = {}

    Capture options.

    - ##### `Optional`clearColor?: number[]

      RGBA clear color in the 0-1 range.
    - ##### `Optional`transitionType?: string

      Transition type id to use for this capture.
      Defaults to [TransitionContainer#defaultTransitionType](#defaulttransitiontype).

  #### Returns Promise<RenderTexture>

  Promise resolving to the captured render texture.

### \_play

* \_play(opts?: { duration?: number; easing?: Function }): Promise<void>

  Run the transition animation from the captured "from" texture to the "to" texture.
  If a transition is already running, returns the existing promise.
  If no filter has been prepared, resolves immediately.

  #### Parameters

  + `Optional`opts: { duration?: number; easing?: Function } = {}

    Animation options.

    - ##### `Optional`duration?: number

      Duration in milliseconds.
    - ##### `Optional`easing?: Function

      Easing function mapping [0,1] to [0,1].

  #### Returns Promise<void>

  Promise that resolves when the transition completes.

### \_reset

* \_reset(): void

  Reset the internal state of the transition container.

  #### Returns void

### cancel

* cancel(): Promise<void>

  Cancel any currently running transition and await its termination.

  #### Returns Promise<void>

### run

* run(operation?: Function): Promise<void>

  Run a full transition around a given canvas operation.
  Encapsulates captureCurrentScene => operation/scene switch => captureNextScene => play.

  If both options.operation and options.nextScene are provided, the operation runs first,
  then the Scene is switched.

  If neither options.operation nor options.nextScene are provided, a simple demo transition
  is performed from a black frame to the currently rendered Scene.

  #### Parameters

  + `Optional`operation: Function = {}

    Async function performing canvas changes.

  #### Returns Promise<void>

  Promise that resolves when the transition completes.

  #### Example: Transition around a camera pan

  ```
  await canvas.transition.run({  
    operation: async () => {  
      await canvas.animatePan({  
        x: 2000,  
        y: 1500,  
        scale: 1.25,  
        duration: 0  
      });  
    },  
    duration: 800,  
    transitionType: "dots"  
  });
  Copy
  ```

  #### Example: Switch to another Scene with a transition

  ```
  const scene = game.scenes.get("ABC123");  
  await canvas.transition.run({  
    nextScene: scene,  
    activate: true,  
    duration: 1200,  
    transitionType: "fade"  
  });
  Copy
  ```

  #### Example: Demo the current Scene from black

  ```
  await canvas.transition.run({  
    fromBlack: true,  
    duration: 800,  
    transitionType: "swirl"  
  });
  Copy
  ```