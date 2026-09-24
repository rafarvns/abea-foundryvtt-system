---
title: "PrimaryCanvasGroup | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.PrimaryCanvasGroup.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.html)

# Class PrimaryCanvasGroup

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a [foundry.canvas.containers.CachedContainer](foundry.canvas.containers.CachedContainer.html)
which is rendered to the Scene as a [foundry.canvas.containers.SpriteMesh](foundry.canvas.containers.SpriteMesh.html).
This allows the rendered result of the Primary Canvas Group to be affected by a
[foundry.canvas.rendering.shaders.BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.html).

#### Mixes

CanvasGroupMixin

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.groups.PrimaryCanvasGroup))

* [CachedContainer](foundry.canvas.containers.CachedContainer.html)<this>
  + PrimaryCanvasGroup

##### Index

### Properties

[\_ambienceFilter](foundry.canvas.groups.PrimaryCanvasGroup.html#_ambiencefilter)
[\_backgroundColor](foundry.canvas.groups.PrimaryCanvasGroup.html#_backgroundcolor)
[autoRender](foundry.canvas.groups.PrimaryCanvasGroup.html#autorender)
[background](foundry.canvas.groups.PrimaryCanvasGroup.html#background)
[clearColor](foundry.canvas.groups.PrimaryCanvasGroup.html#clearcolor)
[displayed](foundry.canvas.groups.PrimaryCanvasGroup.html#displayed)
[drawings](foundry.canvas.groups.PrimaryCanvasGroup.html#drawings)
[foreground](foundry.canvas.groups.PrimaryCanvasGroup.html#foreground)
[hoverFadeElevation](foundry.canvas.groups.PrimaryCanvasGroup.html#hoverfadeelevation)
[quadtree](foundry.canvas.groups.PrimaryCanvasGroup.html#quadtree)
[renderDirty](foundry.canvas.groups.PrimaryCanvasGroup.html#renderdirty)
[tiles](foundry.canvas.groups.PrimaryCanvasGroup.html#tiles)
[tokens](foundry.canvas.groups.PrimaryCanvasGroup.html#tokens)
[videoMeshes](foundry.canvas.groups.PrimaryCanvasGroup.html#videomeshes)
[\_renderPaths](foundry.canvas.groups.PrimaryCanvasGroup.html#_renderpaths)
[BACKGROUND\_ELEVATION](foundry.canvas.groups.PrimaryCanvasGroup.html#background_elevation)
[groupName](foundry.canvas.groups.PrimaryCanvasGroup.html#groupname)
[SORT\_LAYERS](foundry.canvas.groups.PrimaryCanvasGroup.html#sort_layers)
[textureConfiguration](foundry.canvas.groups.PrimaryCanvasGroup.html#textureconfiguration)

### Accessors

[alphaMode](foundry.canvas.groups.PrimaryCanvasGroup.html#alphamode)
[backgroundSource](foundry.canvas.groups.PrimaryCanvasGroup.html#backgroundsource)
[foregroundSource](foundry.canvas.groups.PrimaryCanvasGroup.html#foregroundsource)
[renderTexture](foundry.canvas.groups.PrimaryCanvasGroup.html#rendertexture)
[sprite](foundry.canvas.groups.PrimaryCanvasGroup.html#sprite)

### Methods

[\_draw](foundry.canvas.groups.PrimaryCanvasGroup.html#_draw)
[\_onMouseMove](foundry.canvas.groups.PrimaryCanvasGroup.html#_onmousemove)
[\_render](foundry.canvas.groups.PrimaryCanvasGroup.html#_render)
[\_tearDown](foundry.canvas.groups.PrimaryCanvasGroup.html#_teardown)
[addDrawing](foundry.canvas.groups.PrimaryCanvasGroup.html#adddrawing)
[addTile](foundry.canvas.groups.PrimaryCanvasGroup.html#addtile)
[addToken](foundry.canvas.groups.PrimaryCanvasGroup.html#addtoken)
[clear](foundry.canvas.groups.PrimaryCanvasGroup.html#clear)
[createRenderTexture](foundry.canvas.groups.PrimaryCanvasGroup.html#createrendertexture)
[destroy](foundry.canvas.groups.PrimaryCanvasGroup.html#destroy)
[refreshPrimarySpriteMesh](foundry.canvas.groups.PrimaryCanvasGroup.html#refreshprimaryspritemesh)
[removeDrawing](foundry.canvas.groups.PrimaryCanvasGroup.html#removedrawing)
[removeRenderTexture](foundry.canvas.groups.PrimaryCanvasGroup.html#removerendertexture)
[removeTile](foundry.canvas.groups.PrimaryCanvasGroup.html#removetile)
[removeToken](foundry.canvas.groups.PrimaryCanvasGroup.html#removetoken)
[render](foundry.canvas.groups.PrimaryCanvasGroup.html#render)
[sortChildren](foundry.canvas.groups.PrimaryCanvasGroup.html#sortchildren)
[update](foundry.canvas.groups.PrimaryCanvasGroup.html#update)
[#bind](foundry.canvas.groups.PrimaryCanvasGroup.html#bind)
[#renderSecondary](foundry.canvas.groups.PrimaryCanvasGroup.html#rendersecondary)
[\_compareObjects](foundry.canvas.groups.PrimaryCanvasGroup.html#_compareobjects)
[resizeRenderTexture](foundry.canvas.groups.PrimaryCanvasGroup.html#resizerendertexture)

## Properties

### `Internal`\_ambienceFilter

\_ambienceFilter: [PrimaryCanvasGroupAmbienceFilter](foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.html)

The ambience filter which is applying post-processing effects.

### `Internal`\_backgroundColor

\_backgroundColor: [red: number, green: number, blue: number]

The background color in RGB.

### autoRender

autoRender: boolean = true

If true, the Container is rendered every frame.
If false, the Container is rendered only if [CachedContainer#renderDirty](foundry.canvas.containers.CachedContainer.html#renderdirty) is true.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[autoRender](foundry.canvas.containers.CachedContainer.html#autorender)

### background

background: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

The primary background image configured for the Scene, rendered as a SpriteMesh.

### clearColor

clearColor: number[] = ...

Overrides [CachedContainer](foundry.canvas.containers.CachedContainer.html).[clearColor](foundry.canvas.containers.CachedContainer.html#clearcolor)

### displayed

displayed: boolean = false

Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[displayed](foundry.canvas.containers.CachedContainer.html#displayed)

### drawings

drawings: Collection<string, [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.html)> = ...

The collection of PrimaryDrawingContainer objects which are rendered in the Scene.

### foreground

foreground: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

The primary foreground image configured for the Scene, rendered as a SpriteMesh.

### hoverFadeElevation

hoverFadeElevation: number = 0

Occludable objects above this elevation are faded on hover.

### quadtree

quadtree: [CanvasQuadtree](foundry.canvas.geometry.CanvasQuadtree.html) = ...

A Quadtree which partitions and organizes primary canvas objects.

### renderDirty

renderDirty: boolean = true

Does the Container need to be rendered?
Set to false after the Container is rendered.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[renderDirty](foundry.canvas.containers.CachedContainer.html#renderdirty)

### tiles

tiles: Collection<string, [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)> = ...

The collection of SpriteMesh objects which are rendered in the Scene.

### tokens

tokens: Collection<string, [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)> = ...

The collection of SpriteMesh objects which are rendered in the Scene.

### videoMeshes

videoMeshes: Set<[PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)> = ...

Track the set of HTMLVideoElements which are currently playing as part of this group.

### `Protected`\_renderPaths

\_renderPaths: Map<  
Â Â Â Â RenderTexture,  
Â Â Â Â { clearColor: number[]; renderFunction: Function },  
> = ...

A map of render textures, linked to their render function and an optional RGBA clear color.

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[\_renderPaths](foundry.canvas.containers.CachedContainer.html#_renderpaths)

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

textureConfiguration: {  
Â Â Â Â format: FORMATS;  
Â Â Â Â multisample: MSAA\_QUALITY;  
Â Â Â Â scaleMode: SCALE\_MODES;  
} = ...

Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[textureConfiguration](foundry.canvas.containers.CachedContainer.html#textureconfiguration)

## Accessors

### alphaMode

* set alphaMode(mode: ALPHA\_MODES): void

  Set the alpha mode of the cached container render texture.

  #### Parameters

  + mode: ALPHA\_MODES

  #### Returns void

  Inherited from CanvasGroupMixin(CachedContainer).alphaMode

### backgroundSource

* get backgroundSource(): null | HTMLImageElement | HTMLVideoElement

  Return the base HTML image or video element which provides the background texture.

  #### Returns null | HTMLImageElement | HTMLVideoElement

### foregroundSource

* get foregroundSource(): null | HTMLImageElement | HTMLVideoElement

  Return the base HTML image or video element which provides the foreground texture.

  #### Returns null | HTMLImageElement | HTMLVideoElement

### renderTexture

* get renderTexture(): RenderTexture

  The primary render texture bound to this cached container.

  #### Returns RenderTexture

  Inherited from CanvasGroupMixin(CachedContainer).renderTexture

### sprite

* get sprite(): [SpriteMesh](foundry.canvas.containers.SpriteMesh.html) | Sprite

  A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
  The RenderTexture from this Container is associated with the Sprite which is automatically rendered.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.html) | Sprite

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

  Overrides CanvasGroupMixin(CachedContainer).\_render

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### addDrawing

* addDrawing(drawing: Drawing): [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.html)

  Add a PrimaryGraphics to the group.

  #### Parameters

  + drawing: Drawing

    The Drawing being added

  #### Returns [PrimaryGraphics](foundry.canvas.primary.PrimaryGraphics.html)

  The created PrimaryGraphics instance

### addTile

* addTile(tile: Tile): [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

  Draw the SpriteMesh for a specific Token object.

  #### Parameters

  + tile: Tile

    The Tile being added

  #### Returns [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

  The added PrimarySpriteMesh

### addToken

* addToken(token: Token): [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

  Draw the SpriteMesh for a specific Token object.

  #### Parameters

  + token: Token

    The Token being added

  #### Returns [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

  The added PrimarySpriteMesh

### clear

* clear(destroy?: boolean): [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.html)

  Clear the cached container, removing its current contents.

  #### Parameters

  + `Optional`destroy: boolean = true

    Tell children that we should destroy texture as well.

  #### Returns [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.html)

  A reference to the cleared container for chaining.

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[clear](foundry.canvas.containers.CachedContainer.html#clear)

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

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[createRenderTexture](foundry.canvas.containers.CachedContainer.html#createrendertexture)

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[destroy](foundry.canvas.containers.CachedContainer.html#destroy)

### refreshPrimarySpriteMesh

* refreshPrimarySpriteMesh(): void

  Refresh the primary mesh.

  #### Returns void

### removeDrawing

* removeDrawing(drawing: Drawing): void

  Remove a PrimaryGraphics from the group.

  #### Parameters

  + drawing: Drawing

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

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[removeRenderTexture](foundry.canvas.containers.CachedContainer.html#removerendertexture)

### removeTile

* removeTile(tile: Tile): void

  Remove a TokenMesh from the group.

  #### Parameters

  + tile: Tile

    The Tile being removed

  #### Returns void

### removeToken

* removeToken(token: Token): void

  Remove a TokenMesh from the group.

  #### Parameters

  + token: Token

    The Token being removed

  #### Returns void

### render

* render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  #### Inherit Doc

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[render](foundry.canvas.containers.CachedContainer.html#render)

### sortChildren

* sortChildren(): void

  Override the default PIXI.Container behavior for how objects in this container are sorted.

  #### Returns void

  Overrides CanvasGroupMixin(CachedContainer).sortChildren

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

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[#bind](foundry.canvas.containers.CachedContainer.html#bind)

### `Protected`#renderSecondary

* "#renderSecondary"(renderer: Renderer): void

  `Protected`

  Custom rendering for secondary render textures

  #### Parameters

  + renderer: Renderer

    The active canvas renderer.

  #### Returns void

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[#renderSecondary](foundry.canvas.containers.CachedContainer.html#rendersecondary)

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

  Inherited from [CachedContainer](foundry.canvas.containers.CachedContainer.html).[resizeRenderTexture](foundry.canvas.containers.CachedContainer.html#resizerendertexture)