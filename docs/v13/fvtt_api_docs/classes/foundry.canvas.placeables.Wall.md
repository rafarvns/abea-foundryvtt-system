---
title: "Wall | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.placeables.Wall.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [placeables](../modules/foundry.canvas.placeables.html)
* [Wall](foundry.canvas.placeables.Wall.html)

# Class Wall

A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.
Walls are used to restrict Token movement or visibility as well as to define the areas of effect for ambient lights
and sounds.

#### See

* [foundry.documents.WallDocument](foundry.documents.WallDocument.html)
* [foundry.canvas.layers.WallsLayer](foundry.canvas.layers.WallsLayer.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.placeables.Wall))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)
  + Wall

##### Index

### Properties

[controlIcon](foundry.canvas.placeables.Wall.html#controlicon)
[directionIcon](foundry.canvas.placeables.Wall.html#directionicon)
[document](foundry.canvas.placeables.Wall.html#document)
[doorControl](foundry.canvas.placeables.Wall.html#doorcontrol)
[endpoints](foundry.canvas.placeables.Wall.html#endpoints)
[highlight](foundry.canvas.placeables.Wall.html#highlight)
[line](foundry.canvas.placeables.Wall.html#line)
[mouseInteractionManager](foundry.canvas.placeables.Wall.html#mouseinteractionmanager)
[renderFlags](foundry.canvas.placeables.Wall.html#renderflags)
[scene](foundry.canvas.placeables.Wall.html#scene)
[embeddedName](foundry.canvas.placeables.Wall.html#embeddedname)
[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.Wall.html#render_flag_priority)
[RENDER\_FLAGS](foundry.canvas.placeables.Wall.html#render_flags)

### Accessors

[\_original](foundry.canvas.placeables.Wall.html#_original)
[bounds](foundry.canvas.placeables.Wall.html#bounds)
[center](foundry.canvas.placeables.Wall.html#center)
[controlled](foundry.canvas.placeables.Wall.html#controlled)
[coords](foundry.canvas.placeables.Wall.html#coords)
[direction](foundry.canvas.placeables.Wall.html#direction)
[doorMeshes](foundry.canvas.placeables.Wall.html#doormeshes)
[edge](foundry.canvas.placeables.Wall.html#edge)
[hasActiveHUD](foundry.canvas.placeables.Wall.html#hasactivehud)
[hasDoorMesh](foundry.canvas.placeables.Wall.html#hasdoormesh)
[hasPreview](foundry.canvas.placeables.Wall.html#haspreview)
[hover](foundry.canvas.placeables.Wall.html#hover)
[id](foundry.canvas.placeables.Wall.html#id)
[interactionState](foundry.canvas.placeables.Wall.html#interactionstate)
[isDoor](foundry.canvas.placeables.Wall.html#isdoor)
[isOpen](foundry.canvas.placeables.Wall.html#isopen)
[isOwner](foundry.canvas.placeables.Wall.html#isowner)
[isPreview](foundry.canvas.placeables.Wall.html#ispreview)
[layer](foundry.canvas.placeables.Wall.html#layer)
[midpoint](foundry.canvas.placeables.Wall.html#midpoint)
[objectId](foundry.canvas.placeables.Wall.html#objectid)
[sheet](foundry.canvas.placeables.Wall.html#sheet)
[soundRadius](foundry.canvas.placeables.Wall.html#soundradius)
[sourceId](foundry.canvas.placeables.Wall.html#sourceid)
[implementation](foundry.canvas.placeables.Wall.html#implementation)

### Methods

[\_applyRenderFlags](foundry.canvas.placeables.Wall.html#_applyrenderflags)
[\_canControl](foundry.canvas.placeables.Wall.html#_cancontrol)
[\_destroy](foundry.canvas.placeables.Wall.html#_destroy)
[\_draw](foundry.canvas.placeables.Wall.html#_draw)
[\_getShiftedPosition](foundry.canvas.placeables.Wall.html#_getshiftedposition)
[\_onClickLeft](foundry.canvas.placeables.Wall.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.placeables.Wall.html#_onclickleft2)
[\_onClickRight2](foundry.canvas.placeables.Wall.html#_onclickright2)
[\_onCreate](foundry.canvas.placeables.Wall.html#_oncreate)
[\_onDelete](foundry.canvas.placeables.Wall.html#_ondelete)
[\_onDragLeftMove](foundry.canvas.placeables.Wall.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.placeables.Wall.html#_ondragleftstart)
[\_onHoverIn](foundry.canvas.placeables.Wall.html#_onhoverin)
[\_onHoverOut](foundry.canvas.placeables.Wall.html#_onhoverout)
[\_onUpdate](foundry.canvas.placeables.Wall.html#_onupdate)
[\_overlapsSelection](foundry.canvas.placeables.Wall.html#_overlapsselection)
[\_partialDraw](foundry.canvas.placeables.Wall.html#_partialdraw)
[\_pasteObject](foundry.canvas.placeables.Wall.html#_pasteobject)
[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.Wall.html#_preparedragleftdropupdates)
[\_updateQuadtree](foundry.canvas.placeables.Wall.html#_updatequadtree)
[\_updateRotation](foundry.canvas.placeables.Wall.html#_updaterotation)
[activateListeners](foundry.canvas.placeables.Wall.html#activatelisteners)
[applyRenderFlags](foundry.canvas.placeables.Wall.html#applyrenderflags)
[can](foundry.canvas.placeables.Wall.html#can)
[canRayIntersect](foundry.canvas.placeables.Wall.html#canrayintersect)
[clear](foundry.canvas.placeables.Wall.html#clear)
[clearDoorControl](foundry.canvas.placeables.Wall.html#cleardoorcontrol)
[clone](foundry.canvas.placeables.Wall.html#clone)
[control](foundry.canvas.placeables.Wall.html#control)
[createDoorControl](foundry.canvas.placeables.Wall.html#createdoorcontrol)
[createDoorMeshes](foundry.canvas.placeables.Wall.html#createdoormeshes)
[destroy](foundry.canvas.placeables.Wall.html#destroy)
[destroyDoorMeshes](foundry.canvas.placeables.Wall.html#destroydoormeshes)
[draw](foundry.canvas.placeables.Wall.html#draw)
[getLinkedSegments](foundry.canvas.placeables.Wall.html#getlinkedsegments)
[getSnappedPosition](foundry.canvas.placeables.Wall.html#getsnappedposition)
[initializeEdge](foundry.canvas.placeables.Wall.html#initializeedge)
[isDirectionBetweenAngles](foundry.canvas.placeables.Wall.html#isdirectionbetweenangles)
[refresh](foundry.canvas.placeables.Wall.html#refresh)
[release](foundry.canvas.placeables.Wall.html#release)
[rotate](foundry.canvas.placeables.Wall.html#rotate)
[toRay](foundry.canvas.placeables.Wall.html#toray)
[\_canConfigure](foundry.canvas.placeables.Wall.html#_canconfigure)
[\_canCreate](foundry.canvas.placeables.Wall.html#_cancreate)
[\_canDelete](foundry.canvas.placeables.Wall.html#_candelete)
[\_canDrag](foundry.canvas.placeables.Wall.html#_candrag)
[\_canDragLeftStart](foundry.canvas.placeables.Wall.html#_candragleftstart)
[\_canHover](foundry.canvas.placeables.Wall.html#_canhover)
[\_canHUD](foundry.canvas.placeables.Wall.html#_canhud)
[\_canUpdate](foundry.canvas.placeables.Wall.html#_canupdate)
[\_canView](foundry.canvas.placeables.Wall.html#_canview)
[\_createInteractionManager](foundry.canvas.placeables.Wall.html#_createinteractionmanager)
[\_finalizeDragLeft](foundry.canvas.placeables.Wall.html#_finalizedragleft)
[\_finalizeDragRight](foundry.canvas.placeables.Wall.html#_finalizedragright)
[\_getTargetAlpha](foundry.canvas.placeables.Wall.html#_gettargetalpha)
[\_getWallColor](foundry.canvas.placeables.Wall.html#_getwallcolor)
[\_initializeDragLeft](foundry.canvas.placeables.Wall.html#_initializedragleft)
[\_initializeDragRight](foundry.canvas.placeables.Wall.html#_initializedragright)
[\_onClickRight](foundry.canvas.placeables.Wall.html#_onclickright)
[\_onControl](foundry.canvas.placeables.Wall.html#_oncontrol)
[\_onDragEnd](foundry.canvas.placeables.Wall.html#_ondragend)
[\_onDragLeftCancel](foundry.canvas.placeables.Wall.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.placeables.Wall.html#_ondragleftdrop)
[\_onDragRightCancel](foundry.canvas.placeables.Wall.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.placeables.Wall.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.placeables.Wall.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.placeables.Wall.html#_ondragrightstart)
[\_onDragStart](foundry.canvas.placeables.Wall.html#_ondragstart)
[\_onLongPress](foundry.canvas.placeables.Wall.html#_onlongpress)
[\_onRelease](foundry.canvas.placeables.Wall.html#_onrelease)
[\_onUnclickLeft](foundry.canvas.placeables.Wall.html#_onunclickleft)
[\_onUnclickRight](foundry.canvas.placeables.Wall.html#_onunclickright)
[\_playDoorSound](foundry.canvas.placeables.Wall.html#_playdoorsound)
[\_propagateLeftClick](foundry.canvas.placeables.Wall.html#_propagateleftclick)
[\_propagateRightClick](foundry.canvas.placeables.Wall.html#_propagaterightclick)
[\_refreshDirection](foundry.canvas.placeables.Wall.html#_refreshdirection)
[\_refreshEndpoints](foundry.canvas.placeables.Wall.html#_refreshendpoints)
[\_refreshHighlight](foundry.canvas.placeables.Wall.html#_refreshhighlight)
[\_refreshLine](foundry.canvas.placeables.Wall.html#_refreshline)
[\_refreshState](foundry.canvas.placeables.Wall.html#_refreshstate)
[#onDragRightStart](foundry.canvas.placeables.Wall.html#ondragrightstart)
[\_getCopiedObjectsOrigin](foundry.canvas.placeables.Wall.html#_getcopiedobjectsorigin)
[\_getShiftedPosition](foundry.canvas.placeables.Wall.html#_getshiftedposition-2)

## Properties

### controlIcon

controlIcon: null | [ControlIcon](foundry.canvas.containers.ControlIcon.html)

A control icon for interacting with the object

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[controlIcon](foundry.canvas.placeables.PlaceableObject.html#controlicon)

### directionIcon

directionIcon: null | Sprite

The icon that indicates the direction of the Wall.

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[document](foundry.canvas.placeables.PlaceableObject.html#document)

### doorControl

doorControl: any

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

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[mouseInteractionManager](foundry.canvas.placeables.PlaceableObject.html#mouseinteractionmanager)

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.html)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[renderFlags](foundry.canvas.placeables.PlaceableObject.html#renderflags)

### scene

scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

Retain a reference to the Scene within which this Placeable Object resides

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[scene](foundry.canvas.placeables.PlaceableObject.html#scene)

### `Static`embeddedName

embeddedName: string = "Wall"

Identify the official Document name for this PlaceableObject class

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[embeddedName](foundry.canvas.placeables.PlaceableObject.html#embeddedname)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.html#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshDirection: {};  
Â Â Â Â refreshEndpoints: {};  
Â Â Â Â refreshHighlight: {};  
Â Â Â Â refreshLine: { propagate: string[] };  
Â Â Â Â refreshState: { propagate: string[] };  
} = ...

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.html#render_flags)

## Accessors

### \_original

* get \_original(): undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object that this object is a preview of if this object is a preview.

  #### Returns undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.\_original

### bounds

* get bounds(): any

  The bounding box for this PlaceableObject.
  This is required if the layer uses a Quadtree, otherwise it is optional

  #### Returns any

  Overrides PlaceableObject.bounds

### center

* get center(): Point

  The central coordinate pair of the placeable object based on it's own width and height

  #### Returns Point

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

* get direction(): null | number

  Get the direction of effect for a directional Wall

  #### Returns null | number

### doorMeshes

* get doorMeshes(): Set<[DoorMesh](foundry.canvas.containers.DoorMesh.html)>

  A set of optional DoorMesh instances used to render a door animation for this Wall.

  #### Returns Set<[DoorMesh](foundry.canvas.containers.DoorMesh.html)>

### edge

* get edge(): [Edge](foundry.canvas.geometry.edges.Edge.html)

  The Edge instance which represents this Wall.
  The Edge is re-created when data for the Wall changes.

  #### Returns [Edge](foundry.canvas.geometry.edges.Edge.html)

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

* get interactionState(): | undefined  
  | {  
  Â Â Â Â CLICKED: number;  
  Â Â Â Â DRAG: number;  
  Â Â Â Â DROP: number;  
  Â Â Â Â GRABBED: number;  
  Â Â Â Â HOVER: number;  
  Â Â Â Â NONE: number;  
  }

  The mouse interaction state of this placeable.

  #### Returns Â Â Â Â | undefined Â Â Â Â | { Â Â Â Â Â Â Â Â CLICKED: number; Â Â Â Â Â Â Â Â DRAG: number; Â Â Â Â Â Â Â Â DROP: number; Â Â Â Â Â Â Â Â GRABBED: number; Â Â Â Â Â Â Â Â HOVER: number; Â Â Â Â Â Â Â Â NONE: number; Â Â Â Â }

  Inherited from PlaceableObject.interactionState

### isDoor

* get isDoor(): boolean

  A boolean for whether this wall contains a door

  #### Returns boolean

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

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

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

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

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

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.implementation

## Methods

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  #### Parameters

  + flags: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#_applyrenderflags)

### \_canControl

* \_canControl(user: any, event: any): boolean

  Does the User have permission to control the Placeable Object?

  #### Parameters

  + user: any

    The User performing the action. Always equal to `game.user`.
  + event: any

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canControl](foundry.canvas.placeables.PlaceableObject.html#_cancontrol)

### \_destroy

* \_destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_destroy](foundry.canvas.placeables.PlaceableObject.html#_destroy)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_draw](foundry.canvas.placeables.PlaceableObject.html#_draw)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition)

### \_onClickLeft

* \_onClickLeft(event: any): boolean | void

  Callback actions which occur on a single left-click event to assume control of the object

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.html#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.html#_onclickleft2)

### \_onClickRight2

* \_onClickRight2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.html#_onclickright2)

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onCreate](foundry.canvas.placeables.PlaceableObject.html#_oncreate)

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDelete](foundry.canvas.placeables.PlaceableObject.html#_ondelete)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.html#_ondragleftmove)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): boolean | void

  Callback actions which occur when a mouse-drag action is first begun.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns boolean | void

  If false, the start if prevented

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_ondragleftstart)

### \_onHoverIn

* \_onHoverIn(event: any, options: any): boolean | void

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: any

    The triggering canvas interaction event
  + options: any

    Options which customize event handling

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.html#_onhoverin)

### \_onHoverOut

* \_onHoverOut(event: any): void

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.html#_onhoverout)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUpdate](foundry.canvas.placeables.PlaceableObject.html#_onupdate)

### \_overlapsSelection

* \_overlapsSelection(rectangle: any): boolean

  #### Parameters

  + rectangle: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.html#_overlapsselection)

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_partialDraw](foundry.canvas.placeables.PlaceableObject.html#_partialdraw)

### \_pasteObject

* \_pasteObject(offset: any, options: any): any

  #### Parameters

  + offset: any
  + options: any

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_pasteObject](foundry.canvas.placeables.PlaceableObject.html#_pasteobject)

### \_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(event: any): null | { \_id: any; c: any }[]

  #### Parameters

  + event: any

  #### Returns null | { \_id: any; c: any }[]

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.html#_preparedragleftdropupdates)

### \_updateQuadtree

* \_updateQuadtree(): void

  `Internal`

  Update the quadtree.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_updateQuadtree](foundry.canvas.placeables.PlaceableObject.html#_updatequadtree)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_updateRotation](foundry.canvas.placeables.PlaceableObject.html#_updaterotation)

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[activateListeners](foundry.canvas.placeables.PlaceableObject.html#activatelisteners)

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#applyrenderflags)

### can

* can(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â action:  
  Â Â Â Â Â Â Â Â | "update"  
  Â Â Â Â Â Â Â Â | "delete"  
  Â Â Â Â Â Â Â Â | "view"  
  Â Â Â Â Â Â Â Â | "create"  
  Â Â Â Â Â Â Â Â | "control"  
  Â Â Â Â Â Â Â Â | "configure"  
  Â Â Â Â Â Â Â Â | "hover"  
  Â Â Â Â Â Â Â Â | "drag"  
  Â Â Â Â Â Â Â Â | "HUD",  
  ): boolean

  Test whether a user can perform a certain interaction regarding a Placeable Object

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Must be equal to `game.user`.
  + action:   
    Â Â Â Â | "update"  
    Â Â Â Â | "delete"  
    Â Â Â Â | "view"  
    Â Â Â Â | "create"  
    Â Â Â Â | "control"  
    Â Â Â Â | "configure"  
    Â Â Â Â | "hover"  
    Â Â Â Â | "drag"  
    Â Â Â Â | "HUD"

    The named action being attempted

  #### Returns boolean

  Does the User have rights to perform the action?

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[can](foundry.canvas.placeables.PlaceableObject.html#can)

### canRayIntersect

* canRayIntersect(ray: [Ray](foundry.canvas.geometry.Ray.html)): boolean

  A simple test for whether a Ray can intersect a directional wall

  #### Parameters

  + ray: [Ray](foundry.canvas.geometry.Ray.html)

    The ray to test

  #### Returns boolean

  Can an intersection occur?

### clear

* clear(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Wall](foundry.canvas.placeables.Wall.html)

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Wall](foundry.canvas.placeables.Wall.html)

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clear](foundry.canvas.placeables.PlaceableObject.html#clear)

### clearDoorControl

* clearDoorControl(): void

  Clear the door control if it exists.

  #### Returns void

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  A new object with identical data

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clone](foundry.canvas.placeables.PlaceableObject.html#clone)

### control

* control(\_\_namedParameters?: { chain?: boolean }): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + \_\_namedParameters: { chain?: boolean } = {}

    Additional options which modify the control request

  #### Returns boolean

  A flag denoting whether control was successful

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[control](foundry.canvas.placeables.PlaceableObject.html#control)

### createDoorControl

* createDoorControl(): DoorControl

  Draw a control icon that is used to manipulate the door's open/closed state

  #### Returns DoorControl

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[destroy](foundry.canvas.placeables.PlaceableObject.html#destroy)

### destroyDoorMeshes

* destroyDoorMeshes(): void

  Remove and destroy a DoorMesh from the PrimaryCanvasContainer.

  #### Returns void

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[draw](foundry.canvas.placeables.PlaceableObject.html#draw)

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

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.html#getsnappedposition)

### initializeEdge

* initializeEdge(options?: { deleted?: boolean }): void

  Initialize the edge which represents this Wall.

  #### Parameters

  + `Optional`options: { deleted?: boolean } = {}

    Options which modify how the edge is initialized

    - ##### `Optional`deleted?: boolean

      Has the edge been deleted?

  #### Returns void

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

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The refreshed object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[refresh](foundry.canvas.placeables.PlaceableObject.html#refresh)

### release

* release(options?: object): boolean

  Release control over a PlaceableObject, removing it from the controlled set

  #### Parameters

  + options: object = {}

    Options which modify the releasing workflow

  #### Returns boolean

  A Boolean flag confirming the object was released.

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[release](foundry.canvas.placeables.PlaceableObject.html#release)

### rotate

* rotate(angle: number, snap: number): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Rotate the PlaceableObject to a certain angle of facing

  #### Parameters

  + angle: number

    The desired angle of rotation
  + snap: number

    Snap the angle of rotation to a certain target degree increment

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The rotated object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[rotate](foundry.canvas.placeables.PlaceableObject.html#rotate)

### toRay

* toRay(): [Ray](foundry.canvas.geometry.Ray.html)

  This helper converts the wall segment to a Ray

  #### Returns [Ray](foundry.canvas.geometry.Ray.html)

  The wall in Ray representation

### `Protected`\_canConfigure

* \_canConfigure(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to configure the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.html#_canconfigure)

### `Protected`\_canCreate

* \_canCreate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to create the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canCreate](foundry.canvas.placeables.PlaceableObject.html#_cancreate)

### `Protected`\_canDelete

* \_canDelete(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to delete the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDelete](foundry.canvas.placeables.PlaceableObject.html#_candelete)

### `Protected`\_canDrag

* \_canDrag(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDrag](foundry.canvas.placeables.PlaceableObject.html#_candrag)

### `Protected`\_canDragLeftStart

* \_canDragLeftStart(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { notify: boolean },  
  ): boolean

  `Protected`

  Does the User have permission to left-click drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event
  + `Optional`options: { notify: boolean } = {}

    Options, used internally

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_candragleftstart)

### `Protected`\_canHover

* \_canHover(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to hover on this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canHover](foundry.canvas.placeables.PlaceableObject.html#_canhover)

### `Protected`\_canHUD

* \_canHUD(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Can the User access the HUD for this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canHUD](foundry.canvas.placeables.PlaceableObject.html#_canhud)

### `Protected`\_canUpdate

* \_canUpdate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to update the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canUpdate](foundry.canvas.placeables.PlaceableObject.html#_canupdate)

### `Protected`\_canView

* \_canView(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to view details of the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canView](foundry.canvas.placeables.PlaceableObject.html#_canview)

### `Protected`\_createInteractionManager

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_createInteractionManager](foundry.canvas.placeables.PlaceableObject.html#_createinteractionmanager)

### `Protected`\_finalizeDragLeft

* \_finalizeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the left-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_finalizeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_finalizedragleft)

### `Protected`\_finalizeDragRight

* \_finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_finalizeDragRight](foundry.canvas.placeables.PlaceableObject.html#_finalizedragright)

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.html#_gettargetalpha)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_initializeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_initializedragleft)

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_initializeDragRight](foundry.canvas.placeables.PlaceableObject.html#_initializedragright)

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.html#_onclickright)

### `Protected`\_onControl

* \_onControl(options: object): void

  `Protected`

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: object

    Optional parameters which apply for specific implementations

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onControl](foundry.canvas.placeables.PlaceableObject.html#_oncontrol)

### `Protected`\_onDragEnd

* \_onDragEnd(): void

  `Protected`

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.html#_ondragend)

### `Protected`\_onDragLeftCancel

* \_onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragleftcancel)

### `Protected`\_onDragLeftDrop

* \_onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): undefined | false

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns undefined | false

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragleftdrop)

### `Protected`\_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragrightcancel)

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragrightdrop)

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightMove](foundry.canvas.placeables.PlaceableObject.html#_ondragrightmove)

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#_ondragrightstart)

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragStart](foundry.canvas.placeables.PlaceableObject.html#_ondragstart)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onLongPress](foundry.canvas.placeables.PlaceableObject.html#_onlongpress)

### `Protected`\_onRelease

* \_onRelease(options: object): void

  `Protected`

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: object

    Options which modify the releasing workflow

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onRelease](foundry.canvas.placeables.PlaceableObject.html#_onrelease)

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUnclickLeft](foundry.canvas.placeables.PlaceableObject.html#_onunclickleft)

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUnclickRight](foundry.canvas.placeables.PlaceableObject.html#_onunclickright)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_propagateLeftClick](foundry.canvas.placeables.PlaceableObject.html#_propagateleftclick)

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_propagateRightClick](foundry.canvas.placeables.PlaceableObject.html#_propagaterightclick)

### `Protected`\_refreshDirection

* \_refreshDirection(): undefined | false

  `Protected`

  Draw a directional prompt icon for one-way walls to illustrate their direction of effect.

  #### Returns undefined | false

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

  Refresh the displayed state of the Wall.

  #### Returns void

### `Protected`#onDragRightStart

* "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[#onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#ondragrightstart)

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

    The objects that are copied

  #### Returns Point

  The offset

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getCopiedObjectsOrigin](foundry.canvas.placeables.PlaceableObject.html#_getcopiedobjectsorigin)

### `Static`\_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  Â Â Â Â position: ElevatedPoint,  
  Â Â Â Â snapped: ElevatedPoint,  
  Â Â Â Â grid: [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>,  
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
  + grid: [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

    The grid

  #### Returns ElevatedPoint

  The shifted target coordinates

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition-2)