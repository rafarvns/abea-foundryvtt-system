---
title: "FormInputConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.FormInputConfig.html"
category: "interfaces"
---

# Interface FormInputConfig<FormInputValue>

interface FormInputConfig<[FormInputValue](#forminputvalue) = unknown> {  
Â Â Â Â [aria](#aria)?: Record<string, string>;  
Â Â Â Â [autofocus](#autofocus)?: boolean;  
Â Â Â Â [classes](#classes)?: string;  
Â Â Â Â [dataset](#dataset)?: Record<string, string>;  
Â Â Â Â [disabled](#disabled)?: boolean;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [input](#input)?: any;  
Â Â Â Â [localize](#localize)?: boolean;  
Â Â Â Â [model](#model)?: any;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [named](#named)?: boolean;  
Â Â Â Â [placeholder](#placeholder)?: string;  
Â Â Â Â [readonly](#readonly)?: boolean;  
Â Â Â Â [required](#required)?: boolean;  
Â Â Â Â [rootId](#rootid)?: string;  
Â Â Â Â [value](#value)?: [FormInputValue](#forminputvalue);  
}

#### Type Parameters

* FormInputValue = unknown

##### Index

### Properties

[aria?](#aria)
[autofocus?](#autofocus)
[classes?](#classes)
[dataset?](#dataset)
[disabled?](#disabled)
[id?](#id)
[input?](#input)
[localize?](#localize)
[model?](#model)
[name](#name)
[named?](#named)
[placeholder?](#placeholder)
[readonly?](#readonly)
[required?](#required)
[rootId?](#rootid)
[value?](#value)

## Properties

### `Optional`aria

aria?: Record<string, string>

Aria attributes to assign to the input

### `Optional`autofocus

autofocus?: boolean

Is the field autofocused?

### `Optional`classes

classes?: string

Space-delimited class names to apply to the input.

### `Optional`dataset

dataset?: Record<string, string>

Additional dataset attributes to assign to the input

### `Optional`disabled

disabled?: boolean

Is the field disabled?

### `Optional`id

id?: string

An id to assign to the element

### `Optional`input

input?: any

### `Optional`localize

localize?: boolean

Localize values of this field?

### `Optional`model

model?: any

The DataModel instance the field belongs to

### name

name: string

The name of the form element

### `Optional`named

named?: boolean

Whether the element should be named in the form. If false, the element
will be given a name via data attribute only.

### `Optional`placeholder

placeholder?: string

A placeholder value, if supported by the element type

### `Optional`readonly

readonly?: boolean

Is the field readonly?

### `Optional`required

required?: boolean

Is the field required?

### `Optional`rootId

rootId?: string

Some parent CSS id within which field names are unique. If provided,
this root ID is used to automatically assign "id" attributes to
input elements and "for" attributes to corresponding labels.

### `Optional`value

value?: [FormInputValue](#forminputvalue)

The current value of the form element