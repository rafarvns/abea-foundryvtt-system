---
title: "getProperty | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.getProperty.html"
category: "functions"
---

# Function getProperty

* getProperty(object: object, key: string): any

  A helper function which searches through an object to retrieve a value by a string key.
  The method also supports arrays if the provided key is an integer index of the array.
  The string key supports the notation a.b.c which would return object[a][b][c]

  #### Parameters

  + object: object

    The object to traverse
  + key: string

    An object property with notation a.b.c

  #### Returns any

  The value of the found property