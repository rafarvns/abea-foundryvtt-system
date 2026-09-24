---
title: "PrimaryCanvasContainer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.primary.PrimaryCanvasContainer.html"
category: "classes"
---

# Class PrimaryCanvasContainer

Primary canvas container are reserved for advanced usage.
They allow to group PrimarySpriteMesh in a single Container.
The container elevation is replacing individual sprite elevation.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.primary.PrimaryCanvasContainer))

* PrimaryCanvasContainer
  + [PrimaryCanvasParticleContainer](foundry.canvas.primary.PrimaryCanvasParticleContainer.md)
  + [VFXCanvasContainer](foundry.canvas.vfx.VFXCanvasContainer.md)

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

[containsCanvasPoint](#containscanvaspoint)
[renderDepthData](#renderdepthdata)
[sortChildren](#sortchildren)
[updateCanvasTransform](#updatecanvastransform)
[\_calculateCanvasBounds](#_calculatecanvasbounds)
[\_onAdded](#_onadded)
[\_onAddedPrimary](#_onaddedprimary)
[\_onCanvasBoundsUpdate](#_oncanvasboundsupdate)
[\_onCanvasTransformUpdate](#_oncanvastransformupdate)
[\_onElevationChange](#_onelevationchange)
[\_onRemoved](#_onremoved)
[\_onRemovedPrimary](#_onremovedprimary)
[\_shouldRenderDepth](#_shouldrenderdepth)

## Properties

### `Internal`\_canvasTransformID

\_canvasTransformID: number = -1

The update ID of canvas transform matrix.

Inherited from CanvasTransformMixin(PIXI.Container).\_canvasTransformID

### canvasBounds

canvasBounds: Rectangle = ...

The canvas bounds of this object.

Inherited from CanvasTransformMixin(PIXI.Container).canvasBounds

### canvasTransform

canvasTransform: Matrix = ...

The transform matrix from local space to canvas space.

Inherited from CanvasTransformMixin(PIXI.Container).canvasTransform

### `Protected`\_canvasBounds

\_canvasBounds: Bounds = ...

The canvas bounds of this object.

Inherited from CanvasTransformMixin(PIXI.Container).\_canvasBounds

### `Protected`\_canvasBoundsID

\_canvasBoundsID: number = 0

The update ID of the canvas bounds.
Increment to force recalculation.

Inherited from CanvasTransformMixin(PIXI.Container).\_canvasBoundsID

### `Protected`\_inPrimary

\_inPrimary: boolean = false

## Accessors

### elevation

* get elevation(): number

  The elevation of this container.

  #### Returns number

### inPrimary

* get inPrimary(): boolean

  Is this container in the primary group?

  #### Returns boolean

### shouldRenderDepth

* get shouldRenderDepth(): boolean

  To know if this container has at least one children that should render its depth.

  #### Returns boolean

### sort

* get sort(): number

  A key which resolves ties amongst objects at the same elevation within the same layer.

  #### Returns number

### sortLayer

* get sortLayer(): number

  A key which resolves ties amongst objects at the same elevation of different layers.

  #### Returns number

### zIndex

* get zIndex(): number

  A key which resolves ties amongst objects at the same elevation within the same layer and same sort.

  #### Returns number

## Methods

### containsCanvasPoint

* containsCanvasPoint(point: IPointData): boolean

  Is the given point in canvas space contained in this object?

  #### Parameters

  + point: IPointData

    The point in canvas space.

  #### Returns boolean

  Inherited from CanvasTransformMixin(PIXI.Container).containsCanvasPoint

### renderDepthData

* renderDepthData(renderer: Renderer): void

  Render the depth of this object.

  #### Parameters

  + renderer: Renderer

  #### Returns void

### sortChildren

* sortChildren(): void

  #### Returns void

### updateCanvasTransform

* updateCanvasTransform(): void

  #### Returns void

  Overrides CanvasTransformMixin(PIXI.Container).updateCanvasTransform

### `Protected`\_calculateCanvasBounds

* \_calculateCanvasBounds(): void

  `Protected`

  Calculate the canvas bounds of this object.

  #### Returns void

  Inherited from CanvasTransformMixin(PIXI.Container).\_calculateCanvasBounds

### `Protected`\_onAdded

* \_onAdded(parent: Container<DisplayObject>): void

  `Protected`

  Event fired when this container is added to a parent.

  #### Parameters

  + parent: Container<DisplayObject>

    The new parent container.

  #### Returns void

### `Protected`\_onAddedPrimary

* \_onAddedPrimary(): void

  `Protected`

  Called when the container is now in the primary group.

  #### Returns void

### `Protected`\_onCanvasBoundsUpdate

* \_onCanvasBoundsUpdate(): void

  `Protected`

  Called when the canvas bounds changed.

  #### Returns void

  Inherited from CanvasTransformMixin(PIXI.Container).\_onCanvasBoundsUpdate

### `Protected`\_onCanvasTransformUpdate

* \_onCanvasTransformUpdate(): void

  `Protected`

  Called when the canvas transform changed.

  #### Returns void

  Inherited from CanvasTransformMixin(PIXI.Container).\_onCanvasTransformUpdate

### `Protected`\_onElevationChange

* \_onElevationChange(): void

  `Protected`

  Called when the elevation was changed.

  #### Returns void

### `Protected`\_onRemoved

* \_onRemoved(parent: Container<DisplayObject>): void

  `Protected`

  Event fired when this container is removed from its parent.

  #### Parameters

  + parent: Container<DisplayObject>

    Parent from which the container is removed.

  #### Returns void

### `Protected`\_onRemovedPrimary

* \_onRemovedPrimary(): void

  `Protected`

  Called when the container is no longer in the primary group.

  #### Returns void

### `Protected`\_shouldRenderDepth

* \_shouldRenderDepth(): boolean

  `Protected`

  Does this object render to the depth buffer?

  #### Returns boolean