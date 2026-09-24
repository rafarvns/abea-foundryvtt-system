---
title: "SocketResponse | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.SocketResponse.html"
category: "interfaces"
---

# Interface SocketResponse

interface SocketResponse {  
Â Â Â Â [data](#data)?: [RequestData](../types/foundry.types.RequestData.md);  
Â Â Â Â [error](#error)?: Error;  
Â Â Â Â [request](#request): [SocketRequest](foundry.types.SocketRequest.md);  
Â Â Â Â [status](#status)?: string;  
Â Â Â Â [userId](#userid)?: string;  
}

##### Index

### Properties

[data?](#data)
[error?](#error)
[request](#request)
[status?](#status)
[userId?](#userid)

## Properties

### `Optional`data

data?: [RequestData](../types/foundry.types.RequestData.md)

Data returned as a result of the request

### `Optional`error

error?: Error

An error, if one occurred

### request

request: [SocketRequest](foundry.types.SocketRequest.md)

The initial request

### `Optional`status

status?: string

The status of the request

### `Optional`userId

userId?: string

The ID of the requesting User