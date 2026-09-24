---
title: "DocumentPermissionTest | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.abstract.types.DocumentPermissionTest.html"
category: "types"
---

# Type Alias DocumentPermissionTest

DocumentPermissionTest: (  
Â Â Â Â user: [BaseUser](../classes/foundry.documents.BaseUser.md),  
Â Â Â Â document: [Document](../classes/foundry.abstract.Document.md),  
Â Â Â Â data?: object,  
) => boolean

#### Type Declaration

* + (user: [BaseUser](../classes/foundry.documents.BaseUser.md), document: [Document](../classes/foundry.abstract.Document.md), data?: object): boolean
  + #### Parameters

    - user: [BaseUser](../classes/foundry.documents.BaseUser.md)

      The User attempting the operation
    - document: [Document](../classes/foundry.abstract.Document.md)

      The Document being operated upon
    - `Optional`data: object

      Data provided to a creation or update operation

    #### Returns boolean