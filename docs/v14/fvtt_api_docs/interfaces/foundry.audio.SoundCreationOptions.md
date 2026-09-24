---
title: "SoundCreationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.SoundCreationOptions.html"
category: "interfaces"
---

# Interface SoundCreationOptions

interface SoundCreationOptions {  
Â Â Â Â [autoplay](#autoplay)?: boolean;  
Â Â Â Â [autoplayOptions](#autoplayoptions)?: [SoundPlaybackOptions](foundry.audio.SoundPlaybackOptions.md);  
Â Â Â Â [context](#context)?: AudioContext;  
Â Â Â Â [preload](#preload)?: boolean;  
Â Â Â Â [singleton](#singleton)?: boolean;  
Â Â Â Â [src](#src): string;  
}

##### Index

### Properties

[autoplay?](#autoplay)
[autoplayOptions?](#autoplayoptions)
[context?](#context)
[preload?](#preload)
[singleton?](#singleton)
[src](#src)

## Properties

### `Optional`autoplay

autoplay?: boolean

Begin playing the audio as soon as it is ready?

### `Optional`autoplayOptions

autoplayOptions?: [SoundPlaybackOptions](foundry.audio.SoundPlaybackOptions.md)

Options passed to the play method if autoplay is true

### `Optional`context

context?: AudioContext

A specific AudioContext to attach the sound to

### `Optional`preload

preload?: boolean

Begin loading the audio immediately?

### `Optional`singleton

singleton?: boolean

Reuse an existing Sound for this source?

### src

src: string

The source URL for the audio file