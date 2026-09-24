---
title: "passCards | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.passCards.html"
category: "functions"
---

# Function passCards

* passCards(  
  Â Â Â Â origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md),  
  Â Â Â Â destination: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md),  
  Â Â Â Â context: {  
  Â Â Â Â Â Â Â Â action: string;  
  Â Â Â Â Â Â Â Â fromDelete: object[];  
  Â Â Â Â Â Â Â Â fromUpdate: object[];  
  Â Â Â Â Â Â Â Â toCreate: object[];  
  Â Â Â Â Â Â Â Â toUpdate: object[];  
  Â Â Â Â },  
  ): void

  A hook event that fires when Cards are passed from one stack to another.

  #### Parameters

  + origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)

    The origin Cards document
  + destination: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)

    The destination Cards document
  + context: {  
    Â Â Â Â action: string;  
    Â Â Â Â fromDelete: object[];  
    Â Â Â Â fromUpdate: object[];  
    Â Â Â Â toCreate: object[];  
    Â Â Â Â toUpdate: object[];  
    }

    Additional context which describes the operation

    - ##### action: string

      The action name being performed, i.e. "pass", "play", "discard", "draw"
    - ##### fromDelete: object[]

      Card deletion operations to be performed in the origin Cards document
    - ##### fromUpdate: object[]

      Card update operations to be performed in the origin Cards document
    - ##### toCreate: object[]

      Card creation operations to be performed in the destination Cards document
    - ##### toUpdate: object[]

      Card update operations to be performed in the destination Cards document

  #### Returns void