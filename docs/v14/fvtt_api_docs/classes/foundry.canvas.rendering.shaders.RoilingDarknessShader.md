---
title: "RoilingDarknessShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.RoilingDarknessShader.html"
category: "classes"
---

# Class RoilingDarknessShader

Roiling mass illumination shader: intended primarily for darkness

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.RoilingDarknessShader))

* [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md)
  + RoilingDarknessShader

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

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#initialuniforms)

### `Static`COMPUTE\_ILLUMINATION

COMPUTE\_ILLUMINATION: string = ...

Compute illumination uniforms

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[COMPUTE\_ILLUMINATION](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#compute_illumination)

### `Static`CONSTANTS

CONSTANTS: string = ...

#### Inherit Doc

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[CONSTANTS](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#constants)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[CONTRAST](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#exposure)

### `Static`FALLOFF

FALLOFF: string = ...

Incorporate falloff if a attenuation uniform is requested

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[FALLOFF](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#falloff)

### `Static`forceDefaultColor

forceDefaultColor: boolean = false

Has this lighting shader a forced default color?

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[forceDefaultColor](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#forcedefaultcolor)

### `Static`FRAGMENT\_BEGIN

FRAGMENT\_BEGIN: string = ...

Initialize fragment with common properties

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[FRAGMENT\_BEGIN](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#fragment_begin)

### `Static`FRAGMENT\_END

FRAGMENT\_END: string = ...

Shader final

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[FRAGMENT\_END](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#fragment_end)

### `Static` `Abstract`FRAGMENT\_FUNCTIONS

FRAGMENT\_FUNCTIONS: string = ...

Common functions used by the fragment shaders.

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[FRAGMENT\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#fragment_functions)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[SATURATION](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#saturation)

### `Static`SHADER\_TECHNIQUES

SHADER\_TECHNIQUES: Record<string, [ShaderTechnique](../interfaces/foundry.ShaderTechnique.md)> = ...

A mapping of available shader techniques

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[SHADER\_TECHNIQUES](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#shader_techniques)

### `Static`SHADOW

SHADOW: string = ...

Shadow adjustment

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[SHADOW](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#shadow)

### `Static`SWITCH\_COLOR

SWITCH\_COLOR: string = ...

Switch between an inner and outer color, by comparing distance from center to ratio
Apply a strong gradient between the two areas if attenuation uniform is set to true

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[SWITCH\_COLOR](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#switch_color)

### `Static`TRANSITION

TRANSITION: string = ...

Transition between bright and dim colors, if requested

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[TRANSITION](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#transition)

### `Static`VERTEX\_ATTRIBUTES

VERTEX\_ATTRIBUTES: string = ...

Common attributes for vertex shaders.

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[VERTEX\_ATTRIBUTES](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#vertex_attributes)

### `Static`VERTEX\_FRAGMENT\_VARYINGS

VERTEX\_FRAGMENT\_VARYINGS: string = ...

Common varyings shared by vertex and fragment shaders.

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[VERTEX\_FRAGMENT\_VARYINGS](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#vertex_fragment_varyings)

### `Static` `Abstract`VERTEX\_FUNCTIONS

VERTEX\_FUNCTIONS: string = ""

Common functions used by the vertex shaders.

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[VERTEX\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#vertex_functions)

### `Static`VERTEX\_UNIFORMS

VERTEX\_UNIFORMS: string = ...

Common uniforms for vertex shaders.

Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[VERTEX\_UNIFORMS](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#vertex_uniforms)

## Accessors

### isRequired

* get isRequired(): boolean

  Flag whether the darkness shader is currently required.
  Check vision modes requirements first, then
  if key uniforms are at their default values, we don't need to render the background container.

  #### Returns boolean

  Inherited from AdaptiveDarknessShader.isRequired

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders

  #### Returns string

  Inherited from AdaptiveDarknessShader.ADJUSTMENTS

### `Static`BACKGROUND\_TECHNIQUES

* get BACKGROUND\_TECHNIQUES(): string

  The coloration technique background shader fragment

  #### Returns string

  Inherited from AdaptiveDarknessShader.BACKGROUND\_TECHNIQUES

### `Static`COLORATION\_TECHNIQUES

* get COLORATION\_TECHNIQUES(): string

  The coloration technique coloration shader fragment

  #### Returns string

  Inherited from AdaptiveDarknessShader.COLORATION\_TECHNIQUES

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â ambientBrightest: number[];  
  Â Â Â Â ambientDarkness: number[];  
  Â Â Â Â ambientDaylight: number[];  
  Â Â Â Â borderDistance: number;  
  Â Â Â Â brightLevelCorrection: number;  
  Â Â Â Â color: [number, number, number];  
  Â Â Â Â computeIllumination: boolean;  
  Â Â Â Â darknessLevel: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â depthTexture: null;  
  Â Â Â Â dimLevelCorrection: number;  
  Â Â Â Â enableVisionMasking: boolean;  
  Â Â Â Â globalLight: boolean;  
  Â Â Â Â globalLightThresholds: number[];  
  Â Â Â Â intensity: number;  
  Â Â Â Â primaryTexture: null;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â time: number;  
  Â Â Â Â visionTexture: null;  
  Â Â Â Â weights: number[];  
  }

  #### Returns { Â Â Â Â ambientBrightest: number[]; Â Â Â Â ambientDarkness: number[]; Â Â Â Â ambientDaylight: number[]; Â Â Â Â borderDistance: number; Â Â Â Â brightLevelCorrection: number; Â Â Â Â color: [number, number, number]; Â Â Â Â computeIllumination: boolean; Â Â Â Â darknessLevel: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â depthElevation: number; Â Â Â Â depthTexture: null; Â Â Â Â dimLevelCorrection: number; Â Â Â Â enableVisionMasking: boolean; Â Â Â Â globalLight: boolean; Â Â Â Â globalLightThresholds: number[]; Â Â Â Â intensity: number; Â Â Â Â primaryTexture: null; Â Â Â Â screenDimensions: number[]; Â Â Â Â time: number; Â Â Â Â visionTexture: null; Â Â Â Â weights: number[]; }

  Inherited from AdaptiveDarknessShader.defaultUniforms

### `Static`FRAGMENT\_UNIFORMS

* get FRAGMENT\_UNIFORMS(): string

  Common uniforms shared by fragment shaders.

  #### Returns string

  Inherited from AdaptiveDarknessShader.FRAGMENT\_UNIFORMS

### `Static`ILLUMINATION\_TECHNIQUES

* get ILLUMINATION\_TECHNIQUES(): string

  The coloration technique illumination shader fragment

  #### Returns string

  Inherited from AdaptiveDarknessShader.ILLUMINATION\_TECHNIQUES

### `Static`SHADER\_HEADER

* get SHADER\_HEADER(): string

  Memory allocations for the Adaptive Background Shader

  #### Returns string

  Inherited from AdaptiveDarknessShader.SHADER\_HEADER

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[reset](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#reset)

### update

* update(): void

  #### Returns void

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[update](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#update)

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[\_preRender](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#_prerender)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Overrides [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[create](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#create)

### `Static`getShaderTechniques

* getShaderTechniques(shaderType: string): string

  Construct adaptive shader according to shader type

  #### Parameters

  + shaderType: string

    shader type to construct : coloration, illumination, background, etc.

  #### Returns string

  the constructed shader adaptive block

  Inherited from [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md).[getShaderTechniques](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md#getshadertechniques)