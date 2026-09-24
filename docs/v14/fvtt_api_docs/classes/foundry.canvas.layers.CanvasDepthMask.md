---
title: "CanvasDepthMask | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasDepthMask.html"
category: "classes"
---

# Class CanvasDepthMask

The depth mask which contains a mapping of elevation. Needed to know if we must render objects according to depth.
Red channel: Lighting occlusion (top).
Green channel: Lighting occlusion (bottom).
Blue channel: Weather occlusion.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasDepthMask))

* [CachedContainer](foundry.canvas.containers.CachedContainer.md)
  + CanvasDepthMask

##### Index

### Properties

[\_elevationDirty](#_elevationdirty)
[autoRender](#autorender)
[clearColor](#clearcolor)
[displayed](#displayed)
[renderDirty](#renderdirty)
[roofs](#roofs)
[\_renderPaths](#_renderpaths)
[textureConfiguration](#textureconfiguration)

### Accessors

[alphaMode](#alphamode)
[renderTexture](#rendertexture)
[sprite](#sprite)

### Methods

[\_update](#_update)
[clear](#clear)
[createRenderTexture](#createrendertexture)
[destroy](#destroy)
[mapElevation](#mapelevation)
[removeRenderTexture](#removerendertexture)
[render](#render)
<#bind>
[#renderSecondary](#rendersecondary)
[resizeRenderTexture](#resizerendertexture)

## Properties

### `Internal`\_elevationDirty

\_elevationDirty: boolean = false

Update the elevation-to-depth mapping?

### autoRender

autoRender: boolean = true

If true, the Container is rendered every frame.
If false, the Container is rendered only if [CachedContainer#renderDirty](foundry.canvas.containers.CachedContainer.md#renderdirty) is true.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[autoRender](foundry.canvas.containers.CachedContainer.md#autorender)

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

### roofs

roofs: Container<DisplayObject>

Container in which roofs are rendered with depth data.

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

### \_update

* \_update(): void

  `Internal`

  Update the elevation-to-depth mapping.
  Needs to be called after the children have been sorted
  and the canvas transform phase.

  #### Returns void

### clear

* clear(): CanvasDepthMask

  Clear the depth mask.

  #### Returns CanvasDepthMask

  Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[clear](foundry.canvas.containers.CachedContainer.md#clear)

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

### mapElevation

* mapElevation(elevation: number, inclusive?: boolean): number

  Map an elevation to a value in the range [0, 1] with 8-bit precision.
  The depth-rendered object are rendered with these values into the render texture.

  #### Parameters

  + elevation: number

    The elevation in distance units
  + `Optional`inclusive: boolean = true

    If false, the value belonging to `elevation` minus epsilon is return instead.
    Default: `true`.

  #### Returns number

  The value for this elevation in the range [0, 1] with 8-bit precision

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