---
title: "mix | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Math.mix.html"
category: "functions"
---

# Function mix

* mix(a: number, b: number, w: number): number

  Linear interpolation function

  #### Parameters

  + a: number

    An initial value when weight is 0.
  + b: number

    A terminal value when weight is 1.
  + w: number

    A weight between 0 and 1.

  #### Returns number

  The interpolated value between a and b with weight w.