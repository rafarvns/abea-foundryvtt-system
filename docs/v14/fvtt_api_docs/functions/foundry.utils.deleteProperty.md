---
title: "deleteProperty | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.deleteProperty.html"
category: "functions"
---

# Function deleteProperty

* deleteProperty(object: object, key: string): boolean

  A helper function which searches through an object to delete a value by a string key.
  The string key supports the notation a.b.c which would delete object[a][b][c]

  #### Parameters

  + object: object

    The object to traverse
  + key: string

    An object property with notation a.b.c

  #### Returns boolean

  Was the property deleted?