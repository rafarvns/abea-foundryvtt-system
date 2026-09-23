---
title: "Combat | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Combat.html"
category: "variables"
---

# Variable Combat`Const`

Combat: {  
Â Â Â Â collection: typeof [CombatEncounters](../classes/foundry.documents.collections.CombatEncounters.md);  
Â Â Â Â dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>;  
Â Â Â Â documentClass: typeof [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md);  
Â Â Â Â embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[];  
Â Â Â Â fallbackTurnMarker: string;  
Â Â Â Â initiative: { decimals: number; formula: null };  
Â Â Â Â initiativeIcon: { hover: string; icon: string };  
Â Â Â Â settings: [CombatConfiguration](../classes/foundry.data.CombatConfiguration.md);  
Â Â Â Â sidebarIcon: string;  
Â Â Â Â sounds: {  
Â Â Â Â Â Â Â Â epic: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â nextUp: string[];  
Â Â Â Â Â Â Â Â Â Â Â Â startEncounter: string[];  
Â Â Â Â Â Â Â Â Â Â Â Â yourTurn: string[];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â mc: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â nextUp: string[];  
Â Â Â Â Â Â Â Â Â Â Â Â startEncounter: string[];  
Â Â Â Â Â Â Â Â Â Â Â Â yourTurn: string[];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â };  
Â Â Â Â typeHints: Record<string, string>;  
Â Â Â Â typeIcons: Record<string, string>;  
Â Â Â Â typeLabels: Record<string, string>;  
} = ...

Configuration for the Combat document

#### Type Declaration

* ##### collection: typeof [CombatEncounters](../classes/foundry.documents.collections.CombatEncounters.md)
* ##### dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>
* ##### documentClass: typeof [documents](../modules/foundry.documents.md).[Combat](../classes/foundry.documents.Combat.md)
* ##### embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[]
* ##### fallbackTurnMarker: string
* ##### initiative: { decimals: number; formula: null }
* ##### initiativeIcon: { hover: string; icon: string }
* ##### settings: [CombatConfiguration](../classes/foundry.data.CombatConfiguration.md)
* ##### sidebarIcon: string
* ##### sounds: { Â Â Â Â epic: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â nextUp: string[]; Â Â Â Â Â Â Â Â startEncounter: string[]; Â Â Â Â Â Â Â Â yourTurn: string[]; Â Â Â Â }; Â Â Â Â mc: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â nextUp: string[]; Â Â Â Â Â Â Â Â startEncounter: string[]; Â Â Â Â Â Â Â Â yourTurn: string[]; Â Â Â Â }; }
* ##### typeHints: Record<string, string>
* ##### typeIcons: Record<string, string>
* ##### typeLabels: Record<string, string>