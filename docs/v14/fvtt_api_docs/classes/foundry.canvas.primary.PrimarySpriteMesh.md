---
title: "PrimarySpriteMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.primary.PrimarySpriteMesh.html"
category: "classes"
---

# Class PrimarySpriteMesh

A basic PCO sprite mesh which is handling occlusion and depth.

#### Mixes

PrimaryOccludableObjectMixin

#### Mixes

PrimaryCanvasObjectMixin

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.primary.PrimarySpriteMesh))

* [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)<this>
  + PrimarySpriteMesh
    - [DoorMesh](foundry.canvas.containers.DoorMesh.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_transformID](#_transformid)
[\_transformTrimmedID](#_transformtrimmedid)
[indices](#indices)
[textureAlphaThreshold](#texturealphathreshold)
[\_anchor](#_anchor)
[\_batchData](#_batchdata)
[\_cachedTint](#_cachedtint)
[\_height](#_height)
[\_paddingX](#_paddingx)
[\_paddingY](#_paddingy)
[\_shader](#_shader)
[\_texture](#_texture)
[\_textureAlphaData](#_texturealphadata)
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

[\_depthElevation](#_depthelevation)
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
[\_calculateCanvasBounds](#_calculatecanvasbounds)
[\_onTextureUpdate](#_ontextureupdate)
[\_render](#_render)
[\_renderVoid](#_rendervoid)
[\_renderWithCulling](#_renderwithculling)
[\_updateBatchData](#_updatebatchdata)
[calculateTrimmedVertices](#calculatetrimmedvertices)
[calculateVertices](#calculatevertices)
[containsCanvasPoint](#containscanvaspoint)
[containsPoint](#containspoint)
[destroy](#destroy)
[getLocalBounds](#getlocalbounds)
[renderDepthData](#renderdepthdata)
[resize](#resize)
[setShaderClass](#setshaderclass)
[updateTransform](#updatetransform)
[updateUvs](#updateuvs)
[\_onAnchorUpdate](#_onanchorupdate)
[from](#from)

## Constructors

### constructor

* new PrimarySpriteMesh(  
  Â Â Â Â options?: Texture<Resource> | [PrimarySpriteMeshConstructorOptions](../interfaces/foundry.PrimarySpriteMeshConstructorOptions.md),  
  Â Â Â Â shaderClass: typeof [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md),  
  ): PrimarySpriteMesh

  #### Parameters

  + `Optional`options: Texture<Resource> | [PrimarySpriteMeshConstructorOptions](../interfaces/foundry.PrimarySpriteMeshConstructorOptions.md)

    Constructor options or a Texture
  + shaderClass: typeof [PrimaryBaseSamplerShader](foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md)

    A shader class for the sprite

  #### Returns PrimarySpriteMesh

  Overrides PrimaryOccludableObjectMixin(SpriteMesh).constructor

## Properties

### `Internal`\_transformID

\_transformID: number = -1

The transform ID.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_transformID](foundry.canvas.containers.SpriteMesh.md#_transformid)

### `Internal`\_transformTrimmedID

\_transformTrimmedID: number = -1

The transform ID.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_transformTrimmedID](foundry.canvas.containers.SpriteMesh.md#_transformtrimmedid)

### indices

indices: Uint16Array

The indices of the geometry.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[indices](foundry.canvas.containers.SpriteMesh.md#indices)

### textureAlphaThreshold

textureAlphaThreshold: number = 0

The texture alpha threshold used for point containment tests.
If set to a value larger than 0, the texture alpha data is
extracted from the texture at 25% resolution.

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

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_anchor](foundry.canvas.containers.SpriteMesh.md#_anchor)

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

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_batchData](foundry.canvas.containers.SpriteMesh.md#_batchdata)

### `Protected`\_cachedTint

\_cachedTint: [red: number, green: number, blue: number, alpha: number] = ...

Cached tint value so we can tell when the tint is changed.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_cachedTint](foundry.canvas.containers.SpriteMesh.md#_cachedtint)

### `Protected`\_height

\_height: number = 0

The height of the sprite (this is initially set by the texture)

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_height](foundry.canvas.containers.SpriteMesh.md#_height)

### `Protected`\_paddingX

\_paddingX: number

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_paddingX](foundry.canvas.containers.SpriteMesh.md#_paddingx)

### `Protected`\_paddingY

\_paddingY: number

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_paddingY](foundry.canvas.containers.SpriteMesh.md#_paddingy)

### `Protected`\_shader

\_shader: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

The shader bound to this mesh.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_shader](foundry.canvas.containers.SpriteMesh.md#_shader)

### `Protected`\_texture

\_texture: Texture<Resource>

The texture that the sprite is using.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_texture](foundry.canvas.containers.SpriteMesh.md#_texture)

### `Protected`\_textureAlphaData

\_textureAlphaData: any = null

The texture alpha data.

### `Protected`\_textureID

\_textureID: number = -1

The texture ID.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_textureID](foundry.canvas.containers.SpriteMesh.md#_textureid)

### `Protected`\_textureTrimmedID

\_textureTrimmedID: number = -1

The texture trimmed ID.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_textureTrimmedID](foundry.canvas.containers.SpriteMesh.md#_texturetrimmedid)

### `Protected`\_textureUvs

\_textureUvs: TextureUvs | null = null

An instance of a texture uvs used for padded SpriteMesh.
Instanced only when padding becomes non-zero.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_textureUvs](foundry.canvas.containers.SpriteMesh.md#_textureuvs)

### `Protected`\_tintAlphaDirty

\_tintAlphaDirty: boolean = true

Used to track a tint or alpha change to execute a recomputation of \_cachedTint.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_tintAlphaDirty](foundry.canvas.containers.SpriteMesh.md#_tintalphadirty)

### `Protected`\_tintColor

\_tintColor: Color = ...

The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_tintColor](foundry.canvas.containers.SpriteMesh.md#_tintcolor)

### `Protected`\_tintRGB

\_tintRGB: number = 0xFFFFFF

The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_tintRGB](foundry.canvas.containers.SpriteMesh.md#_tintrgb)

### `Protected`\_width

\_width: number = 0

The width of the sprite (this is initially set by the texture).

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_width](foundry.canvas.containers.SpriteMesh.md#_width)

### `Protected`#renderedFrameId

"#renderedFrameId": number = -1

Last renderer pass in which this mesh actually drew its own content.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[#renderedFrameId](foundry.canvas.containers.SpriteMesh.md#renderedframeid)

### `Protected`uvs

uvs: Float32Array

This is used to store the uvs data of the sprite, assigned at the same time
as the vertexData in calculateVertices().

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[uvs](foundry.canvas.containers.SpriteMesh.md#uvs)

### `Protected`vertexData

vertexData: Float32Array

This is used to store the vertex data of the sprite (basically a quad).

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[vertexData](foundry.canvas.containers.SpriteMesh.md#vertexdata)

### `Protected`vertexTrimmedData

vertexTrimmedData: Float32Array | null = null

This is used to calculate the bounds of the object IF it is a trimmed sprite.

Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[vertexTrimmedData](foundry.canvas.containers.SpriteMesh.md#vertextrimmeddata)

## Accessors

### \_depthElevation

* get \_depthElevation(): number

  `Internal`

  The depth elevation of this sprite.

  #### Returns number

### alphaMode

* get alphaMode(): ALPHA\_MODES

  Used to force an alpha mode on this sprite mesh.
  If this property is non null, this value will replace the texture alphaMode when computing color channels.
  Affects how tint, worldAlpha and alpha are computed each others.

  #### Returns ALPHA\_MODES

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).alphaMode

### anchor

* get anchor(): ObservablePoint<any>

  The anchor sets the origin point of the sprite. The default value is taken from the texture
  and passed to the constructor.

  The default is `(0,0)`, this means the sprite's origin is the top left.

  Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.

  Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.

  If you pass only single parameter, it will set both x and y to the same value as shown in the example below.

  #### Returns ObservablePoint<any>

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).anchor

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

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).blendMode

### culledThisPass

* get culledThisPass(): boolean

  True if the mesh was culld (visited but not drawn) during the current pass.

  #### Returns boolean

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).culledThisPass

### height

* get height(): number

  #### Returns number

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).height

### isVideo

* get isVideo(): boolean

  Is this SpriteMesh rendering a video texture?

  #### Returns boolean

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).isVideo

### padding

* get padding(): number

  The maximum x/y padding in pixels (must be a non-negative value.)

  #### Returns number

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).padding

### paddingX

* get paddingX(): number

  The x padding in pixels (must be a non-negative value.)

  #### Returns number

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).paddingX

### paddingY

* get paddingY(): number

  They y padding in pixels (must be a non-negative value.)

  #### Returns number

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).paddingY

### pluginName

* get pluginName(): string | null

  Returns the SpriteMesh associated batch plugin. By default the returned plugin is that of the associated shader.
  If a plugin is forced, it will returns the forced plugin. A null value means that this SpriteMesh has no associated
  plugin.

  #### Returns string | null

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).pluginName

### renderedThisPass

* get renderedThisPass(): boolean

  True if this mesh drew its own content during the current renderer pass.

  #### Returns boolean

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).renderedThisPass

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

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).roundPixels

### shader

* get shader(): [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

  The shader bound to this mesh.

  #### Returns [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).shader

### sourceElement

* get sourceElement(): ImageSource | null

  The HTML source element for this SpriteMesh texture.

  #### Returns ImageSource | null

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).sourceElement

### texture

* get texture(): Texture<Resource>

  The texture that the sprite is using.

  #### Returns Texture<Resource>

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).texture

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

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).tint

### visitedThisPass

* get visitedThisPass(): boolean

  True if this mesh was visited by the renderer during the current pass.

  #### Returns boolean

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).visitedThisPass

### width

* get width(): number

  #### Returns number

  Inherited from PrimaryOccludableObjectMixin(SpriteMesh).width

## Methods

### \_calculateBounds

* \_calculateBounds(): void

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_calculateBounds](foundry.canvas.containers.SpriteMesh.md#_calculatebounds)

### \_calculateCanvasBounds

* \_calculateCanvasBounds(): void

  #### Returns void

### \_onTextureUpdate

* \_onTextureUpdate(): void

  When the texture is updated, this event will fire to update the scale and frame.

  #### Returns void

  Overrides [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_onTextureUpdate](foundry.canvas.containers.SpriteMesh.md#_ontextureupdate)

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_render](foundry.canvas.containers.SpriteMesh.md#_render)

### \_renderVoid

* \_renderVoid(renderer: Renderer): void

  `Internal`

  Render the sprite with ERASE blending.
  Note: The sprite must not have visible/renderable children.

  #### Parameters

  + renderer: Renderer

    The renderer

  #### Returns void

### \_renderWithCulling

* \_renderWithCulling(renderer: any): any

  #### Parameters

  + renderer: any

  #### Returns any

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_renderWithCulling](foundry.canvas.containers.SpriteMesh.md#_renderwithculling)

### \_updateBatchData

* \_updateBatchData(): void

  Update the batch data object.

  #### Returns void

  Overrides [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_updateBatchData](foundry.canvas.containers.SpriteMesh.md#_updatebatchdata)

### calculateTrimmedVertices

* calculateTrimmedVertices(): void

  Calculates worldTransform \* vertices for a non texture with a trim. store it in vertexTrimmedData.

  This is used to ensure that the true width and height of a trimmed texture is respected.

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[calculateTrimmedVertices](foundry.canvas.containers.SpriteMesh.md#calculatetrimmedvertices)

### calculateVertices

* calculateVertices(): void

  Calculates worldTransform \* vertices, store it in vertexData.

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[calculateVertices](foundry.canvas.containers.SpriteMesh.md#calculatevertices)

### containsCanvasPoint

* containsCanvasPoint(point: IPointData, textureAlphaThreshold?: number): boolean

  Is the given point in canvas space contained in this object?

  #### Parameters

  + point: IPointData

    The point in canvas space
  + `Optional`textureAlphaThreshold: number = ...

    The minimum texture alpha required for containment

  #### Returns boolean

### containsPoint

* containsPoint(point: IPointData, textureAlphaThreshold?: number): boolean

  Is the given point in world space contained in this object?

  #### Parameters

  + point: IPointData

    The point in world space
  + `Optional`textureAlphaThreshold: number = ...

    The minimum texture alpha required for containment

  #### Returns boolean

  Overrides [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[containsPoint](foundry.canvas.containers.SpriteMesh.md#containspoint)

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[destroy](foundry.canvas.containers.SpriteMesh.md#destroy)

### getLocalBounds

* getLocalBounds(rect: any): any

  #### Parameters

  + rect: any

  #### Returns any

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[getLocalBounds](foundry.canvas.containers.SpriteMesh.md#getlocalbounds)

### renderDepthData

* renderDepthData(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

### resize

* resize(  
  Â Â Â Â baseWidth: number,  
  Â Â Â Â baseHeight: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â fit?: "fill" | "width" | "height" | "contain" | "cover";  
  Â Â Â Â Â Â Â Â scaleX?: number;  
  Â Â Â Â Â Â Â Â scaleY?: number;  
  Â Â Â Â },  
  ): void

  An all-in-one helper method: Resizing the PCO according to desired dimensions and options.
  This helper computes the width and height based on the following factors:

  + The ratio of texture width and base width.
  + The ratio of texture height and base height.

  Additionally, It takes into account the desired fit options:

  + (default) "fill" computes the exact width and height ratio.
  + "cover" takes the maximum ratio of width and height and applies it to both.
  + "contain" takes the minimum ratio of width and height and applies it to both.
  + "width" applies the width ratio to both width and height.
  + "height" applies the height ratio to both width and height.

  You can also apply optional scaleX and scaleY options to both width and height. The scale is applied after fitting.

  **Important**: By using this helper, you don't need to set the height, width, and scale properties of the DisplayObject.

  **Note**: This is a helper method. Alternatively, you could assign properties as you would with a PIXI DisplayObject.

  #### Parameters

  + baseWidth: number

    The base width used for computations.
  + baseHeight: number

    The base height used for computations.
  + `Optional`options: {  
    Â Â Â Â fit?: "fill" | "width" | "height" | "contain" | "cover";  
    Â Â Â Â scaleX?: number;  
    Â Â Â Â scaleY?: number;  
    } = {}

    The options.

    - ##### `Optional`fit?: "fill" | "width" | "height" | "contain" | "cover"

      The fit type.
    - ##### `Optional`scaleX?: number

      The scale on X axis.
    - ##### `Optional`scaleY?: number

      The scale on Y axis.

  #### Returns void

### setShaderClass

* setShaderClass(shaderClass: any): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: any

    The shader class

  #### Returns void

  Overrides [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[setShaderClass](foundry.canvas.containers.SpriteMesh.md#setshaderclass)

### updateTransform

* updateTransform(): void

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[updateTransform](foundry.canvas.containers.SpriteMesh.md#updatetransform)

### updateUvs

* updateUvs(): void

  Update uvs and push vertices and uv buffers on GPU if necessary.

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[updateUvs](foundry.canvas.containers.SpriteMesh.md#updateuvs)

### `Protected`\_onAnchorUpdate

* \_onAnchorUpdate(): void

  `Protected`

  Called when the anchor position updates.

  #### Returns void

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[\_onAnchorUpdate](foundry.canvas.containers.SpriteMesh.md#_onanchorupdate)

### `Static`from

* from(  
  Â Â Â Â source:  
  Â Â Â Â Â Â Â Â | string  
  Â Â Â Â Â Â Â Â | Texture<Resource>  
  Â Â Â Â Â Â Â Â | HTMLVideoElement  
  Â Â Â Â Â Â Â Â | HTMLCanvasElement,  
  Â Â Â Â textureOptions?: object,  
  Â Â Â Â shaderClass?: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md),  
  ): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

  Create a SpriteMesh from another source.
  You can specify texture options and a specific shader class derived from BaseSamplerShader.

  #### Parameters

  + source: string | Texture<Resource> | HTMLVideoElement | HTMLCanvasElement

    Source to create texture from.
  + `Optional`textureOptions: object

    See PIXI.BaseTexture's constructor for options.
  + `Optional`shaderClass: [BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md)

    The shader class to use. BaseSamplerShader by default.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

  Inherited from [SpriteMesh](foundry.canvas.containers.SpriteMesh.md).[from](foundry.canvas.containers.SpriteMesh.md#from)