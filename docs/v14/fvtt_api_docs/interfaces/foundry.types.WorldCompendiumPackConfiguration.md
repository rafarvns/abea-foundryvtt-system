---
title: "WorldCompendiumPackConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.WorldCompendiumPackConfiguration.html"
category: "interfaces"
---

# Interface WorldCompendiumPackConfiguration

interface WorldCompendiumPackConfiguration {  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [ownership](#ownership): Record<  
Â Â Â Â Â Â Â Â "PLAYER"  
Â Â Â Â Â Â Â Â | "TRUSTED"  
Â Â Â Â Â Â Â Â | "ASSISTANT"  
Â Â Â Â Â Â Â Â | "GAMEMASTER",  
Â Â Â Â Â Â Â Â "INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER",  
Â Â Â Â >;  
Â Â Â Â [sort](#sort)?: number;  
}

##### Index

### Properties

[folder](#folder)
[locked?](#locked)
[ownership](#ownership)
[sort?](#sort)

## Properties

### folder

folder: string | null

### `Optional`locked

locked?: boolean

### ownership

ownership: Record<  
Â Â Â Â "PLAYER"  
Â Â Â Â | "TRUSTED"  
Â Â Â Â | "ASSISTANT"  
Â Â Â Â | "GAMEMASTER",  
Â Â Â Â "INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER",  
>

### `Optional`sort

sort?: number