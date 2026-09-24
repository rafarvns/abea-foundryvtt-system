---
title: "HTMLSecretUpdateCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.HTMLSecretUpdateCallback.html"
category: "types"
---

# Type Alias HTMLSecretUpdateCallback

HTMLSecretUpdateCallback: (  
Â Â Â Â secret: HTMLElement,  
Â Â Â Â content: string,  
) => Promise<ClientDocument>

#### Type Declaration

* + (secret: HTMLElement, content: string): Promise<ClientDocument>
  + #### Parameters

    - secret: HTMLElement

      The secret element that is being manipulated.
    - content: string

      The content block containing the updated secret element.

    #### Returns Promise<ClientDocument>