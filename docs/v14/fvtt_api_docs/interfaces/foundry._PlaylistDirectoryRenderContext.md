---
title: "_PlaylistDirectoryRenderContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry._PlaylistDirectoryRenderContext.html"
category: "interfaces"
---

# Interface \_PlaylistDirectoryRenderContext

interface \_PlaylistDirectoryRenderContext {  
Â Â Â Â [controls](#controls): {  
Â Â Â Â Â Â Â Â environment: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
Â Â Â Â Â Â Â Â expanded: boolean;  
Â Â Â Â Â Â Â Â interface: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
Â Â Â Â Â Â Â Â music: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
Â Â Â Â };  
Â Â Â Â [currentlyPlaying](#currentlyplaying): {  
Â Â Â Â Â Â Â Â class: string;  
Â Â Â Â Â Â Â Â location: { bottom: boolean; top: boolean };  
Â Â Â Â Â Â Â Â pin: { caret: string; label: string };  
Â Â Â Â Â Â Â Â sounds: [PlaylistSoundRenderContext](foundry.PlaylistSoundRenderContext.md)[];  
Â Â Â Â };  
Â Â Â Â [tree](#tree): [PlaylistDirectoryTreeContext](foundry.PlaylistDirectoryTreeContext.md);  
}

##### Index

### Properties

[controls](#controls)
[currentlyPlaying](#currentlyplaying)
[tree](#tree)

## Properties

### controls

controls: {  
Â Â Â Â environment: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
Â Â Â Â expanded: boolean;  
Â Â Â Â interface: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
Â Â Â Â music: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md);  
}

Volume control context.

#### Type Declaration

* ##### environment: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md)

  Environment volume context.
* ##### expanded: boolean

  The expanded state of the volume controls.
* ##### interface: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md)

  Interface volume context.
* ##### music: [PlaylistDirectoryVolumeContext](foundry.PlaylistDirectoryVolumeContext.md)

  Music volume context.

### currentlyPlaying

currentlyPlaying: {  
Â Â Â Â class: string;  
Â Â Â Â location: { bottom: boolean; top: boolean };  
Â Â Â Â pin: { caret: string; label: string };  
Â Â Â Â sounds: [PlaylistSoundRenderContext](foundry.PlaylistSoundRenderContext.md)[];  
}

Currently playing context.

#### Type Declaration

* ##### class: string

  The CSS class of the currently playing widget.
* ##### location: { bottom: boolean; top: boolean }

  Location information for the currently playing
  widget.

  + ##### bottom: boolean

    The widget is affixed to the bottom of the
    directory.
  + ##### top: boolean

    The widget is affixed to the top of the directory.
* ##### pin: { caret: string; label: string }

  Render context for the currently playing pin icon.

  + ##### caret: string

    The icon class.
  + ##### label: string

    The icon tooltip.
* ##### sounds: [PlaylistSoundRenderContext](foundry.PlaylistSoundRenderContext.md)[]

  Render context for the currently playing
  PlaylistSound documents.

### tree

tree: [PlaylistDirectoryTreeContext](foundry.PlaylistDirectoryTreeContext.md)

Render context for the directory tree.