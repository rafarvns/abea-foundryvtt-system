---
title: "between | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Number.between.html"
category: "functions"
---

# Function between

* between(this: number, a: number, b: number, inclusive?: boolean): boolean

  A faster numeric between check which avoids type coercion to the Number object.
  Since this avoids coercion, if non-numbers are passed in unpredictable results will occur. Use with caution.

  #### Parameters

  + this: number
  + a: number

    The lower-bound
  + b: number

    The upper-bound
  + inclusive: boolean = true

    Include the bounding values as a true result?

  #### Returns boolean

  Is the number between the two bounds?