---
title: "TexturePixelsExtractionOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TexturePixelsExtractionOptions.html"
category: "interfaces"
---

# Interface TexturePixelsExtractionOptions

interface TexturePixelsExtractionOptions {  
Â Â Â Â [compression](#compression)?: 0;  
Â Â Â Â [frame](#frame)?: Rectangle;  
Â Â Â Â [out](#out)?: ArrayBuffer;  
Â Â Â Â [texture](#texture)?: Texture<Resource> | RenderTexture;  
}

##### Index

### Properties

[compression?](#compression)
[frame?](#frame)
[out?](#out)
[texture?](#texture)

## Properties

### `Optional`compression

compression?: 0

The NONE compression mode.

### `Optional`frame

frame?: Rectangle

The rectangle which the pixels are extracted from.

### `Optional`out

out?: ArrayBuffer

The optional output buffer to write the pixels to.
May be detached.
The (new) output buffer is returned.

### `Optional`texture

texture?: Texture<Resource> | RenderTexture

The texture the pixels are extracted from.