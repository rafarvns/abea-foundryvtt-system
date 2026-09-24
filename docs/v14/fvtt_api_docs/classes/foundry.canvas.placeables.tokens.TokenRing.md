---
title: "TokenRing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.TokenRing.html"
category: "classes"
---

# Class TokenRing

Dynamic Token Ring Manager.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[bkgColorLittleEndian](#bkgcolorlittleendian)
[bkgName](#bkgname)
[bkgUVs](#bkguvs)
[colorBand](#colorband)
[defaultBackgroundColorLittleEndian](#defaultbackgroundcolorlittleendian)
[defaultRingColorLittleEndian](#defaultringcolorlittleendian)
[effects](#effects)
[maskName](#maskname)
[maskUVs](#maskuvs)
[ringColorLittleEndian](#ringcolorlittleendian)
[ringName](#ringname)
[ringUVs](#ringuvs)
[scaleAdjustmentX](#scaleadjustmentx)
[scaleAdjustmentY](#scaleadjustmenty)
[scaleCorrection](#scalecorrection)
[subjectScaleAdjustment](#subjectscaleadjustment)
[textureScaleAdjustment](#texturescaleadjustment)
[baseTexture](#basetexture)
[effects](#effects-1)
[texturesData](#texturesdata)
[tokenRingSamplerShader](#tokenringsamplershader)

### Accessors

[token](#token)
[initialized](#initialized)

### Methods

[clear](#clear)
[configure](#configure)
[configureSize](#configuresize)
[configureVisuals](#configurevisuals)
[flashColor](#flashcolor)
[createAssetsUVs](#createassetsuvs)
[createSpikeEasing](#createspikeeasing)
[easePingPong](#easepingpong)
[easeTwoPeaks](#easetwopeaks)
[getRingDataBySize](#getringdatabysize)
[getTextureUVs](#gettextureuvs)
[initialize](#initialize)

## Constructors

### constructor

* new TokenRing(token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)): TokenRing

  A TokenRing is constructed by providing a reference to a Token object.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  #### Returns TokenRing

## Properties

### bkgColorLittleEndian

bkgColorLittleEndian: number = 0xFFFFFF

### bkgName

bkgName: string

### bkgUVs

bkgUVs: Float32Array

### colorBand

colorBand: [RingColorBand](../interfaces/foundry.canvas.placeables.types.RingColorBand.md)

### defaultBackgroundColorLittleEndian

defaultBackgroundColorLittleEndian: number | null = null

### defaultRingColorLittleEndian

defaultRingColorLittleEndian: number | null = null

### effects

effects: number = 0

### maskName

maskName: string

### maskUVs

maskUVs: Float32Array

### ringColorLittleEndian

ringColorLittleEndian: number = 0xFFFFFF

### ringName

ringName: string

### ringUVs

ringUVs: Float32Array

### scaleAdjustmentX

scaleAdjustmentX: number = 1

### scaleAdjustmentY

scaleAdjustmentY: number = 1

### scaleCorrection

scaleCorrection: number = 1

### subjectScaleAdjustment

subjectScaleAdjustment: number = 1

### textureScaleAdjustment

textureScaleAdjustment: number = 1

### `Static`baseTexture

baseTexture: BaseTexture<Resource, IAutoDetectOptions>

Token Rings sprite sheet base texture.

### `Static`effects

effects: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â BKG\_WAVE: 8;  
Â Â Â Â Â Â Â Â COLOR\_OVER\_SUBJECT: 32;  
Â Â Â Â Â Â Â Â DISABLED: 0;  
Â Â Â Â Â Â Â Â ENABLED: 1;  
Â Â Â Â Â Â Â Â INVISIBILITY: 16;  
Â Â Â Â Â Â Â Â RING\_GRADIENT: 4;  
Â Â Â Â Â Â Â Â RING\_PULSE: 2;  
Â Â Â Â },  
> = ...

The effects which could be applied to a token ring (using bitwise operations).

### `Static`texturesData

texturesData: Record<  
Â Â Â Â string,  
Â Â Â Â { center: { x: number; y: number }; UVs: Float32Array },  
>

Rings and background textures UVs and center offset.

### `Static`tokenRingSamplerShader

tokenRingSamplerShader: any

The token ring shader class definition.

## Accessors

### token

* get token(): void | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

  Reference to the token that should be animated.

  #### Returns void | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

### `Static`initialized

* get initialized(): boolean | null

  Is the token rings framework enabled? Will be `null` if the system hasn't initialized yet.

  #### Returns boolean | null

## Methods

### clear

* clear(): void

  Clear configuration pertaining to token ring from the mesh.

  #### Returns void

### configure

* configure(mesh?: any): void

  Configure the sprite mesh.

  #### Parameters

  + `Optional`mesh: any

    The mesh to which TokenRing functionality is configured (default to token.mesh)

  #### Returns void

### configureSize

* configureSize(options?: { fit?: string; scaleMultiplier?: number }): void

  Configure token ring size according to mesh texture, token dimensions, fit mode, and dynamic ring fit mode.

  #### Parameters

  + `Optional`options: { fit?: string; scaleMultiplier?: number } = {}
    - ##### `Optional`fit?: string

      The desired fit mode
    - ##### `Optional`scaleMultiplier?: number

      A custom scale multiplier applied on scale correction

  #### Returns void

### configureVisuals

* configureVisuals(): void

  Configure the token ring visuals properties.

  #### Returns void

### flashColor

* flashColor(  
  Â Â Â Â color: [Color](foundry.utils.Color.md),  
  Â Â Â Â animationOptions?: CanvasAnimationOptions,  
  ): Promise<boolean | void>

  Flash the ring briefly with a certain color.

  #### Parameters

  + color: [Color](foundry.utils.Color.md)

    Color to flash.
  + animationOptions: CanvasAnimationOptions = {}

    Options to customize the animation.

  #### Returns Promise<boolean | void>

### `Static`createAssetsUVs

* createAssetsUVs(): void

  Create texture UVs for each asset into the token rings sprite sheet.

  #### Returns void

### `Static`createSpikeEasing

* createSpikeEasing(spikePct?: number): Function

  Create an easing function that spikes in the center. Ideal duration is around 1600ms.

  #### Parameters

  + `Optional`spikePct: number = 0.5

    Position on [0,1] where the spike occurs.

  #### Returns Function

### `Static`easePingPong

* easePingPong(pt: number): number

  Soft ping pong curve for photosensitive people.

  #### Parameters

  + pt: number

    The proportional animation timing on [0,1].

  #### Returns number

  The eased animation progress on [0,1].

### `Static`easeTwoPeaks

* easeTwoPeaks(pt: number): number

  Easing function that produces two peaks before returning to the original value. Ideal duration is around 500ms.

  #### Parameters

  + pt: number

    The proportional animation timing on [0,1].

  #### Returns number

  The eased animation progress on [0,1].

### `Static`getRingDataBySize

* getRingDataBySize(size: number): [RingData](../interfaces/foundry.canvas.placeables.types.RingData.md)

  Get ring and background names for a given size.

  #### Parameters

  + size: number

    The size to match (grid size dimension)

  #### Returns [RingData](../interfaces/foundry.canvas.placeables.types.RingData.md)

### `Static`getTextureUVs

* getTextureUVs(name: string, scaleCorrection?: number): void | Float32Array

  Get the UVs array for a given texture name and scale correction.

  #### Parameters

  + name: string

    Name of the texture we want to get UVs.
  + `Optional`scaleCorrection: number = 1

    The scale correction applied to UVs.

  #### Returns void | Float32Array

### `Static`initialize

* initialize(): void

  Initialize the Token Rings system, registering the batch plugin and patching PrimaryCanvasGroup#addToken.

  #### Returns void