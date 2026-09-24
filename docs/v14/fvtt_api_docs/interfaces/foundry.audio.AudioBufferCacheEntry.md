---
title: "AudioBufferCacheEntry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.AudioBufferCacheEntry.html"
category: "interfaces"
---

# Interface AudioBufferCacheEntry

interface AudioBufferCacheEntry {  
Â Â Â Â [buffer](#buffer): AudioBuffer;  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [next](#next)?: AudioBufferCacheEntry;  
Â Â Â Â [previous](#previous)?: AudioBufferCacheEntry;  
Â Â Â Â [size](#size): number;  
Â Â Â Â [src](#src): string;  
}

##### Index

### Properties

[buffer](#buffer)
[locked?](#locked)
[next?](#next)
[previous?](#previous)
[size](#size)
[src](#src)

## Properties

### buffer

buffer: AudioBuffer

### `Optional`locked

locked?: boolean

### `Optional`next

next?: AudioBufferCacheEntry

### `Optional`previous

previous?: AudioBufferCacheEntry

### size

size: number

### src

src: string