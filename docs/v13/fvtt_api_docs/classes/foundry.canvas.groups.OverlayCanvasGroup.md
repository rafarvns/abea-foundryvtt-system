---
title: "OverlayCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.OverlayCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)

# Class OverlayCanvasGroup

A container group which is not bound to the stage world transform.

#### Hierarchy

* CanvasGroup<this>
  + OverlayCanvasGroup

##### Index

### Properties

[layers](foundry.canvas.groups.OverlayCanvasGroup.html#layers)
[groupName](foundry.canvas.groups.OverlayCanvasGroup.html#groupname)
[tearDownChildren](foundry.canvas.groups.OverlayCanvasGroup.html#teardownchildren)

### Accessors

[hookName](foundry.canvas.groups.OverlayCanvasGroup.html#hookname)
[name](foundry.canvas.groups.OverlayCanvasGroup.html#name)

### Methods

[draw](foundry.canvas.groups.OverlayCanvasGroup.html#draw)
[tearDown](foundry.canvas.groups.OverlayCanvasGroup.html#teardown)
[\_createLayers](foundry.canvas.groups.OverlayCanvasGroup.html#_createlayers)
[\_draw](foundry.canvas.groups.OverlayCanvasGroup.html#_draw)
[\_tearDown](foundry.canvas.groups.OverlayCanvasGroup.html#_teardown)

## Properties

### layers

layers: Record<string, CanvasLayer>

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

* draw(options?: object): Promise<[OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)>

  A Promise which resolves once the group is fully drawn

  Inherited from CanvasGroupMixin(UnboundContainer).draw

### tearDown

* tearDown(options?: object): Promise<[OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)>

  Inherited from CanvasGroupMixin(UnboundContainer).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(UnboundContainer).\_createLayers

### `Protected`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  Draw the canvas group and all its component layers.

  #### Parameters

  + options: object

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(UnboundContainer).\_draw

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + options: object

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(UnboundContainer).\_tearDown