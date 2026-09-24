---
title: "_CanvasDimensions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types._CanvasDimensions.html"
category: "interfaces"
---

# Interface \_CanvasDimensions

interface \_CanvasDimensions {  
Â Â Â Â [scale](#scale): { default: number; max: number; min: number };  
Â Â Â Â [uiScale](#uiscale): number;  
}

##### Index

### Properties

[scale](#scale)
[uiScale](#uiscale)

## Properties

### scale

scale: { default: number; max: number; min: number }

The minimum, maximum, and default canvas scale.

### uiScale

uiScale: number

The scaling factor for canvas UI elements.
Based on the normalized grid size (100px).