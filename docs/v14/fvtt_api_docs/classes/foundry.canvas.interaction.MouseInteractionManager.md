---
title: "MouseInteractionManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.MouseInteractionManager.html"
category: "classes"
---

# Class MouseInteractionManager

Handle mouse interaction events for a Canvas object.
There are three phases of events: hover, click, and drag

Hover Events:
\_handlePointerOver
action: hoverIn
\_handlePointerOut
action: hoverOut

Left Click and Double-Click
\_handlePointerDown
action: clickLeft
action: clickLeft2
action: unclickLeft

Right Click and Double-Click
\_handleRightDown
action: clickRight
action: clickRight2
action: unclickRight

Drag and Drop
\_handlePointerMove
action: dragLeftStart
action: dragRightStart
action: dragLeftMove
action: dragRightMove
\_handlePointerUp
action: dragLeftDrop
action: dragRightDrop
\_handleDragCancel
action: dragLeftCancel
action: dragRightCancel

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_dragRight](#_dragright)
[controlIcon](#controlicon)
[dragTime](#dragtime)
[interactionData](#interactiondata)
[lastClick](#lastclick)
[lcTime](#lctime)
[options](#options)
[rcTime](#rctime)
[state](#state)
[viewId](#viewid)
[DEFAULT\_DRAG\_RESISTANCE\_PX](#default_drag_resistance_px)
[DOUBLE\_CLICK\_DISTANCE\_PX](#double_click_distance_px)
[DOUBLE\_CLICK\_TIME\_MS](#double_click_time_ms)
[INTERACTION\_STATES](#interaction_states)
[LONG\_PRESS\_DURATION\_MS](#long_press_duration_ms)
[longPressTimeout](#longpresstimeout)

### Accessors

[handlerOutcomes](#handleroutcomes)
[isDragging](#isdragging)
[states](#states)
[target](#target)

### Methods

[activate](#activate)
[callback](#callback)
[can](#can)
[cancel](#cancel)
[handleEvent](#handleevent)
[reset](#reset)
[emulateMoveEvent](#emulatemoveevent)

## Constructors

### constructor

* new MouseInteractionManager(  
  Â Â Â Â object: DisplayObject,  
  Â Â Â Â layer: Container<DisplayObject>,  
  Â Â Â Â permissions?: object,  
  Â Â Â Â callbacks?: object,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â application?: Application<ICanvas>;  
  Â Â Â Â Â Â Â Â dragResistance?: number;  
  Â Â Â Â Â Â Â Â target?: string;  
  Â Â Â Â },  
  ): MouseInteractionManager

  #### Parameters

  + object: DisplayObject

    The Canvas object (e.g., a Token, Tile, or Drawing) to which
    mouse events should be bound.
  + layer: Container<DisplayObject>

    The Canvas Layer that contains the object.
  + `Optional`permissions: object = {}

    An object of permission checks, keyed by action name, which return
    a boolean or invoke a function for whether the action is allowed.
  + `Optional`callbacks: object = {}

    An object of callback functions, keyed by action name, which will
    be executed during the event workflow (e.g., hoverIn, clickLeft).
  + `Optional`options: { application?: Application<ICanvas>; dragResistance?: number; target?: string } = {}

    Additional options that configure interaction behavior.

    - ##### `Optional`application?: Application<ICanvas>

      A specific PIXI Application to use for pointer event handling
      defaults to `canvas.app` if not provided.
    - ##### `Optional`dragResistance?: number

      A minimum number of pixels the mouse must move before a drag is
      initiated.
    - ##### `Optional`target?: string

      If provided, the property name on `object` which references a
      [foundry.canvas.containers.ControlIcon](foundry.canvas.containers.ControlIcon.md).
      This is used to set [MouseInteractionManager#controlIcon](#controlicon).

  #### Returns MouseInteractionManager

## Properties

### `Internal`\_dragRight

\_dragRight: boolean

A flag for whether we are right-click dragging

### controlIcon

controlIcon: [ControlIcon](foundry.canvas.containers.ControlIcon.md) | null

An optional ControlIcon instance for the object

### dragTime

dragTime: number

The drag handling time

### interactionData

interactionData: Record<string, any>

Bound interaction data object to populate with custom data.

### lastClick

lastClick: Point = ...

The client position of the last left/right-click.

### lcTime

lcTime: number

The time of the last left-click event

### options

options: { dragResistance: number; target: DisplayObject }

Interaction options which configure handling workflows

### rcTime

rcTime: number

The time of the last right-click event

### state

state: number

The current interaction state

### viewId

viewId: string

The view id pertaining to the PIXI Application.
If not provided, default to [canvas.app.view.id](http://canvas.app.view.id)

### `Static`DEFAULT\_DRAG\_RESISTANCE\_PX

DEFAULT\_DRAG\_RESISTANCE\_PX: number = 10

The minimum distance, measured in screen-coordinate pixels, that a pointer must move to initiate a drag operation.
This default value can be overridden by specifying the `dragResistance` option when invoking the constructor.

### `Static`DOUBLE\_CLICK\_DISTANCE\_PX

DOUBLE\_CLICK\_DISTANCE\_PX: number = 5

The maximum number of pixels between two clicks to be considered a double-click.

### `Static`DOUBLE\_CLICK\_TIME\_MS

DOUBLE\_CLICK\_TIME\_MS: number = 250

The maximum number of milliseconds between two clicks to be considered a double-click.

### `Static`INTERACTION\_STATES

INTERACTION\_STATES: {  
Â Â Â Â CLICKED: number;  
Â Â Â Â DRAG: number;  
Â Â Â Â DROP: number;  
Â Â Â Â GRABBED: number;  
Â Â Â Â HOVER: number;  
Â Â Â Â NONE: number;  
} = ...

Enumerate the states of a mouse interaction workflow.
0: NONE - the object is inactive
1: HOVER - the mouse is hovered over the object
2: CLICKED - the object is clicked
3: GRABBED - the object is grabbed
4: DRAG - the object is being dragged
5: DROP - the object is being dropped

### `Static`LONG\_PRESS\_DURATION\_MS

LONG\_PRESS\_DURATION\_MS: number = 500

The number of milliseconds of mouse click depression to consider it a long press.

### `Static`longPressTimeout

longPressTimeout: number | null = null

Global timeout for the long-press event.

## Accessors

### handlerOutcomes

* get handlerOutcomes(): Record<string, number>

  A reference to the possible interaction states which can be observed

  #### Returns Record<string, number>

### isDragging

* get isDragging(): boolean

  Is this mouse manager in a dragging state?

  #### Returns boolean

### states

* get states(): Record<string, number>

  A reference to the possible interaction states which can be observed

  #### Returns Record<string, number>

### target

* get target(): DisplayObject

  Get the target.

  #### Returns DisplayObject

## Methods

### activate

* activate(): MouseInteractionManager

  Activate interactivity for the handled object

  #### Returns MouseInteractionManager

### callback

* callback(  
  Â Â Â Â action: string,  
  Â Â Â Â event: Event | FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â ...args: any[],  
  ): boolean

  Execute a callback function associated with a certain action in the workflow

  #### Parameters

  + action: string

    The action being attempted
  + event: Event | FederatedEvent<UIEvent | PixiTouch>

    The event being handled
  + ...args: any[]

    Additional callback arguments.

  #### Returns boolean

  A boolean which may indicate that the event was handled by the callback.
  Events which do not specify a callback are assumed to have been handled as no-op.

### can

* can(action: string, event: Event | FederatedEvent<UIEvent | PixiTouch>): boolean

  Test whether the current user has permission to perform a step of the workflow

  #### Parameters

  + action: string

    The action being attempted
  + event: Event | FederatedEvent<UIEvent | PixiTouch>

    The event being handled

  #### Returns boolean

  Can the action be performed?

### cancel

* cancel(event?: FederatedEvent<UIEvent | PixiTouch>): void

  A public method to cancel a current interaction workflow from this manager.

  #### Parameters

  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The event that initiates the cancellation

  #### Returns void

### handleEvent

* handleEvent(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  A public method to handle directly an event into this manager, according to its type.
  Note: drag events are not handled.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Has the event been processed?

### reset

* reset(options?: { interactionData?: boolean; state?: boolean }): void

  Reset the mouse manager.

  #### Parameters

  + `Optional`options: { interactionData?: boolean; state?: boolean } = {}
    - ##### `Optional`interactionData?: boolean

      Reset the interaction data?
    - ##### `Optional`state?: boolean

      Reset the state?

  #### Returns void

### `Static`emulateMoveEvent

* emulateMoveEvent(): void

  Emulate a pointermove event on the main game canvas.
  This method must be called when an object with the static event mode or any of its parents is transformed
  or its visibility is changed.

  #### Returns void