---
title: "DialogV1Button | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV1Button.html"
category: "interfaces"
---

# Interface DialogV1Button

interface DialogV1Button {  
Â Â Â Â [callback](#callback)?: (arg0: jQuery) => any;  
Â Â Â Â [disabled](#disabled): boolean;  
Â Â Â Â [icon](#icon): string;  
Â Â Â Â [label](#label): string;  
}

##### Index

### Properties

[callback?](#callback)
[disabled](#disabled)
[icon](#icon)
[label](#label)

## Properties

### `Optional`callback

callback?: (arg0: jQuery) => any

A callback function that fires when the button is clicked

### disabled

disabled: boolean

Whether the button is disabled

### icon

icon: string

A Font Awesome icon for the button

### label

label: string

The label for the button