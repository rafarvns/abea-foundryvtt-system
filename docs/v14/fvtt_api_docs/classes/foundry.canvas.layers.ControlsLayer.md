---
title: "ControlsLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.ControlsLayer.html"
category: "classes"
---

# Class ControlsLayer

A CanvasLayer for displaying UI controls which are overlayed on top of other layers.

We track three types of events:

1. Cursor movement
2. Ruler measurement
3. Map pings

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.ControlsLayer))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)
  + ControlsLayer

##### Index

### Properties

[\_rulerPaths](#_rulerpaths)
[cursors](#cursors)
[debug](#debug)
[doors](#doors)
[options](#options)
[pings](#pings)
[select](#select)

### Accessors

[hookName](#hookname)
[name](#name)
[ruler](#ruler)
[instance](#instance)
[layerOptions](#layeroptions)

### Methods

[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_onMouseMove](#_onmousemove)
[\_tearDown](#_teardown)
[draw](#draw)
[drawCursor](#drawcursor)
[drawCursors](#drawcursors)
[drawDoors](#drawdoors)
[drawOffscreenPing](#drawoffscreenping)
[drawPing](#drawping)
[drawRuler](#drawruler)
[drawRulers](#drawrulers)
[drawSelect](#drawselect)
[getCursorForUser](#getcursorforuser)
[getRulerForUser](#getrulerforuser)
[getZIndex](#getzindex)
[handlePing](#handleping)
[tearDown](#teardown)
[updateCursor](#updatecursor)
[updateRuler](#updateruler)
[\_onCanvasPan](#_oncanvaspan)
[\_onLongPress](#_onlongpress)

## Properties

### `Internal`\_rulerPaths

\_rulerPaths: Container<DisplayObject>

The ruler paths.

### cursors

cursors: [UnboundContainer](foundry.canvas.containers.UnboundContainer.md)

A container of cursor interaction elements not bound to stage transforms.
Contains cursors elements.

### debug

debug: Graphics

A graphics instance used for drawing debugging visualization

### doors

doors: Container<DisplayObject>

A container of DoorControl instances

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[options](foundry.canvas.layers.CanvasLayer.md#options)

### pings

pings: Container<DisplayObject>

A container of pings interaction elements.
Contains pings elements.

### select

select: Graphics

The Canvas selection rectangle

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasLayer.hookName

### name

* get name(): string

  The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
  defined baseClass for the layer type.

  #### Returns string

  #### Example

  ```
  canvas.lighting.name -> "LightingLayer"
  Copy
  ```

  Inherited from CanvasLayer.name

### ruler

* get ruler(): [BaseRuler](foundry.canvas.interaction.BaseRuler.md)

  A convenience accessor to the Ruler for the active game user

  #### Returns [BaseRuler](foundry.canvas.interaction.BaseRuler.md)

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): object

  #### Returns object

  Overrides CanvasLayer.layerOptions

## Methods

### \_deactivate

* \_deactivate(): void

  #### Returns void

### \_draw

* \_draw(options: any): Promise<void>

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is drawn

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_draw](foundry.canvas.layers.CanvasLayer.md#_draw)

### \_onMouseMove

* \_onMouseMove(currentPos: Point): void

  `Internal`

  Handle mousemove events on the game canvas to broadcast activity. With SHOW\_CURSOR permission enabled,
  the user's cursor position is transmitted.

  #### Parameters

  + currentPos: Point

  #### Returns void

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_tearDown](foundry.canvas.layers.CanvasLayer.md#_teardown)

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[draw](foundry.canvas.layers.CanvasLayer.md#draw)

### drawCursor

* drawCursor(user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)): [Cursor](foundry.canvas.containers.Cursor.md)

  Create and draw the Cursor object for a given User.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User document for whom to draw the cursor Container

  #### Returns [Cursor](foundry.canvas.containers.Cursor.md)

### drawCursors

* drawCursors(): void

  Draw the cursors container

  #### Returns void

### drawDoors

* drawDoors(): void

  Draw door control icons to the doors container.

  #### Returns void

### drawOffscreenPing

* drawOffscreenPing(position: [Point](../interfaces/foundry.types.Point.md), options?: any): Promise<boolean>

  Draw a ping at the edge of the viewport, pointing to the location of an off-screen ping.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.md)

    The coordinates of the off-screen ping.
  + `Optional`options: any = {}

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated.

  #### See

  [ControlsLayer#drawPing](#drawping)

### drawPing

* drawPing(position: [Point](../interfaces/foundry.types.Point.md), options?: any): Promise<boolean>

  Draw a ping on the canvas.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.md)

    The position on the canvas that was pinged.
  + `Optional`options: any = {}

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated.

  #### See

  [foundry.canvas.interaction.Ping#animate](foundry.canvas.interaction.Ping.md#animate)

### drawRuler

* drawRuler(user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)): Promise<[BaseRuler](foundry.canvas.interaction.BaseRuler.md)>

  Create and draw the Ruler object for a given User.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User document for whom to draw the Ruler

  #### Returns Promise<[BaseRuler](foundry.canvas.interaction.BaseRuler.md)>

  The Ruler instance

### drawRulers

* drawRulers(): Promise<void>

  Create and add Ruler instances for every game User.

  #### Returns Promise<void>

### drawSelect

* drawSelect(coords: [Rectangle](../interfaces/foundry.types.Rectangle.md)): void

  Draw the select rectangle given an event originated within the base canvas layer

  #### Parameters

  + coords: [Rectangle](../interfaces/foundry.types.Rectangle.md)

    The rectangle

  #### Returns void

### getCursorForUser

* getCursorForUser(userId: string): [Cursor](foundry.canvas.containers.Cursor.md) | null

  Get the Cursor instance for a specific User ID.

  #### Parameters

  + userId: string

    The User ID

  #### Returns [Cursor](foundry.canvas.containers.Cursor.md) | null

### getRulerForUser

* getRulerForUser(userId: string): [BaseRuler](foundry.canvas.interaction.BaseRuler.md) | null

  Get the Ruler instance for a specific User ID.

  #### Parameters

  + userId: string

    The User ID

  #### Returns [BaseRuler](foundry.canvas.interaction.BaseRuler.md) | null

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[getZIndex](foundry.canvas.layers.CanvasLayer.md#getzindex)

### handlePing

* handlePing(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â position: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â data?: [PingData](../interfaces/foundry.canvas.interaction.types.PingData.md),  
  ): Promise<boolean>

  Handle a broadcast ping.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The user who pinged.
  + position: [Point](../interfaces/foundry.types.Point.md)

    The position on the canvas that was pinged.
  + `Optional`data: [PingData](../interfaces/foundry.canvas.interaction.types.PingData.md) = {}

    The broadcast ping data.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated

  #### See

  [ControlsLayer#drawPing](#drawping)

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

### updateCursor

* updateCursor(user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md), position: [Point](../interfaces/foundry.types.Point.md)): void

  Update the cursor when the user moves to a new position

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User for whom to update the cursor
  + position: [Point](../interfaces/foundry.types.Point.md)

    The new cursor position

  #### Returns void

### updateRuler

* updateRuler(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â data: { hidden: boolean; path: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[] } | null,  
  ): Promise<void>

  Update the Ruler for a User given the provided path.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User for whom to update the Ruler
  + data: { hidden: boolean; path: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)[] } | null

    The path and hidden state of the Ruler

  #### Returns Promise<void>

### `Protected`\_onCanvasPan

* \_onCanvasPan(): void

  `Protected`

  Handle the canvas panning to a new view.

  #### Returns void

### `Protected`\_onLongPress

* \_onLongPress(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â origin: Point,  
  ): Promise<boolean> | undefined

  `Protected`

  Handle pinging the canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event.
  + origin: Point

    The local canvas coordinates of the mousepress.

  #### Returns Promise<boolean> | undefined