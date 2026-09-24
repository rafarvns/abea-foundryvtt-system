---
title: "ProseMirrorMenuItem | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.html"
category: "interfaces"
---

# Interface ProseMirrorMenuItem

interface ProseMirrorMenuItem {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [attrs](#attrs)?: object;  
Â Â Â Â [class](#class)?: string;  
Â Â Â Â [cmd](#cmd)?: [ProseMirrorCommand](../types/foundry.prosemirror.types.ProseMirrorCommand.md);  
Â Â Â Â [group](#group)?: number;  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [mark](#mark)?: MarkType;  
Â Â Â Â [menu](#menu)?: string;  
Â Â Â Â [node](#node)?: NodeType;  
Â Â Â Â [priority](#priority)?: number;  
Â Â Â Â [style](#style)?: string;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [weight](#weight)?: number;  
}

##### Index

### Properties

[action](#action)
[active?](#active)
[attrs?](#attrs)
[class?](#class)
[cmd?](#cmd)
[group?](#group)
[icon?](#icon)
[mark?](#mark)
[menu?](#menu)
[node?](#node)
[priority?](#priority)
[style?](#style)
[title](#title)
[weight?](#weight)

## Properties

### action

action: string

A string identifier for this menu item.

### `Optional`active

active?: boolean

Whether the current item is active under the given selection or cursor.

### `Optional`attrs

attrs?: object

An object of attributes for the node or mark.

### `Optional`class

class?: string

An optional class to apply to the menu item.

### `Optional`cmd

cmd?: [ProseMirrorCommand](../types/foundry.prosemirror.types.ProseMirrorCommand.md)

The command to run when the menu item is clicked.

### `Optional`group

group?: number

Entries with the same group number will be grouped together in the drop-down.
Lower-numbered groups appear higher in the list.

### `Optional`icon

icon?: string

The menu item's icon HTML.

### `Optional`mark

mark?: MarkType

The mark to apply to the selected text.

### `Optional`menu

menu?: string

An associated menu item that this entry collapses under. When this entry is
visible, its associated menu item is hidden.

### `Optional`node

node?: NodeType

The node to wrap the selected text in.

### `Optional`priority

priority?: number

A numeric priority which determines whether this item is displayed as the
dropdown title. Lower priority takes precedence.

### `Optional`style

style?: string

An optional style to apply to the title text.

### title

title: string

The description of the menu item.

### `Optional`weight

weight?: number

The relative importance of an entry. Lower-weight entries are collapsed under
menus before higher-weight entries when the viewport is constrained. Entries
with no weight are never collapsed.