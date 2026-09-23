---
title: "applyDataOperators | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.applyDataOperators.html"
category: "functions"
---

# Function applyDataOperators

* applyDataOperators(obj: any): any

  Recurse through an object, applying all special DataFieldOperator values.
  ForcedDeletion values (or deprecated "-=" keys) are removed from the object
  ForcedReplacement values (or deprecated "==" keys) are updated in the object

  #### Parameters

  + obj: any

  #### Returns any