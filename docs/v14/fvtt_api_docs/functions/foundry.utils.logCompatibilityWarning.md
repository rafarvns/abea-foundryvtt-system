---
title: "logCompatibilityWarning | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.logCompatibilityWarning.html"
category: "functions"
---

# Function logCompatibilityWarning

* logCompatibilityWarning(  
  Â Â Â Â message: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â details?: string;  
  Â Â Â Â Â Â Â Â mode?: number;  
  Â Â Â Â Â Â Â Â once?: boolean;  
  Â Â Â Â Â Â Â Â since?: string | number;  
  Â Â Â Â Â Â Â Â stack?: boolean;  
  Â Â Â Â Â Â Â Â until?: string | number;  
  Â Â Â Â },  
  ): void

  Log a compatibility warning which is filtered based on the client's defined compatibility settings.

  #### Parameters

  + message: string

    The original warning or error message
  + `Optional`options: {  
    Â Â Â Â details?: string;  
    Â Â Â Â mode?: number;  
    Â Â Â Â once?: boolean;  
    Â Â Â Â since?: string | number;  
    Â Â Â Â stack?: boolean;  
    Â Â Â Â until?: string | number;  
    } = {}

    Additional options which customize logging

    - ##### `Optional`details?: string

      Additional details to append to the logged message
    - ##### `Optional`mode?: number

      A logging level in COMPATIBILITY\_MODES which overrides the configured default
    - ##### `Optional`once?: boolean

      Log this the message only once?
    - ##### `Optional`since?: string | number

      A version identifier since which a change was made
    - ##### `Optional`stack?: boolean

      Include the message stack trace
    - ##### `Optional`until?: string | number

      A version identifier until which a change remains supported

  #### Returns void

  #### Throws

  An Error if the mode is ERROR