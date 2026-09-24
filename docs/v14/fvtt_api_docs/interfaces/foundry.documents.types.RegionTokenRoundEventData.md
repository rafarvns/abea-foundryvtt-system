---
title: "RegionTokenRoundEventData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionTokenRoundEventData.html"
category: "interfaces"
---

# Interface RegionTokenRoundEventData

interface RegionTokenRoundEventData {  
Â Â Â Â [combat](#combat): [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md);  
Â Â Â Â [combatant](#combatant): [documents](../modules/foundry.documents.md).[Combatant](../classes/foundry.documents.Combatant.md);  
Â Â Â Â [round](#round): number;  
Â Â Â Â [skipped](#skipped): boolean;  
Â Â Â Â [token](#token): [TokenDocument](../classes/foundry.documents.TokenDocument.md);  
}

##### Index

### Properties

[combat](#combat)
[combatant](#combatant)
[round](#round)
[skipped](#skipped)
[token](#token)

## Properties

### combat

combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)

The Combat

### combatant

combatant: [documents](../modules/foundry.documents.md).[Combatant](../classes/foundry.documents.Combatant.md)

The Combatant of the Token

### round

round: number

The round that started/ended

### skipped

skipped: boolean

Was the round skipped?

### token

token: [TokenDocument](../classes/foundry.documents.TokenDocument.md)

The Token