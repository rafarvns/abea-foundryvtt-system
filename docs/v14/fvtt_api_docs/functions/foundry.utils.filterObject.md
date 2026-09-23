---
title: "filterObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.filterObject.html"
category: "functions"
---

# Function filterObject

* filterObject(  
  Â Â Â Â source: object,  
  Â Â Â Â template: object,  
  Â Â Â Â options?: { templateValues?: boolean },  
  ): object

  Filter the contents of some source object using the structure of a template object.
  Only keys which exist in the template are preserved in the source object.

  #### Parameters

  + source: object

    An object which contains the data you wish to filter
  + template: object

    An object which contains the structure you wish to preserve
  + `Optional`options: { templateValues?: boolean } = {}

    Additional options which customize the filtration

    - ##### `Optional`templateValues?: boolean

      Instead of keeping values from the source, instead draw values
      from the template

  #### Returns object

  The filtered object

  #### Example: Filter an object

  ```
  const source = {foo: {number: 1, name: "Tim", topping: "olives"}, bar: "baz"};  
  const template = {foo: {number: 0, name: "Mit", style: "bold"}, other: 72};  
  filterObject(source, template); // {foo: {number: 1, name: "Tim"}};  
  filterObject(source, template, {templateValues: true}); // {foo: {number: 0, name: "Mit"}};
  Copy
  ```