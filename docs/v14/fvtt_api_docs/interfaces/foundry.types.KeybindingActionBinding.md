---
title: "KeybindingActionBinding | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.KeybindingActionBinding.html"
category: "interfaces"
---

# Interface KeybindingActionBinding

A Client Keybinding Action Binding

interface KeybindingActionBinding {  
Â Â Â Â [index](#index)?: number;  
Â Â Â Â [key](#key): string;  
Â Â Â Â [logicalKey](#logicalkey): string;  
Â Â Â Â [modifiers](#modifiers)?: string[];  
}

##### Index

### Properties

[index?](#index)
[key](#key)
[logicalKey](#logicalkey)
[modifiers?](#modifiers)

## Properties

### `Optional`index

index?: number

A numeric index which tracks this bindings position during form rendering

### key

key: string

The KeyboardEvent#code value from

### logicalKey

logicalKey: string

The Keyboard logical code if universal mode is enable (it is code otherwise)
<https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values>

### `Optional`modifiers

modifiers?: string[]

An array of modifiers keys from
[foundry.helpers.interaction.KeyboardManager.MODIFIER\_KEYS](../classes/foundry.helpers.interaction.KeyboardManager.md#modifier_keys)
which are required for this binding to be activated