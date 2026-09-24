---
title: "FullCanvasObjectMixin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.containers.FullCanvasObjectMixin.html"
category: "functions"
---

# Function FullCanvasObjectMixin

* FullCanvasObjectMixin(Base: any): typeof FullCanvasObject

  Augment any PIXI.DisplayObject to assume bounds that are always aligned with the full visible screen.
  The bounds of this container do not depend on its children but always fill the entire canvas.

  #### Parameters

  + Base: any

    Any PIXI DisplayObject subclass

  #### Returns typeof FullCanvasObject