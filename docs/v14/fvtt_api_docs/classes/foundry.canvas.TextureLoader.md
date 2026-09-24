---
title: "TextureLoader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.TextureLoader.html"
category: "classes"
---

# Class TextureLoader

A Loader class which helps with loading video and image textures.

##### Index

### Properties

[CACHE\_TTL](#cache_ttl)
[loader](#loader)

### Accessors

[approximateTotalMemoryUsage](#approximatetotalmemoryusage)

### Methods

[expireCache](#expirecache)
[getCache](#getcache)
[load](#load)
[loadTexture](#loadtexture)
[setCache](#setcache)
[getTextureAlphaData](#gettexturealphadata)
[initializeBasisTranscoder](#initializebasistranscoder)
[loadSceneTextures](#loadscenetextures)
[pinSource](#pinsource)
[unpinSource](#unpinsource)

## Properties

### `Static`CACHE\_TTL

CACHE\_TTL: number = ...

The duration in milliseconds for which a texture will remain cached

### `Static`loader

loader: TextureLoader

A global reference to the singleton texture loader

## Accessors

### `Static`approximateTotalMemoryUsage

* get approximateTotalMemoryUsage(): number

  A public getter to expose the total approximate memory usage.

  #### Returns number

  The total usage in bytes.

## Methods

### expireCache

* expireCache(options?: { exclude?: Set<string> }): Promise<void>

  Expire and unload assets from the cache which have not been used for more than CACHE\_TTL milliseconds.

  #### Parameters

  + `Optional`options: { exclude?: Set<string> } = {}
    - ##### `Optional`exclude?: Set<string>

      A set of source URLs to *skip* from eviction checks.

  #### Returns Promise<void>

### getCache

* getCache(  
  Â Â Â Â src: string,  
  ):  
  Â Â Â Â | Spritesheet<ISpritesheetData>  
  Â Â Â Â | BaseTexture<Resource, IAutoDetectOptions>  
  Â Â Â Â | null

  Retrieve a texture or a sprite sheet from the assets cache

  #### Parameters

  + src: string

    The source URL

  #### Returns Spritesheet<ISpritesheetData> | BaseTexture<Resource, IAutoDetectOptions> | null

  The cached texture, a sprite sheet or null

### load

* load(  
  Â Â Â Â sources: string[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â clean?: boolean;  
  Â Â Â Â Â Â Â Â displayProgress?: boolean;  
  Â Â Â Â Â Â Â Â escape?: boolean;  
  Â Â Â Â Â Â Â Â expireCache?: boolean;  
  Â Â Â Â Â Â Â Â format?: string;  
  Â Â Â Â Â Â Â Â localize?: boolean;  
  Â Â Â Â Â Â Â Â maxConcurrent?: number;  
  Â Â Â Â Â Â Â Â message?: string;  
  Â Â Â Â },  
  ): Promise<void>

  Load an Array of provided source URL paths.
  Paths which begin with a special character "#" are ignored as texture references.

  #### Parameters

  + sources: string[]

    The source URLs to load
  + `Optional`options: {  
    Â Â Â Â clean?: boolean;  
    Â Â Â Â displayProgress?: boolean;  
    Â Â Â Â escape?: boolean;  
    Â Â Â Â expireCache?: boolean;  
    Â Â Â Â format?: string;  
    Â Â Â Â localize?: boolean;  
    Â Â Â Â maxConcurrent?: number;  
    Â Â Â Â message?: string;  
    } = {}

    Additional options which modify loading

    - ##### `Optional`clean?: boolean

      Whether to clean the provided message string as untrusted user input.
      No cleaning is applied if `format` is passed and `escape` is true or
      `localize` is true and `format` is not passed.
    - ##### `Optional`displayProgress?: boolean

      Display loading progress bar
    - ##### `Optional`escape?: boolean

      Whether to escape the values of `format`
    - ##### `Optional`expireCache?: boolean

      Expire other cached textures?
    - ##### `Optional`format?: string

      A mapping of formatting strings passed to Localization#format
    - ##### `Optional`localize?: boolean

      Whether to localize the message content before displaying it
    - ##### `Optional`maxConcurrent?: number

      The maximum number of textures that can be loaded concurrently.
    - ##### `Optional`message?: string

      The status message to display in the load bar

  #### Returns Promise<void>

  A Promise which resolves once all textures are loaded

### loadTexture

* loadTexture(  
  Â Â Â Â src: string,  
  ): Promise<  
  Â Â Â Â | Spritesheet<ISpritesheetData>  
  Â Â Â Â | BaseTexture<Resource, IAutoDetectOptions>  
  Â Â Â Â | null,  
  >

  Load a single texture or spritesheet on-demand from a given source URL path

  #### Parameters

  + src: string

    The source texture path to load

  #### Returns Promise< Â Â Â Â | Spritesheet<ISpritesheetData> Â Â Â Â | BaseTexture<Resource, IAutoDetectOptions> Â Â Â Â | null, >

  The loaded texture object

### setCache

* setCache(  
  Â Â Â Â src: string,  
  Â Â Â Â asset:  
  Â Â Â Â Â Â Â Â | Spritesheet<ISpritesheetData>  
  Â Â Â Â Â Â Â Â | BaseTexture<Resource, IAutoDetectOptions>,  
  ): void

  Add an image or a sprite sheet url to the assets cache. Include an approximate memory size in the stored data.

  #### Parameters

  + src: string

    The source URL.
  + asset: Spritesheet<ISpritesheetData> | BaseTexture<Resource, IAutoDetectOptions>

    The asset

  #### Returns void

### `Static`getTextureAlphaData

* getTextureAlphaData(  
  Â Â Â Â texture: Texture<Resource>,  
  Â Â Â Â resolution?: number,  
  ): [TextureAlphaData](../interfaces/foundry.TextureAlphaData.md) | undefined

  Use the texture to create a cached mapping of pixel alpha and cache it.
  Cache the bounding box of non-transparent pixels for the un-rotated shape.

  #### Parameters

  + texture: Texture<Resource>

    The provided texture.
  + `Optional`resolution: number = 1

    Resolution of the texture data output.

  #### Returns [TextureAlphaData](../interfaces/foundry.TextureAlphaData.md) | undefined

  The texture data if the texture is valid, else undefined.

### `Static`initializeBasisTranscoder

* initializeBasisTranscoder(): Promise<any>

  Initialize the Basis transcoder for PIXI.Assets.

  #### Returns Promise<any>

### `Static`loadSceneTextures

* loadSceneTextures(  
  Â Â Â Â sceneOrLevel: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â additionalSources?: string[];  
  Â Â Â Â Â Â Â Â expireCache?: boolean;  
  Â Â Â Â Â Â Â Â maxConcurrent?: number;  
  Â Â Â Â },  
  ): Promise<void>

  Load all the textures which are required for a particular Scene or Level.

  #### Parameters

  + sceneOrLevel: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

    The Scene or Level to load
  + `Optional`options: { additionalSources?: string[]; expireCache?: boolean; maxConcurrent?: number } = {}

    Additional options that configure texture loading

    - ##### `Optional`additionalSources?: string[]

      Additional sources to load during canvas initialize
    - ##### `Optional`expireCache?: boolean

      Destroy other expired textures
    - ##### `Optional`maxConcurrent?: number

      The maximum number of textures that can be loaded concurrently

  #### Returns Promise<void>

### `Static`pinSource

* pinSource(src: string): void

  Pin a source URL so it cannot be evicted.

  #### Parameters

  + src: string

    The source URL to pin

  #### Returns void

### `Static`unpinSource

* unpinSource(src: string): void

  Unpin a source URL that was previously pinned.

  #### Parameters

  + src: string

    The source URL to unpin

  #### Returns void