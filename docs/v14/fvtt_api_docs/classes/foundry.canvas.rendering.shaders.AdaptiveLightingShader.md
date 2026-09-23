---
title: "AdaptiveLightingShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.AdaptiveLightingShader.html"
category: "classes"
---

# Class AdaptiveLightingShader

This class defines an interface which all adaptive lighting shaders extend.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.shaders.AdaptiveLightingShader))

* [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)
  + AdaptiveLightingShader
    - [AdaptiveBackgroundShader](foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md)
    - [AdaptiveColorationShader](foundry.canvas.rendering.shaders.AdaptiveColorationShader.md)
    - [AdaptiveDarknessShader](foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md)
    - [AdaptiveIlluminationShader](foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md)
    - [AdaptiveVisionShader](foundry.canvas.rendering.shaders.AdaptiveVisionShader.md)

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

Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[initialUniforms](foundry.canvas.rendering.shaders.AbstractBaseShader.md#initialuniforms)

### `Static`COMPUTE\_ILLUMINATION

COMPUTE\_ILLUMINATION: string = ...

Compute illumination uniforms

### `Static`CONSTANTS

CONSTANTS: string = ...

#### Inherit Doc

### `Static`CONTRAST

CONTRAST: string = ...

Contrast adjustment

### `Static`EXPOSURE

EXPOSURE: string = ...

Exposure adjustment

### `Static`FALLOFF

FALLOFF: string = ...

Incorporate falloff if a attenuation uniform is requested

### `Static`forceDefaultColor

forceDefaultColor: boolean = false

Has this lighting shader a forced default color?

### `Static`FRAGMENT\_BEGIN

FRAGMENT\_BEGIN: string = ...

Initialize fragment with common properties

### `Static`FRAGMENT\_END

FRAGMENT\_END: string = ...

Shader final

### `Static` `Abstract`FRAGMENT\_FUNCTIONS

FRAGMENT\_FUNCTIONS: string = ...

Common functions used by the fragment shaders.

### `Static`SATURATION

SATURATION: string = ...

Saturation adjustment

### `Static`SHADER\_TECHNIQUES

SHADER\_TECHNIQUES: Record<string, [ShaderTechnique](../interfaces/foundry.ShaderTechnique.md)> = ...

A mapping of available shader techniques

### `Static`SHADOW

SHADOW: string = ...

Shadow adjustment

### `Static`SWITCH\_COLOR

SWITCH\_COLOR: string = ...

Switch between an inner and outer color, by comparing distance from center to ratio
Apply a strong gradient between the two areas if attenuation uniform is set to true

### `Static`TRANSITION

TRANSITION: string = ...

Transition between bright and dim colors, if requested

### `Static`VERTEX\_ATTRIBUTES

VERTEX\_ATTRIBUTES: string = ...

Common attributes for vertex shaders.

### `Static`VERTEX\_FRAGMENT\_VARYINGS

VERTEX\_FRAGMENT\_VARYINGS: string = ...

Common varyings shared by vertex and fragment shaders.

### `Static` `Abstract`VERTEX\_FUNCTIONS

VERTEX\_FUNCTIONS: string = ""

Common functions used by the vertex shaders.

### `Static`VERTEX\_UNIFORMS

VERTEX\_UNIFORMS: string = ...

Common uniforms for vertex shaders.

## Accessors

### `Static`ADJUSTMENTS

* get ADJUSTMENTS(): string

  The adjustments made into fragment shaders

  #### Returns string

### `Static`BACKGROUND\_TECHNIQUES

* get BACKGROUND\_TECHNIQUES(): string

  The coloration technique background shader fragment

  #### Returns string

### `Static`COLORATION\_TECHNIQUES

* get COLORATION\_TECHNIQUES(): string

  The coloration technique coloration shader fragment

  #### Returns string

### `Static`FRAGMENT\_UNIFORMS

* get FRAGMENT\_UNIFORMS(): string

  Common uniforms shared by fragment shaders.

  #### Returns string

### `Static`ILLUMINATION\_TECHNIQUES

* get ILLUMINATION\_TECHNIQUES(): string

  The coloration technique illumination shader fragment

  #### Returns string

## Methods

### reset

* reset(): void

  Reset the shader uniforms back to their initial values.

  #### Returns void

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[reset](foundry.canvas.rendering.shaders.AbstractBaseShader.md#reset)

### update

* update(): void

  Called before rendering.

  #### Returns void

### `Protected`\_preRender

* \_preRender(\_mesh: any, \_renderer: any): void

  `Protected`

  Perform operations which are required before binding the Shader to the Renderer.

  #### Parameters

  + \_mesh: any
  + \_renderer: any

  #### Returns void

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[\_preRender](foundry.canvas.rendering.shaders.AbstractBaseShader.md#_prerender)

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  Inherited from [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md).[create](foundry.canvas.rendering.shaders.AbstractBaseShader.md#create)

### `Static`getShaderTechniques

* getShaderTechniques(shaderType: string): string

  Construct adaptive shader according to shader type

  #### Parameters

  + shaderType: string

    shader type to construct : coloration, illumination, background, etc.

  #### Returns string

  the constructed shader adaptive block