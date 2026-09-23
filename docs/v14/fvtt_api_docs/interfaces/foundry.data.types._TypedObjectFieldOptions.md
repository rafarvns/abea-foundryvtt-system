---
title: "_TypedObjectFieldOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types._TypedObjectFieldOptions.html"
category: "interfaces"
---

# Interface \_TypedObjectFieldOptions

interface \_TypedObjectFieldOptions {  
Â Â Â Â [expandKeys](#expandkeys)?: boolean;  
Â Â Â Â [validateKey](#validatekey)?: [TypedObjectKeyValidator](../types/foundry.data.types.TypedObjectKeyValidator.md);  
}

##### Index

### Properties

[expandKeys?](#expandkeys)
[validateKey?](#validatekey)

## Properties

### `Optional`expandKeys

expandKeys?: boolean

Whether to expand dot-delimited keys.

### `Optional`validateKey

validateKey?: [TypedObjectKeyValidator](../types/foundry.data.types.TypedObjectKeyValidator.md)

A predicate to filter out invalid keys.