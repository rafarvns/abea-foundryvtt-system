---
title: "SceneControl | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SceneControl.html"
category: "interfaces"
---

# Interface SceneControl

The data structure for a set of controls in the [SceneControls#controls](../classes/foundry.applications.ui.SceneControls.md#controls) record.

interface SceneControl {  
Â Â Â Â [activeTool](#activetool)?: string;  
Â Â Â Â [icon](#icon): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [onChange](#onchange)?: (event: Event, active: boolean) => void;  
Â Â Â Â [onToolChange](#ontoolchange)?: (  
Â Â Â Â Â Â Â Â event: Event,  
Â Â Â Â Â Â Â Â tool: [SceneControlTool](foundry.SceneControlTool.md),  
Â Â Â Â Â Â Â Â active: boolean,  
Â Â Â Â ) => void;  
Â Â Â Â [order](#order): number;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [tools](#tools)?: Record<string, [SceneControlTool](foundry.SceneControlTool.md)>;  
Â Â Â Â [visible](#visible)?: boolean;  
}

##### Index

### Properties

[activeTool?](#activetool)
[icon](#icon)
[name](#name)
[onChange?](#onchange)
[onToolChange?](#ontoolchange)
[order](#order)
[title](#title)
[tools?](#tools)
[visible?](#visible)

## Properties

### `Optional`activeTool

activeTool?: string

### icon

icon: string

One or more icon classes for the control, typically Font Awesome classes such as
"fa-solid fa-face-smile"

### name

name: string

A unique identifier for the control

### `Optional`onChange

onChange?: (event: Event, active: boolean) => void

A callback invoked when control set is activated or deactivated

### `Optional`onToolChange

onToolChange?: (event: Event, tool: [SceneControlTool](foundry.SceneControlTool.md), active: boolean) => void

A callback invoked when a tool is activated or deactivated

### order

order: number

An integer indicating the control's order, with 0 being at the top

### title

title: string

A title for the control: can be a localization path

### `Optional`tools

tools?: Record<string, [SceneControlTool](foundry.SceneControlTool.md)>

### `Optional`visible

visible?: boolean

Whether the control should be visible to the current User