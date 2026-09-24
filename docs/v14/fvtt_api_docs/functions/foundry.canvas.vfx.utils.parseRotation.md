---
title: "parseRotation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.vfx.utils.parseRotation.html"
category: "functions"
---

# Function parseRotation

* parseRotation(  
  Â Â Â Â data: {  
  Â Â Â Â Â Â Â Â angle?: number;  
  Â Â Â Â Â Â Â Â origin?: any;  
  Â Â Â Â Â Â Â Â rotateTowards?: any;  
  Â Â Â Â Â Â Â Â rotation?: number;  
  Â Â Â Â },  
  ): number

  Parse rotation options normalized to radians from shared config objects

  #### Parameters

  + data: { angle?: number; origin?: any; rotateTowards?: any; rotation?: number }
    - ##### `Optional`angle?: number

      Initial rotation in degrees
    - ##### `Optional`origin?: any

      Rotate from an origin position, needed if using rotateTowards
    - ##### `Optional`rotateTowards?: any

      Incremental rotation towards a destination position
    - ##### `Optional`rotation?: number

      Initial rotation in radians

  #### Returns number