---
title: "Sound | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.audio.Sound.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [audio](../modules/foundry.audio.html)
* [Sound](foundry.audio.Sound.html)

# Class Sound

A container around an AudioNode which manages sound playback in Foundry Virtual Tabletop.
Each Sound is either an AudioBufferSourceNode (for short sources) or a MediaElementAudioSourceNode (for long ones).
This class provides an interface around both types which allows standardized control over playback.

#### See

#### Hierarchy ([View Summary](../hierarchy.html#foundry.audio.Sound))

* [EventEmitter](foundry.EventEmitter.html)<Function, this>
  + Sound

##### Index

### Constructors

[constructor](foundry.audio.Sound.html#constructor)

### Properties

[\_manager](foundry.audio.Sound.html#_manager)
[buffer](foundry.audio.Sound.html#buffer)
[destination](foundry.audio.Sound.html#destination)
[effects](foundry.audio.Sound.html#effects)
[element](foundry.audio.Sound.html#element)
[gainNode](foundry.audio.Sound.html#gainnode)
[id](foundry.audio.Sound.html#id)
[pausedTime](foundry.audio.Sound.html#pausedtime)
[src](foundry.audio.Sound.html#src)
[startTime](foundry.audio.Sound.html#starttime)
[\_state](foundry.audio.Sound.html#_state)
[emittedEvents](foundry.audio.Sound.html#emittedevents)
[MAX\_BUFFER\_DURATION](foundry.audio.Sound.html#max_buffer_duration)
[STATES](foundry.audio.Sound.html#states)

### Accessors

[context](foundry.audio.Sound.html#context)
[currentTime](foundry.audio.Sound.html#currenttime)
[duration](foundry.audio.Sound.html#duration)
[failed](foundry.audio.Sound.html#failed)
[gain](foundry.audio.Sound.html#gain)
[isBuffer](foundry.audio.Sound.html#isbuffer)
[loaded](foundry.audio.Sound.html#loaded)
[loop](foundry.audio.Sound.html#loop)
[playing](foundry.audio.Sound.html#playing)
[sourceNode](foundry.audio.Sound.html#sourcenode)
[volume](foundry.audio.Sound.html#volume)

### Methods

[addEventListener](foundry.audio.Sound.html#addeventlistener)
[applyEffects](foundry.audio.Sound.html#applyeffects)
[dispatchEvent](foundry.audio.Sound.html#dispatchevent)
[fade](foundry.audio.Sound.html#fade)
[load](foundry.audio.Sound.html#load)
[pause](foundry.audio.Sound.html#pause)
[play](foundry.audio.Sound.html#play)
[playAtPosition](foundry.audio.Sound.html#playatposition)
[removeEventListener](foundry.audio.Sound.html#removeeventlistener)
[schedule](foundry.audio.Sound.html#schedule)
[stop](foundry.audio.Sound.html#stop)
[unschedule](foundry.audio.Sound.html#unschedule)
[unscheduleAll](foundry.audio.Sound.html#unscheduleall)
[wait](foundry.audio.Sound.html#wait)
[\_connectPipeline](foundry.audio.Sound.html#_connectpipeline)
[\_createNodes](foundry.audio.Sound.html#_createnodes)
[\_disconnectPipeline](foundry.audio.Sound.html#_disconnectpipeline)
[\_load](foundry.audio.Sound.html#_load)
[\_pause](foundry.audio.Sound.html#_pause)
[\_play](foundry.audio.Sound.html#_play)
[\_stop](foundry.audio.Sound.html#_stop)

## Constructors

### constructor

* new Sound(  
  Â Â Â Â src: string,  
  Â Â Â Â options?: { context?: AudioContext; forceBuffer?: boolean },  
  ): [Sound](foundry.audio.Sound.html)

  Construct a Sound by providing the source URL and other options.

  #### Parameters

  + src: string

    The audio source path, either a relative path or a remote URL
  + `Optional`options: { context?: AudioContext; forceBuffer?: boolean } = {}

    Additional options which configure the Sound

    - ##### `Optional`context?: AudioContext

      A non-default audio context within which the sound should play
    - ##### `Optional`forceBuffer?: boolean

      Force use of an AudioBufferSourceNode even if the audio duration is long

  #### Returns [Sound](foundry.audio.Sound.html)

  Overrides EventEmitterMixin().constructor

## Properties

### `Internal`\_manager

\_manager: any = null

An internal reference to some object which is managing this Sound instance.

### buffer

buffer: null | AudioBuffer = null

An AudioBuffer instance, if this Sound uses an AudioBufferSourceNode for playback.

### destination

destination: AudioNode

The AudioNode destination which is the output target for the Sound.

### effects

effects: AudioNode[] = []

A pipeline of AudioNode instances to be applied to Sound playback.

### element

element: null | HTMLAudioElement = null

An HTMLAudioElement, if this Sound uses a MediaElementAudioSourceNode for playback.

### gainNode

gainNode: GainNode

The GainNode used to control volume for this sound.

### id

id: number

A unique integer identifier for this sound.

### pausedTime

pausedTime: number

The time in seconds at which playback was paused.

### src

src: string

The audio source path.
Either a relative path served by the running Foundry VTT game server or a remote URL.

### startTime

startTime: number

The time in seconds at which playback was started.

### `Protected`\_state

\_state: number = Sound.STATES.NONE

The life-cycle state of the sound.

#### See

### `Static`emittedEvents

emittedEvents: string[] = ...

Overrides EventEmitterMixin().emittedEvents

### `Static`MAX\_BUFFER\_DURATION

MAX\_BUFFER\_DURATION: number = ...

The maximum duration, in seconds, for which an AudioBufferSourceNode will be used.
Otherwise, a MediaElementAudioSourceNode will be used.

### `Static`STATES

STATES: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â FAILED: -1;  
Â Â Â Â Â Â Â Â LOADED: 2;  
Â Â Â Â Â Â Â Â LOADING: 1;  
Â Â Â Â Â Â Â Â NONE: 0;  
Â Â Â Â Â Â Â Â PAUSED: 5;  
Â Â Â Â Â Â Â Â PLAYING: 4;  
Â Â Â Â Â Â Â Â STARTING: 3;  
Â Â Â Â Â Â Â Â STOPPED: 7;  
Â Â Â Â Â Â Â Â STOPPING: 6;  
Â Â Â Â },  
> = ...

The sequence of container loading states.

## Accessors

### context

* get context(): AudioContext

  The audio context within which this Sound is played.

  #### Returns AudioContext

### currentTime

* get currentTime(): number

  The current playback time of the sound.

  #### Returns number

### duration

* get duration(): number

  The total duration of the audio source in seconds.

  #### Returns number

### failed

* get failed(): boolean

  Did the audio file fail to load.

  #### Returns boolean

### gain

* get gain(): AudioParam

  A convenience reference to the GainNode gain audio parameter.

  #### Returns AudioParam

### isBuffer

* get isBuffer(): boolean

  Does this Sound use an AudioBufferSourceNode?
  Otherwise, the Sound uses a streamed MediaElementAudioSourceNode.

  #### Returns boolean

### loaded

* get loaded(): boolean

  Has the audio file been loaded either fully or for streaming.

  #### Returns boolean

### loop

* get loop(): boolean

  Is the sound looping?

  #### Returns boolean

### playing

* get playing(): boolean

  Is this sound currently playing?

  #### Returns boolean

### sourceNode

* get sourceNode(): AudioBufferSourceNode | MediaElementAudioSourceNode

  The AudioSourceNode used to control sound playback.

  #### Returns AudioBufferSourceNode | MediaElementAudioSourceNode

### volume

* get volume(): number

  The currently playing volume of the sound.
  Undefined until playback has started for the first time.

  #### Returns number

## Methods

### addEventListener

* addEventListener(  
  Â Â Â Â type: string,  
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from EventEmitterMixin().addEventListener

### applyEffects

* applyEffects(effects?: AudioNode[]): void

  Update the array of effects applied to a Sound instance.
  Optionally a new array of effects can be assigned. If no effects are passed, the current effects are re-applied.

  #### Parameters

  + `Optional`effects: AudioNode[]

    An array of AudioNode effects to apply

  #### Returns void

### dispatchEvent

* dispatchEvent(event: Event): boolean

  Dispatch an event on this target.

  #### Parameters

  + event: Event

    The Event to dispatch

  #### Returns boolean

  Was default behavior for the event prevented?

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent>

  Inherited from EventEmitterMixin().dispatchEvent

### fade

* fade(  
  Â Â Â Â volume: number,  
  Â Â Â Â options?: { duration?: number; from?: number; type?: string },  
  ): Promise<void>

  Fade the volume for this sound between its current level and a desired target volume.

  #### Parameters

  + volume: number

    The desired target volume level between 0 and 1
  + `Optional`options: { duration?: number; from?: number; type?: string } = {}

    Additional options that configure the fade operation

    - ##### `Optional`duration?: number

      The duration of the fade effect in milliseconds
    - ##### `Optional`from?: number

      A volume level to start from, the current volume by default
    - ##### `Optional`type?: string

      The type of fade easing, "linear" or "exponential"

  #### Returns Promise<void>

  A Promise that resolves after the requested fade duration

### load

* load(  
  Â Â Â Â options?: { autoplay?: boolean; autoplayOptions?: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html) },  
  ): Promise<[Sound](foundry.audio.Sound.html)>

  Load the audio source and prepare it for playback, either using an AudioBuffer or a streamed HTMLAudioElement.

  #### Parameters

  + `Optional`options: { autoplay?: boolean; autoplayOptions?: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html) } = {}

    Additional options which affect resource loading

    - ##### `Optional`autoplay?: boolean

      Automatically begin playback of the sound once loaded
    - ##### `Optional`autoplayOptions?: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html)

      Playback options passed to Sound#play, if autoplay

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  A Promise which resolves to the Sound once it is loaded

### pause

* pause(): void

  Pause playback of the Sound.
  For AudioBufferSourceNode this stops playback after recording the current time.
  Calling Sound#play will resume playback from the pausedTime unless some other offset is passed.
  For a MediaElementAudioSourceNode this simply calls the HTMLAudioElement#pause method directly.

  #### Returns void

### play

* play(options?: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html), ...args?: any): Promise<[Sound](foundry.audio.Sound.html)>

  Begin playback for the Sound.
  This method is asynchronous because playback may not start until after an initially provided delay.
  The Promise resolves *before* the fade-in of any configured volume transition.

  #### Parameters

  + `Optional`options: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html)

    Options which configure the beginning of sound playback
  + ...args: any = {}

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  A Promise which resolves once playback has started (excluding fade)

### playAtPosition

* playAtPosition(  
  Â Â Â Â origin: any,  
  Â Â Â Â radius: number,  
  Â Â Â Â options?: [PositionalSoundPlaybackOptions](../interfaces/foundry.PositionalSoundPlaybackOptions.html),  
  ): Promise<null | [Sound](foundry.audio.Sound.html)>

  Play a one-shot Sound originating from a predefined point on the canvas.
  The sound plays locally for the current client only.
  To play a sound for all connected clients use [foundry.canvas.layers.SoundsLayer#emitAtPosition](foundry.canvas.layers.SoundsLayer.html#emitatposition).
  A helper which does not depend on a pre-existing Sound instance is available at
  [foundry.canvas.layers.SoundsLayer#playAtPosition](foundry.canvas.layers.SoundsLayer.html#playatposition).

  #### Parameters

  + origin: any

    The canvas coordinates from which the sound originates
  + radius: number

    The radius of effect in distance units
  + options: [PositionalSoundPlaybackOptions](../interfaces/foundry.PositionalSoundPlaybackOptions.html) = {}

    Additional options which configure playback

  #### Returns Promise<null | [Sound](foundry.audio.Sound.html)>

  A Promise which resolves to the played Sound, or null

  #### Example: Play the sound of a trap springing

  ```
  const sound = new Sound("modules/my-module/sounds/spring-trap.ogg", {context: game.audio.environment});  
  await sound.load();  
  const origin = {x: 5200, y: 3700};  // The origin point for the sound  
  const radius = 30;                  // Audible in a 30-foot radius  
  await sound.playAtPosition(origin, radius);
  Copy
  ```

  #### Example: A Token casts a spell

  ```
  const sound = new Sound("modules/my-module/sounds/spells-sprite.ogg", {context: game.audio.environment});  
  const origin = token.center;         // The origin point for the sound  
  const radius = 60;                   // Audible in a 60-foot radius  
  await sound.playAtPosition(origin, radius, {  
    walls: false,                      // Not constrained by walls with a lowpass muffled effect  
    muffledEffect: {type: "lowpass", intensity: 6},  
    sourceData: {  
      angle: 120,                      // Sound emitted at a limited angle  
      rotation: 270                    // Configure the direction of sound emission  
    }  
    playbackOptions: {  
      loopStart: 12,                   // Audio sprite timing  
      loopEnd: 16,  
      fade: 300,                      // Fade-in 300ms  
      onended: () => console.log("Do something after the spell sound has played")  
    }  
  });
  Copy
  ```

### removeEventListener

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from EventEmitterMixin().removeEventListener

### schedule

* schedule(fn: [SoundScheduleCallback](../types/foundry.audio.SoundScheduleCallback.html), playbackTime: number): Promise<any>

  Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.

  #### Parameters

  + fn: [SoundScheduleCallback](../types/foundry.audio.SoundScheduleCallback.html)

    A function that will be called with this Sound as its single argument
  + playbackTime: number

    The desired playback time at which the function should be called

  #### Returns Promise<any>

  A Promise which resolves to the returned value of the provided function once
  it has been evaluated.

  #### Example: Schedule audio playback changes

  ```
  sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);  
  sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);  
  sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
  Copy
  ```

### stop

* stop(options?: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html)): Promise<[Sound](foundry.audio.Sound.html)>

  Stop playback for the Sound.
  This method is asynchronous because playback may not stop until after an initially provided delay.
  The Promise resolves *after* the fade-out of any configured volume transition.

  #### Parameters

  + `Optional`options: [SoundPlaybackOptions](../interfaces/foundry.audio.SoundPlaybackOptions.html) = {}

    Options which configure the stopping of sound playback

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  A Promise which resolves once playback is fully stopped (including fade)

### unschedule

* unschedule(handle: [AudioTimeout](foundry.audio.AudioTimeout.html) | { timeout: [AudioTimeout](foundry.audio.AudioTimeout.html) }): void

  Cancel one scheduled event created with [Sound#schedule](foundry.audio.Sound.html#schedule).
  You may pass either the [AudioTimeout](foundry.audio.AudioTimeout.html) returned internally or the Promise returned by [Sound#schedule](foundry.audio.Sound.html#schedule).

  #### Parameters

  + handle: [AudioTimeout](foundry.audio.AudioTimeout.html) | { timeout: [AudioTimeout](foundry.audio.AudioTimeout.html) }

    The handle to cancel.

  #### Returns void

### unscheduleAll

* unscheduleAll(): void

  Cancel all events that are still scheduled for this sound.

  #### Returns void

### wait

* wait(duration: number): Promise<void>

  Wait a certain scheduled duration within this sound's own AudioContext.

  #### Parameters

  + duration: number

    The duration to wait in milliseconds

  #### Returns Promise<void>

  A promise which resolves after the waited duration

### `Protected`\_connectPipeline

* \_connectPipeline(): void

  `Protected`

  Create the audio pipeline used to play this Sound.
  The GainNode is reused each time to link volume changes across multiple playbacks.
  The AudioSourceNode is re-created every time that Sound#play is called.

  #### Returns void

### `Protected`\_createNodes

* \_createNodes(): void

  `Protected`

  Create any AudioNode instances required for playback of this Sound.

  #### Returns void

### `Protected`\_disconnectPipeline

* \_disconnectPipeline(): void

  `Protected`

  Disconnect the audio pipeline once playback is stopped.
  Walk backwards along the Sound##pipeline from the Sound#destination, disconnecting each node.

  #### Returns void

### `Protected`\_load

* \_load(): Promise<void>

  `Protected`

  An inner method which handles loading so that it can be de-duplicated under a single shared Promise resolution.
  This method is factored out to allow for subclasses to override loading behavior.

  #### Returns Promise<void>

  A Promise which resolves once the sound is loaded

  #### Throws

  An error if loading failed for any reason

### `Protected`\_pause

* \_pause(): void

  `Protected`

  Pause playback of the Sound.
  This method is factored out so that subclass implementations of Sound can implement alternative behavior.

  #### Returns void

### `Protected`\_play

* \_play(): void

  `Protected`

  Begin playback for the configured pipeline and playback options.
  This method is factored out so that subclass implementations of Sound can implement alternative behavior.

  #### Returns void

### `Protected`\_stop

* \_stop(): void

  `Protected`

  Stop playback of the Sound.
  This method is factored out so that subclass implementations of Sound can implement alternative behavior.

  #### Returns void