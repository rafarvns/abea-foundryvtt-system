---
title: "generateHermiteSegment | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.vfx.utils.generateHermiteSegment.html"
category: "functions"
---

# Function generateHermiteSegment

* generateHermiteSegment(  
  Â Â Â Â p0: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md),  
  Â Â Â Â m0: Point,  
  Â Â Â Â p1: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md),  
  Â Â Â Â m1: Point,  
  Â Â Â Â numPoints: number,  
  Â Â Â Â auxiliary?: string[],  
  ): [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[]

  Generates points along a cubic Hermite spline segment.

  #### Parameters

  + p0: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)

    Start control point
  + m0: Point

    Tangent vector at start point
  + p1: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)

    End control point
  + m1: Point

    Tangent vector at end point
  + numPoints: number

    Number of points to generate along the segment
  + `Optional`auxiliary: string[]

    An array of auxiliary numeric attributes to interpolate

  #### Returns [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)[]

  Array of points which may be augmented with additional auxiliary attributes