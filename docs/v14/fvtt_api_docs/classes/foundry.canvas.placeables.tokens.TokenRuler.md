---
title: "TokenRuler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.TokenRuler.html"
category: "classes"
---

# Class TokenRuler

The default implementation of the Token ruler.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.placeables.tokens.TokenRuler))

* [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md)
  + TokenRuler

##### Index

### Properties

[WAYPOINT\_LABEL\_TEMPLATE](#waypoint_label_template)

### Accessors

[isVisible](#isvisible)
[token](#token)
[visible](#visible)

### Methods

[\_onVisibleChange](#_onvisiblechange)
[clear](#clear)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[\_accumulateWaypointData](#_accumulatewaypointdata)
[\_configureDashLine](#_configuredashline)
[\_configureOutline](#_configureoutline)
[\_getGridHighlightStyle](#_getgridhighlightstyle)
[\_getSegmentStyle](#_getsegmentstyle)
[\_getWaypointLabelContext](#_getwaypointlabelcontext)
[\_getWaypointStyle](#_getwaypointstyle)
[\_preparePath](#_preparepath)
[\_shouldRenderWaypoint](#_shouldrenderwaypoint)

## Properties

### `Static`WAYPOINT\_LABEL\_TEMPLATE

WAYPOINT\_LABEL\_TEMPLATE: string = "templates/hud/waypoint-label.hbs"

A handlebars template used to render each waypoint label.

## Accessors

### isVisible

* get isVisible(): boolean

  Is the ruler supposed to be visible?
  [BaseTokenRuler#visible](foundry.canvas.placeables.tokens.BaseTokenRuler.md#visible) is set to [BaseTokenRuler#isVisible](foundry.canvas.placeables.tokens.BaseTokenRuler.md#isvisible) in
  [foundry.canvas.placeables.Token#\_refreshState](foundry.canvas.placeables.Token.md#_refreshstate).

  #### Returns boolean

  Inherited from BaseTokenRuler.isVisible

### token

* get token(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  The reference to the Token this ruler belongs to.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  Inherited from BaseTokenRuler.token

### visible

* get visible(): boolean

  Is the ruler visible?

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```

  Inherited from BaseTokenRuler.visible
* set visible(value: boolean): void

  Set to [BaseTokenRuler#isVisible](foundry.canvas.placeables.tokens.BaseTokenRuler.md#isvisible) in [foundry.canvas.placeables.Token#\_refreshState](foundry.canvas.placeables.Token.md#_refreshstate).

  #### Parameters

  + value: boolean

  #### Returns void

  Inherited from BaseTokenRuler.visible

## Methods

### \_onVisibleChange

* \_onVisibleChange(): void

  #### Returns void

  Overrides [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md).[\_onVisibleChange](foundry.canvas.placeables.tokens.BaseTokenRuler.md#_onvisiblechange)

### clear

* clear(): void

  #### Returns void

  Overrides [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md).[clear](foundry.canvas.placeables.tokens.BaseTokenRuler.md#clear)

### destroy

* destroy(): void

  #### Returns void

  Overrides [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md).[destroy](foundry.canvas.placeables.tokens.BaseTokenRuler.md#destroy)

### draw

* draw(): Promise<void>

  #### Returns Promise<void>

  Overrides [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md).[draw](foundry.canvas.placeables.tokens.BaseTokenRuler.md#draw)

### refresh

* refresh(  
  Â Â Â Â \_\_namedParameters: {  
  Â Â Â Â Â Â Â Â passedWaypoints: any;  
  Â Â Â Â Â Â Â Â pendingWaypoints: any;  
  Â Â Â Â Â Â Â Â plannedMovement: any;  
  Â Â Â Â },  
  ): void

  #### Parameters

  + \_\_namedParameters: { passedWaypoints: any; pendingWaypoints: any; plannedMovement: any }

  #### Returns void

  Overrides [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md).[refresh](foundry.canvas.placeables.tokens.BaseTokenRuler.md#refresh)

### `Protected`\_accumulateWaypointData

* \_accumulateWaypointData(  
  Â Â Â Â accumulator: Partial<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  Â Â Â Â waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  ): void

  `Protected`

  Accumulate waypoint data. Skipped waypoints and the next rendered waypoint are accumulated.

  The base implementation accumulates the waypoint cost.

  #### Parameters

  + accumulator: Partial<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

    The accumulated waypoint data
  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

    A waypoint to be accumulated

  #### Returns void

### `Protected`\_configureDashLine

* \_configureDashLine(): { dash: number; gap: number; speed: number }

  `Protected`

  Configure the properties of the dash line.
  Called in [TokenRuler#draw](#draw).

  #### Returns { dash: number; gap: number; speed: number }

  The dash in pixels, the gap in pixels, and the speed in pixels per second

### `Protected`\_configureOutline

* \_configureOutline(): { color: ColorSource; thickness: number }

  `Protected`

  Configure the properties of the outline.
  Called in [TokenRuler#draw](#draw).

  #### Returns { color: ColorSource; thickness: number }

  The thickness in pixels and the color

### `Protected`\_getGridHighlightStyle

* \_getGridHighlightStyle(  
  Â Â Â Â waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  Â Â Â Â offset: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
  ): {  
  Â Â Â Â alpha?: number;  
  Â Â Â Â color?: ColorSource;  
  Â Â Â Â matrix?: Matrix | null;  
  Â Â Â Â texture?: Texture<Resource>;  
  }

  `Protected`

  Get the style to be used to highlight the grid offset.

  #### Parameters

  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

    The waypoint
  + offset: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>

    An occupied grid offset at the given waypoint that is to be highlighted

  #### Returns { Â Â Â Â alpha?: number; Â Â Â Â color?: ColorSource; Â Â Â Â matrix?: Matrix | null; Â Â Â Â texture?: Texture<Resource>; }

  The color, alpha, texture, and texture matrix to be used to draw the grid space.
  If the alpha is 0, the grid space is not highlighted.

### `Protected`\_getSegmentStyle

* \_getSegmentStyle(  
  Â Â Â Â waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  ): { alpha?: number; color?: ColorSource; width: number }

  `Protected`

  Get the style of the segment from the previous to the given waypoint.

  #### Parameters

  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

    The waypoint

  #### Returns { alpha?: number; color?: ColorSource; width: number }

  The line width, color, and alpha of the segment. If the width is 0, no segment is drawn.

### `Protected`\_getWaypointLabelContext

* \_getWaypointLabelContext(  
  Â Â Â Â waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  Â Â Â Â state: object,  
  ): void | object

  `Protected`

  Get the context used to render a ruler waypoint label.

  #### Parameters

  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>
  + state: object

  #### Returns void | object

### `Protected`\_getWaypointStyle

* \_getWaypointStyle(  
  Â Â Â Â waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>,  
  ): {  
  Â Â Â Â alpha?: number;  
  Â Â Â Â color?: ColorSource;  
  Â Â Â Â radius: number;  
  Â Â Â Â shape?:  
  Â Â Â Â Â Â Â Â | "circle"  
  Â Â Â Â Â Â Â Â | "square"  
  Â Â Â Â Â Â Â Â | "diamond"  
  Â Â Â Â Â Â Â Â | "triangleUp"  
  Â Â Â Â Â Â Â Â | "triangleDown"  
  Â Â Â Â Â Â Â Â | "hexagonFlat"  
  Â Â Â Â Â Â Â Â | "hexagonPointy"  
  Â Â Â Â Â Â Â Â | "octagon";  
  }

  `Protected`

  Get the style of the waypoint at the given waypoint.

  #### Parameters

  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

    The waypoint

  #### Returns { Â Â Â Â alpha?: number; Â Â Â Â color?: ColorSource; Â Â Â Â radius: number; Â Â Â Â shape?: Â Â Â Â Â Â Â Â | "circle" Â Â Â Â Â Â Â Â | "square" Â Â Â Â Â Â Â Â | "diamond" Â Â Â Â Â Â Â Â | "triangleUp" Â Â Â Â Â Â Â Â | "triangleDown" Â Â Â Â Â Â Â Â | "hexagonFlat" Â Â Â Â Â Â Â Â | "hexagonPointy" Â Â Â Â Â Â Â Â | "octagon"; }

  The shape, radius, color, and alpha of the waypoint. If the radius is 0, no waypoint marker is drawn.

### `Protected`\_preparePath

* \_preparePath(path: [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)[]): void

  `Protected`

  Prepare the path.

  #### Parameters

  + path: [TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)[]

  #### Returns void

### `Protected`\_shouldRenderWaypoint

* \_shouldRenderWaypoint(waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>): boolean

  `Protected`

  Should the ruler waypoint be rendered?

  #### Parameters

  + waypoint: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenRulerWaypoint](../types/foundry.types.TokenRulerWaypoint.md)>

  #### Returns boolean