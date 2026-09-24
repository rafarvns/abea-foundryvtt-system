---
title: "modifyTokenAttribute | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.modifyTokenAttribute.html"
category: "functions"
---

# Function modifyTokenAttribute

* modifyTokenAttribute(  
  Â Â Â Â data: {  
  Â Â Â Â Â Â Â Â attribute: string;  
  Â Â Â Â Â Â Â Â isBar: boolean;  
  Â Â Â Â Â Â Â Â isDelta: boolean;  
  Â Â Â Â Â Â Â Â value: number;  
  Â Â Â Â },  
  Â Â Â Â updates: objects,  
  Â Â Â Â actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md),  
  ): void

  A hook event that fires when a token's resource bar attribute has been modified.

  #### Parameters

  + data: { attribute: string; isBar: boolean; isDelta: boolean; value: number }

    An object describing the modification

    - ##### attribute: string

      The attribute path
    - ##### isBar: boolean

      Whether the new value is part of an attribute bar, or just a direct value
    - ##### isDelta: boolean

      Does number represents a relative change (true) or an absolute change (false)
    - ##### value: number

      The target attribute value
  + updates: objects

    The update delta that will be applied to the Token's actor
  + actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md)

    The Actor associated with the Token

  #### Returns void