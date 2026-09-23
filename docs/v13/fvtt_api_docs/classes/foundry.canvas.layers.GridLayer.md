---
title: "GridLayer | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.layers.GridLayer.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [layers](../modules/foundry.canvas.layers.html)
* [GridLayer](foundry.canvas.layers.GridLayer.html)

# Class GridLayer

A CanvasLayer responsible for drawing a square grid

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.layers.GridLayer))

* [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)
  + GridLayer

##### Index

### Properties

[highlight](foundry.canvas.layers.GridLayer.html#highlight)
[highlightLayers](foundry.canvas.layers.GridLayer.html#highlightlayers)
[interactiveChildren](foundry.canvas.layers.GridLayer.html#interactivechildren)
[mesh](foundry.canvas.layers.GridLayer.html#mesh)
[options](foundry.canvas.layers.GridLayer.html#options)

### Accessors

[hookName](foundry.canvas.layers.GridLayer.html#hookname)
[name](foundry.canvas.layers.GridLayer.html#name)
[instance](foundry.canvas.layers.GridLayer.html#instance)
[layerOptions](foundry.canvas.layers.GridLayer.html#layeroptions)

### Methods

[\_draw](foundry.canvas.layers.GridLayer.html#_draw)
[addHighlightLayer](foundry.canvas.layers.GridLayer.html#addhighlightlayer)
[clearHighlightLayer](foundry.canvas.layers.GridLayer.html#clearhighlightlayer)
[destroyHighlightLayer](foundry.canvas.layers.GridLayer.html#destroyhighlightlayer)
[draw](foundry.canvas.layers.GridLayer.html#draw)
[getHighlightLayer](foundry.canvas.layers.GridLayer.html#gethighlightlayer)
[highlightPosition](foundry.canvas.layers.GridLayer.html#highlightposition)
[initializeMesh](foundry.canvas.layers.GridLayer.html#initializemesh)
[tearDown](foundry.canvas.layers.GridLayer.html#teardown)
[\_drawMesh](foundry.canvas.layers.GridLayer.html#_drawmesh)
[\_tearDown](foundry.canvas.layers.GridLayer.html#_teardown)

## Properties

### highlight

highlight: Container<DisplayObject>

The Grid Highlight container

### highlightLayers

highlightLayers: Record<string, [GridHighlight](foundry.canvas.containers.GridHighlight.html)> = {}

Map named highlight layers

### interactiveChildren

interactiveChildren: boolean = false

Whether this event target has any children that need UI events. This can be used optimize event propagation.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[interactiveChildren](foundry.canvas.layers.CanvasLayer.html#interactivechildren)

### mesh

mesh: [GridMesh](foundry.canvas.containers.GridMesh.html)

The grid mesh.

### options

options: { name: string } = ...

Options for this layer instance.

Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[options](foundry.canvas.layers.CanvasLayer.html#options)

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

  Overrides [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_draw](foundry.canvas.layers.CanvasLayer.html#_draw)

### addHighlightLayer

* addHighlightLayer(name: string): [GridHighlight](foundry.canvas.containers.GridHighlight.html)

  Define a new Highlight graphic

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns [GridHighlight](foundry.canvas.containers.GridHighlight.html)

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

* draw(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Draw the canvas layer, rendering its internal components and returning a Promise.
  The Promise resolves to the drawn layer once its contents are successfully rendered.

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is drawn

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[draw](foundry.canvas.layers.CanvasLayer.html#draw)

### getHighlightLayer

* getHighlightLayer(name: string): [GridHighlight](foundry.canvas.containers.GridHighlight.html)

  Obtain the highlight layer graphic by name

  #### Parameters

  + name: string

    The name for the referenced highlight layer

  #### Returns [GridHighlight](foundry.canvas.containers.GridHighlight.html)

### highlightPosition

* highlightPosition(  
  Â Â Â Â name: string,  
  Â Â Â Â options: {  
  Â Â Â Â Â Â Â Â alpha?: number;  
  Â Â Â Â Â Â Â Â border?: null | ColorSource;  
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
    Â Â Â Â border?: null | ColorSource;  
    Â Â Â Â color?: ColorSource;  
    Â Â Â Â shape?: Polygon;  
    Â Â Â Â x?: number;  
    Â Â Â Â y?: number;  
    }

    If gridless you need to pass `shape` but not `x` and `y`.
    - If not gridless you need to pass `x` and `y`, but not `shape`.

    - ##### `Optional`alpha?: number

      The opacity of the highlight
    - ##### `Optional`border?: null | ColorSource

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

* tearDown(options?: object): Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Deconstruct data used in the current layer in preparation to re-draw the canvas

  #### Parameters

  + `Optional`options: object = {}

    Options which configure how the layer is deconstructed

  #### Returns Promise<[CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[tearDown](foundry.canvas.layers.CanvasLayer.html#teardown)

### `Protected`\_drawMesh

* \_drawMesh(): Promise<[GridMesh](foundry.canvas.containers.GridMesh.html)>

  `Protected`

  Creates the grid mesh.

  #### Returns Promise<[GridMesh](foundry.canvas.containers.GridMesh.html)>

### `Protected`\_tearDown

* \_tearDown(options: object): Promise<void>

  `Protected`

  The inner \_tearDown method which may be customized by each CanvasLayer subclass.

  #### Parameters

  + options: object

    Options which configure how the layer is deconstructed

  #### Returns Promise<void>

  Inherited from [CanvasLayer](foundry.canvas.layers.CanvasLayer.html).[\_tearDown](foundry.canvas.layers.CanvasLayer.html#_teardown)