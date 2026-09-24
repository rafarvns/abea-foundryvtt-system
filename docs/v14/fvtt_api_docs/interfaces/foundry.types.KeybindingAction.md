---
title: "KeybindingAction | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.KeybindingAction.html"
category: "interfaces"
---

# Interface KeybindingAction

An action that can occur when a key is pressed

interface KeybindingAction {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [key](#key): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [onDown](#ondown): Function;  
Â Â Â Â [onUp](#onup): Function;  
Â Â Â Â [optionalModifiers](#optionalmodifiers): string[];  
Â Â Â Â [order](#order): number;  
Â Â Â Â [precedence](#precedence): number;  
Â Â Â Â [repeat](#repeat): boolean;  
Â Â Â Â [requiredModifiers](#requiredmodifiers): string[];  
Â Â Â Â [restricted](#restricted): boolean;  
}

##### Index

### Properties

[action](#action)
[key](#key)
[name](#name)
[onDown](#ondown)
[onUp](#onup)
[optionalModifiers](#optionalmodifiers)
[order](#order)
[precedence](#precedence)
[repeat](#repeat)
[requiredModifiers](#requiredmodifiers)
[restricted](#restricted)

## Properties

### action

action: string

The namespaced machine identifier of the Action

### key

key: string

The Keyboard key

### name

name: string

The human-readable name

### onDown

onDown: Function

The handler that executes onDown

### onUp

onUp: Function

The handler that executes onUp

### optionalModifiers

optionalModifiers: string[]

Optional (reserved) modifiers

### order

order: number

The registration order

### precedence

precedence: number

The registration precedence

### repeat

repeat: boolean

If True, allows Repeat events to execute this Action's onDown

### requiredModifiers

requiredModifiers: string[]

Required modifiers

### restricted

restricted: boolean

If true, only a GM can execute this Action