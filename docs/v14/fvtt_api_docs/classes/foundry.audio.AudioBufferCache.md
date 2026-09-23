---
title: "AudioBufferCache | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.audio.AudioBufferCache.html"
category: "classes"
---

# Class AudioBufferCache

A specialized cache used for audio buffers.
This is an LRU cache which expires buffers from the cache once the maximum cache size is exceeded.

#### Hierarchy

* Map
  + AudioBufferCache

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[usage](#usage)

### Methods

[delete](#delete)
[getBuffer](#getbuffer)
[lock](#lock)
[setBuffer](#setbuffer)
[toString](#tostring)

## Constructors

### constructor

* new AudioBufferCache(cacheSize?: number): AudioBufferCache

  Construct an AudioBufferCache providing a maximum disk size beyond which entries are expired.

  #### Parameters

  + `Optional`cacheSize: number = ...

    The maximum cache size in bytes. 1GB by default.

  #### Returns AudioBufferCache

  Overrides Map.constructor

## Accessors

### usage

* get usage(): {  
  Â Â Â Â current: number;  
  Â Â Â Â currentString: string;  
  Â Â Â Â max: number;  
  Â Â Â Â maxString: string;  
  Â Â Â Â pct: number;  
  Â Â Â Â pctString: string;  
  }

  A string representation of the current cache utilization.

  #### Returns { Â Â Â Â current: number; Â Â Â Â currentString: string; Â Â Â Â max: number; Â Â Â Â maxString: string; Â Â Â Â pct: number; Â Â Â Â pctString: string; }

## Methods

### delete

* delete(src: string): boolean

  Delete an entry from the cache.

  #### Parameters

  + src: string

    The audio buffer source path

  #### Returns boolean

  Was the buffer deleted from the cache?

  Overrides Map.delete

### getBuffer

* getBuffer(src: string): AudioBuffer

  Retrieve an AudioBuffer from the cache.

  #### Parameters

  + src: string

    The audio buffer source path

  #### Returns AudioBuffer

  The cached audio buffer, or undefined

### lock

* lock(src: string, locked?: boolean): void

  Lock a buffer, preventing it from being expired even if it is least-recently-used.

  #### Parameters

  + src: string

    The audio buffer source path
  + `Optional`locked: boolean = true

    Lock the buffer, preventing its expiration?

  #### Returns void

### setBuffer

* setBuffer(src: string, buffer: AudioBuffer): AudioBufferCache

  Insert an AudioBuffer into the buffers cache.

  #### Parameters

  + src: string

    The audio buffer source path
  + buffer: AudioBuffer

    The audio buffer to insert

  #### Returns AudioBufferCache

### toString

* toString(): string

  #### Returns string