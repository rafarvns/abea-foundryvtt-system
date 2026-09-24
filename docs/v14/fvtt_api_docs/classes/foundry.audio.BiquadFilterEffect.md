---
title: "BiquadFilterEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.audio.BiquadFilterEffect.html"
category: "classes"
---

# Class BiquadFilterEffect

A sound effect which applies a biquad filter.

#### See

<https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode>

#### Hierarchy

* BiquadFilterNode
  + BiquadFilterEffect

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[intensity](#intensity)

### Methods

[update](#update)

## Constructors

### constructor

* new BiquadFilterEffect(  
  Â Â Â Â context: AudioContext,  
  Â Â Â Â options?: { intensity?: number; type?: BiquadFilterType },  
  ): BiquadFilterEffect

  A ConvolverEffect is constructed by passing the following parameters.

  #### Parameters

  + context: AudioContext

    The audio context required by the BiquadFilterNode
  + `Optional`options: { intensity?: number; type?: BiquadFilterType } = {}

    Additional options which modify the BiquadFilterEffect behavior

    - ##### `Optional`intensity?: number

      The initial intensity of the effect
    - ##### `Optional`type?: BiquadFilterType

      The filter type to apply

  #### Returns BiquadFilterEffect

  Overrides BiquadFilterNode.constructor

## Accessors

### intensity

* get intensity(): number

  Adjust the intensity of the effect on a scale of 0 to 10.

  #### Returns number

## Methods

### update

* update(options?: { intensity?: number; type?: BiquadFilterType }): void

  Update the state of the effect node given the active flag and numeric intensity.

  #### Parameters

  + options: { intensity?: number; type?: BiquadFilterType } = {}

    Options which are updated

    - ##### `Optional`intensity?: number

      A new effect intensity
    - ##### `Optional`type?: BiquadFilterType

      A new filter type

  #### Returns void