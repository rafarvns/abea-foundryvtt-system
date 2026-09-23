---
title: "toNearest | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Number.toNearest.html"
category: "functions"
---

# Function toNearest

* toNearest(  
  Â Â Â Â this: number,  
  Â Â Â Â interval?: number,  
  Â Â Â Â method?: "round" | "ceil" | "floor",  
  Â Â Â Â base?: number,  
  ): number

  Round a number to the closest number which substracted from the base is a multiple of the provided interval.
  This is a convenience function intended to humanize issues of floating point precision.
  The interval is treated as a standard string representation to determine the amount of decimal truncation applied.

  #### Parameters

  + this: number
  + interval: number = 1

    The step interval
  + `Optional`method: "round" | "ceil" | "floor" = "round"

    The rounding method
  + `Optional`base: number = 0

    The step base

  #### Returns number

  The rounded number

  #### Example: Round a number to the nearest step interval

  ```
  let n = 17.18;  
  n.toNearest(5); // 15  
  n.toNearest(10); // 20  
  n.toNearest(10, "floor"); // 10  
  n.toNearest(10, "ceil"); // 20  
  n.toNearest(0.25); // 17.25  
  n.toNearest(2, "round", 1); // 17
  Copy
  ```