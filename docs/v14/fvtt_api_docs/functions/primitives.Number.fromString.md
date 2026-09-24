---
title: "fromString | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Number.fromString.html"
category: "functions"
---

# Function fromString

* fromString(n: string | number): number

  Attempt to create a number from a user-provided string.

  #### Parameters

  + n: string | number

    The value to convert; typically a string, but may already be a number.

  #### Returns number

  The number that the string represents, or NaN if no number could be determined.