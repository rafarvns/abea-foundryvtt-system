---
title: "_CanvasVisionContainer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types._CanvasVisionContainer.html"
category: "interfaces"
---

# Interface \_CanvasVisionContainer

interface \_CanvasVisionContainer {  
Â Â Â Â [darkness](#darkness): [CanvasVisionContainerDarkness](../types/foundry.canvas.layers.types.CanvasVisionContainerDarkness.md);  
Â Â Â Â [light](#light): [CanvasVisionContainerLight](../types/foundry.canvas.layers.types.CanvasVisionContainerLight.md);  
Â Â Â Â [sight](#sight): [CanvasVisionContainerSight](../types/foundry.canvas.layers.types.CanvasVisionContainerSight.md);  
}

##### Index

### Properties

[darkness](#darkness)
[light](#light)
[sight](#sight)

## Properties

### darkness

darkness: [CanvasVisionContainerDarkness](../types/foundry.canvas.layers.types.CanvasVisionContainerDarkness.md)

Areas erased by darkness sources.

### light

light: [CanvasVisionContainerLight](../types/foundry.canvas.layers.types.CanvasVisionContainerLight.md)

Areas visible because of light sources and light perception.

### sight

sight: [CanvasVisionContainerSight](../types/foundry.canvas.layers.types.CanvasVisionContainerSight.md)

Areas visible because of FOV of vision sources.