---
title: "createMultiSelectInput | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.fields.createMultiSelectInput.html"
category: "functions"
---

# Function createMultiSelectInput

* createMultiSelectInput(  
  Â Â Â Â config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<(string | number)[]> & Omit<  
  Â Â Â Â Â Â Â Â [SelectInputConfig](../interfaces/foundry.applications.fields.SelectInputConfig.md),  
  Â Â Â Â Â Â Â Â "blank",  
  Â Â Â Â >,  
  ): AbstractMultiSelectElement

  Create a `<multi-select>` or `<multi-checkbox>` element for fields supporting multiple choices.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<(string | number)[]> & Omit<[SelectInputConfig](../interfaces/foundry.applications.fields.SelectInputConfig.md), "blank">

    Configuration object for creating the multi-select element.
    The `value` property accepts an array of strings or numbers corresponding to the selected choices.

  #### Returns AbstractMultiSelectElement