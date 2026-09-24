---
title: "HexagonalGridCube2D | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.HexagonalGridCube2D.html"
category: "interfaces"
---

# Interface HexagonalGridCube2D

2D cube coordinates in a hexagonal grid. q + r + s = 0.

interface HexagonalGridCube2D {  
Â Â Â Â [q](#q): number;  
Â Â Â Â [r](#r): number;  
Â Â Â Â [s](#s): number;  
}

##### Index

### Properties

[q](#q)
[r](#r)
[s](#s)

## Properties

### q

q: number

The coordinate along the E-W (columns) or SW-NE (rows) axis.
Equal to the offset column coordinate if column orientation.

### r

r: number

The coordinate along the NE-SW (columns) or N-S (rows) axis.
Equal to the offset row coordinate if row orientation.

### s

s: number

The coordinate along the SE-NW axis.