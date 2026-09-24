---
title: "CanvasVisionMask | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasVisionMask.html"
category: "classes"
---

# Class CanvasVisionMask

The vision mask which contains the current line-of-sight texture.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasVisionMask))

* [CachedContainer](foundry.canvas.containers.CachedContainer.md)
  + CanvasVisionMask

##### Index

### Constructors

[constructor](#constructor)

### Properties

[autoRender](#autorender)
[blurFilter](#blurfilter)
[clearColor](#clearcolor)
[displayed](#displayed)
[renderDirty](#renderdirty)
[vision](#vision)
[\_renderPaths](#_renderpaths)
[textureConfiguration](#textureconfiguration)

### Accessors

[alphaMode](#alphamode)
[renderTexture](#rendertexture)
[sprite](#sprite)

### Methods

[attachVision](#attachvision)
[clear](#clear)
[createRenderTexture](#createrendertexture)
[destroy](#destroy)
[detachVision](#detachvision)
[removeRenderTexture](#removerendertexture)
[render](#render)
<#bind>
[#renderSecondary](#rendersecondary)
[resizeRenderTexture](#resizerendertexture)

## Constructors

### constructor

* new CanvasVisionMask(sprite?: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite): CanvasVisionMask

  Construct a CachedContainer.

  #### Parameters

  + `Optional`sprite: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

    A specific sprite to bind to this CachedContainer and its renderTexture.

  #### Returns CanvasVisionMask

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[constructor](foundry.canvas.containers.CachedContainer.md#constructor)

## Properties

### autoRender

autoRender: boolean = false

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[autoRender](foundry.canvas.containers.CachedContainer.md#autorender)

### blurFilter

blurFilter: AlphaBlurFilter

The BlurFilter which applies to the vision mask texture.
This filter applies a NORMAL blend mode to the container.

### clearColor

clearColor: number[] = ...

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[clearColor](foundry.canvas.containers.CachedContainer.md#clearcolor)

### displayed

displayed: boolean = false

Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[displayed](foundry.canvas.containers.CachedContainer.md#displayed)

### renderDirty

renderDirty: boolean = true

Does the Container need to be rendered?
Set to false after the Container is rendered.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[renderDirty](foundry.canvas.containers.CachedContainer.md#renderdirty)

### vision

vision: [CanvasVisionContainer](../types/foundry.canvas.layers.types.CanvasVisionContainer.md)

The current vision Container.

### `Protected`\_renderPaths

\_renderPaths: Map<  
Â Â Â Â RenderTexture,  
Â Â Â Â { clearColor: number[]; renderFunction: Function },  
> = ...

A map of render textures, linked to their render function and an optional RGBA clear color.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[\_renderPaths](foundry.canvas.containers.CachedContainer.md#_renderpaths)

### `Static`textureConfiguration

textureConfiguration: { format: any; multisample: any; scaleMode: any } = ...

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[textureConfiguration](foundry.canvas.containers.CachedContainer.md#textureconfiguration)

## Accessors

### alphaMode

* set alphaMode(mode: ALPHA\_MODES): void

  Set the alpha mode of the cached container render texture.

  #### Parameters

  + mode: ALPHA\_MODES

  #### Returns void

  Inherited from CachedContainer.alphaMode

### renderTexture

* get renderTexture(): RenderTexture

  The primary render texture bound to this cached container.

  #### Returns RenderTexture

  Inherited from CachedContainer.renderTexture

### sprite

* get sprite(): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

  A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
  The RenderTexture from this Container is associated with the Sprite which is automatically rendered.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

  Inherited from CachedContainer.sprite

## Methods

### attachVision

* attachVision(vision: Container<DisplayObject>): [CanvasVisionContainer](../types/foundry.canvas.layers.types.CanvasVisionContainer.md)

  Initialize the vision mask with the los and the fov graphics objects.

  #### Parameters

  + vision: Container<DisplayObject>

    The vision container to attach

  #### Returns [CanvasVisionContainer](../types/foundry.canvas.layers.types.CanvasVisionContainer.md)

### clear

* clear(destroy?: boolean): CanvasVisionMask

  Clear the cached container, removing its current contents.

  #### Parameters

  + `Optional`destroy: boolean = true

    Tell children that we should destroy texture as well.

  #### Returns CanvasVisionMask

  A reference to the cleared container for chaining.

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[clear](foundry.canvas.containers.CachedContainer.md#clear)

### createRenderTexture

* createRenderTexture(  
  Â Â Â Â options?: { clearColor?: number[]; renderFunction?: Function },  
  ): RenderTexture

  Create a render texture, provide a render method and an optional clear color.

  #### Parameters

  + `Optional`options: { clearColor?: number[]; renderFunction?: Function } = {}

    Optional parameters.

    - ##### `Optional`clearColor?: number[]

      An optional clear color to clear the RT before rendering into it.
    - ##### `Optional`renderFunction?: Function

      Render function that will be called to render into the RT.

  #### Returns RenderTexture

  A reference to the created render texture.

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[createRenderTexture](foundry.canvas.containers.CachedContainer.md#createrendertexture)

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[destroy](foundry.canvas.containers.CachedContainer.md#destroy)

### detachVision

* detachVision(): [CanvasVisionContainer](../types/foundry.canvas.layers.types.CanvasVisionContainer.md)

  Detach the vision mask from the cached container.

  #### Returns [CanvasVisionContainer](../types/foundry.canvas.layers.types.CanvasVisionContainer.md)

  The detached vision container.

### removeRenderTexture

* removeRenderTexture(renderTexture: RenderTexture, destroy?: boolean): void

  Remove a previously created render texture.

  #### Parameters

  + renderTexture: RenderTexture

    The render texture to remove.
  + `Optional`destroy: boolean = true

    Should the render texture be destroyed?

  #### Returns void

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[removeRenderTexture](foundry.canvas.containers.CachedContainer.md#removerendertexture)

### render

* render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  #### Inherit Doc

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[render](foundry.canvas.containers.CachedContainer.md#render)

### `Protected`#bind

* "#bind"(renderer: Renderer, tex: RenderTexture, clearColor?: number[]): void

  `Protected`

  Bind a render texture to this renderer.
  Must be called after bindPrimaryBuffer and before bindInitialBuffer.

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.
  + tex: RenderTexture

    The texture to bind.
  + `Optional`clearColor: number[]

    A custom clear color.

  #### Returns void

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[#bind](foundry.canvas.containers.CachedContainer.md#bind)

### `Protected`#renderSecondary

* "#renderSecondary"(renderer: Renderer): void

  `Protected`

  Custom rendering for secondary render textures

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.

  #### Returns void

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[#renderSecondary](foundry.canvas.containers.CachedContainer.md#rendersecondary)

### `Static`resizeRenderTexture

* resizeRenderTexture(renderer: Renderer, rt: RenderTexture): void

  Resize a render texture passed as a parameter with the renderer.

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.
  + rt: RenderTexture

    The render texture to resize.

  #### Returns void

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[resizeRenderTexture](foundry.canvas.containers.CachedContainer.md#resizerendertexture)