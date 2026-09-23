---
title: "SocketInterface | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.SocketInterface.html"
category: "classes"
---

# Class SocketInterface

A standardized way socket messages are dispatched and their responses are handled

##### Index

### Methods

[dispatch](#dispatch)

## Methods

### `Static`dispatch

* dispatch(  
  Â Â Â Â eventName: string,  
  Â Â Â Â request: object | [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.md),  
  ): Promise<SocketResponse>

  Send a socket request to all other clients and handle their responses.

  #### Parameters

  + eventName: string

    The socket event name being handled
  + request: object | [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.md)

    Request data provided to the Socket event

  #### Returns Promise<SocketResponse>

  A Promise which resolves to the SocketResponse