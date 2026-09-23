---
title: "_DataModelConstructionOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types._DataModelConstructionOptions.html"
category: "interfaces"
---

# Interface \_DataModelConstructionOptions

interface \_DataModelConstructionOptions {  
Â Â Â Â [clean](#clean)?: boolean | Omit<DataModelCleaningOptions, "partial">;  
Â Â Â Â [parent](#parent)?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null;  
Â Â Â Â [schema](#schema)?: any;  
}

##### Index

### Properties

[clean?](#clean)
[parent?](#parent)
[schema?](#schema)

## Properties

### `Optional`clean

clean?: boolean | Omit<DataModelCleaningOptions, "partial">

Configuration of data cleaning
steps applied to user input data. This can be explicitly passed as `false`
to skip preprocessing when using data that is known to already be fully
cleaned.

### `Optional`parent

parent?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

A parent DataModel instance to which this DataModel belongs

### `Optional`schema

schema?: any

If we are constructing an embedded model, it may be provided by the
constructing DataModelSchemaField with an instance-specific schema to use