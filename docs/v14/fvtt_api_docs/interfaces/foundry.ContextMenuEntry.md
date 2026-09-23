---
title: "ContextMenuEntry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ContextMenuEntry.html"
category: "interfaces"
---

# Interface ContextMenuEntry

interface ContextMenuEntry {  
Â Â Â Â [classes](#classes)?: string;  
Â Â Â Â [group](#group)?: string;  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [onClick](#onclick)?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md);  
Â Â Â Â [visible](#visible)?: boolean | [ContextMenuCondition](../types/foundry.ContextMenuCondition.md);  
}

##### Index

### Properties

[classes?](#classes)
[group?](#group)
[icon?](#icon)
[label](#label)
[onClick?](#onclick)
[visible?](#visible)

## Properties

### `Optional`classes

classes?: string

Additional CSS classes to apply to this menu item.

### `Optional`group

group?: string

An identifier for a group this entry belongs to.

### `Optional`icon

icon?: string

A string containing a className. A full HTML element may also be
provided.

### label

label: string

The context menu label. Can be localized.

### `Optional`onClick

onClick?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

The function to call when the menu item is clicked.

### `Optional`visible

visible?: boolean | [ContextMenuCondition](../types/foundry.ContextMenuCondition.md)

A function to call or boolean value to determine if this entry
appears in the menu.