---
title: "deepSeal | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.deepSeal.html"
category: "functions"
---

# Function deepSeal

* deepSeal<[T](#deepsealt) extends object>(obj: [T](#deepsealt), options?: { strict?: boolean }): [T](#deepsealt)

  Recursively seals (`Object.seal`) the object (or value).
  This method DOES NOT support cyclical data structures.
  This method DOES NOT support advanced object types like Set, Map, or other specialized classes.

  #### Type Parameters

  + T extends object

  #### Parameters

  + obj: [T](#deepsealt)

    The object (or value)
  + `Optional`options: { strict?: boolean } = {}

    Options to configure the behaviour of deepSeal

    - ##### `Optional`strict?: boolean

      Throw an Error if deepSeal is unable to seal something

  #### Returns [T](#deepsealt)

  The same object (or value) that was passed in