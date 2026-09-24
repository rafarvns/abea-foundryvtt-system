---
title: "buildRelativeUuid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.buildRelativeUuid.html"
category: "functions"
---

# Function buildRelativeUuid

* buildRelativeUuid(  
  Â Â Â Â target: string | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â origin: string | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  ): string

  Build the relative UUID of the target relative to the origin if possible.

  #### Parameters

  + target: string | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The target UUID or Document
  + origin: string | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The origin UUID or Document

  #### Returns string

  The relative UUID of the target relative to the origin if possible,
  otherwise the absolute UUID of the target