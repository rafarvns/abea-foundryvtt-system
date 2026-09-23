---
title: "ACTIVE_EFFECT_CHANGE_TYPES | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONST.ACTIVE_EFFECT_CHANGE_TYPES.html"
category: "variables"
---

# Variable ACTIVE\_EFFECT\_CHANGE\_TYPES`Const`

ACTIVE\_EFFECT\_CHANGE\_TYPES: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â add: 20;  
Â Â Â Â Â Â Â Â custom: 0;  
Â Â Â Â Â Â Â Â downgrade: 30;  
Â Â Â Â Â Â Â Â multiply: 10;  
Â Â Â Â Â Â Â Â override: 50;  
Â Â Â Â Â Â Â Â subtract: 20;  
Â Â Â Â Â Â Â Â upgrade: 40;  
Â Â Â Â },  
> = ...

Define the core ActiveEffect change types and their default priorities. Other arbitrary string types can be used by
systems and modules to identify special behaviors and are ignored.