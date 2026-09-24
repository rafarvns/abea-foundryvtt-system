---
title: "TokenMovementContinuationHandle | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementContinuationHandle.html"
category: "interfaces"
---

# Interface TokenMovementContinuationHandle

interface TokenMovementContinuationHandle {  
Â Â Â Â [callback](#callback): () => Promise<boolean>;  
Â Â Â Â [continuationID](#continuationid): string;  
Â Â Â Â [continuePromise](#continuepromise): Promise<boolean> | undefined;  
}

##### Index

### Properties

[callback](#callback)
[continuationID](#continuationid)
[continuePromise](#continuepromise)

## Properties

### callback

callback: () => Promise<boolean>

The continuation callback

### continuationID

continuationID: string

The continuation ID

### continuePromise

continuePromise: Promise<boolean> | undefined

The continuation promise