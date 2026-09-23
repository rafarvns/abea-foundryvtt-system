---
title: "combatStart | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.combatStart.html"
category: "functions"
---

# Function combatStart

* combatStart(  
  Â Â Â Â combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md),  
  Â Â Â Â updateData: { round: number; turn: number },  
  ): void

  A hook event that fires when a Combat encounter is started.
  This event fires on the initiating client before any database update occurs.

  #### Parameters

  + combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)

    The Combat encounter which is starting
  + updateData: { round: number; turn: number }

    An object which contains Combat properties that will be updated. Can be mutated.

    - ##### round: number

      The initial round
    - ##### turn: number

      The initial turn

  #### Returns void