---
title: "SceneManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.SceneManager.html"
category: "classes"
---

# Class SceneManager

A framework for imbuing special scripted behaviors into a single specific Scene.
Managed scenes are registered in CONFIG.Canvas.managedScenes.

The SceneManager instance is called at various points in the Scene rendering life-cycle.

This also provides a framework for registering additional hook events which are required only for the life-cycle of
the managed Scene.

#### Example: Registering a custom SceneManager

```
// Define a custom SceneManager subclass  
class MyCustomSceneManager extends SceneManager {  
  async _onInit() {  
    console.log(`Initializing managed Scene "${this.scene.name}"`);  
  }  
  
  _getAvailableLevels(defaultLevels) {  
    // Return a custom subset of levels for this Scene  
    return new Set([this.scene.levels.get(someLevelId)]);  
  }  
  
  async _onDraw() {  
    console.log(`Drawing managed Scene "${this.scene.name}"`);  
  }  
  
  async _onReady() {  
    console.log(`Readying managed Scene "${this.scene.name}"`);  
  }  
  
  async _onTearDown({nextScene}) {  
    console.log(`Deconstructing "${this.scene.name}", next up: ${nextScene?.name ?? "blank canvas"}`);  
  }  
  
  _registerHooks() {  
    this.registerHook("updateToken", this.#onUpdateToken.bind(this));  
  }  
  
  #onUpdateToken(document, updateData, options, userId) {  
    console.log("Updating a token within the managed Scene");  
  }  
}  
  
// Register MyCustomSceneManager to be used for a specific Scene  
CONFIG.Canvas.sceneManagers = {  
  [sceneId]: MyCustomSceneManager  
}
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[scene](#scene)

### Methods

[registerHook](#registerhook)
[\_deactivateHooks](#_deactivatehooks)
[\_determineInitialLevel](#_determineinitiallevel)
[\_getAvailableLevels](#_getavailablelevels)
[\_loadTextures](#_loadtextures)
[\_onDraw](#_ondraw)
[\_onInit](#_oninit)
[\_onReady](#_onready)
[\_onTearDown](#_onteardown)
[\_registerHooks](#_registerhooks)

## Constructors

### constructor

* new SceneManager(scene: Scene): SceneManager

  The SceneManager is constructed by passing a reference to the active Scene document.

  #### Parameters

  + scene: Scene

  #### Returns SceneManager

## Accessors

### scene

* get scene(): Scene

  The managed Scene.

  #### Returns Scene

## Methods

### registerHook

* registerHook(hookName: string, handler: Function): void

  Register additional hook functions are only used while this Scene is active and is automatically deactivated.

  #### Parameters

  + hookName: string
  + handler: Function

  #### Returns void

### `Protected`\_deactivateHooks

* \_deactivateHooks(): void

  `Protected`

  Deactivate Hook functions that were added specifically for this Scene.

  #### Returns void

### `Protected`\_determineInitialLevel

* \_determineInitialLevel(): string | void

  `Protected`

  Configure which level of the Scene should be initially viewed for a managed Scene.
  This initial level could be user-specific.
  This method may be called when the Scene is not viewed.

  #### Returns string | void

### `Protected`\_getAvailableLevels

* \_getAvailableLevels(defaultLevels: Set<Level>): void | Set<Level>

  `Protected`

  Configure which levels of the Scene are available to the current user.
  This method may be called when the Scene is not viewed.

  #### Parameters

  + defaultLevels: Set<Level>

    The levels that are available to the current user by default in ascending order.

  #### Returns void | Set<Level>

  Return a Set of Level documents to override the default token-ownership logic,
  or return nothing to fall back to the default behavior. The returned Levels must
  be sorted in ascending order.

### `Protected`\_loadTextures

* \_loadTextures(  
  Â Â Â Â textures: Record<  
  Â Â Â Â Â Â Â Â string,  
  Â Â Â Â Â Â Â Â string  
  Â Â Â Â Â Â Â Â | Texture<Resource>  
  Â Â Â Â Â Â Â Â | Spritesheet<ISpritesheetData>,  
  Â Â Â Â >,  
  Â Â Â Â additionalSources: string[],  
  Â Â Â Â level: Level,  
  ): void

  `Protected`

  Load additional texture resources for the Scene/Level.
  This method may be called when the Scene is not viewed.

  #### Parameters

  + textures: Record<string, string | Texture<Resource> | Spritesheet<ISpritesheetData>>

    Destination record to register textures into.
  + additionalSources: string[]

    Additional sources to load.
  + level: Level

    The Level to load textures for.

  #### Returns void

### `Protected`\_onDraw

* \_onDraw(): Promise<void>

  `Protected`

  Additional behaviors to perform after core groups and layers are drawn to the canvas.

  #### Returns Promise<void>

### `Protected`\_onInit

* \_onInit(): Promise<void>

  `Protected`

  Additional behaviors to perform when the Canvas is first initialized for the Scene.

  #### Returns Promise<void>

### `Protected`\_onReady

* \_onReady(): Promise<void>

  `Protected`

  Additional behaviors to perform after the Canvas is fully initialized for the Scene.

  #### Returns Promise<void>

### `Protected`\_onTearDown

* \_onTearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  Additional behaviors to perform when the Scene is deactivated.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the canvas is deconstructed.

  #### Returns Promise<void>

### `Protected`\_registerHooks

* \_registerHooks(): void

  `Protected`

  Register additional hook functions are only used while this Scene is active and is automatically deactivated.
  Hooks should be registered in this function by calling this.\_registerHook(hookName, handler)

  #### Returns void