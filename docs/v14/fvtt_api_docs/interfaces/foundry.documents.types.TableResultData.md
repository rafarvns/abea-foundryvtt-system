---
title: "TableResultData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TableResultData.html"
category: "interfaces"
---

# Interface TableResultData

interface TableResultData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [documentCollection](#documentcollection)?: string;  
Â Â Â Â [documentId](#documentid)?: string;  
Â Â Â Â [drawn](#drawn)?: boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [range](#range)?: number[];  
Â Â Â Â [text](#text)?: string;  
Â Â Â Â [type](#type)?: string;  
Â Â Â Â [weight](#weight)?: number;  
}

##### Index

### Properties

[\_id](#_id)
[documentCollection?](#documentcollection)
[documentId?](#documentid)
[drawn?](#drawn)
[flags](#flags)
[img?](#img)
[range?](#range)
[text?](#text)
[type?](#type)
[weight?](#weight)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this TableResult embedded document

### `Optional`documentCollection

documentCollection?: string

A named collection from which this result is drawn

### `Optional`documentId

documentId?: string

The \_id of a Document within the collection this result references

### `Optional`drawn

drawn?: boolean

Has this result already been drawn (without replacement)

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`img

img?: string

An image file url that represents the table result

### `Optional`range

range?: number[]

A length 2 array of ascending integers which defines the range of dice roll
totals which produce this drawn result

### `Optional`text

text?: string

The text which describes the table result

### `Optional`type

type?: string

A result subtype from CONST.TABLE\_RESULT\_TYPES

### `Optional`weight

weight?: number

The probabilistic weight of this result relative to other results