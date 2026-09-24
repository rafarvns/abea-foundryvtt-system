---
title: "renderChatInput | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.renderChatInput.html"
category: "functions"
---

# Function renderChatInput

* renderChatInput(  
  Â Â Â Â app: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md),  
  Â Â Â Â elements: Record<string, HTMLElement>,  
  Â Â Â Â context: [RenderChatInputContext](../interfaces/hookEvents.RenderChatInputContext.md),  
  Â Â Â Â options: ([ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) | [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)) & {  
  Â Â Â Â Â Â Â Â closing?: boolean;  
  Â Â Â Â },  
  ): void

  A hook event that fires when the chat input element is adopted by a different DOM element.

  #### Parameters

  + app: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md)

    The application that performed the adoption.
  + elements: Record<string, HTMLElement>

    A mapping of CSS selectors to the elements that were moved.
  + context: [RenderChatInputContext](../interfaces/hookEvents.RenderChatInputContext.md)

    Additional hook context.
  + options: ([ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) | [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)) & { closing?: boolean }

    The options passed to
    the render or close operation which triggered the adoption, if any.

  #### Returns void