---
title: "AlphaBlurFilterPass | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.AlphaBlurFilterPass.html"
category: "classes"
---

# Class AlphaBlurFilterPass

Apply a vertical or horizontal gaussian blur going inward by using alpha as the penetrating channel.

#### Param: horizontal

If the pass is horizontal (true) or vertical (false).

#### Param: strength

Strength of the blur (distance of sampling).

#### Param: quality

Number of passes to generate the blur. More passes = Higher quality = Lower Perf.

#### Param: resolution

Resolution of the filter.

#### Param: kernelSize

Number of kernels to use. More kernels = Higher quality = Lower Perf.

#### Hierarchy

* Filter
  + AlphaBlurFilterPass

##### Index

### Properties

[horizontal](#horizontal)
[passes](#passes)
[strength](#strength)
[GAUSSIAN\_VALUES](#gaussian_values)

### Accessors

[blur](#blur)
[quality](#quality)

### Methods

[apply](#apply)
[fragTemplate](#fragtemplate)
[generateBlurFragSource](#generateblurfragsource)
[generateBlurVertSource](#generateblurvertsource)
[vertTemplate](#verttemplate)

## Properties

### horizontal

horizontal: boolean

If the pass is horizontal (true) or vertical (false).

### passes

passes: number

The number of passes to generate the blur.

### strength

strength: number

Strength of the blur (distance of sampling).

### `Static`GAUSSIAN\_VALUES

GAUSSIAN\_VALUES: Record<number, number[]> = ...

The kernels containing the gaussian constants.

## Accessors

### blur

* get blur(): number

  The strength of the blur filter in pixels.

  #### Returns number

### quality

* get quality(): number

  The quality of the filter is defined by its number of passes.

  #### Returns number

## Methods

### apply

* apply(filterManager: any, input: any, output: any, clearMode: any): any

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clearMode: any

  #### Returns any

### `Static`fragTemplate

* fragTemplate(kernelSize: number): string

  The fragment template generator

  #### Parameters

  + kernelSize: number

    The number of kernels to use.

  #### Returns string

  The generated fragment shader.

### `Static`generateBlurFragSource

* generateBlurFragSource(kernelSize: number): string

  Generating the dynamic part of the blur in the fragment

  #### Parameters

  + kernelSize: number

    The number of kernels to use.

  #### Returns string

  The dynamic blur part.

### `Static`generateBlurVertSource

* generateBlurVertSource(kernelSize: number, horizontal: boolean): string

  Generating the dynamic part of the blur in the vertex

  #### Parameters

  + kernelSize: number

    The number of kernels to use.
  + horizontal: boolean

    If the vertex should handle horizontal or vertical pass.

  #### Returns string

  The dynamic blur part.

### `Static`vertTemplate

* vertTemplate(kernelSize: number, horizontal: boolean): string

  The vertex template generator

  #### Parameters

  + kernelSize: number

    The number of kernels to use.
  + horizontal: boolean

    If the vertex should handle horizontal or vertical pass.

  #### Returns string

  The generated vertex shader.