---
title: "renderChatMessageHTML | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.renderChatMessageHTML.html"
category: "functions"
---

# Function renderChatMessageHTML

* renderChatMessageHTML(  
  Â Â Â Â message: [documents](../modules/foundry.documents.md).[ChatMessage](../classes/foundry.documents.ChatMessage.md),  
  Â Â Â Â html: HTMLElement,  
  Â Â Â Â context?: object,  
  ): void

  A hook event that fires for each ChatMessage which is rendered for addition to the ChatLog.
  This hook allows for final customization of the message HTML before it is added to the log.

  #### Parameters

  + message: [documents](../modules/foundry.documents.md).[ChatMessage](../classes/foundry.documents.ChatMessage.md)

    The ChatMessage document being rendered.
  + html: HTMLElement

    The pending HTML.
  + `Optional`context: object

    The rendering context. This is only provided when the core chat message template
    is rendered.

  #### Returns void