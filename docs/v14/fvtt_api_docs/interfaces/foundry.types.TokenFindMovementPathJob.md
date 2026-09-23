---
title: "TokenFindMovementPathJob | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenFindMovementPathJob.html"
category: "interfaces"
---

# Interface TokenFindMovementPathJob

interface TokenFindMovementPathJob {  
Â Â Â Â [cancel](#cancel): () => void;  
Â Â Â Â [promise](#promise): Promise<[TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[] | null>;  
Â Â Â Â [result](#result): [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[] | null | undefined;  
}

##### Index

### Properties

[cancel](#cancel)
[promise](#promise)
[result](#result)

## Properties

### cancel

cancel: () => void

If this function is called and the job hasn't completed
yet, the job is cancelled.

### promise

promise: Promise<[TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[] | null>

The promise returning the (partial) path that as found
or null if cancelled.

### result

result: [TokenMovementWaypoint](foundry.documents.types.TokenMovementWaypoint.md)[] | null | undefined

The result of the pathfinding job. Undefined while the
search is in progress, null if the job was cancelled,
and the (partial) path if the job completed.