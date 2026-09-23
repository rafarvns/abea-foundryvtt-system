---
title: "RegionMesh | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.regions.RegionMesh.html"
category: "classes"
---

# Class RegionMesh

A mesh of a [foundry.canvas.placeables.Region](foundry.canvas.placeables.Region.md).

#### Hierarchy

* Container
  + RegionMesh

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_cachedTint](#_cachedtint)
[\_tintAlphaDirty](#_tintalphadirty)
[\_tintColor](#_tintcolor)

### Accessors

[blendMode](#blendmode)
[geometry](#geometry)
[region](#region)
[shader](#shader)
[tint](#tint)

### Methods

[\_calculateBounds](#_calculatebounds)
[\_render](#_render)
[containsPoint](#containspoint)
[destroy](#destroy)
[setShaderClass](#setshaderclass)
[updateTransform](#updatetransform)

## Constructors

### constructor

* new RegionMesh(  
  Â Â Â Â region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md),  
  Â Â Â Â shaderClass?: [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md),  
  ): RegionMesh

  Create a RegionMesh.

  #### Parameters

  + region: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

    The Region to create the RegionMesh from.
  + `Optional`shaderClass: [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md) = RegionShader

    The shader class to use.

  #### Returns RegionMesh

  Overrides PIXI.Container.constructor

## Properties

### `Protected`\_cachedTint

\_cachedTint: [red: number, green: number, blue: number, alpha: number] = ...

Cached tint value for the shader uniforms.

### `Protected`\_tintAlphaDirty

\_tintAlphaDirty: boolean

Used to track a tint or alpha change to execute a recomputation of \_cachedTint.

### `Protected`\_tintColor

\_tintColor: Color = ...

The tint applied to the mesh. This is a hex value. A value of 0xFFFFFF will remove any tint effect.

## Accessors

### blendMode

* get blendMode(): BLEND\_MODES

  The blend mode assigned to this RegionMesh.

  #### Returns BLEND\_MODES

### geometry

* get geometry(): Geometry | [RegionGeometry](foundry.canvas.placeables.regions.RegionGeometry.md)

  The geometry of this RegionMesh.

  #### Returns Geometry | [RegionGeometry](foundry.canvas.placeables.regions.RegionGeometry.md)

### region

* get region(): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

  The Region of this RegionMesh.

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Region](foundry.canvas.placeables.Region.md)

### shader

* get shader(): [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

  The shader bound to this RegionMesh.

  #### Returns [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

### tint

* get tint(): number

  The tint applied to the mesh. This is a hex value.

  A value of 0xFFFFFF will remove any tint effect.

  #### Returns number

  #### Default Value

  ```
  0xFFFFFF
  Copy
  ```

## Methods

### \_calculateBounds

* \_calculateBounds(): void

  #### Returns void

### \_render

* \_render(renderer: any): void

  #### Parameters

  + renderer: any

  #### Returns void

### containsPoint

* containsPoint(point: [Point](../interfaces/foundry.types.Point.md)): boolean

  Tests if a point is inside this RegionMesh.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

  #### Returns boolean

### destroy

* destroy(options: any): void

  #### Parameters

  + options: any

  #### Returns void

### setShaderClass

* setShaderClass(shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)): void

  Initialize shader based on the shader class type.

  #### Parameters

  + shaderClass: typeof [AbstractBaseShader](foundry.canvas.rendering.shaders.AbstractBaseShader.md)

    The shader class, which must inherit from AbstractBaseShader.

  #### Returns void

### updateTransform

* updateTransform(): void

  #### Returns void