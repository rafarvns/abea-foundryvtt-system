---
title: "DataModelUpdateOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DataModelUpdateOptions.html"
category: "interfaces"
---

# Interface DataModelUpdateOptions

interface DataModelUpdateOptions {  
Â Â Â Â [clean](#clean)?: boolean | Omit<DataModelCleaningOptions, "partial">;  
Â Â Â Â [dryRun](#dryrun)?: boolean;  
Â Â Â Â [fallback](#fallback)?: boolean;  
Â Â Â Â [recursive](#recursive)?: boolean;  
Â Â Â Â [restoreDelta](#restoredelta)?: boolean;  
Â Â Â Â [user](#user)?: any;  
}

##### Index

### Properties

[clean?](#clean)
[dryRun?](#dryrun)
[fallback?](#fallback)
[recursive?](#recursive)
[restoreDelta?](#restoredelta)
[user?](#user)

## Properties

### `Optional`clean

clean?: boolean | Omit<DataModelCleaningOptions, "partial">

Configuration of data cleaning
steps applied to user input data. This can be explicitly passed as `false`
to skip preprocessing when using data that is known to already be fully
cleaned.

### `Optional`dryRun

dryRun?: boolean

Do not finally apply the change, but instead simulate the update workflow

### `Optional`fallback

fallback?: boolean

Allow automatic fallback to a valid initial value if the value provided for
a field in the model is invalid.

### `Optional`recursive

recursive?: boolean

Apply changes to inner objects recursively rather than replacing the
top-level object. This is automatically re-interpreted as every key of the
update being defined as a ForcedReplacement operator.

### `Optional`restoreDelta

restoreDelta?: boolean

An advanced option used specifically and internally by the ActorDelta model

### `Optional`user

user?: any

Used only by the server to understand update context