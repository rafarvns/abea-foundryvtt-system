---
title: "CombatConfigurationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CombatConfigurationData.html"
category: "interfaces"
---

# Interface CombatConfigurationData

Default combat tracker settings used in Foundry VTT.

interface CombatConfigurationData {  
Â Â Â Â [resource](#resource): string;  
Â Â Â Â [skipDefeated](#skipdefeated): boolean;  
Â Â Â Â [turnMarker](#turnmarker): {  
Â Â Â Â Â Â Â Â animation: string;  
Â Â Â Â Â Â Â Â disposition: string;  
Â Â Â Â Â Â Â Â enabled: boolean;  
Â Â Â Â Â Â Â Â path: string;  
Â Â Â Â };  
}

##### Index

### Properties

[resource](#resource)
[skipDefeated](#skipdefeated)
[turnMarker](#turnmarker)

## Properties

### resource

resource: string

A resource identifier for the tracker.

### skipDefeated

skipDefeated: boolean

Whether to skip defeated tokens during combat.

### turnMarker

turnMarker: {  
Â Â Â Â animation: string;  
Â Â Â Â disposition: string;  
Â Â Â Â enabled: boolean;  
Â Â Â Â path: string;  
}

Turn marker configuration.

#### Type Declaration

* ##### animation: string

  The identifier for the default turn marker animation.
* ##### disposition: string

  Tint the turn marker according to token disposition.
* ##### enabled: boolean

  Whether the turn marker is enabled.
* ##### path: string

  The file path for the turn marker icon.