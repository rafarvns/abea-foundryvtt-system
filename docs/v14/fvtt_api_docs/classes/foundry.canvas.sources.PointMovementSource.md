---
title: "PointMovementSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.PointMovementSource.html"
category: "classes"
---

# Class PointMovementSource

A specialized subclass of the BaseEffectSource which describes a movement-based source.

#### Mixes

PointEffectSource

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.PointMovementSource))

* [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon, this>
  + PointMovementSource

##### Index

### Constructors

[constructor](#constructor)

### Properties

[data](#data)
[object](#object)
[shape](#shape)
[sourceId](#sourceid)
[suppression](#suppression)
[\_flags](#_flags)
[defaultData](#defaultdata)
[effectsCollection](#effectscollection)
[sourceType](#sourcetype)

### Accessors

[active](#active)
[attached](#attached)
[effectsCollection](#effectscollection-1)
[elevation](#elevation)
[level](#level)
[suppressed](#suppressed)
[updateId](#updateid)
[x](#x)
[y](#y)

### Methods

[add](#add)
[destroy](#destroy)
[initialize](#initialize)
[refresh](#refresh)
[remove](#remove)
[testPoint](#testpoint)
[\_configure](#_configure)
[\_couldShapesChange](#_couldshapeschange)
[\_createShapes](#_createshapes)
[\_destroy](#_destroy)
[\_initialize](#_initialize)
[\_refresh](#_refresh)

## Constructors

### constructor

* new PointMovementSource(options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md)): PointMovementSource

  An effect source is constructed by providing configuration options.

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns PointMovementSource

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[constructor](foundry.canvas.sources.BaseEffectSource.md#constructor)

## Properties

### data

data: [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = ...

The data of this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[data](foundry.canvas.sources.BaseEffectSource.md#data)

### object

object: object | null

Some other object which is responsible for this source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[object](foundry.canvas.sources.BaseEffectSource.md#object)

### shape

shape: Polygon

The geometric shape of the effect source which is generated later.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[shape](foundry.canvas.sources.BaseEffectSource.md#shape)

### `Readonly`sourceId

sourceId: string

The source id linked to this effect source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[sourceId](foundry.canvas.sources.BaseEffectSource.md#sourceid)

### suppression

suppression: Record<string, boolean> = {}

Records of suppression strings with a boolean value.
If any of this record is true, the source is suppressed.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[suppression](foundry.canvas.sources.BaseEffectSource.md#suppression)

### `Protected`\_flags

\_flags: Record<string, number | boolean> = {}

A collection of boolean flags which control rendering and refresh behavior for the source.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_flags](foundry.canvas.sources.BaseEffectSource.md#_flags)

### `Static`defaultData

defaultData: [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = ...

Effect source default data.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[defaultData](foundry.canvas.sources.BaseEffectSource.md#defaultdata)

### `Static` `Abstract`effectsCollection

effectsCollection: string

The target collection into the effects canvas group.

Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[effectsCollection](foundry.canvas.sources.BaseEffectSource.md#effectscollection)

### `Static`sourceType

sourceType: string = "move"

Overrides [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[sourceType](foundry.canvas.sources.BaseEffectSource.md#sourcetype)

## Accessors

### active

* get active(): boolean

  Is this source currently active?
  A source is active if it is attached to an effect collection and is not disabled or suppressed.

  #### Returns boolean

  Inherited from PointEffectSourceMixin(BaseEffectSource).active

### attached

* get attached(): boolean

  Is this source attached to an effect collection?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(BaseEffectSource).attached

### effectsCollection

* get effectsCollection(): [Collection](foundry.utils.Collection.md)<  
  Â Â Â Â string,  
  Â Â Â Â [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>,  
  >

  The EffectsCanvasGroup collection linked to this effect source.

  #### Returns [Collection](foundry.utils.Collection.md)<string, [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md)<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>>

  Inherited from PointEffectSourceMixin(BaseEffectSource).effectsCollection

### elevation

* get elevation(): number

  The elevation bound to this source.

  #### Returns number

  Inherited from PointEffectSourceMixin(BaseEffectSource).elevation

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level this source is in.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  Inherited from PointEffectSourceMixin(BaseEffectSource).level

### suppressed

* get suppressed(): boolean

  Is this source temporarily suppressed?

  #### Returns boolean

  Inherited from PointEffectSourceMixin(BaseEffectSource).suppressed

### updateId

* get updateId(): number

  Returns the update ID associated with this source.
  The update ID is increased whenever the shape of the source changes.

  #### Returns number

  Inherited from PointEffectSourceMixin(BaseEffectSource).updateId

### x

* get x(): number

  The x-coordinate of the point source origin.

  #### Returns number

  Inherited from PointEffectSourceMixin(BaseEffectSource).x

### y

* get y(): number

  The y-coordinate of the point source origin.

  #### Returns number

  Inherited from PointEffectSourceMixin(BaseEffectSource).y

## Methods

### add

* add(): void

  Add this BaseEffectSource instance to the active collection.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[add](foundry.canvas.sources.BaseEffectSource.md#add)

### destroy

* destroy(): void

  Steps that must be performed when the source is destroyed.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[destroy](foundry.canvas.sources.BaseEffectSource.md#destroy)

### initialize

* initialize(  
  Â Â Â Â data?: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>,  
  Â Â Â Â options?: { reset?: boolean },  
  ): PointMovementSource

  Initialize and configure the source using provided data.

  #### Parameters

  + data: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)> = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns PointMovementSource

  The initialized source

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[initialize](foundry.canvas.sources.BaseEffectSource.md#initialize)

### refresh

* refresh(): void

  Refresh the state and uniforms of the source.
  Only active sources are refreshed.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[refresh](foundry.canvas.sources.BaseEffectSource.md#refresh)

### remove

* remove(): void

  Remove this BaseEffectSource instance from the active collection.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[remove](foundry.canvas.sources.BaseEffectSource.md#remove)

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the point is contained within the shape of the source.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is inside the source?

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[testPoint](foundry.canvas.sources.BaseEffectSource.md#testpoint)

### `Protected`\_configure

* \_configure(changes: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>): void

  `Protected`

  Subclass specific configuration steps. Occurs after data initialization and shape computation.
  Only called if the source is attached and not disabled and its data or shapes have changed.

  #### Parameters

  + changes: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>

    Changes to the source data which were applied

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_configure](foundry.canvas.sources.BaseEffectSource.md#_configure)

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes) is called in [BaseEffectSource#initialize](foundry.canvas.sources.BaseEffectSource.md#initialize).

  #### Parameters

  + changes: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>

    Changes to the source data which were applied

  #### Returns boolean

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_couldShapesChange](foundry.canvas.sources.BaseEffectSource.md#_couldshapeschange)

### `Protected` `Abstract`\_createShapes

* \_createShapes(): void

  `Protected`

  Create the polygon shape (or shapes) for this source using configured data.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_createShapes](foundry.canvas.sources.BaseEffectSource.md#_createshapes)

### `Protected`\_destroy

* \_destroy(): void

  `Protected`

  Subclass specific destruction steps.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_destroy](foundry.canvas.sources.BaseEffectSource.md#_destroy)

### `Protected`\_initialize

* \_initialize(data: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>): void

  `Protected`

  Subclass specific data initialization steps.

  #### Parameters

  + data: Partial<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)>

    Provided data for configuration

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_initialize](foundry.canvas.sources.BaseEffectSource.md#_initialize)

### `Protected` `Abstract`\_refresh

* \_refresh(): void

  `Protected`

  Subclass-specific refresh steps.

  #### Returns void

  Inherited from [BaseEffectSource](foundry.canvas.sources.BaseEffectSource.md).[\_refresh](foundry.canvas.sources.BaseEffectSource.md#_refresh)