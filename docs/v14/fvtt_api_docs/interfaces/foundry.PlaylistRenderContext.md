---
title: "PlaylistRenderContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PlaylistRenderContext.html"
category: "interfaces"
---

# Interface PlaylistRenderContext

interface PlaylistRenderContext {  
Â Â Â Â [css](#css): string;  
Â Â Â Â [disabled](#disabled): boolean;  
Â Â Â Â [expanded](#expanded): boolean;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [isOwner](#isowner): boolean;  
Â Â Â Â [mode](#mode): [PlaylistDirectoryControlContext](foundry.PlaylistDirectoryControlContext.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [sounds](#sounds): [PlaylistSoundRenderContext](foundry.PlaylistSoundRenderContext.md)[];  
}

##### Index

### Properties

[css](#css)
[disabled](#disabled)
[expanded](#expanded)
[id](#id)
[isOwner](#isowner)
[mode](#mode)
[name](#name)
[sounds](#sounds)

## Properties

### css

css: string

The CSS class.

### disabled

disabled: boolean

Whether the Playlist is currently disabled.

### expanded

expanded: boolean

Whether the Playlist is expanded in the sidebar.

### id

id: string

The Playlist ID.

### isOwner

isOwner: boolean

Whether the current user has ownership of this Playlist.

### mode

mode: [PlaylistDirectoryControlContext](foundry.PlaylistDirectoryControlContext.md)

The mode icon context.

### name

name: string

The Playlist name.

### sounds

sounds: [PlaylistSoundRenderContext](foundry.PlaylistSoundRenderContext.md)[]

Render context for this Playlist's PlaylistSounds.