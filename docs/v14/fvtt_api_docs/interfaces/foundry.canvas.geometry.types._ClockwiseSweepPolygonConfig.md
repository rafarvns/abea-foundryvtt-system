---
title: "_ClockwiseSweepPolygonConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.geometry.types._ClockwiseSweepPolygonConfig.html"
category: "interfaces"
---

# Interface \_ClockwiseSweepPolygonConfig

interface \_ClockwiseSweepPolygonConfig {  
Â Â Â Â [edgeDirectionMode](#edgedirectionmode)?: [EdgeDirectionMode](../types/CONST.EdgeDirectionMode.md);  
Â Â Â Â [edgeTypes](#edgetypes)?: Partial<  
Â Â Â Â Â Â Â Â Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), boolean | Partial<[ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>>,  
Â Â Â Â >;  
Â Â Â Â [priority](#priority)?: number;  
}

##### Index

### Properties

[edgeDirectionMode?](#edgedirectionmode)
[edgeTypes?](#edgetypes)
[priority?](#priority)

## Properties

### `Optional`edgeDirectionMode

edgeDirectionMode?: [EdgeDirectionMode](../types/CONST.EdgeDirectionMode.md)

Customize how edge direction of one-way edges is applied

### `Optional`edgeTypes

edgeTypes?: Partial<  
Â Â Â Â Record<[EdgeType](../types/foundry.canvas.geometry.types.EdgeType.md), boolean | Partial<[ClockwiseSweepEdgeConfig](../types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md)>>,  
>

Edge types configured as `false` is equivalent to those edges never being included.
Edge types configured as `true` are included conditionally depending on the type of polygon and the type of edge.

### `Optional`priority

priority?: number

Edges with priority less than this priority are ignored