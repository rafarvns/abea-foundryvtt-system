---
title: "SceneDimensions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.SceneDimensions.html"
category: "interfaces"
---

# Interface SceneDimensions

interface SceneDimensions {  
Â Â Â Â [columns](#columns): number;  
Â Â Â Â [distance](#distance): number;  
Â Â Â Â [distancePixels](#distancepixels): number;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [maxR](#maxr): number;  
Â Â Â Â [ratio](#ratio): number;  
Â Â Â Â [rect](#rect): Rectangle;  
Â Â Â Â [rows](#rows): number;  
Â Â Â Â [sceneHeight](#sceneheight): number;  
Â Â Â Â [sceneRect](#scenerect): Rectangle;  
Â Â Â Â [sceneWidth](#scenewidth): number;  
Â Â Â Â [sceneX](#scenex): number;  
Â Â Â Â [sceneY](#sceney): number;  
Â Â Â Â [size](#size): number;  
Â Â Â Â [units](#units): string;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[columns](#columns)
[distance](#distance)
[distancePixels](#distancepixels)
[height](#height)
[maxR](#maxr)
[ratio](#ratio)
[rect](#rect)
[rows](#rows)
[sceneHeight](#sceneheight)
[sceneRect](#scenerect)
[sceneWidth](#scenewidth)
[sceneX](#scenex)
[sceneY](#sceney)
[size](#size)
[units](#units)
[width](#width)

## Properties

### columns

columns: number

The number of grid columns on the canvas.

### distance

distance: number

The number of distance units in a single grid space.

### distancePixels

distancePixels: number

The factor to convert distance units to pixels.

### height

height: number

The height of the canvas.

### maxR

maxR: number

The length of the longest line that can be drawn on the canvas.

### ratio

ratio: number

The aspect ratio of the scene rectangle.

### rect

rect: Rectangle

The canvas rectangle.

### rows

rows: number

The number of grid rows on the canvas.

### sceneHeight

sceneHeight: number

The height of the scene.

### sceneRect

sceneRect: Rectangle

The scene rectangle.

### sceneWidth

sceneWidth: number

The width of the scene.

### sceneX

sceneX: number

The X coordinate of the scene rectangle within the larger canvas.

### sceneY

sceneY: number

The Y coordinate of the scene rectangle within the larger canvas.

### size

size: number

The grid size.

### units

units: string

The units of distance.

### width

width: number

The width of the canvas.