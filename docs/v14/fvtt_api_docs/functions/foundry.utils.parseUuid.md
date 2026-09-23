---
title: "parseUuid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.parseUuid.html"
category: "functions"
---

# Function parseUuid

* parseUuid(  
  Â Â Â Â uuid: string,  
  Â Â Â Â options?: { relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> },  
  ): [ResolvedUUID](../interfaces/foundry.utils.types.ResolvedUUID.md) | null

  Parse a UUID into its constituent parts, identifying the type and ID of the referenced document.
  The ResolvedUUID result also identifies a "primary" document which is a root-level document either in the game
  World or in a Compendium pack which is a parent of the referenced document.

  #### Parameters

  + uuid: string

    The UUID to parse.
  + `Optional`options: { relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> } = {}

    Options to configure parsing behavior.

    - ##### `Optional`relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

      A document to resolve relative UUIDs against.

  #### Returns [ResolvedUUID](../interfaces/foundry.utils.types.ResolvedUUID.md) | null

  Returns, if possible, the Collection, Document Type, and Document ID to resolve the
  parent document, as well as the remaining Embedded Document parts, if any.