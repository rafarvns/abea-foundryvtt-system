---
title: "SceneControlsActivationChange | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SceneControlsActivationChange.html"
category: "interfaces"
---

# Interface SceneControlsActivationChange

The data structure provided to the [SceneControl#onChange](foundry.SceneControl.md#onchange) callback.

interface SceneControlsActivationChange {  
Â Â Â Â [controlChange](#controlchange): string;  
Â Â Â Â [event](#event): Event;  
Â Â Â Â [toggleChanges](#togglechanges): Record<string, boolean>;  
Â Â Â Â [toolChange](#toolchange): string;  
}

##### Index

### Properties

[controlChange](#controlchange)
[event](#event)
[toggleChanges](#togglechanges)
[toolChange](#toolchange)

## Properties

### controlChange

controlChange: string

### event

event: Event

### toggleChanges

toggleChanges: Record<string, boolean>

### toolChange

toolChange: string