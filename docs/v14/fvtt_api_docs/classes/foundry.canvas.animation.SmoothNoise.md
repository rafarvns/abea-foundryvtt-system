---
title: "SmoothNoise | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.animation.SmoothNoise.html"
category: "classes"
---

# Class SmoothNoise

A smooth noise generator for one-dimensional values.

#### Param: options

Configuration options for the noise process.

#### Param: options.amplitude

The generated noise will be on the range [0, amplitude].

#### Param: options.scale

An adjustment factor for the input x values which place them on an
appropriate range.

#### Param: options.maxReferences

The number of pre-generated random numbers to generate.

##### Index

### Accessors

[amplitude](#amplitude)
[scale](#scale)

### Methods

[generate](#generate)

## Accessors

### amplitude

* get amplitude(): number

  Amplitude of the generated noise output
  The noise output is multiplied by this value

  #### Returns number

### scale

* get scale(): number[]

  Scale factor of the random indices

  #### Returns number[]

## Methods

### generate

* generate(x: number): number

  Generate the noise value corresponding to a provided numeric x value.

  #### Parameters

  + x: number

    Any finite number

  #### Returns number

  The corresponding smoothed noise value