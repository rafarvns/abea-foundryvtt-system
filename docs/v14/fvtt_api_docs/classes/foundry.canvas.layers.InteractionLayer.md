---
title: "InteractionLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.InteractionLayer.html"
category: "classes"
---

# Class InteractionLayer

A subclass of CanvasLayer which provides support for user interaction with its contained objects.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.InteractionLayer))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)
  + InteractionLayer
    - [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

##### Index

### Properties

[eventMode](#eventmode)
[options](#options)

### Accessors

[active](#active)
[hookName](#hookname)
[name](#name)
[instance](#instance)
[layerOptions](#layeroptions)
[TOGGLE\_PALETTE](#toggle_palette)

### Methods

[activate](#activate)
[deactivate](#deactivate)
[draw](#draw)
[getZIndex](#getzindex)
[tearDown](#teardown)
[\_activate](#_activate)
[\_canDragLeftStart](#_candragleftstart)
[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_highlightObjects](#_highlightobjects)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight](#_onclickright)
[\_onClickRight2](#_onclickright2)
[\_onCopyKey](#_oncopykey)
[\_onCutKey](#_oncutkey)
[\_onCycleViewKey](#_oncycleviewkey)
[\_onDeleteKey](#_ondeletekey)
[\_onDismissKey](#_ondismisskey)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragLeftMove](#_ondragleftmove)
[\_onDragLeftStart](#_ondragleftstart)
[\_onMouseWheel](#_onmousewheel)
[\_onPasteKey](#_onpastekey)
[\_onSelectAllKey](#_onselectallkey)
[\_onUndoKey](#_onundokey)
[\_tearDown](#_teardown)
[prepareSceneControls](#preparescenecontrols)

## Properties

### eventMode

eventMode: string = "passive"

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[options](foundry.canvas.layers.CanvasLayer.md#options)

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

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

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): { name: string; zIndex: number } & {  
  Â Â Â Â baseClass: typeof InteractionLayer;  
  }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string; zIndex: number } & { baseClass: typeof InteractionLayer }

  Overrides CanvasLayer.layerOptions

### `Static`TOGGLE\_PALETTE

* get TOGGLE\_PALETTE(): Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  The shared palette tool.

  #### Returns Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

## Methods

### activate

* activate(options?: { tool?: string }): InteractionLayer

  Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.

  #### Parameters

  + `Optional`options: { tool?: string } = {}

    Options which configure layer activation

    - ##### `Optional`tool?: string

      A specific tool in the control palette to set as active

  #### Returns InteractionLayer

  The layer instance, now activated

### deactivate

* deactivate(): InteractionLayer

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns InteractionLayer

  The layer instance, now inactive

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[draw](foundry.canvas.layers.CanvasLayer.md#draw)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[getZIndex](foundry.canvas.layers.CanvasLayer.md#getzindex)

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

### `Protected`\_activate

* \_activate(): void

  `Protected`

  The inner \_activate method which may be defined by each InteractionLayer subclass.

  #### Returns void

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

### `Protected`\_deactivate

* \_deactivate(): void

  `Protected`

  The inner \_deactivate method which may be defined by each InteractionLayer subclass.

  #### Returns void

### `Protected`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is drawn

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_draw](foundry.canvas.layers.CanvasLayer.md#_draw)

### `Protected`\_highlightObjects

* \_highlightObjects(active: boolean): void

  `Protected`

  Highlight the objects of this layer.

  #### Parameters

  + active: boolean

    Should the objects of this layer be highlighted?

  #### Returns void

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle left mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onCopyKey

* \_onCopyKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Copy keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The copy key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onCutKey

* \_onCutKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cut keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cut key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onCycleViewKey

* \_onCycleViewKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cycle View keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cycle-view key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onDeleteKey

* \_onDeleteKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Delete keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The delete key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onDismissKey

* \_onDismissKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Dismiss keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The dismiss key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onDragLeftCancel

* \_onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Cancel a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onDragLeftDrop

* \_onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Conclude a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onDragLeftMove

* \_onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onDragLeftStart

* \_onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Start a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

### `Protected`\_onMouseWheel

* \_onMouseWheel(event: WheelEvent): void

  `Protected`

  Handle mouse-wheel events which occur for this active layer.

  #### Parameters

  + event: WheelEvent

    The WheelEvent initiated on the document

  #### Returns void

### `Protected`\_onPasteKey

* \_onPasteKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Paste keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The paste key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onSelectAllKey

* \_onSelectAllKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Select All keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The select-all key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_onUndoKey

* \_onUndoKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Undo keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The undo key press event

  #### Returns boolean

  Was the event handled?

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_tearDown](foundry.canvas.layers.CanvasLayer.md#_teardown)

### `Static`prepareSceneControls

* prepareSceneControls(): [SceneControl](../interfaces/foundry.SceneControl.md) | null

  Prepare data used by SceneControls to register tools used by this layer.

  #### Returns [SceneControl](../interfaces/foundry.SceneControl.md) | null