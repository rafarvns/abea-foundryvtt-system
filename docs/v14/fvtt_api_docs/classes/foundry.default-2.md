---
title: "default | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.default-2.html"
category: "classes"
---

# Class default

Controls for a Tile shape.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.default))

* [ShapeControls](foundry.canvas.containers.ShapeControls.md)
  + default

##### Index

### Constructors

[constructor](#constructor)

### Properties

[editable](#editable)
[renderFlags](#renderflags)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[border](#border)
[dashed](#dashed)
[document](#document)
[handles](#handles)
[layer](#layer)
[object](#object)
[shape](#shape)
[tint](#tint)

### Methods

[\_onClick2](#_onclick2)
[\_onDragDrop](#_ondragdrop)
[\_onDragStart](#_ondragstart)
[\_prepareDragDropUpdate](#_preparedragdropupdate)
[\_updateDragPreview](#_updatedragpreview)
[applyRenderFlags](#applyrenderflags)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[\_canDragStart](#_candragstart)
[\_clear](#_clear)
[\_draw](#_draw)
[\_drawShape](#_drawshape)
[\_onDragCancel](#_ondragcancel)
[\_onDragMove](#_ondragmove)
[\_refresh](#_refresh)
[\_createDragPreview](#_createdragpreview)

## Constructors

### constructor

* new default(shape: [RectangleShapeData](foundry.RectangleShapeData.md)): default

  #### Parameters

  + shape: [RectangleShapeData](foundry.RectangleShapeData.md)

    The shape.

  #### Returns default

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[constructor](foundry.canvas.containers.ShapeControls.md#constructor)

## Properties

### editable

editable: boolean = true

Are the controls editable?

#### Default Value

```
true
Copy
```

Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[editable](foundry.canvas.containers.ShapeControls.md#editable)

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[renderFlags](foundry.canvas.containers.ShapeControls.md#renderflags)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "INTERFACE"

Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[RENDER\_FLAG\_PRIORITY](foundry.canvas.containers.ShapeControls.md#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: { redraw: { propagate: string[] }; refresh: {} } = ...

Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[RENDER\_FLAGS](foundry.canvas.containers.ShapeControls.md#render_flags)

## Accessors

### border

* get border(): Graphics

  The border of the shape.

  #### Returns Graphics

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[border](foundry.canvas.containers.ShapeControls.md#border)

### dashed

* get dashed(): boolean

  Is the border dashed?

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[dashed](foundry.canvas.containers.ShapeControls.md#dashed)

### document

* get document(): [DocumentClass](foundry.canvas.containers.ShapeControls.md#documentclass)

  The Document of this shape.

  #### Returns [DocumentClass](foundry.canvas.containers.ShapeControls.md#documentclass)

  Inherited from ShapeControls.document

### handles

* get handles(): Container<[ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md)>

  The handles of the shape.

  #### Returns Container<[ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md)>

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[handles](foundry.canvas.containers.ShapeControls.md#handles)

### layer

* get layer(): [LayerClass](foundry.canvas.containers.ShapeControls.md#layerclass)

  The PlaceableLayer of this shape.

  #### Returns [LayerClass](foundry.canvas.containers.ShapeControls.md#layerclass)

  Inherited from ShapeControls.layer

### object

* get object(): [ObjectClass](foundry.canvas.containers.ShapeControls.md#objectclass)

  The PlaceableObject of this shape.

  #### Returns [ObjectClass](foundry.canvas.containers.ShapeControls.md#objectclass)

  Inherited from ShapeControls.object

### shape

* get shape(): [ShapeClass](foundry.canvas.containers.ShapeControls.md#shapeclass)

  The shape.

  #### Returns [ShapeClass](foundry.canvas.containers.ShapeControls.md#shapeclass)

  Inherited from ShapeControls.shape

### tint

* get tint(): number

  The tint applied to these controls.

  #### Returns number

  #### Default Value

  ```
  0xFFFFFF
  Copy
  ```

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[tint](foundry.canvas.containers.ShapeControls.md#tint)

## Methods

### \_onClick2

* \_onClick2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_onClick2](foundry.canvas.containers.ShapeControls.md#_onclick2)

### \_onDragDrop

* \_onDragDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

  Overrides [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_onDragDrop](foundry.canvas.containers.ShapeControls.md#_ondragdrop)

### \_onDragStart

* \_onDragStart(event: any): void

  Handle the drag start event of a handle.

  #### Parameters

  + event: any

    The pointer event.

  #### Returns void

  Overrides [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_onDragStart](foundry.canvas.containers.ShapeControls.md#_ondragstart)

### \_prepareDragDropUpdate

* \_prepareDragDropUpdate(  
  Â Â Â Â event: any,  
  ): { height: any; rotation: any; width: any; x: any; y: any }

  #### Parameters

  + event: any

  #### Returns { height: any; rotation: any; width: any; x: any; y: any }

  Overrides [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_prepareDragDropUpdate](foundry.canvas.containers.ShapeControls.md#_preparedragdropupdate)

### \_updateDragPreview

* \_updateDragPreview(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_updateDragPreview](foundry.canvas.containers.ShapeControls.md#_updatedragpreview)

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[applyRenderFlags](foundry.canvas.containers.ShapeControls.md#applyrenderflags)

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[destroy](foundry.canvas.containers.ShapeControls.md#destroy)

### draw

* draw(): Promise<default>

  Draw the visualization of these controls.

  #### Returns Promise<default>

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[draw](foundry.canvas.containers.ShapeControls.md#draw)

### refresh

* refresh(): void

  Refresh the visualization of these controls.

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[refresh](foundry.canvas.containers.ShapeControls.md#refresh)

### `Protected`\_canDragStart

* \_canDragStart(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { notify: boolean },  
  ): boolean

  `Protected`

  Can the handle be dragged?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event
  + `Optional`options: { notify: boolean }

    Options, used internally

  #### Returns boolean

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_canDragStart](foundry.canvas.containers.ShapeControls.md#_candragstart)

### `Protected`\_clear

* \_clear(): void

  `Protected`

  Clear these controls.

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_clear](foundry.canvas.containers.ShapeControls.md#_clear)

### `Protected`\_draw

* \_draw(): Promise<void>

  `Protected`

  Draw these controls.

  #### Returns Promise<void>

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_draw](foundry.canvas.containers.ShapeControls.md#_draw)

### `Protected`\_drawShape

* \_drawShape(graphics: Graphics): void

  `Protected`

  Draw the shape.

  #### Parameters

  + graphics: Graphics

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_drawShape](foundry.canvas.containers.ShapeControls.md#_drawshape)

### `Protected`\_onDragCancel

* \_onDragCancel(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the drag cancel event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_onDragCancel](foundry.canvas.containers.ShapeControls.md#_ondragcancel)

### `Protected`\_onDragMove

* \_onDragMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the drag move event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_onDragMove](foundry.canvas.containers.ShapeControls.md#_ondragmove)

### `Protected`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the visualization of these controls.

  #### Returns void

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_refresh](foundry.canvas.containers.ShapeControls.md#_refresh)

### `Static`\_createDragPreview

* \_createDragPreview(object: ObjectClass): ObjectClass

  `Internal`

  Create and draw the drag preview for a placeable object.

  #### Parameters

  + object: ObjectClass

    The original placeable object

  #### Returns ObjectClass

  The preview of the placeable object.

  Inherited from [ShapeControls](foundry.canvas.containers.ShapeControls.md).[\_createDragPreview](foundry.canvas.containers.ShapeControls.md#_createdragpreview)