---
title: "numberFormat | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.numberFormat.html"
category: "functions"
---

# Function numberFormat

* numberFormat(  
  Â Â Â Â value: string | number,  
  Â Â Â Â options: { decimals?: number; sign?: boolean },  
  ): SafeString

  A string formatting helper to display a number with a certain fixed number of decimals and an explicit sign.

  #### Parameters

  + value: string | number

    A numeric value to format
  + options: { decimals?: number; sign?: boolean }

    Additional options which customize the resulting format

    - ##### `Optional`decimals?: number

      The number of decimal places to include in the resulting string
    - ##### `Optional`sign?: boolean

      Whether to include an explicit "+" sign for positive numbers \*

  #### Returns SafeString

  The formatted string to be included in a template

  #### Example

  ```
  {{numberFormat 5.5}} <!-- 5.5 -->  
  {{numberFormat 5.5 decimals=2}} <!-- 5.50 -->  
  {{numberFormat 5.5 decimals=2 sign=true}} <!-- +5.50 -->  
  {{numberFormat null decimals=2 sign=false}} <!-- NaN -->  
  {{numberFormat undefined decimals=0 sign=true}} <!-- NaN -->
  Copy
  ```