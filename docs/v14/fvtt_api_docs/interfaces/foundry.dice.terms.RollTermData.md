---
title: "RollTermData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.dice.terms.RollTermData.html"
category: "interfaces"
---

# Interface RollTermData

interface RollTermData {  
Â Â Â Â [class](#class)?: string;  
Â Â Â Â [evaluated](#evaluated)?: boolean;  
Â Â Â Â [options](#options)?: [RollOptions](../types/foundry.dice.RollOptions.md);  
}

##### Index

### Properties

[class?](#class)
[evaluated?](#evaluated)
[options?](#options)

## Properties

### `Optional`class

class?: string

The name of the [foundry.dice.terms.RollTerm](../classes/foundry.dice.terms.RollTerm.md) class with which this data
should be constructed

### `Optional`evaluated

evaluated?: boolean

Has this term been evaluated?

### `Optional`options

options?: [RollOptions](../types/foundry.dice.RollOptions.md)

Options modifying or describing the Roll