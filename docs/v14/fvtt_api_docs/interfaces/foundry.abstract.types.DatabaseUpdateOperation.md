---
title: "DatabaseUpdateOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DatabaseUpdateOperation.html"
category: "interfaces"
---

# Interface DatabaseUpdateOperation

interface DatabaseUpdateOperation {  
Â Â Â Â [\_result](#_result)?: (string | object)[];  
Â Â Â Â [\_updateData](#_updatedata)?: Record<string, object>;  
Â Â Â Â [action](#action): "update";  
Â Â Â Â [broadcast](#broadcast): boolean;  
Â Â Â Â [diff](#diff)?: boolean;  
Â Â Â Â [documentName](#documentname): string;  
Â Â Â Â [dryRun](#dryrun)?: boolean;  
Â Â Â Â [extractedImages](#extractedimages)?: Record<string, string>;  
Â Â Â Â [modifiedTime](#modifiedtime)?: number;  
Â Â Â Â [noHook](#nohook)?: boolean;  
Â Â Â Â [pack](#pack): string | null;  
Â Â Â Â [parent](#parent)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
Â Â Â Â [parentUuid](#parentuuid)?: string | null;  
Â Â Â Â [recursive](#recursive)?: boolean;  
Â Â Â Â [render](#render)?: boolean;  
Â Â Â Â [updates](#updates): object[];  
}

##### Index

### Properties

[\_result?](#_result)
[\_updateData?](#_updatedata)
[action](#action)
[broadcast](#broadcast)
[diff?](#diff)
[documentName](#documentname)
[dryRun?](#dryrun)
[extractedImages?](#extractedimages)
[modifiedTime?](#modifiedtime)
[noHook?](#nohook)
[pack](#pack)
[parent?](#parent)
[parentUuid?](#parentuuid)
[recursive?](#recursive)
[render?](#render)
[updates](#updates)

## Properties

### `Optional`\_result

\_result?: (string | object)[]

Used internally by the server-side backend

### `Optional`\_updateData

\_updateData?: Record<string, object>

Used internally by the server-side backend

### action

action: "update"

The action of this database operation

### broadcast

broadcast: boolean

Whether the database operation is broadcast to other connected clients

### `Optional`diff

diff?: boolean

Difference each update object against current Document data and only use
differential data for the update operation

### documentName

documentName: string

The Document name

### `Optional`dryRun

dryRun?: boolean

Is the operation a dry run? If so, an empty result array is returned
before the Documents are updated.

### `Optional`extractedImages

extractedImages?: Record<string, string>

Base64 images extracted during server-side processing

### `Optional`modifiedTime

modifiedTime?: number

The timestamp when the operation was performed

### `Optional`noHook

noHook?: boolean

Skip dispatch of preUpdate hooks for this operation

### pack

pack: string | null

A compendium collection ID which contains the Documents

### `Optional`parent

parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

A parent Document within which Documents are embedded

### `Optional`parentUuid

parentUuid?: string | null

A parent Document UUID provided when the parent instance is unavailable

### `Optional`recursive

recursive?: boolean

Merge objects recursively. If false, inner objects will be replaced
explicitly. Use with caution!

### `Optional`render

render?: boolean

Re-render Applications whose display depends on the created Documents

### updates

updates: object[]

An array of data objects used to update existing Documents.
Each update object must contain the \_id of the target Document