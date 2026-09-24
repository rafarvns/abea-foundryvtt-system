---
title: "ShapeControls | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.ShapeControls.html"
category: "classes"
---

# Class ShapeControls<DocumentClass, ObjectClass, LayerClass, ShapeClass>

Controls for a shape.

#### Template: DocumentClass

#### Template: ObjectClass

#### Template: LayerClass

#### Template: ShapeClass

#### Type Parameters

* DocumentClass extends [Document](foundry.abstract.Document.md)
* ObjectClass extends [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)
* LayerClass extends [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)
* ShapeClass extends [BaseShapeData](foundry.data.BaseShapeData.md) = [BaseShapeData](foundry.data.BaseShapeData.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.containers.ShapeControls))

* ShapeControls
  + [DrawingShapeControls](foundry.canvas.placeables.drawings.DrawingShapeControls.md)
  + [AmbientLightShapeControls](foundry.canvas.placeables.lights.AmbientLightShapeControls.md)
  + [RegionShapeControls](foundry.canvas.placeables.regions.RegionShapeControls.md)
  + [AmbientSoundShapeControls](foundry.canvas.placeables.sounds.AmbientSoundShapeControls.md)
  + [default](foundry.default-2.md)

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

[\_onDragDrop](#_ondragdrop)
[applyRenderFlags](#applyrenderflags)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[\_canDragStart](#_candragstart)
[\_clear](#_clear)
[\_draw](#_draw)
[\_drawShape](#_drawshape)
[\_onClick2](#_onclick2)
[\_onDragCancel](#_ondragcancel)
[\_onDragMove](#_ondragmove)
[\_onDragStart](#_ondragstart)
[\_prepareDragDropUpdate](#_preparedragdropupdate)
[\_refresh](#_refresh)
[\_updateDragPreview](#_updatedragpreview)
[\_createDragPreview](#_createdragpreview)

## Constructors

### constructor

* new ShapeControls<  
  Â Â Â Â [DocumentClass](#constructorshapecontrolsdocumentclass) extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â [ObjectClass](#constructorshapecontrolsobjectclass) extends [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md),  
  Â Â Â Â [LayerClass](#constructorshapecontrolslayerclass) extends [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md),  
  Â Â Â Â [ShapeClass](#constructorshapecontrolsshapeclass) extends [BaseShapeData](foundry.data.BaseShapeData.md) = [BaseShapeData](foundry.data.BaseShapeData.md),  
  >(  
  Â Â Â Â shape: [ShapeClass](#shapeclass),  
  ): ShapeControls<[DocumentClass](#documentclass), [ObjectClass](#objectclass), [LayerClass](#layerclass), [ShapeClass](#shapeclass)>

  #### Type Parameters

  + DocumentClass extends [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>
  + ObjectClass extends [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)
  + LayerClass extends [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)
  + ShapeClass extends [BaseShapeData](foundry.data.BaseShapeData.md) = [BaseShapeData](foundry.data.BaseShapeData.md)

  #### Parameters

  + shape: [ShapeClass](#shapeclass)

    The shape.

  #### Returns ShapeControls<[DocumentClass](#documentclass), [ObjectClass](#objectclass), [LayerClass](#layerclass), [ShapeClass](#shapeclass)>

  Overrides RenderFlagsMixin(PIXI.Container).constructor

## Properties

### editable

editable: boolean = true

Are the controls editable?

#### Default Value

```
true
Copy
```

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin(PIXI.Container).renderFlags

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "INTERFACE"

Overrides RenderFlagsMixin(PIXI.Container).RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: { redraw: { propagate: string[] }; refresh: {} } = ...

Overrides RenderFlagsMixin(PIXI.Container).RENDER\_FLAGS

## Accessors

### border

* get border(): Graphics

  The border of the shape.

  #### Returns Graphics

### dashed

* get dashed(): boolean

  Is the border dashed?

  #### Returns boolean

  #### Default Value

  ```
  false
  Copy
  ```

### document

* get document(): [DocumentClass](#documentclass)

  The Document of this shape.

  #### Returns [DocumentClass](#documentclass)

### handles

* get handles(): Container<[ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md)>

  The handles of the shape.

  #### Returns Container<[ShapeControlsHandle](foundry.canvas.containers.ShapeControlsHandle.md)>

### layer

* get layer(): [LayerClass](#layerclass)

  The PlaceableLayer of this shape.

  #### Returns [LayerClass](#layerclass)

### object

* get object(): [ObjectClass](#objectclass)

  The PlaceableObject of this shape.

  #### Returns [ObjectClass](#objectclass)

### shape

* get shape(): [ShapeClass](#shapeclass)

  The shape.

  #### Returns [ShapeClass](#shapeclass)

### tint

* get tint(): number

  The tint applied to these controls.

  #### Returns number

  #### Default Value

  ```
  0xFFFFFF
  Copy
  ```

## Methods

### \_onDragDrop

* \_onDragDrop(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  #### Inherit Doc

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Overrides RenderFlagsMixin(PIXI.Container).applyRenderFlags

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### draw

* draw(): Promise<  
  Â Â Â Â ShapeControls<[DocumentClass](#documentclass), [ObjectClass](#objectclass), [LayerClass](#layerclass), [ShapeClass](#shapeclass)>,  
  >

  Draw the visualization of these controls.

  #### Returns Promise<ShapeControls<[DocumentClass](#documentclass), [ObjectClass](#objectclass), [LayerClass](#layerclass), [ShapeClass](#shapeclass)>>

### refresh

* refresh(): void

  Refresh the visualization of these controls.

  #### Returns void

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

### `Protected`\_clear

* \_clear(): void

  `Protected`

  Clear these controls.

  #### Returns void

### `Protected`\_draw

* \_draw(): Promise<void>

  `Protected`

  Draw these controls.

  #### Returns Promise<void>

### `Protected`\_drawShape

* \_drawShape(graphics: Graphics): void

  `Protected`

  Draw the shape.

  #### Parameters

  + graphics: Graphics

  #### Returns void

### `Protected`\_onClick2

* \_onClick2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the double left-click event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

### `Protected`\_onDragCancel

* \_onDragCancel(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the drag cancel event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

### `Protected`\_onDragMove

* \_onDragMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the drag move event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

### `Protected`\_onDragStart

* \_onDragStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Handle the drag start event of a handle.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

### `Protected`\_prepareDragDropUpdate

* \_prepareDragDropUpdate(  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  ): object | [data: object, options?: object]

  `Protected`

  Prepare the database update that should occur as the result of a drop operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns object | [data: object, options?: object]

  The update data and options (optional)

### `Protected`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the visualization of these controls.

  #### Returns void

### `Protected`\_updateDragPreview

* \_updateDragPreview(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Update the drag preview. Called when the shape has changed.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

### `Static`\_createDragPreview

* \_createDragPreview(object: ObjectClass): ObjectClass

  `Internal`

  Create and draw the drag preview for a placeable object.

  #### Parameters

  + object: ObjectClass

    The original placeable object

  #### Returns ObjectClass

  The preview of the placeable object.