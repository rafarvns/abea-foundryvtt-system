---
title: "ConvolverEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.audio.ConvolverEffect.html"
category: "classes"
---

# Class ConvolverEffect

A sound effect which applies a convolver filter.
The convolver effect splits the input sound into two separate paths:

1. A "dry" node which is the original sound
2. A "wet" node which contains the result of the convolution
   This effect mixes between the dry and wet channels based on the intensity of the reverb effect.

#### See

<https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode>

#### Hierarchy

* ConvolverNode
  + ConvolverEffect

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[intensity](#intensity)

### Methods

[connect](#connect)
[disconnect](#disconnect)
[onConnectFrom](#onconnectfrom)
[update](#update)

## Constructors

### constructor

* new ConvolverEffect(  
  Â Â Â Â context: AudioContext,  
  Â Â Â Â options?: { impulseResponsePath?: string; intensity?: number },  
  ): ConvolverEffect

  A ConvolverEffect is constructed by passing the following parameters.

  #### Parameters

  + context: AudioContext

    The audio context required by the ConvolverNode
  + `Optional`options: { impulseResponsePath?: string; intensity?: number } = {}

    Additional options which modify the ConvolverEffect behavior

    - ##### `Optional`impulseResponsePath?: string

      The file path to the impulse response buffer to use
    - ##### `Optional`intensity?: number

      The initial intensity of the effect

  #### Returns ConvolverEffect

  Overrides ConvolverNode.constructor

## Accessors

### intensity

* get intensity(): number

  Adjust the intensity of the effect on a scale of 0 to 10.

  #### Returns number

## Methods

### connect

* connect(destinationNode: any, ...args: any[]): any

  #### Parameters

  + destinationNode: any
  + ...args: any[]

  #### Returns any

  Overrides ConvolverNode.connect

### disconnect

* disconnect(...args: any[]): void

  #### Parameters

  + ...args: any[]

  #### Returns void

  Overrides ConvolverNode.disconnect

### onConnectFrom

* onConnectFrom(sourceNode: AudioNode): void

  Additional side effects performed when some other AudioNode connects to this one.
  This behavior is not supported by the base WebAudioAPI but is needed here for more complex effects.

  #### Parameters

  + sourceNode: AudioNode

    An upstream source node that is connecting to this one

  #### Returns void

### update

* update(options?: { intensity?: number }): void

  Update the state of the effect node given the active flag and numeric intensity.

  #### Parameters

  + options: { intensity?: number } = {}

    Options which are updated

    - ##### `Optional`intensity?: number

      A new effect intensity

  #### Returns void