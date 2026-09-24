---
title: "disabled | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.disabled.html"
category: "functions"
---

# Function disabled

* disabled(value: unknown): string

  For use in form inputs. If the supplied value is truthy, add the "disabled" property, otherwise add nothing.

  #### Parameters

  + value: unknown

    A value with a truthiness indicative of whether the input is disabled

  #### Returns string

  #### Example

  ```
  <button type="submit" {{disabled myValue}}>Submit</button>
  Copy
  ```