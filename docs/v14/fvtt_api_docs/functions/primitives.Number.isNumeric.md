---
title: "isNumeric | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Number.isNumeric.html"
category: "functions"
---

# Function isNumeric

* isNumeric(n: any): boolean

  Test whether a value is numeric.
  This is the highest performing algorithm currently available, per <https://jsperf.com/isnan-vs-typeof/5>

  #### Parameters

  + n: any

    A value to test

  #### Returns boolean

  Is it a number?