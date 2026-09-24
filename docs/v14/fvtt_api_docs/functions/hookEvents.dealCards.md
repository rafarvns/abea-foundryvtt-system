---
title: "dealCards | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.dealCards.html"
category: "functions"
---

# Function dealCards

* dealCards(  
  Â Â Â Â origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md),  
  Â Â Â Â destinations: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)[],  
  Â Â Â Â context: {  
  Â Â Â Â Â Â Â Â action: string;  
  Â Â Â Â Â Â Â Â fromDelete: object[];  
  Â Â Â Â Â Â Â Â fromUpdate: object[];  
  Â Â Â Â Â Â Â Â toCreate: object[];  
  Â Â Â Â },  
  ): void

  A hook event that fires when Cards are dealt from a deck to other hands.

  #### Parameters

  + origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)

    The origin Cards document
  + destinations: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)[]

    An array of destination Cards documents
  + context: {  
    Â Â Â Â action: string;  
    Â Â Â Â fromDelete: object[];  
    Â Â Â Â fromUpdate: object[];  
    Â Â Â Â toCreate: object[];  
    }

    Additional context which describes the operation

    - ##### action: string

      The action name being performed, i.e. "deal", "pass"
    - ##### fromDelete: object[]

      Card deletion operations to be performed in the origin Cards document
    - ##### fromUpdate: object[]

      Card update operations to be performed in the origin Cards document
    - ##### toCreate: object[]

      An array of Card creation operations to be performed in each
      destination Cards document

  #### Returns void