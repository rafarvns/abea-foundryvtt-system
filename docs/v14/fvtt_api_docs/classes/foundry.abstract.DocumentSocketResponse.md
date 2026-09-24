---
title: "DocumentSocketResponse | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.abstract.DocumentSocketResponse.html"
category: "classes"
---

# Class DocumentSocketResponse

The data structure of a modifyDocument socket response.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[action](#action)
[broadcast](#broadcast)
[error](#error)
[operation](#operation)
[result](#result)
[sideEffect](#sideeffect)
[timestamp](#timestamp)
[type](#type)
[userId](#userid)

## Constructors

### constructor

* new DocumentSocketResponse(  
  Â Â Â Â request: [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.md),  
  ): DocumentSocketResponse

  Prepare a response for an incoming request.

  #### Parameters

  + request: [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.md)

    The incoming request that is being responded to

  #### Returns DocumentSocketResponse

## Properties

### action

action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

The database action that was performed.

### broadcast

broadcast: boolean

Was this response broadcast to other connected clients?

### error

error: Error

An error that occurred. Present if unsuccessful

### operation

operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

The database operation that was requested.

### result

result: string[] | object[]

The result of the request. Present if successful

### sideEffect

sideEffect: boolean = false

Is this a side effect?

### timestamp

timestamp: number

The time the response was sent in milliseconds.

### type

type: string

The type of Document being transacted.

### userId

userId: string

The identifier of the requesting user.