---
title: "PointSourcePolygonConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.html"
category: "interfaces"
---

# Interface PointSourcePolygonConfig

interface PointSourcePolygonConfig {  
Â Â Â Â [angle](#angle)?: number;  
Â Â Â Â [boundaryShapes](#boundaryshapes)?: (Rectangle | Polygon | Circle)[];  
Â Â Â Â [boundingBox](#boundingbox)?: Rectangle;  
Â Â Â Â [debug](#debug)?: boolean;  
Â Â Â Â [density](#density)?: number;  
Â Â Â Â [externalRadius](#externalradius)?: number;  
Â Â Â Â [hasLimitedAngle](#haslimitedangle)?: boolean;  
Â Â Â Â [hasLimitedRadius](#haslimitedradius)?: boolean;  
Â Â Â Â [level](#level)?: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md);  
Â Â Â Â [radius](#radius)?: number;  
Â Â Â Â [rotation](#rotation)?: number;  
Â Â Â Â [source](#source)?: any;  
Â Â Â Â [surfaceExposure](#surfaceexposure)?: [ElevatedSurfaceExposureOptions](foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md);  
Â Â Â Â [type](#type): [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.md);  
Â Â Â Â [useThreshold](#usethreshold)?: boolean;  
}

##### Index

### Properties

[angle?](#angle)
[boundaryShapes?](#boundaryshapes)
[boundingBox?](#boundingbox)
[debug?](#debug)
[density?](#density)
[externalRadius?](#externalradius)
[hasLimitedAngle?](#haslimitedangle)
[hasLimitedRadius?](#haslimitedradius)
[level?](#level)
[radius?](#radius)
[rotation?](#rotation)
[source?](#source)
[surfaceExposure?](#surfaceexposure)
[type](#type)
[useThreshold?](#usethreshold)

## Properties

### `Optional`angle

angle?: number

The angle of emission, if limited

### `Optional`boundaryShapes

boundaryShapes?: (Rectangle | Polygon | Circle)[]

Limiting polygon boundary shapes

### `Optional`boundingBox

boundingBox?: Rectangle

The computed bounding box for the polygon

### `Optional`debug

debug?: boolean

Display debugging visualization and logging for the polygon

### `Optional`density

density?: number

The desired density of padding rays, a number per PI

### `Optional`externalRadius

externalRadius?: number

The external radius

### `Optional`hasLimitedAngle

hasLimitedAngle?: boolean

Does this polygon have a limited angle?

### `Optional`hasLimitedRadius

hasLimitedRadius?: boolean

Does this polygon have a limited radius?

### `Optional`level

level?: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md)

The Level the polygon is computed in. Defaults to the viewed Level.

### `Optional`radius

radius?: number

A limited radius of the resulting polygon

### `Optional`rotation

rotation?: number

The direction of facing, required if the angle is limited

### `Optional`source

source?: any

The object (if any) that spawned this polygon.

### `Optional`surfaceExposure

surfaceExposure?: [ElevatedSurfaceExposureOptions](foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md)

Additional options passed through to surface
exposure generator

### type

type: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.md)

The type of polygon being computed

### `Optional`useThreshold

useThreshold?: boolean

Compute the polygon with threshold wall constraints applied