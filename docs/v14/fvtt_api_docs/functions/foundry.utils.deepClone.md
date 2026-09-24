---
title: "deepClone | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.deepClone.html"
category: "functions"
---

# Function deepClone

* deepClone<[T](#deepclonet) extends object>(  
  Â Â Â Â original: [T](#deepclonet),  
  Â Â Â Â options?: { prune?: boolean; strict?: boolean },  
  ): [T](#deepclonet)

  Quickly clone a simple piece of data, returning a copy which can be mutated safely.
  This method DOES support recursive data structures containing inner objects or arrays.
  This method DOES NOT support cyclical data structures.
  This method DOES NOT support advanced object types like Set, Map, or other specialized classes.

  #### Type Parameters

  + T extends object

  #### Parameters

  + original: [T](#deepclonet)

    Some sort of data
  + `Optional`options: { prune?: boolean; strict?: boolean } = {}

    Options to configure the behaviour of deepClone

    - ##### `Optional`prune?: boolean

      Delete object entries with undefined values
    - ##### `Optional`strict?: boolean

      Throw an Error if deepClone is unable to clone something instead of
      returning the original

  #### Returns [T](#deepclonet)

  The clone of that data