---
title: "expandObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.expandObject.html"
category: "functions"
---

# Function expandObject

* expandObject(obj: object): object

  Expand a flattened object to be a standard nested Object by converting all dot-notation keys to inner objects.
  Only simple objects will be expanded. Other Object types like class instances will be retained as-is.

  #### Parameters

  + obj: object

    The object to expand

  #### Returns object

  An expanded object