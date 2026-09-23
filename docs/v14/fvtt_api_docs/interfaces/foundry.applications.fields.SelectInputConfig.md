---
title: "SelectInputConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.fields.SelectInputConfig.html"
category: "interfaces"
---

# Interface SelectInputConfig

interface SelectInputConfig {  
Â Â Â Â [blank](#blank)?: string;  
Â Â Â Â [groups](#groups)?: string[];  
Â Â Â Â [labelAttr](#labelattr)?: string;  
Â Â Â Â [localize](#localize)?: boolean;  
Â Â Â Â [options](#options): [FormSelectOption](foundry.applications.fields.FormSelectOption.md)[];  
Â Â Â Â [sort](#sort)?: boolean;  
Â Â Â Â [type](#type)?: "single" | "multi" | "checkboxes";  
Â Â Â Â [valueAttr](#valueattr)?: string;  
}

##### Index

### Properties

[blank?](#blank)
[groups?](#groups)
[labelAttr?](#labelattr)
[localize?](#localize)
[options](#options)
[sort?](#sort)
[type?](#type)
[valueAttr?](#valueattr)

## Properties

### `Optional`blank

blank?: string

### `Optional`groups

groups?: string[]

An option to control the order and display of optgroup elements. The order of
strings defines the displayed order of optgroup elements.
A blank string may be used to define the position of ungrouped options.
If not defined, the order of groups corresponds to the order of options.

### `Optional`labelAttr

labelAttr?: string

An alternative label key of the object passed to the options array

### `Optional`localize

localize?: boolean

Localize value labels

### options

options: [FormSelectOption](foundry.applications.fields.FormSelectOption.md)[]

### `Optional`sort

sort?: boolean

Sort options alphabetically by label within groups

### `Optional`type

type?: "single" | "multi" | "checkboxes"

Customize the type of select that is created

### `Optional`valueAttr

valueAttr?: string

An alternative value key of the object passed to the options array