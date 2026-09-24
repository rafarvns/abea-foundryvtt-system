---
title: "CardData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.CardData.html"
category: "interfaces"
---

# Interface CardData

interface CardData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [back](#back): [CardFaceData](foundry.documents.types.CardFaceData.md);  
Â Â Â Â [description](#description): string;  
Â Â Â Â [drawn](#drawn): boolean;  
Â Â Â Â [face](#face): number | null;  
Â Â Â Â [faces](#faces): [CardFaceData](foundry.documents.types.CardFaceData.md)[];  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [height](#height): number;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [origin](#origin): string;  
Â Â Â Â [rotation](#rotation): number;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [suit](#suit): string;  
Â Â Â Â [system](#system): object;  
Â Â Â Â [type](#type): string;  
Â Â Â Â [value](#value): number | null;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[\_id](#_id)
[back](#back)
[description](#description)
[drawn](#drawn)
[face](#face)
[faces](#faces)
[flags](#flags)
[height](#height)
[name](#name)
[origin](#origin)
[rotation](#rotation)
[sort](#sort)
[suit](#suit)
[system](#system)
[type](#type)
[value](#value)
[width](#width)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Card document

### back

back: [CardFaceData](foundry.documents.types.CardFaceData.md)

An object of face data which describes the back of this card

### description

description: string

A text description of this card which applies to all faces

### drawn

drawn: boolean

Whether this card is currently drawn from its source deck

### face

face: number | null

The index of the currently displayed face, or null if the card is face-down

### faces

faces: [CardFaceData](foundry.documents.types.CardFaceData.md)[]

An array of face data which represent displayable faces of this card

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### height

height: number

The visible height of this card

### name

name: string

The text name of this card

### origin

origin: string

The document ID of the origin deck to which this card belongs

### rotation

rotation: number

The angle of rotation of this card

### sort

sort: number

The sort order of this card relative to others in the same stack

### suit

suit: string

An optional suit designation which is used by default sorting

### system

system: object

Data for a Card subtype, defined by a System or Module

### type

type: string

A category of card (for example, a suit) to which this card belongs

### value

value: number | null

An optional numeric value of the card which is used by default sorting

### width

width: number

The visible width of this card