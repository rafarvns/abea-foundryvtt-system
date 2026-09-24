---
title: "DragDropConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DragDropConfiguration.html"
category: "interfaces"
---

# Interface DragDropConfiguration

interface DragDropConfiguration {  
Â Â Â Â [callbacks](#callbacks)?: Record<  
Â Â Â Â Â Â Â Â | "dragstart"  
Â Â Â Â Â Â Â Â | "drop"  
Â Â Â Â Â Â Â Â | "dragover"  
Â Â Â Â Â Â Â Â | "dragenter"  
Â Â Â Â Â Â Â Â | "dragleave"  
Â Â Â Â Â Â Â Â | "dragend",  
Â Â Â Â Â Â Â Â (event: DragEvent) => void,  
Â Â Â Â >;  
Â Â Â Â [dragSelector](#dragselector)?: string | null;  
Â Â Â Â [dropSelector](#dropselector)?: string | null;  
Â Â Â Â [permissions](#permissions)?: Record<"dragstart" | "drop", (selector: string) => boolean>;  
}

##### Index

### Properties

[callbacks?](#callbacks)
[dragSelector?](#dragselector)
[dropSelector?](#dropselector)
[permissions?](#permissions)

## Properties

### `Optional`callbacks

callbacks?: Record<  
Â Â Â Â | "dragstart"  
Â Â Â Â | "drop"  
Â Â Â Â | "dragover"  
Â Â Â Â | "dragenter"  
Â Â Â Â | "dragleave"  
Â Â Â Â | "dragend",  
Â Â Â Â (event: DragEvent) => void,  
>

Callback functions for each action

### `Optional`dragSelector

dragSelector?: string | null

The CSS selector used to target draggable elements.

### `Optional`dropSelector

dropSelector?: string | null

The CSS selector used to target viable drop targets.

### `Optional`permissions

permissions?: Record<"dragstart" | "drop", (selector: string) => boolean>

Permission tests for each action