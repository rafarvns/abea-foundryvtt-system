---
title: "LightDomeColorationShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.LightDomeColorationShader.html"
category: "classes"
---

# Class LightDomeColorationShader

Light dome animation coloration shader

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.LightDomeColorationShader))

* [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md)
  + LightDomeColorationShader

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

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#initialuniforms)

### `Static`COMPUTE\_ILLUMINATION

COMPUTE\_ILLUMINATION: string = ...

Compute illumination uniforms

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[COMPUTE\_ILLUMINATION](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#compute_illumination)

### `Static`CONSTANTS

CONSTANTS: string = ...

#### Inherit Doc

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[CONSTANTS](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#constants)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[CONTRAST](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#exposure)

### `Static`FALLOFF

FALLOFF: string = ...

Incorporate falloff if a attenuation uniform is requested

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[FALLOFF](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#falloff)

### `Static`forceDefaultColor

forceDefaultColor: boolean = true

Overrides [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[forceDefaultColor](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#forcedefaultcolor)

### `Static`FRAGMENT\_BEGIN

FRAGMENT\_BEGIN: string = ...

Initialize fragment with common properties

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[FRAGMENT\_BEGIN](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#fragment_begin)

### `Static`FRAGMENT\_END

FRAGMENT\_END: string = ...

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[FRAGMENT\_END](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#fragment_end)

### `Static` `Abstract`FRAGMENT\_FUNCTIONS

FRAGMENT\_FUNCTIONS: string = ...

Common functions used by the fragment shaders.

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[FRAGMENT\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#fragment_functions)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[SATURATION](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#saturation)

### `Static`SHADER\_TECHNIQUES

SHADER\_TECHNIQUES: Record<string, [ShaderTechnique](../interfaces/foundry.ShaderTechnique.md)> = ...

A mapping of available shader techniques

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[SHADER\_TECHNIQUES](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#shader_techniques)

### `Static`SHADOW

SHADOW: string = ...

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[SHADOW](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#shadow)

### `Static`SWITCH\_COLOR

SWITCH\_COLOR: string = ...

Switch between an inner and outer color, by comparing distance from center to ratio
Apply a strong gradient between the two areas if attenuation uniform is set to true

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[SWITCH\_COLOR](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#switch_color)

### `Static`TRANSITION

TRANSITION: string = ...

Transition between bright and dim colors, if requested

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[TRANSITION](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#transition)

### `Static`VERTEX\_ATTRIBUTES

VERTEX\_ATTRIBUTES: string = ...

Common attributes for vertex shaders.

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[VERTEX\_ATTRIBUTES](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#vertex_attributes)

### `Static`VERTEX\_FRAGMENT\_VARYINGS

VERTEX\_FRAGMENT\_VARYINGS: string = ...

Common varyings shared by vertex and fragment shaders.

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[VERTEX\_FRAGMENT\_VARYINGS](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#vertex_fragment_varyings)

### `Static` `Abstract`VERTEX\_FUNCTIONS

VERTEX\_FUNCTIONS: string = ""

Common functions used by the vertex shaders.

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[VERTEX\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#vertex_functions)

### `Static`VERTEX\_UNIFORMS

VERTEX\_UNIFORMS: string = ...

Common uniforms for vertex shaders.

Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[VERTEX\_UNIFORMS](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#vertex_uniforms)

## Accessors

### isRequired

* get isRequired(): boolean

  Flag whether the coloration shader is currently required.

  #### Returns boolean

  Inherited from AdaptiveColorationShader.isRequired

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders

  #### Returns string

  Inherited from AdaptiveColorationShader.ADJUSTMENTS

### `Static`BACKGROUND\_TECHNIQUES

* get BACKGROUND\_TECHNIQUES(): string

  The coloration technique background shader fragment

  #### Returns string

  Inherited from AdaptiveColorationShader.BACKGROUND\_TECHNIQUES

### `Static`COLORATION\_TECHNIQUES

* get COLORATION\_TECHNIQUES(): string

  The coloration technique coloration shader fragment

  #### Returns string

  Inherited from AdaptiveColorationShader.COLORATION\_TECHNIQUES

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â ambientBrightest: number[];  
  Â Â Â Â ambientDarkness: number[];  
  Â Â Â Â ambientDaylight: number[];  
  Â Â Â Â attenuation: number;  
  Â Â Â Â brightLevelCorrection: number;  
  Â Â Â Â color: number[];  
  Â Â Â Â colorationAlpha: number;  
  Â Â Â Â computeIllumination: boolean;  
  Â Â Â Â contrast: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â depthElevation: number;  
  Â Â Â Â depthTexture: null;  
  Â Â Â Â dimLevelCorrection: number;  
  Â Â Â Â globalLight: boolean;  
  Â Â Â Â globalLightThresholds: number[];  
  Â Â Â Â hasColor: boolean;  
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

  #### Returns { Â Â Â Â ambientBrightest: number[]; Â Â Â Â ambientDarkness: number[]; Â Â Â Â ambientDaylight: number[]; Â Â Â Â attenuation: number; Â Â Â Â brightLevelCorrection: number; Â Â Â Â color: number[]; Â Â Â Â colorationAlpha: number; Â Â Â Â computeIllumination: boolean; Â Â Â Â contrast: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â depthElevation: number; Â Â Â Â depthTexture: null; Â Â Â Â dimLevelCorrection: number; Â Â Â Â globalLight: boolean; Â Â Â Â globalLightThresholds: number[]; Â Â Â Â hasColor: boolean; Â Â Â Â intensity: number; Â Â Â Â primaryTexture: null; Â Â Â Â ratio: number; Â Â Â Â saturation: number; Â Â Â Â screenDimensions: number[]; Â Â Â Â shadows: number; Â Â Â Â technique: number; Â Â Â Â time: number; Â Â Â Â useSampler: boolean; Â Â Â Â weights: number[]; }

  Inherited from AdaptiveColorationShader.defaultUniforms

### `Static`FRAGMENT\_UNIFORMS

* get FRAGMENT\_UNIFORMS(): string

  Common uniforms shared by fragment shaders.

  #### Returns string

  Inherited from AdaptiveColorationShader.FRAGMENT\_UNIFORMS

### `Static`ILLUMINATION\_TECHNIQUES

* get ILLUMINATION\_TECHNIQUES(): string

  The coloration technique illumination shader fragment

  #### Returns string

  Inherited from AdaptiveColorationShader.ILLUMINATION\_TECHNIQUES

### `Static`SHADER\_HEADER

* get SHADER\_HEADER(): string

  Memory allocations for the Adaptive Coloration Shader

  #### Returns string

  Inherited from AdaptiveColorationShader.SHADER\_HEADER

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[reset](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#reset)

### update

* update(): void

  Called before rendering.

  #### Returns void

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[update](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#update)

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[\_preRender](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#_prerender)

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

  Overrides [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[\_createFragmentShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#_createfragmentshader)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[create](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#create)

### `Static`getShaderTechniques

* getShaderTechniques(shaderType: string): string

  Construct adaptive shader according to shader type

  #### Parameters

  + shaderType: string

    shader type to construct : coloration, illumination, background, etc.

  #### Returns string

  the constructed shader adaptive block

  Inherited from [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md).[getShaderTechniques](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md#getshadertechniques)