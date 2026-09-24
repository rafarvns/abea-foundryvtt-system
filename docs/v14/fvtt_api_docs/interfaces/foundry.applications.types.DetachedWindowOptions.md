---
title: "DetachedWindowOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.DetachedWindowOptions.html"
category: "interfaces"
---

# Interface DetachedWindowOptions

interface DetachedWindowOptions {  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [position](#position)?: Omit<[ApplicationPosition](foundry.applications.types.ApplicationPosition.md), "scale" | "zIndex">;  
Â Â Â Â [source](#source)?: Window;  
Â Â Â Â [timeout](#timeout)?: number;  
}

##### Index

### Properties

[id?](#id)
[position?](#position)
[source?](#source)
[timeout?](#timeout)

## Properties

### `Optional`id

id?: string

A unique identifier for the detached browser window.

### `Optional`position

position?: Omit<[ApplicationPosition](foundry.applications.types.ApplicationPosition.md), "scale" | "zIndex">

Window position.

### `Optional`source

source?: Window

The window from which to call open(). Defaults to the main workspace window.
Must be the window in which the triggering user gesture occurred, otherwise
the browser may block the popup.

### `Optional`timeout

timeout?: number

The time to wait, in milliseconds, for the window to open before considering
the operation as failed.