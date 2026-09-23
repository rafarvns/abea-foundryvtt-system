---
title: "DataModelValidationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DataModelValidationOptions.html"
category: "interfaces"
---

# Interface DataModelValidationOptions

interface DataModelValidationOptions {  
Â Â Â Â [changes](#changes)?: object;  
Â Â Â Â [clean](#clean)?: boolean | Omit<DataModelCleaningOptions, "partial">;  
Â Â Â Â [dropInvalidElements](#dropinvalidelements)?: boolean;  
Â Â Â Â [dropInvalidEmbedded](#dropinvalidembedded)?: boolean;  
Â Â Â Â [fallback](#fallback)?: boolean;  
Â Â Â Â [fields](#fields)?: boolean;  
Â Â Â Â [joint](#joint)?: boolean;  
Â Â Â Â [model](#model)?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>;  
Â Â Â Â [strict](#strict)?: boolean;  
}

##### Index

### Properties

[changes?](#changes)
[clean?](#clean)
[dropInvalidElements?](#dropinvalidelements)
[dropInvalidEmbedded?](#dropinvalidembedded)
[fallback?](#fallback)
[fields?](#fields)
[joint?](#joint)
[model?](#model)
[strict?](#strict)

## Properties

### `Optional`changes

changes?: object

A specific set of proposed changes to validate, rather than the full
source data of the model. This type of validation is redirected to
DataModel#updateSource as a dry-run.

### `Optional`clean

clean?: boolean | Omit<DataModelCleaningOptions, "partial">

Configuration of data cleaning
steps applied to user input data. This can be explicitly passed as `false`
which requires the provided data to already be clean.

### `Optional`dropInvalidElements

dropInvalidElements?: boolean

For Array-like fields, control whether an invalid element is
allowed to be removed from the data in lieu of fallback replacement.

### `Optional`dropInvalidEmbedded

dropInvalidEmbedded?: boolean

If true, invalid embedded documents will emit a warning and be
placed in the invalidDocuments collection rather than causing the parent
to be considered invalid. This option mutates the provided changes.

### `Optional`fallback

fallback?: boolean

Allow replacement of invalid values with valid defaults? This option mutates
the provided changes.

### `Optional`fields

fields?: boolean

Validate each field. Ignored if changes are passed.

### `Optional`joint

joint?: boolean

Perform joint validation on the full data model.
Ignored if changes are passed.

### `Optional`model

model?: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

The data model instance being validated. This is automatically populated
during the model validation flow.

### `Optional`strict

strict?: boolean

Throw an error if validation fails.