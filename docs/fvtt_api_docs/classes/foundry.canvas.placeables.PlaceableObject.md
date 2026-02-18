---
title: "PlaceableObject | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.placeables.PlaceableObject.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [placeables](../modules/foundry.canvas.placeables.html)
* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

# Class PlaceableObject`Abstract`

An Abstract Base Class which defines a Placeable Object which represents a Document placed on the Canvas

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.placeables.PlaceableObject))

* RenderFlagObject<this>
  + PlaceableObject
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Note](foundry.canvas.placeables.Note.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Region](foundry.canvas.placeables.Region.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Tile](foundry.canvas.placeables.Tile.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[MeasuredTemplate](foundry.canvas.placeables.MeasuredTemplate.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Wall](foundry.canvas.placeables.Wall.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientLight](foundry.canvas.placeables.AmbientLight.html)
    - [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientSound](foundry.canvas.placeables.AmbientSound.html)

##### Index

### Constructors

[constructor](foundry.canvas.placeables.PlaceableObject.html#constructor)

### Properties

[controlIcon](foundry.canvas.placeables.PlaceableObject.html#controlicon)
[document](foundry.canvas.placeables.PlaceableObject.html#document)
[mouseInteractionManager](foundry.canvas.placeables.PlaceableObject.html#mouseinteractionmanager)
[renderFlags](foundry.canvas.placeables.PlaceableObject.html#renderflags)
[scene](foundry.canvas.placeables.PlaceableObject.html#scene)
[embeddedName](foundry.canvas.placeables.PlaceableObject.html#embeddedname)
[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.html#render_flag_priority)
[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.html#render_flags)

### Accessors

[\_original](foundry.canvas.placeables.PlaceableObject.html#_original)
[bounds](foundry.canvas.placeables.PlaceableObject.html#bounds)
[center](foundry.canvas.placeables.PlaceableObject.html#center)
[controlled](foundry.canvas.placeables.PlaceableObject.html#controlled)
[hasActiveHUD](foundry.canvas.placeables.PlaceableObject.html#hasactivehud)
[hasPreview](foundry.canvas.placeables.PlaceableObject.html#haspreview)
[hover](foundry.canvas.placeables.PlaceableObject.html#hover)
[id](foundry.canvas.placeables.PlaceableObject.html#id)
[interactionState](foundry.canvas.placeables.PlaceableObject.html#interactionstate)
[isOwner](foundry.canvas.placeables.PlaceableObject.html#isowner)
[isPreview](foundry.canvas.placeables.PlaceableObject.html#ispreview)
[layer](foundry.canvas.placeables.PlaceableObject.html#layer)
[objectId](foundry.canvas.placeables.PlaceableObject.html#objectid)
[sheet](foundry.canvas.placeables.PlaceableObject.html#sheet)
[sourceId](foundry.canvas.placeables.PlaceableObject.html#sourceid)
[implementation](foundry.canvas.placeables.PlaceableObject.html#implementation)

### Methods

[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition)
[\_partialDraw](foundry.canvas.placeables.PlaceableObject.html#_partialdraw)
[\_pasteObject](foundry.canvas.placeables.PlaceableObject.html#_pasteobject)
[\_updateQuadtree](foundry.canvas.placeables.PlaceableObject.html#_updatequadtree)
[\_updateRotation](foundry.canvas.placeables.PlaceableObject.html#_updaterotation)
[activateListeners](foundry.canvas.placeables.PlaceableObject.html#activatelisteners)
[applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#applyrenderflags)
[can](foundry.canvas.placeables.PlaceableObject.html#can)
[clear](foundry.canvas.placeables.PlaceableObject.html#clear)
[clone](foundry.canvas.placeables.PlaceableObject.html#clone)
[control](foundry.canvas.placeables.PlaceableObject.html#control)
[destroy](foundry.canvas.placeables.PlaceableObject.html#destroy)
[draw](foundry.canvas.placeables.PlaceableObject.html#draw)
[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.html#getsnappedposition)
[refresh](foundry.canvas.placeables.PlaceableObject.html#refresh)
[release](foundry.canvas.placeables.PlaceableObject.html#release)
[rotate](foundry.canvas.placeables.PlaceableObject.html#rotate)
[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#_applyrenderflags)
[\_canConfigure](foundry.canvas.placeables.PlaceableObject.html#_canconfigure)
[\_canControl](foundry.canvas.placeables.PlaceableObject.html#_cancontrol)
[\_canCreate](foundry.canvas.placeables.PlaceableObject.html#_cancreate)
[\_canDelete](foundry.canvas.placeables.PlaceableObject.html#_candelete)
[\_canDrag](foundry.canvas.placeables.PlaceableObject.html#_candrag)
[\_canDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_candragleftstart)
[\_canHover](foundry.canvas.placeables.PlaceableObject.html#_canhover)
[\_canHUD](foundry.canvas.placeables.PlaceableObject.html#_canhud)
[\_canUpdate](foundry.canvas.placeables.PlaceableObject.html#_canupdate)
[\_canView](foundry.canvas.placeables.PlaceableObject.html#_canview)
[\_createInteractionManager](foundry.canvas.placeables.PlaceableObject.html#_createinteractionmanager)
[\_destroy](foundry.canvas.placeables.PlaceableObject.html#_destroy)
[\_draw](foundry.canvas.placeables.PlaceableObject.html#_draw)
[\_finalizeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_finalizedragleft)
[\_finalizeDragRight](foundry.canvas.placeables.PlaceableObject.html#_finalizedragright)
[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.html#_gettargetalpha)
[\_initializeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_initializedragleft)
[\_initializeDragRight](foundry.canvas.placeables.PlaceableObject.html#_initializedragright)
[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.html#_onclickleft2)
[\_onClickRight](foundry.canvas.placeables.PlaceableObject.html#_onclickright)
[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.html#_onclickright2)
[\_onControl](foundry.canvas.placeables.PlaceableObject.html#_oncontrol)
[\_onCreate](foundry.canvas.placeables.PlaceableObject.html#_oncreate)
[\_onDelete](foundry.canvas.placeables.PlaceableObject.html#_ondelete)
[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.html#_ondragend)
[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_ondragleftstart)
[\_onDragRightCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.placeables.PlaceableObject.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#_ondragrightstart)
[\_onDragStart](foundry.canvas.placeables.PlaceableObject.html#_ondragstart)
[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.html#_onhoverin)
[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.html#_onhoverout)
[\_onLongPress](foundry.canvas.placeables.PlaceableObject.html#_onlongpress)
[\_onRelease](foundry.canvas.placeables.PlaceableObject.html#_onrelease)
[\_onUnclickLeft](foundry.canvas.placeables.PlaceableObject.html#_onunclickleft)
[\_onUnclickRight](foundry.canvas.placeables.PlaceableObject.html#_onunclickright)
[\_onUpdate](foundry.canvas.placeables.PlaceableObject.html#_onupdate)
[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.html#_overlapsselection)
[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.html#_preparedragleftdropupdates)
[\_propagateLeftClick](foundry.canvas.placeables.PlaceableObject.html#_propagateleftclick)
[\_propagateRightClick](foundry.canvas.placeables.PlaceableObject.html#_propagaterightclick)
[#onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#ondragrightstart)
[\_getCopiedObjectsOrigin](foundry.canvas.placeables.PlaceableObject.html#_getcopiedobjectsorigin)
[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition-2)

## Constructors

### constructor

* new PlaceableObject(document: CanvasDocument): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  #### Parameters

  + document: CanvasDocument

    The Document instance represented by this object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Overrides RenderFlagsMixin(PIXI.Container).constructor

## Properties

### controlIcon

controlIcon: null | [ControlIcon](foundry.canvas.containers.ControlIcon.html)

A control icon for interacting with the object

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

A mouse interaction manager instance which handles mouse workflows related to this object.

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.html)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin(PIXI.Container).renderFlags

### scene

scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

Retain a reference to the Scene within which this Placeable Object resides

### `Static`embeddedName

embeddedName: string

Identify the official Document name for this PlaceableObject class

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from RenderFlagsMixin(PIXI.Container).RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshState: {};  
} = ...

The flags declared here are required for all PlaceableObject subclasses to also support.

Overrides RenderFlagsMixin(PIXI.Container).RENDER\_FLAGS

## Accessors

### \_original

* get \_original(): undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object that this object is a preview of if this object is a preview.

  #### Returns undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

### bounds

* get bounds(): Rectangle

  The bounding box for this PlaceableObject.
  This is required if the layer uses a Quadtree, otherwise it is optional

  #### Returns Rectangle

### center

* get center(): Point

  The central coordinate pair of the placeable object based on it's own width and height

  #### Returns Point

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

### hasActiveHUD

* get hasActiveHUD(): boolean

  Is the HUD display active for this Placeable?

  #### Returns boolean

### hasPreview

* get hasPreview(): boolean

  Does there exist a temporary preview of this placeable object?

  #### Returns boolean

### hover

* get hover(): boolean

  An indicator for whether the object is currently a hover target

  #### Returns boolean

### id

* get id(): string

  The id of the corresponding Document which this PlaceableObject represents.

  #### Returns string

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

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

### sourceId

* get sourceId(): string

  The named identified for the source object associated with this PlaceableObject.
  This differs from the objectId because the sourceId is the same for preview objects as for the original.

  #### Returns string

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

## Methods

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

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

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

### \_updateQuadtree

* \_updateQuadtree(): void

  `Internal`

  Update the quadtree.

  #### Returns void

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

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Overrides RenderFlagsMixin(PIXI.Container).applyRenderFlags

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

### clear

* clear(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clear the display of the existing object.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The cleared object

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  A new object with identical data

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

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

### getSnappedPosition

* getSnappedPosition(position?: any): Point

  Get the snapped position for a given position or the current position.

  #### Parameters

  + `Optional`position: any

    The position to be used instead of the current position

  #### Returns Point

  The snapped position

### refresh

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The refreshed object

### release

* release(options?: object): boolean

  Release control over a PlaceableObject, removing it from the controlled set

  #### Parameters

  + options: object = {}

    Options which modify the releasing workflow

  #### Returns boolean

  A Boolean flag confirming the object was released.

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

### `Protected`\_applyRenderFlags

* \_applyRenderFlags(flags: Record<string, boolean>): void

  `Protected`

  Apply render flags before a render occurs.

  #### Parameters

  + flags: Record<string, boolean>

    The render flags which must be applied

  #### Returns void

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

### `Protected`\_canControl

* \_canControl(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to control the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

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

### `Protected`\_createInteractionManager

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

### `Protected`\_destroy

* \_destroy(options?: object): void

  `Protected`

  The inner \_destroy method which may optionally be defined by each PlaceableObject subclass.

  #### Parameters

  + `Optional`options: object

    Options passed to the initial destroy call

  #### Returns void

### `Protected` `Abstract`\_draw

* \_draw(options: object): Promise<void>

  `Protected`

  The inner \_draw method which must be defined by each PlaceableObject subclass.

  #### Parameters

  + options: object

    Options which may modify the draw workflow

  #### Returns Promise<void>

### `Protected`\_finalizeDragLeft

* \_finalizeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the left-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

### `Protected`\_finalizeDragRight

* \_finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

### `Protected`\_initializeDragLeft

* \_initializeDragLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the left-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a single left-click event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns boolean | void

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double left-click event to activate

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onControl

* \_onControl(options: object): void

  `Protected`

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: object

    Optional parameters which apply for specific implementations

  #### Returns void

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: object
  + options: object
  + userId: string

  #### Returns void

### `Protected`\_onDelete

* \_onDelete(options: object, userId: string): void

  `Protected`

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: object
  + userId: string

  #### Returns void

### `Protected`\_onDragEnd

* \_onDragEnd(): void

  `Protected`

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

### `Protected`\_onDragLeftCancel

* \_onDragLeftCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

### `Protected`\_onDragLeftDrop

* \_onDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): undefined | false

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns undefined | false

### `Protected`\_onDragLeftMove

* \_onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onDragLeftStart

* \_onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur when a mouse-drag action is first begun.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns boolean | void

  If false, the start if prevented

### `Protected`\_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

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

### `Protected`\_onHoverOut

* \_onHoverOut(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

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

### `Protected`\_onRelease

* \_onRelease(options: object): void

  `Protected`

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: object

    Options which modify the releasing workflow

  #### Returns void

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

### `Protected`\_onUpdate

* \_onUpdate(changed: object, options: object, userId: string): void

  `Protected`

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: object
  + options: object
  + userId: string

  #### Returns void

### `Protected`\_overlapsSelection

* \_overlapsSelection(rectangle: Rectangle): boolean

  `Protected`

  Is this PlaceableObject within the selection rectangle?

  #### Parameters

  + rectangle: Rectangle

    The selection rectangle

  #### Returns boolean

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

### `Protected`\_propagateLeftClick

* \_propagateLeftClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate left click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

### `Protected`#onDragRightStart

* "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

    The objects that are copied

  #### Returns Point

  The offset

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