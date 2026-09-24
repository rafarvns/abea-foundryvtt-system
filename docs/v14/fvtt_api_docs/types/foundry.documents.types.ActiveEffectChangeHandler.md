---
title: "ActiveEffectChangeHandler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.documents.types.ActiveEffectChangeHandler.html"
category: "types"
---

# Type Alias ActiveEffectChangeHandler

ActiveEffectChangeHandler: (  
Â Â Â Â targetDoc: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](../classes/foundry.documents.Item.md) | [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
Â Â Â Â change: [ActiveEffectChangeData](../interfaces/foundry.documents.types.ActiveEffectChangeData.md),  
Â Â Â Â options?: @param {DataField} [options.field] The field. If not supplied, it will be retrieved from the supplied model.
\* @param {Record<string, unknown>} [options.replacementData] Data used to resolve "@" expressions.
\* @param {boolean} [options.modifyTarget] Modify the target Document with the updated value.
\* ,  
) => Promise<Record<string, unknown> | void>

A function that applies the change to a document

#### Type Declaration

* + (  
    Â Â Â Â targetDoc: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](../classes/foundry.documents.Item.md) | [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
    Â Â Â Â change: [ActiveEffectChangeData](../interfaces/foundry.documents.types.ActiveEffectChangeData.md),  
    Â Â Â Â options?: @param {DataField} [options.field] The field. If not supplied, it will be retrieved from the supplied model.
    \* @param {Record<string, unknown>} [options.replacementData] Data used to resolve "@" expressions.
    \* @param {boolean} [options.modifyTarget] Modify the target Document with the updated value.
    \* ,  
    ): Promise<Record<string, unknown> | void>
  + #### Parameters

    - targetDoc: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md) | [documents](../modules/foundry.documents.md).[Item](../classes/foundry.documents.Item.md) | [TokenDocument](../classes/foundry.documents.TokenDocument.md)

      The Document requesting the change application
    - change: [ActiveEffectChangeData](../interfaces/foundry.documents.types.ActiveEffectChangeData.md)

      The change data
    - `Optional`options: @param {DataField} [options.field] The field. If not supplied, it will be retrieved from the supplied model.
      \* @param {Record<string, unknown>} [options.replacementData] Data used to resolve "@" expressions.
      \* @param {boolean} [options.modifyTarget] Modify the target Document with the updated value.
      \* 

      Additional options to configure the change application.

    #### Returns Promise<Record<string, unknown> | void>