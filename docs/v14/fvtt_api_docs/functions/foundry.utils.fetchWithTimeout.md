---
title: "fetchWithTimeout | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.fetchWithTimeout.html"
category: "functions"
---

# Function fetchWithTimeout

* fetchWithTimeout(  
  Â Â Â Â url: string,  
  Â Â Â Â data?: RequestInit,  
  Â Â Â Â options?: { onTimeout?: Function; timeoutMs?: number | null },  
  ): Promise<Response>

  A wrapper method around `fetch` that attaches an AbortController signal to the `fetch` call for clean timeouts

  #### Parameters

  + url: string

    The URL to make the Request to
  + data: RequestInit = {}

    The data of the Request
  + `Optional`options: { onTimeout?: Function; timeoutMs?: number | null } = {}

    Additional options

    - ##### `Optional`onTimeout?: Function

      A method to invoke if and when the timeout is reached
    - ##### `Optional`timeoutMs?: number | null

      How long to wait for a Response before cleanly aborting.
      If null, no timeout is applied. Default: `30000`.

  #### Returns Promise<Response>

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#aborting_a_fetch_with_timeout_or_explicit_abort>

  #### Throws