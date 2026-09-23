---
title: "equals | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.equals.html"
category: "functions"
---

# Function equals

* equals(a: any, b: any): boolean

  Test if two values are equivalent.

  This helper supports equality testing for:

  1. Primitive data types (number, string, boolean, undefined)
  2. Simple objects (Object prototype, null)
  3. Complex objects which expose an `equals` method (Array, Set, Color, etc...)

  This method compares object `b` with object `a`, so in cases where an equality testing method is used it is called
  as `a.equals(b).

  #### Parameters

  + a: any

    The first value
  + b: any

    The second value

  #### Returns boolean