---
title: "ResolvedUUID | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.utils.types.ResolvedUUID.html"
category: "interfaces"
---

# Interface ResolvedUUID

interface ResolvedUUID {  
Â Â Â Â [collection](#collection)?: [DocumentCollection](../classes/foundry.documents.abstract.DocumentCollection.md)<any>;  
Â Â Â Â [documentId](#documentid)?: string;  
Â Â Â Â [documentType](#documenttype)?: string;  
Â Â Â Â [embedded](#embedded): string[];  
Â Â Â Â [id](#id): string;  
Â Â Â Â [primaryId](#primaryid)?: string;  
Â Â Â Â [primaryType](#primarytype)?: string;  
Â Â Â Â [type](#type)?: string;  
Â Â Â Â [uuid](#uuid): string;  
}

##### Index

### Properties

[collection?](#collection)
[documentId?](#documentid)
[documentType?](#documenttype)
[embedded](#embedded)
[id](#id)
[primaryId?](#primaryid)
[primaryType?](#primarytype)
[type?](#type)
[uuid](#uuid)

## Properties

### `Optional`collection

collection?: [DocumentCollection](../classes/foundry.documents.abstract.DocumentCollection.md)<any>

The Collection containing the referenced Document unless that Document
is embedded, in which case the Collection of the primary Document.

### `Optional`documentId

documentId?: string

Either the document id or the parent id. Retained for backwards
compatibility.

### `Optional`documentType

documentType?: string

Either the document type or the parent type. Retained for backwards
compatibility.

### embedded

embedded: string[]

Additional Embedded Document parts.

### id

id: string

The ID of the Document referenced.

### `Optional`primaryId

primaryId?: string

The primary Document ID of this UUID. Only present if the Document
is embedded.

### `Optional`primaryType

primaryType?: string

The primary Document type of this UUID. Only present if the Document
is embedded.

### `Optional`type

type?: string

The type of Document referenced. Legacy compendium UUIDs will not
populate this field if the compendium is not active in the World.

### uuid

uuid: string

The original UUID.