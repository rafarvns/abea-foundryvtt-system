---
title: "AudioTimeout | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.audio.AudioTimeout.html"
category: "classes"
---

# Class AudioTimeout

A framework for scheduled audio events with more precise and synchronized timing than using window.setTimeout.
This approach creates an empty audio buffer of the desired duration played using the shared game audio context.
The onended event of the AudioBufferSourceNode provides a very precise way to synchronize audio events.
For audio timing, this is preferable because it avoids numerous issues with window.setTimeout.

#### Example: Using a callback function

```
function playForDuration(sound, duration) {  
  sound.play();  
  const wait = new AudioTimeout(duration, {callback: () => sound.stop()})  
}
Copy
```

#### Example: Using an awaited Promise

```
async function playForDuration(sound, duration) {  
  sound.play();  
  const timeout = new AudioTimeout(delay);  
  await timeout.complete;  
  sound.stop();  
}
Copy
```

#### Example: Using the wait helper

```
async function playForDuration(sound, duration) {  
  sound.play();  
  await AudioTimeout.wait(duration);  
  sound.stop();  
}
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Properties

[complete](#complete)

### Accessors

[cancelled](#cancelled)

### Methods

[cancel](#cancel)
[end](#end)
[wait](#wait)

## Constructors

### constructor

* new AudioTimeout(delayMS: number, options?: [AudioTimeoutOptions](../interfaces/foundry.AudioTimeoutOptions.md)): AudioTimeout

  Create an AudioTimeout by providing a delay and callback.

  #### Parameters

  + delayMS: number

    A desired delay timing in milliseconds
  + `Optional`options: [AudioTimeoutOptions](../interfaces/foundry.AudioTimeoutOptions.md) = {}

    Additional options which modify timeout behavior

  #### Returns AudioTimeout

## Properties

### complete

complete: Promise<any>

Is the timeout complete?
This can be used to await the completion of the AudioTimeout if necessary.
The Promise resolves to the returned value of the provided callback function.

## Accessors

### cancelled

* get cancelled(): boolean

  Is this audio timeout cancelled?

  #### Returns boolean

## Methods

### cancel

* cancel(): void

  Cancel an AudioTimeout by ending it early, rejecting its completion promise, and skipping any callback function.

  #### Returns void

### end

* end(): void

  End the timeout, either on schedule or prematurely. Executing any callback function

  #### Returns void

### `Static`wait

* wait(delayMS: number, options?: [AudioTimeoutOptions](../interfaces/foundry.AudioTimeoutOptions.md)): Promise<any>

  Schedule a task according to some audio timeout.

  #### Parameters

  + delayMS: number

    A desired delay timing in milliseconds
  + `Optional`options: [AudioTimeoutOptions](../interfaces/foundry.AudioTimeoutOptions.md)

    Additional options which modify timeout behavior

  #### Returns Promise<any>

  A promise which resolves as a returned value of the callback or void