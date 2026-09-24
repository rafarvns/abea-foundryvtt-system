---
title: "numberInput | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.numberInput.html"
category: "functions"
---

# Function numberInput

* numberInput(value: number, options: any): SafeString

  Render a form input field of type number with value appropriately rounded to step size.

  #### Parameters

  + value: number
  + options: any

  #### Returns SafeString

  #### Example

  ```
  {{numberInput value name="numberField" step=1 min=0 max=10}}
  Copy
  ```