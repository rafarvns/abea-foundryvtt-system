---
title: "setProperty | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.setProperty.html"
category: "functions"
---

# Function setProperty

* setProperty(object: object, key: string, value: any): boolean

  A helper function which searches through an object to assign a value using a string key
  This string key supports the notation a.b.c which would target object[a][b][c]

  #### Parameters

  + object: object

    The object to update
  + key: string

    The string key
  + value: any

    The value to be assigned

  #### Returns boolean

  Whether the value was changed from its previous value