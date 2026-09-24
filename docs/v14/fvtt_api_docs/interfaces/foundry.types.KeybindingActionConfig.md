---
title: "KeybindingActionConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.KeybindingActionConfig.html"
category: "interfaces"
---

# Interface KeybindingActionConfig

A Client Keybinding Action Configuration

interface KeybindingActionConfig {  
Â Â Â Â [editable](#editable)?: [KeybindingActionBinding](foundry.types.KeybindingActionBinding.md)[];  
Â Â Â Â [hint](#hint)?: string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [namespace](#namespace)?: string;  
Â Â Â Â [onDown](#ondown)?: (context: [KeyboardEventContext](foundry.types.KeyboardEventContext.md)) => boolean | void;  
Â Â Â Â [onUp](#onup)?: (context: [KeyboardEventContext](foundry.types.KeyboardEventContext.md)) => boolean | void;  
Â Â Â Â [order](#order)?: number;  
Â Â Â Â [precedence](#precedence)?: number;  
Â Â Â Â [repeat](#repeat)?: boolean;  
Â Â Â Â [reservedModifiers](#reservedmodifiers)?: string[];  
Â Â Â Â [restricted](#restricted)?: boolean;  
Â Â Â Â [uneditable](#uneditable)?: [KeybindingActionBinding](foundry.types.KeybindingActionBinding.md)[];  
}

##### Index

### Properties

[editable?](#editable)
[hint?](#hint)
[name](#name)
[namespace?](#namespace)
[onDown?](#ondown)
[onUp?](#onup)
[order?](#order)
[precedence?](#precedence)
[repeat?](#repeat)
[reservedModifiers?](#reservedmodifiers)
[restricted?](#restricted)
[uneditable?](#uneditable)

## Properties

### `Optional`editable

editable?: [KeybindingActionBinding](foundry.types.KeybindingActionBinding.md)[]

The default bindings that can be changed by the user.

### `Optional`hint

hint?: string

An additional human-readable hint.

### name

name: string

The human-readable name.

### `Optional`namespace

namespace?: string

The namespace within which the action was registered

### `Optional`onDown

onDown?: (context: [KeyboardEventContext](foundry.types.KeyboardEventContext.md)) => boolean | void

A function to execute when a key down event occurs.
If True is returned, the event is consumed and no further
keybinds execute.

### `Optional`onUp

onUp?: (context: [KeyboardEventContext](foundry.types.KeyboardEventContext.md)) => boolean | void

A function to execute when a key up event occurs. If True is
returned, the event is consumed and no further keybinds execute.

### `Optional`order

order?: number

The recorded registration order of the action.

### `Optional`precedence

precedence?: number

The preferred precedence of running this Keybinding Action.

### `Optional`repeat

repeat?: boolean

If True, allows Repeat events to execute the Action's onDown.
Defaults to false.

### `Optional`reservedModifiers

reservedModifiers?: string[]

Modifiers such as `["CONTROL"]` that can be also pressed when
executing this Action. Prevents using one of these modifiers as
a Binding.

### `Optional`restricted

restricted?: boolean

If true, only a GM can edit and execute this Action.

### `Optional`uneditable

uneditable?: [KeybindingActionBinding](foundry.types.KeybindingActionBinding.md)[]

The default bindings that can never be changed nor removed.