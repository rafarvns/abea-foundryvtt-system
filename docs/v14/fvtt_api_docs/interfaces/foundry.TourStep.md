---
title: "TourStep | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TourStep.html"
category: "interfaces"
---

# Interface TourStep

A step in a Tour

interface TourStep {  
Â Â Â Â [content](#content): string;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [layer](#layer)?: string;  
Â Â Â Â [restricted](#restricted)?: boolean;  
Â Â Â Â [selector](#selector)?: string;  
Â Â Â Â [sidebarTab](#sidebartab)?: string;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [tool](#tool)?: string;  
Â Â Â Â [tooltipDirection](#tooltipdirection)?: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN";  
}

##### Index

### Properties

[content](#content)
[id](#id)
[layer?](#layer)
[restricted?](#restricted)
[selector?](#selector)
[sidebarTab?](#sidebartab)
[title](#title)
[tool?](#tool)
[tooltipDirection?](#tooltipdirection)

## Properties

### content

content: string

Raw HTML content displayed during the step

### id

id: string

A machine-friendly id of the Tour Step

### `Optional`layer

layer?: string

Activates a particular canvas layer and its respective control group.
Usable in `CanvasTour` instances.

### `Optional`restricted

restricted?: boolean

Whether the Step is restricted to the GM only. Defaults to false.

### `Optional`selector

selector?: string

A DOM selector which denotes an element to highlight during this step.
If omitted, the step is displayed in the center of the screen.

### `Optional`sidebarTab

sidebarTab?: string

Activates a particular sidebar tab. Usable in `SidebarTour` instances.

### title

title: string

The title of the step, displayed in the tooltip header

### `Optional`tool

tool?: string

Activates a particular tool. Usable in `CanvasTour` instances.

### `Optional`tooltipDirection

tooltipDirection?: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN"

How the tooltip for the step should be displayed
relative to the target element. If omitted, the best direction will
be attempted to be auto-selected.