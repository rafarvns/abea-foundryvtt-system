---
title: "DocumentTypesConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.packages.types.DocumentTypesConfiguration.html"
category: "types"
---

# Type Alias DocumentTypesConfiguration

DocumentTypesConfiguration: Record<  
Â Â Â Â string,  
Â Â Â Â Record<string, [ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.md)>,  
>

Document subtype registration information for systems and modules.
The first layer of keys are document types, e.g. "Actor" or "Item".
The second layer of keys are document subtypes, e.g. "character" or "feature".