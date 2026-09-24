---
title: "compare | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.String.compare.html"
category: "functions"
---

# Function compare

* compare(other: string): number

  Compare this string (x) with the other string (y) by comparing each character's Unicode code point value.
  Returns a negative Number if x < y, a positive Number if x > y, or a zero otherwise.
  This is the same comparision function that used by Array#sort if the compare function argument is omitted.
  The result is host/locale-independent.

  #### Parameters

  + other: string

    The other string to compare this string to.

  #### Returns number