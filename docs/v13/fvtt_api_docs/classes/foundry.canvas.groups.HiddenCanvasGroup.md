---
title: "HiddenCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.HiddenCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [HiddenCanvasGroup](foundry.canvas.groups.HiddenCanvasGroup.html)

# Class HiddenCanvasGroup

A specialized canvas group for rendering hidden containers before all others (like masks).

#### Hierarchy

* Container<DisplayObject, this>
  + HiddenCanvasGroup

##### Index

### Properties

[masks](foundry.canvas.groups.HiddenCanvasGroup.html#masks)
[groupName](foundry.canvas.groups.HiddenCanvasGroup.html#groupname)

### Methods

[\_draw](foundry.canvas.groups.HiddenCanvasGroup.html#_draw)
[\_tearDown](foundry.canvas.groups.HiddenCanvasGroup.html#_teardown)
[addMask](foundry.canvas.groups.HiddenCanvasGroup.html#addmask)
[invalidateMasks](foundry.canvas.groups.HiddenCanvasGroup.html#invalidatemasks)

## Properties

### masks

masks: Container<DisplayObject> = ...

The container which hold masks.

### `Static`groupName

groupName: string = "hidden"

Overrides CanvasGroupMixin(PIXI.Container).groupName

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### addMask

* addMask(name: string, displayObject: DisplayObject, position?: number): void

  Add a mask to this group.

  #### Parameters

  + name: string

    Name of the mask.
  + displayObject: DisplayObject

    Display object to add.
  + `Optional`position: number

    Position of the mask.

  #### Returns void

### invalidateMasks

* invalidateMasks(): void

  Invalidate the masks: flag them for rerendering.

  #### Returns void