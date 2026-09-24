---
title: "fetchJsonWithTimeout | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.fetchJsonWithTimeout.html"
category: "functions"
---

# Function fetchJsonWithTimeout

* fetchJsonWithTimeout(  
  Â Â Â Â url: string,  
  Â Â Â Â data?: Object,  
  Â Â Â Â options?: { onTimeout?: Function; timeoutMs?: number | null },  
  ): Promise<any>

  A small wrapper that automatically asks for JSON with a Timeout

  #### Parameters

  + url: string

    The URL to make the Request to
  + data: Object = {}

    The data of the Request
  + `Optional`options: { onTimeout?: Function; timeoutMs?: number | null } = {}

    Additional options

    - ##### `Optional`onTimeout?: Function

      A method to invoke if and when the timeout is reached
    - ##### `Optional`timeoutMs?: number | null

      How long to wait for a Response before cleanly aborting.
      If null, no timeout is applied. Default: `30000`.

  #### Returns Promise<any>