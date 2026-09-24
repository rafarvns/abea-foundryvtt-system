---
title: "EnvironmentCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.EnvironmentCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)

# Class EnvironmentCanvasGroup

A container group which contains the primary canvas group and the effects canvas group.

#### Hierarchy

* CanvasGroup<this>
  + EnvironmentCanvasGroup

##### Index

### Properties

[colors](foundry.canvas.groups.EnvironmentCanvasGroup.html#colors)
[layers](foundry.canvas.groups.EnvironmentCanvasGroup.html#layers)
[weights](foundry.canvas.groups.EnvironmentCanvasGroup.html#weights)
[groupName](foundry.canvas.groups.EnvironmentCanvasGroup.html#groupname)
[tearDownChildren](foundry.canvas.groups.EnvironmentCanvasGroup.html#teardownchildren)

### Accessors

[darknessLevel](foundry.canvas.groups.EnvironmentCanvasGroup.html#darknesslevel)
[hookName](foundry.canvas.groups.EnvironmentCanvasGroup.html#hookname)
[name](foundry.canvas.groups.EnvironmentCanvasGroup.html#name)

### Methods

[\_draw](foundry.canvas.groups.EnvironmentCanvasGroup.html#_draw)
[draw](foundry.canvas.groups.EnvironmentCanvasGroup.html#draw)
[initialize](foundry.canvas.groups.EnvironmentCanvasGroup.html#initialize)
[tearDown](foundry.canvas.groups.EnvironmentCanvasGroup.html#teardown)
[\_createLayers](foundry.canvas.groups.EnvironmentCanvasGroup.html#_createlayers)
[\_tearDown](foundry.canvas.groups.EnvironmentCanvasGroup.html#_teardown)

## Properties

### colors

colors: {  
Â Â Â Â ambientBrightest: undefined;  
Â Â Â Â ambientDarkness: undefined;  
Â Â Â Â ambientDaylight: undefined;  
Â Â Â Â background: undefined;  
Â Â Â Â bright: undefined;  
Â Â Â Â darkness: undefined;  
Â Â Â Â dim: undefined;  
Â Â Â Â fogExplored: undefined;  
Â Â Â Â fogUnexplored: undefined;  
Â Â Â Â halfdark: undefined;  
Â Â Â Â sceneBackground: undefined;  
} = ...

Colors exposed by the manager.

### layers

layers: Record<string, CanvasLayer>

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers

### weights

weights: {  
Â Â Â Â bright: undefined;  
Â Â Â Â dark: undefined;  
Â Â Â Â dim: undefined;  
Â Â Â Â halfdark: undefined;  
} = ...

Weights used by the manager to compute colors.

### `Static`groupName

groupName: string = "environment"

Overrides CanvasGroupMixin(PIXI.Container).groupName

### `Static`tearDownChildren

tearDownChildren: boolean = false

Overrides CanvasGroupMixin(PIXI.Container).tearDownChildren

## Accessors

### darknessLevel

* get darknessLevel(): number

  Get the darkness level of this scene.

  #### Returns number

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).hookName

### name

* get name(): string

  The canonical name of the canvas group is the name of the constructor that is the immediate child of the
  defined base class.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).name

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides CanvasGroupMixin(PIXI.Container).\_draw

### draw

* draw(options?: object): Promise<[EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)>

  A Promise which resolves once the group is fully drawn

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### initialize

* initialize(config?: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.html)): void

  Initialize the scene environment options.

  #### Parameters

  + config: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.html) = {}

  #### Returns void

  #### Fires

  #### Fires

### tearDown

* tearDown(options?: object): Promise<[EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(PIXI.Container).\_createLayers

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + options: object

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(PIXI.Container).\_tearDown