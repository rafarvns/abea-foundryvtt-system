---
title: "GridMeasurePathCostFunction3D | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.grid.types.GridMeasurePathCostFunction3D.html"
category: "types"
---

# Type Alias GridMeasurePathCostFunction3D<SegmentData>

GridMeasurePathCostFunction3D: (  
Â Â Â Â from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
Â Â Â Â to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
Â Â Â Â distance: number,  
Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>,  
) => number

A function that returns the cost for a given move between grid spaces in 3D.
In square and hexagonal grids the grid spaces are always adjacent unless teleported.
The function is never called with the same offsets.

#### Type Parameters

* SegmentData = {}

#### Type Declaration

* + (  
    Â Â Â Â from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
    Â Â Â Â to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
    Â Â Â Â distance: number,  
    Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>,  
    ): number
  + #### Parameters

    - from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>

      The offset that is moved from
    - to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>

      The offset that is moved to
    - distance: number

      The distance between the grid spaces
    - segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>

      The properties of the segment

    #### Returns number