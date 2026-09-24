---
title: "getTemplate | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.getTemplate.html"
category: "functions"
---

# Function getTemplate

* getTemplate(path: string, id?: string): Promise<TemplateDelegate<any>>

  Get a template from the server by fetch request and caching the retrieved result

  #### Parameters

  + path: string

    The web-accessible HTML template URL
  + `Optional`id: string = path

    An ID to register the partial with.

  #### Returns Promise<TemplateDelegate<any>>

  A Promise which resolves to the compiled Handlebars template