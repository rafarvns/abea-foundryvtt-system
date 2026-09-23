---
title: "VisualEffectsMaskingFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.html"
category: "classes"
---

# Class VisualEffectsMaskingFilter

This filter handles masking and post-processing for visual effects.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.VisualEffectsMaskingFilter))

* [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md)
  + VisualEffectsMaskingFilter

##### Index

### Properties

[FILTER\_MODES](#filter_modes)
[fragmentCore](#fragmentcore)
[fragmentHeader](#fragmentheader)
[POST\_PROCESS\_TECHNIQUES](#post_process_techniques)

### Accessors

[defaultUniforms](#defaultuniforms)

### Methods

[apply](#apply)
[reset](#reset)
[updatePostprocessModes](#updatepostprocessmodes)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[create](#create)
[fragmentPostProcess](#fragmentpostprocess)

## Properties

### `Static`FILTER\_MODES

FILTER\_MODES: Readonly<{ BACKGROUND: 0; COLORATION: 2; ILLUMINATION: 1 }> = ...

Masking modes.

### `Static`fragmentCore

fragmentCore: string = ...

The fragment core code.

### `Static`fragmentHeader

fragmentHeader: string = ...

Memory allocations and headers for the VisualEffectsMaskingFilter

#### Returns

The filter header according to the filter mode.

### `Static`POST\_PROCESS\_TECHNIQUES

POST\_PROCESS\_TECHNIQUES: {  
Â Â Â Â CONTRAST: { glsl: string; id: string };  
Â Â Â Â EXPOSURE: { glsl: string; id: string };  
Â Â Â Â SATURATION: { glsl: string; id: string };  
} = ...

Filter post-process techniques.

## Accessors

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â ambientDarkness: number[];  
  Â Â Â Â ambientDaylight: number[];  
  Â Â Â Â contrast: number;  
  Â Â Â Â darknessLevelTexture: null;  
  Â Â Â Â enableVisionMasking: boolean;  
  Â Â Â Â exposure: number;  
  Â Â Â Â mode: number;  
  Â Â Â Â replacementColor: number[];  
  Â Â Â Â saturation: number;  
  Â Â Â Â screenDimensions: number[];  
  Â Â Â Â tint: number[];  
  Â Â Â Â visionTexture: null;  
  }

  #### Returns { Â Â Â Â ambientDarkness: number[]; Â Â Â Â ambientDaylight: number[]; Â Â Â Â contrast: number; Â Â Â Â darknessLevelTexture: null; Â Â Â Â enableVisionMasking: boolean; Â Â Â Â exposure: number; Â Â Â Â mode: number; Â Â Â Â replacementColor: number[]; Â Â Â Â saturation: number; Â Â Â Â screenDimensions: number[]; Â Â Â Â tint: number[]; Â Â Â Â visionTexture: null; }

## Methods

### apply

* apply(  
  Â Â Â Â filterManager: any,  
  Â Â Â Â input: any,  
  Â Â Â Â output: any,  
  Â Â Â Â clear: any,  
  Â Â Â Â currentState: any,  
  ): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clear: any
  + currentState: any

  #### Returns void

  Overrides [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[apply](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#apply)

### reset

* reset(): void

  Remove all post-processing modes and reset some key uniforms.

  #### Returns void

### updatePostprocessModes

* updatePostprocessModes(postProcessModes?: string[], uniforms?: object): void

  Update the filter shader with new post-process modes.

  #### Parameters

  + `Optional`postProcessModes: string[] = []

    New modes to apply.
  + `Optional`uniforms: object = {}

    Uniforms value to update.

  #### Returns void

### `Static`\_createFragmentShader

* \_createFragmentShader(options: any): string

  #### Parameters

  + options: any

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

  Inherited from [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[\_createVertexShader](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#_createvertexshader)

### `Static`create

* create(\_\_namedParameters?: {}, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + \_\_namedParameters: {} = {}
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Overrides [AbstractBaseMaskFilter](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md#create)

### `Static`fragmentPostProcess

* fragmentPostProcess(postProcessModes?: string[]): string

  Construct filter post-processing code according to provided value.

  #### Parameters

  + postProcessModes: string[] = []

    Post-process modes to construct techniques.

  #### Returns string

  The constructed shader code for post-process techniques.