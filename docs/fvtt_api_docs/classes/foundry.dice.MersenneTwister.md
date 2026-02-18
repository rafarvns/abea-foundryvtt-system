---
title: "MersenneTwister | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.MersenneTwister.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [MersenneTwister](foundry.dice.MersenneTwister.html)

# Class MersenneTwister

A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator.

##### Index

### Constructors

[constructor](foundry.dice.MersenneTwister.html#constructor)

### Methods

[int](foundry.dice.MersenneTwister.html#int)
[int31](foundry.dice.MersenneTwister.html#int31)
[normal](foundry.dice.MersenneTwister.html#normal)
[random](foundry.dice.MersenneTwister.html#random)
[real](foundry.dice.MersenneTwister.html#real)
[realx](foundry.dice.MersenneTwister.html#realx)
[rnd](foundry.dice.MersenneTwister.html#rnd)
[rndHiRes](foundry.dice.MersenneTwister.html#rndhires)
[seed](foundry.dice.MersenneTwister.html#seed)
[seedArray](foundry.dice.MersenneTwister.html#seedarray)
[normal](foundry.dice.MersenneTwister.html#normal-2)
[random](foundry.dice.MersenneTwister.html#random-2)

## Constructors

### constructor

* new MersenneTwister(seed?: number): [MersenneTwister](foundry.dice.MersenneTwister.html)

  Instantiates a new Mersenne Twister.

  #### Parameters

  + `Optional`seed: number

    The initial seed value, if not provided the current timestamp will be used.

  #### Returns [MersenneTwister](foundry.dice.MersenneTwister.html)

## Methods

### int

* int(): number

  Generates a random unsigned 32-bit integer.

  #### Returns number

  #### Since

  0.1.0

### int31

* int31(): number

  Generates a random unsigned 31-bit integer.

  #### Returns number

  #### Since

  0.1.0

### normal

* normal(mu: number, sigma: number): number

  A pseudo-normal distribution using the Box-Muller transform.

  #### Parameters

  + mu: number

    The normal distribution mean
  + sigma: number

    The normal distribution standard deviation

  #### Returns number

### random

* random(): number

  Generates a random real in the interval [0;1[ with 32-bit resolution.

  Same as .rnd() method - for consistency with Math.random() interface.

  #### Returns number

  #### Since

  0.2.0

### real

* real(): number

  Generates a random real in the interval [0;1] with 32-bit resolution.

  #### Returns number

  #### Since

  0.1.0

### realx

* realx(): number

  Generates a random real in the interval ]0;1[ with 32-bit resolution.

  #### Returns number

  #### Since

  0.1.0

### rnd

* rnd(): number

  Generates a random real in the interval [0;1[ with 32-bit resolution.

  #### Returns number

  #### Since

  0.1.0

### rndHiRes

* rndHiRes(): number

  Generates a random real in the interval [0;1[ with 53-bit resolution.

  #### Returns number

  #### Since

  0.1.0

### seed

* seed(seed: number): number

  Initializes the state vector by using one unsigned 32-bit integer "seed", which may be zero.

  #### Parameters

  + seed: number

    The seed value.

  #### Returns number

  #### Since

  0.1.0

### seedArray

* seedArray(vector: array): void

  Initializes the state vector by using an array key[] of unsigned 32-bit integers of the specified length. If
  length is smaller than 624, then each array of 32-bit integers gives distinct initial state vector. This is
  useful if you want a larger seed space than 32-bit word.

  #### Parameters

  + vector: array

    The seed vector.

  #### Returns void

  #### Since

  0.1.0

### `Static`normal

* normal(...args: any[]): number

  A factory method for generating random normal rolls

  #### Parameters

  + ...args: any[]

  #### Returns number

### `Static`random

* random(): number

  A factory method for generating random uniform rolls

  #### Returns number