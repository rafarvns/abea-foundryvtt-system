---
title: "ParticleGeneratorLocalArea | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorLocalArea.html"
category: "interfaces"
---

# Interface ParticleGeneratorLocalArea

interface ParticleGeneratorLocalArea {  
Â Â Â Â [affectRotation](#affectrotation)?: boolean;  
Â Â Â Â [ax](#ax)?: number;  
Â Â Â Â [ay](#ay)?: number;  
Â Â Â Â [bx](#bx)?: number;  
Â Â Â Â [by](#by)?: number;  
Â Â Â Â [cosRotation](#cosrotation)?: number;  
Â Â Â Â [cumulativeLengths](#cumulativelengths)?: number[];  
Â Â Â Â [data](#data)?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md) | [PolygonTree](../classes/foundry.data.PolygonTree.md);  
Â Â Â Â [fallbackPoint](#fallbackpoint)?: IPointData | null;  
Â Â Â Â [holeAreaScale](#holeareascale)?: number;  
Â Â Â Â [maxAngle](#maxangle)?: number;  
Â Â Â Â [minAngle](#minangle)?: number;  
Â Â Â Â [points](#points)?: [ParticleGeneratorPointList](../types/foundry.canvas.animation.types.ParticleGeneratorPointList.md);  
Â Â Â Â [radiusX](#radiusx)?: number;  
Â Â Â Â [radiusY](#radiusy)?: number;  
Â Â Â Â [rect](#rect)?: Rectangle;  
Â Â Â Â [sampleMode](#samplemode)?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md);  
Â Â Â Â [segments](#segments)?: [ParticleGeneratorPolylineSegment](foundry.canvas.animation.types.ParticleGeneratorPolylineSegment.md)[];  
Â Â Â Â [shapeRotation](#shaperotation)?: number;  
Â Â Â Â [sinRotation](#sinrotation)?: number;  
Â Â Â Â [totalLength](#totallength)?: number;  
Â Â Â Â [type](#type):  
Â Â Â Â Â Â Â Â | "point"  
Â Â Â Â Â Â Â Â | "shape"  
Â Â Â Â Â Â Â Â | "polygonTree"  
Â Â Â Â Â Â Â Â | "points"  
Â Â Â Â Â Â Â Â | "polyline"  
Â Â Â Â Â Â Â Â | "ellipse"  
Â Â Â Â Â Â Â Â | "ambientRect"  
Â Â Â Â Â Â Â Â | "line";  
Â Â Â Â [x](#x)?: number;  
Â Â Â Â [y](#y)?: number;  
}

##### Index

### Properties

[affectRotation?](#affectrotation)
[ax?](#ax)
[ay?](#ay)
[bx?](#bx)
[by?](#by)
[cosRotation?](#cosrotation)
[cumulativeLengths?](#cumulativelengths)
[data?](#data)
[fallbackPoint?](#fallbackpoint)
[holeAreaScale?](#holeareascale)
[maxAngle?](#maxangle)
[minAngle?](#minangle)
[points?](#points)
[radiusX?](#radiusx)
[radiusY?](#radiusy)
[rect?](#rect)
[sampleMode?](#samplemode)
[segments?](#segments)
[shapeRotation?](#shaperotation)
[sinRotation?](#sinrotation)
[totalLength?](#totallength)
[type](#type)
[x?](#x)
[y?](#y)

## Properties

### `Optional`affectRotation

affectRotation?: boolean

### `Optional`ax

ax?: number

### `Optional`ay

ay?: number

### `Optional`bx

bx?: number

### `Optional`by

by?: number

### `Optional`cosRotation

cosRotation?: number

### `Optional`cumulativeLengths

cumulativeLengths?: number[]

### `Optional`data

data?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md) | [PolygonTree](../classes/foundry.data.PolygonTree.md)

### `Optional`fallbackPoint

fallbackPoint?: IPointData | null

### `Optional`holeAreaScale

holeAreaScale?: number

### `Optional`maxAngle

maxAngle?: number

### `Optional`minAngle

minAngle?: number

### `Optional`points

points?: [ParticleGeneratorPointList](../types/foundry.canvas.animation.types.ParticleGeneratorPointList.md)

### `Optional`radiusX

radiusX?: number

### `Optional`radiusY

radiusY?: number

### `Optional`rect

rect?: Rectangle

### `Optional`sampleMode

sampleMode?: [ParticleGeneratorAreaSampleMode](../types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md)

### `Optional`segments

segments?: [ParticleGeneratorPolylineSegment](foundry.canvas.animation.types.ParticleGeneratorPolylineSegment.md)[]

### `Optional`shapeRotation

shapeRotation?: number

### `Optional`sinRotation

sinRotation?: number

### `Optional`totalLength

totalLength?: number

### type

type:  
Â Â Â Â | "point"  
Â Â Â Â | "shape"  
Â Â Â Â | "polygonTree"  
Â Â Â Â | "points"  
Â Â Â Â | "polyline"  
Â Â Â Â | "ellipse"  
Â Â Â Â | "ambientRect"  
Â Â Â Â | "line"

### `Optional`x

x?: number

### `Optional`y

y?: number