---
title: "DataModelUpdateState | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.DataModelUpdateState.html"
category: "interfaces"
---

# Interface DataModelUpdateState

interface DataModelUpdateState {  
Â Â Â Â [cleanOptions](#cleanoptions)?: boolean;  
Â Â Â Â [creation](#creation)?: boolean;  
Â Â Â Â [documentId](#documentid)?: string;  
Â Â Â Â [documentType](#documenttype)?: string;  
Â Â Â Â [expanded](#expanded)?: boolean;  
Â Â Â Â [model](#model)?: any;  
Â Â Â Â [modelSource](#modelsource)?: object;  
Â Â Â Â [modifiedTime](#modifiedtime)?: number;  
Â Â Â Â [sanitization](#sanitization)?: object;  
Â Â Â Â [source](#source)?: any;  
Â Â Â Â [user](#user)?: any;  
}

##### Index

### Properties

[cleanOptions?](#cleanoptions)
[creation?](#creation)
[documentId?](#documentid)
[documentType?](#documenttype)
[expanded?](#expanded)
[model?](#model)
[modelSource?](#modelsource)
[modifiedTime?](#modifiedtime)
[sanitization?](#sanitization)
[source?](#source)
[user?](#user)

## Properties

### `Optional`cleanOptions

cleanOptions?: boolean

Have the [DataModelCleaningOptions](foundry.data.types.DataModelCleaningOptions.md) been fully populated?

### `Optional`creation

creation?: boolean

Are we in the context of a new model creation?

### `Optional`documentId

documentId?: string

In a Document context, records its \_id

### `Optional`documentType

documentType?: string

In a Document context, records its base type

### `Optional`expanded

expanded?: boolean

Has source data already been expanded?

### `Optional`model

model?: any

The DataModel instance being cleaned

### `Optional`modelSource

modelSource?: object

Prior source data at the nearest DataModel root being cleaned

### `Optional`modifiedTime

modifiedTime?: number

In a ServerDocument context, records the timestamp of modification

### `Optional`sanitization

sanitization?: object

Metadata resulting from sanitization workflows

### `Optional`source

source?: any

Prior source data at the current node

### `Optional`user

user?: any

In a ServerDocument context, records the user performing the operation