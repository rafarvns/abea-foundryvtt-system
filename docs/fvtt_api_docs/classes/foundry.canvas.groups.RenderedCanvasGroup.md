---
title: "RenderedCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.RenderedCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)

# Class RenderedCanvasGroup

A container group which contains the environment canvas group and the interface canvas group.

#### Hierarchy

* CanvasGroup<this>
  + RenderedCanvasGroup

##### Index

### Properties

[layers](foundry.canvas.groups.RenderedCanvasGroup.html#layers)
[groupName](foundry.canvas.groups.RenderedCanvasGroup.html#groupname)
[tearDownChildren](foundry.canvas.groups.RenderedCanvasGroup.html#teardownchildren)

### Accessors

[hookName](foundry.canvas.groups.RenderedCanvasGroup.html#hookname)
[name](foundry.canvas.groups.RenderedCanvasGroup.html#name)

### Methods

[draw](foundry.canvas.groups.RenderedCanvasGroup.html#draw)
[tearDown](foundry.canvas.groups.RenderedCanvasGroup.html#teardown)
[\_createLayers](foundry.canvas.groups.RenderedCanvasGroup.html#_createlayers)
[\_draw](foundry.canvas.groups.RenderedCanvasGroup.html#_draw)
[\_tearDown](foundry.canvas.groups.RenderedCanvasGroup.html#_teardown)

## Properties

### layers

layers: Record<string, CanvasLayer>

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

* draw(options?: object): Promise<[RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)>

  A Promise which resolves once the group is fully drawn

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### tearDown

* tearDown(options?: object): Promise<[RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(PIXI.Container).\_createLayers

### `Protected`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  Draw the canvas group and all its component layers.

  #### Parameters

  + options: object

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(PIXI.Container).\_draw

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + options: object

  #### Returns Promise<void>

  Inherited from CanvasGroupMixin(PIXI.Container).\_tearDown