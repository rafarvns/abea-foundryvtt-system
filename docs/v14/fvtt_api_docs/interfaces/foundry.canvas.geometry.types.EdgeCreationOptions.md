---
title: "EdgeCreationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.geometry.types.EdgeCreationOptions.html"
category: "interfaces"
---

# Interface EdgeCreationOptions

Additional options which describe the edge

interface EdgeCreationOptions {  
Â Â Â Â [darkness](#darkness)?: [EdgeSenseType](../types/CONST.EdgeSenseType.md);  
Â Â Â Â [direction](#direction)?: [EdgeDirection](../types/CONST.EdgeDirection.md);  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [light](#light)?: [EdgeSenseType](../types/CONST.EdgeSenseType.md);  
Â Â Â Â [move](#move)?: [EdgeSenseType](../types/CONST.EdgeSenseType.md);  
Â Â Â Â [object](#object)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md);  
Â Â Â Â [priority](#priority)?: number;  
Â Â Â Â [sight](#sight)?: [EdgeSenseType](../types/CONST.EdgeSenseType.md);  
Â Â Â Â [sound](#sound)?: [EdgeSenseType](../types/CONST.EdgeSenseType.md);  
Â Â Â Â [threshold](#threshold)?: [EdgeThresholdData](foundry.canvas.geometry.types.EdgeThresholdData.md) | null;  
Â Â Â Â [type](#type)?: [EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md);  
}

##### Index

### Properties

[darkness?](#darkness)
[direction?](#direction)
[id?](#id)
[light?](#light)
[move?](#move)
[object?](#object)
[priority?](#priority)
[sight?](#sight)
[sound?](#sound)
[threshold?](#threshold)
[type?](#type)

## Properties

### `Optional`darkness

darkness?: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts darkness

### `Optional`direction

direction?: [EdgeDirection](../types/CONST.EdgeDirection.md)

A direction of effect for the edge

### `Optional`id

id?: string

A string used to uniquely identify this edge

### `Optional`light

light?: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts light

### `Optional`move

move?: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts movement

### `Optional`object

object?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

A Document/PlaceableObject that is responsible for this edge, if any

### `Optional`priority

priority?: number

A source priority for this edge. Default: `0`.

### `Optional`sight

sight?: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts sight

### `Optional`sound

sound?: [EdgeSenseType](../types/CONST.EdgeSenseType.md)

How this edge restricts sound

### `Optional`threshold

threshold?: [EdgeThresholdData](foundry.canvas.geometry.types.EdgeThresholdData.md) | null

Configuration of threshold data for this edge

### `Optional`type

type?: [EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md)

The type of edge