---
title: "RegionData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionData.html"
category: "interfaces"
---

# Interface RegionData

interface RegionData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_shapeConstraints](#_shapeconstraints): number[][] | null;  
Â Â Â Â [behaviors](#behaviors)?: [RegionBehaviorData](foundry.documents.types.RegionBehaviorData.md)[];  
Â Â Â Â [color](#color)?: string;  
Â Â Â Â [elevation](#elevation)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [levels](#levels)?: string[] | null;  
Â Â Â Â [locked](#locked)?: boolean;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [shapes](#shapes)?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md)[];  
Â Â Â Â [visibility](#visibility)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[\_shapeConstraints](#_shapeconstraints)
[behaviors?](#behaviors)
[color?](#color)
[elevation?](#elevation)
[flags](#flags)
[levels?](#levels)
[locked?](#locked)
[name](#name)
[shapes?](#shapes)
[visibility?](#visibility)

## Properties

### \_id

\_id: string | null

The Region \_id which uniquely identifies it within its parent Scene

### \_shapeConstraints

\_shapeConstraints: number[][] | null

### `Optional`behaviors

behaviors?: [RegionBehaviorData](foundry.documents.types.RegionBehaviorData.md)[]

A collection of embedded RegionBehavior objects

### `Optional`color

color?: string

The color used to highlight the Region

### `Optional`elevation

elevation?: number

The elevation

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`levels

levels?: string[] | null

The level IDs

### `Optional`locked

locked?: boolean

Whether this region is locked or not

### name

name: string

The name used to describe the Region

### `Optional`shapes

shapes?: [BaseShapeData](../classes/foundry.data.BaseShapeData.md)[]

The shapes that make up the Region

### `Optional`visibility

visibility?: number

The region visibility