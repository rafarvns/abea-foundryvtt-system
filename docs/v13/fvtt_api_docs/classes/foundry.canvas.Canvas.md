---
title: "Canvas | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.Canvas.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [Canvas](foundry.canvas.Canvas.html)

# Class Canvas

The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js
library. The canvas is comprised by an ordered sequence of layers which define rendering groups and collections of
objects that are drawn on the canvas itself.

### Hook Events

[hookEvents.canvasConfig](../functions/hookEvents.canvasConfig.html)
[hookEvents.canvasInit](../functions/hookEvents.canvasInit.html)
[hookEvents.canvasReady](../functions/hookEvents.canvasReady.html)
[hookEvents.canvasPan](../functions/hookEvents.canvasPan.html)
[hookEvents.canvasTearDown](../functions/hookEvents.canvasTearDown.html)

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

[app](foundry.canvas.Canvas.html#app)
[blurFilters](foundry.canvas.Canvas.html#blurfilters)
[blurOptions](foundry.canvas.Canvas.html#bluroptions)
[currentMouseManager](foundry.canvas.Canvas.html#currentmousemanager)
[edges](foundry.canvas.Canvas.html#edges)
[effects](foundry.canvas.Canvas.html#effects)
[environment](foundry.canvas.Canvas.html#environment)
[fog](foundry.canvas.Canvas.html#fog)
[fps](foundry.canvas.Canvas.html#fps)
[hud](foundry.canvas.Canvas.html#hud)
[initializing](foundry.canvas.Canvas.html#initializing)
[interface](foundry.canvas.Canvas.html#interface)
[loading](foundry.canvas.Canvas.html#loading)
[loadTexturesOptions](foundry.canvas.Canvas.html#loadtexturesoptions)
[mouseInteractionManager](foundry.canvas.Canvas.html#mouseinteractionmanager)
[mousePosition](foundry.canvas.Canvas.html#mouseposition)
[overlay](foundry.canvas.Canvas.html#overlay)
[pendingRenderFlags](foundry.canvas.Canvas.html#pendingrenderflags)
[perception](foundry.canvas.Canvas.html#perception)
[performance](foundry.canvas.Canvas.html#performance)
[photosensitiveMode](foundry.canvas.Canvas.html#photosensitivemode)
[previousMousePosition](foundry.canvas.Canvas.html#previousmouseposition)
[primary](foundry.canvas.Canvas.html#primary)
[rendered](foundry.canvas.Canvas.html#rendered)
[sceneTextures](foundry.canvas.Canvas.html#scenetextures)
[screenDimensions](foundry.canvas.Canvas.html#screendimensions)
[snapshot](foundry.canvas.Canvas.html#snapshot)
[stage](foundry.canvas.Canvas.html#stage)
[supported](foundry.canvas.Canvas.html#supported)
[visibility](foundry.canvas.Canvas.html#visibility)
[visibilityOptions](foundry.canvas.Canvas.html#visibilityoptions)
[MOUSE\_MOVE\_HANDLER\_PRIORITIES](foundry.canvas.Canvas.html#mouse_move_handler_priorities)

### Accessors

[activeLayer](foundry.canvas.Canvas.html#activelayer)
[colors](foundry.canvas.Canvas.html#colors)
[darknessLevel](foundry.canvas.Canvas.html#darknesslevel)
[dimensions](foundry.canvas.Canvas.html#dimensions)
[forceSnapVertices](foundry.canvas.Canvas.html#forcesnapvertices)
[grid](foundry.canvas.Canvas.html#grid)
[id](foundry.canvas.Canvas.html#id)
[initialized](foundry.canvas.Canvas.html#initialized)
[layers](foundry.canvas.Canvas.html#layers)
[manager](foundry.canvas.Canvas.html#manager)
[masks](foundry.canvas.Canvas.html#masks)
[ready](foundry.canvas.Canvas.html#ready)
[scene](foundry.canvas.Canvas.html#scene)
[layers](foundry.canvas.Canvas.html#layers-2)

### Methods

[\_configurePerformanceMode](foundry.canvas.Canvas.html#_configureperformancemode)
[\_constrainView](foundry.canvas.Canvas.html#_constrainview)
[\_onDragCanvasPan](foundry.canvas.Canvas.html#_ondragcanvaspan)
[\_onDragRightCancel](foundry.canvas.Canvas.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.Canvas.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.Canvas.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.Canvas.html#_ondragrightstart)
[\_onMouseWheel](foundry.canvas.Canvas.html#_onmousewheel)
[\_onResize](foundry.canvas.Canvas.html#_onresize)
[activateFPSMeter](foundry.canvas.Canvas.html#activatefpsmeter)
[addBlurFilter](foundry.canvas.Canvas.html#addblurfilter)
[animatePan](foundry.canvas.Canvas.html#animatepan)
[canvasCoordinatesFromClient](foundry.canvas.Canvas.html#canvascoordinatesfromclient)
[clientCoordinatesFromCanvas](foundry.canvas.Canvas.html#clientcoordinatesfromcanvas)
[createBlurFilter](foundry.canvas.Canvas.html#createblurfilter)
[deactivateFPSMeter](foundry.canvas.Canvas.html#deactivatefpsmeter)
[draw](foundry.canvas.Canvas.html#draw)
[getCollectionLayer](foundry.canvas.Canvas.html#getcollectionlayer)
[getGLParameter](foundry.canvas.Canvas.html#getglparameter)
[getLayerByEmbeddedName](foundry.canvas.Canvas.html#getlayerbyembeddedname)
[highlightObjects](foundry.canvas.Canvas.html#highlightobjects)
[initialize](foundry.canvas.Canvas.html#initialize)
[initializeCanvasPosition](foundry.canvas.Canvas.html#initializecanvasposition)
[isOffscreen](foundry.canvas.Canvas.html#isoffscreen)
[pan](foundry.canvas.Canvas.html#pan)
[ping](foundry.canvas.Canvas.html#ping)
[recenter](foundry.canvas.Canvas.html#recenter)
[registerMouseMoveHandler](foundry.canvas.Canvas.html#registermousemovehandler)
[tearDown](foundry.canvas.Canvas.html#teardown)
[updateBlur](foundry.canvas.Canvas.html#updateblur)
[clearContainer](foundry.canvas.Canvas.html#clearcontainer)
[getRenderTexture](foundry.canvas.Canvas.html#getrendertexture)
[getSceneManager](foundry.canvas.Canvas.html#getscenemanager)

## Properties

### app

app: Application<ICanvas>

The singleton PIXI.Application instance rendered on the Canvas.

### blurFilters

blurFilters: Set<Filter> = ...

A set of blur filter instances which are modified by the zoom level and the "soft shadows" setting

### blurOptions

blurOptions: {  
Â Â Â Â blurClass: typeof Filter;  
Â Â Â Â enabled: boolean;  
Â Â Â Â kernels: number;  
Â Â Â Â passes: number;  
Â Â Â Â strength: number;  
}

Configure options passed to initialize blur for the Scene and override normal behavior.
This object can be configured during the canvasInit hook before blur is initialized.

### currentMouseManager

currentMouseManager: null | [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html) = null

A reference to the MouseInteractionManager that is currently controlling pointer-based interaction, or null.

### edges

edges: [CanvasEdges](foundry.canvas.geometry.edges.CanvasEdges.html)

A singleton CanvasEdges instance.

### effects

effects: [EffectsCanvasGroup](foundry.canvas.groups.EffectsCanvasGroup.html)

The effects Canvas group which modifies the result of the [foundry.canvas.groups.PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.html) by
adding special effects.
This includes lighting, vision, fog of war and related animations.

### environment

environment: [EnvironmentCanvasGroup](foundry.canvas.groups.EnvironmentCanvasGroup.html)

The environment canvas group which render the primary canvas group and the effects canvas group.

#### See

* [Canvas#primary](foundry.canvas.Canvas.html#primary)
* [Canvas#effects](foundry.canvas.Canvas.html#effects)

### fog

fog: [FogManager](foundry.canvas.perception.FogManager.html)

The singleton FogManager instance.

### fps

fps: { render: number; values: number[] } = ...

Record framerate performance data.

### hud

hud: [HeadsUpDisplayContainer](foundry.applications.hud.HeadsUpDisplayContainer.html)

The singleton HeadsUpDisplay container which overlays HTML rendering on top of this Canvas.

### initializing

initializing: null | Promise<void> = null

A promise that resolves when the canvas is first initialized and ready.

### interface

interface: [InterfaceCanvasGroup](foundry.canvas.groups.InterfaceCanvasGroup.html)

The interface Canvas group which is rendered above other groups and contains all interactive elements.
The various [foundry.canvas.layers.InteractionLayer](foundry.canvas.layers.InteractionLayer.html) instances of the interface group provide different
control sets for interacting with different types of [foundry.abstract.Document](foundry.abstract.Document.html)s which can be represented
on the Canvas.

### loading

loading: boolean = false

A flag to indicate whether a new Scene is currently being drawn.

### loadTexturesOptions

loadTexturesOptions: { additionalSources: string[]; expireCache: boolean }

Configure options passed to the texture loaded for the Scene.
This object can be configured during the canvasInit hook before textures have been loaded.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

The singleton interaction manager instance which handles mouse interaction on the Canvas.

### mousePosition

mousePosition: Point = ...

Position of the mouse on stage.

### overlay

overlay: [OverlayCanvasGroup](foundry.canvas.groups.OverlayCanvasGroup.html)

The overlay Canvas group which is rendered above other groups and contains elements not bound to stage transform.

### pendingRenderFlags

pendingRenderFlags: {  
Â Â Â Â OBJECTS: Set<RenderFlagObject>;  
Â Â Â Â PERCEPTION: Set<RenderFlagObject>;  
}

Track objects which have pending render flags.

### perception

perception: [PerceptionManager](foundry.canvas.perception.PerceptionManager.html)

A perception manager interface for batching lighting, sight, and sound updates.

### performance

performance: [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.html)

Configured performance settings which affect the behavior of the Canvas and its renderer.

### photosensitiveMode

photosensitiveMode: boolean

Is the photosensitive mode enabled?

### previousMousePosition

previousMousePosition: Point = ...

Previous position of the mouse on stage.

### primary

primary: [PrimaryCanvasGroup](foundry.canvas.groups.PrimaryCanvasGroup.html)

The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
This group is a [foundry.canvas.containers.CachedContainer](foundry.canvas.containers.CachedContainer.html)
which is rendered to the Scene as a [foundry.canvas.containers.SpriteMesh](foundry.canvas.containers.SpriteMesh.html).
This allows the rendered result of the Primary Canvas Group to be affected by a
[foundry.canvas.rendering.shaders.BaseSamplerShader](foundry.canvas.rendering.shaders.BaseSamplerShader.html).

### rendered

rendered: [RenderedCanvasGroup](foundry.canvas.groups.RenderedCanvasGroup.html)

The rendered canvas group which render the environment canvas group and the interface canvas group.

#### See

* [Canvas#environment](foundry.canvas.Canvas.html#environment)
* [Canvas#interface](foundry.canvas.Canvas.html#interface)

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

### screenDimensions

screenDimensions: number[] = ...

The renderer screen dimensions.

### snapshot

snapshot: [FramebufferSnapshot](foundry.canvas.FramebufferSnapshot.html)

The framenbuffer snapshot.

### stage

stage: Container<DisplayObject>

The primary stage container of the PIXI.Application.

### supported

supported: [CanvasSupportedComponents](../interfaces/foundry.types.CanvasSupportedComponents.html)

A list of supported webGL capabilities and limitations.

### visibility

visibility: [CanvasVisibility](foundry.canvas.groups.CanvasVisibility.html)

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

* get activeLayer(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

  Return a reference to the active Canvas Layer

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)

### colors

* get colors(): [Color](foundry.utils.Color.html)

  The colors bound to this scene and handled by the color manager.

  #### Returns [Color](foundry.utils.Color.html)

### darknessLevel

* get darknessLevel(): number

  The currently displayed darkness level, which may override the saved Scene value.

  #### Returns number

### dimensions

* get dimensions(): null | Readonly<[CanvasDimensions](../types/foundry.types.CanvasDimensions.html)>

  The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.

  #### Returns null | Readonly<[CanvasDimensions](../types/foundry.types.CanvasDimensions.html)>

### forceSnapVertices

* get forceSnapVertices(): boolean

  Force snapping to grid vertices?

  #### Returns boolean

### grid

* get grid(): null | [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

  A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.

  #### Returns null | [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

### id

* get id(): null | string

  The id of the currently displayed Scene.

  #### Returns null | string

### initialized

* get initialized(): boolean

  A flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.

  #### Returns boolean

### layers

* get layers(): [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)[]

  An Array of all CanvasLayer instances which are active on the Canvas board

  #### Returns [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)[]

### manager

* get manager(): null | [SceneManager](foundry.canvas.SceneManager.html)

  A SceneManager instance which adds behaviors to this Scene, or null if there is no manager.

  #### Returns null | [SceneManager](foundry.canvas.SceneManager.html)

### masks

* get masks(): Container<DisplayObject>

  Shortcut to get the masks container from HiddenCanvasGroup.

  #### Returns Container<DisplayObject>

### ready

* get ready(): boolean

  A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.

  #### Returns boolean

### scene

* get scene(): null | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

  A reference to the currently displayed Scene document, or null if the Canvas is currently blank.

  #### Returns null | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

### `Static`layers

* get layers(): Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

  A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.

  #### Returns Record<string, [CanvasLayer](foundry.canvas.layers.CanvasLayer.html)>

## Methods

### \_configurePerformanceMode

* \_configurePerformanceMode(): [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.html)

  `Internal`

  Configure performance settings for hte canvas application based on the selected performance mode.

  #### Returns [CanvasPerformanceSettings](../interfaces/foundry.types.CanvasPerformanceSettings.html)

### \_constrainView

* \_constrainView(position: Partial<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)>): [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)

  `Internal`

  Get the constrained zoom scale parameter which is allowed by the maxZoom parameter

  #### Parameters

  + position: Partial<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)>

    The uncontrained camera position

  #### Returns [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)

  The constrained position

### \_onDragCanvasPan

* \_onDragCanvasPan(event: MouseEvent): undefined | Promise<boolean>

  `Internal`

  Pan the canvas view when the cursor position gets close to the edge of the frame

  #### Parameters

  + event: MouseEvent

    The originating mouse movement event

  #### Returns undefined | Promise<boolean>

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

* \_onResize(): undefined | false

  `Internal`

  Handle window resizing with the dimensions of the window viewport change

  #### Returns undefined | false

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

* animatePan(view?: any): Promise<boolean>

  Animate panning the canvas to a certain destination coordinate and zoom scale
  Customize the animation speed with additional options
  Returns a Promise which is resolved once the animation has completed

  #### Parameters

  + view: any = {}

    The desired view parameters

  #### Returns Promise<boolean>

  A Promise which resolves once the animation has been completed

### canvasCoordinatesFromClient

* canvasCoordinatesFromClient(origin: [Point](../interfaces/foundry.types.Point.html)): [Point](../interfaces/foundry.types.Point.html)

  Convert client viewport coordinates to canvas coordinates.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.html)

    The client coordinates.

  #### Returns [Point](../interfaces/foundry.types.Point.html)

  The corresponding canvas coordinates.

### clientCoordinatesFromCanvas

* clientCoordinatesFromCanvas(origin: [Point](../interfaces/foundry.types.Point.html)): [Point](../interfaces/foundry.types.Point.html)

  Convert canvas coordinates to the client's viewport.

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.html)

    The canvas coordinates.

  #### Returns [Point](../interfaces/foundry.types.Point.html)

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

* draw(scene?: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)): Promise<[canvas](../modules/foundry.canvas.html).[Canvas](foundry.canvas.Canvas.html)>

  Draw the game canvas.

  #### Parameters

  + `Optional`scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

    A specific Scene document to render on the Canvas

  #### Returns Promise<[canvas](../modules/foundry.canvas.html).[Canvas](foundry.canvas.Canvas.html)>

  A Promise which resolves once the Canvas is fully drawn

### getCollectionLayer

* getCollectionLayer(collectionName: string): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Get the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.

  #### Parameters

  + collectionName: string

    The collection name

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

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

* getLayerByEmbeddedName(embeddedName: string): null | [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Given an embedded object name, get the canvas layer for that object

  #### Parameters

  + embeddedName: string

  #### Returns null | [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

### highlightObjects

* highlightObjects(active: boolean): void

  Highlight objects on any layers which are visible

  #### Parameters

  + active: boolean

  #### Returns void

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

* isOffscreen(position: [Point](../interfaces/foundry.types.Point.html)): boolean

  Determine whether given canvas coordinates are off-screen.

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.html)

    The canvas coordinates.

  #### Returns boolean

  Is the coordinate outside the screen bounds?

### pan

* pan(position?: Partial<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)>): void

  Pan the canvas to a certain position and a certain zoom level.

  #### Parameters

  + `Optional`position: Partial<[CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)> = {}

    The canvas position to pan to

  #### Returns void

### ping

* ping(origin: [Point](../interfaces/foundry.types.Point.html), options?: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.html)): Promise<boolean>

  Displays a Ping both locally and on other connected client, following these rules:

  1. Displays on the current canvas Scene
  2. If ALT is held, becomes an ALERT ping
  3. Else if the user is GM and SHIFT is held, becomes a PULL ping
  4. Else is a PULSE ping

  #### Parameters

  + origin: [Point](../interfaces/foundry.types.Point.html)

    Point to display Ping at
  + `Optional`options: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.html)

    Additional options to configure how the ping is drawn.

  #### Returns Promise<boolean>

### recenter

* recenter(initial: [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)): Promise<void>

  Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.

  #### Parameters

  + initial: [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html)

    A desired initial position from which to begin the animation

  #### Returns Promise<void>

  A Promise which resolves once the animation has been completed

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

* tearDown(): Promise<void>

  When re-drawing the canvas, first tear down or discontinue some existing processes

  #### Returns Promise<void>

### updateBlur

* updateBlur(strength?: number): void

  Update the blur strength depending on the scale of the canvas stage.
  This number is zero if "soft shadows" are disabled

  #### Parameters

  + `Optional`strength: number

    Optional blur strength to apply

  #### Returns void

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

* getSceneManager(scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)): null | [SceneManager](foundry.canvas.SceneManager.html)

  `Internal`

  Create a SceneManager instance used for this Scene, if any.

  #### Parameters

  + scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

  #### Returns null | [SceneManager](foundry.canvas.SceneManager.html)