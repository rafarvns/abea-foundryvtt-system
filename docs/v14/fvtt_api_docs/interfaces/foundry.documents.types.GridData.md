---
title: "GridData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.GridData.html"
category: "interfaces"
---

# Interface GridData

interface GridData {  
Â Â Â Â [alpha](#alpha)?: number;  
Â Â Â Â [color](#color)?: string;  
Â Â Â Â [distance](#distance)?: number;  
Â Â Â Â [size](#size)?: number;  
Â Â Â Â [style](#style)?: string;  
Â Â Â Â [thickness](#thickness)?: number;  
Â Â Â Â [type](#type)?: number;  
Â Â Â Â [units](#units)?: string;  
}

##### Index

### Properties

[alpha?](#alpha)
[color?](#color)
[distance?](#distance)
[size?](#size)
[style?](#style)
[thickness?](#thickness)
[type?](#type)
[units?](#units)

## Properties

### `Optional`alpha

alpha?: number

A number between 0 and 1 for the opacity of the grid lines.

### `Optional`color

color?: string

A string representing the color used to render the grid lines.

### `Optional`distance

distance?: number

The number of distance units which are represented by a single grid space.

### `Optional`size

size?: number

The grid size which represents the width (or height) of a single grid space.

### `Optional`style

style?: string

The line style of the grid.

### `Optional`thickness

thickness?: number

The thickness of the grid lines.

### `Optional`type

type?: number

The type of grid, a number from CONST.GRID\_TYPES.

### `Optional`units

units?: string

A label for the units of measure which are used for grid distance.