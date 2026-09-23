---
title: "AVSettings | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.av.AVSettings.html"
category: "classes"
---

# Class AVSettings

##### Index

### Properties

[activity](#activity)
[changed](#changed)
[AV\_MODES](#av_modes)
[DOCK\_POSITIONS](#dock_positions)
[NAMEPLATE\_MODES](#nameplate_modes)
[VOICE\_MODES](#voice_modes)

### Accessors

[users](#users)
[verticalDock](#verticaldock)
[DEFAULT\_USER\_SETTINGS](#default_user_settings)
[schemaFields](#schemafields)

### Methods

[handleUserActivity](#handleuseractivity)
[register](#register)

## Properties

### activity

activity: Record<string, [AVSettingsData](../interfaces/foundry.AVSettingsData.md)> = {}

Stores the transient AV activity data received from other users.

### changed

changed: () => void

A debounce callback for when either the world or client settings change.

### `Static`AV\_MODES

AV\_MODES: {  
Â Â Â Â AUDIO: number;  
Â Â Â Â AUDIO\_VIDEO: number;  
Â Â Â Â DISABLED: number;  
Â Â Â Â VIDEO: number;  
} = ...

WebRTC Mode, Disabled, Audio only, Video only, Audio & Video

### `Static`DOCK\_POSITIONS

DOCK\_POSITIONS: { BOTTOM: string; LEFT: string; RIGHT: string; TOP: string } = ...

AV dock positions.

### `Static`NAMEPLATE\_MODES

NAMEPLATE\_MODES: {  
Â Â Â Â BOTH: number;  
Â Â Â Â CHAR\_ONLY: number;  
Â Â Â Â OFF: number;  
Â Â Â Â PLAYER\_ONLY: number;  
} = ...

Displayed nameplate options: Off entirely, animate between player and character name, player name only, character
name only.

### `Static`VOICE\_MODES

VOICE\_MODES: { ACTIVITY: string; ALWAYS: string; PTT: string } = ...

Voice modes: Always-broadcasting, voice-level triggered, push-to-talk.

## Accessors

### users

* get users(): object

  Return a mapping of AV settings for each game User.

  #### Returns object

### verticalDock

* get verticalDock(): boolean

  A helper to determine if the dock is configured in a vertical position.

  #### Returns boolean

### `Static`DEFAULT\_USER\_SETTINGS

* get DEFAULT\_USER\_SETTINGS(): object

  Default client settings for each connected user.

  #### Returns object

### `Static`schemaFields

* get schemaFields(): { client: [SchemaField](foundry.data.fields.SchemaField.md); world: [SchemaField](foundry.data.fields.SchemaField.md) }

  Schemas for world and client settings

  #### Returns { client: [SchemaField](foundry.data.fields.SchemaField.md); world: [SchemaField](foundry.data.fields.SchemaField.md) }

## Methods

### handleUserActivity

* handleUserActivity(userId: string, settings: [AVSettingsData](../interfaces/foundry.AVSettingsData.md)): void

  Handle another connected user changing their AV settings.

  #### Parameters

  + userId: string
  + settings: [AVSettingsData](../interfaces/foundry.AVSettingsData.md)

  #### Returns void

### `Static`register

* register(): void

  Register world and client WebRTC settings.

  #### Returns void