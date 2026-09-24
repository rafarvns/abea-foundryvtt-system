---
title: "DiceTermFulfillmentDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DiceTermFulfillmentDescriptor.html"
category: "interfaces"
---

# Interface DiceTermFulfillmentDescriptor

interface DiceTermFulfillmentDescriptor {  
Â Â Â Â [id](#id): string;  
Â Â Â Â [isNew](#isnew)?: boolean;  
Â Â Â Â [method](#method): string;  
Â Â Â Â [term](#term): [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md);  
}

##### Index

### Properties

[id](#id)
[isNew?](#isnew)
[method](#method)
[term](#term)

## Properties

### id

id: string

A unique identifier for the term.

### `Optional`isNew

isNew?: boolean

Was the term newly-added to this resolver?

### method

method: string

The fulfillment method.

### term

term: [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)

The term.