---
title: "radioBoxes | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.radioBoxes.html"
category: "functions"
---

# Function radioBoxes

* radioBoxes(  
  Â Â Â Â name: string,  
  Â Â Â Â choices: object,  
  Â Â Â Â options: { checked: string; localize: boolean },  
  ): SafeString

  A helper to create a set of radio checkbox input elements in a named set.
  The provided keys are the possible radio values while the provided values are human-readable labels.

  #### Parameters

  + name: string

    The radio checkbox field name
  + choices: object

    A mapping of radio checkbox values to human-readable labels
  + options: { checked: string; localize: boolean }

    Options which customize the radio boxes creation

    - ##### checked: string

      Which key is currently checked?
    - ##### localize: boolean

      Pass each label through string localization?

  #### Returns SafeString

  #### Example: The provided input data

  ```
  let groupName = "importantChoice";  
  let choices = {a: "Choice A", b: "Choice B"};  
  let chosen = "a";
  Copy
  ```

  #### Example: The template HTML structure

  ```
  <div class="form-group">  
    <label>Radio Group Label</label>  
    <div class="form-fields">  
      {{radioBoxes groupName choices checked=chosen localize=true}}  
    </div>  
  </div>
  Copy
  ```