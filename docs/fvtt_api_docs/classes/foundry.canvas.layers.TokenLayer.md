---
title: "TokenLayer | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.TokenLayer.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [TokenLayer](foundry.canvas.layers.TokenLayer.html)

# Class TokenLayer

The Tokens Container.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.TokenLayer))

* [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)
  + TokenLayer

##### Index

### Properties

[\_configPreview](foundry.canvas.layers.TokenLayer.html#_configpreview)
[\_draggedToken](foundry.canvas.layers.TokenLayer.html#_draggedtoken)
[\_dragMovementAction](foundry.canvas.layers.TokenLayer.html#_dragmovementaction)
[\_rulerPaths](foundry.canvas.layers.TokenLayer.html#_rulerpaths)
[\_tabIndex](foundry.canvas.layers.TokenLayer.html#_tabindex)
[clipboard](foundry.canvas.layers.TokenLayer.html#clipboard)
[eventMode](foundry.canvas.layers.TokenLayer.html#eventmode)
[highlightObjects](foundry.canvas.layers.TokenLayer.html#highlightobjects)
[history](foundry.canvas.layers.TokenLayer.html#history)
[interactiveChildren](foundry.canvas.layers.TokenLayer.html#interactivechildren)
[objects](foundry.canvas.layers.TokenLayer.html#objects)
[options](foundry.canvas.layers.TokenLayer.html#options)
[preview](foundry.canvas.layers.TokenLayer.html#preview)
[quadtree](foundry.canvas.layers.TokenLayer.html#quadtree)
[turnMarkers](foundry.canvas.layers.TokenLayer.html#turnmarkers)
[CREATION\_STATES](foundry.canvas.layers.TokenLayer.html#creation_states)
[documentName](foundry.canvas.layers.TokenLayer.html#documentname)
[SORT\_ORDER](foundry.canvas.layers.TokenLayer.html#sort_order)

### Accessors

[active](foundry.canvas.layers.TokenLayer.html#active)
[controlled](foundry.canvas.layers.TokenLayer.html#controlled)
[controlledObjects](foundry.canvas.layers.TokenLayer.html#controlledobjects)
[documentCollection](foundry.canvas.layers.TokenLayer.html#documentcollection)
[hasPreview](foundry.canvas.layers.TokenLayer.html#haspreview)
[hookName](foundry.canvas.layers.TokenLayer.html#hookname)
[hover](foundry.canvas.layers.TokenLayer.html#hover)
[hud](foundry.canvas.layers.TokenLayer.html#hud)
[name](foundry.canvas.layers.TokenLayer.html#name)
[occlusionMode](foundry.canvas.layers.TokenLayer.html#occlusionmode)
[ownedTokens](foundry.canvas.layers.TokenLayer.html#ownedtokens)
[placeables](foundry.canvas.layers.TokenLayer.html#placeables)
[instance](foundry.canvas.layers.TokenLayer.html#instance)
[layerOptions](foundry.canvas.layers.TokenLayer.html#layeroptions)
[placeableClass](foundry.canvas.layers.TokenLayer.html#placeableclass)

### Methods

[\_activate](foundry.canvas.layers.TokenLayer.html#_activate)
[\_canDragLeftStart](foundry.canvas.layers.TokenLayer.html#_candragleftstart)
[\_confirmDeleteKey](foundry.canvas.layers.TokenLayer.html#_confirmdeletekey)
[\_createPreview](foundry.canvas.layers.TokenLayer.html#_createpreview)
[\_deactivate](foundry.canvas.layers.TokenLayer.html#_deactivate)
[\_draw](foundry.canvas.layers.TokenLayer.html#_draw)
[\_getCopyableObjects](foundry.canvas.layers.TokenLayer.html#_getcopyableobjects)
[\_getMovableObjects](foundry.canvas.layers.TokenLayer.html#_getmovableobjects)
[\_highlightObjects](foundry.canvas.layers.TokenLayer.html#_highlightobjects)
[\_onClickLeft](foundry.canvas.layers.TokenLayer.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.layers.TokenLayer.html#_onclickleft2)
[\_onClickRight](foundry.canvas.layers.TokenLayer.html#_onclickright)
[\_onClickRight2](foundry.canvas.layers.TokenLayer.html#_onclickright2)
[\_onCopyKey](foundry.canvas.layers.TokenLayer.html#_oncopykey)
[\_onCutKey](foundry.canvas.layers.TokenLayer.html#_oncutkey)
[\_onCycleViewKey](foundry.canvas.layers.TokenLayer.html#_oncycleviewkey)
[\_onDeleteKey](foundry.canvas.layers.TokenLayer.html#_ondeletekey)
[\_onDismissKey](foundry.canvas.layers.TokenLayer.html#_ondismisskey)
[\_onDragLeftCancel](foundry.canvas.layers.TokenLayer.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.layers.TokenLayer.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.layers.TokenLayer.html#_ondragleftmove)
[\_onDragLeftStart](foundry.canvas.layers.TokenLayer.html#_ondragleftstart)
[\_onDropActorData](foundry.canvas.layers.TokenLayer.html#_ondropactordata)
[\_onMouseWheel](foundry.canvas.layers.TokenLayer.html#_onmousewheel)
[\_onPasteKey](foundry.canvas.layers.TokenLayer.html#_onpastekey)
[\_onSelectAllKey](foundry.canvas.layers.TokenLayer.html#_onselectallkey)
[\_onUndoKey](foundry.canvas.layers.TokenLayer.html#_onundokey)
[\_prepareKeyboardMovementUpdates](foundry.canvas.layers.TokenLayer.html#_preparekeyboardmovementupdates)
[\_prepareKeyboardRotationUpdates](foundry.canvas.layers.TokenLayer.html#_preparekeyboardrotationupdates)
[\_sendToBackOrBringToFront](foundry.canvas.layers.TokenLayer.html#_sendtobackorbringtofront)
[\_tearDown](foundry.canvas.layers.TokenLayer.html#_teardown)
[\_updatePlannedMovements](foundry.canvas.layers.TokenLayer.html#_updateplannedmovements)
[activate](foundry.canvas.layers.TokenLayer.html#activate)
[clearPreviewContainer](foundry.canvas.layers.TokenLayer.html#clearpreviewcontainer)
[concludeAnimation](foundry.canvas.layers.TokenLayer.html#concludeanimation)
[controlAll](foundry.canvas.layers.TokenLayer.html#controlall)
[controllableObjects](foundry.canvas.layers.TokenLayer.html#controllableobjects)
[copyObjects](foundry.canvas.layers.TokenLayer.html#copyobjects)
[createObject](foundry.canvas.layers.TokenLayer.html#createobject)
[cycleTokens](foundry.canvas.layers.TokenLayer.html#cycletokens)
[deactivate](foundry.canvas.layers.TokenLayer.html#deactivate)
[deleteAll](foundry.canvas.layers.TokenLayer.html#deleteall)
[draw](foundry.canvas.layers.TokenLayer.html#draw)
[get](foundry.canvas.layers.TokenLayer.html#get)
[getDocuments](foundry.canvas.layers.TokenLayer.html#getdocuments)
[getMaxSort](foundry.canvas.layers.TokenLayer.html#getmaxsort)
[getSnappedPoint](foundry.canvas.layers.TokenLayer.html#getsnappedpoint)
[getZIndex](foundry.canvas.layers.TokenLayer.html#getzindex)
[moveMany](foundry.canvas.layers.TokenLayer.html#movemany)
[pasteObjects](foundry.canvas.layers.TokenLayer.html#pasteobjects)
[recalculatePlannedMovementPaths](foundry.canvas.layers.TokenLayer.html#recalculateplannedmovementpaths)
[releaseAll](foundry.canvas.layers.TokenLayer.html#releaseall)
[rotateMany](foundry.canvas.layers.TokenLayer.html#rotatemany)
[selectObjects](foundry.canvas.layers.TokenLayer.html#selectobjects)
[setAllRenderFlags](foundry.canvas.layers.TokenLayer.html#setallrenderflags)
[setTargets](foundry.canvas.layers.TokenLayer.html#settargets)
[storeHistory](foundry.canvas.layers.TokenLayer.html#storehistory)
[targetObjects](foundry.canvas.layers.TokenLayer.html#targetobjects)
[tearDown](foundry.canvas.layers.TokenLayer.html#teardown)
[undoHistory](foundry.canvas.layers.TokenLayer.html#undohistory)
[updateAll](foundry.canvas.layers.TokenLayer.html#updateall)
[\_canvasCoordinatesFromDrop](foundry.canvas.layers.TokenLayer.html#_canvascoordinatesfromdrop)
[\_getOccludableTokens](foundry.canvas.layers.TokenLayer.html#_getoccludabletokens)
[\_onUndoCreate](foundry.canvas.layers.TokenLayer.html#_onundocreate)
[\_onUndoDelete](foundry.canvas.layers.TokenLayer.html#_onundodelete)
[\_onUndoUpdate](foundry.canvas.layers.TokenLayer.html#_onundoupdate)
[\_storeHistory](foundry.canvas.layers.TokenLayer.html#_storehistory)
[prepareSceneControls](foundry.canvas.layers.TokenLayer.html#preparescenecontrols)

## Properties

### `Internal`\_configPreview

\_configPreview: null | Container<DisplayObject> = null

Preview container for config previews

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_configPreview](foundry.canvas.layers.PlaceablesLayer.html#_configpreview)

### `Internal`\_draggedToken

\_draggedToken: null | [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html) = null

The Token that the drag workflow was initiated on, if there's a drag workflow in progress.
Set in [foundry.canvas.placeables.Token#\_onDragLeftStart](foundry.canvas.placeables.Token.html#_ondragleftstart) and
[foundry.canvas.placeables.Token#\_onDragLeftCancel](foundry.canvas.placeables.Token.html#_ondragleftcancel).

### `Internal`\_dragMovementAction

\_dragMovementAction: null | string = null

The currently selected movement action override.

### `Internal`\_rulerPaths

\_rulerPaths: Container<DisplayObject>

The ruler paths.

### `Internal`\_tabIndex

\_tabIndex: null | number = null

The current index position in the tab cycle

### clipboard

clipboard: { cut: boolean; objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[] } = ...

Keep track of objects copied with CTRL+C/X which can be pasted later.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[clipboard](foundry.canvas.layers.PlaceablesLayer.html#clipboard)

### eventMode

eventMode: string = "passive"

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[eventMode](foundry.canvas.layers.PlaceablesLayer.html#eventmode)

### highlightObjects

highlightObjects: boolean = false

Track whether "highlight all objects" is currently active

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[highlightObjects](foundry.canvas.layers.PlaceablesLayer.html#highlightobjects)

### history

history: [CanvasHistoryEvent](../interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.html)[] = []

Keep track of history so that CTRL+Z can undo changes.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[history](foundry.canvas.layers.PlaceablesLayer.html#history)

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[interactiveChildren](foundry.canvas.layers.PlaceablesLayer.html#interactivechildren)

### objects

objects: null | Container<DisplayObject> = null

Placeable Layer Objects

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[objects](foundry.canvas.layers.PlaceablesLayer.html#objects)

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[options](foundry.canvas.layers.PlaceablesLayer.html#options)

### preview

preview: null | Container<DisplayObject> = null

Preview Object Placement

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[preview](foundry.canvas.layers.PlaceablesLayer.html#preview)

### quadtree

quadtree: null | [Quadtree](foundry.canvas.geometry.Quadtree.html) = ...

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[quadtree](foundry.canvas.layers.PlaceablesLayer.html#quadtree)

### turnMarkers

turnMarkers: Set<[canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)> = ...

A Set of Token objects which currently display a combat turn marker.

### `Static`CREATION\_STATES

CREATION\_STATES: {  
Â Â Â Â COMPLETED: number;  
Â Â Â Â CONFIRMED: number;  
Â Â Â Â NONE: number;  
Â Â Â Â POTENTIAL: number;  
} = ...

Creation states affected to placeables during their construction.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[CREATION\_STATES](foundry.canvas.layers.PlaceablesLayer.html#creation_states)

### `Static`documentName

documentName: string = "Token"

A reference to the named Document type which is contained within this Canvas Layer.

Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[documentName](foundry.canvas.layers.PlaceablesLayer.html#documentname)

### `Static`SORT\_ORDER

SORT\_ORDER: number = 0

Sort order for placeables belonging to this layer.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[SORT\_ORDER](foundry.canvas.layers.PlaceablesLayer.html#sort_order)

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

  Inherited from PlaceablesLayer.active

### controlled

* get controlled(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  An Array of placeable objects in this layer which have the \_controlled attribute

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  Inherited from PlaceablesLayer.controlled

### controlledObjects

* get controlledObjects(): Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Track the set of PlaceableObjects on this layer which are currently controlled.

  #### Returns Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Inherited from PlaceablesLayer.controlledObjects

### documentCollection

* get documentCollection(): null | [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<any>

  Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene

  #### Returns null | [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<any>

  Inherited from PlaceablesLayer.documentCollection

### hasPreview

* get hasPreview(): boolean

  To know wheter this layer has a preview object or not.

  #### Returns boolean

  Inherited from PlaceablesLayer.hasPreview

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Overrides PlaceablesLayer.hookName

### hover

* get hover(): null | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Track the PlaceableObject on this layer which is currently hovered upon.

  #### Returns null | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceablesLayer.hover

### hud

* get hud(): [TokenHUD](foundry.applications.hud.TokenHUD.html)

  #### Returns [TokenHUD](foundry.applications.hud.TokenHUD.html)

  Overrides PlaceablesLayer.hud

### name

* get name(): string

  The canonical name of the CanvasLayer is the name of the constructor that is the immediate child of the
  defined baseClass for the layer type.

  #### Returns string

  #### Example

  ```
  canvas.lighting.name -> "LightingLayer"
  Copy
  ```

  Inherited from PlaceablesLayer.name

### occlusionMode

* get occlusionMode(): number

  The set of tokens that trigger occlusion (a union of [CONST.TOKEN\_OCCLUSION\_MODES](../variables/CONST.TOKEN_OCCLUSION_MODES.html)).

  #### Returns number

### ownedTokens

* get ownedTokens(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)[]

  An Array of tokens which belong to actors which are owned

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)[]

### placeables

* get placeables(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  A convenience method for accessing the placeable object instances contained in this layer

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  Inherited from PlaceablesLayer.placeables

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Inherited from PlaceablesLayer.instance

### `Static`layerOptions

* get layerOptions(): object

  Configuration options for the PlaceablesLayer.

  #### Returns object

  Overrides PlaceablesLayer.layerOptions

### `Static`placeableClass

* get placeableClass(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceablesLayer.placeableClass

## Methods

### \_activate

* \_activate(): void

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_activate](foundry.canvas.layers.PlaceablesLayer.html#_activate)

### \_canDragLeftStart

* \_canDragLeftStart(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_canDragLeftStart](foundry.canvas.layers.PlaceablesLayer.html#_candragleftstart)

### \_confirmDeleteKey

* \_confirmDeleteKey(documents: any): Promise<any>

  #### Parameters

  + documents: any

  #### Returns Promise<any>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_confirmDeleteKey](foundry.canvas.layers.PlaceablesLayer.html#_confirmdeletekey)

### \_createPreview

* \_createPreview(  
  Â Â Â Â createData: object,  
  Â Â Â Â options?: { left?: number; renderSheet?: boolean; top?: number },  
  ): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  `Internal`

  Create a preview of this layer's object type from a world document and show its sheet to be finalized.

  #### Parameters

  + createData: object

    The data to create the object with.
  + `Optional`options: { left?: number; renderSheet?: boolean; top?: number } = {}

    Options which configure preview creation

    - ##### `Optional`left?: number

      The offset-left position where the sheet should be rendered
    - ##### `Optional`renderSheet?: boolean

      Render the preview object config sheet?
    - ##### `Optional`top?: number

      The offset-top position where the sheet should be rendered

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The created preview object

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_createPreview](foundry.canvas.layers.PlaceablesLayer.html#_createpreview)

### \_deactivate

* \_deactivate(): void

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_deactivate](foundry.canvas.layers.PlaceablesLayer.html#_deactivate)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_draw](foundry.canvas.layers.PlaceablesLayer.html#_draw)

### \_getCopyableObjects

* \_getCopyableObjects(options: any): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be copied/cut.

  #### Parameters

  + options: any

    Additional options

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  An array of objects which can be copied/cut

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_getCopyableObjects](foundry.canvas.layers.PlaceablesLayer.html#_getcopyableobjects)

### \_getMovableObjects

* \_getMovableObjects(ids: any, includeLocked: any): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.

  #### Parameters

  + ids: any

    An explicit array of IDs requested.
  + includeLocked: any

    Include locked objects which would otherwise be ignored?

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  An array of objects which can be moved or rotated

  #### Throws

  If any explicitly requested ID is not valid

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_getMovableObjects](foundry.canvas.layers.PlaceablesLayer.html#_getmovableobjects)

### \_highlightObjects

* \_highlightObjects(active: any): void

  #### Parameters

  + active: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_highlightObjects](foundry.canvas.layers.PlaceablesLayer.html#_highlightobjects)

### \_onClickLeft

* \_onClickLeft(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onClickLeft](foundry.canvas.layers.PlaceablesLayer.html#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: any

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onClickLeft2](foundry.canvas.layers.PlaceablesLayer.html#_onclickleft2)

### \_onClickRight

* \_onClickRight(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onClickRight](foundry.canvas.layers.PlaceablesLayer.html#_onclickright)

### \_onClickRight2

* \_onClickRight2(event: any): void

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: any

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onClickRight2](foundry.canvas.layers.PlaceablesLayer.html#_onclickright2)

### \_onCopyKey

* \_onCopyKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onCopyKey](foundry.canvas.layers.PlaceablesLayer.html#_oncopykey)

### \_onCutKey

* \_onCutKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onCutKey](foundry.canvas.layers.PlaceablesLayer.html#_oncutkey)

### \_onCycleViewKey

* \_onCycleViewKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onCycleViewKey](foundry.canvas.layers.PlaceablesLayer.html#_oncycleviewkey)

### \_onDeleteKey

* \_onDeleteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDeleteKey](foundry.canvas.layers.PlaceablesLayer.html#_ondeletekey)

### \_onDismissKey

* \_onDismissKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDismissKey](foundry.canvas.layers.PlaceablesLayer.html#_ondismisskey)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDragLeftCancel](foundry.canvas.layers.PlaceablesLayer.html#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDragLeftDrop](foundry.canvas.layers.PlaceablesLayer.html#_ondragleftdrop)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDragLeftMove](foundry.canvas.layers.PlaceablesLayer.html#_ondragleftmove)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onDragLeftStart](foundry.canvas.layers.PlaceablesLayer.html#_ondragleftstart)

### \_onDropActorData

* \_onDropActorData(  
  Â Â Â Â event: DragEvent,  
  Â Â Â Â data: {  
  Â Â Â Â Â Â Â Â elevation?: number;  
  Â Â Â Â Â Â Â Â type: "Actor";  
  Â Â Â Â Â Â Â Â uuid: string;  
  Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â },  
  ): Promise<any>

  `Internal`

  Handle dropping of Actor data onto the Scene canvas

  #### Parameters

  + event: DragEvent
  + data: { elevation?: number; type: "Actor"; uuid: string; x: number; y: number }

  #### Returns Promise<any>

### \_onMouseWheel

* \_onMouseWheel(event: any): undefined | Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  #### Parameters

  + event: any

  #### Returns undefined | Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onMouseWheel](foundry.canvas.layers.PlaceablesLayer.html#_onmousewheel)

### \_onPasteKey

* \_onPasteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onPasteKey](foundry.canvas.layers.PlaceablesLayer.html#_onpastekey)

### \_onSelectAllKey

* \_onSelectAllKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onSelectAllKey](foundry.canvas.layers.PlaceablesLayer.html#_onselectallkey)

### \_onUndoKey

* \_onUndoKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onUndoKey](foundry.canvas.layers.PlaceablesLayer.html#_onundokey)

### \_prepareKeyboardMovementUpdates

* \_prepareKeyboardMovementUpdates(  
  Â Â Â Â objects: any,  
  Â Â Â Â dx: any,  
  Â Â Â Â dy: any,  
  Â Â Â Â dz: any,  
  ): ({ \_id: any }[] | { movement: {} })[]

  #### Parameters

  + objects: any
  + dx: any
  + dy: any
  + dz: any

  #### Returns ({ \_id: any }[] | { movement: {} })[]

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_prepareKeyboardMovementUpdates](foundry.canvas.layers.PlaceablesLayer.html#_preparekeyboardmovementupdates)

### \_prepareKeyboardRotationUpdates

* \_prepareKeyboardRotationUpdates(  
  Â Â Â Â objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[],  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  ): [updates: object[], options?: object]

  `Internal`

  Prepare the updates and update options for rotating the given placeable objects via keyboard.

  #### Parameters

  + objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]
  + dx: -1 | 0 | 1
  + dy: -1 | 0 | 1
  + dz: -1 | 0 | 1

  #### Returns [updates: object[], options?: object]

  #### See

  [PlaceablesLayer#moveMany](foundry.canvas.layers.PlaceablesLayer.html#movemany)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_prepareKeyboardRotationUpdates](foundry.canvas.layers.PlaceablesLayer.html#_preparekeyboardrotationupdates)

### \_sendToBackOrBringToFront

* \_sendToBackOrBringToFront(front: boolean): boolean

  `Internal`

  Send the controlled objects of this layer to the back or bring them to the front.

  #### Parameters

  + front: boolean

    Bring to front instead of send to back?

  #### Returns boolean

  Returns true if the layer has sortable object, and false otherwise

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_sendToBackOrBringToFront](foundry.canvas.layers.PlaceablesLayer.html#_sendtobackorbringtofront)

### \_tearDown

* \_tearDown(options: any): Promise<void>

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_tearDown](foundry.canvas.layers.PlaceablesLayer.html#_teardown)

### \_updatePlannedMovements

* \_updatePlannedMovements(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â plannedMovements: null | { [tokenId: string]: null | [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.html) },  
  ): void

  `Internal`

  Handle broadcast planned movement update.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User the planned movement data belongs to
  + plannedMovements: null | { [tokenId: string]: null | [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.html) }

    The planned movement data

  #### Returns void

### activate

* activate(options?: { tool?: string }): [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.

  #### Parameters

  + `Optional`options: { tool?: string } = {}

    Options which configure layer activation

    - ##### `Optional`tool?: string

      A specific tool in the control palette to set as active

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  The layer instance, now activated

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[activate](foundry.canvas.layers.PlaceablesLayer.html#activate)

### clearPreviewContainer

* clearPreviewContainer(): void

  Clear the contents of the preview container, restoring visibility of original (non-preview) objects.

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[clearPreviewContainer](foundry.canvas.layers.PlaceablesLayer.html#clearpreviewcontainer)

### concludeAnimation

* concludeAnimation(): void

  Immediately conclude the animation of any/all tokens

  #### Returns void

### controlAll

* controlAll(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  Acquire control over all PlaceableObject instances which are visible and controllable within the layer.

  #### Parameters

  + options: object = {}

    Options passed to the control method of each object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  An array of objects that were controlled

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[controlAll](foundry.canvas.layers.PlaceablesLayer.html#controlall)

### controllableObjects

* controllableObjects(): Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html), any, any>

  Iterates over placeable objects that are eligible for control/select.

  #### Returns Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html), any, any>

  #### Yields

  A placeable object

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[controllableObjects](foundry.canvas.layers.PlaceablesLayer.html#controllableobjects)

### copyObjects

* copyObjects(options?: { cut?: boolean }): readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.

  #### Parameters

  + `Optional`options: { cut?: boolean } = {}

    Additional options

    - ##### `Optional`cut?: boolean

      Cut instead of copy?

  #### Returns readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

  The Array of copied PlaceableObject instances

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[copyObjects](foundry.canvas.layers.PlaceablesLayer.html#copyobjects)

### createObject

* createObject(document: ClientDocument): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Draw a single placeable object

  #### Parameters

  + document: ClientDocument

    The Document instance used to create the placeable object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[createObject](foundry.canvas.layers.PlaceablesLayer.html#createobject)

### cycleTokens

* cycleTokens(forwards: boolean, reset: boolean): null | [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
  Tokens are currently sorted in order of their TokenID

  #### Parameters

  + forwards: boolean

    Which direction to cycle. A truthy value cycles forward, while a false value
    cycles backwards.
  + reset: boolean

    Restart the cycle order back at the beginning?

  #### Returns null | [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  The Token object which was cycled to, or null

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.html)

  The layer instance, now inactive

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[deactivate](foundry.canvas.layers.PlaceablesLayer.html#deactivate)

### deleteAll

* deleteAll(): Promise<Document[]>

  A helper method to prompt for deletion of all PlaceableObject instances within the Scene
  Renders a confirmation dialogue to confirm with the requester that all objects will be deleted

  #### Returns Promise<Document[]>

  An array of Document objects which were deleted by the operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[deleteAll](foundry.canvas.layers.PlaceablesLayer.html#deleteall)

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[draw](foundry.canvas.layers.PlaceablesLayer.html#draw)

### get

* get(objectId: string): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Get a PlaceableObject contained in this layer by its ID.
  Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.

  #### Parameters

  + objectId: string

    The ID of the contained object to retrieve

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object instance, or undefined

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[get](foundry.canvas.layers.PlaceablesLayer.html#get)

### getDocuments

* getDocuments(): [] | [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<any>

  Obtain an iterable of objects which should be added to this PlaceablesLayer

  #### Returns [] | [DocumentCollection](foundry.documents.abstract.DocumentCollection.html)<any>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[getDocuments](foundry.canvas.layers.PlaceablesLayer.html#getdocuments)

### getMaxSort

* getMaxSort(): number

  Get the maximum sort value of all placeables.

  #### Returns number

  The maximum sort value (-Infinity if there are no objects)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[getMaxSort](foundry.canvas.layers.PlaceablesLayer.html#getmaxsort)

### getSnappedPoint

* getSnappedPoint(point: any): [Point](../interfaces/foundry.types.Point.html)

  #### Parameters

  + point: any

  #### Returns [Point](../interfaces/foundry.types.Point.html)

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[getSnappedPoint](foundry.canvas.layers.PlaceablesLayer.html#getsnappedpoint)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[getZIndex](foundry.canvas.layers.PlaceablesLayer.html#getzindex)

### moveMany

* moveMany(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â dx?: 0 | 1 | -1;  
  Â Â Â Â Â Â Â Â dy?: 0 | 1 | -1;  
  Â Â Â Â Â Â Â Â dz?: 0 | 1 | -1;  
  Â Â Â Â Â Â Â Â ids?: string[];  
  Â Â Â Â Â Â Â Â includeLocked?: boolean;  
  Â Â Â Â Â Â Â Â rotate?: boolean;  
  Â Â Â Â },  
  ): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
  This executes a single database operation using Scene#updateEmbeddedDocuments.

  #### Parameters

  + options: {  
    Â Â Â Â dx?: 0 | 1 | -1;  
    Â Â Â Â dy?: 0 | 1 | -1;  
    Â Â Â Â dz?: 0 | 1 | -1;  
    Â Â Â Â ids?: string[];  
    Â Â Â Â includeLocked?: boolean;  
    Â Â Â Â rotate?: boolean;  
    } = {}

    Options which configure how multiple objects are moved

    - ##### `Optional`dx?: 0 | 1 | -1

      Horizontal movement direction
    - ##### `Optional`dy?: 0 | 1 | -1

      Vertical movement direction
    - ##### `Optional`dz?: 0 | 1 | -1

      Movement direction along the z-axis (elevation)
    - ##### `Optional`ids?: string[]

      An Array of object IDs to target for movement.
      The default is the IDs of controlled objects.
    - ##### `Optional`includeLocked?: boolean

      Move objects whose documents are locked?
    - ##### `Optional`rotate?: boolean

      Rotate the placeable to direction instead of moving

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  An array of objects which were moved during the operation

  #### Throws

  An error if an explicitly provided id is not valid

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[moveMany](foundry.canvas.layers.PlaceablesLayer.html#movemany)

### pasteObjects

* pasteObjects(  
  Â Â Â Â position: Point,  
  Â Â Â Â options?: { hidden?: boolean; snap?: boolean },  
  ): Promise<Document[]>

  Paste currently copied PlaceableObjects back to the layer by creating new copies

  #### Parameters

  + position: Point

    The destination position for the copied data.
  + `Optional`options: { hidden?: boolean; snap?: boolean } = {}

    Options which modify the paste operation

    - ##### `Optional`hidden?: boolean

      Paste data in a hidden state, if applicable. Default is false.
    - ##### `Optional`snap?: boolean

      Snap the resulting objects to the grid. Default is true.

  #### Returns Promise<Document[]>

  An Array of created Document instances

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[pasteObjects](foundry.canvas.layers.PlaceablesLayer.html#pasteobjects)

### recalculatePlannedMovementPaths

* recalculatePlannedMovementPaths(): void

  Recalculate the planned movement paths of all Tokens for the current User.

  #### Returns void

### releaseAll

* releaseAll(options?: object): number

  Release all controlled PlaceableObject instance from this layer.

  #### Parameters

  + options: object = {}

    Options passed to the release method of each object

  #### Returns number

  The number of PlaceableObject instances which were released

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[releaseAll](foundry.canvas.layers.PlaceablesLayer.html#releaseall)

### rotateMany

* rotateMany(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â angle?: number;  
  Â Â Â Â Â Â Â Â delta?: number;  
  Â Â Â Â Â Â Â Â ids?: any[];  
  Â Â Â Â Â Â Â Â includeLocked?: boolean;  
  Â Â Â Â Â Â Â Â snap?: number;  
  Â Â Â Â },  
  ): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
  This executes a single database operation using Scene#updateEmbeddedDocuments.

  #### Parameters

  + options: {  
    Â Â Â Â angle?: number;  
    Â Â Â Â delta?: number;  
    Â Â Â Â ids?: any[];  
    Â Â Â Â includeLocked?: boolean;  
    Â Â Â Â snap?: number;  
    } = {}

    Options which configure how multiple objects are rotated

    - ##### `Optional`angle?: number

      A target angle of rotation (in degrees) where zero faces "south"
    - ##### `Optional`delta?: number

      An incremental angle of rotation (in degrees)
    - ##### `Optional`ids?: any[]

      An Array of object IDs to target for rotation
    - ##### `Optional`includeLocked?: boolean

      Rotate objects whose documents are locked?
    - ##### `Optional`snap?: number

      Snap the resulting angle to a multiple of some increment (in degrees)

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]>

  An array of objects which were rotated

  #### Throws

  An error if an explicitly provided id is not valid

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[rotateMany](foundry.canvas.layers.PlaceablesLayer.html#rotatemany)

### selectObjects

* selectObjects(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â controlOptions?: object;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â releaseOptions?: object;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â Â Â Â Â x?: number;  
  Â Â Â Â Â Â Â Â y?: number;  
  Â Â Â Â },  
  Â Â Â Â aoptions?: { releaseOthers?: boolean },  
  ): boolean

  Select all PlaceableObject instances which fall within a coordinate rectangle.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â controlOptions?: object;  
    Â Â Â Â height?: number;  
    Â Â Â Â releaseOptions?: object;  
    Â Â Â Â width?: number;  
    Â Â Â Â x?: number;  
    Â Â Â Â y?: number;  
    } = {}
    - ##### `Optional`controlOptions?: object

      Optional arguments provided to any called control() method.
    - ##### `Optional`height?: number

      The height of the selection rectangle.
    - ##### `Optional`releaseOptions?: object

      Optional arguments provided to any called release() method.
    - ##### `Optional`width?: number

      The width of the selection rectangle.
    - ##### `Optional`x?: number

      The top-left x-coordinate of the selection rectangle.
    - ##### `Optional`y?: number

      The top-left y-coordinate of the selection rectangle.
  + `Optional`aoptions: { releaseOthers?: boolean } = {}

    Additional options to configure selection behaviour.

    - ##### `Optional`releaseOthers?: boolean

      Whether to release other selected objects.

  #### Returns boolean

  A boolean for whether the controlled set was changed in the operation.

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[selectObjects](foundry.canvas.layers.PlaceablesLayer.html#selectobjects)

### setAllRenderFlags

* setAllRenderFlags(flags: Record<string, boolean>): void

  Assign a set of render flags to all placeables in this layer.

  #### Parameters

  + flags: Record<string, boolean>

    The flags to set

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[setAllRenderFlags](foundry.canvas.layers.PlaceablesLayer.html#setallrenderflags)

### setTargets

* setTargets(  
  Â Â Â Â targetIds: string[] | Set<string>,  
  Â Â Â Â options?: { mode?: "replace" | "acquire" | "release" },  
  ): void

  Assign multiple token targets

  #### Parameters

  + targetIds: string[] | Set<string>

    The array or set of Token IDs.
  + `Optional`options: { mode?: "replace" | "acquire" | "release" } = {}

    Additional options to configure targeting behaviour.

    - ##### `Optional`mode?: "replace" | "acquire" | "release"

      The mode that determines the targeting behavior.

      * `"replace"` (default): Replace the current set of targeted Tokens with provided set of Tokens.
      * `"acquire"`: Acquire the given Tokens as targets without releasing already targeted Tokens.
      * `"release"`: Release the given Tokens as targets.

  #### Returns void

### storeHistory

* storeHistory(type: any, data: any, options: any): void

  #### Parameters

  + type: any
  + data: any
  + options: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[storeHistory](foundry.canvas.layers.PlaceablesLayer.html#storehistory)

### targetObjects

* targetObjects(rectangle: [Rectangle](../interfaces/foundry.types.Rectangle.html), options?: { releaseOthers?: boolean }): void

  Target all Token instances which fall within a coordinate rectangle.

  #### Parameters

  + rectangle: [Rectangle](../interfaces/foundry.types.Rectangle.html)

    The selection rectangle.
  + `Optional`options: { releaseOthers?: boolean } = {}

    Additional options to configure targeting behaviour.

    - ##### `Optional`releaseOthers?: boolean

      Whether or not to release other targeted tokens

  #### Returns void

### tearDown

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[tearDown](foundry.canvas.layers.PlaceablesLayer.html#teardown)

### undoHistory

* undoHistory(): Promise<Document[]>

  Undo a change to the objects in this layer
  This method is typically activated using CTRL+Z while the layer is active

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[undoHistory](foundry.canvas.layers.PlaceablesLayer.html#undohistory)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: null | Function,  
  Â Â Â Â options?: object,  
  ): Promise<Document[]>

  Update all objects in this layer with a provided transformation.
  Conditionally filter to only apply to objects which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: null | Function = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.update

  #### Returns Promise<Document[]>

  An array of updated data once the operation is complete

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[updateAll](foundry.canvas.layers.PlaceablesLayer.html#updateall)

### `Protected`\_canvasCoordinatesFromDrop

* \_canvasCoordinatesFromDrop(  
  Â Â Â Â event: DragEvent,  
  Â Â Â Â options?: { center?: boolean },  
  ): boolean | number[]

  `Protected`

  Get the world-transformed drop position.

  #### Parameters

  + event: DragEvent
  + `Optional`options: { center?: boolean } = {}
    - ##### `Optional`center?: boolean

      Return the coordinates of the center of the nearest grid element.

  #### Returns boolean | number[]

  Returns the transformed x, y coordinates, or false if the drag event was outside
  the canvas.

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_canvasCoordinatesFromDrop](foundry.canvas.layers.PlaceablesLayer.html#_canvascoordinatesfromdrop)

### `Protected`\_getOccludableTokens

* \_getOccludableTokens(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)[]

  `Protected`

  Provide an array of Tokens which are eligible subjects for tile occlusion.
  By default, only tokens which are currently controlled or owned by a player are included as subjects.

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)[]

### `Protected`\_onUndoCreate

* \_onUndoCreate(event: Event): Promise<Document[]>

  `Protected`

  Undo creation with deletion workflow

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onUndoCreate](foundry.canvas.layers.PlaceablesLayer.html#_onundocreate)

### `Protected`\_onUndoDelete

* \_onUndoDelete(event: Event): Promise<Document[]>

  `Protected`

  Undo deletion with creation workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onUndoDelete](foundry.canvas.layers.PlaceablesLayer.html#_onundodelete)

### `Protected`\_onUndoUpdate

* \_onUndoUpdate(event: Event): Promise<Document[]>

  `Protected`

  Undo updates with update workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_onUndoUpdate](foundry.canvas.layers.PlaceablesLayer.html#_onundoupdate)

### `Protected`\_storeHistory

* \_storeHistory(  
  Â Â Â Â type: "update" | "delete" | "create",  
  Â Â Â Â data: object[],  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Record a new CRUD event in the history log so that it can be undone later.
  Updates without changes are filtered out unless the `diff` option is set to false.
  This function may not be overridden.

  #### Parameters

  + type: "update" | "delete" | "create"

    The event type
  + data: object[]

    The create/update/delete data
  + `Optional`options: object = {}

    The options of the undo operation

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[\_storeHistory](foundry.canvas.layers.PlaceablesLayer.html#_storehistory)

### `Static`prepareSceneControls

* prepareSceneControls(): {  
  Â Â Â Â activeTool: string;  
  Â Â Â Â icon: string;  
  Â Â Â Â name: string;  
  Â Â Â Â onChange: (event: any, active: any) => void;  
  Â Â Â Â onToolChange: () => any;  
  Â Â Â Â order: number;  
  Â Â Â Â title: string;  
  Â Â Â Â tools: {  
  Â Â Â Â Â Â Â Â ruler: {  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â select: {  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â target: {  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â unconstrainedMovement: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active: any;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â };  
  }

  #### Returns { Â Â Â Â activeTool: string; Â Â Â Â icon: string; Â Â Â Â name: string; Â Â Â Â onChange: (event: any, active: any) => void; Â Â Â Â onToolChange: () => any; Â Â Â Â order: number; Â Â Â Â title: string; Â Â Â Â tools: { Â Â Â Â Â Â Â Â ruler: { Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â select: { Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â target: { Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â unconstrainedMovement: { Â Â Â Â Â Â Â Â Â Â Â Â active: any; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.html)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â }; }

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html).[prepareSceneControls](foundry.canvas.layers.PlaceablesLayer.html#preparescenecontrols)