---
title: "RegionAnimationState | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.placeables.types.RegionAnimationState.html"
category: "interfaces"
---

# Interface RegionAnimationState

interface RegionAnimationState {  
Â Â Â Â [area](#area): number;  
Â Â Â Â [bounds](#bounds): Rectangle;  
Â Â Â Â [clipperPaths](#clipperpaths): ClipperPoint[][];  
Â Â Â Â [clipperPolyTree](#clipperpolytree): PolyTree;  
Â Â Â Â [elevation](#elevation): { bottom: number; top: elevation; topInclusive: boolean };  
Â Â Â Â [polygons](#polygons): Polygon;  
Â Â Â Â [polygonTree](#polygontree): PolygonTree;  
Â Â Â Â [shapes](#shapes): readonly BaseShapeData[];  
Â Â Â Â [testPoint](#testpoint): (point: [ElevatedPoint](foundry.types.ElevatedPoint.md)) => boolean;  
Â Â Â Â [triangulation](#triangulation): {  
Â Â Â Â Â Â Â Â indices: Uint16Array | Uint32Array;  
Â Â Â Â Â Â Â Â vertices: Float32Array;  
Â Â Â Â };  
}

##### Index

### Properties

[area](#area)
[bounds](#bounds)
[clipperPaths](#clipperpaths)
[clipperPolyTree](#clipperpolytree)
[elevation](#elevation)
[polygons](#polygons)
[polygonTree](#polygontree)
[shapes](#shapes)
[testPoint](#testpoint)
[triangulation](#triangulation)

## Properties

### area

area: number

### bounds

bounds: Rectangle

### clipperPaths

clipperPaths: ClipperPoint[][]

### clipperPolyTree

clipperPolyTree: PolyTree

### elevation

elevation: { bottom: number; top: elevation; topInclusive: boolean }

### polygons

polygons: Polygon

### polygonTree

polygonTree: PolygonTree

### shapes

shapes: readonly BaseShapeData[]

### testPoint

testPoint: (point: [ElevatedPoint](foundry.types.ElevatedPoint.md)) => boolean

### triangulation

triangulation: { indices: Uint16Array | Uint32Array; vertices: Float32Array }