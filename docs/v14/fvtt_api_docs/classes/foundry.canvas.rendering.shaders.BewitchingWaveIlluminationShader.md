---
title: "BewitchingWaveIlluminationShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.BewitchingWaveIlluminationShader.html"
category: "classes"
---

# Class BewitchingWaveIlluminationShader

Bewitching Wave animation illumination shader

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.BewitchingWaveIlluminationShader))

* [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md)
  + BewitchingWaveIlluminationShader

##### Index

### Properties

[initialUniforms](#initialuniforms)
[COMPUTE\_ILLUMINATION](#compute_illumination)
[CONSTANTS](#constants)
[CONTRAST](#contrast)
[EXPOSURE](#exposure)
[FALLOFF](#falloff)
[forceDefaultColor](#forcedefaultcolor)
[FRAGMENT\_BEGIN](#fragment_begin)
[FRAGMENT\_END](#fragment_end)
[FRAGMENT\_FUNCTIONS](#fragment_functions)
[SATURATION](#saturation)
[SHADER\_TECHNIQUES](#shader_techniques)
[SHADOW](#shadow)
[SWITCH\_COLOR](#switch_color)
[TRANSITION](#transition)
[VERTEX\_ATTRIBUTES](#vertex_attributes)
[VERTEX\_FRAGMENT\_VARYINGS](#vertex_fragment_varyings)
[VERTEX\_FUNCTIONS](#vertex_functions)
[VERTEX\_UNIFORMS](#vertex_uniforms)

### Accessors

[isRequired](#isrequired)
[ADJUSTMENTS](#adjustments)
[BACKGROUND\_TECHNIQUES](#background_techniques)
[COLORATION\_TECHNIQUES](#coloration_techniques)
[defaultUniforms](#defaultuniforms)
[FRAGMENT\_UNIFORMS](#fragment_uniforms)
[ILLUMINATION\_TECHNIQUES](#illumination_techniques)
[SHADER\_HEADER](#shader_header)

### Methods

[reset](#reset)
[update](#update)
[\_preRender](#_prerender)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)
[getShaderTechniques](#getshadertechniques)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#initialuniforms)

### `Static`COMPUTE\_ILLUMINATION

COMPUTE\_ILLUMINATION: string = ...

Compute illumination uniforms

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[COMPUTE\_ILLUMINATION](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#compute_illumination)

### `Static`CONSTANTS

CONSTANTS: string = ...

#### Inherit Doc

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[CONSTANTS](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#constants)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[CONTRAST](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#exposure)

### `Static`FALLOFF

FALLOFF: string = ...

Incorporate falloff if a attenuation uniform is requested

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[FALLOFF](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#falloff)

### `Static`forceDefaultColor

forceDefaultColor: boolean = false

Has this lighting shader a forced default color?

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[forceDefaultColor](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#forcedefaultcolor)

### `Static`FRAGMENT\_BEGIN

FRAGMENT\_BEGIN: string = ...

Initialize fragment with common properties

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[FRAGMENT\_BEGIN](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#fragment_begin)

### `Static`FRAGMENT\_END

FRAGMENT\_END: string = ...

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[FRAGMENT\_END](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#fragment_end)

### `Static` `Abstract`FRAGMENT\_FUNCTIONS

FRAGMENT\_FUNCTIONS: string = ...

Common functions used by the fragment shaders.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[FRAGMENT\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#fragment_functions)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[SATURATION](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#saturation)

### `Static`SHADER\_TECHNIQUES

SHADER\_TECHNIQUES: Record<string, [ShaderTechnique](../interfaces/foundry.ShaderTechnique.md)> = ...

A mapping of available shader techniques

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[SHADER\_TECHNIQUES](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#shader_techniques)

### `Static`SHADOW

SHADOW: string = ...

Shadow adjustment

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[SHADOW](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#shadow)

### `Static`SWITCH\_COLOR

SWITCH\_COLOR: string = ...

Switch between an inner and outer color, by comparing distance from center to ratio
Apply a strong gradient between the two areas if attenuation uniform is set to true

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[SWITCH\_COLOR](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#switch_color)

### `Static`TRANSITION

TRANSITION: string = ...

Transition between bright and dim colors, if requested

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[TRANSITION](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#transition)

### `Static`VERTEX\_ATTRIBUTES

VERTEX\_ATTRIBUTES: string = ...

Common attributes for vertex shaders.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[VERTEX\_ATTRIBUTES](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#vertex_attributes)

### `Static`VERTEX\_FRAGMENT\_VARYINGS

VERTEX\_FRAGMENT\_VARYINGS: string = ...

Common varyings shared by vertex and fragment shaders.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[VERTEX\_FRAGMENT\_VARYINGS](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#vertex_fragment_varyings)

### `Static` `Abstract`VERTEX\_FUNCTIONS

VERTEX\_FUNCTIONS: string = ""

Common functions used by the vertex shaders.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[VERTEX\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#vertex_functions)

### `Static`VERTEX\_UNIFORMS

VERTEX\_UNIFORMS: string = ...

Common uniforms for vertex shaders.

Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[VERTEX\_UNIFORMS](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#vertex_uniforms)

## Accessors

### isRequired

* get isRequired(): boolean

  Flag whether the illumination shader is currently required.

  #### Returns boolean

  Inherited from AdaptiveIlluminationShader.isRequired

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders

  #### Returns string

  Inherited from AdaptiveIlluminationShader.ADJUSTMENTS

### `Static`BACKGROUND\_TECHNIQUES

* get BACKGROUND\_TECHNIQUES(): string

  The coloration technique background shader fragment

  #### Returns string

  Inherited from AdaptiveIlluminationShader.BACKGROUND\_TECHNIQUES

### `Static`COLORATION\_TECHNIQUES

* get COLORATION\_TECHNIQUES(): string

  The coloration technique coloration shader fragment

  #### Returns string

  Inherited from AdaptiveIlluminationShader.COLORATION\_TECHNIQUES

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â ambientBrightest: number[];  
  Â Â Â Â ambientDarkness: number[];  
  Â Â Â Â ambientDaylight: number[];  
  Â Â Â Â attenuation: number;  
  Â Â Â Â brightLevelCorrection: number;  
  Â Â Â Â color: number[];  
  Â Â Â Â colorBackground: number[];  
  Â Â Â Â colorBright: number[];  
  Â Â Â Â colorDim: number[];  
  Â Â Â Â computeIllumination: boolean;  
  Â Â Â Â contrast: number;  
  Â Â Â Â darknessLevel: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â depthTexture: null;  
  Â Â Â Â dimLevelCorrection: number;  
  Â Â Â Â exposure: number;  
  Â Â Â Â globalLight: boolean;  
  Â Â Â Â globalLightThresholds: number[];  
  Â Â Â Â intensity: number;  
  Â Â Â Â primaryTexture: null;  
  Â Â Â Â ratio: number;  
  Â Â Â Â saturation: number;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â shadows: number;  
  Â Â Â Â technique: number;  
  Â Â Â Â time: number;  
  Â Â Â Â useSampler: boolean;  
  Â Â Â Â weights: number[];  
  }

  #### Returns { Â Â Â Â ambientBrightest: number[]; Â Â Â Â ambientDarkness: number[]; Â Â Â Â ambientDaylight: number[]; Â Â Â Â attenuation: number; Â Â Â Â brightLevelCorrection: number; Â Â Â Â color: number[]; Â Â Â Â colorBackground: number[]; Â Â Â Â colorBright: number[]; Â Â Â Â colorDim: number[]; Â Â Â Â computeIllumination: boolean; Â Â Â Â contrast: number; Â Â Â Â darknessLevel: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â depthElevation: number; Â Â Â Â depthTexture: null; Â Â Â Â dimLevelCorrection: number; Â Â Â Â exposure: number; Â Â Â Â globalLight: boolean; Â Â Â Â globalLightThresholds: number[]; Â Â Â Â intensity: number; Â Â Â Â primaryTexture: null; Â Â Â Â ratio: number; Â Â Â Â saturation: number; Â Â Â Â screenDimensions: number[]; Â Â Â Â shadows: number; Â Â Â Â technique: number; Â Â Â Â time: number; Â Â Â Â useSampler: boolean; Â Â Â Â weights: number[]; }

  Inherited from AdaptiveIlluminationShader.defaultUniforms

### `Static`FRAGMENT\_UNIFORMS

* get FRAGMENT\_UNIFORMS(): string

  Common uniforms shared by fragment shaders.

  #### Returns string

  Inherited from AdaptiveIlluminationShader.FRAGMENT\_UNIFORMS

### `Static`ILLUMINATION\_TECHNIQUES

* get ILLUMINATION\_TECHNIQUES(): string

  The coloration technique illumination shader fragment

  #### Returns string

  Inherited from AdaptiveIlluminationShader.ILLUMINATION\_TECHNIQUES

### `Static`SHADER\_HEADER

* get SHADER\_HEADER(): string

  Memory allocations for the Adaptive Illumination Shader

  #### Returns string

  Inherited from AdaptiveIlluminationShader.SHADER\_HEADER

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[reset](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#reset)

### update

* update(): void

  Called before rendering.

  #### Returns void

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[update](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#update)

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[\_preRender](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#_prerender)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Overrides [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[create](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#create)

### `Static`getShaderTechniques

* getShaderTechniques(shaderType: string): string

  Construct adaptive shader according to shader type

  #### Parameters

  + shaderType: string

    shader type to construct : coloration, illumination, background, etc.

  #### Returns string

  the constructed shader adaptive block

  Inherited from [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md).[getShaderTechniques](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md#getshadertechniques)