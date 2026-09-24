---
title: "TextureExtractor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.TextureExtractor.html"
category: "classes"
---

# Class TextureExtractor

A class or interface that provide support for WebGL async read pixel/texture data extraction.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[debug](#debug)
[COMPRESSION\_MODES](#compression_modes)

### Accessors

[format](#format)
[renderer](#renderer)
[type](#type)

### Methods

[contextChange](#contextchange)
[destroy](#destroy)
[extract](#extract)
[reset](#reset)

## Constructors

### constructor

* new TextureExtractor(  
  Â Â Â Â renderer: Renderer,  
  Â Â Â Â config?: {  
  Â Â Â Â Â Â Â Â callerName?: string;  
  Â Â Â Â Â Â Â Â controlHash?: boolean;  
  Â Â Â Â Â Â Â Â debug?: boolean;  
  Â Â Â Â Â Â Â Â format?: FORMATS;  
  Â Â Â Â },  
  ): TextureExtractor

  #### Parameters

  + renderer: Renderer

    The renderer
  + `Optional`config: {  
    Â Â Â Â callerName?: string;  
    Â Â Â Â controlHash?: boolean;  
    Â Â Â Â debug?: boolean;  
    Â Â Â Â format?: FORMATS;  
    } = {}

    Worker initialization options

    - ##### `Optional`callerName?: string

      The caller name
    - ##### `Optional`controlHash?: boolean

      Should use control hash?
    - ##### `Optional`debug?: boolean

      Enable debug log?
    - ##### `Optional`format?: FORMATS

      The texture format

  #### Returns TextureExtractor

## Properties

### debug

debug: boolean = false

Debug flag.

### `Static`COMPRESSION\_MODES

COMPRESSION\_MODES: { BASE64: number; NONE: number } = ...

List of compression that could be applied with extraction

## Accessors

### format

* get format(): FORMATS

  The texture format on which the Texture Extractor must work.

  #### Returns FORMATS

### renderer

* get renderer(): Renderer

  The WebGL2 renderer.

  #### Returns Renderer

### type

* get type(): TYPES

  The texture type on which the Texture Extractor must work.

  #### Returns TYPES

## Methods

### contextChange

* contextChange(): void

  Called by the renderer contextChange runner.

  #### Returns void

### destroy

* destroy(): void

  Destroy this TextureExtractor.

  #### Returns void

### extract

* extract(  
  Â Â Â Â options: [TexturePixelsExtractionOptions](../interfaces/foundry.TexturePixelsExtractionOptions.md),  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â height: number;  
  Â Â Â Â Â Â Â Â out?: ArrayBuffer;  
  Â Â Â Â Â Â Â Â pixels: Uint8ClampedArray  
  Â Â Â Â Â Â Â Â | undefined;  
  Â Â Â Â Â Â Â Â width: number;  
  Â Â Â Â },  
  >

  Extract a rectangular block of pixels from the texture (without un-pre-multiplying).

  #### Parameters

  + options: [TexturePixelsExtractionOptions](../interfaces/foundry.TexturePixelsExtractionOptions.md)

    Options which configure pixels extraction behavior

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â out?: ArrayBuffer; Â Â Â Â Â Â Â Â pixels: Uint8ClampedArray Â Â Â Â Â Â Â Â | undefined; Â Â Â Â Â Â Â Â width: number; Â Â Â Â }, >

  The pixels or undefined if there's no change compared to the last time pixels were extracted and
  the control hash option is enabled. If an output buffer was passed, the (new) output buffer is included
  in the result, which may be different from the output buffer that was passed because it was detached.
* extract(options: [TextureBase64ExtractionOptions](../interfaces/foundry.TextureBase64ExtractionOptions.md)): Promise<string | undefined>

  #### Parameters

  + options: [TextureBase64ExtractionOptions](../interfaces/foundry.TextureBase64ExtractionOptions.md)

    Options which configure base64 extraction behavior

  #### Returns Promise<string | undefined>

  The base64 string or undefined if there's no change compared
  to the last time base64 was extracted and the control hash option is enabled.

### reset

* reset(): void

  Free all the bound objects.

  #### Returns void