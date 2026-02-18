---
title: "Drawing | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.placeables.Drawing.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [placeables](../modules/foundry.canvas.placeables.html)
* [Drawing](foundry.canvas.placeables.Drawing.html)

# Class Drawing

The Drawing object is an implementation of the PlaceableObject container.
Each Drawing is a placeable object in the DrawingsLayer.

#### See

* [foundry.documents.DrawingDocument](foundry.documents.DrawingDocument.html)
* [foundry.canvas.layers.DrawingsLayer](foundry.canvas.layers.DrawingsLayer.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.placeables.Drawing))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)
  + Drawing

##### Index

### Constructors

[constructor](foundry.canvas.placeables.Drawing.html#constructor)

### Properties

[\_fixedPoints](foundry.canvas.placeables.Drawing.html#_fixedpoints)
[\_onkeydown](foundry.canvas.placeables.Drawing.html#_onkeydown)
[\_pendingText](foundry.canvas.placeables.Drawing.html#_pendingtext)
[controlIcon](foundry.canvas.placeables.Drawing.html#controlicon)
[document](foundry.canvas.placeables.Drawing.html#document)
[frame](foundry.canvas.placeables.Drawing.html#frame)
[mouseInteractionManager](foundry.canvas.placeables.Drawing.html#mouseinteractionmanager)
[renderFlags](foundry.canvas.placeables.Drawing.html#renderflags)
[scene](foundry.canvas.placeables.Drawing.html#scene)
[shape](foundry.canvas.placeables.Drawing.html#shape)
[text](foundry.canvas.placeables.Drawing.html#text)
[texture](foundry.canvas.placeables.Drawing.html#texture)
[embeddedName](foundry.canvas.placeables.Drawing.html#embeddedname)
[FREEHAND\_SAMPLE\_RATE](foundry.canvas.placeables.Drawing.html#freehand_sample_rate)
[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.Drawing.html#render_flag_priority)
[RENDER\_FLAGS](foundry.canvas.placeables.Drawing.html#render_flags)
[SHAPE\_TYPES](foundry.canvas.placeables.Drawing.html#shape_types)

### Accessors

[\_original](foundry.canvas.placeables.Drawing.html#_original)
[bounds](foundry.canvas.placeables.Drawing.html#bounds)
[center](foundry.canvas.placeables.Drawing.html#center)
[controlled](foundry.canvas.placeables.Drawing.html#controlled)
[hasActiveHUD](foundry.canvas.placeables.Drawing.html#hasactivehud)
[hasPreview](foundry.canvas.placeables.Drawing.html#haspreview)
[hasText](foundry.canvas.placeables.Drawing.html#hastext)
[hover](foundry.canvas.placeables.Drawing.html#hover)
[id](foundry.canvas.placeables.Drawing.html#id)
[interactionState](foundry.canvas.placeables.Drawing.html#interactionstate)
[isAuthor](foundry.canvas.placeables.Drawing.html#isauthor)
[isOwner](foundry.canvas.placeables.Drawing.html#isowner)
[isPolygon](foundry.canvas.placeables.Drawing.html#ispolygon)
[isPreview](foundry.canvas.placeables.Drawing.html#ispreview)
[isTiled](foundry.canvas.placeables.Drawing.html#istiled)
[isVisible](foundry.canvas.placeables.Drawing.html#isvisible)
[layer](foundry.canvas.placeables.Drawing.html#layer)
[objectId](foundry.canvas.placeables.Drawing.html#objectid)
[sheet](foundry.canvas.placeables.Drawing.html#sheet)
[sourceId](foundry.canvas.placeables.Drawing.html#sourceid)
[type](foundry.canvas.placeables.Drawing.html#type)
[implementation](foundry.canvas.placeables.Drawing.html#implementation)

### Methods

[\_addPoint](foundry.canvas.placeables.Drawing.html#_addpoint)
[\_applyRenderFlags](foundry.canvas.placeables.Drawing.html#_applyrenderflags)
[\_canConfigure](foundry.canvas.placeables.Drawing.html#_canconfigure)
[\_canControl](foundry.canvas.placeables.Drawing.html#_cancontrol)
[\_destroy](foundry.canvas.placeables.Drawing.html#_destroy)
[\_draw](foundry.canvas.placeables.Drawing.html#_draw)
[\_getShiftedPosition](foundry.canvas.placeables.Drawing.html#_getshiftedposition)
[\_onClickLeft](foundry.canvas.placeables.Drawing.html#_onclickleft)
[\_onControl](foundry.canvas.placeables.Drawing.html#_oncontrol)
[\_onDelete](foundry.canvas.placeables.Drawing.html#_ondelete)
[\_onDragLeftCancel](foundry.canvas.placeables.Drawing.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.placeables.Drawing.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.placeables.Drawing.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.placeables.Drawing.html#_ondragleftstart)
[\_onRelease](foundry.canvas.placeables.Drawing.html#_onrelease)
[\_onUpdate](foundry.canvas.placeables.Drawing.html#_onupdate)
[\_overlapsSelection](foundry.canvas.placeables.Drawing.html#_overlapsselection)
[\_partialDraw](foundry.canvas.placeables.Drawing.html#_partialdraw)
[\_pasteObject](foundry.canvas.placeables.Drawing.html#_pasteobject)
[\_removePoint](foundry.canvas.placeables.Drawing.html#_removepoint)
[\_updateQuadtree](foundry.canvas.placeables.Drawing.html#_updatequadtree)
[\_updateRotation](foundry.canvas.placeables.Drawing.html#_updaterotation)
[activateListeners](foundry.canvas.placeables.Drawing.html#activatelisteners)
[applyRenderFlags](foundry.canvas.placeables.Drawing.html#applyrenderflags)
[can](foundry.canvas.placeables.Drawing.html#can)
[clear](foundry.canvas.placeables.Drawing.html#clear)
[clone](foundry.canvas.placeables.Drawing.html#clone)
[control](foundry.canvas.placeables.Drawing.html#control)
[destroy](foundry.canvas.placeables.Drawing.html#destroy)
[draw](foundry.canvas.placeables.Drawing.html#draw)
[enableTextEditing](foundry.canvas.placeables.Drawing.html#enabletextediting)
[getSnappedPosition](foundry.canvas.placeables.Drawing.html#getsnappedposition)
[refresh](foundry.canvas.placeables.Drawing.html#refresh)
[release](foundry.canvas.placeables.Drawing.html#release)
[rotate](foundry.canvas.placeables.Drawing.html#rotate)
[\_canCreate](foundry.canvas.placeables.Drawing.html#_cancreate)
[\_canDelete](foundry.canvas.placeables.Drawing.html#_candelete)
[\_canDrag](foundry.canvas.placeables.Drawing.html#_candrag)
[\_canDragLeftStart](foundry.canvas.placeables.Drawing.html#_candragleftstart)
[\_canHover](foundry.canvas.placeables.Drawing.html#_canhover)
[\_canHUD](foundry.canvas.placeables.Drawing.html#_canhud)
[\_canUpdate](foundry.canvas.placeables.Drawing.html#_canupdate)
[\_canView](foundry.canvas.placeables.Drawing.html#_canview)
[\_createInteractionManager](foundry.canvas.placeables.Drawing.html#_createinteractionmanager)
[\_finalizeDragLeft](foundry.canvas.placeables.Drawing.html#_finalizedragleft)
[\_finalizeDragRight](foundry.canvas.placeables.Drawing.html#_finalizedragright)
[\_getFillStyle](foundry.canvas.placeables.Drawing.html#_getfillstyle)
[\_getLineStyle](foundry.canvas.placeables.Drawing.html#_getlinestyle)
[\_getTargetAlpha](foundry.canvas.placeables.Drawing.html#_gettargetalpha)
[\_getTextStyle](foundry.canvas.placeables.Drawing.html#_gettextstyle)
[\_initializeDragLeft](foundry.canvas.placeables.Drawing.html#_initializedragleft)
[\_initializeDragRight](foundry.canvas.placeables.Drawing.html#_initializedragright)
[\_onClickLeft2](foundry.canvas.placeables.Drawing.html#_onclickleft2)
[\_onClickRight](foundry.canvas.placeables.Drawing.html#_onclickright)
[\_onClickRight2](foundry.canvas.placeables.Drawing.html#_onclickright2)
[\_onCreate](foundry.canvas.placeables.Drawing.html#_oncreate)
[\_onDragEnd](foundry.canvas.placeables.Drawing.html#_ondragend)
[\_onDragRightCancel](foundry.canvas.placeables.Drawing.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.placeables.Drawing.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.placeables.Drawing.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.placeables.Drawing.html#_ondragrightstart)
[\_onDragStart](foundry.canvas.placeables.Drawing.html#_ondragstart)
[\_onHandleDragCancel](foundry.canvas.placeables.Drawing.html#_onhandledragcancel)
[\_onHandleDragDrop](foundry.canvas.placeables.Drawing.html#_onhandledragdrop)
[\_onHandleDragMove](foundry.canvas.placeables.Drawing.html#_onhandledragmove)
[\_onHandleDragStart](foundry.canvas.placeables.Drawing.html#_onhandledragstart)
[\_onHandleHoverIn](foundry.canvas.placeables.Drawing.html#_onhandlehoverin)
[\_onHandleHoverOut](foundry.canvas.placeables.Drawing.html#_onhandlehoverout)
[\_onHoverIn](foundry.canvas.placeables.Drawing.html#_onhoverin)
[\_onHoverOut](foundry.canvas.placeables.Drawing.html#_onhoverout)
[\_onLongPress](foundry.canvas.placeables.Drawing.html#_onlongpress)
[\_onMouseDraw](foundry.canvas.placeables.Drawing.html#_onmousedraw)
[\_onUnclickLeft](foundry.canvas.placeables.Drawing.html#_onunclickleft)
[\_onUnclickRight](foundry.canvas.placeables.Drawing.html#_onunclickright)
[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.Drawing.html#_preparedragleftdropupdates)
[\_propagateLeftClick](foundry.canvas.placeables.Drawing.html#_propagateleftclick)
[\_propagateRightClick](foundry.canvas.placeables.Drawing.html#_propagaterightclick)
[\_refreshElevation](foundry.canvas.placeables.Drawing.html#_refreshelevation)
[\_refreshFrame](foundry.canvas.placeables.Drawing.html#_refreshframe)
[\_refreshPosition](foundry.canvas.placeables.Drawing.html#_refreshposition)
[\_refreshRotation](foundry.canvas.placeables.Drawing.html#_refreshrotation)
[\_refreshShape](foundry.canvas.placeables.Drawing.html#_refreshshape)
[\_refreshState](foundry.canvas.placeables.Drawing.html#_refreshstate)
[\_refreshText](foundry.canvas.placeables.Drawing.html#_refreshtext)
[#onDragRightStart](foundry.canvas.placeables.Drawing.html#ondragrightstart)
[\_getCopiedObjectsOrigin](foundry.canvas.placeables.Drawing.html#_getcopiedobjectsorigin)
[\_getShiftedPosition](foundry.canvas.placeables.Drawing.html#_getshiftedposition-2)
[normalizeShape](foundry.canvas.placeables.Drawing.html#normalizeshape)
[rescaleDimensions](foundry.canvas.placeables.Drawing.html#rescaledimensions)

## Constructors

### constructor

* new Drawing(document: CanvasDocument): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

  #### Parameters

  + document: CanvasDocument

    The Document instance represented by this object

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[constructor](foundry.canvas.placeables.PlaceableObject.html#constructor)

## Properties

### `Internal`\_fixedPoints

\_fixedPoints: number[]

An internal flag for the permanent points of the polygon.

### `Internal`\_onkeydown

\_onkeydown: null | Function = null

The registered keydown listener.

### `Internal`\_pendingText

\_pendingText: string

The pending text.

### controlIcon

controlIcon: null | [ControlIcon](foundry.canvas.containers.ControlIcon.html)

A control icon for interacting with the object

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[controlIcon](foundry.canvas.placeables.PlaceableObject.html#controlicon)

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[document](foundry.canvas.placeables.PlaceableObject.html#document)

### frame

frame: Container<DisplayObject>

The border frame and resizing handles for the drawing.

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

### shape

shape: any

The drawing shape which is rendered as a PIXI.Graphics in the interface or a PrimaryGraphics in the Primary Group.

### text

text: null | [PreciseText](foundry.canvas.containers.PreciseText.html) = null

A text label that may be displayed as part of the interface layer for the Drawing.

### texture

texture: null | Texture<Resource> = null

The texture that is used to fill this Drawing, if any.

### `Static`embeddedName

embeddedName: string = "Drawing"

Identify the official Document name for this PlaceableObject class

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[embeddedName](foundry.canvas.placeables.PlaceableObject.html#embeddedname)

### `Static`FREEHAND\_SAMPLE\_RATE

FREEHAND\_SAMPLE\_RATE: number = 75

The rate at which points are sampled (in milliseconds) during a freehand drawing workflow

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.html#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshElevation: {};  
Â Â Â Â refreshFrame: {};  
Â Â Â Â refreshMesh: {  
Â Â Â Â Â Â Â Â deprecated: { alias: boolean; since: number; until: number };  
Â Â Â Â Â Â Â Â propagate: string[];  
Â Â Â Â };  
Â Â Â Â refreshPosition: {};  
Â Â Â Â refreshRotation: { propagate: string[] };  
Â Â Â Â refreshShape: {};  
Â Â Â Â refreshSize: { propagate: string[] };  
Â Â Â Â refreshState: {};  
Â Â Â Â refreshText: {};  
Â Â Â Â refreshTransform: { alias: boolean; propagate: string[] };  
} = ...

#### Type declaration

* ##### redraw: { propagate: string[] }
* ##### refresh: { alias: boolean; propagate: string[] }
* ##### refreshElevation: {}
* ##### refreshFrame: {}
* ##### refreshMesh: { Â Â Â Â deprecated: { alias: boolean; since: number; until: number }; Â Â Â Â propagate: string[]; }

  #### Deprecated

  since v12
* ##### refreshPosition: {}
* ##### refreshRotation: { propagate: string[] }
* ##### refreshShape: {}
* ##### refreshSize: { propagate: string[] }
* ##### refreshState: {}
* ##### refreshText: {}
* ##### refreshTransform: { alias: boolean; propagate: string[] }

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.html#render_flags)

### `Static`SHAPE\_TYPES

SHAPE\_TYPES: {  
Â Â Â Â CIRCLE: string;  
Â Â Â Â ELLIPSE: string;  
Â Â Â Â POLYGON: string;  
Â Â Â Â RECTANGLE: string;  
} = ShapeData.TYPES

A convenience reference to the possible shape types.

## Accessors

### \_original

* get \_original(): undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object that this object is a preview of if this object is a preview.

  #### Returns undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.\_original

### bounds

* get bounds(): any

  #### Returns any

  Overrides PlaceableObject.bounds

### center

* get center(): Point

  #### Returns Point

  Overrides PlaceableObject.center

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

  Inherited from PlaceableObject.controlled

### hasActiveHUD

* get hasActiveHUD(): boolean

  Is the HUD display active for this Placeable?

  #### Returns boolean

  Inherited from PlaceableObject.hasActiveHUD

### hasPreview

* get hasPreview(): boolean

  Does there exist a temporary preview of this placeable object?

  #### Returns boolean

  Inherited from PlaceableObject.hasPreview

### hasText

* get hasText(): boolean

  Does the Drawing have text that is displayed?

  #### Returns boolean

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

### isAuthor

* get isAuthor(): boolean

  A convenient reference for whether the current User is the author of the Drawing document.

  #### Returns boolean

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

  Inherited from PlaceableObject.isOwner

### isPolygon

* get isPolygon(): boolean

  A Boolean flag for whether the Drawing is a Polygon type (either linear or freehand)?

  #### Returns boolean

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

  Inherited from PlaceableObject.isPreview

### isTiled

* get isTiled(): boolean

  A Boolean flag for whether the Drawing utilizes a tiled texture background?

  #### Returns boolean

### isVisible

* get isVisible(): boolean

  Is this Drawing currently visible on the Canvas?

  #### Returns boolean

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Inherited from PlaceableObject.layer

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

### sourceId

* get sourceId(): string

  The named identified for the source object associated with this PlaceableObject.
  This differs from the objectId because the sourceId is the same for preview objects as for the original.

  #### Returns string

  Inherited from PlaceableObject.sourceId

### type

* get type(): string

  The shape type that this Drawing represents. A value in Drawing.SHAPE\_TYPES.

  #### Returns string

  #### See

  [Drawing.SHAPE\_TYPES](foundry.canvas.placeables.Drawing.html#shape_types)

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.implementation

## Methods

### \_addPoint

* \_addPoint(  
  Â Â Â Â position: Point,  
  Â Â Â Â options?: { round?: boolean; snap?: boolean; temporary?: boolean },  
  ): void

  `Internal`

  Add a new polygon point to the drawing, ensuring it differs from the last one

  #### Parameters

  + position: Point

    The drawing point to add
  + `Optional`options: { round?: boolean; snap?: boolean; temporary?: boolean } = {}

    Options which configure how the point is added

    - ##### `Optional`round?: boolean

      Should the point be rounded to integer coordinates?
    - ##### `Optional`snap?: boolean

      Should the point be snapped to grid precision?
    - ##### `Optional`temporary?: boolean

      Is this a temporary control point?

  #### Returns void

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  #### Parameters

  + flags: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#_applyrenderflags)

### \_canConfigure

* \_canConfigure(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.html#_canconfigure)

### \_canControl

* \_canControl(user: any, event: any): any

  #### Parameters

  + user: any
  + event: any

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canControl](foundry.canvas.placeables.PlaceableObject.html#_cancontrol)

### \_destroy

* \_destroy(options: any): void

  The inner \_destroy method which may optionally be defined by each PlaceableObject subclass.

  #### Parameters

  + options: any

    Options passed to the initial destroy call

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

### \_onControl

* \_onControl(options: any): void

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: any

    Optional parameters which apply for specific implementations

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onControl](foundry.canvas.placeables.PlaceableObject.html#_oncontrol)

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDelete](foundry.canvas.placeables.PlaceableObject.html#_ondelete)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): boolean | void

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: any

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): false | void

  #### Parameters

  + event: any

  #### Returns false | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragleftdrop)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.html#_ondragleftmove)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): boolean | void

  #### Parameters

  + event: any

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_ondragleftstart)

### \_onRelease

* \_onRelease(options: any): void

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: any

    Options which modify the releasing workflow

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onRelease](foundry.canvas.placeables.PlaceableObject.html#_onrelease)

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

* \_overlapsSelection(rectangle: any): any

  #### Parameters

  + rectangle: any

  #### Returns any

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

* \_pasteObject(  
  Â Â Â Â offset: Point,  
  Â Â Â Â options?: { hidden?: boolean; snap?: boolean },  
  ): object

  `Internal`

  Get the data of the copied object pasted at the position given by the offset.
  Called by [foundry.canvas.layers.PlaceablesLayer#pasteObjects](foundry.canvas.layers.PlaceablesLayer.html#pasteobjects) for each copied object.

  #### Parameters

  + offset: Point

    The offset relative from the current position to the destination
  + `Optional`options: { hidden?: boolean; snap?: boolean } = {}

    Options of [foundry.canvas.layers.PlaceablesLayer#pasteObjects](foundry.canvas.layers.PlaceablesLayer.html#pasteobjects)

    - ##### `Optional`hidden?: boolean

      Paste in a hidden state, if applicable. Default is false.
    - ##### `Optional`snap?: boolean

      Snap to the grid. Default is true.

  #### Returns object

  The update data

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_pasteObject](foundry.canvas.placeables.PlaceableObject.html#_pasteobject)

### \_removePoint

* \_removePoint(): void

  `Internal`

  Remove the last fixed point from the polygon

  #### Returns void

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

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[activateListeners](foundry.canvas.placeables.PlaceableObject.html#activatelisteners)

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

### clear

* clear(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

  Clear the display of the existing object.

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

  The cleared object

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clear](foundry.canvas.placeables.PlaceableObject.html#clear)

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  A new object with identical data

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clone](foundry.canvas.placeables.PlaceableObject.html#clone)

### control

* control(options?: { releaseOthers?: boolean }): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + `Optional`options: { releaseOthers?: boolean } = {}

    Additional options which modify the control request

    - ##### `Optional`releaseOthers?: boolean

      Release any other controlled objects first

  #### Returns boolean

  A flag denoting whether control was successful

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[control](foundry.canvas.placeables.PlaceableObject.html#control)

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[destroy](foundry.canvas.placeables.PlaceableObject.html#destroy)

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[draw](foundry.canvas.placeables.PlaceableObject.html#draw)

### enableTextEditing

* enableTextEditing(options?: object): void

  Enable text editing for this drawing.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns void

### getSnappedPosition

* getSnappedPosition(position?: any): Point

  Get the snapped position for a given position or the current position.

  #### Parameters

  + `Optional`position: any

    The position to be used instead of the current position

  #### Returns Point

  The snapped position

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.html#getsnappedposition)

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

### `Protected`\_getFillStyle

* \_getFillStyle(): object

  `Protected`

  Get the fill style used for drawing the shape of this Drawing.

  #### Returns object

  The fill style options (`PIXI.IFillStyleOptions`).

### `Protected`\_getLineStyle

* \_getLineStyle(): object

  `Protected`

  Get the line style used for drawing the shape of this Drawing.

  #### Returns object

  The line style options (`PIXI.ILineStyleOptions`).

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.html#_gettargetalpha)

### `Protected`\_getTextStyle

* \_getTextStyle(): TextStyle

  `Protected`

  Prepare the text style used to instantiate a PIXI.Text or PreciseText instance for this Drawing document.

  #### Returns TextStyle

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

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double left-click event to activate

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.html#_onclickleft2)

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.html#_onclickright)

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.html#_onclickright2)

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: object
  + options: object
  + userId: string

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onCreate](foundry.canvas.placeables.PlaceableObject.html#_oncreate)

### `Protected`\_onDragEnd

* \_onDragEnd(): void

  `Protected`

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.html#_ondragend)

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

### `Protected`\_onHandleDragCancel

* \_onHandleDragCancel(event: PointerEvent): void

  `Protected`

  Handle cancellation of a drag event for one of the resizing handles

  #### Parameters

  + event: PointerEvent

    The drag cancellation event

  #### Returns void

### `Protected`\_onHandleDragDrop

* \_onHandleDragDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouseup after dragging a tile scale handler

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouseup event

  #### Returns void

### `Protected`\_onHandleDragMove

* \_onHandleDragMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mousemove while dragging a tile scale handler

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouse interaction event

  #### Returns void

### `Protected`\_onHandleDragStart

* \_onHandleDragStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Starting the resize handle drag event, initialize the original data.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouse interaction event

  #### Returns void

### `Protected`\_onHandleHoverIn

* \_onHandleHoverIn(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouse-over event on a control handle

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouseover event

  #### Returns void

### `Protected`\_onHandleHoverOut

* \_onHandleHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouse-out event on a control handle

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The mouseout event

  #### Returns void

### `Protected`\_onHoverIn

* \_onHoverIn(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { hoverOutOthers?: boolean },  
  ): boolean | void

  `Protected`

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event
  + options: { hoverOutOthers?: boolean } = {}

    Options which customize event handling

    - ##### `Optional`hoverOutOthers?: boolean

      Trigger hover-out behavior on sibling objects

  #### Returns boolean | void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.html#_onhoverin)

### `Protected`\_onHoverOut

* \_onHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.html#_onhoverout)

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

### `Protected`\_onMouseDraw

* \_onMouseDraw(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle mouse movement which modifies the dimensions of the drawn shape.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns void

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

### `Protected`\_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  ): null | object[] | [updates: object[], options?: object]

  `Protected`

  Perform the database updates that should occur as the result of a drag-left-drop operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns null | object[] | [updates: object[], options?: object]

  An array of database updates to perform for documents in this collection

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.html#_preparedragleftdropupdates)

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

### `Protected`\_refreshElevation

* \_refreshElevation(): void

  `Protected`

  Update sorting of this Drawing relative to other PrimaryCanvasGroup siblings.
  Called when the elevation or sort order for the Drawing changes.

  #### Returns void

### `Protected`\_refreshFrame

* \_refreshFrame(): void

  `Protected`

  Refresh the border frame that encloses the Drawing.

  #### Returns void

### `Protected`\_refreshPosition

* \_refreshPosition(): void

  `Protected`

  Refresh the position.

  #### Returns void

### `Protected`\_refreshRotation

* \_refreshRotation(): void

  `Protected`

  Refresh the rotation.

  #### Returns void

### `Protected`\_refreshShape

* \_refreshShape(): void

  `Protected`

  Clear and then draw the shape.

  #### Returns void

### `Protected`\_refreshState

* \_refreshState(): void

  `Protected`

  Refresh the displayed state of the Drawing.
  Used to update aspects of the Drawing which change based on the user interaction state.

  #### Returns void

### `Protected`\_refreshText

* \_refreshText(): void

  `Protected`

  Refresh the content and appearance of text.

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

### `Static`normalizeShape

* normalizeShape(data: object): object

  Adjust the location, dimensions, and points of the Drawing before committing the change.

  #### Parameters

  + data: object

    The DrawingData pending update

  #### Returns object

  The adjusted data

### `Static`rescaleDimensions

* rescaleDimensions(original: Object, dx: number, dy: number): object

  Get a vectorized rescaling transformation for drawing data and dimensions passed in parameter

  #### Parameters

  + original: Object

    The original drawing data
  + dx: number

    The pixel distance dragged in the horizontal direction
  + dy: number

    The pixel distance dragged in the vertical direction

  #### Returns object

  The adjusted shape data