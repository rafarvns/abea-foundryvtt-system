---
title: "GridHex | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.grid.GridHex.html"
category: "classes"
---

# Class GridHex

A helper class which represents a single hexagon as part of a HexagonalGrid.
This class relies on having an active canvas scene in order to know the configuration of the hexagonal grid.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[cube](#cube)
[grid](#grid)
[offset](#offset)

### Accessors

[center](#center)
[topLeft](#topleft)

### Methods

[equals](#equals)
[getNeighbors](#getneighbors)
[shiftCube](#shiftcube)

## Constructors

### constructor

* new GridHex(  
  Â Â Â Â coordinates: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md),  
  Â Â Â Â grid: [HexagonalGrid](foundry.grid.HexagonalGrid.md),  
  ): GridHex

  Construct a GridHex instance by providing a hex coordinate.

  #### Parameters

  + coordinates: [HexagonalGridCoordinates2D](../types/foundry.grid.types.HexagonalGridCoordinates2D.md)

    The coordinates of the hex to construct
  + grid: [HexagonalGrid](foundry.grid.HexagonalGrid.md)

    The hexagonal grid instance to which this hex belongs

  #### Returns GridHex

## Properties

### cube

cube: [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)

The cube coordinate of this hex

### grid

grid: [HexagonalGrid](foundry.grid.HexagonalGrid.md)

The hexagonal grid to which this hex belongs.

### offset

offset: [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md)

The offset coordinate of this hex

## Accessors

### center

* get center(): [Point](../interfaces/foundry.types.Point.md)

  Return a reference to the pixel point in the center of this hexagon.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

### topLeft

* get topLeft(): [Point](../interfaces/foundry.types.Point.md)

  Return a reference to the pixel point of the top-left corner of this hexagon.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

## Methods

### equals

* equals(other: GridHex): boolean

  Return whether this GridHex equals the same position as some other GridHex instance.

  #### Parameters

  + other: GridHex

    Some other GridHex

  #### Returns boolean

  Are the positions equal?

### getNeighbors

* getNeighbors(): GridHex[]

  Return the array of hexagons which are neighbors of this one.
  This result is un-bounded by the confines of the game canvas and may include hexes which are off-canvas.

  #### Returns GridHex[]

### shiftCube

* shiftCube(dq?: number, dr?: number, ds?: number): GridHex

  Get a neighboring hex by shifting along cube coordinates.
  At least two of (dq, dr, ds) must be passed, an undefined third parameter may be inferred.
  If all three are passed, they must sum to zero to represent a valid cube shift.

  #### Parameters

  + `Optional`dq: number

    A number of hexes to shift along the q axis
  + `Optional`dr: number

    A number of hexes to shift along the r axis
  + `Optional`ds: number

    A number of hexes to shift along the s axis

  #### Returns GridHex

  The shifted hex