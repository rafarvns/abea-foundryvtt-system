---
title: "oscillation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Math.oscillation.html"
category: "functions"
---

# Function oscillation

* oscillation(  
  Â Â Â Â a: number,  
  Â Â Â Â b: number,  
  Â Â Â Â t: number,  
  Â Â Â Â p?: number,  
  Â Â Â Â f?: (x: number) => number,  
  ): number

  Returns the value of the oscillation between `a` and `b` at time `t`.

  #### Parameters

  + a: number

    The minimium value of the oscillation
  + b: number

    The maximum value of the oscillation
  + t: number

    The time
  + `Optional`p: number = 1

    The period (must be nonzero)
  + `Optional`f: (x: number) => number = Math.cos

    The periodic function (its period must be 2Ï)

  #### Returns number

  `((b - a) * (f(2Ï * t / p) + 1) / 2) + a`