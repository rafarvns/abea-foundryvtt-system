---
title: "ResizeHandle | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.ResizeHandle.html"
category: "classes"
---

# Class ResizeHandle

A class based on PIXI.Graphics, that allows to create a resize handle in the desired area.

#### Hierarchy

* SmoothGraphics
  + ResizeHandle

##### Index

### Constructors

[constructor](#constructor)

### Properties

[active](#active)

### Methods

[activateListeners](#activatelisteners)
[refresh](#refresh)
[updateDimensions](#updatedimensions)
[\_onHoverIn](#_onhoverin)
[\_onHoverOut](#_onhoverout)
[\_onMouseDown](#_onmousedown)

## Constructors

### constructor

* new ResizeHandle(  
  Â Â Â Â offset: number[],  
  Â Â Â Â handlers?: { canDrag?: Function },  
  ): ResizeHandle

  #### Parameters

  + offset: number[]

    A two-element array [xFactor, yFactor] which defines the normalized
    position of this handle relative to the bounding box.
  + `Optional`handlers: { canDrag?: Function } = {}

    An object of optional handler functions.

    - ##### `Optional`canDrag?: Function

      A function determining if this handle can initiate a drag.

  #### Returns ResizeHandle

  Overrides PIXI.smooth.SmoothGraphics.constructor

## Properties

### active

active: boolean = false

Track whether the handle is being actively used for a drag workflow

## Methods

### activateListeners

* activateListeners(): void

  Activate listeners for pointer events, enabling hover and mouse-down behavior on the resize handle.

  #### Returns void

### refresh

* refresh(bounds: Rectangle): void

  Refresh the position and hit area of this handle based on the provided bounding box.

  #### Parameters

  + bounds: Rectangle

    The bounding box in which this handle operates.

  #### Returns void

### updateDimensions

* updateDimensions(  
  Â Â Â Â current: Rectangle,  
  Â Â Â Â origin: Rectangle,  
  Â Â Â Â destination: { x: number; y: number },  
  Â Â Â Â options?: { aspectRatio?: number | null },  
  ): object

  Compute updated dimensions for an object being resized, respecting optional constraints.

  #### Parameters

  + current: Rectangle

    The current geometric state of the object
  + origin: Rectangle

    The original position and dimensions used for reference
  + destination: { x: number; y: number }

    The mouse (or pointer) destination coordinates.

    - ##### x: number

      The x-coordinate where the pointer was released.
    - ##### y: number

      The y-coordinate where the pointer was released.
  + `Optional`options: { aspectRatio?: number | null } = {}

    Additional options.

    - ##### `Optional`aspectRatio?: number | null

      If provided, a numeric aspect ratio to maintain (width/height).

  #### Returns object

  An object containing the adjusted {x, y, width, height}.

### `Protected`\_onHoverIn

* \_onHoverIn(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouse-over event on a control handle

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouseover event

  #### Returns void

### `Protected`\_onHoverOut

* \_onHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouse-out event on a control handle

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouseout event

  #### Returns void

### `Protected`\_onMouseDown

* \_onMouseDown(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  When we start a drag event - create a preview copy of the Tile for re-positioning

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mousedown event

  #### Returns void