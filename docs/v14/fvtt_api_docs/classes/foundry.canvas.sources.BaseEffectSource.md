---
title: "BaseEffectSource | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.sources.BaseEffectSource.html"
category: "classes"
---

# Class BaseEffectSource<TSourceData, TSourceShape>`Abstract`

TODO - Re-document after ESM refactor.
An abstract base class which defines a framework for effect sources which originate radially from a specific point.
This abstraction is used by the LightSource, VisionSource, SoundSource, and MovementSource subclasses.

#### Example: A standard PointSource lifecycle:

```
const source = new PointSource({object}); // Create the point source  
source.initialize(data);                  // Configure the point source with new data  
source.refresh();                         // Refresh the point source  
source.destroy();                         // Destroy the point source
Copy
```

#### Template: TSourceData

#### Template: TSourceShape

#### Type Parameters

* TSourceData extends [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)
* TSourceShape extends PIXI.Polygon = PIXI.Polygon

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.sources.BaseEffectSource))

* BaseEffectSource
  + [PointMovementSource](foundry.canvas.sources.PointMovementSource.md)
  + [PointSoundSource](foundry.canvas.sources.PointSoundSource.md)
  + [RenderedEffectSource](foundry.canvas.sources.RenderedEffectSource.md)

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

* new BaseEffectSource<  
  Â Â Â Â [TSourceData](#constructorbaseeffectsourcetsourcedata) extends [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md),  
  Â Â Â Â [TSourceShape](#constructorbaseeffectsourcetsourceshape) extends Polygon = Polygon,  
  >(  
  Â Â Â Â options?: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md),  
  ): BaseEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  An effect source is constructed by providing configuration options.

  #### Type Parameters

  + TSourceData extends [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)
  + TSourceShape extends Polygon = Polygon

  #### Parameters

  + `Optional`options: [BaseEffectSourceOptions](../interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) = {}

    Options which modify the base effect source instance

  #### Returns BaseEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

## Properties

### data

data: [TSourceData](#tsourcedata) = ...

The data of this source.

### object

object: object | null

Some other object which is responsible for this source.

### shape

shape: [TSourceShape](#tsourceshape)

The geometric shape of the effect source which is generated later.

### `Readonly`sourceId

sourceId: string

The source id linked to this effect source.

### suppression

suppression: Record<string, boolean> = {}

Records of suppression strings with a boolean value.
If any of this record is true, the source is suppressed.

### `Protected`\_flags

\_flags: Record<string, number | boolean> = {}

A collection of boolean flags which control rendering and refresh behavior for the source.

### `Static`defaultData

defaultData: [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) = ...

Effect source default data.

### `Static` `Abstract`effectsCollection

effectsCollection: string

The target collection into the effects canvas group.

### `Static`sourceType

sourceType: string

The type of source represented by this data structure.
Each subclass must implement this attribute.

## Accessors

### active

* get active(): boolean

  Is this source currently active?
  A source is active if it is attached to an effect collection and is not disabled or suppressed.

  #### Returns boolean

### attached

* get attached(): boolean

  Is this source attached to an effect collection?

  #### Returns boolean

### effectsCollection

* get effectsCollection(): [Collection](foundry.utils.Collection.md)<  
  Â Â Â Â string,  
  Â Â Â Â BaseEffectSource<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>,  
  >

  The EffectsCanvasGroup collection linked to this effect source.

  #### Returns [Collection](foundry.utils.Collection.md)<string, BaseEffectSource<[BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md), Polygon>>

### elevation

* get elevation(): number

  The elevation bound to this source.

  #### Returns number

### level

* get level(): [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

  The level this source is in.

  #### Returns [documents](../modules/foundry.documents.md).[Level](foundry.documents.Level.md)

### suppressed

* get suppressed(): boolean

  Is this source temporarily suppressed?

  #### Returns boolean

### updateId

* get updateId(): number

  Returns the update ID associated with this source.
  The update ID is increased whenever the shape of the source changes.

  #### Returns number

### x

* get x(): number

  The x-coordinate of the point source origin.

  #### Returns number

### y

* get y(): number

  The y-coordinate of the point source origin.

  #### Returns number

## Methods

### add

* add(): void

  Add this BaseEffectSource instance to the active collection.

  #### Returns void

### destroy

* destroy(): void

  Steps that must be performed when the source is destroyed.

  #### Returns void

### initialize

* initialize(  
  Â Â Â Â data?: Partial<[TSourceData](#tsourcedata)>,  
  Â Â Â Â options?: { reset?: boolean },  
  ): BaseEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  Initialize and configure the source using provided data.

  #### Parameters

  + data: Partial<[TSourceData](#tsourcedata)> = {}

    Provided data for configuration
  + options: { reset?: boolean } = {}

    Additional options which modify source initialization

    - ##### `Optional`reset?: boolean

      Should source data be reset to default values before applying changes?

  #### Returns BaseEffectSource<[TSourceData](#tsourcedata), [TSourceShape](#tsourceshape)>

  The initialized source

### refresh

* refresh(): void

  Refresh the state and uniforms of the source.
  Only active sources are refreshed.

  #### Returns void

### remove

* remove(): void

  Remove this BaseEffectSource instance from the active collection.

  #### Returns void

### testPoint

* testPoint(point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)): boolean

  Test whether the point is contained within the shape of the source.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The point.

  #### Returns boolean

  Is inside the source?

### `Protected`\_configure

* \_configure(changes: Partial<[TSourceData](#tsourcedata)>): void

  `Protected`

  Subclass specific configuration steps. Occurs after data initialization and shape computation.
  Only called if the source is attached and not disabled and its data or shapes have changed.

  #### Parameters

  + changes: Partial<[TSourceData](#tsourcedata)>

    Changes to the source data which were applied

  #### Returns void

### `Protected`\_couldShapesChange

* \_couldShapesChange(changes: Partial<[TSourceData](#tsourcedata)>): boolean

  `Protected`

  If true is returned, [BaseEffectSource#\_createShapes](#_createshapes) is called in [BaseEffectSource#initialize](#initialize).

  #### Parameters

  + changes: Partial<[TSourceData](#tsourcedata)>

    Changes to the source data which were applied

  #### Returns boolean

### `Protected` `Abstract`\_createShapes

* \_createShapes(): void

  `Protected`

  Create the polygon shape (or shapes) for this source using configured data.

  #### Returns void

### `Protected`\_destroy

* \_destroy(): void

  `Protected`

  Subclass specific destruction steps.

  #### Returns void

### `Protected`\_initialize

* \_initialize(data: Partial<[TSourceData](#tsourcedata)>): void

  `Protected`

  Subclass specific data initialization steps.

  #### Parameters

  + data: Partial<[TSourceData](#tsourcedata)>

    Provided data for configuration

  #### Returns void

### `Protected` `Abstract`\_refresh

* \_refresh(): void

  `Protected`

  Subclass-specific refresh steps.

  #### Returns void