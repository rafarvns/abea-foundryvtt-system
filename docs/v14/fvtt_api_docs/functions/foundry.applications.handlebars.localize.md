---
title: "localize | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.localize.html"
category: "functions"
---

# Function localize

* localize(value: string, options: { hash: object }): string

  Translate a provided string key by using the loaded dictionary of localization strings.

  #### Parameters

  + value: string

    The path to a localized string
  + options: { hash: object }

    Interpolation data passed to Localization#format

  #### Returns string

  #### Example: Translate a provided localization string, optionally including formatting parameters

  ```
  <label>{{localize "ACTOR.Create"}}</label> <!-- "Create Actor" -->  
  <label>{{localize "CHAT.InvalidCommand" command=foo}}</label> <!-- "foo is not a valid chat message command." -->
  Copy
  ```