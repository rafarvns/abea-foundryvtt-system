---
title: "RegionLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.RegionLayer.html"
category: "classes"
---

# Class RegionLayer

The Regions Container.

##### Index

### Properties

[\_configPreview](#_configpreview)
[\_highlights](#_highlights)
[\_mouseWheelContext](#_mousewheelcontext)
[\_placementContext](#_placementcontext)
[\_shapeClipboard](#_shapeclipboard)
[\_throttleRotateMany](#_throttlerotatemany)
[\_togglePaletteVisible](#_togglepalettevisible)
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
[hasPreview](#haspreview)
[hookName](#hookname)
[hover](#hover)
[hud](#hud)
[name](#name)
[paletteCreateData](#palettecreatedata)
[placeables](#placeables)
[templateMode](#templatemode)
[instance](#instance)
[layerOptions](#layeroptions)
[placeableClass](#placeableclass)
[TOGGLE\_PALETTE](#toggle_palette)

### Methods

[\_activate](#_activate)
[\_cancelPlacement](#_cancelplacement)
[\_canDragLeftStart](#_candragleftstart)
[\_commitDragLeftDrop](#_commitdragleftdrop)
[\_confirmDeleteKey](#_confirmdeletekey)
[\_createDragPreviewData](#_createdragpreviewdata)
[\_createPreview](#_createpreview)
[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_getCopyableObjects](#_getcopyableobjects)
[\_getMovableObjects](#_getmovableobjects)
[\_highlightObjects](#_highlightobjects)
[\_highlightShape](#_highlightshape)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
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
[\_updateDragPreview](#_updatedragpreview)
[\_updateMouseWheelShape](#_updatemousewheelshape)
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
[placeRegion](#placeregion)
[placeRegions](#placeregions)
[releaseAll](#releaseall)
[rotateMany](#rotatemany)
[selectObjects](#selectobjects)
[setAllRenderFlags](#setallrenderflags)
[storeHistory](#storehistory)
[tearDown](#teardown)
[undoHistory](#undohistory)
[updateAll](#updateall)
[viewedDocuments](#vieweddocuments)
[\_cancelMouseWheel](#_cancelmousewheel)
[\_canvasCoordinatesFromDrop](#_canvascoordinatesfromdrop)
[\_createDragShapeData](#_createdragshapedata)
[\_isCreationToolActive](#_iscreationtoolactive)
[\_onClickRight2](#_onclickright2)
[\_onCycleViewKey](#_oncycleviewkey)
[\_onUndoCreate](#_onundocreate)
[\_onUndoDelete](#_onundodelete)
[\_onUndoUpdate](#_onundoupdate)
[\_prepareMouseWheelUpdate](#_preparemousewheelupdate)
[\_storeHistory](#_storehistory)
[\_updateMouseWheelPreview](#_updatemousewheelpreview)
[prepareSceneControls](#preparescenecontrols)

## Properties

### `Internal`\_configPreview

\_configPreview: Container<DisplayObject> | null = null

Preview container for config previews

Inherited from ShapeLayerMixin(PlaceablesLayer).\_configPreview

### `Internal`\_highlights

\_highlights: Container<DisplayObject> = ...

The highlight meshes of the Regions.

### `Internal`\_mouseWheelContext

\_mouseWheelContext: { preview: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md); shape: [BaseShapeData](foundry.data.BaseShapeData.md) } | null = null

The mouse wheel context.

Inherited from ShapeLayerMixin(PlaceablesLayer).\_mouseWheelContext

### `Internal`\_placementContext

\_placementContext:  
Â Â Â Â | {  
Â Â Â Â Â Â Â Â allowEmpty: boolean;  
Â Â Â Â Â Â Â Â allowRotation: boolean;  
Â Â Â Â Â Â Â Â attachToToken: boolean;  
Â Â Â Â Â Â Â Â create: boolean;  
Â Â Â Â Â Â Â Â createOptions: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "parent">>;  
Â Â Â Â Â Â Â Â data: [RegionData](../interfaces/foundry.documents.types.RegionData.md);  
Â Â Â Â Â Â Â Â destroyPreview: boolean;  
Â Â Â Â Â Â Â Â layer: [TokenLayer](foundry.canvas.layers.TokenLayer.md) | RegionLayer;  
Â Â Â Â Â Â Â Â onChange: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [RegionDocument](foundry.documents.RegionDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => void;  
Â Â Â Â Â Â Â Â onMove: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [RegionDocument](foundry.documents.RegionDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â position: [Point](../interfaces/foundry.types.Point.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â snap: boolean;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â onRotate: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [RegionDocument](foundry.documents.RegionDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: WheelEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â precise: boolean;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â preCommit: (documents: readonly [RegionDocument](foundry.documents.RegionDocument.md)[]) => void | Promise<any>;  
Â Â Â Â Â Â Â Â preConfirm: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [RegionDocument](foundry.documents.RegionDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â preSkip: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [RegionDocument](foundry.documents.RegionDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md);  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â reject: (error: Error) => void;  
Â Â Â Â Â Â Â Â resolve: (document: [RegionDocument](foundry.documents.RegionDocument.md) | null) => void;  
Â Â Â Â Â Â Â Â rotationNotification: boolean;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapes: BaseShapeData[];  
Â Â Â Â }  
Â Â Â Â | null = null

The placement context.

### `Internal`\_shapeClipboard

\_shapeClipboard: { cut: boolean; shape: any } = ...

The shape clipboard.

### `Internal`\_throttleRotateMany

\_throttleRotateMany: (options: object) => Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> = ...

A throttled function that rotates many placeables.

Inherited from ShapeLayerMixin(PlaceablesLayer).\_throttleRotateMany

### `Internal`\_togglePaletteVisible

\_togglePaletteVisible: boolean

Is the palette toggle visible?

### clipboard

clipboard: { cut: boolean; objects: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[] } = ...

Keep track of objects copied with CTRL+C/X which can be pasted later.

Inherited from ShapeLayerMixin(PlaceablesLayer).clipboard

### eventMode

eventMode: string = "passive"

Inherited from ShapeLayerMixin(PlaceablesLayer).eventMode

### highlightObjects

highlightObjects: boolean = false

Track whether "highlight all objects" is currently active

Inherited from ShapeLayerMixin(PlaceablesLayer).highlightObjects

### history

history: [CanvasHistoryEvent](../interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.md)[] = []

Keep track of history so that CTRL+Z can undo changes.

Inherited from ShapeLayerMixin(PlaceablesLayer).history

### objects

objects: Container<DisplayObject> | null = null

Placeable Layer Objects

Inherited from ShapeLayerMixin(PlaceablesLayer).objects

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from ShapeLayerMixin(PlaceablesLayer).options

### preview

preview: Container<DisplayObject> | null = null

Preview Object Placement

Inherited from ShapeLayerMixin(PlaceablesLayer).preview

### quadtree

quadtree: [Quadtree](foundry.canvas.geometry.Quadtree.md) | null = ...

A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.

Inherited from ShapeLayerMixin(PlaceablesLayer).quadtree

### `Static`documentName

documentName: string = "Region"

#### Inherit Doc

Overrides ShapeLayerMixin(PlaceablesLayer).documentName

### `Static`paletteClass

paletteClass: typeof [RegionPalette](foundry.applications.sheets.palette.RegionPalette.md) = RegionPalette

#### Inherit Doc

## Accessors

### active

* get active(): boolean

  Is this layer currently active

  #### Returns boolean

  Inherited from ShapeLayerMixin(PlaceablesLayer).active

### controlled

* get controlled(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An Array of placeable objects in this layer which have the \_controlled attribute

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Inherited from ShapeLayerMixin(PlaceablesLayer).controlled

### controlledObjects

* get controlledObjects(): Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Track the set of PlaceableObjects on this layer which are currently controlled.

  #### Returns Map<string, [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Inherited from ShapeLayerMixin(PlaceablesLayer).controlledObjects

### documentCollection

* get documentCollection(): [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

  Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene

  #### Returns [DocumentCollection](foundry.documents.abstract.DocumentCollection.md)<any> | null

  Inherited from ShapeLayerMixin(PlaceablesLayer).documentCollection

### hasPreview

* get hasPreview(): boolean

  To know wheter this layer has a preview object or not.

  #### Returns boolean

  Inherited from ShapeLayerMixin(PlaceablesLayer).hasPreview

### hookName

* get hookName(): string

  #### Returns string

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).hookName

### hover

* get hover(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

  Track the PlaceableObject on this layer which is currently hovered upon.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | null

  Inherited from ShapeLayerMixin(PlaceablesLayer).hover

### hud

* get hud(): [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

  If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance

  #### Returns [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.md)<any, any, any> | null

  Inherited from ShapeLayerMixin(PlaceablesLayer).hud

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).name

### paletteCreateData

* get paletteCreateData(): object

  The default creation data sourced from this layer's palette, if it has one.

  #### Returns object

  Inherited from ShapeLayerMixin(PlaceablesLayer).paletteCreateData

### placeables

* get placeables(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  A convenience method for accessing the placeable object instances contained in this layer

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Inherited from ShapeLayerMixin(PlaceablesLayer).placeables

### templateMode

* get templateMode(): boolean

  Is Measured Template Mode enabled?

  #### Returns boolean

### `Static`instance

* get instance(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Return a reference to the active instance of this canvas layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)

  Inherited from ShapeLayerMixin(PlaceablesLayer).instance

### `Static`layerOptions

* get layerOptions(): object

  #### Returns object

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).layerOptions

### `Static`placeableClass

* get placeableClass(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from ShapeLayerMixin(PlaceablesLayer).placeableClass

### `Static`TOGGLE\_PALETTE

* get TOGGLE\_PALETTE(): Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  The shared palette tool.

  #### Returns Partial<[SceneControlTool](../interfaces/foundry.SceneControlTool.md)>

  Inherited from ShapeLayerMixin(PlaceablesLayer).TOGGLE\_PALETTE

## Methods

### \_activate

* \_activate(): void

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_activate

### \_cancelPlacement

* \_cancelPlacement(): void

  `Internal`

  Cancel the placement.

  #### Returns void

### \_canDragLeftStart

* \_canDragLeftStart(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_canDragLeftStart

### \_commitDragLeftDrop

* \_commitDragLeftDrop(event: any): Promise<void>

  #### Parameters

  + event: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_commitDragLeftDrop

### \_confirmDeleteKey

* \_confirmDeleteKey(documents: any): true | Promise<boolean>

  #### Parameters

  + documents: any

  #### Returns true | Promise<boolean>

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_confirmDeleteKey

### \_createDragPreviewData

* \_createDragPreviewData(  
  Â Â Â Â event: any,  
  ): {  
  Â Â Â Â color: any;  
  Â Â Â Â displayMeasurements: boolean;  
  Â Â Â Â highlightMode: string;  
  Â Â Â Â levels: (string | null)[];  
  Â Â Â Â name: any;  
  Â Â Â Â ownership: {};  
  Â Â Â Â restriction: { enabled: boolean; type: string };  
  Â Â Â Â visibility: 2;  
  }

  #### Parameters

  + event: any

  #### Returns { Â Â Â Â color: any; Â Â Â Â displayMeasurements: boolean; Â Â Â Â highlightMode: string; Â Â Â Â levels: (string | null)[]; Â Â Â Â name: any; Â Â Â Â ownership: {}; Â Â Â Â restriction: { enabled: boolean; type: string }; Â Â Â Â visibility: 2; }

  Overrides ShapeLayerMixin(PlaceablesLayer).\_createDragPreviewData

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_createPreview

### \_deactivate

* \_deactivate(): void

  #### Returns void

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_deactivate

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_draw

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_getCopyableObjects

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_getMovableObjects

### \_highlightObjects

* \_highlightObjects(active: any): void

  #### Parameters

  + active: any

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_highlightObjects

### \_highlightShape

* \_highlightShape(shape: any): void

  `Internal`

  Highlight the shape or clear the highlight.

  #### Parameters

  + shape: any

    The shape to highlight, or null to clear the highlight

  #### Returns void

### \_onClickLeft

* \_onClickLeft(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onClickLeft

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onClickLeft2

### \_onClickRight

* \_onClickRight(event: any): false | undefined

  #### Parameters

  + event: any

  #### Returns false | undefined

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onClickRight

### \_onCopyKey

* \_onCopyKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onCopyKey

### \_onCutKey

* \_onCutKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onCutKey

### \_onDeleteKey

* \_onDeleteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onDeleteKey

### \_onDismissKey

* \_onDismissKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onDismissKey

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onDragLeftCancel

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onDragLeftDrop

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onDragLeftMove

### \_onDragLeftStart

* \_onDragLeftStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onDragLeftStart

### \_onMouseWheel

* \_onMouseWheel(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onMouseWheel

### \_onPasteKey

* \_onPasteKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides ShapeLayerMixin(PlaceablesLayer).\_onPasteKey

### \_onSelectAllKey

* \_onSelectAllKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onSelectAllKey

### \_onUndoKey

* \_onUndoKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onUndoKey

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_prepareKeyboardMovementUpdates

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_prepareKeyboardRotationUpdates

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_sendToBackOrBringToFront

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_tearDown

### \_updateDragPreview

* \_updateDragPreview(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).\_updateDragPreview

### \_updateMouseWheelShape

* \_updateMouseWheelShape(event: WheelEvent): void

  Rotate the shape of the preview.

  #### Parameters

  + event: WheelEvent

    The mouse wheel event

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_updateMouseWheelShape

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).activate

### clearPreviewContainer

* clearPreviewContainer(): void

  Clear the contents of the preview container, restoring visibility of original (non-preview) objects.

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).clearPreviewContainer

### controlAll

* controlAll(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  Acquire control over all PlaceableObject instances which are visible and controllable within the layer.

  #### Parameters

  + `Optional`options: object

    Options passed to the control method of each object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects that were controlled

  Inherited from ShapeLayerMixin(PlaceablesLayer).controlAll

### controllableObjects

* controllableObjects(): Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  Iterates over placeable objects that are eligible for control/select.

  #### Returns Generator<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md), any, any>

  #### Yields

  A placeable object

  Inherited from ShapeLayerMixin(PlaceablesLayer).controllableObjects

### copyObjects

* copyObjects(options: any): readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  #### Parameters

  + options: any

  #### Returns readonly [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).copyObjects

### createObject

* createObject(document: ClientDocument): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Draw a single placeable object

  #### Parameters

  + document: ClientDocument

    The Document instance used to create the placeable object

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from ShapeLayerMixin(PlaceablesLayer).createObject

### deactivate

* deactivate(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  Deactivate the InteractionLayer, removing interactivity from its children.

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  The layer instance, now inactive

  Inherited from ShapeLayerMixin(PlaceablesLayer).deactivate

### deleteAll

* deleteAll(): Promise<Document[]>

  A helper method to prompt for deletion of all (owned) PlaceableObject instances within the Scene.
  Renders a confirmation dialogue to confirm with the requester that all objects will be deleted.

  #### Returns Promise<Document[]>

  An array of Document objects which were deleted by the operation

  Inherited from ShapeLayerMixin(PlaceablesLayer).deleteAll

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from ShapeLayerMixin(PlaceablesLayer).draw

### get

* get(objectId: string): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Get a PlaceableObject contained in this layer by its ID.
  Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.

  #### Parameters

  + objectId: string

    The ID of the contained object to retrieve

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The object instance, or undefined

  Inherited from ShapeLayerMixin(PlaceablesLayer).get

### getMaxSort

* getMaxSort(): number

  Get the maximum sort value of all placeables.

  #### Returns number

  The maximum sort value (-Infinity if there are no objects)

  Inherited from ShapeLayerMixin(PlaceablesLayer).getMaxSort

### getSnappedPoint

* getSnappedPoint(point: any): [Point](../interfaces/foundry.types.Point.md)

  #### Parameters

  + point: any

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  Inherited from ShapeLayerMixin(PlaceablesLayer).getSnappedPoint

### getZIndex

* getZIndex(): any

  #### Returns any

  Overrides ShapeLayerMixin(PlaceablesLayer).getZIndex

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).moveMany

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).pasteObjects

### placeRegion

* placeRegion(  
  Â Â Â Â data: Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)>,  
  Â Â Â Â options?: [RegionPlacementOptions](../interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md),  
  ): Promise<[RegionDocument](foundry.documents.RegionDocument.md) | null>

  Place a Region at the cursor.
  The Region can have multiple shapes but must have at least one.
  Each shape is placed one after the other in the given order.
  Only one Region can be placed at a time.
  The placed Region shapes can be rotated with the mouse wheel unless `allowRotation` is false.
  Left-click confirms the placement of a shape. Right-click skips the placement of a shape.
  The Region layer is activated unless the Token layer is active.

  #### Parameters

  + data: Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)>

    The data of the Region to place
  + `Optional`options: [RegionPlacementOptions](../interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md) = {}

    Additional options

  #### Returns Promise<[RegionDocument](foundry.documents.RegionDocument.md) | null>

  The Region document that was placed or null if

  + the placements of all shapes were skipped unless `allowEmpty` is true,
  + the dismiss key was pressed,
  + the placement was rejected by `preCommit`,
  + the game was paused, the user is not a GM, and the `create` option is true, or
  + the Region creation was rejected by preCreate.

  #### Example: Attach a 10-foot emanation to a token.

  ```
  await canvas.regions.placeRegion({  
    name: "Aura",  
    shapes: [{  
      type: "emanation",  
      base: {type: "token", x: 0, y: 0, width: 1, height: 1, shape: CONST.TOKEN_SHAPES.RECTANGLE_1},  
      radius: 10 * canvas.dimensions.distancePixels,  
      gridBased: true  
    }],  
    color: game.user.color,  
    restriction: {enabled: true},  
    levels: [canvas.level.id],  
    highlightMode: "coverage",  
    displayMeasurements: true,  
    visibility: CONST.REGION_VISIBILITY.ALWAYS,  
    ownership: {[game.user.id]: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER}  
  }, {attachToToken: true});
  Copy
  ```

  #### Example: Place four 40-foot radius circles.

  ```
  const radius = 40 * canvas.dimensions.distancePixels;  
  const shapes = [];  
  for ( let i = 0; i < 4; i++ ) shapes.push({type: "circle", x: 0, y: 0, radius, gridBased: true});  
  await canvas.regions.placeRegion({  
    name: "Meteor Swarm",  
    shapes,  
    color: game.user.color,  
    restriction: {enabled: true},  
    levels: [canvas.level.id],  
    highlightMode: "coverage",  
    displayMeasurements: true,  
    visibility: CONST.REGION_VISIBILITY.ALWAYS,  
    ownership: {[game.user.id]: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER}  
  });
  Copy
  ```

  #### Example: Spawn 10 tokens with random actor and random rotation in a placed circle with 30 grid units radius.

  ```
  ui.notifications.info("Choose the placement for the spawn area.");  
  const spawnArea = await canvas.regions.placeRegion({  
    name: "Spawn Area",  
    shapes: [{  
      type: "circle",  
      x: 0,  
      y: 0,  
      radius: canvas.dimensions.distancePixels * 30  
    }],  
    restriction: {enabled: true},  
    levels: [canvas.level.id]  
  }, {create: false});  
  if ( spawnArea ) {  
    const {count: numTokensToSpawn=0} = await foundry.applications.api.DialogV2.input({  
     window: {  
        title: "How many tokens to you want to spawn?"  
     },  
     content: `<input type="number" name="count" min="0" step="1" value="10">`  
    }) ?? {};  
    const actors = game.actors.contents;  
    const tokensToSpawn = [];  
    for ( let i = 0; i < numTokensToSpawn; i++ ) {  
      const actor = actors[Math.floor(Math.random() * actors.length)];  
      const token = await actor.getTokenDocument({  
        rotation: Math.random() * 360  
      }, {parent: spawnArea.parent});  
      tokensToSpawn.push(token);  
    }  
    const spawnedTokens = await spawnArea.spawnTokens(tokensToSpawn);  
  }
  Copy
  ```

### placeRegions

* placeRegions(  
  Â Â Â Â data: Iterable<Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)>, any, any>,  
  Â Â Â Â options?: [RegionPlacementOptions](../interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md),  
  ): Promise<[RegionDocument](foundry.documents.RegionDocument.md)[] | null>

  Place one or multiple Regions at the cursor.
  The Region can have multiple shapes but must have at least one.
  Each Region is placed one after the other in the given order.
  Each shape of a Region is placed one after the other in the given order.
  The placed Region shapes can be rotated with the mouse wheel unless `allowRotation` is false.
  Left-click confirms the placement of a shape. Right-click skips the placement of a shape.

  #### Parameters

  + data: Iterable<Partial<[RegionData](../interfaces/foundry.documents.types.RegionData.md)>, any, any>

    The data of the Regions to place
  + `Optional`options: [RegionPlacementOptions](../interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md) = {}

    Additional options

  #### Returns Promise<[RegionDocument](foundry.documents.RegionDocument.md)[] | null>

  The Region documents that were placed and not rejected by preCreate,
  or null if

  + the placement was rejected by `preCommit`,
  + the dismiss key was pressed, or
  + the game was paused, the user is not a GM, and the `create` option is true.

  #### Example: Place three 20-foot token emanations.

  ```
  const data = [];  
  for ( let i = 0; i < 3; i++ ) data.push({  
    name: `Emanation (${i + 1})`,  
    shapes: [{  
      type: "emanation",  
      base: {  
        type: "token",  
        x: 0,  
        y: 0,  
        width: 1,  
        height: 1,  
        shape: CONST.TOKEN_SHAPES.ELLIPSE_1  
      },  
      radius: 20 * canvas.dimensions.distancePixels,  
      gridBased: true  
    }],  
    restriction: {enabled: true},  
    levels: [canvas.level.id],  
    displayMeasurements: true,  
    visibility: CONST.REGION_VISIBILITY.ALWAYS,  
    ownership: {[game.user.id]: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER}  
  });  
  await canvas.regions.placeRegions(data, {attachToToken: true
  Copy
  ```

### releaseAll

* releaseAll(options?: object): number

  Release all controlled PlaceableObject instance from this layer.

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the release method of each object

  #### Returns number

  The number of PlaceableObject instances which were released

  Inherited from ShapeLayerMixin(PlaceablesLayer).releaseAll

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).rotateMany

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).selectObjects

### setAllRenderFlags

* setAllRenderFlags(flags: Record<string, boolean>): void

  Assign a set of render flags to all placeables in this layer.

  #### Parameters

  + flags: Record<string, boolean>

    The flags to set

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).setAllRenderFlags

### storeHistory

* storeHistory(type: any, data: any, options: any): void

  #### Parameters

  + type: any
  + data: any
  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides ShapeLayerMixin(PlaceablesLayer).storeHistory

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from ShapeLayerMixin(PlaceablesLayer).tearDown

### undoHistory

* undoHistory(): Promise<Document[]>

  Undo a change to the objects in this layer
  This method is typically activated using CTRL+Z while the layer is active

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from ShapeLayerMixin(PlaceablesLayer).undoHistory

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).updateAll

### viewedDocuments

* viewedDocuments(): Generator<any, void, unknown>

  Iterate over all documents which are viewed in the current Level.

  #### Returns Generator<any, void, unknown>

  #### Yields

  Inherited from ShapeLayerMixin(PlaceablesLayer).viewedDocuments

### `Protected`\_cancelMouseWheel

* \_cancelMouseWheel(): void

  `Protected`

  Cancel mouse wheel rotation.

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_cancelMouseWheel

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_canvasCoordinatesFromDrop

### `Protected`\_createDragShapeData

* \_createDragShapeData(event: FederatedEvent<UIEvent | PixiTouch>): object

  `Protected`

  Create the shape data from the drag start event.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event

  #### Returns object

  The initial shape data

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_createDragShapeData

### `Protected`\_isCreationToolActive

* \_isCreationToolActive(): boolean

  `Protected`

  Is a creation tool active?

  #### Returns boolean

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_isCreationToolActive

### `Protected`\_onClickRight2

* \_onClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onClickRight2

### `Protected`\_onCycleViewKey

* \_onCycleViewKey(event: KeyboardEvent): boolean

  `Protected`

  Handle a Cycle View keypress while this layer is active.

  #### Parameters

  + event: KeyboardEvent

    The cycle-view key press event

  #### Returns boolean

  Was the event handled?

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onCycleViewKey

### `Protected`\_onUndoCreate

* \_onUndoCreate(event: Event): Promise<Document[]>

  `Protected`

  Undo creation with deletion workflow

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onUndoCreate

### `Protected`\_onUndoDelete

* \_onUndoDelete(event: Event): Promise<Document[]>

  `Protected`

  Undo deletion with creation workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onUndoDelete

### `Protected`\_onUndoUpdate

* \_onUndoUpdate(event: Event): Promise<Document[]>

  `Protected`

  Undo updates with update workflow.

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_onUndoUpdate

### `Protected`\_prepareMouseWheelUpdate

* \_prepareMouseWheelUpdate(): object | [data: object, options?: object]

  `Protected`

  Prepare the database update that should occur as the result of a mouse wheel rotation.

  #### Returns object | [data: object, options?: object]

  The update data and options (optional)

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_prepareMouseWheelUpdate

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

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_storeHistory

### `Protected`\_updateMouseWheelPreview

* \_updateMouseWheelPreview(): void

  `Protected`

  Update the mouse wheel rotation preview.

  #### Returns void

  Inherited from ShapeLayerMixin(PlaceablesLayer).\_updateMouseWheelPreview

### `Static`prepareSceneControls

* prepareSceneControls(): {  
  Â Â Â Â activeTool: string;  
  Â Â Â Â icon: string;  
  Â Â Â Â layer: string;  
  Â Â Â Â name: string;  
  Â Â Â Â onChange: (event: any, active: any) => void;  
  Â Â Â Â onToolChange: (event: any, tool: any, active: any) => void;  
  Â Â Â Â order: number;  
  Â Â Â Â title: string;  
  Â Â Â Â tools: {  
  Â Â Â Â Â Â Â Â circle: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { radius: number; type: string; x: number; y: number };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â clear: {  
  Â Â Â Â Â Â Â Â Â Â Â Â button: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => any;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â cone: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â angle: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â ellipse: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radiusX: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radiusY: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â emanation: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â base: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â height: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: 0  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â | 4;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â hole: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â line: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â length: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: any;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â polygon: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { points: number[]; type: string };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â rectangle: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â height: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â ring: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â shapeData: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â innerWidth: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â outerWidth: any;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
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
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â templateMode: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
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
  Â Â Â Â Â Â Â Â Â Â Â Â visible: any;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â };  
  Â Â Â Â visible: boolean;  
  }

  #### Returns { Â Â Â Â activeTool: string; Â Â Â Â icon: string; Â Â Â Â layer: string; Â Â Â Â name: string; Â Â Â Â onChange: (event: any, active: any) => void; Â Â Â Â onToolChange: (event: any, tool: any, active: any) => void; Â Â Â Â order: number; Â Â Â Â title: string; Â Â Â Â tools: { Â Â Â Â Â Â Â Â circle: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { radius: number; type: string; x: number; y: number }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â clear: { Â Â Â Â Â Â Â Â Â Â Â Â button: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: () => any; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â cone: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â angle: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â ellipse: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radiusX: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radiusY: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â emanation: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â base: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â shape: 0 Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â | 4; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â hole: { Â Â Â Â Â Â Â Â Â Â Â Â active: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â line: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â length: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: any; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â polygon: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { points: number[]; type: string }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â rectangle: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â width: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â ring: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â creation: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â innerWidth: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â outerWidth: any; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â radius: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â type: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â x: number; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â y: number; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â select: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â snap: { Â Â Â Â Â Â Â Â Â Â Â Â active: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => any; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â templateMode: { Â Â Â Â Â Â Â Â Â Â Â Â active: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â togglePalette: { Â Â Â Â Â Â Â Â Â Â Â Â active?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â button?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â control?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â createData?: object; Â Â Â Â Â Â Â Â Â Â Â Â creation?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon?: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name?: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange?: (event: Event, active: boolean) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â shapeData?: object; Â Â Â Â Â Â Â Â Â Â Â Â title?: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip?: [ToolclipConfiguration](../interfaces/foundry.ToolclipConfiguration.md); Â Â Â Â Â Â Â Â Â Â Â Â visible: any; Â Â Â Â Â Â Â Â }; Â Â Â Â }; Â Â Â Â visible: boolean; }

  Overrides ShapeLayerMixin(PlaceablesLayer).prepareSceneControls