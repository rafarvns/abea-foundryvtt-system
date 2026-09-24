---
title: "CanvasOcclusionMask | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.layers.CanvasOcclusionMask.html"
category: "classes"
---

# Class CanvasOcclusionMask

The occlusion mask which contains radial occlusion and vision occlusion from tokens.
Red channel: Fade occlusion.
Green channel: Radial occlusion.
Blue channel: Vision occlusion.
Alpha channel: Surface occlusion.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.layers.CanvasOcclusionMask))

* [CachedContainer](foundry.canvas.containers.CachedContainer.md)
  + CanvasOcclusionMask

##### Index

### Properties

[autoRender](#autorender)
[clearColor](#clearcolor)
[displayed](#displayed)
[renderDirty](#renderdirty)
[surfaces](#surfaces)
[tokens](#tokens)
[\_renderPaths](#_renderpaths)
[textureConfiguration](#textureconfiguration)

### Accessors

[alphaMode](#alphamode)
[occluded](#occluded)
[occludedSurfaces](#occludedsurfaces)
[renderTexture](#rendertexture)
[sprite](#sprite)
[vision](#vision)

### Methods

[\_updateOccludableTokens](#_updateoccludabletokens)
[\_updateOccludedObjects](#_updateoccludedobjects)
[\_updateOccludedSurfaces](#_updateoccludedsurfaces)
[\_updateOcclusionMask](#_updateocclusionmask)
[clear](#clear)
[createRenderTexture](#createrendertexture)
[destroy](#destroy)
[mapElevation](#mapelevation)
[removeRenderTexture](#removerendertexture)
[render](#render)
[\_identifyOccludedObjects](#_identifyoccludedobjects)
<#bind>
[#renderSecondary](#rendersecondary)
[resizeRenderTexture](#resizerendertexture)

## Properties

### autoRender

autoRender: boolean = false

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[autoRender](foundry.canvas.containers.CachedContainer.md#autorender)

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

### surfaces

surfaces: Graphics

Graphics in which surface occlusion shapes are drawn.

### tokens

tokens: Graphics

Graphics in which token radial and vision occlusion shapes are drawn.

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

### occluded

* get occluded(): Set<PrimaryCanvasObject>

  The set of currently occluded canvas objects.

  #### Returns Set<PrimaryCanvasObject>

### occludedSurfaces

* get occludedSurfaces(): ReadonlySet<[DeepReadonly](../types/foundry.types.DeepReadonly.md)<[RegionSurface](../interfaces/foundry.documents.types.RegionSurface.md)>>

  The occluded surfaces.

  #### Returns ReadonlySet<[DeepReadonly](../types/foundry.types.DeepReadonly.md)<[RegionSurface](../interfaces/foundry.documents.types.RegionSurface.md)>>

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

### vision

* get vision(): boolean

  Is vision occlusion active?

  #### Returns boolean

## Methods

### \_updateOccludableTokens

* \_updateOccludableTokens(): void

  `Internal`

  Update the occludable tokens.

  #### Returns void

### \_updateOccludedObjects

* \_updateOccludedObjects(): void

  `Internal`

  Update the current occlusion status of all PCOs.

  #### Returns void

### \_updateOccludedSurfaces

* \_updateOccludedSurfaces(flags: object): void

  `Internal`

  Determine the occluded surfaces.

  #### Parameters

  + flags: object

    The perception render flags that are processed

  #### Returns void

### \_updateOcclusionMask

* \_updateOcclusionMask(): void

  `Internal`

  Draw occlusion shapes to the occlusion mask.
  Fade occlusion draws to the red channel with varying intensity from [0, 1] based on elevation.
  Radial occlusion draws to the green channel with varying intensity from [0, 1] based on elevation.
  Vision occlusion draws to the blue channel with varying intensity from [0, 1] based on elevation.
  Surface occlusion draws to the alpha channel with varying intensity from [0, 1] based on elevation.

  #### Returns void

### clear

* clear(): CanvasOcclusionMask

  Clear the occlusion mask.

  #### Returns CanvasOcclusionMask

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

* mapElevation(elevation: number): number

  Map an elevation to a value in the range (0, 1] with 8-bit precision.
  The radial and vision shapes are drawn with these values into the render texture.

  #### Parameters

  + elevation: number

    The elevation in distance units

  #### Returns number

  The value for this elevation in the range (0, 1] with 8-bit precision

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

### `Protected`\_identifyOccludedObjects

* \_identifyOccludedObjects(tokens: Token[]): Set<PrimaryCanvasObjectMixin>

  `Protected`

  Determine the set of objects which should be currently occluded by a Token.

  #### Parameters

  + tokens: Token[]

    The occludable Tokens

  #### Returns Set<PrimaryCanvasObjectMixin>

  The PCO objects which should be currently occluded

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