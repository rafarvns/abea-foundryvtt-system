---
title: "ActivityData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.ActivityData.html"
category: "interfaces"
---

# Interface ActivityData

interface ActivityData {  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [av](#av)?: [AVSettingsData](foundry.AVSettingsData.md);  
Â Â Â Â [cursor](#cursor)?: [Point](foundry.types.Point.md);  
Â Â Â Â [idle](#idle)?: boolean;  
Â Â Â Â [lastActivityTime](#lastactivitytime)?: number;  
Â Â Â Â [levelId](#levelid)?: string | null;  
Â Â Â Â [ping](#ping)?: [PingData](foundry.canvas.interaction.types.PingData.md);  
Â Â Â Â [ruler](#ruler)?: [ElevatedPoint](foundry.types.ElevatedPoint.md)[];  
Â Â Â Â [sceneId](#sceneid)?: string | null;  
Â Â Â Â [targets](#targets)?: string[];  
}

##### Index

### Properties

[active?](#active)
[av?](#av)
[cursor?](#cursor)
[idle?](#idle)
[lastActivityTime?](#lastactivitytime)
[levelId?](#levelid)
[ping?](#ping)
[ruler?](#ruler)
[sceneId?](#sceneid)
[targets?](#targets)

## Properties

### `Optional`active

active?: boolean

Whether the user has an open WS connection to the server or not.

### `Optional`av

av?: [AVSettingsData](foundry.AVSettingsData.md)

The state of the user's AV settings.

### `Optional`cursor

cursor?: [Point](foundry.types.Point.md)

The position of the user's cursor.

### `Optional`idle

idle?: boolean

Whether the user's last activity exceeds an idleness threshold.

### `Optional`lastActivityTime

lastActivityTime?: number

The number of milliseconds since the user's last reported activity.

### `Optional`levelId

levelId?: string | null

The ID of the scene level that the user is viewing.

### `Optional`ping

ping?: [PingData](foundry.canvas.interaction.types.PingData.md)

Is the user emitting a ping at the cursor coordinates?

### `Optional`ruler

ruler?: [ElevatedPoint](foundry.types.ElevatedPoint.md)[]

The state of the user's ruler, if they are currently using one.

### `Optional`sceneId

sceneId?: string | null

The ID of the scene that the user is viewing.

### `Optional`targets

targets?: string[]

The IDs of the tokens the user has targeted in the currently viewed
scene.