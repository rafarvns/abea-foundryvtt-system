---
title: "TextureBase64ExtractionOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TextureBase64ExtractionOptions.html"
category: "interfaces"
---

# Interface TextureBase64ExtractionOptions

interface TextureBase64ExtractionOptions {  
Â Â Â Â [compression](#compression): 1;  
Â Â Â Â [frame](#frame)?: Rectangle;  
Â Â Â Â [quality](#quality)?: number;  
Â Â Â Â [texture](#texture)?: Texture<Resource> | RenderTexture;  
Â Â Â Â [type](#type)?: string;  
}

##### Index

### Properties

[compression](#compression)
[frame?](#frame)
[quality?](#quality)
[texture?](#texture)
[type?](#type)

## Properties

### compression

compression: 1

The BASE64 compression mode.

### `Optional`frame

frame?: Rectangle

The rectangle which the pixels are extracted from.

### `Optional`quality

quality?: number

The optional image quality. Default: `1`.

### `Optional`texture

texture?: Texture<Resource> | RenderTexture

The texture the pixels are extracted from.

### `Optional`type

type?: string

The optional image mime type. Default: `"image/png"`.