---
title: "GridLayer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.GridLayer.html"
category: "classes"
---

# Class GridLayer

A CanvasLayer responsible for drawing a square grid

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.GridLayer))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)
  + GridLayer

##### Index

### Properties

[highlight](#highlight)
[highlightLayers](#highlightlayers)
[mesh](#mesh)
[options](#options)

### Accessors

[hookName](#hookname)
[name](#name)
[instance](#instance)
[layerOptions](#layeroptions)

### Methods

[\_draw](#_draw)
[addHighlightLayer](#addhighlightlayer)
[clearHighlightLayer](#clearhighlightlayer)
[destroyHighlightLayer](#destroyhighlightlayer)
[draw](#draw)
[getHighlightLayer](#gethighlightlayer)
[getZIndex](#getzindex)
[highlightPosition](#highlightposition)
[initializeMesh](#initializemesh)
[tearDown](#teardown)
[\_drawMesh](#_drawmesh)
[\_tearDown](#_teardown)

## Properties

### highlight

highlight: Container<DisplayObject>

The Grid Highlight container

### highlightLayers

highlightLayers: Record<string, [GridHighlight](foundry.canvas.containers.GridHighlight.md)> = {}

Map named highlight layers

### mesh

mesh: [GridMesh](foundry.canvas.containers.GridMesh.md)

The grid mesh.

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[options](foundry.canvas.layers.CanvasLayer.md#options)

## Accessors

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasLayer.hookName

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

  Inherited from CanvasLayer.name

### `Static`instance

* get instance(): any

  #### Returns any

  Overrides CanvasLayer.instance

### `Static`layerOptions

* get layerOptions(): object

  Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.

  #### Returns object

  Overrides CanvasLayer.layerOptions

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_draw](foundry.canvas.layers.CanvasLayer.md#_draw)

### addHighlightLayer

* addHighlightLayer(name: string): [GridHighlight](foundry.canvas.containers.GridHighlight.md)

  Define a new Highlight graphic

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns [GridHighlight](foundry.canvas.containers.GridHighlight.md)

### clearHighlightLayer

* clearHighlightLayer(name: string): void

  Clear a specific Highlight graphic

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns void

### destroyHighlightLayer

* destroyHighlightLayer(name: string): void

  Destroy a specific Highlight graphic

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns void

### draw

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[draw](foundry.canvas.layers.CanvasLayer.md#draw)

### getHighlightLayer

* getHighlightLayer(name: string): void | [GridHighlight](foundry.canvas.containers.GridHighlight.md)

  Obtain the highlight layer graphic by name

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns void | [GridHighlight](foundry.canvas.containers.GridHighlight.md)

### getZIndex

* getZIndex(): number

  Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.

  #### Returns number

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[getZIndex](foundry.canvas.layers.CanvasLayer.md#getzindex)

### highlightPosition

* highlightPosition(  
  Â Â Â Â name: string,  
  Â Â Â Â options: {  
  Â Â Â Â Â Â Â Â alpha?: number;  
  Â Â Â Â Â Â Â Â border?: ColorSource | null;  
  Â Â Â Â Â Â Â Â color?: ColorSource;  
  Â Â Â Â Â Â Â Â shape?: Polygon;  
  Â Â Â Â Â Â Â Â x?: number;  
  Â Â Â Â Â Â Â Â y?: number;  
  Â Â Â Â },  
  ): void

  Add highlighting for a specific grid position to a named highlight graphic

  #### Parameters

  + name: string

    The name for the referenced highlight layer
  + options: {  
    Â Â Â Â alpha?: number;  
    Â Â Â Â border?: ColorSource | null;  
    Â Â Â Â color?: ColorSource;  
    Â Â Â Â shape?: Polygon;  
    Â Â Â Â x?: number;  
    Â Â Â Â y?: number;  
    }

    If gridless you need to pass `shape` but not `x` and `y`.
    - If not gridless you need to pass `x` and `y`, but not `shape`.

    - ##### `Optional`alpha?: number

      The opacity of the highlight
    - ##### `Optional`border?: ColorSource | null

      The border color of the highlight
    - ##### `Optional`color?: ColorSource

      The fill color of the highlight
    - ##### `Optional`shape?: Polygon

      A predefined shape to highlight
    - ##### `Optional`x?: number

      The x-coordinate of the highlighted position
    - ##### `Optional`y?: number

      The y-coordinate of the highlighted position

  #### Returns void

### initializeMesh

* initializeMesh(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â alpha?: number;  
  Â Â Â Â Â Â Â Â color?: string;  
  Â Â Â Â Â Â Â Â style?: string;  
  Â Â Â Â Â Â Â Â thickness?: number;  
  Â Â Â Â },  
  ): void

  Initialize the grid mesh appearance and configure the grid shader.

  #### Parameters

  + options: { alpha?: number; color?: string; style?: string; thickness?: number } = {}
    - ##### `Optional`alpha?: number

      The grid alpha
    - ##### `Optional`color?: string

      The grid color
    - ##### `Optional`style?: string

      The grid style
    - ##### `Optional`thickness?: number

      The grid thickness

  #### Returns void

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[tearDown](foundry.canvas.layers.CanvasLayer.md#teardown)

### `Protected`\_drawMesh

* \_drawMesh(): Promise<[GridMesh](foundry.canvas.containers.GridMesh.md)>

  `Protected`

  Creates the grid mesh.

  #### Returns Promise<[GridMesh](foundry.canvas.containers.GridMesh.md)>

### `Protected`\_tearDown

* \_tearDown(options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.md).[\_tearDown](foundry.canvas.layers.CanvasLayer.md#_teardown)