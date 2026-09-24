---
title: "DataModelCleaningOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.DataModelCleaningOptions.html"
category: "interfaces"
---

# Interface DataModelCleaningOptions

interface DataModelCleaningOptions {  
Â Â Â Â [addTypes](#addtypes)?: boolean;  
Â Â Â Â [copy](#copy)?: boolean;  
Â Â Â Â [expand](#expand)?: boolean;  
Â Â Â Â [migrate](#migrate)?: boolean;  
Â Â Â Â [model](#model)?: boolean;  
Â Â Â Â [partial](#partial)?: boolean;  
Â Â Â Â [persisted](#persisted)?: boolean;  
Â Â Â Â [prune](#prune)?: boolean;  
Â Â Â Â [sanitize](#sanitize)?: boolean | [DataModelSanitizationOptions](foundry.data.types.DataModelSanitizationOptions.md);  
}

##### Index

### Properties

[addTypes?](#addtypes)
[copy?](#copy)
[expand?](#expand)
[migrate?](#migrate)
[model?](#model)
[partial?](#partial)
[persisted?](#persisted)
[prune?](#prune)
[sanitize?](#sanitize)

## Properties

### `Optional`addTypes

addTypes?: boolean

Impute types for polymorphic so that those typed fields can be later used or
validated

### `Optional`copy

copy?: boolean

Copy the provided input data to avoid mutating the provided source

### `Optional`expand

expand?: boolean

Automatically expand any flattened objects encountered during cleaning

### `Optional`migrate

migrate?: boolean

Apply model-specific data migrations

### `Optional`model

model?: boolean

Apply joint model-level cleaning rules

### `Optional`partial

partial?: boolean

Perform partial cleaning only on the subset of keys included in the input
data. If partial is `false`, values for keys missing in the input data will be
imputed if possible

### `Optional`persisted

persisted?: boolean

Remove keys corresponding with non-persisted DataFields.

### `Optional`prune

prune?: boolean

Remove keys which do not belong to the defined data schema

### `Optional`sanitize

sanitize?: boolean | [DataModelSanitizationOptions](foundry.data.types.DataModelSanitizationOptions.md)

Configuration of user input sanitization steps that are
applied as part of cleaning. For internal server-side use only.