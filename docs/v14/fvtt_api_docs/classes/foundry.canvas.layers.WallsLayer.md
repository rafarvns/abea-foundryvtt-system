---
title: "WallsLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.WallsLayer.html"
category: "classes"
---

# Class WallsLayer

The Walls canvas layer which provides a container for Wall objects within the rendered Scene.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.WallsLayer))

* [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)
  + WallsLayer

##### Index

### Properties

[\_chain](#_chain)
[\_configPreview](#_configpreview)
[\_last](#_last)
[\_throttleRotateMany](#_throttlerotatemany)
[chain](#chain)
[clipboard](#clipboard)
[eventMode](#eventmode)
[highlightObjects](#highlightobjects)
[history](#history)
[objects](#objects)
[options](#options)
[preview](#preview)
[quadtree](#quadtree)
[documentName](#documentname)
[paletteClass](#paletteclass)

### Accessors

[active](#active)
[controlled](#controlled)
[controlledObjects](#controlledobjects)
[documentCollection](#documentcollection)
[doors](#doors)
[hasPreview](#haspreview)
[hookName](#hookname)
[hover](#hover)
[hud](#hud)
[name](#name)
[paletteCreateData](#palettecreatedata)
[placeables](#placeables)
[instance](#instance)
[layerOptions](#layeroptions)
[placeableClass](#placeableclass)
[TOGGLE\_PALETTE](#toggle_palette)

### Methods

[\_activate](#_activate)
[\_canDragLeftStart](#_candragleftstart)
[\_createDragPreviewData](#_createdragpreviewdata)
[\_createPreview](#_createpreview)
[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_getCopyableObjects](#_getcopyableobjects)
[\_getMovableObjects](#_getmovableobjects)
[\_getWallEndpointCoordinates](#_getwallendpointcoordinates)
[\_highlightObjects](#_highlightobjects)
[\_onClickLeft](#_onclickleft)
[\_onClickRight](#_onclickright)
[\_onCopyKey](#_oncopykey)
[\_onCutKey](#_oncutkey)
[\_onDeleteKey](#_ondeletekey)
[\_onDismissKey](#_ondismisskey)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragLeftMove](#_ondragleftmove)
[\_onDragLeftStart](#_ondragleftstart)
[\_onMouseWheel](#_onmousewheel)
[\_onPasteKey](#_onpastekey)
[\_onSelectAllKey](#_onselectallkey)
[\_onUndoKey](#_onundokey)
[\_prepareKeyboardMovementUpdates](#_preparekeyboardmovementupdates)
[\_prepareKeyboardRotationUpdates](#_preparekeyboardrotationupdates)
[\_sendToBackOrBringToFront](#_sendtobackorbringtofront)
[\_tearDown](#_teardown)
[activate](#activate)
[clearPreviewContainer](#clearpreviewcontainer)
[controlAll](#controlall)
[controllableObjects](#controllableobjects)
[copyObjects](#copyobjects)
[createObject](#createobject)
[deactivate](#deactivate)
[deleteAll](#deleteall)
[draw](#draw)
[get](#get)
[getMaxSort](#getmaxsort)
[getSnappedPoint](#getsnappedpoint)
[getZIndex](#getzindex)
[moveMany](#movemany)
[pasteObjects](#pasteobjects)
[releaseAll](#releaseall)
[rotateMany](#rotatemany)
[selectObjects](#selectobjects)
[setAllRenderFlags](#setallrenderflags)
[storeHistory](#storehistory)
[tearDown](#teardown)
[undoHistory](#undohistory)
[updateAll](#updateall)
[viewedDocuments](#vieweddocuments)
[\_canvasCoordinatesFromDrop](#_canvascoordinatesfromdrop)
[\_commitDragLeftDrop](#_commitdragleftdrop)
[\_confirmDeleteKey](#_confirmdeletekey)
[\_isCreationToolActive](#_iscreationtoolactive)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight2](#_onclickright2)
[\_onCycleViewKey](#_oncycleviewkey)
[\_onUndoCreate](#_onundocreate)
[\_onUndoDelete](#_onundodelete)
[\_onUndoUpdate](#_onundoupdate)
[\_storeHistory](#_storehistory)
[getClosestEndpoint](#getclosestendpoint)
[prepareSceneControls](#preparescenecontrols)

## Properties

### `Internal`\_chain

\_chain: boolean = false

Track whether we are currently within a chained placement workflow

### `Internal`\_configPreview

\_configPreview: Container<DisplayObject> | null = null

Preview container for config previews

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_configPreview](foundry.canvas.layers.PlaceablesLayer.md#_configpreview)

### `Internal`\_last

\_last: { point: PointArray } = ...

Reference the last interacted wall endpoint for the purposes of chaining

### `Internal`\_throttleRotateMany

\_throttleRotateMany: (options: object) => Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> = ...

A throttled function that rotates many placeables.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_throttleRotateMany](foundry.canvas.layers.PlaceablesLayer.md#_throttlerotatemany)

### chain

chain: Graphics = null

A graphics layer used to display chained Wall selection

### clipboard

clipboard: { cut: boolean; objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[] } = ...

Keep track of objects copied with CTRL+C/X which can be pasted later.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[clipboard](foundry.canvas.layers.PlaceablesLayer.md#clipboard)

### eventMode

eventMode: string = "passive"

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[eventMode](foundry.canvas.layers.PlaceablesLayer.md#eventmode)

### highlightObjects

highlightObjects: boolean = false

Track whether "highlight all objects" is currently active

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[highlightObjects](foundry.canvas.layers.PlaceablesLayer.md#highlightobjects)

### history

history: [CanvasHistoryEvent](../interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.md)[] = []

Keep track of history so that CTRL+Z can undo changes.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[history](foundry.canvas.layers.PlaceablesLayer.md#history)

### objects

objects: Container<DisplayObject> | null = null

Placeable Layer Objects

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[objects](foundry.canvas.layers.PlaceablesLayer.md#objects)

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[options](foundry.canvas.layers.PlaceablesLayer.md#options)

### preview

preview: Container<DisplayObject> | null = null

Preview Object Placement

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[preview](foundry.canvas.layers.PlaceablesLayer.md#preview)

### quadtree

quadtree: [Quadtree](foundry.canvas.geometry.Quadtree.md) | null = ...

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[quadtree](foundry.canvas.layers.PlaceablesLayer.md#quadtree)

### `Static`documentName

documentName: string = "Wall"

A reference to the named Document type which is contained within this Canvas Layer.

Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[documentName](foundry.canvas.layers.PlaceablesLayer.md#documentname)

### `Static`paletteClass

paletteClass: typeof [WallPalette](foundry.applications.sheets.palette.WallPalette.md) = WallPalette

#### Inherit Doc

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

  Inherited from PlaceablesLayer.active

### controlled

* get controlled(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An Array of placeable objects in this layer which have the \_controlled attribute

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Inherited from PlaceablesLayer.controlled

### controlledObjects

* get controlledObjects(): Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Track the set of PlaceableObjects on this layer which are currently controlled.

  #### Returns Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Inherited from PlaceablesLayer.controlledObjects

### documentCollection

* get documentCollection(): [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

  Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene

  #### Returns [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

  Inherited from PlaceablesLayer.documentCollection

### doors

* get doors(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](foundry.canvas.placeables.Wall.md)[]

  An Array of Wall instances in the current Scene which act as Doors.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](foundry.canvas.placeables.Wall.md)[]

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

* get hover(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

  Track the PlaceableObject on this layer which is currently hovered upon.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

  Inherited from PlaceablesLayer.hover

### hud

* get hud(): [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

  If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance

  #### Returns [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

  Inherited from PlaceablesLayer.hud

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

### paletteCreateData

* get paletteCreateData(): object

  The default creation data sourced from this layer's palette, if it has one.

  #### Returns object

  Inherited from PlaceablesLayer.paletteCreateData

### placeables

* get placeables(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  A convenience method for accessing the placeable object instances contained in this layer

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Inherited from PlaceablesLayer.placeables

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from PlaceablesLayer.instance

### `Static`layerOptions

* get layerOptions(): object

  Configuration options for the PlaceablesLayer.

  #### Returns object

  Overrides PlaceablesLayer.layerOptions

### `Static`placeableClass

* get placeableClass(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from PlaceablesLayer.placeableClass

### `Static`TOGGLE\_PALETTE

* get TOGGLE\_PALETTE(): Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  The shared palette tool.

  #### Returns Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  Inherited from PlaceablesLayer.TOGGLE\_PALETTE

## Methods

### \_activate

* \_activate(): void

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_activate](foundry.canvas.layers.PlaceablesLayer.md#_activate)

### \_canDragLeftStart

* \_canDragLeftStart(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_canDragLeftStart](foundry.canvas.layers.PlaceablesLayer.md#_candragleftstart)

### \_createDragPreviewData

* \_createDragPreviewData(event: any): object

  #### Parameters

  + event: any

  #### Returns object

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_createDragPreviewData](foundry.canvas.layers.PlaceablesLayer.md#_createdragpreviewdata)

### \_createPreview

* \_createPreview(  
  Â Â Â Â createData: object,  
  Â Â Â Â options?: { left?: number; renderSheet?: boolean; top?: number },  
  ): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

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

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The created preview object

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_createPreview](foundry.canvas.layers.PlaceablesLayer.md#_createpreview)

### \_deactivate

* \_deactivate(): void

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_deactivate](foundry.canvas.layers.PlaceablesLayer.md#_deactivate)

### \_draw

* \_draw(options: any): Promise<void>

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is drawn

  #### Returns Promise<void>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_draw](foundry.canvas.layers.PlaceablesLayer.md#_draw)

### \_getCopyableObjects

* \_getCopyableObjects(options: { cut: boolean }): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be copied/cut.

  #### Parameters

  + options: { cut: boolean }

    Additional options

    - ##### cut: boolean

      Cut instead of copy?

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects which can be copied/cut

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_getCopyableObjects](foundry.canvas.layers.PlaceablesLayer.md#_getcopyableobjects)

### \_getMovableObjects

* \_getMovableObjects(  
  Â Â Â Â ids: string[] | undefined,  
  Â Â Â Â includeLocked: boolean,  
  ): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.

  #### Parameters

  + ids: string[] | undefined

    An explicit array of IDs requested.
  + includeLocked: boolean

    Include locked objects which would otherwise be ignored?

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects which can be moved or rotated

  #### Throws

  If any explicitly requested ID is not valid

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_getMovableObjects](foundry.canvas.layers.PlaceablesLayer.md#_getmovableobjects)

### \_getWallEndpointCoordinates

* \_getWallEndpointCoordinates(  
  Â Â Â Â point: Point,  
  Â Â Â Â options?: { snap?: boolean },  
  ): [x: number, y: number]

  `Internal`

  Get the wall endpoint coordinates for a given point.

  #### Parameters

  + point: Point

    The candidate wall endpoint.
  + `Optional`options: { snap?: boolean } = {}
    - ##### `Optional`snap?: boolean

      Snap to the grid?

  #### Returns [x: number, y: number]

  The wall endpoint coordinates.

### \_highlightObjects

* \_highlightObjects(active: any): void

  #### Parameters

  + active: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_highlightObjects](foundry.canvas.layers.PlaceablesLayer.md#_highlightobjects)

### \_onClickLeft

* \_onClickLeft(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickLeft](foundry.canvas.layers.PlaceablesLayer.md#_onclickleft)

### \_onClickRight

* \_onClickRight(event: any): false | undefined

  #### Parameters

  + event: any

  #### Returns false | undefined

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickRight](foundry.canvas.layers.PlaceablesLayer.md#_onclickright)

### \_onCopyKey

* \_onCopyKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onCopyKey](foundry.canvas.layers.PlaceablesLayer.md#_oncopykey)

### \_onCutKey

* \_onCutKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onCutKey](foundry.canvas.layers.PlaceablesLayer.md#_oncutkey)

### \_onDeleteKey

* \_onDeleteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDeleteKey](foundry.canvas.layers.PlaceablesLayer.md#_ondeletekey)

### \_onDismissKey

* \_onDismissKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDismissKey](foundry.canvas.layers.PlaceablesLayer.md#_ondismisskey)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftCancel](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftDrop](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftdrop)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftMove](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftmove)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftStart](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftstart)

### \_onMouseWheel

* \_onMouseWheel(event: any): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> | undefined

  #### Parameters

  + event: any

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> | undefined

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onMouseWheel](foundry.canvas.layers.PlaceablesLayer.md#_onmousewheel)

### \_onPasteKey

* \_onPasteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onPasteKey](foundry.canvas.layers.PlaceablesLayer.md#_onpastekey)

### \_onSelectAllKey

* \_onSelectAllKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onSelectAllKey](foundry.canvas.layers.PlaceablesLayer.md#_onselectallkey)

### \_onUndoKey

* \_onUndoKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onUndoKey](foundry.canvas.layers.PlaceablesLayer.md#_onundokey)

### \_prepareKeyboardMovementUpdates

* \_prepareKeyboardMovementUpdates(  
  Â Â Â Â objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[],  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  ): [updates: object[], options?: object]

  `Internal`

  Prepare the updates and update options for moving the given placeable objects via keyboard.

  #### Parameters

  + objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]
  + dx: -1 | 0 | 1
  + dy: -1 | 0 | 1
  + dz: -1 | 0 | 1

  #### Returns [updates: object[], options?: object]

  #### See

  [PlaceablesLayer#moveMany](foundry.canvas.layers.PlaceablesLayer.md#movemany)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_prepareKeyboardMovementUpdates](foundry.canvas.layers.PlaceablesLayer.md#_preparekeyboardmovementupdates)

### \_prepareKeyboardRotationUpdates

* \_prepareKeyboardRotationUpdates(  
  Â Â Â Â objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[],  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  ): [updates: object[], options?: object]

  `Internal`

  Prepare the updates and update options for rotating the given placeable objects via keyboard.

  #### Parameters

  + objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]
  + dx: -1 | 0 | 1
  + dy: -1 | 0 | 1
  + dz: -1 | 0 | 1

  #### Returns [updates: object[], options?: object]

  #### See

  [PlaceablesLayer#moveMany](foundry.canvas.layers.PlaceablesLayer.md#movemany)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_prepareKeyboardRotationUpdates](foundry.canvas.layers.PlaceablesLayer.md#_preparekeyboardrotationupdates)

### \_sendToBackOrBringToFront

* \_sendToBackOrBringToFront(front: boolean): boolean | void

  `Internal`

  Send the controlled objects of this layer to the back or bring them to the front.

  #### Parameters

  + front: boolean

    Bring to front instead of send to back?

  #### Returns boolean | void

  Returns undefined if the layer does not have sortable object.
  Returns false if the controlled objects are already at the front/back.

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_sendToBackOrBringToFront](foundry.canvas.layers.PlaceablesLayer.md#_sendtobackorbringtofront)

### \_tearDown

* \_tearDown(options: any): Promise<void>

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_tearDown](foundry.canvas.layers.PlaceablesLayer.md#_teardown)

### activate

* activate(options?: { tool?: string }): [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.

  #### Parameters

  + `Optional`options: { tool?: string } = {}

    Options which configure layer activation

    - ##### `Optional`tool?: string

      A specific tool in the control palette to set as active

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  The layer instance, now activated

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[activate](foundry.canvas.layers.PlaceablesLayer.md#activate)

### clearPreviewContainer

* clearPreviewContainer(): void

  Clear the contents of the preview container, restoring visibility of original (non-preview) objects.

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[clearPreviewContainer](foundry.canvas.layers.PlaceablesLayer.md#clearpreviewcontainer)

### controlAll

* controlAll(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Acquire control over all PlaceableObject instances which are visible and controllable within the layer.

  #### Parameters

  + `Optional`options: object

    Options passed to the control method of each object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects that were controlled

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[controlAll](foundry.canvas.layers.PlaceablesLayer.md#controlall)

### controllableObjects

* controllableObjects(): Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  Iterates over placeable objects that are eligible for control/select.

  #### Returns Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  #### Yields

  A placeable object

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[controllableObjects](foundry.canvas.layers.PlaceablesLayer.md#controllableobjects)

### copyObjects

* copyObjects(options?: { cut?: boolean }): readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.

  #### Parameters

  + `Optional`options: { cut?: boolean } = {}

    Additional options

    - ##### `Optional`cut?: boolean

      Cut instead of copy?

  #### Returns readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  The Array of copied PlaceableObject instances

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[copyObjects](foundry.canvas.layers.PlaceablesLayer.md#copyobjects)

### createObject

* createObject(document: ClientDocument): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Draw a single placeable object

  #### Parameters

  + document: ClientDocument

    The Document instance used to create the placeable object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[createObject](foundry.canvas.layers.PlaceablesLayer.md#createobject)

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  The layer instance, now inactive

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[deactivate](foundry.canvas.layers.PlaceablesLayer.md#deactivate)

### deleteAll

* deleteAll(): Promise<Document[]>

  A helper method to prompt for deletion of all (owned) PlaceableObject instances within the Scene.
  Renders a confirmation dialogue to confirm with the requester that all objects will be deleted.

  #### Returns Promise<Document[]>

  An array of Document objects which were deleted by the operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[deleteAll](foundry.canvas.layers.PlaceablesLayer.md#deleteall)

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[draw](foundry.canvas.layers.PlaceablesLayer.md#draw)

### get

* get(objectId: string): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Get a PlaceableObject contained in this layer by its ID.
  Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.

  #### Parameters

  + objectId: string

    The ID of the contained object to retrieve

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The object instance, or undefined

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[get](foundry.canvas.layers.PlaceablesLayer.md#get)

### getMaxSort

* getMaxSort(): number

  Get the maximum sort value of all placeables.

  #### Returns number

  The maximum sort value (-Infinity if there are no objects)

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[getMaxSort](foundry.canvas.layers.PlaceablesLayer.md#getmaxsort)

### getSnappedPoint

* getSnappedPoint(point: any): [Point](../interfaces/foundry.types.Point.md)

  #### Parameters

  + point: any

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[getSnappedPoint](foundry.canvas.layers.PlaceablesLayer.md#getsnappedpoint)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[getZIndex](foundry.canvas.layers.PlaceablesLayer.md#getzindex)

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
  ): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

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

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

  An array of objects which were moved during the operation

  #### Throws

  An error if an explicitly provided id is not valid

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[moveMany](foundry.canvas.layers.PlaceablesLayer.md#movemany)

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

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[pasteObjects](foundry.canvas.layers.PlaceablesLayer.md#pasteobjects)

### releaseAll

* releaseAll(options: any): number

  Release all controlled PlaceableObject instance from this layer.

  #### Parameters

  + options: any

    Options passed to the release method of each object

  #### Returns number

  The number of PlaceableObject instances which were released

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[releaseAll](foundry.canvas.layers.PlaceablesLayer.md#releaseall)

### rotateMany

* rotateMany(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â angle?: number;  
  Â Â Â Â Â Â Â Â delta?: number;  
  Â Â Â Â Â Â Â Â ids?: any[];  
  Â Â Â Â Â Â Â Â includeLocked?: boolean;  
  Â Â Â Â Â Â Â Â snap?: number;  
  Â Â Â Â },  
  ): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

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

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

  An array of objects which were rotated

  #### Throws

  An error if an explicitly provided id is not valid

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[rotateMany](foundry.canvas.layers.PlaceablesLayer.md#rotatemany)

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

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[selectObjects](foundry.canvas.layers.PlaceablesLayer.md#selectobjects)

### setAllRenderFlags

* setAllRenderFlags(flags: Record<string, boolean>): void

  Assign a set of render flags to all placeables in this layer.

  #### Parameters

  + flags: Record<string, boolean>

    The flags to set

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[setAllRenderFlags](foundry.canvas.layers.PlaceablesLayer.md#setallrenderflags)

### storeHistory

* storeHistory(  
  Â Â Â Â type: "create" | "update" | "delete",  
  Â Â Â Â data: object[],  
  Â Â Â Â options?: object,  
  ): void

  Record a new CRUD event in the history log so that it can be undone later.
  The base implemenation calls [PlaceablesLayer#\_storeHistory](foundry.canvas.layers.PlaceablesLayer.md#_storehistory) without
  passing the given options. Subclasses may override this function and can call
  [PlaceablesLayer#\_storeHistory](foundry.canvas.layers.PlaceablesLayer.md#_storehistory) themselves to pass options as needed.

  #### Parameters

  + type: "create" | "update" | "delete"

    The event type
  + data: object[]

    The create/update/delete data
  + `Optional`options: object

    The create/update/delete options

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[storeHistory](foundry.canvas.layers.PlaceablesLayer.md#storehistory)

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[tearDown](foundry.canvas.layers.PlaceablesLayer.md#teardown)

### undoHistory

* undoHistory(): Promise<Document[]>

  Undo a change to the objects in this layer
  This method is typically activated using CTRL+Z while the layer is active

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[undoHistory](foundry.canvas.layers.PlaceablesLayer.md#undohistory)

### updateAll

* updateAll(  
  Â Â Â Â transformation: object | Function,  
  Â Â Â Â condition?: Function | null,  
  Â Â Â Â options?: object,  
  ): Promise<Document[]>

  Update all objects in this layer with a provided transformation.
  Conditionally filter to only apply to objects which match a certain condition.

  #### Parameters

  + transformation: object | Function

    An object of data or function to apply to all matched objects
  + condition: Function | null = null

    A function which tests whether to target each object
  + `Optional`options: object = {}

    Additional options passed to Document.update

  #### Returns Promise<Document[]>

  An array of updated data once the operation is complete

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[updateAll](foundry.canvas.layers.PlaceablesLayer.md#updateall)

### viewedDocuments

* viewedDocuments(): Generator<any, void, unknown>

  Iterate over all documents which are viewed in the current Level.

  #### Returns Generator<any, void, unknown>

  #### Yields

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[viewedDocuments](foundry.canvas.layers.PlaceablesLayer.md#vieweddocuments)

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

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_canvasCoordinatesFromDrop](foundry.canvas.layers.PlaceablesLayer.md#_canvascoordinatesfromdrop)

### `Protected`\_commitDragLeftDrop

* \_commitDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): Promise<void>

  `Protected`

  Commit the drag-left drop.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns Promise<void>

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_commitDragLeftDrop](foundry.canvas.layers.PlaceablesLayer.md#_commitdragleftdrop)

### `Protected`\_confirmDeleteKey

* \_confirmDeleteKey(documents: Document): Promise<boolean>

  `Protected`

  Confirm deletion via the delete key.
  Called only if [foundry.canvas.layers.types.PlaceablesLayerOptions#confirmDeleteKey](../interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.md#confirmdeletekey) is true.

  #### Parameters

  + documents: Document

    The documents that will be deleted on confirmation.

  #### Returns Promise<boolean>

  True if the deletion is confirmed to proceed.

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_confirmDeleteKey](foundry.canvas.layers.PlaceablesLayer.md#_confirmdeletekey)

### `Protected`\_isCreationToolActive

* \_isCreationToolActive(): boolean

  `Protected`

  Is a creation tool active?

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_isCreationToolActive](foundry.canvas.layers.PlaceablesLayer.md#_iscreationtoolactive)

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickLeft2](foundry.canvas.layers.PlaceablesLayer.md#_onclickleft2)

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickRight2](foundry.canvas.layers.PlaceablesLayer.md#_onclickright2)

### `Protected`\_onCycleViewKey

* \_onCycleViewKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cycle View keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cycle-view key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onCycleViewKey](foundry.canvas.layers.PlaceablesLayer.md#_oncycleviewkey)

### `Protected`\_onUndoCreate

* \_onUndoCreate(event: object): Promise<Document[]>

  `Protected`

  Custom undo for wall creation while chaining is active.

  #### Parameters

  + event: object

  #### Returns Promise<Document[]>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onUndoCreate](foundry.canvas.layers.PlaceablesLayer.md#_onundocreate)

### `Protected`\_onUndoDelete

* \_onUndoDelete(event: Event): Promise<Document[]>

  `Protected`

  Undo deletion with creation workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onUndoDelete](foundry.canvas.layers.PlaceablesLayer.md#_onundodelete)

### `Protected`\_onUndoUpdate

* \_onUndoUpdate(event: Event): Promise<Document[]>

  `Protected`

  Undo updates with update workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onUndoUpdate](foundry.canvas.layers.PlaceablesLayer.md#_onundoupdate)

### `Protected`\_storeHistory

* \_storeHistory(  
  Â Â Â Â type: "create" | "update" | "delete",  
  Â Â Â Â data: object[],  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Record a new CRUD event in the history log so that it can be undone later.
  Updates without changes are filtered out unless the `diff` option is set to false.
  This function may not be overridden.

  #### Parameters

  + type: "create" | "update" | "delete"

    The event type
  + data: object[]

    The create/update/delete data
  + `Optional`options: object = {}

    The options of the undo operation

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_storeHistory](foundry.canvas.layers.PlaceablesLayer.md#_storehistory)

### `Static`getClosestEndpoint

* getClosestEndpoint(point: Point, wall: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](foundry.canvas.placeables.Wall.md)): PointArray

  Given a point and the coordinates of a wall, determine which endpoint is closer to the point

  #### Parameters

  + point: Point

    The origin point of the new Wall placement
  + wall: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](foundry.canvas.placeables.Wall.md)

    The existing Wall object being chained to

  #### Returns PointArray

  The [x,y] coordinates of the starting endpoint

### `Static`prepareSceneControls

* prepareSceneControls(): {  
  Â Â Â Â activeTool: string;  
  Â Â Â Â icon: string;  
  Â Â Â Â layer: string;  
  Â Â Â Â name: string;  
  Â Â Â Â onChange: (event: any, active: any) => void;  
  Â Â Â Â onToolChange: (\_event: any, tool: any, active: any) => void;  
  Â Â Â Â order: number;  
  Â Â Â Â title: string;  
  Â Â Â Â tools: {  
  Â Â Â Â Â Â Â Â clear: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => any;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â closeDoors: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â doors: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â ethereal: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â invisible: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â secret: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â select: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â snap: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => any;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: { paragraph: string }[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â solid: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â terrain: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â togglePalette: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â button?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â control?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â createData?: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon?: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â interaction?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â name?: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange?: (event: Event, active: boolean) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData?: object;  
  Â Â Â Â Â Â Â Â Â Â Â Â title?: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip?: [ToolclipConfiguration](../interfaces/foundry.ToolclipConfiguration.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â visible?: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â wall: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â window: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â get createData(): object;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â };  
  Â Â Â Â visible: boolean;  
  }

  #### Returns { Â Â Â Â activeTool: string; Â Â Â Â icon: string; Â Â Â Â layer: string; Â Â Â Â name: string; Â Â Â Â onChange: (event: any, active: any) => void; Â Â Â Â onToolChange: (\_event: any, tool: any, active: any) => void; Â Â Â Â order: number; Â Â Â Â title: string; Â Â Â Â tools: { Â Â Â Â Â Â Â Â clear: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => any; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â closeDoors: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â doors: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â ethereal: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â invisible: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â secret: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â select: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â snap: { Â Â Â Â Â Â Â Â Â Â Â Â active: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => any; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: { paragraph: string }[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â solid: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â terrain: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData: object; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â togglePalette: { Â Â Â Â Â Â Â Â Â Â Â Â active?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â button?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â control?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData?: object; Â Â Â Â Â Â Â Â Â Â Â Â creation?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon?: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name?: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange?: (event: Event, active: boolean) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData?: object; Â Â Â Â Â Â Â Â Â Â Â Â title?: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip?: [ToolclipConfiguration](../interfaces/foundry.ToolclipConfiguration.md); Â Â Â Â Â Â Â Â Â Â Â Â visible?: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â wall: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â window: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: PointerEvent) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â get createData(): object; Â Â Â Â Â Â Â Â }; Â Â Â Â }; Â Â Â Â visible: boolean; }

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[prepareSceneControls](foundry.canvas.layers.PlaceablesLayer.md#preparescenecontrols)