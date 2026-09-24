---
title: "CardsData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.CardsData.html"
category: "interfaces"
---

# Interface CardsData

interface CardsData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [cards](#cards): [CardData](foundry.documents.types.CardData.md)[];  
Â Â Â Â [description](#description): string;  
Â Â Â Â [displayCount](#displaycount): boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [folder](#folder): string | null;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [img](#img): string | null;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ownership](#ownership): object;  
Â Â Â Â [rotation](#rotation): number;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [system](#system): object;  
Â Â Â Â [type](#type): string;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[cards](#cards)
[description](#description)
[displayCount](#displaycount)
[flags](#flags)
[folder](#folder)
[height](#height)
[img](#img)
[name](#name)
[ownership](#ownership)
[rotation](#rotation)
[sort](#sort)
[system](#system)
[type](#type)
[width](#width)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this stack of Cards document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### cards

cards: [CardData](foundry.documents.types.CardData.md)[]

A collection of Card documents which currently belong to this stack

### description

description: string

A text description of this stack

### displayCount

displayCount: boolean

Whether or not to publicly display the number of cards in this stack

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### folder

folder: string | null

The \_id of a Folder which contains this document

### height

height: number

The visible height of this stack

### img

img: string | null

An image or video which is used to represent the stack of cards

### name

name: string

The text name of this stack

### ownership

ownership: object

An object which configures ownership of this Cards

### rotation

rotation: number

The angle of rotation of this stack

### sort

sort: number

The sort order of this stack relative to others in its parent collection

### system

system: object

Data for a Cards subtype, defined by a System or Module

### type

type: string

The type of this stack, in BaseCards.metadata.types

### width

width: number

The visible width of this stack