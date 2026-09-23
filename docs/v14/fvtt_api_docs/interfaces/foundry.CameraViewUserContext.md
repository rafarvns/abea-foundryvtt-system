---
title: "CameraViewUserContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.CameraViewUserContext.html"
category: "interfaces"
---

# Interface CameraViewUserContext

interface CameraViewUserContext {  
Â Â Â Â [charname](#charname): string;  
Â Â Â Â [controls](#controls): Record<string, [CameraViewControlContext](foundry.CameraViewControlContext.md)>;  
Â Â Â Â [css](#css): string;  
Â Â Â Â [hasAudio](#hasaudio): boolean;  
Â Â Â Â [hasVideo](#hasvideo): boolean;  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [local](#local): boolean;  
Â Â Â Â [nameplates](#nameplates): {  
Â Â Â Â Â Â Â Â charname: string;  
Â Â Â Â Â Â Â Â css: string;  
Â Â Â Â Â Â Â Â hidden: boolean;  
Â Â Â Â Â Â Â Â playerName: string;  
Â Â Â Â };  
Â Â Â Â [settings](#settings): [AVSettingsData](foundry.AVSettingsData.md);  
Â Â Â Â [user](#user): User;  
Â Â Â Â [video](#video): { muted: boolean; show: boolean; volume: number };  
Â Â Â Â [volume](#volume): { field: DataField; show: boolean; value: number };  
}

##### Index

### Properties

[charname](#charname)
[controls](#controls)
[css](#css)
[hasAudio](#hasaudio)
[hasVideo](#hasvideo)
[hidden](#hidden)
[local](#local)
[nameplates](#nameplates)
[settings](#settings)
[user](#user)
[video](#video)
[volume](#volume)

## Properties

### charname

charname: string

The user's character name.

### controls

controls: Record<string, [CameraViewControlContext](foundry.CameraViewControlContext.md)>

### css

css: string

The CSS class of the user's camera dock.

### hasAudio

hasAudio: boolean

Whether the user is broadcasting audio.

### hasVideo

hasVideo: boolean

Whether the user is broadcasting video.

### hidden

hidden: boolean

Whether the main camera dock is hidden.

### local

local: boolean

Whether the user's AV stream is local.

### nameplates

nameplates: {  
Â Â Â Â charname: string;  
Â Â Â Â css: string;  
Â Â Â Â hidden: boolean;  
Â Â Â Â playerName: string;  
}

#### Type Declaration

* ##### charname: string

  Whether to show character names on nameplates.
* ##### css: string

  Nameplate CSS classes.
* ##### hidden: boolean

  Whether camera nameplates are entirely hidden.
* ##### playerName: string

  Whether to show player names on nameplates.

### settings

settings: [AVSettingsData](foundry.AVSettingsData.md)

The user's AV settings.

### user

user: User

The User instance.

### video

video: { muted: boolean; show: boolean; volume: number }

#### Type Declaration

* ##### muted: boolean

  Whether to mute the video stream's audio.
* ##### show: boolean

  Whether to show this user's camera.
* ##### volume: number

  The video stream's volume.

### volume

volume: { field: DataField; show: boolean; value: number }

#### Type Declaration

* ##### field: DataField

  The volume range field.
* ##### show: boolean

  Whether to show a volume bar for this user.
* ##### value: number

  The user's configured volume level.