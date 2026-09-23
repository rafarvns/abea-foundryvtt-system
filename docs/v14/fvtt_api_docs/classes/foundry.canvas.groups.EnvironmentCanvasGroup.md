---
title: "EnvironmentCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.EnvironmentCanvasGroup.html"
category: "classes"
---

# Class EnvironmentCanvasGroup

A container group which contains the primary canvas group and the effects canvas group.

##### Index

### Properties

[colors](#colors)
[globalLightSource](#globallightsource)
[layers](#layers)
[weights](#weights)
[groupName](#groupname)
[tearDownChildren](#teardownchildren)

### Accessors

[darknessLevel](#darknesslevel)
[hookName](#hookname)
[name](#name)

### Methods

[\_draw](#_draw)
[draw](#draw)
[initialize](#initialize)
[tearDown](#teardown)
[\_createLayers](#_createlayers)
[\_tearDown](#_teardown)

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

### globalLightSource

globalLightSource: [GlobalLightSource](foundry.canvas.sources.GlobalLightSource.md)

The global light source attached to the environment

### layers

layers: Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

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

* draw(options?: object): Promise<EnvironmentCanvasGroup>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<EnvironmentCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### initialize

* initialize(config?: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.md)): void

  Initialize the scene environment options.

  #### Parameters

  + config: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.md) = {}

  #### Returns void

  #### Fires

  #### Fires

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<EnvironmentCanvasGroup>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<EnvironmentCanvasGroup>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(PIXI.Container).\_createLayers

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(PIXI.Container).\_tearDown