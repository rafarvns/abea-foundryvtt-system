---
title: "TextureCompressor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.workers.TextureCompressor.html"
category: "classes"
---

# Class TextureCompressor

Wrapper for a web worker meant to convert a pixel buffer to the specified image format
and quality and return a base64 image.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.workers.TextureCompressor))

* [AsyncWorker](foundry.helpers.AsyncWorker.md)
  + TextureCompressor

##### Index

### Constructors

[constructor](#constructor)

### Properties

[name](#name)
[WORKER\_HARNESS\_JS](#worker_harness_js)

### Accessors

[ready](#ready)

### Methods

[compressBufferBase64](#compressbufferbase64)
[copyBuffer](#copybuffer)
[executeFunction](#executefunction)
[expandBufferRedToBufferRGBA](#expandbufferredtobufferrgba)
[loadFunction](#loadfunction)
[reduceBufferRGBAToBufferRED](#reducebufferrgbatobufferred)
[terminate](#terminate)

## Constructors

### constructor

* new TextureCompressor(  
  Â Â Â Â name?: string,  
  Â Â Â Â config?: { controlHash?: boolean; debug?: boolean },  
  ): TextureCompressor

  #### Parameters

  + `Optional`name: string = "TextureCompressor"

    The worker name to be initialized
  + `Optional`config: { controlHash?: boolean; debug?: boolean } = {}

    Worker initialization options

    - ##### `Optional`controlHash?: boolean

      Should use control hash?
    - ##### `Optional`debug?: boolean

      Should the worker run in debug mode?

  #### Returns TextureCompressor

  Overrides AsyncWorker.constructor

## Properties

### name

name: string

The name of this worker.

Inherited from [AsyncWorker](foundry.helpers.AsyncWorker.md).[name](foundry.helpers.AsyncWorker.md#name)

### `Static`WORKER\_HARNESS\_JS

WORKER\_HARNESS\_JS: string = "scripts/worker.js"

A path reference to the JavaScript file which provides companion worker-side functionality.

Inherited from [AsyncWorker](foundry.helpers.AsyncWorker.md).[WORKER\_HARNESS\_JS](foundry.helpers.AsyncWorker.md#worker_harness_js)

## Accessors

### ready

* get ready(): Promise<any>

  A Promise which resolves once the Worker is ready to accept tasks

  #### Returns Promise<any>

  Inherited from AsyncWorker.ready

## Methods

### compressBufferBase64

* compressBufferBase64(  
  Â Â Â Â buffer: Uint8ClampedArray,  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â options?: { debug?: boolean; hash?: string },  
  ): Promise<any>

  Process the non-blocking image compression to a base64 string.

  #### Parameters

  + buffer: Uint8ClampedArray

    Buffer used to create the image data.
  + width: number

    Buffered image width.
  + height: number

    Buffered image height.
  + `Optional`options: { debug?: boolean; hash?: string } = {}
    - ##### `Optional`debug?: boolean

      The debug option.
    - ##### `Optional`hash?: string

      The precomputed hash.

  #### Returns Promise<any>

### copyBuffer

* copyBuffer(  
  Â Â Â Â buffer: Uint8ClampedArray,  
  Â Â Â Â options?: { debug?: boolean; hash?: string; out?: ArrayBuffer },  
  ): Promise<unknown>

  Copy a buffer.

  #### Parameters

  + buffer: Uint8ClampedArray

    Buffer used to create the image data.
  + `Optional`options: { debug?: boolean; hash?: string; out?: ArrayBuffer } = {}
    - ##### `Optional`debug?: boolean

      The debug option.
    - ##### `Optional`hash?: string

      The precomputed hash.
    - ##### `Optional`out?: ArrayBuffer

      The output buffer to copy the pixels to. May be detached.

  #### Returns Promise<unknown>

### executeFunction

* executeFunction(  
  Â Â Â Â functionName: string,  
  Â Â Â Â args?: any[],  
  Â Â Â Â transfer?: any[],  
  ): Promise<unknown>

  Execute a task on a specific Worker.

  #### Parameters

  + functionName: string

    The named function to execute on the worker. This function must first have been
    loaded.
  + `Optional`args: any[] = []

    An array of parameters with which to call the requested function
  + `Optional`transfer: any[] = []

    An array of transferable objects which are transferred to the worker thread.
    See <https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects>

  #### Returns Promise<unknown>

  A Promise which resolves with the returned result of the function once complete.

  Inherited from [AsyncWorker](foundry.helpers.AsyncWorker.md).[executeFunction](foundry.helpers.AsyncWorker.md#executefunction)

### expandBufferRedToBufferRGBA

* expandBufferRedToBufferRGBA(  
  Â Â Â Â buffer: Uint8ClampedArray,  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â options?: { debug?: boolean; hash?: string; out?: ArrayBuffer },  
  ): Promise<unknown>

  Expand a buffer in RED format to a buffer in RGBA format.

  #### Parameters

  + buffer: Uint8ClampedArray

    Buffer used to create the image data.
  + width: number

    Buffered image width.
  + height: number

    Buffered image height.
  + `Optional`options: { debug?: boolean; hash?: string; out?: ArrayBuffer } = {}
    - ##### `Optional`debug?: boolean

      The debug option.
    - ##### `Optional`hash?: string

      The precomputed hash.
    - ##### `Optional`out?: ArrayBuffer

      The output buffer to write the expanded pixels to. May be detached.

  #### Returns Promise<unknown>

### loadFunction

* loadFunction(functionName: string, functionRef: Function): Promise<unknown>

  Load a function onto a given Worker.
  The function must be a pure function with no external dependencies or requirements on global scope.

  #### Parameters

  + functionName: string

    The name of the function to load
  + functionRef: Function

    A reference to the function that should be loaded

  #### Returns Promise<unknown>

  A Promise which resolves once the Worker has loaded the function.

  Inherited from [AsyncWorker](foundry.helpers.AsyncWorker.md).[loadFunction](foundry.helpers.AsyncWorker.md#loadfunction)

### reduceBufferRGBAToBufferRED

* reduceBufferRGBAToBufferRED(  
  Â Â Â Â buffer: Uint8ClampedArray,  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â options?: { debug?: boolean; hash?: string; out?: ArrayBuffer },  
  ): Promise<unknown>

  Reduce a buffer in RGBA format to a buffer in RED format.

  #### Parameters

  + buffer: Uint8ClampedArray

    Buffer used to create the image data.
  + width: number

    Buffered image width.
  + height: number

    Buffered image height.
  + `Optional`options: { debug?: boolean; hash?: string; out?: ArrayBuffer } = {}
    - ##### `Optional`debug?: boolean

      The debug option.
    - ##### `Optional`hash?: string

      The precomputed hash.
    - ##### `Optional`out?: ArrayBuffer

      The output buffer to write the reduced pixels to. May be detached.

  #### Returns Promise<unknown>

### terminate

* terminate(): void

  #### Returns void

  #### Inherit Doc

  Inherited from [AsyncWorker](foundry.helpers.AsyncWorker.md).[terminate](foundry.helpers.AsyncWorker.md#terminate)