---
title: "RenderedCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.RenderedCanvasGroup.html"
category: "classes"
---

# Class RenderedCanvasGroup

A container group which contains the environment canvas group and the interface canvas group.

##### Index

### Properties

[layers](#layers)
[groupName](#groupname)
[tearDownChildren](#teardownchildren)

### Accessors

[hookName](#hookname)
[name](#name)

### Methods

[draw](#draw)
[tearDown](#teardown)
[\_createLayers](#_createlayers)
[\_draw](#_draw)
[\_tearDown](#_teardown)

## Properties

### layers

layers: Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers

### `Static`groupName

groupName: string = "rendered"

Overrides CanvasGroupMixin(PIXI.Container).groupName

### `Static`tearDownChildren

tearDownChildren: boolean = false

Overrides CanvasGroupMixin(PIXI.Container).tearDownChildren

## Accessors

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

### draw

* draw(options?: object): Promise<RenderedCanvasGroup>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<RenderedCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<RenderedCanvasGroup>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<RenderedCanvasGroup>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(PIXI.Container).\_createLayers

### `Protected`\_draw

* \_draw(options: object): Promise<RenderedCanvasGroup>

  `Protected`

  Draw the canvas group and all its component layers.

  #### Parameters

  + options: object

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<RenderedCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(PIXI.Container).\_draw

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