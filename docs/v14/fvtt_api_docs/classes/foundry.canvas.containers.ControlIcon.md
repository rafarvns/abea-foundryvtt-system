---
title: "ControlIcon | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.ControlIcon.html"
category: "classes"
---

# Class ControlIcon

A generic helper for drawing a standard Control Icon.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[bg](#bg)
[border](#border)
[icon](#icon)
[renderFlags](#renderflags)
[tooltip](#tooltip)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[elevation](#elevation)
[size](#size)
[texture](#texture)

### Methods

[applyRenderFlags](#applyrenderflags)
[destroy](#destroy)
[draw](#draw)
[refresh](#refresh)
[\_clear](#_clear)
[\_draw](#_draw)
[\_refresh](#_refresh)

## Constructors

### constructor

* new ControlIcon(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â borderColor?: ColorSource;  
  Â Â Â Â Â Â Â Â elevation?: number;  
  Â Â Â Â Â Â Â Â size?: number;  
  Â Â Â Â Â Â Â Â texture?: string | Texture<Resource>;  
  Â Â Â Â Â Â Â Â tint?: ColorSource;  
  Â Â Â Â },  
  ): ControlIcon

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â borderColor?: ColorSource;  
    Â Â Â Â elevation?: number;  
    Â Â Â Â size?: number;  
    Â Â Â Â texture?: string | Texture<Resource>;  
    Â Â Â Â tint?: ColorSource;  
    } = {}
    - ##### `Optional`borderColor?: ColorSource

      The border color
    - ##### `Optional`elevation?: number

      The elevation
    - ##### `Optional`size?: number

      The size of the icon
    - ##### `Optional`texture?: string | Texture<Resource>

      The (URL of the) icon texture
    - ##### `Optional`tint?: ColorSource

      The icon tint

  #### Returns ControlIcon

  Overrides RenderFlagsMixin(PIXI.Container).constructor

## Properties

### bg

bg: Graphics

The background of this control icon.

### border

border: Graphics

The border of this control icon.

### icon

icon: Sprite

The icon of this control icon.

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin(PIXI.Container).renderFlags

### tooltip

tooltip: [PreciseText](foundry.canvas.containers.PreciseText.md)

The tooltip of this control icon.

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "INTERFACE"

Overrides RenderFlagsMixin(PIXI.Container).RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: { redraw: { propagate: string[] }; refresh: {} } = ...

Overrides RenderFlagsMixin(PIXI.Container).RENDER\_FLAGS

## Accessors

### elevation

* get elevation(): number

  The elevation of the control icon, which is displayed in its tooltip text.

  #### Returns number

### size

* get size(): number

  The size of the control icon.

  #### Returns number

### texture

* get texture(): string | Texture<Resource>

  The (URL of the) icon texture used by this control icon.

  #### Returns string | Texture<Resource>

## Methods

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Overrides RenderFlagsMixin(PIXI.Container).applyRenderFlags

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### draw

* draw(): Promise<ControlIcon>

  Draw the visualization of this control icon.

  #### Returns Promise<ControlIcon>

### refresh

* refresh(): any

  Refresh the visualization of this control icon.

  #### Returns any

### `Protected`\_clear

* \_clear(): void

  `Protected`

  Clear this control icon.

  #### Returns void

### `Protected`\_draw

* \_draw(): Promise<void>

  `Protected`

  Draw this control icon.

  #### Returns Promise<void>

### `Protected`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the visualization of this control icon.

  #### Returns void