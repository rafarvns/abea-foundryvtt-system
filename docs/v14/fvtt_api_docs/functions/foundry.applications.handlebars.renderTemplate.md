---
title: "renderTemplate | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.renderTemplate.html"
category: "functions"
---

# Function renderTemplate

* renderTemplate(path: string, data: object): Promise<string>

  Get and render a template using provided data and handle the returned HTML
  Support asynchronous file template file loading with a client-side caching layer

  Allow resolution of prototype methods and properties since this all occurs within the safety of the client.

  #### Parameters

  + path: string

    The file path to the target HTML template
  + data: object

    A data object against which to compile the template

  #### Returns Promise<string>

  Returns the compiled and rendered template as a string

  #### See

  <https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access>