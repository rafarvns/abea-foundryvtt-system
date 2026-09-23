---
title: "loadTemplates | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.loadTemplates.html"
category: "functions"
---

# Function loadTemplates

* loadTemplates(  
  Â Â Â Â paths: string[] | Record<string, string>,  
  ): Promise<TemplateDelegate<any>[]>

  Load and cache a set of templates by providing an Array of paths

  #### Parameters

  + paths: string[] | Record<string, string>

    An array of template file paths to load, or an object of Handlebars
    partial IDs to paths.

  #### Returns Promise<TemplateDelegate<any>[]>

  #### Example: Loading a list of templates.

  ```
  await foundry.applications.handlebars.loadTemplates(["templates/apps/foo.html", "templates/apps/bar.html"]);
  Copy
  ```

  ```
  <!-- Include a preloaded template as a partial -->  
  {{> "templates/apps/foo.html" }}
  Copy
  ```

  #### Example: Loading an object of templates.

  ```
  await foundry.applications.handlebars.loadTemplates({  
    foo: "templates/apps/foo.html",  
    bar: "templates/apps/bar.html"  
  });
  Copy
  ```

  ```
  <!-- Include a preloaded template as a partial -->  
  {{> foo }}
  Copy
  ```