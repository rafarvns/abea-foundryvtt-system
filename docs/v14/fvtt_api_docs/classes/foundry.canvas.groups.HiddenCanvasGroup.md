---
title: "HiddenCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.HiddenCanvasGroup.html"
category: "classes"
---

# Class HiddenCanvasGroup

A specialized canvas group for rendering hidden containers before all others (like masks).

#### Hierarchy

* any
  + HiddenCanvasGroup

##### Index

### Properties

[masks](#masks)
[groupName](#groupname)

### Methods

[\_draw](#_draw)
[\_tearDown](#_teardown)
[addMask](#addmask)
[invalidateMasks](#invalidatemasks)

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