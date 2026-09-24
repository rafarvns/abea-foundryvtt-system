---
title: "combatTurnChange | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.combatTurnChange.html"
category: "functions"
---

# Function combatTurnChange

* combatTurnChange(  
  Â Â Â Â combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md),  
  Â Â Â Â prior: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.md),  
  Â Â Â Â current: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.md),  
  ): void

  A hook event which fires when the turn order of a Combat encounter is progressed.
  This event fires on all clients after the database update has occurred for the Combat.

  #### Parameters

  + combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)

    The Combat encounter for which the turn order has changed
  + prior: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.md)

    The prior turn state
  + current: [CombatHistoryData](../interfaces/foundry.documents.types.CombatHistoryData.md)

    The new turn state

  #### Returns void