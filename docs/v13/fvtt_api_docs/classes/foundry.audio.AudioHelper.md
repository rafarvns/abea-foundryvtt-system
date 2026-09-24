---
title: "AudioHelper | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.audio.AudioHelper.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [audio](../modules/foundry.audio.html)
* [AudioHelper](foundry.audio.AudioHelper.html)

# Class AudioHelper

A helper class to provide common functionality for working with the Web Audio API.
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API>
A singleton instance of this class is available as game#audio.

#### See

[foundry.Game#audio](foundry.Game.html#audio)

##### Index

### Properties

[analyzer](foundry.audio.AudioHelper.html#analyzer)
[buffers](foundry.audio.AudioHelper.html#buffers)
[environment](foundry.audio.AudioHelper.html#environment)
[interface](foundry.audio.AudioHelper.html#interface)
[locked](foundry.audio.AudioHelper.html#locked)
[music](foundry.audio.AudioHelper.html#music)
[pending](foundry.audio.AudioHelper.html#pending)
[playing](foundry.audio.AudioHelper.html#playing)
[sounds](foundry.audio.AudioHelper.html#sounds)
[unlock](foundry.audio.AudioHelper.html#unlock)
[ANALYSIS\_TIMEOUT\_MS](foundry.audio.AudioHelper.html#analysis_timeout_ms)
[AUDIO\_CONTEXTS](foundry.audio.AudioHelper.html#audio_contexts)
[levelAnalyserNativeInterval](foundry.audio.AudioHelper.html#levelanalysernativeinterval)
[THRESHOLD\_CACHE\_SIZE\_BYTES](foundry.audio.AudioHelper.html#threshold_cache_size_bytes)

### Accessors

[context](foundry.audio.AudioHelper.html#context)
[globalMute](foundry.audio.AudioHelper.html#globalmute)

### Methods

[awaitFirstGesture](foundry.audio.AudioHelper.html#awaitfirstgesture)
[create](foundry.audio.AudioHelper.html#create)
[debug](foundry.audio.AudioHelper.html#debug)
[disableAnalyzer](foundry.audio.AudioHelper.html#disableanalyzer)
[enableAnalyzer](foundry.audio.AudioHelper.html#enableanalyzer)
[getAnalyzerContext](foundry.audio.AudioHelper.html#getanalyzercontext)
[getBandLevel](foundry.audio.AudioHelper.html#getbandlevel)
[getMaxBandLevel](foundry.audio.AudioHelper.html#getmaxbandlevel)
[play](foundry.audio.AudioHelper.html#play)
[preload](foundry.audio.AudioHelper.html#preload)
[startLevelReports](foundry.audio.AudioHelper.html#startlevelreports)
[stopLevelReports](foundry.audio.AudioHelper.html#stoplevelreports)
[\_activateSocketListeners](foundry.audio.AudioHelper.html#_activatesocketlisteners)
[getDefaultSoundName](foundry.audio.AudioHelper.html#getdefaultsoundname)
[hasAudioExtension](foundry.audio.AudioHelper.html#hasaudioextension)
[inputToVolume](foundry.audio.AudioHelper.html#inputtovolume)
[play](foundry.audio.AudioHelper.html#play-2)
[preloadSound](foundry.audio.AudioHelper.html#preloadsound)
[registerSettings](foundry.audio.AudioHelper.html#registersettings)
[volumeToInput](foundry.audio.AudioHelper.html#volumetoinput)
[volumeToPercentage](foundry.audio.AudioHelper.html#volumetopercentage)

## Properties

### analyzer

analyzer: [AnalysisData](../interfaces/foundry.audio.AnalysisData.html)

Analyzers for each context, plus an internal ticker. Each context key
holds data about its AnalyserNode, a Float32Array for FFT data, and so on.

### buffers

buffers: [AudioBufferCache](foundry.audio.AudioBufferCache.html) = ...

A singleton cache used for audio buffers.

### environment

environment: AudioContext

A singleton audio context used for playback of environmental audio.

### interface

interface: AudioContext

A singleton audio context used for playback of interface sounds and effects.

### locked

locked: boolean = true

A flag for whether video playback is currently locked by awaiting a user gesture

### music

music: AudioContext

A singleton audio context used for playback of music.

### pending

pending: Function[] = []

A user gesture must be registered before audio can be played.
This Array contains the Sound instances which are requested for playback prior to a gesture.
Once a gesture is observed, we begin playing all elements of this Array.

#### See

[foundry.audio.Sound](foundry.audio.Sound.html)

### playing

playing: Map<number, [Sound](foundry.audio.Sound.html)> = ...

Get a map of the Sound objects which are currently playing.

### sounds

sounds: Map<string, WeakRef<[Sound](foundry.audio.Sound.html)>> = ...

The set of singleton Sound instances which are shared across multiple uses of the same sound path.

### unlock

unlock: Promise<void>

A Promise which resolves once the game audio API is unlocked and ready to use.

### `Static`ANALYSIS\_TIMEOUT\_MS

ANALYSIS\_TIMEOUT\_MS: number = 1000

A static inactivity threshold for audio analysis, in milliseconds.
If no band value is requested for a channel within this duration,
the analyzer is disabled to conserve resources (unless the analyzer is enabled with the `keepAlive=true` option)

### `Static`AUDIO\_CONTEXTS

AUDIO\_CONTEXTS: readonly [ContextName](../types/foundry.audio.ContextName.html)[] = ...

An array containing all possible audio context names.

### `Static`levelAnalyserNativeInterval

levelAnalyserNativeInterval: number = 50

The Native interval for the AudioHelper to analyse audio levels from streams
Any interval passed to startLevelReports() would need to be a multiple of this value.

### `Static`THRESHOLD\_CACHE\_SIZE\_BYTES

THRESHOLD\_CACHE\_SIZE\_BYTES: number = ...

The cache size threshold after which audio buffers will be expired from the cache to make more room.
1 gigabyte, by default.

## Accessors

### context

* get context(): AudioContext

  For backwards compatibility, AudioHelper#context refers to the context used for music playback.

  #### Returns AudioContext

### globalMute

* get globalMute(): boolean

  A global mute which suppresses all 3 audio channels.

  #### Returns boolean

## Methods

### awaitFirstGesture

* awaitFirstGesture(): Promise<void>

  Register an event listener to await the first mousemove gesture and begin playback once observed.

  #### Returns Promise<void>

  The unlocked audio context

### create

* create(options: [SoundCreationOptions](../interfaces/foundry.audio.SoundCreationOptions.html)): [Sound](foundry.audio.Sound.html)

  Create a Sound instance for a given audio source URL

  #### Parameters

  + options: [SoundCreationOptions](../interfaces/foundry.audio.SoundCreationOptions.html)

    Sound creation options

  #### Returns [Sound](foundry.audio.Sound.html)

### debug

* debug(message: string): void

  Log a debugging message if the audio debugging flag is enabled.

  #### Parameters

  + message: string

    The message to log

  #### Returns void

### disableAnalyzer

* disableAnalyzer(contextName: [ContextName](../types/foundry.audio.ContextName.html)): void

  Disable the analyzer for a given context, disconnecting the AnalyserNode.

  #### Parameters

  + contextName: [ContextName](../types/foundry.audio.ContextName.html)

  #### Returns void

### enableAnalyzer

* enableAnalyzer(  
  Â Â Â Â contextName: [ContextName](../types/foundry.audio.ContextName.html),  
  Â Â Â Â options?: { keepAlive?: boolean },  
  ): void

  Enable the analyzer for a given context (music, environment, interface),
  attaching an AnalyserNode to its gain node if not already active.

  #### Parameters

  + contextName: [ContextName](../types/foundry.audio.ContextName.html)
  + `Optional`options: { keepAlive?: boolean } = {}
    - ##### `Optional`keepAlive?: boolean

      If true, this analyzer will not auto-disable after inactivity.

  #### Returns void

### getAnalyzerContext

* getAnalyzerContext(): AudioContext

  Returns a singleton AudioContext if one can be created.
  An audio context may not be available due to limited resources or browser compatibility
  in which case null will be returned

  #### Returns AudioContext

  A singleton AudioContext or null if one is not available

### getBandLevel

* getBandLevel(  
  Â Â Â Â contextName: [ContextName](../types/foundry.audio.ContextName.html),  
  Â Â Â Â bandName: [BandName](../types/foundry.audio.BandName.html),  
  Â Â Â Â options?: { ignoreVolume?: boolean },  
  ): number

  Returns a normalized band value in [0,1].
  Optionally, we can subtract the actual gainNode (global) volume from the measurement.

  + Important:
    - Local gain applied to [foundry.audio.Sound](foundry.audio.Sound.html) source can't be ignored.
    - If this method needs to activate the analyzer, the latter requires a brief warm-up.
      One or two frames may be needed before it produces meaningful values (instead of returning 0).

  #### Parameters

  + contextName: [ContextName](../types/foundry.audio.ContextName.html)
  + bandName: [BandName](../types/foundry.audio.BandName.html)
  + `Optional`options: { ignoreVolume?: boolean } = {}
    - ##### `Optional`ignoreVolume?: boolean

      If true, remove the real-time channel volume from the measurement.

  #### Returns number

  The normalized band value in [0,1].

### getMaxBandLevel

* getMaxBandLevel(band?: [BandName](../types/foundry.audio.BandName.html), options?: { ignoreVolume?: boolean }): number

  Retrieve a single "peak" analyzer value across the three main audio contexts (music, environment, interface).
  This takes the maximum of the three normalized [0,1] values for a given frequency band.

  #### Parameters

  + `Optional`band: [BandName](../types/foundry.audio.BandName.html) = "all"

    The frequency band for which to retrieve an analyzer value.
  + `Optional`options: { ignoreVolume?: boolean } = {}
    - ##### `Optional`ignoreVolume?: boolean

      If true, remove the real-time channel volume from the measurement.

  #### Returns number

  A number in the [0,1] range representing the loudest band value among the three contexts.

### play

* play(src: string, options?: { context?: AudioContext }): Promise<[Sound](foundry.audio.Sound.html)>

  Play a single Sound by providing its source.

  #### Parameters

  + src: string

    The file path to the audio source being played
  + `Optional`options: { context?: AudioContext } = {}

    Additional options which configure playback

    - ##### `Optional`context?: AudioContext

      A specific AudioContext within which to play

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  The created Sound which is now playing

### preload

* preload(src: string): Promise<[Sound](foundry.audio.Sound.html)>

  Request that other connected clients begin preloading a certain sound path.

  #### Parameters

  + src: string

    The source file path requested for preload

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  A Promise which resolves once the preload is complete

### startLevelReports

* startLevelReports(  
  Â Â Â Â id: string,  
  Â Â Â Â stream: MediaStream,  
  Â Â Â Â callback: Function,  
  Â Â Â Â interval?: number,  
  Â Â Â Â smoothing?: number,  
  ): boolean

  Registers a stream for periodic reports of audio levels.
  Once added, the callback will be called with the maximum decibel level of
  the audio tracks in that stream since the last time the event was fired.
  The interval needs to be a multiple of AudioHelper.levelAnalyserNativeInterval which defaults at 50ms

  #### Parameters

  + id: string

    An id to assign to this report. Can be used to stop reports
  + stream: MediaStream

    The MediaStream instance to report activity on.
  + callback: Function

    The callback function to call with the decibel level. `callback(dbLevel)`
  + `Optional`interval: number = 50

    The interval at which to produce reports.
  + `Optional`smoothing: number = 0.1

    The smoothingTimeConstant to set on the audio analyser.

  #### Returns boolean

  Returns whether listening to the stream was successful

### stopLevelReports

* stopLevelReports(id: string): void

  Stop sending audio level reports
  This stops listening to a stream and stops sending reports.
  If we aren't listening to any more streams, cancel the global analyser timer.

  #### Parameters

  + id: string

    The id of the reports that passed to startLevelReports.

  #### Returns void

### `Static`\_activateSocketListeners

* \_activateSocketListeners(  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): void

  Open socket listeners which transact ChatMessage data

  #### Parameters

  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

  #### Returns void

### `Static`getDefaultSoundName

* getDefaultSoundName(src: string): string

  Given an input file path, determine a default name for the sound based on the filename

  #### Parameters

  + src: string

    An input file path

  #### Returns string

  A default sound name for the path

### `Static`hasAudioExtension

* hasAudioExtension(src: string): boolean

  Test whether a source file has a supported audio extension type

  #### Parameters

  + src: string

    A requested audio source path

  #### Returns boolean

  Does the filename end with a valid audio extension?

### `Static`inputToVolume

* inputToVolume(value: string | number, order?: number): number

  Returns the volume value based on a range input volume control's position.
  This is using an exponential approximation of the logarithmic nature of audio level perception

  #### Parameters

  + value: string | number

    Value between [0, 1] of the range input
  + `Optional`order: number = 1.5

    The exponent of the curve

  #### Returns number

### `Static`play

* play(  
  Â Â Â Â data: {  
  Â Â Â Â Â Â Â Â autoplay?: boolean;  
  Â Â Â Â Â Â Â Â channel?: string;  
  Â Â Â Â Â Â Â Â loop?: boolean;  
  Â Â Â Â Â Â Â Â src: string;  
  Â Â Â Â Â Â Â Â volume?: number;  
  Â Â Â Â },  
  Â Â Â Â socketOptions?: boolean | { recipients: string[] },  
  ): void | [Sound](foundry.audio.Sound.html)

  Play a one-off sound effect which is not part of a Playlist

  #### Parameters

  + data: {  
    Â Â Â Â autoplay?: boolean;  
    Â Â Â Â channel?: string;  
    Â Â Â Â loop?: boolean;  
    Â Â Â Â src: string;  
    Â Â Â Â volume?: number;  
    }

    An object configuring the audio data to play.

    - ##### `Optional`autoplay?: boolean

      Begin playback of the audio effect immediately once it is loaded.
      Default: `false`.
    - ##### `Optional`channel?: string

      An audio channel in CONST.AUDIO\_CHANNELS where the sound should play.
      Default: `"interface"`.
    - ##### `Optional`loop?: boolean

      Loop the audio effect and continue playing it until it is manually stopped.
      Default: `false`.
    - ##### src: string

      The audio source file path, either a public URL or a local path relative to the
      public directory.
    - ##### `Optional`volume?: number

      The volume level at which to play the audio, between 0 and 1. Default: `1`.
  + `Optional`socketOptions: boolean | { recipients: string[] }

    Options which only apply when emitting playback over
    websocket. As a boolean, emits (true) or does not emit (false) playback to all other clients.
    As an object, can configure which recipients (an array of User IDs) should receive the event
    (all clients by default). Default: `false`.

  #### Returns void | [Sound](foundry.audio.Sound.html)

  A Sound instance which controls audio playback, or nothing if `data.autoplay` is false.

  #### Example: Play the sound of a locked door for all players

  ```
  AudioHelper.play({src: "sounds/lock.wav", volume: 0.8, loop: false}, true);
  Copy
  ```

### `Static`preloadSound

* preloadSound(src: string): Promise<[Sound](foundry.audio.Sound.html)>

  Begin loading the sound for a provided source URL adding its

  #### Parameters

  + src: string

    The audio source path to preload

  #### Returns Promise<[Sound](foundry.audio.Sound.html)>

  The created and loaded Sound ready for playback

### `Static`registerSettings

* registerSettings(): void

  Register client-level settings for global volume controls.

  #### Returns void

### `Static`volumeToInput

* volumeToInput(volume: number, order?: number): number

  Counterpart to inputToVolume()
  Returns the input range value based on a volume

  #### Parameters

  + volume: number

    Value between [0, 1] of the volume level
  + `Optional`order: number = 1.5

    The exponent of the curve

  #### Returns number

### `Static`volumeToPercentage

* volumeToPercentage(  
  Â Â Â Â volume: number,  
  Â Â Â Â options?: { decimalPlaces?: number; label?: boolean },  
  ): string

  Converts a volume level to a human-readable percentage value.

  #### Parameters

  + volume: number

    Value in the interval [0, 1] of the volume level.
  + `Optional`options: { decimalPlaces?: number; label?: boolean } = {}
    - ##### `Optional`decimalPlaces?: number

      The number of decimal places to round the percentage to.
    - ##### `Optional`label?: boolean

      Prefix the returned tooltip with a localized 'Volume: ' label. This
      should be used if the returned string is intended for assistive
      technologies, such as the aria-valuetext attribute.

  #### Returns string