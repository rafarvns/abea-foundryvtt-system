---
title: "ShapeControlsHandle | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.ShapeControlsHandle.html"
category: "classes"
---

# Class ShapeControlsHandle

A handle of a shape controls element.

#### Hierarchy

* SmoothGraphics
  + ShapeControlsHandle

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[controls](#controls)
[hovered](#hovered)

### Methods

[draw](#draw)

## Constructors

### constructor

* new ShapeControlsHandle(  
  Â Â Â Â controls: [ShapeControls](foundry.canvas.containers.ShapeControls.md)<any, any, any, [BaseShapeData](foundry.data.BaseShapeData.md)>,  
  Â Â Â Â name: string,  
  ): ShapeControlsHandle

  #### Parameters

  + controls: [ShapeControls](foundry.canvas.containers.ShapeControls.md)<any, any, any, [BaseShapeData](foundry.data.BaseShapeData.md)>

    The controls this handle belongs to.
  + name: string

    The name of this handle.

  #### Returns ShapeControlsHandle

  Overrides PIXI.smooth.SmoothGraphics.constructor

## Accessors

### controls

* get controls(): [ShapeControls](foundry.canvas.containers.ShapeControls.md)<any, any, any, [BaseShapeData](foundry.data.BaseShapeData.md)>

  The controls that this handle belongs to.

  #### Returns [ShapeControls](foundry.canvas.containers.ShapeControls.md)<any, any, any, [BaseShapeData](foundry.data.BaseShapeData.md)>

### hovered

* get hovered(): boolean

  Is hovered?

  #### Returns boolean

## Methods

### draw

* draw(style: { outlineThickness: number; size: number }): Promise<void>

  Draw the handle.

  #### Parameters

  + style: { outlineThickness: number; size: number }

    The style.

  #### Returns Promise<void>