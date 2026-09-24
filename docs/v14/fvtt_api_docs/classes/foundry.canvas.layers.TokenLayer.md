---
title: "TokenLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.TokenLayer.html"
category: "classes"
---

# Class TokenLayer

The Tokens Container.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.TokenLayer))

* [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)
  + TokenLayer

##### Index

### Properties

[\_configPreview](#_configpreview)
[\_draggedToken](#_draggedtoken)
[\_dragMovementAction](#_dragmovementaction)
[\_movementPlanningContext](#_movementplanningcontext)
[\_placementContext](#_placementcontext)
[\_rulerPaths](#_rulerpaths)
[\_tabIndex](#_tabindex)
[\_throttleRotateMany](#_throttlerotatemany)
[clipboard](#clipboard)
[eventMode](#eventmode)
[highlightObjects](#highlightobjects)
[history](#history)
[objects](#objects)
[options](#options)
[preview](#preview)
[quadtree](#quadtree)
[turnMarkers](#turnmarkers)
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
[occlusionMode](#occlusionmode)
[ownedTokens](#ownedtokens)
[paletteCreateData](#palettecreatedata)
[placeables](#placeables)
[instance](#instance)
[layerOptions](#layeroptions)
[placeableClass](#placeableclass)
[TOGGLE\_PALETTE](#toggle_palette)

### Methods

[\_activate](#_activate)
[\_cancelMovementPlanning](#_cancelmovementplanning)
[\_cancelPlacement](#_cancelplacement)
[\_canDragLeftStart](#_candragleftstart)
[\_confirmDeleteKey](#_confirmdeletekey)
[\_createPreview](#_createpreview)
[\_deactivate](#_deactivate)
[\_draw](#_draw)
[\_getCopyableObjects](#_getcopyableobjects)
[\_getMovableObjects](#_getmovableobjects)
[\_highlightObjects](#_highlightobjects)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight](#_onclickright)
[\_onClickRight2](#_onclickright2)
[\_onCopyKey](#_oncopykey)
[\_onCutKey](#_oncutkey)
[\_onCycleViewKey](#_oncycleviewkey)
[\_onDeleteKey](#_ondeletekey)
[\_onDismissKey](#_ondismisskey)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragLeftStart](#_ondragleftstart)
[\_onDropActiveEffect](#_ondropactiveeffect)
[\_onDropActorData](#_ondropactordata)
[\_onMouseWheel](#_onmousewheel)
[\_onPasteKey](#_onpastekey)
[\_onSelectAllKey](#_onselectallkey)
[\_onUndoKey](#_onundokey)
[\_prepareKeyboardMovementUpdates](#_preparekeyboardmovementupdates)
[\_prepareKeyboardRotationUpdates](#_preparekeyboardrotationupdates)
[\_sendToBackOrBringToFront](#_sendtobackorbringtofront)
[\_tearDown](#_teardown)
[\_updatePlannedMovements](#_updateplannedmovements)
[activate](#activate)
[clearPreviewContainer](#clearpreviewcontainer)
[concludeAnimation](#concludeanimation)
[controlAll](#controlall)
[controllableObjects](#controllableobjects)
[copyObjects](#copyobjects)
[createObject](#createobject)
[cycleTokens](#cycletokens)
[deactivate](#deactivate)
[deleteAll](#deleteall)
[draw](#draw)
[get](#get)
[getMaxSort](#getmaxsort)
[getSnappedPoint](#getsnappedpoint)
[getZIndex](#getzindex)
[moveMany](#movemany)
[pasteObjects](#pasteobjects)
[placeTokens](#placetokens)
[recalculatePlannedMovementPaths](#recalculateplannedmovementpaths)
[releaseAll](#releaseall)
[rotateMany](#rotatemany)
[selectObjects](#selectobjects)
[setAllRenderFlags](#setallrenderflags)
[setTargets](#settargets)
[storeHistory](#storehistory)
[targetObjects](#targetobjects)
[tearDown](#teardown)
[undoHistory](#undohistory)
[updateAll](#updateall)
[viewedDocuments](#vieweddocuments)
[\_canvasCoordinatesFromDrop](#_canvascoordinatesfromdrop)
[\_commitDragLeftDrop](#_commitdragleftdrop)
[\_createDragPreviewData](#_createdragpreviewdata)
[\_getOccludableTokens](#_getoccludabletokens)
[\_isCreationToolActive](#_iscreationtoolactive)
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

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_configPreview](foundry.canvas.layers.PlaceablesLayer.md#_configpreview)

### `Internal`\_draggedToken

\_draggedToken: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md) | null = null

The Token that the drag workflow was initiated on, if there's a drag workflow in progress.
Set in [foundry.canvas.placeables.Token#\_onDragLeftStart](foundry.canvas.placeables.Token.md#_ondragleftstart) and
[foundry.canvas.placeables.Token#\_onDragLeftCancel](foundry.canvas.placeables.Token.md#_ondragleftcancel).

### `Internal`\_dragMovementAction

\_dragMovementAction: string | null = null

The currently selected movement action override.

### `Internal`\_movementPlanningContext

\_movementPlanningContext:  
Â Â Â Â | {  
Â Â Â Â Â Â Â Â allowedActions: string[]  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â Â Â Â Â constrainOptions: Omit<  
Â Â Â Â Â Â Â Â Â Â Â Â TokenConstrainMovementPathOptions,  
Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â Â Â Â Â | "history"  
Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â Â Â Â Â >;  
Â Â Â Â Â Â Â Â direct: boolean;  
Â Â Â Â Â Â Â Â maxCost: number;  
Â Â Â Â Â Â Â Â maxDistance: number;  
Â Â Â Â Â Â Â Â measureOptions: Omit<TokenMeasureMovementPathOptions, "preview">;  
Â Â Â Â Â Â Â Â minCost: number;  
Â Â Â Â Â Â Â Â minDistance: number;  
Â Â Â Â Â Â Â Â moveOptions: Omit<  
Â Â Â Â Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
Â Â Â Â Â Â Â Â Â Â Â Â | "id"  
Â Â Â Â Â Â Â Â Â Â Â Â | "method"  
Â Â Â Â Â Â Â Â Â Â Â Â | "terrainOptions"  
Â Â Â Â Â Â Â Â Â Â Â Â | "constrainOptions"  
Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions"  
Â Â Â Â Â Â Â Â Â Â Â Â | "planned",  
Â Â Â Â Â Â Â Â >;  
Â Â Â Â Â Â Â Â object: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
Â Â Â Â Â Â Â Â pathfindingOptions: Omit<  
Â Â Â Â Â Â Â Â Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md),  
Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â Â Â Â Â | "terrainOptions"  
Â Â Â Â Â Â Â Â Â Â Â Â | "constrainOptions"  
Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â Â Â Â Â >;  
Â Â Â Â Â Â Â Â preventDrop: boolean;  
Â Â Â Â Â Â Â Â reject: (error: Error) => void;  
Â Â Â Â Â Â Â Â resolve: (  
Â Â Â Â Â Â Â Â Â Â Â Â document:  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â | {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â destination: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â id: string;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[];  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â }  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â | null,  
Â Â Â Â Â Â Â Â ) => void;  
Â Â Â Â Â Â Â Â result: | {  
Â Â Â Â Â Â Â Â Â Â Â Â destination: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
Â Â Â Â Â Â Â Â Â Â Â Â id: string;  
Â Â Â Â Â Â Â Â Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
Â Â Â Â Â Â Â Â Â Â Â Â waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[];  
Â Â Â Â Â Â Â Â }  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â Â Â Â Â terrainOptions: Omit<TokenCreateTerrainMovementPathOptions, "preview">;  
Â Â Â Â Â Â Â Â violations: string[];  
Â Â Â Â }  
Â Â Â Â | null = null

The movement planning context.

### `Internal`\_placementContext

\_placementContext:  
Â Â Â Â | {  
Â Â Â Â Â Â Â Â allowRotation: boolean;  
Â Â Â Â Â Â Â Â create: boolean;  
Â Â Â Â Â Â Â Â createOptions: Partial<Omit<DatabaseCreateOperation, "parent">>;  
Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â onChange: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => void;  
Â Â Â Â Â Â Â Â onMove: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â position: Point;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â snap: boolean;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â onRotate: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: WheelEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â precise: boolean;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â placed: [TokenDocument](foundry.documents.TokenDocument.md)[];  
Â Â Â Â Â Â Â Â preCommit: (documents: readonly [TokenDocument](foundry.documents.TokenDocument.md)[]) => void | Promise<any>;  
Â Â Â Â Â Â Â Â preConfirm: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â preSkip: (  
Â Â Â Â Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
Â Â Â Â Â Â Â Â Â Â Â Â },  
Â Â Â Â Â Â Â Â ) => boolean  
Â Â Â Â Â Â Â Â | void;  
Â Â Â Â Â Â Â Â previews: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)[];  
Â Â Â Â Â Â Â Â reject: (error: Error) => void;  
Â Â Â Â Â Â Â Â resolve: (document: [TokenDocument](foundry.documents.TokenDocument.md)[]) => void;  
Â Â Â Â Â Â Â Â rotationNotification: boolean;  
Â Â Â Â }  
Â Â Â Â | null = null

The placement context.

### `Internal`\_rulerPaths

\_rulerPaths: Container<DisplayObject>

The ruler paths.

### `Internal`\_tabIndex

\_tabIndex: number | null = null

The current index position in the tab cycle

### `Internal`\_throttleRotateMany

\_throttleRotateMany: (options: object) => Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]> = ...

A throttled function that rotates many placeables.

Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_throttleRotateMany](foundry.canvas.layers.PlaceablesLayer.md#_throttlerotatemany)

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

### turnMarkers

turnMarkers: Set<[canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)> = ...

A Set of Token objects which currently display a combat turn marker.

### `Static`documentName

documentName: string = "Token"

A reference to the named Document type which is contained within this Canvas Layer.

Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[documentName](foundry.canvas.layers.PlaceablesLayer.md#documentname)

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

* get hud(): [TokenHUD](foundry.applications.hud.TokenHUD.md)

  #### Returns [TokenHUD](foundry.applications.hud.TokenHUD.md)

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

  The set of tokens that trigger occlusion (a union of [CONST.TOKEN\_OCCLUSION\_MODES](../variables/CONST.TOKEN_OCCLUSION_MODES.md)).

  #### Returns number

### ownedTokens

* get ownedTokens(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)[]

  An Array of tokens which belong to actors which are owned

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)[]

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

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_activate](foundry.canvas.layers.PlaceablesLayer.md#_activate)

### \_cancelMovementPlanning

* \_cancelMovementPlanning(): void

  `Internal`

  Cancel movement planning.

  #### Returns void

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

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_canDragLeftStart](foundry.canvas.layers.PlaceablesLayer.md#_candragleftstart)

### \_confirmDeleteKey

* \_confirmDeleteKey(documents: any): Promise<any>

  #### Parameters

  + documents: any

  #### Returns Promise<any>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_confirmDeleteKey](foundry.canvas.layers.PlaceablesLayer.md#_confirmdeletekey)

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

* \_getCopyableObjects(options: any): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be copied/cut.

  #### Parameters

  + options: any

    Additional options

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects which can be copied/cut

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_getCopyableObjects](foundry.canvas.layers.PlaceablesLayer.md#_getcopyableobjects)

### \_getMovableObjects

* \_getMovableObjects(ids: any, includeLocked: any): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  `Internal`

  An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.

  #### Parameters

  + ids: any

    An explicit array of IDs requested.
  + includeLocked: any

    Include locked objects which would otherwise be ignored?

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

  An array of objects which can be moved or rotated

  #### Throws

  If any explicitly requested ID is not valid

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_getMovableObjects](foundry.canvas.layers.PlaceablesLayer.md#_getmovableobjects)

### \_highlightObjects

* \_highlightObjects(active: any): void

  #### Parameters

  + active: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_highlightObjects](foundry.canvas.layers.PlaceablesLayer.md#_highlightobjects)

### \_onClickLeft

* \_onClickLeft(event: any): any

  #### Parameters

  + event: any

  #### Returns any

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickLeft](foundry.canvas.layers.PlaceablesLayer.md#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  Handle double left-click events which originate from the Canvas stage.

  #### Parameters

  + event: any

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickLeft2](foundry.canvas.layers.PlaceablesLayer.md#_onclickleft2)

### \_onClickRight

* \_onClickRight(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickRight](foundry.canvas.layers.PlaceablesLayer.md#_onclickright)

### \_onClickRight2

* \_onClickRight2(event: any): void

  Handle double right mouse-click events which originate from the Canvas stage.

  #### Parameters

  + event: any

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onClickRight2](foundry.canvas.layers.PlaceablesLayer.md#_onclickright2)

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

### \_onCycleViewKey

* \_onCycleViewKey(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onCycleViewKey](foundry.canvas.layers.PlaceablesLayer.md#_oncycleviewkey)

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

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDismissKey](foundry.canvas.layers.PlaceablesLayer.md#_ondismisskey)

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

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftDrop](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftdrop)

### \_onDragLeftStart

* \_onDragLeftStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftStart](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftstart)

### \_onDropActiveEffect

* \_onDropActiveEffect(  
  Â Â Â Â event: DragEvent,  
  Â Â Â Â data: { type: "ActiveEffect"; uuid: string; x: number; y: number },  
  ): Promise<void>

  `Internal`

  Handle dropping of ActiveEffect data onto a Token, creating a new ActiveEffect on the corresponding Actor.

  #### Parameters

  + event: DragEvent
  + data: { type: "ActiveEffect"; uuid: string; x: number; y: number }

  #### Returns Promise<void>

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

* \_onMouseWheel(event: any): void | Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

  #### Parameters

  + event: any

  #### Returns void | Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]>

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onMouseWheel](foundry.canvas.layers.PlaceablesLayer.md#_onmousewheel)

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

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_prepareKeyboardMovementUpdates](foundry.canvas.layers.PlaceablesLayer.md#_preparekeyboardmovementupdates)

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

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_tearDown](foundry.canvas.layers.PlaceablesLayer.md#_teardown)

### \_updatePlannedMovements

* \_updatePlannedMovements(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â plannedMovements: { [tokenId: string]: [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.md) | null } | null,  
  ): void

  `Internal`

  Handle broadcast planned movement update.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User the planned movement data belongs to
  + plannedMovements: { [tokenId: string]: [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.md) | null } | null

    The planned movement data

  #### Returns void

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

### concludeAnimation

* concludeAnimation(): void

  Immediately conclude the animation of any/all tokens

  #### Returns void

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

### cycleTokens

* cycleTokens(forwards: boolean, reset: boolean): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md) | null

  Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
  Tokens are currently sorted in order of their TokenID

  #### Parameters

  + forwards: boolean

    Which direction to cycle. A truthy value cycles forward, while a false value
    cycles backwards.
  + reset: boolean

    Restart the cycle order back at the beginning?

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md) | null

  The Token object which was cycled to, or null

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

### placeTokens

* placeTokens(  
  Â Â Â Â data: Iterable<Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>, any, any>,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowRotation?: boolean;  
  Â Â Â Â Â Â Â Â create?: boolean;  
  Â Â Â Â Â Â Â Â createOptions?: Partial<Omit<DatabaseCreateOperation, "parent">>;  
  Â Â Â Â Â Â Â Â onChange?: (  
  Â Â Â Â Â Â Â Â Â Â Â Â args: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â },  
  Â Â Â Â Â Â Â Â ) => void;  
  Â Â Â Â Â Â Â Â onMove?: (  
  Â Â Â Â Â Â Â Â Â Â Â Â args: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â position: Point;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â snap: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â },  
  Â Â Â Â Â Â Â Â ) => boolean  
  Â Â Â Â Â Â Â Â | void;  
  Â Â Â Â Â Â Â Â onRotate?: (  
  Â Â Â Â Â Â Â Â Â Â Â Â args: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: WheelEvent;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â precise: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â },  
  Â Â Â Â Â Â Â Â ) => boolean  
  Â Â Â Â Â Â Â Â | void;  
  Â Â Â Â Â Â Â Â preCommit?: (documents: readonly [TokenDocument](foundry.documents.TokenDocument.md)[]) => void | Promise<any>;  
  Â Â Â Â Â Â Â Â preConfirm?: (  
  Â Â Â Â Â Â Â Â Â Â Â Â args: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â },  
  Â Â Â Â Â Â Â Â ) => boolean  
  Â Â Â Â Â Â Â Â | void;  
  Â Â Â Â Â Â Â Â preSkip?: (  
  Â Â Â Â Â Â Â Â Â Â Â Â args: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â },  
  Â Â Â Â Â Â Â Â ) => boolean  
  Â Â Â Â Â Â Â Â | void;  
  Â Â Â Â },  
  ): Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  Place Tokens at the cursor.
  Each Token is placed one after the other in the given order.
  The placed Tokens can be rotated with the mouse wheel unless the `allowRotation` is false.

  #### Parameters

  + data: Iterable<Partial<[TokenData](../interfaces/foundry.documents.types.TokenData.md)>, any, any>

    The data of the Tokens to place
  + `Optional`options: {  
    Â Â Â Â allowRotation?: boolean;  
    Â Â Â Â create?: boolean;  
    Â Â Â Â createOptions?: Partial<Omit<DatabaseCreateOperation, "parent">>;  
    Â Â Â Â onChange?: (  
    Â Â Â Â Â Â Â Â args: {  
    Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
    Â Â Â Â Â Â Â Â },  
    Â Â Â Â ) => void;  
    Â Â Â Â onMove?: (  
    Â Â Â Â Â Â Â Â args: {  
    Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
    Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â position: Point;  
    Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â snap: boolean;  
    Â Â Â Â Â Â Â Â },  
    Â Â Â Â ) => boolean  
    Â Â Â Â | void;  
    Â Â Â Â onRotate?: (  
    Â Â Â Â Â Â Â Â args: {  
    Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â event: WheelEvent;  
    Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â precise: boolean;  
    Â Â Â Â Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md);  
    Â Â Â Â Â Â Â Â },  
    Â Â Â Â ) => boolean  
    Â Â Â Â | void;  
    Â Â Â Â preCommit?: (documents: readonly [TokenDocument](foundry.documents.TokenDocument.md)[]) => void | Promise<any>;  
    Â Â Â Â preConfirm?: (  
    Â Â Â Â Â Â Â Â args: {  
    Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
    Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
    Â Â Â Â Â Â Â Â },  
    Â Â Â Â ) => boolean  
    Â Â Â Â | void;  
    Â Â Â Â preSkip?: (  
    Â Â Â Â Â Â Â Â args: {  
    Â Â Â Â Â Â Â Â Â Â Â Â count: number;  
    Â Â Â Â Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md);  
    Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
    Â Â Â Â Â Â Â Â Â Â Â Â index: number;  
    Â Â Â Â Â Â Â Â },  
    Â Â Â Â ) => boolean  
    Â Â Â Â | void;  
    } = {}

    Additional options

    - ##### `Optional`allowRotation?: boolean

      Allow rotation of the Tokens? Default: `true`.
    - ##### `Optional`create?: boolean

      Create the Tokens? If false, the preview documents is returned.
      Default: `true`. Non-GMs cannot create Tokens while the game is paused.
    - ##### `Optional`createOptions?: Partial<Omit<DatabaseCreateOperation, "parent">>

      Optional creation options.
      By default the creation option `controlObject` is true.
    - ##### `Optional`onChange?: ( Â Â Â Â args: { Â Â Â Â Â Â Â Â count: number; Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md); Â Â Â Â Â Â Â Â index: number; Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md); Â Â Â Â }, ) => void

      Called when the position or rotation of the Token that is placed has changed.
    - ##### `Optional`onMove?: ( Â Â Â Â args: { Â Â Â Â Â Â Â Â count: number; Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md); Â Â Â Â Â Â Â Â event: FederatedEvent; Â Â Â Â Â Â Â Â index: number; Â Â Â Â Â Â Â Â position: Point; Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md); Â Â Â Â Â Â Â Â snap: boolean; Â Â Â Â }, ) => boolean | void

      Called when the pointer is moved and after starting the placement of the next Token on confirm and skip. This
      callback replaces the default behavior if false is returned. If false is returned, the callback should modify
      the passed `document` and set the render flags on `preview` corresponding to the applied changes.
    - ##### `Optional`onRotate?: ( Â Â Â Â args: { Â Â Â Â Â Â Â Â count: number; Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md); Â Â Â Â Â Â Â Â event: WheelEvent; Â Â Â Â Â Â Â Â index: number; Â Â Â Â Â Â Â Â precise: boolean; Â Â Â Â Â Â Â Â preview: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md); Â Â Â Â }, ) => boolean | void

      Called when the mouse wheel is scrolled. This callback replaces the default behavior if false is returned.
      If false is returned, the callback should modify the `document` and set the render flags on `preview`
      corresponding to the applied changes.
    - ##### `Optional`preCommit?: (documents: readonly [TokenDocument](foundry.documents.TokenDocument.md)[]) => void | Promise<any>

      Called at the end of the workflow before the Token documents are created/returned. This callback may return
      a falsely value other than undefined to prevent the Tokens from being created/returned.
    - ##### `Optional`preConfirm?: ( Â Â Â Â args: { Â Â Â Â Â Â Â Â count: number; Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md); Â Â Â Â Â Â Â Â event: FederatedEvent; Â Â Â Â Â Â Â Â index: number; Â Â Â Â }, ) => boolean | void

      Called before the confirmation (left-click) of a Token placement. This callback may return false to prevent
      the placement of the Token and display a warning.
    - ##### `Optional`preSkip?: ( Â Â Â Â args: { Â Â Â Â Â Â Â Â count: number; Â Â Â Â Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md); Â Â Â Â Â Â Â Â event: FederatedEvent; Â Â Â Â Â Â Â Â index: number; Â Â Â Â }, ) => boolean | void

      Called before skipping (right-click) of a Token placement. This callback may return false to prevent
      skipping of the Token and display a warning.

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.md)[]>

  The Token documents that were placed and not rejected by preCreate.
  If the dismiss key was pressed, the placement was rejected by `preCommit`, or the game was paused, the user is
  not a GM, and the `create` option is true, and empty array is returned.

  #### Example: Place 3 tokens with random actor.

  ```
  const {count: numTokensToSpawn=3} = await foundry.applications.api.DialogV2.input({  
   window: {  
      title: "How many tokens to you want to place?"  
   },  
   content: `<input type="number" name="count" min="0" step="1" value="3">`  
  }) ?? {};  
  const actors = game.actors.contents;  
  const tokensToPlace = [];  
  for ( let i = 0; i < numTokensToSpawn; i++ ) {  
    const actor = actors[Math.floor(Math.random() * actors.length)];  
    const token = await actor.getTokenDocument({level: canvas.level.id}, {parent: canvas.scene});  
    tokensToPlace.push(token.toObject());  
  }  
  const placedTokens = await canvas.tokens.placeTokens(tokensToPlace);
  Copy
  ```

### recalculatePlannedMovementPaths

* recalculatePlannedMovementPaths(): void

  Recalculate the planned movement paths of all Tokens for the current User.

  #### Returns void

### releaseAll

* releaseAll(options?: object): number

  Release all controlled PlaceableObject instance from this layer.

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the release method of each object

  #### Returns number

  The number of PlaceableObject instances which were released

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[releaseAll](foundry.canvas.layers.PlaceablesLayer.md#releaseall)

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

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[storeHistory](foundry.canvas.layers.PlaceablesLayer.md#storehistory)

### targetObjects

* targetObjects(rectangle: [Rectangle](../interfaces/foundry.types.Rectangle.md), options?: { releaseOthers?: boolean }): void

  Target all Token instances which fall within a coordinate rectangle.

  #### Parameters

  + rectangle: [Rectangle](../interfaces/foundry.types.Rectangle.md)

    The selection rectangle.
  + `Optional`options: { releaseOthers?: boolean } = {}

    Additional options to configure targeting behaviour.

    - ##### `Optional`releaseOthers?: boolean

      Whether or not to release other targeted tokens

  #### Returns void

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

### `Protected`\_createDragPreviewData

* \_createDragPreviewData(event: FederatedEvent<UIEvent | PixiTouch>): object

  `Protected`

  Create the preview document data from the drag start event.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event

  #### Returns object

  The initial document data

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_createDragPreviewData](foundry.canvas.layers.PlaceablesLayer.md#_createdragpreviewdata)

### `Protected`\_getOccludableTokens

* \_getOccludableTokens(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)[]

  `Protected`

  Provide an array of Tokens which are eligible subjects for tile occlusion.
  By default, only tokens which are currently controlled or owned by a player are included as subjects.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)[]

### `Protected`\_isCreationToolActive

* \_isCreationToolActive(): boolean

  `Protected`

  Is a creation tool active?

  #### Returns boolean

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_isCreationToolActive](foundry.canvas.layers.PlaceablesLayer.md#_iscreationtoolactive)

### `Protected`\_onDragLeftMove

* \_onDragLeftMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Continue a left-click drag workflow originating from the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The PIXI InteractionEvent which wraps a PointerEvent

  #### Returns void

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onDragLeftMove](foundry.canvas.layers.PlaceablesLayer.md#_ondragleftmove)

### `Protected`\_onUndoCreate

* \_onUndoCreate(event: Event): Promise<Document[]>

  `Protected`

  Undo creation with deletion workflow

  #### Parameters

  + event: Event

  #### Returns Promise<Document[]>

  An array of documents which were modified by the undo operation

  Inherited from [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[\_onUndoCreate](foundry.canvas.layers.PlaceablesLayer.md#_onundocreate)

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

### `Static`prepareSceneControls

* prepareSceneControls(): {  
  Â Â Â Â activeTool: string;  
  Â Â Â Â icon: string;  
  Â Â Â Â name: string;  
  Â Â Â Â onChange: (event: any, active: any) => void;  
  Â Â Â Â onToolChange: (\_event: any, tool: any, active: any) => void;  
  Â Â Â Â order: number;  
  Â Â Â Â title: string;  
  Â Â Â Â tools: {  
  Â Â Â Â Â Â Â Â ruler: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â select: {  
  Â Â Â Â Â Â Â Â Â Â Â Â control: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (\_event: any, \_active: any) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: {  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[];  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â target: {  
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
  Â Â Â Â Â Â Â Â unconstrainedMovement: {  
  Â Â Â Â Â Â Â Â Â Â Â Â active: any;  
  Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â name: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void;  
  Â Â Â Â Â Â Â Â Â Â Â Â order: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â title: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] };  
  Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â };  
  }

  #### Returns { Â Â Â Â activeTool: string; Â Â Â Â icon: string; Â Â Â Â name: string; Â Â Â Â onChange: (event: any, active: any) => void; Â Â Â Â onToolChange: (\_event: any, tool: any, active: any) => void; Â Â Â Â order: number; Â Â Â Â title: string; Â Â Â Â tools: { Â Â Â Â Â Â Â Â ruler: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â select: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (\_event: any, \_active: any) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â target: { Â Â Â Â Â Â Â Â Â Â Â Â control: boolean; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â interaction: boolean; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â heading: string; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[]; Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â src: string; Â Â Â Â Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â unconstrainedMovement: { Â Â Â Â Â Â Â Â Â Â Â Â active: any; Â Â Â Â Â Â Â Â Â Â Â Â icon: string; Â Â Â Â Â Â Â Â Â Â Â Â name: string; Â Â Â Â Â Â Â Â Â Â Â Â onChange: (event: any, toggled: any) => void; Â Â Â Â Â Â Â Â Â Â Â Â order: number; Â Â Â Â Â Â Â Â Â Â Â Â title: string; Â Â Â Â Â Â Â Â Â Â Â Â toggle: boolean; Â Â Â Â Â Â Â Â Â Â Â Â toolclip: { heading: string; items: [ToolclipConfigurationItem](../interfaces/foundry.ToolclipConfigurationItem.md)[] }; Â Â Â Â Â Â Â Â Â Â Â Â visible: boolean; Â Â Â Â Â Â Â Â }; Â Â Â Â }; }

  Overrides [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md).[prepareSceneControls](foundry.canvas.layers.PlaceablesLayer.md#preparescenecontrols)