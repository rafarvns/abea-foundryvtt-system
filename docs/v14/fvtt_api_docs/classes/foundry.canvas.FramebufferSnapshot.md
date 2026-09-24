---
title: "FramebufferSnapshot | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.FramebufferSnapshot.html"
category: "classes"
---

# Class FramebufferSnapshot

Provide the necessary methods to get a snapshot of the framebuffer into a render texture.
Class meant to be used as a singleton.
Created with the precious advices of dev7355608.

##### Index

### Properties

[framebufferTexture](#framebuffertexture)

### Methods

[getFramebufferTexture](#getframebuffertexture)

## Properties

### framebufferTexture

framebufferTexture: RenderTexture

The RenderTexture that is the render destination for the framebuffer snapshot.

## Methods

### getFramebufferTexture

* getFramebufferTexture(renderer: Renderer): RenderTexture

  Get the framebuffer texture snapshot.

  #### Parameters

  + renderer: Renderer

    The renderer for this context.

  #### Returns RenderTexture

  The framebuffer snapshot.