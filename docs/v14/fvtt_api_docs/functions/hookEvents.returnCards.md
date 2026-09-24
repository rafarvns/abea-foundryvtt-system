---
title: "returnCards | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.returnCards.html"
category: "functions"
---

# Function returnCards

* returnCards(  
  Â Â Â Â origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md),  
  Â Â Â Â returned: [documents](../modules/foundry.documents.md).[Card](../classes/foundry.documents.Card.md)[],  
  Â Â Â Â context: { fromDelete: object[]; toUpdate: Record<string, object[]> },  
  ): void

  A hook event that fires when Cards are dealt from a deck to other hands.

  #### Parameters

  + origin: [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)

    The origin Cards document.
  + returned: [documents](../modules/foundry.documents.md).[Card](../classes/foundry.documents.Card.md)[]

    The cards being returned.
  + context: { fromDelete: object[]; toUpdate: Record<string, object[]> }

    Additional context which describes the operation.

    - ##### fromDelete: object[]

      Card deletion operations to be performed on the origin Cards
      document.
    - ##### toUpdate: Record<string, object[]>

      A mapping of Card deck IDs to the update operations that
      will be performed on them.

  #### Returns void