---
title: "PolygonVertexOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PolygonVertexOptions.html"
category: "interfaces"
---

# Interface PolygonVertexOptions

interface PolygonVertexOptions {  
Â Â Â Â [distance](#distance)?: number;  
Â Â Â Â [index](#index)?: number;  
Â Â Â Â [round](#round)?: boolean;  
}

##### Index

### Properties

[distance?](#distance)
[index?](#index)
[round?](#round)

## Properties

### `Optional`distance

distance?: number

A known distance from a polygon origin to this vertex.

### `Optional`index

index?: number

An integer index of this vertex in an ordered sweep.

### `Optional`round

round?: boolean

Whether to round the input {x,y} coordinates provided.