---
title: "DatabaseDeleteOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DatabaseDeleteOperation.html"
category: "interfaces"
---

# Interface DatabaseDeleteOperation

interface DatabaseDeleteOperation {  
Â Â Â Â [\_result](#_result)?: (string | object)[];  
Â Â Â Â [action](#action): "delete";  
Â Â Â Â [broadcast](#broadcast): boolean;  
Â Â Â Â [deleteAll](#deleteall)?: boolean;  
Â Â Â Â [documentName](#documentname): string;  
Â Â Â Â [dryRun](#dryrun)?: boolean;  
Â Â Â Â [ids](#ids): string[];  
Â Â Â Â [modifiedTime](#modifiedtime)?: number;  
Â Â Â Â [noHook](#nohook)?: boolean;  
Â Â Â Â [pack](#pack): string | null;  
Â Â Â Â [parent](#parent)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
Â Â Â Â [parentUuid](#parentuuid)?: string | null;  
Â Â Â Â [render](#render)?: boolean;  
Â Â Â Â [replacements](#replacements)?: Record<string, string>;  
}

##### Index

### Properties

[\_result?](#_result)
[action](#action)
[broadcast](#broadcast)
[deleteAll?](#deleteall)
[documentName](#documentname)
[dryRun?](#dryrun)
[ids](#ids)
[modifiedTime?](#modifiedtime)
[noHook?](#nohook)
[pack](#pack)
[parent?](#parent)
[parentUuid?](#parentuuid)
[render?](#render)
[replacements?](#replacements)

## Properties

### `Optional`\_result

\_result?: (string | object)[]

An alias for 'ids' used internally by the server-side backend

### action

action: "delete"

The action of this database operation

### broadcast

broadcast: boolean

Whether the database operation is broadcast to other connected clients

### `Optional`deleteAll

deleteAll?: boolean

Delete all documents in the Collection, regardless of \_id

### documentName

documentName: string

The Document name

### `Optional`dryRun

dryRun?: boolean

Is the operation a dry run? If so, an empty result array is returned
before the Documents are deleted.

### ids

ids: string[]

An array of Document ids which should be deleted

### `Optional`modifiedTime

modifiedTime?: number

The timestamp when the operation was performed

### `Optional`noHook

noHook?: boolean

Skip dispatch of preDelete hooks for this operation

### pack

pack: string | null

A compendium collection ID which contains the Documents

### `Optional`parent

parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

A parent Document within which Documents are embedded

### `Optional`parentUuid

parentUuid?: string | null

A parent Document UUID provided when the parent instance is unavailable

### `Optional`render

render?: boolean

Re-render Applications whose display depends on the deleted Documents

### `Optional`replacements

replacements?: Record<string, string>

The mapping of IDs of deleted Documents to the UUIDs of the
Documents that replace the deleted Documents