---
title: "SpriteMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.SpriteMesh.html"
category: "classes"
---

# Class SpriteMesh

An extension of PIXI.Mesh which emulate a PIXI.Sprite with a specific shader.

#### Param: texture

Texture bound to this sprite mesh.

#### Param: shaderClass

Shader class used by this sprite mesh.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.containers.SpriteMesh))

* Container
  + SpriteMesh
    - [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

##### Index

### Properties

[\_transformID](#_transformid)
[\_transformTrimmedID](#_transformtrimmedid)
[indices](#indices)
[\_anchor](#_anchor)
[\_batchData](#_batchdata)
[\_cachedTint](#_cachedtint)
[\_height](#_height)
[\_paddingX](#_paddingx)
[\_paddingY](#_paddingy)
[\_shader](#_shader)
[\_texture](#_texture)
[\_textureID](#_textureid)
[\_textureTrimmedID](#_texturetrimmedid)
[\_textureUvs](#_textureuvs)
[\_tintAlphaDirty](#_tintalphadirty)
[\_tintColor](#_tintcolor)
[\_tintRGB](#_tintrgb)
[\_width](#_width)
[#renderedFrameId](#renderedframeid)
[uvs](#uvs)
[vertexData](#vertexdata)
[vertexTrimmedData](#vertextrimmeddata)

### Accessors

[alphaMode](#alphamode)
[anchor](#anchor)
[blendMode](#blendmode)
[culledThisPass](#culledthispass)
[height](#height)
[isVideo](#isvideo)
[padding](#padding)
[paddingX](#paddingx)
[paddingY](#paddingy)
[pluginName](#pluginname)
[renderedThisPass](#renderedthispass)
[roundPixels](#roundpixels)
[shader](#shader)
[sourceElement](#sourceelement)
[texture](#texture)
[tint](#tint)
[visitedThisPass](#visitedthispass)
[width](#width)

### Methods

[\_calculateBounds](#_calculatebounds)
[\_render](#_render)
[\_renderWithCulling](#_renderwithculling)
[calculateTrimmedVertices](#calculatetrimmedvertices)
[calculateVertices](#calculatevertices)
[containsPoint](#containspoint)
[destroy](#destroy)
[getLocalBounds](#getlocalbounds)
[setShaderClass](#setshaderclass)
[updateTransform](#updatetransform)
[updateUvs](#updateuvs)
[\_onAnchorUpdate](#_onanchorupdate)
[\_onTextureUpdate](#_ontextureupdate)
[\_updateBatchData](#_updatebatchdata)
[from](#from)

## Properties

### `Internal`\_transformID

\_transformID: number = -1

The transform ID.

### `Internal`\_transformTrimmedID

\_transformTrimmedID: number = -1

The transform ID.

### indices

indices: Uint16Array

The indices of the geometry.

### `Protected`\_anchor

\_anchor: ObservablePoint<any>

The anchor point defines the normalized coordinates
in the texture that map to the position of this
sprite.

By default, this is `(0,0)` (or `texture.defaultAnchor`
if you have modified that), which means the position
`(x,y)` of this `Sprite` will be the top-left corner.

Note: Updating `texture.defaultAnchor` after
constructing a `Sprite` does *not* update its anchor.

<https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html>

### `Protected`\_batchData

\_batchData: {  
Â Â Â Â \_texture: Texture;  
Â Â Â Â \_tintRGB: number;  
Â Â Â Â blendMode: BLEND\_MODES;  
Â Â Â Â indices: number[];  
Â Â Â Â uvs: number[];  
Â Â Â Â vertexData: number[];  
Â Â Â Â worldAlpha: number;  
} = ...

Snapshot of some parameters of this display object to render in batched mode.

### `Protected`\_cachedTint

\_cachedTint: [red: number, green: number, blue: number, alpha: number] = ...

Cached tint value so we can tell when the tint is changed.

### `Protected`\_height

\_height: number = 0

The height of the sprite (this is initially set by the texture)

### `Protected`\_paddingX

\_paddingX: number

### `Protected`\_paddingY

\_paddingY: number

### `Protected`\_shader

\_shader: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

The shader bound to this mesh.

### `Protected`\_texture

\_texture: Texture<Resource>

The texture that the sprite is using.

### `Protected`\_textureID

\_textureID: number = -1

The texture ID.

### `Protected`\_textureTrimmedID

\_textureTrimmedID: number = -1

The texture trimmed ID.

### `Protected`\_textureUvs

\_textureUvs: TextureUvs | null = null

An instance of a texture uvs used for padded SpriteMesh.
Instanced only when padding becomes non-zero.

### `Protected`\_tintAlphaDirty

\_tintAlphaDirty: boolean = true

Used to track a tint or alpha change to execute a recomputation of \_cachedTint.

### `Protected`\_tintColor

\_tintColor: Color = ...

The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.

### `Protected`\_tintRGB

\_tintRGB: number = 0xFFFFFF

The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.

### `Protected`\_width

\_width: number = 0

The width of the sprite (this is initially set by the texture).

### `Protected`#renderedFrameId

"#renderedFrameId": number = -1

Last renderer pass in which this mesh actually drew its own content.

### `Protected`uvs

uvs: Float32Array

This is used to store the uvs data of the sprite, assigned at the same time
as the vertexData in calculateVertices().

### `Protected`vertexData

vertexData: Float32Array

This is used to store the vertex data of the sprite (basically a quad).

### `Protected`vertexTrimmedData

vertexTrimmedData: Float32Array | null = null

This is used to calculate the bounds of the object IF it is a trimmed sprite.

## Accessors

### alphaMode

* get alphaMode(): ALPHA\_MODES

  Used to force an alpha mode on this sprite mesh.
  If this property is non null, this value will replace the texture alphaMode when computing color channels.
  Affects how tint, worldAlpha and alpha are computed each others.

  #### Returns ALPHA\_MODES

### anchor

* get anchor(): ObservablePoint<any>

  The anchor sets the origin point of the sprite. The default value is taken from the texture
  and passed to the constructor.

  The default is `(0,0)`, this means the sprite's origin is the top left.

  Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.

  Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.

  If you pass only single parameter, it will set both x and y to the same value as shown in the example below.

  #### Returns ObservablePoint<any>

### blendMode

* set blendMode(value: BLEND\_MODES): void

  The blend mode applied to the SpriteMesh.

  #### Parameters

  + value: BLEND\_MODES

  #### Returns void

  #### Default Value

  ```
  PIXI.BLEND_MODES.NORMAL
  Copy
  ```

### culledThisPass

* get culledThisPass(): boolean

  True if the mesh was culld (visited but not drawn) during the current pass.

  #### Returns boolean

### height

* get height(): number

  #### Returns number

### isVideo

* get isVideo(): boolean

  Is this SpriteMesh rendering a video texture?

  #### Returns boolean

### padding

* get padding(): number

  The maximum x/y padding in pixels (must be a non-negative value.)

  #### Returns number

### paddingX

* get paddingX(): number

  The x padding in pixels (must be a non-negative value.)

  #### Returns number

### paddingY

* get paddingY(): number

  They y padding in pixels (must be a non-negative value.)

  #### Returns number

### pluginName

* get pluginName(): string | null

  Returns the SpriteMesh associated batch plugin. By default the returned plugin is that of the associated shader.
  If a plugin is forced, it will returns the forced plugin. A null value means that this SpriteMesh has no associated
  plugin.

  #### Returns string | null

### renderedThisPass

* get renderedThisPass(): boolean

  True if this mesh drew its own content during the current renderer pass.

  #### Returns boolean

### roundPixels

* set roundPixels(value: any): void

  If true PixiJS will Math.round() x/y values when rendering, stopping pixel interpolation.
  Advantages can include sharper image quality (like text) and faster rendering on canvas.
  The main disadvantage is movement of objects may appear less smooth.
  To set the global default, change PIXI.settings.ROUND\_PIXELS

  #### Parameters

  + value: any

  #### Returns void

  #### Default Value

  ```
  PIXI.settings.ROUND_PIXELS
  Copy
  ```

### shader

* get shader(): [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

  The shader bound to this mesh.

  #### Returns [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

### sourceElement

* get sourceElement(): ImageSource | null

  The HTML source element for this SpriteMesh texture.

  #### Returns ImageSource | null

### texture

* get texture(): Texture<Resource>

  The texture that the sprite is using.

  #### Returns Texture<Resource>

### tint

* get tint(): number

  The tint applied to the sprite. This is a hex value.

  A value of 0xFFFFFF will remove any tint effect.

  #### Returns number

  #### Default Value

  ```
  0xFFFFFF
  Copy
  ```

### visitedThisPass

* get visitedThisPass(): boolean

  True if this mesh was visited by the renderer during the current pass.

  #### Returns boolean

### width

* get width(): number

  #### Returns number

## Methods

### \_calculateBounds

* \_calculateBounds(): void

  #### Returns void

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

### \_renderWithCulling

* \_renderWithCulling(renderer: any): any

  #### Parameters

  + renderer: any

  #### Returns any

### calculateTrimmedVertices

* calculateTrimmedVertices(): void

  Calculates worldTransform \* vertices for a non texture with a trim. store it in vertexTrimmedData.

  This is used to ensure that the true width and height of a trimmed texture is respected.

  #### Returns void

### calculateVertices

* calculateVertices(): void

  Calculates worldTransform \* vertices, store it in vertexData.

  #### Returns void

### containsPoint

* containsPoint(point: Point): boolean

  Check to see if a point is contained within this SpriteMesh Quad.

  #### Parameters

  + point: Point

    Point to check if it's contained.

  #### Returns boolean

  `true` if the point is contained within geometry.

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

### getLocalBounds

* getLocalBounds(rect: any): any

  #### Parameters

  + rect: any

  #### Returns any

### setShaderClass

* setShaderClass(shaderClass: typeof [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: typeof [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

    The shader class

  #### Returns void

### updateTransform

* updateTransform(): void

  #### Returns void

### updateUvs

* updateUvs(): void

  Update uvs and push vertices and uv buffers on GPU if necessary.

  #### Returns void

### `Protected`\_onAnchorUpdate

* \_onAnchorUpdate(): void

  `Protected`

  Called when the anchor position updates.

  #### Returns void

### `Protected`\_onTextureUpdate

* \_onTextureUpdate(): void

  `Protected`

  When the texture is updated, this event will fire to update the scale and frame.

  #### Returns void

### `Protected`\_updateBatchData

* \_updateBatchData(): void

  `Protected`

  Update the batch data object.

  #### Returns void

### `Static`from

* from(  
  Â Â Â Â source:  
  Â Â Â Â Â Â Â Â | string  
  Â Â Â Â Â Â Â Â | Texture<Resource>  
  Â Â Â Â Â Â Â Â | HTMLVideoElement  
  Â Â Â Â Â Â Â Â | HTMLCanvasElement,  
  Â Â Â Â textureOptions?: object,  
  Â Â Â Â shaderClass?: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md),  
  ): SpriteMesh

  Create a SpriteMesh from another source.
  You can specify texture options and a specific shader class derived from BaseSamplerShader.

  #### Parameters

  + source: string | Texture<Resource> | HTMLVideoElement | HTMLCanvasElement

    Source to create texture from.
  + `Optional`textureOptions: object

    See PIXI.BaseTexture's constructor for options.
  + `Optional`shaderClass: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

    The shader class to use. BaseSamplerShader by default.

  #### Returns SpriteMesh