---
title: "deepFreeze | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.deepFreeze.html"
category: "functions"
---

# Function deepFreeze

* deepFreeze<const [T](#deepfreezet) extends object>(  
  Â Â Â Â obj: [T](#deepfreezet),  
  Â Â Â Â options?: { strict?: boolean },  
  ): Readonly<[T](#deepfreezet)>

  Recursively freezes (`Object.freeze`) the object (or value).
  This method DOES NOT support cyclical data structures.
  This method DOES NOT support advanced object types like Set, Map, or other specialized classes.

  #### Type Parameters

  + const T extends object

  #### Parameters

  + obj: [T](#deepfreezet)

    The object (or value)
  + `Optional`options: { strict?: boolean } = {}

    Options to configure the behaviour of deepFreeze

    - ##### `Optional`strict?: boolean

      Throw an Error if deepFreeze is unable to seal something instead of
      returning the original

  #### Returns Readonly<[T](#deepfreezet)>

  The same object (or value) that was passed in