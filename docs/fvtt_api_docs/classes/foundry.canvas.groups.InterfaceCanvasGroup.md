---
title: "InterfaceCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.InterfaceCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [InterfaceCanvasGroup](foundry.canvas.groups.InterfaceCanvasGroup.html)

# Class InterfaceCanvasGroup

A container group which displays interface elements rendered above other canvas groups.

#### Hierarchy

* any
  + InterfaceCanvasGroup

##### Index

### Properties

[groupName](foundry.canvas.groups.InterfaceCanvasGroup.html#groupname)

### Methods

[\_draw](foundry.canvas.groups.InterfaceCanvasGroup.html#_draw)
[addDrawing](foundry.canvas.groups.InterfaceCanvasGroup.html#adddrawing)
[createScrollingText](foundry.canvas.groups.InterfaceCanvasGroup.html#createscrollingtext)
[removeDrawing](foundry.canvas.groups.InterfaceCanvasGroup.html#removedrawing)

## Properties

### `Static`groupName

groupName: string = "interface"

Overrides CanvasGroupMixin(PIXI.Container).groupName

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### addDrawing

* addDrawing(drawing: [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)): Graphics

  Add a PrimaryGraphics to the group.

  #### Parameters

  + drawing: [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

    The Drawing being added

  #### Returns Graphics

  The created Graphics instance

### createScrollingText

* createScrollingText(  
  Â Â Â Â origin: Point,  
  Â Â Â Â content: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â anchor?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html);  
  Â Â Â Â Â Â Â Â direction?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html);  
  Â Â Â Â Â Â Â Â distance?: number;  
  Â Â Â Â Â Â Â Â duration?: number;  
  Â Â Â Â Â Â Â Â jitter?: number;  
  Â Â Â Â Â Â Â Â textStyle?: object;  
  Â Â Â Â },  
  ): Promise<void>

  Display scrolling status text originating from an origin point on the Canvas.

  #### Parameters

  + origin: Point

    An origin point where the text should first emerge
  + content: string

    The text content to display
  + `Optional`options: {  
    Â Â Â Â anchor?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html);  
    Â Â Â Â direction?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html);  
    Â Â Â Â distance?: number;  
    Â Â Â Â duration?: number;  
    Â Â Â Â jitter?: number;  
    Â Â Â Â textStyle?: object;  
    } = {}

    Options which customize the text animation

    - ##### `Optional`anchor?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html)

      The original anchor point where the text appears
    - ##### `Optional`direction?: [TextAnchorPoint](../types/CONST.TextAnchorPoint.html)

      The direction in which the text scrolls
    - ##### `Optional`distance?: number

      The distance in pixels that the scrolling text should travel
    - ##### `Optional`duration?: number

      The duration of the scrolling effect in milliseconds
    - ##### `Optional`jitter?: number

      An amount of randomization between [0, 1] applied to the initial position
    - ##### `Optional`textStyle?: object

      Additional parameters of PIXI.TextStyle which are applied to the text

  #### Returns Promise<void>

  A promise that resolves after the scrolling text animation ended.

### removeDrawing

* removeDrawing(drawing: [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)): void

  Remove a PrimaryGraphics from the group.

  #### Parameters

  + drawing: [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Drawing](foundry.canvas.placeables.Drawing.html)

    The Drawing being removed

  #### Returns void