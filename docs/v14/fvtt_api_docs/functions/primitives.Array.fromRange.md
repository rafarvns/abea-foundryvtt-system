---
title: "fromRange | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Array.fromRange.html"
category: "functions"
---

# Function fromRange

* fromRange(n: number, min?: number): number[]

  Create and initialize an array of length n with integers from 0 to n-1

  #### Parameters

  + n: number

    The desired array length
  + `Optional`min: number = 0

    A desired minimum number from which the created array starts

  #### Returns number[]

  An array of integers from min to min+n