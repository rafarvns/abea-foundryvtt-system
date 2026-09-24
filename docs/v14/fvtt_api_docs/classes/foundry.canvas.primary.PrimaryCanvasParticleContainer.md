---
title: "PrimaryCanvasParticleContainer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.primary.PrimaryCanvasParticleContainer.html"
category: "classes"
---

# Class PrimaryCanvasParticleContainer

A lightweight primary-canvas container designed for particle effects.
This container intentionally avoids any internal sorting or depth participation. Children render in insertion order.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.primary.PrimaryCanvasParticleContainer))

* [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md)
  + PrimaryCanvasParticleContainer

##### Index

### Properties

[\_canvasTransformID](#_canvastransformid)
[canvasBounds](#canvasbounds)
[canvasTransform](#canvastransform)
[\_canvasBounds](#_canvasbounds)
[\_canvasBoundsID](#_canvasboundsid)
[\_inPrimary](#_inprimary)

### Accessors

[elevation](#elevation)
[inPrimary](#inprimary)
[shouldRenderDepth](#shouldrenderdepth)
[sort](#sort)
[sortLayer](#sortlayer)
[zIndex](#zindex)

### Methods

[\_onAddedPrimary](#_onaddedprimary)
[\_onElevationChange](#_onelevationchange)
[\_onRemovedPrimary](#_onremovedprimary)
[\_shouldRenderDepth](#_shouldrenderdepth)
[containsCanvasPoint](#containscanvaspoint)
[renderDepthData](#renderdepthdata)
[sortChildren](#sortchildren)
[updateCanvasTransform](#updatecanvastransform)
[\_calculateCanvasBounds](#_calculatecanvasbounds)
[\_onAdded](#_onadded)
[\_onCanvasBoundsUpdate](#_oncanvasboundsupdate)
[\_onCanvasTransformUpdate](#_oncanvastransformupdate)
[\_onRemoved](#_onremoved)

## Properties

### `Internal`\_canvasTransformID

\_canvasTransformID: number = -1

The update ID of canvas transform matrix.

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_canvasTransformID](foundry.canvas.primary.PrimaryCanvasContainer.md#_canvastransformid)

### canvasBounds

canvasBounds: Rectangle = ...

The canvas bounds of this object.

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[canvasBounds](foundry.canvas.primary.PrimaryCanvasContainer.md#canvasbounds)

### canvasTransform

canvasTransform: Matrix = ...

The transform matrix from local space to canvas space.

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[canvasTransform](foundry.canvas.primary.PrimaryCanvasContainer.md#canvastransform)

### `Protected`\_canvasBounds

\_canvasBounds: Bounds = ...

The canvas bounds of this object.

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_canvasBounds](foundry.canvas.primary.PrimaryCanvasContainer.md#_canvasbounds)

### `Protected`\_canvasBoundsID

\_canvasBoundsID: number = 0

The update ID of the canvas bounds.
Increment to force recalculation.

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_canvasBoundsID](foundry.canvas.primary.PrimaryCanvasContainer.md#_canvasboundsid)

### `Protected`\_inPrimary

\_inPrimary: boolean = false

Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_inPrimary](foundry.canvas.primary.PrimaryCanvasContainer.md#_inprimary)

## Accessors

### elevation

* get elevation(): number

  The elevation of this container.

  #### Returns number

  Inherited from PrimaryCanvasContainer.elevation

### inPrimary

* get inPrimary(): boolean

  Is this container in the primary group?

  #### Returns boolean

  Inherited from PrimaryCanvasContainer.inPrimary

### shouldRenderDepth

* get shouldRenderDepth(): boolean

  To know if this container has at least one children that should render its depth.

  #### Returns boolean

  Inherited from PrimaryCanvasContainer.shouldRenderDepth

### sort

* get sort(): number

  A key which resolves ties amongst objects at the same elevation within the same layer.

  #### Returns number

  Inherited from PrimaryCanvasContainer.sort

### sortLayer

* get sortLayer(): number

  A key which resolves ties amongst objects at the same elevation of different layers.

  #### Returns number

  Inherited from PrimaryCanvasContainer.sortLayer

### zIndex

* get zIndex(): number

  A key which resolves ties amongst objects at the same elevation within the same layer and same sort.

  #### Returns number

  Inherited from PrimaryCanvasContainer.zIndex

## Methods

### \_onAddedPrimary

* \_onAddedPrimary(): void

  #### Returns void

  Overrides [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onAddedPrimary](foundry.canvas.primary.PrimaryCanvasContainer.md#_onaddedprimary)

### \_onElevationChange

* \_onElevationChange(): void

  #### Returns void

  Overrides [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onElevationChange](foundry.canvas.primary.PrimaryCanvasContainer.md#_onelevationchange)

### \_onRemovedPrimary

* \_onRemovedPrimary(): void

  #### Returns void

  Overrides [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onRemovedPrimary](foundry.canvas.primary.PrimaryCanvasContainer.md#_onremovedprimary)

### \_shouldRenderDepth

* \_shouldRenderDepth(): boolean

  #### Returns boolean

  Overrides [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_shouldRenderDepth](foundry.canvas.primary.PrimaryCanvasContainer.md#_shouldrenderdepth)

### containsCanvasPoint

* containsCanvasPoint(point: IPointData): boolean

  Is the given point in canvas space contained in this object?

  #### Parameters

  + point: IPointData

    The point in canvas space.

  #### Returns boolean

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[containsCanvasPoint](foundry.canvas.primary.PrimaryCanvasContainer.md#containscanvaspoint)

### renderDepthData

* renderDepthData(renderer: Renderer): void

  Render the depth of this object.

  #### Parameters

  + renderer: Renderer

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[renderDepthData](foundry.canvas.primary.PrimaryCanvasContainer.md#renderdepthdata)

### sortChildren

* sortChildren(): void

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[sortChildren](foundry.canvas.primary.PrimaryCanvasContainer.md#sortchildren)

### updateCanvasTransform

* updateCanvasTransform(): void

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[updateCanvasTransform](foundry.canvas.primary.PrimaryCanvasContainer.md#updatecanvastransform)

### `Protected`\_calculateCanvasBounds

* \_calculateCanvasBounds(): void

  `Protected`

  Calculate the canvas bounds of this object.

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_calculateCanvasBounds](foundry.canvas.primary.PrimaryCanvasContainer.md#_calculatecanvasbounds)

### `Protected`\_onAdded

* \_onAdded(parent: Container<DisplayObject>): void

  `Protected`

  Event fired when this container is added to a parent.

  #### Parameters

  + parent: Container<DisplayObject>

    The new parent container.

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onAdded](foundry.canvas.primary.PrimaryCanvasContainer.md#_onadded)

### `Protected`\_onCanvasBoundsUpdate

* \_onCanvasBoundsUpdate(): void

  `Protected`

  Called when the canvas bounds changed.

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onCanvasBoundsUpdate](foundry.canvas.primary.PrimaryCanvasContainer.md#_oncanvasboundsupdate)

### `Protected`\_onCanvasTransformUpdate

* \_onCanvasTransformUpdate(): void

  `Protected`

  Called when the canvas transform changed.

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onCanvasTransformUpdate](foundry.canvas.primary.PrimaryCanvasContainer.md#_oncanvastransformupdate)

### `Protected`\_onRemoved

* \_onRemoved(parent: Container<DisplayObject>): void

  `Protected`

  Event fired when this container is removed from its parent.

  #### Parameters

  + parent: Container<DisplayObject>

    Parent from which the container is removed.

  #### Returns void

  Inherited from [PrimaryCanvasContainer](foundry.canvas.primary.PrimaryCanvasContainer.md).[\_onRemoved](foundry.canvas.primary.PrimaryCanvasContainer.md#_onremoved)