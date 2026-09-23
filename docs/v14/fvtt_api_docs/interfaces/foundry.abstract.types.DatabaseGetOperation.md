---
title: "DatabaseGetOperation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DatabaseGetOperation.html"
category: "interfaces"
---

# Interface DatabaseGetOperation

interface DatabaseGetOperation {  
Â Â Â Â [action](#action): "get";  
Â Â Â Â [broadcast](#broadcast)?: false;  
Â Â Â Â [documentName](#documentname): string;  
Â Â Â Â [index](#index)?: boolean;  
Â Â Â Â [indexFields](#indexfields)?: string[];  
Â Â Â Â [pack](#pack)?: string | null;  
Â Â Â Â [parent](#parent)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
Â Â Â Â [parentUuid](#parentuuid)?: string;  
Â Â Â Â [query](#query): Record<string, any>;  
Â Â Â Â [queryOptions](#queryoptions)?: object;  
}

##### Index

### Properties

[action](#action)
[broadcast?](#broadcast)
[documentName](#documentname)
[index?](#index)
[indexFields?](#indexfields)
[pack?](#pack)
[parent?](#parent)
[parentUuid?](#parentuuid)
[query](#query)
[queryOptions?](#queryoptions)

## Properties

### action

action: "get"

The action of this database operation

### `Optional`broadcast

broadcast?: false

Get requests are never broadcast

### documentName

documentName: string

The Document name

### `Optional`index

index?: boolean

Return indices only instead of full Document records

### `Optional`indexFields

indexFields?: string[]

An array of field identifiers which should be indexed

### `Optional`pack

pack?: string | null

A compendium collection ID which contains the Documents

### `Optional`parent

parent?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

A parent Document within which Documents are embedded

### `Optional`parentUuid

parentUuid?: string

A parent Document UUID provided when the parent instance is unavailable

### query

query: Record<string, any>

A query object which identifies the set of Documents retrieved

### `Optional`queryOptions

queryOptions?: object

Additional options passed to the ServerDocument#find API