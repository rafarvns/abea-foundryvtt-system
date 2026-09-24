---
title: "ChatCommandCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.ChatCommandCallback.html"
category: "types"
---

# Type Alias ChatCommandCallback

ChatCommandCallback: (  
Â Â Â Â command: string,  
Â Â Â Â match: RegExpMatchArray | RegExpMatchArray[] | string[],  
Â Â Â Â chatData: object,  
Â Â Â Â createOptions: object,  
) => Promise<false | void>

Called in the context of a [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md) instance.

#### Type Declaration

* + (  
    Â Â Â Â command: string,  
    Â Â Â Â match: RegExpMatchArray | RegExpMatchArray[] | string[],  
    Â Â Â Â chatData: object,  
    Â Â Â Â createOptions: object,  
    ): Promise<false | void>
  + #### Parameters

    - command: string

      The matched command name.
    - match: RegExpMatchArray | RegExpMatchArray[] | string[]

      The regex match result.
    - chatData: object

      Chat message data.
    - createOptions: object

      Options passed to ChatMessage.create.

    #### Returns Promise<false | void>