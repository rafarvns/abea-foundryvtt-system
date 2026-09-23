---
title: "AdaptiveVisionShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.AdaptiveVisionShader.html"
category: "classes"
---

# Class AdaptiveVisionShader

This class defines an interface which all adaptive vision shaders extend.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.AdaptiveVisionShader))

* [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md)
  + AdaptiveVisionShader
    - [BackgroundVisionShader](foundry.canvas.rendering.shaders.BackgroundVisionShader.md)
    - [IlluminationVisionShader](foundry.canvas.rendering.shaders.IlluminationVisionShader.md)
    - [ColorationVisionShader](foundry.canvas.rendering.shaders.ColorationVisionShader.md)

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

[ADJUSTMENTS](#adjustments)
[BACKGROUND\_TECHNIQUES](#background_techniques)
[COLORATION\_TECHNIQUES](#coloration_techniques)
[FRAGMENT\_UNIFORMS](#fragment_uniforms)
[ILLUMINATION\_TECHNIQUES](#illumination_techniques)

### Methods

[reset](#reset)
[update](#update)
[\_preRender](#_prerender)
[\_createVertexShader](#_createvertexshader)
[create](#create)
[getShaderTechniques](#getshadertechniques)

## Properties

### initialUniforms

initialUniforms: object

The initial values of the shader uniforms.

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#initialuniforms)

### `Static`COMPUTE\_ILLUMINATION

COMPUTE\_ILLUMINATION: string = ...

Compute illumination uniforms

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[COMPUTE\_ILLUMINATION](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#compute_illumination)

### `Static`CONSTANTS

CONSTANTS: string = ...

#### Inherit Doc

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[CONSTANTS](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#constants)

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[CONTRAST](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#contrast)

### `Static`EXPOSURE

EXPOSURE: string = ...

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[EXPOSURE](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#exposure)

### `Static`FALLOFF

FALLOFF: string = ...

Incorporate falloff if a attenuation uniform is requested

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[FALLOFF](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#falloff)

### `Static`forceDefaultColor

forceDefaultColor: boolean = false

Has this lighting shader a forced default color?

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[forceDefaultColor](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#forcedefaultcolor)

### `Static`FRAGMENT\_BEGIN

FRAGMENT\_BEGIN: string = ...

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[FRAGMENT\_BEGIN](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#fragment_begin)

### `Static`FRAGMENT\_END

FRAGMENT\_END: string = ...

Shader final

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[FRAGMENT\_END](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#fragment_end)

### `Static`FRAGMENT\_FUNCTIONS

FRAGMENT\_FUNCTIONS: string = ...

Common functions used by the fragment shaders.

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[FRAGMENT\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#fragment_functions)

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[SATURATION](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#saturation)

### `Static`SHADER\_TECHNIQUES

SHADER\_TECHNIQUES: Record<string, ShaderTechnique> = ...

A mapping of available shader techniques

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[SHADER\_TECHNIQUES](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#shader_techniques)

### `Static`SHADOW

SHADOW: string = ""

Overrides [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[SHADOW](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#shadow)

### `Static`SWITCH\_COLOR

SWITCH\_COLOR: string = ...

Switch between an inner and outer color, by comparing distance from center to ratio
Apply a strong gradient between the two areas if attenuation uniform is set to true

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[SWITCH\_COLOR](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#switch_color)

### `Static`TRANSITION

TRANSITION: string = ...

Transition between bright and dim colors, if requested

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[TRANSITION](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#transition)

### `Static`VERTEX\_ATTRIBUTES

VERTEX\_ATTRIBUTES: string = ...

Common attributes for vertex shaders.

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[VERTEX\_ATTRIBUTES](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#vertex_attributes)

### `Static`VERTEX\_FRAGMENT\_VARYINGS

VERTEX\_FRAGMENT\_VARYINGS: string = ...

Common varyings shared by vertex and fragment shaders.

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[VERTEX\_FRAGMENT\_VARYINGS](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#vertex_fragment_varyings)

### `Static` `Abstract`VERTEX\_FUNCTIONS

VERTEX\_FUNCTIONS: string = ""

Common functions used by the vertex shaders.

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[VERTEX\_FUNCTIONS](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#vertex_functions)

### `Static`VERTEX\_UNIFORMS

VERTEX\_UNIFORMS: string = ...

Common uniforms for vertex shaders.

Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[VERTEX\_UNIFORMS](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#vertex_uniforms)

## Accessors

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders

  #### Returns string

  Inherited from AdaptiveLightingShader.ADJUSTMENTS

### `Static`BACKGROUND\_TECHNIQUES

* get BACKGROUND\_TECHNIQUES(): string

  The coloration technique background shader fragment

  #### Returns string

  Inherited from AdaptiveLightingShader.BACKGROUND\_TECHNIQUES

### `Static`COLORATION\_TECHNIQUES

* get COLORATION\_TECHNIQUES(): string

  The coloration technique coloration shader fragment

  #### Returns string

  Inherited from AdaptiveLightingShader.COLORATION\_TECHNIQUES

### `Static`FRAGMENT\_UNIFORMS

* get FRAGMENT\_UNIFORMS(): string

  Common uniforms shared by fragment shaders.

  #### Returns string

  Inherited from AdaptiveLightingShader.FRAGMENT\_UNIFORMS

### `Static`ILLUMINATION\_TECHNIQUES

* get ILLUMINATION\_TECHNIQUES(): string

  The coloration technique illumination shader fragment

  #### Returns string

  Inherited from AdaptiveLightingShader.ILLUMINATION\_TECHNIQUES

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[reset](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#reset)

### update

* update(): void

  Called before rendering.

  #### Returns void

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[update](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#update)

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[\_preRender](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#_prerender)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[\_createVertexShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#_createvertexshader)

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[create](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#create)

### `Static`getShaderTechniques

* getShaderTechniques(shaderType: string): string

  Construct adaptive shader according to shader type

  #### Parameters

  + shaderType: string

    shader type to construct : coloration, illumination, background, etc.

  #### Returns string

  the constructed shader adaptive block

  Inherited from [AdaptiveLightingShader](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md).[getShaderTechniques](foundry.canvas.rendering.shaders.AdaptiveLightingShader.md#getshadertechniques)