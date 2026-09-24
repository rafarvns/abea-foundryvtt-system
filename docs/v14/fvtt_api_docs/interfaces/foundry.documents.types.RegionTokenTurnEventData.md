---
title: "RegionTokenTurnEventData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionTokenTurnEventData.html"
category: "interfaces"
---

# Interface RegionTokenTurnEventData

interface RegionTokenTurnEventData {  
Â Â Â Â [combat](#combat): [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md);  
Â Â Â Â [combatant](#combatant): [documents](../modules/foundry.documents.md).[Combatant](../classes/foundry.documents.Combatant.md);  
Â Â Â Â [round](#round): number;  
Â Â Â Â [skipped](#skipped): boolean;  
Â Â Â Â [token](#token): [TokenDocument](../classes/foundry.documents.TokenDocument.md);  
Â Â Â Â [turn](#turn): number;  
}

##### Index

### Properties

[combat](#combat)
[combatant](#combatant)
[round](#round)
[skipped](#skipped)
[token](#token)
[turn](#turn)

## Properties

### combat

combat: [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)

The Combat

### combatant

combatant: [documents](../modules/foundry.documents.md).[Combatant](../classes/foundry.documents.Combatant.md)

The Combatant of the Token that started/ended its Combat turn

### round

round: number

The round of this turn

### skipped

skipped: boolean

Was the turn skipped?

### token

token: [TokenDocument](../classes/foundry.documents.TokenDocument.md)

The Token that started/ended its Combat turn

### turn

turn: number

The turn that started/ended