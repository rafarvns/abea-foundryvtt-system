---
title: "TextureTransitionFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.filters.TextureTransitionFilter.html"
category: "classes"
---

# Class TextureTransitionFilter

A filter specialized for transition effects between a source object and a target texture.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.rendering.filters.TextureTransitionFilter))

* [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)
  + TextureTransitionFilter

##### Index

### Accessors

[targetTexture](#targettexture)
[type](#type)
[defaultUniforms](#defaultuniforms)
[TYPES](#types)

### Methods

[apply](#apply)
[\_createFragmentShader](#_createfragmentshader)
[\_createVertexShader](#_createvertexshader)
[animate](#animate)
[create](#create)

## Accessors

### targetTexture

* set targetTexture(targetTexture: Texture<Resource>): void

  Sampler target for this filter.

  #### Parameters

  + targetTexture: Texture<Resource>

  #### Returns void

### type

* get type(): string

  The transition type (see [TextureTransitionFilter.TYPES](#types)).

  #### Returns string

  #### Default Value

  ```
  TextureTransitionFilter.TYPES.FADE
  Copy
  ```

### `Static`defaultUniforms

* get defaultUniforms(): {  
  Â Â Â Â anchor: { x: number; y: number };  
  Â Â Â Â backgroundColor: number[];  
  Â Â Â Â filterMatrix: any;  
  Â Â Â Â filterMatrixInverse: any;  
  Â Â Â Â opaque: number;  
  Â Â Â Â progress: number;  
  Â Â Â Â rotation: number;  
  Â Â Â Â targetTexture: null;  
  Â Â Â Â targetUVMatrix: any;  
  Â Â Â Â tintAlpha: number[];  
  Â Â Â Â type: number;  
  }

  #### Returns { Â Â Â Â anchor: { x: number; y: number }; Â Â Â Â backgroundColor: number[]; Â Â Â Â filterMatrix: any; Â Â Â Â filterMatrixInverse: any; Â Â Â Â opaque: number; Â Â Â Â progress: number; Â Â Â Â rotation: number; Â Â Â Â targetTexture: null; Â Â Â Â targetUVMatrix: any; Â Â Â Â tintAlpha: number[]; Â Â Â Â type: number; }

### `Static`TYPES

* get TYPES(): Readonly<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â CROSSHATCH: "crosshatch";  
  Â Â Â Â Â Â Â Â DOTS: "dots";  
  Â Â Â Â Â Â Â Â FADE: "fade";  
  Â Â Â Â Â Â Â Â GLITCH: "glitch";  
  Â Â Â Â Â Â Â Â HOLE: "hole";  
  Â Â Â Â Â Â Â Â HOLE\_SWIRL: "holeSwirl";  
  Â Â Â Â Â Â Â Â HOLOGRAM: "hologram";  
  Â Â Â Â Â Â Â Â MORPH: "morph";  
  Â Â Â Â Â Â Â Â SWIRL: "swirl";  
  Â Â Â Â Â Â Â Â WATER\_DROP: "waterDrop";  
  Â Â Â Â Â Â Â Â WAVES: "waves";  
  Â Â Â Â Â Â Â Â WHITE\_NOISE: "whiteNoise";  
  Â Â Â Â Â Â Â Â WIND: "wind";  
  Â Â Â Â },  
  >

  Transition types for this shader.

  #### Returns Readonly< Â Â Â Â { Â Â Â Â Â Â Â Â CROSSHATCH: "crosshatch"; Â Â Â Â Â Â Â Â DOTS: "dots"; Â Â Â Â Â Â Â Â FADE: "fade"; Â Â Â Â Â Â Â Â GLITCH: "glitch"; Â Â Â Â Â Â Â Â HOLE: "hole"; Â Â Â Â Â Â Â Â HOLE\_SWIRL: "holeSwirl"; Â Â Â Â Â Â Â Â HOLOGRAM: "hologram"; Â Â Â Â Â Â Â Â MORPH: "morph"; Â Â Â Â Â Â Â Â SWIRL: "swirl"; Â Â Â Â Â Â Â Â WATER\_DROP: "waterDrop"; Â Â Â Â Â Â Â Â WAVES: "waves"; Â Â Â Â Â Â Â Â WHITE\_NOISE: "whiteNoise"; Â Â Â Â Â Â Â Â WIND: "wind"; Â Â Â Â }, >

## Methods

### apply

* apply(filterManager: any, input: any, output: any, clear: any): void

  #### Parameters

  + filterManager: any
  + input: any
  + output: any
  + clear: any

  #### Returns void

  #### Inherit Doc

### `Static`\_createFragmentShader

* \_createFragmentShader(): string

  #### Returns string

### `Static`\_createVertexShader

* \_createVertexShader(): string

  #### Returns string

### `Static`animate

* animate(  
  Â Â Â Â subject: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite,  
  Â Â Â Â texture: Texture<Resource>,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â duration?: number;  
  Â Â Â Â Â Â Â Â easing?: string | Function;  
  Â Â Â Â Â Â Â Â name?: string | symbol;  
  Â Â Â Â Â Â Â Â type?: string;  
  Â Â Â Â },  
  ): Promise<boolean>

  Animate a transition from a subject SpriteMesh/PIXI.Sprite to a given texture.

  #### Parameters

  + subject: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

    The source mesh/sprite to apply a transition.
  + texture: Texture<Resource>

    The target texture.
  + `Optional`options: {  
    Â Â Â Â duration?: number;  
    Â Â Â Â easing?: string | Function;  
    Â Â Â Â name?: string | symbol;  
    Â Â Â Â type?: string;  
    } = {}
    - ##### `Optional`duration?: number

      The animation duration
    - ##### `Optional`easing?: string | Function

      The easing function of the animation
    - ##### `Optional`name?: string | symbol

      The name of the
      [foundry.canvas.animation.CanvasAnimation](foundry.canvas.animation.CanvasAnimation.md).
    - ##### `Optional`type?: string

      The transition type (default to FADE.)

  #### Returns Promise<boolean>

  A Promise which resolves to true once the animation has concluded
  or false if the animation was prematurely terminated

### `Static`create

* create(uniforms: any, options: any): [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  #### Parameters

  + uniforms: any
  + options: any

  #### Returns [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md)

  Inherited from [AbstractBaseFilter](foundry.canvas.rendering.filters.AbstractBaseFilter.md).[create](foundry.canvas.rendering.filters.AbstractBaseFilter.md#create)