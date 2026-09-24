---
title: "SoundPlaybackOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.SoundPlaybackOptions.html"
category: "interfaces"
---

# Interface SoundPlaybackOptions

interface SoundPlaybackOptions {  
Â Â Â Â [delay](#delay)?: number;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [fade](#fade)?: number;  
Â Â Â Â [loop](#loop)?: boolean;  
Â Â Â Â [loopEnd](#loopend)?: number;  
Â Â Â Â [loopStart](#loopstart)?: number;  
Â Â Â Â [offset](#offset)?: number;  
Â Â Â Â [onended](#onended)?: Function | null;  
Â Â Â Â [volume](#volume)?: number;  
}

##### Index

### Properties

[delay?](#delay)
[duration?](#duration)
[fade?](#fade)
[loop?](#loop)
[loopEnd?](#loopend)
[loopStart?](#loopstart)
[offset?](#offset)
[onended?](#onended)
[volume?](#volume)

## Properties

### `Optional`delay

delay?: number

A delay in seconds by which to delay playback

### `Optional`duration

duration?: number

A limited duration in seconds for which to play

### `Optional`fade

fade?: number

A duration in milliseconds over which to fade in playback

### `Optional`loop

loop?: boolean

Should sound playback loop?

### `Optional`loopEnd

loopEnd?: number

Seconds of the Audio buffer when looped playback should restart.
Only works for AudioBufferSourceNode.

### `Optional`loopStart

loopStart?: number

Seconds of the AudioBuffer when looped playback should start.
Only works for AudioBufferSourceNode.

### `Optional`offset

offset?: number

An offset in seconds at which to start playback

### `Optional`onended

onended?: Function | null

A callback function attached to the source node

### `Optional`volume

volume?: number

The volume at which to play the sound