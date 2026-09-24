---
title: "Cursor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.Cursor.html"
category: "classes"
---

# Class Cursor

A single Mouse Cursor

#### Hierarchy

* Container
  + Cursor

##### Index

### Properties

[\_updatePosition](#_updateposition)
[target](#target)

### Methods

[destroy](#destroy)
[draw](#draw)
[refreshVisibility](#refreshvisibility)
[updateTransform](#updatetransform)

## Properties

### `Internal`\_updatePosition

\_updatePosition: boolean = true

Update the position of this cursor based on the current position?

### target

target: [Point](../interfaces/foundry.types.Point.md) = ...

The target cursor position.

## Methods

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### draw

* draw(user: User): void

  Draw the user's cursor as a small dot with their user name attached as text

  #### Parameters

  + user: User

  #### Returns void

### refreshVisibility

* refreshVisibility(user: User): void

  Update visibility and animations

  #### Parameters

  + user: User

    The user

  #### Returns void

### updateTransform

* updateTransform(): void

  #### Returns void