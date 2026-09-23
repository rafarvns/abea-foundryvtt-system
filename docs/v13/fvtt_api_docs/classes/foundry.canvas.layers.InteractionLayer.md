---
title: "InteractionLayer | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.InteractionLayer.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

# Class InteractionLayer

A subclass of CanvasLayer which provides support for user interaction with its contained objects.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.InteractionLayer))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)
  + InteractionLayer
    - [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)
    - [ControlsLayer](foundry.canvas.layers.ControlsLayer.html)

##### Index

### Properties

[eventMode](foundry.canvas.layers.InteractionLayer.html#eventmode)
[interactiveChildren](foundry.canvas.layers.InteractionLayer.html#interactivechildren)
[options](foundry.canvas.layers.InteractionLayer.html#options)

### Accessors

[active](foundry.canvas.layers.InteractionLayer.html#active)
[hookName](foundry.canvas.layers.InteractionLayer.html#hookname)
[name](foundry.canvas.layers.InteractionLayer.html#name)
[instance](foundry.canvas.layers.InteractionLayer.html#instance)
[layerOptions](foundry.canvas.layers.InteractionLayer.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.InteractionLayer.html#_draw)
[activate](foundry.canvas.layers.InteractionLayer.html#activate)
[deactivate](foundry.canvas.layers.InteractionLayer.html#deactivate)
[draw](foundry.canvas.layers.InteractionLayer.html#draw)
[getZIndex](foundry.canvas.layers.InteractionLayer.html#getzindex)
[tearDown](foundry.canvas.layers.InteractionLayer.html#teardown)
[\_activate](foundry.canvas.layers.InteractionLayer.html#_activate)
[\_canDragLeftStart](foundry.canvas.layers.InteractionLayer.html#_candragleftstart)
[\_deactivate](foundry.canvas.layers.InteractionLayer.html#_deactivate)
[\_highlightObjects](foundry.canvas.layers.InteractionLayer.html#_highlightobjects)
[\_onClickLeft](foundry.canvas.layers.InteractionLayer.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.layers.InteractionLayer.html#_onclickleft2)
[\_onClickRight](foundry.canvas.layers.InteractionLayer.html#_onclickright)
[\_onClickRight2](foundry.canvas.layers.InteractionLayer.html#_onclickright2)
[\_onCopyKey](foundry.canvas.layers.InteractionLayer.html#_oncopykey)
[\_onCutKey](foundry.canvas.layers.InteractionLayer.html#_oncutkey)
[\_onCycleViewKey](foundry.canvas.layers.InteractionLayer.html#_oncycleviewkey)
[\_onDeleteKey](foundry.canvas.layers.InteractionLayer.html#_ondeletekey)
[\_onDismissKey](foundry.canvas.layers.InteractionLayer.html#_ondismisskey)
[\_onDragLeftCancel](foundry.canvas.layers.InteractionLayer.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.layers.InteractionLayer.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.layers.InteractionLayer.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.layers.InteractionLayer.html#_ondragleftstart)
[\_onMouseWheel](foundry.canvas.layers.InteractionLayer.html#_onmousewheel)
[\_onPasteKey](foundry.canvas.layers.InteractionLayer.html#_onpastekey)
[\_onSelectAllKey](foundry.canvas.layers.InteractionLayer.html#_onselectallkey)
[\_onUndoKey](foundry.canvas.layers.InteractionLayer.html#_onundokey)
[\_tearDown](foundry.canvas.layers.InteractionLayer.html#_teardown)
[prepareSceneControls](foundry.canvas.layers.InteractionLayer.html#preparescenecontrols)

## Properties

### eventMode

eventMode: string = "passive"

Overrides CanvasLayer.eventMode

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[options](foundry.canvas.layers.CanvasLayer.html#options)

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

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Inherited from CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): { name: string; zIndex: number }

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns { name: string; zIndex: number }

  Overrides CanvasLayer.layerOptions

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_draw](foundry.canvas.layers.CanvasLayer.html#_draw)

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

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  The layer instance, now inactive

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[draw](foundry.canvas.layers.CanvasLayer.html#draw)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[tearDown](foundry.canvas.layers.CanvasLayer.html#teardown)

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

* \_tearDown(options: object): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_tearDown](foundry.canvas.layers.CanvasLayer.html#_teardown)

### `Static`prepareSceneControls

* prepareSceneControls(): any

  Prepare data used by SceneControls to register tools used by this layer.

  #### Returns any