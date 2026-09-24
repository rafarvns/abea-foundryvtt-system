---
title: "Wall | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Wall.html"
category: "variables"
---

# Variable Wall`Const`

Wall: {  
Â Â Â Â animationTypes: Record<string, [WallDoorAnimationConfig](../interfaces/CONFIG.WallDoorAnimationConfig.md)>;  
Â Â Â Â documentClass: typeof [WallDocument](../classes/foundry.documents.WallDocument.md);  
Â Â Â Â doorSounds: Record<string, [WallDoorSound](../interfaces/CONFIG.WallDoorSound.md)>;  
Â Â Â Â objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](../classes/foundry.canvas.placeables.Wall.md);  
Â Â Â Â sidebar: { applicationClass: typeof [WallTab](../classes/foundry.applications.sidebar.tabs.WallTab.md); order: number };  
Â Â Â Â textureGridSize: number;  
Â Â Â Â thresholdAttenuationMultiplier: number;  
} = ...

Configuration for the Wall embedded document type and its representation on the game Canvas

#### Type Declaration

* ##### animationTypes: Record<string, [WallDoorAnimationConfig](../interfaces/CONFIG.WallDoorAnimationConfig.md)>

  The set of animation types that are supported for Wall door animations.
* ##### documentClass: typeof [WallDocument](../classes/foundry.documents.WallDocument.md)
* ##### doorSounds: Record<string, [WallDoorSound](../interfaces/CONFIG.WallDoorSound.md)>
* ##### objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Wall](../classes/foundry.canvas.placeables.Wall.md)
* ##### sidebar: { applicationClass: typeof [WallTab](../classes/foundry.applications.sidebar.tabs.WallTab.md); order: number }
* ##### textureGridSize: number

  A default grid size in pixels which is used for rendering DoorMesh sizing.
* ##### thresholdAttenuationMultiplier: number