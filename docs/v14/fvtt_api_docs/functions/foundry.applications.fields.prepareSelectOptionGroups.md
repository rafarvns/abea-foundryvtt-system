---
title: "prepareSelectOptionGroups | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.fields.prepareSelectOptionGroups.html"
category: "functions"
---

# Function prepareSelectOptionGroups

* prepareSelectOptionGroups(  
  Â Â Â Â config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [SelectInputConfig](../interfaces/foundry.applications.fields.SelectInputConfig.md),  
  ): { group: string; options: [FormSelectOption](../interfaces/foundry.applications.fields.FormSelectOption.md)[] }[]

  Structure a provided array of select options into a standardized format for rendering optgroup and option elements.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [SelectInputConfig](../interfaces/foundry.applications.fields.SelectInputConfig.md)

  #### Returns { group: string; options: [FormSelectOption](../interfaces/foundry.applications.fields.FormSelectOption.md)[] }[]

  #### Example

  ```
  const options = [  
    {value: "bar", label: "Bar", selected: true, group: "Good Options"},  
    {value: "foo", label: "Foo", disabled: true, group: "Bad Options"},  
    {value: "baz", label: "Baz", group: "Good Options"}  
  ];  
  const groups = ["Good Options", "Bad Options", "Unused Options"];  
  const optgroups = foundry.applications.fields.prepareSelectOptionGroups({options, groups, blank: true, sort: true});
  Copy
  ```