---
title: "formatFileSize | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.formatFileSize.html"
category: "functions"
---

# Function formatFileSize

* formatFileSize(  
  Â Â Â Â size: number,  
  Â Â Â Â options?: { base?: 2 | 10; decimalPlaces?: number },  
  ): string

  Format a file size to an appropriate order of magnitude.

  #### Parameters

  + size: number

    The size in bytes.
  + `Optional`options: { base?: 2 | 10; decimalPlaces?: number } = {}
    - ##### `Optional`base?: 2 | 10

      The base to use. In base 10 a kilobyte is 1000 bytes. In base 2 it is
      1024 bytes.
    - ##### `Optional`decimalPlaces?: number

      The number of decimal places to round to.

  #### Returns string