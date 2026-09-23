---
title: "fromUuid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.fromUuid.html"
category: "functions"
---

# Function fromUuid

* fromUuid(  
  Â Â Â Â uuid: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â invalid?: boolean;  
  Â Â Â Â Â Â Â Â relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â },  
  ): Promise<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null>

  Retrieve a Document by its Universally Unique Identifier (uuid).

  #### Parameters

  + uuid: string

    The uuid of the Document to retrieve.
  + `Optional`options: { invalid?: boolean; relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> } = {}

    Options to configure how a UUID is resolved.

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Document.
    - ##### `Optional`relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

      A Document to resolve relative UUIDs against.

  #### Returns Promise<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null>

  Returns the Document if it could be found, otherwise null.