---
title: "fromUuidSync | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.fromUuidSync.html"
category: "functions"
---

# Function fromUuidSync

* fromUuidSync(  
  Â Â Â Â uuid: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â invalid?: boolean;  
  Â Â Â Â Â Â Â Â relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â Â Â Â Â strict?: boolean;  
  Â Â Â Â },  
  ): object  
  | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  | null

  Retrieve a Document by its Universally Unique Identifier (uuid) synchronously. If the uuid resolves to a compendium
  document, that document's index entry will be returned instead.

  #### Parameters

  + uuid: string

    The uuid of the Document to retrieve.
  + `Optional`options: {  
    Â Â Â Â invalid?: boolean;  
    Â Â Â Â relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
    Â Â Â Â strict?: boolean;  
    } = {}

    Options to configure how a UUID is resolved.

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Document.
    - ##### `Optional`relative?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

      A Document to resolve relative UUIDs against.
    - ##### `Optional`strict?: boolean

      Throw an error if the UUID cannot be resolved synchronously.

  #### Returns object | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

  The Document or its index entry if it resides in a Compendium, otherwise
  null.

  #### Throws

  If the uuid resolves to a Document that cannot be retrieved synchronously, and the strict option is true.