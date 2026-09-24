---
title: "FogManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.perception.FogManager.html"
category: "classes"
---

# Class FogManager

A fog of war management class which is the singleton canvas.fog instance.

#### See

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.perception.FogManager))

* [EventEmitter](foundry.EventEmitter.md)<Function, this>
  + FogManager

##### Index

### Properties

[\_updated](#_updated)
[exploration](#exploration)
[emittedEvents](#emittedevents)

### Accessors

[extractor](#extractor)
[fogExploration](#fogexploration)
[sharedExploration](#sharedexploration)
[sprite](#sprite)
[textureConfiguration](#textureconfiguration)
[tokenVision](#tokenvision)

### Methods

[\_createExplorationObject](#_createexplorationobject)
[\_handleReset](#_handlereset)
[addEventListener](#addeventlistener)
[clear](#clear)
[commit](#commit)
[destroy](#destroy)
[dispatchEvent](#dispatchevent)
[initialize](#initialize)
[isPointExplored](#ispointexplored)
[load](#load)
[removeEventListener](#removeeventlistener)
[reset](#reset)
[save](#save)
[sync](#sync)
[\_applySharedExploration](#_applysharedexploration)
[\_createExplorationDocument](#_createexplorationdocument)
[\_createExplorationRenderTexture](#_createexplorationrendertexture)
[\_extractBase64](#_extractbase64)
[\_getBase64ExtractionConfiguration](#_getbase64extractionconfiguration)
[\_prepareFogUpdateData](#_preparefogupdatedata)
[\_unionizeSharedExploration](#_unionizesharedexploration)

## Properties

### `Internal`\_updated

\_updated: boolean = false

Track whether we have pending fog updates which have not yet been saved to the database

### exploration

exploration: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md) | null = null

The FogExploration document which applies to this canvas view

### `Static`emittedEvents

emittedEvents: readonly ["explored"] = ...

Overrides [EventEmitter](foundry.EventEmitter.md).[emittedEvents](foundry.EventEmitter.md#emittedevents)

## Accessors

### extractor

* get extractor(): [TextureExtractor](foundry.canvas.TextureExtractor.md)

  Texture extractor

  #### Returns [TextureExtractor](foundry.canvas.TextureExtractor.md)

### fogExploration

* get fogExploration(): boolean

  Does the currently viewed Scene support fog of war exploration?

  #### Returns boolean

### sharedExploration

* get sharedExploration(): boolean

  Does the currently viewed Scene is in shared fog exploration?

  #### Returns boolean

### sprite

* get sprite(): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

  The exploration SpriteMesh which holds the fog exploration texture.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

### textureConfiguration

* get textureConfiguration(): [CanvasVisibilityTextureConfiguration](../interfaces/foundry.types.CanvasVisibilityTextureConfiguration.md)

  The configured options used for the saved fog-of-war texture.

  #### Returns [CanvasVisibilityTextureConfiguration](../interfaces/foundry.types.CanvasVisibilityTextureConfiguration.md)

### tokenVision

* get tokenVision(): boolean

  Does the currently viewed Scene support Token field of vision?

  #### Returns boolean

## Methods

### \_createExplorationObject

* \_createExplorationObject(tex?: Texture<Resource> | RenderTexture): [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

  `Internal`

  Create the exploration display object with or without a provided texture.

  #### Parameters

  + `Optional`tex: Texture<Resource> | RenderTexture

    Optional exploration texture.

  #### Returns [SpriteMesh](foundry.canvas.containers.SpriteMesh.md)

### \_handleReset

* \_handleReset(): Promise<void>

  `Internal`

  If fog of war data is reset from the server, deactivate the current fog and initialize the exploration.

  #### Returns Promise<void>

### addEventListener

* addEventListener(  
  Â Â Â Â type: string,  
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from EventEmitterMixin().addEventListener

### clear

* clear(): Promise<void>

  Clear the fog and reinitialize properties (commit and save in non reset mode)

  #### Returns Promise<void>

### commit

* commit(): void

  Once a new Fog of War location is explored, composite the explored container with the current staging sprite.
  Once the number of refresh is > to the commit threshold, save the fog texture to the database.

  #### Returns void

### destroy

* destroy(): void

  Destroy this FogManager.

  #### Returns void

### dispatchEvent

* dispatchEvent(event: Event): boolean

  Dispatch an event on this target.

  #### Parameters

  + event: Event

    The Event to dispatch

  #### Returns boolean

  Was default behavior for the event prevented?

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent>

  Inherited from EventEmitterMixin().dispatchEvent

### initialize

* initialize(): Promise<void>

  Initialize fog of war - resetting it when switching scenes or re-drawing the canvas

  #### Returns Promise<void>

### isPointExplored

* isPointExplored(position: [Point](../interfaces/foundry.types.Point.md)): boolean

  Is this position explored?

  #### Parameters

  + position: [Point](../interfaces/foundry.types.Point.md)

    The position to be tested

  #### Returns boolean

  Is this position explored?

### load

* load(options?: { preserve?: boolean }): Promise<void | Texture<Resource>>

  Load existing fog of war data from local storage and populate the initial exploration sprite.

  #### Parameters

  + `Optional`options: { preserve?: boolean } = {}
    - ##### `Optional`preserve?: boolean

      Preserve current fog until the new one is ready.

  #### Returns Promise<void | Texture<Resource>>

### removeEventListener

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from EventEmitterMixin().removeEventListener

### reset

* reset(): Promise<void>

  Dispatch a request to reset the fog of war exploration status for all users within this Scene.
  Once the server has deleted existing FogExploration documents, the \_onReset handler will re-draw the canvas.

  #### Returns Promise<void>

### save

* save(options?: { share?: boolean }): Promise<void>

  Request a fog of war save operation.
  Note: if a save operation is pending, we're waiting for its conclusion.

  #### Parameters

  + `Optional`options: { share?: boolean } = {}
    - ##### `Optional`share?: boolean

      Broadcast the fog to other clients for local unionization.

  #### Returns Promise<void>

### sync

* sync(from: User, to?: User[]): Promise<void>

  Synchronize one user's version of the Fog of War for this scene to other users.
  Note: This API is experimental and may be removed in later versions *without deprecation*. It is intended for
  one-time corrections of users' fog explorations, and should not be used for real-time synchronization of fog
  exploration.

  #### Parameters

  + from: User

    The user whose Fog of War to use as the source of truth.
  + `Optional`to: User[]

    A list of users that should have their Fog of War synced. If none are specified then all
    users will be synced.

  #### Returns Promise<void>

  A promise that resolves when synchronization has been completed.

### `Protected`\_applySharedExploration

* \_applySharedExploration(explored: string, positions?: object): Promise<object>

  `Protected`

  Apply shared exploration received from another client.
  Subclasses may override this method to customize how explored texture and positions are merged locally.

  #### Parameters

  + explored: string
  + `Optional`positions: object

  #### Returns Promise<object>

### `Protected`\_createExplorationDocument

* \_createExplorationDocument(data?: any): [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

  `Protected`

  Create a valid FogExploration document for the current canvas context.

  #### Parameters

  + `Optional`data: any = {}

  #### Returns [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)

### `Protected`\_createExplorationRenderTexture

* \_createExplorationRenderTexture(): Promise<RenderTexture>

  `Protected`

  Create a render texture for the exploration sprite if needed.

  #### Returns Promise<RenderTexture>

### `Protected`\_extractBase64

* \_extractBase64(): Promise<string>

  `Protected`

  Extract fog data as a base64 string

  #### Returns Promise<string>

### `Protected`\_getBase64ExtractionConfiguration

* \_getBase64ExtractionConfiguration(): { quality: number; type: string }

  `Protected`

  The configured options used for fog base64 extraction.

  #### Returns { quality: number; type: string }

### `Protected`\_prepareFogUpdateData

* \_prepareFogUpdateData(base64Image: string): FogExplorationData

  `Protected`

  Prepare the data that will be used to update the FogExploration document.

  #### Parameters

  + base64Image: string

    The extracted base64 image data

  #### Returns FogExplorationData

  Exploration data to update

### `Protected`\_unionizeSharedExploration

* \_unionizeSharedExploration(  
  Â Â Â Â fogs: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[],  
  ): Promise<{ texture: RenderTexture; updateData: object | null }>

  `Protected`

  Unionize exploration inputs for initial scene load.
  Override this method to change union rules or to return additional exploration data (ex: positions).
  This method must not perform any persistent DB operations.

  #### Parameters

  + fogs: [documents](../modules/foundry.documents.md).[FogExploration](foundry.documents.FogExploration.md)[]

  #### Returns Promise<{ texture: RenderTexture; updateData: object | null }>