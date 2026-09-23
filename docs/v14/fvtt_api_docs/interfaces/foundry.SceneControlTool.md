---
title: "SceneControlTool | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SceneControlTool.html"
category: "interfaces"
---

# Interface SceneControlTool

The data structure for a single tool in the [SceneControl#tools](foundry.SceneControl.md#tools) record.

interface SceneControlTool {  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [button](#button)?: boolean;  
Â Â Â Â [control](#control)?: boolean;  
Â Â Â Â [createData](#createdata)?: object;  
Â Â Â Â [creation](#creation)?: boolean;  
Â Â Â Â [icon](#icon): string;  
Â Â Â Â [interaction](#interaction)?: boolean;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [onChange](#onchange)?: (event: Event, active: boolean) => void;  
Â Â Â Â [order](#order): number;  
Â Â Â Â [shapeData](#shapedata)?: object;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [toggle](#toggle)?: boolean;  
Â Â Â Â [toolclip](#toolclip)?: [ToolclipConfiguration](foundry.ToolclipConfiguration.md);  
Â Â Â Â [visible](#visible)?: boolean;  
}

##### Index

### Properties

[active?](#active)
[button?](#button)
[control?](#control)
[createData?](#createdata)
[creation?](#creation)
[icon](#icon)
[interaction?](#interaction)
[name](#name)
[onChange?](#onchange)
[order](#order)
[shapeData?](#shapedata)
[title](#title)
[toggle?](#toggle)
[toolclip?](#toolclip)
[visible?](#visible)

## Properties

### `Optional`active

active?: boolean

Is the tool the currently the active one? Not applicable to toggles or buttons.

### `Optional`button

button?: boolean

Is the tool a "button" in the sense of immediately resolving on click without
becoming the active tool?

### `Optional`control

control?: boolean

Does this tool allow placeables to be controlled?

### `Optional`createData

createData?: object

Default creation data

### `Optional`creation

creation?: boolean

Does this tool create placeables?

### icon

icon: string

One or more icon classes for the tool, typically Font Awesome classes such as
"fa-solid fa-face-smile"

### `Optional`interaction

interaction?: boolean

Does this tool allow interaction with placeables?

### name

name: string

An identifier for the tool, unique among the tools of its SceneControl

### `Optional`onChange

onChange?: (event: Event, active: boolean) => void

A callback invoked when the tool is activated or
deactivated

### order

order: number

An integer indicating the tool's order, with 0 being at the top

### `Optional`shapeData

shapeData?: object

The data of the shape this tool creates

### title

title: string

A title for the tool: can be a localization path

### `Optional`toggle

toggle?: boolean

Is the tool an on-or-off toggle?

### `Optional`toolclip

toolclip?: [ToolclipConfiguration](foundry.ToolclipConfiguration.md)

Configuration for rendering the tool's toolclip

### `Optional`visible

visible?: boolean

Whether the tool should be visible to the current User