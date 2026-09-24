---
title: "OverlayCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.OverlayCanvasGroup.html"
category: "classes"
---

# Class OverlayCanvasGroup

A container group which is not bound to the stage world transform.

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

Inherited from CanvasGroupMixin(UnboundContainer).layers

### `Static`groupName

groupName: string = "overlay"

Overrides CanvasGroupMixin(UnboundContainer).groupName

### `Static`tearDownChildren

tearDownChildren: boolean = false

Overrides CanvasGroupMixin(UnboundContainer).tearDownChildren

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasGroupMixin(UnboundContainer).hookName

### name

* get name(): string

  The canonical name of the canvas group is the name of the constructor that is the immediate child of the
  defined base class.

  #### Returns string

  Inherited from CanvasGroupMixin(UnboundContainer).name

## Methods

### draw

* draw(options?: object): Promise<OverlayCanvasGroup>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<OverlayCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(UnboundContainer).draw

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<OverlayCanvasGroup>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<OverlayCanvasGroup>

  Inherited from CanvasGroupMixin(UnboundContainer).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(UnboundContainer).\_createLayers

### `Protected`\_draw

* \_draw(options: object): Promise<OverlayCanvasGroup>

  `Protected`

  Draw the canvas group and all its component layers.

  #### Parameters

  + options: object

    Options which configure how the group is drawn.
    Forwarded to [foundry.canvas.layers.CanvasLayer#draw](foundry.canvas.layers.CanvasLayer.md#draw).

  #### Returns Promise<OverlayCanvasGroup>

  A Promise which resolves once the group is fully drawn.

  Inherited from CanvasGroupMixin(UnboundContainer).\_draw

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the group is deconstructed.
    Forwarded to [foundry.canvas.layers.CanvasLayer#tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(UnboundContainer).\_tearDown