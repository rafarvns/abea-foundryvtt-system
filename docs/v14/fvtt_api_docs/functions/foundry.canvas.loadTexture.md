---
title: "loadTexture | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.loadTexture.html"
category: "functions"
---

# Function loadTexture

* loadTexture(  
  Â Â Â Â src: string,  
  Â Â Â Â options?: { fallback?: string },  
  ): Texture<Resource> | Spritesheet<ISpritesheetData> | null

  Load a single asset and return a Promise which resolves once the asset is ready to use

  #### Parameters

  + src: string

    The requested texture source.
    This may be a standard texture path or a "virtual texture" beginning
    with the "#" character that is retrieved from canvas.sceneTextures.
  + `Optional`options: { fallback?: string } = {}

    Additional options which modify asset loading

    - ##### `Optional`fallback?: string

      A fallback texture URL to use if the requested source is unavailable

  #### Returns Texture<Resource> | Spritesheet<ISpritesheetData> | null

  The loaded Texture or sprite sheet,
  or null if loading failed with no fallback