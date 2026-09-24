---
title: "_SceneControlsRenderOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry._SceneControlsRenderOptions.html"
category: "interfaces"
---

# Interface \_SceneControlsRenderOptions

interface \_SceneControlsRenderOptions {  
Â Â Â Â [control](#control)?: string;  
Â Â Â Â [event](#event)?: Event;  
Â Â Â Â [reset](#reset)?: boolean;  
Â Â Â Â [toggles](#toggles)?: Record<string, boolean>;  
Â Â Â Â [tool](#tool)?: string;  
}

##### Index

### Properties

[control?](#control)
[event?](#event)
[reset?](#reset)
[toggles?](#toggles)
[tool?](#tool)

## Properties

### `Optional`control

control?: string

The control set to activate. If undefined, the current control set
remains active

### `Optional`event

event?: Event

An event which prompted a re-render

### `Optional`reset

reset?: boolean

Re-prepare the possible list of controls

### `Optional`toggles

toggles?: Record<string, boolean>

Changes to apply to toggles within the control set

### `Optional`tool

tool?: string

A specific tool to activate. If undefined the current tool or default
tool for the control set becomes active