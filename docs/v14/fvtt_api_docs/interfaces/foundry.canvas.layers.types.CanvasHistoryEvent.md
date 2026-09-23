---
title: "CanvasHistoryEvent | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.html"
category: "interfaces"
---

# Interface CanvasHistoryEvent

interface CanvasHistoryEvent {  
Â Â Â Â [data](#data): object[];  
Â Â Â Â [options](#options): object;  
Â Â Â Â [type](#type): "create" | "update" | "delete";  
}

##### Index

### Properties

[data](#data)
[options](#options)
[type](#type)

## Properties

### data

data: object[]

The data corresponding to the action which may later be un-done

### options

options: object

The options of the undo operation

### type

type: "create" | "update" | "delete"

The type of operation stored as history