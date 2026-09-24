---
title: "PrimaryCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.groups.PrimaryCanvasGroup.html"
category: "classes"
---

# Class PrimaryCanvasGroup

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a [foundry.canvas.containers.CachedContainer](foundry.canvas.containers.CachedContainer.md)
which is rendered to the Scene as a [foundry.canvas.containers.SpriteMesh](foundry.canvas.containers.SpriteMesh.md).
This allows the rendered result of the Primary Canvas Group to be affected by a
[foundry.canvas.rendering.shaders.BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).

#### Mixes

CanvasGroupMixin

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.groups.PrimaryCanvasGroup))

* [CachedContainer](foundry.canvas.containers.CachedContainer.md)<this>
  + PrimaryCanvasGroup

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_ambienceFilter](#_ambiencefilter)
[\_backgroundColor](#_backgroundcolor)
[autoRender](#autorender)
[background](#background)
[clearColor](#clearcolor)
[displayed](#displayed)
[drawings](#drawings)
[foreground](#foreground)
[levelTextures](#leveltextures)
[objects](#objects)
[quadtree](#quadtree)
[renderDirty](#renderdirty)
[tiles](#tiles)
[tokens](#tokens)
[videoMeshes](#videomeshes)
[\_renderPaths](#_renderpaths)
[BACKGROUND\_ELEVATION](#background_elevation)
[groupName](#groupname)
[SORT\_LAYERS](#sort_layers)
[textureConfiguration](#textureconfiguration)

### Accessors

[alphaMode](#alphamode)
[backgroundSource](#backgroundsource)
[foregroundSource](#foregroundsource)
[renderTexture](#rendertexture)
[sprite](#sprite)

### Methods

[\_draw](#_draw)
[\_onMouseMove](#_onmousemove)
[\_render](#_render)
[\_tearDown](#_teardown)
[addDrawing](#adddrawing)
[addTile](#addtile)
[addToken](#addtoken)
[clear](#clear)
[createRenderTexture](#createrendertexture)
[destroy](#destroy)
[refreshPrimarySpriteMesh](#refreshprimaryspritemesh)
[removeDrawing](#removedrawing)
[removeRenderTexture](#removerendertexture)
[removeTile](#removetile)
[removeToken](#removetoken)
[render](#render)
[sortChildren](#sortchildren)
[update](#update)
<#bind>
[#renderSecondary](#rendersecondary)
[\_compareObjects](#_compareobjects)
[resizeRenderTexture](#resizerendertexture)

## Constructors

### constructor

* new PrimaryCanvasGroup(sprite?: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)): PrimaryCanvasGroup

  #### Parameters

  + `Optional`sprite: [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

  #### Returns PrimaryCanvasGroup

  Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[constructor](foundry.canvas.containers.CachedContainer.md#constructor)

## Properties

### `Internal`\_ambienceFilter

\_ambienceFilter: [PrimaryCanvasGroupAmbienceFilter](foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.md)

The ambience filter which is applying post-processing effects.

### `Internal`\_backgroundColor

\_backgroundColor: [red: number, green: number, blue: number]

The background color in RGB.

### autoRender

autoRender: boolean = true

If true, the Container is rendered every frame.
If false, the Container is rendered only if [CachedContainer#renderDirty](foundry.canvas.containers.CachedContainer.md#renderdirty) is true.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[autoRender](foundry.canvas.containers.CachedContainer.md#autorender)

### background

background: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

The primary background image configured for the Scene, rendered as a SpriteMesh.

### clearColor

clearColor: number[] = ...

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.md).[clearColor](foundry.canvas.containers.CachedContainer.md#clearcolor)

### displayed

displayed: boolean = false

Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[displayed](foundry.canvas.containers.CachedContainer.md#displayed)

### drawings

drawings: [Collection](foundry.utils.Collection.md)<string, [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.md)> = ...

The collection of PrimaryDrawingContainer objects which are rendered in the Scene.

### foreground

foreground: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

The primary foreground image configured for the Scene, rendered as a SpriteMesh.

### levelTextures

levelTextures: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)[] = []

The level texture meshes, sorted in ascending order.

### objects

objects: readonly PrimaryCanvasObject[] = []

All PCOs that are in this primary group in no particular order.

### quadtree

quadtree: [CanvasQuadtree](foundry.canvas.geometry.CanvasQuadtree.md) = ...

A Quadtree which partitions and organizes primary canvas objects.

### renderDirty

renderDirty: boolean = true

Does the Container need to be rendered?
Set to false after the Container is rendered.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[renderDirty](foundry.canvas.containers.CachedContainer.md#renderdirty)

### tiles

tiles: [Collection](foundry.utils.Collection.md)<string, [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)> = ...

The collection of SpriteMesh objects which are rendered in the Scene.

### tokens

tokens: [Collection](foundry.utils.Collection.md)<string, [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)> = ...

The collection of SpriteMesh objects which are rendered in the Scene.

### videoMeshes

videoMeshes: Set<[PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)> = ...

Track the set of HTMLVideoElements which are currently playing as part of this group.

### `Protected`\_renderPaths

\_renderPaths: Map<  
Â Â Â Â RenderTexture,  
Â Â Â Â { clearColor: number[]; renderFunction: Function },  
> = ...

A map of render textures, linked to their render function and an optional RGBA clear color.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[\_renderPaths](foundry.canvas.containers.CachedContainer.md#_renderpaths)

### `Static`BACKGROUND\_ELEVATION

BACKGROUND\_ELEVATION: number = 0

Allow API users to override the default elevation of the background layer.
This is a temporary solution until more formal support for scene levels is added in a future release.

### `Static`groupName

groupName: string = "primary"

Overrides CanvasGroupMixin(CachedContainer).groupName

### `Static`SORT\_LAYERS

SORT\_LAYERS: Readonly<  
Â Â Â Â { DRAWINGS: 600; SCENE: 0; TILES: 500; TOKENS: 700; WEATHER: 1000 },  
> = ...

Sort order to break ties on the group/layer level.

### `Static`textureConfiguration

textureConfiguration: { format: any; multisample: any; scaleMode: any } = ...

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[textureConfiguration](foundry.canvas.containers.CachedContainer.md#textureconfiguration)

## Accessors

### alphaMode

* set alphaMode(mode: ALPHA\_MODES): void

  Set the alpha mode of the cached container render texture.

  #### Parameters

  + mode: ALPHA\_MODES

  #### Returns void

  Inherited from CanvasGroupMixin(CachedContainer).alphaMode

### backgroundSource

* get backgroundSource(): HTMLImageElement | HTMLVideoElement | null

  Return the base HTML image or video element which provides the background texture.

  #### Returns HTMLImageElement | HTMLVideoElement | null

### foregroundSource

* get foregroundSource(): HTMLImageElement | HTMLVideoElement | null

  Return the base HTML image or video element which provides the foreground texture.

  #### Returns HTMLImageElement | HTMLVideoElement | null

### renderTexture

* get renderTexture(): RenderTexture

  The primary render texture bound to this cached container.

  #### Returns RenderTexture

  Inherited from CanvasGroupMixin(CachedContainer).renderTexture

### sprite

* get sprite(): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

  A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
  The RenderTexture from this Container is associated with the Sprite which is automatically rendered.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md) | Sprite

  Inherited from CanvasGroupMixin(CachedContainer).sprite

## Methods

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_onMouseMove

* \_onMouseMove(currentPos: Point, hasMouseMoved: boolean): void

  `Internal`

  Handle mousemove events on the primary group to update the hovered state of its children.

  #### Parameters

  + currentPos: Point

    Current mouse position
  + hasMouseMoved: boolean

    Has the mouse been moved (or it is a simulated mouse move event)?

  #### Returns void

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  #### Inherit Doc

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### addDrawing

* addDrawing(drawing: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](foundry.canvas.placeables.Drawing.md)): [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.md)

  Add a PrimaryGraphics to the group.

  #### Parameters

  + drawing: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](foundry.canvas.placeables.Drawing.md)

    The Drawing being added

  #### Returns [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.md)

  The created PrimaryGraphics instance

### addTile

* addTile(tile: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Tile](foundry.canvas.placeables.Tile.md)): [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

  Draw the SpriteMesh for a specific Token object.

  #### Parameters

  + tile: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Tile](foundry.canvas.placeables.Tile.md)

    The Tile being added

  #### Returns [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

  The added PrimarySpriteMesh

### addToken

* addToken(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

  Draw the SpriteMesh for a specific Token object.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The Token being added

  #### Returns [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

  The added PrimarySpriteMesh

### clear

* clear(destroy?: boolean): PrimaryCanvasGroup

  Clear the cached container, removing its current contents.

  #### Parameters

  + `Optional`destroy: boolean = true

    Tell children that we should destroy texture as well.

  #### Returns PrimaryCanvasGroup

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

### refreshPrimarySpriteMesh

* refreshPrimarySpriteMesh(): void

  Refresh the primary mesh.

  #### Returns void

### removeDrawing

* removeDrawing(drawing: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](foundry.canvas.placeables.Drawing.md)): void

  Remove a PrimaryGraphics from the group.

  #### Parameters

  + drawing: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](foundry.canvas.placeables.Drawing.md)

    The Drawing being removed

  #### Returns void

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

### removeTile

* removeTile(tile: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Tile](foundry.canvas.placeables.Tile.md)): void

  Remove a TokenMesh from the group.

  #### Parameters

  + tile: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Tile](foundry.canvas.placeables.Tile.md)

    The Tile being removed

  #### Returns void

### removeToken

* removeToken(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): void

  Remove a TokenMesh from the group.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The Token being removed

  #### Returns void

### render

* render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  #### Inherit Doc

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.md).[render](foundry.canvas.containers.CachedContainer.md#render)

### sortChildren

* sortChildren(): void

  Override the default PIXI.Container behavior for how objects in this container are sorted.

  #### Returns void

### update

* update(): void

  Update this group. Calculates the canvas transform and bounds of all its children and updates the quadtree.

  #### Returns void

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

### `Static`\_compareObjects

* \_compareObjects(a: any, b: any): number

  `Internal`

  The sorting function used to order objects inside the Primary Canvas Group.
  Overrides the default sorting function defined for the PIXI.Container.
  Sort Tokens PCO above other objects except WeatherEffects, then Drawings PCO, all else held equal.

  #### Parameters

  + a: any

    An object to display
  + b: any

    Some other object to display

  #### Returns number

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