---
title: "KeyboardEventContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.KeyboardEventContext.html"
category: "interfaces"
---

# Interface KeyboardEventContext

A keyboard event context

interface KeyboardEventContext {  
Â Â Â Â [action](#action)?: string;  
Â Â Â Â [event](#event): KeyboardEvent;  
Â Â Â Â [hasModifier](#hasmodifier): boolean;  
Â Â Â Â [isAlt](#isalt): boolean;  
Â Â Â Â [isControl](#iscontrol): boolean;  
Â Â Â Â [isShift](#isshift): boolean;  
Â Â Â Â [key](#key): string;  
Â Â Â Â [logicalKey](#logicalkey): string;  
Â Â Â Â [modifiers](#modifiers): string[];  
Â Â Â Â [repeat](#repeat): boolean;  
Â Â Â Â [up](#up): boolean;  
}

##### Index

### Properties

[action?](#action)
[event](#event)
[hasModifier](#hasmodifier)
[isAlt](#isalt)
[isControl](#iscontrol)
[isShift](#isshift)
[key](#key)
[logicalKey](#logicalkey)
[modifiers](#modifiers)
[repeat](#repeat)
[up](#up)

## Properties

### `Optional`action

action?: string

The executing Keybinding Action. May be undefined until the action is known.

### event

event: KeyboardEvent

The originating keypress event

### hasModifier

hasModifier: boolean

Are any of the modifiers being pressed

### isAlt

isAlt: boolean

Is the Alt modifier being pressed

### isControl

isControl: boolean

Is the Control or Meta modifier being processed

### isShift

isShift: boolean

Is the Shift modifier being pressed

### key

key: string

The normalized string key, such as "KeyA"

### logicalKey

logicalKey: string

The logical string key, such as "a"

### modifiers

modifiers: string[]

A list of string modifiers applied to this context, such as `["CONTROL"]`

### repeat

repeat: boolean

True if the given key is being held down such that it is automatically repeating.

### up

up: boolean

True if the Key is Up, else False if down