---
title: "SocketInterface | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.SocketInterface.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [SocketInterface](foundry.helpers.SocketInterface.html)

# Class SocketInterface

A standardized way socket messages are dispatched and their responses are handled

##### Index

### Methods

[dispatch](foundry.helpers.SocketInterface.html#dispatch)

## Methods

### `Static`dispatch

* dispatch(  
  Â Â Â Â eventName: string,  
  Â Â Â Â request: object | [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.html),  
  ): Promise<SocketResponse>

  Send a socket request to all other clients and handle their responses.

  #### Parameters

  + eventName: string

    The socket event name being handled
  + request: object | [DocumentSocketRequest](../interfaces/foundry.abstract.types.DocumentSocketRequest.html)

    Request data provided to the Socket event

  #### Returns Promise<SocketResponse>

  A Promise which resolves to the SocketResponse