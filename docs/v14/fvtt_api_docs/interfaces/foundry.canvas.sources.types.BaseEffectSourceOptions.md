---
title: "BaseEffectSourceOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.html"
category: "interfaces"
---

# Interface BaseEffectSourceOptions

interface BaseEffectSourceOptions {  
Â Â Â Â [object](#object)?: any;  
Â Â Â Â [sourceId](#sourceid)?: string;  
}

##### Index

### Properties

[object?](#object)
[sourceId?](#sourceid)

## Properties

### `Optional`object

object?: any

An optional PlaceableObject which is responsible for this source

### `Optional`sourceId

sourceId?: string

A unique ID for this source. This will be set automatically if an
object is provided, otherwise is required.