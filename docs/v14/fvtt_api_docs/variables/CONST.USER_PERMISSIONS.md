---
title: "USER_PERMISSIONS | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONST.USER_PERMISSIONS.html"
category: "variables"
---

# Variable USER\_PERMISSIONS`Const`

USER\_PERMISSIONS: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â ACTOR\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.ActorCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.ActorCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â BROADCAST\_AUDIO: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.BroadcastAudioHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.BroadcastAudio";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â BROADCAST\_VIDEO: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.BroadcastVideoHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.BroadcastVideo";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â CARDS\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.CardsCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.CardsCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â DRAWING\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.DrawingCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.DrawingCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â FILES\_BROWSE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.FilesBrowseHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.FilesBrowse";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â FILES\_UPLOAD: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.FilesUploadHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.FilesUpload";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â ITEM\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.ItemCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.ItemCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â JOURNAL\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.JournalCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.JournalCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â MACRO\_SCRIPT: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.MacroScriptHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.MacroScript";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â MANUAL\_ROLLS: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.ManualRollsHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.ManualRolls";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â MESSAGE\_WHISPER: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.MessageWhisperHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.MessageWhisper";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â NOTE\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.NoteCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.NoteCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â PING\_CANVAS: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.PingCanvasHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.PingCanvas";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â PLAYLIST\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.PlaylistCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.PlaylistCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â QUERY\_USER: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.QueryUserHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.QueryUser";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â REGION\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.RegionCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.RegionCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â SETTINGS\_MODIFY: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.SettingsModifyHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.SettingsModify";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â SHOW\_CURSOR: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.ShowCursorHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.ShowCursor";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â SHOW\_RULER: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.ShowRulerHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.ShowRuler";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â TOKEN\_CONFIGURE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 2;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.TokenConfigureHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.TokenConfigure";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â TOKEN\_CREATE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.TokenCreateHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.TokenCreate";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â TOKEN\_DELETE: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 3;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.TokenDeleteHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.TokenDelete";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â WALL\_DOORS: {  
Â Â Â Â Â Â Â Â Â Â Â Â defaultRole: 1;  
Â Â Â Â Â Â Â Â Â Â Â Â hint: "PERMISSION.WallDoorsHint";  
Â Â Â Â Â Â Â Â Â Â Â Â label: "PERMISSION.WallDoors";  
Â Â Â Â Â Â Â Â Â Â Â Â requiredRoles: readonly [3, 4];  
Â Â Â Â Â Â Â Â };  
Â Â Â Â },  
> = ...

Define the recognized User capabilities which individual Users or role levels may be permitted to perform