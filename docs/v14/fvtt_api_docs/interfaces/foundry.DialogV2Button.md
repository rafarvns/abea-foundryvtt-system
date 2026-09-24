---
title: "DialogV2Button | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV2Button.html"
category: "interfaces"
---

# Interface DialogV2Button

interface DialogV2Button {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [callback](#callback)?: [DialogV2ButtonCallback](../types/foundry.DialogV2ButtonCallback.md);  
Â Â Â Â [class](#class)?: string;  
Â Â Â Â [default](#default)?: boolean;  
Â Â Â Â [disabled](#disabled)?: boolean;  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [style](#style)?: Record<string, string>;  
Â Â Â Â [tooltip](#tooltip)?: string;  
Â Â Â Â [type](#type)?: string;  
}

##### Index

### Properties

[action](#action)
[callback?](#callback)
[class?](#class)
[default?](#default)
[disabled?](#disabled)
[icon?](#icon)
[label](#label)
[style?](#style)
[tooltip?](#tooltip)
[type?](#type)

## Properties

### action

action: string

The button action identifier.

### `Optional`callback

callback?: [DialogV2ButtonCallback](../types/foundry.DialogV2ButtonCallback.md)

A function to invoke when the button is clicked. The value returned
from this function will be used as the dialog's submitted value.
Otherwise, the button's identifier is used.

### `Optional`class

class?: string

CSS classes to apply to the button.

### `Optional`default

default?: boolean

Whether this button is autofocused

### `Optional`disabled

disabled?: boolean

Whether the button is disabled.

### `Optional`icon

icon?: string

FontAwesome icon classes.

### label

label: string

The button label. Will be localized.

### `Optional`style

style?: Record<string, string>

CSS style to apply to the button.

### `Optional`tooltip

tooltip?: string

The tooltip of the button.

### `Optional`type

type?: string

The button type.