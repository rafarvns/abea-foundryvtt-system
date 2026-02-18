---
title: "CanvasVisibility | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.groups.CanvasVisibility.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [groups](../modules/foundry.canvas.groups.html)
* [CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)

# Class CanvasVisibility

The visibility group which implements dynamic vision, lighting, and fog of war
This group uses an event-driven workflow to perform the minimal required calculation in response to changes.

### Hook Events

* [hookEvents.initializeVisionMode](../functions/hookEvents.initializeVisionMode.html)
* [hookEvents.initializeVisionSources](../functions/hookEvents.initializeVisionSources.html)
* [hookEvents.sightRefresh](../functions/hookEvents.sightRefresh.html)
* [hookEvents.visibilityRefresh](../functions/hookEvents.visibilityRefresh.html)

#### Hierarchy

* CanvasGroup<this>
  + CanvasVisibility

##### Index

### Properties

[explored](foundry.canvas.groups.CanvasVisibility.html#explored)
[layers](foundry.canvas.groups.CanvasVisibility.html#layers)
[lightingVisibility](foundry.canvas.groups.CanvasVisibility.html#lightingvisibility)
[visibilityOverlay](foundry.canvas.groups.CanvasVisibility.html#visibilityoverlay)
[vision](foundry.canvas.groups.CanvasVisibility.html#vision)
[visionModeData](foundry.canvas.groups.CanvasVisibility.html#visionmodedata)
[groupName](foundry.canvas.groups.CanvasVisibility.html#groupname)
[tearDownChildren](foundry.canvas.groups.CanvasVisibility.html#teardownchildren)

### Accessors

[explorationRect](foundry.canvas.groups.CanvasVisibility.html#explorationrect)
[hookName](foundry.canvas.groups.CanvasVisibility.html#hookname)
[initialized](foundry.canvas.groups.CanvasVisibility.html#initialized)
[name](foundry.canvas.groups.CanvasVisibility.html#name)
[needsContainment](foundry.canvas.groups.CanvasVisibility.html#needscontainment)
[textureConfiguration](foundry.canvas.groups.CanvasVisibility.html#textureconfiguration)
[tokenVision](foundry.canvas.groups.CanvasVisibility.html#tokenvision)

### Methods

[\_createVisibilityTestConfig](foundry.canvas.groups.CanvasVisibility.html#_createvisibilitytestconfig)
[\_draw](foundry.canvas.groups.CanvasVisibility.html#_draw)
[\_tearDown](foundry.canvas.groups.CanvasVisibility.html#_teardown)
[draw](foundry.canvas.groups.CanvasVisibility.html#draw)
[initializeSources](foundry.canvas.groups.CanvasVisibility.html#initializesources)
[initializeVisionMode](foundry.canvas.groups.CanvasVisibility.html#initializevisionmode)
[refresh](foundry.canvas.groups.CanvasVisibility.html#refresh)
[refreshVisibility](foundry.canvas.groups.CanvasVisibility.html#refreshvisibility)
[resetExploration](foundry.canvas.groups.CanvasVisibility.html#resetexploration)
[restrictVisibility](foundry.canvas.groups.CanvasVisibility.html#restrictvisibility)
[tearDown](foundry.canvas.groups.CanvasVisibility.html#teardown)
[testVisibility](foundry.canvas.groups.CanvasVisibility.html#testvisibility)
[\_createLayers](foundry.canvas.groups.CanvasVisibility.html#_createlayers)

## Properties

### explored

explored: Container<DisplayObject>

The exploration container which tracks exploration progress.

### layers

layers: Record<string, CanvasLayer>

A mapping of CanvasLayer classes which belong to this group.

Inherited from CanvasGroupMixin(PIXI.Container).layers

### lightingVisibility

lightingVisibility: {  
Â Â Â Â any: boolean;  
Â Â Â Â background: number;  
Â Â Â Â coloration: number;  
Â Â Â Â darkness: number;  
Â Â Â Â illumination: number;  
} = ...

Define whether each lighting layer is enabled, required, or disabled by this vision mode.
The value for each lighting channel is a number in LIGHTING\_VISIBILITY

### visibilityOverlay

visibilityOverlay: Sprite

The optional visibility overlay sprite that should be drawn instead of the unexplored color in the fog of war.

### vision

vision: CanvasVisionContainer

The currently revealed vision.

### visionModeData

visionModeData: {  
Â Â Â Â activeLightingOptions: object;  
Â Â Â Â source: null | [PointVisionSource](foundry.canvas.sources.PointVisionSource.html);  
} = ...

The active vision source data object

### `Static`groupName

groupName: string = "visibility"

Overrides CanvasGroupMixin(PIXI.Container).groupName

### `Static`tearDownChildren

tearDownChildren: boolean = true

If this canvas group should teardown non-layers children.

Inherited from CanvasGroupMixin(PIXI.Container).tearDownChildren

## Accessors

### explorationRect

* set explorationRect(rect: any): void

  Optional overrides for exploration sprite dimensions.

  #### Parameters

  + rect: any

  #### Returns void

### hookName

* get hookName(): string

  The name used by hooks to construct their hook string.
  Note: You should override this getter if hookName should not return the class constructor name.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).hookName

### initialized

* get initialized(): boolean

  A status flag for whether the group initialization workflow has succeeded.

  #### Returns boolean

### name

* get name(): string

  The canonical name of the canvas group is the name of the constructor that is the immediate child of the
  defined base class.

  #### Returns string

  Inherited from CanvasGroupMixin(PIXI.Container).name

### needsContainment

* get needsContainment(): boolean

  `Internal`

  Indicates whether containment filtering is required when rendering vision into a texture.

  #### Returns boolean

### textureConfiguration

* get textureConfiguration(): [CanvasVisibilityTextureConfiguration](../interfaces/foundry.types.CanvasVisibilityTextureConfiguration.html)

  The configured options used for the saved fog-of-war texture.

  #### Returns [CanvasVisibilityTextureConfiguration](../interfaces/foundry.types.CanvasVisibilityTextureConfiguration.html)

### tokenVision

* get tokenVision(): boolean

  Does the currently viewed Scene support Token field of vision?

  #### Returns boolean

## Methods

### \_createVisibilityTestConfig

* \_createVisibilityTestConfig(  
  Â Â Â Â point: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: { object?: null | object; tolerance?: number },  
  ): [CanvasVisibilityTestConfiguration](../interfaces/foundry.types.CanvasVisibilityTestConfiguration.html)

  `Internal`

  Create the visibility test config.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The point in space to test
  + `Optional`options: { object?: null | object; tolerance?: number } = {}

    Additional options which modify visibility testing.

    - ##### `Optional`object?: null | object

      An optional reference to the object whose visibility is being tested
    - ##### `Optional`tolerance?: number

      A numeric radial offset which allows for a non-exact match.
      For example, if tolerance is 2 then the test will pass if the point
      is within 2px of a vision polygon.

  #### Returns [CanvasVisibilityTestConfiguration](../interfaces/foundry.types.CanvasVisibilityTestConfiguration.html)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides CanvasGroupMixin(PIXI.Container).\_draw

### \_tearDown

* \_tearDown(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides CanvasGroupMixin(PIXI.Container).\_tearDown

### draw

* draw(options?: object): Promise<[CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)>

  Draw the canvas group and all its components.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)>

  A Promise which resolves once the group is fully drawn

  Inherited from CanvasGroupMixin(PIXI.Container).draw

### initializeSources

* initializeSources(): void

  Initialize all Token vision sources which are present on this group.

  #### Returns void

### initializeVisionMode

* initializeVisionMode(): void

  Initialize the vision mode.

  #### Returns void

### refresh

* refresh(): void

  Update the display of the visibility group.
  Organize sources into rendering queues and draw lighting containers for each source

  #### Returns void

### refreshVisibility

* refreshVisibility(): void

  Update vision (and fog if necessary)

  #### Returns void

### resetExploration

* resetExploration(): void

  Reset the exploration container with the fog sprite

  #### Returns void

### restrictVisibility

* restrictVisibility(): void

  Restrict the visibility of certain canvas assets (like Tokens or DoorControls) based on the visibility polygon
  These assets should only be displayed if they are visible given the current player's field of view

  #### Returns void

### tearDown

* tearDown(options?: object): Promise<[CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)>

  Remove and destroy all layers from the base canvas.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)>

  Inherited from CanvasGroupMixin(PIXI.Container).tearDown

### testVisibility

* testVisibility(  
  Â Â Â Â point: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: { object?: null | object; tolerance?: number },  
  ): boolean

  Test whether a target point on the Canvas is visible based on the current vision and LOS polygons.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The point in space to test
  + `Optional`options: { object?: null | object; tolerance?: number } = {}

    Additional options which modify visibility testing.

    - ##### `Optional`object?: null | object

      An optional reference to the object whose visibility is being tested
    - ##### `Optional`tolerance?: number

      A numeric radial offset which allows for a non-exact match.
      For example, if tolerance is 2 then the test will pass if the point
      is within 2px of a vision polygon.

  #### Returns boolean

  Whether the point is currently visible.

### `Protected`\_createLayers

* \_createLayers(): {}

  `Protected`

  Create CanvasLayer instances which belong to the canvas group.

  #### Returns {}

  Inherited from CanvasGroupMixin(PIXI.Container).\_createLayers