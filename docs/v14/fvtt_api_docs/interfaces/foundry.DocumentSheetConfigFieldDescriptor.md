---
title: "DocumentSheetConfigFieldDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DocumentSheetConfigFieldDescriptor.html"
category: "interfaces"
---

# Interface DocumentSheetConfigFieldDescriptor

interface DocumentSheetConfigFieldDescriptor {  
Â Â Â Â [disabled](#disabled)?: boolean;  
Â Â Â Â [field](#field): [DataField](../classes/foundry.data.fields.DataField.md);  
Â Â Â Â [name](#name): string;  
Â Â Â Â [value](#value): string;  
}

##### Index

### Properties

[disabled?](#disabled)
[field](#field)
[name](#name)
[value](#value)

## Properties

### `Optional`disabled

disabled?: boolean

Whether the field should be disabled in the form.

### field

field: [DataField](../classes/foundry.data.fields.DataField.md)

The field instance.

### name

name: string

The field's form name.

### value

value: string

The field's value.