---
title: "srcExists | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.srcExists.html"
category: "functions"
---

# Function srcExists

* srcExists(src: string): Promise<boolean>

  Test whether a file source exists by performing a HEAD request against it

  #### Parameters

  + src: string

    The source URL or path to test

  #### Returns Promise<boolean>

  Does the file exist at the provided url?