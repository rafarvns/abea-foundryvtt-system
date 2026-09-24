---
title: "chatBubbleHTML | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.chatBubbleHTML.html"
category: "functions"
---

# Function chatBubbleHTML

* chatBubbleHTML(  
  Â Â Â Â token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md),  
  Â Â Â Â html: HTMLElement,  
  Â Â Â Â message: string,  
  Â Â Â Â options: ChatBubbleOptions,  
  ): boolean | void

  A hook event that fires when a chat bubble is initially configured.

  #### Parameters

  + token: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)

    The speaking token
  + html: HTMLElement

    The HTML of the chat bubble
  + message: string

    The spoken message text
  + options: ChatBubbleOptions

    Provided options which affect bubble appearance

  #### Returns boolean | void

  May return false to prevent the calling workflow