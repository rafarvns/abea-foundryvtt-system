---
title: "getTexture | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.getTexture.html"
category: "functions"
---

# Function getTexture

* getTexture(  
  Â Â Â Â src: string,  
  ): Texture<Resource> | Spritesheet<ISpritesheetData> | null

  Get a single texture or sprite sheet from the cache.

  #### Parameters

  + src: string

    The texture path to load.
    This may be a standard texture path or a "virtual texture" beginning
    with the "#" character that is retrieved from canvas.sceneTextures.

  #### Returns Texture<Resource> | Spritesheet<ISpritesheetData> | null

  A texture, a sprite sheet or null if not found in cache.