---
title: "buildUuid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.buildUuid.html"
category: "functions"
---

# Function buildUuid

* buildUuid(  
  Â Â Â Â context: {  
  Â Â Â Â Â Â Â Â documentName?: string;  
  Â Â Â Â Â Â Â Â id: string;  
  Â Â Â Â Â Â Â Â pack?: string | null;  
  Â Â Â Â Â Â Â Â parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
  Â Â Â Â },  
  ): string  
  | null

  Build a Universally Unique Identifier (uuid) from possibly limited data. An attempt will be made to resolve omitted
  components, but an identifier and at least one of documentName, parent, and pack are required.

  #### Parameters

  + context: {  
    Â Â Â Â documentName?: string;  
    Â Â Â Â id: string;  
    Â Â Â Â pack?: string | null;  
    Â Â Â Â parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
    }

    Data for building the uuid

    - ##### `Optional`documentName?: string

      The document name (or type)
    - ##### id: string

      The identifier of the document
    - ##### `Optional`pack?: string | null

      The document's compendium pack, if applicable
    - ##### `Optional`parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

      The document's parent, if any

  #### Returns string | null

  A well-formed Document uuid unless one is unable to be created