---
title: "DiceFulfillmentHandler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.DiceFulfillmentHandler.html"
category: "types"
---

# Type Alias DiceFulfillmentHandler

DiceFulfillmentHandler: (  
Â Â Â Â term: [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md),  
Â Â Â Â options?: object,  
) => number | void | Promise<number | void>

#### Type Declaration

* + (term: [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md), options?: object): number | void | Promise<number | void>
  + #### Parameters

    - term: [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)

      The term being fulfilled.
    - `Optional`options: object

      Additional options to configure fulfillment.

    #### Returns number | void | Promise<number | void>