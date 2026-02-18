---
title: "AmbientSound | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.placeables.AmbientSound.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [placeables](../modules/foundry.canvas.placeables.html)
* [AmbientSound](foundry.canvas.placeables.AmbientSound.html)

# Class AmbientSound

An AmbientSound is an implementation of PlaceableObject which represents a dynamic audio source within the Scene.

#### See

* [foundry.documents.AmbientSoundDocument](foundry.documents.AmbientSoundDocument.html)
* [foundry.canvas.layers.SoundsLayer](foundry.canvas.layers.SoundsLayer.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.placeables.AmbientSound))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)
  + AmbientSound

##### Index

### Constructors

[constructor](foundry.canvas.placeables.AmbientSound.html#constructor)

### Properties

[controlIcon](foundry.canvas.placeables.AmbientSound.html#controlicon)
[document](foundry.canvas.placeables.AmbientSound.html#document)
[field](foundry.canvas.placeables.AmbientSound.html#field)
[mouseInteractionManager](foundry.canvas.placeables.AmbientSound.html#mouseinteractionmanager)
[renderFlags](foundry.canvas.placeables.AmbientSound.html#renderflags)
[scene](foundry.canvas.placeables.AmbientSound.html#scene)
[sound](foundry.canvas.placeables.AmbientSound.html#sound)
[source](foundry.canvas.placeables.AmbientSound.html#source)
[embeddedName](foundry.canvas.placeables.AmbientSound.html#embeddedname)
[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.AmbientSound.html#render_flag_priority)
[RENDER\_FLAGS](foundry.canvas.placeables.AmbientSound.html#render_flags)

### Accessors

[\_original](foundry.canvas.placeables.AmbientSound.html#_original)
[bounds](foundry.canvas.placeables.AmbientSound.html#bounds)
[center](foundry.canvas.placeables.AmbientSound.html#center)
[controlled](foundry.canvas.placeables.AmbientSound.html#controlled)
[hasActiveHUD](foundry.canvas.placeables.AmbientSound.html#hasactivehud)
[hasPreview](foundry.canvas.placeables.AmbientSound.html#haspreview)
[hover](foundry.canvas.placeables.AmbientSound.html#hover)
[id](foundry.canvas.placeables.AmbientSound.html#id)
[interactionState](foundry.canvas.placeables.AmbientSound.html#interactionstate)
[isAudible](foundry.canvas.placeables.AmbientSound.html#isaudible)
[isOwner](foundry.canvas.placeables.AmbientSound.html#isowner)
[isPreview](foundry.canvas.placeables.AmbientSound.html#ispreview)
[layer](foundry.canvas.placeables.AmbientSound.html#layer)
[objectId](foundry.canvas.placeables.AmbientSound.html#objectid)
[radius](foundry.canvas.placeables.AmbientSound.html#radius)
[sheet](foundry.canvas.placeables.AmbientSound.html#sheet)
[sourceId](foundry.canvas.placeables.AmbientSound.html#sourceid)
[implementation](foundry.canvas.placeables.AmbientSound.html#implementation)

### Methods

[\_applyRenderFlags](foundry.canvas.placeables.AmbientSound.html#_applyrenderflags)
[\_canConfigure](foundry.canvas.placeables.AmbientSound.html#_canconfigure)
[\_canHUD](foundry.canvas.placeables.AmbientSound.html#_canhud)
[\_destroy](foundry.canvas.placeables.AmbientSound.html#_destroy)
[\_draw](foundry.canvas.placeables.AmbientSound.html#_draw)
[\_getShiftedPosition](foundry.canvas.placeables.AmbientSound.html#_getshiftedposition)
[\_onClickRight](foundry.canvas.placeables.AmbientSound.html#_onclickright)
[\_onCreate](foundry.canvas.placeables.AmbientSound.html#_oncreate)
[\_onDelete](foundry.canvas.placeables.AmbientSound.html#_ondelete)
[\_onDragEnd](foundry.canvas.placeables.AmbientSound.html#_ondragend)
[\_onDragLeftMove](foundry.canvas.placeables.AmbientSound.html#_ondragleftmove)
[\_onUpdate](foundry.canvas.placeables.AmbientSound.html#_onupdate)
[\_partialDraw](foundry.canvas.placeables.AmbientSound.html#_partialdraw)
[\_pasteObject](foundry.canvas.placeables.AmbientSound.html#_pasteobject)
[\_updateQuadtree](foundry.canvas.placeables.AmbientSound.html#_updatequadtree)
[\_updateRotation](foundry.canvas.placeables.AmbientSound.html#_updaterotation)
[activateListeners](foundry.canvas.placeables.AmbientSound.html#activatelisteners)
[applyEffects](foundry.canvas.placeables.AmbientSound.html#applyeffects)
[applyRenderFlags](foundry.canvas.placeables.AmbientSound.html#applyrenderflags)
[can](foundry.canvas.placeables.AmbientSound.html#can)
[clear](foundry.canvas.placeables.AmbientSound.html#clear)
[clone](foundry.canvas.placeables.AmbientSound.html#clone)
[control](foundry.canvas.placeables.AmbientSound.html#control)
[destroy](foundry.canvas.placeables.AmbientSound.html#destroy)
[draw](foundry.canvas.placeables.AmbientSound.html#draw)
[getSnappedPosition](foundry.canvas.placeables.AmbientSound.html#getsnappedposition)
[initializeSoundSource](foundry.canvas.placeables.AmbientSound.html#initializesoundsource)
[refresh](foundry.canvas.placeables.AmbientSound.html#refresh)
[refreshControl](foundry.canvas.placeables.AmbientSound.html#refreshcontrol)
[release](foundry.canvas.placeables.AmbientSound.html#release)
[rotate](foundry.canvas.placeables.AmbientSound.html#rotate)
[sync](foundry.canvas.placeables.AmbientSound.html#sync)
[\_canControl](foundry.canvas.placeables.AmbientSound.html#_cancontrol)
[\_canCreate](foundry.canvas.placeables.AmbientSound.html#_cancreate)
[\_canDelete](foundry.canvas.placeables.AmbientSound.html#_candelete)
[\_canDrag](foundry.canvas.placeables.AmbientSound.html#_candrag)
[\_canDragLeftStart](foundry.canvas.placeables.AmbientSound.html#_candragleftstart)
[\_canHover](foundry.canvas.placeables.AmbientSound.html#_canhover)
[\_canUpdate](foundry.canvas.placeables.AmbientSound.html#_canupdate)
[\_canView](foundry.canvas.placeables.AmbientSound.html#_canview)
[\_createInteractionManager](foundry.canvas.placeables.AmbientSound.html#_createinteractionmanager)
[\_createSound](foundry.canvas.placeables.AmbientSound.html#_createsound)
[\_finalizeDragLeft](foundry.canvas.placeables.AmbientSound.html#_finalizedragleft)
[\_finalizeDragRight](foundry.canvas.placeables.AmbientSound.html#_finalizedragright)
[\_getSoundSourceData](foundry.canvas.placeables.AmbientSound.html#_getsoundsourcedata)
[\_getTargetAlpha](foundry.canvas.placeables.AmbientSound.html#_gettargetalpha)
[\_initializeDragLeft](foundry.canvas.placeables.AmbientSound.html#_initializedragleft)
[\_initializeDragRight](foundry.canvas.placeables.AmbientSound.html#_initializedragright)
[\_onClickLeft](foundry.canvas.placeables.AmbientSound.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.placeables.AmbientSound.html#_onclickleft2)
[\_onClickRight2](foundry.canvas.placeables.AmbientSound.html#_onclickright2)
[\_onControl](foundry.canvas.placeables.AmbientSound.html#_oncontrol)
[\_onDragLeftCancel](foundry.canvas.placeables.AmbientSound.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.placeables.AmbientSound.html#_ondragleftdrop)
[\_onDragLeftStart](foundry.canvas.placeables.AmbientSound.html#_ondragleftstart)
[\_onDragRightCancel](foundry.canvas.placeables.AmbientSound.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.placeables.AmbientSound.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.placeables.AmbientSound.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.placeables.AmbientSound.html#_ondragrightstart)
[\_onDragStart](foundry.canvas.placeables.AmbientSound.html#_ondragstart)
[\_onHoverIn](foundry.canvas.placeables.AmbientSound.html#_onhoverin)
[\_onHoverOut](foundry.canvas.placeables.AmbientSound.html#_onhoverout)
[\_onLongPress](foundry.canvas.placeables.AmbientSound.html#_onlongpress)
[\_onRelease](foundry.canvas.placeables.AmbientSound.html#_onrelease)
[\_onUnclickLeft](foundry.canvas.placeables.AmbientSound.html#_onunclickleft)
[\_onUnclickRight](foundry.canvas.placeables.AmbientSound.html#_onunclickright)
[\_overlapsSelection](foundry.canvas.placeables.AmbientSound.html#_overlapsselection)
[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.AmbientSound.html#_preparedragleftdropupdates)
[\_propagateLeftClick](foundry.canvas.placeables.AmbientSound.html#_propagateleftclick)
[\_propagateRightClick](foundry.canvas.placeables.AmbientSound.html#_propagaterightclick)
[\_refreshElevation](foundry.canvas.placeables.AmbientSound.html#_refreshelevation)
[\_refreshField](foundry.canvas.placeables.AmbientSound.html#_refreshfield)
[\_refreshPosition](foundry.canvas.placeables.AmbientSound.html#_refreshposition)
[\_refreshState](foundry.canvas.placeables.AmbientSound.html#_refreshstate)
[#onDragRightStart](foundry.canvas.placeables.AmbientSound.html#ondragrightstart)
[\_getCopiedObjectsOrigin](foundry.canvas.placeables.AmbientSound.html#_getcopiedobjectsorigin)
[\_getShiftedPosition](foundry.canvas.placeables.AmbientSound.html#_getshiftedposition-2)

## Constructors

### constructor

* new AmbientSound(document: CanvasDocument): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientSound](foundry.canvas.placeables.AmbientSound.html)

  #### Parameters

  + document: CanvasDocument

    The Document instance represented by this object

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientSound](foundry.canvas.placeables.AmbientSound.html)

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[constructor](foundry.canvas.placeables.PlaceableObject.html#constructor)

## Properties

### controlIcon

controlIcon: null | [ControlIcon](foundry.canvas.containers.ControlIcon.html)

A control icon for interacting with the object

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[controlIcon](foundry.canvas.placeables.PlaceableObject.html#controlicon)

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[document](foundry.canvas.placeables.PlaceableObject.html#document)

### field

field: Graphics

The area that is affected by this ambient sound.

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

### sound

sound: any

The Sound which manages playback for this AmbientSound effect

### source

source: PointSoundSource

A SoundSource object which manages the area of effect for this ambient sound

### `Static`embeddedName

embeddedName: string = "AmbientSound"

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
Â Â Â Â refreshElevation: {};  
Â Â Â Â refreshField: { propagate: string[] };  
Â Â Â Â refreshPosition: {};  
Â Â Â Â refreshState: {};  
} = ...

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.html#render_flags)

## Accessors

### \_original

* get \_original(): undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object that this object is a preview of if this object is a preview.

  #### Returns undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.\_original

### bounds

* get bounds(): Rectangle

  The bounding box for this PlaceableObject.
  This is required if the layer uses a Quadtree, otherwise it is optional

  #### Returns Rectangle

  Overrides PlaceableObject.bounds

### center

* get center(): Point

  The central coordinate pair of the placeable object based on it's own width and height

  #### Returns Point

  Inherited from PlaceableObject.center

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

### isAudible

* get isAudible(): boolean

  Is this ambient sound is currently audible based on its hidden state and the darkness level of the Scene?

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

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

  Inherited from PlaceableObject.objectId

### radius

* get radius(): number

  A convenience accessor for the sound radius in pixels

  #### Returns number

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

### \_canConfigure

* \_canConfigure(user: any, event: any): boolean

  Does the User have permission to configure the Placeable Object?

  #### Parameters

  + user: any

    The User performing the action. Always equal to `game.user`.
  + event: any

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.html#_canconfigure)

### \_canHUD

* \_canHUD(user: any, event: any): any

  Can the User access the HUD for this Placeable Object?

  #### Parameters

  + user: any

    The User performing the action. Always equal to `game.user`.
  + event: any

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canHUD](foundry.canvas.placeables.PlaceableObject.html#_canhud)

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

### \_onClickRight

* \_onClickRight(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.html#_onclickright)

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

### \_onDragEnd

* \_onDragEnd(): void

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.html#_ondragend)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.html#_ondragleftmove)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUpdate](foundry.canvas.placeables.PlaceableObject.html#_onupdate)

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

### applyEffects

* applyEffects(options?: { muffled?: boolean }): void

  Update the set of effects which are applied to the managed Sound.

  #### Parameters

  + `Optional`options: { muffled?: boolean } = {}
    - ##### `Optional`muffled?: boolean

      Is the sound currently muffled?

  #### Returns void

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

* clear(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientSound](foundry.canvas.placeables.AmbientSound.html)

  Clear the display of the existing object.

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[AmbientSound](foundry.canvas.placeables.AmbientSound.html)

  The cleared object

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clear](foundry.canvas.placeables.PlaceableObject.html#clear)

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  A new object with identical data

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clone](foundry.canvas.placeables.PlaceableObject.html#clone)

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

### getSnappedPosition

* getSnappedPosition(position?: any): Point

  Get the snapped position for a given position or the current position.

  #### Parameters

  + `Optional`position: any

    The position to be used instead of the current position

  #### Returns Point

  The snapped position

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.html#getsnappedposition)

### initializeSoundSource

* initializeSoundSource(options?: { deleted?: boolean }): void

  Compute the field-of-vision for an object, determining its effective line-of-sight and field-of-vision polygons

  #### Parameters

  + `Optional`options: { deleted?: boolean } = {}

    Options which modify how the audio source is updated

    - ##### `Optional`deleted?: boolean

      Indicate that this SoundSource has been deleted.

  #### Returns void

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

### refreshControl

* refreshControl(): void

  Refresh the display of the ControlIcon for this AmbientSound source.

  #### Returns void

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

### sync

* sync(  
  Â Â Â Â isAudible: boolean,  
  Â Â Â Â volume?: number,  
  Â Â Â Â options?: { fade?: number; muffled?: boolean },  
  ): Promise<void>

  Toggle playback of the sound depending on whether it is audible.

  #### Parameters

  + isAudible: boolean

    Is the sound audible?
  + `Optional`volume: number

    The target playback volume
  + `Optional`options: { fade?: number; muffled?: boolean } = {}

    Additional options which affect sound synchronization

    - ##### `Optional`fade?: number

      A duration in milliseconds to fade volume transition
    - ##### `Optional`muffled?: boolean

      Is the sound current muffled?

  #### Returns Promise<void>

  A promise which resolves once sound playback is synchronized

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canControl](foundry.canvas.placeables.PlaceableObject.html#_cancontrol)

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

### `Protected`\_createSound

* \_createSound(): any

  `Protected`

  Create a Sound used to play this AmbientSound object

  #### Returns any

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

### `Protected`\_getSoundSourceData

* \_getSoundSourceData(): BaseEffectSourceData

  `Protected`

  Get the sound source data.

  #### Returns BaseEffectSourceData

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.html#_gettargetalpha)

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

### `Protected`\_onClickLeft

* \_onClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a single left-click event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns boolean | void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.html#_onclickleft)

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double left-click event to activate

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.html#_onclickleft2)

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.html#_onclickright2)

### `Protected`\_onControl

* \_onControl(options: object): void

  `Protected`

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: object

    Optional parameters which apply for specific implementations

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onControl](foundry.canvas.placeables.PlaceableObject.html#_oncontrol)

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

### `Protected`\_onDragLeftStart

* \_onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur when a mouse-drag action is first begun.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns boolean | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_ondragleftstart)

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

### `Protected`\_overlapsSelection

* \_overlapsSelection(rectangle: Rectangle): boolean

  `Protected`

  Is this PlaceableObject within the selection rectangle?

  #### Parameters

  + rectangle: Rectangle

    The selection rectangle

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.html#_overlapsselection)

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

  Refresh the elevation of the control icon.

  #### Returns void

### `Protected`\_refreshField

* \_refreshField(): void

  `Protected`

  Refresh the shape of the sound field-of-effect. This is refreshed when the SoundSource fov polygon changes.

  #### Returns void

### `Protected`\_refreshPosition

* \_refreshPosition(): void

  `Protected`

  Refresh the position of the AmbientSound. Called with the coordinates change.

  #### Returns void

### `Protected`\_refreshState

* \_refreshState(): void

  `Protected`

  Refresh the state of the light. Called when the disabled state or darkness conditions change.

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