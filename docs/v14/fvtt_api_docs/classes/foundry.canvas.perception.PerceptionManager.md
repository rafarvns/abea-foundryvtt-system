---
title: "PerceptionManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.perception.PerceptionManager.html"
category: "classes"
---

# Class PerceptionManager

A helper class which manages the refresh workflow for perception layers on the canvas.
This controls the logic which batches multiple requested updates to minimize the amount of work required.
A singleton instance is available as [foundry.canvas.Canvas#perception](foundry.canvas.Canvas.md#perception).

##### Index

### Properties

[renderFlags](#renderflags)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Methods

[applyRenderFlags](#applyrenderflags)
[initialize](#initialize)
[update](#update)

## Properties

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from RenderFlagsMixin().renderFlags

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "PERCEPTION"

Overrides RenderFlagsMixin().RENDER\_FLAG\_PRIORITY

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â initializeDarknessSources: {  
Â Â Â Â Â Â Â Â deprecated: { message: string; since: number; until: number };  
Â Â Â Â Â Â Â Â propagate: string[];  
Â Â Â Â };  
Â Â Â Â initializeLighting: { propagate: string[] };  
Â Â Â Â initializeLightSources: { propagate: string[] };  
Â Â Â Â initializeSounds: { propagate: string[] };  
Â Â Â Â initializeVision: { propagate: string[] };  
Â Â Â Â initializeVisionModes: { propagate: string[] };  
Â Â Â Â refreshEdges: {  
Â Â Â Â Â Â Â Â deprecated: { message: string; since: number; until: number };  
Â Â Â Â };  
Â Â Â Â refreshLighting: { propagate: string[] };  
Â Â Â Â refreshLightSources: {};  
Â Â Â Â refreshOccludedSurfaces: { propagate: string[] };  
Â Â Â Â refreshOcclusion: { propagate: string[] };  
Â Â Â Â refreshOcclusionMask: {};  
Â Â Â Â refreshOcclusionStates: { propagate: string[] };  
Â Â Â Â refreshPrimary: {};  
Â Â Â Â refreshSounds: {};  
Â Â Â Â refreshVision: { propagate: string[] };  
Â Â Â Â refreshVisionSources: {};  
Â Â Â Â soundFadeDuration: {};  
} = ...

#### Type Declaration

* ##### initializeDarknessSources: { Â Â Â Â deprecated: { message: string; since: number; until: number }; Â Â Â Â propagate: string[]; }

  #### Deprecated

  since v13
* ##### initializeLighting: { propagate: string[] }
* ##### initializeLightSources: { propagate: string[] }
* ##### initializeSounds: { propagate: string[] }
* ##### initializeVision: { propagate: string[] }
* ##### initializeVisionModes: { propagate: string[] }
* ##### refreshEdges: { deprecated: { message: string; since: number; until: number } }

  #### Deprecated

  since v14
* ##### refreshLighting: { propagate: string[] }
* ##### refreshLightSources: {}
* ##### refreshOccludedSurfaces: { propagate: string[] }
* ##### refreshOcclusion: { propagate: string[] }
* ##### refreshOcclusionMask: {}
* ##### refreshOcclusionStates: { propagate: string[] }
* ##### refreshPrimary: {}
* ##### refreshSounds: {}
* ##### refreshVision: { propagate: string[] }
* ##### refreshVisionSources: {}
* ##### soundFadeDuration: {}

Overrides RenderFlagsMixin().RENDER\_FLAGS

## Methods

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Overrides RenderFlagsMixin().applyRenderFlags

### initialize

* initialize(): void

  A helper function to perform an immediate initialization plus incremental refresh.

  #### Returns void

### update

* update(flags: object): void

  Update perception manager flags which configure which behaviors occur on the next frame render.

  #### Parameters

  + flags: object

    Flag values (true) to assign where the keys belong to PerceptionManager.FLAGS

  #### Returns void