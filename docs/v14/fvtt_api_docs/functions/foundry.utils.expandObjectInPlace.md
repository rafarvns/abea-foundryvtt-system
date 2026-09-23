---
title: "expandObjectInPlace | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.expandObjectInPlace.html"
category: "functions"
---

# Function expandObjectInPlace

* expandObjectInPlace(data: object, options?: { shallow?: boolean }): boolean

  Expand dot-notation keys within a plain object, mutating it in place.
  Use a lazy allocation strategy that only copies keys when some expansion is required.
  Performs the dot-key check and expansion in a single forward pass.
  Keys without dots are passed through via direct assignment.
  Keys containing dots are expanded via setProperty.

  #### Parameters

  + data: object

    The object to expand in place.
  + `Optional`options: { shallow?: boolean } = {}

    Options for how expansion occurs.

    - ##### `Optional`shallow?: boolean

      Whether to only expand top-level keys.

  #### Returns boolean

  Whether any expansion was performed at any level.