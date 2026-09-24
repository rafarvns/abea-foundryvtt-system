---
title: "resolveEasing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.vfx.utils.resolveEasing.html"
category: "functions"
---

# Function resolveEasing

* resolveEasing(  
  Â Â Â Â functionName: string,  
  Â Â Â Â easingParams: any[],  
  ): (time: number) => number

  Resolves an anime.js easing function by name and initializes it with parameters.

  #### Parameters

  + functionName: string

    Name of the easing function
  + easingParams: any[]

    Optional positional parameters to initialize the easing function

  #### Returns (time: number) => number

  The resolved easing function