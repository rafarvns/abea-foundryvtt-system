---
title: "applyCompendiumArt | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.applyCompendiumArt.html"
category: "functions"
---

# Function applyCompendiumArt

* applyCompendiumArt(  
  Â Â Â Â documentClass: typeof [Document](../classes/foundry.abstract.Document.md),  
  Â Â Â Â source: object,  
  Â Â Â Â pack: [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<any>,  
  Â Â Â Â art: [CompendiumArtInfo](../interfaces/foundry.helpers.types.CompendiumArtInfo.md),  
  ): void

  A hook even that fires when package-provided art is applied to a compendium Document.

  #### Parameters

  + documentClass: typeof [Document](../classes/foundry.abstract.Document.md)

    The Document class.
  + source: object

    The Document's source data.
  + pack: [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<any>

    The Document's compendium.
  + art: [CompendiumArtInfo](../interfaces/foundry.helpers.types.CompendiumArtInfo.md)

    The art being applied.

  #### Returns void