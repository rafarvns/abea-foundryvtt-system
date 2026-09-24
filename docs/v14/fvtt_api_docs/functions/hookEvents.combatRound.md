---
title: "combatRound | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.combatRound.html"
category: "functions"
---

# Function combatRound

* combatRound(  
  Â Â Â Â combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md),  
  Â Â Â Â updateData: { round: number; turn: number },  
  Â Â Â Â updateOptions: { direction: number; worldTime: { delta: number } },  
  ): void

  A hook event that fires when the round of the Combat encounter changes.
  This event fires on the initiating client before any database update occurs.

  #### Parameters

  + combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)

    The Combat encounter which is advancing or rewinding its round
  + updateData: { round: number; turn: number }

    An object which contains Combat properties that will be updated. Can be mutated.

    - ##### round: number

      The new round of Combat
    - ##### turn: number

      The new turn number
  + updateOptions: { direction: number; worldTime: { delta: number } }

    An object which contains options provided to the update method. Can be mutated.

    - ##### direction: number

      A signed integer for whether the turn order is advancing or rewinding
    - ##### worldTime: { delta: number }

      The amount of time in seconds that time is being advanced

  #### Returns void