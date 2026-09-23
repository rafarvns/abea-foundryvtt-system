---
title: "BaseRuler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.BaseRuler.html"
category: "classes"
---

# Class BaseRuler

The ruler that is used to measure distances on the Canvas.

#### Mixes

RenderFlagsMixin

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.BaseRuler))

* BaseRuler
  + [Ruler](foundry.canvas.interaction.Ruler.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[renderFlags](#renderflags)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[active](#active)
[destination](#destination)
[hidden](#hidden)
[origin](#origin)
[path](#path)
[user](#user)
[visible](#visible)
[canMeasure](#canmeasure)

### Methods

[applyRenderFlags](#applyrenderflags)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[reset](#reset)
[\_addDragWaypoint](#_adddragwaypoint)
[\_changeDragElevation](#_changedragelevation)
[\_onClickLeft](#_onclickleft)
[\_onClickRight](#_onclickright)
[\_onDragCancel](#_ondragcancel)
[\_onDragStart](#_ondragstart)
[\_onHiddenChange](#_onhiddenchange)
[\_onMouseMove](#_onmousemove)
[\_onMouseUp](#_onmouseup)
[\_onMouseWheel](#_onmousewheel)
[\_onPathChange](#_onpathchange)
[\_refresh](#_refresh)
[\_removeDragWaypoint](#_removedragwaypoint)
[getSnappedPoint](#getsnappedpoint)

## Constructors

### constructor

* new BaseRuler(user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)): BaseRuler

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User for whom to construct the Ruler instance

  #### Returns BaseRuler

  Overrides RenderFlagsMixin().constructor

## Properties

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin().renderFlags

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from RenderFlagsMixin().RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: { refresh: {} } = ...

Overrides RenderFlagsMixin().RENDER\_FLAGS

## Accessors

### active

* get active(): boolean

  Is this Ruler active? True, if the path of the Ruler is nonempty.

  #### Returns boolean

### destination

* get destination(): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  The last point of the path, or undefined if the path is empty.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

### hidden

* get hidden(): boolean

  Is this Ruler hidden? If true, only the User of the Ruler can see it.

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```

### origin

* get origin(): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  The first point of the path, or undefined if the path is empty.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

### path

* get path(): readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  The sequence of points that the Ruler measures.

  #### Returns readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  #### Default Value

  ```
  []
  Copy
  ```
* set path(value: readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]): void

  Set the sequence of points that the Ruler measures.

  #### Parameters

  + value: readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  #### Returns void

### user

* get user(): [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

  The User who this Ruler belongs to.

  #### Returns [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

### visible

* get visible(): boolean

  The Ruler is visible if it is active and either not hidden or its User is the current User.

  #### Returns boolean

### `Static`canMeasure

* get canMeasure(): boolean

  Is the Ruler ready to measure?

  #### Returns boolean

## Methods

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Overrides RenderFlagsMixin().applyRenderFlags

### `Abstract`destroy

* destroy(): void

  Destroy the Ruler.

  #### Returns void

### `Abstract`draw

* draw(): Promise<void>

  Draw the Ruler.

  #### Returns Promise<void>

### refresh

* refresh(): void

  Refresh the Ruler.

  #### Returns void

### reset

* reset(): void

  Reset the path and the hidden state of the Ruler.

  #### Returns void

### `Protected`\_addDragWaypoint

* \_addDragWaypoint(point: [Point](../interfaces/foundry.types.Point.md), options?: { snap?: boolean }): void

  `Protected`

  Add a waypoint.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The (unsnapped) waypoint
  + `Optional`options: { snap?: boolean } = {}

    Additional options

    - ##### `Optional`snap?: boolean

      Snap the added waypoint?

  #### Returns void

### `Protected`\_changeDragElevation

* \_changeDragElevation(delta: number, options?: { precise?: boolean }): void

  `Protected`

  Change the elevation of the destination.

  #### Parameters

  + delta: number

    The number vertical steps
  + `Optional`options: { precise?: boolean } = {}

    Additional options

    - ##### `Optional`precise?: boolean

      Round elevations to multiples of the grid distance divided by
      `CONFIG.Canvas.elevationSnappingPrecision`?
      If false, rounds to multiples of the grid distance.

  #### Returns void

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle left-click events on the Canvas during Ruler measurement.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-down event

  #### Returns void

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle right-click events on the Canvas during Ruler measurement.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-down event

  #### Returns void

### `Protected`\_onDragCancel

* \_onDragCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Handle the end of the Ruler measurement workflow

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The drag cancel event

  #### Returns boolean | void

  If false, the cancellation of the drag workflow is prevented

### `Protected`\_onDragStart

* \_onDragStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the beginning of a new Ruler measurement workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The drag start event

  #### Returns void

### `Protected`\_onHiddenChange

* \_onHiddenChange(): void

  `Protected`

  Called when the Ruler becomes hidden or unhidden.

  #### Returns void

### `Protected`\_onMouseMove

* \_onMouseMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a Ruler measurement workflow for left-mouse movements on the Canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouse move event

  #### Returns void

### `Protected`\_onMouseUp

* \_onMouseUp(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Conclude a Ruler measurement workflow by releasing the left-mouse button.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-up event

  #### Returns void

### `Protected`\_onMouseWheel

* \_onMouseWheel(event: WheelEvent): void

  `Protected`

  Adjust the elevation of Ruler waypoints by scrolling up/down.

  #### Parameters

  + event: WheelEvent

    The mousewheel event

  #### Returns void

### `Protected`\_onPathChange

* \_onPathChange(): void

  `Protected`

  Called when the Ruler's path has changed.

  #### Returns void

### `Protected` `Abstract`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the Ruler.

  #### Returns void

### `Protected`\_removeDragWaypoint

* \_removeDragWaypoint(): void

  `Protected`

  Remove the second to last waypoint.

  #### Returns void

### `Static`getSnappedPoint

* getSnappedPoint(point: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Snaps the given point to the grid.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be snapped

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The snapped point