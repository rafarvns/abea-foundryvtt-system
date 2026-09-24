---
title: "ImageHelper | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.media.ImageHelper.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [media](../modules/foundry.helpers.media.html)
* [ImageHelper](foundry.helpers.media.ImageHelper.html)

# Class ImageHelper

A helper class to provide common functionality for working with Image objects.

##### Index

### Methods

[canvasToBase64](foundry.helpers.media.ImageHelper.html#canvastobase64)
[compositeCanvasTexture](foundry.helpers.media.ImageHelper.html#compositecanvastexture)
[createThumbnail](foundry.helpers.media.ImageHelper.html#createthumbnail)
[hasImageExtension](foundry.helpers.media.ImageHelper.html#hasimageextension)
[pixelsToCanvas](foundry.helpers.media.ImageHelper.html#pixelstocanvas)
[pixiToBase64](foundry.helpers.media.ImageHelper.html#pixitobase64)
[textureToImage](foundry.helpers.media.ImageHelper.html#texturetoimage)
[uploadBase64](foundry.helpers.media.ImageHelper.html#uploadbase64)

## Methods

### `Static`canvasToBase64

* canvasToBase64(  
  Â Â Â Â canvas: HTMLCanvasElement,  
  Â Â Â Â type?: string,  
  Â Â Â Â quality?: number,  
  ): Promise<string>

  Asynchronously convert a canvas element to base64.

  #### Parameters

  + canvas: HTMLCanvasElement
  + `Optional`type: string
  + `Optional`quality: number

  #### Returns Promise<string>

  The base64 string of the canvas.

### `Static`compositeCanvasTexture

* compositeCanvasTexture(  
  Â Â Â Â object: DisplayObject,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â center?: boolean;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â tx?: number;  
  Â Â Â Â Â Â Â Â ty?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): Texture<Resource>

  Composite a canvas object by rendering it to a single texture

  #### Parameters

  + object: DisplayObject

    The object to render to a texture
  + `Optional`options: { center?: boolean; height?: number; tx?: number; ty?: number; width?: number } = {}

    Options which configure the resulting texture

    - ##### `Optional`center?: boolean

      Center the texture in the rendered frame?
    - ##### `Optional`height?: number

      The desired height of the output texture
    - ##### `Optional`tx?: number

      A horizontal translation to apply to the object
    - ##### `Optional`ty?: number

      A vertical translation to apply to the object
    - ##### `Optional`width?: number

      The desired width of the output texture

  #### Returns Texture<Resource>

  The composite Texture object

### `Static`createThumbnail

* createThumbnail(  
  Â Â Â Â src: string | DisplayObject,  
  Â Â Â Â options: {  
  Â Â Â Â Â Â Â Â center?: boolean;  
  Â Â Â Â Â Â Â Â format?: string;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â quality?: number;  
  Â Â Â Â Â Â Â Â tx?: number;  
  Â Â Â Â Â Â Â Â ty?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): Promise<object>

  Create thumbnail preview for a provided image path.

  #### Parameters

  + src: string | DisplayObject

    The URL or display object of the texture to render to a thumbnail
  + options: {  
    Â Â Â Â center?: boolean;  
    Â Â Â Â format?: string;  
    Â Â Â Â height?: number;  
    Â Â Â Â quality?: number;  
    Â Â Â Â tx?: number;  
    Â Â Â Â ty?: number;  
    Â Â Â Â width?: number;  
    }

    Additional named options passed to the compositeCanvasTexture function

    - ##### `Optional`center?: boolean

      Whether to center the object within the thumbnail
    - ##### `Optional`format?: string

      The desired output image format
    - ##### `Optional`height?: number

      The desired height of the resulting thumbnail
    - ##### `Optional`quality?: number

      The desired output image quality
    - ##### `Optional`tx?: number

      A horizontal transformation to apply to the provided source
    - ##### `Optional`ty?: number

      A vertical transformation to apply to the provided source
    - ##### `Optional`width?: number

      The desired width of the resulting thumbnail

  #### Returns Promise<object>

  The parsed and converted thumbnail data

### `Static`hasImageExtension

* hasImageExtension(src: string): boolean

  Test whether a source file has a supported image extension type

  #### Parameters

  + src: string

    A requested image source path

  #### Returns boolean

  Does the filename end with a valid image extension?

### `Static`pixelsToCanvas

* pixelsToCanvas(  
  Â Â Â Â pixels: Uint8ClampedArray,  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  Â Â Â Â options?: { eh?: number; element?: HTMLCanvasElement; ew?: number },  
  ): HTMLCanvasElement

  Create a canvas element containing the pixel data.

  #### Parameters

  + pixels: Uint8ClampedArray

    Buffer used to create the image data.
  + width: number

    Buffered image width.
  + height: number

    Buffered image height.
  + options: { eh?: number; element?: HTMLCanvasElement; ew?: number } = {}
    - ##### `Optional`eh?: number

      Specified height for the element (default to buffer image height).
    - ##### `Optional`element?: HTMLCanvasElement

      The element to use.
    - ##### `Optional`ew?: number

      Specified width for the element (default to buffer image width).

  #### Returns HTMLCanvasElement

### `Static`pixiToBase64

* pixiToBase64(  
  Â Â Â Â target: DisplayObject,  
  Â Â Â Â type: string,  
  Â Â Â Â quality: number,  
  ): Promise<string>

  Asynchronously convert a DisplayObject container to base64 using Canvas#toBlob and FileReader

  #### Parameters

  + target: DisplayObject

    A PIXI display object to convert
  + type: string

    The requested mime type of the output, default is image/png
  + quality: number

    A number between 0 and 1 for image quality if image/jpeg or image/webp

  #### Returns Promise<string>

  A processed base64 string

### `Static`textureToImage

* textureToImage(  
  Â Â Â Â texture: Texture<Resource>,  
  Â Â Â Â options?: { format?: string; quality?: number },  
  ): Promise<string>

  Extract a texture to a base64 PNG string

  #### Parameters

  + texture: Texture<Resource>

    The texture object to extract
  + options: { format?: string; quality?: number } = {}
    - ##### `Optional`format?: string

      Image format, e.g. "image/jpeg" or "image/webp".
    - ##### `Optional`quality?: number

      JPEG or WEBP compression from 0 to 1. Default is 0.92.

  #### Returns Promise<string>

  A base64 png string of the texture

### `Static`uploadBase64

* uploadBase64(  
  Â Â Â Â base64: string,  
  Â Â Â Â fileName: string,  
  Â Â Â Â filePath: string,  
  Â Â Â Â options?: { notify?: boolean; storage?: string; type?: string },  
  ): Promise<object>

  Upload a base64 image string to a persisted data storage location

  #### Parameters

  + base64: string

    The base64 string
  + fileName: string

    The file name to upload
  + filePath: string

    The file path where the file should be uploaded
  + `Optional`options: { notify?: boolean; storage?: string; type?: string } = {}

    Additional options which affect uploading

    - ##### `Optional`notify?: boolean

      Display a UI notification when the upload is processed.
    - ##### `Optional`storage?: string

      The data storage location to which the file should be uploaded
    - ##### `Optional`type?: string

      The MIME type of the file being uploaded

  #### Returns Promise<object>

  A promise which resolves to the FilePicker upload response