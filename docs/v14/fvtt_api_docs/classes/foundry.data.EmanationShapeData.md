---
title: "EmanationShapeData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.EmanationShapeData.html"
category: "classes"
---

# Class EmanationShapeData

The data model for an emanation shape.

#### Hierarchy

* ClientShapeData<this>
  + EmanationShapeData

##### Index

### Properties

[\_index](#_index)
[\_source](#_source)
[parent](#parent)
[\_schema](#_schema)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[TYPE](#type)

### Accessors

[area](#area)
[bounds](#bounds)
[center](#center)
[clipperPaths](#clipperpaths)
[clipperPolyTree](#clipperpolytree)
[controlHandles](#controlhandles)
[grid](#grid)
[gridlessGrid](#gridlessgrid)
[hasRotationalSymmetry](#hasrotationalsymmetry)
[invalid](#invalid)
[isAffectedByGrid](#isaffectedbygrid)
[isEmpty](#isempty)
[measuredSegments](#measuredsegments)
[origin](#origin)
[polygons](#polygons)
[polygonTree](#polygontree)
[scene](#scene)
[schema](#schema)
[triangulation](#triangulation)
[validationFailures](#validationfailures)
[schema](#schema-1)
[TYPES](#types)

### Methods

[\_calculateSize](#_calculatesize)
[\_createClipperPolyTree](#_createclipperpolytree)
[\_createControlHandles](#_createcontrolhandles)
[\_createMeasuredSegment](#_createmeasuredsegment)
[\_createMeasuredSegments](#_createmeasuredsegments)
[\_createOrigin](#_createorigin)
[\_createRay](#_createray)
[\_getSnappedPoint](#_getsnappedpoint)
[\_getSnappedRotation](#_getsnappedrotation)
[\_moveRotationHandle](#_moverotationhandle)
[\_moveScaleHandle](#_movescalehandle)
[\_moveSweepHandle](#_movesweephandle)
[\_onDragMove](#_ondragmove)
[\_onDragStart](#_ondragstart)
[\_onShapeChange](#_onshapechange)
[\_rotate](#_rotate)
[\_updateCommit](#_updatecommit)
[clone](#clone)
[drawReferenceLines](#drawreferencelines)
[drawShape](#drawshape)
[getFieldForProperty](#getfieldforproperty)
[move](#move)
[moveControlHandle](#movecontrolhandle)
[reset](#reset)
[rotate](#rotate)
[sampleBoundary](#sampleboundary)
[sampleInterior](#sampleinterior)
[testPoint](#testpoint)
[toJSON](#tojson)
[toObject](#toobject)
[updateSource](#updatesource)
[validate](#validate)
[\_calculateArea](#_calculatearea)
[\_configure](#_configure)
[\_createCenter](#_createcenter)
[\_getInnerModel](#_getinnermodel)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_initializeSource](#_initializesource)
[\_onGridChange](#_ongridchange)
[\_preUpdateSource](#_preupdatesource)
[\_updateDiff](#_updatediff)
[\_toClipperPath](#_toclipperpath)
[cleanData](#cleandata)
[defineSchema](#defineschema)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_preCleanData](#_precleandata)

## Properties

### `Internal`\_index

\_index: number | undefined

The index of this shape within the array of shapes in its parent.
See [foundry.data.fields.ShapesField](foundry.data.fields.ShapesField.md).

Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_index

### \_source

\_source: object

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_source

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from ClientShapeDataMixin(data.EmanationShapeData).parent

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_schema

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from ClientShapeDataMixin(data.EmanationShapeData).LOCALIZATION\_PREFIXES

### `Static`TYPE

TYPE: string = ""

The type of this shape.

Inherited from ClientShapeDataMixin(data.EmanationShapeData).TYPE

## Accessors

### area

* get area(): number

  The area of this shape.

  #### Returns number

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).area

### bounds

* get bounds(): Rectangle

  The bounds of this Region.

  The value of this property must not be mutated.

  #### Returns Rectangle

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).bounds

### center

* get center(): Readonly<[Point](../interfaces/foundry.types.Point.md)>

  The center point of this shape.

  #### Returns Readonly<[Point](../interfaces/foundry.types.Point.md)>

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).center

### clipperPaths

* get clipperPaths(): readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

  The Clipper paths of this shape.
  The winding numbers are 1 or 0.

  The value of this property must not be mutated.

  #### Returns readonly (readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)>[])[]

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).clipperPaths

### clipperPolyTree

* get clipperPolyTree(): PolyTree

  The Clipper polygon tree of this shape.

  The value of this property must not be mutated.

  #### Returns PolyTree

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).clipperPolyTree

### controlHandles

* get controlHandles(): [DeepReadonly](../types/foundry.types.DeepReadonly.md)<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â [name: string]: { position: [Point](../interfaces/foundry.types.Point.md); rotation: number; visible: boolean };  
  Â Â Â Â },  
  >

  The control handles of this shape.
  Each handle has a position and a rotation in radians.

  #### Returns [DeepReadonly](../types/foundry.types.DeepReadonly.md)< Â Â Â Â { Â Â Â Â Â Â Â Â [name: string]: { position: [Point](../interfaces/foundry.types.Point.md); rotation: number; visible: boolean }; Â Â Â Â }, >

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).controlHandles

### grid

* get grid(): [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>

  The grid that this shape is placed in.

  #### Returns [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).grid

### gridlessGrid

* get gridlessGrid(): [GridlessGrid](foundry.grid.GridlessGrid.md)

  The gridless version of the grid that this shape is placed in.

  #### Returns [GridlessGrid](foundry.grid.GridlessGrid.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).gridlessGrid

### hasRotationalSymmetry

* get hasRotationalSymmetry(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).hasRotationalSymmetry

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).invalid

### isAffectedByGrid

* get isAffectedByGrid(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).isAffectedByGrid

### isEmpty

* get isEmpty(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).isEmpty

### measuredSegments

* get measuredSegments(): readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)<  
  Â Â Â Â { angle?: number; distance: number; ray: [Ray](foundry.canvas.geometry.Ray.md); winding: -1  
  Â Â Â Â | 0  
  Â Â Â Â | 1 },  
  >[]

  The measured segments of this shape.
  Each segment consist of a ray, winding order, distance in grid units, and the angle in degrees if it has one.
  The ray represents the measured segment. If the winding order is ...

  + 1, the segment is an edge in positive orientation.
  + -1, the segment is an edge in negative orientation.
  + 0, the segment is not an edge.

  The distance is the actual grid distance if the shape is grid-based.
  Otherwise the distance is the distance in pixels divided by of the ratio of grid distance and grid size.

  #### Returns readonly [DeepReadonly](../types/foundry.types.DeepReadonly.md)< Â Â Â Â { angle?: number; distance: number; ray: [Ray](foundry.canvas.geometry.Ray.md); winding: -1 Â Â Â Â | 0 Â Â Â Â | 1 }, >[]

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).measuredSegments

### origin

* get origin(): Readonly<[Point](../interfaces/foundry.types.Point.md)>

  The origin of this shape.

  #### Returns Readonly<[Point](../interfaces/foundry.types.Point.md)>

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).origin

### polygons

* get polygons(): readonly Polygon[]

  The polygons of this shape.

  The value of this property must not be mutated.

  #### Returns readonly Polygon[]

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).polygons

### polygonTree

* get polygonTree(): [PolygonTree](foundry.data.PolygonTree.md)

  The polygon tree of this shape.

  The value of this property must not be mutated.

  #### Returns [PolygonTree](foundry.data.PolygonTree.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).polygonTree

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  The scene that this shape is placed in, if any.

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).scene

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).schema

### triangulation

* get triangulation(): Readonly<  
  Â Â Â Â { indices: Uint16Array  
  Â Â Â Â | Uint32Array; vertices: Float32Array },  
  >

  The triangulation of this shape.

  The value of this property must not be mutated.

  #### Returns Readonly<{ indices: Uint16Array | Uint32Array; vertices: Float32Array }>

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).triangulation

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).validationFailures

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  The Data Schema for all instances of this DataModel.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).schema

### `Static`TYPES

* get TYPES(): Readonly<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â circle: [data](../modules/foundry.data.md).[CircleShapeData](foundry.data.CircleShapeData.md);  
  Â Â Â Â Â Â Â Â cone: [data](../modules/foundry.data.md).[ConeShapeData](foundry.data.ConeShapeData.md);  
  Â Â Â Â Â Â Â Â ellipse: [data](../modules/foundry.data.md).[EllipseShapeData](foundry.data.EllipseShapeData.md);  
  Â Â Â Â Â Â Â Â emanation: EmanationShapeData;  
  Â Â Â Â Â Â Â Â grid: [GridShapeData](foundry.data.GridShapeData.md);  
  Â Â Â Â Â Â Â Â line: [LineShapeData](foundry.data.LineShapeData.md);  
  Â Â Â Â Â Â Â Â polygon: [data](../modules/foundry.data.md).[PolygonShapeData](foundry.data.PolygonShapeData.md);  
  Â Â Â Â Â Â Â Â rectangle: [data](../modules/foundry.data.md).[RectangleShapeData](foundry.data.RectangleShapeData.md);  
  Â Â Â Â Â Â Â Â ring: [RingShapeData](foundry.data.RingShapeData.md);  
  Â Â Â Â Â Â Â Â token: [TokenShapeData](foundry.data.TokenShapeData.md);  
  Â Â Â Â },  
  >

  The possible shape types.

  #### Returns Readonly< Â Â Â Â { Â Â Â Â Â Â Â Â circle: [data](../modules/foundry.data.md).[CircleShapeData](foundry.data.CircleShapeData.md); Â Â Â Â Â Â Â Â cone: [data](../modules/foundry.data.md).[ConeShapeData](foundry.data.ConeShapeData.md); Â Â Â Â Â Â Â Â ellipse: [data](../modules/foundry.data.md).[EllipseShapeData](foundry.data.EllipseShapeData.md); Â Â Â Â Â Â Â Â emanation: EmanationShapeData; Â Â Â Â Â Â Â Â grid: [GridShapeData](foundry.data.GridShapeData.md); Â Â Â Â Â Â Â Â line: [LineShapeData](foundry.data.LineShapeData.md); Â Â Â Â Â Â Â Â polygon: [data](../modules/foundry.data.md).[PolygonShapeData](foundry.data.PolygonShapeData.md); Â Â Â Â Â Â Â Â rectangle: [data](../modules/foundry.data.md).[RectangleShapeData](foundry.data.RectangleShapeData.md); Â Â Â Â Â Â Â Â ring: [RingShapeData](foundry.data.RingShapeData.md); Â Â Â Â Â Â Â Â token: [TokenShapeData](foundry.data.TokenShapeData.md); Â Â Â Â }, >

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).TYPES

## Methods

### \_calculateSize

* \_calculateSize(  
  Â Â Â Â length: number,  
  Â Â Â Â direction: number,  
  Â Â Â Â options?: { allowZero?: boolean; round?: boolean; snap?: boolean },  
  ): number

  `Internal`

  Get the size for the given ray defined by a length and direction.

  #### Parameters

  + length: number

    The length of the ray in pixels.
  + direction: number

    The direction of the ray in radians.
  + `Optional`options: { allowZero?: boolean; round?: boolean; snap?: boolean } = {}

    Additional options.

    - ##### `Optional`allowZero?: boolean

      Allow the size to be zero?
    - ##### `Optional`round?: boolean

      Round the size to integer?
    - ##### `Optional`snap?: boolean

      Snap the size to with defined grid snapping precision?

  #### Returns number

  The snapped size in pixels.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_calculateSize

### \_createClipperPolyTree

* \_createClipperPolyTree(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_createClipperPolyTree

### \_createControlHandles

* \_createControlHandles(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_createControlHandles

### \_createMeasuredSegment

* \_createMeasuredSegment(  
  Â Â Â Â x: number,  
  Â Â Â Â y: number,  
  Â Â Â Â direction: number,  
  Â Â Â Â length: number,  
  Â Â Â Â alignment: number,  
  Â Â Â Â winding: -1 | 0 | 1,  
  Â Â Â Â angle?: number,  
  ): { angle?: number; distance: number; ray: [Ray](foundry.canvas.geometry.Ray.md); winding: -1 | 0 | 1 }

  `Internal`

  Create a measured segment.

  #### Parameters

  + x: number

    The x-coordinate of the origin of the ray.
  + y: number

    The y-coordinate of the origin of the ray.
  + direction: number

    The direction of the ray in degrees.
  + length: number

    The length of the ray in pixels.
  + alignment: number

    The alignment of the ray.
  + winding: -1 | 0 | 1

    The winding order.
  + `Optional`angle: number

    The angle in degrees.

  #### Returns { angle?: number; distance: number; ray: [Ray](foundry.canvas.geometry.Ray.md); winding: -1 | 0 | 1 }

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_createMeasuredSegment

### \_createMeasuredSegments

* \_createMeasuredSegments(): any[]

  #### Returns any[]

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_createMeasuredSegments

### \_createOrigin

* \_createOrigin(): any

  #### Returns any

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_createOrigin

### \_createRay

* \_createRay(  
  Â Â Â Â x: number,  
  Â Â Â Â y: number,  
  Â Â Â Â direction: number,  
  Â Â Â Â length: number,  
  Â Â Â Â alignment?: number,  
  ): [Ray](foundry.canvas.geometry.Ray.md)

  `Internal`

  Create a ray.

  #### Parameters

  + x: number

    The x-coordinate of the origin of the ray.
  + y: number

    The y-coordinate of the origin of the ray.
  + direction: number

    The direction of the ray in degrees.
  + length: number

    The length of the ray in pixels.
  + `Optional`alignment: number = 0

    The alignment to ray.

  #### Returns [Ray](foundry.canvas.geometry.Ray.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_createRay

### \_getSnappedPoint

* \_getSnappedPoint(point: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  `Internal`

  Snap the given point.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point that is to be snapped.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The snapped point.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_getSnappedPoint

### \_getSnappedRotation

* \_getSnappedRotation(rotation: number): number

  `Internal`

  Snap the given rotation.

  #### Parameters

  + rotation: number

    The rotation to be snapped in degrees.

  #### Returns number

  The snapped rotation in degrees.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_getSnappedRotation

### \_moveRotationHandle

* \_moveRotationHandle(direction: number, destination: [Point](../interfaces/foundry.types.Point.md), snap: boolean): void

  `Internal`

  Transform this shape by moving a rotation handle.

  #### Parameters

  + direction: number

    The direction of the rotation handle in degrees.
  + destination: [Point](../interfaces/foundry.types.Point.md)

    The handle destination.
  + snap: boolean

    Snap?

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_moveRotationHandle

### \_moveScaleHandle

* \_moveScaleHandle(  
  Â Â Â Â fieldName: string,  
  Â Â Â Â origin: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â direction: number,  
  Â Â Â Â alignment: number,  
  Â Â Â Â destination: [Point](../interfaces/foundry.types.Point.md),  
  Â Â Â Â snap: boolean,  
  Â Â Â Â allowZero?: boolean,  
  Â Â Â Â max?: number,  
  ): void

  `Internal`

  Transform this shape by moving a scale handle.

  #### Parameters

  + fieldName: string

    The field name of the axis that is scaled.
  + origin: [Point](../interfaces/foundry.types.Point.md)

    The origin.
  + direction: number

    The direction of the axis in degrees.
  + alignment: number

    The alignment of the axis.
  + destination: [Point](../interfaces/foundry.types.Point.md)

    The handle destination.
  + snap: boolean

    Snap?
  + `Optional`allowZero: boolean

    Allow zero size?
  + `Optional`max: number

    The maximum value.

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_moveScaleHandle

### \_moveSweepHandle

* \_moveSweepHandle(maxAngle: number, destination: [Point](../interfaces/foundry.types.Point.md), snap: boolean): void

  `Internal`

  Transform this shape by moving the sweep handle.

  #### Parameters

  + maxAngle: number

    The maximum angle possible.
  + destination: [Point](../interfaces/foundry.types.Point.md)

    The handle destination.
  + snap: boolean

    Snap?

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_moveSweepHandle

### \_onDragMove

* \_onDragMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_onDragMove

### \_onDragStart

* \_onDragStart(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Internal`

  Handle the drag start event for the creation of this shape.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event.

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_onDragStart

### \_onShapeChange

* \_onShapeChange(): void

  #### Returns void

  #### Inherit Doc

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_onShapeChange

### \_rotate

* \_rotate(angle: any): void

  #### Parameters

  + angle: any

  #### Returns void

  Overrides ClientShapeDataMixin(data.EmanationShapeData).\_rotate

### \_updateCommit

* \_updateCommit(copy: any, diff: any, options: any, state: any): void

  #### Parameters

  + copy: any
  + diff: any
  + options: any
  + state: any

  #### Returns void

  #### Inherit Doc

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_updateCommit

### clone

* clone(  
  Â Â Â Â data: any,  
  Â Â Â Â context: any,  
  ):  
  Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>  
  Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  #### Parameters

  + data: any
  + context: any

  #### Returns Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  #### Inherit Doc

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).clone

### drawReferenceLines

* drawReferenceLines(graphics: any): void

  #### Parameters

  + graphics: any

  #### Returns void

  Overrides ClientShapeDataMixin(data.EmanationShapeData).drawReferenceLines

### drawShape

* drawShape(graphics: Graphics): void

  Draw the shape into the Graphics element.

  #### Parameters

  + graphics: Graphics

    The Graphics element

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).drawShape

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).getFieldForProperty

### move

* move(origin: any, options: any): void

  #### Parameters

  + origin: any
  + options: any

  #### Returns void

  Overrides ClientShapeDataMixin(data.EmanationShapeData).move

### moveControlHandle

* moveControlHandle(name: any, destination: any, options?: {}): void

  #### Parameters

  + name: any
  + destination: any
  + options: {} = {}

  #### Returns void

  Overrides ClientShapeDataMixin(data.EmanationShapeData).moveControlHandle

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).reset

### rotate

* rotate(angle: number, options?: { pivot?: [Point](../interfaces/foundry.types.Point.md) }): void

  Rotate the shape by the given angle in degrees around the origin (or pivot).

  #### Parameters

  + angle: number

    The angle in degrees.
  + `Optional`options: { pivot?: [Point](../interfaces/foundry.types.Point.md) } = {}

    Additional options.

    - ##### `Optional`pivot?: [Point](../interfaces/foundry.types.Point.md)

      The pivot of rotation. Default: origin.

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).rotate

### sampleBoundary

* sampleBoundary(out?: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Sample a point from the shape boundary.

  #### Parameters

  + `Optional`out: [Point](../interfaces/foundry.types.Point.md)

    A point to write to.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The sampled point.

  #### Throws

  If the shape is empty.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).sampleBoundary

### sampleInterior

* sampleInterior(out?: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Sample a point from the shape interior.

  #### Parameters

  + `Optional`out: [Point](../interfaces/foundry.types.Point.md)

    A point to write to.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The sampled point.

  #### Throws

  If the shape is empty.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).sampleInterior

### testPoint

* testPoint(point: [Point](../interfaces/foundry.types.Point.md)): boolean

  Test whether given point is contained within this shape.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The point.

  #### Returns boolean

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).testPoint

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).toJSON

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).toObject

### updateSource

* updateSource(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: object = {}

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md) = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).updateSource

### validate

* validate(options?: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md)): boolean

  Validate the data contained in the document to check for type and content.
  This method is intended to validate complete model records, verifying both individual field validation as well
  as joint model validity.

  For validating sets of partial model changes, it is preferred to call DataModel#updateSource as a `dryRun`. This
  method provides a convenience alias for such a workflow if `changes` are provided.

  Warning: if fallback handling is allowed, this process will mutate provided changes or model source data.

  #### Parameters

  + options: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md) = {}

    Options which modify how the model is validated

  #### Returns boolean

  Whether the data source or proposed change is reported as valid.
  A boolean is always returned if validation is non-strict.

  #### Throws

  An error thrown if validation is strict and a failure occurs.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).validate

### `Protected`\_calculateArea

* \_calculateArea(): number

  `Protected`

  Calculate the area of this shape.

  #### Returns number

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_calculateArea

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_configure

### `Protected`\_createCenter

* \_createCenter(): [Point](../interfaces/foundry.types.Point.md)

  `Protected`

  Create the center point of this shape.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_createCenter

### `Protected`\_getInnerModel

* \_getInnerModel(  
  Â Â Â Â field: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â element?: { index?: number; value: object },  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  `Protected`

  Resolve a previously-initialized embedded DataModel that corresponds to an element being cleaned. Called during
  recursive data cleaning when a parent field contains EmbeddedDataField elements, or a single nested DataModel
  field (such as a TypeDataField), in order to propagate the inner DataModel into \_state.model for the recursive
  clean operation. A single (non-collection) inner model resolves to itself; collection elements are matched by
  stable \_id when one is present, otherwise by positional index.

  Subclasses may override when data preparation reshapes the field property in a way that the default cannot
  interpret, for example wrapping the container in a non-iterable type or replacing it with a derived view.

  #### Parameters

  + field: [DataField](foundry.data.fields.DataField.md)

    The schema field being recursed into.
  + element: { index?: number; value: object } = {}
    - ##### `Optional`index?: number

      The positional index of the element within a container, if applicable.
    - ##### value: object

      The cleaned candidate value for the element being processed.
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    The cleaning options in effect for the operation.

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  The corresponding previously-initialized inner DataModel, or null.

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_getInnerModel

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_initializationOrder

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_initialize

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>,  
  Â Â Â Â options?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

    The candidate source data from which the model will be constructed
  + `Optional`options: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_initializeSource

### `Protected`\_onGridChange

* \_onGridChange(changed: object): void

  `Protected`

  Called when the grid this shape is placed in changes.

  #### Parameters

  + changed: object

    The changes to the grid.

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_onGridChange

### `Protected`\_preUpdateSource

* \_preUpdateSource(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Prepare the state object that is transacted through an updateSource operation.

  #### Parameters

  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data model update state

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_preUpdateSource

### `Protected`\_updateDiff

* \_updateDiff(  
  Â Â Â Â copy: object,  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Perform the first step of the DataModel#\_updateSource workflow which applies changes to a copy of model source
  data and records the resulting diff.

  #### Parameters

  + copy: object

    A mutable copy of model source data
  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data cleaning state

  #### Returns object

  The resulting difference applied to source data

  #### Throws

  A failure if the proposed change is invalid

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_updateDiff

### `Static`\_toClipperPath

* \_toClipperPath(  
  Â Â Â Â path: number[] | [Point](../interfaces/foundry.types.Point.md)[] | [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[],  
  ): [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

  `Internal`

  Convert a path to a clipper path.

  #### Parameters

  + path: number[] | [Point](../interfaces/foundry.types.Point.md)[] | [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

    A path

  #### Returns [types](../modules/foundry.types.md).[ClipperPoint](../interfaces/foundry.types.ClipperPoint.md)[]

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_toClipperPath

### `Static`cleanData

* cleanData(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state?: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)>,  
  ): object

  Clean a data source object to conform to a specific provided schema.

  #### Parameters

  + `Optional`data: object = {}

    Provided model data that requires cleaning
  + `Optional`options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md) = {}

    Options that configure how data cleaning is performed
  + `Optional`\_state: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)> = {}

    Internal options used during cleaning recursion

  #### Returns object

  Cleaned data which is suitable for validation and usage

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).cleanData

### `Static`defineSchema

* defineSchema(): { hole: [BooleanField](foundry.data.fields.BooleanField.md); type: [StringField](foundry.data.fields.StringField.md) }

  #### Returns { hole: [BooleanField](foundry.data.fields.BooleanField.md); type: [StringField](foundry.data.fields.StringField.md) }

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).defineSchema

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).fromJSON

### `Static`fromSource

* fromSource(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md),  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a new instance of this DataModel from a source record.
  The source data is presumed trustworthy and is not strictly validated unless explicitly requested.

  #### Parameters

  + source: object

    Initial document data which comes from a trusted source.
  + `Optional`context: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md) = {}

    Model construction context

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).fromSource

### `Static`migrateData

* migrateData(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: object

    Candidate source data for the module, before further cleaning
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).migrateData

### `Static`migrateDataSafe

* migrateDataSafe(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): object

  Wrap data migration in a try/catch which attempts it safely.

  #### Parameters

  + source: object

    Candidate source data for the module, before further cleaning
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).migrateDataSafe

### `Static`shimData

* shimData(data: object, options?: { embedded?: boolean }): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + data: object

    Data which matches the current schema
  + `Optional`options: { embedded?: boolean } = {}

    Additional shimming options

    - ##### `Optional`embedded?: boolean

      Apply shims to embedded models?

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).shimData

### `Static`validateJoint

* validateJoint(data: object): void

  Evaluate joint validation rules which apply validation conditions across multiple fields of the model.
  Field-specific validation rules should be defined as part of the DataSchema for the model.
  This method allows for testing aggregate rules which impose requirements on the overall model.

  #### Parameters

  + data: object

    Candidate data for the model

  #### Returns void

  #### Throws

  An error if a validation failure is detected

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).validateJoint

### `Protected` `Static`\_cleanData

* \_cleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Apply final custom model-specific cleaning rules after data schema fields are cleaned.
  Subclass models can implement this function as an ideal place to apply custom imputation or cleaning.
  Cleaning must be done in-place rather than returning a different object.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Options which define how cleaning was performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns object

  The original data object, with cleaning performed inplace

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_cleanData

### `Protected` `Static`\_preCleanData

* \_preCleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Apply preliminary model-specific cleaning rules or alter cleaning options or initial state.
  Subclass models may implement this function to configure the cleaning workflow.
  Any mutations to data, options, or \_state parameters are performed inplace.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)

    Options which define how cleaning should be performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns void

  Inherited from ClientShapeDataMixin(data.EmanationShapeData).\_preCleanData