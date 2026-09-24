---
title: "DatabaseCreateOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DatabaseCreateOperation.html"
category: "interfaces"
---

# Interface DatabaseCreateOperation

interface DatabaseCreateOperation {  
Â Â Â Â [\_createData](#_createdata)?: Record<string, object>;  
Â Â Â Â [\_result](#_result)?: (string | object)[];  
Â Â Â Â [action](#action): "create";  
Â Â Â Â [broadcast](#broadcast): boolean;  
Â Â Â Â [controlObject](#controlobject)?: boolean;  
Â Â Â Â [data](#data): object[];  
Â Â Â Â [documentName](#documentname): string;  
Â Â Â Â [dryRun](#dryrun)?: boolean;  
Â Â Â Â [extractedImages](#extractedimages)?: Record<string, string>;  
Â Â Â Â [keepEmbeddedIds](#keepembeddedids)?: boolean;  
Â Â Â Â [keepId](#keepid)?: boolean;  
Â Â Â Â [modifiedTime](#modifiedtime)?: number;  
Â Â Â Â [noHook](#nohook)?: boolean;  
Â Â Â Â [pack](#pack): string | null;  
Â Â Â Â [parent](#parent)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
Â Â Â Â [parentUuid](#parentuuid)?: string | null;  
Â Â Â Â [render](#render)?: boolean;  
Â Â Â Â [renderSheet](#rendersheet)?: boolean;  
}

##### Index

### Properties

[\_createData?](#_createdata)
[\_result?](#_result)
[action](#action)
[broadcast](#broadcast)
[controlObject?](#controlobject)
[data](#data)
[documentName](#documentname)
[dryRun?](#dryrun)
[extractedImages?](#extractedimages)
[keepEmbeddedIds?](#keepembeddedids)
[keepId?](#keepid)
[modifiedTime?](#modifiedtime)
[noHook?](#nohook)
[pack](#pack)
[parent?](#parent)
[parentUuid?](#parentuuid)
[render?](#render)
[renderSheet?](#rendersheet)

## Properties

### `Optional`\_createData

\_createData?: Record<string, object>

Used internally by server-side backend

### `Optional`\_result

\_result?: (string | object)[]

Used internally by the server-side backend

### action

action: "create"

The action of this database operation

### broadcast

broadcast: boolean

Whether the database operation is broadcast to other connected clients

### `Optional`controlObject

controlObject?: boolean

Control the object of any created Documents

### data

data: object[]

An array of data objects from which to create Documents

### documentName

documentName: string

The Document name

### `Optional`dryRun

dryRun?: boolean

Is the operation a dry run? If so, an empty result array is returned
before the Documents are created.

### `Optional`extractedImages

extractedImages?: Record<string, string>

Base64 images extracted during server-side processing

### `Optional`keepEmbeddedIds

keepEmbeddedIds?: boolean

Retain the \_id values of embedded document data instead of generating
new ids for each embedded document

### `Optional`keepId

keepId?: boolean

Retain the \_id values of provided data instead of generating new ids

### `Optional`modifiedTime

modifiedTime?: number

The timestamp when the operation was performed

### `Optional`noHook

noHook?: boolean

Skip dispatch of preCreate hooks for this operation

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

Re-render Applications whose display depends on the created Documents

### `Optional`renderSheet

renderSheet?: boolean

Render the sheet Application for any created Documents