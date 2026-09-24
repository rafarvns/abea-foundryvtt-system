---
title: "almostEqual | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Number.almostEqual.html"
category: "functions"
---

# Function almostEqual

* almostEqual(this: number, n: number, e?: number): boolean

  Test for near-equivalence of two numbers within some permitted epsilon

  #### Parameters

  + this: number
  + n: number

    Some other number
  + e: number = 1e-8

    Some permitted epsilon, by default 1e-8

  #### Returns boolean

  Are the numbers almost equal?