---
title: "ElevatedSurfaceExposureGenerator | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.ElevatedSurfaceExposureGenerator.html"
category: "classes"
---

# Class ElevatedSurfaceExposureGenerator

This class computes the elevated surface exposure polygon tree.

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[polygon](#polygon)
[result](#result)
[threshold](#threshold)

### Methods

[compute](#compute)
[compute](#compute-2)

## Constructors

### constructor

* new ElevatedSurfaceExposureGenerator(  
  Â Â Â Â polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>,  
  Â Â Â Â options?: [ElevatedSurfaceExposureOptions](../interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md),  
  ): ElevatedSurfaceExposureGenerator

  #### Parameters

  + polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

    The source polygon the exposure is computed for
  + `Optional`options: [ElevatedSurfaceExposureOptions](../interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md) = {}

    The surface exposure options

  #### Returns ElevatedSurfaceExposureGenerator

## Accessors

### polygon

* get polygon(): [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

  The source polygon the exposure is computed for.

  #### Returns [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

### result

* get result(): [PolygonTree](foundry.data.PolygonTree.md) | null

  The result of the computation, which is null if the surface exposure is empty.

  #### Returns [PolygonTree](foundry.data.PolygonTree.md) | null

  #### Throws

  If [ElevatedSurfaceExposureGenerator#compute](#compute) wasn't called yet.

### threshold

* get threshold(): number

  Points with at most this distance (grid units) from the surface are exposed.

  #### Returns number

## Methods

### compute

* compute(): [PolygonTree](foundry.data.PolygonTree.md) | null

  Compute the surface exposure.

  #### Returns [PolygonTree](foundry.data.PolygonTree.md) | null

  The computed elevated surface exposure or null if empty

### `Static`compute

* compute(  
  Â Â Â Â polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>,  
  Â Â Â Â options?: [ElevatedSurfaceExposureOptions](../interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md),  
  ): [PolygonTree](foundry.data.PolygonTree.md) | null

  Compute the elevated surface exposure for the given source polygon using the
  [ElevatedSurfaceExposureGenerator](#).

  #### Parameters

  + polygon: [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md)<[PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)>

    The source polygon the exposure is computed for
  + `Optional`options: [ElevatedSurfaceExposureOptions](../interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md)

    The surface exposure options

  #### Returns [PolygonTree](foundry.data.PolygonTree.md) | null

  The computed elevated surface exposure or null if empty