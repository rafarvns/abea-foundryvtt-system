---
title: "PlaceablesLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.PlaceablesLayer.html"
category: "classes"
---

# Class PlaceablesLayer

A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances,
each corresponding to an embedded Document.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.PlaceablesLayer))

* [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)
  + PlaceablesLayer
    - [NotesLayer](foundry.canvas.layers.NotesLayer.md)
    - [WallsLayer](foundry.canvas.layers.WallsLayer.md)
    - [TokenLayer](foundry.canvas.layers.TokenLayer.md)

##### Index

### Properties

[\_configPreview](#_configpreview)
[\_throttleRotateMany](#_throttlerotatemany)
[clipboard](#clipboard)
[eventMode](#eventmode)
[highlightObjects](#highlightobjects)
[history](#history)
[objects](#objects)
[options](#options)
[preview](#preview)
[quadtree](#quadtree)
[documentName](#documentname)

### Accessors

[active](#active)
[controlled](#controlled)
[controlledObjects](#controlledobjects)
[documentCollection](#documentcollection)
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
[\_createPreview](#_createpreview)
[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_getCopyableObjects](#_getcopyableobjects)
[\_getMovableObjects](#_getmovableobjects)
[\_highlightObjects](#_highlightobjects)
[\_onClickLeft](#_onclickleft)
[\_onClickRight](#_onclickright)
[\_onCopyKey](#_oncopykey)
[\_onCutKey](#_oncutkey)
[\_onDeleteKey](#_ondeletekey)
[\_onDismissKey](#_ondismisskey)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
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
[\_createDragPreviewData](#_createdragpreviewdata)
[\_isCreationToolActive](#_iscreationtoolactive)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight2](#_onclickright2)
[\_onCycleViewKey](#_oncycleviewkey)
[\_onDragLeftMove](#_ondragleftmove)
[\_onUndoCreate](#_onundocreate)
[\_onUndoDelete](#_onundodelete)
[\_onUndoUpdate](#_onundoupdate)
[\_storeHistory](#_storehistory)
[prepareSceneControls](#preparescenecontrols)

## Properties

### `Internal`\_configPreview

\_configPreview: Container<DisplayObject> | null = null

Preview container for config previews

### `Internal`\_throttleRotateMany

\_throttleRotateMany: (options: object) => Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> = ...

A throttled function that rotates many placeables.

### clipboard

clipboard: { cut: boolean; objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[] } = ...

Keep track of objects copied with CTRL+C/X which can be pasted later.

### eventMode

eventMode: string = "passive"

Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[eventMode](foundry.canvas.layers.InteractionLayer.md#eventmode)

### highlightObjects

highlightObjects: boolean = false

Track whether "highlight all objects" is currently active

### history

history: [CanvasHistoryEvent](../interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.md)[] = []

Keep track of history so that CTRL+Z can undo changes.

### objects

objects: Container<DisplayObject> | null = null

Placeable Layer Objects

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[options](foundry.canvas.layers.InteractionLayer.md#options)

### preview

preview: Container<DisplayObject> | null = null

Preview Object Placement

### quadtree

quadtree: [Quadtree](foundry.canvas.geometry.Quadtree.md) | null = ...

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.

### `Static`documentName

documentName: string

A reference to the named Document type which is contained within this Canvas Layer.

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

  Inherited from InteractionLayer.active

### controlled

* get controlled(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An Array of placeable objects in this layer which have the \_controlled attribute

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

### controlledObjects

* get controlledObjects(): Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Track the set of PlaceableObjects on this layer which are currently controlled.

  #### Returns Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

### documentCollection

* get documentCollection(): [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

  Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene

  #### Returns [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

### hasPreview

* get hasPreview(): boolean

  To know wheter this layer has a preview object or not.

  #### Returns boolean

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from InteractionLayer.hookName

### hover

* get hover(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

  Track the PlaceableObject on this layer which is currently hovered upon.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

### hud

* get hud(): [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

  If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance

  #### Returns [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

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

  Inherited from InteractionLayer.name

### paletteCreateData

* get paletteCreateData(): object

  The default creation data sourced from this layer's palette, if it has one.

  #### Returns object

### placeables

* get placeables(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  A convenience method for accessing the placeable object instances contained in this layer

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from InteractionLayer.instance

### `Static`layerOptions

* get layerOptions(): [PlaceablesLayerOptions](../interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.md)

  Configuration options for the PlaceablesLayer.

  #### Returns [PlaceablesLayerOptions](../interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.md)

  Overrides InteractionLayer.layerOptions

### `Static`placeableClass

* get placeableClass(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

### `Static`TOGGLE\_PALETTE

* get TOGGLE\_PALETTE(): Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  The shared palette tool.

  #### Returns Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  Inherited from InteractionLayer.TOGGLE\_PALETTE

## Methods

### \_activate

* \_activate(): void

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_activate](foundry.canvas.layers.InteractionLayer.md#_activate)

### \_canDragLeftStart

* \_canDragLeftStart(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_canDragLeftStart](foundry.canvas.layers.InteractionLayer.md#_candragleftstart)

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

### \_deactivate

* \_deactivate(): void

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_deactivate](foundry.canvas.layers.InteractionLayer.md#_deactivate)

### \_draw

* \_draw(options: any): Promise<void>

  The inner \_draw method which must be defined by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is drawn

  #### Returns Promise<void>

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_draw](foundry.canvas.layers.InteractionLayer.md#_draw)

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

### \_highlightObjects

* \_highlightObjects(active: any): void

  #### Parameters

  + active: any

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_highlightObjects](foundry.canvas.layers.InteractionLayer.md#_highlightobjects)

### \_onClickLeft

* \_onClickLeft(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onClickLeft](foundry.canvas.layers.InteractionLayer.md#_onclickleft)

### \_onClickRight

* \_onClickRight(event: any): false | undefined

  #### Parameters

  + event: any

  #### Returns false | undefined

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onClickRight](foundry.canvas.layers.InteractionLayer.md#_onclickright)

### \_onCopyKey

* \_onCopyKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onCopyKey](foundry.canvas.layers.InteractionLayer.md#_oncopykey)

### \_onCutKey

* \_onCutKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onCutKey](foundry.canvas.layers.InteractionLayer.md#_oncutkey)

### \_onDeleteKey

* \_onDeleteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDeleteKey](foundry.canvas.layers.InteractionLayer.md#_ondeletekey)

### \_onDismissKey

* \_onDismissKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDismissKey](foundry.canvas.layers.InteractionLayer.md#_ondismisskey)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDragLeftCancel](foundry.canvas.layers.InteractionLayer.md#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDragLeftDrop](foundry.canvas.layers.InteractionLayer.md#_ondragleftdrop)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDragLeftStart](foundry.canvas.layers.InteractionLayer.md#_ondragleftstart)

### \_onMouseWheel

* \_onMouseWheel(event: any): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> | undefined

  #### Parameters

  + event: any

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> | undefined

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onMouseWheel](foundry.canvas.layers.InteractionLayer.md#_onmousewheel)

### \_onPasteKey

* \_onPasteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onPasteKey](foundry.canvas.layers.InteractionLayer.md#_onpastekey)

### \_onSelectAllKey

* \_onSelectAllKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onSelectAllKey](foundry.canvas.layers.InteractionLayer.md#_onselectallkey)

### \_onUndoKey

* \_onUndoKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onUndoKey](foundry.canvas.layers.InteractionLayer.md#_onundokey)

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

  [PlaceablesLayer#moveMany](#movemany)

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

  [PlaceablesLayer#moveMany](#movemany)

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

### \_tearDown

* \_tearDown(options: any): Promise<void>

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: any

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Overrides [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_tearDown](foundry.canvas.layers.InteractionLayer.md#_teardown)

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

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[activate](foundry.canvas.layers.InteractionLayer.md#activate)

### clearPreviewContainer

* clearPreviewContainer(): void

  Clear the contents of the preview container, restoring visibility of original (non-preview) objects.

  #### Returns void

### controlAll

* controlAll(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Acquire control over all PlaceableObject instances which are visible and controllable within the layer.

  #### Parameters

  + `Optional`options: object

    Options passed to the control method of each object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects that were controlled

### controllableObjects

* controllableObjects(): Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  Iterates over placeable objects that are eligible for control/select.

  #### Returns Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  #### Yields

  A placeable object

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

### createObject

* createObject(document: ClientDocument): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Draw a single placeable object

  #### Parameters

  + document: ClientDocument

    The Document instance used to create the placeable object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  The layer instance, now inactive

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[deactivate](foundry.canvas.layers.InteractionLayer.md#deactivate)

### deleteAll

* deleteAll(): Promise<Document[]>

  A helper method to prompt for deletion of all (owned) PlaceableObject instances within the Scene.
  Renders a confirmation dialogue to confirm with the requester that all objects will be deleted.

  #### Returns Promise<Document[]>

  An array of Document objects which were deleted by the operation

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[draw](foundry.canvas.layers.InteractionLayer.md#draw)

### get

* get(objectId: string): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Get a PlaceableObject contained in this layer by its ID.
  Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.

  #### Parameters

  + objectId: string

    The ID of the contained object to retrieve

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The object instance, or undefined

### getMaxSort

* getMaxSort(): number

  Get the maximum sort value of all placeables.

  #### Returns number

  The maximum sort value (-Infinity if there are no objects)

### getSnappedPoint

* getSnappedPoint(point: Point): Point

  Snaps the given point to grid. The layer defines the snapping behavior.

  #### Parameters

  + point: Point

    The point that is to be snapped

  #### Returns Point

  The snapped point

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[getZIndex](foundry.canvas.layers.InteractionLayer.md#getzindex)

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

### releaseAll

* releaseAll(options?: object): number

  Release all controlled PlaceableObject instance from this layer.

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the release method of each object

  #### Returns number

  The number of PlaceableObject instances which were released

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

### setAllRenderFlags

* setAllRenderFlags(flags: Record<string, boolean>): void

  Assign a set of render flags to all placeables in this layer.

  #### Parameters

  + flags: Record<string, boolean>

    The flags to set

  #### Returns void

### storeHistory

* storeHistory(  
  Â Â Â Â type: "create" | "update" | "delete",  
  Â Â Â Â data: object[],  
  Â Â Â Â options?: object,  
  ): void

  Record a new CRUD event in the history log so that it can be undone later.
  The base implemenation calls [PlaceablesLayer#\_storeHistory](#_storehistory) without
  passing the given options. Subclasses may override this function and can call
  [PlaceablesLayer#\_storeHistory](#_storehistory) themselves to pass options as needed.

  #### Parameters

  + type: "create" | "update" | "delete"

    The event type
  + data: object[]

    The create/update/delete data
  + `Optional`options: object

    The create/update/delete options

  #### Returns void

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[tearDown](foundry.canvas.layers.InteractionLayer.md#teardown)

### undoHistory

* undoHistory(): Promise<Document[]>

  Undo a change to the objects in this layer
  This method is typically activated using CTRL+Z while the layer is active

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

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

### viewedDocuments

* viewedDocuments(): Generator<any, void, unknown>

  Iterate over all documents which are viewed in the current Level.

  #### Returns Generator<any, void, unknown>

  #### Yields

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

### `Protected`\_commitDragLeftDrop

* \_commitDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): Promise<void>

  `Protected`

  Commit the drag-left drop.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns Promise<void>

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

### `Protected`\_createDragPreviewData

* \_createDragPreviewData(event: FederatedEvent<UIEvent | PixiTouch>): object

  `Protected`

  Create the preview document data from the drag start event.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event

  #### Returns object

  The initial document data

### `Protected`\_isCreationToolActive

* \_isCreationToolActive(): boolean

  `Protected`

  Is a creation tool active?

  #### Returns boolean

### `Protected`\_onClickLeft2

* \_onClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onClickLeft2](foundry.canvas.layers.InteractionLayer.md#_onclickleft2)

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onClickRight2](foundry.canvas.layers.InteractionLayer.md#_onclickright2)

### `Protected`\_onCycleViewKey

* \_onCycleViewKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cycle View keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cycle-view key press event

  #### Returns boolean

  Was the event handled?

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onCycleViewKey](foundry.canvas.layers.InteractionLayer.md#_oncycleviewkey)

### `Protected`\_onDragLeftMove

* \_onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[\_onDragLeftMove](foundry.canvas.layers.InteractionLayer.md#_ondragleftmove)

### `Protected`\_onUndoCreate

* \_onUndoCreate(event: Event): Promise<Document[]>

  `Protected`

  Undo creation with deletion workflow

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

### `Protected`\_onUndoDelete

* \_onUndoDelete(event: Event): Promise<Document[]>

  `Protected`

  Undo deletion with creation workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

### `Protected`\_onUndoUpdate

* \_onUndoUpdate(event: Event): Promise<Document[]>

  `Protected`

  Undo updates with update workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

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

### `Static`prepareSceneControls

* prepareSceneControls(): [SceneControl](../interfaces/foundry.SceneControl.md) | null

  Prepare data used by SceneControls to register tools used by this layer.

  #### Returns [SceneControl](../interfaces/foundry.SceneControl.md) | null

  Inherited from [InteractionLayer](foundry.canvas.layers.InteractionLayer.md).[prepareSceneControls](foundry.canvas.layers.InteractionLayer.md#preparescenecontrols)