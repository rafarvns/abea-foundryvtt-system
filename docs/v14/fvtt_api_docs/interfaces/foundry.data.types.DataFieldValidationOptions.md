---
title: "DataFieldValidationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.DataFieldValidationOptions.html"
category: "interfaces"
---

# Interface DataFieldValidationOptions

interface DataFieldValidationOptions {  
Â Â Â Â [dropInvalidEmbedded](#dropinvalidembedded)?: boolean;  
Â Â Â Â [fallback](#fallback)?: boolean;  
Â Â Â Â [partial](#partial)?: boolean;  
Â Â Â Â [source](#source)?: object;  
Â Â Â Â [strict](#strict)?: boolean;  
}

##### Index

### Properties

[dropInvalidEmbedded?](#dropinvalidembedded)
[fallback?](#fallback)
[partial?](#partial)
[source?](#source)
[strict?](#strict)

## Properties

### `Optional`dropInvalidEmbedded

dropInvalidEmbedded?: boolean

If true, invalid embedded documents will emit a warning and be placed in
the invalidDocuments collection rather than causing the parent to be
considered invalid.

### `Optional`fallback

fallback?: boolean

Whether to allow replacing invalid values with valid fallbacks.

### `Optional`partial

partial?: boolean

Whether this is a partial schema validation, or a complete one.

### `Optional`source

source?: object

The full source object being evaluated.

### `Optional`strict

strict?: boolean

Whether to throw a DataModelValidationFailure (true) or simply return it (false)