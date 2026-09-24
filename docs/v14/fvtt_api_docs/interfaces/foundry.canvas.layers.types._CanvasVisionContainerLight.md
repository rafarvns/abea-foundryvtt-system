---
title: "_CanvasVisionContainerLight | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types._CanvasVisionContainerLight.html"
category: "interfaces"
---

# Interface \_CanvasVisionContainerLight

interface \_CanvasVisionContainerLight {  
Â Â Â Â [cached](#cached): SpriteMesh;  
Â Â Â Â [mask](#mask): Graphics & { preview: Graphics };  
Â Â Â Â [preview](#preview): Graphics;  
}

##### Index

### Properties

[cached](#cached)
[mask](#mask)
[preview](#preview)

## Properties

### cached

cached: SpriteMesh

The sprite with the texture of FOV of cached light sources.

### mask

mask: Graphics & { preview: Graphics }

The light perception polygons of vision
sources and the FOV of vision sources that
provide vision.

### preview

preview: Graphics

FOV that should not be committed to fog exploration.