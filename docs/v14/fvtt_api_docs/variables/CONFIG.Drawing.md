---
title: "Drawing | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Drawing.html"
category: "variables"
---

# Variable Drawing`Const`

Drawing: {  
Â Â Â Â documentClass: typeof [DrawingDocument](../classes/foundry.documents.DrawingDocument.md);  
Â Â Â Â hudClass: typeof [DrawingHUD](../classes/foundry.applications.hud.DrawingHUD.md);  
Â Â Â Â objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](../classes/foundry.canvas.placeables.Drawing.md);  
Â Â Â Â sidebar: { applicationClass: typeof [DrawingTab](../classes/foundry.applications.sidebar.tabs.DrawingTab.md); order: number };  
} = ...

Configuration for the Drawing embedded document type and its representation on the game Canvas

#### Type Declaration

* ##### documentClass: typeof [DrawingDocument](../classes/foundry.documents.DrawingDocument.md)
* ##### hudClass: typeof [DrawingHUD](../classes/foundry.applications.hud.DrawingHUD.md)
* ##### objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Drawing](../classes/foundry.canvas.placeables.Drawing.md)
* ##### sidebar: { applicationClass: typeof [DrawingTab](../classes/foundry.applications.sidebar.tabs.DrawingTab.md); order: number }