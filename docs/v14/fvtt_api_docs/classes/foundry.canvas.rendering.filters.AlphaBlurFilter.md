---
title: "AlphaBlurFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.AlphaBlurFilter.html"
category: "classes"
---

# Class AlphaBlurFilter

Apply a gaussian blur going inward by using alpha as the penetrating channel.

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
  + AlphaBlurFilter

##### Index

### Accessors

[blendMode](#blendmode)
[blur](#blur)
[blurX](#blurx)
[blurY](#blury)
[quality](#quality)
[repeatEdgePixels](#repeatedgepixels)

### Methods

[apply](#apply)
[updatePadding](#updatepadding)

## Accessors

### blendMode

* get blendMode(): number

  Provided for completeness with PIXI.BlurFilter

  #### Returns number

### blur

* get blur(): number

  The amount of blur is forwarded to the X and Y filters.

  #### Returns number

### blurX

* get blurX(): number

  Provided for completeness with PIXI.BlurFilter

  #### Returns number

### blurY

* get blurY(): number

  Provided for completeness with PIXI.BlurFilter

  #### Returns number

### quality

* get quality(): number

  The quality of blur defines the number of passes used by subsidiary filters.

  #### Returns number

### repeatEdgePixels

* get repeatEdgePixels(): boolean

  Whether to repeat edge pixels, adding padding to the filter area.

  #### Returns boolean

## Methods

### apply

* apply(filterManager: any, input: any, output: any, clearMode: any): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clearMode: any

  #### Returns void

### updatePadding

* updatePadding(): void

  Update the filter padding according to the blur strength value (0 if \_repeatEdgePixels is active)

  #### Returns void