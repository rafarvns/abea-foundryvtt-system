---
title: "ContextMenuOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ContextMenuOptions.html"
category: "interfaces"
---

# Interface ContextMenuOptions

interface ContextMenuOptions {  
Â Â Â Â [closeOnSelect](#closeonselect)?: boolean;  
Â Â Â Â [eventName](#eventname)?: string;  
Â Â Â Â [fixed](#fixed)?: boolean;  
Â Â Â Â [jQuery](#jquery)?: boolean;  
Â Â Â Â [onClose](#onclose)?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md);  
Â Â Â Â [onOpen](#onopen)?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md);  
Â Â Â Â [relative](#relative)?: "target" | "cursor";  
}

##### Index

### Properties

[closeOnSelect?](#closeonselect)
[eventName?](#eventname)
[fixed?](#fixed)
[jQuery?](#jquery)
[onClose?](#onclose)
[onOpen?](#onopen)
[relative?](#relative)

## Properties

### `Optional`closeOnSelect

closeOnSelect?: boolean

Close the context menu when one of the options is selected.

### `Optional`eventName

eventName?: string

Optionally override the triggering event which can spawn the menu. If
the menu is using fixed positioning, this event must be a MouseEvent.

### `Optional`fixed

fixed?: boolean

If true, the context menu is given a fixed position rather than being
injected into the target.

### `Optional`jQuery

jQuery?: boolean

If true, callbacks will be passed jQuery objects instead of HTMLElement
instances.

### `Optional`onClose

onClose?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is closed.

### `Optional`onOpen

onOpen?: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is opened.

### `Optional`relative

relative?: "target" | "cursor"

For fixed context menus, control whether the menu is positioned
relative to the target or to the mouse cursor. Non-fixed context
menus are always positioned relative to the target.