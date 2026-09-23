---
title: "TokenMovementCostAggregator | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.documents.types.TokenMovementCostAggregator.html"
category: "types"
---

# Type Alias TokenMovementCostAggregator

TokenMovementCostAggregator: (  
Â Â Â Â results: [DeepReadonly](foundry.types.DeepReadonly.md)<  
Â Â Â Â Â Â Â Â { cost: number; from: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md); to: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md) },  
Â Â Â Â >[],  
Â Â Â Â distance: number,  
Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>,  
) => number

#### Type Declaration

* + (  
    Â Â Â Â results: [DeepReadonly](foundry.types.DeepReadonly.md)<  
    Â Â Â Â Â Â Â Â { cost: number; from: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md); to: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md) },  
    Â Â Â Â >[],  
    Â Â Â Â distance: number,  
    Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>,  
    ): number
  + #### Parameters

    - results: [DeepReadonly](foundry.types.DeepReadonly.md)<{ cost: number; from: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md); to: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md) }>[]

      The results of the cost function calls.
      The array may be sorted but otherwise not be mutated.
    - distance: number

      The distance between the grid spaces.
    - segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>

      The properties of the segment.

    #### Returns number