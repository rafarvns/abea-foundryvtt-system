---
title: "TokenMovementContinuationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementContinuationData.html"
category: "interfaces"
---

# Interface TokenMovementContinuationData

interface TokenMovementContinuationData {  
Â Â Â Â [continueCounter](#continuecounter): number;  
Â Â Â Â [continued](#continued): boolean;  
Â Â Â Â [continuePromise](#continuepromise): Promise<boolean> | null;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [postWorkflowPromise](#postworkflowpromise): Promise<void>;  
Â Â Â Â [resolveWaitPromise](#resolvewaitpromise): () => {} | undefined;  
Â Â Â Â [states](#states): {  
Â Â Â Â Â Â Â Â [movementId: string]: {  
Â Â Â Â Â Â Â Â Â Â Â Â callbacks: ((continued: boolean) => void)[];  
Â Â Â Â Â Â Â Â Â Â Â Â handles: Map<string | symbol | null, [TokenMovementContinuationHandle](foundry.documents.types.TokenMovementContinuationHandle.md)>;  
Â Â Â Â Â Â Â Â Â Â Â Â pending: Set<string>;  
Â Â Â Â Â Â Â Â };  
Â Â Â Â };  
Â Â Â Â [waitPromise](#waitpromise): Promise<void>;  
}

##### Index

### Properties

[continueCounter](#continuecounter)
[continued](#continued)
[continuePromise](#continuepromise)
[id](#id)
[postWorkflowPromise](#postworkflowpromise)
[resolveWaitPromise](#resolvewaitpromise)
[states](#states)
[waitPromise](#waitpromise)

## Properties

### continueCounter

continueCounter: number

The number of continuations

### continued

continued: boolean

Was continued?

### continuePromise

continuePromise: Promise<boolean> | null

The continuation promise

### id

id: string

The movement continuation ID, which is equal to the movement ID
unless planned, in which case the continuation ID is the
movement ID with the ".planned" suffix

### postWorkflowPromise

postWorkflowPromise: Promise<void>

The promise that resolves after the update workflow

### resolveWaitPromise

resolveWaitPromise: () => {} | undefined

Resolve function of the wait promise

### states

states: {  
Â Â Â Â [movementId: string]: {  
Â Â Â Â Â Â Â Â callbacks: ((continued: boolean) => void)[];  
Â Â Â Â Â Â Â Â handles: Map<string | symbol | null, [TokenMovementContinuationHandle](foundry.documents.types.TokenMovementContinuationHandle.md)>;  
Â Â Â Â Â Â Â Â pending: Set<string>;  
Â Â Â Â };  
}

The movement continuation states

### waitPromise

waitPromise: Promise<void>

The promise to wait for before continuing movement