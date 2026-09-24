---
title: "modifyBatch | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.documents.modifyBatch.html"
category: "functions"
---

# Function modifyBatch

* modifyBatch(  
  Â Â Â Â operations: [DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)[],  
  ): Promise<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[][]>

  Bundle multiple [Document](../classes/foundry.abstract.Document.md)-modification operations into a single, batched request. The modifications
  are made in sequence without a network delay between each. This can be useful when, for example, it is desirable that
  there not be an unpredictable delay between operations due to latency. For certain operations there may also be a
  need to ensure there will never be a mixed state: either all must succeed, or all must fail.

  The nature of batched modifications does have some limitations:

  + Unlike with a sequence of unbatched operations, a batched operation is unable to reference the result of a prior
    operation in the same batch.
  + A cancellation (via, for example, [Document#\_preUpdate](../classes/foundry.abstract.Document.md#_preupdate)) or exception thrown by a single operation will
    cancel the entire batch. No changes will be made.

  #### Parameters

  + operations: [DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)[]

  #### Returns Promise<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[][]>

  #### Example: Modify an Actor and two TokenDocuments

  Update an Actor's size category along with the dimensions of that Actor's related TokenDocuments across multiple
  Scenes.

  ```
  foundry.documents.modifyBatch([  
    {  
      action: "update",  
      documentName: "Actor",  
      updates: [{_id: "Ay52yVxCgusBct1b", "system.size": "big"}],  
    },  
    {  
      action: "update",  
      documentName: "Token",  
      updates: [{_id: "30pnHJciHu4CvPnz", width: 2, height: 2}],  
      parent: sceneA  
    },  
    {  
      action: "update",  
      documentName: "Token",  
      updates: [{_id: "knSU5NQVXeIQQeHi", width: 2, height: 2}],  
      parent: sceneB  
    }  
  ]);
  Copy
  ```