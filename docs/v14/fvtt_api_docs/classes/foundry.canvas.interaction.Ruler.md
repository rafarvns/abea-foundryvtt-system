---
title: "Ruler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.interaction.Ruler.html"
category: "classes"
---

# Class Ruler

The default implementation of the Ruler.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.interaction.Ruler))

* [BaseRuler](foundry.canvas.interaction.BaseRuler.md)
  + Ruler

##### Index

### Properties

[renderFlags](#renderflags)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)
[WAYPOINT\_LABEL\_TEMPLATE](#waypoint_label_template)

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

[\_refresh](#_refresh)
[applyRenderFlags](#applyrenderflags)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[reset](#reset)
[\_addDragWaypoint](#_adddragwaypoint)
[\_changeDragElevation](#_changedragelevation)
[\_configureOutline](#_configureoutline)
[\_getSegmentStyle](#_getsegmentstyle)
[\_getWaypointLabelContext](#_getwaypointlabelcontext)
[\_getWaypointStyle](#_getwaypointstyle)
[\_onClickLeft](#_onclickleft)
[\_onClickRight](#_onclickright)
[\_onDragCancel](#_ondragcancel)
[\_onDragStart](#_ondragstart)
[\_onHiddenChange](#_onhiddenchange)
[\_onMouseMove](#_onmousemove)
[\_onMouseUp](#_onmouseup)
[\_onMouseWheel](#_onmousewheel)
[\_onPathChange](#_onpathchange)
[\_removeDragWaypoint](#_removedragwaypoint)
[getSnappedPoint](#getsnappedpoint)

## Properties

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[renderFlags](foundry.canvas.interaction.BaseRuler.md#renderflags)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[RENDER\_FLAG\_PRIORITY](foundry.canvas.interaction.BaseRuler.md#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: { refresh: {} } = ...

Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[RENDER\_FLAGS](foundry.canvas.interaction.BaseRuler.md#render_flags)

### `Static`WAYPOINT\_LABEL\_TEMPLATE

WAYPOINT\_LABEL\_TEMPLATE: string = "templates/hud/waypoint-label.hbs"

A handlebars template used to render each waypoint label.

## Accessors

### active

* get active(): boolean

  Is this Ruler active? True, if the path of the Ruler is nonempty.

  #### Returns boolean

  Inherited from BaseRuler.active

### destination

* get destination(): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  The last point of the path, or undefined if the path is empty.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  Inherited from BaseRuler.destination

### hidden

* get hidden(): boolean

  Is this Ruler hidden? If true, only the User of the Ruler can see it.

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```

  Inherited from BaseRuler.hidden

### origin

* get origin(): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  The first point of the path, or undefined if the path is empty.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md) | undefined

  Inherited from BaseRuler.origin

### path

* get path(): readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  The sequence of points that the Ruler measures.

  #### Returns readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  #### Default Value

  ```
  []
  Copy
  ```

  Inherited from BaseRuler.path
* set path(value: readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]): void

  Set the sequence of points that the Ruler measures.

  #### Parameters

  + value: readonly Readonly<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>[]

  #### Returns void

  Inherited from BaseRuler.path

### user

* get user(): [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

  The User who this Ruler belongs to.

  #### Returns [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

  Inherited from BaseRuler.user

### visible

* get visible(): boolean

  The Ruler is visible if it is active and either not hidden or its User is the current User.

  #### Returns boolean

  Inherited from BaseRuler.visible

### `Static`canMeasure

* get canMeasure(): boolean

  Is the Ruler ready to measure?

  #### Returns boolean

  Inherited from BaseRuler.canMeasure

## Methods

### \_refresh

* \_refresh(): void

  #### Returns void

  Overrides [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_refresh](foundry.canvas.interaction.BaseRuler.md#_refresh)

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[applyRenderFlags](foundry.canvas.interaction.BaseRuler.md#applyrenderflags)

### destroy

* destroy(): void

  #### Returns void

  Overrides [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[destroy](foundry.canvas.interaction.BaseRuler.md#destroy)

### draw

* draw(): Promise<void>

  #### Returns Promise<void>

  Overrides [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[draw](foundry.canvas.interaction.BaseRuler.md#draw)

### refresh

* refresh(): void

  Refresh the Ruler.

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[refresh](foundry.canvas.interaction.BaseRuler.md#refresh)

### reset

* reset(): void

  Reset the path and the hidden state of the Ruler.

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[reset](foundry.canvas.interaction.BaseRuler.md#reset)

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

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_addDragWaypoint](foundry.canvas.interaction.BaseRuler.md#_adddragwaypoint)

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

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_changeDragElevation](foundry.canvas.interaction.BaseRuler.md#_changedragelevation)

### `Protected`\_configureOutline

* \_configureOutline(): { color: ColorSource; thickness: number }

  `Protected`

  Configure the properties of the outline.
  Called in [Ruler#draw](#draw).

  #### Returns { color: ColorSource; thickness: number }

  The thickness in pixels and the color

### `Protected`\_getSegmentStyle

* \_getSegmentStyle(  
  Â Â Â Â waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>,  
  ): { alpha?: number; color?: ColorSource; width: number }

  `Protected`

  Get the style of the segment from the previous to the given waypoint.

  #### Parameters

  + waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>

    The waypoint

  #### Returns { alpha?: number; color?: ColorSource; width: number }

  The line width, color, and alpha of the segment

### `Protected`\_getWaypointLabelContext

* \_getWaypointLabelContext(  
  Â Â Â Â waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>,  
  Â Â Â Â state: object,  
  ): void | object

  `Protected`

  Get the context used to render a ruler waypoint label.

  #### Parameters

  + waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>
  + state: object

  #### Returns void | object

### `Protected`\_getWaypointStyle

* \_getWaypointStyle(  
  Â Â Â Â waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>,  
  ): { alpha?: number; color?: ColorSource; radius: number }

  `Protected`

  Get the style of the waypoint at the given waypoint.

  #### Parameters

  + waypoint: DeepReadonly<[RulerWaypoint](../interfaces/foundry.types.RulerWaypoint.md)>

    The waypoint

  #### Returns { alpha?: number; color?: ColorSource; radius: number }

  The radius, color, and alpha of the waypoint

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle left-click events on the Canvas during Ruler measurement.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-down event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onClickLeft](foundry.canvas.interaction.BaseRuler.md#_onclickleft)

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle right-click events on the Canvas during Ruler measurement.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-down event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onClickRight](foundry.canvas.interaction.BaseRuler.md#_onclickright)

### `Protected`\_onDragCancel

* \_onDragCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Handle the end of the Ruler measurement workflow

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The drag cancel event

  #### Returns boolean | void

  If false, the cancellation of the drag workflow is prevented

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onDragCancel](foundry.canvas.interaction.BaseRuler.md#_ondragcancel)

### `Protected`\_onDragStart

* \_onDragStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the beginning of a new Ruler measurement workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The drag start event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onDragStart](foundry.canvas.interaction.BaseRuler.md#_ondragstart)

### `Protected`\_onHiddenChange

* \_onHiddenChange(): void

  `Protected`

  Called when the Ruler becomes hidden or unhidden.

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onHiddenChange](foundry.canvas.interaction.BaseRuler.md#_onhiddenchange)

### `Protected`\_onMouseMove

* \_onMouseMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a Ruler measurement workflow for left-mouse movements on the Canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouse move event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onMouseMove](foundry.canvas.interaction.BaseRuler.md#_onmousemove)

### `Protected`\_onMouseUp

* \_onMouseUp(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Conclude a Ruler measurement workflow by releasing the left-mouse button.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer-up event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onMouseUp](foundry.canvas.interaction.BaseRuler.md#_onmouseup)

### `Protected`\_onMouseWheel

* \_onMouseWheel(event: WheelEvent): void

  `Protected`

  Adjust the elevation of Ruler waypoints by scrolling up/down.

  #### Parameters

  + event: WheelEvent

    The mousewheel event

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onMouseWheel](foundry.canvas.interaction.BaseRuler.md#_onmousewheel)

### `Protected`\_onPathChange

* \_onPathChange(): void

  `Protected`

  Called when the Ruler's path has changed.

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_onPathChange](foundry.canvas.interaction.BaseRuler.md#_onpathchange)

### `Protected`\_removeDragWaypoint

* \_removeDragWaypoint(): void

  `Protected`

  Remove the second to last waypoint.

  #### Returns void

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[\_removeDragWaypoint](foundry.canvas.interaction.BaseRuler.md#_removedragwaypoint)

### `Static`getSnappedPoint

* getSnappedPoint(point: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Snaps the given point to the grid.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be snapped

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The snapped point

  Inherited from [BaseRuler](foundry.canvas.interaction.BaseRuler.md).[getSnappedPoint](foundry.canvas.interaction.BaseRuler.md#getsnappedpoint)