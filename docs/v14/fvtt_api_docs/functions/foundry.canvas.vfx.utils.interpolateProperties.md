---
title: "interpolateProperties | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.vfx.utils.interpolateProperties.html"
category: "functions"
---

# Function interpolateProperties

* interpolateProperties(  
  Â Â Â Â p0: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md),  
  Â Â Â Â p1: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md),  
  Â Â Â Â t: number,  
  Â Â Â Â auxiliary?: string[],  
  ): object

  Interpolate auxiliary attributes between two points.

  #### Parameters

  + p0: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)

    Start control point
  + p1: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md)

    End control point
  + t: number

    Interpolation parameter
  + `Optional`auxiliary: string[] = []

    An array of auxiliary numeric attributes to interpolate. These attributes must be
    present all points. Attributes are either interpolated or carried forward from
    their last-observed value.

  #### Returns object

  Interpolated auxiliary properties