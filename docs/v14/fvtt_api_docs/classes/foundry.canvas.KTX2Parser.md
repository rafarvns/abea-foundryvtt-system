---
title: "KTX2Parser | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.KTX2Parser.html"
category: "classes"
---

# Class KTX2Parser

A KTX2 PIXI loader parser using the official Khronos KTX module.

##### Index

### Properties

[detectKTX2](#detectktx2)
[loadKTX2](#loadktx2)
[resolveKTX2TextureUrl](#resolvektx2textureurl)
[WASM\_PATH](#wasm_path)

### Accessors

[initialized](#initialized)
[module](#module)

### Methods

[initialize](#initialize)
[loadResource](#loadresource)
[parse](#parse)

## Properties

### `Static`detectKTX2

detectKTX2: object = ...

A PIXI asset detection parser for KTX2 textures.

### `Static`loadKTX2

loadKTX2: object = ...

A PIXI asset loader parser for KTX2 textures.

### `Static`resolveKTX2TextureUrl

resolveKTX2TextureUrl: object = ...

A PIXI asset resolver for KTX2 texture URLs.

### `Static`WASM\_PATH

WASM\_PATH: string = "scripts/ktx2/libktx.wasm"

The default path to the Khronos libktx WebAssembly module.

## Accessors

### `Static`initialized

* get initialized(): boolean

  Has the Khronos KTX module been initialized?

  #### Returns boolean

### `Static`module

* get module(): object | null

  The initialized Khronos KTX module.

  #### Returns object | null

## Methods

### `Static`initialize

* initialize(options?: [KTX2ParserInitOptions](../interfaces/foundry.canvas.types.KTX2ParserInitOptions.md)): Promise<object>

  Initialize the Khronos KTX module.

  #### Parameters

  + `Optional`options: [KTX2ParserInitOptions](../interfaces/foundry.canvas.types.KTX2ParserInitOptions.md) = {}

    Initialization options.

  #### Returns Promise<object>

  The initialized Khronos KTX module.

### `Static`loadResource

* loadResource(  
  Â Â Â Â url: string,  
  Â Â Â Â options?: [KTX2ParserParseOptions](../interfaces/foundry.canvas.types.KTX2ParserParseOptions.md),  
  ): Promise<CompressedTextureResource>

  Load a KTX2 URL as a PIXI compressed texture resource.

  #### Parameters

  + url: string

    The texture URL.
  + `Optional`options: [KTX2ParserParseOptions](../interfaces/foundry.canvas.types.KTX2ParserParseOptions.md) = {}

    Parser options.

  #### Returns Promise<CompressedTextureResource>

  The compressed texture resource.

### `Static`parse

* parse(  
  Â Â Â Â data: Uint8Array | ArrayBuffer,  
  Â Â Â Â options?: [KTX2ParserParseOptions](../interfaces/foundry.canvas.types.KTX2ParserParseOptions.md),  
  ): Promise<CompressedTextureResource>

  Parse KTX2 data as a PIXI compressed texture resource.

  #### Parameters

  + data: Uint8Array | ArrayBuffer

    The KTX2 file data.
  + `Optional`options: [KTX2ParserParseOptions](../interfaces/foundry.canvas.types.KTX2ParserParseOptions.md) = {}

    Parser options.

  #### Returns Promise<CompressedTextureResource>

  The compressed texture resource.