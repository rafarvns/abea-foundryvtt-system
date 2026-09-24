---
title: "fetchResource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.fetchResource.html"
category: "functions"
---

# Function fetchResource

* fetchResource(src: string, options?: { bustCache?: boolean }): Promise<Blob>

  Use the Fetch API to retrieve a resource and return a Blob instance for it.

  #### Parameters

  + src: string
  + `Optional`options: { bustCache?: boolean } = {}

    Options to configure the loading behaviour.

    - ##### `Optional`bustCache?: boolean

      Append a cache-busting query parameter to the request.

  #### Returns Promise<Blob>

  A Blob containing the loaded data