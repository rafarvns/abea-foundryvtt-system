---
title: "DataModelSanitizationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.DataModelSanitizationOptions.html"
category: "interfaces"
---

# Interface DataModelSanitizationOptions

interface DataModelSanitizationOptions {  
Â Â Â Â [assetPath](#assetpath)?: string;  
Â Â Â Â [creation](#creation)?: boolean;  
Â Â Â Â [deleteStats](#deletestats)?: boolean;  
Â Â Â Â [skipSystem](#skipsystem)?: boolean;  
Â Â Â Â [user](#user)?: any;  
}

##### Index

### Properties

[assetPath?](#assetpath)
[creation?](#creation)
[deleteStats?](#deletestats)
[skipSystem?](#skipsystem)
[user?](#user)

## Properties

### `Optional`assetPath

assetPath?: string

A file path to which sanitized assets should be persisted to disk

### `Optional`creation

creation?: boolean

Sanitization as part of creation?

### `Optional`deleteStats

deleteStats?: boolean

Clean data out of stats?

### `Optional`skipSystem

skipSystem?: boolean

Skip system sanitization?

### `Optional`user

user?: any

The User performing an operation which requires sanitization