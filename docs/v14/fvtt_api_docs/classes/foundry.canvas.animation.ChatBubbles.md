---
title: "ChatBubbles | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.animation.ChatBubbles.html"
category: "classes"
---

# Class ChatBubbles

The Chat Bubble Class
This application displays a temporary message sent from a particular Token in the active Scene.
The message is displayed on the HUD layer just above the Token.

##### Index

### Properties

[template](#template)

### Accessors

[bubbles](#bubbles)
[element](#element)

### Methods

[broadcast](#broadcast)
[say](#say)
[\_activateSocketListeners](#_activatesocketlisteners)

## Properties

### template

template: string = "templates/hud/chat-bubble.hbs"

The Handlebars template used to render Chat Bubbles.

## Accessors

### bubbles

* get bubbles(): Record<string, HTMLElement>

  A repository of active chat bubble references by token ID.

  #### Returns Record<string, HTMLElement>

### element

* get element(): HTMLElement

  A reference to the chat bubbles HTML container in which rendered bubbles should live

  #### Returns HTMLElement

## Methods

### broadcast

* broadcast(  
  Â Â Â Â token: [TokenDocument](foundry.documents.TokenDocument.md) | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
  Â Â Â Â message: string,  
  Â Â Â Â options?: [ChatBubbleOptions](../interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md),  
  ): Promise<HTMLElement | null>

  Create a chat bubble message for a certain token which is synchronized for display across all connected clients.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md) | [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The speaking Token
  + message: string

    The spoken message text
  + `Optional`options: [ChatBubbleOptions](../interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md) = {}

    Options which affect the bubble appearance

  #### Returns Promise<HTMLElement | null>

  A promise which resolves with the created bubble HTML, or null

### say

* say(  
  Â Â Â Â token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md),  
  Â Â Â Â message: string,  
  Â Â Â Â options?: [ChatBubbleOptions](../interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md),  
  ): Promise<HTMLElement | null>

  Speak a message as a particular Token, displaying it as a chat bubble

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](foundry.canvas.placeables.Token.md)

    The speaking Token
  + message: string

    The spoken message text
  + `Optional`options: [ChatBubbleOptions](../interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md) = {}

    Options which affect the bubble appearance

  #### Returns Promise<HTMLElement | null>

  A Promise which resolves to the created bubble HTML element, or null

### `Static`\_activateSocketListeners

* \_activateSocketListeners(socket: Socket): void

  `Internal`

  Activate Socket event listeners which apply to the ChatBubbles UI.

  #### Parameters

  + socket: Socket

    The active web socket connection

  #### Returns void