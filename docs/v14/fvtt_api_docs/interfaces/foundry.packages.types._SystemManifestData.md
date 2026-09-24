---
title: "_SystemManifestData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types._SystemManifestData.html"
category: "interfaces"
---

# Interface \_SystemManifestData

Manifest properties exclusive to systems.

interface \_SystemManifestData {  
Â Â Â Â [background](#background)?: string;  
Â Â Â Â [documentTypes](#documenttypes)?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md);  
Â Â Â Â [grid](#grid)?: {  
Â Â Â Â Â Â Â Â diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md);  
Â Â Â Â Â Â Â Â distance?: number;  
Â Â Â Â Â Â Â Â type?: [GridType](../types/CONST.GridType.md);  
Â Â Â Â Â Â Â Â units?: string;  
Â Â Â Â };  
Â Â Â Â [initiative](#initiative)?: string;  
Â Â Â Â [primaryTokenAttribute](#primarytokenattribute)?: string;  
Â Â Â Â [secondaryTokenAttribute](#secondarytokenattribute)?: string;  
Â Â Â Â [type](#type): "system";  
}

##### Index

### Properties

[background?](#background)
[documentTypes?](#documenttypes)
[grid?](#grid)
[initiative?](#initiative)
[primaryTokenAttribute?](#primarytokenattribute)
[secondaryTokenAttribute?](#secondarytokenattribute)
[type](#type)

## Properties

### `Optional`background

background?: string

A web URL or local file path which provides a default background banner for
worlds which are created using this system

### `Optional`documentTypes

documentTypes?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md)

Additional document subtypes provided by this system.

### `Optional`grid

grid?: {  
Â Â Â Â diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md);  
Â Â Â Â distance?: number;  
Â Â Â Â type?: [GridType](../types/CONST.GridType.md);  
Â Â Â Â units?: string;  
}

The default grid settings to use for Scenes in this system.

#### Type Declaration

* ##### `Optional`diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md)

  The default rule used by this system for diagonal measurement on
  square and hexagonal grids.
* ##### `Optional`distance?: number

  A default distance measurement to use for Scenes in this system.
* ##### `Optional`type?: [GridType](../types/CONST.GridType.md)

  A default grid type to use for Scenes in this system.
* ##### `Optional`units?: string

  A default unit of measure to use for distance measurement in this system.

### `Optional`initiative

initiative?: string

A default initiative formula used for this system.

### `Optional`primaryTokenAttribute

primaryTokenAttribute?: string

An Actor data attribute path to use for Token primary resource bars

### `Optional`secondaryTokenAttribute

secondaryTokenAttribute?: string

An Actor data attribute path to use for Token secondary resource bars

### type

type: "system"

The package type among world, system, and module