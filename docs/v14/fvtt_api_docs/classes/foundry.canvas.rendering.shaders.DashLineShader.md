---
title: "DashLineShader | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.rendering.shaders.DashLineShader.html"
category: "classes"
---

# Class DashLineShader

A modified version of the PIXI.smooth.DashLineShader that supports an offset.

#### Hierarchy

* SmoothGraphicsShader
  + DashLineShader

##### Index

### Constructors

[constructor](#constructor)

## Constructors

### constructor

* new DashLineShader(  
  Â Â Â Â options?: { dash?: number; gap?: number; offset?: number },  
  ): DashLineShader

  #### Parameters

  + `Optional`options: { dash?: number; gap?: number; offset?: number } = {}

    The options

    - ##### `Optional`dash?: number

      The length of the dash
    - ##### `Optional`gap?: number

      The length of the gap
    - ##### `Optional`offset?: number

      The offset of the dashes

  #### Returns DashLineShader

  Overrides PIXI.smooth.SmoothGraphicsShader.constructor