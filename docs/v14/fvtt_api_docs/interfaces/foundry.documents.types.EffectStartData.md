---
title: "EffectStartData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.EffectStartData.html"
category: "interfaces"
---

# Interface EffectStartData

interface EffectStartData {  
Â Â Â Â [combat](#combat): string | null;  
Â Â Â Â [combatant](#combatant): string | null;  
Â Â Â Â [initiative](#initiative): number | null;  
Â Â Â Â [round](#round): number | null;  
Â Â Â Â [time](#time): number;  
Â Â Â Â [turn](#turn): number | null;  
}

##### Index

### Properties

[combat](#combat)
[combatant](#combatant)
[initiative](#initiative)
[round](#round)
[time](#time)
[turn](#turn)

## Properties

### combat

combat: string | null

The \_id of the Combat that was active when this Effect first started

### combatant

combatant: string | null

The \_id of the Combatant whose turn was active when the Effect first started

### initiative

initiative: number | null

The Combatant's initiative roll at the time the Effect first started

### round

round: number | null

The round of the Combat when the Effect first started

### time

time: number

The world time when the Effect first started

### turn

turn: number | null

The turn of the Combat when the Effect first started