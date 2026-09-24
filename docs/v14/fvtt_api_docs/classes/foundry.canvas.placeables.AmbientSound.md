---
title: "AmbientSound | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.AmbientSound.html"
category: "classes"
---

# Class AmbientSound

An AmbientSound is an implementation of PlaceableObject which represents a dynamic audio source within the Scene.

#### See

* [foundry.documents.AmbientSoundDocument](foundry.documents.AmbientSoundDocument.md)
* [foundry.canvas.layers.SoundsLayer](foundry.canvas.layers.SoundsLayer.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_hoveredHandle](#_hoveredhandle)
[\_previewType](#_previewtype)
[controlIcon](#controlicon)
[controls](#controls)
[document](#document)
[field](#field)
[mouseInteractionManager](#mouseinteractionmanager)
[renderFlags](#renderflags)
[scene](#scene)
[sound](#sound)
[source](#source)
[tooltip](#tooltip)
[\_measurementDashLineStyle](#_measurementdashlinestyle)
[\_measurementLabels](#_measurementlabels)
[\_measurementLines](#_measurementlines)
[\_measurementSolidLineStyle](#_measurementsolidlinestyle)
[embeddedName](#embeddedname)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[\_original](#_original)
[bounds](#bounds)
[center](#center)
[controlled](#controlled)
[hasActiveHUD](#hasactivehud)
[hasPreview](#haspreview)
[hover](#hover)
[hoveredHandle](#hoveredhandle)
[id](#id)
[interactionState](#interactionstate)
[isAudible](#isaudible)
[isFilteredOut](#isfilteredout)
[isInteractable](#isinteractable)
[isOwner](#isowner)
[isPreview](#ispreview)
[isVisible](#isvisible)
[layer](#layer)
[objectId](#objectid)
[previewType](#previewtype)
[radius](#radius)
[sheet](#sheet)
[sourceId](#sourceid)
[implementation](#implementation)

### Methods

[\_applyRenderFlags](#_applyrenderflags)
[\_canConfigure](#_canconfigure)
[\_canDragLeftStart](#_candragleftstart)
[\_canHUD](#_canhud)
[\_clear](#_clear)
[\_destroy](#_destroy)
[\_draw](#_draw)
[\_finalizeDragLeft](#_finalizedragleft)
[\_getMeasuredShapes](#_getmeasuredshapes)
[\_getShiftedPosition](#_getshiftedposition)
[\_getTargetAlpha](#_gettargetalpha)
[\_hasShapeChanged](#_hasshapechanged)
[\_initializeDragLeft](#_initializedragleft)
[\_initializeDragShape](#_initializedragshape)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight](#_onclickright)
[\_onControl](#_oncontrol)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragLeftMove](#_ondragleftmove)
[\_onDragLeftStart](#_ondragleftstart)
[\_onRelease](#_onrelease)
[\_onUpdate](#_onupdate)
[\_overlapsSelection](#_overlapsselection)
[\_partialDraw](#_partialdraw)
[\_pasteObject](#_pasteobject)
[\_prepareDragLeftDropUpdates](#_preparedragleftdropupdates)
[\_refreshState](#_refreshstate)
[\_updateDragPreviews](#_updatedragpreviews)
[\_updateQuadtree](#_updatequadtree)
[\_updateRotation](#_updaterotation)
[activateListeners](#activatelisteners)
[applyEffects](#applyeffects)
[applyRenderFlags](#applyrenderflags)
[can](#can)
[clone](#clone)
[control](#control)
[destroy](#destroy)
[draw](#draw)
[getSnappedPosition](#getsnappedposition)
[initializeSoundSource](#initializesoundsource)
[refresh](#refresh)
[release](#release)
[rotate](#rotate)
[sync](#sync)
[\_canControl](#_cancontrol)
[\_canCreate](#_cancreate)
[\_canDelete](#_candelete)
[\_canDrag](#_candrag)
[\_canHover](#_canhover)
[\_canUpdate](#_canupdate)
[\_canView](#_canview)
[\_createInteractionManager](#_createinteractionmanager)
[\_createSound](#_createsound)
[\_finalizeDragRight](#_finalizedragright)
[\_formatMeasuredDistance](#_formatmeasureddistance)
[\_getMeasurementTextStyle](#_getmeasurementtextstyle)
[\_getSoundSourceData](#_getsoundsourcedata)
[\_getTextStyle](#_gettextstyle)
[\_getTooltipText](#_gettooltiptext)
[\_initializeDragRight](#_initializedragright)
[\_onClickRight2](#_onclickright2)
[\_onDragEnd](#_ondragend)
[\_onDragRightCancel](#_ondragrightcancel)
[\_onDragRightDrop](#_ondragrightdrop)
[\_onDragRightMove](#_ondragrightmove)
[\_onDragRightStart](#_ondragrightstart)
[\_onDragStart](#_ondragstart)
[\_onHoverIn](#_onhoverin)
[\_onHoverOut](#_onhoverout)
[\_onLongPress](#_onlongpress)
[\_onUnclickLeft](#_onunclickleft)
[\_onUnclickRight](#_onunclickright)
[\_propagateLeftClick](#_propagateleftclick)
[\_propagateRightClick](#_propagaterightclick)
[\_refreshField](#_refreshfield)
[\_refreshMeasurements](#_refreshmeasurements)
[\_refreshPosition](#_refreshposition)
[\_refreshSize](#_refreshsize)
[\_refreshTooltip](#_refreshtooltip)
[\_refreshVisibility](#_refreshvisibility)
[#onDragRightStart](#ondragrightstart)
[\_getCopiedObjectsOrigin](#_getcopiedobjectsorigin)
[\_getShiftedPosition](#_getshiftedposition-2)

## Constructors

### constructor

* new AmbientSound(document: CanvasDocument): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).AmbientSound

  #### Parameters

  + document: CanvasDocument

    The Document instance represented by this object

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).AmbientSound

  Inherited from ShapeObjectMixin(PlaceableObject).constructor

## Properties

### `Internal`\_hoveredHandle

\_hoveredHandle: [ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md) | null = null

Inherited from ShapeObjectMixin(PlaceableObject).\_hoveredHandle

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

Inherited from ShapeObjectMixin(PlaceableObject).\_previewType

### controlIcon

controlIcon: [ControlIcon](foundry.canvas.containers.ControlIcon.md) | null

A control icon for interacting with the object

Inherited from ShapeObjectMixin(PlaceableObject).controlIcon

### controls

controls: [AmbientSoundShapeControls](foundry.canvas.placeables.sounds.AmbientSoundShapeControls.md)

The shape controls.

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from ShapeObjectMixin(PlaceableObject).document

### field

field: Graphics

The area that is affected by this ambient sound.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from ShapeObjectMixin(PlaceableObject).mouseInteractionManager

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from ShapeObjectMixin(PlaceableObject).renderFlags

### scene

scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

Retain a reference to the Scene within which this Placeable Object resides

Inherited from ShapeObjectMixin(PlaceableObject).scene

### sound

sound: any

The Sound which manages playback for this AmbientSound effect

### source

source: PointSoundSource

A SoundSource object which manages the area of effect for this ambient sound

### tooltip

tooltip: [PreciseText](foundry.canvas.containers.PreciseText.md)

The tooltip text of this AmbientSound, which contains its elevation.

### `Protected`\_measurementDashLineStyle

\_measurementDashLineStyle: ILineStyleOptions

The dashed measurement line style.

Inherited from ShapeObjectMixin(PlaceableObject).\_measurementDashLineStyle

### `Protected`\_measurementLabels

\_measurementLabels: Container<DisplayObject>

The measurement labels.

Inherited from ShapeObjectMixin(PlaceableObject).\_measurementLabels

### `Protected`\_measurementLines

\_measurementLines: Graphics

The measurement lines.

Inherited from ShapeObjectMixin(PlaceableObject).\_measurementLines

### `Protected`\_measurementSolidLineStyle

\_measurementSolidLineStyle: ILineStyleOptions

The solid measurement line style.

Inherited from ShapeObjectMixin(PlaceableObject).\_measurementSolidLineStyle

### `Static`embeddedName

embeddedName: string = "AmbientSound"

#### Inherit Doc

Overrides ShapeObjectMixin(PlaceableObject).embeddedName

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from ShapeObjectMixin(PlaceableObject).RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshElevation: {  
Â Â Â Â Â Â Â Â alias: boolean;  
Â Â Â Â Â Â Â Â deprecated: { since: number; until: number };  
Â Â Â Â Â Â Â Â propagate: string[];  
Â Â Â Â };  
Â Â Â Â refreshField: {};  
Â Â Â Â refreshMeasurements: {};  
Â Â Â Â refreshPosition: { propagate: string[] };  
Â Â Â Â refreshSize: { propagate: string[] };  
Â Â Â Â refreshState: { propagate: string[] };  
Â Â Â Â refreshTooltip: {};  
Â Â Â Â refreshTransform: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshVisibility: {};  
} = ...

#### Type Declaration

* ##### redraw: { propagate: string[] }
* ##### refresh: { alias: boolean; propagate: string[] }
* ##### refreshElevation: { Â Â Â Â alias: boolean; Â Â Â Â deprecated: { since: number; until: number }; Â Â Â Â propagate: string[]; }

  #### Deprecated

  since v14
* ##### refreshField: {}
* ##### refreshMeasurements: {}
* ##### refreshPosition: { propagate: string[] }
* ##### refreshSize: { propagate: string[] }
* ##### refreshState: { propagate: string[] }
* ##### refreshTooltip: {}
* ##### refreshTransform: { alias: boolean; propagate: string[] }
* ##### refreshVisibility: {}

Overrides ShapeObjectMixin(PlaceableObject).RENDER\_FLAGS

## Accessors

### \_original

* get \_original(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  The object that this object is a preview of if this object is a preview.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  Inherited from ShapeObjectMixin(PlaceableObject).\_original

### bounds

* get bounds(): any

  #### Returns any

  Inherited from ShapeObjectMixin(PlaceableObject).bounds

### center

* get center(): any

  #### Returns any

  Inherited from ShapeObjectMixin(PlaceableObject).center

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).controlled

### hasActiveHUD

* get hasActiveHUD(): boolean

  Is the HUD display active for this Placeable?

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).hasActiveHUD

### hasPreview

* get hasPreview(): boolean

  Does there exist a temporary preview of this placeable object?

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).hasPreview

### hover

* get hover(): boolean

  An indicator for whether the object is currently a hover target

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).hover

### hoveredHandle

* get hoveredHandle(): [ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md) | null

  The controls handle that is currently hovered, if any.

  #### Returns [ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md) | null

  Inherited from ShapeObjectMixin(PlaceableObject).hoveredHandle

### id

* get id(): string

  The id of the corresponding Document which this PlaceableObject represents.

  #### Returns string

  Inherited from ShapeObjectMixin(PlaceableObject).id

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

  Inherited from [foundry](../modules/foundry.md).[interactionState](../modules/foundry.md#interactionstate)

### isAudible

* get isAudible(): boolean

  Is this ambient sound is currently audible based on its hidden state and the darkness level of the Scene?

  #### Returns boolean

### isFilteredOut

* get isFilteredOut(): boolean

  Is this object is excluded by the current filter in the placeable tab.

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).isFilteredOut

### isInteractable

* get isInteractable(): boolean

  #### Returns boolean

  Overrides ShapeObjectMixin(PlaceableObject).isInteractable

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).isOwner

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).isPreview

### isVisible

* get isVisible(): boolean

  Is this placeable currently visible?

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).isVisible

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Inherited from ShapeObjectMixin(PlaceableObject).layer

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

  Inherited from ShapeObjectMixin(PlaceableObject).objectId

### previewType

* get previewType(): "dragging" | "controls|"

  The preview type, if any.

  #### Returns "dragging" | "controls|"

  Inherited from ShapeObjectMixin(PlaceableObject).previewType

### radius

* get radius(): number

  A convenience accessor for the sound radius in pixels

  #### Returns number

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  Inherited from ShapeObjectMixin(PlaceableObject).sheet

### sourceId

* get sourceId(): string

  The named identified for the source object associated with this PlaceableObject.
  This differs from the objectId because the sourceId is the same for preview objects as for the original.

  #### Returns string

  Inherited from ShapeObjectMixin(PlaceableObject).sourceId

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from ShapeObjectMixin(PlaceableObject).implementation

## Methods

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  #### Parameters

  + flags: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_applyRenderFlags

### \_canConfigure

* \_canConfigure(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_canConfigure

### \_canDragLeftStart

* \_canDragLeftStart(user: any, event: any, options: any): any

  #### Parameters

  + user: any
  + event: any
  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_canDragLeftStart

### \_canHUD

* \_canHUD(user: any, event: any): any

  #### Parameters

  + user: any
  + event: any

  #### Returns any

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_canHUD

### \_clear

* \_clear(): void

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_clear

### \_destroy

* \_destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Overrides ShapeObjectMixin(PlaceableObject).\_destroy

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_draw

### \_finalizeDragLeft

* \_finalizeDragLeft(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_finalizeDragLeft

### \_getMeasuredShapes

* \_getMeasuredShapes(): [CircleShapeData](foundry.CircleShapeData.md)[]

  #### Returns [CircleShapeData](foundry.CircleShapeData.md)[]

  Overrides ShapeObjectMixin(PlaceableObject).\_getMeasuredShapes

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_getShiftedPosition

### \_getTargetAlpha

* \_getTargetAlpha(): number

  #### Returns number

  Inherited from ShapeObjectMixin(PlaceableObject).\_getTargetAlpha

### \_hasShapeChanged

* \_hasShapeChanged(changed: any): boolean

  #### Parameters

  + changed: any

  #### Returns boolean

  Overrides ShapeObjectMixin(PlaceableObject).\_hasShapeChanged

### \_initializeDragLeft

* \_initializeDragLeft(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_initializeDragLeft

### \_initializeDragShape

* \_initializeDragShape(event: FederatedEvent<UIEvent | PixiTouch>): [BaseShapeData](foundry.data.BaseShapeData.md)

  Initialize the shape for dragging.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event

  #### Returns [BaseShapeData](foundry.data.BaseShapeData.md)

  The shape that is dragged

  Inherited from ShapeObjectMixin(PlaceableObject).\_initializeDragShape

### \_onClickLeft

* \_onClickLeft(event: any): false | undefined

  #### Parameters

  + event: any

  #### Returns false | undefined

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onClickLeft

### \_onClickLeft2

* \_onClickLeft2(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onClickLeft2

### \_onClickRight

* \_onClickRight(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides ShapeObjectMixin(PlaceableObject).\_onClickRight

### \_onControl

* \_onControl(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Overrides ShapeObjectMixin(PlaceableObject).\_onControl

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  #### Parameters

  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_onCreate

### \_onDelete

* \_onDelete(options: any, userId: any): void

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_onDelete

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragLeftCancel

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragLeftDrop

### \_onDragLeftMove

* \_onDragLeftMove(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragLeftMove

### \_onDragLeftStart

* \_onDragLeftStart(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragLeftStart

### \_onRelease

* \_onRelease(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Overrides ShapeObjectMixin(PlaceableObject).\_onRelease

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_onUpdate

### \_overlapsSelection

* \_overlapsSelection(rectangle: any): any

  #### Parameters

  + rectangle: any

  #### Returns any

  Overrides ShapeObjectMixin(PlaceableObject).\_overlapsSelection

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from ShapeObjectMixin(PlaceableObject).\_partialDraw

### \_pasteObject

* \_pasteObject(  
  Â Â Â Â offset: Point,  
  Â Â Â Â options?: { cut?: boolean; hidden?: boolean; snap?: boolean },  
  ): object

  `Internal`

  Get the data of the copied object pasted at the position given by the offset.
  Called by [foundry.canvas.layers.PlaceablesLayer#pasteObjects](foundry.canvas.layers.PlaceablesLayer.md#pasteobjects) for each copied object.

  #### Parameters

  + offset: Point

    The offset relative from the current position to the destination
  + `Optional`options: { cut?: boolean; hidden?: boolean; snap?: boolean } = {}

    Options of [foundry.canvas.layers.PlaceablesLayer#pasteObjects](foundry.canvas.layers.PlaceablesLayer.md#pasteobjects)

    - ##### `Optional`cut?: boolean

      Is cut operation?
    - ##### `Optional`hidden?: boolean

      Paste in a hidden state, if applicable. Default is false.
    - ##### `Optional`snap?: boolean

      Snap to the grid. Default is true.

  #### Returns object

  The create or update data

  Inherited from ShapeObjectMixin(PlaceableObject).\_pasteObject

### \_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(  
  Â Â Â Â event: any,  
  ): (  
  Â Â Â Â | {  
  Â Â Â Â Â Â Â Â \_id: any;  
  Â Â Â Â Â Â Â Â shape?: undefined;  
  Â Â Â Â Â Â Â Â shapes: any;  
  Â Â Â Â Â Â Â Â x?: undefined;  
  Â Â Â Â Â Â Â Â y?: undefined;  
  Â Â Â Â }  
  Â Â Â Â | {  
  Â Â Â Â Â Â Â Â \_id: any;  
  Â Â Â Â Â Â Â Â shape: any;  
  Â Â Â Â Â Â Â Â shapes?: undefined;  
  Â Â Â Â Â Â Â Â x?: undefined;  
  Â Â Â Â Â Â Â Â y?: undefined;  
  Â Â Â Â }  
  Â Â Â Â | { \_id: any; shape?: undefined; shapes?: undefined; x: any; y: any }  
  )[]

  #### Parameters

  + event: any

  #### Returns ( Â Â Â Â | { Â Â Â Â Â Â Â Â \_id: any; Â Â Â Â Â Â Â Â shape?: undefined; Â Â Â Â Â Â Â Â shapes: any; Â Â Â Â Â Â Â Â x?: undefined; Â Â Â Â Â Â Â Â y?: undefined; Â Â Â Â } Â Â Â Â | { Â Â Â Â Â Â Â Â \_id: any; Â Â Â Â Â Â Â Â shape: any; Â Â Â Â Â Â Â Â shapes?: undefined; Â Â Â Â Â Â Â Â x?: undefined; Â Â Â Â Â Â Â Â y?: undefined; Â Â Â Â } Â Â Â Â | { \_id: any; shape?: undefined; shapes?: undefined; x: any; y: any } )[]

  Inherited from ShapeObjectMixin(PlaceableObject).\_prepareDragLeftDropUpdates

### \_refreshState

* \_refreshState(): void

  #### Returns void

  #### Inherit Doc

  Overrides ShapeObjectMixin(PlaceableObject).\_refreshState

### \_updateDragPreviews

* \_updateDragPreviews(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides ShapeObjectMixin(PlaceableObject).\_updateDragPreviews

### \_updateQuadtree

* \_updateQuadtree(): void

  `Internal`

  Update the quadtree.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_updateQuadtree

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_updateRotation

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).activateListeners

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

  Inherited from ShapeObjectMixin(PlaceableObject).applyRenderFlags

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

  Inherited from ShapeObjectMixin(PlaceableObject).can

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  A new object with identical data

  Inherited from ShapeObjectMixin(PlaceableObject).clone

### control

* control(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â chain?: boolean;  
  Â Â Â Â Â Â Â Â force?: boolean;  
  Â Â Â Â Â Â Â Â isNew?: boolean;  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â releaseOthers?: boolean;  
  Â Â Â Â Â Â Â Â renderSidebar?: boolean;  
  Â Â Â Â },  
  ): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â chain?: boolean;  
    Â Â Â Â force?: boolean;  
    Â Â Â Â isNew?: boolean;  
    Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
    Â Â Â Â releaseOthers?: boolean;  
    Â Â Â Â renderSidebar?: boolean;  
    } = {}

    Additional options which modify the control request.

    - ##### `Optional`chain?: boolean

      Control all Walls that are linked with this Wall. Only applies to Wall. Default: `false`.
    - ##### `Optional`force?: boolean

      Control the object even if it is not interactable? Default: `false`.
    - ##### `Optional`isNew?: boolean

      Was this object just created? Default: `false`.
    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan to this Token? Only applies to Token. Default: `false`.
    - ##### `Optional`releaseOthers?: boolean

      Release any other controlled objects first. Default: `true`.
    - ##### `Optional`renderSidebar?: boolean

      Re-render the sidebar. Default: `true`.

  #### Returns boolean

  A flag denoting whether control was successful.

  Inherited from ShapeObjectMixin(PlaceableObject).control

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from ShapeObjectMixin(PlaceableObject).destroy

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from ShapeObjectMixin(PlaceableObject).draw

### getSnappedPosition

* getSnappedPosition(position?: any): Point

  Get the snapped position for a given position or the current position.

  #### Parameters

  + `Optional`position: any

    The position to be used instead of the current position

  #### Returns Point

  The snapped position

  Inherited from ShapeObjectMixin(PlaceableObject).getSnappedPosition

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

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The refreshed object

  Inherited from ShapeObjectMixin(PlaceableObject).refresh

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

  Inherited from ShapeObjectMixin(PlaceableObject).release

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

  Inherited from ShapeObjectMixin(PlaceableObject).rotate

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
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to control the Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).\_canControl

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canCreate

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canDelete

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canDrag

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canHover

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canUpdate

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_canView

### `Protected`\_createInteractionManager

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  Inherited from ShapeObjectMixin(PlaceableObject).\_createInteractionManager

### `Protected`\_createSound

* \_createSound(): any

  `Protected`

  Create a Sound used to play this AmbientSound object

  #### Returns any

### `Protected`\_finalizeDragRight

* \_finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_finalizeDragRight

### `Protected`\_formatMeasuredDistance

* \_formatMeasuredDistance(distance: number): string

  `Protected`

  Format a distance that is displayed in a measurement label.

  #### Parameters

  + distance: number

    The distance

  #### Returns string

  The distance label

  Inherited from ShapeObjectMixin(PlaceableObject).\_formatMeasuredDistance

### `Protected`\_getMeasurementTextStyle

* \_getMeasurementTextStyle(): TextStyle

  `Protected`

  Define a PIXI TextStyle object which is used for the measurement labels.

  #### Returns TextStyle

  Inherited from ShapeObjectMixin(PlaceableObject).\_getMeasurementTextStyle

### `Protected`\_getSoundSourceData

* \_getSoundSourceData(): BaseEffectSourceData

  `Protected`

  Get the sound source data.

  #### Returns BaseEffectSourceData

### `Protected`\_getTextStyle

* \_getTextStyle(): TextStyle

  `Protected`

  Get the text style that should be used for the tooltip.

  #### Returns TextStyle

### `Protected`\_getTooltipText

* \_getTooltipText(): string

  `Protected`

  Return the text which should be displayed in the tooltip.

  #### Returns string

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_initializeDragRight

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a double right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onClickRight2

### `Protected`\_onDragEnd

* \_onDragEnd(): void

  `Protected`

  Conclude a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragEnd

### `Protected`\_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragRightCancel

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragRightDrop

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragRightMove

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragRightStart

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onDragStart

### `Protected`\_onHoverIn

* \_onHoverIn(  
  Â Â Â Â event: Event | FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { hoverOutOthers?: boolean; updateLegend?: boolean },  
  ): boolean | void

  `Protected`

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: Event | FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas or DOM interaction event
  + `Optional`options: { hoverOutOthers?: boolean; updateLegend?: boolean } = {}

    Options which customize event handling

    - ##### `Optional`hoverOutOthers?: boolean

      Trigger hover-out behavior on sibling objects
    - ##### `Optional`updateLegend?: boolean

      Highlight corresponding entry in the sidebar legend.

  #### Returns boolean | void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onHoverIn

### `Protected`\_onHoverOut

* \_onHoverOut(  
  Â Â Â Â event: Event | FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { updateLegend?: boolean },  
  ): void

  `Protected`

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: Event | FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas or DOM interaction event
  + `Optional`options: { updateLegend?: boolean } = {}

    Options which customize event handling

    - ##### `Optional`updateLegend?: boolean

      Highlight corresponding entry in the sidebar legend.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onHoverOut

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_onLongPress

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onUnclickLeft

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_onUnclickRight

### `Protected`\_propagateLeftClick

* \_propagateLeftClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate left click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).\_propagateLeftClick

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from ShapeObjectMixin(PlaceableObject).\_propagateRightClick

### `Protected`\_refreshField

* \_refreshField(): void

  `Protected`

  Refresh the shape of the sound field-of-effect. This is refreshed when the SoundSource fov polygon changes.

  #### Returns void

### `Protected`\_refreshMeasurements

* \_refreshMeasurements(): void

  `Protected`

  Refresh the measurements.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_refreshMeasurements

### `Protected`\_refreshPosition

* \_refreshPosition(): void

  `Protected`

  Refresh the position of the AmbientSound. Called with the coordinates change.

  #### Returns void

### `Protected`\_refreshSize

* \_refreshSize(): void

  `Protected`

  Refresh the size of the AmbientSound.

  #### Returns void

### `Protected`\_refreshTooltip

* \_refreshTooltip(): void

  `Protected`

  Refresh the tooltip.

  #### Returns void

### `Protected`\_refreshVisibility

* \_refreshVisibility(): void

  `Protected`

  Refresh the visibility of the placeable.

  #### Returns void

  Inherited from ShapeObjectMixin(PlaceableObject).\_refreshVisibility

### `Protected`#onDragRightStart

* "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from ShapeObjectMixin(PlaceableObject).#onDragRightStart

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

    The objects that are copied

  #### Returns Point

  The offset

  Inherited from ShapeObjectMixin(PlaceableObject).\_getCopiedObjectsOrigin

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

  Inherited from ShapeObjectMixin(PlaceableObject).\_getShiftedPosition