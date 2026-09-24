---
title: "Wall | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.Wall.html"
category: "classes"
---

# Class Wall

A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.
Walls are used to restrict Token movement or visibility as well as to define the areas of effect for ambient lights
and sounds.

#### See

* [foundry.documents.WallDocument](foundry.documents.WallDocument.md)
* [foundry.canvas.layers.WallsLayer](foundry.canvas.layers.WallsLayer.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.placeables.Wall))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)
  + Wall

##### Index

### Properties

[\_previewType](#_previewtype)
[controlIcon](#controlicon)
[directionIcon](#directionicon)
[document](#document)
[doorControl](#doorcontrol)
[endpoints](#endpoints)
[highlight](#highlight)
[line](#line)
[mouseInteractionManager](#mouseinteractionmanager)
[renderFlags](#renderflags)
[scene](#scene)
[embeddedName](#embeddedname)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[\_original](#_original)
[bounds](#bounds)
[center](#center)
[controlled](#controlled)
[coords](#coords)
[direction](#direction)
[doorMeshes](#doormeshes)
[edge](#edge)
[hasActiveHUD](#hasactivehud)
[hasDoorMesh](#hasdoormesh)
[hasPreview](#haspreview)
[hover](#hover)
[id](#id)
[interactionState](#interactionstate)
[isDoor](#isdoor)
[isFilteredOut](#isfilteredout)
[isInteractable](#isinteractable)
[isOpen](#isopen)
[isOwner](#isowner)
[isPreview](#ispreview)
[isVisible](#isvisible)
[layer](#layer)
[midpoint](#midpoint)
[objectId](#objectid)
[previewType](#previewtype)
[sheet](#sheet)
[soundRadius](#soundradius)
[sourceId](#sourceid)
[implementation](#implementation)

### Methods

[\_applyRenderFlags](#_applyrenderflags)
[\_canControl](#_cancontrol)
[\_clear](#_clear)
[\_destroy](#_destroy)
[\_draw](#_draw)
[\_getShiftedPosition](#_getshiftedposition)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight2](#_onclickright2)
[\_onDragLeftMove](#_ondragleftmove)
[\_onDragLeftStart](#_ondragleftstart)
[\_onHoverIn](#_onhoverin)
[\_onHoverOut](#_onhoverout)
[\_onUpdate](#_onupdate)
[\_overlapsSelection](#_overlapsselection)
[\_partialDraw](#_partialdraw)
[\_pasteObject](#_pasteobject)
[\_prepareDragLeftDropUpdates](#_preparedragleftdropupdates)
[\_updateQuadtree](#_updatequadtree)
[\_updateRotation](#_updaterotation)
[activateListeners](#activatelisteners)
[applyRenderFlags](#applyrenderflags)
[can](#can)
[canRayIntersect](#canrayintersect)
[clearDoorControl](#cleardoorcontrol)
[clone](#clone)
[control](#control)
[createDoorControl](#createdoorcontrol)
[createDoorMeshes](#createdoormeshes)
[destroy](#destroy)
[destroyDoorMeshes](#destroydoormeshes)
[draw](#draw)
[getLinkedSegments](#getlinkedsegments)
[getSnappedPosition](#getsnappedposition)
[isDirectionBetweenAngles](#isdirectionbetweenangles)
[refresh](#refresh)
[release](#release)
[rotate](#rotate)
[toRay](#toray)
[\_canConfigure](#_canconfigure)
[\_canCreate](#_cancreate)
[\_canDelete](#_candelete)
[\_canDrag](#_candrag)
[\_canDragLeftStart](#_candragleftstart)
[\_canHover](#_canhover)
[\_canHUD](#_canhud)
[\_canUpdate](#_canupdate)
[\_canView](#_canview)
[\_createInteractionManager](#_createinteractionmanager)
[\_finalizeDragLeft](#_finalizedragleft)
[\_finalizeDragRight](#_finalizedragright)
[\_getTargetAlpha](#_gettargetalpha)
[\_getWallColor](#_getwallcolor)
[\_initializeDragLeft](#_initializedragleft)
[\_initializeDragRight](#_initializedragright)
[\_onClickRight](#_onclickright)
[\_onControl](#_oncontrol)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_onDragEnd](#_ondragend)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragRightCancel](#_ondragrightcancel)
[\_onDragRightDrop](#_ondragrightdrop)
[\_onDragRightMove](#_ondragrightmove)
[\_onDragRightStart](#_ondragrightstart)
[\_onDragStart](#_ondragstart)
[\_onLongPress](#_onlongpress)
[\_onRelease](#_onrelease)
[\_onUnclickLeft](#_onunclickleft)
[\_onUnclickRight](#_onunclickright)
[\_playDoorSound](#_playdoorsound)
[\_propagateLeftClick](#_propagateleftclick)
[\_propagateRightClick](#_propagaterightclick)
[\_refreshDirection](#_refreshdirection)
[\_refreshEndpoints](#_refreshendpoints)
[\_refreshHighlight](#_refreshhighlight)
[\_refreshLine](#_refreshline)
[\_refreshState](#_refreshstate)
[\_refreshVisibility](#_refreshvisibility)
[#onDragRightStart](#ondragrightstart)
[\_getCopiedObjectsOrigin](#_getcopiedobjectsorigin)
[\_getShiftedPosition](#_getshiftedposition-2)

## Properties

### `Internal`\_previewType

\_previewType:  
Â Â Â Â | "controls"  
Â Â Â Â | "creation"  
Â Â Â Â | "dragging"  
Â Â Â Â | "wheel"  
Â Â Â Â | "config"  
Â Â Â Â | "api"  
Â Â Â Â | null

The preview type, if any.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_previewType](foundry.canvas.placeables.PlaceableObject.md#_previewtype)

### controlIcon

controlIcon: [ControlIcon](foundry.canvas.containers.ControlIcon.md) | null

A control icon for interacting with the object

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[controlIcon](foundry.canvas.placeables.PlaceableObject.md#controlicon)

### directionIcon

directionIcon: Sprite | null

The icon that indicates the direction of the Wall.

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[document](foundry.canvas.placeables.PlaceableObject.md#document)

### doorControl

doorControl: [DoorControl](foundry.canvas.containers.DoorControl.md) | null

A reference the Door Control icon associated with this Wall, if any

### endpoints

endpoints: Graphics

The endpoints of the Wall line segment.

### highlight

highlight: Graphics

A Graphics object used to highlight this wall segment. Only used when the wall is controlled.

### line

line: Graphics

The line segment that represents the Wall.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[mouseInteractionManager](foundry.canvas.placeables.PlaceableObject.md#mouseinteractionmanager)

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[renderFlags](foundry.canvas.placeables.PlaceableObject.md#renderflags)

### scene

scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

Retain a reference to the Scene within which this Placeable Object resides

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[scene](foundry.canvas.placeables.PlaceableObject.md#scene)

### `Static`embeddedName

embeddedName: string = "Wall"

Identify the official Document name for this PlaceableObject class

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[embeddedName](foundry.canvas.placeables.PlaceableObject.md#embeddedname)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.md#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshDirection: {};  
Â Â Â Â refreshEndpoints: {};  
Â Â Â Â refreshHighlight: {};  
Â Â Â Â refreshLine: { propagate: string[] };  
Â Â Â Â refreshState: { propagate: string[] };  
Â Â Â Â refreshVisibility: {};  
} = ...

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.md#render_flags)

## Accessors

### \_original

* get \_original(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  The object that this object is a preview of if this object is a preview.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  Inherited from PlaceableObject.\_original

### bounds

* get bounds(): any

  The bounding box for this PlaceableObject.
  This is required if the layer uses a Quadtree, otherwise it is optional

  #### Returns any

  Overrides PlaceableObject.bounds

### center

* get center(): any

  The central coordinate pair of the placeable object based on it's own width and height

  #### Returns any

  Overrides PlaceableObject.center

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

  Inherited from PlaceableObject.controlled

### coords

* get coords(): number[]

  A convenience reference to the coordinates Array for the Wall endpoints, [x0,y0,x1,y1].

  #### Returns number[]

### direction

* get direction(): number | null

  Get the direction of effect for a directional Wall

  #### Returns number | null

### doorMeshes

* get doorMeshes(): Set<[DoorMesh](foundry.canvas.containers.DoorMesh.md)>

  A set of optional DoorMesh instances used to render a door animation for this Wall.

  #### Returns Set<[DoorMesh](foundry.canvas.containers.DoorMesh.md)>

### edge

* get edge(): [Edge](foundry.canvas.geometry.edges.Edge.md) | null

  The Edge instance which represents this Wall.

  #### Returns [Edge](foundry.canvas.geometry.edges.Edge.md) | null

### hasActiveHUD

* get hasActiveHUD(): boolean

  Is the HUD display active for this Placeable?

  #### Returns boolean

  Inherited from PlaceableObject.hasActiveHUD

### hasDoorMesh

* get hasDoorMesh(): boolean

  Should this Wall have a corresponding DoorMesh?

  #### Returns boolean

### hasPreview

* get hasPreview(): boolean

  Does there exist a temporary preview of this placeable object?

  #### Returns boolean

  Inherited from PlaceableObject.hasPreview

### hover

* get hover(): boolean

  An indicator for whether the object is currently a hover target

  #### Returns boolean

  Inherited from PlaceableObject.hover

### id

* get id(): string

  The id of the corresponding Document which this PlaceableObject represents.

  #### Returns string

  Inherited from PlaceableObject.id

### interactionState

* get interactionState(): | {  
  Â Â Â Â CLICKED: number;  
  Â Â Â Â DRAG: number;  
  Â Â Â Â DROP: number;  
  Â Â Â Â GRABBED: number;  
  Â Â Â Â HOVER: number;  
  Â Â Â Â NONE: number;  
  }  
  | undefined

  The mouse interaction state of this placeable.

  #### Returns Â Â Â Â | { Â Â Â Â Â Â Â Â CLICKED: number; Â Â Â Â Â Â Â Â DRAG: number; Â Â Â Â Â Â Â Â DROP: number; Â Â Â Â Â Â Â Â GRABBED: number; Â Â Â Â Â Â Â Â HOVER: number; Â Â Â Â Â Â Â Â NONE: number; Â Â Â Â } Â Â Â Â | undefined

  Inherited from PlaceableObject.interactionState

### isDoor

* get isDoor(): boolean

  A boolean for whether this wall contains a door

  #### Returns boolean

### isFilteredOut

* get isFilteredOut(): boolean

  Is this object is excluded by the current filter in the placeable tab.

  #### Returns boolean

  Inherited from PlaceableObject.isFilteredOut

### isInteractable

* get isInteractable(): boolean

  Is the placeable currently interactable?

  #### Returns boolean

  Inherited from PlaceableObject.isInteractable

### isOpen

* get isOpen(): boolean

  A boolean for whether the wall contains an open door

  #### Returns boolean

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

  Inherited from PlaceableObject.isOwner

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

  Inherited from PlaceableObject.isPreview

### isVisible

* get isVisible(): boolean

  Is this placeable currently visible?

  #### Returns boolean

  Inherited from PlaceableObject.isVisible

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Inherited from PlaceableObject.layer

### midpoint

* get midpoint(): number[]

  Return the coordinates [x,y] at the midpoint of the wall segment

  #### Returns number[]

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

  Inherited from PlaceableObject.objectId

### previewType

* get previewType(): "dragging" | "controls|"

  The preview type, if any.

  #### Returns "dragging" | "controls|"

  Inherited from PlaceableObject.previewType

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  Inherited from PlaceableObject.sheet

### soundRadius

* get soundRadius(): number

  Customize the audible radius of sounds emitted by this wall, for example when a door opens or closes.

  #### Returns number

### sourceId

* get sourceId(): string

  The named identified for the source object associated with this PlaceableObject.
  This differs from the objectId because the sourceId is the same for preview objects as for the original.

  #### Returns string

  Inherited from PlaceableObject.sourceId

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from PlaceableObject.implementation

## Methods

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  Apply render flags before a render occurs.

  #### Parameters

  + flags: any

    The render flags which must be applied

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.md#_applyrenderflags)

### \_canControl

* \_canControl(user: any, event: any): boolean

  Does the User have permission to control the Placeable Object?

  #### Parameters

  + user: any

    The User performing the action. Always equal to `game.user`.
  + event: any

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canControl](foundry.canvas.placeables.PlaceableObject.md#_cancontrol)

### \_clear

* \_clear(): void

  Clear the display of the existing object on redraw.
  This function is called in [PlaceableObject#draw](foundry.canvas.placeables.PlaceableObject.md#draw) before the [PlaceableObject#\_draw](foundry.canvas.placeables.PlaceableObject.md#_draw) call.

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_clear](foundry.canvas.placeables.PlaceableObject.md#_clear)

### \_destroy

* \_destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_destroy](foundry.canvas.placeables.PlaceableObject.md#_destroy)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_draw](foundry.canvas.placeables.PlaceableObject.md#_draw)

### \_getShiftedPosition

* \_getShiftedPosition(dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): object

  `Internal`

  Obtain a shifted position for the Placeable Object.

  #### Parameters

  + dx: -1 | 0 | 1

    The number of grid units to shift along the X-axis
  + dy: -1 | 0 | 1

    The number of grid units to shift along the Y-axis
  + dz: -1 | 0 | 1

    The number of grid units to shift along the Z-axis

  #### Returns object

  The shifted target coordinates

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.md#_getshiftedposition)

### \_onClickLeft

* \_onClickLeft(event: any): false | undefined

  #### Parameters

  + event: any

  #### Returns false | undefined

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.md#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.md#_onclickleft2)

### \_onClickRight2

* \_onClickRight2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.md#_onclickright2)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.md#_ondragleftmove)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): boolean | void

  Callback actions which occur when a mouse-drag action is first begun.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns boolean | void

  If false, the start if prevented

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.md#_ondragleftstart)

### \_onHoverIn

* \_onHoverIn(event: any, options: any): boolean | void

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: any

    The triggering canvas or DOM interaction event
  + options: any

    Options which customize event handling

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.md#_onhoverin)

### \_onHoverOut

* \_onHoverOut(event: any, options: any): void

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: any

    The triggering canvas or DOM interaction event
  + options: any

    Options which customize event handling

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.md#_onhoverout)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUpdate](foundry.canvas.placeables.PlaceableObject.md#_onupdate)

### \_overlapsSelection

* \_overlapsSelection(rectangle: any): boolean

  #### Parameters

  + rectangle: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.md#_overlapsselection)

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_partialDraw](foundry.canvas.placeables.PlaceableObject.md#_partialdraw)

### \_pasteObject

* \_pasteObject(offset: any, \_options: any): { c: any[]; levels: any[] }

  #### Parameters

  + offset: any
  + \_options: any

  #### Returns { c: any[]; levels: any[] }

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_pasteObject](foundry.canvas.placeables.PlaceableObject.md#_pasteobject)

### \_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(event: any): { \_id: any; c: any }[] | null

  #### Parameters

  + event: any

  #### Returns { \_id: any; c: any }[] | null

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.md#_preparedragleftdropupdates)

### \_updateQuadtree

* \_updateQuadtree(): void

  `Internal`

  Update the quadtree.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_updateQuadtree](foundry.canvas.placeables.PlaceableObject.md#_updatequadtree)

### \_updateRotation

* \_updateRotation(  
  Â Â Â Â options?: { angle?: number; delta?: number; snap?: number },  
  ): number

  `Internal`

  Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.

  #### Parameters

  + options: { angle?: number; delta?: number; snap?: number } = {}

    An object which defines the rotation update parameters

    - ##### `Optional`angle?: number

      An explicit angle, either this or delta must be provided
    - ##### `Optional`delta?: number

      A relative angle delta, either this or the angle must be provided
    - ##### `Optional`snap?: number

      A precision (in degrees) to which the resulting angle should snap. Default is 0.

  #### Returns number

  The new rotation angle for the object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_updateRotation](foundry.canvas.placeables.PlaceableObject.md#_updaterotation)

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[activateListeners](foundry.canvas.placeables.PlaceableObject.md#activatelisteners)

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[applyRenderFlags](foundry.canvas.placeables.PlaceableObject.md#applyrenderflags)

### can

* can(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â action:  
  Â Â Â Â Â Â Â Â | "view"  
  Â Â Â Â Â Â Â Â | "create"  
  Â Â Â Â Â Â Â Â | "update"  
  Â Â Â Â Â Â Â Â | "delete"  
  Â Â Â Â Â Â Â Â | "control"  
  Â Â Â Â Â Â Â Â | "hover"  
  Â Â Â Â Â Â Â Â | "drag"  
  Â Â Â Â Â Â Â Â | "configure"  
  Â Â Â Â Â Â Â Â | "HUD",  
  ): boolean

  Test whether a user can perform a certain interaction regarding a Placeable Object

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Must be equal to `game.user`.
  + action:   
    Â Â Â Â | "view"  
    Â Â Â Â | "create"  
    Â Â Â Â | "update"  
    Â Â Â Â | "delete"  
    Â Â Â Â | "control"  
    Â Â Â Â | "hover"  
    Â Â Â Â | "drag"  
    Â Â Â Â | "configure"  
    Â Â Â Â | "HUD"

    The named action being attempted

  #### Returns boolean

  Does the User have rights to perform the action?

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[can](foundry.canvas.placeables.PlaceableObject.md#can)

### canRayIntersect

* canRayIntersect(ray: [Ray](foundry.canvas.geometry.Ray.md)): boolean

  A simple test for whether a Ray can intersect a directional wall

  #### Parameters

  + ray: [Ray](foundry.canvas.geometry.Ray.md)

    The ray to test

  #### Returns boolean

  Can an intersection occur?

### clearDoorControl

* clearDoorControl(): void

  Clear the door control if it exists.

  #### Returns void

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  A new object with identical data

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[clone](foundry.canvas.placeables.PlaceableObject.md#clone)

### control

* control(\_\_namedParameters?: { chain?: boolean }): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + \_\_namedParameters: { chain?: boolean } = {}

    Additional options which modify the control request.

  #### Returns boolean

  A flag denoting whether control was successful.

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[control](foundry.canvas.placeables.PlaceableObject.md#control)

### createDoorControl

* createDoorControl(): [DoorControl](foundry.canvas.containers.DoorControl.md) | null

  Draw a control icon that is used to manipulate the door's open/closed state

  #### Returns [DoorControl](foundry.canvas.containers.DoorControl.md) | null

### createDoorMeshes

* createDoorMeshes(): Promise<void>

  Create and add a DoorMesh to the PrimaryCanvasContainer.

  #### Returns Promise<void>

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[destroy](foundry.canvas.placeables.PlaceableObject.md#destroy)

### destroyDoorMeshes

* destroyDoorMeshes(): void

  Remove and destroy a DoorMesh from the PrimaryCanvasContainer.

  #### Returns void

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[draw](foundry.canvas.placeables.PlaceableObject.md#draw)

### getLinkedSegments

* getLinkedSegments(): Object

  Get an Array of Wall objects which are linked by a common coordinate

  #### Returns Object

  An object reporting ids and endpoints of the linked segments

### getSnappedPosition

* getSnappedPosition(position: any): void

  #### Parameters

  + position: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.md#getsnappedposition)

### isDirectionBetweenAngles

* isDirectionBetweenAngles(lower: number, upper: number): boolean

  Test whether the Wall direction lies between two provided angles
  This test is used for collision and vision checks against one-directional walls

  #### Parameters

  + lower: number

    The lower-bound limiting angle in radians
  + upper: number

    The upper-bound limiting angle in radians

  #### Returns boolean

### refresh

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The refreshed object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[refresh](foundry.canvas.placeables.PlaceableObject.md#refresh)

### release

* release(options?: { renderSidebar?: boolean }): boolean

  Release control over a PlaceableObject, removing it from the controlled set

  #### Parameters

  + options: { renderSidebar?: boolean } = {}

    Options which modify the releasing workflow

    - ##### `Optional`renderSidebar?: boolean

      Re-render the sidebar.

  #### Returns boolean

  A Boolean flag confirming the object was released.

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[release](foundry.canvas.placeables.PlaceableObject.md#release)

### rotate

* rotate(angle: number, snap: number): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Rotate the PlaceableObject to a certain angle of facing

  #### Parameters

  + angle: number

    The desired angle of rotation
  + snap: number

    Snap the angle of rotation to a certain target degree increment

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The rotated object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[rotate](foundry.canvas.placeables.PlaceableObject.md#rotate)

### toRay

* toRay(): [Ray](foundry.canvas.geometry.Ray.md)

  This helper converts the wall segment to a Ray

  #### Returns [Ray](foundry.canvas.geometry.Ray.md)

  The wall in Ray representation

### `Protected`\_canConfigure

* \_canConfigure(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to configure the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.md#_canconfigure)

### `Protected`\_canCreate

* \_canCreate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to create the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canCreate](foundry.canvas.placeables.PlaceableObject.md#_cancreate)

### `Protected`\_canDelete

* \_canDelete(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to delete the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDelete](foundry.canvas.placeables.PlaceableObject.md#_candelete)

### `Protected`\_canDrag

* \_canDrag(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDrag](foundry.canvas.placeables.PlaceableObject.md#_candrag)

### `Protected`\_canDragLeftStart

* \_canDragLeftStart(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { notify: boolean },  
  ): boolean

  `Protected`

  Does the User have permission to left-click drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event
  + `Optional`options: { notify: boolean } = {}

    Options, used internally

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDragLeftStart](foundry.canvas.placeables.PlaceableObject.md#_candragleftstart)

### `Protected`\_canHover

* \_canHover(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: Event | FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to hover on this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: Event | FederatedEvent<UIEvent | PixiTouch>

    The DOM interaction event or pointer event if this function was
    called by [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canHover](foundry.canvas.placeables.PlaceableObject.md#_canhover)

### `Protected`\_canHUD

* \_canHUD(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Can the User access the HUD for this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canHUD](foundry.canvas.placeables.PlaceableObject.md#_canhud)

### `Protected`\_canUpdate

* \_canUpdate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to update the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canUpdate](foundry.canvas.placeables.PlaceableObject.md#_canupdate)

### `Protected`\_canView

* \_canView(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to view details of the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canView](foundry.canvas.placeables.PlaceableObject.md#_canview)

### `Protected`\_createInteractionManager

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_createInteractionManager](foundry.canvas.placeables.PlaceableObject.md#_createinteractionmanager)

### `Protected`\_finalizeDragLeft

* \_finalizeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the left-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_finalizeDragLeft](foundry.canvas.placeables.PlaceableObject.md#_finalizedragleft)

### `Protected`\_finalizeDragRight

* \_finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_finalizeDragRight](foundry.canvas.placeables.PlaceableObject.md#_finalizedragright)

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.md#_gettargetalpha)

### `Protected`\_getWallColor

* \_getWallColor(): number

  `Protected`

  Given the properties of the wall - decide upon a color to render the wall for display on the WallsLayer

  #### Returns number

### `Protected`\_initializeDragLeft

* \_initializeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the left-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_initializeDragLeft](foundry.canvas.placeables.PlaceableObject.md#_initializedragleft)

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_initializeDragRight](foundry.canvas.placeables.PlaceableObject.md#_initializedragright)

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.md#_onclickright)

### `Protected`\_onControl

* \_onControl(options: object): void

  `Protected`

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: object

    Optional parameters which apply for specific implementations

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onControl](foundry.canvas.placeables.PlaceableObject.md#_oncontrol)

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: object
  + options: object
  + userId: string

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onCreate](foundry.canvas.placeables.PlaceableObject.md#_oncreate)

### `Protected`\_onDelete

* \_onDelete(options: object, userId: string): void

  `Protected`

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: object
  + userId: string

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDelete](foundry.canvas.placeables.PlaceableObject.md#_ondelete)

### `Protected`\_onDragEnd

* \_onDragEnd(): void

  `Protected`

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.md#_ondragend)

### `Protected`\_onDragLeftCancel

* \_onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.md#_ondragleftcancel)

### `Protected`\_onDragLeftDrop

* \_onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): false | undefined

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns false | undefined

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.md#_ondragleftdrop)

### `Protected`\_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightCancel](foundry.canvas.placeables.PlaceableObject.md#_ondragrightcancel)

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightDrop](foundry.canvas.placeables.PlaceableObject.md#_ondragrightdrop)

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightMove](foundry.canvas.placeables.PlaceableObject.md#_ondragrightmove)

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightStart](foundry.canvas.placeables.PlaceableObject.md#_ondragrightstart)

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragStart](foundry.canvas.placeables.PlaceableObject.md#_ondragstart)

### `Protected`\_onLongPress

* \_onLongPress(event: FederatedEvent<UIEvent | PixiTouch>, origin: Point): any

  `Protected`

  Callback action which occurs on a long press.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event
  + origin: Point

    The local canvas coordinates of the mousepress.

  #### Returns any

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onLongPress](foundry.canvas.placeables.PlaceableObject.md#_onlongpress)

### `Protected`\_onRelease

* \_onRelease(options: object): void

  `Protected`

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: object

    Options which modify the releasing workflow

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onRelease](foundry.canvas.placeables.PlaceableObject.md#_onrelease)

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUnclickLeft](foundry.canvas.placeables.PlaceableObject.md#_onunclickleft)

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUnclickRight](foundry.canvas.placeables.PlaceableObject.md#_onunclickright)

### `Protected`\_playDoorSound

* \_playDoorSound(interaction: string): void

  `Protected`

  Play a door interaction sound.
  This plays locally, each client independently applies this workflow.

  #### Parameters

  + interaction: string

    The door interaction: "open", "close", "lock", "unlock", or "test".

  #### Returns void

### `Protected`\_propagateLeftClick

* \_propagateLeftClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate left click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_propagateLeftClick](foundry.canvas.placeables.PlaceableObject.md#_propagateleftclick)

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_propagateRightClick](foundry.canvas.placeables.PlaceableObject.md#_propagaterightclick)

### `Protected`\_refreshDirection

* \_refreshDirection(): false | undefined

  `Protected`

  Draw a directional prompt icon for one-way walls to illustrate their direction of effect.

  #### Returns false | undefined

### `Protected`\_refreshEndpoints

* \_refreshEndpoints(): void

  `Protected`

  Refresh the display of wall endpoints which refreshes when the wall position or state changes.

  #### Returns void

### `Protected`\_refreshHighlight

* \_refreshHighlight(): void

  `Protected`

  Refresh the appearance of the wall control highlight graphic. Occurs when wall control or position changes.

  #### Returns void

### `Protected`\_refreshLine

* \_refreshLine(): void

  `Protected`

  Refresh the displayed position of the wall which refreshes when the wall coordinates or type changes.

  #### Returns void

### `Protected`\_refreshState

* \_refreshState(): void

  `Protected`

  Refresh the displayed state of the placeable.
  Used to update aspects of the placeable which change based on the user interaction state.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_refreshState](foundry.canvas.placeables.PlaceableObject.md#_refreshstate)

### `Protected`\_refreshVisibility

* \_refreshVisibility(): void

  `Protected`

  Refresh the visibility of the placeable.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_refreshVisibility](foundry.canvas.placeables.PlaceableObject.md#_refreshvisibility)

### `Protected`#onDragRightStart

* "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[#onDragRightStart](foundry.canvas.placeables.PlaceableObject.md#ondragrightstart)

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

    The objects that are copied

  #### Returns Point

  The offset

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getCopiedObjectsOrigin](foundry.canvas.placeables.PlaceableObject.md#_getcopiedobjectsorigin)

### `Static`\_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  Â Â Â Â position: ElevatedPoint,  
  Â Â Â Â snapped: ElevatedPoint,  
  Â Â Â Â grid: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>,  
  ): ElevatedPoint

  `Internal`

  Obtain the shifted position.

  #### Parameters

  + dx: -1 | 0 | 1

    The number of grid units to shift along the X-axis
  + dy: -1 | 0 | 1

    The number of grid units to shift along the Y-axis
  + dz: -1 | 0 | 1

    The number of grid units to shift along the Z-axis
  + position: ElevatedPoint

    The unsnapped position
  + snapped: ElevatedPoint

    The snapped position
  + grid: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>

    The grid

  #### Returns ElevatedPoint

  The shifted target coordinates

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.md#_getshiftedposition-2)