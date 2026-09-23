---
title: "ActiveEffectChangeRenderer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.documents.types.ActiveEffectChangeRenderer.html"
category: "types"
---

# Type Alias ActiveEffectChangeRenderer

ActiveEffectChangeRenderer: (  
Â Â Â Â context: @param {object} context.change A copy of the change from the ActiveEffect's source array
\* @param {number} context.index The object's index in the changes Array
\* @param {DataSchema} context.fields
\* @param {number} context.defaultPriority The change type's default priority
\* ,  
) => Promise<string>

A function to render a stringified HTMLLIElement in the changes tab of [ActiveEffectConfig](../classes/foundry.applications.sheets.ActiveEffectConfig.md)

#### Type Declaration

* + (  
    Â Â Â Â context: @param {object} context.change A copy of the change from the ActiveEffect's source array
    \* @param {number} context.index The object's index in the changes Array
    \* @param {DataSchema} context.fields
    \* @param {number} context.defaultPriority The change type's default priority
    \* ,  
    ): Promise<string>
  + #### Parameters

    - context: @param {object} context.change A copy of the change from the ActiveEffect's source array
      \* @param {number} context.index The object's index in the changes Array
      \* @param {DataSchema} context.fields
      \* @param {number} context.defaultPriority The change type's default priority
      \* 

      Contextual data for rendering the row

    #### Returns Promise<string>