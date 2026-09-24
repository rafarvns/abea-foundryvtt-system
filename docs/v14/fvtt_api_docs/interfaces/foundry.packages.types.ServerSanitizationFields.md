---
title: "ServerSanitizationFields | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.ServerSanitizationFields.html"
category: "interfaces"
---

# Interface ServerSanitizationFields

Fields that need dedicated server-side handling. Paths are automatically relative to `system`.

interface ServerSanitizationFields {  
Â Â Â Â [filePathFields](#filepathfields): Record<string, string[]>;  
Â Â Â Â [gmOnlyFields](#gmonlyfields): string[];  
Â Â Â Â [htmlFields](#htmlfields): string[];  
}

##### Index

### Properties

[filePathFields](#filepathfields)
[gmOnlyFields](#gmonlyfields)
[htmlFields](#htmlfields)

## Properties

### filePathFields

filePathFields: Record<string, string[]>

File path fields that must be cleaned by the server.
Each key is a field path and the values are an array of keys in [CONST.FILE\_CATEGORIES](../variables/CONST.FILE_CATEGORIES.md).

### gmOnlyFields

gmOnlyFields: string[]

Fields that can only be updated by a GM user.

### htmlFields

htmlFields: string[]

HTML fields that must be cleaned by the server, e.g. "description.value"