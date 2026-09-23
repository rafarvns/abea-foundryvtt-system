---
title: "CachedContainer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.CachedContainer.html"
category: "classes"
---

# Class CachedContainer

A special type of PIXI.Container which draws its contents to a cached RenderTexture.
This is accomplished by overriding the Container#render method to draw to our own special RenderTexture.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.containers.CachedContainer))

* Container
  + CachedContainer
    - [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.md)
    - [DarknessLevelContainer](foundry.canvas.layers.DarknessLevelContainer.md)
    - [CanvasDepthMask](foundry.canvas.layers.CanvasDepthMask.md)
    - [CanvasOcclusionMask](foundry.canvas.layers.CanvasOcclusionMask.md)
    - [CanvasVisionMask](foundry.canvas.layers.CanvasVisionMask.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[autoRender](#autorender)
[clearColor](#clearcolor)
[displayed](#displayed)
[renderDirty](#renderdirty)
[\_renderPaths](#_renderpaths)
[textureConfiguration](#textureconfiguration)

### Accessors

[alphaMode](#alphamode)
[renderTexture](#rendertexture)
[sprite](#sprite)

### Methods

[clear](#clear)
[createRenderTexture](#createrendertexture)
[destroy](#destroy)
[removeRenderTexture](#removerendertexture)
[render](#render)
<#bind>
[#renderSecondary](#rendersecondary)
[resizeRenderTexture](#resizerendertexture)

## Constructors

### constructor

* new CachedContainer(sprite?: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite): CachedContainer

  Construct a CachedContainer.

  #### Parameters

  + `Optional`sprite: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

    A specific sprite to bind to this CachedContainer and its renderTexture.

  #### Returns CachedContainer

  Overrides PIXI.Container.constructor

## Properties

### autoRender

autoRender: boolean = true

If true, the Container is rendered every frame.
If false, the Container is rendered only if [CachedContainer#renderDirty](#renderdirty) is true.

### clearColor

clearColor: number[] = ...

An RGBA array used to define the clear color of the RenderTexture

### displayed

displayed: boolean = false

Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?

### renderDirty

renderDirty: boolean = true

Does the Container need to be rendered?
Set to false after the Container is rendered.

### `Protected`\_renderPaths

\_renderPaths: Map<  
Â Â Â Â RenderTexture,  
Â Â Â Â { clearColor: number[]; renderFunction: Function },  
> = ...

A map of render textures, linked to their render function and an optional RGBA clear color.

### `Static` `Abstract`textureConfiguration

textureConfiguration: {  
Â Â Â Â format: FORMATS;  
Â Â Â Â mipmap: MIPMAP\_MODES;  
Â Â Â Â multisample: MSAA\_QUALITY;  
Â Â Â Â scaleMode: SCALE\_MODES;  
} = {}

The texture configuration to use for this cached container

## Accessors

### alphaMode

* set alphaMode(mode: ALPHA\_MODES): void

  Set the alpha mode of the cached container render texture.

  #### Parameters

  + mode: ALPHA\_MODES

  #### Returns void

### renderTexture

* get renderTexture(): RenderTexture

  The primary render texture bound to this cached container.

  #### Returns RenderTexture

### sprite

* get sprite(): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

  A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
  The RenderTexture from this Container is associated with the Sprite which is automatically rendered.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

## Methods

### clear

* clear(destroy?: boolean): CachedContainer

  Clear the cached container, removing its current contents.

  #### Parameters

  + `Optional`destroy: boolean = true

    Tell children that we should destroy texture as well.

  #### Returns CachedContainer

  A reference to the cleared container for chaining.

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

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### removeRenderTexture

* removeRenderTexture(renderTexture: RenderTexture, destroy?: boolean): void

  Remove a previously created render texture.

  #### Parameters

  + renderTexture: RenderTexture

    The render texture to remove.
  + `Optional`destroy: boolean = true

    Should the render texture be destroyed?

  #### Returns void

### render

* render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  #### Inherit Doc

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

### `Protected`#renderSecondary

* "#renderSecondary"(renderer: Renderer): void

  `Protected`

  Custom rendering for secondary render textures

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.

  #### Returns void

### `Static`resizeRenderTexture

* resizeRenderTexture(renderer: Renderer, rt: RenderTexture): void

  Resize a render texture passed as a parameter with the renderer.

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.
  + rt: RenderTexture

    The render texture to resize.

  #### Returns void