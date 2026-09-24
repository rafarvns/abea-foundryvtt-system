---
title: "CanvasViewPosition | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasViewPosition.html"
category: "interfaces"
---

# Interface CanvasViewPosition

interface CanvasViewPosition {  
Â Â Â Â [level](#level): string | null;  
Â Â Â Â [scale](#scale): number;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[level](#level)
[scale](#scale)
[x](#x)
[y](#y)

## Properties

### level

level: string | null

The last-viewed level ID for the scene.

### scale

scale: number

The zoom level which becomes `stage.scale.x` and `y`

### x

x: number

The x-coordinate which becomes `stage.pivot.x`

### y

y: number

The y-coordinate which becomes `stage.pivot.y`