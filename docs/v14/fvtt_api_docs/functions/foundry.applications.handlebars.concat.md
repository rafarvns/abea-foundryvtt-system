---
title: "concat | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.concat.html"
category: "functions"
---

# Function concat

* concat(...values: string[]): SafeString

  Concatenate a number of string terms into a single string.
  This is useful for passing arguments with variable names.

  #### Parameters

  + ...values: string[]

    The values to concatenate

  #### Returns SafeString

  #### Example: Concatenate several string parts to create a dynamic variable

  ```
  {{filePicker target=(concat "faces." i ".img") type="image"}}
  Copy
  ```