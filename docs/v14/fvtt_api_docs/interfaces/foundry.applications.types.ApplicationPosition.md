---
title: "ApplicationPosition | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationPosition.html"
category: "interfaces"
---

# Interface ApplicationPosition

interface ApplicationPosition {  
Â Â Â Â [height](#height): number | "auto";  
Â Â Â Â [left](#left): number;  
Â Â Â Â [scale](#scale): number;  
Â Â Â Â [top](#top): number;  
Â Â Â Â [width](#width): number | "auto";  
Â Â Â Â [zIndex](#zindex): number;  
}

##### Index

### Properties

[height](#height)
[left](#left)
[scale](#scale)
[top](#top)
[width](#width)
[zIndex](#zindex)

## Properties

### height

height: number | "auto"

Un-scaled pixels in height or "auto"

### left

left: number

Window offset pixels from left

### scale

scale: number

A numeric scaling factor applied to application dimensions

### top

top: number

Window offset pixels from top

### width

width: number | "auto"

Un-scaled pixels in width or "auto"

### zIndex

zIndex: number

A z-index of the application relative to siblings