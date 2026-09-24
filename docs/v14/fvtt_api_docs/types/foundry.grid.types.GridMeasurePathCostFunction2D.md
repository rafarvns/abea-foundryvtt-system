---
title: "GridMeasurePathCostFunction2D | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.grid.types.GridMeasurePathCostFunction2D.html"
category: "types"
---

# Type Alias GridMeasurePathCostFunction2D<SegmentData>

GridMeasurePathCostFunction2D: (  
Â Â Â Â from: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>,  
Â Â Â Â to: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>,  
Â Â Â Â distance: number,  
Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>,  
) => number

A function that returns the cost for a given move between grid spaces in 2D.
In square and hexagonal grids the grid spaces are always adjacent unless teleported.
The function is never called with the same offsets.

#### Type Parameters

* SegmentData = {}

#### Type Declaration

* + (  
    Â Â Â Â from: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>,  
    Â Â Â Â to: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>,  
    Â Â Â Â distance: number,  
    Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>,  
    ): number
  + #### Parameters

    - from: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>

      The offset that is moved from
    - to: Readonly<[GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)>

      The offset that is moved to
    - distance: number

      The distance between the grid spaces
    - segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[SegmentData](#segmentdata)>

      The properties of the segment

    #### Returns number