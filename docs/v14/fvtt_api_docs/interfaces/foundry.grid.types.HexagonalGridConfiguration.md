---
title: "HexagonalGridConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.HexagonalGridConfiguration.html"
category: "interfaces"
---

# Interface HexagonalGridConfiguration

interface HexagonalGridConfiguration {  
Â Â Â Â [alpha](#alpha)?: number;  
Â Â Â Â [color](#color)?: [ColorSource](../types/foundry.types.ColorSource.md);  
Â Â Â Â [columns](#columns)?: boolean;  
Â Â Â Â [diagonals](#diagonals)?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md);  
Â Â Â Â [distance](#distance)?: number;  
Â Â Â Â [even](#even)?: boolean;  
Â Â Â Â [size](#size): number;  
Â Â Â Â [style](#style)?: string;  
Â Â Â Â [thickness](#thickness)?: number;  
Â Â Â Â [units](#units)?: string;  
}

##### Index

### Properties

[alpha?](#alpha)
[color?](#color)
[columns?](#columns)
[diagonals?](#diagonals)
[distance?](#distance)
[even?](#even)
[size](#size)
[style?](#style)
[thickness?](#thickness)
[units?](#units)

## Properties

### `Optional`alpha

alpha?: number

The alpha of the grid. Default: `1`.

### `Optional`color

color?: [ColorSource](../types/foundry.types.ColorSource.md)

The color of the grid. Default: `0x000000`.

### `Optional`columns

columns?: boolean

Is this grid column-based (flat-topped) or row-based (pointy-topped)?
Default: `false`.

### `Optional`diagonals

diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md)

The rule for diagonal measurement (see [CONST.GRID\_DIAGONALS](../variables/CONST.GRID_DIAGONALS.md)).
Default: `CONST.GRID_DIAGONALS.EQUIDISTANT`.

### `Optional`distance

distance?: number

The distance of a grid space in units (a positive number). Default: `1`.

### `Optional`even

even?: boolean

Is this grid even or odd? Default: `false`.

### size

size: number

The size of a grid space in pixels (a positive number).

### `Optional`style

style?: string

The style of the grid. Default: `"solidLines"`.

### `Optional`thickness

thickness?: number

The line thickness of the grid. Default: `1`.

### `Optional`units

units?: string

The units of measurement. Default: `""`.