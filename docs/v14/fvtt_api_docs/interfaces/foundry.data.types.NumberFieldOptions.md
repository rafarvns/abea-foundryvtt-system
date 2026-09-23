---
title: "NumberFieldOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.NumberFieldOptions.html"
category: "interfaces"
---

# Interface NumberFieldOptions

interface NumberFieldOptions {  
Â Â Â Â [choices](#choices)?: object | Function | number[];  
Â Â Â Â [gmOnly](#gmonly)?: boolean;  
Â Â Â Â [hint](#hint)?: string;  
Â Â Â Â [initial](#initial)?: any;  
Â Â Â Â [integer](#integer)?: boolean;  
Â Â Â Â [label](#label)?: string;  
Â Â Â Â [max](#max)?: number;  
Â Â Â Â [min](#min)?: number;  
Â Â Â Â [nullable](#nullable)?: boolean;  
Â Â Â Â [persisted](#persisted)?: boolean;  
Â Â Â Â [placeholder](#placeholder)?: string;  
Â Â Â Â [positive](#positive)?: boolean;  
Â Â Â Â [readonly](#readonly)?: boolean;  
Â Â Â Â [required](#required)?: boolean;  
Â Â Â Â [step](#step)?: number;  
Â Â Â Â [validate](#validate)?: [DataFieldValidator](../types/foundry.data.types.DataFieldValidator.md);  
Â Â Â Â [validationError](#validationerror)?: string;  
}

##### Index

### Properties

[choices?](#choices)
[gmOnly?](#gmonly)
[hint?](#hint)
[initial?](#initial)
[integer?](#integer)
[label?](#label)
[max?](#max)
[min?](#min)
[nullable?](#nullable)
[persisted?](#persisted)
[placeholder?](#placeholder)
[positive?](#positive)
[readonly?](#readonly)
[required?](#required)
[step?](#step)
[validate?](#validate)
[validationError?](#validationerror)

## Properties

### `Optional`choices

choices?: object | Function | number[]

An array of values or an object of values/labels which represent
allowed choices for the field. A function may be provided which dynamically
returns the array of choices.

### `Optional`gmOnly

gmOnly?: boolean

Can this field only be modified by a gamemaster or assistant gamemaster?

### `Optional`hint

hint?: string

Localizable help text displayed on forms which render this field.

### `Optional`initial

initial?: any

The initial value of a field, or a function which assigns that initial value.

### `Optional`integer

integer?: boolean

Must the number be an integer?

### `Optional`label

label?: string

A localizable label displayed on forms which render this field.

### `Optional`max

max?: number

A maximum allowed value

### `Optional`min

min?: number

A minimum allowed value

### `Optional`nullable

nullable?: boolean

Can this field have null values?

### `Optional`persisted

persisted?: boolean

Is a value of this field written to source data? A Non-persisted value is
initialized (with its initial value), and ActiveEffects can use the field
for change application.

### `Optional`placeholder

placeholder?: string

Localizable text displayed in placeholders of form inputs which render this field.

### `Optional`positive

positive?: boolean

Must the number be positive?

### `Optional`readonly

readonly?: boolean

Should the initialized (prepared) property of the DataModel instance for this
field be read-only, i.e. nonwritable and nonconfigurable? The source value of
a read-only field can still be changed by `updateSource`, but a source change
won't necessarily be reflected on the prepared value. Usually the prepared
value of a read-only field is effectively immutable, but not in all cases:
for example, `EmbeddedCollectionField`. The `_id` field is a special behavior:
the prepared property becomes nonconfigurable only after the source value
becomes a nonnull value for the first time.

### `Optional`required

required?: boolean

Is this field required to be populated?

### `Optional`step

step?: number

A permitted step size

### `Optional`validate

validate?: [DataFieldValidator](../types/foundry.data.types.DataFieldValidator.md)

A custom data field validation function.

### `Optional`validationError

validationError?: string

A custom validation error string. When displayed will be prepended with the
document name, field name, and candidate value. This error string is only
used when the return type of the validate function is a boolean. If an Error
is thrown in the validate function, the string message of that Error is used.