---
title: "PlaylistSoundRenderContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PlaylistSoundRenderContext.html"
category: "interfaces"
---

# Interface PlaylistSoundRenderContext

interface PlaylistSoundRenderContext {  
Â Â Â Â [css](#css): string;  
Â Â Â Â [currentTime](#currenttime): string;  
Â Â Â Â [durationTime](#durationtime): string;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [isOwner](#isowner): boolean;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [pause](#pause): { disabled: boolean; icon: string; paused: boolean };  
Â Â Â Â [play](#play): [PlaylistDirectoryControlContext](foundry.PlaylistDirectoryControlContext.md);  
Â Â Â Â [playing](#playing): boolean;  
Â Â Â Â [playlistId](#playlistid): string;  
Â Â Â Â [repeat](#repeat): boolean;  
Â Â Â Â [volume](#volume): [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
}

##### Index

### Properties

[css](#css)
[currentTime](#currenttime)
[durationTime](#durationtime)
[id](#id)
[isOwner](#isowner)
[name](#name)
[pause](#pause)
[play](#play)
[playing](#playing)
[playlistId](#playlistid)
[repeat](#repeat)
[volume](#volume)

## Properties

### css

css: string

The CSS class.

### currentTime

currentTime: string

The current playing timestamp.

### durationTime

durationTime: string

The duration timestamp.

### id

id: string

The PlaylistSound ID.

### isOwner

isOwner: boolean

Whether the current user has ownership of this PlaylistSound.

### name

name: string

The track name.

### pause

pause: { disabled: boolean; icon: string; paused: boolean }

PlaylistSound pause context.

#### Type Declaration

* ##### disabled: boolean

  Whether the pause button is disabled.
* ##### icon: string

  The pause icon.
* ##### paused: boolean

  Whether the PlaylistSound is currently paused.

### play

play: [PlaylistDirectoryControlContext](foundry.PlaylistDirectoryControlContext.md)

The play button context.

### playing

playing: boolean

Whether the PlaylistSound is currently playing.

### playlistId

playlistId: string

The parent Playlist ID.

### repeat

repeat: boolean

Whether the track is set to loop.

### volume

volume: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md)

PlaylistSound volume context.