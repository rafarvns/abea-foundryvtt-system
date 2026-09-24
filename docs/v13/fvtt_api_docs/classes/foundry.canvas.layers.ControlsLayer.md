---
title: "ControlsLayer | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.ControlsLayer.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [ControlsLayer](foundry.canvas.layers.ControlsLayer.html)

# Class ControlsLayer

A CanvasLayer for displaying UI controls which are overlayed on top of other layers.

We track three types of events:

1. Cursor movement
2. Ruler measurement
3. Map pings

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.ControlsLayer))

* [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)
  + ControlsLayer

##### Index

### Properties

[\_rulerPaths](foundry.canvas.layers.ControlsLayer.html#_rulerpaths)
[cursors](foundry.canvas.layers.ControlsLayer.html#cursors)
[debug](foundry.canvas.layers.ControlsLayer.html#debug)
[doors](foundry.canvas.layers.ControlsLayer.html#doors)
[eventMode](foundry.canvas.layers.ControlsLayer.html#eventmode)
[options](foundry.canvas.layers.ControlsLayer.html#options)
[pings](foundry.canvas.layers.ControlsLayer.html#pings)
[select](foundry.canvas.layers.ControlsLayer.html#select)

### Accessors

[active](foundry.canvas.layers.ControlsLayer.html#active)
[hookName](foundry.canvas.layers.ControlsLayer.html#hookname)
[name](foundry.canvas.layers.ControlsLayer.html#name)
[ruler](foundry.canvas.layers.ControlsLayer.html#ruler)
[instance](foundry.canvas.layers.ControlsLayer.html#instance)
[layerOptions](foundry.canvas.layers.ControlsLayer.html#layeroptions)

### Methods

[\_deactivate](foundry.canvas.layers.ControlsLayer.html#_deactivate)
[\_draw](foundry.canvas.layers.ControlsLayer.html#_draw)
[\_onMouseMove](foundry.canvas.layers.ControlsLayer.html#_onmousemove)
[\_tearDown](foundry.canvas.layers.ControlsLayer.html#_teardown)
[activate](foundry.canvas.layers.ControlsLayer.html#activate)
[deactivate](foundry.canvas.layers.ControlsLayer.html#deactivate)
[draw](foundry.canvas.layers.ControlsLayer.html#draw)
[drawCursor](foundry.canvas.layers.ControlsLayer.html#drawcursor)
[drawCursors](foundry.canvas.layers.ControlsLayer.html#drawcursors)
[drawDoors](foundry.canvas.layers.ControlsLayer.html#drawdoors)
[drawOffscreenPing](foundry.canvas.layers.ControlsLayer.html#drawoffscreenping)
[drawPing](foundry.canvas.layers.ControlsLayer.html#drawping)
[drawRuler](foundry.canvas.layers.ControlsLayer.html#drawruler)
[drawRulers](foundry.canvas.layers.ControlsLayer.html#drawrulers)
[drawSelect](foundry.canvas.layers.ControlsLayer.html#drawselect)
[getCursorForUser](foundry.canvas.layers.ControlsLayer.html#getcursorforuser)
[getRulerForUser](foundry.canvas.layers.ControlsLayer.html#getrulerforuser)
[getZIndex](foundry.canvas.layers.ControlsLayer.html#getzindex)
[handlePing](foundry.canvas.layers.ControlsLayer.html#handleping)
[tearDown](foundry.canvas.layers.ControlsLayer.html#teardown)
[updateCursor](foundry.canvas.layers.ControlsLayer.html#updatecursor)
[updateRuler](foundry.canvas.layers.ControlsLayer.html#updateruler)
[\_activate](foundry.canvas.layers.ControlsLayer.html#_activate)
[\_canDragLeftStart](foundry.canvas.layers.ControlsLayer.html#_candragleftstart)
[\_highlightObjects](foundry.canvas.layers.ControlsLayer.html#_highlightobjects)
[\_onCanvasPan](foundry.canvas.layers.ControlsLayer.html#_oncanvaspan)
[\_onClickLeft](foundry.canvas.layers.ControlsLayer.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.layers.ControlsLayer.html#_onclickleft2)
[\_onClickRight](foundry.canvas.layers.ControlsLayer.html#_onclickright)
[\_onClickRight2](foundry.canvas.layers.ControlsLayer.html#_onclickright2)
[\_onCopyKey](foundry.canvas.layers.ControlsLayer.html#_oncopykey)
[\_onCutKey](foundry.canvas.layers.ControlsLayer.html#_oncutkey)
[\_onCycleViewKey](foundry.canvas.layers.ControlsLayer.html#_oncycleviewkey)
[\_onDeleteKey](foundry.canvas.layers.ControlsLayer.html#_ondeletekey)
[\_onDismissKey](foundry.canvas.layers.ControlsLayer.html#_ondismisskey)
[\_onDragLeftCancel](foundry.canvas.layers.ControlsLayer.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.layers.ControlsLayer.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.layers.ControlsLayer.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.layers.ControlsLayer.html#_ondragleftstart)
[\_onLongPress](foundry.canvas.layers.ControlsLayer.html#_onlongpress)
[\_onMouseWheel](foundry.canvas.layers.ControlsLayer.html#_onmousewheel)
[\_onPasteKey](foundry.canvas.layers.ControlsLayer.html#_onpastekey)
[\_onSelectAllKey](foundry.canvas.layers.ControlsLayer.html#_onselectallkey)
[\_onUndoKey](foundry.canvas.layers.ControlsLayer.html#_onundokey)
[prepareSceneControls](foundry.canvas.layers.ControlsLayer.html#preparescenecontrols)

## Properties

### `Internal`\_rulerPaths

\_rulerPaths: Container<DisplayObject>

The ruler paths.

### cursors

cursors: [UnboundContainer](foundry.canvas.containers.UnboundContainer.html)

A container of cursor interaction elements not bound to stage transforms.
Contains cursors elements.

### debug

debug: Graphics

A graphics instance used for drawing debugging visualization

### doors

doors: Container<DisplayObject>

A container of DoorControl instances

### eventMode

eventMode: string = "passive"

Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[eventMode](foundry.canvas.layers.InteractionLayer.html#eventmode)

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[options](foundry.canvas.layers.InteractionLayer.html#options)

### pings

pings: Container<DisplayObject>

A container of pings interaction elements.
Contains pings elements.

### select

select: Graphics

The Canvas selection rectangle

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

  Inherited from InteractionLayer.active

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from InteractionLayer.hookName

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

  Inherited from InteractionLayer.name

### ruler

* get ruler(): [BaseRuler](foundry.canvas.interaction.BaseRuler.html)

  A convenience accessor to the Ruler for the active game user

  #### Returns [BaseRuler](foundry.canvas.interaction.BaseRuler.html)

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Inherited from InteractionLayer.instance

### `Static`layerOptions

* get layerOptions(): object

  #### Returns object

  Overrides InteractionLayer.layerOptions

## Methods

### \_deactivate

* \_deactivate(): void

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_deactivate](foundry.canvas.layers.InteractionLayer.html#_deactivate)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_draw](foundry.canvas.layers.InteractionLayer.html#_draw)

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

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_tearDown](foundry.canvas.layers.InteractionLayer.html#_teardown)

### activate

* activate(options?: { tool?: string }): [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.

  #### Parameters

  + `Optional`options: { tool?: string } = {}

    Options which configure layer activation

    - ##### `Optional`tool?: string

      A specific tool in the control palette to set as active

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  The layer instance, now activated

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[activate](foundry.canvas.layers.InteractionLayer.html#activate)

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  The layer instance, now inactive

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[deactivate](foundry.canvas.layers.InteractionLayer.html#deactivate)

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[draw](foundry.canvas.layers.InteractionLayer.html#draw)

### drawCursor

* drawCursor(user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)): [Cursor](foundry.canvas.containers.Cursor.html)

  Create and draw the Cursor object for a given User.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User document for whom to draw the cursor Container

  #### Returns [Cursor](foundry.canvas.containers.Cursor.html)

### drawCursors

* drawCursors(): void

  Draw the cursors container

  #### Returns void

### drawDoors

* drawDoors(): void

  Draw door control icons to the doors container.

  #### Returns void

### drawOffscreenPing

* drawOffscreenPing(position: [Point](../interfaces/foundry.types.Point.html), options?: any): Promise<boolean>

  Draw a ping at the edge of the viewport, pointing to the location of an off-screen ping.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.html)

    The coordinates of the off-screen ping.
  + `Optional`options: any = {}

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated.

  #### See

  [ControlsLayer#drawPing](foundry.canvas.layers.ControlsLayer.html#drawping)

### drawPing

* drawPing(position: [Point](../interfaces/foundry.types.Point.html), options?: any): Promise<boolean>

  Draw a ping on the canvas.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.html)

    The position on the canvas that was pinged.
  + `Optional`options: any = {}

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated.

  #### See

  [foundry.canvas.interaction.Ping#animate](foundry.canvas.interaction.Ping.html#animate)

### drawRuler

* drawRuler(user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)): Promise<[BaseRuler](foundry.canvas.interaction.BaseRuler.html)>

  Create and draw the Ruler object for a given User.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User document for whom to draw the Ruler

  #### Returns Promise<[BaseRuler](foundry.canvas.interaction.BaseRuler.html)>

  The Ruler instance

### drawRulers

* drawRulers(): Promise<void>

  Create and add Ruler instances for every game User.

  #### Returns Promise<void>

### drawSelect

* drawSelect(coords: [Rectangle](../interfaces/foundry.types.Rectangle.html)): void

  Draw the select rectangle given an event originated within the base canvas layer

  #### Parameters

  + coords: [Rectangle](../interfaces/foundry.types.Rectangle.html)

    The rectangle

  #### Returns void

### getCursorForUser

* getCursorForUser(userId: string): null | [Cursor](foundry.canvas.containers.Cursor.html)

  Get the Cursor instance for a specific User ID.

  #### Parameters

  + userId: string

    The User ID

  #### Returns null | [Cursor](foundry.canvas.containers.Cursor.html)

### getRulerForUser

* getRulerForUser(userId: string): null | [BaseRuler](foundry.canvas.interaction.BaseRuler.html)

  Get the Ruler instance for a specific User ID.

  #### Parameters

  + userId: string

    The User ID

  #### Returns null | [BaseRuler](foundry.canvas.interaction.BaseRuler.html)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[getZIndex](foundry.canvas.layers.InteractionLayer.html#getzindex)

### handlePing

* handlePing(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â position: [Point](../interfaces/foundry.types.Point.html),  
  Â Â Â Â data?: [PingData](../interfaces/foundry.canvas.interaction.types.PingData.html),  
  ): Promise<boolean>

  Handle a broadcast ping.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The user who pinged.
  + position: [Point](../interfaces/foundry.types.Point.html)

    The position on the canvas that was pinged.
  + `Optional`data: [PingData](../interfaces/foundry.canvas.interaction.types.PingData.html) = {}

    The broadcast ping data.

  #### Returns Promise<boolean>

  A promise which resolves once the Ping has been drawn and animated

  #### See

  [ControlsLayer#drawPing](foundry.canvas.layers.ControlsLayer.html#drawping)

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[tearDown](foundry.canvas.layers.InteractionLayer.html#teardown)

### updateCursor

* updateCursor(user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html), position: [Point](../interfaces/foundry.types.Point.html)): void

  Update the cursor when the user moves to a new position

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User for whom to update the cursor
  + position: [Point](../interfaces/foundry.types.Point.html)

    The new cursor position

  #### Returns void

### updateRuler

* updateRuler(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â data: null | { hidden: boolean; path: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)[] },  
  ): Promise<void>

  Update the Ruler for a User given the provided path.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User for whom to update the Ruler
  + data: null | { hidden: boolean; path: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)[] }

    The path and hidden state of the Ruler

  #### Returns Promise<void>

### `Protected`\_activate

* \_activate(): void

  `Protected`

  The inner \_activate method which may be defined by each InteractionLayer subclass.

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_activate](foundry.canvas.layers.InteractionLayer.html#_activate)

### `Protected`\_canDragLeftStart

* \_canDragLeftStart(  
  Â Â Â Â user: User,  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to left-click drag on the Canvas?

  #### Parameters

  + user: User

    The User performing the action.
  + event: FederatedEvent<UIEvent | PixiTouch>

    The event object.

  #### Returns boolean

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_canDragLeftStart](foundry.canvas.layers.InteractionLayer.html#_candragleftstart)

### `Protected`\_highlightObjects

* \_highlightObjects(active: boolean): void

  `Protected`

  Highlight the objects of this layer.

  #### Parameters

  + active: boolean

    Should the objects of this layer be highlighted?

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_highlightObjects](foundry.canvas.layers.InteractionLayer.html#_highlightobjects)

### `Protected`\_onCanvasPan

* \_onCanvasPan(): void

  `Protected`

  Handle the canvas panning to a new view.

  #### Returns void

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle left mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onClickLeft](foundry.canvas.layers.InteractionLayer.html#_onclickleft)

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onClickLeft2](foundry.canvas.layers.InteractionLayer.html#_onclickleft2)

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onClickRight](foundry.canvas.layers.InteractionLayer.html#_onclickright)

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onClickRight2](foundry.canvas.layers.InteractionLayer.html#_onclickright2)

### `Protected`\_onCopyKey

* \_onCopyKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Copy keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The copy key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onCopyKey](foundry.canvas.layers.InteractionLayer.html#_oncopykey)

### `Protected`\_onCutKey

* \_onCutKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cut keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cut key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onCutKey](foundry.canvas.layers.InteractionLayer.html#_oncutkey)

### `Protected`\_onCycleViewKey

* \_onCycleViewKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cycle View keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cycle-view key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onCycleViewKey](foundry.canvas.layers.InteractionLayer.html#_oncycleviewkey)

### `Protected`\_onDeleteKey

* \_onDeleteKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Delete keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The delete key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDeleteKey](foundry.canvas.layers.InteractionLayer.html#_ondeletekey)

### `Protected`\_onDismissKey

* \_onDismissKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Dismiss keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The dismiss key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDismissKey](foundry.canvas.layers.InteractionLayer.html#_ondismisskey)

### `Protected`\_onDragLeftCancel

* \_onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Cancel a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDragLeftCancel](foundry.canvas.layers.InteractionLayer.html#_ondragleftcancel)

### `Protected`\_onDragLeftDrop

* \_onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Conclude a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDragLeftDrop](foundry.canvas.layers.InteractionLayer.html#_ondragleftdrop)

### `Protected`\_onDragLeftMove

* \_onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDragLeftMove](foundry.canvas.layers.InteractionLayer.html#_ondragleftmove)

### `Protected`\_onDragLeftStart

* \_onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Start a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onDragLeftStart](foundry.canvas.layers.InteractionLayer.html#_ondragleftstart)

### `Protected`\_onLongPress

* \_onLongPress(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â origin: Point,  
  ): undefined | Promise<boolean>

  `Protected`

  Handle pinging the canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event.
  + origin: Point

    The local canvas coordinates of the mousepress.

  #### Returns undefined | Promise<boolean>

### `Protected`\_onMouseWheel

* \_onMouseWheel(event: WheelEvent): void

  `Protected`

  Handle mouse-wheel events which occur for this active layer.

  #### Parameters

  + event: WheelEvent

    The WheelEvent initiated on the document

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onMouseWheel](foundry.canvas.layers.InteractionLayer.html#_onmousewheel)

### `Protected`\_onPasteKey

* \_onPasteKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Paste keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The paste key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onPasteKey](foundry.canvas.layers.InteractionLayer.html#_onpastekey)

### `Protected`\_onSelectAllKey

* \_onSelectAllKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Select All keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The select-all key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onSelectAllKey](foundry.canvas.layers.InteractionLayer.html#_onselectallkey)

### `Protected`\_onUndoKey

* \_onUndoKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Undo keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The undo key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[\_onUndoKey](foundry.canvas.layers.InteractionLayer.html#_onundokey)

### `Static`prepareSceneControls

* prepareSceneControls(): any

  Prepare data used by SceneControls to register tools used by this layer.

  #### Returns any

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.html).[prepareSceneControls](foundry.canvas.layers.InteractionLayer.html#preparescenecontrols)