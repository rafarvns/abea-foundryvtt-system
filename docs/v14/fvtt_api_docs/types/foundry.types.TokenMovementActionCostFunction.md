---
title: "TokenMovementActionCostFunction | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.types.TokenMovementActionCostFunction.html"
category: "types"
---

# Type Alias TokenMovementActionCostFunction

TokenMovementActionCostFunction: (  
Â Â Â Â baseCost: number,  
Â Â Â Â from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
Â Â Â Â to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
Â Â Â Â distance: number,  
Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>,  
) => number

#### Type Declaration

* + (  
    Â Â Â Â baseCost: number,  
    Â Â Â Â from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
    Â Â Â Â to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>,  
    Â Â Â Â distance: number,  
    Â Â Â Â segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>,  
    ): number
  + #### Parameters

    - baseCost: number

      The base cost (terrain cost)
    - from: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>

      The offset that is moved from
    - to: Readonly<[GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md)>

      The offset that is moved to
    - distance: number

      The distance between the grid spaces
    - segment: [DeepReadonly](foundry.types.DeepReadonly.md)<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md)>

      The properties of the segment

    #### Returns number