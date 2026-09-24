---
title: "slugify | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.String.slugify.html"
category: "functions"
---

# Function slugify

* slugify(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â lowercase?: boolean;  
  Â Â Â Â Â Â Â Â replacement?: string;  
  Â Â Â Â Â Â Â Â strict?: boolean;  
  Â Â Â Â },  
  ): string

  Transform any string into an url-viable slug string

  #### Parameters

  + `Optional`options: { lowercase?: boolean; replacement?: string; strict?: boolean } = {}

    Optional arguments which customize how the slugify operation is performed

    - ##### `Optional`lowercase?: boolean

      Lowercase the string.
    - ##### `Optional`replacement?: string

      The replacement character to separate terms, default is '-'
    - ##### `Optional`strict?: boolean

      Replace all non-alphanumeric characters, or allow them? Default false

  #### Returns string

  The slugified input string