---
title: "DrawingData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.DrawingData.html"
category: "interfaces"
---

# Interface DrawingData

interface DrawingData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [author](#author): string;  
Â Â Â Â [bezierFactor](#bezierfactor)?: number;  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [fillAlpha](#fillalpha)?: number;  
Â Â Â Â [fillColor](#fillcolor)?: string;  
Â Â Â Â [fillType](#filltype)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [fontFamily](#fontfamily)?: string;  
Â Â Â Â [fontSize](#fontsize)?: number;  
Â Â Â Â [hidden](#hidden)?: boolean;  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [shape](#shape): [ShapeData](../classes/foundry.data.ShapeData.md);  
Â Â Â Â [sort](#sort)?: number;  
Â Â Â Â [strokeAlpha](#strokealpha)?: number;  
Â Â Â Â [strokeColor](#strokecolor)?: number;  
Â Â Â Â [strokeWidth](#strokewidth)?: number;  
Â Â Â Â [text](#text)?: string;  
Â Â Â Â [textAlpha](#textalpha)?: number;  
Â Â Â Â [textColor](#textcolor)?: string;  
Â Â Â Â [texture](#texture)?: string;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[\_id](#_id)
[author](#author)
[bezierFactor?](#bezierfactor)
[elevation?](#elevation)
[fillAlpha?](#fillalpha)
[fillColor?](#fillcolor)
[fillType?](#filltype)
[flags](#flags)
[fontFamily?](#fontfamily)
[fontSize?](#fontsize)
[hidden?](#hidden)
[locked?](#locked)
[name?](#name)
[rotation?](#rotation)
[shape](#shape)
[sort?](#sort)
[strokeAlpha?](#strokealpha)
[strokeColor?](#strokecolor)
[strokeWidth?](#strokewidth)
[text?](#text)
[textAlpha?](#textalpha)
[textColor?](#textcolor)
[texture?](#texture)
[x](#x)
[y](#y)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this BaseDrawing embedded document

### author

author: string

The \_id of the user who created the drawing

### `Optional`bezierFactor

bezierFactor?: number

An amount of bezier smoothing applied, between 0 and 1

### `Optional`elevation

elevation?: number

The elevation of the drawing

### `Optional`fillAlpha

fillAlpha?: number

The opacity of the fill applied to the drawing geometry

### `Optional`fillColor

fillColor?: string

An optional color string with which to fill the drawing geometry

### `Optional`fillType

fillType?: number

The fill type of the drawing shape, a value from CONST.DRAWING\_FILL\_TYPES

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`fontFamily

fontFamily?: string

The font family used to display text within this drawing, defaults to
CONFIG.defaultFontFamily

### `Optional`fontSize

fontSize?: number

The font size used to display text within this drawing

### `Optional`hidden

hidden?: boolean

Is the drawing currently hidden?

### `Optional`locked

locked?: boolean

Is the drawing currently locked?

### `Optional`name

name?: string

An optional name.

### `Optional`rotation

rotation?: number

The angle of rotation for the drawing figure

### shape

shape: [ShapeData](../classes/foundry.data.ShapeData.md)

The geometric shape of the drawing

### `Optional`sort

sort?: number

The z-index of this drawing relative to other siblings

### `Optional`strokeAlpha

strokeAlpha?: number

The opacity of the boundary lines of the drawing geometry

### `Optional`strokeColor

strokeColor?: number

The color of the boundary lines of the drawing geometry

### `Optional`strokeWidth

strokeWidth?: number

The width in pixels of the boundary lines of the drawing geometry

### `Optional`text

text?: string

Optional text which is displayed overtop of the drawing

### `Optional`textAlpha

textAlpha?: number

The opacity of text displayed within this drawing

### `Optional`textColor

textColor?: string

The color of text displayed within this drawing

### `Optional`texture

texture?: string

The path to a tiling image texture used to fill the drawing geometry

### x

x: number

The x-coordinate position of the top-left corner of the drawn shape

### y

y: number

The y-coordinate position of the top-left corner of the drawn shape