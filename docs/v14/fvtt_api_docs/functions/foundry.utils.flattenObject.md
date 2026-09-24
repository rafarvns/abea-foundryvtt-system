---
title: "flattenObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.flattenObject.html"
category: "functions"
---

# Function flattenObject

* flattenObject(obj: object, \_d?: number): object

  Flatten a possibly multidimensional object to a one-dimensional one by converting all nested keys to dot notation

  #### Parameters

  + obj: object

    The object to flatten
  + `Optional`\_d: number = 0

    Track the recursion depth to prevent overflow

  #### Returns object

  A flattened object