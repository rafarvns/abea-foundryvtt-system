---
title: "Canvas | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.Canvas.html"
category: "classes"
---

# Class Canvas

The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js
library. The canvas is comprised by an ordered sequence of layers which define rendering groups and collections of
objects that are drawn on the canvas itself.

### Hook Events

[hookEvents.canvasConfig](../functions/hookEvents.canvasConfig.md)
[hookEvents.canvasInit](../functions/hookEvents.canvasInit.md)
[hookEvents.canvasReady](../functions/hookEvents.canvasReady.md)
[hookEvents.canvasPan](../functions/hookEvents.canvasPan.md)
[hookEvents.canvasTearDown](../functions/hookEvents.canvasTearDown.md)

#### Example: Canvas State

```
canvas.ready; // Is the canvas ready for use?  
canvas.scene; // The currently viewed Scene document.  
canvas.dimensions; // The dimensions of the current Scene.
Copy
```

#### Example: Canvas Methods

```
canvas.draw(); // Completely re-draw the game canvas (this is usually unnecessary).  
canvas.pan(x, y, zoom); // Pan the canvas to new coordinates and scale.  
canvas.recenter(); // Re-center the canvas on the currently controlled Token.
Copy
```

##### Index

### Properties

[\_frameId](#_frameid)
[\_mousePositionVisible](#_mousepositionvisible)
[\_viewOptions](#_viewoptions)
[app](#app)
[blurFilters](#blurfilters)
[blurOptions](#bluroptions)
[currentMouseManager](#currentmousemanager)
[effects](#effects)
[environment](#environment)
[fog](#fog)
[fps](#fps)
[hud](#hud)
[initializing](#initializing)
[interface](#interface)
[loading](#loading)
[loadTexturesOptions](#loadtexturesoptions)
[mouseInteractionManager](#mouseinteractionmanager)
[mousePosition](#mouseposition)
[overlay](#overlay)
[pendingRenderFlags](#pendingrenderflags)
[perception](#perception)
[performance](#performance)
[photosensitiveMode](#photosensitivemode)
[previousMousePosition](#previousmouseposition)
[primary](#primary)
[rendered](#rendered)
[root](#root)
[sceneTextures](#scenetextures)
[screenDimensions](#screendimensions)
[snapshot](#snapshot)
[stage](#stage)
[supported](#supported)
[transition](#transition)
[visibility](#visibility)
[visibilityOptions](#visibilityoptions)
[MOUSE\_MOVE\_HANDLER\_PRIORITIES](#mouse_move_handler_priorities)

### Accessors

[activeLayer](#activelayer)
[colors](#colors)
[darknessLevel](#darknesslevel)
[dimensions](#dimensions)
[edges](#edges)
[forceSnapVertices](#forcesnapvertices)
[grid](#grid)
[id](#id)
[initialized](#initialized)
[layers](#layers)
[level](#level)
[manager](#manager)
[masks](#masks)
[mousePositionExplored](#mousepositionexplored)
[mousePositionVisible](#mousepositionvisible)
[ready](#ready)
[scene](#scene)
[layers](#layers-1)

### Methods

[\_configurePerformanceMode](#_configureperformancemode)
[\_constrainView](#_constrainview)
[\_onDragCanvasPan](#_ondragcanvaspan)
[\_onDragRightCancel](#_ondragrightcancel)
[\_onDragRightDrop](#_ondragrightdrop)
[\_onDragRightMove](#_ondragrightmove)
[\_onDragRightStart](#_ondragrightstart)
[\_onMouseWheel](#_onmousewheel)
[\_onResize](#_onresize)
[activateFPSMeter](#activatefpsmeter)
[addBlurFilter](#addblurfilter)
[animatePan](#animatepan)
[canvasCoordinatesFromClient](#canvascoordinatesfromclient)
[clientCoordinatesFromCanvas](#clientcoordinatesfromcanvas)
[createBlurFilter](#createblurfilter)
[deactivateFPSMeter](#deactivatefpsmeter)
[draw](#draw)
[getCollectionLayer](#getcollectionlayer)
[getGLParameter](#getglparameter)
[getLayerByEmbeddedName](#getlayerbyembeddedname)
[highlightObjects](#highlightobjects)
[inferLevelFromElevation](#inferlevelfromelevation)
[initialize](#initialize)
[initializeCanvasPosition](#initializecanvasposition)
[isOffscreen](#isoffscreen)
[pan](#pan)
[ping](#ping)
[recenter](#recenter)
[registerMouseMoveHandler](#registermousemovehandler)
[tearDown](#teardown)
[updateBlur](#updateblur)
[\_determineInitialLevel](#_determineinitiallevel)
[clearContainer](#clearcontainer)
[getRenderTexture](#getrendertexture)
[getSceneManager](#getscenemanager)

## Properties

### `Internal`\_frameId

\_frameId: number = 0

Frame ID. Each frame has its own unique value, incremented each frame.

### `Internal`\_mousePositionVisible

\_mousePositionVisible: boolean = false

### `Internal`\_viewOptions

\_viewOptions: [SceneViewOptions](../interfaces/foundry.documents.types.SceneViewOptions.md) = {}

The view options.

### app

app: Application<ICanvas>

The singleton PIXI.Application instance rendered on the Canvas.

### `Readonly`blurFilters

blurFilters: Set<Filter> = ...

A set of blur filter instances which are modified by the zoom level and the "soft shadows" setting

### blurOptions

blurOptions: {  
Â Â Â Â blurClass: any;  
Â Â Â Â enabled: boolean;  
Â Â Â Â kernels: number;  
Â Â Â Â passes: number;  
Â Â Â Â strength: number;  
}

Configure options passed to initialize blur for the Scene and override normal behavior.
This object can be configured during the canvasInit hook before blur is initialized.

### currentMouseManager

currentMouseManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null = null

A reference to the MouseInteractionManager that is currently controlling pointer-based interaction, or null.

### effects

effects: [EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.md)

The effects Canvas group which modifies the result of the [foundry.canvas.groups.PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.md) by
adding special effects.
This includes lighting, vision, fog of war and related animations.

### environment

environment: [EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.md)

The environment canvas group which render the primary canvas group and the effects canvas group.

#### See

* [Canvas#primary](#primary)
* [Canvas#effects](#effects)

### fog

fog: [FogManager](foundry.canvas.perception.FogManager.md)

The singleton FogManager instance.

### fps

fps: { render: number; values: number[] } = ...

Record framerate performance data.

### hud

hud: [HeadsUpDisplayContainer](foundry.applications.hud.HeadsUpDisplayContainer.md)

The singleton HeadsUpDisplay container which overlays HTML rendering on top of this Canvas.

### initializing

initializing: Promise<void> | null = null

A promise that resolves when the canvas is first initialized and ready.

### interface

interface: [InterfaceCanvasGroup](foundry.canvas.groups.InterfaceCanvasGroup.md)

The interface Canvas group which is rendered above other groups and contains all interactive elements.
The various [foundry.canvas.layers.InteractionLayer](foundry.canvas.layers.InteractionLayer.md) instances of the interface group provide different
control sets for interacting with different types of [foundry.abstract.Document](foundry.abstract.Document.md)s which can be represented
on the Canvas.

### loading

loading: boolean = false

A flag to indicate whether a new Scene is currently being drawn.

### loadTexturesOptions

loadTexturesOptions: { additionalSources: string[]; expireCache: boolean }

Configure options passed to the texture loaded for the Scene.
This object can be configured during the canvasInit hook before textures have been loaded.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md)

The singleton interaction manager instance which handles mouse interaction on the Canvas.

### mousePosition

mousePosition: Point = ...

Position of the mouse on stage.

### overlay

overlay: [OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.md)

The overlay Canvas group which is rendered above other groups and contains elements not bound to stage transform.

### pendingRenderFlags

pendingRenderFlags: {  
Â Â Â Â OBJECTS: Set<RenderFlagObject>;  
Â Â Â Â PERCEPTION: Set<RenderFlagObject>;  
}

Track objects which have pending render flags.

### perception

perception: [PerceptionManager](foundry.canvas.perception.PerceptionManager.md)

A perception manager interface for batching lighting, sight, and sound updates.

### performance

performance: [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.md)

Configured performance settings which affect the behavior of the Canvas and its renderer.

### photosensitiveMode

photosensitiveMode: boolean

Is the photosensitive mode enabled?

### previousMousePosition

previousMousePosition: Point = ...

Previous position of the mouse on stage.

### primary

primary: [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.md)

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a [foundry.canvas.containers.CachedContainer](foundry.canvas.containers.CachedContainer.md)
which is rendered to the Scene as a [foundry.canvas.containers.SpriteMesh](foundry.canvas.containers.SpriteMesh.md).
This allows the rendered result of the Primary Canvas Group to be affected by a
[foundry.canvas.rendering.shaders.BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.md).

### rendered

rendered: [RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.md)

The rendered canvas group which render the environment canvas group and the interface canvas group.

#### See

* [Canvas#environment](#environment)
* [Canvas#interface](#interface)

### root

root: Container<DisplayObject>

The root container

### sceneTextures

sceneTextures: Record<  
Â Â Â Â string,  
Â Â Â Â string  
Â Â Â Â | Texture<Resource>  
Â Â Â Â | Spritesheet<ISpritesheetData>,  
> = {}

Configure the Textures to apply to the Scene.

Textures registered here will be automatically loaded as part of the TextureLoader.loadSceneTextures workflow.
To be loaded, a texture must be added to this record before or during the "canvasInit" hook.

After textures are loaded for the Scene, the values of this record are replaced with direct references to the
PIXI.Textures that were loaded.

### `Readonly`screenDimensions

screenDimensions: number[] = ...

The renderer screen dimensions.

### `Readonly`snapshot

snapshot: [FramebufferSnapshot](foundry.canvas.FramebufferSnapshot.md)

The framenbuffer snapshot.

### stage

stage: Container<DisplayObject>

The primary stage container of the PIXI.Application.

### `Readonly`supported

supported: [CanvasSupportedComponents](../interfaces/foundry.types.CanvasSupportedComponents.md)

A list of supported webGL capabilities and limitations.

### transition

transition: [TransitionContainer](foundry.canvas.TransitionContainer.md)

The transition container specialized in smooth scene transitions

### visibility

visibility: [CanvasVisibility](foundry.canvas.groups.CanvasVisibility.md)

The visibility Canvas group which handles the fog of war overlay by consolidating multiple render textures,
and applying a filter with special effects and blur.

### visibilityOptions

visibilityOptions: { persistentVision: boolean }

Configure options used by the visibility framework for special effects
This object can be configured during the canvasInit hook before visibility is initialized.

### `Static`MOUSE\_MOVE\_HANDLER\_PRIORITIES

MOUSE\_MOVE\_HANDLER\_PRIORITIES: Readonly<{ HIGH: 75; LOW: 25; MEDIUM: 50 }> = ...

Mouse move handler priorities.
number

## Accessors

### activeLayer

* get activeLayer(): [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

  Return a reference to the active Canvas Layer

  #### Returns [InteractionLayer](foundry.canvas.layers.InteractionLayer.md)

### colors

* get colors(): [Color](foundry.utils.Color.md)

  The colors bound to this scene and handled by the color manager.

  #### Returns [Color](foundry.utils.Color.md)

### darknessLevel

* get darknessLevel(): number

  The currently displayed darkness level, which may override the saved Scene value.

  #### Returns number

### dimensions

* get dimensions(): Readonly<[CanvasDimensions](../types/foundry.types.CanvasDimensions.md)> | null

  The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.

  #### Returns Readonly<[CanvasDimensions](../types/foundry.types.CanvasDimensions.md)> | null

### edges

* get edges(): [CanvasEdges](foundry.canvas.geometry.edges.CanvasEdges.md) | null

  A reference to the edges of the currently displayed Level document.

  #### Returns [CanvasEdges](foundry.canvas.geometry.edges.CanvasEdges.md) | null

### forceSnapVertices

* get forceSnapVertices(): boolean

  Force snapping to grid vertices?

  #### Returns boolean

### grid

* get grid(): [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)> | null

  A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.

  #### Returns [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)> | null

### id

* get id(): string | null

  The id of the currently displayed Scene.

  #### Returns string | null

### initialized

* get initialized(): boolean

  A flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.

  #### Returns boolean

### layers

* get layers(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)[]

  An Array of all CanvasLayer instances which are active on the Canvas board

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)[]

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md) | null

  A reference to the currently displayed Level document, or null if the Canvas is currently blank.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md) | null

### manager

* get manager(): [SceneManager](foundry.canvas.SceneManager.md) | null

  A SceneManager instance which adds behaviors to this Scene, or null if there is no manager.

  #### Returns [SceneManager](foundry.canvas.SceneManager.md) | null

### masks

* get masks(): Container<DisplayObject>

  Shortcut to get the masks container from HiddenCanvasGroup.

  #### Returns Container<DisplayObject>

### mousePositionExplored

* get mousePositionExplored(): boolean

  Is the mouse position explored?

  #### Returns boolean

### mousePositionVisible

* get mousePositionVisible(): boolean

  Is the mouse position visible?

  #### Returns boolean

### ready

* get ready(): boolean

  A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.

  #### Returns boolean

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  A reference to the currently displayed Scene document, or null if the Canvas is currently blank.

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

### `Static`layers

* get layers(): Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

  A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.

  #### Returns Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.md)>

## Methods

### \_configurePerformanceMode

* \_configurePerformanceMode(): [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.md)

  `Internal`

  Configure performance settings for hte canvas application based on the selected performance mode.

  #### Returns [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.md)

### \_constrainView

* \_constrainView(  
  Â Â Â Â position: Partial<Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">>,  
  ): Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">

  `Internal`

  Get the constrained zoom scale parameter which is allowed by the maxZoom parameter

  #### Parameters

  + position: Partial<Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">>

    The unconstrained camera position.

  #### Returns Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">

  The constrained position.

### \_onDragCanvasPan

* \_onDragCanvasPan(event: MouseEvent): Promise<boolean> | undefined

  Pan the canvas view when the cursor position gets close to the edge of the frame

  #### Parameters

  + event: MouseEvent

    The originating mouse movement event

  #### Returns Promise<boolean> | undefined

### \_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Internal`

  Handle the cancellation of a right-mouse drag workflow the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns void

  #### See

### \_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Internal`

  Handle the conclusion of a right-mouse drag workflow the Canvas stage.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns void

  #### See

### \_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Internal`

  Handle right-mouse drag events occurring on the Canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns void

  #### See

### \_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Internal`

  Handle right-mouse start drag events occurring on the Canvas.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns void

  #### See

### \_onMouseWheel

* \_onMouseWheel(event: WheelEvent): void

  `Internal`

  Handle mousewheel events which adjust the scale of the canvas

  #### Parameters

  + event: WheelEvent

    The mousewheel event that zooms the canvas

  #### Returns void

### \_onResize

* \_onResize(): false | undefined

  `Internal`

  Handle window resizing with the dimensions of the window viewport change

  #### Returns false | undefined

### activateFPSMeter

* activateFPSMeter(): void

  Activate framerate tracking by adding an HTML element to the display and refreshing it every frame.

  #### Returns void

### addBlurFilter

* addBlurFilter(filter: Filter): Filter

  Add a filter to the blur filter list if it has the `blur` property.

  #### Parameters

  + filter: Filter

    The filter instance to add

  #### Returns Filter

  The filter that was passed to this function

### animatePan

* animatePan(  
  Â Â Â Â view?: Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level"> & [CanvasAnimationPanOptions](../interfaces/foundry.types.CanvasAnimationPanOptions.md),  
  ): Promise<boolean>

  Animate panning the canvas to a certain destination coordinate and zoom scale
  Customize the animation speed with additional options
  Returns a Promise which is resolved once the animation has completed

  #### Parameters

  + view: Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level"> & [CanvasAnimationPanOptions](../interfaces/foundry.types.CanvasAnimationPanOptions.md) = {}

    The desired view and animation
    parameters.

  #### Returns Promise<boolean>

  A Promise which resolves once the animation has been completed

### canvasCoordinatesFromClient

* canvasCoordinatesFromClient(origin: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Convert client viewport coordinates to canvas coordinates.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The client coordinates.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The corresponding canvas coordinates.

### clientCoordinatesFromCanvas

* clientCoordinatesFromCanvas(origin: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Convert canvas coordinates to the client's viewport.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The corresponding coordinates relative to the client's viewport.

### createBlurFilter

* createBlurFilter(blurStrength: number, blurQuality?: number): BlurFilter

  Create a BlurFilter instance and register it to the array for updates when the zoom level changes.

  #### Parameters

  + blurStrength: number

    The desired blur strength to use for this filter
  + blurQuality: number = CONFIG.Canvas.blurQuality

    The desired quality to use for this filter

  #### Returns BlurFilter

### deactivateFPSMeter

* deactivateFPSMeter(): void

  Deactivate framerate tracking by canceling ticker updates and removing the HTML element.

  #### Returns void

### draw

* draw(scene?: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)): Promise<[canvas](../modules/foundry.canvas.md).Canvas>

  Draw the game canvas.

  #### Parameters

  + `Optional`scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

    A specific Scene document to render on the Canvas

  #### Returns Promise<[canvas](../modules/foundry.canvas.md).Canvas>

  A Promise which resolves once the Canvas is fully drawn

### getCollectionLayer

* getCollectionLayer(collectionName: string): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Get the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.

  #### Parameters

  + collectionName: string

    The collection name

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  The canvas layer

### getGLParameter

* getGLParameter(parameter: string): any

  Get the value of a GL parameter

  #### Parameters

  + parameter: string

    The GL parameter to retrieve

  #### Returns any

  The GL parameter value

### getLayerByEmbeddedName

* getLayerByEmbeddedName(embeddedName: string): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md) | null

  Given an embedded object name, get the canvas layer for that object

  #### Parameters

  + embeddedName: string

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md) | null

### highlightObjects

* highlightObjects(active: boolean): void

  Highlight objects on any layers which are visible

  #### Parameters

  + active: boolean

  #### Returns void

### inferLevelFromElevation

* inferLevelFromElevation(  
  Â Â Â Â elevation: number,  
  Â Â Â Â options?: { levels?: Set<string> },  
  ): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md) | null

  Infer the Level for a given elevation. The inferred Level is always a visible one.
  Returns the viewed Level if there's no Level with the given elevation in range,
  or null if there's no viewed Level.

  #### Parameters

  + elevation: number

    The elevation
  + `Optional`options: { levels?: Set<string> } = {}

    Additional options

    - ##### `Optional`levels?: Set<string>

      Restrict to these Levels (empty means all Levels)

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md) | null

### initialize

* initialize(): void

  Initialize the Canvas by creating the HTML element and PIXI application.
  This step should only ever be performed once per client session.
  Subsequent requests to reset the canvas should go through Canvas#draw

  #### Returns void

### initializeCanvasPosition

* initializeCanvasPosition(): void

  Initialize the starting view of the canvas stage
  If we are re-drawing a scene which was previously rendered, restore the prior view position
  Otherwise set the view to the top-left corner of the scene at standard scale

  #### Returns void

### isOffscreen

* isOffscreen(position: [Point](../interfaces/foundry.types.Point.md)): boolean

  Determine whether given canvas coordinates are off-screen.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.md)

    The canvas coordinates.

  #### Returns boolean

  Is the coordinate outside the screen bounds?

### pan

* pan(position?: Partial<Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">>): void

  Pan the canvas to a certain position and a certain zoom level.

  #### Parameters

  + `Optional`position: Partial<Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">> = {}

    The canvas position to pan to.

  #### Returns void

### ping

* ping(origin: [Point](../interfaces/foundry.types.Point.md), options?: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md)): Promise<boolean>

  Displays a Ping both locally and on other connected client, following these rules:

  1. Displays on the current canvas Scene
  2. If ALT is held, becomes an ALERT ping
  3. Else if the user is GM and SHIFT is held, becomes a PULL ping
  4. Else is a PULSE ping

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.md)

    Point to display Ping at
  + `Optional`options: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md)

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

### recenter

* recenter(initial: Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">): Promise<void>

  Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.

  #### Parameters

  + initial: Omit<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md), "level">

    A desired initial position from which to begin the animation.

  #### Returns Promise<void>

  A Promise which resolves once the animation has been completed.

### registerMouseMoveHandler

* registerMouseMoveHandler(  
  Â Â Â Â handler: Function,  
  Â Â Â Â priority?: number,  
  Â Â Â Â context?: object,  
  Â Â Â Â strict?: boolean,  
  ): void

  Register a new onMouseMove handler with an optional priority.

  #### Parameters

  + handler: Function

    The function to call on mouse move.
  + `Optional`priority: number = 0

    Optional priority. Higher values are called earlier.
  + `Optional`context: object = ...

    The context in which the handler should be executed.
  + `Optional`strict: boolean = false

    To know if the handler should be called on real pointer move only (not simulated)

  #### Returns void

### tearDown

* tearDown(options?: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): Promise<void>

  When re-drawing the canvas, first tear down or discontinue some existing processes

  #### Parameters

  + `Optional`options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md) = {}

    Options which configure how the canvas is deconstructed.

  #### Returns Promise<void>

### updateBlur

* updateBlur(strength?: number): void

  Update the blur strength depending on the scale of the canvas stage.
  This number is zero if "soft shadows" are disabled

  #### Parameters

  + `Optional`strength: number

    Optional blur strength to apply

  #### Returns void

### `Static`\_determineInitialLevel

* \_determineInitialLevel(  
  Â Â Â Â scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md),  
  Â Â Â Â manager: [SceneManager](foundry.canvas.SceneManager.md) | null,  
  ): string

  `Internal`

  Determine an initial level based on what tokens the user has visibility of.
  This choice may be delegated to a SceneManager, if present.

  #### Parameters

  + scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

    The Scene that is about to be drawn next.
  + manager: [SceneManager](foundry.canvas.SceneManager.md) | null

    The SceneManager for this scene.

  #### Returns string

  The Level ID.

### `Static`clearContainer

* clearContainer(displayObject: DisplayObject, destroy?: boolean): void

  Remove all children of the display object and call one cleaning method:
  clean first, then tearDown, and destroy if no cleaning method is found.

  #### Parameters

  + displayObject: DisplayObject

    The display object to clean.
  + destroy: boolean = true

    If textures should be destroyed.

  #### Returns void

### `Static`getRenderTexture

* getRenderTexture(  
  Â Â Â Â options?: { clearColor?: number[]; textureConfiguration?: object },  
  ): RenderTexture

  Get a texture with the required configuration and clear color.

  #### Parameters

  + options: { clearColor?: number[]; textureConfiguration?: object } = {}
    - ##### `Optional`clearColor?: number[]

      The clear color to use for this texture. Transparent by default.
    - ##### `Optional`textureConfiguration?: object

      The render texture configuration.

  #### Returns RenderTexture

### `Static`getSceneManager

* getSceneManager(scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)): [SceneManager](foundry.canvas.SceneManager.md) | null

  Get a SceneManager instance used for this Scene, if any.
  The SceneManager is created by this function if the entry in [CONFIG.Canvas.managedScenes](../variables/CONFIG.Canvas.md#managedscenes) is a class.

  #### Parameters

  + scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

  #### Returns [SceneManager](foundry.canvas.SceneManager.md) | null