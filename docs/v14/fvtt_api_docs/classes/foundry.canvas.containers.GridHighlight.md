---
title: "GridHighlight | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.GridHighlight.html"
category: "classes"
---

# Class GridHighlight

A special Graphics class which handles Grid layer highlighting

#### Hierarchy

* SmoothGraphics
  + GridHighlight

##### Index

### Properties

[name](#name)
[positions](#positions)

### Methods

[clear](#clear)
[destroy](#destroy)
[highlight](#highlight)

## Properties

### name

name: string

Track the Grid Highlight name

### positions

positions: Set<any>

Track distinct positions which have already been highlighted

## Methods

### clear

* clear(): any

  #### Returns any

  #### Inherit Doc

### destroy

* destroy(...args: any[]): any

  #### Parameters

  + ...args: any[]

  #### Returns any

  #### Inherit Doc

### highlight

* highlight(x: number, y: number): boolean

  Record a position that is highlighted and return whether or not it should be rendered

  #### Parameters

  + x: number

    The x-coordinate to highlight
  + y: number

    The y-coordinate to highlight

  #### Returns boolean

  Whether or not to draw the highlight for this location