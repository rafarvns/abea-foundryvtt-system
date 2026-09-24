---
title: "FormGroupConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.FormGroupConfig.html"
category: "interfaces"
---

# Interface FormGroupConfig

interface FormGroupConfig {  
Â Â Â Â [classes](#classes)?: string[];  
Â Â Â Â [hidden](#hidden)?: boolean | "until-found";  
Â Â Â Â [hint](#hint)?: string;  
Â Â Â Â [input](#input): HTMLElement | HTMLCollection;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [localize](#localize)?: boolean;  
Â Â Â Â [rootId](#rootid)?: string;  
Â Â Â Â [stacked](#stacked)?: boolean;  
Â Â Â Â [units](#units)?: string;  
Â Â Â Â [widget](#widget)?: any;  
}

##### Index

### Properties

[classes?](#classes)
[hidden?](#hidden)
[hint?](#hint)
[input](#input)
[label](#label)
[localize?](#localize)
[rootId?](#rootid)
[stacked?](#stacked)
[units?](#units)
[widget?](#widget)

## Properties

### `Optional`classes

classes?: string[]

An array of CSS classes applied to the form group element

### `Optional`hidden

hidden?: boolean | "until-found"

The value of the form group's hidden attribute

### `Optional`hint

hint?: string

Hint text displayed as part of the form group

### input

input: HTMLElement | HTMLCollection

An HTML element or collection of elements which provide the inputs
for the group

### label

label: string

A text label to apply to the form group

### `Optional`localize

localize?: boolean

Should labels or other elements within this form group be
automatically localized?

### `Optional`rootId

rootId?: string

Some parent CSS id within which field names are unique. If provided,
this root ID is used to automatically assign "id" attributes to
input elements and "for" attributes to corresponding labels.

### `Optional`stacked

stacked?: boolean

Is the "stacked" class applied to the form group

### `Optional`units

units?: string

An optional units string which is appended to the label

### `Optional`widget

widget?: any

A custom form group widget function which replaces the default
group HTML generation