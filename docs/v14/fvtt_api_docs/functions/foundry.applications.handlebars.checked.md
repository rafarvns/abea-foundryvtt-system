---
title: "checked | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.checked.html"
category: "functions"
---

# Function checked

* checked(value: unknown): string

  For checkboxes, if the value of the checkbox is true, add the "checked" property, otherwise add nothing.

  #### Parameters

  + value: unknown

    A value with a truthiness indicative of whether the checkbox is checked

  #### Returns string

  #### Example

  ```
  <label>My Checkbox</label>  
  <input type="checkbox" name="myCheckbox" {{checked myCheckbox}}>
  Copy
  ```